var _b=Object.defineProperty;var yb=(n,t,e)=>t in n?_b(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var xb=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var Ue=(n,t,e)=>yb(n,typeof t!="symbol"?t+"":t,e);var aU=xb(sc=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();function py(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var my={exports:{}},zh={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sb=Symbol.for("react.transitional.element"),bb=Symbol.for("react.fragment");function gy(n,t,e){var i=null;if(e!==void 0&&(i=""+e),t.key!==void 0&&(i=""+t.key),"key"in t){e={};for(var s in t)s!=="key"&&(e[s]=t[s])}else e=t;return t=e.ref,{$$typeof:Sb,type:n,key:i,ref:t!==void 0?t:null,props:e}}zh.Fragment=bb;zh.jsx=gy;zh.jsxs=gy;my.exports=zh;var B=my.exports,vy={exports:{}},Xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=Symbol.for("react.transitional.element"),Mb=Symbol.for("react.portal"),Eb=Symbol.for("react.fragment"),wb=Symbol.for("react.strict_mode"),Tb=Symbol.for("react.profiler"),Ab=Symbol.for("react.consumer"),Cb=Symbol.for("react.context"),Rb=Symbol.for("react.forward_ref"),Db=Symbol.for("react.suspense"),Lb=Symbol.for("react.memo"),_y=Symbol.for("react.lazy"),$0=Symbol.iterator;function Nb(n){return n===null||typeof n!="object"?null:(n=$0&&n[$0]||n["@@iterator"],typeof n=="function"?n:null)}var yy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xy=Object.assign,Sy={};function Po(n,t,e){this.props=n,this.context=t,this.refs=Sy,this.updater=e||yy}Po.prototype.isReactComponent={};Po.prototype.setState=function(n,t){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,t,"setState")};Po.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function by(){}by.prototype=Po.prototype;function xm(n,t,e){this.props=n,this.context=t,this.refs=Sy,this.updater=e||yy}var Sm=xm.prototype=new by;Sm.constructor=xm;xy(Sm,Po.prototype);Sm.isPureReactComponent=!0;var J0=Array.isArray,Re={H:null,A:null,T:null,S:null},My=Object.prototype.hasOwnProperty;function bm(n,t,e,i,s,a){return e=a.ref,{$$typeof:ym,type:n,key:t,ref:e!==void 0?e:null,props:a}}function Pb(n,t){return bm(n.type,t,void 0,void 0,void 0,n.props)}function Mm(n){return typeof n=="object"&&n!==null&&n.$$typeof===ym}function Ub(n){var t={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(e){return t[e]})}var tg=/\/+/g;function mf(n,t){return typeof n=="object"&&n!==null&&n.key!=null?Ub(""+n.key):t.toString(36)}function eg(){}function Ob(n){switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:switch(typeof n.status=="string"?n.then(eg,eg):(n.status="pending",n.then(function(t){n.status==="pending"&&(n.status="fulfilled",n.value=t)},function(t){n.status==="pending"&&(n.status="rejected",n.reason=t)})),n.status){case"fulfilled":return n.value;case"rejected":throw n.reason}}throw n}function zr(n,t,e,i,s){var a=typeof n;(a==="undefined"||a==="boolean")&&(n=null);var r=!1;if(n===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(n.$$typeof){case ym:case Mb:r=!0;break;case _y:return r=n._init,zr(r(n._payload),t,e,i,s)}}if(r)return s=s(n),r=i===""?"."+mf(n,0):i,J0(s)?(e="",r!=null&&(e=r.replace(tg,"$&/")+"/"),zr(s,t,e,"",function(c){return c})):s!=null&&(Mm(s)&&(s=Pb(s,e+(s.key==null||n&&n.key===s.key?"":(""+s.key).replace(tg,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(J0(n))for(var l=0;l<n.length;l++)i=n[l],a=o+mf(i,l),r+=zr(i,t,e,a,s);else if(l=Nb(n),typeof l=="function")for(n=l.call(n),l=0;!(i=n.next()).done;)i=i.value,a=o+mf(i,l++),r+=zr(i,t,e,a,s);else if(a==="object"){if(typeof n.then=="function")return zr(Ob(n),t,e,i,s);throw t=String(n),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function wc(n,t,e){if(n==null)return n;var i=[],s=0;return zr(n,i,"","",function(a){return t.call(e,a,s++)}),i}function zb(n){if(n._status===-1){var t=n._result;t=t(),t.then(function(e){(n._status===0||n._status===-1)&&(n._status=1,n._result=e)},function(e){(n._status===0||n._status===-1)&&(n._status=2,n._result=e)}),n._status===-1&&(n._status=0,n._result=t)}if(n._status===1)return n._result.default;throw n._result}var ng=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Ib(){}Xt.Children={map:wc,forEach:function(n,t,e){wc(n,function(){t.apply(this,arguments)},e)},count:function(n){var t=0;return wc(n,function(){t++}),t},toArray:function(n){return wc(n,function(t){return t})||[]},only:function(n){if(!Mm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Xt.Component=Po;Xt.Fragment=Eb;Xt.Profiler=Tb;Xt.PureComponent=xm;Xt.StrictMode=wb;Xt.Suspense=Db;Xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Re;Xt.act=function(){throw Error("act(...) is not supported in production builds of React.")};Xt.cache=function(n){return function(){return n.apply(null,arguments)}};Xt.cloneElement=function(n,t,e){if(n==null)throw Error("The argument must be a React element, but you passed "+n+".");var i=xy({},n.props),s=n.key,a=void 0;if(t!=null)for(r in t.ref!==void 0&&(a=void 0),t.key!==void 0&&(s=""+t.key),t)!My.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=e;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}return bm(n.type,s,void 0,void 0,a,i)};Xt.createContext=function(n){return n={$$typeof:Cb,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null},n.Provider=n,n.Consumer={$$typeof:Ab,_context:n},n};Xt.createElement=function(n,t,e){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)My.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=e;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(n&&n.defaultProps)for(i in r=n.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return bm(n,a,void 0,void 0,null,s)};Xt.createRef=function(){return{current:null}};Xt.forwardRef=function(n){return{$$typeof:Rb,render:n}};Xt.isValidElement=Mm;Xt.lazy=function(n){return{$$typeof:_y,_payload:{_status:-1,_result:n},_init:zb}};Xt.memo=function(n,t){return{$$typeof:Lb,type:n,compare:t===void 0?null:t}};Xt.startTransition=function(n){var t=Re.T,e={};Re.T=e;try{var i=n(),s=Re.S;s!==null&&s(e,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ib,ng)}catch(a){ng(a)}finally{Re.T=t}};Xt.unstable_useCacheRefresh=function(){return Re.H.useCacheRefresh()};Xt.use=function(n){return Re.H.use(n)};Xt.useActionState=function(n,t,e){return Re.H.useActionState(n,t,e)};Xt.useCallback=function(n,t){return Re.H.useCallback(n,t)};Xt.useContext=function(n){return Re.H.useContext(n)};Xt.useDebugValue=function(){};Xt.useDeferredValue=function(n,t){return Re.H.useDeferredValue(n,t)};Xt.useEffect=function(n,t){return Re.H.useEffect(n,t)};Xt.useId=function(){return Re.H.useId()};Xt.useImperativeHandle=function(n,t,e){return Re.H.useImperativeHandle(n,t,e)};Xt.useInsertionEffect=function(n,t){return Re.H.useInsertionEffect(n,t)};Xt.useLayoutEffect=function(n,t){return Re.H.useLayoutEffect(n,t)};Xt.useMemo=function(n,t){return Re.H.useMemo(n,t)};Xt.useOptimistic=function(n,t){return Re.H.useOptimistic(n,t)};Xt.useReducer=function(n,t,e){return Re.H.useReducer(n,t,e)};Xt.useRef=function(n){return Re.H.useRef(n)};Xt.useState=function(n){return Re.H.useState(n)};Xt.useSyncExternalStore=function(n,t,e){return Re.H.useSyncExternalStore(n,t,e)};Xt.useTransition=function(){return Re.H.useTransition()};Xt.version="19.0.0";vy.exports=Xt;var kt=vy.exports;const Ih=py(kt);var Ey={exports:{}},Bh={},wy={exports:{}},Ty={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function t(R,G){var O=R.length;R.push(G);t:for(;0<O;){var W=O-1>>>1,tt=R[W];if(0<s(tt,G))R[W]=G,R[O]=tt,O=W;else break t}}function e(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var G=R[0],O=R.pop();if(O!==G){R[0]=O;t:for(var W=0,tt=R.length,lt=tt>>>1;W<lt;){var rt=2*(W+1)-1,Lt=R[rt],K=rt+1,at=R[K];if(0>s(Lt,O))K<tt&&0>s(at,Lt)?(R[W]=at,R[K]=O,W=K):(R[W]=Lt,R[rt]=O,W=rt);else if(K<tt&&0>s(at,O))R[W]=at,R[K]=O,W=K;else break t}}return G}function s(R,G){var O=R.sortIndex-G.sortIndex;return O!==0?O:R.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var r=Date,o=r.now();n.unstable_now=function(){return r.now()-o}}var l=[],c=[],u=1,f=null,h=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;function y(R){for(var G=e(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=R)i(c),G.sortIndex=G.expirationTime,t(l,G);else break;G=e(c)}}function x(R){if(_=!1,y(R),!g)if(e(l)!==null)g=!0,H();else{var G=e(c);G!==null&&I(x,G.startTime-R)}}var T=!1,b=-1,M=5,D=-1;function w(){return!(n.unstable_now()-D<M)}function S(){if(T){var R=n.unstable_now();D=R;var G=!0;try{t:{g=!1,_&&(_=!1,d(b),b=-1),p=!0;var O=h;try{e:{for(y(R),f=e(l);f!==null&&!(f.expirationTime>R&&w());){var W=f.callback;if(typeof W=="function"){f.callback=null,h=f.priorityLevel;var tt=W(f.expirationTime<=R);if(R=n.unstable_now(),typeof tt=="function"){f.callback=tt,y(R),G=!0;break e}f===e(l)&&i(l),y(R)}else i(l);f=e(l)}if(f!==null)G=!0;else{var lt=e(c);lt!==null&&I(x,lt.startTime-R),G=!1}}break t}finally{f=null,h=O,p=!1}G=void 0}}finally{G?L():T=!1}}}var L;if(typeof v=="function")L=function(){v(S)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,N=F.port2;F.port1.onmessage=S,L=function(){N.postMessage(null)}}else L=function(){m(S,0)};function H(){T||(T=!0,L())}function I(R,G){b=m(function(){R(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,H())},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return e(l)},n.unstable_next=function(R){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var O=h;h=G;try{return R()}finally{h=O}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=h;h=R;try{return G()}finally{h=O}},n.unstable_scheduleCallback=function(R,G,O){var W=n.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?W+O:W):O=W,R){case 1:var tt=-1;break;case 2:tt=250;break;case 5:tt=1073741823;break;case 4:tt=1e4;break;default:tt=5e3}return tt=O+tt,R={id:u++,callback:G,priorityLevel:R,startTime:O,expirationTime:tt,sortIndex:-1},O>W?(R.sortIndex=O,t(c,R),e(l)===null&&R===e(c)&&(_?(d(b),b=-1):_=!0,I(x,O-W))):(R.sortIndex=tt,t(l,R),g||p||(g=!0,H())),R},n.unstable_shouldYield=w,n.unstable_wrapCallback=function(R){var G=h;return function(){var O=h;h=G;try{return R.apply(this,arguments)}finally{h=O}}}})(Ty);wy.exports=Ty;var Bb=wy.exports,Ay={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fb=kt;function Cy(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function zs(){}var Tn={d:{f:zs,r:function(){throw Error(Cy(522))},D:zs,C:zs,L:zs,m:zs,X:zs,S:zs,M:zs},p:0,findDOMNode:null},Hb=Symbol.for("react.portal");function Vb(n,t,e){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hb,key:i==null?null:""+i,children:n,containerInfo:t,implementation:e}}var _l=Fb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Fh(n,t){if(n==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tn;Dn.createPortal=function(n,t){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Cy(299));return Vb(n,t,null,e)};Dn.flushSync=function(n){var t=_l.T,e=Tn.p;try{if(_l.T=null,Tn.p=2,n)return n()}finally{_l.T=t,Tn.p=e,Tn.d.f()}};Dn.preconnect=function(n,t){typeof n=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Tn.d.C(n,t))};Dn.prefetchDNS=function(n){typeof n=="string"&&Tn.d.D(n)};Dn.preinit=function(n,t){if(typeof n=="string"&&t&&typeof t.as=="string"){var e=t.as,i=Fh(e,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;e==="style"?Tn.d.S(n,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):e==="script"&&Tn.d.X(n,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Dn.preinitModule=function(n,t){if(typeof n=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var e=Fh(t.as,t.crossOrigin);Tn.d.M(n,{crossOrigin:e,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Tn.d.M(n)};Dn.preload=function(n,t){if(typeof n=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var e=t.as,i=Fh(e,t.crossOrigin);Tn.d.L(n,e,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Dn.preloadModule=function(n,t){if(typeof n=="string")if(t){var e=Fh(t.as,t.crossOrigin);Tn.d.m(n,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:e,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Tn.d.m(n)};Dn.requestFormReset=function(n){Tn.d.r(n)};Dn.unstable_batchedUpdates=function(n,t){return n(t)};Dn.useFormState=function(n,t,e){return _l.H.useFormState(n,t,e)};Dn.useFormStatus=function(){return _l.H.useHostTransitionStatus()};Dn.version="19.0.0";function Ry(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ry)}catch(n){console.error(n)}}Ry(),Ay.exports=Dn;var kb=Ay.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=Bb,Dy=kt,Gb=kb;function J(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ly(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var jb=Symbol.for("react.element"),Tc=Symbol.for("react.transitional.element"),cl=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),Ny=Symbol.for("react.strict_mode"),Od=Symbol.for("react.profiler"),Wb=Symbol.for("react.provider"),Py=Symbol.for("react.consumer"),ys=Symbol.for("react.context"),Em=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Id=Symbol.for("react.suspense_list"),wm=Symbol.for("react.memo"),Xs=Symbol.for("react.lazy"),Uy=Symbol.for("react.offscreen"),qb=Symbol.for("react.memo_cache_sentinel"),ig=Symbol.iterator;function Go(n){return n===null||typeof n!="object"?null:(n=ig&&n[ig]||n["@@iterator"],typeof n=="function"?n:null)}var Xb=Symbol.for("react.client.reference");function Bd(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Xb?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Gr:return"Fragment";case cl:return"Portal";case Od:return"Profiler";case Ny:return"StrictMode";case zd:return"Suspense";case Id:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ys:return(n.displayName||"Context")+".Provider";case Py:return(n._context.displayName||"Context")+".Consumer";case Em:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case wm:return t=n.displayName||null,t!==null?t:Bd(n.type)||"Memo";case Xs:t=n._payload,n=n._init;try{return Bd(n(t))}catch{}}return null}var Gt=Dy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ee=Object.assign,gf,sg;function ul(n){if(gf===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);gf=t&&t[1]||"",sg=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gf+n+sg}var vf=!1;function _f(n,t){if(!n||vf)return"";vf=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var h=p}Reflect.construct(n,[],f)}else{try{f.call()}catch(p){h=p}n.call(f.prototype)}}else{try{throw Error()}catch(p){h=p}(f=n())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=i&&0<=s);break}}}finally{vf=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?ul(e):""}function Yb(n){switch(n.tag){case 26:case 27:case 5:return ul(n.type);case 16:return ul("Lazy");case 13:return ul("Suspense");case 19:return ul("SuspenseList");case 0:case 15:return n=_f(n.type,!1),n;case 11:return n=_f(n.type.render,!1),n;case 1:return n=_f(n.type,!0),n;default:return""}}function ag(n){try{var t="";do t+=Yb(n),n=n.return;while(n);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function Uo(n){var t=n,e=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,t.flags&4098&&(e=t.return),n=t.return;while(n)}return t.tag===3?e:null}function Oy(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function rg(n){if(Uo(n)!==n)throw Error(J(188))}function Zb(n){var t=n.alternate;if(!t){if(t=Uo(n),t===null)throw Error(J(188));return t!==n?null:n}for(var e=n,i=t;;){var s=e.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){e=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===e)return rg(s),n;if(a===i)return rg(s),t;a=a.sibling}throw Error(J(188))}if(e.return!==i.return)e=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===e){r=!0,e=s,i=a;break}if(o===i){r=!0,i=s,e=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===e){r=!0,e=a,i=s;break}if(o===i){r=!0,i=a,e=s;break}o=o.sibling}if(!r)throw Error(J(189))}}if(e.alternate!==i)throw Error(J(190))}if(e.tag!==3)throw Error(J(188));return e.stateNode.current===e?n:t}function zy(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n;for(n=n.child;n!==null;){if(t=zy(n),t!==null)return t;n=n.sibling}return null}var hl=Array.isArray,Me=Gb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ga={pending:!1,data:null,method:null,action:null},Fd=[],jr=-1;function Yi(n){return{current:n}}function rn(n){0>jr||(n.current=Fd[jr],Fd[jr]=null,jr--)}function Ae(n,t){jr++,Fd[jr]=n.current,n.current=t}var Gi=Yi(null),Vl=Yi(null),na=Yi(null),Yu=Yi(null);function Zu(n,t){switch(Ae(na,t),Ae(Vl,n),Ae(Gi,null),n=t.nodeType,n){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?ov(t):0;break;default:if(n=n===8?t.parentNode:t,t=n.tagName,n=n.namespaceURI)n=ov(n),t=YS(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}rn(Gi),Ae(Gi,t)}function _o(){rn(Gi),rn(Vl),rn(na)}function Hd(n){n.memoizedState!==null&&Ae(Yu,n);var t=Gi.current,e=YS(t,n.type);t!==e&&(Ae(Vl,n),Ae(Gi,e))}function Ku(n){Vl.current===n&&(rn(Gi),rn(Vl)),Yu.current===n&&(rn(Yu),$l._currentValue=Ga)}var Vd=Object.prototype.hasOwnProperty,Tm=$e.unstable_scheduleCallback,yf=$e.unstable_cancelCallback,Kb=$e.unstable_shouldYield,Qb=$e.unstable_requestPaint,ji=$e.unstable_now,$b=$e.unstable_getCurrentPriorityLevel,Iy=$e.unstable_ImmediatePriority,By=$e.unstable_UserBlockingPriority,Qu=$e.unstable_NormalPriority,Jb=$e.unstable_LowPriority,Fy=$e.unstable_IdlePriority,tM=$e.log,eM=$e.unstable_setDisableYieldValue,rc=null,Xn=null;function nM(n){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(rc,n,void 0,(n.current.flags&128)===128)}catch{}}function ta(n){if(typeof tM=="function"&&eM(n),Xn&&typeof Xn.setStrictMode=="function")try{Xn.setStrictMode(rc,n)}catch{}}var Yn=Math.clz32?Math.clz32:aM,iM=Math.log,sM=Math.LN2;function aM(n){return n>>>=0,n===0?32:31-(iM(n)/sM|0)|0}var Ac=128,Cc=4194304;function Na(n){var t=n&42;if(t!==0)return t;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Hh(n,t){var e=n.pendingLanes;if(e===0)return 0;var i=0,s=n.suspendedLanes,a=n.pingedLanes,r=n.warmLanes;n=n.finishedLanes!==0;var o=e&134217727;return o!==0?(e=o&~s,e!==0?i=Na(e):(a&=o,a!==0?i=Na(a):n||(r=o&~r,r!==0&&(i=Na(r))))):(o=e&~s,o!==0?i=Na(o):a!==0?i=Na(a):n||(r=e&~r,r!==0&&(i=Na(r)))),i===0?0:t!==0&&t!==i&&!(t&s)&&(s=i&-i,r=t&-t,s>=r||s===32&&(r&4194176)!==0)?t:i}function oc(n,t){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&t)===0}function rM(n,t){switch(n){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hy(){var n=Ac;return Ac<<=1,!(Ac&4194176)&&(Ac=128),n}function Vy(){var n=Cc;return Cc<<=1,!(Cc&62914560)&&(Cc=4194304),n}function xf(n){for(var t=[],e=0;31>e;e++)t.push(n);return t}function lc(n,t){n.pendingLanes|=t,t!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function oM(n,t,e,i,s,a){var r=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var o=n.entanglements,l=n.expirationTimes,c=n.hiddenUpdates;for(e=r&~e;0<e;){var u=31-Yn(e),f=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];p!==null&&(p.lane&=-536870913)}e&=~f}i!==0&&ky(n,i,0),a!==0&&s===0&&n.tag!==0&&(n.suspendedLanes|=a&~(r&~t))}function ky(n,t,e){n.pendingLanes|=t,n.suspendedLanes&=~t;var i=31-Yn(t);n.entangledLanes|=t,n.entanglements[i]=n.entanglements[i]|1073741824|e&4194218}function Gy(n,t){var e=n.entangledLanes|=t;for(n=n.entanglements;e;){var i=31-Yn(e),s=1<<i;s&t|n[i]&t&&(n[i]|=t),e&=~s}}function jy(n){return n&=-n,2<n?8<n?n&134217727?32:268435456:8:2}function Wy(){var n=Me.p;return n!==0?n:(n=window.event,n===void 0?32:s1(n.type))}function lM(n,t){var e=Me.p;try{return Me.p=n,t()}finally{Me.p=e}}var ga=Math.random().toString(36).slice(2),yn="__reactFiber$"+ga,On="__reactProps$"+ga,Oo="__reactContainer$"+ga,kd="__reactEvents$"+ga,cM="__reactListeners$"+ga,uM="__reactHandles$"+ga,og="__reactResources$"+ga,kl="__reactMarker$"+ga;function Am(n){delete n[yn],delete n[On],delete n[kd],delete n[cM],delete n[uM]}function Ba(n){var t=n[yn];if(t)return t;for(var e=n.parentNode;e;){if(t=e[Oo]||e[yn]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(n=cv(n);n!==null;){if(e=n[yn])return e;n=cv(n)}return t}n=e,e=n.parentNode}return null}function zo(n){if(n=n[yn]||n[Oo]){var t=n.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return n}return null}function fl(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n.stateNode;throw Error(J(33))}function so(n){var t=n[og];return t||(t=n[og]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function sn(n){n[kl]=!0}var qy=new Set,Xy={};function sr(n,t){yo(n,t),yo(n+"Capture",t)}function yo(n,t){for(Xy[n]=t,n=0;n<t.length;n++)qy.add(t[n])}var Ts=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lg={},cg={};function fM(n){return Vd.call(cg,n)?!0:Vd.call(lg,n)?!1:hM.test(n)?cg[n]=!0:(lg[n]=!0,!1)}function Cu(n,t,e){if(fM(t))if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){n.removeAttribute(t);return}}n.setAttribute(t,""+e)}}function Rc(n,t,e){if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttribute(t,""+e)}}function Qi(n,t,e,i){if(i===null)n.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(t,e,""+i)}}function si(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Yy(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dM(n){var t=Yy(n)?"checked":"value",e=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),i=""+n[t];if(!n.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var s=e.get,a=e.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){i=""+r,a.call(this,r)}}),Object.defineProperty(n,t,{enumerable:e.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function $u(n){n._valueTracker||(n._valueTracker=dM(n))}function Zy(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var e=t.getValue(),i="";return n&&(i=Yy(n)?n.checked?"true":"false":n.value),n=i,n!==e?(t.setValue(n),!0):!1}function Ju(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var pM=/[\n"\\]/g;function oi(n){return n.replace(pM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Gd(n,t,e,i,s,a,r,o){n.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?n.type=r:n.removeAttribute("type"),t!=null?r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+si(t)):n.value!==""+si(t)&&(n.value=""+si(t)):r!=="submit"&&r!=="reset"||n.removeAttribute("value"),t!=null?jd(n,r,si(t)):e!=null?jd(n,r,si(e)):i!=null&&n.removeAttribute("value"),s==null&&a!=null&&(n.defaultChecked=!!a),s!=null&&(n.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.name=""+si(o):n.removeAttribute("name")}function Ky(n,t,e,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(n.type=a),t!=null||e!=null){if(!(a!=="submit"&&a!=="reset"||t!=null))return;e=e!=null?""+si(e):"",t=t!=null?""+si(t):e,o||t===n.value||(n.value=t),n.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,n.checked=o?n.checked:!!i,n.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.name=r)}function jd(n,t,e){t==="number"&&Ju(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function ao(n,t,e,i){if(n=n.options,t){t={};for(var s=0;s<e.length;s++)t["$"+e[s]]=!0;for(e=0;e<n.length;e++)s=t.hasOwnProperty("$"+n[e].value),n[e].selected!==s&&(n[e].selected=s),s&&i&&(n[e].defaultSelected=!0)}else{for(e=""+si(e),t=null,s=0;s<n.length;s++){if(n[s].value===e){n[s].selected=!0,i&&(n[s].defaultSelected=!0);return}t!==null||n[s].disabled||(t=n[s])}t!==null&&(t.selected=!0)}}function Qy(n,t,e){if(t!=null&&(t=""+si(t),t!==n.value&&(n.value=t),e==null)){n.defaultValue!==t&&(n.defaultValue=t);return}n.defaultValue=e!=null?""+si(e):""}function $y(n,t,e,i){if(t==null){if(i!=null){if(e!=null)throw Error(J(92));if(hl(i)){if(1<i.length)throw Error(J(93));i=i[0]}e=i}e==null&&(e=""),t=e}e=si(t),n.defaultValue=e,i=n.textContent,i===e&&i!==""&&i!==null&&(n.value=i)}function xo(n,t){if(t){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=t;return}}n.textContent=t}var mM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ug(n,t,e){var i=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?i?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="":i?n.setProperty(t,e):typeof e!="number"||e===0||mM.has(t)?t==="float"?n.cssFloat=e:n[t]=(""+e).trim():n[t]=e+"px"}function Jy(n,t,e){if(t!=null&&typeof t!="object")throw Error(J(62));if(n=n.style,e!=null){for(var i in e)!e.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&e[s]!==i&&ug(n,s,i)}else for(var a in t)t.hasOwnProperty(a)&&ug(n,a,t[a])}function Cm(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ru(n){return vM.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Wd=null;function Rm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Wr=null,ro=null;function hg(n){var t=zo(n);if(t&&(n=t.stateNode)){var e=n[On]||null;t:switch(n=t.stateNode,t.type){case"input":if(Gd(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+oi(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var i=e[t];if(i!==n&&i.form===n.form){var s=i[On]||null;if(!s)throw Error(J(90));Gd(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<e.length;t++)i=e[t],i.form===n.form&&Zy(i)}break t;case"textarea":Qy(n,e.value,e.defaultValue);break t;case"select":t=e.value,t!=null&&ao(n,!!e.multiple,t,!1)}}}var Sf=!1;function tx(n,t,e){if(Sf)return n(t,e);Sf=!0;try{var i=n(t);return i}finally{if(Sf=!1,(Wr!==null||ro!==null)&&(Kh(),Wr&&(t=Wr,n=ro,ro=Wr=null,hg(t),n)))for(t=0;t<n.length;t++)hg(n[t])}}function Gl(n,t){var e=n.stateNode;if(e===null)return null;var i=e[On]||null;if(i===null)return null;e=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break t;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(J(231,t,typeof e));return e}var qd=!1;if(Ts)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){qd=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{qd=!1}var ea=null,Dm=null,Du=null;function ex(){if(Du)return Du;var n,t=Dm,e=t.length,i,s="value"in ea?ea.value:ea.textContent,a=s.length;for(n=0;n<e&&t[n]===s[n];n++);var r=e-n;for(i=1;i<=r&&t[e-i]===s[a-i];i++);return Du=s.slice(n,1<i?1-i:void 0)}function Lu(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function Dc(){return!0}function fg(){return!1}function In(n){function t(e,i,s,a,r){this._reactName=e,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(e=n[o],this[o]=e?e(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Dc:fg,this.isPropagationStopped=fg,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Dc)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Dc)},persist:function(){},isPersistent:Dc}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vh=In(ar),cc=Ee({},ar,{view:0,detail:0}),_M=In(cc),bf,Mf,Wo,kh=Ee({},cc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wo&&(Wo&&n.type==="mousemove"?(bf=n.screenX-Wo.screenX,Mf=n.screenY-Wo.screenY):Mf=bf=0,Wo=n),bf)},movementY:function(n){return"movementY"in n?n.movementY:Mf}}),dg=In(kh),yM=Ee({},kh,{dataTransfer:0}),xM=In(yM),SM=Ee({},cc,{relatedTarget:0}),Ef=In(SM),bM=Ee({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),MM=In(bM),EM=Ee({},ar,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),wM=In(EM),TM=Ee({},ar,{data:0}),pg=In(TM),AM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DM(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=RM[n])?!!t[n]:!1}function Lm(){return DM}var LM=Ee({},cc,{key:function(n){if(n.key){var t=AM[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=Lu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?CM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lm,charCode:function(n){return n.type==="keypress"?Lu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Lu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),NM=In(LM),PM=Ee({},kh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mg=In(PM),UM=Ee({},cc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lm}),OM=In(UM),zM=Ee({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),IM=In(zM),BM=Ee({},kh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),FM=In(BM),HM=Ee({},ar,{newState:0,oldState:0}),VM=In(HM),kM=[9,13,27,32],Nm=Ts&&"CompositionEvent"in window,yl=null;Ts&&"documentMode"in document&&(yl=document.documentMode);var GM=Ts&&"TextEvent"in window&&!yl,nx=Ts&&(!Nm||yl&&8<yl&&11>=yl),gg=" ",vg=!1;function ix(n,t){switch(n){case"keyup":return kM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sx(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qr=!1;function jM(n,t){switch(n){case"compositionend":return sx(t);case"keypress":return t.which!==32?null:(vg=!0,gg);case"textInput":return n=t.data,n===gg&&vg?null:n;default:return null}}function WM(n,t){if(qr)return n==="compositionend"||!Nm&&ix(n,t)?(n=ex(),Du=Dm=ea=null,qr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nx&&t.locale!=="ko"?null:t.data;default:return null}}var qM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _g(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!qM[n.type]:t==="textarea"}function ax(n,t,e,i){Wr?ro?ro.push(i):ro=[i]:Wr=i,t=mh(t,"onChange"),0<t.length&&(e=new Vh("onChange","change",null,e,i),n.push({event:e,listeners:t}))}var xl=null,jl=null;function XM(n){WS(n,0)}function Gh(n){var t=fl(n);if(Zy(t))return n}function yg(n,t){if(n==="change")return t}var rx=!1;if(Ts){var wf;if(Ts){var Tf="oninput"in document;if(!Tf){var xg=document.createElement("div");xg.setAttribute("oninput","return;"),Tf=typeof xg.oninput=="function"}wf=Tf}else wf=!1;rx=wf&&(!document.documentMode||9<document.documentMode)}function Sg(){xl&&(xl.detachEvent("onpropertychange",ox),jl=xl=null)}function ox(n){if(n.propertyName==="value"&&Gh(jl)){var t=[];ax(t,jl,n,Rm(n)),tx(XM,t)}}function YM(n,t,e){n==="focusin"?(Sg(),xl=t,jl=e,xl.attachEvent("onpropertychange",ox)):n==="focusout"&&Sg()}function ZM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Gh(jl)}function KM(n,t){if(n==="click")return Gh(t)}function QM(n,t){if(n==="input"||n==="change")return Gh(t)}function $M(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var Kn=typeof Object.is=="function"?Object.is:$M;function Wl(n,t){if(Kn(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var e=Object.keys(n),i=Object.keys(t);if(e.length!==i.length)return!1;for(i=0;i<e.length;i++){var s=e[i];if(!Vd.call(t,s)||!Kn(n[s],t[s]))return!1}return!0}function bg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Mg(n,t){var e=bg(n);n=0;for(var i;e;){if(e.nodeType===3){if(i=n+e.textContent.length,n<=t&&i>=t)return{node:e,offset:t-n};n=i}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=bg(e)}}function lx(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?lx(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function cx(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var t=Ju(n.document);t instanceof n.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)n=t.contentWindow;else break;t=Ju(n.document)}return t}function Pm(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}function JM(n,t){var e=cx(t);t=n.focusedElem;var i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&lx(t.ownerDocument.documentElement,t)){if(i!==null&&Pm(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,a=Math.min(i.start,s);i=i.end===void 0?a:Math.min(i.end,s),!e.extend&&a>i&&(s=i,i=a,a=s),s=Mg(t,a);var r=Mg(t,i);s&&r&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),a>i?(e.addRange(n),e.extend(r.node,r.offset)):(n.setEnd(r.node,r.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tE=Ts&&"documentMode"in document&&11>=document.documentMode,Xr=null,Xd=null,Sl=null,Yd=!1;function Eg(n,t,e){var i=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Yd||Xr==null||Xr!==Ju(i)||(i=Xr,"selectionStart"in i&&Pm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sl&&Wl(Sl,i)||(Sl=i,i=mh(Xd,"onSelect"),0<i.length&&(t=new Vh("onSelect","select",null,t,e),n.push({event:t,listeners:i}),t.target=Xr)))}function Ma(n,t){var e={};return e[n.toLowerCase()]=t.toLowerCase(),e["Webkit"+n]="webkit"+t,e["Moz"+n]="moz"+t,e}var Yr={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Af={},ux={};Ts&&(ux=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function rr(n){if(Af[n])return Af[n];if(!Yr[n])return n;var t=Yr[n],e;for(e in t)if(t.hasOwnProperty(e)&&e in ux)return Af[n]=t[e];return n}var hx=rr("animationend"),fx=rr("animationiteration"),dx=rr("animationstart"),eE=rr("transitionrun"),nE=rr("transitionstart"),iE=rr("transitioncancel"),px=rr("transitionend"),mx=new Map,wg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ri(n,t){mx.set(n,t),sr(t,[n])}var ii=[],Zr=0,Um=0;function jh(){for(var n=Zr,t=Um=Zr=0;t<n;){var e=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var s=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&gx(e,s,a)}}function Wh(n,t,e,i){ii[Zr++]=n,ii[Zr++]=t,ii[Zr++]=e,ii[Zr++]=i,Um|=i,n.lanes|=i,n=n.alternate,n!==null&&(n.lanes|=i)}function Om(n,t,e,i){return Wh(n,t,e,i),th(n)}function ha(n,t){return Wh(n,null,null,t),th(n)}function gx(n,t,e){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e);for(var s=!1,a=n.return;a!==null;)a.childLanes|=e,i=a.alternate,i!==null&&(i.childLanes|=e),a.tag===22&&(n=a.stateNode,n===null||n._visibility&1||(s=!0)),n=a,a=a.return;s&&t!==null&&n.tag===3&&(a=n.stateNode,s=31-Yn(e),a=a.hiddenUpdates,n=a[s],n===null?a[s]=[t]:n.push(t),t.lane=e|536870912)}function th(n){if(50<Pl)throw Pl=0,gp=null,Error(J(185));for(var t=n.return;t!==null;)n=t,t=n.return;return n.tag===3?n.stateNode:null}var Kr={},Tg=new WeakMap;function li(n,t){if(typeof n=="object"&&n!==null){var e=Tg.get(n);return e!==void 0?e:(t={value:n,source:t,stack:ag(t)},Tg.set(n,t),t)}return{value:n,source:t,stack:ag(t)}}var Qr=[],$r=0,eh=null,nh=0,ai=[],ri=0,ja=null,xs=1,Ss="";function Pa(n,t){Qr[$r++]=nh,Qr[$r++]=eh,eh=n,nh=t}function vx(n,t,e){ai[ri++]=xs,ai[ri++]=Ss,ai[ri++]=ja,ja=n;var i=xs;n=Ss;var s=32-Yn(i)-1;i&=~(1<<s),e+=1;var a=32-Yn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,xs=1<<32-Yn(t)+s|e<<s|i,Ss=a+n}else xs=1<<a|e<<s|i,Ss=n}function zm(n){n.return!==null&&(Pa(n,1),vx(n,1,0))}function Im(n){for(;n===eh;)eh=Qr[--$r],Qr[$r]=null,nh=Qr[--$r],Qr[$r]=null;for(;n===ja;)ja=ai[--ri],ai[ri]=null,Ss=ai[--ri],ai[ri]=null,xs=ai[--ri],ai[ri]=null}var wn=null,fn=null,ne=!1,Si=null,Fi=!1,Zd=Error(J(519));function Za(n){var t=Error(J(418,""));throw ql(li(t,n)),Zd}function Ag(n){var t=n.stateNode,e=n.type,i=n.memoizedProps;switch(t[yn]=n,t[On]=i,e){case"dialog":Qt("cancel",t),Qt("close",t);break;case"iframe":case"object":case"embed":Qt("load",t);break;case"video":case"audio":for(e=0;e<Zl.length;e++)Qt(Zl[e],t);break;case"source":Qt("error",t);break;case"img":case"image":case"link":Qt("error",t),Qt("load",t);break;case"details":Qt("toggle",t);break;case"input":Qt("invalid",t),Ky(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),$u(t);break;case"select":Qt("invalid",t);break;case"textarea":Qt("invalid",t),$y(t,i.value,i.defaultValue,i.children),$u(t)}e=i.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||i.suppressHydrationWarning===!0||XS(t.textContent,e)?(i.popover!=null&&(Qt("beforetoggle",t),Qt("toggle",t)),i.onScroll!=null&&Qt("scroll",t),i.onScrollEnd!=null&&Qt("scrollend",t),i.onClick!=null&&(t.onclick=$h),t=!0):t=!1,t||Za(n)}function Cg(n){for(wn=n.return;wn;)switch(wn.tag){case 3:case 27:Fi=!0;return;case 5:case 13:Fi=!1;return;default:wn=wn.return}}function qo(n){if(n!==wn)return!1;if(!ne)return Cg(n),ne=!0,!1;var t=!1,e;if((e=n.tag!==3&&n.tag!==27)&&((e=n.tag===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||Mp(n.type,n.memoizedProps)),e=!e),e&&(t=!0),t&&fn&&Za(n),Cg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(J(317));t:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8)if(e=n.data,e==="/$"){if(t===0){fn=Ei(n.nextSibling);break t}t--}else e!=="$"&&e!=="$!"&&e!=="$?"||t++;n=n.nextSibling}fn=null}}else fn=wn?Ei(n.stateNode.nextSibling):null;return!0}function uc(){fn=wn=null,ne=!1}function ql(n){Si===null?Si=[n]:Si.push(n)}var bl=Error(J(460)),_x=Error(J(474)),Kd={then:function(){}};function Rg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Lc(){}function yx(n,t,e){switch(e=n[e],e===void 0?n.push(t):e!==t&&(t.then(Lc,Lc),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,n===bl?Error(J(483)):n;default:if(typeof t.status=="string")t.then(Lc,Lc);else{if(n=_e,n!==null&&100<n.shellSuspendCounter)throw Error(J(482));n=t,n.status="pending",n.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,n===bl?Error(J(483)):n}throw Ml=t,bl}}var Ml=null;function Dg(){if(Ml===null)throw Error(J(459));var n=Ml;return Ml=null,n}var oo=null,Xl=0;function Nc(n){var t=Xl;return Xl+=1,oo===null&&(oo=[]),yx(oo,n,t)}function Xo(n,t){t=t.props.ref,n.ref=t!==void 0?t:null}function Pc(n,t){throw t.$$typeof===jb?Error(J(525)):(n=Object.prototype.toString.call(t),Error(J(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)))}function Lg(n){var t=n._init;return t(n._payload)}function xx(n){function t(d,v){if(n){var y=d.deletions;y===null?(d.deletions=[v],d.flags|=16):y.push(v)}}function e(d,v){if(!n)return null;for(;v!==null;)t(d,v),v=v.sibling;return null}function i(d){for(var v=new Map;d!==null;)d.key!==null?v.set(d.key,d):v.set(d.index,d),d=d.sibling;return v}function s(d,v){return d=aa(d,v),d.index=0,d.sibling=null,d}function a(d,v,y){return d.index=y,n?(y=d.alternate,y!==null?(y=y.index,y<v?(d.flags|=33554434,v):y):(d.flags|=33554434,v)):(d.flags|=1048576,v)}function r(d){return n&&d.alternate===null&&(d.flags|=33554434),d}function o(d,v,y,x){return v===null||v.tag!==6?(v=Ff(y,d.mode,x),v.return=d,v):(v=s(v,y),v.return=d,v)}function l(d,v,y,x){var T=y.type;return T===Gr?u(d,v,y.props.children,x,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Xs&&Lg(T)===v.type)?(v=s(v,y.props),Xo(v,y),v.return=d,v):(v=zu(y.type,y.key,y.props,null,d.mode,x),Xo(v,y),v.return=d,v)}function c(d,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Hf(y,d.mode,x),v.return=d,v):(v=s(v,y.children||[]),v.return=d,v)}function u(d,v,y,x,T){return v===null||v.tag!==7?(v=qa(y,d.mode,x,T),v.return=d,v):(v=s(v,y),v.return=d,v)}function f(d,v,y){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Ff(""+v,d.mode,y),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Tc:return y=zu(v.type,v.key,v.props,null,d.mode,y),Xo(y,v),y.return=d,y;case cl:return v=Hf(v,d.mode,y),v.return=d,v;case Xs:var x=v._init;return v=x(v._payload),f(d,v,y)}if(hl(v)||Go(v))return v=qa(v,d.mode,y,null),v.return=d,v;if(typeof v.then=="function")return f(d,Nc(v),y);if(v.$$typeof===ys)return f(d,Uc(d,v),y);Pc(d,v)}return null}function h(d,v,y,x){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:o(d,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Tc:return y.key===T?l(d,v,y,x):null;case cl:return y.key===T?c(d,v,y,x):null;case Xs:return T=y._init,y=T(y._payload),h(d,v,y,x)}if(hl(y)||Go(y))return T!==null?null:u(d,v,y,x,null);if(typeof y.then=="function")return h(d,v,Nc(y),x);if(y.$$typeof===ys)return h(d,v,Uc(d,y),x);Pc(d,y)}return null}function p(d,v,y,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(y)||null,o(v,d,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tc:return d=d.get(x.key===null?y:x.key)||null,l(v,d,x,T);case cl:return d=d.get(x.key===null?y:x.key)||null,c(v,d,x,T);case Xs:var b=x._init;return x=b(x._payload),p(d,v,y,x,T)}if(hl(x)||Go(x))return d=d.get(y)||null,u(v,d,x,T,null);if(typeof x.then=="function")return p(d,v,y,Nc(x),T);if(x.$$typeof===ys)return p(d,v,y,Uc(v,x),T);Pc(v,x)}return null}function g(d,v,y,x){for(var T=null,b=null,M=v,D=v=0,w=null;M!==null&&D<y.length;D++){M.index>D?(w=M,M=null):w=M.sibling;var S=h(d,M,y[D],x);if(S===null){M===null&&(M=w);break}n&&M&&S.alternate===null&&t(d,M),v=a(S,v,D),b===null?T=S:b.sibling=S,b=S,M=w}if(D===y.length)return e(d,M),ne&&Pa(d,D),T;if(M===null){for(;D<y.length;D++)M=f(d,y[D],x),M!==null&&(v=a(M,v,D),b===null?T=M:b.sibling=M,b=M);return ne&&Pa(d,D),T}for(M=i(M);D<y.length;D++)w=p(M,d,D,y[D],x),w!==null&&(n&&w.alternate!==null&&M.delete(w.key===null?D:w.key),v=a(w,v,D),b===null?T=w:b.sibling=w,b=w);return n&&M.forEach(function(L){return t(d,L)}),ne&&Pa(d,D),T}function _(d,v,y,x){if(y==null)throw Error(J(151));for(var T=null,b=null,M=v,D=v=0,w=null,S=y.next();M!==null&&!S.done;D++,S=y.next()){M.index>D?(w=M,M=null):w=M.sibling;var L=h(d,M,S.value,x);if(L===null){M===null&&(M=w);break}n&&M&&L.alternate===null&&t(d,M),v=a(L,v,D),b===null?T=L:b.sibling=L,b=L,M=w}if(S.done)return e(d,M),ne&&Pa(d,D),T;if(M===null){for(;!S.done;D++,S=y.next())S=f(d,S.value,x),S!==null&&(v=a(S,v,D),b===null?T=S:b.sibling=S,b=S);return ne&&Pa(d,D),T}for(M=i(M);!S.done;D++,S=y.next())S=p(M,d,D,S.value,x),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?D:S.key),v=a(S,v,D),b===null?T=S:b.sibling=S,b=S);return n&&M.forEach(function(F){return t(d,F)}),ne&&Pa(d,D),T}function m(d,v,y,x){if(typeof y=="object"&&y!==null&&y.type===Gr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Tc:t:{for(var T=y.key;v!==null;){if(v.key===T){if(T=y.type,T===Gr){if(v.tag===7){e(d,v.sibling),x=s(v,y.props.children),x.return=d,d=x;break t}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Xs&&Lg(T)===v.type){e(d,v.sibling),x=s(v,y.props),Xo(x,y),x.return=d,d=x;break t}e(d,v);break}else t(d,v);v=v.sibling}y.type===Gr?(x=qa(y.props.children,d.mode,x,y.key),x.return=d,d=x):(x=zu(y.type,y.key,y.props,null,d.mode,x),Xo(x,y),x.return=d,d=x)}return r(d);case cl:t:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){e(d,v.sibling),x=s(v,y.children||[]),x.return=d,d=x;break t}else{e(d,v);break}else t(d,v);v=v.sibling}x=Hf(y,d.mode,x),x.return=d,d=x}return r(d);case Xs:return T=y._init,y=T(y._payload),m(d,v,y,x)}if(hl(y))return g(d,v,y,x);if(Go(y)){if(T=Go(y),typeof T!="function")throw Error(J(150));return y=T.call(y),_(d,v,y,x)}if(typeof y.then=="function")return m(d,v,Nc(y),x);if(y.$$typeof===ys)return m(d,v,Uc(d,y),x);Pc(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,v!==null&&v.tag===6?(e(d,v.sibling),x=s(v,y),x.return=d,d=x):(e(d,v),x=Ff(y,d.mode,x),x.return=d,d=x),r(d)):e(d,v)}return function(d,v,y,x){try{Xl=0;var T=m(d,v,y,x);return oo=null,T}catch(M){if(M===bl)throw M;var b=ui(29,M,null,d.mode);return b.lanes=x,b.return=d,b}finally{}}}var Ka=xx(!0),Sx=xx(!1),So=Yi(null),ih=Yi(0);function Ng(n,t){n=Rs,Ae(ih,n),Ae(So,t),Rs=n|t.baseLanes}function Qd(){Ae(ih,Rs),Ae(So,So.current)}function Bm(){Rs=ih.current,rn(So),rn(ih)}var fi=Yi(null),Wi=null;function Zs(n){var t=n.alternate;Ae(Qe,Qe.current&1),Ae(fi,n),Wi===null&&(t===null||So.current!==null||t.memoizedState!==null)&&(Wi=n)}function bx(n){if(n.tag===22){if(Ae(Qe,Qe.current),Ae(fi,n),Wi===null){var t=n.alternate;t!==null&&t.memoizedState!==null&&(Wi=n)}}else Ks()}function Ks(){Ae(Qe,Qe.current),Ae(fi,fi.current)}function bs(n){rn(fi),Wi===n&&(Wi=null),rn(Qe)}var Qe=Yi(0);function sh(n){for(var t=n;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sE=typeof AbortController<"u"?AbortController:function(){var n=[],t=this.signal={aborted:!1,addEventListener:function(e,i){n.push(i)}};this.abort=function(){t.aborted=!0,n.forEach(function(e){return e()})}},aE=$e.unstable_scheduleCallback,rE=$e.unstable_NormalPriority,Ze={$$typeof:ys,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fm(){return{controller:new sE,data:new Map,refCount:0}}function hc(n){n.refCount--,n.refCount===0&&aE(rE,function(){n.controller.abort()})}var El=null,$d=0,bo=0,lo=null;function oE(n,t){if(El===null){var e=El=[];$d=0,bo=l0(),lo={status:"pending",value:void 0,then:function(i){e.push(i)}}}return $d++,t.then(Pg,Pg),t}function Pg(){if(--$d===0&&El!==null){lo!==null&&(lo.status="fulfilled");var n=El;El=null,bo=0,lo=null;for(var t=0;t<n.length;t++)(0,n[t])()}}function lE(n,t){var e=[],i={status:"pending",value:null,reason:null,then:function(s){e.push(s)}};return n.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<e.length;s++)(0,e[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<e.length;s++)(0,e[s])(void 0)}),i}var Ug=Gt.S;Gt.S=function(n,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&oE(n,t),Ug!==null&&Ug(n,t)};var Wa=Yi(null);function Hm(){var n=Wa.current;return n!==null?n:_e.pooledCache}function Nu(n,t){t===null?Ae(Wa,Wa.current):Ae(Wa,t.pool)}function Mx(){var n=Hm();return n===null?null:{parent:Ze._currentValue,pool:n}}var fa=0,Yt=null,fe=null,je=null,ah=!1,co=!1,Qa=!1,rh=0,Yl=0,uo=null,cE=0;function Ie(){throw Error(J(321))}function Vm(n,t){if(t===null)return!1;for(var e=0;e<t.length&&e<n.length;e++)if(!Kn(n[e],t[e]))return!1;return!0}function km(n,t,e,i,s,a){return fa=a,Yt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gt.H=n===null||n.memoizedState===null?or:va,Qa=!1,a=e(i,s),Qa=!1,co&&(a=wx(t,e,i,s)),Ex(n),a}function Ex(n){Gt.H=qi;var t=fe!==null&&fe.next!==null;if(fa=0,je=fe=Yt=null,ah=!1,Yl=0,uo=null,t)throw Error(J(300));n===null||an||(n=n.dependencies,n!==null&&ch(n)&&(an=!0))}function wx(n,t,e,i){Yt=n;var s=0;do{if(co&&(uo=null),Yl=0,co=!1,25<=s)throw Error(J(301));if(s+=1,je=fe=null,n.updateQueue!=null){var a=n.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Gt.H=lr,a=t(e,i)}while(co);return a}function uE(){var n=Gt.H,t=n.useState()[0];return t=typeof t.then=="function"?fc(t):t,n=n.useState()[0],(fe!==null?fe.memoizedState:null)!==n&&(Yt.flags|=1024),t}function Gm(){var n=rh!==0;return rh=0,n}function jm(n,t,e){t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~e}function Wm(n){if(ah){for(n=n.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}ah=!1}fa=0,je=fe=Yt=null,co=!1,Yl=rh=0,uo=null}function Pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Yt.memoizedState=je=n:je=je.next=n,je}function qe(){if(fe===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=fe.next;var t=je===null?Yt.memoizedState:je.next;if(t!==null)je=t,fe=n;else{if(n===null)throw Yt.alternate===null?Error(J(467)):Error(J(310));fe=n,n={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},je===null?Yt.memoizedState=je=n:je=je.next=n}return je}var qh;qh=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function fc(n){var t=Yl;return Yl+=1,uo===null&&(uo=[]),n=yx(uo,n,t),t=Yt,(je===null?t.memoizedState:je.next)===null&&(t=t.alternate,Gt.H=t===null||t.memoizedState===null?or:va),n}function Xh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return fc(n);if(n.$$typeof===ys)return xn(n)}throw Error(J(438,String(n)))}function qm(n){var t=null,e=Yt.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var i=Yt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=qh(),Yt.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(n),i=0;i<n;i++)e[i]=qb;return t.index++,e}function As(n,t){return typeof t=="function"?t(n):t}function Pu(n){var t=qe();return Xm(t,fe,n)}function Xm(n,t,e){var i=n.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=e;var s=n.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=n.baseState,s===null)n.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var f=c.lane&-536870913;if(f!==c.lane?($t&f)===f:(fa&f)===f){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===bo&&(u=!0);else if((fa&h)===h){c=c.next,h===bo&&(u=!0);continue}else f={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Yt.lanes|=h,pa|=h;f=c.action,Qa&&e(a,f),a=c.hasEagerState?c.eagerState:e(a,f)}else h={lane:f,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,Yt.lanes|=f,pa|=f;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Kn(a,n.memoizedState)&&(an=!0,u&&(e=lo,e!==null)))throw e;n.memoizedState=a,n.baseState=r,n.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[n.memoizedState,i.dispatch]}function Cf(n){var t=qe(),e=t.queue;if(e===null)throw Error(J(311));e.lastRenderedReducer=n;var i=e.dispatch,s=e.pending,a=t.memoizedState;if(s!==null){e.pending=null;var r=s=s.next;do a=n(a,r.action),r=r.next;while(r!==s);Kn(a,t.memoizedState)||(an=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),e.lastRenderedState=a}return[a,i]}function Tx(n,t,e){var i=Yt,s=qe(),a=ne;if(a){if(e===void 0)throw Error(J(407));e=e()}else e=t();var r=!Kn((fe||s).memoizedState,e);if(r&&(s.memoizedState=e,an=!0),s=s.queue,Ym(Rx.bind(null,i,s,n),[n]),s.getSnapshot!==t||r||je!==null&&je.memoizedState.tag&1){if(i.flags|=2048,Mo(9,Cx.bind(null,i,s,e,t),{destroy:void 0},null),_e===null)throw Error(J(349));a||fa&60||Ax(i,t,e)}return e}function Ax(n,t,e){n.flags|=16384,n={getSnapshot:t,value:e},t=Yt.updateQueue,t===null?(t=qh(),Yt.updateQueue=t,t.stores=[n]):(e=t.stores,e===null?t.stores=[n]:e.push(n))}function Cx(n,t,e,i){t.value=e,t.getSnapshot=i,Dx(t)&&Lx(n)}function Rx(n,t,e){return e(function(){Dx(t)&&Lx(n)})}function Dx(n){var t=n.getSnapshot;n=n.value;try{var e=t();return!Kn(n,e)}catch{return!0}}function Lx(n){var t=ha(n,2);t!==null&&An(t,n,2)}function Jd(n){var t=Pn();if(typeof n=="function"){var e=n;if(n=e(),Qa){ta(!0);try{e()}finally{ta(!1)}}}return t.memoizedState=t.baseState=n,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:n},t}function Nx(n,t,e,i){return n.baseState=e,Xm(n,fe,typeof i=="function"?i:As)}function hE(n,t,e,i,s){if(Zh(n))throw Error(J(485));if(n=t.action,n!==null){var a={payload:s,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Gt.T!==null?e(!0):a.isTransition=!1,i(a),e=t.pending,e===null?(a.next=t.pending=a,Px(t,a)):(a.next=e.next,t.pending=e.next=a)}}function Px(n,t){var e=t.action,i=t.payload,s=n.state;if(t.isTransition){var a=Gt.T,r={};Gt.T=r;try{var o=e(s,i),l=Gt.S;l!==null&&l(r,o),Og(n,t,o)}catch(c){tp(n,t,c)}finally{Gt.T=a}}else try{a=e(s,i),Og(n,t,a)}catch(c){tp(n,t,c)}}function Og(n,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(i){zg(n,t,i)},function(i){return tp(n,t,i)}):zg(n,t,e)}function zg(n,t,e){t.status="fulfilled",t.value=e,Ux(t),n.state=e,t=n.pending,t!==null&&(e=t.next,e===t?n.pending=null:(e=e.next,t.next=e,Px(n,e)))}function tp(n,t,e){var i=n.pending;if(n.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=e,Ux(t),t=t.next;while(t!==i)}n.action=null}function Ux(n){n=n.listeners;for(var t=0;t<n.length;t++)(0,n[t])()}function Ox(n,t){return t}function zx(n,t){if(ne){var e=_e.formState;if(e!==null){t:{var i=Yt;if(ne){if(fn){e:{for(var s=fn,a=Fi;s.nodeType!==8;){if(!a){s=null;break e}if(s=Ei(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){fn=Ei(s.nextSibling),i=s.data==="F!";break t}}Za(i)}i=!1}i&&(t=e[0])}}return e=Pn(),e.memoizedState=e.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ox,lastRenderedState:t},e.queue=i,e=Jx.bind(null,Yt,i),i.dispatch=e,i=Jd(!1),a=$m.bind(null,Yt,!1,i.queue),i=Pn(),s={state:t,dispatch:null,action:n,pending:null},i.queue=s,e=hE.bind(null,Yt,s,a,e),s.dispatch=e,i.memoizedState=n,[t,e,!1]}function Ix(n){var t=qe();return Bx(t,fe,n)}function Bx(n,t,e){t=Xm(n,t,Ox)[0],n=Pu(As)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?fc(t):t;var i=qe(),s=i.queue,a=s.dispatch;return e!==i.memoizedState&&(Yt.flags|=2048,Mo(9,fE.bind(null,s,e),{destroy:void 0},null)),[t,a,n]}function fE(n,t){n.action=t}function Fx(n){var t=qe(),e=fe;if(e!==null)return Bx(t,e,n);qe(),t=t.memoizedState,e=qe();var i=e.queue.dispatch;return e.memoizedState=n,[t,i,!1]}function Mo(n,t,e,i){return n={tag:n,create:t,inst:e,deps:i,next:null},t=Yt.updateQueue,t===null&&(t=qh(),Yt.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=n.next=n:(i=e.next,e.next=n,n.next=i,t.lastEffect=n),n}function Hx(){return qe().memoizedState}function Uu(n,t,e,i){var s=Pn();Yt.flags|=n,s.memoizedState=Mo(1|t,e,{destroy:void 0},i===void 0?null:i)}function Yh(n,t,e,i){var s=qe();i=i===void 0?null:i;var a=s.memoizedState.inst;fe!==null&&i!==null&&Vm(i,fe.memoizedState.deps)?s.memoizedState=Mo(t,e,a,i):(Yt.flags|=n,s.memoizedState=Mo(1|t,e,a,i))}function Ig(n,t){Uu(8390656,8,n,t)}function Ym(n,t){Yh(2048,8,n,t)}function Vx(n,t){return Yh(4,2,n,t)}function kx(n,t){return Yh(4,4,n,t)}function Gx(n,t){if(typeof t=="function"){n=n();var e=t(n);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function jx(n,t,e){e=e!=null?e.concat([n]):null,Yh(4,4,Gx.bind(null,t,n),e)}function Zm(){}function Wx(n,t){var e=qe();t=t===void 0?null:t;var i=e.memoizedState;return t!==null&&Vm(t,i[1])?i[0]:(e.memoizedState=[n,t],n)}function qx(n,t){var e=qe();t=t===void 0?null:t;var i=e.memoizedState;if(t!==null&&Vm(t,i[1]))return i[0];if(i=n(),Qa){ta(!0);try{n()}finally{ta(!1)}}return e.memoizedState=[i,t],i}function Km(n,t,e){return e===void 0||fa&1073741824?n.memoizedState=t:(n.memoizedState=e,n=US(),Yt.lanes|=n,pa|=n,e)}function Xx(n,t,e,i){return Kn(e,t)?e:So.current!==null?(n=Km(n,e,i),Kn(n,t)||(an=!0),n):fa&42?(n=US(),Yt.lanes|=n,pa|=n,t):(an=!0,n.memoizedState=e)}function Yx(n,t,e,i,s){var a=Me.p;Me.p=a!==0&&8>a?a:8;var r=Gt.T,o={};Gt.T=o,$m(n,!1,t,e);try{var l=s(),c=Gt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=lE(l,i);wl(n,t,u,Zn(n))}else wl(n,t,i,Zn(n))}catch(f){wl(n,t,{then:function(){},status:"rejected",reason:f},Zn())}finally{Me.p=a,Gt.T=r}}function dE(){}function ep(n,t,e,i){if(n.tag!==5)throw Error(J(476));var s=Zx(n).queue;Yx(n,s,t,Ga,e===null?dE:function(){return Kx(n),e(i)})}function Zx(n){var t=n.memoizedState;if(t!==null)return t;t={memoizedState:Ga,baseState:Ga,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:Ga},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:e},next:null},n.memoizedState=t,n=n.alternate,n!==null&&(n.memoizedState=t),t}function Kx(n){var t=Zx(n).next.queue;wl(n,t,{},Zn())}function Qm(){return xn($l)}function Qx(){return qe().memoizedState}function $x(){return qe().memoizedState}function pE(n){for(var t=n.return;t!==null;){switch(t.tag){case 24:case 3:var e=Zn();n=ia(e);var i=sa(t,n,e);i!==null&&(An(i,t,e),Al(i,t,e)),t={cache:Fm()},n.payload=t;return}t=t.return}}function mE(n,t,e){var i=Zn();e={lane:i,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},Zh(n)?tS(t,e):(e=Om(n,t,e,i),e!==null&&(An(e,n,i),eS(e,t,i)))}function Jx(n,t,e){var i=Zn();wl(n,t,e,i)}function wl(n,t,e,i){var s={lane:i,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(Zh(n))tS(t,s);else{var a=n.alternate;if(n.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,e);if(s.hasEagerState=!0,s.eagerState=o,Kn(o,r))return Wh(n,t,s,0),_e===null&&jh(),!1}catch{}finally{}if(e=Om(n,t,s,i),e!==null)return An(e,n,i),eS(e,t,i),!0}return!1}function $m(n,t,e,i){if(i={lane:2,revertLane:l0(),action:i,hasEagerState:!1,eagerState:null,next:null},Zh(n)){if(t)throw Error(J(479))}else t=Om(n,e,i,2),t!==null&&An(t,n,2)}function Zh(n){var t=n.alternate;return n===Yt||t!==null&&t===Yt}function tS(n,t){co=ah=!0;var e=n.pending;e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t}function eS(n,t,e){if(e&4194176){var i=t.lanes;i&=n.pendingLanes,e|=i,t.lanes=e,Gy(n,e)}}var qi={readContext:xn,use:Xh,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie};qi.useCacheRefresh=Ie;qi.useMemoCache=Ie;qi.useHostTransitionStatus=Ie;qi.useFormState=Ie;qi.useActionState=Ie;qi.useOptimistic=Ie;var or={readContext:xn,use:Xh,useCallback:function(n,t){return Pn().memoizedState=[n,t===void 0?null:t],n},useContext:xn,useEffect:Ig,useImperativeHandle:function(n,t,e){e=e!=null?e.concat([n]):null,Uu(4194308,4,Gx.bind(null,t,n),e)},useLayoutEffect:function(n,t){return Uu(4194308,4,n,t)},useInsertionEffect:function(n,t){Uu(4,2,n,t)},useMemo:function(n,t){var e=Pn();t=t===void 0?null:t;var i=n();if(Qa){ta(!0);try{n()}finally{ta(!1)}}return e.memoizedState=[i,t],i},useReducer:function(n,t,e){var i=Pn();if(e!==void 0){var s=e(t);if(Qa){ta(!0);try{e(t)}finally{ta(!1)}}}else s=t;return i.memoizedState=i.baseState=s,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},i.queue=n,n=n.dispatch=mE.bind(null,Yt,n),[i.memoizedState,n]},useRef:function(n){var t=Pn();return n={current:n},t.memoizedState=n},useState:function(n){n=Jd(n);var t=n.queue,e=Jx.bind(null,Yt,t);return t.dispatch=e,[n.memoizedState,e]},useDebugValue:Zm,useDeferredValue:function(n,t){var e=Pn();return Km(e,n,t)},useTransition:function(){var n=Jd(!1);return n=Yx.bind(null,Yt,n.queue,!0,!1),Pn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,t,e){var i=Yt,s=Pn();if(ne){if(e===void 0)throw Error(J(407));e=e()}else{if(e=t(),_e===null)throw Error(J(349));$t&60||Ax(i,t,e)}s.memoizedState=e;var a={value:e,getSnapshot:t};return s.queue=a,Ig(Rx.bind(null,i,a,n),[n]),i.flags|=2048,Mo(9,Cx.bind(null,i,a,e,t),{destroy:void 0},null),e},useId:function(){var n=Pn(),t=_e.identifierPrefix;if(ne){var e=Ss,i=xs;e=(i&~(1<<32-Yn(i)-1)).toString(32)+e,t=":"+t+"R"+e,e=rh++,0<e&&(t+="H"+e.toString(32)),t+=":"}else e=cE++,t=":"+t+"r"+e.toString(32)+":";return n.memoizedState=t},useCacheRefresh:function(){return Pn().memoizedState=pE.bind(null,Yt)}};or.useMemoCache=qm;or.useHostTransitionStatus=Qm;or.useFormState=zx;or.useActionState=zx;or.useOptimistic=function(n){var t=Pn();t.memoizedState=t.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=$m.bind(null,Yt,!0,e),e.dispatch=t,[n,t]};var va={readContext:xn,use:Xh,useCallback:Wx,useContext:xn,useEffect:Ym,useImperativeHandle:jx,useInsertionEffect:Vx,useLayoutEffect:kx,useMemo:qx,useReducer:Pu,useRef:Hx,useState:function(){return Pu(As)},useDebugValue:Zm,useDeferredValue:function(n,t){var e=qe();return Xx(e,fe.memoizedState,n,t)},useTransition:function(){var n=Pu(As)[0],t=qe().memoizedState;return[typeof n=="boolean"?n:fc(n),t]},useSyncExternalStore:Tx,useId:Qx};va.useCacheRefresh=$x;va.useMemoCache=qm;va.useHostTransitionStatus=Qm;va.useFormState=Ix;va.useActionState=Ix;va.useOptimistic=function(n,t){var e=qe();return Nx(e,fe,n,t)};var lr={readContext:xn,use:Xh,useCallback:Wx,useContext:xn,useEffect:Ym,useImperativeHandle:jx,useInsertionEffect:Vx,useLayoutEffect:kx,useMemo:qx,useReducer:Cf,useRef:Hx,useState:function(){return Cf(As)},useDebugValue:Zm,useDeferredValue:function(n,t){var e=qe();return fe===null?Km(e,n,t):Xx(e,fe.memoizedState,n,t)},useTransition:function(){var n=Cf(As)[0],t=qe().memoizedState;return[typeof n=="boolean"?n:fc(n),t]},useSyncExternalStore:Tx,useId:Qx};lr.useCacheRefresh=$x;lr.useMemoCache=qm;lr.useHostTransitionStatus=Qm;lr.useFormState=Fx;lr.useActionState=Fx;lr.useOptimistic=function(n,t){var e=qe();return fe!==null?Nx(e,fe,n,t):(e.baseState=n,[n,e.queue.dispatch])};function Rf(n,t,e,i){t=n.memoizedState,e=e(i,t),e=e==null?t:Ee({},t,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var np={isMounted:function(n){return(n=n._reactInternals)?Uo(n)===n:!1},enqueueSetState:function(n,t,e){n=n._reactInternals;var i=Zn(),s=ia(i);s.payload=t,e!=null&&(s.callback=e),t=sa(n,s,i),t!==null&&(An(t,n,i),Al(t,n,i))},enqueueReplaceState:function(n,t,e){n=n._reactInternals;var i=Zn(),s=ia(i);s.tag=1,s.payload=t,e!=null&&(s.callback=e),t=sa(n,s,i),t!==null&&(An(t,n,i),Al(t,n,i))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var e=Zn(),i=ia(e);i.tag=2,t!=null&&(i.callback=t),t=sa(n,i,e),t!==null&&(An(t,n,e),Al(t,n,e))}};function Bg(n,t,e,i,s,a,r){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Wl(e,i)||!Wl(s,a):!0}function Fg(n,t,e,i){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,i),t.state!==n&&np.enqueueReplaceState(t,t.state,null)}function $a(n,t){var e=t;if("ref"in t){e={};for(var i in t)i!=="ref"&&(e[i]=t[i])}if(n=n.defaultProps){e===t&&(e=Ee({},e));for(var s in n)e[s]===void 0&&(e[s]=n[s])}return e}var oh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function nS(n){oh(n)}function iS(n){console.error(n)}function sS(n){oh(n)}function lh(n,t){try{var e=n.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Hg(n,t,e){try{var i=n.onCaughtError;i(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function ip(n,t,e){return e=ia(e),e.tag=3,e.payload={element:null},e.callback=function(){lh(n,t)},e}function aS(n){return n=ia(n),n.tag=3,n}function rS(n,t,e,i){var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;n.payload=function(){return s(a)},n.callback=function(){Hg(t,e,i)}}var r=e.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Hg(t,e,i),typeof s!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function gE(n,t,e,i,s){if(e.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=e.alternate,t!==null&&dc(t,e,s,!0),e=fi.current,e!==null){switch(e.tag){case 13:return Wi===null?_p():e.alternate===null&&ze===0&&(ze=3),e.flags&=-257,e.flags|=65536,e.lanes=s,i===Kd?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([i]):t.add(i),kf(n,i,s)),!1;case 22:return e.flags|=65536,i===Kd?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([i]):e.add(i)),kf(n,i,s)),!1}throw Error(J(435,e.tag))}return kf(n,i,s),_p(),!1}if(ne)return t=fi.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Zd&&(n=Error(J(422),{cause:i}),ql(li(n,e)))):(i!==Zd&&(t=Error(J(423),{cause:i}),ql(li(t,e))),n=n.current.alternate,n.flags|=65536,s&=-s,n.lanes|=s,i=li(i,e),s=ip(n.stateNode,i,s),Of(n,s),ze!==4&&(ze=2)),!1;var a=Error(J(520),{cause:i});if(a=li(a,e),Ll===null?Ll=[a]:Ll.push(a),ze!==4&&(ze=2),t===null)return!0;i=li(i,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,n=s&-s,e.lanes|=n,n=ip(e.stateNode,i,n),Of(e,n),!1;case 1:if(t=e.type,a=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ra===null||!ra.has(a))))return e.flags|=65536,s&=-s,e.lanes|=s,s=aS(s),rS(s,n,e,i),Of(e,s),!1}e=e.return}while(e!==null);return!1}var oS=Error(J(461)),an=!1;function hn(n,t,e,i){t.child=n===null?Sx(t,null,e,i):Ka(t,n.child,e,i)}function Vg(n,t,e,i,s){e=e.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ja(t),i=km(n,t,e,r,a,s),o=Gm(),n!==null&&!an?(jm(n,t,s),Cs(n,t,s)):(ne&&o&&zm(t),t.flags|=1,hn(n,t,i,s),t.child)}function kg(n,t,e,i,s){if(n===null){var a=e.type;return typeof a=="function"&&!i0(a)&&a.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=a,lS(n,t,a,i,s)):(n=zu(e.type,null,i,t,t.mode,s),n.ref=t.ref,n.return=t,t.child=n)}if(a=n.child,!Jm(n,s)){var r=a.memoizedProps;if(e=e.compare,e=e!==null?e:Wl,e(r,i)&&n.ref===t.ref)return Cs(n,t,s)}return t.flags|=1,n=aa(a,i),n.ref=t.ref,n.return=t,t.child=n}function lS(n,t,e,i,s){if(n!==null){var a=n.memoizedProps;if(Wl(a,i)&&n.ref===t.ref)if(an=!1,t.pendingProps=i=a,Jm(n,s))n.flags&131072&&(an=!0);else return t.lanes=n.lanes,Cs(n,t,s)}return sp(n,t,e,i,s)}function cS(n,t,e){var i=t.pendingProps,s=i.children,a=(t.stateNode._pendingVisibility&2)!==0,r=n!==null?n.memoizedState:null;if(Tl(n,t),i.mode==="hidden"||a){if(t.flags&128){if(i=r!==null?r.baseLanes|e:e,n!==null){for(s=t.child=n.child,a=0;s!==null;)a=a|s.lanes|s.childLanes,s=s.sibling;t.childLanes=a&~i}else t.childLanes=0,t.child=null;return Gg(n,t,i,e)}if(e&536870912)t.memoizedState={baseLanes:0,cachePool:null},n!==null&&Nu(t,r!==null?r.cachePool:null),r!==null?Ng(t,r):Qd(),bx(t);else return t.lanes=t.childLanes=536870912,Gg(n,t,r!==null?r.baseLanes|e:e,e)}else r!==null?(Nu(t,r.cachePool),Ng(t,r),Ks(),t.memoizedState=null):(n!==null&&Nu(t,null),Qd(),Ks());return hn(n,t,s,e),t.child}function Gg(n,t,e,i){var s=Hm();return s=s===null?null:{parent:Ze._currentValue,pool:s},t.memoizedState={baseLanes:e,cachePool:s},n!==null&&Nu(t,null),Qd(),bx(t),n!==null&&dc(n,t,i,!0),null}function Tl(n,t){var e=t.ref;if(e===null)n!==null&&n.ref!==null&&(t.flags|=2097664);else{if(typeof e!="function"&&typeof e!="object")throw Error(J(284));(n===null||n.ref!==e)&&(t.flags|=2097664)}}function sp(n,t,e,i,s){return Ja(t),e=km(n,t,e,i,void 0,s),i=Gm(),n!==null&&!an?(jm(n,t,s),Cs(n,t,s)):(ne&&i&&zm(t),t.flags|=1,hn(n,t,e,s),t.child)}function jg(n,t,e,i,s,a){return Ja(t),t.updateQueue=null,e=wx(t,i,e,s),Ex(n),i=Gm(),n!==null&&!an?(jm(n,t,a),Cs(n,t,a)):(ne&&i&&zm(t),t.flags|=1,hn(n,t,e,a),t.child)}function Wg(n,t,e,i,s){if(Ja(t),t.stateNode===null){var a=Kr,r=e.contextType;typeof r=="object"&&r!==null&&(a=xn(r)),a=new e(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=np,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},t0(t),r=e.contextType,a.context=typeof r=="object"&&r!==null?xn(r):Kr,a.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Rf(t,e,r,i),a.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&np.enqueueReplaceState(a,a.state,null),Rl(t,i,a,s),Cl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(n===null){a=t.stateNode;var o=t.memoizedProps,l=$a(e,o);a.props=l;var c=a.context,u=e.contextType;r=Kr,typeof u=="object"&&u!==null&&(r=xn(u));var f=e.getDerivedStateFromProps;u=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Fg(t,a,i,r),Ys=!1;var h=t.memoizedState;a.state=h,Rl(t,i,a,s),Cl(),c=t.memoizedState,o||h!==c||Ys?(typeof f=="function"&&(Rf(t,e,f,i),c=t.memoizedState),(l=Ys||Bg(t,e,l,i,h,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,up(n,t),r=t.memoizedProps,u=$a(e,r),a.props=u,f=t.pendingProps,h=a.context,c=e.contextType,l=Kr,typeof c=="object"&&c!==null&&(l=xn(c)),o=e.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==f||h!==l)&&Fg(t,a,i,l),Ys=!1,h=t.memoizedState,a.state=h,Rl(t,i,a,s),Cl();var p=t.memoizedState;r!==f||h!==p||Ys||n!==null&&n.dependencies!==null&&ch(n.dependencies)?(typeof o=="function"&&(Rf(t,e,o,i),p=t.memoizedState),(u=Ys||Bg(t,e,u,i,h,p,l)||n!==null&&n.dependencies!==null&&ch(n.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===n.memoizedProps&&h===n.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&h===n.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===n.memoizedProps&&h===n.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&h===n.memoizedState||(t.flags|=1024),i=!1)}return a=i,Tl(n,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,e=i&&typeof e.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,n!==null&&i?(t.child=Ka(t,n.child,null,s),t.child=Ka(t,null,e,s)):hn(n,t,e,s),t.memoizedState=a.state,n=t.child):n=Cs(n,t,s),n}function qg(n,t,e,i){return uc(),t.flags|=256,hn(n,t,e,i),t.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Lf(n){return{baseLanes:n,cachePool:Mx()}}function Nf(n,t,e){return n=n!==null?n.childLanes&~e:0,t&&(n|=hi),n}function uS(n,t,e){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=n!==null&&n.memoizedState===null?!1:(Qe.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,n===null){if(ne){if(s?Zs(t):Ks(),ne){var o=fn,l;if(l=o){t:{for(l=o,o=Fi;l.nodeType!==8;){if(!o){o=null;break t}if(l=Ei(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:ja!==null?{id:xs,overflow:Ss}:null,retryLane:536870912},l=ui(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,wn=t,fn=null,l=!0):l=!1}l||Za(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return o.data==="$!"?t.lanes=16:t.lanes=536870912,null;bs(t)}return o=i.children,i=i.fallback,s?(Ks(),s=t.mode,o=rp({mode:"hidden",children:o},s),i=qa(i,s,e,null),o.return=t,i.return=t,o.sibling=i,t.child=o,s=t.child,s.memoizedState=Lf(e),s.childLanes=Nf(n,r,e),t.memoizedState=Df,i):(Zs(t),ap(t,o))}if(l=n.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Zs(t),t.flags&=-257,t=Pf(n,t,e)):t.memoizedState!==null?(Ks(),t.child=n.child,t.flags|=128,t=null):(Ks(),s=i.fallback,o=t.mode,i=rp({mode:"visible",children:i.children},o),s=qa(s,o,e,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,Ka(t,n.child,null,e),i=t.child,i.memoizedState=Lf(e),i.childLanes=Nf(n,r,e),t.memoizedState=Df,t=s);else if(Zs(t),o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(J(419)),i.stack="",i.digest=r,ql({value:i,source:null,stack:null}),t=Pf(n,t,e)}else if(an||dc(n,t,e,!1),r=(e&n.childLanes)!==0,an||r){if(r=_e,r!==null){if(i=e&-e,i&42)i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=64;break;case 268435456:i=134217728;break;default:i=0}if(i=i&(r.suspendedLanes|e)?0:i,i!==0&&i!==l.retryLane)throw l.retryLane=i,ha(n,i),An(r,n,i),oS}o.data==="$?"||_p(),t=Pf(n,t,e)}else o.data==="$?"?(t.flags|=128,t.child=n.child,t=LE.bind(null,n),o._reactRetry=t,t=null):(n=l.treeContext,fn=Ei(o.nextSibling),wn=t,ne=!0,Si=null,Fi=!1,n!==null&&(ai[ri++]=xs,ai[ri++]=Ss,ai[ri++]=ja,xs=n.id,Ss=n.overflow,ja=t),t=ap(t,i.children),t.flags|=4096);return t}return s?(Ks(),s=i.fallback,o=t.mode,l=n.child,c=l.sibling,i=aa(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&31457280,c!==null?s=aa(c,s):(s=qa(s,o,e,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,o=n.child.memoizedState,o===null?o=Lf(e):(l=o.cachePool,l!==null?(c=Ze._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Mx(),o={baseLanes:o.baseLanes|e,cachePool:l}),s.memoizedState=o,s.childLanes=Nf(n,r,e),t.memoizedState=Df,i):(Zs(t),e=n.child,n=e.sibling,e=aa(e,{mode:"visible",children:i.children}),e.return=t,e.sibling=null,n!==null&&(r=t.deletions,r===null?(t.deletions=[n],t.flags|=16):r.push(n)),t.child=e,t.memoizedState=null,e)}function ap(n,t){return t=rp({mode:"visible",children:t},n.mode),t.return=n,n.child=t}function rp(n,t){return NS(n,t,0,null)}function Pf(n,t,e){return Ka(t,n.child,null,e),n=ap(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function Xg(n,t,e){n.lanes|=t;var i=n.alternate;i!==null&&(i.lanes|=t),lp(n.return,t,e)}function Uf(n,t,e,i,s){var a=n.memoizedState;a===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:e,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=e,a.tailMode=s)}function hS(n,t,e){var i=t.pendingProps,s=i.revealOrder,a=i.tail;if(hn(n,t,i.children,e),i=Qe.current,i&2)i=i&1|2,t.flags|=128;else{if(n!==null&&n.flags&128)t:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xg(n,e,t);else if(n.tag===19)Xg(n,e,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}switch(Ae(Qe,i),s){case"forwards":for(e=t.child,s=null;e!==null;)n=e.alternate,n!==null&&sh(n)===null&&(s=e),e=e.sibling;e=s,e===null?(s=t.child,t.child=null):(s=e.sibling,e.sibling=null),Uf(t,!1,s,e,a);break;case"backwards":for(e=null,s=t.child,t.child=null;s!==null;){if(n=s.alternate,n!==null&&sh(n)===null){t.child=s;break}n=s.sibling,s.sibling=e,e=s,s=n}Uf(t,!0,e,null,a);break;case"together":Uf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cs(n,t,e){if(n!==null&&(t.dependencies=n.dependencies),pa|=t.lanes,!(e&t.childLanes))if(n!==null){if(dc(n,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(n!==null&&t.child!==n.child)throw Error(J(153));if(t.child!==null){for(n=t.child,e=aa(n,n.pendingProps),t.child=e,e.return=t;n.sibling!==null;)n=n.sibling,e=e.sibling=aa(n,n.pendingProps),e.return=t;e.sibling=null}return t.child}function Jm(n,t){return n.lanes&t?!0:(n=n.dependencies,!!(n!==null&&ch(n)))}function vE(n,t,e){switch(t.tag){case 3:Zu(t,t.stateNode.containerInfo),Qs(t,Ze,n.memoizedState.cache),uc();break;case 27:case 5:Hd(t);break;case 4:Zu(t,t.stateNode.containerInfo);break;case 10:Qs(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Zs(t),t.flags|=128,null):e&t.child.childLanes?uS(n,t,e):(Zs(t),n=Cs(n,t,e),n!==null?n.sibling:null);Zs(t);break;case 19:var s=(n.flags&128)!==0;if(i=(e&t.childLanes)!==0,i||(dc(n,t,e,!1),i=(e&t.childLanes)!==0),s){if(i)return hS(n,t,e);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ae(Qe,Qe.current),i)break;return null;case 22:case 23:return t.lanes=0,cS(n,t,e);case 24:Qs(t,Ze,n.memoizedState.cache)}return Cs(n,t,e)}function fS(n,t,e){if(n!==null)if(n.memoizedProps!==t.pendingProps)an=!0;else{if(!Jm(n,e)&&!(t.flags&128))return an=!1,vE(n,t,e);an=!!(n.flags&131072)}else an=!1,ne&&t.flags&1048576&&vx(t,nh,t.index);switch(t.lanes=0,t.tag){case 16:t:{n=t.pendingProps;var i=t.elementType,s=i._init;if(i=s(i._payload),t.type=i,typeof i=="function")i0(i)?(n=$a(i,n),t.tag=1,t=Wg(null,t,i,n,e)):(t.tag=0,t=sp(null,t,i,n,e));else{if(i!=null){if(s=i.$$typeof,s===Em){t.tag=11,t=Vg(null,t,i,n,e);break t}else if(s===wm){t.tag=14,t=kg(null,t,i,n,e);break t}}throw t=Bd(i)||i,Error(J(306,t,""))}}return t;case 0:return sp(n,t,t.type,t.pendingProps,e);case 1:return i=t.type,s=$a(i,t.pendingProps),Wg(n,t,i,s,e);case 3:t:{if(Zu(t,t.stateNode.containerInfo),n===null)throw Error(J(387));var a=t.pendingProps;s=t.memoizedState,i=s.element,up(n,t),Rl(t,a,null,e);var r=t.memoizedState;if(a=r.cache,Qs(t,Ze,a),a!==s.cache&&cp(t,[Ze],e,!0),Cl(),a=r.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=qg(n,t,a,e);break t}else if(a!==i){i=li(Error(J(424)),t),ql(i),t=qg(n,t,a,e);break t}else for(fn=Ei(t.stateNode.containerInfo.firstChild),wn=t,ne=!0,Si=null,Fi=!0,e=Sx(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(uc(),a===i){t=Cs(n,t,e);break t}hn(n,t,a,e)}t=t.child}return t;case 26:return Tl(n,t),n===null?(e=hv(t.type,null,t.pendingProps,null))?t.memoizedState=e:ne||(e=t.type,n=t.pendingProps,i=gh(na.current).createElement(e),i[yn]=t,i[On]=n,mn(i,e,n),sn(i),t.stateNode=i):t.memoizedState=hv(t.type,n.memoizedProps,t.pendingProps,n.memoizedState),null;case 27:return Hd(t),n===null&&ne&&(i=t.stateNode=KS(t.type,t.pendingProps,na.current),wn=t,Fi=!0,fn=Ei(i.firstChild)),i=t.pendingProps.children,n!==null||ne?hn(n,t,i,e):t.child=Ka(t,null,i,e),Tl(n,t),t.child;case 5:return n===null&&ne&&((s=i=fn)&&(i=XE(i,t.type,t.pendingProps,Fi),i!==null?(t.stateNode=i,wn=t,fn=Ei(i.firstChild),Fi=!1,s=!0):s=!1),s||Za(t)),Hd(t),s=t.type,a=t.pendingProps,r=n!==null?n.memoizedProps:null,i=a.children,Mp(s,a)?i=null:r!==null&&Mp(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=km(n,t,uE,null,null,e),$l._currentValue=s),Tl(n,t),hn(n,t,i,e),t.child;case 6:return n===null&&ne&&((n=e=fn)&&(e=YE(e,t.pendingProps,Fi),e!==null?(t.stateNode=e,wn=t,fn=null,n=!0):n=!1),n||Za(t)),null;case 13:return uS(n,t,e);case 4:return Zu(t,t.stateNode.containerInfo),i=t.pendingProps,n===null?t.child=Ka(t,null,i,e):hn(n,t,i,e),t.child;case 11:return Vg(n,t,t.type,t.pendingProps,e);case 7:return hn(n,t,t.pendingProps,e),t.child;case 8:return hn(n,t,t.pendingProps.children,e),t.child;case 12:return hn(n,t,t.pendingProps.children,e),t.child;case 10:return i=t.pendingProps,Qs(t,t.type,i.value),hn(n,t,i.children,e),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ja(t),s=xn(s),i=i(s),t.flags|=1,hn(n,t,i,e),t.child;case 14:return kg(n,t,t.type,t.pendingProps,e);case 15:return lS(n,t,t.type,t.pendingProps,e);case 19:return hS(n,t,e);case 22:return cS(n,t,e);case 24:return Ja(t),i=xn(Ze),n===null?(s=Hm(),s===null&&(s=_e,a=Fm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=e),s=a),t.memoizedState={parent:i,cache:s},t0(t),Qs(t,Ze,s)):(n.lanes&e&&(up(n,t),Rl(t,null,null,e),Cl()),s=n.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Qs(t,Ze,i)):(i=a.cache,Qs(t,Ze,i),i!==s.cache&&cp(t,[Ze],e,!0))),hn(n,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}var op=Yi(null),cr=null,Ms=null;function Qs(n,t,e){Ae(op,t._currentValue),t._currentValue=e}function ws(n){n._currentValue=op.current,rn(op)}function lp(n,t,e){for(;n!==null;){var i=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),n===e)break;n=n.return}}function cp(n,t,e,i){var s=n.child;for(s!==null&&(s.return=n);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=e,o=a.alternate,o!==null&&(o.lanes|=e),lp(a.return,e,n),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(J(341));r.lanes|=e,a=r.alternate,a!==null&&(a.lanes|=e),lp(r,e,n),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===n){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function dc(n,t,e,i){n=null;for(var s=t,a=!1;s!==null;){if(!a){if(s.flags&524288)a=!0;else if(s.flags&262144)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=s.type;Kn(s.pendingProps.value,r.value)||(n!==null?n.push(o):n=[o])}}else if(s===Yu.current){if(r=s.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(n!==null?n.push($l):n=[$l])}s=s.return}n!==null&&cp(t,n,e,i),t.flags|=262144}function ch(n){for(n=n.firstContext;n!==null;){if(!Kn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ja(n){cr=n,Ms=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function xn(n){return dS(cr,n)}function Uc(n,t){return cr===null&&Ja(n),dS(n,t)}function dS(n,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Ms===null){if(n===null)throw Error(J(308));Ms=t,n.dependencies={lanes:0,firstContext:t},n.flags|=524288}else Ms=Ms.next=t;return e}var Ys=!1;function t0(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function up(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ia(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function sa(n,t,e){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,De&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=th(n),gx(n,null,e),t}return Wh(n,i,t,e),th(n)}function Al(n,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194176)!==0)){var i=t.lanes;i&=n.pendingLanes,e|=i,t.lanes=e,Gy(n,e)}}function Of(n,t){var e=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,e===i)){var s=null,a=null;if(e=e.firstBaseUpdate,e!==null){do{var r={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,e=e.next}while(e!==null);a===null?s=a=t:a=a.next=t}else s=a=t;e={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=t:n.next=t,e.lastBaseUpdate=t}var hp=!1;function Cl(){if(hp){var n=lo;if(n!==null)throw n}}function Rl(n,t,e,i){hp=!1;var s=n.updateQueue;Ys=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var f=s.baseState;r=0,u=c=l=null,o=a;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?($t&h)===h:(i&h)===h){h!==0&&h===bo&&(hp=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=n,_=o;h=t;var m=e;switch(_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(m,f,h);break t}f=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(m,f,h):g,h==null)break t;f=Ee({},f,h);break t;case 2:Ys=!0}}h=o.callback,h!==null&&(n.flags|=64,p&&(n.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=f),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),pa|=r,n.lanes=r,n.memoizedState=f}}function pS(n,t){if(typeof n!="function")throw Error(J(191,n));n.call(t)}function mS(n,t){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)pS(e[n],t)}function pc(n,t){try{var e=t.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var s=i.next;e=s;do{if((e.tag&n)===n){i=void 0;var a=e.create,r=e.inst;i=a(),r.destroy=i}e=e.next}while(e!==s)}}catch(o){pe(t,t.return,o)}}function da(n,t,e){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&n)===n){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=e;try{o()}catch(c){pe(s,l,c)}}}i=i.next}while(i!==a)}}catch(c){pe(t,t.return,c)}}function gS(n){var t=n.updateQueue;if(t!==null){var e=n.stateNode;try{mS(t,e)}catch(i){pe(n,n.return,i)}}}function vS(n,t,e){e.props=$a(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(i){pe(n,t,i)}}function Fa(n,t){try{var e=n.ref;if(e!==null){var i=n.stateNode;switch(n.tag){case 26:case 27:case 5:var s=i;break;default:s=i}typeof e=="function"?n.refCleanup=e(s):e.current=s}}catch(a){pe(n,t,a)}}function jn(n,t){var e=n.ref,i=n.refCleanup;if(e!==null)if(typeof i=="function")try{i()}catch(s){pe(n,t,s)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(s){pe(n,t,s)}else e.current=null}function _S(n){var t=n.type,e=n.memoizedProps,i=n.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&i.focus();break t;case"img":e.src?i.src=e.src:e.srcSet&&(i.srcset=e.srcSet)}}catch(s){pe(n,n.return,s)}}function Yg(n,t,e){try{var i=n.stateNode;kE(i,n.type,e,t),i[On]=t}catch(s){pe(n,n.return,s)}}function yS(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function zf(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||yS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function fp(n,t,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,t?e.nodeType===8?e.parentNode.insertBefore(n,t):e.insertBefore(n,t):(e.nodeType===8?(t=e.parentNode,t.insertBefore(n,e)):(t=e,t.appendChild(n)),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=$h));else if(i!==4&&i!==27&&(n=n.child,n!==null))for(fp(n,t,e),n=n.sibling;n!==null;)fp(n,t,e),n=n.sibling}function uh(n,t,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,t?e.insertBefore(n,t):e.appendChild(n);else if(i!==4&&i!==27&&(n=n.child,n!==null))for(uh(n,t,e),n=n.sibling;n!==null;)uh(n,t,e),n=n.sibling}var ps=!1,Oe=!1,If=!1,Zg=typeof WeakSet=="function"?WeakSet:Set,nn=null,Kg=!1;function _E(n,t){if(n=n.containerInfo,Sp=xh,n=cx(n),Pm(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else t:{e=(e=n.ownerDocument)&&e.defaultView||window;var i=e.getSelection&&e.getSelection();if(i&&i.rangeCount!==0){e=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{e.nodeType,a.nodeType}catch{e=null;break t}var r=0,o=-1,l=-1,c=0,u=0,f=n,h=null;e:for(;;){for(var p;f!==e||s!==0&&f.nodeType!==3||(o=r+s),f!==a||i!==0&&f.nodeType!==3||(l=r+i),f.nodeType===3&&(r+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break e;if(h===e&&++c===s&&(o=r),h===a&&++u===i&&(l=r),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}e=o===-1||l===-1?null:{start:o,end:l}}else e=null}e=e||{start:0,end:0}}else e=null;for(bp={focusedElem:n,selectionRange:e},xh=!1,nn=t;nn!==null;)if(t=nn,n=t.child,(t.subtreeFlags&1028)!==0&&n!==null)n.return=t,nn=n;else for(;nn!==null;){switch(t=nn,a=t.alternate,n=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(n&1024&&a!==null){n=void 0,e=t,s=a.memoizedProps,a=a.memoizedState,i=e.stateNode;try{var g=$a(e.type,s,e.elementType===e.type);n=i.getSnapshotBeforeUpdate(g,a),i.__reactInternalSnapshotBeforeUpdate=n}catch(_){pe(e,e.return,_)}}break;case 3:if(n&1024){if(n=t.stateNode.containerInfo,e=n.nodeType,e===9)Ep(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Ep(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(n&1024)throw Error(J(163))}if(n=t.sibling,n!==null){n.return=t.return,nn=n;break}nn=t.return}return g=Kg,Kg=!1,g}function xS(n,t,e){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ji(n,e),i&4&&pc(5,e);break;case 1:if(Ji(n,e),i&4)if(n=e.stateNode,t===null)try{n.componentDidMount()}catch(o){pe(e,e.return,o)}else{var s=$a(e.type,t.memoizedProps);t=t.memoizedState;try{n.componentDidUpdate(s,t,n.__reactInternalSnapshotBeforeUpdate)}catch(o){pe(e,e.return,o)}}i&64&&gS(e),i&512&&Fa(e,e.return);break;case 3:if(Ji(n,e),i&64&&(i=e.updateQueue,i!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{mS(i,n)}catch(o){pe(e,e.return,o)}}break;case 26:Ji(n,e),i&512&&Fa(e,e.return);break;case 27:case 5:Ji(n,e),t===null&&i&4&&_S(e),i&512&&Fa(e,e.return);break;case 12:Ji(n,e);break;case 13:Ji(n,e),i&4&&MS(n,e);break;case 22:if(s=e.memoizedState!==null||ps,!s){t=t!==null&&t.memoizedState!==null||Oe;var a=ps,r=Oe;ps=s,(Oe=t)&&!r?qs(n,e,(e.subtreeFlags&8772)!==0):Ji(n,e),ps=a,Oe=r}i&512&&(e.memoizedProps.mode==="manual"?Fa(e,e.return):jn(e,e.return));break;default:Ji(n,e)}}function SS(n){var t=n.alternate;t!==null&&(n.alternate=null,SS(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&Am(t)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ke=null,kn=!1;function $i(n,t,e){for(e=e.child;e!==null;)bS(n,t,e),e=e.sibling}function bS(n,t,e){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(rc,e)}catch{}switch(e.tag){case 26:Oe||jn(e,t),$i(n,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Oe||jn(e,t);var i=ke,s=kn;for(ke=e.stateNode,$i(n,t,e),e=e.stateNode,t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Am(e),ke=i,kn=s;break;case 5:Oe||jn(e,t);case 6:s=ke;var a=kn;if(ke=null,$i(n,t,e),ke=s,kn=a,ke!==null)if(kn)try{n=ke,i=e.stateNode,n.nodeType===8?n.parentNode.removeChild(i):n.removeChild(i)}catch(r){pe(e,t,r)}else try{ke.removeChild(e.stateNode)}catch(r){pe(e,t,r)}break;case 18:ke!==null&&(kn?(t=ke,e=e.stateNode,t.nodeType===8?Zf(t.parentNode,e):t.nodeType===1&&Zf(t,e),ec(t)):Zf(ke,e.stateNode));break;case 4:i=ke,s=kn,ke=e.stateNode.containerInfo,kn=!0,$i(n,t,e),ke=i,kn=s;break;case 0:case 11:case 14:case 15:Oe||da(2,e,t),Oe||da(4,e,t),$i(n,t,e);break;case 1:Oe||(jn(e,t),i=e.stateNode,typeof i.componentWillUnmount=="function"&&vS(e,t,i)),$i(n,t,e);break;case 21:$i(n,t,e);break;case 22:Oe||jn(e,t),Oe=(i=Oe)||e.memoizedState!==null,$i(n,t,e),Oe=i;break;default:$i(n,t,e)}}function MS(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ec(n)}catch(e){pe(t,t.return,e)}}function yE(n){switch(n.tag){case 13:case 19:var t=n.stateNode;return t===null&&(t=n.stateNode=new Zg),t;case 22:return n=n.stateNode,t=n._retryCache,t===null&&(t=n._retryCache=new Zg),t;default:throw Error(J(435,n.tag))}}function Bf(n,t){var e=yE(n);t.forEach(function(i){var s=NE.bind(null,n,i);e.has(i)||(e.add(i),i.then(s,s))})}function Jn(n,t){var e=t.deletions;if(e!==null)for(var i=0;i<e.length;i++){var s=e[i],a=n,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:case 5:ke=o.stateNode,kn=!1;break t;case 3:ke=o.stateNode.containerInfo,kn=!0;break t;case 4:ke=o.stateNode.containerInfo,kn=!0;break t}o=o.return}if(ke===null)throw Error(J(160));bS(a,r,s),ke=null,kn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)ES(t,n),t=t.sibling}var yi=null;function ES(n,t){var e=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Jn(t,n),ti(n),i&4&&(da(3,n,n.return),pc(3,n),da(5,n,n.return));break;case 1:Jn(t,n),ti(n),i&512&&(Oe||e===null||jn(e,e.return)),i&64&&ps&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?i:e.concat(i))));break;case 26:var s=yi;if(Jn(t,n),ti(n),i&512&&(Oe||e===null||jn(e,e.return)),i&4){var a=e!==null?e.memoizedState:null;if(i=n.memoizedState,e===null)if(i===null)if(n.stateNode===null){t:{i=n.type,e=n.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[kl]||a[yn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),mn(a,i,e),a[yn]=n,sn(a),i=a;break t;case"link":var r=dv("link","href",s).get(i+(e.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(e.href==null?null:e.href)&&a.getAttribute("rel")===(e.rel==null?null:e.rel)&&a.getAttribute("title")===(e.title==null?null:e.title)&&a.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),mn(a,i,e),s.head.appendChild(a);break;case"meta":if(r=dv("meta","content",s).get(i+(e.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(e.content==null?null:""+e.content)&&a.getAttribute("name")===(e.name==null?null:e.name)&&a.getAttribute("property")===(e.property==null?null:e.property)&&a.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&a.getAttribute("charset")===(e.charSet==null?null:e.charSet)){r.splice(o,1);break e}}a=s.createElement(i),mn(a,i,e),s.head.appendChild(a);break;default:throw Error(J(468,i))}a[yn]=n,sn(a),i=a}n.stateNode=i}else pv(s,n.type,n.stateNode);else n.stateNode=fv(s,i,n.memoizedProps);else a!==i?(a===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):a.count--,i===null?pv(s,n.type,n.stateNode):fv(s,i,n.memoizedProps)):i===null&&n.stateNode!==null&&Yg(n,n.memoizedProps,e.memoizedProps)}break;case 27:if(i&4&&n.alternate===null){s=n.stateNode,a=n.memoizedProps;try{for(var l=s.firstChild;l;){var c=l.nextSibling,u=l.nodeName;l[kl]||u==="HEAD"||u==="BODY"||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||s.removeChild(l),l=c}for(var f=n.type,h=s.attributes;h.length;)s.removeAttributeNode(h[0]);mn(s,f,a),s[yn]=n,s[On]=a}catch(g){pe(n,n.return,g)}}case 5:if(Jn(t,n),ti(n),i&512&&(Oe||e===null||jn(e,e.return)),n.flags&32){s=n.stateNode;try{xo(s,"")}catch(g){pe(n,n.return,g)}}i&4&&n.stateNode!=null&&(s=n.memoizedProps,Yg(n,s,e!==null?e.memoizedProps:s)),i&1024&&(If=!0);break;case 6:if(Jn(t,n),ti(n),i&4){if(n.stateNode===null)throw Error(J(162));i=n.memoizedProps,e=n.stateNode;try{e.nodeValue=i}catch(g){pe(n,n.return,g)}}break;case 3:if(Bu=null,s=yi,yi=vh(t.containerInfo),Jn(t,n),yi=s,ti(n),i&4&&e!==null&&e.memoizedState.isDehydrated)try{ec(t.containerInfo)}catch(g){pe(n,n.return,g)}If&&(If=!1,wS(n));break;case 4:i=yi,yi=vh(n.stateNode.containerInfo),Jn(t,n),ti(n),yi=i;break;case 12:Jn(t,n),ti(n);break;case 13:Jn(t,n),ti(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(r0=ji()),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Bf(n,i)));break;case 22:if(i&512&&(Oe||e===null||jn(e,e.return)),l=n.memoizedState!==null,c=e!==null&&e.memoizedState!==null,u=ps,f=Oe,ps=u||l,Oe=f||c,Jn(t,n),Oe=f,ps=u,ti(n),t=n.stateNode,t._current=n,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,i&8192&&(t._visibility=l?t._visibility&-2:t._visibility|1,l&&(t=ps||Oe,e===null||c||t||Ir(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))t:for(e=null,t=n;;){if(t.tag===5||t.tag===26||t.tag===27){if(e===null){c=e=t;try{if(s=c.stateNode,l)a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{r=c.stateNode,o=c.memoizedProps.style;var p=o!=null&&o.hasOwnProperty("display")?o.display:null;r.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(g){pe(c,c.return,g)}}}else if(t.tag===6){if(e===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(g){pe(c,c.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===n)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=n.updateQueue,i!==null&&(e=i.retryQueue,e!==null&&(i.retryQueue=null,Bf(n,e))));break;case 19:Jn(t,n),ti(n),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Bf(n,i)));break;case 21:break;default:Jn(t,n),ti(n)}}function ti(n){var t=n.flags;if(t&2){try{if(n.tag!==27){t:{for(var e=n.return;e!==null;){if(yS(e)){var i=e;break t}e=e.return}throw Error(J(160))}switch(i.tag){case 27:var s=i.stateNode,a=zf(n);uh(n,a,s);break;case 5:var r=i.stateNode;i.flags&32&&(xo(r,""),i.flags&=-33);var o=zf(n);uh(n,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,c=zf(n);fp(n,c,l);break;default:throw Error(J(161))}}}catch(u){pe(n,n.return,u)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function wS(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var t=n;wS(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),n=n.sibling}}function Ji(n,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)xS(n,t.alternate,t),t=t.sibling}function Ir(n){for(n=n.child;n!==null;){var t=n;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),Ir(t);break;case 1:jn(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&vS(t,t.return,e),Ir(t);break;case 26:case 27:case 5:jn(t,t.return),Ir(t);break;case 22:jn(t,t.return),t.memoizedState===null&&Ir(t);break;default:Ir(t)}n=n.sibling}}function qs(n,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=n,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:qs(s,a,e),pc(4,a);break;case 1:if(qs(s,a,e),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){pe(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)pS(l[s],o)}catch(c){pe(i,i.return,c)}}e&&r&64&&gS(a),Fa(a,a.return);break;case 26:case 27:case 5:qs(s,a,e),e&&i===null&&r&4&&_S(a),Fa(a,a.return);break;case 12:qs(s,a,e);break;case 13:qs(s,a,e),e&&r&4&&MS(s,a);break;case 22:a.memoizedState===null&&qs(s,a,e),Fa(a,a.return);break;default:qs(s,a,e)}t=t.sibling}}function e0(n,t){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&hc(e))}function n0(n,t){n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&hc(n))}function Is(n,t,e,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)TS(n,t,e,i),t=t.sibling}function TS(n,t,e,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Is(n,t,e,i),s&2048&&pc(9,t);break;case 3:Is(n,t,e,i),s&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&hc(n)));break;case 12:if(s&2048){Is(n,t,e,i),n=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(l){pe(t,t.return,l)}}else Is(n,t,e,i);break;case 23:break;case 22:a=t.stateNode,t.memoizedState!==null?a._visibility&4?Is(n,t,e,i):Dl(n,t):a._visibility&4?Is(n,t,e,i):(a._visibility|=4,Br(n,t,e,i,(t.subtreeFlags&10256)!==0)),s&2048&&e0(t.alternate,t);break;case 24:Is(n,t,e,i),s&2048&&n0(t.alternate,t);break;default:Is(n,t,e,i)}}function Br(n,t,e,i,s){for(s=s&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var a=n,r=t,o=e,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Br(a,r,o,l,s),pc(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&4?Br(a,r,o,l,s):Dl(a,r):(u._visibility|=4,Br(a,r,o,l,s)),s&&c&2048&&e0(r.alternate,r);break;case 24:Br(a,r,o,l,s),s&&c&2048&&n0(r.alternate,r);break;default:Br(a,r,o,l,s)}t=t.sibling}}function Dl(n,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=n,i=t,s=i.flags;switch(i.tag){case 22:Dl(e,i),s&2048&&e0(i.alternate,i);break;case 24:Dl(e,i),s&2048&&n0(i.alternate,i);break;default:Dl(e,i)}t=t.sibling}}var dl=8192;function pr(n){if(n.subtreeFlags&dl)for(n=n.child;n!==null;)AS(n),n=n.sibling}function AS(n){switch(n.tag){case 26:pr(n),n.flags&dl&&n.memoizedState!==null&&ow(yi,n.memoizedState,n.memoizedProps);break;case 5:pr(n);break;case 3:case 4:var t=yi;yi=vh(n.stateNode.containerInfo),pr(n),yi=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=dl,dl=16777216,pr(n),dl=t):pr(n));break;default:pr(n)}}function CS(n){var t=n.alternate;if(t!==null&&(n=t.child,n!==null)){t.child=null;do t=n.sibling,n.sibling=null,n=t;while(n!==null)}}function Yo(n){var t=n.deletions;if(n.flags&16){if(t!==null)for(var e=0;e<t.length;e++){var i=t[e];nn=i,DS(i,n)}CS(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)RS(n),n=n.sibling}function RS(n){switch(n.tag){case 0:case 11:case 15:Yo(n),n.flags&2048&&da(9,n,n.return);break;case 3:Yo(n);break;case 12:Yo(n);break;case 22:var t=n.stateNode;n.memoizedState!==null&&t._visibility&4&&(n.return===null||n.return.tag!==13)?(t._visibility&=-5,Ou(n)):Yo(n);break;default:Yo(n)}}function Ou(n){var t=n.deletions;if(n.flags&16){if(t!==null)for(var e=0;e<t.length;e++){var i=t[e];nn=i,DS(i,n)}CS(n)}for(n=n.child;n!==null;){switch(t=n,t.tag){case 0:case 11:case 15:da(8,t,t.return),Ou(t);break;case 22:e=t.stateNode,e._visibility&4&&(e._visibility&=-5,Ou(t));break;default:Ou(t)}n=n.sibling}}function DS(n,t){for(;nn!==null;){var e=nn;switch(e.tag){case 0:case 11:case 15:da(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var i=e.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:hc(e.memoizedState.cache)}if(i=e.child,i!==null)i.return=e,nn=i;else t:for(e=n;nn!==null;){i=nn;var s=i.sibling,a=i.return;if(SS(i),i===e){nn=null;break t}if(s!==null){s.return=a,nn=s;break t}nn=a}}}function xE(n,t,e,i){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(n,t,e,i){return new xE(n,t,e,i)}function i0(n){return n=n.prototype,!(!n||!n.isReactComponent)}function aa(n,t){var e=n.alternate;return e===null?(e=ui(n.tag,t,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=t,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&31457280,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function LS(n,t){n.flags&=31457282;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n}function zu(n,t,e,i,s,a){var r=0;if(i=n,typeof n=="function")i0(n)&&(r=1);else if(typeof n=="string")r=aw(n,e,Gi.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case Gr:return qa(e.children,s,a,t);case Ny:r=8,s|=24;break;case Od:return n=ui(12,e,t,s|2),n.elementType=Od,n.lanes=a,n;case zd:return n=ui(13,e,t,s),n.elementType=zd,n.lanes=a,n;case Id:return n=ui(19,e,t,s),n.elementType=Id,n.lanes=a,n;case Uy:return NS(e,s,a,t);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Wb:case ys:r=10;break t;case Py:r=9;break t;case Em:r=11;break t;case wm:r=14;break t;case Xs:r=16,i=null;break t}r=29,e=Error(J(130,n===null?"null":typeof n,"")),i=null}return t=ui(r,e,t,s),t.elementType=n,t.type=i,t.lanes=a,t}function qa(n,t,e,i){return n=ui(7,n,i,t),n.lanes=e,n}function NS(n,t,e,i){n=ui(22,n,i,t),n.elementType=Uy,n.lanes=e;var s={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var a=s._current;if(a===null)throw Error(J(456));if(!(s._pendingVisibility&2)){var r=ha(a,2);r!==null&&(s._pendingVisibility|=2,An(r,a,2))}},attach:function(){var a=s._current;if(a===null)throw Error(J(456));if(s._pendingVisibility&2){var r=ha(a,2);r!==null&&(s._pendingVisibility&=-3,An(r,a,2))}}};return n.stateNode=s,n}function Ff(n,t,e){return n=ui(6,n,null,t),n.lanes=e,n}function Hf(n,t,e){return t=ui(4,n.children!==null?n.children:[],n.key,t),t.lanes=e,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}function ts(n){n.flags|=4}function Qg(n,t){if(t.type!=="stylesheet"||t.state.loading&4)n.flags&=-16777217;else if(n.flags|=16777216,!JS(t)){if(t=fi.current,t!==null&&(($t&4194176)===$t?Wi!==null:($t&62914560)!==$t&&!($t&536870912)||t!==Wi))throw Ml=Kd,_x;n.flags|=8192}}function Oc(n,t){t!==null&&(n.flags|=4),n.flags&16384&&(t=n.tag!==22?Vy():536870912,n.lanes|=t,Eo|=t)}function Zo(n,t){if(!ne)switch(n.tailMode){case"hidden":t=n.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Ce(n){var t=n.alternate!==null&&n.alternate.child===n.child,e=0,i=0;if(t)for(var s=n.child;s!==null;)e|=s.lanes|s.childLanes,i|=s.subtreeFlags&31457280,i|=s.flags&31457280,s.return=n,s=s.sibling;else for(s=n.child;s!==null;)e|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=n,s=s.sibling;return n.subtreeFlags|=i,n.childLanes=e,t}function SE(n,t,e){var i=t.pendingProps;switch(Im(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return e=t.stateNode,i=null,n!==null&&(i=n.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ws(Ze),_o(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(qo(t)?ts(t):n===null||n.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Si!==null&&(vp(Si),Si=null))),Ce(t),null;case 26:return e=t.memoizedState,n===null?(ts(t),e!==null?(Ce(t),Qg(t,e)):(Ce(t),t.flags&=-16777217)):e?e!==n.memoizedState?(ts(t),Ce(t),Qg(t,e)):(Ce(t),t.flags&=-16777217):(n.memoizedProps!==i&&ts(t),Ce(t),t.flags&=-16777217),null;case 27:Ku(t),e=na.current;var s=t.type;if(n!==null&&t.stateNode!=null)n.memoizedProps!==i&&ts(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Ce(t),null}n=Gi.current,qo(t)?Ag(t):(n=KS(s,i,e),t.stateNode=n,ts(t))}return Ce(t),null;case 5:if(Ku(t),e=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==i&&ts(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Ce(t),null}if(n=Gi.current,qo(t))Ag(t);else{switch(s=gh(na.current),n){case 1:n=s.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:n=s.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":n=s.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":n=s.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?n.multiple=!0:i.size&&(n.size=i.size);break;default:n=typeof i.is=="string"?s.createElement(e,{is:i.is}):s.createElement(e)}}n[yn]=t,n[On]=i;t:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break t;for(;s.sibling===null;){if(s.return===null||s.return===t)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=n;t:switch(mn(n,e,i),e){case"button":case"input":case"select":case"textarea":n=!!i.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&ts(t)}}return Ce(t),t.flags&=-16777217,null;case 6:if(n&&t.stateNode!=null)n.memoizedProps!==i&&ts(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(n=na.current,qo(t)){if(n=t.stateNode,e=t.memoizedProps,i=null,s=wn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}n[yn]=t,n=!!(n.nodeValue===e||i!==null&&i.suppressHydrationWarning===!0||XS(n.nodeValue,e)),n||Za(t)}else n=gh(n).createTextNode(i),n[yn]=t,t.stateNode=n}return Ce(t),null;case 13:if(i=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(s=qo(t),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(J(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[yn]=t}else uc(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),s=!1}else Si!==null&&(vp(Si),Si=null),s=!0;if(!s)return t.flags&256?(bs(t),t):(bs(t),null)}if(bs(t),t.flags&128)return t.lanes=e,t;if(e=i!==null,n=n!==null&&n.memoizedState!==null,e){i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool);var a=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)}return e!==n&&e&&(t.child.flags|=8192),Oc(t,t.updateQueue),Ce(t),null;case 4:return _o(),n===null&&c0(t.stateNode.containerInfo),Ce(t),null;case 10:return ws(t.type),Ce(t),null;case 19:if(rn(Qe),s=t.memoizedState,s===null)return Ce(t),null;if(i=(t.flags&128)!==0,a=s.rendering,a===null)if(i)Zo(s,!1);else{if(ze!==0||n!==null&&n.flags&128)for(n=t.child;n!==null;){if(a=sh(n),a!==null){for(t.flags|=128,Zo(s,!1),n=a.updateQueue,t.updateQueue=n,Oc(t,n),t.subtreeFlags=0,n=e,e=t.child;e!==null;)LS(e,n),e=e.sibling;return Ae(Qe,Qe.current&1|2),t.child}n=n.sibling}s.tail!==null&&ji()>hh&&(t.flags|=128,i=!0,Zo(s,!1),t.lanes=4194304)}else{if(!i)if(n=sh(a),n!==null){if(t.flags|=128,i=!0,n=n.updateQueue,t.updateQueue=n,Oc(t,n),Zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ne)return Ce(t),null}else 2*ji()-s.renderingStartTime>hh&&e!==536870912&&(t.flags|=128,i=!0,Zo(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ji(),t.sibling=null,n=Qe.current,Ae(Qe,i?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return bs(t),Bm(),i=t.memoizedState!==null,n!==null?n.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?e&536870912&&!(t.flags&128)&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),e=t.updateQueue,e!==null&&Oc(t,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==e&&(t.flags|=2048),n!==null&&rn(Wa),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),ws(Ze),Ce(t),null;case 25:return null}throw Error(J(156,t.tag))}function bE(n,t){switch(Im(t),t.tag){case 1:return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return ws(Ze),_o(),n=t.flags,n&65536&&!(n&128)?(t.flags=n&-65537|128,t):null;case 26:case 27:case 5:return Ku(t),null;case 13:if(bs(t),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(J(340));uc()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return rn(Qe),null;case 4:return _o(),null;case 10:return ws(t.type),null;case 22:case 23:return bs(t),Bm(),n!==null&&rn(Wa),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 24:return ws(Ze),null;case 25:return null;default:return null}}function PS(n,t){switch(Im(t),t.tag){case 3:ws(Ze),_o();break;case 26:case 27:case 5:Ku(t);break;case 4:_o();break;case 13:bs(t);break;case 19:rn(Qe);break;case 10:ws(t.type);break;case 22:case 23:bs(t),Bm(),n!==null&&rn(Wa);break;case 24:ws(Ze)}}var ME={getCacheForType:function(n){var t=xn(Ze),e=t.data.get(n);return e===void 0&&(e=n(),t.data.set(n,e)),e}},EE=typeof WeakMap=="function"?WeakMap:Map,De=0,_e=null,Zt=null,$t=0,ge=0,Gn=null,ms=!1,Io=!1,s0=!1,Rs=0,ze=0,pa=0,Xa=0,a0=0,hi=0,Eo=0,Ll=null,Hi=null,dp=!1,r0=0,hh=1/0,fh=null,ra=null,zc=!1,Oa=null,Nl=0,pp=0,mp=null,Pl=0,gp=null;function Zn(){if(De&2&&$t!==0)return $t&-$t;if(Gt.T!==null){var n=bo;return n!==0?n:l0()}return Wy()}function US(){hi===0&&(hi=!($t&536870912)||ne?Hy():536870912);var n=fi.current;return n!==null&&(n.flags|=32),hi}function An(n,t,e){(n===_e&&ge===2||n.cancelPendingCommit!==null)&&(wo(n,0),gs(n,$t,hi,!1)),lc(n,e),(!(De&2)||n!==_e)&&(n===_e&&(!(De&2)&&(Xa|=e),ze===4&&gs(n,$t,hi,!1)),Zi(n))}function OS(n,t,e){if(De&6)throw Error(J(327));var i=!e&&(t&60)===0&&(t&n.expiredLanes)===0||oc(n,t),s=i?AE(n,t):Vf(n,t,!0),a=i;do{if(s===0){Io&&!i&&gs(n,t,0,!1);break}else if(s===6)gs(n,t,0,!ms);else{if(e=n.current.alternate,a&&!wE(e)){s=Vf(n,t,!1),a=!1;continue}if(s===2){if(a=t,n.errorRecoveryDisabledLanes&a)var r=0;else r=n.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=n;s=Ll;var l=o.current.memoizedState.isDehydrated;if(l&&(wo(o,r).flags|=256),r=Vf(o,r,!1),r!==2){if(s0&&!l){o.errorRecoveryDisabledLanes|=a,Xa|=a,s=4;break t}a=Hi,Hi=s,a!==null&&vp(a)}s=r}if(a=!1,s!==2)continue}}if(s===1){wo(n,0),gs(n,t,0,!0);break}t:{switch(i=n,s){case 0:case 1:throw Error(J(345));case 4:if((t&4194176)===t){gs(i,t,hi,!ms);break t}break;case 2:Hi=null;break;case 3:case 5:break;default:throw Error(J(329))}if(i.finishedWork=e,i.finishedLanes=t,(t&62914560)===t&&(a=r0+300-ji(),10<a)){if(gs(i,t,hi,!ms),Hh(i,0)!==0)break t;i.timeoutHandle=ZS($g.bind(null,i,e,Hi,fh,dp,t,hi,Xa,Eo,ms,2,-0,0),a);break t}$g(i,e,Hi,fh,dp,t,hi,Xa,Eo,ms,0,-0,0)}}break}while(!0);Zi(n)}function vp(n){Hi===null?Hi=n:Hi.push.apply(Hi,n)}function $g(n,t,e,i,s,a,r,o,l,c,u,f,h){var p=t.subtreeFlags;if((p&8192||(p&16785408)===16785408)&&(Ql={stylesheets:null,count:0,unsuspend:rw},AS(t),t=lw(),t!==null)){n.cancelPendingCommit=t(tv.bind(null,n,e,i,s,r,o,l,1,f,h)),gs(n,a,r,!c);return}tv(n,e,i,s,r,o,l,u,f,h)}function wE(n){for(var t=n;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var i=0;i<e.length;i++){var s=e[i],a=s.getSnapshot;s=s.value;try{if(!Kn(a(),s))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gs(n,t,e,i){t&=~a0,t&=~Xa,n.suspendedLanes|=t,n.pingedLanes&=~t,i&&(n.warmLanes|=t),i=n.expirationTimes;for(var s=t;0<s;){var a=31-Yn(s),r=1<<a;i[a]=-1,s&=~r}e!==0&&ky(n,e,t)}function Kh(){return De&6?!0:(mc(0),!1)}function o0(){if(Zt!==null){if(ge===0)var n=Zt.return;else n=Zt,Ms=cr=null,Wm(n),oo=null,Xl=0,n=Zt;for(;n!==null;)PS(n.alternate,n),n=n.return;Zt=null}}function wo(n,t){n.finishedWork=null,n.finishedLanes=0;var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,jE(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),o0(),_e=n,Zt=e=aa(n.current,null),$t=t,ge=0,Gn=null,ms=!1,Io=oc(n,t),s0=!1,Eo=hi=a0=Xa=pa=ze=0,Hi=Ll=null,dp=!1,t&8&&(t|=t&32);var i=n.entangledLanes;if(i!==0)for(n=n.entanglements,i&=t;0<i;){var s=31-Yn(i),a=1<<s;t|=n[s],i&=~a}return Rs=t,jh(),e}function zS(n,t){Yt=null,Gt.H=qi,t===bl?(t=Dg(),ge=3):t===_x?(t=Dg(),ge=4):ge=t===oS?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gn=t,Zt===null&&(ze=1,lh(n,li(t,n.current)))}function IS(){var n=Gt.H;return Gt.H=qi,n===null?qi:n}function BS(){var n=Gt.A;return Gt.A=ME,n}function _p(){ze=4,ms||($t&4194176)!==$t&&fi.current!==null||(Io=!0),!(pa&134217727)&&!(Xa&134217727)||_e===null||gs(_e,$t,hi,!1)}function Vf(n,t,e){var i=De;De|=2;var s=IS(),a=BS();(_e!==n||$t!==t)&&(fh=null,wo(n,t)),t=!1;var r=ze;t:do try{if(ge!==0&&Zt!==null){var o=Zt,l=Gn;switch(ge){case 8:o0(),r=6;break t;case 3:case 2:case 6:fi.current===null&&(t=!0);var c=ge;if(ge=0,Gn=null,Jr(n,o,l,c),e&&Io){r=0;break t}break;default:c=ge,ge=0,Gn=null,Jr(n,o,l,c)}}TE(),r=ze;break}catch(u){zS(n,u)}while(!0);return t&&n.shellSuspendCounter++,Ms=cr=null,De=i,Gt.H=s,Gt.A=a,Zt===null&&(_e=null,$t=0,jh()),r}function TE(){for(;Zt!==null;)FS(Zt)}function AE(n,t){var e=De;De|=2;var i=IS(),s=BS();_e!==n||$t!==t?(fh=null,hh=ji()+500,wo(n,t)):Io=oc(n,t);t:do try{if(ge!==0&&Zt!==null){t=Zt;var a=Gn;e:switch(ge){case 1:ge=0,Gn=null,Jr(n,t,a,1);break;case 2:if(Rg(a)){ge=0,Gn=null,Jg(t);break}t=function(){ge===2&&_e===n&&(ge=7),Zi(n)},a.then(t,t);break t;case 3:ge=7;break t;case 4:ge=5;break t;case 7:Rg(a)?(ge=0,Gn=null,Jg(t)):(ge=0,Gn=null,Jr(n,t,a,7));break;case 5:var r=null;switch(Zt.tag){case 26:r=Zt.memoizedState;case 5:case 27:var o=Zt;if(!r||JS(r)){ge=0,Gn=null;var l=o.sibling;if(l!==null)Zt=l;else{var c=o.return;c!==null?(Zt=c,Qh(c)):Zt=null}break e}}ge=0,Gn=null,Jr(n,t,a,5);break;case 6:ge=0,Gn=null,Jr(n,t,a,6);break;case 8:o0(),ze=6;break t;default:throw Error(J(462))}}CE();break}catch(u){zS(n,u)}while(!0);return Ms=cr=null,Gt.H=i,Gt.A=s,De=e,Zt!==null?0:(_e=null,$t=0,jh(),ze)}function CE(){for(;Zt!==null&&!Kb();)FS(Zt)}function FS(n){var t=fS(n.alternate,n,Rs);n.memoizedProps=n.pendingProps,t===null?Qh(n):Zt=t}function Jg(n){var t=n,e=t.alternate;switch(t.tag){case 15:case 0:t=jg(e,t,t.pendingProps,t.type,void 0,$t);break;case 11:t=jg(e,t,t.pendingProps,t.type.render,t.ref,$t);break;case 5:Wm(t);default:PS(e,t),t=Zt=LS(t,Rs),t=fS(e,t,Rs)}n.memoizedProps=n.pendingProps,t===null?Qh(n):Zt=t}function Jr(n,t,e,i){Ms=cr=null,Wm(t),oo=null,Xl=0;var s=t.return;try{if(gE(n,s,t,e,$t)){ze=1,lh(n,li(e,n.current)),Zt=null;return}}catch(a){if(s!==null)throw Zt=s,a;ze=1,lh(n,li(e,n.current)),Zt=null;return}t.flags&32768?(ne||i===1?n=!0:Io||$t&536870912?n=!1:(ms=n=!0,(i===2||i===3||i===6)&&(i=fi.current,i!==null&&i.tag===13&&(i.flags|=16384))),HS(t,n)):Qh(t)}function Qh(n){var t=n;do{if(t.flags&32768){HS(t,ms);return}n=t.return;var e=SE(t.alternate,t,Rs);if(e!==null){Zt=e;return}if(t=t.sibling,t!==null){Zt=t;return}Zt=t=n}while(t!==null);ze===0&&(ze=5)}function HS(n,t){do{var e=bE(n.alternate,n);if(e!==null){e.flags&=32767,Zt=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(n=n.sibling,n!==null)){Zt=n;return}Zt=n=e}while(n!==null);ze=6,Zt=null}function tv(n,t,e,i,s,a,r,o,l,c){var u=Gt.T,f=Me.p;try{Me.p=2,Gt.T=null,RE(n,t,e,i,f,s,a,r,o,l,c)}finally{Gt.T=u,Me.p=f}}function RE(n,t,e,i,s,a,r,o){do ho();while(Oa!==null);if(De&6)throw Error(J(327));var l=n.finishedWork;if(i=n.finishedLanes,l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(J(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var c=l.lanes|l.childLanes;if(c|=Um,oM(n,i,c,a,r,o),n===_e&&(Zt=_e=null,$t=0),!(l.subtreeFlags&10256)&&!(l.flags&10256)||zc||(zc=!0,pp=c,mp=e,PE(Qu,function(){return ho(),null})),e=(l.flags&15990)!==0,l.subtreeFlags&15990||e?(e=Gt.T,Gt.T=null,a=Me.p,Me.p=2,r=De,De|=4,_E(n,l),ES(l,n),JM(bp,n.containerInfo),xh=!!Sp,bp=Sp=null,n.current=l,xS(n,l.alternate,l),Qb(),De=r,Me.p=a,Gt.T=e):n.current=l,zc?(zc=!1,Oa=n,Nl=i):VS(n,c),c=n.pendingLanes,c===0&&(ra=null),nM(l.stateNode),Zi(n),t!==null)for(s=n.onRecoverableError,l=0;l<t.length;l++)c=t[l],s(c.value,{componentStack:c.stack});return Nl&3&&ho(),c=n.pendingLanes,i&4194218&&c&42?n===gp?Pl++:(Pl=0,gp=n):Pl=0,mc(0),null}function VS(n,t){(n.pooledCacheLanes&=t)===0&&(t=n.pooledCache,t!=null&&(n.pooledCache=null,hc(t)))}function ho(){if(Oa!==null){var n=Oa,t=pp;pp=0;var e=jy(Nl),i=Gt.T,s=Me.p;try{if(Me.p=32>e?32:e,Gt.T=null,Oa===null)var a=!1;else{e=mp,mp=null;var r=Oa,o=Nl;if(Oa=null,Nl=0,De&6)throw Error(J(331));var l=De;if(De|=4,RS(r.current),TS(r,r.current,o,e),De=l,mc(0,!1),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(rc,r)}catch{}a=!0}return a}finally{Me.p=s,Gt.T=i,VS(n,t)}}return!1}function ev(n,t,e){t=li(e,t),t=ip(n.stateNode,t,2),n=sa(n,t,2),n!==null&&(lc(n,2),Zi(n))}function pe(n,t,e){if(n.tag===3)ev(n,n,e);else for(;t!==null;){if(t.tag===3){ev(t,n,e);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ra===null||!ra.has(i))){n=li(e,n),e=aS(2),i=sa(t,e,2),i!==null&&(rS(e,i,t,n),lc(i,2),Zi(i));break}}t=t.return}}function kf(n,t,e){var i=n.pingCache;if(i===null){i=n.pingCache=new EE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(e)||(s0=!0,s.add(e),n=DE.bind(null,n,t,e),t.then(n,n))}function DE(n,t,e){var i=n.pingCache;i!==null&&i.delete(t),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,_e===n&&($t&e)===e&&(ze===4||ze===3&&($t&62914560)===$t&&300>ji()-r0?!(De&2)&&wo(n,0):a0|=e,Eo===$t&&(Eo=0)),Zi(n)}function kS(n,t){t===0&&(t=Vy()),n=ha(n,t),n!==null&&(lc(n,t),Zi(n))}function LE(n){var t=n.memoizedState,e=0;t!==null&&(e=t.retryLane),kS(n,e)}function NE(n,t){var e=0;switch(n.tag){case 13:var i=n.stateNode,s=n.memoizedState;s!==null&&(e=s.retryLane);break;case 19:i=n.stateNode;break;case 22:i=n.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),kS(n,e)}function PE(n,t){return Tm(n,t)}var dh=null,Fr=null,yp=!1,ph=!1,Gf=!1,Ya=0;function Zi(n){n!==Fr&&n.next===null&&(Fr===null?dh=Fr=n:Fr=Fr.next=n),ph=!0,yp||(yp=!0,OE(UE))}function mc(n,t){if(!Gf&&ph){Gf=!0;do for(var e=!1,i=dh;i!==null;){if(n!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Yn(42|n)+1)-1,a&=s&~(r&~o),a=a&201326677?a&201326677|1:a?a|2:0}a!==0&&(e=!0,nv(i,a))}else a=$t,a=Hh(i,i===_e?a:0),!(a&3)||oc(i,a)||(e=!0,nv(i,a));i=i.next}while(e);Gf=!1}}function UE(){ph=yp=!1;var n=0;Ya!==0&&(GE()&&(n=Ya),Ya=0);for(var t=ji(),e=null,i=dh;i!==null;){var s=i.next,a=GS(i,t);a===0?(i.next=null,e===null?dh=s:e.next=s,s===null&&(Fr=e)):(e=i,(n!==0||a&3)&&(ph=!0)),i=s}mc(n)}function GS(n,t){for(var e=n.suspendedLanes,i=n.pingedLanes,s=n.expirationTimes,a=n.pendingLanes&-62914561;0<a;){var r=31-Yn(a),o=1<<r,l=s[r];l===-1?(!(o&e)||o&i)&&(s[r]=rM(o,t)):l<=t&&(n.expiredLanes|=o),a&=~o}if(t=_e,e=$t,e=Hh(n,n===t?e:0),i=n.callbackNode,e===0||n===t&&ge===2||n.cancelPendingCommit!==null)return i!==null&&i!==null&&yf(i),n.callbackNode=null,n.callbackPriority=0;if(!(e&3)||oc(n,e)){if(t=e&-e,t===n.callbackPriority)return t;switch(i!==null&&yf(i),jy(e)){case 2:case 8:e=By;break;case 32:e=Qu;break;case 268435456:e=Fy;break;default:e=Qu}return i=jS.bind(null,n),e=Tm(e,i),n.callbackPriority=t,n.callbackNode=e,t}return i!==null&&i!==null&&yf(i),n.callbackPriority=2,n.callbackNode=null,2}function jS(n,t){var e=n.callbackNode;if(ho()&&n.callbackNode!==e)return null;var i=$t;return i=Hh(n,n===_e?i:0),i===0?null:(OS(n,i,t),GS(n,ji()),n.callbackNode!=null&&n.callbackNode===e?jS.bind(null,n):null)}function nv(n,t){if(ho())return null;OS(n,t,!0)}function OE(n){WE(function(){De&6?Tm(Iy,n):n()})}function l0(){return Ya===0&&(Ya=Hy()),Ya}function iv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ru(""+n)}function sv(n,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,n.id&&e.setAttribute("form",n.id),t.parentNode.insertBefore(e,t),n=new FormData(n),e.parentNode.removeChild(e),n}function zE(n,t,e,i,s){if(t==="submit"&&e&&e.stateNode===s){var a=iv((s[On]||null).action),r=i.submitter;r&&(t=(t=r[On]||null)?iv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Vh("action","action",null,i,s);n.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ya!==0){var l=r?sv(s,r):new FormData(s);ep(e,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?sv(s,r):new FormData(s),ep(e,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(var jf=0;jf<wg.length;jf++){var Wf=wg[jf],IE=Wf.toLowerCase(),BE=Wf[0].toUpperCase()+Wf.slice(1);Ri(IE,"on"+BE)}Ri(hx,"onAnimationEnd");Ri(fx,"onAnimationIteration");Ri(dx,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(eE,"onTransitionRun");Ri(nE,"onTransitionStart");Ri(iE,"onTransitionCancel");Ri(px,"onTransitionEnd");yo("onMouseEnter",["mouseout","mouseover"]);yo("onMouseLeave",["mouseout","mouseover"]);yo("onPointerEnter",["pointerout","pointerover"]);yo("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zl));function WS(n,t){t=(t&4)!==0;for(var e=0;e<n.length;e++){var i=n[e],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){oh(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){oh(u)}s.currentTarget=null,a=l}}}}function Qt(n,t){var e=t[kd];e===void 0&&(e=t[kd]=new Set);var i=n+"__bubble";e.has(i)||(qS(t,n,2,!1),e.add(i))}function qf(n,t,e){var i=0;t&&(i|=4),qS(e,n,i,t)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function c0(n){if(!n[Ic]){n[Ic]=!0,qy.forEach(function(e){e!=="selectionchange"&&(FE.has(e)||qf(e,!1,n),qf(e,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[Ic]||(t[Ic]=!0,qf("selectionchange",!1,t))}}function qS(n,t,e,i){switch(s1(t)){case 2:var s=hw;break;case 8:s=fw;break;default:s=d0}e=s.bind(null,t,e,n),s=void 0,!qd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?n.addEventListener(t,e,{capture:!0,passive:s}):n.addEventListener(t,e,!0):s!==void 0?n.addEventListener(t,e,{passive:s}):n.addEventListener(t,e,!1)}function Xf(n,t,e,i,s){var a=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&(l=r.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;r=r.return}for(;o!==null;){if(r=Ba(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}tx(function(){var c=a,u=Rm(e),f=[];t:{var h=mx.get(n);if(h!==void 0){var p=Vh,g=n;switch(n){case"keypress":if(Lu(e)===0)break t;case"keydown":case"keyup":p=NM;break;case"focusin":g="focus",p=Ef;break;case"focusout":g="blur",p=Ef;break;case"beforeblur":case"afterblur":p=Ef;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=dg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=OM;break;case hx:case fx:case dx:p=MM;break;case px:p=IM;break;case"scroll":case"scrollend":p=_M;break;case"wheel":p=FM;break;case"copy":case"cut":case"paste":p=wM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=mg;break;case"toggle":case"beforetoggle":p=VM}var _=(t&4)!==0,m=!_&&(n==="scroll"||n==="scrollend"),d=_?h!==null?h+"Capture":null:h;_=[];for(var v=c,y;v!==null;){var x=v;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||d===null||(x=Gl(v,d),x!=null&&_.push(Kl(v,x,y))),m)break;v=v.return}0<_.length&&(h=new p(h,g,null,e,u),f.push({event:h,listeners:_}))}}if(!(t&7)){t:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&e!==Wd&&(g=e.relatedTarget||e.fromElement)&&(Ba(g)||g[Oo]))break t;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=e.relatedTarget||e.toElement,p=c,g=g?Ba(g):null,g!==null&&(m=Uo(g),_=g.tag,g!==m||_!==5&&_!==27&&_!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=dg,x="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=mg,x="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:fl(p),y=g==null?h:fl(g),h=new _(x,v+"leave",p,e,u),h.target=m,h.relatedTarget=y,x=null,Ba(u)===c&&(_=new _(d,v+"enter",g,e,u),_.target=y,_.relatedTarget=m,x=_),m=x,p&&g)e:{for(_=p,d=g,v=0,y=_;y;y=mr(y))v++;for(y=0,x=d;x;x=mr(x))y++;for(;0<v-y;)_=mr(_),v--;for(;0<y-v;)d=mr(d),y--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break e;_=mr(_),d=mr(d)}_=null}else _=null;p!==null&&av(f,h,p,_,!1),g!==null&&m!==null&&av(f,m,g,_,!0)}}t:{if(h=c?fl(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=yg;else if(_g(h))if(rx)T=QM;else{T=ZM;var b=YM}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Cm(c.elementType)&&(T=yg):T=KM;if(T&&(T=T(n,c))){ax(f,T,e,u);break t}b&&b(n,h,c),n==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&jd(h,"number",h.value)}switch(b=c?fl(c):window,n){case"focusin":(_g(b)||b.contentEditable==="true")&&(Xr=b,Xd=c,Sl=null);break;case"focusout":Sl=Xd=Xr=null;break;case"mousedown":Yd=!0;break;case"contextmenu":case"mouseup":case"dragend":Yd=!1,Eg(f,e,u);break;case"selectionchange":if(tE)break;case"keydown":case"keyup":Eg(f,e,u)}var M;if(Nm)t:{switch(n){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else qr?ix(n,e)&&(D="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(D="onCompositionStart");D&&(nx&&e.locale!=="ko"&&(qr||D!=="onCompositionStart"?D==="onCompositionEnd"&&qr&&(M=ex()):(ea=u,Dm="value"in ea?ea.value:ea.textContent,qr=!0)),b=mh(c,D),0<b.length&&(D=new pg(D,n,null,e,u),f.push({event:D,listeners:b}),M?D.data=M:(M=sx(e),M!==null&&(D.data=M)))),(M=GM?jM(n,e):WM(n,e))&&(D=mh(c,"onBeforeInput"),0<D.length&&(b=new pg("onBeforeInput","beforeinput",null,e,u),f.push({event:b,listeners:D}),b.data=M)),zE(f,n,c,e,u)}WS(f,t)})}function Kl(n,t,e){return{instance:n,listener:t,currentTarget:e}}function mh(n,t){for(var e=t+"Capture",i=[];n!==null;){var s=n,a=s.stateNode;s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Gl(n,e),s!=null&&i.unshift(Kl(n,s,a)),s=Gl(n,t),s!=null&&i.push(Kl(n,s,a))),n=n.return}return i}function mr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function av(n,t,e,i,s){for(var a=t._reactName,r=[];e!==null&&e!==i;){var o=e,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Gl(e,a),c!=null&&r.unshift(Kl(e,c,l))):s||(c=Gl(e,a),c!=null&&r.push(Kl(e,c,l)))),e=e.return}r.length!==0&&n.push({event:t,listeners:r})}var HE=/\r\n?/g,VE=/\u0000|\uFFFD/g;function rv(n){return(typeof n=="string"?n:""+n).replace(HE,`
`).replace(VE,"")}function XS(n,t){return t=rv(t),rv(n)===t}function $h(){}function he(n,t,e,i,s,a){switch(e){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||xo(n,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&xo(n,""+i);break;case"className":Rc(n,"class",i);break;case"tabIndex":Rc(n,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Rc(n,e,i);break;case"style":Jy(n,i,a);break;case"data":if(t!=="object"){Rc(n,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||e!=="href")){n.removeAttribute(e);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(e);break}i=Ru(""+i),n.setAttribute(e,i);break;case"action":case"formAction":if(typeof i=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(e==="formAction"?(t!=="input"&&he(n,t,"name",s.name,s,null),he(n,t,"formEncType",s.formEncType,s,null),he(n,t,"formMethod",s.formMethod,s,null),he(n,t,"formTarget",s.formTarget,s,null)):(he(n,t,"encType",s.encType,s,null),he(n,t,"method",s.method,s,null),he(n,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(e);break}i=Ru(""+i),n.setAttribute(e,i);break;case"onClick":i!=null&&(n.onclick=$h);break;case"onScroll":i!=null&&Qt("scroll",n);break;case"onScrollEnd":i!=null&&Qt("scrollend",n);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(e=i.__html,e!=null){if(s.children!=null)throw Error(J(60));n.innerHTML=e}}break;case"multiple":n.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":n.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){n.removeAttribute("xlink:href");break}e=Ru(""+i),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,""+i):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":i===!0?n.setAttribute(e,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,i):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?n.setAttribute(e,i):n.removeAttribute(e);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?n.removeAttribute(e):n.setAttribute(e,i);break;case"popover":Qt("beforetoggle",n),Qt("toggle",n),Cu(n,"popover",i);break;case"xlinkActuate":Qi(n,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Qi(n,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Qi(n,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Qi(n,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Qi(n,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Qi(n,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Qi(n,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Qi(n,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Qi(n,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Cu(n,"is",i);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=gM.get(e)||e,Cu(n,e,i))}}function xp(n,t,e,i,s,a){switch(e){case"style":Jy(n,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(e=i.__html,e!=null){if(s.children!=null)throw Error(J(60));n.innerHTML=e}}break;case"children":typeof i=="string"?xo(n,i):(typeof i=="number"||typeof i=="bigint")&&xo(n,""+i);break;case"onScroll":i!=null&&Qt("scroll",n);break;case"onScrollEnd":i!=null&&Qt("scrollend",n);break;case"onClick":i!=null&&(n.onclick=$h);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xy.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(s=e.endsWith("Capture"),t=e.slice(2,s?e.length-7:void 0),a=n[On]||null,a=a!=null?a[e]:null,typeof a=="function"&&n.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(t,i,s);break t}e in n?n[e]=i:i===!0?n.setAttribute(e,""):Cu(n,e,i)}}}function mn(n,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qt("error",n),Qt("load",n);var i=!1,s=!1,a;for(a in e)if(e.hasOwnProperty(a)){var r=e[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:he(n,t,a,r,e,null)}}s&&he(n,t,"srcSet",e.srcSet,e,null),i&&he(n,t,"src",e.src,e,null);return;case"input":Qt("invalid",n);var o=a=r=s=null,l=null,c=null;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(J(137,t));break;default:he(n,t,i,u,e,null)}}Ky(n,a,o,l,c,r,s,!1),$u(n);return;case"select":Qt("invalid",n),i=r=a=null;for(s in e)if(e.hasOwnProperty(s)&&(o=e[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:he(n,t,s,o,e,null)}t=a,e=r,n.multiple=!!i,t!=null?ao(n,!!i,t,!1):e!=null&&ao(n,!!i,e,!0);return;case"textarea":Qt("invalid",n),a=s=i=null;for(r in e)if(e.hasOwnProperty(r)&&(o=e[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:he(n,t,r,o,e,null)}$y(n,i,s,a),$u(n);return;case"option":for(l in e)if(e.hasOwnProperty(l)&&(i=e[l],i!=null))switch(l){case"selected":n.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:he(n,t,l,i,e,null)}return;case"dialog":Qt("cancel",n),Qt("close",n);break;case"iframe":case"object":Qt("load",n);break;case"video":case"audio":for(i=0;i<Zl.length;i++)Qt(Zl[i],n);break;case"image":Qt("error",n),Qt("load",n);break;case"details":Qt("toggle",n);break;case"embed":case"source":case"link":Qt("error",n),Qt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in e)if(e.hasOwnProperty(c)&&(i=e[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:he(n,t,c,i,e,null)}return;default:if(Cm(t)){for(u in e)e.hasOwnProperty(u)&&(i=e[u],i!==void 0&&xp(n,t,u,i,e,void 0));return}}for(o in e)e.hasOwnProperty(o)&&(i=e[o],i!=null&&he(n,t,o,i,e,null))}function kE(n,t,e,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(p in e){var f=e[p];if(e.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(p)||he(n,t,p,null,i,f)}}for(var h in i){var p=i[h];if(f=e[h],i.hasOwnProperty(h)&&(p!=null||f!=null))switch(h){case"type":a=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(J(137,t));break;default:p!==f&&he(n,t,h,p,i,f)}}Gd(n,r,o,l,c,u,a,s);return;case"select":p=r=o=h=null;for(a in e)if(l=e[a],e.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||he(n,t,a,null,i,l)}for(s in i)if(a=i[s],l=e[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":h=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&he(n,t,s,a,i,l)}t=o,e=r,i=p,h!=null?ao(n,!!e,h,!1):!!i!=!!e&&(t!=null?ao(n,!!e,t,!0):ao(n,!!e,e?[]:"",!1));return;case"textarea":p=h=null;for(o in e)if(s=e[o],e.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:he(n,t,o,null,i,s)}for(r in i)if(s=i[r],a=e[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":h=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(J(91));break;default:s!==a&&he(n,t,r,s,i,a)}Qy(n,h,p);return;case"option":for(var g in e)if(h=e[g],e.hasOwnProperty(g)&&h!=null&&!i.hasOwnProperty(g))switch(g){case"selected":n.selected=!1;break;default:he(n,t,g,null,i,h)}for(l in i)if(h=i[l],p=e[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":n.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:he(n,t,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in e)h=e[_],e.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_)&&he(n,t,_,null,i,h);for(c in i)if(h=i[c],p=e[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(J(137,t));break;default:he(n,t,c,h,i,p)}return;default:if(Cm(t)){for(var m in e)h=e[m],e.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&xp(n,t,m,void 0,i,h);for(u in i)h=i[u],p=e[u],!i.hasOwnProperty(u)||h===p||h===void 0&&p===void 0||xp(n,t,u,h,i,p);return}}for(var d in e)h=e[d],e.hasOwnProperty(d)&&h!=null&&!i.hasOwnProperty(d)&&he(n,t,d,null,i,h);for(f in i)h=i[f],p=e[f],!i.hasOwnProperty(f)||h===p||h==null&&p==null||he(n,t,f,h,i,p)}var Sp=null,bp=null;function gh(n){return n.nodeType===9?n:n.ownerDocument}function ov(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function YS(n,t){if(n===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&t==="foreignObject"?0:n}function Mp(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yf=null;function GE(){var n=window.event;return n&&n.type==="popstate"?n===Yf?!1:(Yf=n,!0):(Yf=null,!1)}var ZS=typeof setTimeout=="function"?setTimeout:void 0,jE=typeof clearTimeout=="function"?clearTimeout:void 0,lv=typeof Promise=="function"?Promise:void 0,WE=typeof queueMicrotask=="function"?queueMicrotask:typeof lv<"u"?function(n){return lv.resolve(null).then(n).catch(qE)}:ZS;function qE(n){setTimeout(function(){throw n})}function Zf(n,t){var e=t,i=0;do{var s=e.nextSibling;if(n.removeChild(e),s&&s.nodeType===8)if(e=s.data,e==="/$"){if(i===0){n.removeChild(s),ec(t);return}i--}else e!=="$"&&e!=="$?"&&e!=="$!"||i++;e=s}while(e);ec(t)}function Ep(n){var t=n.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Ep(e),Am(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function XE(n,t,e,i){for(;n.nodeType===1;){var s=e;if(n.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(i){if(!n[kl])switch(t){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(a=n.getAttribute("rel"),a==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(a!==s.rel||n.getAttribute("href")!==(s.href==null?null:s.href)||n.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||n.getAttribute("title")!==(s.title==null?null:s.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(a=n.getAttribute("src"),(a!==(s.src==null?null:s.src)||n.getAttribute("type")!==(s.type==null?null:s.type)||n.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(t==="input"&&n.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&n.getAttribute("name")===a)return n}else return n;if(n=Ei(n.nextSibling),n===null)break}return null}function YE(n,t,e){if(t==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=Ei(n.nextSibling),n===null))return null;return n}function Ei(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return n}function cv(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"){if(t===0)return n;t--}else e==="/$"&&t++}n=n.previousSibling}return null}function KS(n,t,e){switch(t=gh(e),n){case"html":if(n=t.documentElement,!n)throw Error(J(452));return n;case"head":if(n=t.head,!n)throw Error(J(453));return n;case"body":if(n=t.body,!n)throw Error(J(454));return n;default:throw Error(J(451))}}var di=new Map,uv=new Set;function vh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var Us=Me.d;Me.d={f:ZE,r:KE,D:QE,C:$E,L:JE,m:tw,X:nw,S:ew,M:iw};function ZE(){var n=Us.f(),t=Kh();return n||t}function KE(n){var t=zo(n);t!==null&&t.tag===5&&t.type==="form"?Kx(t):Us.r(n)}var Bo=typeof document>"u"?null:document;function QS(n,t,e){var i=Bo;if(i&&typeof t=="string"&&t){var s=oi(t);s='link[rel="'+n+'"][href="'+s+'"]',typeof e=="string"&&(s+='[crossorigin="'+e+'"]'),uv.has(s)||(uv.add(s),n={rel:n,crossOrigin:e,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),mn(t,"link",n),sn(t),i.head.appendChild(t)))}}function QE(n){Us.D(n),QS("dns-prefetch",n,null)}function $E(n,t){Us.C(n,t),QS("preconnect",n,t)}function JE(n,t,e){Us.L(n,t,e);var i=Bo;if(i&&n&&t){var s='link[rel="preload"][as="'+oi(t)+'"]';t==="image"&&e&&e.imageSrcSet?(s+='[imagesrcset="'+oi(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(s+='[imagesizes="'+oi(e.imageSizes)+'"]')):s+='[href="'+oi(n)+'"]';var a=s;switch(t){case"style":a=To(n);break;case"script":a=Fo(n)}di.has(a)||(n=Ee({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:n,as:t},e),di.set(a,n),i.querySelector(s)!==null||t==="style"&&i.querySelector(gc(a))||t==="script"&&i.querySelector(vc(a))||(t=i.createElement("link"),mn(t,"link",n),sn(t),i.head.appendChild(t)))}}function tw(n,t){Us.m(n,t);var e=Bo;if(e&&n){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+oi(i)+'"][href="'+oi(n)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Fo(n)}if(!di.has(a)&&(n=Ee({rel:"modulepreload",href:n},t),di.set(a,n),e.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(vc(a)))return}i=e.createElement("link"),mn(i,"link",n),sn(i),e.head.appendChild(i)}}}function ew(n,t,e){Us.S(n,t,e);var i=Bo;if(i&&n){var s=so(i).hoistableStyles,a=To(n);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(gc(a)))o.loading=5;else{n=Ee({rel:"stylesheet",href:n,"data-precedence":t},e),(e=di.get(a))&&u0(n,e);var l=r=i.createElement("link");sn(l),mn(l,"link",n),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Iu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function nw(n,t){Us.X(n,t);var e=Bo;if(e&&n){var i=so(e).hoistableScripts,s=Fo(n),a=i.get(s);a||(a=e.querySelector(vc(s)),a||(n=Ee({src:n,async:!0},t),(t=di.get(s))&&h0(n,t),a=e.createElement("script"),sn(a),mn(a,"link",n),e.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function iw(n,t){Us.M(n,t);var e=Bo;if(e&&n){var i=so(e).hoistableScripts,s=Fo(n),a=i.get(s);a||(a=e.querySelector(vc(s)),a||(n=Ee({src:n,async:!0,type:"module"},t),(t=di.get(s))&&h0(n,t),a=e.createElement("script"),sn(a),mn(a,"link",n),e.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function hv(n,t,e,i){var s=(s=na.current)?vh(s):null;if(!s)throw Error(J(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=To(e.href),e=so(s).hoistableStyles,i=e.get(t),i||(i={type:"style",instance:null,count:0,state:null},e.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=To(e.href);var a=so(s).hoistableStyles,r=a.get(n);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(n,r),(a=s.querySelector(gc(n)))&&!a._p&&(r.instance=a,r.state.loading=5),di.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},di.set(n,e),a||sw(s,n,e,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Fo(e),e=so(s).hoistableScripts,i=e.get(t),i||(i={type:"script",instance:null,count:0,state:null},e.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,n))}}function To(n){return'href="'+oi(n)+'"'}function gc(n){return'link[rel="stylesheet"]['+n+"]"}function $S(n){return Ee({},n,{"data-precedence":n.precedence,precedence:null})}function sw(n,t,e,i){n.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=n.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),mn(t,"link",e),sn(t),n.head.appendChild(t))}function Fo(n){return'[src="'+oi(n)+'"]'}function vc(n){return"script[async]"+n}function fv(n,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var i=n.querySelector('style[data-href~="'+oi(e.href)+'"]');if(i)return t.instance=i,sn(i),i;var s=Ee({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return i=(n.ownerDocument||n).createElement("style"),sn(i),mn(i,"style",s),Iu(i,e.precedence,n),t.instance=i;case"stylesheet":s=To(e.href);var a=n.querySelector(gc(s));if(a)return t.state.loading|=4,t.instance=a,sn(a),a;i=$S(e),(s=di.get(s))&&u0(i,s),a=(n.ownerDocument||n).createElement("link"),sn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),mn(a,"link",i),t.state.loading|=4,Iu(a,e.precedence,n),t.instance=a;case"script":return a=Fo(e.src),(s=n.querySelector(vc(a)))?(t.instance=s,sn(s),s):(i=e,(s=di.get(a))&&(i=Ee({},e),h0(i,s)),n=n.ownerDocument||n,s=n.createElement("script"),sn(s),mn(s,"link",i),n.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Iu(i,e.precedence,n));return t.instance}function Iu(n,t,e){for(var i=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(n,a.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(n,t.firstChild))}function u0(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.title==null&&(n.title=t.title)}function h0(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.integrity==null&&(n.integrity=t.integrity)}var Bu=null;function dv(n,t,e){if(Bu===null){var i=new Map,s=Bu=new Map;s.set(e,i)}else s=Bu,i=s.get(e),i||(i=new Map,s.set(e,i));if(i.has(n))return i;for(i.set(n,null),e=e.getElementsByTagName(n),s=0;s<e.length;s++){var a=e[s];if(!(a[kl]||a[yn]||n==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=n+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function pv(n,t,e){n=n.ownerDocument||n,n.head.insertBefore(e,t==="title"?n.querySelector("head > title"):null)}function aw(n,t,e){if(e===1||t.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return n=t.disabled,typeof t.precedence=="string"&&n==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function JS(n){return!(n.type==="stylesheet"&&!(n.state.loading&3))}var Ql=null;function rw(){}function ow(n,t,e){if(Ql===null)throw Error(J(475));var i=Ql;if(t.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var s=To(e.href),a=n.querySelector(gc(s));if(a){n=a._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(i.count++,i=_h.bind(i),n.then(i,i)),t.state.loading|=4,t.instance=a,sn(a);return}a=n.ownerDocument||n,e=$S(e),(s=di.get(s))&&u0(e,s),a=a.createElement("link"),sn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),mn(a,"link",e),t.instance=a}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,n),(n=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=_h.bind(i),n.addEventListener("load",t),n.addEventListener("error",t))}}function lw(){if(Ql===null)throw Error(J(475));var n=Ql;return n.stylesheets&&n.count===0&&wp(n,n.stylesheets),0<n.count?function(t){var e=setTimeout(function(){if(n.stylesheets&&wp(n,n.stylesheets),n.unsuspend){var i=n.unsuspend;n.unsuspend=null,i()}},6e4);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(e)}}:null}function _h(){if(this.count--,this.count===0){if(this.stylesheets)wp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var yh=null;function wp(n,t){n.stylesheets=null,n.unsuspend!==null&&(n.count++,yh=new Map,t.forEach(cw,n),yh=null,_h.call(n))}function cw(n,t){if(!(t.state.loading&4)){var e=yh.get(n);if(e)var i=e.get(null);else{e=new Map,yh.set(n,e);for(var s=n.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(e.set(r.dataset.precedence,r),i=r)}i&&e.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=e.get(r)||i,a===i&&e.set(null,s),e.set(r,s),this.count++,i=_h.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(s,n.firstChild)),t.state.loading|=4}}var $l={$$typeof:ys,Provider:null,Consumer:null,_currentValue:Ga,_currentValue2:Ga,_threadCount:0};function uw(n,t,e,i,s,a,r,o){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xf(0),this.hiddenUpdates=xf(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function t1(n,t,e,i,s,a,r,o,l,c,u,f){return n=new uw(n,t,e,r,o,l,c,f),t=1,a===!0&&(t|=24),a=ui(3,null,null,t),n.current=a,a.stateNode=n,t=Fm(),t.refCount++,n.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:e,cache:t},t0(a),n}function e1(n){return n?(n=Kr,n):Kr}function n1(n,t,e,i,s,a){s=e1(s),i.context===null?i.context=s:i.pendingContext=s,i=ia(t),i.payload={element:e},a=a===void 0?null:a,a!==null&&(i.callback=a),e=sa(n,i,t),e!==null&&(An(e,n,t),Al(e,n,t))}function mv(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<t?e:t}}function f0(n,t){mv(n,t),(n=n.alternate)&&mv(n,t)}function i1(n){if(n.tag===13){var t=ha(n,67108864);t!==null&&An(t,n,67108864),f0(n,67108864)}}var xh=!0;function hw(n,t,e,i){var s=Gt.T;Gt.T=null;var a=Me.p;try{Me.p=2,d0(n,t,e,i)}finally{Me.p=a,Gt.T=s}}function fw(n,t,e,i){var s=Gt.T;Gt.T=null;var a=Me.p;try{Me.p=8,d0(n,t,e,i)}finally{Me.p=a,Gt.T=s}}function d0(n,t,e,i){if(xh){var s=Tp(i);if(s===null)Xf(n,t,i,Sh,e),gv(n,i);else if(pw(s,n,t,e,i))i.stopPropagation();else if(gv(n,i),t&4&&-1<dw.indexOf(n)){for(;s!==null;){var a=zo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Na(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Yn(r);o.entanglements[1]|=l,r&=~l}Zi(a),!(De&6)&&(hh=ji()+500,mc(0))}}break;case 13:o=ha(a,2),o!==null&&An(o,a,2),Kh(),f0(a,2)}if(a=Tp(i),a===null&&Xf(n,t,i,Sh,e),a===s)break;s=a}s!==null&&i.stopPropagation()}else Xf(n,t,i,null,e)}}function Tp(n){return n=Rm(n),p0(n)}var Sh=null;function p0(n){if(Sh=null,n=Ba(n),n!==null){var t=Uo(n);if(t===null)n=null;else{var e=t.tag;if(e===13){if(n=Oy(t),n!==null)return n;n=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null)}}return Sh=n,null}function s1(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($b()){case Iy:return 2;case By:return 8;case Qu:case Jb:return 32;case Fy:return 268435456;default:return 32}default:return 32}}var Ap=!1,oa=null,la=null,ca=null,Jl=new Map,tc=new Map,$s=[],dw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gv(n,t){switch(n){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":la=null;break;case"mouseover":case"mouseout":ca=null;break;case"pointerover":case"pointerout":Jl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tc.delete(t.pointerId)}}function Ko(n,t,e,i,s,a){return n===null||n.nativeEvent!==a?(n={blockedOn:t,domEventName:e,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=zo(t),t!==null&&i1(t)),n):(n.eventSystemFlags|=i,t=n.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),n)}function pw(n,t,e,i,s){switch(t){case"focusin":return oa=Ko(oa,n,t,e,i,s),!0;case"dragenter":return la=Ko(la,n,t,e,i,s),!0;case"mouseover":return ca=Ko(ca,n,t,e,i,s),!0;case"pointerover":var a=s.pointerId;return Jl.set(a,Ko(Jl.get(a)||null,n,t,e,i,s)),!0;case"gotpointercapture":return a=s.pointerId,tc.set(a,Ko(tc.get(a)||null,n,t,e,i,s)),!0}return!1}function a1(n){var t=Ba(n.target);if(t!==null){var e=Uo(t);if(e!==null){if(t=e.tag,t===13){if(t=Oy(e),t!==null){n.blockedOn=t,lM(n.priority,function(){if(e.tag===13){var i=Zn(),s=ha(e,i);s!==null&&An(s,e,i),f0(e,i)}});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fu(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var e=Tp(n.nativeEvent);if(e===null){e=n.nativeEvent;var i=new e.constructor(e.type,e);Wd=i,e.target.dispatchEvent(i),Wd=null}else return t=zo(e),t!==null&&i1(t),n.blockedOn=e,!1;t.shift()}return!0}function vv(n,t,e){Fu(n)&&e.delete(t)}function mw(){Ap=!1,oa!==null&&Fu(oa)&&(oa=null),la!==null&&Fu(la)&&(la=null),ca!==null&&Fu(ca)&&(ca=null),Jl.forEach(vv),tc.forEach(vv)}function Bc(n,t){n.blockedOn===t&&(n.blockedOn=null,Ap||(Ap=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,mw)))}var Fc=null;function _v(n){Fc!==n&&(Fc=n,$e.unstable_scheduleCallback($e.unstable_NormalPriority,function(){Fc===n&&(Fc=null);for(var t=0;t<n.length;t+=3){var e=n[t],i=n[t+1],s=n[t+2];if(typeof i!="function"){if(p0(i||e)===null)continue;break}var a=zo(e);a!==null&&(n.splice(t,3),t-=3,ep(a,{pending:!0,data:s,method:e.method,action:i},i,s))}}))}function ec(n){function t(l){return Bc(l,n)}oa!==null&&Bc(oa,n),la!==null&&Bc(la,n),ca!==null&&Bc(ca,n),Jl.forEach(t),tc.forEach(t);for(var e=0;e<$s.length;e++){var i=$s[e];i.blockedOn===n&&(i.blockedOn=null)}for(;0<$s.length&&(e=$s[0],e.blockedOn===null);)a1(e),e.blockedOn===null&&$s.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(i=0;i<e.length;i+=3){var s=e[i],a=e[i+1],r=s[On]||null;if(typeof a=="function")r||_v(e);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[On]||null)o=r.formAction;else if(p0(s)!==null)continue}else o=r.action;typeof o=="function"?e[i+1]=o:(e.splice(i,3),i-=3),_v(e)}}}function m0(n){this._internalRoot=n}Jh.prototype.render=m0.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(J(409));var e=t.current,i=Zn();n1(e,i,n,t,null,null)};Jh.prototype.unmount=m0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;n.tag===0&&ho(),n1(n.current,2,null,n,null,null),Kh(),t[Oo]=null}};function Jh(n){this._internalRoot=n}Jh.prototype.unstable_scheduleHydration=function(n){if(n){var t=Wy();n={blockedOn:null,target:n,priority:t};for(var e=0;e<$s.length&&t!==0&&t<$s[e].priority;e++);$s.splice(e,0,n),e===0&&a1(n)}};var yv=Dy.version;if(yv!=="19.0.0")throw Error(J(527,yv,"19.0.0"));Me.findDOMNode=function(n){var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(J(188)):(n=Object.keys(n).join(","),Error(J(268,n)));return n=Zb(t),n=n!==null?zy(n):null,n=n===null?null:n.stateNode,n};var gw={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Gt,findFiberByHostInstance:Ba,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hc.isDisabled&&Hc.supportsFiber)try{rc=Hc.inject(gw),Xn=Hc}catch{}}Bh.createRoot=function(n,t){if(!Ly(n))throw Error(J(299));var e=!1,i="",s=nS,a=iS,r=sS,o=null;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=t1(n,1,!1,null,null,e,i,s,a,r,o,null),n[Oo]=t.current,c0(n.nodeType===8?n.parentNode:n),new m0(t)};Bh.hydrateRoot=function(n,t,e){if(!Ly(n))throw Error(J(299));var i=!1,s="",a=nS,r=iS,o=sS,l=null,c=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(l=e.unstable_transitionCallbacks),e.formState!==void 0&&(c=e.formState)),t=t1(n,1,!0,t,e??null,i,s,a,r,o,l,c),t.context=e1(null),e=t.current,i=Zn(),s=ia(i),s.callback=null,sa(e,s,i),t.current.lanes=i,lc(t,i),Zi(t),n[Oo]=t.current,c0(n),new Jh(t)};Bh.version="19.0.0";function r1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r1)}catch(n){console.error(n)}}r1(),Ey.exports=Bh;var vw=Ey.exports;const _w=py(vw);var Cp=new Map,Vc=new WeakMap,xv=0,yw=void 0;function xw(n){return n?(Vc.has(n)||(xv+=1,Vc.set(n,xv.toString())),Vc.get(n)):"0"}function Sw(n){return Object.keys(n).sort().filter(t=>n[t]!==void 0).map(t=>`${t}_${t==="root"?xw(n.root):n[t]}`).toString()}function bw(n){const t=Sw(n);let e=Cp.get(t);if(!e){const i=new Map;let s;const a=new IntersectionObserver(r=>{r.forEach(o=>{var l;const c=o.isIntersecting&&s.some(u=>o.intersectionRatio>=u);n.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=c),(l=i.get(o.target))==null||l.forEach(u=>{u(c,o)})})},n);s=a.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),e={id:t,observer:a,elements:i},Cp.set(t,e)}return e}function Mw(n,t,e={},i=yw){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=n.getBoundingClientRect();return t(i,{isIntersecting:i,target:n,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:s,observer:a,elements:r}=bw(e),o=r.get(n)||[];return r.has(n)||r.set(n,o),o.push(t),a.observe(n),function(){o.splice(o.indexOf(t),1),o.length===0&&(r.delete(n),a.unobserve(n)),r.size===0&&(a.disconnect(),Cp.delete(s))}}function o1({threshold:n,delay:t,trackVisibility:e,rootMargin:i,root:s,triggerOnce:a,skip:r,initialInView:o,fallbackInView:l,onChange:c}={}){var u;const[f,h]=kt.useState(null),p=kt.useRef(c),[g,_]=kt.useState({inView:!!o,entry:void 0});p.current=c,kt.useEffect(()=>{if(r||!f)return;let y;return y=Mw(f,(x,T)=>{_({inView:x,entry:T}),p.current&&p.current(x,T),T.isIntersecting&&a&&y&&(y(),y=void 0)},{root:s,rootMargin:i,threshold:n,trackVisibility:e,delay:t},l),()=>{y&&y()}},[Array.isArray(n)?n.toString():n,f,s,i,a,r,e,l,t]);const m=(u=g.entry)==null?void 0:u.target,d=kt.useRef(void 0);!f&&m&&!a&&!r&&d.current!==m&&(d.current=m,_({inView:!!o,entry:void 0}));const v=[h,g.inView,g.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const gr=n=>{const{children:t,id:e,height:i,style:s,darkMode:a,revealPercent:r}=n,o=r||"-35% 0px",{ref:l,inView:c}=o1({root:null,rootMargin:o,triggerOnce:!0});return B.jsx("section",{ref:l,id:e,style:{minHeight:i,...s},className:`section ${c?"section-visible":"section-hidden"} ${a?"dark-mode":"light-mode"}`,children:B.jsx("div",{className:"section-content",children:t})})},l1=({darkMode:n,threeJSEntry:t,style:e})=>{const i=kt.useRef(null),s=kt.useRef(null),a=kt.useRef(null);return kt.useEffect(()=>{var c;if(typeof t!="function"){console.error("Invalid threeJSEntry function provided.");return}let r=(c=i.current)==null?void 0:c.parentElement;for(;r&&r.tagName!=="SECTION";)r=r.parentElement;s.current=r,console.log("Parent Element:",r),console.log("ThreeJS Container:",i.current),a.current=t(i,r),(()=>{var u;(u=a.current)!=null&&u.handleDarkModeChange&&a.current.handleDarkModeChange(n)})();const l=setTimeout(()=>{var u;(u=a.current)!=null&&u.handleResize&&a.current.handleResize(i)},1e3);return()=>{var u;clearTimeout(l),(u=a.current)!=null&&u.cleanup&&a.current.cleanup()}},[n,t]),B.jsx("div",{ref:i,style:{minWidth:"250px",minHeight:"250px",maxHeight:"100%",height:"100%",width:"100%",...e}})},g0=({children:n,className:t,style:e,childStyle:i,revealMode:s,revealPercent:a})=>{const r=s||"rootMargin",{ref:o,inView:l}=o1(r==="rootMargin"?{root:null,rootMargin:a,triggerOnce:!0}:{threshold:a,triggerOnce:!0});return B.jsx("div",{ref:o,className:`flex-reveal ${t} ${l?"flex-reveal-visible":"flex-reveal-hidden"}`,style:{display:"flex",width:"100%",...e},children:Ih.Children.map(n,(c,u)=>B.jsx("div",{className:"flex-child",style:{transitionDelay:`${u*.5}s`,flex:"1",flexWrap:"wrap",...i},children:c}))})},bh=({darkMode:n,text:t,style:e,onClick:i})=>(kt.useState(!1),kt.useState(!1),B.jsx("button",{onClick:i,className:`minimal-button ${n?"dark-mode":"light-mode"}`,style:{padding:"10px 20px",cursor:"pointer",...e},children:t})),Ew=({darkMode:n,isOpen:t,content:e,style:i,onClose:s})=>{if(!t)return null;console.log("LightboxModal darkMode:",n);const a=kt.isValidElement(e)?kt.cloneElement(e,{darkMode:n}):e;return B.jsx("div",{className:"lightbox-overlay",onClick:s,children:B.jsxs("div",{className:`lightbox-content ${n?"dark-mode":"light-mode"}`,onClick:r=>r.stopPropagation(),style:i,children:[B.jsx(bh,{darkMode:n,className:`close-button ${n?"dark-mode":"light-mode"}`,onClick:s,text:"X",style:{position:"absolute",top:"10px",right:"10px",fontWeight:"bold"}}),B.jsx("div",{children:a})]})})};class oU extends Ih.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,e){console.error("Error caught in ErrorBoundary:",t,e)}render(){return this.state.hasError?B.jsx("h2",{children:"Something went wrong. Please try again later."}):this.props.children}}const ww=({darkMode:n,toggleDarkMode:t})=>(kt.useState({x:0,y:0}),B.jsxs("div",{className:"settings",children:[B.jsx("button",{className:"settings-icon",children:B.jsx("img",{src:`assets/Images/settings_gear_icon_${n?"White.png":"Black.png"}`,alt:"Settings",width:"25px",size:"25px"})}),B.jsxs("div",{className:`settings-menu-wrapper ${n?"dark-mode":"light-mode"}`,children:[" ",B.jsx("div",{className:`settings-menu ${n?"dark-mode":"light-mode"}`,children:B.jsxs("button",{onClick:t,className:"settingsMenuButton",children:[B.jsx("img",{className:"clickableImage",src:`assets/Images/${n?"DarkMode.png":"LightMode.png"}`,alt:n?"Dark Mode":"Light Mode",style:{width:"25px",height:"25px",marginRight:"0.5rem"}}),n?"Switch to Light Mode":"Switch to Dark Mode"]})})]})]}));function Tw({...n}){const t=kt.useRef(null),e=i=>{const s=t.current;s.style.height="auto",s.style.height=`${s.scrollHeight}px`,n.onChange&&n.onChange(i)};return B.jsx("textarea",{...n,ref:t,onInput:e,style:{width:"100%",minHeight:"40px",maxHeight:"300px",resize:"none",borderRadius:"4px",...n.style}})}const Aw=({darkMode:n})=>{const[t,e]=kt.useState({name:"",email:"",phone:"",message:""}),[i,s]=kt.useState({name:"",email:"",phone:"",message:""}),a=l=>{const{id:c,value:u}=l.target;e({...t,[c]:u})},r=()=>{const l={},c=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,u=/(^04\d{8}$)|(^\+?[1-9]\d{1,14}$)/;return t.name||(l.name="Name is required"),t.email?c.test(t.email)||(l.email="Please enter a valid email address"):l.email="Email is required",t.phone&&!u.test(t.phone)&&(l.phone="Please enter a valid phone number in international format"),t.message||(l.message="Message is required"),s(l),Object.keys(l).length===0},o=l=>{if(l.preventDefault(),r()){const c=document.getElementById("contactForm"),u=new FormData(c);fetch("https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/formResponse",{method:"POST",body:u,mode:"no-cors"}).then(f=>{alert("Form submitted successfully!")}).catch(f=>{console.error("Error submitting form:",f),alert("There was an error submitting the form.")})}};return B.jsxs("div",{className:`form-container ${n?"dark-mode":"light-mode"}`,children:[B.jsx("h2",{children:"Say Hi!"}),B.jsx("iframe",{name:"iframe",title:"Hidden iframe for form submission",style:{display:"none"}}),B.jsx("form",{action:"https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/formResponse",method:"POST",id:"contactForm",target:"iframe",children:B.jsxs("div",{style:{display:"flex",gap:"20px",flexDirection:"column"},children:[B.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",justifyContent:"center"},children:[B.jsxs("div",{className:`input-group ${n?"dark-mode":"light-mode"}`,style:{flexGrow:"2"},children:[B.jsx("input",{type:"text",className:t.name?"not-empty":"",id:"name",name:"entry.1954550861",placeholder:"",value:t.name,onChange:a,required:!0}),B.jsx("label",{htmlFor:"name",children:"Name"}),i.name&&B.jsx("span",{className:"error",children:i.name})]}),B.jsxs("div",{className:`input-group ${n?"dark-mode":"light-mode"}`,style:{flexGrow:"1"},children:[B.jsx("input",{type:"tel",id:"phone",name:"entry.561916195",className:t.phone?"not-empty":"",value:t.phone,onChange:a,pattern:"(^04\\d{8}$)|(^\\+?[1-9]\\d{1,14}$)",title:`Phone number must be in the format: 
                       - Local (Australian): 04xxxxxxxx 
                       - International: +1234567890`,placeholder:"Enter your phone number"}),B.jsx("label",{htmlFor:"phone",children:"Phone Number (Optional)"}),i.phone&&B.jsx("span",{className:"error",children:i.phone})]})]}),B.jsxs("div",{className:`input-group ${n?"dark-mode":"light-mode"}`,children:[B.jsx("input",{type:"email",id:"email",name:"entry.1965469943",className:t.email?"not-empty":"",value:t.email,onChange:a,required:!0}),B.jsx("label",{htmlFor:"email",children:"Email"}),i.email&&B.jsx("span",{className:"error",children:i.email})]}),B.jsxs("div",{className:`input-group ${n?"dark-mode":"light-mode"}`,children:[B.jsx(Tw,{id:"message",name:"entry.1168516071",value:t.message,onChange:a,required:!0}),B.jsx("label",{htmlFor:"message",children:"Message"}),i.message&&B.jsx("span",{className:"error",children:i.message})]}),B.jsx("button",{type:"submit",onClick:o,children:"Submit"})]})})]})},c1=({darkMode:n,scrollToSection:t})=>{const[e,i]=kt.useState(!1);kt.useState(!1),kt.useState(!1);const[s,a]=kt.useState(!1);return kt.useEffect(()=>{a(!!e)},[e]),B.jsx("div",{children:B.jsxs(g0,{revealMode:"threshold",style:{justifyContent:"center",alignItems:"center",marginTop:"2rem",gap:"2rem"},children:[B.jsxs("div",{className:"buttons",style:{display:"flex",gap:"1rem"},children:[B.jsx(bh,{darkMode:n,text:"Résumé",onClick:()=>window.open("assets/Files/Resume.pdf","_blank")}),B.jsx(bh,{darkMode:n,onClick:t,text:"Contact"})]}),B.jsxs("div",{className:"images",style:{display:"flex",gap:"1rem"},children:[B.jsx("div",{className:"img",style:{flex:"0"},children:B.jsx("a",{href:"https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b",target:"_blank",rel:"noreferer",children:B.jsx("img",{className:"clickableImage",src:"assets/Images/linkedIn_logo.png",alt:"LinkedIn",style:{width:"100px",height:"100px",marginRight:"8px"}})})}),B.jsx("div",{className:"img",style:{flex:"0"},children:B.jsx("a",{href:"https://github.com/Peregrine777",target:"_blank",rel:"noreferer",children:B.jsx("img",{className:"clickableImage",src:`assets/Images/github-logo_${n?"dark.png":"light.png"}`,alt:"GitHub",style:{width:"100px",height:"100px",marginRight:"8px"}})})})]})]})})},Cw=({content:n,darkMode:t,contentRenderer:e})=>{const[i,s]=kt.useState(null),[a,r]=kt.useState(null),[o,l]=kt.useState(!1),[c,u]=kt.useState([]),[f,h]=kt.useState(!1),p=kt.useRef(null),g=d=>{if(p.current){const{left:v,width:y}=d.getBoundingClientRect(),x=document.querySelector(".menu-items").getBoundingClientRect().left;p.current.style.transform=`translateX(${v-x}px)`,p.current.style.width=`${y}px`}},_=(d,v)=>{g(d),i===v?(s(null),r(null),l(!1),h(!1)):(h(!1),setTimeout(()=>{var y;s(v),(y=n[v])!=null&&y.subOptions?(u(n[v].subOptions),r(n[v].subOptions[0]),l(!0)):l(!1),h(!0)},300))};kt.useEffect(()=>{const d=Object.keys(n)[0];s(d),h(!0)},[n]);const m=d=>{a===d?(r(null),h(!1)):(h(!1),setTimeout(()=>{r(d),h(!0)},300))};return B.jsxs("div",{className:`menu-bar ${t?"dark-mode":""}`,children:[B.jsxs("div",{className:"menu-items",children:[B.jsx("div",{className:"menu-underline",ref:p}),Object.keys(n).map(d=>B.jsx("div",{className:`menu-item ${i===d?"active":""}`,onClick:v=>_(v.currentTarget,d),children:d},d))]}),o&&B.jsx("div",{className:"sub-menu",children:c.map(d=>B.jsx("div",{className:`sub-menu-item ${a===d?"active":""}`,onClick:()=>m(d),children:d},d))}),B.jsx("div",{className:`content ${f?"fade-in":"fade-out"}`,style:{overflow:"auto"},children:e?e(i,a):a?`Content for ${a}`:i?`Content for ${i}`:"Select a section or sub-option"})]})},Rw=({darkMode:n,src:t,alt:e,style:i})=>{class s extends Ih.Component{constructor(){super(...arguments);Ue(this,"state",{noVariant:!1,hasError:!1,isLoading:!0});Ue(this,"handleError",()=>{const{noVariant:o}=this.state;if(!o){this.setState({noVariant:!0});return}this.setState({hasError:!0})});Ue(this,"handleLoad",()=>{this.setState({isLoading:!1})});Ue(this,"getImagePath",o=>{if(!o)return null;const[l,c]=o.split(/(?=\.[^.]+$)/);return n?`${l}_White${c}`:`${l}_Black${c}`})}render(){const{hasError:o,noVariant:l,isLoading:c}=this.state,{src:u,alt:f,style:h}=this.props,p=this.getImagePath(u),g={width:h.width||"40px",height:h.height||"40px",backgroundColor:"#f0f0f0",display:c?"block":"none"};return l?B.jsxs("div",{children:[B.jsx("div",{style:g}),B.jsx("img",{src:u,onError:this.handleError,onLoad:this.handleLoad,alt:f,style:{...h,display:c?"none":"unset",opacity:c?0:1,transition:"opacity 0.3s ease-in-out"}})]}):o?B.jsxs("div",{children:[B.jsx("div",{style:g}),B.jsx("img",{src:"assets/Images/404.png",alt:f,style:h})]}):B.jsxs("div",{children:[B.jsx("div",{style:g}),B.jsx("img",{src:p,onError:this.handleError,onLoad:this.handleLoad,alt:f,style:{...h,width:"40px",display:c?"none":"unset",opacity:c?0:1,transition:"opacity 0.3s ease-in-out"}})]})}}return B.jsx(s,{src:t,alt:e,style:i})},Dw=({darkMode:n})=>{const[t,e]=kt.useState([]),[i,s]=kt.useState(!1);if(kt.useEffect(()=>{fetch("assets/Data/skills.json").then(r=>r.json()).then(r=>{console.log("Categories and Skill Counts:",r.map(o=>({category:o.title,skillCount:o.skills.length}))),e(r),s(!0)}).catch(r=>console.error("Error loading skills:",r))},[]),!i)return B.jsx("p",{children:"Loading skills..."});const a=r=>{if(!r)return null;const[o,l]=r.split(/(?=\.[^.]+$)/);return n?`${o}_White${l}`:`${o}_Black${l}`};return B.jsx("div",{children:t.map(r=>B.jsxs("div",{children:[B.jsx("h2",{style:{textAlign:"center",margin:"0.2rem"},children:r.title}),B.jsx("div",{className:"partial-divider"}),B.jsx(g0,{style:{justifyContent:"center",paddingTop:"1rem",paddingBottom:"1rem"},childStyle:{flexGrow:"0",minWidth:"150px"},children:r.skills.map(o=>(a(o.image),B.jsxs("div",{className:"skillItem",style:{},children:[B.jsx(Rw,{darkMode:n,src:`assets/Images/Skills/${o.image}`,alt:o.name,style:{maxWidth:"100%",width:"50px",objectFit:"contain",alignSelf:"normal",height:"auto"}}),B.jsx("p",{style:{marginTop:"0.1rem",fontFamily:"Montserrat, sans-serif",fontWeight:"400"},children:o.name})]},o.name)))})]},r.title))})},Lw=({darkMode:n,toggleDarkMode:t})=>B.jsxs("header",{className:`header ${n?"dark-mode":"light-mode"}`,children:[B.jsxs("div",{children:[B.jsx("img",{src:`assets/Images/Peregrine_${n?"dark.png":"light.png"}`,alt:"Logo",className:"logo",style:{marginBottom:"1rem",verticalAlign:"middle",objectFit:"contain",width:"50px",height:"50px"}}),B.jsx("h1",{style:{display:"inline-block",paddingLeft:"10px"},children:"Samuel Mckenzie-Sell"})]}),B.jsx(ww,{darkMode:n,toggleDarkMode:t})]}),Nw=({darkMode:n})=>B.jsxs("div",{className:"container",style:{justifyContent:"center",alignItems:"center",flex:"0 1 auto",margin:"auto"},children:[B.jsx("div",{className:"column",style:{flexBasis:"10%",flex:"0 0 auto"},children:B.jsx("img",{src:`assets/Images/Peregrine_${n?"dark.png":"light.png"}`,style:{height:"100px",verticalAlign:"middle"}})}),B.jsxs("div",{className:"column",style:{flexBasis:"45%",flex:"0 0 auto",alignItems:"left",textAlign:"left"},children:[B.jsx("h2",{style:{textAlign:"left"},children:" Links "}),B.jsx("a",{href:"https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b",children:"LinkedIn"}),B.jsx("br",{}),B.jsx("a",{href:"https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b",children:"GitHub"}),B.jsx("p",{style:{textAlign:"left",fontSize:"24px"},children:" "}),B.jsx(c1,{darkMode:n})]}),B.jsxs("div",{className:"column",style:{flex:"0",alignSelf:"start",textAlign:"left"},children:[B.jsx("h2",{style:{textAlign:"left"},children:" Contact "}),B.jsx("p",{children:" samuelmckenziesell@gmail.com "}),B.jsx("p",{children:" +61 0401 384 885 "})]})]}),Pw=({darkMode:n})=>{const t={Games:{subOptions:[]},"Game Engines":{subOptions:["OpenGL engine","Physics"]}},e=({title:c,img:u,link:f,description:h,children:p})=>B.jsxs("div",{className:"game",children:[B.jsx(i,{img:u,link:f}),B.jsx(s,{title:c,descr:h,children:p})]}),i=({img:c,link:u})=>B.jsx("a",{className:"game-icon",href:u,target:"_blank",rel:"noopener noreferrer",children:B.jsx("img",{className:"game-icon-img",src:c,alt:"Game Icon"})}),s=({title:c,descr:u,children:f})=>B.jsxs("div",{className:"game-info",children:[B.jsx(a,{children:c}),B.jsx(r,{children:f}),B.jsx(o,{children:u})]}),a=({children:c})=>B.jsx("div",{className:"game-title",children:c}),r=({children:c})=>B.jsx("div",{className:"features",children:c}),o=({children:c})=>B.jsx("div",{className:"game-description",children:c}),l=(c,u)=>u?B.jsxs("div",{children:[B.jsx("h2",{children:u}),B.jsxs("p",{children:["This is the content for ",u,"."]})]}):c?c==="Games"?B.jsxs("div",{children:[B.jsx("h2",{children:"Games"}),B.jsxs("div",{className:"game-list",children:[B.jsx(e,{title:"Gloria Armada",img:"assets/Images/Gloria_Armada.png",link:"https://chanel-parfait.itch.io/gloria-armada",description:"Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"}),B.jsx("h2",{style:{textAlign:"left",marginBottom:"0px"},children:"Tech Demoes"}),B.jsx(e,{title:"Gloria Armada",img:"assets/Images/Gloria_Armada.png",link:"https://chanel-parfait.itch.io/gloria-armada",description:"Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"})]})]}):B.jsxs("div",{children:[B.jsx("h2",{children:c}),B.jsxs("p",{children:["This is the content for ",c,"."]})]}):B.jsx("p",{children:"Please select a section or sub-option."});return B.jsxs("div",{style:{textAlign:"center",maxHeight:"100vh"},children:[B.jsx("h2",{children:"Game Development"}),B.jsx("div",{children:B.jsx(Cw,{content:t,darkMode:n,contentRenderer:l})})]})},Uw=({darkMode:n})=>{const t=n?"white":"#333";return B.jsxs("section",{className:"analytics-overview",children:[B.jsxs("div",{className:"section-header",children:[B.jsx("h2",{style:{color:t},children:"Data Analytics Expertise"}),B.jsx("p",{children:"Leveraging data to uncover insights and drive business decisions. Although I work on sensitive projects, I can offer a range of services in statistical analysis, predictive modeling, and data visualization."})]}),B.jsxs("div",{className:"skills-and-tools",children:[B.jsx("h3",{children:"Tools & Techniques"}),B.jsxs("ul",{children:[B.jsx("li",{children:"Statistical Analysis: Python (pandas, numpy, scipy)"}),B.jsx("li",{children:"Data Visualization: Tableau, Power BI, Plotly"}),B.jsx("li",{children:"Database Management: SQL, PostgreSQL, NoSQL"}),B.jsx("li",{children:"Machine Learning: Scikit-learn, TensorFlow, Keras"}),B.jsx("li",{children:"Data Processing: ETL, web scraping, APIs"})]})]}),B.jsxs("div",{className:"impact",children:[B.jsx("h3",{children:"Impact"}),B.jsx("p",{children:"In my past work, I've helped businesses improve decision-making with data-driven insights, built predictive models for revenue forecasting, and developed interactive dashboards to monitor key performance metrics. My work directly contributes to operational efficiency and informed strategic decisions."})]}),B.jsx("div",{className:"visuals",children:B.jsx("div",{className:"sample-graph",children:B.jsx("img",{src:"/path-to-placeholder-image.png"})})})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const v0="168",fo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},to={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ow=0,Sv=1,zw=2,u1=1,h1=2,fs=3,Ds=0,Cn=1,ci=2,En=0,po=1,Rp=2,bv=3,Mv=4,f1=5,vs=100,Iw=101,Bw=102,Fw=103,Hw=104,Dp=200,Vw=201,kw=202,Gw=203,Lp=204,Np=205,d1=206,jw=207,p1=208,Ww=209,qw=210,Xw=211,Yw=212,Zw=213,Kw=214,Qw=0,$w=1,Jw=2,Mh=3,tT=4,eT=5,nT=6,iT=7,_0=0,sT=1,aT=2,ua=0,m1=1,g1=2,v1=3,y0=4,rT=5,x0=6,_1=7,y1=300,Ao=301,Co=302,Pp=303,Up=304,tf=306,Ro=1e3,Ha=1001,Op=1002,Sn=1003,oT=1004,kc=1005,bi=1006,Kf=1007,Va=1008,Ls=1009,x1=1010,S1=1011,nc=1012,S0=1013,tr=1014,ki=1015,wi=1016,b0=1017,M0=1018,er=1020,b1=35902,M1=1021,E1=1022,Wn=1023,w1=1024,T1=1025,mo=1026,nr=1027,E0=1028,w0=1029,A1=1030,T0=1031,A0=1033,Hu=33776,Vu=33777,ku=33778,Gu=33779,zp=35840,Ip=35841,Bp=35842,Fp=35843,Hp=36196,Vp=37492,kp=37496,Gp=37808,jp=37809,Wp=37810,qp=37811,Xp=37812,Yp=37813,Zp=37814,Kp=37815,Qp=37816,$p=37817,Jp=37818,tm=37819,em=37820,nm=37821,ju=36492,im=36494,sm=36495,C1=36283,am=36284,rm=36285,om=36286,lT=3200,cT=3201,ef=0,uT=1,Js="",xi="srgb",_a="srgb-linear",C0="display-p3",nf="display-p3-linear",Eh="linear",me="srgb",wh="rec709",Th="p3",vr=7680,Ev=519,hT=512,fT=513,dT=514,R1=515,pT=516,mT=517,gT=518,vT=519,wv=35044,Tv="300 es",Es=2e3,Ah=2001;class ur{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Av=1234567;const Ul=Math.PI/180,Do=180/Math.PI;function Ho(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function dn(n,t,e){return Math.max(t,Math.min(e,n))}function R0(n,t){return(n%t+t)%t}function _T(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function yT(n,t,e){return n!==t?(e-n)/(t-n):0}function Ol(n,t,e){return(1-e)*n+e*t}function xT(n,t,e,i){return Ol(n,t,1-Math.exp(-e*i))}function ST(n,t=1){return t-Math.abs(R0(n,t*2)-t)}function bT(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function MT(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ET(n,t){return n+Math.floor(Math.random()*(t-n+1))}function wT(n,t){return n+Math.random()*(t-n)}function TT(n){return n*(.5-Math.random())}function AT(n){n!==void 0&&(Av=n);let t=Av+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function CT(n){return n*Ul}function RT(n){return n*Do}function DT(n){return(n&n-1)===0&&n!==0}function LT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function NT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function PT(n,t,e,i,s){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+i)/2),u=r((t+i)/2),f=a((t-i)/2),h=r((t-i)/2),p=a((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ch={DEG2RAD:Ul,RAD2DEG:Do,generateUUID:Ho,clamp:dn,euclideanModulo:R0,mapLinear:_T,inverseLerp:yT,lerp:Ol,damp:xT,pingpong:ST,smoothstep:bT,smootherstep:MT,randInt:ET,randFloat:wT,randFloatSpread:TT,seededRandom:AT,degToRad:CT,radToDeg:RT,isPowerOfTwo:DT,ceilPowerOfTwo:LT,floorPowerOfTwo:NT,setQuaternionFromProperEuler:PT,normalize:bn,denormalize:Hr};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,s,a,r,o,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,l,c)}set(t,e,i,s,a,r,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],v=s[1],y=s[4],x=s[7],T=s[2],b=s[5],M=s[8];return a[0]=r*_+o*v+l*T,a[3]=r*m+o*y+l*b,a[6]=r*d+o*x+l*M,a[1]=c*_+u*v+f*T,a[4]=c*m+u*y+f*b,a[7]=c*d+u*x+f*M,a[2]=h*_+p*v+g*T,a[5]=h*m+p*y+g*b,a[8]=h*d+p*x+g*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*r-o*c,h=o*l-u*a,p=c*a-r*l,g=e*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*i)*_,t[2]=(o*i-s*r)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*a-o*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(r*e-i*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qf.makeScale(t,e)),this}rotate(t){return this.premultiply(Qf.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new qt;function D1(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ic(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function UT(){const n=ic("canvas");return n.style.display="block",n}const Cv={};function zl(n){n in Cv||(Cv[n]=!0,console.warn(n))}function OT(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}const Rv=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dv=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qo={[_a]:{transfer:Eh,primaries:wh,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[xi]:{transfer:me,primaries:wh,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[nf]:{transfer:Eh,primaries:Th,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Dv),fromReference:n=>n.applyMatrix3(Rv)},[C0]:{transfer:me,primaries:Th,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Dv),fromReference:n=>n.applyMatrix3(Rv).convertLinearToSRGB()}},zT=new Set([_a,nf]),se={enabled:!0,_workingColorSpace:_a,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!zT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Qo[t].toReference,s=Qo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Qo[n].primaries},getTransfer:function(n){return n===Js?Eh:Qo[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Qo[t].luminanceCoefficients)}};function go(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $f(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _r;class IT{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_r===void 0&&(_r=ic("canvas")),_r.width=t.width,_r.height=t.height;const i=_r.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=_r}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ic("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=go(a[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(go(e[i]/255)*255):e[i]=go(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let BT=0;class L1{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Ho(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Jf(s[r].image)):a.push(Jf(s[r]))}else a=Jf(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function Jf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?IT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FT=0;class on extends ur{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,i=Ha,s=Ha,a=bi,r=Va,o=Wn,l=Ls,c=on.DEFAULT_ANISOTROPY,u=Js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=Ho(),this.name="",this.source=new L1(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==y1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ro:t.x=t.x-Math.floor(t.x);break;case Ha:t.x=t.x<0?0:1;break;case Op:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ro:t.y=t.y-Math.floor(t.y);break;case Ha:t.y=t.y<0?0:1;break;case Op:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=y1;on.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,i=0,s=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(p+1)/2,T=(d+1)/2,b=(u+h)/4,M=(f+_)/4,D=(g+m)/4;return y>x&&y>T?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=b/i,a=M/i):x>T?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=b/s,a=D/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=M/a,s=D/a),this.set(i,s,a,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HT extends ur{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new L1(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends HT{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class N1 extends on{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class VT extends on{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ns=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==p||u!==g){let m=1-o;const d=l*h+c*p+u*g+f*_,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const T=Math.sqrt(y),b=Math.atan2(T,d*v);m=Math.sin(m*b)/T,o=Math.sin(o*b)/T}const x=o*v;if(l=l*m+h*x,c=c*m+p*x,u=u*m+g*x,f=f*m+_*x,m===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,a,r){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=a[r],h=a[r+1],p=a[r+2],g=a[r+3];return t[e]=o*g+u*f+l*p-c*h,t[e+1]=l*g+u*h+c*f-o*p,t[e+2]=c*g+u*p+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(a/2),h=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(dn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,a=this._z,r=this._w;let o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=r*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lv.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lv.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*e-a*s),f=2*(a*i-r*e);return this.x=e+l*c+r*f-o*u,this.y=i+l*u+o*c-a*f,this.z=s+l*f+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return td.copy(this).projectOnVector(t),this.sub(td)}reflect(t){return this.sub(td.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new U,Lv=new Ns;class _c{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,mi):mi.fromBufferAttribute(a,r),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gc.copy(i.boundingBox)),Gc.applyMatrix4(t.matrixWorld),this.union(Gc)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),jc.subVectors(this.max,$o),yr.subVectors(t.a,$o),xr.subVectors(t.b,$o),Sr.subVectors(t.c,$o),Bs.subVectors(xr,yr),Fs.subVectors(Sr,xr),Ea.subVectors(yr,Sr);let e=[0,-Bs.z,Bs.y,0,-Fs.z,Fs.y,0,-Ea.z,Ea.y,Bs.z,0,-Bs.x,Fs.z,0,-Fs.x,Ea.z,0,-Ea.x,-Bs.y,Bs.x,0,-Fs.y,Fs.x,0,-Ea.y,Ea.x,0];return!ed(e,yr,xr,Sr,jc)||(e=[1,0,0,0,1,0,0,0,1],!ed(e,yr,xr,Sr,jc))?!1:(Wc.crossVectors(Bs,Fs),e=[Wc.x,Wc.y,Wc.z],ed(e,yr,xr,Sr,jc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(es),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const es=[new U,new U,new U,new U,new U,new U,new U,new U],mi=new U,Gc=new _c,yr=new U,xr=new U,Sr=new U,Bs=new U,Fs=new U,Ea=new U,$o=new U,jc=new U,Wc=new U,wa=new U;function ed(n,t,e,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){wa.fromArray(n,a);const o=s.x*Math.abs(wa.x)+s.y*Math.abs(wa.y)+s.z*Math.abs(wa.z),l=t.dot(wa),c=e.dot(wa),u=i.dot(wa);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const kT=new _c,Jo=new U,nd=new U;class yc{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):kT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jo.subVectors(t,this.center);const e=Jo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Jo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jo.copy(t.center).add(nd)),this.expandByPoint(Jo.copy(t.center).sub(nd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ns=new U,id=new U,qc=new U,Hs=new U,sd=new U,Xc=new U,ad=new U;let sf=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ns)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ns.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ns.copy(this.origin).addScaledVector(this.direction,e),ns.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){id.copy(t).add(e).multiplyScalar(.5),qc.copy(e).sub(t).normalize(),Hs.copy(this.origin).sub(id);const a=t.distanceTo(e)*.5,r=-this.direction.dot(qc),o=Hs.dot(this.direction),l=-Hs.dot(qc),c=Hs.lengthSq(),u=Math.abs(1-r*r);let f,h,p,g;if(u>0)if(f=r*l-o,h=r*o-l,g=a*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+r*h+2*o)+h*(r*f+h+2*l)+c}else h=a,f=Math.max(0,-(r*h+o)),p=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(r*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-r*a+o)),h=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(f=Math.max(0,-(r*a+o)),h=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+c);else h=r>0?-a:a,f=Math.max(0,-(r*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(id).addScaledVector(qc,h),p}intersectSphere(t,e){ns.subVectors(t.center,this.origin);const i=ns.dot(this.direction),s=ns.dot(ns)-i*i,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(a=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(a=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ns)!==null}intersectTriangle(t,e,i,s,a){sd.subVectors(e,t),Xc.subVectors(i,t),ad.crossVectors(sd,Xc);let r=this.direction.dot(ad),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Hs.subVectors(this.origin,t);const l=o*this.direction.dot(Xc.crossVectors(Hs,Xc));if(l<0)return null;const c=o*this.direction.dot(sd.cross(Hs));if(c<0||l+c>r)return null;const u=-o*Hs.dot(ad);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ae{constructor(t,e,i,s,a,r,o,l,c,u,f,h,p,g,_,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,l,c,u,f,h,p,g,_,m)}set(t,e,i,s,a,r,o,l,c,u,f,h,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=a,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/br.setFromMatrixColumn(t,0).length(),a=1/br.setFromMatrixColumn(t,1).length(),r=1/br.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const h=r*u,p=r*f,g=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const h=l*u,p=l*f,g=c*u,_=c*f;e[0]=h+_*o,e[4]=g*o-p,e[8]=r*c,e[1]=r*f,e[5]=r*u,e[9]=-o,e[2]=p*o-g,e[6]=_+h*o,e[10]=r*l}else if(t.order==="ZXY"){const h=l*u,p=l*f,g=c*u,_=c*f;e[0]=h-_*o,e[4]=-r*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*u,e[9]=_-h*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const h=r*u,p=r*f,g=o*u,_=o*f;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const h=r*l,p=r*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+p,e[1]=f,e[5]=r*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=r*l,p=r*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=r*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(GT,t,jT)}lookAt(t,e,i){const s=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Vs.crossVectors(i,Hn),Vs.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Vs.crossVectors(i,Hn)),Vs.normalize(),Yc.crossVectors(Hn,Vs),s[0]=Vs.x,s[4]=Yc.x,s[8]=Hn.x,s[1]=Vs.y,s[5]=Yc.y,s[9]=Hn.y,s[2]=Vs.z,s[6]=Yc.z,s[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],y=i[7],x=i[11],T=i[15],b=s[0],M=s[4],D=s[8],w=s[12],S=s[1],L=s[5],F=s[9],N=s[13],H=s[2],I=s[6],R=s[10],G=s[14],O=s[3],W=s[7],tt=s[11],lt=s[15];return a[0]=r*b+o*S+l*H+c*O,a[4]=r*M+o*L+l*I+c*W,a[8]=r*D+o*F+l*R+c*tt,a[12]=r*w+o*N+l*G+c*lt,a[1]=u*b+f*S+h*H+p*O,a[5]=u*M+f*L+h*I+p*W,a[9]=u*D+f*F+h*R+p*tt,a[13]=u*w+f*N+h*G+p*lt,a[2]=g*b+_*S+m*H+d*O,a[6]=g*M+_*L+m*I+d*W,a[10]=g*D+_*F+m*R+d*tt,a[14]=g*w+_*N+m*G+d*lt,a[3]=v*b+y*S+x*H+T*O,a[7]=v*M+y*L+x*I+T*W,a[11]=v*D+y*F+x*R+T*tt,a[15]=v*w+y*N+x*G+T*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+a*l*f-s*c*f-a*o*h+i*c*h+s*o*p-i*l*p)+_*(+e*l*p-e*c*h+a*r*h-s*r*p+s*c*u-a*l*u)+m*(+e*c*f-e*o*p-a*r*f+i*r*p+a*o*u-i*c*u)+d*(-s*o*u-e*l*f+e*o*h+s*r*f-i*r*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],v=f*m*c-_*h*c+_*l*p-o*m*p-f*l*d+o*h*d,y=g*h*c-u*m*c-g*l*p+r*m*p+u*l*d-r*h*d,x=u*_*c-g*f*c+g*o*p-r*_*p-u*o*d+r*f*d,T=g*f*l-u*_*l-g*o*h+r*_*h+u*o*m-r*f*m,b=e*v+i*y+s*x+a*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/b;return t[0]=v*M,t[1]=(_*h*a-f*m*a-_*s*p+i*m*p+f*s*d-i*h*d)*M,t[2]=(o*m*a-_*l*a+_*s*c-i*m*c-o*s*d+i*l*d)*M,t[3]=(f*l*a-o*h*a-f*s*c+i*h*c+o*s*p-i*l*p)*M,t[4]=y*M,t[5]=(u*m*a-g*h*a+g*s*p-e*m*p-u*s*d+e*h*d)*M,t[6]=(g*l*a-r*m*a-g*s*c+e*m*c+r*s*d-e*l*d)*M,t[7]=(r*h*a-u*l*a+u*s*c-e*h*c-r*s*p+e*l*p)*M,t[8]=x*M,t[9]=(g*f*a-u*_*a-g*i*p+e*_*p+u*i*d-e*f*d)*M,t[10]=(r*_*a-g*o*a+g*i*c-e*_*c-r*i*d+e*o*d)*M,t[11]=(u*o*a-r*f*a-u*i*c+e*f*c+r*i*p-e*o*p)*M,t[12]=T*M,t[13]=(u*_*s-g*f*s+g*i*h-e*_*h-u*i*m+e*f*m)*M,t[14]=(g*o*s-r*_*s-g*i*l+e*_*l+r*i*m-e*o*m)*M,t[15]=(r*f*s-u*o*s+u*i*l-e*f*l-r*i*h+e*o*h)*M,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,u=r+r,f=o+o,h=a*c,p=a*u,g=a*f,_=r*u,m=r*f,d=o*f,v=l*c,y=l*u,x=l*f,T=i.x,b=i.y,M=i.z;return s[0]=(1-(_+d))*T,s[1]=(p+x)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(p-x)*b,s[5]=(1-(h+d))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+y)*M,s[9]=(m-v)*M,s[10]=(1-(h+_))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let a=br.set(s[0],s[1],s[2]).length();const r=br.set(s[4],s[5],s[6]).length(),o=br.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],gi.copy(this);const c=1/a,u=1/r,f=1/o;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=f,gi.elements[9]*=f,gi.elements[10]*=f,e.setFromRotationMatrix(gi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,s,a,r,o=Es){const l=this.elements,c=2*a/(e-t),u=2*a/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s);let p,g;if(o===Es)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Ah)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,a,r,o=Es){const l=this.elements,c=1/(e-t),u=1/(i-s),f=1/(r-a),h=(e+t)*c,p=(i+s)*u;let g,_;if(o===Es)g=(r+a)*f,_=-2*f;else if(o===Ah)g=a*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const br=new U,gi=new ae,GT=new U(0,0,0),jT=new U(1,1,1),Vs=new U,Yc=new U,Hn=new U,Nv=new ae,Pv=new Ns;class Ai{constructor(t=0,e=0,i=0,s=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-dn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nv,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pv.setFromEuler(this),this.setFromQuaternion(Pv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class P1{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let WT=0;const Uv=new U,Mr=new Ns,is=new ae,Zc=new U,tl=new U,qT=new U,XT=new Ns,Ov=new U(1,0,0),zv=new U(0,1,0),Iv=new U(0,0,1),Bv={type:"added"},YT={type:"removed"},Er={type:"childadded",child:null},rd={type:"childremoved",child:null};class ye extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new U,e=new Ai,i=new Ns,s=new U(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new qt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new P1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mr.setFromAxisAngle(t,e),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(t,e){return Mr.setFromAxisAngle(t,e),this.quaternion.premultiply(Mr),this}rotateX(t){return this.rotateOnAxis(Ov,t)}rotateY(t){return this.rotateOnAxis(zv,t)}rotateZ(t){return this.rotateOnAxis(Iv,t)}translateOnAxis(t,e){return Uv.copy(t).applyQuaternion(this.quaternion),this.position.add(Uv.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ov,t)}translateY(t){return this.translateOnAxis(zv,t)}translateZ(t){return this.translateOnAxis(Iv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zc.copy(t):Zc.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(tl,Zc,this.up):is.lookAt(Zc,tl,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),Mr.setFromRotationMatrix(is),this.quaternion.premultiply(Mr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bv),Er.child=t,this.dispatchEvent(Er),Er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(YT),rd.child=t,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),is.multiply(t.parent.matrixWorld)),t.applyMatrix4(is),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bv),Er.child=t,this.dispatchEvent(Er),Er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,t,qT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,XT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(t.shapes,f)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),f=r(t.shapes),h=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ye.DEFAULT_UP=new U(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new U,ss=new U,od=new U,as=new U,wr=new U,Tr=new U,Fv=new U,ld=new U,cd=new U,ud=new U;class Vi{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),vi.subVectors(t,e),s.cross(vi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){vi.subVectors(s,e),ss.subVectors(i,e),od.subVectors(t,e);const r=vi.dot(vi),o=vi.dot(ss),l=vi.dot(od),c=ss.dot(ss),u=ss.dot(od),f=r*c-o*o;if(f===0)return a.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,g=(r*u-o*l)*h;return a.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(t,e,i,s,a,r,o,l){return this.getBarycoord(t,e,i,s,as)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,as.x),l.addScaledVector(r,as.y),l.addScaledVector(o,as.z),l)}static isFrontFacing(t,e,i,s){return vi.subVectors(i,e),ss.subVectors(t,e),vi.cross(ss).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),vi.cross(ss).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return Vi.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let r,o;wr.subVectors(s,i),Tr.subVectors(a,i),ld.subVectors(t,i);const l=wr.dot(ld),c=Tr.dot(ld);if(l<=0&&c<=0)return e.copy(i);cd.subVectors(t,s);const u=wr.dot(cd),f=Tr.dot(cd);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(i).addScaledVector(wr,r);ud.subVectors(t,a);const p=wr.dot(ud),g=Tr.dot(ud);if(g>=0&&p<=g)return e.copy(a);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Tr,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Fv.subVectors(a,s),o=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(Fv,o);const d=1/(m+_+h);return r=_*d,o=h*d,e.copy(i).addScaledVector(wr,r).addScaledVector(Tr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const U1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ks={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function hd(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}let mt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=R0(t,1),e=dn(e,0,1),i=dn(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=hd(r,a,t+1/3),this.g=hd(r,a,t),this.b=hd(r,a,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=xi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xi){const i=U1[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=go(t.r),this.g=go(t.g),this.b=go(t.b),this}copyLinearToSRGB(t){return this.r=$f(t.r),this.g=$f(t.g),this.b=$f(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return se.fromWorkingColorSpace(vn.copy(this),t),Math.round(dn(vn.r*255,0,255))*65536+Math.round(dn(vn.g*255,0,255))*256+Math.round(dn(vn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(vn.copy(this),e);const i=vn.r,s=vn.g,a=vn.b,r=Math.max(i,s,a),o=Math.min(i,s,a);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=u<=.5?f/(r+o):f/(2-r-o),r){case i:l=(s-a)/f+(s<a?6:0);break;case s:l=(a-i)/f+2;break;case a:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=xi){se.fromWorkingColorSpace(vn.copy(this),t);const e=vn.r,i=vn.g,s=vn.b;return t!==xi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ks),this.setHSL(ks.h+t,ks.s+e,ks.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ks),t.getHSL(Kc);const i=Ol(ks.h,Kc.h,e),s=Ol(ks.s,Kc.s,e),a=Ol(ks.l,Kc.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const vn=new mt;mt.NAMES=U1;let ZT=0,Ci=class extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=po,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lp,this.blendDst=Np,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Mh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ev,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(i.blending=this.blending),this.side!==Ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lp&&(i.blendSrc=this.blendSrc),this.blendDst!==Np&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mh&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ev&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class Vo extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=_0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new U,Qc=new Mt;class Ti{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return zl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qc.fromBufferAttribute(this,e),Qc.applyMatrix3(t),this.setXY(e,Qc.x,Qc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Hr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=bn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hr(e,this.array)),e}setX(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hr(e,this.array)),e}setY(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hr(e,this.array)),e}setW(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),i=bn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),i=bn(i,this.array),s=bn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),i=bn(i,this.array),s=bn(s,this.array),a=bn(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wv&&(t.usage=this.usage),t}}class O1 extends Ti{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class z1 extends Ti{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ke extends Ti{constructor(t,e,i){super(new Float32Array(t),e,i)}}let KT=0;const ei=new ae,fd=new ye,Ar=new U,Vn=new _c,el=new _c,en=new U;class zn extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(D1(t)?z1:O1)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new qt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return fd.lookAt(t),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _c);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];Vn.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];el.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Vn.min,el.min),Vn.expandByPoint(en),en.addVectors(Vn.max,el.max),Vn.expandByPoint(en)):(Vn.expandByPoint(el.min),Vn.expandByPoint(el.max))}Vn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)en.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(en));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)en.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(t,c),en.add(Ar)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new U,l[D]=new U;const c=new U,u=new U,f=new U,h=new Mt,p=new Mt,g=new Mt,_=new U,m=new U;function d(D,w,S){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,S),h.fromBufferAttribute(a,D),p.fromBufferAttribute(a,w),g.fromBufferAttribute(a,S),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[D].add(_),o[w].add(_),o[S].add(_),l[D].add(m),l[w].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,w=v.length;D<w;++D){const S=v[D],L=S.start,F=S.count;for(let N=L,H=L+F;N<H;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new U,x=new U,T=new U,b=new U;function M(D){T.fromBufferAttribute(s,D),b.copy(T);const w=o[D];y.copy(w),y.sub(T.multiplyScalar(T.dot(w))).normalize(),x.crossVectors(b,w);const L=x.dot(l[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,w=v.length;D<w;++D){const S=v[D],L=S.start,F=S.count;for(let N=L,H=L+F;N<H;N+=3)M(t.getX(N+0)),M(t.getX(N+1)),M(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new U,a=new U,r=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),u.subVectors(r,a),f.subVectors(s,a),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),a.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,a),f.subVectors(s,a),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new Ti(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new zn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const a=t.morphAttributes;for(const c in a){const u=[],f=a[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hv=new ae,Ta=new sf,$c=new yc,Vv=new U,Cr=new U,Rr=new U,Dr=new U,dd=new U,Jc=new U,tu=new Mt,eu=new Mt,nu=new Mt,kv=new U,Gv=new U,jv=new U,iu=new U,su=new U;class Le extends ye{constructor(t=new zn,e=new Vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){Jc.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],f=a[l];u!==0&&(dd.fromBufferAttribute(f,t),r?Jc.addScaledVector(dd,u):Jc.addScaledVector(dd.sub(e),u))}e.add(Jc)}return e}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$c.copy(i.boundingSphere),$c.applyMatrix4(a),Ta.copy(t.ray).recast(t.near),!($c.containsPoint(Ta.origin)===!1&&(Ta.intersectSphere($c,Vv)===null||Ta.origin.distanceToSquared(Vv)>(t.far-t.near)**2))&&(Hv.copy(a).invert(),Ta.copy(t.ray).applyMatrix4(Hv),!(i.boundingBox!==null&&Ta.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ta)))}_computeIntersections(t,e,i){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=r[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=y;x<T;x+=3){const b=o.getX(x),M=o.getX(x+1),D=o.getX(x+2);s=au(this,d,t,i,c,u,f,b,M,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=au(this,r,t,i,c,u,f,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=r[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=y;x<T;x+=3){const b=x,M=x+1,D=x+2;s=au(this,d,t,i,c,u,f,b,M,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,y=m+1,x=m+2;s=au(this,r,t,i,c,u,f,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function QT(n,t,e,i,s,a,r,o){let l;if(t.side===Cn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ds,o),l===null)return null;su.copy(o),su.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(su);return c<e.near||c>e.far?null:{distance:c,point:su.clone(),object:n}}function au(n,t,e,i,s,a,r,o,l,c){n.getVertexPosition(o,Cr),n.getVertexPosition(l,Rr),n.getVertexPosition(c,Dr);const u=QT(n,t,e,i,Cr,Rr,Dr,iu);if(u){s&&(tu.fromBufferAttribute(s,o),eu.fromBufferAttribute(s,l),nu.fromBufferAttribute(s,c),u.uv=Vi.getInterpolation(iu,Cr,Rr,Dr,tu,eu,nu,new Mt)),a&&(tu.fromBufferAttribute(a,o),eu.fromBufferAttribute(a,l),nu.fromBufferAttribute(a,c),u.uv1=Vi.getInterpolation(iu,Cr,Rr,Dr,tu,eu,nu,new Mt)),r&&(kv.fromBufferAttribute(r,o),Gv.fromBufferAttribute(r,l),jv.fromBufferAttribute(r,c),u.normal=Vi.getInterpolation(iu,Cr,Rr,Dr,kv,Gv,jv,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};Vi.getNormal(Cr,Rr,Dr,f.normal),u.face=f}return u}class ya extends zn{constructor(t=1,e=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,a,4),g("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function g(_,m,d,v,y,x,T,b,M,D,w){const S=x/M,L=T/D,F=x/2,N=T/2,H=b/2,I=M+1,R=D+1;let G=0,O=0;const W=new U;for(let tt=0;tt<R;tt++){const lt=tt*L-N;for(let rt=0;rt<I;rt++){const Lt=rt*S-F;W[_]=Lt*v,W[m]=lt*y,W[d]=H,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[d]=b>0?1:-1,u.push(W.x,W.y,W.z),f.push(rt/M),f.push(1-tt/D),G+=1}}for(let tt=0;tt<D;tt++)for(let lt=0;lt<M;lt++){const rt=h+lt+I*tt,Lt=h+lt+I*(tt+1),K=h+(lt+1)+I*(tt+1),at=h+(lt+1)+I*tt;l.push(rt,Lt,at),l.push(Lt,K,at),O+=6}o.addGroup(p,O,w),p+=O,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Lo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Mn(n){const t={};for(let e=0;e<n.length;e++){const i=Lo(n[e]);for(const s in i)t[s]=i[s]}return t}function $T(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function I1(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const qn={clone:Lo,merge:Mn};var JT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class be extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JT,this.fragmentShader=tA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lo(t.uniforms),this.uniformsGroups=$T(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class B1 extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Es}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gs=new U,Wv=new Mt,qv=new Mt;class pn extends B1{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gs.x,Gs.y).multiplyScalar(-t/Gs.z),Gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gs.x,Gs.y).multiplyScalar(-t/Gs.z)}getViewSize(t,e){return this.getViewBounds(t,Wv,qv),e.subVectors(qv,Wv)}setViewOffset(t,e,i,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ul*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Lr=-90,Nr=1;class eA extends ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(Lr,Nr,t,e);s.layers=this.layers,this.add(s);const a=new pn(Lr,Nr,t,e);a.layers=this.layers,this.add(a);const r=new pn(Lr,Nr,t,e);r.layers=this.layers,this.add(r);const o=new pn(Lr,Nr,t,e);o.layers=this.layers,this.add(o);const l=new pn(Lr,Nr,t,e);l.layers=this.layers,this.add(l);const c=new pn(Lr,Nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===Es)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ah)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class F1 extends on{constructor(t,e,i,s,a,r,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ao,super(t,e,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nA extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new F1(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ya(5,5,5),a=new be({name:"CubemapFromEquirect",uniforms:Lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:En});a.uniforms.tEquirect.value=e;const r=new Le(s,a),o=e.minFilter;return e.minFilter===Va&&(e.minFilter=bi),new eA(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(a)}}const pd=new U,iA=new U,sA=new qt;let ds=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=pd.subVectors(i,e).cross(iA.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(pd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||sA.getNormalMatrix(t),s=this.coplanarPoint(pd).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Aa=new yc,ru=new U;class D0{constructor(t=new ds,e=new ds,i=new ds,s=new ds,a=new ds,r=new ds){this.planes=[t,e,i,s,a,r]}set(t,e,i,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Es){const i=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],v=s[13],y=s[14],x=s[15];if(i[0].setComponents(l-a,h-c,m-p,x-d).normalize(),i[1].setComponents(l+a,h+c,m+p,x+d).normalize(),i[2].setComponents(l+r,h+u,m+g,x+v).normalize(),i[3].setComponents(l-r,h-u,m-g,x-v).normalize(),i[4].setComponents(l-o,h-f,m-_,x-y).normalize(),e===Es)i[5].setComponents(l+o,h+f,m+_,x+y).normalize();else if(e===Ah)i[5].setComponents(o,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Aa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Aa.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Aa)}intersectsSprite(t){return Aa.center.set(0,0,0),Aa.radius=.7071067811865476,Aa.applyMatrix4(t.matrixWorld),this.intersectsSphere(Aa)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ru.x=s.normal.x>0?t.max.x:t.min.x,ru.y=s.normal.y>0?t.max.y:t.min.y,ru.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ru)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function H1(){let n=null,t=!1,e=null,i=null;function s(a,r){e(a,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function aA(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,o),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}class Ps extends zn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const v=d*h-r;for(let y=0;y<c;y++){const x=y*f-a;g.push(x,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const y=v+c*d,x=v+c*(d+1),T=v+1+c*(d+1),b=v+1+c*d;p.push(y,x,b),p.push(x,T,b)}this.setIndex(p),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.width,t.height,t.widthSegments,t.heightSegments)}}var rA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oA=`#ifdef USE_ALPHAHASH
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
#endif`,lA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fA=`#ifdef USE_AOMAP
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
#endif`,dA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pA=`#ifdef USE_BATCHING
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
#endif`,mA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_A=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yA=`#ifdef USE_IRIDESCENCE
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
#endif`,xA=`#ifdef USE_BUMPMAP
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
#endif`,SA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,RA=`#define PI 3.141592653589793
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
} // validated`,DA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LA=`vec3 transformedNormal = objectNormal;
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
#endif`,NA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zA="gl_FragColor = linearToOutputTexel( gl_FragColor );",IA=`
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
}`,BA=`#ifdef USE_ENVMAP
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
#endif`,FA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HA=`#ifdef USE_ENVMAP
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
#endif`,VA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kA=`#ifdef USE_ENVMAP
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
#endif`,GA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XA=`#ifdef USE_GRADIENTMAP
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
}`,YA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QA=`uniform bool receiveShadow;
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
#endif`,$A=`#ifdef USE_ENVMAP
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
#endif`,JA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iC=`PhysicalMaterial material;
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
#endif`,sC=`struct PhysicalMaterial {
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
}`,aC=`
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
#endif`,rC=`#if defined( RE_IndirectDiffuse )
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
#endif`,oC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mC=`#if defined( USE_POINTS_UV )
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
#endif`,gC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_C=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SC=`#ifdef USE_MORPHTARGETS
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
#endif`,bC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CC=`#ifdef USE_NORMALMAP
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
#endif`,RC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jC=`float getShadowMask() {
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
}`,WC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qC=`#ifdef USE_SKINNING
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
#endif`,XC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YC=`#ifdef USE_SKINNING
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
#endif`,ZC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$C=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JC=`#ifdef USE_TRANSMISSION
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
#endif`,t2=`#ifdef USE_TRANSMISSION
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
#endif`,e2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r2=`uniform sampler2D t2D;
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
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`#include <common>
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
}`,f2=`#if DEPTH_PACKING == 3200
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
}`,d2=`#define DISTANCE
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
}`,p2=`#define DISTANCE
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
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`uniform float scale;
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
}`,_2=`uniform vec3 diffuse;
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
}`,y2=`#include <common>
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
}`,x2=`uniform vec3 diffuse;
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
}`,S2=`#define LAMBERT
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
}`,b2=`#define LAMBERT
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
}`,M2=`#define MATCAP
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
}`,E2=`#define MATCAP
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
}`,w2=`#define NORMAL
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
}`,T2=`#define NORMAL
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
}`,A2=`#define PHONG
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
}`,C2=`#define PHONG
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
}`,R2=`#define STANDARD
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
}`,D2=`#define STANDARD
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
}`,L2=`#define TOON
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
}`,N2=`#define TOON
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
}`,P2=`uniform float size;
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
}`,U2=`uniform vec3 diffuse;
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
}`,O2=`#include <common>
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
}`,z2=`uniform vec3 color;
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
}`,I2=`uniform float rotation;
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
}`,B2=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:rA,alphahash_pars_fragment:oA,alphamap_fragment:lA,alphamap_pars_fragment:cA,alphatest_fragment:uA,alphatest_pars_fragment:hA,aomap_fragment:fA,aomap_pars_fragment:dA,batching_pars_vertex:pA,batching_vertex:mA,begin_vertex:gA,beginnormal_vertex:vA,bsdfs:_A,iridescence_fragment:yA,bumpmap_pars_fragment:xA,clipping_planes_fragment:SA,clipping_planes_pars_fragment:bA,clipping_planes_pars_vertex:MA,clipping_planes_vertex:EA,color_fragment:wA,color_pars_fragment:TA,color_pars_vertex:AA,color_vertex:CA,common:RA,cube_uv_reflection_fragment:DA,defaultnormal_vertex:LA,displacementmap_pars_vertex:NA,displacementmap_vertex:PA,emissivemap_fragment:UA,emissivemap_pars_fragment:OA,colorspace_fragment:zA,colorspace_pars_fragment:IA,envmap_fragment:BA,envmap_common_pars_fragment:FA,envmap_pars_fragment:HA,envmap_pars_vertex:VA,envmap_physical_pars_fragment:$A,envmap_vertex:kA,fog_vertex:GA,fog_pars_vertex:jA,fog_fragment:WA,fog_pars_fragment:qA,gradientmap_pars_fragment:XA,lightmap_pars_fragment:YA,lights_lambert_fragment:ZA,lights_lambert_pars_fragment:KA,lights_pars_begin:QA,lights_toon_fragment:JA,lights_toon_pars_fragment:tC,lights_phong_fragment:eC,lights_phong_pars_fragment:nC,lights_physical_fragment:iC,lights_physical_pars_fragment:sC,lights_fragment_begin:aC,lights_fragment_maps:rC,lights_fragment_end:oC,logdepthbuf_fragment:lC,logdepthbuf_pars_fragment:cC,logdepthbuf_pars_vertex:uC,logdepthbuf_vertex:hC,map_fragment:fC,map_pars_fragment:dC,map_particle_fragment:pC,map_particle_pars_fragment:mC,metalnessmap_fragment:gC,metalnessmap_pars_fragment:vC,morphinstance_vertex:_C,morphcolor_vertex:yC,morphnormal_vertex:xC,morphtarget_pars_vertex:SC,morphtarget_vertex:bC,normal_fragment_begin:MC,normal_fragment_maps:EC,normal_pars_fragment:wC,normal_pars_vertex:TC,normal_vertex:AC,normalmap_pars_fragment:CC,clearcoat_normal_fragment_begin:RC,clearcoat_normal_fragment_maps:DC,clearcoat_pars_fragment:LC,iridescence_pars_fragment:NC,opaque_fragment:PC,packing:UC,premultiplied_alpha_fragment:OC,project_vertex:zC,dithering_fragment:IC,dithering_pars_fragment:BC,roughnessmap_fragment:FC,roughnessmap_pars_fragment:HC,shadowmap_pars_fragment:VC,shadowmap_pars_vertex:kC,shadowmap_vertex:GC,shadowmask_pars_fragment:jC,skinbase_vertex:WC,skinning_pars_vertex:qC,skinning_vertex:XC,skinnormal_vertex:YC,specularmap_fragment:ZC,specularmap_pars_fragment:KC,tonemapping_fragment:QC,tonemapping_pars_fragment:$C,transmission_fragment:JC,transmission_pars_fragment:t2,uv_pars_fragment:e2,uv_pars_vertex:n2,uv_vertex:i2,worldpos_vertex:s2,background_vert:a2,background_frag:r2,backgroundCube_vert:o2,backgroundCube_frag:l2,cube_vert:c2,cube_frag:u2,depth_vert:h2,depth_frag:f2,distanceRGBA_vert:d2,distanceRGBA_frag:p2,equirect_vert:m2,equirect_frag:g2,linedashed_vert:v2,linedashed_frag:_2,meshbasic_vert:y2,meshbasic_frag:x2,meshlambert_vert:S2,meshlambert_frag:b2,meshmatcap_vert:M2,meshmatcap_frag:E2,meshnormal_vert:w2,meshnormal_frag:T2,meshphong_vert:A2,meshphong_frag:C2,meshphysical_vert:R2,meshphysical_frag:D2,meshtoon_vert:L2,meshtoon_frag:N2,points_vert:P2,points_frag:U2,shadow_vert:O2,shadow_frag:z2,sprite_vert:I2,sprite_frag:B2},dt={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Bi={basic:{uniforms:Mn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Mn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new mt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Mn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Mn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Mn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new mt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Mn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Mn([dt.points,dt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Mn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Mn([dt.common,dt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Mn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Mn([dt.sprite,dt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Mn([dt.common,dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Mn([dt.lights,dt.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Bi.physical={uniforms:Mn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const ou={r:0,b:0,g:0},Ca=new Ai,F2=new ae;function H2(n,t,e,i,s,a,r){const o=new mt(0);let l=a===!0?0:1,c,u,f=null,h=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?d(o,l):x&&x.isColor&&(d(x,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===tf)?(u===void 0&&(u=new Le(new ya(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:Lo(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ca.copy(y.backgroundRotation),Ca.x*=-1,Ca.y*=-1,Ca.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ca.y*=-1,Ca.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(F2.makeRotationFromEuler(Ca)),u.material.toneMapped=se.getTransfer(x.colorSpace)!==me,(f!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Le(new Ps(2,2),new be({name:"BackgroundMaterial",uniforms:Lo(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=se.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,y){v.getRGB(ou,I1(n)),i.buffers.color.setClear(ou.r,ou.g,ou.b,y,r)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(o,l)},render:_,addToRenderList:m}}function V2(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let a=s,r=!1;function o(S,L,F,N,H){let I=!1;const R=f(N,F,L);a!==R&&(a=R,c(a.object)),I=p(S,N,F,H),I&&g(S,N,F,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(I||r)&&(r=!1,x(S,L,F,N),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,L,F){const N=F.wireframe===!0;let H=i[S.id];H===void 0&&(H={},i[S.id]=H);let I=H[L.id];I===void 0&&(I={},H[L.id]=I);let R=I[N];return R===void 0&&(R=h(l()),I[N]=R),R}function h(S){const L=[],F=[],N=[];for(let H=0;H<e;H++)L[H]=0,F[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:N,object:S,attributes:{},index:null}}function p(S,L,F,N){const H=a.attributes,I=L.attributes;let R=0;const G=F.getAttributes();for(const O in G)if(G[O].location>=0){const tt=H[O];let lt=I[O];if(lt===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),tt===void 0||tt.attribute!==lt||lt&&tt.data!==lt.data)return!0;R++}return a.attributesNum!==R||a.index!==N}function g(S,L,F,N){const H={},I=L.attributes;let R=0;const G=F.getAttributes();for(const O in G)if(G[O].location>=0){let tt=I[O];tt===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor));const lt={};lt.attribute=tt,tt&&tt.data&&(lt.data=tt.data),H[O]=lt,R++}a.attributes=H,a.attributesNum=R,a.index=N}function _(){const S=a.newAttributes;for(let L=0,F=S.length;L<F;L++)S[L]=0}function m(S){d(S,0)}function d(S,L){const F=a.newAttributes,N=a.enabledAttributes,H=a.attributeDivisors;F[S]=1,N[S]===0&&(n.enableVertexAttribArray(S),N[S]=1),H[S]!==L&&(n.vertexAttribDivisor(S,L),H[S]=L)}function v(){const S=a.newAttributes,L=a.enabledAttributes;for(let F=0,N=L.length;F<N;F++)L[F]!==S[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function y(S,L,F,N,H,I,R){R===!0?n.vertexAttribIPointer(S,L,F,H,I):n.vertexAttribPointer(S,L,F,N,H,I)}function x(S,L,F,N){_();const H=N.attributes,I=F.getAttributes(),R=L.defaultAttributeValues;for(const G in I){const O=I[G];if(O.location>=0){let W=H[G];if(W===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){const tt=W.normalized,lt=W.itemSize,rt=t.get(W);if(rt===void 0)continue;const Lt=rt.buffer,K=rt.type,at=rt.bytesPerElement,gt=K===n.INT||K===n.UNSIGNED_INT||W.gpuType===S0;if(W.isInterleavedBufferAttribute){const ot=W.data,Tt=ot.stride,Nt=W.offset;if(ot.isInstancedInterleavedBuffer){for(let Ht=0;Ht<O.locationSize;Ht++)d(O.location+Ht,ot.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ht=0;Ht<O.locationSize;Ht++)m(O.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let Ht=0;Ht<O.locationSize;Ht++)y(O.location+Ht,lt/O.locationSize,K,tt,Tt*at,(Nt+lt/O.locationSize*Ht)*at,gt)}else{if(W.isInstancedBufferAttribute){for(let ot=0;ot<O.locationSize;ot++)d(O.location+ot,W.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ot=0;ot<O.locationSize;ot++)m(O.location+ot);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let ot=0;ot<O.locationSize;ot++)y(O.location+ot,lt/O.locationSize,K,tt,lt*at,lt/O.locationSize*ot*at,gt)}}else if(R!==void 0){const tt=R[G];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(O.location,tt);break;case 3:n.vertexAttrib3fv(O.location,tt);break;case 4:n.vertexAttrib4fv(O.location,tt);break;default:n.vertexAttrib1fv(O.location,tt)}}}}v()}function T(){D();for(const S in i){const L=i[S];for(const F in L){const N=L[F];for(const H in N)u(N[H].object),delete N[H];delete L[F]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const F in L){const N=L[F];for(const H in N)u(N[H].object),delete N[H];delete L[F]}delete i[S.id]}function M(S){for(const L in i){const F=i[L];if(F[S.id]===void 0)continue;const N=F[S.id];for(const H in N)u(N[H].object),delete N[H];delete F[S.id]}}function D(){w(),r=!0,a!==s&&(a=s,c(a.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function k2(n,t,e){let i;function s(c){i=c}function a(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function r(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,i,h[_])}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function G2(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==Wn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const M=b===wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Ls&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ki&&!M)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:x,maxSamples:T}}function j2(n){const t=this;let e=null,i=0,s=!1,a=!1;const r=new ds,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||a&&!m)a?u(null):c();else{const v=a?0:i,y=v*4;let x=d.clippingState||null;l.value=x,x=u(g,h,y,p);for(let T=0;T!==y;++T)x[T]=e[T];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==_;++y,x+=4)r.copy(f[y]).applyMatrix4(v,o),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function W2(n){let t=new WeakMap;function e(r,o){return o===Pp?r.mapping=Ao:o===Up&&(r.mapping=Co),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Pp||o===Up)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new nA(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class L0 extends B1{constructor(t=-1,e=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const eo=4,Xv=[.125,.215,.35,.446,.526,.582],za=20,md=new L0,Yv=new mt;let gd=null,vd=0,_d=0,yd=!1;const Ua=(1+Math.sqrt(5))/2,Pr=1/Ua,Zv=[new U(-Ua,Pr,0),new U(Ua,Pr,0),new U(-Pr,0,Ua),new U(Pr,0,Ua),new U(0,Ua,-Pr),new U(0,Ua,Pr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Rh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gd,vd,_d),this._renderer.xr.enabled=yd,t.scissorTest=!1,lu(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ao||t.mapping===Co?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:wi,format:Wn,colorSpace:_a,depthBuffer:!1},s=Kv(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kv(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q2(a)),this._blurMaterial=X2(a,t,e)}return s}_compileMaterial(t){const e=new Le(this._lodPlanes[0],t);this._renderer.compile(e,md)}_sceneToCubeUV(t,e,i,s){const o=new pn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Yv),u.toneMapping=ua,u.autoClear=!1;const p=new Vo({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new Le(new ya,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Yv),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):v===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const y=this._cubeSize;lu(s,v*y,d>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ao||t.mapping===Co;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$v()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qv());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new Le(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;lu(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,md)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Zv[(s-a-1)%Zv.length];this._blur(t,a-1,a,r,o)}e.autoClear=i}_blur(t,e,i,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Le(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*za-1),_=a/g,m=isFinite(a)?1+Math.floor(u*_):za;m>za&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${za}`);const d=[];let v=0;for(let M=0;M<za;++M){const D=M/_,w=Math.exp(-D*D/2);d.push(w),M===0?v+=w:M<m&&(v+=2*w)}for(let M=0;M<d.length;M++)d[M]=d[M]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const x=this._sizeLods[s],T=3*x*(s>y-eo?s-y+eo:0),b=4*(this._cubeSize-x);lu(e,T,b,3*x,2*x),l.setRenderTarget(e),l.render(f,md)}}function q2(n){const t=[],e=[],i=[];let s=n;const a=n-eo+1+Xv.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let l=1/o;r>n-eo?l=Xv[r-n+eo-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let b=0;b<p;b++){const M=b%3*2/3-1,D=b>2?0:-1,w=[M,D,0,M+2/3,D,0,M+2/3,D+1,0,M,D,0,M+2/3,D+1,0,M,D+1,0];v.set(w,_*g*b),y.set(h,m*g*b);const S=[b,b,b,b,b,b];x.set(S,d*g*b)}const T=new zn;T.setAttribute("position",new Ti(v,_)),T.setAttribute("uv",new Ti(y,m)),T.setAttribute("faceIndex",new Ti(x,d)),t.push(T),s>eo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Kv(n,t,e){const i=new Rn(n,t,e);return i.texture.mapping=tf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lu(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function X2(n,t,e){const i=new Float32Array(za),s=new U(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:za,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:N0(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Qv(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:N0(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function $v(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:N0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function N0(){return`

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
	`}function Y2(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pp||l===Up,u=l===Ao||l===Co;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Rh(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Rh(n)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Z2(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&zl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function K2(n,t,e,i){const s={},a=new WeakMap;function r(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}h.removeEventListener("dispose",r),delete s[h.id];const p=a.get(h);p&&(t.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const T=v[y+0],b=v[y+1],M=v[y+2];h.push(T,b,b,M,M,T)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const T=y+0,b=y+1,M=y+2;h.push(T,b,b,M,M,T)}}else return;const m=new(D1(h)?z1:O1)(h,1);m.version=_;const d=a.get(f);d&&t.remove(d),a.set(f,m)}function u(f){const h=a.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Q2(n,t,e){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,p){n.drawElements(i,p,a,h*r),e.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,a,h*r,g),e.update(p,i,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/r,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,h,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v];for(let v=0;v<_.length;v++)e.update(d,i,_[v])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function $2(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=o*(a/3);break;case n.LINES:e.lines+=o*(a/2);break;case n.LINE_STRIP:e.lines+=o*(a-1);break;case n.LINE_LOOP:e.lines+=o*a;break;case n.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function J2(n,t,e){const i=new WeakMap,s=new Be;function a(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let S=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let T=o.attributes.position.count*x,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const M=new Float32Array(T*b*4*f),D=new N1(M,T,b,f);D.type=ki,D.needsUpdate=!0;const w=x*4;for(let L=0;L<f;L++){const F=d[L],N=v[L],H=y[L],I=T*b*4*L;for(let R=0;R<F.count;R++){const G=R*w;g===!0&&(s.fromBufferAttribute(F,R),M[I+G+0]=s.x,M[I+G+1]=s.y,M[I+G+2]=s.z,M[I+G+3]=0),_===!0&&(s.fromBufferAttribute(N,R),M[I+G+4]=s.x,M[I+G+5]=s.y,M[I+G+6]=s.z,M[I+G+7]=0),m===!0&&(s.fromBufferAttribute(H,R),M[I+G+8]=s.x,M[I+G+9]=s.y,M[I+G+10]=s.z,M[I+G+11]=H.itemSize===4?s.w:1)}}h={count:f,texture:D,size:new Mt(T,b)},i.set(o,h),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:a}}function tR(n,t,e,i){let s=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class P0 extends on{constructor(t,e,i,s,a,r,o,l,c,u=mo){if(u!==mo&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===mo&&(i=tr),i===void 0&&u===nr&&(i=er),super(null,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const V1=new on,Jv=new P0(1,1),k1=new N1,G1=new VT,j1=new F1,t_=[],e_=[],n_=new Float32Array(16),i_=new Float32Array(9),s_=new Float32Array(4);function ko(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let a=t_[s];if(a===void 0&&(a=new Float32Array(s),t_[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,n[r].toArray(a,o)}return a}function Je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function tn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function af(n,t){let e=e_[t];e===void 0&&(e=new Int32Array(t),e_[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function eR(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function nR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2fv(this.addr,t),tn(e,t)}}function iR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;n.uniform3fv(this.addr,t),tn(e,t)}}function sR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4fv(this.addr,t),tn(e,t)}}function aR(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Je(e,i))return;s_.set(i),n.uniformMatrix2fv(this.addr,!1,s_),tn(e,i)}}function rR(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Je(e,i))return;i_.set(i),n.uniformMatrix3fv(this.addr,!1,i_),tn(e,i)}}function oR(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Je(e,i))return;n_.set(i),n.uniformMatrix4fv(this.addr,!1,n_),tn(e,i)}}function lR(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function cR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2iv(this.addr,t),tn(e,t)}}function uR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3iv(this.addr,t),tn(e,t)}}function hR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4iv(this.addr,t),tn(e,t)}}function fR(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function dR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2uiv(this.addr,t),tn(e,t)}}function pR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3uiv(this.addr,t),tn(e,t)}}function mR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4uiv(this.addr,t),tn(e,t)}}function gR(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(Jv.compareFunction=R1,a=Jv):a=V1,e.setTexture2D(t||a,s)}function vR(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||G1,s)}function _R(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||j1,s)}function yR(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||k1,s)}function xR(n){switch(n){case 5126:return eR;case 35664:return nR;case 35665:return iR;case 35666:return sR;case 35674:return aR;case 35675:return rR;case 35676:return oR;case 5124:case 35670:return lR;case 35667:case 35671:return cR;case 35668:case 35672:return uR;case 35669:case 35673:return hR;case 5125:return fR;case 36294:return dR;case 36295:return pR;case 36296:return mR;case 35678:case 36198:case 36298:case 36306:case 35682:return gR;case 35679:case 36299:case 36307:return vR;case 35680:case 36300:case 36308:case 36293:return _R;case 36289:case 36303:case 36311:case 36292:return yR}}function SR(n,t){n.uniform1fv(this.addr,t)}function bR(n,t){const e=ko(t,this.size,2);n.uniform2fv(this.addr,e)}function MR(n,t){const e=ko(t,this.size,3);n.uniform3fv(this.addr,e)}function ER(n,t){const e=ko(t,this.size,4);n.uniform4fv(this.addr,e)}function wR(n,t){const e=ko(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function TR(n,t){const e=ko(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function AR(n,t){const e=ko(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function CR(n,t){n.uniform1iv(this.addr,t)}function RR(n,t){n.uniform2iv(this.addr,t)}function DR(n,t){n.uniform3iv(this.addr,t)}function LR(n,t){n.uniform4iv(this.addr,t)}function NR(n,t){n.uniform1uiv(this.addr,t)}function PR(n,t){n.uniform2uiv(this.addr,t)}function UR(n,t){n.uniform3uiv(this.addr,t)}function OR(n,t){n.uniform4uiv(this.addr,t)}function zR(n,t,e){const i=this.cache,s=t.length,a=af(e,s);Je(i,a)||(n.uniform1iv(this.addr,a),tn(i,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||V1,a[r])}function IR(n,t,e){const i=this.cache,s=t.length,a=af(e,s);Je(i,a)||(n.uniform1iv(this.addr,a),tn(i,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||G1,a[r])}function BR(n,t,e){const i=this.cache,s=t.length,a=af(e,s);Je(i,a)||(n.uniform1iv(this.addr,a),tn(i,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||j1,a[r])}function FR(n,t,e){const i=this.cache,s=t.length,a=af(e,s);Je(i,a)||(n.uniform1iv(this.addr,a),tn(i,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||k1,a[r])}function HR(n){switch(n){case 5126:return SR;case 35664:return bR;case 35665:return MR;case 35666:return ER;case 35674:return wR;case 35675:return TR;case 35676:return AR;case 5124:case 35670:return CR;case 35667:case 35671:return RR;case 35668:case 35672:return DR;case 35669:case 35673:return LR;case 5125:return NR;case 36294:return PR;case 36295:return UR;case 36296:return OR;case 35678:case 36198:case 36298:case 36306:case 35682:return zR;case 35679:case 36299:case 36307:return IR;case 35680:case 36300:case 36308:case 36293:return BR;case 36289:case 36303:case 36311:case 36292:return FR}}class VR{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=xR(e.type)}}class kR{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=HR(e.type)}}class GR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],i)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function a_(n,t){n.seq.push(t),n.map[t.id]=t}function jR(n,t,e){const i=n.name,s=i.length;for(xd.lastIndex=0;;){const a=xd.exec(i),r=xd.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){a_(e,c===void 0?new VR(o,n,t):new kR(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new GR(o),a_(e,f)),e=f}}}class Wu{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);jR(a,r,this)}}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function r_(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const WR=37297;let qR=0;function XR(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}function YR(n){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(n);let i;switch(t===e?i="":t===Th&&e===wh?i="LinearDisplayP3ToLinearSRGB":t===wh&&e===Th&&(i="LinearSRGBToLinearDisplayP3"),n){case _a:case nf:return[i,"LinearTransferOETF"];case xi:case C0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function o_(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+XR(n.getShaderSource(t),r)}else return s}function ZR(n,t){const e=YR(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function KR(n,t){let e;switch(t){case m1:e="Linear";break;case g1:e="Reinhard";break;case v1:e="Cineon";break;case y0:e="ACESFilmic";break;case x0:e="AgX";break;case _1:e="Neutral";break;case rT:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cu=new U;function QR(){se.getLuminanceCoefficients(cu);const n=cu.x.toFixed(4),t=cu.y.toFixed(4),e=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $R(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function JR(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function t3(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(t,s),r=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:n.getAttribLocation(t,r),locationSize:o}}return e}function pl(n){return n!==""}function l_(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function c_(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const e3=/^[ \t]*#include +<([\w\d./]+)>/gm;function lm(n){return n.replace(e3,i3)}const n3=new Map;function i3(n,t){let e=Wt[t];if(e===void 0){const i=n3.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return lm(e)}const s3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u_(n){return n.replace(s3,a3)}function a3(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function h_(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function r3(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===u1?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===h1?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fs&&(t="SHADOWMAP_TYPE_VSM"),t}function o3(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ao:case Co:t="ENVMAP_TYPE_CUBE";break;case tf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function l3(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Co:t="ENVMAP_MODE_REFRACTION";break}return t}function c3(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _0:t="ENVMAP_BLENDING_MULTIPLY";break;case sT:t="ENVMAP_BLENDING_MIX";break;case aT:t="ENVMAP_BLENDING_ADD";break}return t}function u3(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function h3(n,t,e,i){const s=n.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=r3(e),c=o3(e),u=l3(e),f=c3(e),h=u3(e),p=$R(e),g=JR(a),_=s.createProgram();let m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pl).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pl).join(`
`),d.length>0&&(d+=`
`)):(m=[h_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),d=[h_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ua?"#define TONE_MAPPING":"",e.toneMapping!==ua?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ua?KR("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,ZR("linearToOutputTexel",e.outputColorSpace),QR(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pl).join(`
`)),r=lm(r),r=l_(r,e),r=c_(r,e),o=lm(o),o=l_(o,e),o=c_(o,e),r=u_(r),o=u_(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Tv?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+m+r,x=v+d+o,T=r_(s,s.VERTEX_SHADER,y),b=r_(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function M(L){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(T).trim(),H=s.getShaderInfoLog(b).trim();let I=!0,R=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,b);else{const G=o_(s,T,"vertex"),O=o_(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+G+`
`+O)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||H==="")&&(R=!1);R&&(L.diagnostics={runnable:I,programLog:F,vertexShader:{log:N,prefix:m},fragmentShader:{log:H,prefix:d}})}s.deleteShader(T),s.deleteShader(b),D=new Wu(s,_),w=t3(s,_)}let D;this.getUniforms=function(){return D===void 0&&M(this),D};let w;this.getAttributes=function(){return w===void 0&&M(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,WR)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qR++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let f3=0;class d3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new p3(t),e.set(t,i)),i}}class p3{constructor(t){this.id=f3++,this.code=t,this.usedTimes=0}}function m3(n,t,e,i,s,a,r){const o=new P1,l=new d3,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,L,F,N){const H=F.fog,I=N.geometry,R=w.isMeshStandardMaterial?F.environment:null,G=(w.isMeshStandardMaterial?e:t).get(w.envMap||R),O=G&&G.mapping===tf?G.image.height:null,W=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const tt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,lt=tt!==void 0?tt.length:0;let rt=0;I.morphAttributes.position!==void 0&&(rt=1),I.morphAttributes.normal!==void 0&&(rt=2),I.morphAttributes.color!==void 0&&(rt=3);let Lt,K,at,gt;if(W){const re=Bi[W];Lt=re.vertexShader,K=re.fragmentShader}else Lt=w.vertexShader,K=w.fragmentShader,l.update(w),at=l.getVertexShaderID(w),gt=l.getFragmentShaderID(w);const ot=n.getRenderTarget(),Tt=N.isInstancedMesh===!0,Nt=N.isBatchedMesh===!0,Ht=!!w.map,xe=!!w.matcap,z=!!G,we=!!w.aoMap,Jt=!!w.lightMap,ee=!!w.bumpMap,At=!!w.normalMap,Te=!!w.displacementMap,Pt=!!w.emissiveMap,It=!!w.metalnessMap,P=!!w.roughnessMap,A=w.anisotropy>0,Z=w.clearcoat>0,nt=w.dispersion>0,st=w.iridescence>0,it=w.sheen>0,Dt=w.transmission>0,pt=A&&!!w.anisotropyMap,_t=Z&&!!w.clearcoatMap,Bt=Z&&!!w.clearcoatNormalMap,ct=Z&&!!w.clearcoatRoughnessMap,vt=st&&!!w.iridescenceMap,Kt=st&&!!w.iridescenceThicknessMap,Ut=it&&!!w.sheenColorMap,St=it&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,jt=!!w.specularColorMap,ue=!!w.specularIntensityMap,V=Dt&&!!w.transmissionMap,ut=Dt&&!!w.thicknessMap,Q=!!w.gradientMap,$=!!w.alphaMap,ft=w.alphaTest>0,Ot=!!w.alphaHash,te=!!w.extensions;let Fe=ua;w.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const cn={shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:Lt,fragmentShader:K,defines:w.defines,customVertexShaderID:at,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&N._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&N.instanceColor!==null,instancingMorph:Tt&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:_a,alphaToCoverage:!!w.alphaToCoverage,map:Ht,matcap:xe,envMap:z,envMapMode:z&&G.mapping,envMapCubeUVHeight:O,aoMap:we,lightMap:Jt,bumpMap:ee,normalMap:At,displacementMap:h&&Te,emissiveMap:Pt,normalMapObjectSpace:At&&w.normalMapType===uT,normalMapTangentSpace:At&&w.normalMapType===ef,metalnessMap:It,roughnessMap:P,anisotropy:A,anisotropyMap:pt,clearcoat:Z,clearcoatMap:_t,clearcoatNormalMap:Bt,clearcoatRoughnessMap:ct,dispersion:nt,iridescence:st,iridescenceMap:vt,iridescenceThicknessMap:Kt,sheen:it,sheenColorMap:Ut,sheenRoughnessMap:St,specularMap:Vt,specularColorMap:jt,specularIntensityMap:ue,transmission:Dt,transmissionMap:V,thicknessMap:ut,gradientMap:Q,opaque:w.transparent===!1&&w.blending===po&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:ft,alphaHash:Ot,combine:w.combine,mapUv:Ht&&_(w.map.channel),aoMapUv:we&&_(w.aoMap.channel),lightMapUv:Jt&&_(w.lightMap.channel),bumpMapUv:ee&&_(w.bumpMap.channel),normalMapUv:At&&_(w.normalMap.channel),displacementMapUv:Te&&_(w.displacementMap.channel),emissiveMapUv:Pt&&_(w.emissiveMap.channel),metalnessMapUv:It&&_(w.metalnessMap.channel),roughnessMapUv:P&&_(w.roughnessMap.channel),anisotropyMapUv:pt&&_(w.anisotropyMap.channel),clearcoatMapUv:_t&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(w.sheenRoughnessMap.channel),specularMapUv:Vt&&_(w.specularMap.channel),specularColorMapUv:jt&&_(w.specularColorMap.channel),specularIntensityMapUv:ue&&_(w.specularIntensityMap.channel),transmissionMapUv:V&&_(w.transmissionMap.channel),thicknessMapUv:ut&&_(w.thicknessMap.channel),alphaMapUv:$&&_(w.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(At||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Ht||$),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:rt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ht&&w.map.isVideoTexture===!0&&se.getTransfer(w.map.colorSpace)===me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ci,flipSided:w.side===Cn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:te&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&w.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return cn.vertexUv1s=c.has(1),cn.vertexUv2s=c.has(2),cn.vertexUv3s=c.has(3),c.clear(),cn}function d(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(v(S,w),y(S,w),S.push(n.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function y(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),w.push(o.mask)}function x(w){const S=g[w.type];let L;if(S){const F=Bi[S];L=qn.clone(F.uniforms)}else L=w.uniforms;return L}function T(w,S){let L;for(let F=0,N=u.length;F<N;F++){const H=u[F];if(H.cacheKey===S){L=H,++L.usedTimes;break}}return L===void 0&&(L=new h3(n,S,w,a),u.push(L)),L}function b(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function M(w){l.remove(w)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:T,releaseProgram:b,releaseShaderCache:M,programs:u,dispose:D}}function g3(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,l){n.get(r)[o]=l}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function v3(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function f_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function d_(){const n=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function r(f,h,p,g,_,m){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),t++,d}function o(f,h,p,g,_,m){const d=r(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(f,h,p,g,_,m){const d=r(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,h){e.length>1&&e.sort(f||v3),i.length>1&&i.sort(h||f_),s.length>1&&s.sort(h||f_)}function u(){for(let f=t,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:u,sort:c}}function _3(){let n=new WeakMap;function t(i,s){const a=n.get(i);let r;return a===void 0?(r=new d_,n.set(i,[r])):s>=a.length?(r=new d_,a.push(r)):r=a[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function y3(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new mt};break;case"SpotLight":e={position:new U,direction:new U,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function x3(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let S3=0;function b3(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function M3(n){const t=new y3,e=x3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,a=new ae,r=new ae;function o(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,y=0,x=0,T=0,b=0,M=0;c.sort(b3);for(let w=0,S=c.length;w<S;w++){const L=c[w],F=L.color,N=L.intensity,H=L.distance,I=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=F.r*N,f+=F.g*N,h+=F.b*N;else if(L.isLightProbe){for(let R=0;R<9;R++)i.probe[R].addScaledVector(L.sh.coefficients[R],N);M++}else if(L.isDirectionalLight){const R=t.get(L);if(R.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,O=e.get(L);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=R,p++}else if(L.isSpotLight){const R=t.get(L);R.position.setFromMatrixPosition(L.matrixWorld),R.color.copy(F).multiplyScalar(N),R.distance=H,R.coneCos=Math.cos(L.angle),R.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),R.decay=L.decay,i.spot[_]=R;const G=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,G.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[_]=G.matrix,L.castShadow){const O=e.get(L);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=I,x++}_++}else if(L.isRectAreaLight){const R=t.get(L);R.color.copy(F).multiplyScalar(N),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=R,m++}else if(L.isPointLight){const R=t.get(L);if(R.color.copy(L.color).multiplyScalar(L.intensity),R.distance=L.distance,R.decay=L.decay,L.castShadow){const G=L.shadow,O=e.get(L);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,O.shadowCameraNear=G.camera.near,O.shadowCameraFar=G.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=R,g++}else if(L.isHemisphereLight){const R=t.get(L);R.skyColor.copy(L.color).multiplyScalar(N),R.groundColor.copy(L.groundColor).multiplyScalar(N),i.hemi[d]=R,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==T||D.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=M,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=T,D.numLightProbes=M,i.version=S3++)}function l(c,u){let f=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const y=c[d];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function p_(n){const t=new M3(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function a(u){e.push(u)}function r(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function E3(n){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new p_(n),t.set(s,[o])):a>=r.length?(o=new p_(n),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class w3 extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class T3 extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const A3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C3=`uniform sampler2D shadow_pass;
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
}`;function R3(n,t,e){let i=new D0;const s=new Mt,a=new Mt,r=new Be,o=new w3({depthPacking:cT}),l=new T3,c={},u=e.maxTextureSize,f={[Ds]:Cn,[Cn]:Ds,[ci]:ci},h=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:A3,fragmentShader:C3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new zn;g.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Le(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u1;let d=this.type;this.render=function(b,M,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(En),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=d!==fs&&this.type===fs,H=d===fs&&this.type!==fs;for(let I=0,R=b.length;I<R;I++){const G=b[I],O=G.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const W=O.getFrameExtents();if(s.multiply(W),a.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/W.x),s.x=a.x*W.x,O.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/W.y),s.y=a.y*W.y,O.mapSize.y=a.y)),O.map===null||N===!0||H===!0){const lt=this.type!==fs?{minFilter:Sn,magFilter:Sn}:{};O.map!==null&&O.map.dispose(),O.map=new Rn(s.x,s.y,lt),O.map.texture.name=G.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const tt=O.getViewportCount();for(let lt=0;lt<tt;lt++){const rt=O.getViewport(lt);r.set(a.x*rt.x,a.y*rt.y,a.x*rt.z,a.y*rt.w),F.viewport(r),O.updateMatrices(G,lt),i=O.getFrustum(),x(M,D,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===fs&&v(O,D),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(w,S,L)};function v(b,M){const D=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Rn(s.x,s.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(M,null,D,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(M,null,D,p,_,null)}function y(b,M,D,w){let S=null;const L=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?l:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const F=S.uuid,N=M.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let I=H[N];I===void 0&&(I=S.clone(),H[N]=I,M.addEventListener("dispose",T)),S=I}if(S.visible=M.visible,S.wireframe=M.wireframe,w===fs?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:f[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=D}return S}function x(b,M,D,w,S){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===fs)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const N=t.update(b),H=b.material;if(Array.isArray(H)){const I=N.groups;for(let R=0,G=I.length;R<G;R++){const O=I[R],W=H[O.materialIndex];if(W&&W.visible){const tt=y(b,W,w,S);b.onBeforeShadow(n,b,M,D,N,tt,O),n.renderBufferDirect(D,null,N,tt,b,O),b.onAfterShadow(n,b,M,D,N,tt,O)}}}else if(H.visible){const I=y(b,H,w,S);b.onBeforeShadow(n,b,M,D,N,I,null),n.renderBufferDirect(D,null,N,I,b,null),b.onAfterShadow(n,b,M,D,N,I,null)}}const F=b.children;for(let N=0,H=F.length;N<H;N++)x(F[N],M,D,w,S)}function T(b){b.target.removeEventListener("dispose",T);for(const D in c){const w=c[D],S=b.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function D3(n){function t(){let V=!1;const ut=new Be;let Q=null;const $=new Be(0,0,0,0);return{setMask:function(ft){Q!==ft&&!V&&(n.colorMask(ft,ft,ft,ft),Q=ft)},setLocked:function(ft){V=ft},setClear:function(ft,Ot,te,Fe,cn){cn===!0&&(ft*=Fe,Ot*=Fe,te*=Fe),ut.set(ft,Ot,te,Fe),$.equals(ut)===!1&&(n.clearColor(ft,Ot,te,Fe),$.copy(ut))},reset:function(){V=!1,Q=null,$.set(-1,0,0,0)}}}function e(){let V=!1,ut=null,Q=null,$=null;return{setTest:function(ft){ft?gt(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(ft){ut!==ft&&!V&&(n.depthMask(ft),ut=ft)},setFunc:function(ft){if(Q!==ft){switch(ft){case Qw:n.depthFunc(n.NEVER);break;case $w:n.depthFunc(n.ALWAYS);break;case Jw:n.depthFunc(n.LESS);break;case Mh:n.depthFunc(n.LEQUAL);break;case tT:n.depthFunc(n.EQUAL);break;case eT:n.depthFunc(n.GEQUAL);break;case nT:n.depthFunc(n.GREATER);break;case iT:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ft}},setLocked:function(ft){V=ft},setClear:function(ft){$!==ft&&(n.clearDepth(ft),$=ft)},reset:function(){V=!1,ut=null,Q=null,$=null}}}function i(){let V=!1,ut=null,Q=null,$=null,ft=null,Ot=null,te=null,Fe=null,cn=null;return{setTest:function(re){V||(re?gt(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function(re){ut!==re&&!V&&(n.stencilMask(re),ut=re)},setFunc:function(re,Ki,Ni){(Q!==re||$!==Ki||ft!==Ni)&&(n.stencilFunc(re,Ki,Ni),Q=re,$=Ki,ft=Ni)},setOp:function(re,Ki,Ni){(Ot!==re||te!==Ki||Fe!==Ni)&&(n.stencilOp(re,Ki,Ni),Ot=re,te=Ki,Fe=Ni)},setLocked:function(re){V=re},setClear:function(re){cn!==re&&(n.clearStencil(re),cn=re)},reset:function(){V=!1,ut=null,Q=null,$=null,ft=null,Ot=null,te=null,Fe=null,cn=null}}}const s=new t,a=new e,r=new i,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,g=!1,_=null,m=null,d=null,v=null,y=null,x=null,T=null,b=new mt(0,0,0),M=0,D=!1,w=null,S=null,L=null,F=null,N=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,R=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(G)[1]),I=R>=1):G.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),I=R>=2);let O=null,W={};const tt=n.getParameter(n.SCISSOR_BOX),lt=n.getParameter(n.VIEWPORT),rt=new Be().fromArray(tt),Lt=new Be().fromArray(lt);function K(V,ut,Q,$){const ft=new Uint8Array(4),Ot=n.createTexture();n.bindTexture(V,Ot),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<Q;te++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(ut+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return Ot}const at={};at[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),gt(n.DEPTH_TEST),a.setFunc(Mh),ee(!1),At(Sv),gt(n.CULL_FACE),we(En);function gt(V){c[V]!==!0&&(n.enable(V),c[V]=!0)}function ot(V){c[V]!==!1&&(n.disable(V),c[V]=!1)}function Tt(V,ut){return u[V]!==ut?(n.bindFramebuffer(V,ut),u[V]=ut,V===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ut),V===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Nt(V,ut){let Q=h,$=!1;if(V){Q=f.get(ut),Q===void 0&&(Q=[],f.set(ut,Q));const ft=V.textures;if(Q.length!==ft.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Ot=0,te=ft.length;Ot<te;Ot++)Q[Ot]=n.COLOR_ATTACHMENT0+Ot;Q.length=ft.length,$=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,$=!0);$&&n.drawBuffers(Q)}function Ht(V){return p!==V?(n.useProgram(V),p=V,!0):!1}const xe={[vs]:n.FUNC_ADD,[Iw]:n.FUNC_SUBTRACT,[Bw]:n.FUNC_REVERSE_SUBTRACT};xe[Fw]=n.MIN,xe[Hw]=n.MAX;const z={[Dp]:n.ZERO,[Vw]:n.ONE,[kw]:n.SRC_COLOR,[Lp]:n.SRC_ALPHA,[qw]:n.SRC_ALPHA_SATURATE,[p1]:n.DST_COLOR,[d1]:n.DST_ALPHA,[Gw]:n.ONE_MINUS_SRC_COLOR,[Np]:n.ONE_MINUS_SRC_ALPHA,[Ww]:n.ONE_MINUS_DST_COLOR,[jw]:n.ONE_MINUS_DST_ALPHA,[Xw]:n.CONSTANT_COLOR,[Yw]:n.ONE_MINUS_CONSTANT_COLOR,[Zw]:n.CONSTANT_ALPHA,[Kw]:n.ONE_MINUS_CONSTANT_ALPHA};function we(V,ut,Q,$,ft,Ot,te,Fe,cn,re){if(V===En){g===!0&&(ot(n.BLEND),g=!1);return}if(g===!1&&(gt(n.BLEND),g=!0),V!==f1){if(V!==_||re!==D){if((m!==vs||y!==vs)&&(n.blendEquation(n.FUNC_ADD),m=vs,y=vs),re)switch(V){case po:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rp:n.blendFunc(n.ONE,n.ONE);break;case bv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case po:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case bv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}d=null,v=null,x=null,T=null,b.set(0,0,0),M=0,_=V,D=re}return}ft=ft||ut,Ot=Ot||Q,te=te||$,(ut!==m||ft!==y)&&(n.blendEquationSeparate(xe[ut],xe[ft]),m=ut,y=ft),(Q!==d||$!==v||Ot!==x||te!==T)&&(n.blendFuncSeparate(z[Q],z[$],z[Ot],z[te]),d=Q,v=$,x=Ot,T=te),(Fe.equals(b)===!1||cn!==M)&&(n.blendColor(Fe.r,Fe.g,Fe.b,cn),b.copy(Fe),M=cn),_=V,D=!1}function Jt(V,ut){V.side===ci?ot(n.CULL_FACE):gt(n.CULL_FACE);let Q=V.side===Cn;ut&&(Q=!Q),ee(Q),V.blending===po&&V.transparent===!1?we(En):we(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const $=V.stencilWrite;r.setTest($),$&&(r.setMask(V.stencilWriteMask),r.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),r.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Pt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){w!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),w=V)}function At(V){V!==Ow?(gt(n.CULL_FACE),V!==S&&(V===Sv?n.cullFace(n.BACK):V===zw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),S=V}function Te(V){V!==L&&(I&&n.lineWidth(V),L=V)}function Pt(V,ut,Q){V?(gt(n.POLYGON_OFFSET_FILL),(F!==ut||N!==Q)&&(n.polygonOffset(ut,Q),F=ut,N=Q)):ot(n.POLYGON_OFFSET_FILL)}function It(V){V?gt(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function P(V){V===void 0&&(V=n.TEXTURE0+H-1),O!==V&&(n.activeTexture(V),O=V)}function A(V,ut,Q){Q===void 0&&(O===null?Q=n.TEXTURE0+H-1:Q=O);let $=W[Q];$===void 0&&($={type:void 0,texture:void 0},W[Q]=$),($.type!==V||$.texture!==ut)&&(O!==Q&&(n.activeTexture(Q),O=Q),n.bindTexture(V,ut||at[V]),$.type=V,$.texture=ut)}function Z(){const V=W[O];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function nt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Kt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(V){rt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),rt.copy(V))}function St(V){Lt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Lt.copy(V))}function Vt(V,ut){let Q=l.get(ut);Q===void 0&&(Q=new WeakMap,l.set(ut,Q));let $=Q.get(V);$===void 0&&($=n.getUniformBlockIndex(ut,V.name),Q.set(V,$))}function jt(V,ut){const $=l.get(ut).get(V);o.get(ut)!==$&&(n.uniformBlockBinding(ut,$,V.__bindingPointIndex),o.set(ut,$))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},O=null,W={},u={},f=new WeakMap,h=[],p=null,g=!1,_=null,m=null,d=null,v=null,y=null,x=null,T=null,b=new mt(0,0,0),M=0,D=!1,w=null,S=null,L=null,F=null,N=null,rt.set(0,0,n.canvas.width,n.canvas.height),Lt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:gt,disable:ot,bindFramebuffer:Tt,drawBuffers:Nt,useProgram:Ht,setBlending:we,setMaterial:Jt,setFlipSided:ee,setCullFace:At,setLineWidth:Te,setPolygonOffset:Pt,setScissorTest:It,activeTexture:P,bindTexture:A,unbindTexture:Z,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:vt,texImage3D:Kt,updateUBOMapping:Vt,uniformBlockBinding:jt,texStorage2D:Bt,texStorage3D:ct,texSubImage2D:it,texSubImage3D:Dt,compressedTexSubImage2D:pt,compressedTexSubImage3D:_t,scissor:Ut,viewport:St,reset:ue}}function m_(n,t,e,i){const s=L3(i);switch(e){case M1:return n*t;case w1:return n*t;case T1:return n*t*2;case E0:return n*t/s.components*s.byteLength;case w0:return n*t/s.components*s.byteLength;case A1:return n*t*2/s.components*s.byteLength;case T0:return n*t*2/s.components*s.byteLength;case E1:return n*t*3/s.components*s.byteLength;case Wn:return n*t*4/s.components*s.byteLength;case A0:return n*t*4/s.components*s.byteLength;case Hu:case Vu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ku:case Gu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ip:case Fp:return Math.max(n,16)*Math.max(t,8)/4;case zp:case Bp:return Math.max(n,8)*Math.max(t,8)/2;case Hp:case Vp:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case kp:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gp:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jp:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Wp:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case qp:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Yp:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Zp:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Kp:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Qp:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case $p:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case tm:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case em:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case nm:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ju:case im:case sm:return Math.ceil(n/4)*Math.ceil(t/4)*16;case C1:case am:return Math.ceil(n/4)*Math.ceil(t/4)*8;case rm:case om:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function L3(n){switch(n){case Ls:case x1:return{byteLength:1,components:1};case nc:case S1:case wi:return{byteLength:2,components:1};case b0:case M0:return{byteLength:2,components:4};case tr:case S0:case ki:return{byteLength:4,components:1};case b1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function N3(n,t,e,i,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return p?new OffscreenCanvas(P,A):ic("canvas")}function _(P,A,Z){let nt=1;const st=It(P);if((st.width>Z||st.height>Z)&&(nt=Z/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const it=Math.floor(nt*st.width),Dt=Math.floor(nt*st.height);f===void 0&&(f=g(it,Dt));const pt=A?g(it,Dt):f;return pt.width=it,pt.height=Dt,pt.getContext("2d").drawImage(P,0,0,it,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+it+"x"+Dt+")."),pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Sn&&P.minFilter!==bi}function d(P){n.generateMipmap(P)}function v(P,A,Z,nt,st=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let it=A;if(A===n.RED&&(Z===n.FLOAT&&(it=n.R32F),Z===n.HALF_FLOAT&&(it=n.R16F),Z===n.UNSIGNED_BYTE&&(it=n.R8)),A===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(it=n.R8UI),Z===n.UNSIGNED_SHORT&&(it=n.R16UI),Z===n.UNSIGNED_INT&&(it=n.R32UI),Z===n.BYTE&&(it=n.R8I),Z===n.SHORT&&(it=n.R16I),Z===n.INT&&(it=n.R32I)),A===n.RG&&(Z===n.FLOAT&&(it=n.RG32F),Z===n.HALF_FLOAT&&(it=n.RG16F),Z===n.UNSIGNED_BYTE&&(it=n.RG8)),A===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(it=n.RG8UI),Z===n.UNSIGNED_SHORT&&(it=n.RG16UI),Z===n.UNSIGNED_INT&&(it=n.RG32UI),Z===n.BYTE&&(it=n.RG8I),Z===n.SHORT&&(it=n.RG16I),Z===n.INT&&(it=n.RG32I)),A===n.RGB&&Z===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),A===n.RGBA){const Dt=st?Eh:se.getTransfer(nt);Z===n.FLOAT&&(it=n.RGBA32F),Z===n.HALF_FLOAT&&(it=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(it=Dt===me?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function y(P,A){let Z;return P?A===null||A===tr||A===er?Z=n.DEPTH24_STENCIL8:A===ki?Z=n.DEPTH32F_STENCIL8:A===nc&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===tr||A===er?Z=n.DEPTH_COMPONENT24:A===ki?Z=n.DEPTH_COMPONENT32F:A===nc&&(Z=n.DEPTH_COMPONENT16),Z}function x(P,A){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==bi?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function T(P){const A=P.target;A.removeEventListener("dispose",T),M(A),A.isVideoTexture&&u.delete(A)}function b(P){const A=P.target;A.removeEventListener("dispose",b),w(A)}function M(P){const A=i.get(P);if(A.__webglInit===void 0)return;const Z=P.source,nt=h.get(Z);if(nt){const st=nt[A.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(P),Object.keys(nt).length===0&&h.delete(Z)}i.remove(P)}function D(P){const A=i.get(P);n.deleteTexture(A.__webglTexture);const Z=P.source,nt=h.get(Z);delete nt[A.__cacheKey],r.memory.textures--}function w(P){const A=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(A.__webglFramebuffer[nt]))for(let st=0;st<A.__webglFramebuffer[nt].length;st++)n.deleteFramebuffer(A.__webglFramebuffer[nt][st]);else n.deleteFramebuffer(A.__webglFramebuffer[nt]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[nt])}else{if(Array.isArray(A.__webglFramebuffer))for(let nt=0;nt<A.__webglFramebuffer.length;nt++)n.deleteFramebuffer(A.__webglFramebuffer[nt]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let nt=0;nt<A.__webglColorRenderbuffer.length;nt++)A.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[nt]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=P.textures;for(let nt=0,st=Z.length;nt<st;nt++){const it=i.get(Z[nt]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),r.memory.textures--),i.remove(Z[nt])}i.remove(P)}let S=0;function L(){S=0}function F(){const P=S;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),S+=1,P}function N(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function H(P,A){const Z=i.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const nt=P.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(Z,P,A);return}}e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+A)}function I(P,A){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){Lt(Z,P,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+A)}function R(P,A){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){Lt(Z,P,A);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+A)}function G(P,A){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){K(Z,P,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+A)}const O={[Ro]:n.REPEAT,[Ha]:n.CLAMP_TO_EDGE,[Op]:n.MIRRORED_REPEAT},W={[Sn]:n.NEAREST,[oT]:n.NEAREST_MIPMAP_NEAREST,[kc]:n.NEAREST_MIPMAP_LINEAR,[bi]:n.LINEAR,[Kf]:n.LINEAR_MIPMAP_NEAREST,[Va]:n.LINEAR_MIPMAP_LINEAR},tt={[hT]:n.NEVER,[vT]:n.ALWAYS,[fT]:n.LESS,[R1]:n.LEQUAL,[dT]:n.EQUAL,[gT]:n.GEQUAL,[pT]:n.GREATER,[mT]:n.NOTEQUAL};function lt(P,A){if(A.type===ki&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===bi||A.magFilter===Kf||A.magFilter===kc||A.magFilter===Va||A.minFilter===bi||A.minFilter===Kf||A.minFilter===kc||A.minFilter===Va)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,O[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,O[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,O[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,W[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,W[A.minFilter]),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,tt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Sn||A.minFilter!==kc&&A.minFilter!==Va||A.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function rt(P,A){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",T));const nt=A.source;let st=h.get(nt);st===void 0&&(st={},h.set(nt,st));const it=N(A);if(it!==P.__cacheKey){st[it]===void 0&&(st[it]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,Z=!0),st[it].usedTimes++;const Dt=st[P.__cacheKey];Dt!==void 0&&(st[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&D(A)),P.__cacheKey=it,P.__webglTexture=st[it].texture}return Z}function Lt(P,A,Z){let nt=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(nt=n.TEXTURE_3D);const st=rt(P,A),it=A.source;e.bindTexture(nt,P.__webglTexture,n.TEXTURE0+Z);const Dt=i.get(it);if(it.version!==Dt.__version||st===!0){e.activeTexture(n.TEXTURE0+Z);const pt=se.getPrimaries(se.workingColorSpace),_t=A.colorSpace===Js?null:se.getPrimaries(A.colorSpace),Bt=A.colorSpace===Js||pt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let ct=_(A.image,!1,s.maxTextureSize);ct=Pt(A,ct);const vt=a.convert(A.format,A.colorSpace),Kt=a.convert(A.type);let Ut=v(A.internalFormat,vt,Kt,A.colorSpace,A.isVideoTexture);lt(nt,A);let St;const Vt=A.mipmaps,jt=A.isVideoTexture!==!0,ue=Dt.__version===void 0||st===!0,V=it.dataReady,ut=x(A,ct);if(A.isDepthTexture)Ut=y(A.format===nr,A.type),ue&&(jt?e.texStorage2D(n.TEXTURE_2D,1,Ut,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,Ut,ct.width,ct.height,0,vt,Kt,null));else if(A.isDataTexture)if(Vt.length>0){jt&&ue&&e.texStorage2D(n.TEXTURE_2D,ut,Ut,Vt[0].width,Vt[0].height);for(let Q=0,$=Vt.length;Q<$;Q++)St=Vt[Q],jt?V&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,St.width,St.height,vt,Kt,St.data):e.texImage2D(n.TEXTURE_2D,Q,Ut,St.width,St.height,0,vt,Kt,St.data);A.generateMipmaps=!1}else jt?(ue&&e.texStorage2D(n.TEXTURE_2D,ut,Ut,ct.width,ct.height),V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,vt,Kt,ct.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,ct.width,ct.height,0,vt,Kt,ct.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){jt&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ut,Vt[0].width,Vt[0].height,ct.depth);for(let Q=0,$=Vt.length;Q<$;Q++)if(St=Vt[Q],A.format!==Wn)if(vt!==null)if(jt){if(V)if(A.layerUpdates.size>0){const ft=m_(St.width,St.height,A.format,A.type);for(const Ot of A.layerUpdates){const te=St.data.subarray(Ot*ft/St.data.BYTES_PER_ELEMENT,(Ot+1)*ft/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ot,St.width,St.height,1,vt,te,0,0)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,St.width,St.height,ct.depth,vt,St.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ut,St.width,St.height,ct.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,St.width,St.height,ct.depth,vt,Kt,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ut,St.width,St.height,ct.depth,0,vt,Kt,St.data)}else{jt&&ue&&e.texStorage2D(n.TEXTURE_2D,ut,Ut,Vt[0].width,Vt[0].height);for(let Q=0,$=Vt.length;Q<$;Q++)St=Vt[Q],A.format!==Wn?vt!==null?jt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,St.width,St.height,vt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Ut,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?V&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,St.width,St.height,vt,Kt,St.data):e.texImage2D(n.TEXTURE_2D,Q,Ut,St.width,St.height,0,vt,Kt,St.data)}else if(A.isDataArrayTexture)if(jt){if(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ut,ct.width,ct.height,ct.depth),V)if(A.layerUpdates.size>0){const Q=m_(ct.width,ct.height,A.format,A.type);for(const $ of A.layerUpdates){const ft=ct.data.subarray($*Q/ct.data.BYTES_PER_ELEMENT,($+1)*Q/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ct.width,ct.height,1,vt,Kt,ft)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,vt,Kt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,ct.width,ct.height,ct.depth,0,vt,Kt,ct.data);else if(A.isData3DTexture)jt?(ue&&e.texStorage3D(n.TEXTURE_3D,ut,Ut,ct.width,ct.height,ct.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,vt,Kt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,ct.width,ct.height,ct.depth,0,vt,Kt,ct.data);else if(A.isFramebufferTexture){if(ue)if(jt)e.texStorage2D(n.TEXTURE_2D,ut,Ut,ct.width,ct.height);else{let Q=ct.width,$=ct.height;for(let ft=0;ft<ut;ft++)e.texImage2D(n.TEXTURE_2D,ft,Ut,Q,$,0,vt,Kt,null),Q>>=1,$>>=1}}else if(Vt.length>0){if(jt&&ue){const Q=It(Vt[0]);e.texStorage2D(n.TEXTURE_2D,ut,Ut,Q.width,Q.height)}for(let Q=0,$=Vt.length;Q<$;Q++)St=Vt[Q],jt?V&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,vt,Kt,St):e.texImage2D(n.TEXTURE_2D,Q,Ut,vt,Kt,St);A.generateMipmaps=!1}else if(jt){if(ue){const Q=It(ct);e.texStorage2D(n.TEXTURE_2D,ut,Ut,Q.width,Q.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Kt,ct)}else e.texImage2D(n.TEXTURE_2D,0,Ut,vt,Kt,ct);m(A)&&d(nt),Dt.__version=it.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function K(P,A,Z){if(A.image.length!==6)return;const nt=rt(P,A),st=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Z);const it=i.get(st);if(st.version!==it.__version||nt===!0){e.activeTexture(n.TEXTURE0+Z);const Dt=se.getPrimaries(se.workingColorSpace),pt=A.colorSpace===Js?null:se.getPrimaries(A.colorSpace),_t=A.colorSpace===Js||Dt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Bt=A.isCompressedTexture||A.image[0].isCompressedTexture,ct=A.image[0]&&A.image[0].isDataTexture,vt=[];for(let $=0;$<6;$++)!Bt&&!ct?vt[$]=_(A.image[$],!0,s.maxCubemapSize):vt[$]=ct?A.image[$].image:A.image[$],vt[$]=Pt(A,vt[$]);const Kt=vt[0],Ut=a.convert(A.format,A.colorSpace),St=a.convert(A.type),Vt=v(A.internalFormat,Ut,St,A.colorSpace),jt=A.isVideoTexture!==!0,ue=it.__version===void 0||nt===!0,V=st.dataReady;let ut=x(A,Kt);lt(n.TEXTURE_CUBE_MAP,A);let Q;if(Bt){jt&&ue&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Vt,Kt.width,Kt.height);for(let $=0;$<6;$++){Q=vt[$].mipmaps;for(let ft=0;ft<Q.length;ft++){const Ot=Q[ft];A.format!==Wn?Ut!==null?jt?V&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,Ot.width,Ot.height,Ut,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,Vt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,Ot.width,Ot.height,Ut,St,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,Vt,Ot.width,Ot.height,0,Ut,St,Ot.data)}}}else{if(Q=A.mipmaps,jt&&ue){Q.length>0&&ut++;const $=It(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Vt,$.width,$.height)}for(let $=0;$<6;$++)if(ct){jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,vt[$].width,vt[$].height,Ut,St,vt[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,vt[$].width,vt[$].height,0,Ut,St,vt[$].data);for(let ft=0;ft<Q.length;ft++){const te=Q[ft].image[$].image;jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,te.width,te.height,Ut,St,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,Vt,te.width,te.height,0,Ut,St,te.data)}}else{jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ut,St,vt[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,Ut,St,vt[$]);for(let ft=0;ft<Q.length;ft++){const Ot=Q[ft];jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,Ut,St,Ot.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,Vt,Ut,St,Ot.image[$])}}}m(A)&&d(n.TEXTURE_CUBE_MAP),it.__version=st.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function at(P,A,Z,nt,st,it){const Dt=a.convert(Z.format,Z.colorSpace),pt=a.convert(Z.type),_t=v(Z.internalFormat,Dt,pt,Z.colorSpace);if(!i.get(A).__hasExternalTextures){const ct=Math.max(1,A.width>>it),vt=Math.max(1,A.height>>it);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,it,_t,ct,vt,A.depth,0,Dt,pt,null):e.texImage2D(st,it,_t,ct,vt,0,Dt,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),At(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,st,i.get(Z).__webglTexture,0,ee(A)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,st,i.get(Z).__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(P,A,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer){const nt=A.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,it=y(A.stencilBuffer,st),Dt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=ee(A);At(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,it,A.width,A.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,it,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,it,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,P)}else{const nt=A.textures;for(let st=0;st<nt.length;st++){const it=nt[st],Dt=a.convert(it.format,it.colorSpace),pt=a.convert(it.type),_t=v(it.internalFormat,Dt,pt,it.colorSpace),Bt=ee(A);Z&&At(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,_t,A.width,A.height):At(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt,_t,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,_t,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ot(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);const nt=i.get(A.depthTexture).__webglTexture,st=ee(A);if(A.depthTexture.format===mo)At(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(A.depthTexture.format===nr)At(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Tt(P){const A=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const nt=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),nt){const st=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,nt.removeEventListener("dispose",st)};nt.addEventListener("dispose",st),A.__depthDisposeCallback=st}A.__boundDepthTexture=nt}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ot(A.__webglFramebuffer,P)}else if(Z){A.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[nt]),A.__webglDepthbuffer[nt]===void 0)A.__webglDepthbuffer[nt]=n.createRenderbuffer(),gt(A.__webglDepthbuffer[nt],P,!1);else{const st=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=A.__webglDepthbuffer[nt];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,it)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),gt(A.__webglDepthbuffer,P,!1);else{const nt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,st)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(P,A,Z){const nt=i.get(P);A!==void 0&&at(nt.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Tt(P)}function Ht(P){const A=P.texture,Z=i.get(P),nt=i.get(A);P.addEventListener("dispose",b);const st=P.textures,it=P.isWebGLCubeRenderTarget===!0,Dt=st.length>1;if(Dt||(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=A.version,r.memory.textures++),it){Z.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[pt]=[];for(let _t=0;_t<A.mipmaps.length;_t++)Z.__webglFramebuffer[pt][_t]=n.createFramebuffer()}else Z.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pt=0;pt<A.mipmaps.length;pt++)Z.__webglFramebuffer[pt]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Dt)for(let pt=0,_t=st.length;pt<_t;pt++){const Bt=i.get(st[pt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),r.memory.textures++)}if(P.samples>0&&At(P)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pt=0;pt<st.length;pt++){const _t=st[pt];Z.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[pt]);const Bt=a.convert(_t.format,_t.colorSpace),ct=a.convert(_t.type),vt=v(_t.internalFormat,Bt,ct,_t.colorSpace,P.isXRRenderTarget===!0),Kt=ee(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt,vt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,Z.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(Z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),lt(n.TEXTURE_CUBE_MAP,A);for(let pt=0;pt<6;pt++)if(A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)at(Z.__webglFramebuffer[pt][_t],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_t);else at(Z.__webglFramebuffer[pt],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(A)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let pt=0,_t=st.length;pt<_t;pt++){const Bt=st[pt],ct=i.get(Bt);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),lt(n.TEXTURE_2D,Bt),at(Z.__webglFramebuffer,P,Bt,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),m(Bt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,nt.__webglTexture),lt(pt,A),A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)at(Z.__webglFramebuffer[_t],P,A,n.COLOR_ATTACHMENT0,pt,_t);else at(Z.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,pt,0);m(A)&&d(pt),e.unbindTexture()}P.depthBuffer&&Tt(P)}function xe(P){const A=P.textures;for(let Z=0,nt=A.length;Z<nt;Z++){const st=A[Z];if(m(st)){const it=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Dt=i.get(st).__webglTexture;e.bindTexture(it,Dt),d(it),e.unbindTexture()}}}const z=[],we=[];function Jt(P){if(P.samples>0){if(At(P)===!1){const A=P.textures,Z=P.width,nt=P.height;let st=n.COLOR_BUFFER_BIT;const it=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Dt=i.get(P),pt=A.length>1;if(pt)for(let _t=0;_t<A.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let _t=0;_t<A.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[_t]);const Bt=i.get(A[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Bt,0)}n.blitFramebuffer(0,0,Z,nt,0,0,Z,nt,st,n.NEAREST),l===!0&&(z.length=0,we.length=0,z.push(n.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(z.push(it),we.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,we)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let _t=0;_t<A.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[_t]);const Bt=i.get(A[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const A=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function ee(P){return Math.min(s.maxSamples,P.samples)}function At(P){const A=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Te(P){const A=r.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function Pt(P,A){const Z=P.colorSpace,nt=P.format,st=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==_a&&Z!==Js&&(se.getTransfer(Z)===me?(nt!==Wn||st!==Ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function It(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=I,this.setTexture3D=R,this.setTextureCube=G,this.rebindTextures=Nt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=At}function P3(n,t){function e(i,s=Js){let a;const r=se.getTransfer(s);if(i===Ls)return n.UNSIGNED_BYTE;if(i===b0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===M0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===b1)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===x1)return n.BYTE;if(i===S1)return n.SHORT;if(i===nc)return n.UNSIGNED_SHORT;if(i===S0)return n.INT;if(i===tr)return n.UNSIGNED_INT;if(i===ki)return n.FLOAT;if(i===wi)return n.HALF_FLOAT;if(i===M1)return n.ALPHA;if(i===E1)return n.RGB;if(i===Wn)return n.RGBA;if(i===w1)return n.LUMINANCE;if(i===T1)return n.LUMINANCE_ALPHA;if(i===mo)return n.DEPTH_COMPONENT;if(i===nr)return n.DEPTH_STENCIL;if(i===E0)return n.RED;if(i===w0)return n.RED_INTEGER;if(i===A1)return n.RG;if(i===T0)return n.RG_INTEGER;if(i===A0)return n.RGBA_INTEGER;if(i===Hu||i===Vu||i===ku||i===Gu)if(r===me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Hu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Hu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ku)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zp||i===Ip||i===Bp||i===Fp)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===zp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ip)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hp||i===Vp||i===kp)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Hp||i===Vp)return r===me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===kp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gp||i===jp||i===Wp||i===qp||i===Xp||i===Yp||i===Zp||i===Kp||i===Qp||i===$p||i===Jp||i===tm||i===em||i===nm)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Gp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$p)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jp)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tm)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===em)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nm)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ju||i===im||i===sm)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===ju)return r===me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===im)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===C1||i===am||i===rm||i===om)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===ju)return a.COMPRESSED_RED_RGTC1_EXT;if(i===am)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===om)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class U3 extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}let ml=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}};const O3={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O3)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ml;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const z3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I3=`
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

}`;class B3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new on,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new be({vertexShader:z3,fragmentShader:I3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new Ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F3 extends ur{constructor(t,e){super();const i=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const _=new B3,m=e.getContextAttributes();let d=null,v=null;const y=[],x=[],T=new Mt;let b=null;const M=new pn;M.layers.enable(1),M.viewport=new Be;const D=new pn;D.layers.enable(2),D.viewport=new Be;const w=[M,D],S=new U3;S.layers.enable(1),S.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let at=y[K];return at===void 0&&(at=new Sd,y[K]=at),at.getTargetRaySpace()},this.getControllerGrip=function(K){let at=y[K];return at===void 0&&(at=new Sd,y[K]=at),at.getGripSpace()},this.getHand=function(K){let at=y[K];return at===void 0&&(at=new Sd,y[K]=at),at.getHandSpace()};function N(K){const at=x.indexOf(K.inputSource);if(at===-1)return;const gt=y[at];gt!==void 0&&(gt.update(K.inputSource,K.frame,c||r),gt.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",I);for(let K=0;K<y.length;K++){const at=x[K];at!==null&&(x[K]=null,y[K].disconnect(at))}L=null,F=null,_.reset(),t.setRenderTarget(d),p=null,h=null,f=null,s=null,v=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Rn(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Ls,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,gt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?nr:mo,gt=m.stencil?er:tr);const Tt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:a};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(Tt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Rn(h.textureWidth,h.textureHeight,{format:Wn,type:Ls,depthTexture:new P0(h.textureWidth,h.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(K){for(let at=0;at<K.removed.length;at++){const gt=K.removed[at],ot=x.indexOf(gt);ot>=0&&(x[ot]=null,y[ot].disconnect(gt))}for(let at=0;at<K.added.length;at++){const gt=K.added[at];let ot=x.indexOf(gt);if(ot===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=x.length){x.push(gt),ot=Nt;break}else if(x[Nt]===null){x[Nt]=gt,ot=Nt;break}if(ot===-1)break}const Tt=y[ot];Tt&&Tt.connect(gt)}}const R=new U,G=new U;function O(K,at,gt){R.setFromMatrixPosition(at.matrixWorld),G.setFromMatrixPosition(gt.matrixWorld);const ot=R.distanceTo(G),Tt=at.projectionMatrix.elements,Nt=gt.projectionMatrix.elements,Ht=Tt[14]/(Tt[10]-1),xe=Tt[14]/(Tt[10]+1),z=(Tt[9]+1)/Tt[5],we=(Tt[9]-1)/Tt[5],Jt=(Tt[8]-1)/Tt[0],ee=(Nt[8]+1)/Nt[0],At=Ht*Jt,Te=Ht*ee,Pt=ot/(-Jt+ee),It=Pt*-Jt;if(at.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(It),K.translateZ(Pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Tt[10]===-1)K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const P=Ht+Pt,A=xe+Pt,Z=At-It,nt=Te+(ot-It),st=z*xe/A*P,it=we*xe/A*P;K.projectionMatrix.makePerspective(Z,nt,st,it,P,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function W(K,at){at===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(at.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let at=K.near,gt=K.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),S.near=D.near=M.near=at,S.far=D.far=M.far=gt,(L!==S.near||F!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,F=S.far);const ot=K.parent,Tt=S.cameras;W(S,ot);for(let Nt=0;Nt<Tt.length;Nt++)W(Tt[Nt],ot);Tt.length===2?O(S,M,D):S.projectionMatrix.copy(M.projectionMatrix),tt(K,S,ot)};function tt(K,at,gt){gt===null?K.matrix.copy(at.matrixWorld):(K.matrix.copy(gt.matrixWorld),K.matrix.invert(),K.matrix.multiply(at.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Do*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let lt=null;function rt(K,at){if(u=at.getViewerPose(c||r),g=at,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let ot=!1;gt.length!==S.cameras.length&&(S.cameras.length=0,ot=!0);for(let Nt=0;Nt<gt.length;Nt++){const Ht=gt[Nt];let xe=null;if(p!==null)xe=p.getViewport(Ht);else{const we=f.getViewSubImage(h,Ht);xe=we.viewport,Nt===0&&(t.setRenderTargetTextures(v,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),t.setRenderTarget(v))}let z=w[Nt];z===void 0&&(z=new pn,z.layers.enable(Nt),z.viewport=new Be,w[Nt]=z),z.matrix.fromArray(Ht.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Ht.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(xe.x,xe.y,xe.width,xe.height),Nt===0&&(S.matrix.copy(z.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ot===!0&&S.cameras.push(z)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Nt=f.getDepthInformation(gt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,s.renderState)}}for(let gt=0;gt<y.length;gt++){const ot=x[gt],Tt=y[gt];ot!==null&&Tt!==void 0&&Tt.update(ot,at,c||r)}lt&&lt(K,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),g=null}const Lt=new H1;Lt.setAnimationLoop(rt),this.setAnimationLoop=function(K){lt=K},this.dispose=function(){}}}const Ra=new Ai,H3=new ae;function V3(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,I1(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),f(m,d)):d.isMeshPhongMaterial?(a(m,d),u(m,d)):d.isMeshStandardMaterial?(a(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(a(m,d),g(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),_(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Cn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Cn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=t.get(d),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Ra.copy(x),Ra.x*=-1,Ra.y*=-1,Ra.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ra.y*=-1,Ra.z*=-1),m.envMapRotation.value.setFromMatrix4(H3.makeRotationFromEuler(Ra)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Cn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function k3(n,t,e,i){let s={},a={},r=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(g(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(v,T);const b=t.render.frame;a[v.id]!==b&&(h(v),a[v.id]=b)}function u(v){const y=f();v.__bindingPointIndex=y;const x=n.createBuffer(),T=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function f(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=s[v.id],x=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let b=0,M=x.length;b<M;b++){const D=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,S=D.length;w<S;w++){const L=D[w];if(p(L,b,w,T)===!0){const F=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let I=0;I<N.length;I++){const R=N[I],G=_(R);typeof R=="number"||typeof R=="boolean"?(L.__data[0]=R,n.bufferSubData(n.UNIFORM_BUFFER,F+H,L.__data)):R.isMatrix3?(L.__data[0]=R.elements[0],L.__data[1]=R.elements[1],L.__data[2]=R.elements[2],L.__data[3]=0,L.__data[4]=R.elements[3],L.__data[5]=R.elements[4],L.__data[6]=R.elements[5],L.__data[7]=0,L.__data[8]=R.elements[6],L.__data[9]=R.elements[7],L.__data[10]=R.elements[8],L.__data[11]=0):(R.toArray(L.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,x,T){const b=v.value,M=y+"_"+x;if(T[M]===void 0)return typeof b=="number"||typeof b=="boolean"?T[M]=b:T[M]=b.clone(),!0;{const D=T[M];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return T[M]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(v){const y=v.uniforms;let x=0;const T=16;for(let M=0,D=y.length;M<D;M++){const w=Array.isArray(y[M])?y[M]:[y[M]];for(let S=0,L=w.length;S<L;S++){const F=w[S],N=Array.isArray(F.value)?F.value:[F.value];for(let H=0,I=N.length;H<I;H++){const R=N[H],G=_(R),O=x%T,W=O%G.boundary,tt=O+W;x+=W,tt!==0&&T-tt<G.storage&&(x+=T-tt),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=G.storage}}}const b=x%T;return b>0&&(x+=T-b),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function d(){for(const v in s)n.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:d}}class rf{constructor(t={}){const{canvas:e=UT(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=r;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xi,this.toneMapping=ua,this.toneMappingExposure=1;const y=this;let x=!1,T=0,b=0,M=null,D=-1,w=null;const S=new Be,L=new Be;let F=null;const N=new mt(0);let H=0,I=e.width,R=e.height,G=1,O=null,W=null;const tt=new Be(0,0,I,R),lt=new Be(0,0,I,R);let rt=!1;const Lt=new D0;let K=!1,at=!1;const gt=new ae,ot=new U,Tt=new Be,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function xe(){return M===null?G:1}let z=i;function we(C,k){return e.getContext(C,k)}try{const C={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${v0}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",ft,!1),z===null){const k="webgl2";if(z=we(k,C),z===null)throw we(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Jt,ee,At,Te,Pt,It,P,A,Z,nt,st,it,Dt,pt,_t,Bt,ct,vt,Kt,Ut,St,Vt,jt,ue;function V(){Jt=new Z2(z),Jt.init(),Vt=new P3(z,Jt),ee=new G2(z,Jt,t,Vt),At=new D3(z),Te=new $2(z),Pt=new g3,It=new N3(z,Jt,At,Pt,ee,Vt,Te),P=new W2(y),A=new Y2(y),Z=new aA(z),jt=new V2(z,Z),nt=new K2(z,Z,Te,jt),st=new tR(z,nt,Z,Te),Kt=new J2(z,ee,It),Bt=new j2(Pt),it=new m3(y,P,A,Jt,ee,jt,Bt),Dt=new V3(y,Pt),pt=new _3,_t=new E3(Jt),vt=new H2(y,P,A,At,st,h,l),ct=new R3(y,st,ee),ue=new k3(z,Te,ee,At),Ut=new k2(z,Jt,Te),St=new Q2(z,Jt,Te),Te.programs=it.programs,y.capabilities=ee,y.extensions=Jt,y.properties=Pt,y.renderLists=pt,y.shadowMap=ct,y.state=At,y.info=Te}V();const ut=new F3(y,z);this.xr=ut,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=Jt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Jt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(I,R,!1))},this.getSize=function(C){return C.set(I,R)},this.setSize=function(C,k,q=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,R=k,e.width=Math.floor(C*G),e.height=Math.floor(k*G),q===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(I*G,R*G).floor()},this.setDrawingBufferSize=function(C,k,q){I=C,R=k,G=q,e.width=Math.floor(C*q),e.height=Math.floor(k*q),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,k,q,Y){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,k,q,Y),At.viewport(S.copy(tt).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(lt)},this.setScissor=function(C,k,q,Y){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,k,q,Y),At.scissor(L.copy(lt).multiplyScalar(G).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(C){At.setScissorTest(rt=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(C=!0,k=!0,q=!0){let Y=0;if(C){let j=!1;if(M!==null){const ht=M.texture.format;j=ht===A0||ht===T0||ht===w0}if(j){const ht=M.texture.type,yt=ht===Ls||ht===tr||ht===nc||ht===er||ht===b0||ht===M0,Et=vt.getClearColor(),wt=vt.getClearAlpha(),zt=Et.r,Ft=Et.g,Ct=Et.b;yt?(p[0]=zt,p[1]=Ft,p[2]=Ct,p[3]=wt,z.clearBufferuiv(z.COLOR,0,p)):(g[0]=zt,g[1]=Ft,g[2]=Ct,g[3]=wt,z.clearBufferiv(z.COLOR,0,g))}else Y|=z.COLOR_BUFFER_BIT}k&&(Y|=z.DEPTH_BUFFER_BIT),q&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),pt.dispose(),_t.dispose(),Pt.dispose(),P.dispose(),A.dispose(),st.dispose(),jt.dispose(),ue.dispose(),it.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ni),ut.removeEventListener("sessionend",W0),ba.stop()};function Q(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=Te.autoReset,k=ct.enabled,q=ct.autoUpdate,Y=ct.needsUpdate,j=ct.type;V(),Te.autoReset=C,ct.enabled=k,ct.autoUpdate=q,ct.needsUpdate=Y,ct.type=j}function ft(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ot(C){const k=C.target;k.removeEventListener("dispose",Ot),te(k)}function te(C){Fe(C),Pt.remove(C)}function Fe(C){const k=Pt.get(C).programs;k!==void 0&&(k.forEach(function(q){it.releaseProgram(q)}),C.isShaderMaterial&&it.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,q,Y,j,ht){k===null&&(k=Nt);const yt=j.isMesh&&j.matrixWorld.determinant()<0,Et=pb(C,k,q,Y,j);At.setMaterial(Y,yt);let wt=q.index,zt=1;if(Y.wireframe===!0){if(wt=nt.getWireframeAttribute(q),wt===void 0)return;zt=2}const Ft=q.drawRange,Ct=q.attributes.position;let oe=Ft.start*zt,Ne=(Ft.start+Ft.count)*zt;ht!==null&&(oe=Math.max(oe,ht.start*zt),Ne=Math.min(Ne,(ht.start+ht.count)*zt)),wt!==null?(oe=Math.max(oe,0),Ne=Math.min(Ne,wt.count)):Ct!=null&&(oe=Math.max(oe,0),Ne=Math.min(Ne,Ct.count));const Pe=Ne-oe;if(Pe<0||Pe===1/0)return;jt.setup(j,Y,Et,q,wt);let Bn,le=Ut;if(wt!==null&&(Bn=Z.get(wt),le=St,le.setIndex(Bn)),j.isMesh)Y.wireframe===!0?(At.setLineWidth(Y.wireframeLinewidth*xe()),le.setMode(z.LINES)):le.setMode(z.TRIANGLES);else if(j.isLine){let Rt=Y.linewidth;Rt===void 0&&(Rt=1),At.setLineWidth(Rt*xe()),j.isLineSegments?le.setMode(z.LINES):j.isLineLoop?le.setMode(z.LINE_LOOP):le.setMode(z.LINE_STRIP)}else j.isPoints?le.setMode(z.POINTS):j.isSprite&&le.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)le.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))le.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Rt=j._multiDrawStarts,un=j._multiDrawCounts,ce=j._multiDrawCount,pi=wt?Z.get(wt).bytesPerElement:1,dr=Pt.get(Y).currentProgram.getUniforms();for(let Fn=0;Fn<ce;Fn++)dr.setValue(z,"_gl_DrawID",Fn),le.render(Rt[Fn]/pi,un[Fn])}else if(j.isInstancedMesh)le.renderInstances(oe,Pe,j.count);else if(q.isInstancedBufferGeometry){const Rt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,un=Math.min(q.instanceCount,Rt);le.renderInstances(oe,Pe,un)}else le.render(oe,Pe)};function cn(C,k,q){C.transparent===!0&&C.side===ci&&C.forceSinglePass===!1?(C.side=Cn,C.needsUpdate=!0,Ec(C,k,q),C.side=Ds,C.needsUpdate=!0,Ec(C,k,q),C.side=ci):Ec(C,k,q)}this.compile=function(C,k,q=null){q===null&&(q=C),m=_t.get(q),m.init(k),v.push(m),q.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),C!==q&&C.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();const Y=new Set;return C.traverse(function(j){const ht=j.material;if(ht)if(Array.isArray(ht))for(let yt=0;yt<ht.length;yt++){const Et=ht[yt];cn(Et,q,j),Y.add(Et)}else cn(ht,q,j),Y.add(ht)}),v.pop(),m=null,Y},this.compileAsync=function(C,k,q=null){const Y=this.compile(C,k,q);return new Promise(j=>{function ht(){if(Y.forEach(function(yt){Pt.get(yt).currentProgram.isReady()&&Y.delete(yt)}),Y.size===0){j(C);return}setTimeout(ht,10)}Jt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let re=null;function Ki(C){re&&re(C)}function Ni(){ba.stop()}function W0(){ba.start()}const ba=new H1;ba.setAnimationLoop(Ki),typeof self<"u"&&ba.setContext(self),this.setAnimationLoop=function(C){re=C,ut.setAnimationLoop(C),C===null?ba.stop():ba.start()},ut.addEventListener("sessionstart",Ni),ut.addEventListener("sessionend",W0),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(k),k=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,k,M),m=_t.get(C,v.length),m.init(k),v.push(m),gt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Lt.setFromProjectionMatrix(gt),at=this.localClippingEnabled,K=Bt.init(this.clippingPlanes,at),_=pt.get(C,d.length),_.init(),d.push(_),ut.enabled===!0&&ut.isPresenting===!0){const ht=y.xr.getDepthSensingMesh();ht!==null&&hf(ht,k,-1/0,y.sortObjects)}hf(C,k,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(O,W),Ht=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Ht&&vt.addToRenderList(_,C),this.info.render.frame++,K===!0&&Bt.beginShadows();const q=m.state.shadowsArray;ct.render(q,C,k),K===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,j=_.transmissive;if(m.setupLights(),k.isArrayCamera){const ht=k.cameras;if(j.length>0)for(let yt=0,Et=ht.length;yt<Et;yt++){const wt=ht[yt];X0(Y,j,C,wt)}Ht&&vt.render(C);for(let yt=0,Et=ht.length;yt<Et;yt++){const wt=ht[yt];q0(_,C,wt,wt.viewport)}}else j.length>0&&X0(Y,j,C,k),Ht&&vt.render(C),q0(_,C,k);M!==null&&(It.updateMultisampleRenderTarget(M),It.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(y,C,k),jt.resetDefaultState(),D=-1,w=null,v.pop(),v.length>0?(m=v[v.length-1],K===!0&&Bt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function hf(C,k,q,Y){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Lt.intersectsSprite(C)){Y&&Tt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(gt);const yt=st.update(C),Et=C.material;Et.visible&&_.push(C,yt,Et,q,Tt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Lt.intersectsObject(C))){const yt=st.update(C),Et=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Tt.copy(C.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Tt.copy(yt.boundingSphere.center)),Tt.applyMatrix4(C.matrixWorld).applyMatrix4(gt)),Array.isArray(Et)){const wt=yt.groups;for(let zt=0,Ft=wt.length;zt<Ft;zt++){const Ct=wt[zt],oe=Et[Ct.materialIndex];oe&&oe.visible&&_.push(C,yt,oe,q,Tt.z,Ct)}}else Et.visible&&_.push(C,yt,Et,q,Tt.z,null)}}const ht=C.children;for(let yt=0,Et=ht.length;yt<Et;yt++)hf(ht[yt],k,q,Y)}function q0(C,k,q,Y){const j=C.opaque,ht=C.transmissive,yt=C.transparent;m.setupLightsView(q),K===!0&&Bt.setGlobalState(y.clippingPlanes,q),Y&&At.viewport(S.copy(Y)),j.length>0&&Mc(j,k,q),ht.length>0&&Mc(ht,k,q),yt.length>0&&Mc(yt,k,q),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function X0(C,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Rn(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?wi:Ls,minFilter:Va,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const ht=m.state.transmissionRenderTarget[Y.id],yt=Y.viewport||S;ht.setSize(yt.z,yt.w);const Et=y.getRenderTarget();y.setRenderTarget(ht),y.getClearColor(N),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),Ht&&vt.render(q);const wt=y.toneMapping;y.toneMapping=ua;const zt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),K===!0&&Bt.setGlobalState(y.clippingPlanes,Y),Mc(C,q,Y),It.updateMultisampleRenderTarget(ht),It.updateRenderTargetMipmap(ht),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Ct=0,oe=k.length;Ct<oe;Ct++){const Ne=k[Ct],Pe=Ne.object,Bn=Ne.geometry,le=Ne.material,Rt=Ne.group;if(le.side===ci&&Pe.layers.test(Y.layers)){const un=le.side;le.side=Cn,le.needsUpdate=!0,Y0(Pe,q,Y,Bn,le,Rt),le.side=un,le.needsUpdate=!0,Ft=!0}}Ft===!0&&(It.updateMultisampleRenderTarget(ht),It.updateRenderTargetMipmap(ht))}y.setRenderTarget(Et),y.setClearColor(N,H),zt!==void 0&&(Y.viewport=zt),y.toneMapping=wt}function Mc(C,k,q){const Y=k.isScene===!0?k.overrideMaterial:null;for(let j=0,ht=C.length;j<ht;j++){const yt=C[j],Et=yt.object,wt=yt.geometry,zt=Y===null?yt.material:Y,Ft=yt.group;Et.layers.test(q.layers)&&Y0(Et,k,q,wt,zt,Ft)}}function Y0(C,k,q,Y,j,ht){C.onBeforeRender(y,k,q,Y,j,ht),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(y,k,q,Y,C,ht),j.transparent===!0&&j.side===ci&&j.forceSinglePass===!1?(j.side=Cn,j.needsUpdate=!0,y.renderBufferDirect(q,k,Y,j,C,ht),j.side=Ds,j.needsUpdate=!0,y.renderBufferDirect(q,k,Y,j,C,ht),j.side=ci):y.renderBufferDirect(q,k,Y,j,C,ht),C.onAfterRender(y,k,q,Y,j,ht)}function Ec(C,k,q){k.isScene!==!0&&(k=Nt);const Y=Pt.get(C),j=m.state.lights,ht=m.state.shadowsArray,yt=j.state.version,Et=it.getParameters(C,j.state,ht,k,q),wt=it.getProgramCacheKey(Et);let zt=Y.programs;Y.environment=C.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(C.isMeshStandardMaterial?A:P).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,zt===void 0&&(C.addEventListener("dispose",Ot),zt=new Map,Y.programs=zt);let Ft=zt.get(wt);if(Ft!==void 0){if(Y.currentProgram===Ft&&Y.lightsStateVersion===yt)return K0(C,Et),Ft}else Et.uniforms=it.getUniforms(C),C.onBeforeCompile(Et,y),Ft=it.acquireProgram(Et,wt),zt.set(wt,Ft),Y.uniforms=Et.uniforms;const Ct=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ct.clippingPlanes=Bt.uniform),K0(C,Et),Y.needsLights=gb(C),Y.lightsStateVersion=yt,Y.needsLights&&(Ct.ambientLightColor.value=j.state.ambient,Ct.lightProbe.value=j.state.probe,Ct.directionalLights.value=j.state.directional,Ct.directionalLightShadows.value=j.state.directionalShadow,Ct.spotLights.value=j.state.spot,Ct.spotLightShadows.value=j.state.spotShadow,Ct.rectAreaLights.value=j.state.rectArea,Ct.ltc_1.value=j.state.rectAreaLTC1,Ct.ltc_2.value=j.state.rectAreaLTC2,Ct.pointLights.value=j.state.point,Ct.pointLightShadows.value=j.state.pointShadow,Ct.hemisphereLights.value=j.state.hemi,Ct.directionalShadowMap.value=j.state.directionalShadowMap,Ct.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ct.spotShadowMap.value=j.state.spotShadowMap,Ct.spotLightMatrix.value=j.state.spotLightMatrix,Ct.spotLightMap.value=j.state.spotLightMap,Ct.pointShadowMap.value=j.state.pointShadowMap,Ct.pointShadowMatrix.value=j.state.pointShadowMatrix),Y.currentProgram=Ft,Y.uniformsList=null,Ft}function Z0(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Wu.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function K0(C,k){const q=Pt.get(C);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function pb(C,k,q,Y,j){k.isScene!==!0&&(k=Nt),It.resetTextureUnits();const ht=k.fog,yt=Y.isMeshStandardMaterial?k.environment:null,Et=M===null?y.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:_a,wt=(Y.isMeshStandardMaterial?A:P).get(Y.envMap||yt),zt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ft=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ct=!!q.morphAttributes.position,oe=!!q.morphAttributes.normal,Ne=!!q.morphAttributes.color;let Pe=ua;Y.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Pe=y.toneMapping);const Bn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,le=Bn!==void 0?Bn.length:0,Rt=Pt.get(Y),un=m.state.lights;if(K===!0&&(at===!0||C!==w)){const $n=C===w&&Y.id===D;Bt.setState(Y,C,$n)}let ce=!1;Y.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==un.state.version||Rt.outputColorSpace!==Et||j.isBatchedMesh&&Rt.batching===!1||!j.isBatchedMesh&&Rt.batching===!0||j.isBatchedMesh&&Rt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Rt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Rt.instancing===!1||!j.isInstancedMesh&&Rt.instancing===!0||j.isSkinnedMesh&&Rt.skinning===!1||!j.isSkinnedMesh&&Rt.skinning===!0||j.isInstancedMesh&&Rt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Rt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Rt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Rt.instancingMorph===!1&&j.morphTexture!==null||Rt.envMap!==wt||Y.fog===!0&&Rt.fog!==ht||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Bt.numPlanes||Rt.numIntersection!==Bt.numIntersection)||Rt.vertexAlphas!==zt||Rt.vertexTangents!==Ft||Rt.morphTargets!==Ct||Rt.morphNormals!==oe||Rt.morphColors!==Ne||Rt.toneMapping!==Pe||Rt.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Rt.__version=Y.version);let pi=Rt.currentProgram;ce===!0&&(pi=Ec(Y,k,j));let dr=!1,Fn=!1,ff=!1;const He=pi.getUniforms(),Os=Rt.uniforms;if(At.useProgram(pi.program)&&(dr=!0,Fn=!0,ff=!0),Y.id!==D&&(D=Y.id,Fn=!0),dr||w!==C){He.setValue(z,"projectionMatrix",C.projectionMatrix),He.setValue(z,"viewMatrix",C.matrixWorldInverse);const $n=He.map.cameraPosition;$n!==void 0&&$n.setValue(z,ot.setFromMatrixPosition(C.matrixWorld)),ee.logarithmicDepthBuffer&&He.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&He.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Fn=!0,ff=!0)}if(j.isSkinnedMesh){He.setOptional(z,j,"bindMatrix"),He.setOptional(z,j,"bindMatrixInverse");const $n=j.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),He.setValue(z,"boneTexture",$n.boneTexture,It))}j.isBatchedMesh&&(He.setOptional(z,j,"batchingTexture"),He.setValue(z,"batchingTexture",j._matricesTexture,It),He.setOptional(z,j,"batchingIdTexture"),He.setValue(z,"batchingIdTexture",j._indirectTexture,It),He.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&He.setValue(z,"batchingColorTexture",j._colorsTexture,It));const df=q.morphAttributes;if((df.position!==void 0||df.normal!==void 0||df.color!==void 0)&&Kt.update(j,q,pi),(Fn||Rt.receiveShadow!==j.receiveShadow)&&(Rt.receiveShadow=j.receiveShadow,He.setValue(z,"receiveShadow",j.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Os.envMap.value=wt,Os.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Os.envMapIntensity.value=k.environmentIntensity),Fn&&(He.setValue(z,"toneMappingExposure",y.toneMappingExposure),Rt.needsLights&&mb(Os,ff),ht&&Y.fog===!0&&Dt.refreshFogUniforms(Os,ht),Dt.refreshMaterialUniforms(Os,Y,G,R,m.state.transmissionRenderTarget[C.id]),Wu.upload(z,Z0(Rt),Os,It)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Wu.upload(z,Z0(Rt),Os,It),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&He.setValue(z,"center",j.center),He.setValue(z,"modelViewMatrix",j.modelViewMatrix),He.setValue(z,"normalMatrix",j.normalMatrix),He.setValue(z,"modelMatrix",j.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const $n=Y.uniformsGroups;for(let pf=0,vb=$n.length;pf<vb;pf++){const Q0=$n[pf];ue.update(Q0,pi),ue.bind(Q0,pi)}}return pi}function mb(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function gb(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,k,q){Pt.get(C.texture).__webglTexture=k,Pt.get(C.depthTexture).__webglTexture=q;const Y=Pt.get(C);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const q=Pt.get(C);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,q=0){M=C,T=k,b=q;let Y=!0,j=null,ht=!1,yt=!1;if(C){const wt=Pt.get(C);if(wt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1;else if(wt.__webglFramebuffer===void 0)It.setupRenderTarget(C);else if(wt.__hasExternalTextures)It.rebindTextures(C,Pt.get(C.texture).__webglTexture,Pt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ct=C.depthTexture;if(wt.__boundDepthTexture!==Ct){if(Ct!==null&&Pt.has(Ct)&&(C.width!==Ct.image.width||C.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(C)}}const zt=C.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(yt=!0);const Ft=Pt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ft[k])?j=Ft[k][q]:j=Ft[k],ht=!0):C.samples>0&&It.useMultisampledRTT(C)===!1?j=Pt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ft)?j=Ft[q]:j=Ft,S.copy(C.viewport),L.copy(C.scissor),F=C.scissorTest}else S.copy(tt).multiplyScalar(G).floor(),L.copy(lt).multiplyScalar(G).floor(),F=rt;if(At.bindFramebuffer(z.FRAMEBUFFER,j)&&Y&&At.drawBuffers(C,j),At.viewport(S),At.scissor(L),At.setScissorTest(F),ht){const wt=Pt.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,wt.__webglTexture,q)}else if(yt){const wt=Pt.get(C.texture),zt=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.__webglTexture,q||0,zt)}D=-1},this.readRenderTargetPixels=function(C,k,q,Y,j,ht,yt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&yt!==void 0&&(Et=Et[yt]),Et){At.bindFramebuffer(z.FRAMEBUFFER,Et);try{const wt=C.texture,zt=wt.format,Ft=wt.type;if(!ee.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Y&&q>=0&&q<=C.height-j&&z.readPixels(k,q,Y,j,Vt.convert(zt),Vt.convert(Ft),ht)}finally{const wt=M!==null?Pt.get(M).__webglFramebuffer:null;At.bindFramebuffer(z.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(C,k,q,Y,j,ht,yt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&yt!==void 0&&(Et=Et[yt]),Et){At.bindFramebuffer(z.FRAMEBUFFER,Et);try{const wt=C.texture,zt=wt.format,Ft=wt.type;if(!ee.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-Y&&q>=0&&q<=C.height-j){const Ct=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ct),z.bufferData(z.PIXEL_PACK_BUFFER,ht.byteLength,z.STREAM_READ),z.readPixels(k,q,Y,j,Vt.convert(zt),Vt.convert(Ft),0),z.flush();const oe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);await OT(z,oe,4);try{z.bindBuffer(z.PIXEL_PACK_BUFFER,Ct),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ht)}finally{z.deleteBuffer(Ct),z.deleteSync(oe)}return ht}}finally{const wt=M!==null?Pt.get(M).__webglFramebuffer:null;At.bindFramebuffer(z.FRAMEBUFFER,wt)}}},this.copyFramebufferToTexture=function(C,k=null,q=0){C.isTexture!==!0&&(zl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const Y=Math.pow(2,-q),j=Math.floor(C.image.width*Y),ht=Math.floor(C.image.height*Y),yt=k!==null?k.x:0,Et=k!==null?k.y:0;It.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,yt,Et,j,ht),At.unbindTexture()},this.copyTextureToTexture=function(C,k,q=null,Y=null,j=0){C.isTexture!==!0&&(zl("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1],k=arguments[2],j=arguments[3]||0,q=null);let ht,yt,Et,wt,zt,Ft;q!==null?(ht=q.max.x-q.min.x,yt=q.max.y-q.min.y,Et=q.min.x,wt=q.min.y):(ht=C.image.width,yt=C.image.height,Et=0,wt=0),Y!==null?(zt=Y.x,Ft=Y.y):(zt=0,Ft=0);const Ct=Vt.convert(k.format),oe=Vt.convert(k.type);It.setTexture2D(k,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const Ne=z.getParameter(z.UNPACK_ROW_LENGTH),Pe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Bn=z.getParameter(z.UNPACK_SKIP_PIXELS),le=z.getParameter(z.UNPACK_SKIP_ROWS),Rt=z.getParameter(z.UNPACK_SKIP_IMAGES),un=C.isCompressedTexture?C.mipmaps[j]:C.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,un.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,un.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Et),z.pixelStorei(z.UNPACK_SKIP_ROWS,wt),C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,j,zt,Ft,ht,yt,Ct,oe,un.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,j,zt,Ft,un.width,un.height,Ct,un.data):z.texSubImage2D(z.TEXTURE_2D,j,zt,Ft,ht,yt,Ct,oe,un),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ne),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Bn),z.pixelStorei(z.UNPACK_SKIP_ROWS,le),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Rt),j===0&&k.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(C,k,q=null,Y=null,j=0){C.isTexture!==!0&&(zl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,C=arguments[2],k=arguments[3],j=arguments[4]||0);let ht,yt,Et,wt,zt,Ft,Ct,oe,Ne;const Pe=C.isCompressedTexture?C.mipmaps[j]:C.image;q!==null?(ht=q.max.x-q.min.x,yt=q.max.y-q.min.y,Et=q.max.z-q.min.z,wt=q.min.x,zt=q.min.y,Ft=q.min.z):(ht=Pe.width,yt=Pe.height,Et=Pe.depth,wt=0,zt=0,Ft=0),Y!==null?(Ct=Y.x,oe=Y.y,Ne=Y.z):(Ct=0,oe=0,Ne=0);const Bn=Vt.convert(k.format),le=Vt.convert(k.type);let Rt;if(k.isData3DTexture)It.setTexture3D(k,0),Rt=z.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)It.setTexture2DArray(k,0),Rt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const un=z.getParameter(z.UNPACK_ROW_LENGTH),ce=z.getParameter(z.UNPACK_IMAGE_HEIGHT),pi=z.getParameter(z.UNPACK_SKIP_PIXELS),dr=z.getParameter(z.UNPACK_SKIP_ROWS),Fn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Pe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,wt),z.pixelStorei(z.UNPACK_SKIP_ROWS,zt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ft),C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Rt,j,Ct,oe,Ne,ht,yt,Et,Bn,le,Pe.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Rt,j,Ct,oe,Ne,ht,yt,Et,Bn,Pe.data):z.texSubImage3D(Rt,j,Ct,oe,Ne,ht,yt,Et,Bn,le,Pe),z.pixelStorei(z.UNPACK_ROW_LENGTH,un),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce),z.pixelStorei(z.UNPACK_SKIP_PIXELS,pi),z.pixelStorei(z.UNPACK_SKIP_ROWS,dr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Fn),j===0&&k.generateMipmaps&&z.generateMipmap(Rt),At.unbindTexture()},this.initRenderTarget=function(C){Pt.get(C).__webglFramebuffer===void 0&&It.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?It.setTextureCube(C,0):C.isData3DTexture?It.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?It.setTexture2DArray(C,0):It.setTexture2D(C,0),At.unbindTexture()},this.resetState=function(){T=0,b=0,M=null,At.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Es}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===C0?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===nf?"display-p3":"srgb"}}class No extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class U0 extends on{constructor(t=null,e=1,i=1,s,a,r,o,l,c=Sn,u=Sn,f,h){super(null,r,o,l,c,u,s,a,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Dh=new U,Lh=new U,g_=new ae,nl=new sf,uu=new yc,bd=new U,v_=new U;class W1 extends ye{constructor(t=new zn,e=new vo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)Dh.fromBufferAttribute(e,s-1),Lh.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Dh.distanceTo(Lh);t.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uu.copy(i.boundingSphere),uu.applyMatrix4(s),uu.radius+=a,t.ray.intersectsSphere(uu)===!1)return;g_.copy(s).invert(),nl.copy(t.ray).applyMatrix4(g_);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=p,m=g-1;_<m;_+=c){const d=u.getX(_),v=u.getX(_+1),y=hu(this,t,nl,l,d,v);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=hu(this,t,nl,l,_,m);d&&e.push(d)}}else{const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=p,m=g-1;_<m;_+=c){const d=hu(this,t,nl,l,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=hu(this,t,nl,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function hu(n,t,e,i,s,a){const r=n.geometry.attributes.position;if(Dh.fromBufferAttribute(r,s),Lh.fromBufferAttribute(r,a),e.distanceSqToSegment(Dh,Lh,bd,v_)>i)return;bd.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(bd);if(!(l<t.near||l>t.far))return{distance:l,point:v_.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const __=new U,y_=new U;class cm extends W1{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)__.fromBufferAttribute(e,s),y_.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+__.distanceTo(y_);t.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}let gl=class extends Ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}};const x_=new ae,um=new sf,fu=new yc,du=new U;class qu extends ye{constructor(t=new zn,e=new gl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fu.copy(i.boundingSphere),fu.applyMatrix4(s),fu.radius+=a,t.ray.intersectsSphere(fu)===!1)return;x_.copy(s).invert(),um.copy(t.ray).applyMatrix4(x_);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=h,_=p;g<_;g++){const m=c.getX(g);du.fromBufferAttribute(f,m),S_(du,m,l,s,t,e,this)}}else{const h=Math.max(0,r.start),p=Math.min(f.count,r.start+r.count);for(let g=h,_=p;g<_;g++)du.fromBufferAttribute(f,g),S_(du,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function S_(n,t,e,i,s,a,r){const o=um.distanceSqToPoint(n);if(o<e){const l=new U;um.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:r})}}class G3 extends on{constructor(t,e,i,s,a,r,o,l,c){super(t,e,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class j3 extends be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class W3 extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class q3 extends W3{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class X3 extends Ci{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new mt(16777215),this.specular=new mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=_0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Y3 extends Ci{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}const Nh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Z3{constructor(t,e,i){const s=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const K3=new Z3;class xc{constructor(t){this.manager=t!==void 0?t:K3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}xc.DEFAULT_MATERIAL_NAME="__DEFAULT";const rs={};class Q3 extends Error{constructor(t,e){super(t),this.response=e}}class $3 extends xc{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=Nh.get(t);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(rs[t]!==void 0){rs[t].push({onLoad:e,onProgress:i,onError:s});return}rs[t]=[],rs[t].push({onLoad:e,onProgress:i,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=rs[t],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){v();function v(){f.read().then(({done:y,value:x})=>{if(y)d.close();else{_+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let b=0,M=u.length;b<M;b++){const D=u[b];D.onProgress&&D.onProgress(T)}d.enqueue(x),v()}},y=>{d.error(y)})}}});return new Response(m)}else throw new Q3(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Nh.add(t,c);const u=rs[t];delete rs[t];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=rs[t];if(u===void 0)throw this.manager.itemError(t),c;delete rs[t];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class J3 extends xc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,r=Nh.get(t);if(r!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(r),a.manager.itemEnd(t)},0),r;const o=ic("img");function l(){u(),Nh.add(t,this),e&&e(this),a.manager.itemEnd(t)}function c(f){u(),s&&s(f),a.manager.itemError(t),a.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(t),o.src=t,o}}class Xu extends xc{constructor(t){super(t)}load(t,e,i,s){const a=new on,r=new J3(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,e!==void 0&&e(a)},i,s),a}}class q1 extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Md=new ae,b_=new U,M_=new U;class tD{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new D0,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;b_.setFromMatrixPosition(t.matrixWorld),e.position.copy(b_),M_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(M_),e.updateMatrixWorld(),Md.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Md)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class eD extends tD{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Do*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=t.distance||e.far;(i!==e.fov||s!==e.aspect||a!==e.far)&&(e.fov=i,e.aspect=s,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class nD extends q1{constructor(t,e,i=0,s=Math.PI/3,a=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=i,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new eD}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class iD extends q1{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class X1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=E_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=E_();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function E_(){return(typeof performance>"u"?Date:performance).now()}class w_{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(dn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sD extends cm{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new zn;s.setAttribute("position",new Ke(e,3)),s.setAttribute("color",new Ke(i,3));const a=new vo({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(t,e,i){const s=new mt,a=this.geometry.attributes.color.array;return s.set(t),s.toArray(a,0),s.toArray(a,3),s.set(e),s.toArray(a,6),s.toArray(a,9),s.set(i),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class aD extends ur{constructor(t,e){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:v0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=v0);var Un=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var t=1.70158;return n===1?1:n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return n===0?0:--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*(n*n*((t+1)*n-t)):.5*((n-=2)*n*((t+1)*n+t)+2)}}),Bounce:Object.freeze({In:function(n){return 1-Un.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Un.Bounce.In(n*2)*.5:Un.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(t){return Math.pow(t,n)},Out:function(t){return 1-Math.pow(1-t,n)},InOut:function(t){return t<.5?Math.pow(t*2,n)/2:(1-Math.pow(2-t*2,n))/2+.5}}}}),no=function(){return performance.now()},Y1=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},n.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},n.prototype.update=function(t,e){t===void 0&&(t=no()),e===void 0&&(e=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var a=this._tweens[i[s]],r=!e;a&&a.update(t,r)===!1&&!e&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),ka={Linear:function(n,t){var e=n.length-1,i=e*t,s=Math.floor(i),a=ka.Utils.Linear;return t<0?a(n[0],n[1],i):t>1?a(n[e],n[e-1],e-i):a(n[s],n[s+1>e?e:s+1],i-s)},Bezier:function(n,t){for(var e=0,i=n.length-1,s=Math.pow,a=ka.Utils.Bernstein,r=0;r<=i;r++)e+=s(1-t,i-r)*s(t,r)*n[r]*a(i,r);return e},CatmullRom:function(n,t){var e=n.length-1,i=e*t,s=Math.floor(i),a=ka.Utils.CatmullRom;return n[0]===n[e]?(t<0&&(s=Math.floor(i=e*(1+t))),a(n[(s-1+e)%e],n[s],n[(s+1)%e],n[(s+2)%e],i-s)):t<0?n[0]-(a(n[0],n[0],n[1],n[1],-i)-n[0]):t>1?n[e]-(a(n[e],n[e],n[e-1],n[e-1],i-e)-n[e]):a(n[s?s-1:0],n[s],n[e<s+1?e:s+1],n[e<s+2?e:s+2],i-s)},Utils:{Linear:function(n,t,e){return(t-n)*e+n},Bernstein:function(n,t){var e=ka.Utils.Factorial;return e(n)/e(t)/e(n-t)},Factorial:function(){var n=[1];return function(t){var e=1;if(n[t])return n[t];for(var i=t;i>1;i--)e*=i;return n[t]=e,e}}(),CatmullRom:function(n,t,e,i,s){var a=(e-n)*.5,r=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*e+a+r)*l+(-3*t+3*e-2*a-r)*o+a*s+t}}},O0=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),hm=new Y1,rD=function(){function n(t,e){e===void 0&&(e=hm),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Un.Linear.None,this._interpolationFunction=ka.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=O0.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e,this},n.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t,this},n.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},n.prototype.start=function(t,e){if(t===void 0&&(t=no()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var a in this._valuesEnd)s[a]=this._valuesEnd[a];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},n.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},n.prototype._setupProperties=function(t,e,i,s,a){for(var r in i){var o=t[r],l=Array.isArray(o),c=l?"array":typeof o,u=!l&&Array.isArray(i[r]);if(!(c==="undefined"||c==="function")){if(u){var f=i[r];if(f.length===0)continue;for(var h=[o],p=0,g=f.length;p<g;p+=1){var _=this._handleRelativeValue(o,f[p]);if(isNaN(_)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(_)}u&&(i[r]=h)}if((c==="object"||l)&&o&&!u){e[r]=l?[]:{};var m=o;for(var d in m)e[r][d]=m[d];s[r]=l?[]:{};var f=i[r];if(!this._isDynamic){var v={};for(var d in f)v[d]=f[d];i[r]=f=v}this._setupProperties(m,e[r],f,s[r],a)}else(typeof e[r]>"u"||a)&&(e[r]=o),l||(e[r]*=1),u?s[r]=i[r].slice().reverse():s[r]=e[r]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(t){return t===void 0&&(t=no()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},n.prototype.resume=function(t){return t===void 0&&(t=no()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},n.prototype.group=function(t){return t===void 0&&(t=hm),this._group=t,this},n.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},n.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},n.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},n.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},n.prototype.easing=function(t){return t===void 0&&(t=Un.Linear.None),this._easingFunction=t,this},n.prototype.interpolation=function(t){return t===void 0&&(t=ka.Linear),this._interpolationFunction=t,this},n.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},n.prototype.onStart=function(t){return this._onStartCallback=t,this},n.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},n.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},n.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},n.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},n.prototype.onStop=function(t){return this._onStopCallback=t,this},n.prototype.update=function(t,e){if(t===void 0&&(t=no()),e===void 0&&(e=!0),this._isPaused)return!0;var i,s,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>a)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),s=(t-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var r=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,r),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,l=this._chainedTweens.length;o<l;o++)this._chainedTweens[o].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(t,e,i,s){for(var a in i)if(e[a]!==void 0){var r=e[a]||0,o=i[a],l=Array.isArray(t[a]),c=Array.isArray(o),u=!l&&c;u?t[a]=this._interpolationFunction(o,s):typeof o=="object"&&o?this._updateProperties(t[a],r,o,s):(o=this._handleRelativeValue(r,o),typeof o=="number"&&(t[a]=r+(o-r)*s))}},n.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},n.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],i=this._valuesEnd[t];typeof i=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(i):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},n}(),oD="20.0.3",lD=O0.nextId,Xi=hm,cD=Xi.getAll.bind(Xi),uD=Xi.removeAll.bind(Xi),hD=Xi.add.bind(Xi),fD=Xi.remove.bind(Xi),z0=Xi.update.bind(Xi),sc={Easing:Un,Group:Y1,Interpolation:ka,now:no,Sequence:O0,nextId:lD,Tween:rD,VERSION:oD,getAll:cD,removeAll:uD,add:hD,remove:fD,update:z0};const T_=new U,dD=new Ns,A_=new U;class pD extends ye{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}}const Pi=new ae,mD=new ae;class gD{constructor(t={}){const e=this;let i,s,a,r;const o={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:i,height:s}},this.render=function(m,d){const v=d.projectionMatrix.elements[5]*r;d.view&&d.view.enabled?(c.style.transform=`translate( ${-d.view.offsetX*(i/d.view.width)}px, ${-d.view.offsetY*(s/d.view.height)}px )`,c.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let y,x;d.isOrthographicCamera&&(y=-(d.right+d.left)/2,x=(d.top+d.bottom)/2);const T=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,b=d.isOrthographicCamera?`scale( ${T} )scale(`+v+")translate("+f(y)+"px,"+f(x)+"px)"+h(d.matrixWorldInverse):`scale( ${T} )translateZ(`+v+"px)"+h(d.matrixWorldInverse),D=(d.isPerspectiveCamera?"perspective("+v+"px) ":"")+b+"translate("+a+"px,"+r+"px)";o.camera.style!==D&&(u.style.transform=D,o.camera.style=D),_(m,m,d)},this.setSize=function(m,d){i=m,s=d,a=i/2,r=s/2,l.style.width=m+"px",l.style.height=d+"px",c.style.width=m+"px",c.style.height=d+"px",u.style.width=m+"px",u.style.height=d+"px"};function f(m){return Math.abs(m)<1e-10?0:m}function h(m){const d=m.elements;return"matrix3d("+f(d[0])+","+f(-d[1])+","+f(d[2])+","+f(d[3])+","+f(d[4])+","+f(-d[5])+","+f(d[6])+","+f(d[7])+","+f(d[8])+","+f(-d[9])+","+f(d[10])+","+f(d[11])+","+f(d[12])+","+f(-d[13])+","+f(d[14])+","+f(d[15])+")"}function p(m){const d=m.elements;return"translate(-50%,-50%)"+("matrix3d("+f(d[0])+","+f(d[1])+","+f(d[2])+","+f(d[3])+","+f(-d[4])+","+f(-d[5])+","+f(-d[6])+","+f(-d[7])+","+f(d[8])+","+f(d[9])+","+f(d[10])+","+f(d[11])+","+f(d[12])+","+f(d[13])+","+f(d[14])+","+f(d[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let d=0,v=m.children.length;d<v;d++)g(m.children[d])}function _(m,d,v,y){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){const x=m.layers.test(v.layers)===!0,T=m.element;if(T.style.display=x===!0?"":"none",x===!0){m.onBeforeRender(e,d,v);let b;m.isCSS3DSprite?(Pi.copy(v.matrixWorldInverse),Pi.transpose(),m.rotation2D!==0&&Pi.multiply(mD.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(T_,dD,A_),Pi.setPosition(T_),Pi.scale(A_),Pi.elements[3]=0,Pi.elements[7]=0,Pi.elements[11]=0,Pi.elements[15]=1,b=p(Pi)):b=p(m.matrixWorld);const M=o.objects.get(m);if(M===void 0||M.style!==b){T.style.transform=b;const D={style:b};o.objects.set(m,D)}T.parentNode!==u&&u.appendChild(T),m.onAfterRender(e,d,v)}}for(let x=0,T=m.children.length;x<T;x++)_(m.children[x],d,v)}}}const C_={type:"change"},I0={type:"start"},Z1={type:"end"},pu=new sf,R_=new ds,vD=Math.cos(70*Ch.DEG2RAD),Xe=new U,Ln=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ed=1e-6;class _D extends aD{constructor(t,e=null){super(t,e),this.state=de.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fo.ROTATE,MIDDLE:fo.DOLLY,RIGHT:fo.PAN},this.touches={ONE:to.ROTATE,TWO:to.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Ns,this._lastTargetPosition=new U,this._quat=new Ns().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new w_,this._sphericalDelta=new w_,this._scale=1,this._panOffset=new U,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new U,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xD.bind(this),this._onPointerDown=yD.bind(this),this._onPointerUp=SD.bind(this),this._onContextMenu=CD.bind(this),this._onMouseWheel=ED.bind(this),this._onKeyDown=wD.bind(this),this._onTouchStart=TD.bind(this),this._onTouchMove=AD.bind(this),this._onMouseDown=bD.bind(this),this._onMouseMove=MD.bind(this),this._interceptControlDown=RD.bind(this),this._interceptControlUp=DD.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(C_),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;Xe.copy(e).sub(this.target),Xe.applyQuaternion(this._quat),this._spherical.setFromVector3(Xe),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Xe.setFromSpherical(this._spherical),Xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=Xe.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(pu.origin.copy(this.object.position),pu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pu.direction))<vD?this.object.lookAt(this.target):(R_.setFromNormalAndCoplanarPoint(this.object.up,this.target),pu.intersectPlane(R_,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ed||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ed||this._lastTargetPosition.distanceToSquared(this.target)>Ed?(this.dispatchEvent(C_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Xe.setFromMatrixColumn(e,0),Xe.multiplyScalar(-t),this._panOffset.add(Xe)}_panUp(t,e){this.screenSpacePanning===!0?Xe.setFromMatrixColumn(e,1):(Xe.setFromMatrixColumn(e,0),Xe.crossVectors(this.object.up,Xe)),Xe.multiplyScalar(t),this._panOffset.add(Xe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Xe.copy(s).sub(this.target);let a=Xe.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*e*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,a=e-i.top,r=i.width,o=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function yD(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function xD(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function SD(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Z1),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function bD(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=de.DOLLY;break;case fo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}break;case fo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(I0)}function MD(n){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ED(n){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(n.preventDefault(),this.dispatchEvent(I0),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Z1))}function wD(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function TD(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case to.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=de.TOUCH_ROTATE;break;case to.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case to.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=de.TOUCH_DOLLY_PAN;break;case to.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(I0)}function AD(n){switch(this._trackPointer(n),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=de.NONE}}function CD(n){this.enabled!==!1&&n.preventDefault()}function RD(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DD(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Il={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class hr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const LD=new L0(-1,1,1,-1,0,1);class ND extends zn{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}}const PD=new ND;class of{constructor(t){this._mesh=new Le(PD,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,LD)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class UD extends hr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qn.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new of(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class D_ extends hr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class OD extends hr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class B0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Mt);this._width=i.width,this._height=i.height,e=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new UD(Il),this.copyPass.material.blending=En,this.clock=new X1}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}D_!==void 0&&(r instanceof D_?i=!0:r instanceof OD&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class K1 extends hr{constructor(t,e,i=null,s=null,a=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new mt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(a=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const zD={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ir extends hr{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256),this.clearColor=new mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(a,r,{type:wi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new Rn(a,r,{type:wi});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new Rn(a,r,{type:wi});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),a=Math.round(a/2),r=Math.round(r/2)}const o=zD;this.highPassUniforms=qn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Mt(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Il;this.copyUniforms=qn.clone(u.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Rp,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new mt,this.oldClearAlpha=1,this.basic=new Vo,this.fsQuad=new of(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new Mt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ir.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ir.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ir.BlurDirectionX=new Mt(1,0);ir.BlurDirectionY=new Mt(0,1);class ID{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,s){return t[0]*e+t[1]*i+t[2]*s}dot4(t,e,i,s,a){return t[0]*e+t[1]*i+t[2]*s+t[3]*a}noise(t,e){let i,s,a;const r=.5*(Math.sqrt(3)-1),o=(t+e)*r,l=Math.floor(t+o),c=Math.floor(e+o),u=(3-Math.sqrt(3))/6,f=(l+c)*u,h=l-f,p=c-f,g=t-h,_=e-p;let m,d;g>_?(m=1,d=0):(m=0,d=1);const v=g-m+u,y=_-d+u,x=g-1+2*u,T=_-1+2*u,b=l&255,M=c&255,D=this.perm[b+this.perm[M]]%12,w=this.perm[b+m+this.perm[M+d]]%12,S=this.perm[b+1+this.perm[M+1]]%12;let L=.5-g*g-_*_;L<0?i=0:(L*=L,i=L*L*this.dot(this.grad3[D],g,_));let F=.5-v*v-y*y;F<0?s=0:(F*=F,s=F*F*this.dot(this.grad3[w],v,y));let N=.5-x*x-T*T;return N<0?a=0:(N*=N,a=N*N*this.dot(this.grad3[S],x,T)),70*(i+s+a)}noise3d(t,e,i){let s,a,r,o;const c=(t+e+i)*.3333333333333333,u=Math.floor(t+c),f=Math.floor(e+c),h=Math.floor(i+c),p=1/6,g=(u+f+h)*p,_=u-g,m=f-g,d=h-g,v=t-_,y=e-m,x=i-d;let T,b,M,D,w,S;v>=y?y>=x?(T=1,b=0,M=0,D=1,w=1,S=0):v>=x?(T=1,b=0,M=0,D=1,w=0,S=1):(T=0,b=0,M=1,D=1,w=0,S=1):y<x?(T=0,b=0,M=1,D=0,w=1,S=1):v<x?(T=0,b=1,M=0,D=0,w=1,S=1):(T=0,b=1,M=0,D=1,w=1,S=0);const L=v-T+p,F=y-b+p,N=x-M+p,H=v-D+2*p,I=y-w+2*p,R=x-S+2*p,G=v-1+3*p,O=y-1+3*p,W=x-1+3*p,tt=u&255,lt=f&255,rt=h&255,Lt=this.perm[tt+this.perm[lt+this.perm[rt]]]%12,K=this.perm[tt+T+this.perm[lt+b+this.perm[rt+M]]]%12,at=this.perm[tt+D+this.perm[lt+w+this.perm[rt+S]]]%12,gt=this.perm[tt+1+this.perm[lt+1+this.perm[rt+1]]]%12;let ot=.6-v*v-y*y-x*x;ot<0?s=0:(ot*=ot,s=ot*ot*this.dot3(this.grad3[Lt],v,y,x));let Tt=.6-L*L-F*F-N*N;Tt<0?a=0:(Tt*=Tt,a=Tt*Tt*this.dot3(this.grad3[K],L,F,N));let Nt=.6-H*H-I*I-R*R;Nt<0?r=0:(Nt*=Nt,r=Nt*Nt*this.dot3(this.grad3[at],H,I,R));let Ht=.6-G*G-O*O-W*W;return Ht<0?o=0:(Ht*=Ht,o=Ht*Ht*this.dot3(this.grad3[gt],G,O,W)),32*(s+a+r+o)}noise4d(t,e,i,s){const a=this.grad4,r=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,f,h,p,g;const _=(t+e+i+s)*l,m=Math.floor(t+_),d=Math.floor(e+_),v=Math.floor(i+_),y=Math.floor(s+_),x=(m+d+v+y)*c,T=m-x,b=d-x,M=v-x,D=y-x,w=t-T,S=e-b,L=i-M,F=s-D,N=w>S?32:0,H=w>L?16:0,I=S>L?8:0,R=w>F?4:0,G=S>F?2:0,O=L>F?1:0,W=N+H+I+R+G+O,tt=r[W][0]>=3?1:0,lt=r[W][1]>=3?1:0,rt=r[W][2]>=3?1:0,Lt=r[W][3]>=3?1:0,K=r[W][0]>=2?1:0,at=r[W][1]>=2?1:0,gt=r[W][2]>=2?1:0,ot=r[W][3]>=2?1:0,Tt=r[W][0]>=1?1:0,Nt=r[W][1]>=1?1:0,Ht=r[W][2]>=1?1:0,xe=r[W][3]>=1?1:0,z=w-tt+c,we=S-lt+c,Jt=L-rt+c,ee=F-Lt+c,At=w-K+2*c,Te=S-at+2*c,Pt=L-gt+2*c,It=F-ot+2*c,P=w-Tt+3*c,A=S-Nt+3*c,Z=L-Ht+3*c,nt=F-xe+3*c,st=w-1+4*c,it=S-1+4*c,Dt=L-1+4*c,pt=F-1+4*c,_t=m&255,Bt=d&255,ct=v&255,vt=y&255,Kt=o[_t+o[Bt+o[ct+o[vt]]]]%32,Ut=o[_t+tt+o[Bt+lt+o[ct+rt+o[vt+Lt]]]]%32,St=o[_t+K+o[Bt+at+o[ct+gt+o[vt+ot]]]]%32,Vt=o[_t+Tt+o[Bt+Nt+o[ct+Ht+o[vt+xe]]]]%32,jt=o[_t+1+o[Bt+1+o[ct+1+o[vt+1]]]]%32;let ue=.6-w*w-S*S-L*L-F*F;ue<0?u=0:(ue*=ue,u=ue*ue*this.dot4(a[Kt],w,S,L,F));let V=.6-z*z-we*we-Jt*Jt-ee*ee;V<0?f=0:(V*=V,f=V*V*this.dot4(a[Ut],z,we,Jt,ee));let ut=.6-At*At-Te*Te-Pt*Pt-It*It;ut<0?h=0:(ut*=ut,h=ut*ut*this.dot4(a[St],At,Te,Pt,It));let Q=.6-P*P-A*A-Z*Z-nt*nt;Q<0?p=0:(Q*=Q,p=Q*Q*this.dot4(a[Vt],P,A,Z,nt));let $=.6-st*st-it*it-Dt*Dt-pt*pt;return $<0?g=0:($*=$,g=$*$*this.dot4(a[jt],st,it,Dt,pt)),27*(u+f+h+p+g)}}const mu={name:"SSAOShader",defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Mt},cameraProjectionMatrix:{value:new ae},cameraInverseProjectionMatrix:{value:new ae},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},gu={name:"SSAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},vu={name:"SSAOBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Mt}},vertexShader:`varying vec2 vUv;

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

		}`};class _s extends hr{constructor(t,e,i,s,a=32){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(a),this.generateRandomKernelRotations();const r=new P0;r.format=nr,r.type=er,this.normalRenderTarget=new Rn(this.width,this.height,{minFilter:Sn,magFilter:Sn,type:wi,depthTexture:r}),this.ssaoRenderTarget=new Rn(this.width,this.height,{type:wi}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new be({defines:Object.assign({},mu.defines),uniforms:qn.clone(mu.uniforms),vertexShader:mu.vertexShader,fragmentShader:mu.fragmentShader,blending:En}),this.ssaoMaterial.defines.KERNEL_SIZE=a,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Y3,this.normalMaterial.blending=En,this.blurMaterial=new be({defines:Object.assign({},vu.defines),uniforms:qn.clone(vu.uniforms),vertexShader:vu.vertexShader,fragmentShader:vu.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new be({defines:Object.assign({},gu.defines),uniforms:qn.clone(gu.uniforms),vertexShader:gu.vertexShader,fragmentShader:gu.fragmentShader,blending:En}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new be({uniforms:qn.clone(Il.uniforms),vertexShader:Il.vertexShader,fragmentShader:Il.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:p1,blendDst:Dp,blendEquation:vs,blendSrcAlpha:d1,blendDstAlpha:Dp,blendEquationAlpha:vs}),this.fsQuad=new of(null),this.originalClearColor=new mt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,i){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case _s.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=En,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case _s.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=En,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case _s.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:i);break;case _s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=En,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case _s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=f1,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,i,s,a){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(a||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}renderOverride(t,e,i,s,a){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s=e.clearColor||s,a=e.clearAlpha||a,s!=null&&(t.setClearColor(s),t.setClearAlpha(a||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let i=0;i<t;i++){const s=new U;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let a=i/t;a=Ch.lerp(.1,1,a*a),s.multiplyScalar(a),e.push(s)}}generateRandomKernelRotations(){const i=new ID,s=4*4,a=new Float32Array(s);for(let r=0;r<s;r++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;a[r]=i.noise3d(o,l,c)}this.noiseTexture=new U0(a,4,4,E0,ki),this.noiseTexture.wrapS=Ro,this.noiseTexture.wrapT=Ro,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){const s=e.get(i);i.visible=s}),e.clear()}}_s.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const BD={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class FD extends hr{constructor(){super();const t=BD;this.uniforms=qn.clone(t.uniforms),this.material=new j3({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new of(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},se.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===m1?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===g1?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===v1?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===y0?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===x0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_1&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function HD(n){if(!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=n,document.head.appendChild(t),n}}function io(n,t){var e=n.__state.conversionName.toString(),i=Math.round(n.r),s=Math.round(n.g),a=Math.round(n.b),r=n.a,o=Math.round(n.h),l=n.s.toFixed(1),c=n.v.toFixed(1);if(t||e==="THREE_CHAR_HEX"||e==="SIX_CHAR_HEX"){for(var u=n.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(e==="CSS_RGB")return"rgb("+i+","+s+","+a+")";if(e==="CSS_RGBA")return"rgba("+i+","+s+","+a+","+r+")";if(e==="HEX")return"0x"+n.hex.toString(16);if(e==="RGB_ARRAY")return"["+i+","+s+","+a+"]";if(e==="RGBA_ARRAY")return"["+i+","+s+","+a+","+r+"]";if(e==="RGB_OBJ")return"{r:"+i+",g:"+s+",b:"+a+"}";if(e==="RGBA_OBJ")return"{r:"+i+",g:"+s+",b:"+a+",a:"+r+"}";if(e==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(e==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+r+"}"}return"unknown format"}var L_=Array.prototype.forEach,il=Array.prototype.slice,et={BREAK:{},extend:function(t){return this.each(il.call(arguments,1),function(e){var i=this.isObject(e)?Object.keys(e):[];i.forEach((function(s){this.isUndefined(e[s])||(t[s]=e[s])}).bind(this))},this),t},defaults:function(t){return this.each(il.call(arguments,1),function(e){var i=this.isObject(e)?Object.keys(e):[];i.forEach((function(s){this.isUndefined(t[s])&&(t[s]=e[s])}).bind(this))},this),t},compose:function(){var t=il.call(arguments);return function(){for(var e=il.call(arguments),i=t.length-1;i>=0;i--)e=[t[i].apply(this,e)];return e[0]}},each:function(t,e,i){if(t){if(L_&&t.forEach&&t.forEach===L_)t.forEach(e,i);else if(t.length===t.length+0){var s=void 0,a=void 0;for(s=0,a=t.length;s<a;s++)if(s in t&&e.call(i,t[s],s)===this.BREAK)return}else for(var r in t)if(e.call(i,t[r],r)===this.BREAK)return}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,i){var s=void 0;return function(){var a=this,r=arguments;function o(){s=null,i||t.apply(a,r)}var l=i||!s;clearTimeout(s),s=setTimeout(o,e),l&&t.apply(a,r)}},toArray:function(t){return t.toArray?t.toArray():il.call(t)},isUndefined:function(t){return t===void 0},isNull:function(t){return t===null},isNaN:function(n){function t(e){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(t){return t===Object(t)},isNumber:function(t){return t===t+0},isString:function(t){return t===t+""},isBoolean:function(t){return t===!1||t===!0},isFunction:function(t){return t instanceof Function}},VD=[{litmus:et.isString,conversions:{THREE_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString()+e[1].toString()+e[2].toString()+e[2].toString()+e[3].toString()+e[3].toString(),0)}},write:io},SIX_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9]{6})$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString(),0)}},write:io},CSS_RGB:{read:function(t){var e=t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3])}},write:io},CSS_RGBA:{read:function(t){var e=t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3]),a:parseFloat(e[4])}},write:io}}},{litmus:et.isNumber,conversions:{HEX:{read:function(t){return{space:"HEX",hex:t,conversionName:"HEX"}},write:function(t){return t.hex}}}},{litmus:et.isArray,conversions:{RGB_ARRAY:{read:function(t){return t.length!==3?!1:{space:"RGB",r:t[0],g:t[1],b:t[2]}},write:function(t){return[t.r,t.g,t.b]}},RGBA_ARRAY:{read:function(t){return t.length!==4?!1:{space:"RGB",r:t[0],g:t[1],b:t[2],a:t[3]}},write:function(t){return[t.r,t.g,t.b,t.a]}}}},{litmus:et.isObject,conversions:{RGBA_OBJ:{read:function(t){return et.isNumber(t.r)&&et.isNumber(t.g)&&et.isNumber(t.b)&&et.isNumber(t.a)?{space:"RGB",r:t.r,g:t.g,b:t.b,a:t.a}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b,a:t.a}}},RGB_OBJ:{read:function(t){return et.isNumber(t.r)&&et.isNumber(t.g)&&et.isNumber(t.b)?{space:"RGB",r:t.r,g:t.g,b:t.b}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b}}},HSVA_OBJ:{read:function(t){return et.isNumber(t.h)&&et.isNumber(t.s)&&et.isNumber(t.v)&&et.isNumber(t.a)?{space:"HSV",h:t.h,s:t.s,v:t.v,a:t.a}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v,a:t.a}}},HSV_OBJ:{read:function(t){return et.isNumber(t.h)&&et.isNumber(t.s)&&et.isNumber(t.v)?{space:"HSV",h:t.h,s:t.s,v:t.v}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v}}}}}],sl=void 0,_u=void 0,fm=function(){_u=!1;var t=arguments.length>1?et.toArray(arguments):arguments[0];return et.each(VD,function(e){if(e.litmus(t))return et.each(e.conversions,function(i,s){if(sl=i.read(t),_u===!1&&sl!==!1)return _u=sl,sl.conversionName=s,sl.conversion=i,et.BREAK}),et.BREAK}),_u},N_=void 0,Ph={hsv_to_rgb:function(t,e,i){var s=Math.floor(t/60)%6,a=t/60-Math.floor(t/60),r=i*(1-e),o=i*(1-a*e),l=i*(1-(1-a)*e),c=[[i,l,r],[o,i,r],[r,i,l],[r,o,i],[l,r,i],[i,r,o]][s];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(t,e,i){var s=Math.min(t,e,i),a=Math.max(t,e,i),r=a-s,o=void 0,l=void 0;if(a!==0)l=r/a;else return{h:NaN,s:0,v:0};return t===a?o=(e-i)/r:e===a?o=2+(i-t)/r:o=4+(t-e)/r,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:a/255}},rgb_to_hex:function(t,e,i){var s=this.hex_with_component(0,2,t);return s=this.hex_with_component(s,1,e),s=this.hex_with_component(s,0,i),s},component_from_hex:function(t,e){return t>>e*8&255},hex_with_component:function(t,e,i){return i<<(N_=e*8)|t&~(255<<N_)}},kD=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Di=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")},Li=function(){function n(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),ma=function n(t,e,i){t===null&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,e);if(s===void 0){var a=Object.getPrototypeOf(t);return a===null?void 0:n(a,e,i)}else{if("value"in s)return s.value;var r=s.get;return r===void 0?void 0:r.call(i)}},xa=function(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)},Sa=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:n},ln=function(){function n(){if(Di(this,n),this.__state=fm.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Li(n,[{key:"toString",value:function(){return io(this)}},{key:"toHexString",value:function(){return io(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function F0(n,t,e){Object.defineProperty(n,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(ln.recalculateRGB(this,t,e),this.__state[t])},set:function(s){this.__state.space!=="RGB"&&(ln.recalculateRGB(this,t,e),this.__state.space="RGB"),this.__state[t]=s}})}function H0(n,t){Object.defineProperty(n,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(ln.recalculateHSV(this),this.__state[t])},set:function(i){this.__state.space!=="HSV"&&(ln.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=i}})}ln.recalculateRGB=function(n,t,e){if(n.__state.space==="HEX")n.__state[t]=Ph.component_from_hex(n.__state.hex,e);else if(n.__state.space==="HSV")et.extend(n.__state,Ph.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};ln.recalculateHSV=function(n){var t=Ph.rgb_to_hsv(n.r,n.g,n.b);et.extend(n.__state,{s:t.s,v:t.v}),et.isNaN(t.h)?et.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=t.h};ln.COMPONENTS=["r","g","b","h","s","v","hex","a"];F0(ln.prototype,"r",2);F0(ln.prototype,"g",1);F0(ln.prototype,"b",0);H0(ln.prototype,"h");H0(ln.prototype,"s");H0(ln.prototype,"v");Object.defineProperty(ln.prototype,"a",{get:function(){return this.__state.a},set:function(t){this.__state.a=t}});Object.defineProperty(ln.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Ph.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(t){this.__state.space="HEX",this.__state.hex=t}});var fr=function(){function n(t,e){Di(this,n),this.initialValue=t[e],this.domElement=document.createElement("div"),this.object=t,this.property=e,this.__onChange=void 0,this.__onFinishChange=void 0}return Li(n,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),GD={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Q1={};et.each(GD,function(n,t){et.each(n,function(e){Q1[e]=t})});var jD=/(\d+(\.\d+)?)px/;function Ui(n){if(n==="0"||et.isUndefined(n))return 0;var t=n.match(jD);return et.isNull(t)?0:parseFloat(t[1])}var X={makeSelectable:function(t,e){t===void 0||t.style===void 0||(t.onselectstart=e?function(){return!1}:function(){},t.style.MozUserSelect=e?"auto":"none",t.style.KhtmlUserSelect=e?"auto":"none",t.unselectable=e?"on":"off")},makeFullscreen:function(t,e,i){var s=i,a=e;et.isUndefined(a)&&(a=!0),et.isUndefined(s)&&(s=!0),t.style.position="absolute",a&&(t.style.left=0,t.style.right=0),s&&(t.style.top=0,t.style.bottom=0)},fakeEvent:function(t,e,i,s){var a=i||{},r=Q1[e];if(!r)throw new Error("Event type "+e+" not supported.");var o=document.createEvent(r);switch(r){case"MouseEvents":{var l=a.x||a.clientX||0,c=a.y||a.clientY||0;o.initMouseEvent(e,a.bubbles||!1,a.cancelable||!0,window,a.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;et.defaults(a,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(e,a.bubbles||!1,a.cancelable,window,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.keyCode,a.charCode);break}default:{o.initEvent(e,a.bubbles||!1,a.cancelable||!0);break}}et.defaults(o,s),t.dispatchEvent(o)},bind:function(t,e,i,s){var a=s||!1;return t.addEventListener?t.addEventListener(e,i,a):t.attachEvent&&t.attachEvent("on"+e,i),X},unbind:function(t,e,i,s){var a=s||!1;return t.removeEventListener?t.removeEventListener(e,i,a):t.detachEvent&&t.detachEvent("on"+e,i),X},addClass:function(t,e){if(t.className===void 0)t.className=e;else if(t.className!==e){var i=t.className.split(/ +/);i.indexOf(e)===-1&&(i.push(e),t.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return X},removeClass:function(t,e){if(e)if(t.className===e)t.removeAttribute("class");else{var i=t.className.split(/ +/),s=i.indexOf(e);s!==-1&&(i.splice(s,1),t.className=i.join(" "))}else t.className=void 0;return X},hasClass:function(t,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(t.className)||!1},getWidth:function(t){var e=getComputedStyle(t);return Ui(e["border-left-width"])+Ui(e["border-right-width"])+Ui(e["padding-left"])+Ui(e["padding-right"])+Ui(e.width)},getHeight:function(t){var e=getComputedStyle(t);return Ui(e["border-top-width"])+Ui(e["border-bottom-width"])+Ui(e["padding-top"])+Ui(e["padding-bottom"])+Ui(e.height)},getOffset:function(t){var e=t,i={left:0,top:0};if(e.offsetParent)do i.left+=e.offsetLeft,i.top+=e.offsetTop,e=e.offsetParent;while(e);return i},isActive:function(t){return t===document.activeElement&&(t.type||t.href)}},$1=function(n){xa(t,n);function t(e,i){Di(this,t);var s=Sa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),a=s;s.__prev=s.getValue(),s.__checkbox=document.createElement("input"),s.__checkbox.setAttribute("type","checkbox");function r(){a.setValue(!a.__prev)}return X.bind(s.__checkbox,"change",r,!1),s.domElement.appendChild(s.__checkbox),s.updateDisplay(),s}return Li(t,[{key:"setValue",value:function(i){var s=ma(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),s}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),ma(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(fr),WD=function(n){xa(t,n);function t(e,i,s){Di(this,t);var a=Sa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),r=s,o=a;if(a.__select=document.createElement("select"),et.isArray(r)){var l={};et.each(r,function(c){l[c]=c}),r=l}return et.each(r,function(c,u){var f=document.createElement("option");f.innerHTML=u,f.setAttribute("value",c),o.__select.appendChild(f)}),a.updateDisplay(),X.bind(a.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),a.domElement.appendChild(a.__select),a}return Li(t,[{key:"setValue",value:function(i){var s=ma(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),s}},{key:"updateDisplay",value:function(){return X.isActive(this.__select)?this:(this.__select.value=this.getValue(),ma(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(fr),qD=function(n){xa(t,n);function t(e,i){Di(this,t);var s=Sa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),a=s;function r(){a.setValue(a.__input.value)}function o(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),X.bind(s.__input,"keyup",r),X.bind(s.__input,"change",r),X.bind(s.__input,"blur",o),X.bind(s.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Li(t,[{key:"updateDisplay",value:function(){return X.isActive(this.__input)||(this.__input.value=this.getValue()),ma(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(fr);function P_(n){var t=n.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}var J1=function(n){xa(t,n);function t(e,i,s){Di(this,t);var a=Sa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),r=s||{};return a.__min=r.min,a.__max=r.max,a.__step=r.step,et.isUndefined(a.__step)?a.initialValue===0?a.__impliedStep=1:a.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(a.initialValue))/Math.LN10))/10:a.__impliedStep=a.__step,a.__precision=P_(a.__impliedStep),a}return Li(t,[{key:"setValue",value:function(i){var s=i;return this.__min!==void 0&&s<this.__min?s=this.__min:this.__max!==void 0&&s>this.__max&&(s=this.__max),this.__step!==void 0&&s%this.__step!==0&&(s=Math.round(s/this.__step)*this.__step),ma(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,s)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=P_(i),this}}]),t}(fr);function XD(n,t){var e=Math.pow(10,t);return Math.round(n*e)/e}var Uh=function(n){xa(t,n);function t(e,i,s){Di(this,t);var a=Sa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,s));a.__truncationSuspended=!1;var r=a,o=void 0;function l(){var g=parseFloat(r.__input.value);et.isNaN(g)||r.setValue(g)}function c(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}function u(){c()}function f(g){var _=o-g.clientY;r.setValue(r.getValue()+_*r.__impliedStep),o=g.clientY}function h(){X.unbind(window,"mousemove",f),X.unbind(window,"mouseup",h),c()}function p(g){X.bind(window,"mousemove",f),X.bind(window,"mouseup",h),o=g.clientY}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),X.bind(a.__input,"change",l),X.bind(a.__input,"blur",u),X.bind(a.__input,"mousedown",p),X.bind(a.__input,"keydown",function(g){g.keyCode===13&&(r.__truncationSuspended=!0,this.blur(),r.__truncationSuspended=!1,c())}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return Li(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():XD(this.getValue(),this.__precision),ma(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(J1);function U_(n,t,e,i,s){return i+(s-i)*((n-t)/(e-t))}var dm=function(n){xa(t,n);function t(e,i,s,a,r){Di(this,t);var o=Sa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,{min:s,max:a,step:r})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),X.bind(o.__background,"mousedown",c),X.bind(o.__background,"touchstart",h),X.addClass(o.__background,"slider"),X.addClass(o.__foreground,"slider-fg");function c(_){document.activeElement.blur(),X.bind(window,"mousemove",u),X.bind(window,"mouseup",f),u(_)}function u(_){_.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(U_(_.clientX,m.left,m.right,l.__min,l.__max)),!1}function f(){X.unbind(window,"mousemove",u),X.unbind(window,"mouseup",f),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(_){_.touches.length===1&&(X.bind(window,"touchmove",p),X.bind(window,"touchend",g),p(_))}function p(_){var m=_.touches[0].clientX,d=l.__background.getBoundingClientRect();l.setValue(U_(m,d.left,d.right,l.__min,l.__max))}function g(){X.unbind(window,"touchmove",p),X.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Li(t,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",ma(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(J1),tb=function(n){xa(t,n);function t(e,i,s){Di(this,t);var a=Sa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),r=a;return a.__button=document.createElement("div"),a.__button.innerHTML=s===void 0?"Fire":s,X.bind(a.__button,"click",function(o){return o.preventDefault(),r.fire(),!1}),X.addClass(a.__button,"button"),a.domElement.appendChild(a.__button),a}return Li(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(fr),pm=function(n){xa(t,n);function t(e,i){Di(this,t);var s=Sa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));s.__color=new ln(s.getValue()),s.__temp=new ln(0);var a=s;s.domElement=document.createElement("div"),X.makeSelectable(s.domElement,!1),s.__selector=document.createElement("div"),s.__selector.className="selector",s.__saturation_field=document.createElement("div"),s.__saturation_field.className="saturation-field",s.__field_knob=document.createElement("div"),s.__field_knob.className="field-knob",s.__field_knob_border="2px solid ",s.__hue_knob=document.createElement("div"),s.__hue_knob.className="hue-knob",s.__hue_field=document.createElement("div"),s.__hue_field.className="hue-field",s.__input=document.createElement("input"),s.__input.type="text",s.__input_textShadow="0 1px 1px ",X.bind(s.__input,"keydown",function(_){_.keyCode===13&&f.call(this)}),X.bind(s.__input,"blur",f),X.bind(s.__selector,"mousedown",function(){X.addClass(this,"drag").bind(window,"mouseup",function(){X.removeClass(a.__selector,"drag")})}),X.bind(s.__selector,"touchstart",function(){X.addClass(this,"drag").bind(window,"touchend",function(){X.removeClass(a.__selector,"drag")})});var r=document.createElement("div");et.extend(s.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),et.extend(s.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:s.__field_knob_border+(s.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),et.extend(s.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),et.extend(s.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),et.extend(r.style,{width:"100%",height:"100%",background:"none"}),O_(r,"top","rgba(0,0,0,0)","#000"),et.extend(s.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),ZD(s.__hue_field),et.extend(s.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:s.__input_textShadow+"rgba(0,0,0,0.7)"}),X.bind(s.__saturation_field,"mousedown",o),X.bind(s.__saturation_field,"touchstart",o),X.bind(s.__field_knob,"mousedown",o),X.bind(s.__field_knob,"touchstart",o),X.bind(s.__hue_field,"mousedown",l),X.bind(s.__hue_field,"touchstart",l);function o(_){p(_),X.bind(window,"mousemove",p),X.bind(window,"touchmove",p),X.bind(window,"mouseup",c),X.bind(window,"touchend",c)}function l(_){g(_),X.bind(window,"mousemove",g),X.bind(window,"touchmove",g),X.bind(window,"mouseup",u),X.bind(window,"touchend",u)}function c(){X.unbind(window,"mousemove",p),X.unbind(window,"touchmove",p),X.unbind(window,"mouseup",c),X.unbind(window,"touchend",c),h()}function u(){X.unbind(window,"mousemove",g),X.unbind(window,"touchmove",g),X.unbind(window,"mouseup",u),X.unbind(window,"touchend",u),h()}function f(){var _=fm(this.value);_!==!1?(a.__color.__state=_,a.setValue(a.__color.toOriginal())):this.value=a.__color.toString()}function h(){a.__onFinishChange&&a.__onFinishChange.call(a,a.__color.toOriginal())}s.__saturation_field.appendChild(r),s.__selector.appendChild(s.__field_knob),s.__selector.appendChild(s.__saturation_field),s.__selector.appendChild(s.__hue_field),s.__hue_field.appendChild(s.__hue_knob),s.domElement.appendChild(s.__input),s.domElement.appendChild(s.__selector),s.updateDisplay();function p(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=a.__saturation_field.getBoundingClientRect(),d=_.touches&&_.touches[0]||_,v=d.clientX,y=d.clientY,x=(v-m.left)/(m.right-m.left),T=1-(y-m.top)/(m.bottom-m.top);return T>1?T=1:T<0&&(T=0),x>1?x=1:x<0&&(x=0),a.__color.v=T,a.__color.s=x,a.setValue(a.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=a.__hue_field.getBoundingClientRect(),d=_.touches&&_.touches[0]||_,v=d.clientY,y=1-(v-m.top)/(m.bottom-m.top);return y>1?y=1:y<0&&(y=0),a.__color.h=y*360,a.setValue(a.__color.toOriginal()),!1}return s}return Li(t,[{key:"updateDisplay",value:function(){var i=fm(this.getValue());if(i!==!1){var s=!1;et.each(ln.COMPONENTS,function(o){if(!et.isUndefined(i[o])&&!et.isUndefined(this.__color.__state[o])&&i[o]!==this.__color.__state[o])return s=!0,{}},this),s&&et.extend(this.__color.__state,i)}et.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var a=this.__color.v<.5||this.__color.s>.5?255:0,r=255-a;et.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+a+","+a+","+a+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,O_(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),et.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+a+","+a+","+a+")",textShadow:this.__input_textShadow+"rgba("+r+","+r+","+r+",.7)"})}}]),t}(fr),YD=["-moz-","-o-","-webkit-","-ms-",""];function O_(n,t,e,i){n.style.background="",et.each(YD,function(s){n.style.cssText+="background: "+s+"linear-gradient("+t+", "+e+" 0%, "+i+" 100%); "})}function ZD(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var KD={load:function(t,e){var i=e||document,s=i.createElement("link");s.type="text/css",s.rel="stylesheet",s.href=t,i.getElementsByTagName("head")[0].appendChild(s)},inject:function(t,e){var i=e||document,s=document.createElement("style");s.type="text/css",s.innerHTML=t;var a=i.getElementsByTagName("head")[0];try{a.appendChild(s)}catch{}}},QD=`<div id="dg-save" class="dg dialogue">

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

</div>`,$D=function(t,e){var i=t[e];return et.isArray(arguments[2])||et.isObject(arguments[2])?new WD(t,e,arguments[2]):et.isNumber(i)?et.isNumber(arguments[2])&&et.isNumber(arguments[3])?et.isNumber(arguments[4])?new dm(t,e,arguments[2],arguments[3],arguments[4]):new dm(t,e,arguments[2],arguments[3]):et.isNumber(arguments[4])?new Uh(t,e,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Uh(t,e,{min:arguments[2],max:arguments[3]}):et.isString(i)?new qD(t,e):et.isFunction(i)?new tb(t,e,""):et.isBoolean(i)?new $1(t,e):null};function JD(n){setTimeout(n,1e3/60)}var tL=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||JD,eL=function(){function n(){Di(this,n),this.backgroundElement=document.createElement("div"),et.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),X.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),et.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;X.bind(this.backgroundElement,"click",function(){t.hide()})}return Li(n,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),et.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,i=function s(){e.domElement.style.display="none",e.backgroundElement.style.display="none",X.unbind(e.domElement,"webkitTransitionEnd",s),X.unbind(e.domElement,"transitionend",s),X.unbind(e.domElement,"oTransitionEnd",s)};X.bind(this.domElement,"webkitTransitionEnd",i),X.bind(this.domElement,"transitionend",i),X.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-X.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-X.getHeight(this.domElement)/2+"px"}}]),n}(),nL=HD(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);KD.inject(nL);var z_="dg",I_=72,B_=20,ac="Default",vl=function(){try{return!!window.localStorage}catch{return!1}}(),Bl=void 0,F_=!0,Vr=void 0,wd=!1,eb=[],ve=function n(t){var e=this,i=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),X.addClass(this.domElement,z_),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=et.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=et.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),et.isUndefined(i.load)?i.load={preset:ac}:i.preset&&(i.load.preset=i.preset),et.isUndefined(i.parent)&&i.hideable&&eb.push(this),i.resizable=et.isUndefined(i.parent)&&i.resizable,i.autoPlace&&et.isUndefined(i.scrollable)&&(i.scrollable=!0);var s=vl&&localStorage.getItem(kr(this,"isLocal"))==="true",a=void 0,r=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return e.parent?e.getRoot().preset:i.load.preset},set:function(h){e.parent?e.getRoot().preset=h:i.load.preset=h,rL(this),e.revert()}},width:{get:function(){return i.width},set:function(h){i.width=h,vm(e,h)}},name:{get:function(){return i.name},set:function(h){i.name=h,r&&(r.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(h){i.closed=h,i.closed?X.addClass(e.__ul,n.CLASS_CLOSED):X.removeClass(e.__ul,n.CLASS_CLOSED),this.onResize(),e.__closeButton&&(e.__closeButton.innerHTML=h?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return s},set:function(h){vl&&(s=h,h?X.bind(window,"unload",a):X.unbind(window,"unload",a),localStorage.setItem(kr(e,"isLocal"),h))}}}),et.isUndefined(i.parent)){if(this.closed=i.closed||!1,X.addClass(this.domElement,n.CLASS_MAIN),X.makeSelectable(this.domElement,!1),vl&&s){e.useLocalStorage=!0;var o=localStorage.getItem(kr(this,"gui"));o&&(i.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,X.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?(X.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(X.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),X.bind(this.__closeButton,"click",function(){e.closed=!e.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);X.addClass(l,"controller-name"),r=V0(e,l);var c=function(h){return h.preventDefault(),e.closed=!e.closed,!1};X.addClass(this.__ul,n.CLASS_CLOSED),X.addClass(r,"title"),X.bind(r,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(et.isUndefined(i.parent)&&(F_&&(Vr=document.createElement("div"),X.addClass(Vr,z_),X.addClass(Vr,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Vr),F_=!1),Vr.appendChild(this.domElement),X.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||vm(e,i.width)),this.__resizeHandler=function(){e.onResizeDebounced()},X.bind(window,"resize",this.__resizeHandler),X.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),X.bind(this.__ul,"transitionend",this.__resizeHandler),X.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&aL(this),a=function(){vl&&localStorage.getItem(kr(e,"isLocal"))==="true"&&localStorage.setItem(kr(e,"gui"),JSON.stringify(e.getSaveObject()))},this.saveToLocalStorageIfPossible=a;function u(){var f=e.getRoot();f.width+=1,et.defer(function(){f.width-=1})}i.parent||u()};ve.toggleHide=function(){wd=!wd,et.each(eb,function(n){n.domElement.style.display=wd?"none":""})};ve.CLASS_AUTO_PLACE="a";ve.CLASS_AUTO_PLACE_CONTAINER="ac";ve.CLASS_MAIN="main";ve.CLASS_CONTROLLER_ROW="cr";ve.CLASS_TOO_TALL="taller-than-window";ve.CLASS_CLOSED="closed";ve.CLASS_CLOSE_BUTTON="close-button";ve.CLASS_CLOSE_TOP="close-top";ve.CLASS_CLOSE_BOTTOM="close-bottom";ve.CLASS_DRAG="drag";ve.DEFAULT_WIDTH=245;ve.TEXT_CLOSED="Close Controls";ve.TEXT_OPEN="Open Controls";ve._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===I_||n.keyCode===I_)&&ve.toggleHide()};X.bind(window,"keydown",ve._keydownHandler,!1);et.extend(ve.prototype,{add:function(t,e){return Fl(this,t,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,e){return Fl(this,t,e,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.splice(this.__controllers.indexOf(t),1);var e=this;et.defer(function(){e.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Vr.removeChild(this.domElement);var t=this;et.each(this.__folders,function(e){t.removeFolder(e)}),X.unbind(window,"keydown",ve._keydownHandler,!1),H_(this)},addFolder:function(t){if(this.__folders[t]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+t+'"');var e={name:t,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(e.closed=this.load.folders[t].closed,e.load=this.load.folders[t]);var i=new ve(e);this.__folders[t]=i;var s=V0(this,i.domElement);return X.addClass(s,"folder"),i},removeFolder:function(t){this.__ul.removeChild(t.domElement.parentElement),delete this.__folders[t.name],this.load&&this.load.folders&&this.load.folders[t.name]&&delete this.load.folders[t.name],H_(t);var e=this;et.each(t.__folders,function(i){t.removeFolder(i)}),et.defer(function(){e.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var t=this.getRoot();if(t.scrollable){var e=X.getOffset(t.__ul).top,i=0;et.each(t.__ul.childNodes,function(s){t.autoPlace&&s===t.__save_row||(i+=X.getHeight(s))}),window.innerHeight-e-B_<i?(X.addClass(t.domElement,ve.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-e-B_+"px"):(X.removeClass(t.domElement,ve.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&et.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},onResizeDebounced:et.debounce(function(){this.onResize()},50),remember:function(){if(et.isUndefined(Bl)&&(Bl=new eL,Bl.domElement.innerHTML=QD),this.parent)throw new Error("You can only call remember on a top level GUI.");var t=this;et.each(Array.prototype.slice.call(arguments),function(e){t.__rememberedObjects.length===0&&sL(t),t.__rememberedObjects.indexOf(e)===-1&&t.__rememberedObjects.push(e)}),this.autoPlace&&vm(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=yu(this)),t.folders={},et.each(this.__folders,function(e,i){t.folders[i]=e.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=yu(this),mm(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[ac]=yu(this,!0)),this.load.remembered[t]=yu(this),this.preset=t,gm(this,t,!0),this.saveToLocalStorageIfPossible()},revert:function(t){et.each(this.__controllers,function(e){this.getRoot().load.remembered?nb(t||this.getRoot(),e):e.setValue(e.initialValue),e.__onFinishChange&&e.__onFinishChange.call(e,e.getValue())},this),et.each(this.__folders,function(e){e.revert(e)}),t||mm(this.getRoot(),!1)},listen:function(t){var e=this.__listening.length===0;this.__listening.push(t),e&&ib(this.__listening)},updateDisplay:function(){et.each(this.__controllers,function(t){t.updateDisplay()}),et.each(this.__folders,function(t){t.updateDisplay()})}});function V0(n,t,e){var i=document.createElement("li");return t&&i.appendChild(t),e?n.__ul.insertBefore(i,e):n.__ul.appendChild(i),n.onResize(),i}function H_(n){X.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&X.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function mm(n,t){var e=n.__preset_select[n.__preset_select.selectedIndex];t?e.innerHTML=e.value+"*":e.innerHTML=e.value}function iL(n,t,e){if(e.__li=t,e.__gui=n,et.extend(e,{options:function(r){if(arguments.length>1){var o=e.__li.nextElementSibling;return e.remove(),Fl(n,e.object,e.property,{before:o,factoryArgs:[et.toArray(arguments)]})}if(et.isArray(r)||et.isObject(r)){var l=e.__li.nextElementSibling;return e.remove(),Fl(n,e.object,e.property,{before:l,factoryArgs:[r]})}},name:function(r){return e.__li.firstElementChild.firstElementChild.innerHTML=r,e},listen:function(){return e.__gui.listen(e),e},remove:function(){return e.__gui.remove(e),e}}),e instanceof dm){var i=new Uh(e.object,e.property,{min:e.__min,max:e.__max,step:e.__step});et.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(a){var r=e[a],o=i[a];e[a]=i[a]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(i,l),r.apply(e,l)}}),X.addClass(t,"has-slider"),e.domElement.insertBefore(i.domElement,e.domElement.firstElementChild)}else if(e instanceof Uh){var s=function(r){if(et.isNumber(e.__min)&&et.isNumber(e.__max)){var o=e.__li.firstElementChild.firstElementChild.innerHTML,l=e.__gui.__listening.indexOf(e)>-1;e.remove();var c=Fl(n,e.object,e.property,{before:e.__li.nextElementSibling,factoryArgs:[e.__min,e.__max,e.__step]});return c.name(o),l&&c.listen(),c}return r};e.min=et.compose(s,e.min),e.max=et.compose(s,e.max)}else e instanceof $1?(X.bind(t,"click",function(){X.fakeEvent(e.__checkbox,"click")}),X.bind(e.__checkbox,"click",function(a){a.stopPropagation()})):e instanceof tb?(X.bind(t,"click",function(){X.fakeEvent(e.__button,"click")}),X.bind(t,"mouseover",function(){X.addClass(e.__button,"hover")}),X.bind(t,"mouseout",function(){X.removeClass(e.__button,"hover")})):e instanceof pm&&(X.addClass(t,"color"),e.updateDisplay=et.compose(function(a){return t.style.borderLeftColor=e.__color.toString(),a},e.updateDisplay),e.updateDisplay());e.setValue=et.compose(function(a){return n.getRoot().__preset_select&&e.isModified()&&mm(n.getRoot(),!0),a},e.setValue)}function nb(n,t){var e=n.getRoot(),i=e.__rememberedObjects.indexOf(t.object);if(i!==-1){var s=e.__rememberedObjectIndecesToControllers[i];if(s===void 0&&(s={},e.__rememberedObjectIndecesToControllers[i]=s),s[t.property]=t,e.load&&e.load.remembered){var a=e.load.remembered,r=void 0;if(a[n.preset])r=a[n.preset];else if(a[ac])r=a[ac];else return;if(r[i]&&r[i][t.property]!==void 0){var o=r[i][t.property];t.initialValue=o,t.setValue(o)}}}}function Fl(n,t,e,i){if(t[e]===void 0)throw new Error('Object "'+t+'" has no property "'+e+'"');var s=void 0;if(i.color)s=new pm(t,e);else{var a=[t,e].concat(i.factoryArgs);s=$D.apply(n,a)}i.before instanceof fr&&(i.before=i.before.__li),nb(n,s),X.addClass(s.domElement,"c");var r=document.createElement("span");X.addClass(r,"property-name"),r.innerHTML=s.property;var o=document.createElement("div");o.appendChild(r),o.appendChild(s.domElement);var l=V0(n,o,i.before);return X.addClass(l,ve.CLASS_CONTROLLER_ROW),s instanceof pm?X.addClass(l,"color"):X.addClass(l,kD(s.getValue())),iL(n,l,s),n.__controllers.push(s),s}function kr(n,t){return document.location.href+"."+t}function gm(n,t,e){var i=document.createElement("option");i.innerHTML=t,i.value=t,n.__preset_select.appendChild(i),e&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function V_(n,t){t.style.display=n.useLocalStorage?"block":"none"}function sL(n){var t=n.__save_row=document.createElement("li");X.addClass(n.domElement,"has-save"),n.__ul.insertBefore(t,n.__ul.firstChild),X.addClass(t,"save-row");var e=document.createElement("span");e.innerHTML="&nbsp;",X.addClass(e,"button gears");var i=document.createElement("span");i.innerHTML="Save",X.addClass(i,"button"),X.addClass(i,"save");var s=document.createElement("span");s.innerHTML="New",X.addClass(s,"button"),X.addClass(s,"save-as");var a=document.createElement("span");a.innerHTML="Revert",X.addClass(a,"button"),X.addClass(a,"revert");var r=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?et.each(n.load.remembered,function(f,h){gm(n,h,h===n.preset)}):gm(n,ac,!1),X.bind(r,"change",function(){for(var f=0;f<n.__preset_select.length;f++)n.__preset_select[f].innerHTML=n.__preset_select[f].value;n.preset=this.value}),t.appendChild(r),t.appendChild(e),t.appendChild(i),t.appendChild(s),t.appendChild(a),vl){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(kr(n,"isLocal"))==="true"&&l.setAttribute("checked","checked"),V_(n,o),X.bind(l,"change",function(){n.useLocalStorage=!n.useLocalStorage,V_(n,o)})}var u=document.getElementById("dg-new-constructor");X.bind(u,"keydown",function(f){f.metaKey&&(f.which===67||f.keyCode===67)&&Bl.hide()}),X.bind(e,"click",function(){u.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),Bl.show(),u.focus(),u.select()}),X.bind(i,"click",function(){n.save()}),X.bind(s,"click",function(){var f=prompt("Enter a new preset name.");f&&n.saveAs(f)}),X.bind(a,"click",function(){n.revert()})}function aL(n){var t=void 0;n.__resize_handle=document.createElement("div"),et.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function e(a){return a.preventDefault(),n.width+=t-a.clientX,n.onResize(),t=a.clientX,!1}function i(){X.removeClass(n.__closeButton,ve.CLASS_DRAG),X.unbind(window,"mousemove",e),X.unbind(window,"mouseup",i)}function s(a){return a.preventDefault(),t=a.clientX,X.addClass(n.__closeButton,ve.CLASS_DRAG),X.bind(window,"mousemove",e),X.bind(window,"mouseup",i),!1}X.bind(n.__resize_handle,"mousedown",s),X.bind(n.__closeButton,"mousedown",s),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function vm(n,t){n.domElement.style.width=t+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=t+"px"),n.__closeButton&&(n.__closeButton.style.width=t+"px")}function yu(n,t){var e={};return et.each(n.__rememberedObjects,function(i,s){var a={},r=n.__rememberedObjectIndecesToControllers[s];et.each(r,function(o,l){a[l]=t?o.initialValue:o.getValue()}),e[s]=a}),e}function rL(n){for(var t=0;t<n.__preset_select.length;t++)n.__preset_select[t].value===n.preset&&(n.__preset_select.selectedIndex=t)}function ib(n){n.length!==0&&tL.call(window,function(){ib(n)}),et.each(n,function(t){t.updateDisplay()})}var sb=ve;const oL=function(){class n{constructor(e){this._points=[],this._lerp=e}AddPoint(e,i,s,a){this._points.push({time:e,data:i,posEasing:s,rotEasing:a})}Get(e){let i=0;for(let h=0;h<this._points.length&&!(this._points[h].time>=e);h++)i=h;const s=Math.max(0,i-1),a=Math.min(this._points.length-1,i+1),r=Math.min(this._points.length-1,i+2);if(i===a)return this._points[i].data;const o=this._points[i].time,l=this._points[a].time,c=(e-o)/(l-o),u=this._points[i].posEasing,f=this._points[i].rotEasing;return this._lerp(c,this._points[s].data,this._points[i].data,this._points[a].data,this._points[r].data,u,f)}}return{CubicHermiteSpline:n}}();class ab{constructor(t){this.points=t,this.times=t.map(e=>e.time),this.smoothedPath=this.createSmoothedPath(this.points),this.arcLengths=this.computeArcLengths(this.smoothedPath)}getDivisions(t){return dividePathEvenly(this.smoothedPath,this.arcLengths,t)}getLineGeometry(t=new mt(255)){return this.createLineGeometry(this.smoothedPath,t)}createSmoothedPath(t){const e=[],i=[];for(let s=0;s<t.length;s++){let a;s===0?a=new U().subVectors(t[s+1].data.pos,t[s].data.pos):s===t.length-1?a=new U().subVectors(t[s].data.pos,t[s-1].data.pos):a=new U().subVectors(t[s+1].data.pos,t[s-1].data.pos).multiplyScalar(.5),e.push(a)}for(let s=0;s<t.length-1;s++){const a=t[s].data.pos,r=t[s+1].data.pos,o=e[s],l=e[s+1],c=[],u=20;for(let f=0;f<=u;f++){const h=f/u,p=new U().copy(a).multiplyScalar(2*h**3-3*h**2+1).add(new U().copy(r).multiplyScalar(-2*h**3+3*h**2)).add(new U().copy(o).multiplyScalar(h**3-2*h**2+h)).add(new U().copy(l).multiplyScalar(h**3-h**2));c.push(p)}i.push(...c)}return i}computeArcLengths(t){const e=[0];for(let i=1;i<t.length;i++){const s=t[i].distanceTo(t[i-1]);e.push(e[i-1]+s)}return e}dividePathEvenly(t,e,i){const s=e[e.length-1],a=[];for(let r=0;r<=i;r++){const o=r/i*s;let l=0;for(;e[l]<o&&l<e.length-1;)l++;const c=t[l-1],u=t[l],f=e[l]-e[l-1],h=(o-e[l-1])/f,p=new U().lerpVectors(c,u,h);a.push(p)}return a}Get(t,e=sc.Easing.Linear.None){const i=e(t),s=this.arcLengths[this.arcLengths.length-1],a=i*s;let r=1;for(;this.arcLengths[r]<a&&r<this.arcLengths.length-1;)r++;const o=this.smoothedPath[r-1],l=this.smoothedPath[r],c=this.arcLengths[r]-this.arcLengths[r-1],u=(a-this.arcLengths[r-1])/c;return new U().lerpVectors(o,l,u)}createLineGeometry(t,e){const i=new zn().setFromPoints(t),s=new vo({color:e});return new W1(i,s)}}const lL=function(){class n{constructor(e){this._params=e,this._currentTime=0,this._totalTime=e.points[e.points.length-1].time;const i=(s,a,r,o,l,c,u)=>{const f=c(s),h=new U().lerpVectors(r.pos,o.pos,f),p=u(s),g=r.rot.clone().slerp(o.rot,p);return{pos:h,rot:g}};this._spline=new oL.CubicHermiteSpline(i),this._smoothPath=new ab(e.points);for(let s of e.points)this._spline.AddPoint(s.time,s.data,s.posEasing||sc.Easing.Linear.None,s.rotEasing||sc.Easing.Quadratic.InOut)}Update(e){if(this._currentTime+=e,this._t=this._currentTime/this._totalTime,this._t>1)return;const i=this._spline.Get(this._currentTime),s=this._smoothPath.Get(this._t);this._params.camera.position.copy(s),this._params.camera.quaternion.copy(i.rot)}}return{CameraTrack:n}}(),_n=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let n=0;n<256;n++)_n[256+n]=_n[n];function Td(n){return n*n*n*(n*(n*6-15)+10)}function Da(n,t,e){return t+n*(e-t)}function js(n,t,e,i){const s=n&15,a=s<8?t:e,r=s<4?e:s==12||s==14?t:i;return(s&1?-a:a)+(s&2?-r:r)}class cL{noise(t,e,i){const s=Math.floor(t),a=Math.floor(e),r=Math.floor(i),o=s&255,l=a&255,c=r&255;t-=s,e-=a,i-=r;const u=t-1,f=e-1,h=i-1,p=Td(t),g=Td(e),_=Td(i),m=_n[o]+l,d=_n[m]+c,v=_n[m+1]+c,y=_n[o+1]+l,x=_n[y]+c,T=_n[y+1]+c;return Da(_,Da(g,Da(p,js(_n[d],t,e,i),js(_n[x],u,e,i)),Da(p,js(_n[v],t,f,i),js(_n[T],u,f,i))),Da(g,Da(p,js(_n[d+1],t,e,h),js(_n[x+1],u,e,h)),Da(p,js(_n[v+1],t,f,h),js(_n[T+1],u,f,h))))}}function uL(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function _m(n,t){return n+Math.floor(Math.random()*(t-n+1))}function hL(n,t){return n+Math.random()*(t-n)}class fL{constructor(t){this.scene=t.scene||new No,this.camera=t.camera||new pn(75,window.innerWidth/window.innerHeight,.1,1e3),this.gui=t.gui||new GUI,this.renderer=t.renderer||new rf,this.composer=t.composer||new B0(this.renderer)}update(t){}getScene(){return this.scene}getCamera(){return this.camera}}new U(1,1,1),new U(.9,.76,.5);const Ad={uniforms:{lightDirection:{value:new U(1,1,1)},lightColor:{value:new U(.8,.76,.5)},gradientMap:{value:null},size:{value:20},hmax:{value:null},hmin:{value:null},envMap:{value:null},vpw:{value:5e-5},vph:{value:5e-5},offset:{value:new Mt(-.5,-.5)},pitch:{value:new Mt(4,4)},enableFog:{value:!0},heightMap:{value:new U0(new Uint8Array(1),1,1,Wn)},hmMin:{value:0},hmMax:{value:0},heightMapRes:{value:400}},vertexShader:`
    uniform vec3 lightDirection;

    uniform samplerCube envMap;

    out vec3 vNormal;
    out vec3 vPosition;
    out vec2 vUV;
    out vec3 lightVec;
    out vec3 upVec;
    out vec3 vNorm;
    out vec3 vViewDirection;
    out vec3 vViewNormal;
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
        vNorm = ((normal) * -1.0);
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
    uniform sampler2D gradientMap;
    uniform samplerCube envMap;
    uniform float size;
    uniform bool enableFog;
    uniform sampler2D heightMap;
    uniform float hmMin;
    uniform float hmMax;
    uniform float heightMapRes;

    uniform float vpw; // Width, in pixels
    uniform float vph; // Height, in pixels

    uniform vec2 offset; // e.g. [-0.023500000000000434 0.9794000000000017], currently the same as the x/y offset in the mvMatrix
    uniform vec2 pitch;  // e.g. [50 50]


    in vec3 vNormal;
    in vec3 vPosition;
    in vec3 lightVec;
    in vec3 vNorm;
    in vec3 vViewNormal;
    in vec3 vViewDirection;
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

    float getHeightInterpolated(vec2 UVPos){
        float res = heightMapRes;
        vec2 pixelPos = UVPos * res;
        vec2 lerpP = fract(pixelPos);
        pixelPos = floor(pixelPos);
        vec2 corner = pixelPos / res;

        float tl = texture2D(heightMap, corner).r;
        float tr = texture2D(heightMap, corner + vec2(1.0, 0.0) / res).r;
        float bl = texture2D(heightMap, corner + vec2(0.0, 1.0) / res).r;
        float br = texture2D(heightMap, corner + vec2(1.0, 1.0) / res).r;

        float top = mix(tl, tr, lerpP.x);
        float bottom = mix(bl, br, lerpP.x);

        return mix(top, bottom, lerpP.y);
    }

    // float plot(vec2 st, float pct){
    //     return  smoothstep( pct-0.02, pct, st.y) -
    //             smoothstep( pct, pct+0.02, st.y);
    //   }


    void main() {
        float hmax = 35.21;
        float hmin = -27.0;

        vec3 cliffColor = vec3(0.3, 0.3, 0.3);
        vec3 flatColor = vec3(0.7, 0.75, 0.0);
        vec3 skyColor = vec3(0.6, 0.62, 0.85);
        vec3 fogColor = vec3(0.6, 0.62, 0.85);

        //Height based colour
        float hValue = (vPosition.y - hmin) / (hmax - hmin);   
        hValue += noise(vPosition.xz, 55.0) * 0.10 - 0.05;
        vec3 col = texture2D(gradientMap, vec2(0, hValue)).rgb;
        vec3 baseColor = vec3(col);

        //Gradient Based color 
        float flats = pow(clamp((1. - (abs(vNorm.x) + abs(vNorm.y) + abs(vNorm.z)) *1. + 1.0),0.,1.),5.0);
        vec3 flatC = flatColor * flats;
        float slopes = pow(clamp(( (abs(vNorm.x) + abs(vNorm.y) + abs(vNorm.z)) *1. - 1.0),0.,1.),5.0);
        vec3 slopeC = cliffColor * slopes;

        vec3 landColor = (baseColor + flatC) * (1.- slopeC);

        //Road Color
        //Building Location/Height
        
        float citySize = size/9.;
        float distCenter = 1./distance(vPosition.xz, vec2(0.0, 0.0));
        distCenter = step(0.5,distCenter * citySize);
        float angle = (abs(atan(vPosition.x, vPosition.z)))/(2. *PI);
        //Angle Placeholder
        float distMod = angle * 0.01;  
        //
        float distCutoff = step(0.05, distCenter - distMod);
        float negHeight = clamp(step(-8.,vPosition.y), -1.,10.);
        float vertHeight = (1./distance(vPosition.y, 0.0))*02.3;

        vec2 st = vPosition.xz*0.1 + offset;
        vec2 ipos = floor(st);  // get the integer coords
        vec2 fpos = fract(st);

        vec3 mosaicCol = step(0.02,vec3(random( ipos )) * (distCenter));

        vec3 buildable = vec3(negHeight * distCenter * distCutoff, vertHeight * distCenter * negHeight * distCutoff, 0.0);
        float scaleFactor = 00001.0;
        float offX = (scaleFactor * offset[0]) + vPosition.x;
        float offY = (scaleFactor * offset[1]) + vPosition.z;
        float roadCol = 0.0;
        if (int(mod(offX, pitch[0])) == 0 ||
        int(mod(offY, pitch[1])) == 0) {
            roadCol = 1.;
            } else {
            roadCol = 0.0;
            }

        //roadColour * area where road can be built
        float roads = roadCol * step(0.05,( buildable.r));

        landColor = landColor * (1. - roads);

        //Ambient Lighting
        vec3 ambientColor = vec3(0.35, 0.35, 0.34) * 0.8;
        vec3 ambientStrength = ambientColor * baseColor;

        //Diffuse Lighting
            //direct
            float dProd = dot( vNormal, lightVec );
            dProd=(step(-0.4,dProd)*0.3 - 0.1 ) + step(0.2, dProd);
            dProd=clamp(dProd,0.,1.0);
  

            //sky
            float aLight = dot( vNormal, upVec );
            aLight=(step(-0.0,aLight)*0.5 - 0.1 ) + step(0.81, aLight);
            aLight=clamp(aLight,0.,1.0);

        //vec3 envColor = textureCube( envMap, vec3( -vReflect.x, vReflect.yz ) ).rgb;

        //final lights
        vec3 directLightColor = lightColor * dProd;
        vec3 skyLightColor = skyColor * aLight;
        
        //Shadows
        // int Steps = 10 ;
        // float heightMapH = getHeightInterpolated(vUV);
        // //get width of texture2D heightmap
        // vec3 p = vec3(vUV, heightMapH);
        // vec3 lightDir = normalize(lightDirection);
        // lightDir = vec3(lightDir.x, -lightDir.z, lightDir.y);
        // vec3 stepDir = normalize(lightDir);
        // float stepDist = 0.01;
        // float inShadow = 0.0;
        // float h = p.z + 0.05;
        // if (dProd > 0.0){
        //     for (int i = 0; i < Steps; i++) {
        //         p += stepDir * max(stepDist, (p.z - h) * 0.05);
        //         //if p.x or p.y are outside the texture, break
        //         if (p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0) {
        //             break;
        //         }
        //         float h = getHeightInterpolated(p.xy);
        //         //expand h to real range using the min/max heights of the heightmap
        //         //h = h/255.0;
        //         //h = mix(hmMin, hmMax, h);
        //         if (p.z < h) {
        //             inShadow = 1.0;
        //             break;
        //         }
        //         if (p.z > 1.0){
        //             break;
        //         }
        //     }
        // }

        // vec3 debugShadow = (1.0 - inShadow) * vec3(0.3, 0.3, 0.3);

        //pseudo fresnel
        float fresnel =  dot(vNormal, vViewDirection);
        fresnel = clamp(pow(1.0 - fresnel, 7.), 0.0, 1.0);
        vec3 fresnelLight = fresnel * skyLightColor;

        //final colour
        vec3 directLight = landColor * directLightColor;
        //directLight = mix(directLight , landColor * 0.1, inShadow);
        vec3 directFresnel = mix(directLight, fresnelLight, fresnel);

        vec3 skyLight = landColor * skyLightColor;
        vec3 ambient = landColor* 0.1;

        vec3 finalLighting = mix(directFresnel, skyLight, 0.1);

        float fog = viewZ.z/5000.;
        
        vec3 c = mix(finalLighting, ambientColor, ambientStrength);

        vec3 finalFog = c;
        if (enableFog){
            finalFog = mix(c, fogColor, fog);
        }

        //Get heightMapColor at corresponding position
        vec3 heightMapColor = texture2D(heightMap, vUV).rgb;

        gl_FragColor = vec4(finalFog, 1.0 );
    }
    `};class dL{constructor(t,e,i,s){Ue(this,"size",0);Ue(this,"cityRadius",0);Ue(this,"n",null);Ue(this,"sun",new U(0,0,0));Ue(this,"octaves",2);Ue(this,"persistence",.5);Ue(this,"lacunarity",2);Ue(this,"scale",.5);Ue(this,"height",.2);Ue(this,"maxResolution",400);Ue(this,"iterations",3);Ue(this,"falloff",.1);this.cityRadius=t*.5,this.size=t*10,this.n=new cL,this.randZ=hL(0,1e3),this.octaves=e.octaves,this.persistence=e.persistence,this.lacunarity=e.lacunarity,this.scale=e.scale,this.height=e.height,this.falloff=e.falloff,this.iterations=e.iterations,this.maxResolution=e.resolution,this.enableFog=e.enableFog,this.enableShadows=e.enableShadows,this.heightMapTexture=e.heightMap,this.hmax=-100,this.hmin=100,this.sun=i,this.sceneProperties=s,s.scene!=null?this.scene=s.scene:this.scene=new No,this.renderer=s.renderer,this.material;var a=document.getElementById("heightgrd");a.addEventListener("click",()=>{l()},!1);var r=new G3(a),o=a.getContext("2d");l();function l(){let c=o.createLinearGradient(0,255,0,0);c.addColorStop(0,"rgb(245,245,150)"),c.addColorStop(.33,"rgb(245,245,150)"),c.addColorStop(.34,"rgb(85,172,65)"),c.addColorStop(.93,"rgb(85,172,65)"),c.addColorStop(.94,"rgb(200,200,200)"),o.fillStyle=c,o.fillRect(0,0,64,256),r.needsUpdate=!0}this.gradientMap=r}set(t,e,i){this.grid[e*this.width+t]=i}get(t,e){return this.grid[e*this.width+t]}ChunkManager(t){const e=[];e.push([0,0]);for(let i=0;i<=this.iterations;i++)for(let s=-i;s<=i;s++)for(let a=-i;a<=i;a++)(Math.abs(s)==i||Math.abs(a)==i)&&(e.push([s,a]),t.add(this.makeChunk(i+1*2,s,a)));return e}makeChunkTexture(t,e,i){for(let _=0;_<t.length;_++)t[_]=(t[_]-e)/(i-e)*255;console.log("minH, maxH: "+e+", "+i);const s=Math.sqrt(t.length);console.log("width: "+s);let a=new Uint8Array(4*s*s);for(let _=0;_<t.length;_++){const m=_*4;let d=t[_];a[m]=d,a[m+1]=d,a[m+2]=d,a[m+3]=255}let r=new U0(a,s,s,Wn);r.flipY=!0,r.flipX=!0,r.needsUpdate=!0,console.log(r.mipmaps),console.log(r),this.heightMapTextureRes=r.image.width,this.heightMapTexture=r;let o=s,l=new No,c=new L0(-s/2,s/2,o/2,-o/2,-100,100),u=new Vo({map:r}),f=new Ps(s,o),h=new Le(f,u);l.add(h);let p=new Rn(s,o);this.renderer.setRenderTarget(p),this.renderer.render(l,c),this.renderer.setRenderTarget(null);let g=new Uint8Array(s*o*4);this.renderer.readRenderTargetPixels(p,0,0,s,o,g),new ImageData(new Uint8ClampedArray(g),s,o)}makeChunk(t,e,i){let s;s={max:-1e3,min:1e3};let o=new Ps(this.size,this.size,this.maxResolution/t,this.maxResolution/t),l=new be({side:ci});l.uniforms=Ad.uniforms,l.vertexShader=Ad.vertexShader,l.fragmentShader=Ad.fragmentShader,l.uniforms.lightDirection.value=this.sun,l.uniforms.gradientMap.value=this.gradientMap,l.uniforms.size.value=this.size,l.uniforms.enableFog.value=this.enableFog,l.uniforms.heightMap.value=this.heightMapTexture,l.uniforms.heightMapRes.value=this.heightMapTextureRes,this.material=l;const c=new Le(o,l);c.rotation.x=-Math.PI/2,c.position.setY(.2),c.position.setX(this.size*e),c.position.setZ(this.size*i);let u=o.attributes.position;c.name="Land2";let f=this.fbmNoise(c,e,i,s);l.uniforms.hmMax.value=s.max,l.uniforms.hmMin.value=s.min,t==2&&this.makeChunkTexture(f,s.min,s.max);for(let h=0;h<o.attributes.position.count;h++){const p=o.attributes.position.getY(h);u.getX(h),u.getY(h),o.setAttribute("vertexHeight",new Ti(new Float32Array([p],1)))}return c}fbmNoise(t,e=0,i=0,s){let a=s.max,r=s.min,o=t.geometry,l=o.attributes.position,c=this.octaves,u=this.persistence;const f=l.count;let h=new Array(f);for(let p=0;p<l.count;p++){let g=l.getX(p),_=l.getY(p),m=l.getZ(p);g+=e*this.size,_-=i*this.size;let d=(g+100)/200,v=(_+100)/200,y=this.fbm(d,v,c,u),x=new Mt(g,_).distanceTo(new Mt(0,0));if(x>this.cityRadius){x-this.size;let T=uL(x,this.cityRadius*4,this.size/1.2);y=y*this.height*(T*2*this.scale),x>this.size&&(y-=(x-this.size)*this.falloff)}else y=0;y>a&&(a=y),y<r&&(r=y),h[p]=y,l.setZ(p,m+y)}return s.max=a,s.min=r,o.computeVertexNormals(),l.needsUpdate=!0,h}fbm(t,e,i,s){let a=0,r=1,o=1,l=0;for(let c=0;c<i;c++)a+=this.n.noise(t*r,e*r,this.randZ)*o,l+=o,o*=s,r*=this.lacunarity;return a/l}updateUniforms(t){this.material.uniforms.enableFog.value=t.enableFog}}class Mi{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const i=this.elements,s=t.x,a=t.y,r=t.z;return e.x=i[0]*s+i[1]*a+i[2]*r,e.y=i[3]*s+i[4]*a+i[5]*r,e.z=i[6]*s+i[7]*a+i[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Mi);const i=this.elements,s=t.elements,a=e.elements,r=i[0],o=i[1],l=i[2],c=i[3],u=i[4],f=i[5],h=i[6],p=i[7],g=i[8],_=s[0],m=s[1],d=s[2],v=s[3],y=s[4],x=s[5],T=s[6],b=s[7],M=s[8];return a[0]=r*_+o*v+l*T,a[1]=r*m+o*y+l*b,a[2]=r*d+o*x+l*M,a[3]=c*_+u*v+f*T,a[4]=c*m+u*y+f*b,a[5]=c*d+u*x+f*M,a[6]=h*_+p*v+g*T,a[7]=h*m+p*y+g*b,a[8]=h*d+p*x+g*M,e}scale(t,e){e===void 0&&(e=new Mi);const i=this.elements,s=e.elements;for(let a=0;a!==3;a++)s[3*a+0]=t.x*i[3*a+0],s[3*a+1]=t.y*i[3*a+1],s[3*a+2]=t.z*i[3*a+2];return e}solve(t,e){e===void 0&&(e=new E);const i=3,s=4,a=[];let r,o;for(r=0;r<i*s;r++)a.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)a[r+s*o]=this.elements[r+3*o];a[3+4*0]=t.x,a[3+4*1]=t.y,a[3+4*2]=t.z;let l=3;const c=l;let u;const f=4;let h;do{if(r=c-l,a[r+s*r]===0){for(o=r+1;o<c;o++)if(a[r+s*o]!==0){u=f;do h=f-u,a[h+s*r]+=a[h+s*o];while(--u);break}}if(a[r+s*r]!==0)for(o=r+1;o<c;o++){const p=a[r+s*o]/a[r+s*r];u=f;do h=f-u,a[h+s*o]=h<=r?0:a[h+s*o]-a[h+s*r]*p;while(--u)}}while(--l);if(e.z=a[2*s+3]/a[2*s+2],e.y=(a[1*s+3]-a[1*s+2]*e.z)/a[1*s+1],e.x=(a[0*s+3]-a[0*s+2]*e.z-a[0*s+1]*e.y)/a[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,i){if(i===void 0)return this.elements[e+3*t];this.elements[e+3*t]=i}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let i=0;i<9;i++)t+=this.elements[i]+e;return t}reverse(t){t===void 0&&(t=new Mi);const e=3,i=6,s=pL;let a,r;for(a=0;a<3;a++)for(r=0;r<3;r++)s[a+i*r]=this.elements[a+3*r];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let o=3;const l=o;let c;const u=i;let f;do{if(a=l-o,s[a+i*a]===0){for(r=a+1;r<l;r++)if(s[a+i*r]!==0){c=u;do f=u-c,s[f+i*a]+=s[f+i*r];while(--c);break}}if(s[a+i*a]!==0)for(r=a+1;r<l;r++){const h=s[a+i*r]/s[a+i*a];c=u;do f=u-c,s[f+i*r]=f<=a?0:s[f+i*r]-s[f+i*a]*h;while(--c)}}while(--o);a=2;do{r=a-1;do{const h=s[a+i*r]/s[a+i*a];c=i;do f=i-c,s[f+i*r]=s[f+i*r]-s[f+i*a]*h;while(--c)}while(r--)}while(--a);a=2;do{const h=1/s[a+i*a];c=i;do f=i-c,s[f+i*a]=s[f+i*a]*h;while(--c)}while(a--);a=2;do{r=2;do{if(f=s[e+r+i*a],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(a,r,f)}while(r--)}while(a--);return t}setRotationFromQuaternion(t){const e=t.x,i=t.y,s=t.z,a=t.w,r=e+e,o=i+i,l=s+s,c=e*r,u=e*o,f=e*l,h=i*o,p=i*l,g=s*l,_=a*r,m=a*o,d=a*l,v=this.elements;return v[3*0+0]=1-(h+g),v[3*0+1]=u-d,v[3*0+2]=f+m,v[3*1+0]=u+d,v[3*1+1]=1-(c+g),v[3*1+2]=p-_,v[3*2+0]=f-m,v[3*2+1]=p+_,v[3*2+2]=1-(c+h),this}transpose(t){t===void 0&&(t=new Mi);const e=this.elements,i=t.elements;let s;return i[0]=e[0],i[4]=e[4],i[8]=e[8],s=e[1],i[1]=e[3],i[3]=s,s=e[2],i[2]=e[6],i[6]=s,s=e[5],i[5]=e[7],i[7]=s,t}}const pL=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,i){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),this.x=t,this.y=e,this.z=i}cross(t,e){e===void 0&&(e=new E);const i=t.x,s=t.y,a=t.z,r=this.x,o=this.y,l=this.z;return e.x=o*a-l*s,e.y=l*i-r*a,e.z=r*s-o*i,e}set(t,e,i){return this.x=t,this.y=e,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Mi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,i=this.z,s=Math.sqrt(t*t+e*e+i*i);if(s>0){const a=1/s;this.x*=a,this.y*=a,this.z*=a}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new E);const e=this.x,i=this.y,s=this.z;let a=Math.sqrt(e*e+i*i+s*s);return a>0?(a=1/a,t.x=e*a,t.y=i*a,t.z=s*a):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,i=this.z;return Math.sqrt(t*t+e*e+i*i)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z;return Math.sqrt((a-e)*(a-e)+(r-i)*(r-i)+(o-s)*(o-s))}distanceSquared(t){const e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z;return(a-e)*(a-e)+(r-i)*(r-i)+(o-s)*(o-s)}scale(t,e){e===void 0&&(e=new E);const i=this.x,s=this.y,a=this.z;return e.x=t*i,e.y=t*s,e.z=t*a,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,i){return i===void 0&&(i=new E),i.x=this.x+t*e.x,i.y=this.y+t*e.y,i.z=this.z+t*e.z,i}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const i=this.length();if(i>0){const s=mL,a=1/i;s.set(this.x*a,this.y*a,this.z*a);const r=gL;Math.abs(s.x)<.9?(r.set(1,0,0),s.cross(r,t)):(r.set(0,1,0),s.cross(r,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,i){const s=this.x,a=this.y,r=this.z;i.x=s+(t.x-s)*e,i.y=a+(t.y-a)*e,i.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(k_),k_.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const mL=new E,gL=new E,k_=new E;class Qn{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,i,s){const a=this.lowerBound,r=this.upperBound,o=i;a.copy(t[0]),o&&o.vmult(a,a),r.copy(a);for(let l=1;l<t.length;l++){let c=t[l];o&&(o.vmult(c,G_),c=G_),c.x>r.x&&(r.x=c.x),c.x<a.x&&(a.x=c.x),c.y>r.y&&(r.y=c.y),c.y<a.y&&(a.y=c.y),c.z>r.z&&(r.z=c.z),c.z<a.z&&(a.z=c.z)}return e&&(e.vadd(a,a),e.vadd(r,r)),s&&(a.x-=s,a.y-=s,a.z-=s,r.x+=s,r.y+=s,r.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Qn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,a=t.upperBound,r=s.x<=i.x&&i.x<=a.x||e.x<=a.x&&a.x<=i.x,o=s.y<=i.y&&i.y<=a.y||e.y<=a.y&&a.y<=i.y,l=s.z<=i.z&&i.z<=a.z||e.z<=a.z&&a.z<=i.z;return r&&o&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,a=t.upperBound;return e.x<=s.x&&i.x>=a.x&&e.y<=s.y&&i.y>=a.y&&e.z<=s.z&&i.z>=a.z}getCorners(t,e,i,s,a,r,o,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),i.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),a.set(u.x,c.y,u.z),r.set(c.x,u.y,c.z),o.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const i=j_,s=i[0],a=i[1],r=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7];this.getCorners(s,a,r,o,l,c,u,f);for(let h=0;h!==8;h++){const p=i[h];t.pointToLocal(p,p)}return e.setFromPoints(i)}toWorldFrame(t,e){const i=j_,s=i[0],a=i[1],r=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7];this.getCorners(s,a,r,o,l,c,u,f);for(let h=0;h!==8;h++){const p=i[h];t.pointToWorld(p,p)}return e.setFromPoints(i)}overlapsRay(t){const{direction:e,from:i}=t,s=1/e.x,a=1/e.y,r=1/e.z,o=(this.lowerBound.x-i.x)*s,l=(this.upperBound.x-i.x)*s,c=(this.lowerBound.y-i.y)*a,u=(this.upperBound.y-i.y)*a,f=(this.lowerBound.z-i.z)*r,h=(this.upperBound.z-i.z)*r,p=Math.max(Math.max(Math.min(o,l),Math.min(c,u)),Math.min(f,h)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,u)),Math.max(f,h));return!(g<0||p>g)}}const G_=new E,j_=[new E,new E,new E,new E,new E,new E,new E,new E];class W_{constructor(){this.matrix=[]}get(t,e){let{index:i}=t,{index:s}=e;if(s>i){const a=s;s=i,i=a}return this.matrix[(i*(i+1)>>1)+s-1]}set(t,e,i){let{index:s}=t,{index:a}=e;if(a>s){const r=a;a=s,s=r}this.matrix[(s*(s+1)>>1)+a-1]=i?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class rb{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[t]===void 0&&(i[t]=[]),i[t].includes(e)||i[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[t]!==void 0&&i[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const i=this._listeners;if(i[t]===void 0)return this;const s=i[t].indexOf(e);return s!==-1&&i[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const i=this._listeners[t.type];if(i!==void 0){t.target=this;for(let s=0,a=i.length;s<a;s++)i[s].call(this,t)}return this}}class We{constructor(t,e,i,s){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=i,this.w=s}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const i=Math.sin(e*.5);return this.x=t.x*i,this.y=t.y*i,this.z=t.z*i,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/i,t.y=this.y/i,t.z=this.z/i),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const i=vL,s=_L;t.tangents(i,s),this.setFromAxisAngle(i,Math.PI)}else{const i=t.cross(e);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new We);const i=this.x,s=this.y,a=this.z,r=this.w,o=t.x,l=t.y,c=t.z,u=t.w;return e.x=i*u+r*o+s*c-a*l,e.y=s*u+r*l+a*o-i*c,e.z=a*u+r*c+i*l-s*o,e.w=r*u-i*o-s*l-a*c,e}inverse(t){t===void 0&&(t=new We);const e=this.x,i=this.y,s=this.z,a=this.w;this.conjugate(t);const r=1/(e*e+i*i+s*s+a*a);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new We),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const i=t.x,s=t.y,a=t.z,r=this.x,o=this.y,l=this.z,c=this.w,u=c*i+o*a-l*s,f=c*s+l*i-r*a,h=c*a+r*s-o*i,p=-r*i-o*s-l*a;return e.x=u*c+p*-r+f*-l-h*-o,e.y=f*c+p*-o+h*-r-u*-l,e.z=h*c+p*-l+u*-o-f*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let i,s,a;const r=this.x,o=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=r*o+l*c;if(u>.499&&(i=2*Math.atan2(r,c),s=Math.PI/2,a=0),u<-.499&&(i=-2*Math.atan2(r,c),s=-Math.PI/2,a=0),i===void 0){const f=r*r,h=o*o,p=l*l;i=Math.atan2(2*o*c-2*r*l,1-2*h-2*p),s=Math.asin(2*u),a=Math.atan2(2*r*c-2*o*l,1-2*f-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=i,t.z=s,t.x=a}setFromEuler(t,e,i,s){s===void 0&&(s="XYZ");const a=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(i/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(i/2);return s==="XYZ"?(this.x=l*r*o+a*c*u,this.y=a*c*o-l*r*u,this.z=a*r*u+l*c*o,this.w=a*r*o-l*c*u):s==="YXZ"?(this.x=l*r*o+a*c*u,this.y=a*c*o-l*r*u,this.z=a*r*u-l*c*o,this.w=a*r*o+l*c*u):s==="ZXY"?(this.x=l*r*o-a*c*u,this.y=a*c*o+l*r*u,this.z=a*r*u+l*c*o,this.w=a*r*o-l*c*u):s==="ZYX"?(this.x=l*r*o-a*c*u,this.y=a*c*o+l*r*u,this.z=a*r*u-l*c*o,this.w=a*r*o+l*c*u):s==="YZX"?(this.x=l*r*o+a*c*u,this.y=a*c*o+l*r*u,this.z=a*r*u-l*c*o,this.w=a*r*o-l*c*u):s==="XZY"&&(this.x=l*r*o-a*c*u,this.y=a*c*o-l*r*u,this.z=a*r*u+l*c*o,this.w=a*r*o+l*c*u),this}clone(){return new We(this.x,this.y,this.z,this.w)}slerp(t,e,i){i===void 0&&(i=new We);const s=this.x,a=this.y,r=this.z,o=this.w;let l=t.x,c=t.y,u=t.z,f=t.w,h,p,g,_,m;return p=s*l+a*c+r*u+o*f,p<0&&(p=-p,l=-l,c=-c,u=-u,f=-f),1-p>1e-6?(h=Math.acos(p),g=Math.sin(h),_=Math.sin((1-e)*h)/g,m=Math.sin(e*h)/g):(_=1-e,m=e),i.x=_*s+m*l,i.y=_*a+m*c,i.z=_*r+m*u,i.w=_*o+m*f,i}integrate(t,e,i,s){s===void 0&&(s=new We);const a=t.x*i.x,r=t.y*i.y,o=t.z*i.z,l=this.x,c=this.y,u=this.z,f=this.w,h=e*.5;return s.x+=h*(a*f+r*u-o*c),s.y+=h*(r*f+o*l-a*u),s.z+=h*(o*f+a*c-r*l),s.w+=h*(-a*l-r*c-o*u),s}}const vL=new E,_L=new E,yL={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class bt{constructor(t){t===void 0&&(t={}),this.id=bt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,i,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}bt.idCounter=0;bt.types=yL;class ie{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new We,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ie.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ie.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,i,s){return s===void 0&&(s=new E),i.vsub(t,s),e.conjugate(q_),q_.vmult(s,s),s}static pointToWorldFrame(t,e,i,s){return s===void 0&&(s=new E),e.vmult(i,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,i){return i===void 0&&(i=new E),t.vmult(e,i),i}static vectorToLocalFrame(t,e,i,s){return s===void 0&&(s=new E),e.w*=-1,e.vmult(i,s),e.w*=-1,s}}const q_=new We;class Hl extends bt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:i=[],normals:s=[],axes:a,boundingSphereRadius:r}=t;super({type:bt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=i,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=a?a.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,i=this.uniqueEdges;i.length=0;const s=new E;for(let a=0;a!==t.length;a++){const r=t[a],o=r.length;for(let l=0;l!==o;l++){const c=(l+1)%o;e[r[l]].vsub(e[r[c]],s),s.normalize();let u=!1;for(let f=0;f!==i.length;f++)if(i[f].almostEquals(s)||i[f].almostEquals(s)){u=!0;break}u||i.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const i=this.vertices[this.faces[t][0]];if(e.dot(i)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const i=this.faces[t],s=this.vertices[i[0]],a=this.vertices[i[1]],r=this.vertices[i[2]];Hl.computeNormal(s,a,r,e)}static computeNormal(t,e,i,s){const a=new E,r=new E;e.vsub(t,r),i.vsub(e,a),a.cross(r,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,i,s,a,r,o,l,c){const u=new E;let f=-1,h=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){u.copy(i.faceNormals[g]),a.vmult(u,u);const _=u.dot(r);_>h&&(h=_,f=g)}const p=[];for(let g=0;g<i.faces[f].length;g++){const _=i.vertices[i.faces[f][g]],m=new E;m.copy(_),a.vmult(m,m),s.vadd(m,m),p.push(m)}f>=0&&this.clipFaceAgainstHull(r,t,e,p,o,l,c)}findSeparatingAxis(t,e,i,s,a,r,o,l){const c=new E,u=new E,f=new E,h=new E,p=new E,g=new E;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let d=0;d!==m.uniqueAxes.length;d++){i.vmult(m.uniqueAxes[d],c);const v=m.testSepAxis(c,t,e,i,s,a);if(v===!1)return!1;v<_&&(_=v,r.copy(c))}else{const d=o?o.length:m.faces.length;for(let v=0;v<d;v++){const y=o?o[v]:v;c.copy(m.faceNormals[y]),i.vmult(c,c);const x=m.testSepAxis(c,t,e,i,s,a);if(x===!1)return!1;x<_&&(_=x,r.copy(c))}}if(t.uniqueAxes)for(let d=0;d!==t.uniqueAxes.length;d++){a.vmult(t.uniqueAxes[d],u);const v=m.testSepAxis(u,t,e,i,s,a);if(v===!1)return!1;v<_&&(_=v,r.copy(u))}else{const d=l?l.length:t.faces.length;for(let v=0;v<d;v++){const y=l?l[v]:v;u.copy(t.faceNormals[y]),a.vmult(u,u);const x=m.testSepAxis(u,t,e,i,s,a);if(x===!1)return!1;x<_&&(_=x,r.copy(u))}}for(let d=0;d!==m.uniqueEdges.length;d++){i.vmult(m.uniqueEdges[d],h);for(let v=0;v!==t.uniqueEdges.length;v++)if(a.vmult(t.uniqueEdges[v],p),h.cross(p,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,i,s,a);if(y===!1)return!1;y<_&&(_=y,r.copy(g))}}return s.vsub(e,f),f.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,i,s,a,r){const o=this;Hl.project(o,t,i,s,Cd),Hl.project(e,t,a,r,Rd);const l=Cd[0],c=Cd[1],u=Rd[0],f=Rd[1];if(l<f||u<c)return!1;const h=l-f,p=u-c;return h<p?h:p}calculateLocalInertia(t,e){const i=new E,s=new E;this.computeLocalAABB(s,i);const a=i.x-s.x,r=i.y-s.y,o=i.z-s.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*a*2*a+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*a*2*a)}getPlaneConstantOfFace(t){const e=this.faces[t],i=this.faceNormals[t],s=this.vertices[e[0]];return-i.dot(s)}clipFaceAgainstHull(t,e,i,s,a,r,o){const l=new E,c=new E,u=new E,f=new E,h=new E,p=new E,g=new E,_=new E,m=this,d=[],v=s,y=d;let x=-1,T=Number.MAX_VALUE;for(let S=0;S<m.faces.length;S++){l.copy(m.faceNormals[S]),i.vmult(l,l);const L=l.dot(t);L<T&&(T=L,x=S)}if(x<0)return;const b=m.faces[x];b.connectedFaces=[];for(let S=0;S<m.faces.length;S++)for(let L=0;L<m.faces[S].length;L++)b.indexOf(m.faces[S][L])!==-1&&S!==x&&b.connectedFaces.indexOf(S)===-1&&b.connectedFaces.push(S);const M=b.length;for(let S=0;S<M;S++){const L=m.vertices[b[S]],F=m.vertices[b[(S+1)%M]];L.vsub(F,c),u.copy(c),i.vmult(u,u),e.vadd(u,u),f.copy(this.faceNormals[x]),i.vmult(f,f),e.vadd(f,f),u.cross(f,h),h.negate(h),p.copy(L),i.vmult(p,p),e.vadd(p,p);const N=b.connectedFaces[S];g.copy(this.faceNormals[N]);const H=this.getPlaneConstantOfFace(N);_.copy(g),i.vmult(_,_);const I=H-_.dot(e);for(this.clipFaceAgainstPlane(v,y,_,I);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[x]);const D=this.getPlaneConstantOfFace(x);_.copy(g),i.vmult(_,_);const w=D-_.dot(e);for(let S=0;S<v.length;S++){let L=_.dot(v[S])+w;if(L<=a&&(console.log(`clamped: depth=${L} to minDist=${a}`),L=a),L<=r){const F=v[S];if(L<=1e-6){const N={point:F,normal:_,depth:L};o.push(N)}}}}clipFaceAgainstPlane(t,e,i,s){let a,r;const o=t.length;if(o<2)return e;let l=t[t.length-1],c=t[0];a=i.dot(l)+s;for(let u=0;u<o;u++){if(c=t[u],r=i.dot(c)+s,a<0)if(r<0){const f=new E;f.copy(c),e.push(f)}else{const f=new E;l.lerp(c,a/(a-r),f),e.push(f)}else if(r<0){const f=new E;l.lerp(c,a/(a-r),f),e.push(f),e.push(c)}l=c,a=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const i=this.vertices,s=this.worldVertices;for(let a=0;a!==this.vertices.length;a++)e.vmult(i[a],s[a]),t.vadd(s[a],s[a]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const i=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const a=i[s];a.x<t.x?t.x=a.x:a.x>e.x&&(e.x=a.x),a.y<t.y?t.y=a.y:a.y>e.y&&(e.y=a.y),a.z<t.z?t.z=a.z:a.z>e.z&&(e.z=a.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const i=this.faceNormals,s=this.worldFaceNormals;for(let a=0;a!==e;a++)t.vmult(i[a],s[a]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let i=0;i!==e.length;i++){const s=e[i].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,i,s){const a=this.vertices;let r,o,l,c,u,f,h=new E;for(let p=0;p<a.length;p++){h.copy(a[p]),e.vmult(h,h),t.vadd(h,h);const g=h;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(f===void 0||g.z>f)&&(f=g.z)}i.set(r,o,l),s.set(c,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let i=0;i<e.length;i++)t.vadd(e[i],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const i=this.vertices.length,s=this.vertices;if(e){for(let a=0;a<i;a++){const r=s[a];e.vmult(r,r)}for(let a=0;a<this.faceNormals.length;a++){const r=this.faceNormals[a];e.vmult(r,r)}}if(t)for(let a=0;a<i;a++){const r=s[a];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,i=this.faces,s=this.faceNormals,a=null,r=new E;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let l=s[o];const c=e[i[o][0]],u=new E;t.vsub(c,u);const f=l.dot(u),h=new E;r.vsub(c,h);const p=l.dot(h);if(f<0&&p>0||f>0&&p<0)return!1}return a?1:-1}static project(t,e,i,s,a){const r=t.vertices.length,o=xL;let l=0,c=0;const u=SL,f=t.vertices;u.setZero(),ie.vectorToLocalFrame(i,s,e,o),ie.pointToLocalFrame(i,s,u,u);const h=u.dot(o);c=l=f[0].dot(o);for(let p=1;p<r;p++){const g=f[p].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const p=c;c=l,l=p}a[0]=l,a[1]=c}}const Cd=[],Rd=[];new E;const xL=new E,SL=new E;class Sc extends bt{constructor(t){super({type:bt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,i=this.halfExtents.z,s=E,a=[new s(-t,-e,-i),new s(t,-e,-i),new s(t,e,-i),new s(-t,e,-i),new s(-t,-e,i),new s(t,-e,i),new s(t,e,i),new s(-t,e,i)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new Hl({vertices:a,faces:r,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),Sc.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,i){const s=t;i.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),i.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),i.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const i=t,s=this.halfExtents;if(i[0].set(s.x,0,0),i[1].set(0,s.y,0),i[2].set(0,0,s.z),i[3].set(-s.x,0,0),i[4].set(0,-s.y,0),i[5].set(0,0,-s.z),e!==void 0)for(let a=0;a!==i.length;a++)e.vmult(i[a],i[a]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,i){const s=this.halfExtents,a=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let r=0;r<a.length;r++)Ws.set(a[r][0],a[r][1],a[r][2]),e.vmult(Ws,Ws),t.vadd(Ws,Ws),i(Ws.x,Ws.y,Ws.z)}calculateWorldAABB(t,e,i,s){const a=this.halfExtents;Oi[0].set(a.x,a.y,a.z),Oi[1].set(-a.x,a.y,a.z),Oi[2].set(-a.x,-a.y,a.z),Oi[3].set(-a.x,-a.y,-a.z),Oi[4].set(a.x,-a.y,-a.z),Oi[5].set(a.x,a.y,-a.z),Oi[6].set(-a.x,a.y,-a.z),Oi[7].set(a.x,-a.y,a.z);const r=Oi[0];e.vmult(r,r),t.vadd(r,r),s.copy(r),i.copy(r);for(let o=1;o<8;o++){const l=Oi[o];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,f=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),f>s.z&&(s.z=f),c<i.x&&(i.x=c),u<i.y&&(i.y=u),f<i.z&&(i.z=f)}}}const Ws=new E,Oi=[new E,new E,new E,new E,new E,new E,new E,new E],k0={DYNAMIC:1,STATIC:2,KINEMATIC:4},G0={AWAKE:0,SLEEPY:1,SLEEPING:2};class xt extends rb{constructor(t){t===void 0&&(t={}),super(),this.id=xt.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?xt.STATIC:xt.DYNAMIC,typeof t.type==typeof xt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=xt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new We,this.initQuaternion=new We,this.previousQuaternion=new We,this.interpolatedQuaternion=new We,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new Mi,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new Mi,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Qn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=xt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===xt.SLEEPING&&this.dispatchEvent(xt.wakeupEvent)}sleep(){this.sleepState=xt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===xt.AWAKE&&i<s?(this.sleepState=xt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(xt.sleepyEvent)):e===xt.SLEEPY&&i>s?this.wakeUp():e===xt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(xt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===xt.SLEEPING||this.type===xt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,i){const s=new E,a=new We;return e&&s.copy(e),i&&a.copy(i),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(a),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,i=t.length;let s=0;for(let a=0;a!==i;a++){const r=t[a];r.updateBoundingSphereRadius();const o=e[a].length(),l=r.boundingSphereRadius;o+l>s&&(s=o+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,i=this.shapeOrientations,s=t.length,a=bL,r=ML,o=this.quaternion,l=this.aabb,c=EL;for(let u=0;u!==s;u++){const f=t[u];o.vmult(e[u],a),a.vadd(this.position,a),o.mult(i[u],r),f.calculateWorldAABB(a,r,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const i=wL,s=TL;i.setRotationFromQuaternion(this.quaternion),i.transpose(s),i.scale(e,i),i.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;this.sleepState===xt.SLEEPING&&this.wakeUp();const i=AL;e.cross(t,i),this.force.vadd(t,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;const i=CL,s=RL;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyForce(i,s)}applyTorque(t){this.type===xt.DYNAMIC&&(this.sleepState===xt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;this.sleepState===xt.SLEEPING&&this.wakeUp();const i=e,s=DL;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const a=LL;i.cross(t,a),this.invInertiaWorld.vmult(a,a),this.angularVelocity.vadd(a,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;const i=NL,s=PL;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyImpulse(i,s)}updateMassProperties(){const t=UL;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,i=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Sc.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!i?1/e.x:0,e.y>0&&!i?1/e.y:0,e.z>0&&!i?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const i=new E;return t.vsub(this.position,i),this.angularVelocity.cross(i,e),this.velocity.vadd(e,e),e}integrate(t,e,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===xt.DYNAMIC||this.type===xt.KINEMATIC)||this.sleepState===xt.SLEEPING)return;const s=this.velocity,a=this.angularVelocity,r=this.position,o=this.force,l=this.torque,c=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,p=u*t;s.x+=o.x*p*h.x,s.y+=o.y*p*h.y,s.z+=o.z*p*h.z;const g=f.elements,_=this.angularFactor,m=l.x*_.x,d=l.y*_.y,v=l.z*_.z;a.x+=t*(g[0]*m+g[1]*d+g[2]*v),a.y+=t*(g[3]*m+g[4]*d+g[5]*v),a.z+=t*(g[6]*m+g[7]*d+g[8]*v),r.x+=s.x*t,r.y+=s.y*t,r.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}xt.idCounter=0;xt.COLLIDE_EVENT_NAME="collide";xt.DYNAMIC=k0.DYNAMIC;xt.STATIC=k0.STATIC;xt.KINEMATIC=k0.KINEMATIC;xt.AWAKE=G0.AWAKE;xt.SLEEPY=G0.SLEEPY;xt.SLEEPING=G0.SLEEPING;xt.wakeupEvent={type:"wakeup"};xt.sleepyEvent={type:"sleepy"};xt.sleepEvent={type:"sleep"};const bL=new E,ML=new We,EL=new Qn,wL=new Mi,TL=new Mi;new Mi;const AL=new E,CL=new E,RL=new E,DL=new E,LL=new E,NL=new E,PL=new E,UL=new E;class OL{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&xt.STATIC||t.sleepState===xt.SLEEPING)&&(e.type&xt.STATIC||e.sleepState===xt.SLEEPING))}intersectionTest(t,e,i,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,i,s):this.doBoundingSphereBroadphase(t,e,i,s)}doBoundingSphereBroadphase(t,e,i,s){const a=zL;e.position.vsub(t.position,a);const r=(t.boundingRadius+e.boundingRadius)**2;a.lengthSquared()<r&&(i.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,i,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(i.push(t),s.push(e))}makePairsUnique(t,e){const i=IL,s=BL,a=FL,r=t.length;for(let o=0;o!==r;o++)s[o]=t[o],a[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==r;o++){const l=s[o].id,c=a[o].id,u=l<c?`${l},${c}`:`${c},${l}`;i[u]=o,i.keys.push(u)}for(let o=0;o!==i.keys.length;o++){const l=i.keys.pop(),c=i[l];t.push(s[c]),e.push(a[c]),delete i[l]}}setWorld(t){}static boundingSphereCheck(t,e){const i=new E;t.position.vsub(e.position,i);const s=t.shapes[0],a=e.shapes[0];return Math.pow(s.boundingSphereRadius+a.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(t,e,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const zL=new E;new E;new We;new E;const IL={keys:[]},BL=[],FL=[];new E;new E;new E;class HL extends OL{constructor(){super()}collisionPairs(t,e,i){const s=t.bodies,a=s.length;let r,o;for(let l=0;l!==a;l++)for(let c=0;c!==l;c++)r=s[l],o=s[c],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,e,i)}aabbQuery(t,e,i){i===void 0&&(i=[]);for(let s=0;s<t.bodies.length;s++){const a=t.bodies[s];a.aabbNeedsUpdate&&a.updateAABB(),a.aabb.overlaps(e)&&i.push(a)}return i}}class Oh{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,i,s,a,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(s),this.shape=a,this.body=r,this.distance=o}}let ob,lb,cb,ub,hb,fb,db;const j0={CLOSEST:1,ANY:2,ALL:4};ob=bt.types.SPHERE;lb=bt.types.PLANE;cb=bt.types.BOX;ub=bt.types.CYLINDER;hb=bt.types.CONVEXPOLYHEDRON;fb=bt.types.HEIGHTFIELD;db=bt.types.TRIMESH;class Ge{get[ob](){return this._intersectSphere}get[lb](){return this._intersectPlane}get[cb](){return this._intersectBox}get[ub](){return this._intersectConvex}get[hb](){return this._intersectConvex}get[fb](){return this._intersectHeightfield}get[db](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ge.ANY,this.result=new Oh,this.hasHit=!1,this.callback=i=>{}}intersectWorld(t,e){return this.mode=e.mode||Ge.ANY,this.result=e.result||new Oh,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(X_),Dd.length=0,t.broadphase.aabbQuery(t,X_,Dd),this.intersectBodies(Dd),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const s=VL,a=kL;for(let r=0,o=t.shapes.length;r<o;r++){const l=t.shapes[r];if(!(i&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],a),t.quaternion.vmult(t.shapeOffsets[r],s),s.vadd(t.position,s),this.intersectShape(l,a,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let i=0,s=t.length;!this.result.shouldStop&&i<s;i++)this.intersectBody(t[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,i,s){const a=this.from;if(nN(a,this.direction,i)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,i,s,t)}_intersectBox(t,e,i,s,a){return this._intersectConvex(t.convexPolyhedronRepresentation,e,i,s,a)}_intersectPlane(t,e,i,s,a){const r=this.from,o=this.to,l=this.direction,c=new E(0,0,1);e.vmult(c,c);const u=new E;r.vsub(i,u);const f=u.dot(c);o.vsub(i,u);const h=u.dot(c);if(f*h>0||r.distanceTo(o)<f)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const g=new E,_=new E,m=new E;r.vsub(i,g);const d=-c.dot(g)/p;l.scale(d,_),r.vadd(_,m),this.reportIntersection(c,m,a,s,-1)}getAABB(t){const{lowerBound:e,upperBound:i}=t,s=this.to,a=this.from;e.x=Math.min(s.x,a.x),e.y=Math.min(s.y,a.y),e.z=Math.min(s.z,a.z),i.x=Math.max(s.x,a.x),i.y=Math.max(s.y,a.y),i.z=Math.max(s.z,a.z)}_intersectHeightfield(t,e,i,s,a){t.data,t.elementSize;const r=GL;r.from.copy(this.from),r.to.copy(this.to),ie.pointToLocalFrame(i,e,r.from,r.from),ie.pointToLocalFrame(i,e,r.to,r.to),r.updateDirection();const o=jL;let l,c,u,f;l=c=0,u=f=t.data.length-1;const h=new Qn;r.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,o,!0),u=Math.min(u,o[0]+1),f=Math.min(f,o[1]+1);for(let p=l;p<u;p++)for(let g=c;g<f;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,g,h),!!h.overlapsRay(r)){if(t.getConvexTrianglePillar(p,g,!1),ie.pointToWorldFrame(i,e,t.pillarOffset,xu),this._intersectConvex(t.pillarConvex,e,xu,s,a,Y_),this.result.shouldStop)return;t.getConvexTrianglePillar(p,g,!0),ie.pointToWorldFrame(i,e,t.pillarOffset,xu),this._intersectConvex(t.pillarConvex,e,xu,s,a,Y_)}}}_intersectSphere(t,e,i,s,a){const r=this.from,o=this.to,l=t.radius,c=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,u=2*((o.x-r.x)*(r.x-i.x)+(o.y-r.y)*(r.y-i.y)+(o.z-r.z)*(r.z-i.z)),f=(r.x-i.x)**2+(r.y-i.y)**2+(r.z-i.z)**2-l**2,h=u**2-4*c*f,p=WL,g=qL;if(!(h<0))if(h===0)r.lerp(o,h,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,a,s,-1);else{const _=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(r.lerp(o,_,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,a,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(r.lerp(o,m,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,a,s,-1))}}_intersectConvex(t,e,i,s,a,r){const o=XL,l=Z_,c=r&&r.faceList||null,u=t.faces,f=t.vertices,h=t.faceNormals,p=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),d=c?c.length:u.length,v=this.result;for(let y=0;!v.shouldStop&&y<d;y++){const x=c?c[y]:y,T=u[x],b=h[x],M=e,D=i;l.copy(f[T[0]]),M.vmult(l,l),l.vadd(D,l),l.vsub(g,l),M.vmult(b,o);const w=p.dot(o);if(Math.abs(w)<this.precision)continue;const S=o.dot(l)/w;if(!(S<0)){p.scale(S,Nn),Nn.vadd(g,Nn),_i.copy(f[T[0]]),M.vmult(_i,_i),D.vadd(_i,_i);for(let L=1;!v.shouldStop&&L<T.length-1;L++){zi.copy(f[T[L]]),Ii.copy(f[T[L+1]]),M.vmult(zi,zi),M.vmult(Ii,Ii),D.vadd(zi,zi),D.vadd(Ii,Ii);const F=Nn.distanceTo(g);!(Ge.pointInTriangle(Nn,_i,zi,Ii)||Ge.pointInTriangle(Nn,zi,_i,Ii))||F>m||this.reportIntersection(o,Nn,a,s,x)}}}}_intersectTrimesh(t,e,i,s,a,r){const o=YL,l=tN,c=eN,u=Z_,f=ZL,h=KL,p=QL,g=JL,_=$L,m=t.indices;t.vertices;const d=this.from,v=this.to,y=this.direction;c.position.copy(i),c.quaternion.copy(e),ie.vectorToLocalFrame(i,e,y,f),ie.pointToLocalFrame(i,e,d,h),ie.pointToLocalFrame(i,e,v,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,p.vsub(h,f),f.normalize();const x=h.distanceSquared(p);t.tree.rayQuery(this,c,l);for(let T=0,b=l.length;!this.result.shouldStop&&T!==b;T++){const M=l[T];t.getNormal(M,o),t.getVertex(m[M*3],_i),_i.vsub(h,u);const D=f.dot(o),w=o.dot(u)/D;if(w<0)continue;f.scale(w,Nn),Nn.vadd(h,Nn),t.getVertex(m[M*3+1],zi),t.getVertex(m[M*3+2],Ii);const S=Nn.distanceSquared(h);!(Ge.pointInTriangle(Nn,zi,_i,Ii)||Ge.pointInTriangle(Nn,_i,zi,Ii))||S>x||(ie.vectorToWorldFrame(e,o,_),ie.pointToWorldFrame(i,e,Nn,g),this.reportIntersection(_,g,a,s,M))}l.length=0}reportIntersection(t,e,i,s,a){const r=this.from,o=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof a<"u"?a:-1,this.mode){case Ge.ALL:this.hasHit=!0,c.set(r,o,t,e,i,s,l),c.hasHit=!0,this.callback(c);break;case Ge.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,i,s,l));break;case Ge.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,i,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,i,s){s.vsub(e,Ia),i.vsub(e,al),t.vsub(e,Ld);const a=Ia.dot(Ia),r=Ia.dot(al),o=Ia.dot(Ld),l=al.dot(al),c=al.dot(Ld);let u,f;return(u=l*o-r*c)>=0&&(f=a*c-r*o)>=0&&u+f<a*l-r*r}}Ge.CLOSEST=j0.CLOSEST;Ge.ANY=j0.ANY;Ge.ALL=j0.ALL;const X_=new Qn,Dd=[],al=new E,Ld=new E,VL=new E,kL=new We,Nn=new E,_i=new E,zi=new E,Ii=new E;new E;new Oh;const Y_={faceList:[0]},xu=new E,GL=new Ge,jL=[],WL=new E,qL=new E,XL=new E;new E;new E;const Z_=new E,YL=new E,ZL=new E,KL=new E,QL=new E,$L=new E,JL=new E;new Qn;const tN=[],eN=new ie,Ia=new E,Su=new E;function nN(n,t,e){e.vsub(n,Ia);const i=Ia.dot(t);return t.scale(i,Su),Su.vadd(n,Su),e.distanceTo(Su)}class iN{static defaults(t,e){t===void 0&&(t={});for(let i in e)i in t||(t[i]=e[i]);return t}}class K_{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class bc{constructor(t,e,i,s){i===void 0&&(i=-1e6),s===void 0&&(s=1e6),this.id=bc.idCounter++,this.minForce=i,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new K_,this.jacobianElementB=new K_,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,i){const s=e,a=t,r=i;this.a=4/(r*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(r*r*a*(1+4*s))}computeB(t,e,i){const s=this.computeGW(),a=this.computeGq(),r=this.computeGiMf();return-a*t-s*e-r*i}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,a=i.position,r=s.position;return t.spatial.dot(a)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,a=i.velocity,r=s.velocity,o=i.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(a,o)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,a=i.vlambda,r=s.vlambda,o=i.wlambda,l=s.wlambda;return t.multiplyVectors(a,o)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,a=i.force,r=i.torque,o=s.force,l=s.torque,c=i.invMassSolve,u=s.invMassSolve;return a.scale(c,Q_),o.scale(u,$_),i.invInertiaWorldSolve.vmult(r,J_),s.invInertiaWorldSolve.vmult(l,ty),t.multiplyVectors(Q_,J_)+e.multiplyVectors($_,ty)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,a=i.invMassSolve,r=s.invMassSolve,o=i.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=a+r;return o.vmult(t.rotational,bu),c+=bu.dot(t.rotational),l.vmult(e.rotational,bu),c+=bu.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,i=this.jacobianElementB,s=this.bi,a=this.bj,r=sN;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),a.vlambda.addScaledVector(a.invMassSolve*t,i.spatial,a.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda),a.invInertiaWorldSolve.vmult(i.rotational,r),a.wlambda.addScaledVector(t,r,a.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}bc.idCounter=0;const Q_=new E,$_=new E,J_=new E,ty=new E,bu=new E,sN=new E;class aN extends bc{constructor(t,e,i){i===void 0&&(i=1e6),super(t,e,0,i),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,i=this.b,s=this.bi,a=this.bj,r=this.ri,o=this.rj,l=rN,c=oN,u=s.velocity,f=s.angularVelocity;s.force,s.torque;const h=a.velocity,p=a.angularVelocity;a.force,a.torque;const g=lN,_=this.jacobianElementA,m=this.jacobianElementB,d=this.ni;r.cross(d,l),o.cross(d,c),d.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(d),m.rotational.copy(c),g.copy(a.position),g.vadd(o,g),g.vsub(s.position,g),g.vsub(r,g);const v=d.dot(g),y=this.restitution+1,x=y*h.dot(d)-y*u.dot(d)+p.dot(c)-f.dot(l),T=this.computeGiMf();return-v*e-x*i-t*T}getImpactVelocityAlongNormal(){const t=cN,e=uN,i=hN,s=fN,a=dN;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(i,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,a),this.ni.dot(a)}}const rN=new E,oN=new E,lN=new E,cN=new E,uN=new E,hN=new E,fN=new E,dN=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class ey extends bc{constructor(t,e,i){super(t,e,-i,i),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const i=this.ri,s=this.rj,a=pN,r=mN,o=this.t;i.cross(o,a),s.cross(o,r);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),a.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(r);const u=this.computeGW(),f=this.computeGiMf();return-u*e-t*f}}const pN=new E,mN=new E;class lf{constructor(t,e,i){i=iN.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=lf.idCounter++,this.materials=[t,e],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}lf.idCounter=0;class cf{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=cf.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}cf.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Ge;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class gN extends bt{constructor(){super({type:bt.types.PLANE}),this.worldNormal=new E,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new E),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,i,s){os.set(0,0,1),e.vmult(os,os);const a=Number.MAX_VALUE;i.set(-a,-a,-a),s.set(a,a,a),os.x===1?s.x=t.x:os.x===-1&&(i.x=t.x),os.y===1?s.y=t.y:os.y===-1&&(i.y=t.y),os.z===1?s.z=t.z:os.z===-1&&(i.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const os=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Qn;new E;new Qn;new E;new E;new E;new E;new E;new E;new E;new Qn;new E;new ie;new Qn;class vN{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,i=e.indexOf(t);i!==-1&&e.splice(i,1)}removeAllEquations(){this.equations.length=0}}class _N extends vN{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let i=0;const s=this.iterations,a=this.tolerance*this.tolerance,r=this.equations,o=r.length,l=e.bodies,c=l.length,u=t;let f,h,p,g,_,m;if(o!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const d=xN,v=SN,y=yN;d.length=o,v.length=o,y.length=o;for(let x=0;x!==o;x++){const T=r[x];y[x]=0,v[x]=T.computeB(u),d[x]=1/T.computeC()}if(o!==0){for(let b=0;b!==c;b++){const M=l[b],D=M.vlambda,w=M.wlambda;D.set(0,0,0),w.set(0,0,0)}for(i=0;i!==s;i++){g=0;for(let b=0;b!==o;b++){const M=r[b];f=v[b],h=d[b],m=y[b],_=M.computeGWlambda(),p=h*(f-_-M.eps*m),m+p<M.minForce?p=M.minForce-m:m+p>M.maxForce&&(p=M.maxForce-m),y[b]+=p,g+=p>0?p:-p,M.addToWlambda(p)}if(g*g<a)break}for(let b=0;b!==c;b++){const M=l[b],D=M.velocity,w=M.angularVelocity;M.vlambda.vmul(M.linearFactor,M.vlambda),D.vadd(M.vlambda,D),M.wlambda.vmul(M.angularFactor,M.wlambda),w.vadd(M.wlambda,w)}let x=r.length;const T=1/u;for(;x--;)r[x].multiplier=y[x]*T}return i}}const yN=[],xN=[],SN=[];xt.STATIC;class bN{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class MN extends bN{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const Se={sphereSphere:bt.types.SPHERE,spherePlane:bt.types.SPHERE|bt.types.PLANE,boxBox:bt.types.BOX|bt.types.BOX,sphereBox:bt.types.SPHERE|bt.types.BOX,planeBox:bt.types.PLANE|bt.types.BOX,convexConvex:bt.types.CONVEXPOLYHEDRON,sphereConvex:bt.types.SPHERE|bt.types.CONVEXPOLYHEDRON,planeConvex:bt.types.PLANE|bt.types.CONVEXPOLYHEDRON,boxConvex:bt.types.BOX|bt.types.CONVEXPOLYHEDRON,sphereHeightfield:bt.types.SPHERE|bt.types.HEIGHTFIELD,boxHeightfield:bt.types.BOX|bt.types.HEIGHTFIELD,convexHeightfield:bt.types.CONVEXPOLYHEDRON|bt.types.HEIGHTFIELD,sphereParticle:bt.types.PARTICLE|bt.types.SPHERE,planeParticle:bt.types.PLANE|bt.types.PARTICLE,boxParticle:bt.types.BOX|bt.types.PARTICLE,convexParticle:bt.types.PARTICLE|bt.types.CONVEXPOLYHEDRON,cylinderCylinder:bt.types.CYLINDER,sphereCylinder:bt.types.SPHERE|bt.types.CYLINDER,planeCylinder:bt.types.PLANE|bt.types.CYLINDER,boxCylinder:bt.types.BOX|bt.types.CYLINDER,convexCylinder:bt.types.CONVEXPOLYHEDRON|bt.types.CYLINDER,heightfieldCylinder:bt.types.HEIGHTFIELD|bt.types.CYLINDER,particleCylinder:bt.types.PARTICLE|bt.types.CYLINDER,sphereTrimesh:bt.types.SPHERE|bt.types.TRIMESH,planeTrimesh:bt.types.PLANE|bt.types.TRIMESH};class EN{get[Se.sphereSphere](){return this.sphereSphere}get[Se.spherePlane](){return this.spherePlane}get[Se.boxBox](){return this.boxBox}get[Se.sphereBox](){return this.sphereBox}get[Se.planeBox](){return this.planeBox}get[Se.convexConvex](){return this.convexConvex}get[Se.sphereConvex](){return this.sphereConvex}get[Se.planeConvex](){return this.planeConvex}get[Se.boxConvex](){return this.boxConvex}get[Se.sphereHeightfield](){return this.sphereHeightfield}get[Se.boxHeightfield](){return this.boxHeightfield}get[Se.convexHeightfield](){return this.convexHeightfield}get[Se.sphereParticle](){return this.sphereParticle}get[Se.planeParticle](){return this.planeParticle}get[Se.boxParticle](){return this.boxParticle}get[Se.convexParticle](){return this.convexParticle}get[Se.cylinderCylinder](){return this.convexConvex}get[Se.sphereCylinder](){return this.sphereConvex}get[Se.planeCylinder](){return this.planeConvex}get[Se.boxCylinder](){return this.boxConvex}get[Se.convexCylinder](){return this.convexConvex}get[Se.heightfieldCylinder](){return this.heightfieldCylinder}get[Se.particleCylinder](){return this.particleCylinder}get[Se.sphereTrimesh](){return this.sphereTrimesh}get[Se.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new MN,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,i,s,a,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new aN(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&i.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||t.material,u=s.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(o.restitution=c.restitution*u.restitution),o.si=a||i,o.sj=r||s,o}createFrictionEquationsFromContact(t,e){const i=t.bi,s=t.bj,a=t.si,r=t.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const u=a.material||i.material,f=r.material||s.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(c=u.friction*f.friction),c>0){const h=c*(o.frictionGravity||o.gravity).length();let p=i.invMass+s.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,_=g.length?g.pop():new ey(i,s,h*p),m=g.length?g.pop():new ey(i,s,h*p);return _.bi=m.bi=i,_.bj=m.bj=s,_.minForce=m.minForce=-h*p,_.maxForce=m.maxForce=h*p,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const i=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];La.setZero(),Ur.setZero(),Or.setZero();const a=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==a?(La.vadd(e.ni,La),Ur.vadd(e.ri,Ur),Or.vadd(e.rj,Or)):(La.vsub(e.ni,La),Ur.vadd(e.rj,Ur),Or.vadd(e.ri,Or));const r=1/t;Ur.scale(r,i.ri),Or.scale(r,i.rj),s.ri.copy(i.ri),s.rj.copy(i.rj),La.normalize(),La.tangents(i.t,s.t)}getContacts(t,e,i,s,a,r,o){this.contactPointPool=a,this.frictionEquationPool=o,this.result=s,this.frictionResult=r;const l=AN,c=CN,u=wN,f=TN;for(let h=0,p=t.length;h!==p;h++){const g=t[h],_=e[h];let m=null;g.material&&_.material&&(m=i.getContactMaterial(g.material,_.material)||null);const d=g.type&xt.KINEMATIC&&_.type&xt.STATIC||g.type&xt.STATIC&&_.type&xt.KINEMATIC||g.type&xt.KINEMATIC&&_.type&xt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const y=g.shapes[v];for(let x=0;x<_.shapes.length;x++){_.quaternion.mult(_.shapeOrientations[x],c),_.quaternion.vmult(_.shapeOffsets[x],f),f.vadd(_.position,f);const T=_.shapes[x];if(!(y.collisionFilterMask&T.collisionFilterGroup&&T.collisionFilterMask&y.collisionFilterGroup)||u.distanceTo(f)>y.boundingSphereRadius+T.boundingSphereRadius)continue;let b=null;y.material&&T.material&&(b=i.getContactMaterial(y.material,T.material)||null),this.currentContactMaterial=b||m||i.defaultContactMaterial;const M=y.type|T.type,D=this[M];if(D){let w=!1;y.type<T.type?w=D.call(this,y,T,u,f,l,c,g,_,y,T,d):w=D.call(this,T,y,f,u,c,l,_,g,y,T,d),w&&d&&(i.shapeOverlapKeeper.set(y.id,T.id),i.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,i,s,a,r,o,l,c,u,f){if(f)return i.distanceSquared(s)<(t.radius+e.radius)**2;const h=this.createContactEquation(o,l,t,e,c,u);s.vsub(i,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(i,h.ri),h.ri.vsub(o.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,i,s,a,r,o,l,c,u,f){const h=this.createContactEquation(o,l,t,e,c,u);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),i.vsub(s,Mu),h.ni.scale(h.ni.dot(Mu),ny),Mu.vsub(ny,h.rj),-Mu.dot(h.ni)<=t.radius){if(f)return!0;const p=h.ri,g=h.rj;p.vadd(i,p),p.vsub(o.position,p),g.vadd(s,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,i,s,a,r,o,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,i,s,a,r,o,l,t,e,f)}sphereBox(t,e,i,s,a,r,o,l,c,u,f){const h=this.v3pool,p=tP;i.vsub(s,Eu),e.getSideNormals(p,r);const g=t.radius;let _=!1;const m=nP,d=iP,v=sP;let y=null,x=0,T=0,b=0,M=null;for(let R=0,G=p.length;R!==G&&_===!1;R++){const O=QN;O.copy(p[R]);const W=O.length();O.normalize();const tt=Eu.dot(O);if(tt<W+g&&tt>0){const lt=$N,rt=JN;lt.copy(p[(R+1)%3]),rt.copy(p[(R+2)%3]);const Lt=lt.length(),K=rt.length();lt.normalize(),rt.normalize();const at=Eu.dot(lt),gt=Eu.dot(rt);if(at<Lt&&at>-Lt&&gt<K&&gt>-K){const ot=Math.abs(tt-W-g);if((M===null||ot<M)&&(M=ot,T=at,b=gt,y=W,m.copy(O),d.copy(lt),v.copy(rt),x++,f))return!0}}}if(x){_=!0;const R=this.createContactEquation(o,l,t,e,c,u);m.scale(-g,R.ri),R.ni.copy(m),R.ni.negate(R.ni),m.scale(y,m),d.scale(T,d),m.vadd(d,m),v.scale(b,v),m.vadd(v,R.rj),R.ri.vadd(i,R.ri),R.ri.vsub(o.position,R.ri),R.rj.vadd(s,R.rj),R.rj.vsub(l.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}let D=h.get();const w=eP;for(let R=0;R!==2&&!_;R++)for(let G=0;G!==2&&!_;G++)for(let O=0;O!==2&&!_;O++)if(D.set(0,0,0),R?D.vadd(p[0],D):D.vsub(p[0],D),G?D.vadd(p[1],D):D.vsub(p[1],D),O?D.vadd(p[2],D):D.vsub(p[2],D),s.vadd(D,w),w.vsub(i,w),w.lengthSquared()<g*g){if(f)return!0;_=!0;const W=this.createContactEquation(o,l,t,e,c,u);W.ri.copy(w),W.ri.normalize(),W.ni.copy(W.ri),W.ri.scale(g,W.ri),W.rj.copy(D),W.ri.vadd(i,W.ri),W.ri.vsub(o.position,W.ri),W.rj.vadd(s,W.rj),W.rj.vsub(l.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}h.release(D),D=null;const S=h.get(),L=h.get(),F=h.get(),N=h.get(),H=h.get(),I=p.length;for(let R=0;R!==I&&!_;R++)for(let G=0;G!==I&&!_;G++)if(R%3!==G%3){p[G].cross(p[R],S),S.normalize(),p[R].vadd(p[G],L),F.copy(i),F.vsub(L,F),F.vsub(s,F);const O=F.dot(S);S.scale(O,N);let W=0;for(;W===R%3||W===G%3;)W++;H.copy(i),H.vsub(N,H),H.vsub(L,H),H.vsub(s,H);const tt=Math.abs(O),lt=H.length();if(tt<p[W].length()&&lt<g){if(f)return!0;_=!0;const rt=this.createContactEquation(o,l,t,e,c,u);L.vadd(N,rt.rj),rt.rj.copy(rt.rj),H.negate(rt.ni),rt.ni.normalize(),rt.ri.copy(rt.rj),rt.ri.vadd(s,rt.ri),rt.ri.vsub(i,rt.ri),rt.ri.normalize(),rt.ri.scale(g,rt.ri),rt.ri.vadd(i,rt.ri),rt.ri.vsub(o.position,rt.ri),rt.rj.vadd(s,rt.rj),rt.rj.vsub(l.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}h.release(S,L,F,N,H)}planeBox(t,e,i,s,a,r,o,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,i,s,a,r,o,l,t,e,f)}convexConvex(t,e,i,s,a,r,o,l,c,u,f,h,p){const g=yP;if(!(i.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,i,a,s,r,g,h,p)){const _=[],m=xP;t.clipAgainstHull(i,a,e,s,r,g,-100,100,_);let d=0;for(let v=0;v!==_.length;v++){if(f)return!0;const y=this.createContactEquation(o,l,t,e,c,u),x=y.ri,T=y.rj;g.negate(y.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,x),T.copy(_[v].point),x.vsub(i,x),T.vsub(s,T),x.vadd(i,x),x.vsub(o.position,x),T.vadd(s,T),T.vsub(l.position,T),this.result.push(y),d++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&d&&this.createFrictionFromAverage(d)}}sphereConvex(t,e,i,s,a,r,o,l,c,u,f){const h=this.v3pool;i.vsub(s,aP);const p=e.faceNormals,g=e.faces,_=e.vertices,m=t.radius;let d=!1;for(let v=0;v!==_.length;v++){const y=_[v],x=cP;r.vmult(y,x),s.vadd(x,x);const T=lP;if(x.vsub(i,T),T.lengthSquared()<m*m){if(f)return!0;d=!0;const b=this.createContactEquation(o,l,t,e,c,u);b.ri.copy(T),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),x.vsub(s,b.rj),b.ri.vadd(i,b.ri),b.ri.vsub(o.position,b.ri),b.rj.vadd(s,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&d===!1;v++){const x=p[v],T=g[v],b=uP;r.vmult(x,b);const M=hP;r.vmult(_[T[0]],M),M.vadd(s,M);const D=fP;b.scale(-m,D),i.vadd(D,D);const w=dP;D.vsub(M,w);const S=w.dot(b),L=pP;if(i.vsub(M,L),S<0&&L.dot(b)>0){const F=[];for(let N=0,H=T.length;N!==H;N++){const I=h.get();r.vmult(_[T[N]],I),s.vadd(I,I),F.push(I)}if(KN(F,b,i)){if(f)return!0;d=!0;const N=this.createContactEquation(o,l,t,e,c,u);b.scale(-m,N.ri),b.negate(N.ni);const H=h.get();b.scale(-S,H);const I=h.get();b.scale(-m,I),i.vsub(s,N.rj),N.rj.vadd(I,N.rj),N.rj.vadd(H,N.rj),N.rj.vadd(s,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(i,N.ri),N.ri.vsub(o.position,N.ri),h.release(H),h.release(I),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let R=0,G=F.length;R!==G;R++)h.release(F[R]);return}else for(let N=0;N!==T.length;N++){const H=h.get(),I=h.get();r.vmult(_[T[(N+1)%T.length]],H),r.vmult(_[T[(N+2)%T.length]],I),s.vadd(H,H),s.vadd(I,I);const R=rP;I.vsub(H,R);const G=oP;R.unit(G);const O=h.get(),W=h.get();i.vsub(H,W);const tt=W.dot(G);G.scale(tt,O),O.vadd(H,O);const lt=h.get();if(O.vsub(i,lt),tt>0&&tt*tt<R.lengthSquared()&&lt.lengthSquared()<m*m){if(f)return!0;const rt=this.createContactEquation(o,l,t,e,c,u);O.vsub(s,rt.rj),O.vsub(i,rt.ni),rt.ni.normalize(),rt.ni.scale(m,rt.ri),rt.rj.vadd(s,rt.rj),rt.rj.vsub(l.position,rt.rj),rt.ri.vadd(i,rt.ri),rt.ri.vsub(o.position,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(let Lt=0,K=F.length;Lt!==K;Lt++)h.release(F[Lt]);h.release(H),h.release(I),h.release(O),h.release(lt),h.release(W);return}h.release(H),h.release(I),h.release(O),h.release(lt),h.release(W)}for(let N=0,H=F.length;N!==H;N++)h.release(F[N])}}}planeConvex(t,e,i,s,a,r,o,l,c,u,f){const h=mP,p=gP;p.set(0,0,1),a.vmult(p,p);let g=0;const _=vP;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),r.vmult(h,h),s.vadd(h,h),h.vsub(i,_),p.dot(_)<=0){if(f)return!0;const v=this.createContactEquation(o,l,t,e,c,u),y=_P;p.scale(p.dot(_),y),h.vsub(y,y),y.vsub(i,v.ri),v.ni.copy(p),h.vsub(s,v.rj),v.ri.vadd(i,v.ri),v.ri.vsub(o.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,i,s,a,r,o,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,i,s,a,r,o,l,t,e,f)}sphereHeightfield(t,e,i,s,a,r,o,l,c,u,f){const h=e.data,p=t.radius,g=e.elementSize,_=NP,m=LP;ie.pointToLocalFrame(s,r,i,m);let d=Math.floor((m.x-p)/g)-1,v=Math.ceil((m.x+p)/g)+1,y=Math.floor((m.y-p)/g)-1,x=Math.ceil((m.y+p)/g)+1;if(v<0||x<0||d>h.length||y>h[0].length)return;d<0&&(d=0),v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),d>=h.length&&(d=h.length-1),v>=h.length&&(v=h.length-1),x>=h[0].length&&(x=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const T=[];e.getRectMinMax(d,y,v,x,T);const b=T[0],M=T[1];if(m.z-p>M||m.z+p<b)return;const D=this.result;for(let w=d;w<v;w++)for(let S=y;S<x;S++){const L=D.length;let F=!1;if(e.getConvexTrianglePillar(w,S,!1),ie.pointToWorldFrame(s,r,e.pillarOffset,_),i.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.sphereConvex(t,e.pillarConvex,i,_,a,r,o,l,t,e,f)),f&&F||(e.getConvexTrianglePillar(w,S,!0),ie.pointToWorldFrame(s,r,e.pillarOffset,_),i.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.sphereConvex(t,e.pillarConvex,i,_,a,r,o,l,t,e,f)),f&&F))return!0;if(D.length-L>2)return}}boxHeightfield(t,e,i,s,a,r,o,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,i,s,a,r,o,l,t,e,f)}convexHeightfield(t,e,i,s,a,r,o,l,c,u,f){const h=e.data,p=e.elementSize,g=t.boundingSphereRadius,_=RP,m=DP,d=CP;ie.pointToLocalFrame(s,r,i,d);let v=Math.floor((d.x-g)/p)-1,y=Math.ceil((d.x+g)/p)+1,x=Math.floor((d.y-g)/p)-1,T=Math.ceil((d.y+g)/p)+1;if(y<0||T<0||v>h.length||x>h[0].length)return;v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),T<0&&(T=0),v>=h.length&&(v=h.length-1),y>=h.length&&(y=h.length-1),T>=h[0].length&&(T=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const b=[];e.getRectMinMax(v,x,y,T,b);const M=b[0],D=b[1];if(!(d.z-g>D||d.z+g<M))for(let w=v;w<y;w++)for(let S=x;S<T;S++){let L=!1;if(e.getConvexTrianglePillar(w,S,!1),ie.pointToWorldFrame(s,r,e.pillarOffset,_),i.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,i,_,a,r,o,l,null,null,f,m,null)),f&&L||(e.getConvexTrianglePillar(w,S,!0),ie.pointToWorldFrame(s,r,e.pillarOffset,_),i.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,i,_,a,r,o,l,null,null,f,m,null)),f&&L))return!0}}sphereParticle(t,e,i,s,a,r,o,l,c,u,f){const h=EP;if(h.set(0,0,1),s.vsub(i,h),h.lengthSquared()<=t.radius*t.radius){if(f)return!0;const g=this.createContactEquation(l,o,e,t,c,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,i,s,a,r,o,l,c,u,f){const h=SP;h.set(0,0,1),o.quaternion.vmult(h,h);const p=bP;if(s.vsub(o.position,p),h.dot(p)<=0){if(f)return!0;const _=this.createContactEquation(l,o,e,t,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=MP;h.scale(h.dot(s),m),s.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,i,s,a,r,o,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,i,s,a,r,o,l,t,e,f)}convexParticle(t,e,i,s,a,r,o,l,c,u,f){let h=-1;const p=TP,g=AP;let _=null;const m=wP;if(m.copy(s),m.vsub(i,m),a.conjugate(iy),iy.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(i,a),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(a);for(let d=0,v=t.faces.length;d!==v;d++){const y=[t.worldVertices[t.faces[d][0]]],x=t.worldFaceNormals[d];s.vsub(y[0],sy);const T=-x.dot(sy);if(_===null||Math.abs(T)<Math.abs(_)){if(f)return!0;_=T,h=d,p.copy(x)}}if(h!==-1){const d=this.createContactEquation(l,o,e,t,c,u);p.scale(_,g),g.vadd(s,g),g.vsub(i,g),d.rj.copy(g),p.negate(d.ni),d.ri.set(0,0,0);const v=d.ri,y=d.rj;v.vadd(s,v),v.vsub(l.position,v),y.vadd(i,y),y.vsub(o.position,y),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,i,s,a,r,o,l,c,u,f){return this.convexHeightfield(e,t,s,i,r,a,l,o,c,u,f)}particleCylinder(t,e,i,s,a,r,o,l,c,u,f){return this.convexParticle(e,t,s,i,r,a,l,o,c,u,f)}sphereTrimesh(t,e,i,s,a,r,o,l,c,u,f){const h=zN,p=IN,g=BN,_=FN,m=HN,d=VN,v=WN,y=ON,x=PN,T=qN;ie.pointToLocalFrame(s,r,i,m);const b=t.radius;v.lowerBound.set(m.x-b,m.y-b,m.z-b),v.upperBound.set(m.x+b,m.y+b,m.z+b),e.getTrianglesInAABB(v,T);const M=UN,D=t.radius*t.radius;for(let N=0;N<T.length;N++)for(let H=0;H<3;H++)if(e.getVertex(e.indices[T[N]*3+H],M),M.vsub(m,x),x.lengthSquared()<=D){if(y.copy(M),ie.pointToWorldFrame(s,r,y,M),M.vsub(i,x),f)return!0;let I=this.createContactEquation(o,l,t,e,c,u);I.ni.copy(x),I.ni.normalize(),I.ri.copy(I.ni),I.ri.scale(t.radius,I.ri),I.ri.vadd(i,I.ri),I.ri.vsub(o.position,I.ri),I.rj.copy(M),I.rj.vsub(l.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}for(let N=0;N<T.length;N++)for(let H=0;H<3;H++){e.getVertex(e.indices[T[N]*3+H],h),e.getVertex(e.indices[T[N]*3+(H+1)%3],p),p.vsub(h,g),m.vsub(p,d);const I=d.dot(g);m.vsub(h,d);let R=d.dot(g);if(R>0&&I<0&&(m.vsub(h,d),_.copy(g),_.normalize(),R=d.dot(_),_.scale(R,d),d.vadd(h,d),d.distanceTo(m)<t.radius)){if(f)return!0;const O=this.createContactEquation(o,l,t,e,c,u);d.vsub(m,O.ni),O.ni.normalize(),O.ni.scale(t.radius,O.ri),O.ri.vadd(i,O.ri),O.ri.vsub(o.position,O.ri),ie.pointToWorldFrame(s,r,d,d),d.vsub(l.position,O.rj),ie.vectorToWorldFrame(r,O.ni,O.ni),ie.vectorToWorldFrame(r,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}const w=kN,S=GN,L=jN,F=NN;for(let N=0,H=T.length;N!==H;N++){e.getTriangleVertices(T[N],w,S,L),e.getNormal(T[N],F),m.vsub(w,d);let I=d.dot(F);if(F.scale(I,d),m.vsub(d,d),I=d.distanceTo(m),Ge.pointInTriangle(d,w,S,L)&&I<t.radius){if(f)return!0;let R=this.createContactEquation(o,l,t,e,c,u);d.vsub(m,R.ni),R.ni.normalize(),R.ni.scale(t.radius,R.ri),R.ri.vadd(i,R.ri),R.ri.vsub(o.position,R.ri),ie.pointToWorldFrame(s,r,d,d),d.vsub(l.position,R.rj),ie.vectorToWorldFrame(r,R.ni,R.ni),ie.vectorToWorldFrame(r,R.ri,R.ri),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}}T.length=0}planeTrimesh(t,e,i,s,a,r,o,l,c,u,f){const h=new E,p=RN;p.set(0,0,1),a.vmult(p,p);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const _=new E;_.copy(h),ie.pointToWorldFrame(s,r,_,h);const m=DN;if(h.vsub(i,m),p.dot(m)<=0){if(f)return!0;const v=this.createContactEquation(o,l,t,e,c,u);v.ni.copy(p);const y=LN;p.scale(m.dot(p),y),h.vsub(y,y),v.ri.copy(y),v.ri.vsub(o.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const La=new E,Ur=new E,Or=new E,wN=new E,TN=new E,AN=new We,CN=new We,RN=new E,DN=new E,LN=new E,NN=new E,PN=new E;new E;const UN=new E,ON=new E,zN=new E,IN=new E,BN=new E,FN=new E,HN=new E,VN=new E,kN=new E,GN=new E,jN=new E,WN=new Qn,qN=[],Mu=new E,ny=new E,XN=new E,YN=new E,ZN=new E;function KN(n,t,e){let i=null;const s=n.length;for(let a=0;a!==s;a++){const r=n[a],o=XN;n[(a+1)%s].vsub(r,o);const l=YN;o.cross(t,l);const c=ZN;e.vsub(r,c);const u=l.dot(c);if(i===null||u>0&&i===!0||u<=0&&i===!1){i===null&&(i=u>0);continue}else return!1}return!0}const Eu=new E,QN=new E,$N=new E,JN=new E,tP=[new E,new E,new E,new E,new E,new E],eP=new E,nP=new E,iP=new E,sP=new E,aP=new E,rP=new E,oP=new E,lP=new E,cP=new E,uP=new E,hP=new E,fP=new E,dP=new E,pP=new E;new E;new E;const mP=new E,gP=new E,vP=new E,_P=new E,yP=new E,xP=new E,SP=new E,bP=new E,MP=new E,EP=new E,iy=new We,wP=new E;new E;const TP=new E,sy=new E,AP=new E,CP=new E,RP=new E,DP=[0],LP=new E,NP=new E;class ay{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const i=e;e=t,t=i}return t<<16|e}set(t,e){const i=this.getKey(t,e),s=this.current;let a=0;for(;i>s[a];)a++;if(i!==s[a]){for(let r=s.length-1;r>=a;r--)s[r+1]=s[r];s[a]=i}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const i=this.current,s=this.previous,a=i.length,r=s.length;let o=0;for(let l=0;l<a;l++){let c=!1;const u=i[l];for(;u>s[o];)o++;c=u===s[o],c||ry(t,u)}o=0;for(let l=0;l<r;l++){let c=!1;const u=s[l];for(;u>i[o];)o++;c=i[o]===u,c||ry(e,u)}}}function ry(n,t){n.push((t&4294901760)>>16,t&65535)}const Nd=(n,t)=>n<t?`${n}-${t}`:`${t}-${n}`;class PP{constructor(){this.data={keys:[]}}get(t,e){const i=Nd(t,e);return this.data[i]}set(t,e,i){const s=Nd(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=i}delete(t,e){const i=Nd(t,e),s=this.data.keys.indexOf(i);s!==-1&&this.data.keys.splice(s,1),delete this.data[i]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const i=e.pop();delete t[i]}}}class oy extends rb{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new HL,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new _N,this.constraints=[],this.narrowphase=new EN(this),this.collisionMatrix=new W_,this.collisionMatrixPrevious=new W_,this.bodyOverlapKeeper=new ay,this.shapeOverlapKeeper=new ay,this.contactmaterials=[],this.contactMaterialTable=new PP,this.defaultMaterial=new cf("default"),this.defaultContactMaterial=new lf(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,i){i instanceof Oh?this.raycastClosest(t,e,{skipBackfaces:!0},i):this.raycastAll(t,e,{skipBackfaces:!0},i)}raycastAll(t,e,i,s){return i===void 0&&(i={}),i.mode=Ge.ALL,i.from=t,i.to=e,i.callback=s,Pd.intersectWorld(this,i)}raycastAny(t,e,i,s){return i===void 0&&(i={}),i.mode=Ge.ANY,i.from=t,i.to=e,i.result=s,Pd.intersectWorld(this,i)}raycastClosest(t,e,i,s){return i===void 0&&(i={}),i.mode=Ge.CLOSEST,i.from=t,i.to=e,i.result=s,Pd.intersectWorld(this,i)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof xt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,i=this.bodies,s=i.indexOf(t);if(s!==-1){i.splice(s,1);for(let a=0;a!==i.length;a++)i[a].index=a;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let i=0;i<e.length;i++){const s=e[i].shapes;for(let a=0;a<s.length;a++){const r=s[a];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const i=Ye.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=i-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=i}step(t,e,i){if(i===void 0&&(i=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Ye.now();let a=0;for(;this.accumulator>=t&&a<i&&(this.internalStep(t),this.accumulator-=t,a++,!(Ye.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,i=BP,s=FP,a=this.bodies.length,r=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,f=xt.DYNAMIC;let h=-1/0;const p=this.constraints,g=IP;l.length();const _=l.x,m=l.y,d=l.z;let v=0;for(c&&(h=Ye.now()),v=0;v!==a;v++){const N=r[v];if(N.type===f){const H=N.force,I=N.mass;H.x+=I*_,H.y+=I*m,H.z+=I*d}}for(let N=0,H=this.subsystems.length;N!==H;N++)this.subsystems[N].update();c&&(h=Ye.now()),i.length=0,s.length=0,this.broadphase.collisionPairs(this,i,s),c&&(u.broadphase=Ye.now()-h);let y=p.length;for(v=0;v!==y;v++){const N=p[v];if(!N.collideConnected)for(let H=i.length-1;H>=0;H-=1)(N.bodyA===i[H]&&N.bodyB===s[H]||N.bodyB===i[H]&&N.bodyA===s[H])&&(i.splice(H,1),s.splice(H,1))}this.collisionMatrixTick(),c&&(h=Ye.now());const x=zP,T=e.length;for(v=0;v!==T;v++)x.push(e[v]);e.length=0;const b=this.frictionEquations.length;for(v=0;v!==b;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,s,this,e,x,this.frictionEquations,g),c&&(u.narrowphase=Ye.now()-h),c&&(h=Ye.now()),v=0;v<this.frictionEquations.length;v++)o.addEquation(this.frictionEquations[v]);const M=e.length;for(let N=0;N!==M;N++){const H=e[N],I=H.bi,R=H.bj,G=H.si,O=H.sj;let W;if(I.material&&R.material?W=this.getContactMaterial(I.material,R.material)||this.defaultContactMaterial:W=this.defaultContactMaterial,W.friction,I.material&&R.material&&(I.material.friction>=0&&R.material.friction>=0&&I.material.friction*R.material.friction,I.material.restitution>=0&&R.material.restitution>=0&&(H.restitution=I.material.restitution*R.material.restitution)),o.addEquation(H),I.allowSleep&&I.type===xt.DYNAMIC&&I.sleepState===xt.SLEEPING&&R.sleepState===xt.AWAKE&&R.type!==xt.STATIC){const tt=R.velocity.lengthSquared()+R.angularVelocity.lengthSquared(),lt=R.sleepSpeedLimit**2;tt>=lt*2&&(I.wakeUpAfterNarrowphase=!0)}if(R.allowSleep&&R.type===xt.DYNAMIC&&R.sleepState===xt.SLEEPING&&I.sleepState===xt.AWAKE&&I.type!==xt.STATIC){const tt=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),lt=I.sleepSpeedLimit**2;tt>=lt*2&&(R.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,R,!0),this.collisionMatrixPrevious.get(I,R)||(rl.body=R,rl.contact=H,I.dispatchEvent(rl),rl.body=I,R.dispatchEvent(rl)),this.bodyOverlapKeeper.set(I.id,R.id),this.shapeOverlapKeeper.set(G.id,O.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Ye.now()-h,h=Ye.now()),v=0;v!==a;v++){const N=r[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(y=p.length,v=0;v!==y;v++){const N=p[v];N.update();for(let H=0,I=N.equations.length;H!==I;H++){const R=N.equations[H];o.addEquation(R)}}o.solve(t,this),c&&(u.solve=Ye.now()-h),o.removeAllEquations();const D=Math.pow;for(v=0;v!==a;v++){const N=r[v];if(N.type&f){const H=D(1-N.linearDamping,t),I=N.velocity;I.scale(H,I);const R=N.angularVelocity;if(R){const G=D(1-N.angularDamping,t);R.scale(G,R)}}}this.dispatchEvent(OP),c&&(h=Ye.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(v=0;v!==a;v++)r[v].integrate(t,S,L);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Ye.now()-h),this.stepnumber+=1,this.dispatchEvent(UP);let F=!0;if(this.allowSleep)for(F=!1,v=0;v!==a;v++){const N=r[v];N.sleepTick(this.time),N.sleepState!==xt.SLEEPING&&(F=!0)}this.hasActiveBodies=F}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ls,cs),t){for(let a=0,r=ls.length;a<r;a+=2)ol.bodyA=this.getBodyById(ls[a]),ol.bodyB=this.getBodyById(ls[a+1]),this.dispatchEvent(ol);ol.bodyA=ol.bodyB=null}if(e){for(let a=0,r=cs.length;a<r;a+=2)ll.bodyA=this.getBodyById(cs[a]),ll.bodyB=this.getBodyById(cs[a+1]),this.dispatchEvent(ll);ll.bodyA=ll.bodyB=null}ls.length=cs.length=0;const i=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((i||s)&&this.shapeOverlapKeeper.getDiff(ls,cs),i){for(let a=0,r=ls.length;a<r;a+=2){const o=this.getShapeById(ls[a]),l=this.getShapeById(ls[a+1]);us.shapeA=o,us.shapeB=l,o&&(us.bodyA=o.body),l&&(us.bodyB=l.body),this.dispatchEvent(us)}us.bodyA=us.bodyB=us.shapeA=us.shapeB=null}if(s){for(let a=0,r=cs.length;a<r;a+=2){const o=this.getShapeById(cs[a]),l=this.getShapeById(cs[a+1]);hs.shapeA=o,hs.shapeB=l,o&&(hs.bodyA=o.body),l&&(hs.bodyB=l.body),this.dispatchEvent(hs)}hs.bodyA=hs.bodyB=hs.shapeA=hs.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let i=0;i!==e;i++){const s=t[i];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new Qn;const Pd=new Ge,Ye=globalThis.performance||{};if(!Ye.now){let n=Date.now();Ye.timing&&Ye.timing.navigationStart&&(n=Ye.timing.navigationStart),Ye.now=()=>Date.now()-n}new E;const UP={type:"postStep"},OP={type:"preStep"},rl={type:xt.COLLIDE_EVENT_NAME,body:null,contact:null},zP=[],IP=[],BP=[],FP=[],ls=[],cs=[],ol={type:"beginContact",bodyA:null,bodyB:null},ll={type:"endContact",bodyA:null,bodyB:null},us={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},hs={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class HP{constructor(t,e,i){this.obj=t,this.position=i,this.mesh=e,this.body,this.initMesh()}initMesh(){this.body=new xt({type:xt.DYNAMIC,mass:5,shape:new Sc(new E(.25,.25,.25))}),this.body.allowSleep=!0,this.body.sleepSpeedLimit=.5,this.body.sleepTimeLimit=1,this.body.position=new E(this.position.x,this.position.y+1,this.position.z),this.obj.addBody(this.body)}updateMesh(){let t=new E(this.body.position.x-this.position.x,this.body.position.y-this.position.y,this.body.position.z-this.position.z);this.mesh.position.copy(t)}}const VP=/^[og]\s*(.+)?/,kP=/^mtllib /,GP=/^usemtl /,jP=/^usemap /,ly=/\s+/,cy=new U,Ud=new U,uy=new U,hy=new U,ni=new U,wu=new mt;function WP(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,a){const r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:r!==void 0?r.smooth:this.smooth,groupStart:r!==void 0?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),s&&this.materials.length>1)for(let r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseNormalIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseUVIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/2)*2},addVertex:function(t,e,i){const s=this.vertices,a=this.object.geometry.vertices;a.push(s[t+0],s[t+1],s[t+2]),a.push(s[e+0],s[e+1],s[e+2]),a.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,i){const s=this.normals,a=this.object.geometry.normals;a.push(s[t+0],s[t+1],s[t+2]),a.push(s[e+0],s[e+1],s[e+2]),a.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(t,e,i){const s=this.vertices,a=this.object.geometry.normals;cy.fromArray(s,t),Ud.fromArray(s,e),uy.fromArray(s,i),ni.subVectors(uy,Ud),hy.subVectors(cy,Ud),ni.cross(hy),ni.normalize(),a.push(ni.x,ni.y,ni.z),a.push(ni.x,ni.y,ni.z),a.push(ni.x,ni.y,ni.z)},addColor:function(t,e,i){const s=this.colors,a=this.object.geometry.colors;s[t]!==void 0&&a.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&a.push(s[e+0],s[e+1],s[e+2]),s[i]!==void 0&&a.push(s[i+0],s[i+1],s[i+2])},addUV:function(t,e,i){const s=this.uvs,a=this.object.geometry.uvs;a.push(s[t+0],s[t+1]),a.push(s[e+0],s[e+1]),a.push(s[i+0],s[i+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,i,s,a,r,o,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(t,u),h=this.parseVertexIndex(e,u),p=this.parseVertexIndex(i,u);if(this.addVertex(f,h,p),this.addColor(f,h,p),o!==void 0&&o!==""){const g=this.normals.length;f=this.parseNormalIndex(o,g),h=this.parseNormalIndex(l,g),p=this.parseNormalIndex(c,g),this.addNormal(f,h,p)}else this.addFaceNormal(f,h,p);if(s!==void 0&&s!==""){const g=this.uvs.length;f=this.parseUVIndex(s,g),h=this.parseUVIndex(a,g),p=this.parseUVIndex(r,g),this.addUV(f,h,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let i=0,s=t.length;i<s;i++){const a=this.parseVertexIndex(t[i],e);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let a=0,r=t.length;a<r;a++)this.addVertexLine(this.parseVertexIndex(t[a],i));for(let a=0,r=e.length;a<r;a++)this.addUVLine(this.parseUVIndex(e[a],s))}};return n.startObject("",!1),n}class fy extends xc{constructor(t){super(t),this.materials=null}load(t,e,i,s){const a=this,r=new $3(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(o){try{e(a.parse(o))}catch(l){s?s(l):console.error(l),a.manager.itemError(t)}},i,s)}setMaterials(t){return this.materials=t,this}parse(t){const e=new WP;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const i=t.split(`
`);let s=[];for(let o=0,l=i.length;o<l;o++){const c=i[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const f=c.split(ly);switch(f[0]){case"v":e.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(wu.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),e.colors.push(wu.r,wu.g,wu.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":e.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const h=c.slice(1).trim().split(ly),p=[];for(let _=0,m=h.length;_<m;_++){const d=h[_];if(d.length>0){const v=d.split("/");p.push(v)}}const g=p[0];for(let _=1,m=p.length-1;_<m;_++){const d=p[_],v=p[_+1];e.addFace(g[0],d[0],v[0],g[1],d[1],v[1],g[2],d[2],v[2])}}else if(u==="l"){const f=c.substring(1).trim().split(" ");let h=[];const p=[];if(c.indexOf("/")===-1)h=f;else for(let g=0,_=f.length;g<_;g++){const m=f[g].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&p.push(m[1])}e.addLineGeometry(h,p)}else if(u==="p"){const h=c.slice(1).trim().split(" ");e.addPointGeometry(h)}else if((s=VP.exec(c))!==null){const f=(" "+s[0].slice(1).trim()).slice(1);e.startObject(f)}else if(GP.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(kP.test(c))e.materialLibraries.push(c.substring(7).trim());else if(jP.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const h=s[1].trim().toLowerCase();e.object.smooth=h!=="0"&&h!=="off"}else e.object.smooth=!0;const f=e.object.currentMaterial();f&&(f.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const a=new ml;if(a.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){const c=e.objects[o],u=c.geometry,f=c.materials,h=u.type==="Line",p=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const _=new zn;_.setAttribute("position",new Ke(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new Ke(u.normals,3)),u.colors.length>0&&(g=!0,_.setAttribute("color",new Ke(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new Ke(u.uvs,2));const m=[];for(let v=0,y=f.length;v<y;v++){const x=f[v],T=x.name+"_"+x.smooth+"_"+g;let b=e.materials[T];if(this.materials!==null){if(b=this.materials.create(x.name),h&&b&&!(b instanceof vo)){const M=new vo;Ci.prototype.copy.call(M,b),M.color.copy(b.color),b=M}else if(p&&b&&!(b instanceof gl)){const M=new gl({size:10,sizeAttenuation:!1});Ci.prototype.copy.call(M,b),M.color.copy(b.color),M.map=b.map,b=M}}b===void 0&&(h?b=new vo:p?b=new gl({size:1,sizeAttenuation:!1}):b=new X3,b.name=x.name,b.flatShading=!x.smooth,b.vertexColors=g,e.materials[T]=b),m.push(b)}let d;if(m.length>1){for(let v=0,y=f.length;v<y;v++){const x=f[v];_.addGroup(x.groupStart,x.groupCount,v)}h?d=new cm(_,m):p?d=new qu(_,m):d=new Le(_,m)}else h?d=new cm(_,m[0]):p?d=new qu(_,m[0]):d=new Le(_,m[0]);d.name=c.name,a.add(d)}else if(e.vertices.length>0){const o=new gl({size:1,sizeAttenuation:!1}),l=new zn;l.setAttribute("position",new Ke(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new Ke(e.colors,3)),o.vertexColors=!0);const c=new qu(l,o);a.add(c)}return a}}const dy={uniforms:{lightDirection:{value:new U(1,1,1)},lightColor:{value:new U(.8,.76,.5)},baseColor:{value:new U(.5,.5,.5)},type:{value:0},textureMap:{value:null},normalMap:{value:null},frame:{value:0},roofColor:{value:new U(.5,.5,.5)}},vertexShader:`


    #include <shadowmap_pars_vertex>

    uniform vec3 lightDirection;

    uniform samplerCube envMap;

    out vec3 vNormal;
    out vec3 vPosition;
    out vec3 vEyePosition;
    out vec2 vUv;
    out vec3 lightVec;
    out vec3 upVec;
    out vec3 vNorm;
    out vec3 vViewDirection;
    out vec3 vViewNormal;
    out vec3 vReflect;
    out vec3 viewZ;
    out vec3 vModel;


    void main() {
        vModel = position ;
        vec4 view_position = modelViewMatrix * vec4(position, 1.0);

        vEyePosition = view_position.xyz;
        vec4 viewLightPos = viewMatrix * vec4(lightDirection, 1.0);
        lightVec = normalize(viewMatrix * vec4(lightDirection, 0.0)).xyz;
        upVec    = normalize(viewMatrix * vec4(0., 1., 0.0, 0.0)).xyz;
        gl_Position = projectionMatrix * view_position;

        viewZ = gl_Position.xyz;

        vNormal = normalize(normalMatrix * normal);
        vNorm = normal;
        vec3 view = viewMatrix[3].xyz;
        vViewDirection = normalize(-(modelViewMatrix * vec4(position, 1.0))).xyz;

        vUv = uv;
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vec3 I = worldPosition.xyz - cameraPosition;
        vReflect = reflect( I, vNormal );
        vPosition = (worldPosition).xyz; 
        
        #include <shadowmap_vertex>
    }
    
    
    `,fragmentShader:`

    #include <shadowmap_pars_fragment>
    #include <shadowmask_pars_fragment>
    
    uniform int type;
    uniform vec3 baseColor;
    uniform sampler2D textureMap;
    uniform sampler2D normalMap;
    uniform float frame;
    uniform vec3 roofColor;
    #define PI 3.14159265358979323846

    in vec3 vNormal;
    in vec3 vPosition;
    in vec3 vEyePosition;
    in vec3 lightVec;
    in vec3 vNorm;
    in vec3 vViewNormal;
    in vec3 vViewDirection;
    in vec3 upVec;
    in vec2 vUv;
    in vec3 vReflect;
    in vec3 viewZ;
    in vec3 vModel;
    

    float rand (vec2 st) {
        return fract(sin(dot(st.xy,
                                vec2(12.9898,78.233)))
                    * 4.5453123);
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

    vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
      
      vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
      
      vec4 permute(vec4 x) {
           return mod289(((x*34.0)+1.0)*x);
      }
      
      vec4 taylorInvSqrt(vec4 r)
      {
        return 1.79284291400159 - 0.85373472095314 * r;
      }
      
      float snoise(vec3 v)
        {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      
      // First corner
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;
      
      // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
      
        //   x0 = x0 - 0.0 + 0.0 * C.xxx;
        //   x1 = x0 - i1  + 1.0 * C.xxx;
        //   x2 = x0 - i2  + 2.0 * C.xxx;
        //   x3 = x0 - 1.0 + 3.0 * C.xxx;
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
        vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
      
      // Permutations
        i = mod289(i);
        vec4 p = permute( permute( permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      
      // Gradients: 7x7 points over a square, mapped onto an octahedron.
      // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
        float n_ = 0.142857142857; // 1.0/7.0
        vec3  ns = n_ * D.wyz - D.xzx;
      
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
      
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
      
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
      
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
      
        //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
        //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
      
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
      
      //Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
      
      // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                      dot(p2,x2), dot(p3,x3) ) );
        }


    void main() {
        float hmax = 0.01;
        float hmin = -10.0;

        vec3 lightColor = vec3(0.8, 0.76, 0.50);
        vec3 skyColor = vec3(0.6, 0.62, 0.85);
        vec3 fogColor = vec3(0.6, 0.62, 0.85);
        vec3 apartmentWindowColor = vec3(0.2, 0.2, 0.5);
        vec3 windowColor = vec3(0.7, 0.7, 0.4);
        vec3 mud1  = vec3(0.2, 0.5, 0.1);
        vec3 mud2 = vec3(0.06, 0.12, 0.05);



        hmin = clamp(hmin + frame,-10.,7.);
        hmax = clamp(hmax + frame,0.0,12.);
        

        //Height based colour
        float hValue = (vPosition.y - hmin) / (hmax - hmin);   
        hValue += noise(vPosition.xz, 155.0) * 0.10 - 0.05;
        hValue = clamp(hValue, 0.0, 1.0);
        // vec3 base = baseColor + texture2D(textureMap, vUv).rgb;
        vec3 base = baseColor * hValue;
        float roof = (1. - step(0.3,vModel.g));

        vec3 mud = mix(mud1, mud2, snoise(vPosition*3.));
        
        
        if (type == 1){
            base = mix(roofColor, base, roof); 
        }
        else if (type == 2){
            vec2 st = vModel.xz * 4. + 1.5;
            vec2 ipos = floor(st);  // get the integer coords
            vec2 fpos = fract(st);

            vec3 mosaicCol = vec3(mod(ipos.x + ipos.y, 2.0));


            float window = (step(0.01,vModel.g)- step(0.4,vModel.g)) * mosaicCol.g ;
            base = mix(base, apartmentWindowColor, window);
        }
        else if (type == 3){
            vec2 st = vModel.xy * 4. + 1.5;
            vec2 st2 = vModel.xz * 4.;
            
            vec2 ipos = floor(st);  // get the integer coords
            vec2 ipos2 = floor(st2);  // get the integer coords
            vec2 fpos = fract(st);
            vec3 winMos = vec3(vec3(rand( ipos2 )));

            float window = 0.0;

            vec3 mosaicCol = vec3(mod(ipos.x + ipos.y,2.0));
            if (frame == 0.){
                window = (step(-0.3,vModel.g)- step(0.4,vModel.g)) * mosaicCol.g * winMos.g ;
            }
            
            base = mix(base, windowColor, window);
            // base = winMos;
        }

        base = mix(base, (base * 0.5) + (mud * 0.5), (1.- hValue));
        // vec3 base = vec3(frame, frame, frame);


        //Ambient Lighting
        vec3 ambientColor = vec3(0.35, 0.35, 0.34) * 0.8;
        vec3 ambientStrength = ambientColor * base;

        //Diffuse Lighting
            //direct
            float dProd = dot( vNormal, lightVec );
            dProd=(step(-0.4,dProd)*0.3 - 0.1 ) + step(0.6, dProd);
            dProd=clamp(dProd,0.,1.0);

            //sky
            float aLight = dot( vNormal, upVec );
            aLight=(step(-0.0,aLight)*0.5 - 0.1 ) + step(0.81, aLight);
            aLight=clamp(aLight,0.,1.0);

        //final lights
        vec3 directLightColor = lightColor * dProd;
        vec3 skyLightColor = skyColor * aLight;

        //pseudo fresnel
        float fresnel =  dot(vNormal, vViewDirection);
        fresnel = clamp(pow(1.0 - fresnel, 7.), 0.0, 1.0);
        vec3 fresnelLight = fresnel * skyLightColor;

        //final colour
        vec3 directLight = base * directLightColor;
        vec3 directFresnel = mix(directLight, fresnelLight, fresnel);

        vec3 skyLight = base * skyLightColor;
        vec3 ambient = base * 0.1;

        vec3 finalLighting = mix(directFresnel, skyLight, 0.1);

        float fog = viewZ.z/5000.;
        vec3 c = mix(finalLighting, ambientColor, ambientStrength);

        vec3 finalFog = mix(c, fogColor, fog);
        gl_FragColor = vec4(finalFog ,  1.0 );
    }
    `};class qP extends ye{constructor(e,i,s){super();Ue(this,"shatterArray");Ue(this,"materialsArray");this.parent=e,this.height=i,this.blockBody,this.blockMesh,this.isShattered=!1,this.materialsArray=[],this.shatterArray=[],this.reclaimerProperties=s,this.physicsworld=s.physicsworld;let a=Math.min(this.height,3);this.material=this.reclaimerProperties.materialsArray[a],this.material.needsUpdate=!0}defaults(){let e=Math.min(this.height,3);this.material=this.reclaimerProperties.materialsArray[e],this.material.needsUpdate=!0}colourDebug(){this.material=this.reclaimerProperties.materialsArray[4],this.blockMesh.material=this.material}createBlock(e,i,s){this.position.set(e,i,s),this.blockBody=new xt({type:xt.DYNAMIC,mass:0,shape:new Sc(new E(.5,.5,.5)),collided:!1}),this.blockBody.position.set(e,i+.5,s),this.blockBody.allowSleep=!0,this.blockBody.sleepSpeedLimit=1,this.blockBody.sleepTimeLimit=1,this.physicsworld.addBody(this.blockBody),this.blockBody.addEventListener("collide",function(a){a.body.collided=!0}),this.loadModel(),this.parent.add(this.blockMesh)}loadModel(){let e=new ye,i=new fy;new Le;let s=this.material,a="assets/Objects/Buildings/";this.height==0&&(a+="park1.obj"),this.height==1?a+="house1obj.obj":this.height==2?a+="apartment1.obj":a+="skyScraper1.obj",i.load(a,function(r){r.traverse(function(o){o instanceof Le&&(o.material=s,o.castShadow=!0,o.recieveShadow=!0)}),e.add(r)}),this.blockMesh=e}shatterBlock(){this.physicsworld.removeBody(this.blockBody),this.parent.remove(this.blockMesh),this.shatterArray=this.createCube(this.position.x,this.position.y+.5,this.position.z),this.shatterFrame=this.reclaimerProperties.reclaimFrame}createCube(e,i,s){let a=new ye;a.position.set(e,i,s);let r=this.physicsworld,o=this.material,l=[];return new fy().load("assets/Objects/fracturedCube-cubes2.obj",function(u){u.traverse(function(f){if(f instanceof Le){f.material=o;var h=new U;f.geometry.computeBoundingBox();var p=f.geometry.boundingBox;h.subVectors(p.max,p.min),h.multiplyScalar(.5),h.add(p.min),h.add(a.position);let g=new HP(r,f,h);l.push(g),g.updateMesh()}}),a.add(u)}),this.parent.add(a),l}unfreezeBlock(){this.shatterArray.length==0?(this.blockBody.mass=5,this.blockBody.updateMassProperties()):this.shatterArray.forEach(e=>{e.unfreezeMesh()})}freezeBlock(){this.shatterArray.length==0?(this.blockBody.mass=5,this.blockBody.updateMassProperties()):this.shatterArray.forEach(e=>{e.freezeMesh()})}updateBlock(){this.reclaimerProperties.reclaimFrame-this.shatterFrame>=3?(this.physicsworld.removeBody(this.blockBody),this.shatterArray.forEach(e=>{this.physicsworld.removeBody(e.body)})):this.shatterArray.length==0?(this.blockBody.collided&&!this.isShattered&&(this.isShattered=!0),this.blockMesh.position.copy(this.blockBody.position),this.blockMesh.quaternion.copy(this.blockBody.quaternion)):this.shatterArray.forEach(e=>{e.updateMesh()}),this.material.uniforms.frame.value=this.reclaimerProperties.reclaimFrame}}class XP extends ye{constructor(t,e,i){super(),this.parent=t,this.reclaimerProperties=i,this.physicsworld=i.physicsworld,this.height=e,this.buildingBlocks=[];const s={0:"Park",1:"House",2:"Apartment",3:"Skyscraper"};this.type=s[e]}colourDebug(){this.buildingBlocks.forEach(t=>{t.colourDebug()})}createBuilding(t,e,i){let s=this.reclaimerProperties.land.children[0].geometry.attributes.position;new Float32Array(s.count),new Float32Array(s.count);let r=0+.2;for(var o=0;o<this.height;o++){var l=new qP(this.parent,this.height,this.reclaimerProperties);l.createBlock(t-i/2,r+o,e-i/2),this.buildingBlocks.push(l)}}getRandomBlock(){return this.getBlock(_m(0,this.getHeight()-1))}getBlock(t){return this.buildingBlocks[t]}getPosition(){return this.position}getHeight(){return this.height}getType(){return this.type}setType(t){this.type=t}getBlock(t){return t<=this.height?this.buildingBlocks[t]:null}freezeBuilding(){this.buildingBlocks.forEach(t=>{t.freezeBlock()})}unfreezeBuilding(){this.buildingBlocks.forEach(t=>{t.unfreezeBlock()})}updateBuilding(){this.buildingBlocks.forEach(t=>{t.updateBlock()})}}class YP extends ye{constructor(e,i,s){super();Ue(this,"size",0);Ue(this,"citySize",0);Ue(this,"n",null);this.parent=e,this.citySize=i*5,this.size=i,this.buildings=[],this.reclaimerProperties=s,this.centerX=Math.floor(this.citySize/2),this.centerZ=Math.floor(this.citySize/2);let a=.1;this.density=1,this.map=new Array(this.citySize);for(let r=0;r<this.citySize;r++){this.map[r]=new Array(this.citySize);for(let o=0;o<this.citySize;o++){const l=Math.abs(this.centerX-r),c=Math.abs(this.centerZ-o),u=Math.sqrt(l*l+c*c),f=Math.max(0,1-u/Math.max(this.centerX,this.centerZ))*this.density;if(Math.random()>f)this.map[r][o]={type:"park",height:0,building:null};else if(r%2==1||o%2==1)this.map[r][o]={type:"road",height:0,building:null};else{let h=Math.max(this.gaussianHeight(this.citySize,this.density,u),1),p=Math.max(this.noiseHeight(this.citySize,this.density,u),1),g=Math.max(1,Math.floor(a*p+h*(1-a)));this.map[r][o]={type:"building",height:g,building:null};let _=new XP(e,this.map[r][o].height,this.reclaimerProperties);this.map[r][o].building=_,_.height>0&&this.buildings.push(_),_.createBuilding(r,o,this.citySize),_.updateBuilding()}}}}getBuildingsCount(){return this.buildings.length}getTileFromMap(e,i){return this.map[e][i].building}getRandomBuildings(e){let i=[];for(let s=0;s<e;s++){let a=this.getRandomBuilding();i.push(a)}return i}getRandomBuilding(){return this.buildings[_m(0,this.buildings.length)]}getBuildingsSurrounding(e,i){let s=[this.getBuilding(e,i+2),this.getBuilding(e+2,i),this.getBuilding(e,i-2),this.getBuilding(e-2,i)];return s.forEach(a=>{a.colourDebug()}),s}updateBuildings(){this.buildings.forEach(e=>{e.updateBuilding()})}gaussianHeight(e,i,s){return ZP(s*2,Math.min(e*e*i/125.5,10),e/6)}noiseHeight(e,i){return _m(0,Math.min(e*e*i/255,20))}}function ZP(n,t,e){return t*Math.exp(-Math.pow(n/e,2))}class KP extends Le{constructor(t,e={}){super(t),this.isWater=!0;const i=this,s=e.textureWidth!==void 0?e.textureWidth:512,a=e.textureHeight!==void 0?e.textureHeight:512,r=e.clipBias!==void 0?e.clipBias:0,o=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,u=e.sunDirection!==void 0?e.sunDirection:new U(.70707,.70707,0),f=new mt(e.sunColor!==void 0?e.sunColor:16777215),h=new mt(e.waterColor!==void 0?e.waterColor:8355711),p=e.eye!==void 0?e.eye:new U(0,0,0),g=e.distortionScale!==void 0?e.distortionScale:20,_=e.side!==void 0?e.side:Ds,m=e.fog!==void 0?e.fog:!1,d=new ds,v=new U,y=new U,x=new U,T=new ae,b=new U(0,0,-1),M=new Be,D=new U,w=new U,S=new Be,L=new ae,F=new pn,N=new Rn(s,a),H={name:"MirrorShader",uniforms:qn.merge([dt.fog,dt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ae},sunColor:{value:new mt(8355711)},sunDirection:{value:new U(.70707,.70707,0)},eye:{value:new U},waterColor:{value:new mt(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},I=new be({name:H.name,uniforms:qn.clone(H.uniforms),vertexShader:H.vertexShader,fragmentShader:H.fragmentShader,lights:!0,side:_,fog:m});I.uniforms.mirrorSampler.value=N.texture,I.uniforms.textureMatrix.value=L,I.uniforms.alpha.value=o,I.uniforms.time.value=l,I.uniforms.normalSampler.value=c,I.uniforms.sunColor.value=f,I.uniforms.waterColor.value=h,I.uniforms.sunDirection.value=u,I.uniforms.distortionScale.value=g,I.uniforms.eye.value=p,i.material=I,i.onBeforeRender=function(R,G,O){if(y.setFromMatrixPosition(i.matrixWorld),x.setFromMatrixPosition(O.matrixWorld),T.extractRotation(i.matrixWorld),v.set(0,0,1),v.applyMatrix4(T),D.subVectors(y,x),D.dot(v)>0)return;D.reflect(v).negate(),D.add(y),T.extractRotation(O.matrixWorld),b.set(0,0,-1),b.applyMatrix4(T),b.add(x),w.subVectors(y,b),w.reflect(v).negate(),w.add(y),F.position.copy(D),F.up.set(0,1,0),F.up.applyMatrix4(T),F.up.reflect(v),F.lookAt(w),F.far=O.far,F.updateMatrixWorld(),F.projectionMatrix.copy(O.projectionMatrix),L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),L.multiply(F.projectionMatrix),L.multiply(F.matrixWorldInverse),d.setFromNormalAndCoplanarPoint(v,y),d.applyMatrix4(F.matrixWorldInverse),M.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const W=F.projectionMatrix;S.x=(Math.sign(M.x)+W.elements[8])/W.elements[0],S.y=(Math.sign(M.y)+W.elements[9])/W.elements[5],S.z=-1,S.w=(1+W.elements[10])/W.elements[14],M.multiplyScalar(2/M.dot(S)),W.elements[2]=M.x,W.elements[6]=M.y,W.elements[10]=M.z+1-r,W.elements[14]=M.w,p.setFromMatrixPosition(O.matrixWorld);const tt=R.getRenderTarget(),lt=R.xr.enabled,rt=R.shadowMap.autoUpdate;i.visible=!1,R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(N),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(G,F),i.visible=!0,R.xr.enabled=lt,R.shadowMap.autoUpdate=rt,R.setRenderTarget(tt);const Lt=O.viewport;Lt!==void 0&&R.state.viewport(Lt)}}}class uf extends Le{constructor(){const t=uf.SkyShader,e=new be({name:t.name,uniforms:qn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Cn,depthWrite:!1});super(new ya(1,1,1),e),this.isSky=!0}}uf.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class QP{constructor(t,e){let i,s;s=new U;const a=new Ps(1e4,1e4);i=new KP(a,{textureWidth:512,textureHeight:512,waterNormals:new Xu().load("assets/Textures/waternormals.jpg",function(c){c.wrapS=c.wrapT=Ro}),sunDirection:new U,sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:t.fog!==void 0}),i.rotation.x=-Math.PI/2,i.position.y=-10,t.add(i);const r=new uf;r.scale.setScalar(1e4),t.add(r);const o=r.material.uniforms;o.turbidity.value=10,o.rayleigh.value=2,o.mieCoefficient.value=.005,o.mieDirectionalG.value=.8;let l={elevation:2,azimuth:180};this.parameters=l,new Rh(e),this.water=i,this.sun=s,this.sky=r,this.scene=t,this.renderer=e,this.parameters=l,this.updateSun(t,e,l)}updateSun(t,e,i){let s=this.sun,a=this.sky,r=this.water;this.parameters=i;const o=new Rh(e);let l;const c=Ch.degToRad(90-this.parameters.elevation),u=Ch.degToRad(this.parameters.azimuth);s.setFromSphericalCoords(1,c,u),a.material.uniforms.sunPosition.value.copy(s),r.material.uniforms.sunDirection.value.copy(s).normalize(),l!==void 0&&l.dispose(),l=o.fromScene(a),o.dispose(),t.environment=l.texture}update(){this.water.material.uniforms.time.value+=.5/60}}class $P extends fL{constructor(t){super(t),this.ratio=window.innerWidth/window.innerHeight,this.frame=0,this.reclaimFrame=0,this.isReclaiming=!1,this.renderer=t.renderer||new rf({antialias:!0,canvas:document.getElementById("render")}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=h1,this.cameraVals={FOV:55},this.camera=t.camera||new pn(this.cameraVals.FOV,this.ratio,.1,5e3),this.composer=new B0(this.renderer),this.composer.addPass(new K1(this.scene,this.camera)),this.composer.addPass(new _s(this.scene,this.camera,0,0)),this.composer.addPass(new ir({x:screen.width,y:screen.height},.7,0,.85)),this.renderer.toneMapping=y0,this.renderer.toneMappingExposure=1,this.physicsworld=new oy({gravity:new E(0,-9.82,0),quatNormalizeFast:!0,quatNormalizeSkip:8}),this.gui=t.gui||new sb;const e=new oy({gravity:new E(0,-9.82,0),quatNormalizeFast:!0,quatNormalizeSkip:8});function i(){const S=new xt({type:xt.STATIC,shape:new gN});return S.quaternion.setFromEuler(-Math.PI/2,0,0),S.position.set(0,.2,0),S}e.addBody(i());const s=new ya,a=new Vo({color:65280}),r=new Le(s,a);this.scene.add(r);let o={size:20,sunHelper:!1},l={octaves:8,persistence:.5,lacunarity:2,scale:1,height:100,falloff:.1,speed:5e-4,noiseType:"Perlin",noise:"fbm",iterations:3,resolution:511,enableFog:!0,enableShadows:!0,heightMap:new on},c=new QP(this.scene,this.renderer);this.environment=c;let u=c.sun,f=[],h={scene:this.scene,physicsworld:e,environment:c,sunDirection:u,frame:this.frame,reclaimFrame:this.reclaimFrame,materialsArray:f,renderer:this.renderer},p=new ye;this.scene.add(p);let g=new ye;g.name="land",this.scene.add(g),new dL(o.size,l,u,h).ChunkManager(g),h.land=g;let _=new mt(.25,.25,.5),m=new Xu().load("assets/Textures/GlassWindow/Glass_Window_003_basecolor.jpg"),d=new Xu().load("assets/Textures/GlassWindow/Glass_Window_003_normal.jpg"),v=new mt(14053929),y=new Xu().load("assets/Textures/Bricks/Brick_Wall_019_basecolor.jpg"),x=new mt(16636755),T=new mt(.9,.05,.05),b=new be({side:ci,uniforms:qn.merge([dt.fog])});b.uniforms={lightDirection:{value:h.sunDirection},baseColor:{value:_},textureMap:{value:m},normalMap:{value:d},frame:{value:h.scene.frame},type:{value:3},roofColor:{value:T}},b.vertexShader=dy.vertexShader,b.fragmentShader=dy.fragmentShader,b.needsUpdate=!0;let M=b.clone();M.uniforms.lightDirection.value=h.sunDirection,M.uniforms.baseColor.value=v,M.uniforms.textureMap.value=y,M.uniforms.type.value=2,M.needsUpdate=!0;let D=b.clone();D.uniforms.baseColor.value=x,D.uniforms.textureMap.value=null,D.uniforms.type.value=1,D.uniforms.lightDirection.value=h.sunDirection,D.needsUpdate=!0;let w=b.clone();w.uniforms.baseColor.value=new mt(1,1,0),h.materialsArray.push(null),h.materialsArray.push(D),h.materialsArray.push(M),h.materialsArray.push(b),h.materialsArray.push(w),new YP(p,o.size,h)}update(t){z0(t),this.environment.update()}}function JP(n,t){const e=n.current;if(!e)return;let i=new No,s=null,a=i,r=new rf({antialias:!0});const o=window.devicePixelRatio||1;r.setSize(e.offsetWidth,e.offsetHeight),r.setPixelRatio(o),r.domElement.style.top="0",r.domElement.style.left="0",r.domElement.style.width="100%",r.domElement.style.height="100%",r.domElement.style.zIndex="1",r.domElement.width=e.offsetWidth,r.domElement.height=e.offsetHeight,e.appendChild(r.domElement);let l={FOV:55};const c=new pn(l.FOV,e.offsetWidth/e.offsetHeight,.1,1e3);c.position.set(-20,5,-20),r.setSize(window.innerWidth,window.innerHeight),r.outputColorSpace=xi;let u=new B0(r);const f=new K1(a,c);u.addPass(f);const h=new _s(a,c,0,0);u.addPass(h),u.addPass(new ir({x:screen.width,y:screen.height},.7,0,.85));const p=new FD;u.addPass(p),r.toneMapping=x0,r.toneMappingExposure=1;function g(ot){f.scene=ot,h.scene=ot}let _=G();function m(){let ot=new $P({camera:c,renderer:r,gui:_});s=ot,a=ot.getScene(),g(a)}const d=new Ps(1e3,1e3,100,100),v=new q3({color:new mt(.4,.7,.4),side:ci,roughness:1,wireframe:!0,clearcoat:.05}),y=new Le(d,v);y.rotation.x=-Math.PI/2,y.castShadow=!0,y.receiveShadow=!0;const x=new sD(5);i.add(x),i.add(y);let T=new mt(.5,.72,1);const b=new iD(T,.5);i.add(b);let M=new mt(1,.98,.8);const D=new nD(M,1);D.castShadow=!0,D.position.set(30,15,30),D.lookAt(0,0,1),i.add(D);let w=new _D(c,r.domElement),S=new ae;const L=[{pos:new U(-10,0,-20),lookAt:new U(0,0,100)},{pos:new U(-10,0,-18),lookAt:new U(0,0,100)},{pos:new U(-8,10,-5),lookAt:new U(0,0,100)},{pos:new U(0,10,10),lookAt:new U(0,0,100)}];function F(ot,Tt){return S.lookAt(ot,Tt,new U(0,1,0)),new Ns().setFromRotationMatrix(S)}const N=[{time:0,data:{pos:L[0].pos,rot:F(L[0].pos,L[0].lookAt)},posEasing:Un.Quadratic.In,rotEasing:Un.Quadratic.In},{time:4,data:{pos:L[1].pos,rot:F(L[1].pos,L[1].lookAt)},posEasing:Un.Linear.None,rotEasing:Un.Quadratic.InOut},{time:8,data:{pos:L[2].pos,rot:F(L[2].pos,L[2].lookAt)},posEasing:Un.Linear.None,rotEasing:Un.Quadratic.InOut},{time:12,data:{pos:L[3].pos,rot:F(L[3].pos,L[3].lookAt)},posEasing:Un.Quadratic.Out,rotEasing:Un.Quadratic.Out}],H=new ab(N),I=H.getLineGeometry(),R=H.createLineGeometry(N.map(ot=>ot.data.pos),new mt(16711680));i.add(I),i.add(R),new lL.CameraTrack({camera:c,points:N,duration:10});function G(){let ot=new sb({autoPlace:!1});return ot.addFolder("General"),ot.close(),e.style.position="relative",ot.domElement.style.position="absolute",ot.domElement.style.zIndex="1000",ot.domElement.style.overflow="visible",console.log("datGUI container:"+e),ot}const O=document.createElement("div");O.className="element",O.textContent="Reclaimer Demo",O.addEventListener("pointerdown",()=>{m()});const W=new pD(O);W.position.set(0,0,500),W.scale.set(.1,.1,.1),W.rotation.set(0,Math.PI,0);const tt=new No;tt.add(W);let lt=new gD;lt.setSize(e.offsetWidth,e.offsetHeight),lt.domElement.style.position="absolute",lt.domElement.style.top="0",lt.domElement.style.left="0",lt.domElement.style.zIndex="2";const rt=document.createElement("canvas");rt.width=e.offsetWidth,rt.height=e.offsetHeight,rt.getContext("2d");const Lt=ot=>{console.log("3jsContainer: ",e),console.log("3jsParent: ",ot),console.log("Resizing"),console.log("3js Container: ",e.offsetWidth,", ",e.offsetHeight),r.setSize(e.offsetWidth,e.offsetHeight),u.setSize(e.offsetWidth,e.offsetHeight),u.setPixelRatio(window.devicePixelRatio),r.domElement.width=e.offsetWidth,r.domElement.height=e.offsetHeight,c.aspect=e.offsetWidth/e.offsetHeight,c.updateProjectionMatrix()};window.addEventListener("resize",Lt);let K=!1;m();const at=new X1;let gt=ot=>{w.update(),z0(ot);const Tt=at.getDelta();u.render(),lt.render(tt,c),K||(Lt(),K=!0),s&&s.update(Tt),requestAnimationFrame(gt)};return requestAnimationFrame(gt),{handleResize:Lt,scene:i,cleanup:()=>{window.removeEventListener("resize",Lt),r.dispose(),e.removeChild(r.domElement)}}}const tU=({darkMode:n})=>B.jsxs("div",{style:{textAlign:"center"},children:[B.jsx("h2",{children:"Interactive Media"}),B.jsxs("div",{id:"flexLB",style:{display:"flex",flexWrap:"wrap",gap:"2rem",margin:"auto"},children:[B.jsx("div",{className:"column-content",id:"pf3js",style:{maxHeight:"600px",minWidth:"250px",minHeight:"250px",maxWidth:"900px"},children:B.jsx(l1,{darkMode:n,containerID:"pf3js",threeJSEntry:JP})}),B.jsx("div",{style:{flex:"1",minWidth:"400px"},children:B.jsx("p",{children:"Interactive visualizations, simulations, and animations using react, three.js"})})]})]}),Tu={uniforms:{time:{value:0},noiseScale:{value:1},noiseStrength:{value:.2},noiseFrequency:{value:5},noiseSpeed:{value:.1},noiseOffset:{value:new U(0,0,0)},color:{value:new mt(16777215)},bgColor:{value:new mt(0)}},vertexShader:`
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
  `},Au={uniforms:{time:{value:0},pointSize:{value:20},noiseScale:{value:1},noiseStrength:{value:.2},noiseFrequency:{value:5},noiseSpeed:{value:.1},noiseOffset:{value:new U(0,0,0)},color:{value:new mt(16777215)},bgColor:{value:new mt(0)}},vertexShader:`
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
    `};function eU(n,t){let e=n.current;if(!e)return;const i=new rf({antialias:!0});console.log(e.offsetWidth,", ",e.offsetHeight);const s=window.devicePixelRatio||1;i.setSize(e.offsetWidth,e.offsetHeight),i.setPixelRatio(s),e.appendChild(i.domElement);const a=window.getComputedStyle(t).backgroundColor,r=new No;console.log(a),r.background=new mt(a);const o=new pn(40,e.offsetWidth/e.offsetHeight,.1,1e3);o.position.z=5;const l=new ya,c=new Vo({color:65280}),u=new Le(l,c),f=new Ps(10,10,100,100);let h=0,p=new be(Tu);p.uniforms=Tu.uniforms,p.transparent=!0,p.vertexShader=Tu.vertexShader,p.fragmentShader=Tu.fragmentShader,p.uniforms.bgColor.value=new mt(a),p.wireframe=!0;let g=new be(Au);g.uniforms=Au.uniforms,g.transparent=!0,g.vertexShader=Au.vertexShader,g.fragmentShader=Au.fragmentShader;const _=new Le(f,p);_.position.set(0,-.2,5.1),_.rotation.x=-Math.PI/2,r.add(_);const m=new qu(f,g);m.position.set(0,-.2,5.1),m.rotation.x=-Math.PI/2,r.add(m);const d=T=>{i.setSize(e.offsetWidth,e.offsetHeight),o.aspect=e.offsetWidth/e.offsetHeight,o.updateProjectionMatrix()};window.addEventListener("resize",d);let v=!1;const y=()=>{h+=.001,p.uniforms.time.value=h,g.uniforms.time.value=h,v||(d(),v=!0),requestAnimationFrame(y),u.rotation.x+=.01,u.rotation.y+=.01,i.render(r,o)};return y(),{handleResize:d,handleDarkModeChange:()=>{console.log("Dark Mode Changed");const T=window.getComputedStyle(t).backgroundColor;new mt(T);const b=T.match(/\d+/g).map(Number),M=new mt(1-b[0]/255,1-b[1]/255,1-b[2]/255);console.log("BackgroundColor: ",T),r.background=new mt(T),p.uniforms.bgColor.value=new mt(T),p.uniforms.color.value=new mt(M),console.log("ForegroundColor: ",M),g.uniforms.color.value=new mt(M),p.uniforms.color.value=new mt(M)},scene:r,cleanup:()=>{window.removeEventListener("resize",d),i.dispose(),e.removeChild(i.domElement)}}}const nU=({darkMode:n,handleOpenLightbox:t})=>{const e=n?"white":"#333";return B.jsxs(g0,{style:{justifyContent:"center",gap:"2rem"},childStyle:{minWidth:"400px"},children:[B.jsxs("div",{className:`portfolioCard ${n?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>t(B.jsx(Pw,{}),{height:"80vh"}),children:[B.jsx("h2",{style:{color:e},children:"GameDev"}),B.jsx("h3",{children:"Games, game engines, physics and rendering"}),B.jsx("img",{src:"assets/Images/Gloria_Armada.png",alt:"Gloria Armada",style:{maxWidth:"100%",objectFit:"contain",alignSelf:"normal",height:"auto"}})]}),B.jsxs("div",{className:`portfolioCard ${n?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>t(B.jsx(Uw,{darkMode:n}),{height:"80vh"}),children:[B.jsx("h2",{style:{color:e},children:"Data Analysis"}),B.jsx("p",{children:"Using data to uncover insights, drive business decisions, and create actionable solutions, with expertise in statistical analysis, machine learning, and visualization."}),B.jsx("img",{src:"assets/Images/tableau.webp",alt:"tableau",style:{maxWidth:"100%",objectFit:"contain",alignSelf:"normal",height:"auto"}})]}),B.jsxs("div",{className:`portfolioCard ${n?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>t(B.jsx(tU,{darkMode:n}),{height:"80vh"}),children:[B.jsx("h2",{style:{textAlign:"center"},children:"Interactive Media"}),B.jsx("p",{children:"Interactive visualizations, simulations, and animations using react, three.js"}),B.jsx("div",{className:"column-content",id:"threejsContainer",children:B.jsx(l1,{darkMode:n,containerID:"threejsContainer",threeJSEntry:eU})})]})]})},iU=({darkMode:n,handleOpenLightbox:t,scrollToSection:e})=>B.jsxs("div",{className:"container",children:[B.jsxs("div",{className:"column",style:{flexGrow:"0"},children:[B.jsxs("div",{style:{flex:"1",flexDirection:"vertical"},children:[B.jsx("div",{style:{justifyContent:"center",padding:"2rem"},children:B.jsx("h2",{style:{textAlign:"left",fontSize:"36",textWrap:"wrap",paddingLeft:"0rem"},children:"Let's make something amazing together!"})}),B.jsxs("p",{children:[" ","I am a software engineer with a passion for creating innovative solutions."," "]}),B.jsxs("p",{children:[" ","I have experience in various programming languages and frameworks."," "]}),B.jsxs("p",{children:[" ","I enjoy collaborating with teams and solving complex problems."," "]})]}),B.jsx(c1,{darkMode:n,scrollToSection:e})]}),B.jsx("div",{className:"column",margin:"4rem",padding:"4rem",style:{flexShrink:"3"},children:B.jsx("img",{src:"assets/Images/Profile.png",alt:"Profile",style:{maxWidth:"300px",verticalAlign:"middle",height:"auto"}})})]}),sU=()=>{const[n,t]=kt.useState(!0),[e,i]=kt.useState(!1),[s,a]=kt.useState("Test"),[r,o]=kt.useState(null);kt.useEffect(()=>{setTimeout(()=>{window.scrollTo(0,0)},5)},[]);const[l,c]=kt.useState(!1);kt.useEffect(()=>{const g=()=>{c(!0),window.removeEventListener("scroll",g)};return window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)}},[]);const u=()=>{const g=document.getElementById("contactMe");g!=null?g.scrollIntoView({behavior:"smooth",block:"start"}):console.error("Target section not found")},f=(g,_)=>{document.body.classList.add("no-scroll"),history.pushState({lightboxOpen:!0},"","#lightbox"),a(g),o(_),i(!0)},h=()=>{var g;document.body.classList.remove("no-scroll"),i(!1),(g=history.state)!=null&&g.lightboxOpen&&setTimeout(()=>history.back(),100)};window.addEventListener("popstate",g=>{var _;(_=g.state)!=null&&_.lightboxOpen&&h()});const p=()=>{t(g=>{const _=!g;return document.body.className=_?"dark-mode":"light-mode",_})};return B.jsxs("div",{className:"app",children:[B.jsx(Ew,{darkMode:n,isOpen:e,content:s,style:r,onClose:h}),B.jsx(Lw,{darkMode:n,toggleDarkMode:p}),B.jsxs("main",{className:`main ${n?"dark-mode":"light-mode"}`,children:[B.jsx(gr,{title:"Greetings",darkMode:n,style:{paddingTop:"1rem"},revealPercent:"-50% 0px",children:B.jsx(iU,{darkMode:n,scrollToSection:u})}),B.jsx(gr,{title:"Overview",darkMode:n,children:B.jsx(nU,{darkMode:n,handleOpenLightbox:f})}),B.jsx(gr,{title:"Skills",darkMode:n,children:B.jsx(Dw,{darkMode:n,children:" "})}),B.jsxs(gr,{title:"ContactMe",id:"contactMe",darkMode:n,revealPercent:"50px 0px",style:{backgroundColor:"#0061aa",paddingBottom:"1rem",paddingTop:"1rem"},children:[B.jsx("h2",{style:{textAlign:"center",color:"white",marginTop:"0px"},children:"Get In Touch!"}),B.jsx(bh,{darkMode:n,text:"Contact",style:{color:"white",borderColor:"white",borderRadius:"5px"},onClick:()=>f(B.jsx(Aw,{darkMode:n}),{height:"unset"})})]}),B.jsx(gr,{title:"Portfolio",darkMode:n,style:{padding:"0px"}}),B.jsx(gr,{title:"Footer",darkMode:n,revealPercent:"50px 0px",children:B.jsx(Nw,{darkMode:n})})]})]})};_w.createRoot(document.getElementById("root")).render(B.jsx(Ih.StrictMode,{children:B.jsx(sU,{})}))});export default aU();
