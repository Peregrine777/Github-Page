const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/introScene-BHLNfSaO.js","assets/quadtree-CYXnRQ2F.js","assets/terrainScene-B-ZCohrm.js"])))=>i.map(i=>d[i]);
var Lb=Object.defineProperty;var Pb=(n,t,e)=>t in n?Lb(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Ne=(n,t,e)=>Pb(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();function yy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var xy={exports:{}},Fh={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nb=Symbol.for("react.transitional.element"),Ub=Symbol.for("react.fragment");function Sy(n,t,e){var i=null;if(e!==void 0&&(i=""+e),t.key!==void 0&&(i=""+t.key),"key"in t){e={};for(var s in t)s!=="key"&&(e[s]=t[s])}else e=t;return t=e.ref,{$$typeof:Nb,type:n,key:i,ref:t!==void 0?t:null,props:e}}Fh.Fragment=Ub;Fh.jsx=Sy;Fh.jsxs=Sy;xy.exports=Fh;var I=xy.exports,by={exports:{}},qt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm=Symbol.for("react.transitional.element"),Ob=Symbol.for("react.portal"),zb=Symbol.for("react.fragment"),Bb=Symbol.for("react.strict_mode"),Ib=Symbol.for("react.profiler"),Fb=Symbol.for("react.consumer"),Hb=Symbol.for("react.context"),Vb=Symbol.for("react.forward_ref"),kb=Symbol.for("react.suspense"),Gb=Symbol.for("react.memo"),My=Symbol.for("react.lazy"),ig=Symbol.iterator;function jb(n){return n===null||typeof n!="object"?null:(n=ig&&n[ig]||n["@@iterator"],typeof n=="function"?n:null)}var Ey={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wy=Object.assign,Ty={};function Lo(n,t,e){this.props=n,this.context=t,this.refs=Ty,this.updater=e||Ey}Lo.prototype.isReactComponent={};Lo.prototype.setState=function(n,t){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,t,"setState")};Lo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Ay(){}Ay.prototype=Lo.prototype;function Tm(n,t,e){this.props=n,this.context=t,this.refs=Ty,this.updater=e||Ey}var Am=Tm.prototype=new Ay;Am.constructor=Tm;wy(Am,Lo.prototype);Am.isPureReactComponent=!0;var sg=Array.isArray,Re={H:null,A:null,T:null,S:null},Cy=Object.prototype.hasOwnProperty;function Cm(n,t,e,i,s,a){return e=a.ref,{$$typeof:wm,type:n,key:t,ref:e!==void 0?e:null,props:a}}function Wb(n,t){return Cm(n.type,t,void 0,void 0,void 0,n.props)}function Rm(n){return typeof n=="object"&&n!==null&&n.$$typeof===wm}function Xb(n){var t={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(e){return t[e]})}var ag=/\/+/g;function _f(n,t){return typeof n=="object"&&n!==null&&n.key!=null?Xb(""+n.key):t.toString(36)}function rg(){}function qb(n){switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:switch(typeof n.status=="string"?n.then(rg,rg):(n.status="pending",n.then(function(t){n.status==="pending"&&(n.status="fulfilled",n.value=t)},function(t){n.status==="pending"&&(n.status="rejected",n.reason=t)})),n.status){case"fulfilled":return n.value;case"rejected":throw n.reason}}throw n}function Or(n,t,e,i,s){var a=typeof n;(a==="undefined"||a==="boolean")&&(n=null);var r=!1;if(n===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(n.$$typeof){case wm:case Ob:r=!0;break;case My:return r=n._init,Or(r(n._payload),t,e,i,s)}}if(r)return s=s(n),r=i===""?"."+_f(n,0):i,sg(s)?(e="",r!=null&&(e=r.replace(ag,"$&/")+"/"),Or(s,t,e,"",function(c){return c})):s!=null&&(Rm(s)&&(s=Wb(s,e+(s.key==null||n&&n.key===s.key?"":(""+s.key).replace(ag,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(sg(n))for(var l=0;l<n.length;l++)i=n[l],a=o+_f(i,l),r+=Or(i,t,e,a,s);else if(l=jb(n),typeof l=="function")for(n=l.call(n),l=0;!(i=n.next()).done;)i=i.value,a=o+_f(i,l++),r+=Or(i,t,e,a,s);else if(a==="object"){if(typeof n.then=="function")return Or(qb(n),t,e,i,s);throw t=String(n),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Ac(n,t,e){if(n==null)return n;var i=[],s=0;return Or(n,i,"","",function(a){return t.call(e,a,s++)}),i}function Yb(n){if(n._status===-1){var t=n._result;t=t(),t.then(function(e){(n._status===0||n._status===-1)&&(n._status=1,n._result=e)},function(e){(n._status===0||n._status===-1)&&(n._status=2,n._result=e)}),n._status===-1&&(n._status=0,n._result=t)}if(n._status===1)return n._result.default;throw n._result}var og=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Zb(){}qt.Children={map:Ac,forEach:function(n,t,e){Ac(n,function(){t.apply(this,arguments)},e)},count:function(n){var t=0;return Ac(n,function(){t++}),t},toArray:function(n){return Ac(n,function(t){return t})||[]},only:function(n){if(!Rm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};qt.Component=Lo;qt.Fragment=zb;qt.Profiler=Ib;qt.PureComponent=Tm;qt.StrictMode=Bb;qt.Suspense=kb;qt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Re;qt.act=function(){throw Error("act(...) is not supported in production builds of React.")};qt.cache=function(n){return function(){return n.apply(null,arguments)}};qt.cloneElement=function(n,t,e){if(n==null)throw Error("The argument must be a React element, but you passed "+n+".");var i=wy({},n.props),s=n.key,a=void 0;if(t!=null)for(r in t.ref!==void 0&&(a=void 0),t.key!==void 0&&(s=""+t.key),t)!Cy.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=e;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}return Cm(n.type,s,void 0,void 0,a,i)};qt.createContext=function(n){return n={$$typeof:Hb,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null},n.Provider=n,n.Consumer={$$typeof:Fb,_context:n},n};qt.createElement=function(n,t,e){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)Cy.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=e;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(n&&n.defaultProps)for(i in r=n.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Cm(n,a,void 0,void 0,null,s)};qt.createRef=function(){return{current:null}};qt.forwardRef=function(n){return{$$typeof:Vb,render:n}};qt.isValidElement=Rm;qt.lazy=function(n){return{$$typeof:My,_payload:{_status:-1,_result:n},_init:Yb}};qt.memo=function(n,t){return{$$typeof:Gb,type:n,compare:t===void 0?null:t}};qt.startTransition=function(n){var t=Re.T,e={};Re.T=e;try{var i=n(),s=Re.S;s!==null&&s(e,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Zb,og)}catch(a){og(a)}finally{Re.T=t}};qt.unstable_useCacheRefresh=function(){return Re.H.useCacheRefresh()};qt.use=function(n){return Re.H.use(n)};qt.useActionState=function(n,t,e){return Re.H.useActionState(n,t,e)};qt.useCallback=function(n,t){return Re.H.useCallback(n,t)};qt.useContext=function(n){return Re.H.useContext(n)};qt.useDebugValue=function(){};qt.useDeferredValue=function(n,t){return Re.H.useDeferredValue(n,t)};qt.useEffect=function(n,t){return Re.H.useEffect(n,t)};qt.useId=function(){return Re.H.useId()};qt.useImperativeHandle=function(n,t,e){return Re.H.useImperativeHandle(n,t,e)};qt.useInsertionEffect=function(n,t){return Re.H.useInsertionEffect(n,t)};qt.useLayoutEffect=function(n,t){return Re.H.useLayoutEffect(n,t)};qt.useMemo=function(n,t){return Re.H.useMemo(n,t)};qt.useOptimistic=function(n,t){return Re.H.useOptimistic(n,t)};qt.useReducer=function(n,t,e){return Re.H.useReducer(n,t,e)};qt.useRef=function(n){return Re.H.useRef(n)};qt.useState=function(n){return Re.H.useState(n)};qt.useSyncExternalStore=function(n,t,e){return Re.H.useSyncExternalStore(n,t,e)};qt.useTransition=function(){return Re.H.useTransition()};qt.version="19.0.0";by.exports=qt;var kt=by.exports;const Hh=yy(kt);var Ry={exports:{}},Vh={},Dy={exports:{}},Ly={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function t(R,j){var O=R.length;R.push(j);t:for(;0<O;){var W=O-1>>>1,nt=R[W];if(0<s(nt,j))R[W]=j,R[O]=nt,O=W;else break t}}function e(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var j=R[0],O=R.pop();if(O!==j){R[0]=O;t:for(var W=0,nt=R.length,ct=nt>>>1;W<ct;){var rt=2*(W+1)-1,Nt=R[rt],K=rt+1,at=R[K];if(0>s(Nt,O))K<nt&&0>s(at,Nt)?(R[W]=at,R[K]=O,W=K):(R[W]=Nt,R[rt]=O,W=rt);else if(K<nt&&0>s(at,O))R[W]=at,R[K]=O,W=K;else break t}}return j}function s(R,j){var O=R.sortIndex-j.sortIndex;return O!==0?O:R.id-j.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var r=Date,o=r.now();n.unstable_now=function(){return r.now()-o}}var l=[],c=[],u=1,f=null,h=3,d=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;function y(R){for(var j=e(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=R)i(c),j.sortIndex=j.expirationTime,t(l,j);else break;j=e(c)}}function x(R){if(_=!1,y(R),!g)if(e(l)!==null)g=!0,B();else{var j=e(c);j!==null&&F(x,j.startTime-R)}}var T=!1,b=-1,E=5,D=-1;function M(){return!(n.unstable_now()-D<E)}function S(){if(T){var R=n.unstable_now();D=R;var j=!0;try{t:{g=!1,_&&(_=!1,p(b),b=-1),d=!0;var O=h;try{e:{for(y(R),f=e(l);f!==null&&!(f.expirationTime>R&&M());){var W=f.callback;if(typeof W=="function"){f.callback=null,h=f.priorityLevel;var nt=W(f.expirationTime<=R);if(R=n.unstable_now(),typeof nt=="function"){f.callback=nt,y(R),j=!0;break e}f===e(l)&&i(l),y(R)}else i(l);f=e(l)}if(f!==null)j=!0;else{var ct=e(c);ct!==null&&F(x,ct.startTime-R),j=!1}}break t}finally{f=null,h=O,d=!1}j=void 0}}finally{j?L():T=!1}}}var L;if(typeof v=="function")L=function(){v(S)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,P=H.port2;H.port1.onmessage=S,L=function(){P.postMessage(null)}}else L=function(){m(S,0)};function B(){T||(T=!0,L())}function F(R,j){b=m(function(){R(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_continueExecution=function(){g||d||(g=!0,B())},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return e(l)},n.unstable_next=function(R){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var O=h;h=j;try{return R()}finally{h=O}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(R,j){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=h;h=R;try{return j()}finally{h=O}},n.unstable_scheduleCallback=function(R,j,O){var W=n.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?W+O:W):O=W,R){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=O+nt,R={id:u++,callback:j,priorityLevel:R,startTime:O,expirationTime:nt,sortIndex:-1},O>W?(R.sortIndex=O,t(c,R),e(l)===null&&R===e(c)&&(_?(p(b),b=-1):_=!0,F(x,O-W))):(R.sortIndex=nt,t(l,R),g||d||(g=!0,B())),R},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(R){var j=h;return function(){var O=h;h=j;try{return R.apply(this,arguments)}finally{h=O}}}})(Ly);Dy.exports=Ly;var Kb=Dy.exports,Py={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qb=kt;function Ny(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Us(){}var Tn={d:{f:Us,r:function(){throw Error(Ny(522))},D:Us,C:Us,L:Us,m:Us,X:Us,S:Us,M:Us},p:0,findDOMNode:null},$b=Symbol.for("react.portal");function Jb(n,t,e){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$b,key:i==null?null:""+i,children:n,containerInfo:t,implementation:e}}var gl=Qb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function kh(n,t){if(n==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tn;Dn.createPortal=function(n,t){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Ny(299));return Jb(n,t,null,e)};Dn.flushSync=function(n){var t=gl.T,e=Tn.p;try{if(gl.T=null,Tn.p=2,n)return n()}finally{gl.T=t,Tn.p=e,Tn.d.f()}};Dn.preconnect=function(n,t){typeof n=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Tn.d.C(n,t))};Dn.prefetchDNS=function(n){typeof n=="string"&&Tn.d.D(n)};Dn.preinit=function(n,t){if(typeof n=="string"&&t&&typeof t.as=="string"){var e=t.as,i=kh(e,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;e==="style"?Tn.d.S(n,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):e==="script"&&Tn.d.X(n,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Dn.preinitModule=function(n,t){if(typeof n=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var e=kh(t.as,t.crossOrigin);Tn.d.M(n,{crossOrigin:e,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Tn.d.M(n)};Dn.preload=function(n,t){if(typeof n=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var e=t.as,i=kh(e,t.crossOrigin);Tn.d.L(n,e,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Dn.preloadModule=function(n,t){if(typeof n=="string")if(t){var e=kh(t.as,t.crossOrigin);Tn.d.m(n,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:e,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Tn.d.m(n)};Dn.requestFormReset=function(n){Tn.d.r(n)};Dn.unstable_batchedUpdates=function(n,t){return n(t)};Dn.useFormState=function(n,t,e){return gl.H.useFormState(n,t,e)};Dn.useFormStatus=function(){return gl.H.useHostTransitionStatus()};Dn.version="19.0.0";function Uy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uy)}catch(n){console.error(n)}}Uy(),Py.exports=Dn;var tM=Py.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=Kb,Oy=kt,eM=tM;function J(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function zy(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var nM=Symbol.for("react.element"),Cc=Symbol.for("react.transitional.element"),ol=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),By=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),iM=Symbol.for("react.provider"),Iy=Symbol.for("react.consumer"),_s=Symbol.for("react.context"),Dm=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),Gd=Symbol.for("react.suspense_list"),Lm=Symbol.for("react.memo"),Ws=Symbol.for("react.lazy"),Fy=Symbol.for("react.offscreen"),sM=Symbol.for("react.memo_cache_sentinel"),lg=Symbol.iterator;function Vo(n){return n===null||typeof n!="object"?null:(n=lg&&n[lg]||n["@@iterator"],typeof n=="function"?n:null)}var aM=Symbol.for("react.client.reference");function jd(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===aM?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case kr:return"Fragment";case ol:return"Portal";case Vd:return"Profiler";case By:return"StrictMode";case kd:return"Suspense";case Gd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case _s:return(n.displayName||"Context")+".Provider";case Iy:return(n._context.displayName||"Context")+".Consumer";case Dm:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Lm:return t=n.displayName||null,t!==null?t:jd(n.type)||"Memo";case Ws:t=n._payload,n=n._init;try{return jd(n(t))}catch{}}return null}var Gt=Oy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ee=Object.assign,yf,cg;function ll(n){if(yf===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);yf=t&&t[1]||"",cg=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yf+n+cg}var xf=!1;function Sf(n,t){if(!n||xf)return"";xf=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(d){var h=d}Reflect.construct(n,[],f)}else{try{f.call()}catch(d){h=d}n.call(f.prototype)}}else{try{throw Error()}catch(d){h=d}(f=n())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(d){if(d&&h&&typeof d.stack=="string")return[d.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=i&&0<=s);break}}}finally{xf=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?ll(e):""}function rM(n){switch(n.tag){case 26:case 27:case 5:return ll(n.type);case 16:return ll("Lazy");case 13:return ll("Suspense");case 19:return ll("SuspenseList");case 0:case 15:return n=Sf(n.type,!1),n;case 11:return n=Sf(n.type.render,!1),n;case 1:return n=Sf(n.type,!0),n;default:return""}}function ug(n){try{var t="";do t+=rM(n),n=n.return;while(n);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function Po(n){var t=n,e=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,t.flags&4098&&(e=t.return),n=t.return;while(n)}return t.tag===3?e:null}function Hy(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function hg(n){if(Po(n)!==n)throw Error(J(188))}function oM(n){var t=n.alternate;if(!t){if(t=Po(n),t===null)throw Error(J(188));return t!==n?null:n}for(var e=n,i=t;;){var s=e.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){e=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===e)return hg(s),n;if(a===i)return hg(s),t;a=a.sibling}throw Error(J(188))}if(e.return!==i.return)e=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===e){r=!0,e=s,i=a;break}if(o===i){r=!0,i=s,e=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===e){r=!0,e=a,i=s;break}if(o===i){r=!0,i=a,e=s;break}o=o.sibling}if(!r)throw Error(J(189))}}if(e.alternate!==i)throw Error(J(190))}if(e.tag!==3)throw Error(J(188));return e.stateNode.current===e?n:t}function Vy(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n;for(n=n.child;n!==null;){if(t=Vy(n),t!==null)return t;n=n.sibling}return null}var cl=Array.isArray,Me=eM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Va={pending:!1,data:null,method:null,action:null},Wd=[],Gr=-1;function qi(n){return{current:n}}function on(n){0>Gr||(n.current=Wd[Gr],Wd[Gr]=null,Gr--)}function Ae(n,t){Gr++,Wd[Gr]=n.current,n.current=t}var ki=qi(null),Gl=qi(null),ta=qi(null),Qu=qi(null);function $u(n,t){switch(Ae(ta,t),Ae(Gl,n),Ae(ki,null),n=t.nodeType,n){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?fv(t):0;break;default:if(n=n===8?t.parentNode:t,t=n.tagName,n=n.namespaceURI)n=fv(n),t=JS(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}on(ki),Ae(ki,t)}function vo(){on(ki),on(Gl),on(ta)}function Xd(n){n.memoizedState!==null&&Ae(Qu,n);var t=ki.current,e=JS(t,n.type);t!==e&&(Ae(Gl,n),Ae(ki,e))}function Ju(n){Gl.current===n&&(on(ki),on(Gl)),Qu.current===n&&(on(Qu),tc._currentValue=Va)}var qd=Object.prototype.hasOwnProperty,Pm=Je.unstable_scheduleCallback,bf=Je.unstable_cancelCallback,lM=Je.unstable_shouldYield,cM=Je.unstable_requestPaint,Gi=Je.unstable_now,uM=Je.unstable_getCurrentPriorityLevel,ky=Je.unstable_ImmediatePriority,Gy=Je.unstable_UserBlockingPriority,th=Je.unstable_NormalPriority,hM=Je.unstable_LowPriority,jy=Je.unstable_IdlePriority,fM=Je.log,dM=Je.unstable_setDisableYieldValue,lc=null,qn=null;function pM(n){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(lc,n,void 0,(n.current.flags&128)===128)}catch{}}function $s(n){if(typeof fM=="function"&&dM(n),qn&&typeof qn.setStrictMode=="function")try{qn.setStrictMode(lc,n)}catch{}}var Yn=Math.clz32?Math.clz32:vM,mM=Math.log,gM=Math.LN2;function vM(n){return n>>>=0,n===0?32:31-(mM(n)/gM|0)|0}var Rc=128,Dc=4194304;function La(n){var t=n&42;if(t!==0)return t;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Gh(n,t){var e=n.pendingLanes;if(e===0)return 0;var i=0,s=n.suspendedLanes,a=n.pingedLanes,r=n.warmLanes;n=n.finishedLanes!==0;var o=e&134217727;return o!==0?(e=o&~s,e!==0?i=La(e):(a&=o,a!==0?i=La(a):n||(r=o&~r,r!==0&&(i=La(r))))):(o=e&~s,o!==0?i=La(o):a!==0?i=La(a):n||(r=e&~r,r!==0&&(i=La(r)))),i===0?0:t!==0&&t!==i&&!(t&s)&&(s=i&-i,r=t&-t,s>=r||s===32&&(r&4194176)!==0)?t:i}function cc(n,t){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&t)===0}function _M(n,t){switch(n){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wy(){var n=Rc;return Rc<<=1,!(Rc&4194176)&&(Rc=128),n}function Xy(){var n=Dc;return Dc<<=1,!(Dc&62914560)&&(Dc=4194304),n}function Mf(n){for(var t=[],e=0;31>e;e++)t.push(n);return t}function uc(n,t){n.pendingLanes|=t,t!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function yM(n,t,e,i,s,a){var r=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var o=n.entanglements,l=n.expirationTimes,c=n.hiddenUpdates;for(e=r&~e;0<e;){var u=31-Yn(e),f=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var d=h[u];d!==null&&(d.lane&=-536870913)}e&=~f}i!==0&&qy(n,i,0),a!==0&&s===0&&n.tag!==0&&(n.suspendedLanes|=a&~(r&~t))}function qy(n,t,e){n.pendingLanes|=t,n.suspendedLanes&=~t;var i=31-Yn(t);n.entangledLanes|=t,n.entanglements[i]=n.entanglements[i]|1073741824|e&4194218}function Yy(n,t){var e=n.entangledLanes|=t;for(n=n.entanglements;e;){var i=31-Yn(e),s=1<<i;s&t|n[i]&t&&(n[i]|=t),e&=~s}}function Zy(n){return n&=-n,2<n?8<n?n&134217727?32:268435456:8:2}function Ky(){var n=Me.p;return n!==0?n:(n=window.event,n===void 0?32:c1(n.type))}function xM(n,t){var e=Me.p;try{return Me.p=n,t()}finally{Me.p=e}}var ma=Math.random().toString(36).slice(2),_n="__reactFiber$"+ma,Un="__reactProps$"+ma,No="__reactContainer$"+ma,Yd="__reactEvents$"+ma,SM="__reactListeners$"+ma,bM="__reactHandles$"+ma,fg="__reactResources$"+ma,jl="__reactMarker$"+ma;function Nm(n){delete n[_n],delete n[Un],delete n[Yd],delete n[SM],delete n[bM]}function Ba(n){var t=n[_n];if(t)return t;for(var e=n.parentNode;e;){if(t=e[No]||e[_n]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(n=pv(n);n!==null;){if(e=n[_n])return e;n=pv(n)}return t}n=e,e=n.parentNode}return null}function Uo(n){if(n=n[_n]||n[No]){var t=n.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return n}return null}function ul(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n.stateNode;throw Error(J(33))}function so(n){var t=n[fg];return t||(t=n[fg]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function an(n){n[jl]=!0}var Qy=new Set,$y={};function ir(n,t){_o(n,t),_o(n+"Capture",t)}function _o(n,t){for($y[n]=t,n=0;n<t.length;n++)Qy.add(t[n])}var ws=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),MM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dg={},pg={};function EM(n){return qd.call(pg,n)?!0:qd.call(dg,n)?!1:MM.test(n)?pg[n]=!0:(dg[n]=!0,!1)}function Lu(n,t,e){if(EM(t))if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){n.removeAttribute(t);return}}n.setAttribute(t,""+e)}}function Lc(n,t,e){if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttribute(t,""+e)}}function Ki(n,t,e,i){if(i===null)n.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(t,e,""+i)}}function si(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Jy(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wM(n){var t=Jy(n)?"checked":"value",e=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),i=""+n[t];if(!n.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var s=e.get,a=e.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){i=""+r,a.call(this,r)}}),Object.defineProperty(n,t,{enumerable:e.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function eh(n){n._valueTracker||(n._valueTracker=wM(n))}function tx(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var e=t.getValue(),i="";return n&&(i=Jy(n)?n.checked?"true":"false":n.value),n=i,n!==e?(t.setValue(n),!0):!1}function nh(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var TM=/[\n"\\]/g;function oi(n){return n.replace(TM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zd(n,t,e,i,s,a,r,o){n.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?n.type=r:n.removeAttribute("type"),t!=null?r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+si(t)):n.value!==""+si(t)&&(n.value=""+si(t)):r!=="submit"&&r!=="reset"||n.removeAttribute("value"),t!=null?Kd(n,r,si(t)):e!=null?Kd(n,r,si(e)):i!=null&&n.removeAttribute("value"),s==null&&a!=null&&(n.defaultChecked=!!a),s!=null&&(n.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.name=""+si(o):n.removeAttribute("name")}function ex(n,t,e,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(n.type=a),t!=null||e!=null){if(!(a!=="submit"&&a!=="reset"||t!=null))return;e=e!=null?""+si(e):"",t=t!=null?""+si(t):e,o||t===n.value||(n.value=t),n.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,n.checked=o?n.checked:!!i,n.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.name=r)}function Kd(n,t,e){t==="number"&&nh(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function ao(n,t,e,i){if(n=n.options,t){t={};for(var s=0;s<e.length;s++)t["$"+e[s]]=!0;for(e=0;e<n.length;e++)s=t.hasOwnProperty("$"+n[e].value),n[e].selected!==s&&(n[e].selected=s),s&&i&&(n[e].defaultSelected=!0)}else{for(e=""+si(e),t=null,s=0;s<n.length;s++){if(n[s].value===e){n[s].selected=!0,i&&(n[s].defaultSelected=!0);return}t!==null||n[s].disabled||(t=n[s])}t!==null&&(t.selected=!0)}}function nx(n,t,e){if(t!=null&&(t=""+si(t),t!==n.value&&(n.value=t),e==null)){n.defaultValue!==t&&(n.defaultValue=t);return}n.defaultValue=e!=null?""+si(e):""}function ix(n,t,e,i){if(t==null){if(i!=null){if(e!=null)throw Error(J(92));if(cl(i)){if(1<i.length)throw Error(J(93));i=i[0]}e=i}e==null&&(e=""),t=e}e=si(t),n.defaultValue=e,i=n.textContent,i===e&&i!==""&&i!==null&&(n.value=i)}function yo(n,t){if(t){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=t;return}}n.textContent=t}var AM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mg(n,t,e){var i=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?i?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="":i?n.setProperty(t,e):typeof e!="number"||e===0||AM.has(t)?t==="float"?n.cssFloat=e:n[t]=(""+e).trim():n[t]=e+"px"}function sx(n,t,e){if(t!=null&&typeof t!="object")throw Error(J(62));if(n=n.style,e!=null){for(var i in e)!e.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&e[s]!==i&&mg(n,s,i)}else for(var a in t)t.hasOwnProperty(a)&&mg(n,a,t[a])}function Um(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var CM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),RM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pu(n){return RM.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Qd=null;function Om(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var jr=null,ro=null;function gg(n){var t=Uo(n);if(t&&(n=t.stateNode)){var e=n[Un]||null;t:switch(n=t.stateNode,t.type){case"input":if(Zd(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+oi(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var i=e[t];if(i!==n&&i.form===n.form){var s=i[Un]||null;if(!s)throw Error(J(90));Zd(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<e.length;t++)i=e[t],i.form===n.form&&tx(i)}break t;case"textarea":nx(n,e.value,e.defaultValue);break t;case"select":t=e.value,t!=null&&ao(n,!!e.multiple,t,!1)}}}var Ef=!1;function ax(n,t,e){if(Ef)return n(t,e);Ef=!0;try{var i=n(t);return i}finally{if(Ef=!1,(jr!==null||ro!==null)&&(Jh(),jr&&(t=jr,n=ro,ro=jr=null,gg(t),n)))for(t=0;t<n.length;t++)gg(n[t])}}function Wl(n,t){var e=n.stateNode;if(e===null)return null;var i=e[Un]||null;if(i===null)return null;e=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break t;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(J(231,t,typeof e));return e}var $d=!1;if(ws)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){$d=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{$d=!1}var Js=null,zm=null,Nu=null;function rx(){if(Nu)return Nu;var n,t=zm,e=t.length,i,s="value"in Js?Js.value:Js.textContent,a=s.length;for(n=0;n<e&&t[n]===s[n];n++);var r=e-n;for(i=1;i<=r&&t[e-i]===s[a-i];i++);return Nu=s.slice(n,1<i?1-i:void 0)}function Uu(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function Pc(){return!0}function vg(){return!1}function zn(n){function t(e,i,s,a,r){this._reactName=e,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(e=n[o],this[o]=e?e(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Pc:vg,this.isPropagationStopped=vg,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Pc)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Pc)},persist:function(){},isPersistent:Pc}),t}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jh=zn(sr),hc=Ee({},sr,{view:0,detail:0}),DM=zn(hc),wf,Tf,Go,Wh=Ee({},hc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Go&&(Go&&n.type==="mousemove"?(wf=n.screenX-Go.screenX,Tf=n.screenY-Go.screenY):Tf=wf=0,Go=n),wf)},movementY:function(n){return"movementY"in n?n.movementY:Tf}}),_g=zn(Wh),LM=Ee({},Wh,{dataTransfer:0}),PM=zn(LM),NM=Ee({},hc,{relatedTarget:0}),Af=zn(NM),UM=Ee({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),OM=zn(UM),zM=Ee({},sr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),BM=zn(zM),IM=Ee({},sr,{data:0}),yg=zn(IM),FM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kM(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=VM[n])?!!t[n]:!1}function Bm(){return kM}var GM=Ee({},hc,{key:function(n){if(n.key){var t=FM[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=Uu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?HM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bm,charCode:function(n){return n.type==="keypress"?Uu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Uu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jM=zn(GM),WM=Ee({},Wh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xg=zn(WM),XM=Ee({},hc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bm}),qM=zn(XM),YM=Ee({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZM=zn(YM),KM=Ee({},Wh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),QM=zn(KM),$M=Ee({},sr,{newState:0,oldState:0}),JM=zn($M),tE=[9,13,27,32],Im=ws&&"CompositionEvent"in window,vl=null;ws&&"documentMode"in document&&(vl=document.documentMode);var eE=ws&&"TextEvent"in window&&!vl,ox=ws&&(!Im||vl&&8<vl&&11>=vl),Sg=" ",bg=!1;function lx(n,t){switch(n){case"keyup":return tE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cx(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Wr=!1;function nE(n,t){switch(n){case"compositionend":return cx(t);case"keypress":return t.which!==32?null:(bg=!0,Sg);case"textInput":return n=t.data,n===Sg&&bg?null:n;default:return null}}function iE(n,t){if(Wr)return n==="compositionend"||!Im&&lx(n,t)?(n=rx(),Nu=zm=Js=null,Wr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ox&&t.locale!=="ko"?null:t.data;default:return null}}var sE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mg(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!sE[n.type]:t==="textarea"}function ux(n,t,e,i){jr?ro?ro.push(i):ro=[i]:jr=i,t=_h(t,"onChange"),0<t.length&&(e=new jh("onChange","change",null,e,i),n.push({event:e,listeners:t}))}var _l=null,Xl=null;function aE(n){KS(n,0)}function Xh(n){var t=ul(n);if(tx(t))return n}function Eg(n,t){if(n==="change")return t}var hx=!1;if(ws){var Cf;if(ws){var Rf="oninput"in document;if(!Rf){var wg=document.createElement("div");wg.setAttribute("oninput","return;"),Rf=typeof wg.oninput=="function"}Cf=Rf}else Cf=!1;hx=Cf&&(!document.documentMode||9<document.documentMode)}function Tg(){_l&&(_l.detachEvent("onpropertychange",fx),Xl=_l=null)}function fx(n){if(n.propertyName==="value"&&Xh(Xl)){var t=[];ux(t,Xl,n,Om(n)),ax(aE,t)}}function rE(n,t,e){n==="focusin"?(Tg(),_l=t,Xl=e,_l.attachEvent("onpropertychange",fx)):n==="focusout"&&Tg()}function oE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xh(Xl)}function lE(n,t){if(n==="click")return Xh(t)}function cE(n,t){if(n==="input"||n==="change")return Xh(t)}function uE(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var Kn=typeof Object.is=="function"?Object.is:uE;function ql(n,t){if(Kn(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var e=Object.keys(n),i=Object.keys(t);if(e.length!==i.length)return!1;for(i=0;i<e.length;i++){var s=e[i];if(!qd.call(t,s)||!Kn(n[s],t[s]))return!1}return!0}function Ag(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Cg(n,t){var e=Ag(n);n=0;for(var i;e;){if(e.nodeType===3){if(i=n+e.textContent.length,n<=t&&i>=t)return{node:e,offset:t-n};n=i}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Ag(e)}}function dx(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?dx(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function px(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var t=nh(n.document);t instanceof n.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)n=t.contentWindow;else break;t=nh(n.document)}return t}function Fm(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}function hE(n,t){var e=px(t);t=n.focusedElem;var i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&dx(t.ownerDocument.documentElement,t)){if(i!==null&&Fm(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,a=Math.min(i.start,s);i=i.end===void 0?a:Math.min(i.end,s),!e.extend&&a>i&&(s=i,i=a,a=s),s=Cg(t,a);var r=Cg(t,i);s&&r&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),a>i?(e.addRange(n),e.extend(r.node,r.offset)):(n.setEnd(r.node,r.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fE=ws&&"documentMode"in document&&11>=document.documentMode,Xr=null,Jd=null,yl=null,tp=!1;function Rg(n,t,e){var i=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;tp||Xr==null||Xr!==nh(i)||(i=Xr,"selectionStart"in i&&Fm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),yl&&ql(yl,i)||(yl=i,i=_h(Jd,"onSelect"),0<i.length&&(t=new jh("onSelect","select",null,t,e),n.push({event:t,listeners:i}),t.target=Xr)))}function ba(n,t){var e={};return e[n.toLowerCase()]=t.toLowerCase(),e["Webkit"+n]="webkit"+t,e["Moz"+n]="moz"+t,e}var qr={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionrun:ba("Transition","TransitionRun"),transitionstart:ba("Transition","TransitionStart"),transitioncancel:ba("Transition","TransitionCancel"),transitionend:ba("Transition","TransitionEnd")},Df={},mx={};ws&&(mx=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function ar(n){if(Df[n])return Df[n];if(!qr[n])return n;var t=qr[n],e;for(e in t)if(t.hasOwnProperty(e)&&e in mx)return Df[n]=t[e];return n}var gx=ar("animationend"),vx=ar("animationiteration"),_x=ar("animationstart"),dE=ar("transitionrun"),pE=ar("transitionstart"),mE=ar("transitioncancel"),yx=ar("transitionend"),xx=new Map,Dg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ri(n,t){xx.set(n,t),ir(t,[n])}var ii=[],Yr=0,Hm=0;function qh(){for(var n=Yr,t=Hm=Yr=0;t<n;){var e=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var s=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Sx(e,s,a)}}function Yh(n,t,e,i){ii[Yr++]=n,ii[Yr++]=t,ii[Yr++]=e,ii[Yr++]=i,Hm|=i,n.lanes|=i,n=n.alternate,n!==null&&(n.lanes|=i)}function Vm(n,t,e,i){return Yh(n,t,e,i),ih(n)}function ca(n,t){return Yh(n,null,null,t),ih(n)}function Sx(n,t,e){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e);for(var s=!1,a=n.return;a!==null;)a.childLanes|=e,i=a.alternate,i!==null&&(i.childLanes|=e),a.tag===22&&(n=a.stateNode,n===null||n._visibility&1||(s=!0)),n=a,a=a.return;s&&t!==null&&n.tag===3&&(a=n.stateNode,s=31-Yn(e),a=a.hiddenUpdates,n=a[s],n===null?a[s]=[t]:n.push(t),t.lane=e|536870912)}function ih(n){if(50<Ll)throw Ll=0,bp=null,Error(J(185));for(var t=n.return;t!==null;)n=t,t=n.return;return n.tag===3?n.stateNode:null}var Zr={},Lg=new WeakMap;function li(n,t){if(typeof n=="object"&&n!==null){var e=Lg.get(n);return e!==void 0?e:(t={value:n,source:t,stack:ug(t)},Lg.set(n,t),t)}return{value:n,source:t,stack:ug(t)}}var Kr=[],Qr=0,sh=null,ah=0,ai=[],ri=0,ka=null,ys=1,xs="";function Pa(n,t){Kr[Qr++]=ah,Kr[Qr++]=sh,sh=n,ah=t}function bx(n,t,e){ai[ri++]=ys,ai[ri++]=xs,ai[ri++]=ka,ka=n;var i=ys;n=xs;var s=32-Yn(i)-1;i&=~(1<<s),e+=1;var a=32-Yn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,ys=1<<32-Yn(t)+s|e<<s|i,xs=a+n}else ys=1<<a|e<<s|i,xs=n}function km(n){n.return!==null&&(Pa(n,1),bx(n,1,0))}function Gm(n){for(;n===sh;)sh=Kr[--Qr],Kr[Qr]=null,ah=Kr[--Qr],Kr[Qr]=null;for(;n===ka;)ka=ai[--ri],ai[ri]=null,xs=ai[--ri],ai[ri]=null,ys=ai[--ri],ai[ri]=null}var wn=null,dn=null,ne=!1,xi=null,Ii=!1,ep=Error(J(519));function qa(n){var t=Error(J(418,""));throw Yl(li(t,n)),ep}function Pg(n){var t=n.stateNode,e=n.type,i=n.memoizedProps;switch(t[_n]=n,t[Un]=i,e){case"dialog":Qt("cancel",t),Qt("close",t);break;case"iframe":case"object":case"embed":Qt("load",t);break;case"video":case"audio":for(e=0;e<Ql.length;e++)Qt(Ql[e],t);break;case"source":Qt("error",t);break;case"img":case"image":case"link":Qt("error",t),Qt("load",t);break;case"details":Qt("toggle",t);break;case"input":Qt("invalid",t),ex(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),eh(t);break;case"select":Qt("invalid",t);break;case"textarea":Qt("invalid",t),ix(t,i.value,i.defaultValue,i.children),eh(t)}e=i.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||i.suppressHydrationWarning===!0||$S(t.textContent,e)?(i.popover!=null&&(Qt("beforetoggle",t),Qt("toggle",t)),i.onScroll!=null&&Qt("scroll",t),i.onScrollEnd!=null&&Qt("scrollend",t),i.onClick!=null&&(t.onclick=ef),t=!0):t=!1,t||qa(n)}function Ng(n){for(wn=n.return;wn;)switch(wn.tag){case 3:case 27:Ii=!0;return;case 5:case 13:Ii=!1;return;default:wn=wn.return}}function jo(n){if(n!==wn)return!1;if(!ne)return Ng(n),ne=!0,!1;var t=!1,e;if((e=n.tag!==3&&n.tag!==27)&&((e=n.tag===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||Rp(n.type,n.memoizedProps)),e=!e),e&&(t=!0),t&&dn&&qa(n),Ng(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(J(317));t:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8)if(e=n.data,e==="/$"){if(t===0){dn=Ei(n.nextSibling);break t}t--}else e!=="$"&&e!=="$!"&&e!=="$?"||t++;n=n.nextSibling}dn=null}}else dn=wn?Ei(n.stateNode.nextSibling):null;return!0}function fc(){dn=wn=null,ne=!1}function Yl(n){xi===null?xi=[n]:xi.push(n)}var xl=Error(J(460)),Mx=Error(J(474)),np={then:function(){}};function Ug(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Nc(){}function Ex(n,t,e){switch(e=n[e],e===void 0?n.push(t):e!==t&&(t.then(Nc,Nc),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,n===xl?Error(J(483)):n;default:if(typeof t.status=="string")t.then(Nc,Nc);else{if(n=ye,n!==null&&100<n.shellSuspendCounter)throw Error(J(482));n=t,n.status="pending",n.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,n===xl?Error(J(483)):n}throw Sl=t,xl}}var Sl=null;function Og(){if(Sl===null)throw Error(J(459));var n=Sl;return Sl=null,n}var oo=null,Zl=0;function Uc(n){var t=Zl;return Zl+=1,oo===null&&(oo=[]),Ex(oo,n,t)}function Wo(n,t){t=t.props.ref,n.ref=t!==void 0?t:null}function Oc(n,t){throw t.$$typeof===nM?Error(J(525)):(n=Object.prototype.toString.call(t),Error(J(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)))}function zg(n){var t=n._init;return t(n._payload)}function wx(n){function t(p,v){if(n){var y=p.deletions;y===null?(p.deletions=[v],p.flags|=16):y.push(v)}}function e(p,v){if(!n)return null;for(;v!==null;)t(p,v),v=v.sibling;return null}function i(p){for(var v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function s(p,v){return p=ia(p,v),p.index=0,p.sibling=null,p}function a(p,v,y){return p.index=y,n?(y=p.alternate,y!==null?(y=y.index,y<v?(p.flags|=33554434,v):y):(p.flags|=33554434,v)):(p.flags|=1048576,v)}function r(p){return n&&p.alternate===null&&(p.flags|=33554434),p}function o(p,v,y,x){return v===null||v.tag!==6?(v=kf(y,p.mode,x),v.return=p,v):(v=s(v,y),v.return=p,v)}function l(p,v,y,x){var T=y.type;return T===kr?u(p,v,y.props.children,x,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ws&&zg(T)===v.type)?(v=s(v,y.props),Wo(v,y),v.return=p,v):(v=Fu(y.type,y.key,y.props,null,p.mode,x),Wo(v,y),v.return=p,v)}function c(p,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Gf(y,p.mode,x),v.return=p,v):(v=s(v,y.children||[]),v.return=p,v)}function u(p,v,y,x,T){return v===null||v.tag!==7?(v=ja(y,p.mode,x,T),v.return=p,v):(v=s(v,y),v.return=p,v)}function f(p,v,y){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=kf(""+v,p.mode,y),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cc:return y=Fu(v.type,v.key,v.props,null,p.mode,y),Wo(y,v),y.return=p,y;case ol:return v=Gf(v,p.mode,y),v.return=p,v;case Ws:var x=v._init;return v=x(v._payload),f(p,v,y)}if(cl(v)||Vo(v))return v=ja(v,p.mode,y,null),v.return=p,v;if(typeof v.then=="function")return f(p,Uc(v),y);if(v.$$typeof===_s)return f(p,zc(p,v),y);Oc(p,v)}return null}function h(p,v,y,x){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:o(p,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cc:return y.key===T?l(p,v,y,x):null;case ol:return y.key===T?c(p,v,y,x):null;case Ws:return T=y._init,y=T(y._payload),h(p,v,y,x)}if(cl(y)||Vo(y))return T!==null?null:u(p,v,y,x,null);if(typeof y.then=="function")return h(p,v,Uc(y),x);if(y.$$typeof===_s)return h(p,v,zc(p,y),x);Oc(p,y)}return null}function d(p,v,y,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return p=p.get(y)||null,o(v,p,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Cc:return p=p.get(x.key===null?y:x.key)||null,l(v,p,x,T);case ol:return p=p.get(x.key===null?y:x.key)||null,c(v,p,x,T);case Ws:var b=x._init;return x=b(x._payload),d(p,v,y,x,T)}if(cl(x)||Vo(x))return p=p.get(y)||null,u(v,p,x,T,null);if(typeof x.then=="function")return d(p,v,y,Uc(x),T);if(x.$$typeof===_s)return d(p,v,y,zc(v,x),T);Oc(v,x)}return null}function g(p,v,y,x){for(var T=null,b=null,E=v,D=v=0,M=null;E!==null&&D<y.length;D++){E.index>D?(M=E,E=null):M=E.sibling;var S=h(p,E,y[D],x);if(S===null){E===null&&(E=M);break}n&&E&&S.alternate===null&&t(p,E),v=a(S,v,D),b===null?T=S:b.sibling=S,b=S,E=M}if(D===y.length)return e(p,E),ne&&Pa(p,D),T;if(E===null){for(;D<y.length;D++)E=f(p,y[D],x),E!==null&&(v=a(E,v,D),b===null?T=E:b.sibling=E,b=E);return ne&&Pa(p,D),T}for(E=i(E);D<y.length;D++)M=d(E,p,D,y[D],x),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?D:M.key),v=a(M,v,D),b===null?T=M:b.sibling=M,b=M);return n&&E.forEach(function(L){return t(p,L)}),ne&&Pa(p,D),T}function _(p,v,y,x){if(y==null)throw Error(J(151));for(var T=null,b=null,E=v,D=v=0,M=null,S=y.next();E!==null&&!S.done;D++,S=y.next()){E.index>D?(M=E,E=null):M=E.sibling;var L=h(p,E,S.value,x);if(L===null){E===null&&(E=M);break}n&&E&&L.alternate===null&&t(p,E),v=a(L,v,D),b===null?T=L:b.sibling=L,b=L,E=M}if(S.done)return e(p,E),ne&&Pa(p,D),T;if(E===null){for(;!S.done;D++,S=y.next())S=f(p,S.value,x),S!==null&&(v=a(S,v,D),b===null?T=S:b.sibling=S,b=S);return ne&&Pa(p,D),T}for(E=i(E);!S.done;D++,S=y.next())S=d(E,p,D,S.value,x),S!==null&&(n&&S.alternate!==null&&E.delete(S.key===null?D:S.key),v=a(S,v,D),b===null?T=S:b.sibling=S,b=S);return n&&E.forEach(function(H){return t(p,H)}),ne&&Pa(p,D),T}function m(p,v,y,x){if(typeof y=="object"&&y!==null&&y.type===kr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Cc:t:{for(var T=y.key;v!==null;){if(v.key===T){if(T=y.type,T===kr){if(v.tag===7){e(p,v.sibling),x=s(v,y.props.children),x.return=p,p=x;break t}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ws&&zg(T)===v.type){e(p,v.sibling),x=s(v,y.props),Wo(x,y),x.return=p,p=x;break t}e(p,v);break}else t(p,v);v=v.sibling}y.type===kr?(x=ja(y.props.children,p.mode,x,y.key),x.return=p,p=x):(x=Fu(y.type,y.key,y.props,null,p.mode,x),Wo(x,y),x.return=p,p=x)}return r(p);case ol:t:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){e(p,v.sibling),x=s(v,y.children||[]),x.return=p,p=x;break t}else{e(p,v);break}else t(p,v);v=v.sibling}x=Gf(y,p.mode,x),x.return=p,p=x}return r(p);case Ws:return T=y._init,y=T(y._payload),m(p,v,y,x)}if(cl(y))return g(p,v,y,x);if(Vo(y)){if(T=Vo(y),typeof T!="function")throw Error(J(150));return y=T.call(y),_(p,v,y,x)}if(typeof y.then=="function")return m(p,v,Uc(y),x);if(y.$$typeof===_s)return m(p,v,zc(p,y),x);Oc(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,v!==null&&v.tag===6?(e(p,v.sibling),x=s(v,y),x.return=p,p=x):(e(p,v),x=kf(y,p.mode,x),x.return=p,p=x),r(p)):e(p,v)}return function(p,v,y,x){try{Zl=0;var T=m(p,v,y,x);return oo=null,T}catch(E){if(E===xl)throw E;var b=ci(29,E,null,p.mode);return b.lanes=x,b.return=p,b}finally{}}}var Ya=wx(!0),Tx=wx(!1),xo=qi(null),rh=qi(0);function Bg(n,t){n=Cs,Ae(rh,n),Ae(xo,t),Cs=n|t.baseLanes}function ip(){Ae(rh,Cs),Ae(xo,xo.current)}function jm(){Cs=rh.current,on(xo),on(rh)}var hi=qi(null),ji=null;function qs(n){var t=n.alternate;Ae($e,$e.current&1),Ae(hi,n),ji===null&&(t===null||xo.current!==null||t.memoizedState!==null)&&(ji=n)}function Ax(n){if(n.tag===22){if(Ae($e,$e.current),Ae(hi,n),ji===null){var t=n.alternate;t!==null&&t.memoizedState!==null&&(ji=n)}}else Ys()}function Ys(){Ae($e,$e.current),Ae(hi,hi.current)}function Ss(n){on(hi),ji===n&&(ji=null),on($e)}var $e=qi(0);function oh(n){for(var t=n;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gE=typeof AbortController<"u"?AbortController:function(){var n=[],t=this.signal={aborted:!1,addEventListener:function(e,i){n.push(i)}};this.abort=function(){t.aborted=!0,n.forEach(function(e){return e()})}},vE=Je.unstable_scheduleCallback,_E=Je.unstable_NormalPriority,Ke={$$typeof:_s,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wm(){return{controller:new gE,data:new Map,refCount:0}}function dc(n){n.refCount--,n.refCount===0&&vE(_E,function(){n.controller.abort()})}var bl=null,sp=0,So=0,lo=null;function yE(n,t){if(bl===null){var e=bl=[];sp=0,So=p0(),lo={status:"pending",value:void 0,then:function(i){e.push(i)}}}return sp++,t.then(Ig,Ig),t}function Ig(){if(--sp===0&&bl!==null){lo!==null&&(lo.status="fulfilled");var n=bl;bl=null,So=0,lo=null;for(var t=0;t<n.length;t++)(0,n[t])()}}function xE(n,t){var e=[],i={status:"pending",value:null,reason:null,then:function(s){e.push(s)}};return n.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<e.length;s++)(0,e[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<e.length;s++)(0,e[s])(void 0)}),i}var Fg=Gt.S;Gt.S=function(n,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&yE(n,t),Fg!==null&&Fg(n,t)};var Ga=qi(null);function Xm(){var n=Ga.current;return n!==null?n:ye.pooledCache}function Ou(n,t){t===null?Ae(Ga,Ga.current):Ae(Ga,t.pool)}function Cx(){var n=Xm();return n===null?null:{parent:Ke._currentValue,pool:n}}var ua=0,Yt=null,fe=null,We=null,lh=!1,co=!1,Za=!1,ch=0,Kl=0,uo=null,SE=0;function Ie(){throw Error(J(321))}function qm(n,t){if(t===null)return!1;for(var e=0;e<t.length&&e<n.length;e++)if(!Kn(n[e],t[e]))return!1;return!0}function Ym(n,t,e,i,s,a){return ua=a,Yt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gt.H=n===null||n.memoizedState===null?rr:ga,Za=!1,a=e(i,s),Za=!1,co&&(a=Dx(t,e,i,s)),Rx(n),a}function Rx(n){Gt.H=Wi;var t=fe!==null&&fe.next!==null;if(ua=0,We=fe=Yt=null,lh=!1,Kl=0,uo=null,t)throw Error(J(300));n===null||rn||(n=n.dependencies,n!==null&&fh(n)&&(rn=!0))}function Dx(n,t,e,i){Yt=n;var s=0;do{if(co&&(uo=null),Kl=0,co=!1,25<=s)throw Error(J(301));if(s+=1,We=fe=null,n.updateQueue!=null){var a=n.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Gt.H=or,a=t(e,i)}while(co);return a}function bE(){var n=Gt.H,t=n.useState()[0];return t=typeof t.then=="function"?pc(t):t,n=n.useState()[0],(fe!==null?fe.memoizedState:null)!==n&&(Yt.flags|=1024),t}function Zm(){var n=ch!==0;return ch=0,n}function Km(n,t,e){t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~e}function Qm(n){if(lh){for(n=n.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}lh=!1}ua=0,We=fe=Yt=null,co=!1,Kl=ch=0,uo=null}function Nn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Yt.memoizedState=We=n:We=We.next=n,We}function qe(){if(fe===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=fe.next;var t=We===null?Yt.memoizedState:We.next;if(t!==null)We=t,fe=n;else{if(n===null)throw Yt.alternate===null?Error(J(467)):Error(J(310));fe=n,n={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},We===null?Yt.memoizedState=We=n:We=We.next=n}return We}var Zh;Zh=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function pc(n){var t=Kl;return Kl+=1,uo===null&&(uo=[]),n=Ex(uo,n,t),t=Yt,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,Gt.H=t===null||t.memoizedState===null?rr:ga),n}function Kh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return pc(n);if(n.$$typeof===_s)return yn(n)}throw Error(J(438,String(n)))}function $m(n){var t=null,e=Yt.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var i=Yt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=Zh(),Yt.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(n),i=0;i<n;i++)e[i]=sM;return t.index++,e}function Ts(n,t){return typeof t=="function"?t(n):t}function zu(n){var t=qe();return Jm(t,fe,n)}function Jm(n,t,e){var i=n.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=e;var s=n.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=n.baseState,s===null)n.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var f=c.lane&-536870913;if(f!==c.lane?($t&f)===f:(ua&f)===f){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===So&&(u=!0);else if((ua&h)===h){c=c.next,h===So&&(u=!0);continue}else f={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Yt.lanes|=h,fa|=h;f=c.action,Za&&e(a,f),a=c.hasEagerState?c.eagerState:e(a,f)}else h={lane:f,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,Yt.lanes|=f,fa|=f;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Kn(a,n.memoizedState)&&(rn=!0,u&&(e=lo,e!==null)))throw e;n.memoizedState=a,n.baseState=r,n.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[n.memoizedState,i.dispatch]}function Lf(n){var t=qe(),e=t.queue;if(e===null)throw Error(J(311));e.lastRenderedReducer=n;var i=e.dispatch,s=e.pending,a=t.memoizedState;if(s!==null){e.pending=null;var r=s=s.next;do a=n(a,r.action),r=r.next;while(r!==s);Kn(a,t.memoizedState)||(rn=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),e.lastRenderedState=a}return[a,i]}function Lx(n,t,e){var i=Yt,s=qe(),a=ne;if(a){if(e===void 0)throw Error(J(407));e=e()}else e=t();var r=!Kn((fe||s).memoizedState,e);if(r&&(s.memoizedState=e,rn=!0),s=s.queue,t0(Ux.bind(null,i,s,n),[n]),s.getSnapshot!==t||r||We!==null&&We.memoizedState.tag&1){if(i.flags|=2048,bo(9,Nx.bind(null,i,s,e,t),{destroy:void 0},null),ye===null)throw Error(J(349));a||ua&60||Px(i,t,e)}return e}function Px(n,t,e){n.flags|=16384,n={getSnapshot:t,value:e},t=Yt.updateQueue,t===null?(t=Zh(),Yt.updateQueue=t,t.stores=[n]):(e=t.stores,e===null?t.stores=[n]:e.push(n))}function Nx(n,t,e,i){t.value=e,t.getSnapshot=i,Ox(t)&&zx(n)}function Ux(n,t,e){return e(function(){Ox(t)&&zx(n)})}function Ox(n){var t=n.getSnapshot;n=n.value;try{var e=t();return!Kn(n,e)}catch{return!0}}function zx(n){var t=ca(n,2);t!==null&&An(t,n,2)}function ap(n){var t=Nn();if(typeof n=="function"){var e=n;if(n=e(),Za){$s(!0);try{e()}finally{$s(!1)}}}return t.memoizedState=t.baseState=n,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:n},t}function Bx(n,t,e,i){return n.baseState=e,Jm(n,fe,typeof i=="function"?i:Ts)}function ME(n,t,e,i,s){if($h(n))throw Error(J(485));if(n=t.action,n!==null){var a={payload:s,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Gt.T!==null?e(!0):a.isTransition=!1,i(a),e=t.pending,e===null?(a.next=t.pending=a,Ix(t,a)):(a.next=e.next,t.pending=e.next=a)}}function Ix(n,t){var e=t.action,i=t.payload,s=n.state;if(t.isTransition){var a=Gt.T,r={};Gt.T=r;try{var o=e(s,i),l=Gt.S;l!==null&&l(r,o),Hg(n,t,o)}catch(c){rp(n,t,c)}finally{Gt.T=a}}else try{a=e(s,i),Hg(n,t,a)}catch(c){rp(n,t,c)}}function Hg(n,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(i){Vg(n,t,i)},function(i){return rp(n,t,i)}):Vg(n,t,e)}function Vg(n,t,e){t.status="fulfilled",t.value=e,Fx(t),n.state=e,t=n.pending,t!==null&&(e=t.next,e===t?n.pending=null:(e=e.next,t.next=e,Ix(n,e)))}function rp(n,t,e){var i=n.pending;if(n.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=e,Fx(t),t=t.next;while(t!==i)}n.action=null}function Fx(n){n=n.listeners;for(var t=0;t<n.length;t++)(0,n[t])()}function Hx(n,t){return t}function Vx(n,t){if(ne){var e=ye.formState;if(e!==null){t:{var i=Yt;if(ne){if(dn){e:{for(var s=dn,a=Ii;s.nodeType!==8;){if(!a){s=null;break e}if(s=Ei(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){dn=Ei(s.nextSibling),i=s.data==="F!";break t}}qa(i)}i=!1}i&&(t=e[0])}}return e=Nn(),e.memoizedState=e.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hx,lastRenderedState:t},e.queue=i,e=sS.bind(null,Yt,i),i.dispatch=e,i=ap(!1),a=s0.bind(null,Yt,!1,i.queue),i=Nn(),s={state:t,dispatch:null,action:n,pending:null},i.queue=s,e=ME.bind(null,Yt,s,a,e),s.dispatch=e,i.memoizedState=n,[t,e,!1]}function kx(n){var t=qe();return Gx(t,fe,n)}function Gx(n,t,e){t=Jm(n,t,Hx)[0],n=zu(Ts)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?pc(t):t;var i=qe(),s=i.queue,a=s.dispatch;return e!==i.memoizedState&&(Yt.flags|=2048,bo(9,EE.bind(null,s,e),{destroy:void 0},null)),[t,a,n]}function EE(n,t){n.action=t}function jx(n){var t=qe(),e=fe;if(e!==null)return Gx(t,e,n);qe(),t=t.memoizedState,e=qe();var i=e.queue.dispatch;return e.memoizedState=n,[t,i,!1]}function bo(n,t,e,i){return n={tag:n,create:t,inst:e,deps:i,next:null},t=Yt.updateQueue,t===null&&(t=Zh(),Yt.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=n.next=n:(i=e.next,e.next=n,n.next=i,t.lastEffect=n),n}function Wx(){return qe().memoizedState}function Bu(n,t,e,i){var s=Nn();Yt.flags|=n,s.memoizedState=bo(1|t,e,{destroy:void 0},i===void 0?null:i)}function Qh(n,t,e,i){var s=qe();i=i===void 0?null:i;var a=s.memoizedState.inst;fe!==null&&i!==null&&qm(i,fe.memoizedState.deps)?s.memoizedState=bo(t,e,a,i):(Yt.flags|=n,s.memoizedState=bo(1|t,e,a,i))}function kg(n,t){Bu(8390656,8,n,t)}function t0(n,t){Qh(2048,8,n,t)}function Xx(n,t){return Qh(4,2,n,t)}function qx(n,t){return Qh(4,4,n,t)}function Yx(n,t){if(typeof t=="function"){n=n();var e=t(n);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function Zx(n,t,e){e=e!=null?e.concat([n]):null,Qh(4,4,Yx.bind(null,t,n),e)}function e0(){}function Kx(n,t){var e=qe();t=t===void 0?null:t;var i=e.memoizedState;return t!==null&&qm(t,i[1])?i[0]:(e.memoizedState=[n,t],n)}function Qx(n,t){var e=qe();t=t===void 0?null:t;var i=e.memoizedState;if(t!==null&&qm(t,i[1]))return i[0];if(i=n(),Za){$s(!0);try{n()}finally{$s(!1)}}return e.memoizedState=[i,t],i}function n0(n,t,e){return e===void 0||ua&1073741824?n.memoizedState=t:(n.memoizedState=e,n=FS(),Yt.lanes|=n,fa|=n,e)}function $x(n,t,e,i){return Kn(e,t)?e:xo.current!==null?(n=n0(n,e,i),Kn(n,t)||(rn=!0),n):ua&42?(n=FS(),Yt.lanes|=n,fa|=n,t):(rn=!0,n.memoizedState=e)}function Jx(n,t,e,i,s){var a=Me.p;Me.p=a!==0&&8>a?a:8;var r=Gt.T,o={};Gt.T=o,s0(n,!1,t,e);try{var l=s(),c=Gt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=xE(l,i);Ml(n,t,u,Zn(n))}else Ml(n,t,i,Zn(n))}catch(f){Ml(n,t,{then:function(){},status:"rejected",reason:f},Zn())}finally{Me.p=a,Gt.T=r}}function wE(){}function op(n,t,e,i){if(n.tag!==5)throw Error(J(476));var s=tS(n).queue;Jx(n,s,t,Va,e===null?wE:function(){return eS(n),e(i)})}function tS(n){var t=n.memoizedState;if(t!==null)return t;t={memoizedState:Va,baseState:Va,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:Va},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:e},next:null},n.memoizedState=t,n=n.alternate,n!==null&&(n.memoizedState=t),t}function eS(n){var t=tS(n).next.queue;Ml(n,t,{},Zn())}function i0(){return yn(tc)}function nS(){return qe().memoizedState}function iS(){return qe().memoizedState}function TE(n){for(var t=n.return;t!==null;){switch(t.tag){case 24:case 3:var e=Zn();n=ea(e);var i=na(t,n,e);i!==null&&(An(i,t,e),wl(i,t,e)),t={cache:Wm()},n.payload=t;return}t=t.return}}function AE(n,t,e){var i=Zn();e={lane:i,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},$h(n)?aS(t,e):(e=Vm(n,t,e,i),e!==null&&(An(e,n,i),rS(e,t,i)))}function sS(n,t,e){var i=Zn();Ml(n,t,e,i)}function Ml(n,t,e,i){var s={lane:i,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if($h(n))aS(t,s);else{var a=n.alternate;if(n.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,e);if(s.hasEagerState=!0,s.eagerState=o,Kn(o,r))return Yh(n,t,s,0),ye===null&&qh(),!1}catch{}finally{}if(e=Vm(n,t,s,i),e!==null)return An(e,n,i),rS(e,t,i),!0}return!1}function s0(n,t,e,i){if(i={lane:2,revertLane:p0(),action:i,hasEagerState:!1,eagerState:null,next:null},$h(n)){if(t)throw Error(J(479))}else t=Vm(n,e,i,2),t!==null&&An(t,n,2)}function $h(n){var t=n.alternate;return n===Yt||t!==null&&t===Yt}function aS(n,t){co=lh=!0;var e=n.pending;e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t}function rS(n,t,e){if(e&4194176){var i=t.lanes;i&=n.pendingLanes,e|=i,t.lanes=e,Yy(n,e)}}var Wi={readContext:yn,use:Kh,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie};Wi.useCacheRefresh=Ie;Wi.useMemoCache=Ie;Wi.useHostTransitionStatus=Ie;Wi.useFormState=Ie;Wi.useActionState=Ie;Wi.useOptimistic=Ie;var rr={readContext:yn,use:Kh,useCallback:function(n,t){return Nn().memoizedState=[n,t===void 0?null:t],n},useContext:yn,useEffect:kg,useImperativeHandle:function(n,t,e){e=e!=null?e.concat([n]):null,Bu(4194308,4,Yx.bind(null,t,n),e)},useLayoutEffect:function(n,t){return Bu(4194308,4,n,t)},useInsertionEffect:function(n,t){Bu(4,2,n,t)},useMemo:function(n,t){var e=Nn();t=t===void 0?null:t;var i=n();if(Za){$s(!0);try{n()}finally{$s(!1)}}return e.memoizedState=[i,t],i},useReducer:function(n,t,e){var i=Nn();if(e!==void 0){var s=e(t);if(Za){$s(!0);try{e(t)}finally{$s(!1)}}}else s=t;return i.memoizedState=i.baseState=s,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},i.queue=n,n=n.dispatch=AE.bind(null,Yt,n),[i.memoizedState,n]},useRef:function(n){var t=Nn();return n={current:n},t.memoizedState=n},useState:function(n){n=ap(n);var t=n.queue,e=sS.bind(null,Yt,t);return t.dispatch=e,[n.memoizedState,e]},useDebugValue:e0,useDeferredValue:function(n,t){var e=Nn();return n0(e,n,t)},useTransition:function(){var n=ap(!1);return n=Jx.bind(null,Yt,n.queue,!0,!1),Nn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,t,e){var i=Yt,s=Nn();if(ne){if(e===void 0)throw Error(J(407));e=e()}else{if(e=t(),ye===null)throw Error(J(349));$t&60||Px(i,t,e)}s.memoizedState=e;var a={value:e,getSnapshot:t};return s.queue=a,kg(Ux.bind(null,i,a,n),[n]),i.flags|=2048,bo(9,Nx.bind(null,i,a,e,t),{destroy:void 0},null),e},useId:function(){var n=Nn(),t=ye.identifierPrefix;if(ne){var e=xs,i=ys;e=(i&~(1<<32-Yn(i)-1)).toString(32)+e,t=":"+t+"R"+e,e=ch++,0<e&&(t+="H"+e.toString(32)),t+=":"}else e=SE++,t=":"+t+"r"+e.toString(32)+":";return n.memoizedState=t},useCacheRefresh:function(){return Nn().memoizedState=TE.bind(null,Yt)}};rr.useMemoCache=$m;rr.useHostTransitionStatus=i0;rr.useFormState=Vx;rr.useActionState=Vx;rr.useOptimistic=function(n){var t=Nn();t.memoizedState=t.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=s0.bind(null,Yt,!0,e),e.dispatch=t,[n,t]};var ga={readContext:yn,use:Kh,useCallback:Kx,useContext:yn,useEffect:t0,useImperativeHandle:Zx,useInsertionEffect:Xx,useLayoutEffect:qx,useMemo:Qx,useReducer:zu,useRef:Wx,useState:function(){return zu(Ts)},useDebugValue:e0,useDeferredValue:function(n,t){var e=qe();return $x(e,fe.memoizedState,n,t)},useTransition:function(){var n=zu(Ts)[0],t=qe().memoizedState;return[typeof n=="boolean"?n:pc(n),t]},useSyncExternalStore:Lx,useId:nS};ga.useCacheRefresh=iS;ga.useMemoCache=$m;ga.useHostTransitionStatus=i0;ga.useFormState=kx;ga.useActionState=kx;ga.useOptimistic=function(n,t){var e=qe();return Bx(e,fe,n,t)};var or={readContext:yn,use:Kh,useCallback:Kx,useContext:yn,useEffect:t0,useImperativeHandle:Zx,useInsertionEffect:Xx,useLayoutEffect:qx,useMemo:Qx,useReducer:Lf,useRef:Wx,useState:function(){return Lf(Ts)},useDebugValue:e0,useDeferredValue:function(n,t){var e=qe();return fe===null?n0(e,n,t):$x(e,fe.memoizedState,n,t)},useTransition:function(){var n=Lf(Ts)[0],t=qe().memoizedState;return[typeof n=="boolean"?n:pc(n),t]},useSyncExternalStore:Lx,useId:nS};or.useCacheRefresh=iS;or.useMemoCache=$m;or.useHostTransitionStatus=i0;or.useFormState=jx;or.useActionState=jx;or.useOptimistic=function(n,t){var e=qe();return fe!==null?Bx(e,fe,n,t):(e.baseState=n,[n,e.queue.dispatch])};function Pf(n,t,e,i){t=n.memoizedState,e=e(i,t),e=e==null?t:Ee({},t,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var lp={isMounted:function(n){return(n=n._reactInternals)?Po(n)===n:!1},enqueueSetState:function(n,t,e){n=n._reactInternals;var i=Zn(),s=ea(i);s.payload=t,e!=null&&(s.callback=e),t=na(n,s,i),t!==null&&(An(t,n,i),wl(t,n,i))},enqueueReplaceState:function(n,t,e){n=n._reactInternals;var i=Zn(),s=ea(i);s.tag=1,s.payload=t,e!=null&&(s.callback=e),t=na(n,s,i),t!==null&&(An(t,n,i),wl(t,n,i))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var e=Zn(),i=ea(e);i.tag=2,t!=null&&(i.callback=t),t=na(n,i,e),t!==null&&(An(t,n,e),wl(t,n,e))}};function Gg(n,t,e,i,s,a,r){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!ql(e,i)||!ql(s,a):!0}function jg(n,t,e,i){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,i),t.state!==n&&lp.enqueueReplaceState(t,t.state,null)}function Ka(n,t){var e=t;if("ref"in t){e={};for(var i in t)i!=="ref"&&(e[i]=t[i])}if(n=n.defaultProps){e===t&&(e=Ee({},e));for(var s in n)e[s]===void 0&&(e[s]=n[s])}return e}var uh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function oS(n){uh(n)}function lS(n){console.error(n)}function cS(n){uh(n)}function hh(n,t){try{var e=n.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Wg(n,t,e){try{var i=n.onCaughtError;i(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function cp(n,t,e){return e=ea(e),e.tag=3,e.payload={element:null},e.callback=function(){hh(n,t)},e}function uS(n){return n=ea(n),n.tag=3,n}function hS(n,t,e,i){var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;n.payload=function(){return s(a)},n.callback=function(){Wg(t,e,i)}}var r=e.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Wg(t,e,i),typeof s!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function CE(n,t,e,i,s){if(e.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=e.alternate,t!==null&&mc(t,e,s,!0),e=hi.current,e!==null){switch(e.tag){case 13:return ji===null?Ep():e.alternate===null&&Oe===0&&(Oe=3),e.flags&=-257,e.flags|=65536,e.lanes=s,i===np?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([i]):t.add(i),Wf(n,i,s)),!1;case 22:return e.flags|=65536,i===np?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([i]):e.add(i)),Wf(n,i,s)),!1}throw Error(J(435,e.tag))}return Wf(n,i,s),Ep(),!1}if(ne)return t=hi.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==ep&&(n=Error(J(422),{cause:i}),Yl(li(n,e)))):(i!==ep&&(t=Error(J(423),{cause:i}),Yl(li(t,e))),n=n.current.alternate,n.flags|=65536,s&=-s,n.lanes|=s,i=li(i,e),s=cp(n.stateNode,i,s),If(n,s),Oe!==4&&(Oe=2)),!1;var a=Error(J(520),{cause:i});if(a=li(a,e),Rl===null?Rl=[a]:Rl.push(a),Oe!==4&&(Oe=2),t===null)return!0;i=li(i,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,n=s&-s,e.lanes|=n,n=cp(e.stateNode,i,n),If(e,n),!1;case 1:if(t=e.type,a=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(sa===null||!sa.has(a))))return e.flags|=65536,s&=-s,e.lanes|=s,s=uS(s),hS(s,n,e,i),If(e,s),!1}e=e.return}while(e!==null);return!1}var fS=Error(J(461)),rn=!1;function fn(n,t,e,i){t.child=n===null?Tx(t,null,e,i):Ya(t,n.child,e,i)}function Xg(n,t,e,i,s){e=e.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Qa(t),i=Ym(n,t,e,r,a,s),o=Zm(),n!==null&&!rn?(Km(n,t,s),As(n,t,s)):(ne&&o&&km(t),t.flags|=1,fn(n,t,i,s),t.child)}function qg(n,t,e,i,s){if(n===null){var a=e.type;return typeof a=="function"&&!c0(a)&&a.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=a,dS(n,t,a,i,s)):(n=Fu(e.type,null,i,t,t.mode,s),n.ref=t.ref,n.return=t,t.child=n)}if(a=n.child,!a0(n,s)){var r=a.memoizedProps;if(e=e.compare,e=e!==null?e:ql,e(r,i)&&n.ref===t.ref)return As(n,t,s)}return t.flags|=1,n=ia(a,i),n.ref=t.ref,n.return=t,t.child=n}function dS(n,t,e,i,s){if(n!==null){var a=n.memoizedProps;if(ql(a,i)&&n.ref===t.ref)if(rn=!1,t.pendingProps=i=a,a0(n,s))n.flags&131072&&(rn=!0);else return t.lanes=n.lanes,As(n,t,s)}return up(n,t,e,i,s)}function pS(n,t,e){var i=t.pendingProps,s=i.children,a=(t.stateNode._pendingVisibility&2)!==0,r=n!==null?n.memoizedState:null;if(El(n,t),i.mode==="hidden"||a){if(t.flags&128){if(i=r!==null?r.baseLanes|e:e,n!==null){for(s=t.child=n.child,a=0;s!==null;)a=a|s.lanes|s.childLanes,s=s.sibling;t.childLanes=a&~i}else t.childLanes=0,t.child=null;return Yg(n,t,i,e)}if(e&536870912)t.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ou(t,r!==null?r.cachePool:null),r!==null?Bg(t,r):ip(),Ax(t);else return t.lanes=t.childLanes=536870912,Yg(n,t,r!==null?r.baseLanes|e:e,e)}else r!==null?(Ou(t,r.cachePool),Bg(t,r),Ys(),t.memoizedState=null):(n!==null&&Ou(t,null),ip(),Ys());return fn(n,t,s,e),t.child}function Yg(n,t,e,i){var s=Xm();return s=s===null?null:{parent:Ke._currentValue,pool:s},t.memoizedState={baseLanes:e,cachePool:s},n!==null&&Ou(t,null),ip(),Ax(t),n!==null&&mc(n,t,i,!0),null}function El(n,t){var e=t.ref;if(e===null)n!==null&&n.ref!==null&&(t.flags|=2097664);else{if(typeof e!="function"&&typeof e!="object")throw Error(J(284));(n===null||n.ref!==e)&&(t.flags|=2097664)}}function up(n,t,e,i,s){return Qa(t),e=Ym(n,t,e,i,void 0,s),i=Zm(),n!==null&&!rn?(Km(n,t,s),As(n,t,s)):(ne&&i&&km(t),t.flags|=1,fn(n,t,e,s),t.child)}function Zg(n,t,e,i,s,a){return Qa(t),t.updateQueue=null,e=Dx(t,i,e,s),Rx(n),i=Zm(),n!==null&&!rn?(Km(n,t,a),As(n,t,a)):(ne&&i&&km(t),t.flags|=1,fn(n,t,e,a),t.child)}function Kg(n,t,e,i,s){if(Qa(t),t.stateNode===null){var a=Zr,r=e.contextType;typeof r=="object"&&r!==null&&(a=yn(r)),a=new e(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=lp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},r0(t),r=e.contextType,a.context=typeof r=="object"&&r!==null?yn(r):Zr,a.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Pf(t,e,r,i),a.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&lp.enqueueReplaceState(a,a.state,null),Al(t,i,a,s),Tl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(n===null){a=t.stateNode;var o=t.memoizedProps,l=Ka(e,o);a.props=l;var c=a.context,u=e.contextType;r=Zr,typeof u=="object"&&u!==null&&(r=yn(u));var f=e.getDerivedStateFromProps;u=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&jg(t,a,i,r),Xs=!1;var h=t.memoizedState;a.state=h,Al(t,i,a,s),Tl(),c=t.memoizedState,o||h!==c||Xs?(typeof f=="function"&&(Pf(t,e,f,i),c=t.memoizedState),(l=Xs||Gg(t,e,l,i,h,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,gp(n,t),r=t.memoizedProps,u=Ka(e,r),a.props=u,f=t.pendingProps,h=a.context,c=e.contextType,l=Zr,typeof c=="object"&&c!==null&&(l=yn(c)),o=e.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==f||h!==l)&&jg(t,a,i,l),Xs=!1,h=t.memoizedState,a.state=h,Al(t,i,a,s),Tl();var d=t.memoizedState;r!==f||h!==d||Xs||n!==null&&n.dependencies!==null&&fh(n.dependencies)?(typeof o=="function"&&(Pf(t,e,o,i),d=t.memoizedState),(u=Xs||Gg(t,e,u,i,h,d,l)||n!==null&&n.dependencies!==null&&fh(n.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===n.memoizedProps&&h===n.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&h===n.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===n.memoizedProps&&h===n.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&h===n.memoizedState||(t.flags|=1024),i=!1)}return a=i,El(n,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,e=i&&typeof e.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,n!==null&&i?(t.child=Ya(t,n.child,null,s),t.child=Ya(t,null,e,s)):fn(n,t,e,s),t.memoizedState=a.state,n=t.child):n=As(n,t,s),n}function Qg(n,t,e,i){return fc(),t.flags|=256,fn(n,t,e,i),t.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function Uf(n){return{baseLanes:n,cachePool:Cx()}}function Of(n,t,e){return n=n!==null?n.childLanes&~e:0,t&&(n|=ui),n}function mS(n,t,e){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=n!==null&&n.memoizedState===null?!1:($e.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,n===null){if(ne){if(s?qs(t):Ys(),ne){var o=dn,l;if(l=o){t:{for(l=o,o=Ii;l.nodeType!==8;){if(!o){o=null;break t}if(l=Ei(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:ka!==null?{id:ys,overflow:xs}:null,retryLane:536870912},l=ci(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,wn=t,dn=null,l=!0):l=!1}l||qa(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return o.data==="$!"?t.lanes=16:t.lanes=536870912,null;Ss(t)}return o=i.children,i=i.fallback,s?(Ys(),s=t.mode,o=fp({mode:"hidden",children:o},s),i=ja(i,s,e,null),o.return=t,i.return=t,o.sibling=i,t.child=o,s=t.child,s.memoizedState=Uf(e),s.childLanes=Of(n,r,e),t.memoizedState=Nf,i):(qs(t),hp(t,o))}if(l=n.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(qs(t),t.flags&=-257,t=zf(n,t,e)):t.memoizedState!==null?(Ys(),t.child=n.child,t.flags|=128,t=null):(Ys(),s=i.fallback,o=t.mode,i=fp({mode:"visible",children:i.children},o),s=ja(s,o,e,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,Ya(t,n.child,null,e),i=t.child,i.memoizedState=Uf(e),i.childLanes=Of(n,r,e),t.memoizedState=Nf,t=s);else if(qs(t),o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(J(419)),i.stack="",i.digest=r,Yl({value:i,source:null,stack:null}),t=zf(n,t,e)}else if(rn||mc(n,t,e,!1),r=(e&n.childLanes)!==0,rn||r){if(r=ye,r!==null){if(i=e&-e,i&42)i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=64;break;case 268435456:i=134217728;break;default:i=0}if(i=i&(r.suspendedLanes|e)?0:i,i!==0&&i!==l.retryLane)throw l.retryLane=i,ca(n,i),An(r,n,i),fS}o.data==="$?"||Ep(),t=zf(n,t,e)}else o.data==="$?"?(t.flags|=128,t.child=n.child,t=GE.bind(null,n),o._reactRetry=t,t=null):(n=l.treeContext,dn=Ei(o.nextSibling),wn=t,ne=!0,xi=null,Ii=!1,n!==null&&(ai[ri++]=ys,ai[ri++]=xs,ai[ri++]=ka,ys=n.id,xs=n.overflow,ka=t),t=hp(t,i.children),t.flags|=4096);return t}return s?(Ys(),s=i.fallback,o=t.mode,l=n.child,c=l.sibling,i=ia(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&31457280,c!==null?s=ia(c,s):(s=ja(s,o,e,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,o=n.child.memoizedState,o===null?o=Uf(e):(l=o.cachePool,l!==null?(c=Ke._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Cx(),o={baseLanes:o.baseLanes|e,cachePool:l}),s.memoizedState=o,s.childLanes=Of(n,r,e),t.memoizedState=Nf,i):(qs(t),e=n.child,n=e.sibling,e=ia(e,{mode:"visible",children:i.children}),e.return=t,e.sibling=null,n!==null&&(r=t.deletions,r===null?(t.deletions=[n],t.flags|=16):r.push(n)),t.child=e,t.memoizedState=null,e)}function hp(n,t){return t=fp({mode:"visible",children:t},n.mode),t.return=n,n.child=t}function fp(n,t){return BS(n,t,0,null)}function zf(n,t,e){return Ya(t,n.child,null,e),n=hp(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function $g(n,t,e){n.lanes|=t;var i=n.alternate;i!==null&&(i.lanes|=t),pp(n.return,t,e)}function Bf(n,t,e,i,s){var a=n.memoizedState;a===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:e,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=e,a.tailMode=s)}function gS(n,t,e){var i=t.pendingProps,s=i.revealOrder,a=i.tail;if(fn(n,t,i.children,e),i=$e.current,i&2)i=i&1|2,t.flags|=128;else{if(n!==null&&n.flags&128)t:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$g(n,e,t);else if(n.tag===19)$g(n,e,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}switch(Ae($e,i),s){case"forwards":for(e=t.child,s=null;e!==null;)n=e.alternate,n!==null&&oh(n)===null&&(s=e),e=e.sibling;e=s,e===null?(s=t.child,t.child=null):(s=e.sibling,e.sibling=null),Bf(t,!1,s,e,a);break;case"backwards":for(e=null,s=t.child,t.child=null;s!==null;){if(n=s.alternate,n!==null&&oh(n)===null){t.child=s;break}n=s.sibling,s.sibling=e,e=s,s=n}Bf(t,!0,e,null,a);break;case"together":Bf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function As(n,t,e){if(n!==null&&(t.dependencies=n.dependencies),fa|=t.lanes,!(e&t.childLanes))if(n!==null){if(mc(n,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(n!==null&&t.child!==n.child)throw Error(J(153));if(t.child!==null){for(n=t.child,e=ia(n,n.pendingProps),t.child=e,e.return=t;n.sibling!==null;)n=n.sibling,e=e.sibling=ia(n,n.pendingProps),e.return=t;e.sibling=null}return t.child}function a0(n,t){return n.lanes&t?!0:(n=n.dependencies,!!(n!==null&&fh(n)))}function RE(n,t,e){switch(t.tag){case 3:$u(t,t.stateNode.containerInfo),Zs(t,Ke,n.memoizedState.cache),fc();break;case 27:case 5:Xd(t);break;case 4:$u(t,t.stateNode.containerInfo);break;case 10:Zs(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(qs(t),t.flags|=128,null):e&t.child.childLanes?mS(n,t,e):(qs(t),n=As(n,t,e),n!==null?n.sibling:null);qs(t);break;case 19:var s=(n.flags&128)!==0;if(i=(e&t.childLanes)!==0,i||(mc(n,t,e,!1),i=(e&t.childLanes)!==0),s){if(i)return gS(n,t,e);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ae($e,$e.current),i)break;return null;case 22:case 23:return t.lanes=0,pS(n,t,e);case 24:Zs(t,Ke,n.memoizedState.cache)}return As(n,t,e)}function vS(n,t,e){if(n!==null)if(n.memoizedProps!==t.pendingProps)rn=!0;else{if(!a0(n,e)&&!(t.flags&128))return rn=!1,RE(n,t,e);rn=!!(n.flags&131072)}else rn=!1,ne&&t.flags&1048576&&bx(t,ah,t.index);switch(t.lanes=0,t.tag){case 16:t:{n=t.pendingProps;var i=t.elementType,s=i._init;if(i=s(i._payload),t.type=i,typeof i=="function")c0(i)?(n=Ka(i,n),t.tag=1,t=Kg(null,t,i,n,e)):(t.tag=0,t=up(null,t,i,n,e));else{if(i!=null){if(s=i.$$typeof,s===Dm){t.tag=11,t=Xg(null,t,i,n,e);break t}else if(s===Lm){t.tag=14,t=qg(null,t,i,n,e);break t}}throw t=jd(i)||i,Error(J(306,t,""))}}return t;case 0:return up(n,t,t.type,t.pendingProps,e);case 1:return i=t.type,s=Ka(i,t.pendingProps),Kg(n,t,i,s,e);case 3:t:{if($u(t,t.stateNode.containerInfo),n===null)throw Error(J(387));var a=t.pendingProps;s=t.memoizedState,i=s.element,gp(n,t),Al(t,a,null,e);var r=t.memoizedState;if(a=r.cache,Zs(t,Ke,a),a!==s.cache&&mp(t,[Ke],e,!0),Tl(),a=r.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Qg(n,t,a,e);break t}else if(a!==i){i=li(Error(J(424)),t),Yl(i),t=Qg(n,t,a,e);break t}else for(dn=Ei(t.stateNode.containerInfo.firstChild),wn=t,ne=!0,xi=null,Ii=!0,e=Tx(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(fc(),a===i){t=As(n,t,e);break t}fn(n,t,a,e)}t=t.child}return t;case 26:return El(n,t),n===null?(e=gv(t.type,null,t.pendingProps,null))?t.memoizedState=e:ne||(e=t.type,n=t.pendingProps,i=yh(ta.current).createElement(e),i[_n]=t,i[Un]=n,pn(i,e,n),an(i),t.stateNode=i):t.memoizedState=gv(t.type,n.memoizedProps,t.pendingProps,n.memoizedState),null;case 27:return Xd(t),n===null&&ne&&(i=t.stateNode=e1(t.type,t.pendingProps,ta.current),wn=t,Ii=!0,dn=Ei(i.firstChild)),i=t.pendingProps.children,n!==null||ne?fn(n,t,i,e):t.child=Ya(t,null,i,e),El(n,t),t.child;case 5:return n===null&&ne&&((s=i=dn)&&(i=aw(i,t.type,t.pendingProps,Ii),i!==null?(t.stateNode=i,wn=t,dn=Ei(i.firstChild),Ii=!1,s=!0):s=!1),s||qa(t)),Xd(t),s=t.type,a=t.pendingProps,r=n!==null?n.memoizedProps:null,i=a.children,Rp(s,a)?i=null:r!==null&&Rp(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Ym(n,t,bE,null,null,e),tc._currentValue=s),El(n,t),fn(n,t,i,e),t.child;case 6:return n===null&&ne&&((n=e=dn)&&(e=rw(e,t.pendingProps,Ii),e!==null?(t.stateNode=e,wn=t,dn=null,n=!0):n=!1),n||qa(t)),null;case 13:return mS(n,t,e);case 4:return $u(t,t.stateNode.containerInfo),i=t.pendingProps,n===null?t.child=Ya(t,null,i,e):fn(n,t,i,e),t.child;case 11:return Xg(n,t,t.type,t.pendingProps,e);case 7:return fn(n,t,t.pendingProps,e),t.child;case 8:return fn(n,t,t.pendingProps.children,e),t.child;case 12:return fn(n,t,t.pendingProps.children,e),t.child;case 10:return i=t.pendingProps,Zs(t,t.type,i.value),fn(n,t,i.children,e),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Qa(t),s=yn(s),i=i(s),t.flags|=1,fn(n,t,i,e),t.child;case 14:return qg(n,t,t.type,t.pendingProps,e);case 15:return dS(n,t,t.type,t.pendingProps,e);case 19:return gS(n,t,e);case 22:return pS(n,t,e);case 24:return Qa(t),i=yn(Ke),n===null?(s=Xm(),s===null&&(s=ye,a=Wm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=e),s=a),t.memoizedState={parent:i,cache:s},r0(t),Zs(t,Ke,s)):(n.lanes&e&&(gp(n,t),Al(t,null,null,e),Tl()),s=n.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Zs(t,Ke,i)):(i=a.cache,Zs(t,Ke,i),i!==s.cache&&mp(t,[Ke],e,!0))),fn(n,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}var dp=qi(null),lr=null,bs=null;function Zs(n,t,e){Ae(dp,t._currentValue),t._currentValue=e}function Es(n){n._currentValue=dp.current,on(dp)}function pp(n,t,e){for(;n!==null;){var i=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),n===e)break;n=n.return}}function mp(n,t,e,i){var s=n.child;for(s!==null&&(s.return=n);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=e,o=a.alternate,o!==null&&(o.lanes|=e),pp(a.return,e,n),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(J(341));r.lanes|=e,a=r.alternate,a!==null&&(a.lanes|=e),pp(r,e,n),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===n){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function mc(n,t,e,i){n=null;for(var s=t,a=!1;s!==null;){if(!a){if(s.flags&524288)a=!0;else if(s.flags&262144)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=s.type;Kn(s.pendingProps.value,r.value)||(n!==null?n.push(o):n=[o])}}else if(s===Qu.current){if(r=s.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(n!==null?n.push(tc):n=[tc])}s=s.return}n!==null&&mp(t,n,e,i),t.flags|=262144}function fh(n){for(n=n.firstContext;n!==null;){if(!Kn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Qa(n){lr=n,bs=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function yn(n){return _S(lr,n)}function zc(n,t){return lr===null&&Qa(n),_S(n,t)}function _S(n,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},bs===null){if(n===null)throw Error(J(308));bs=t,n.dependencies={lanes:0,firstContext:t},n.flags|=524288}else bs=bs.next=t;return e}var Xs=!1;function r0(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gp(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ea(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function na(n,t,e){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,De&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=ih(n),Sx(n,null,e),t}return Yh(n,i,t,e),ih(n)}function wl(n,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194176)!==0)){var i=t.lanes;i&=n.pendingLanes,e|=i,t.lanes=e,Yy(n,e)}}function If(n,t){var e=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,e===i)){var s=null,a=null;if(e=e.firstBaseUpdate,e!==null){do{var r={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,e=e.next}while(e!==null);a===null?s=a=t:a=a.next=t}else s=a=t;e={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=t:n.next=t,e.lastBaseUpdate=t}var vp=!1;function Tl(){if(vp){var n=lo;if(n!==null)throw n}}function Al(n,t,e,i){vp=!1;var s=n.updateQueue;Xs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var f=s.baseState;r=0,u=c=l=null,o=a;do{var h=o.lane&-536870913,d=h!==o.lane;if(d?($t&h)===h:(i&h)===h){h!==0&&h===So&&(vp=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=n,_=o;h=t;var m=e;switch(_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(m,f,h);break t}f=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(m,f,h):g,h==null)break t;f=Ee({},f,h);break t;case 2:Xs=!0}}h=o.callback,h!==null&&(n.flags|=64,d&&(n.flags|=8192),d=s.callbacks,d===null?s.callbacks=[h]:d.push(h))}else d={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=d,l=f):u=u.next=d,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);u===null&&(l=f),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),fa|=r,n.lanes=r,n.memoizedState=f}}function yS(n,t){if(typeof n!="function")throw Error(J(191,n));n.call(t)}function xS(n,t){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)yS(e[n],t)}function gc(n,t){try{var e=t.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var s=i.next;e=s;do{if((e.tag&n)===n){i=void 0;var a=e.create,r=e.inst;i=a(),r.destroy=i}e=e.next}while(e!==s)}}catch(o){pe(t,t.return,o)}}function ha(n,t,e){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&n)===n){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=e;try{o()}catch(c){pe(s,l,c)}}}i=i.next}while(i!==a)}}catch(c){pe(t,t.return,c)}}function SS(n){var t=n.updateQueue;if(t!==null){var e=n.stateNode;try{xS(t,e)}catch(i){pe(n,n.return,i)}}}function bS(n,t,e){e.props=Ka(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(i){pe(n,t,i)}}function Ia(n,t){try{var e=n.ref;if(e!==null){var i=n.stateNode;switch(n.tag){case 26:case 27:case 5:var s=i;break;default:s=i}typeof e=="function"?n.refCleanup=e(s):e.current=s}}catch(a){pe(n,t,a)}}function jn(n,t){var e=n.ref,i=n.refCleanup;if(e!==null)if(typeof i=="function")try{i()}catch(s){pe(n,t,s)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(s){pe(n,t,s)}else e.current=null}function MS(n){var t=n.type,e=n.memoizedProps,i=n.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&i.focus();break t;case"img":e.src?i.src=e.src:e.srcSet&&(i.srcset=e.srcSet)}}catch(s){pe(n,n.return,s)}}function Jg(n,t,e){try{var i=n.stateNode;tw(i,n.type,e,t),i[Un]=t}catch(s){pe(n,n.return,s)}}function ES(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function Ff(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||ES(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _p(n,t,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,t?e.nodeType===8?e.parentNode.insertBefore(n,t):e.insertBefore(n,t):(e.nodeType===8?(t=e.parentNode,t.insertBefore(n,e)):(t=e,t.appendChild(n)),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=ef));else if(i!==4&&i!==27&&(n=n.child,n!==null))for(_p(n,t,e),n=n.sibling;n!==null;)_p(n,t,e),n=n.sibling}function dh(n,t,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,t?e.insertBefore(n,t):e.appendChild(n);else if(i!==4&&i!==27&&(n=n.child,n!==null))for(dh(n,t,e),n=n.sibling;n!==null;)dh(n,t,e),n=n.sibling}var ds=!1,Ue=!1,Hf=!1,tv=typeof WeakSet=="function"?WeakSet:Set,sn=null,ev=!1;function DE(n,t){if(n=n.containerInfo,Ap=Mh,n=px(n),Fm(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else t:{e=(e=n.ownerDocument)&&e.defaultView||window;var i=e.getSelection&&e.getSelection();if(i&&i.rangeCount!==0){e=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{e.nodeType,a.nodeType}catch{e=null;break t}var r=0,o=-1,l=-1,c=0,u=0,f=n,h=null;e:for(;;){for(var d;f!==e||s!==0&&f.nodeType!==3||(o=r+s),f!==a||i!==0&&f.nodeType!==3||(l=r+i),f.nodeType===3&&(r+=f.nodeValue.length),(d=f.firstChild)!==null;)h=f,f=d;for(;;){if(f===n)break e;if(h===e&&++c===s&&(o=r),h===a&&++u===i&&(l=r),(d=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=d}e=o===-1||l===-1?null:{start:o,end:l}}else e=null}e=e||{start:0,end:0}}else e=null;for(Cp={focusedElem:n,selectionRange:e},Mh=!1,sn=t;sn!==null;)if(t=sn,n=t.child,(t.subtreeFlags&1028)!==0&&n!==null)n.return=t,sn=n;else for(;sn!==null;){switch(t=sn,a=t.alternate,n=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(n&1024&&a!==null){n=void 0,e=t,s=a.memoizedProps,a=a.memoizedState,i=e.stateNode;try{var g=Ka(e.type,s,e.elementType===e.type);n=i.getSnapshotBeforeUpdate(g,a),i.__reactInternalSnapshotBeforeUpdate=n}catch(_){pe(e,e.return,_)}}break;case 3:if(n&1024){if(n=t.stateNode.containerInfo,e=n.nodeType,e===9)Dp(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Dp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(n&1024)throw Error(J(163))}if(n=t.sibling,n!==null){n.return=t.return,sn=n;break}sn=t.return}return g=ev,ev=!1,g}function wS(n,t,e){var i=e.flags;switch(e.tag){case 0:case 11:case 15:$i(n,e),i&4&&gc(5,e);break;case 1:if($i(n,e),i&4)if(n=e.stateNode,t===null)try{n.componentDidMount()}catch(o){pe(e,e.return,o)}else{var s=Ka(e.type,t.memoizedProps);t=t.memoizedState;try{n.componentDidUpdate(s,t,n.__reactInternalSnapshotBeforeUpdate)}catch(o){pe(e,e.return,o)}}i&64&&SS(e),i&512&&Ia(e,e.return);break;case 3:if($i(n,e),i&64&&(i=e.updateQueue,i!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{xS(i,n)}catch(o){pe(e,e.return,o)}}break;case 26:$i(n,e),i&512&&Ia(e,e.return);break;case 27:case 5:$i(n,e),t===null&&i&4&&MS(e),i&512&&Ia(e,e.return);break;case 12:$i(n,e);break;case 13:$i(n,e),i&4&&CS(n,e);break;case 22:if(s=e.memoizedState!==null||ds,!s){t=t!==null&&t.memoizedState!==null||Ue;var a=ds,r=Ue;ds=s,(Ue=t)&&!r?js(n,e,(e.subtreeFlags&8772)!==0):$i(n,e),ds=a,Ue=r}i&512&&(e.memoizedProps.mode==="manual"?Ia(e,e.return):jn(e,e.return));break;default:$i(n,e)}}function TS(n){var t=n.alternate;t!==null&&(n.alternate=null,TS(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&Nm(t)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ge=null,kn=!1;function Qi(n,t,e){for(e=e.child;e!==null;)AS(n,t,e),e=e.sibling}function AS(n,t,e){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(lc,e)}catch{}switch(e.tag){case 26:Ue||jn(e,t),Qi(n,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Ue||jn(e,t);var i=Ge,s=kn;for(Ge=e.stateNode,Qi(n,t,e),e=e.stateNode,t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nm(e),Ge=i,kn=s;break;case 5:Ue||jn(e,t);case 6:s=Ge;var a=kn;if(Ge=null,Qi(n,t,e),Ge=s,kn=a,Ge!==null)if(kn)try{n=Ge,i=e.stateNode,n.nodeType===8?n.parentNode.removeChild(i):n.removeChild(i)}catch(r){pe(e,t,r)}else try{Ge.removeChild(e.stateNode)}catch(r){pe(e,t,r)}break;case 18:Ge!==null&&(kn?(t=Ge,e=e.stateNode,t.nodeType===8?$f(t.parentNode,e):t.nodeType===1&&$f(t,e),ic(t)):$f(Ge,e.stateNode));break;case 4:i=Ge,s=kn,Ge=e.stateNode.containerInfo,kn=!0,Qi(n,t,e),Ge=i,kn=s;break;case 0:case 11:case 14:case 15:Ue||ha(2,e,t),Ue||ha(4,e,t),Qi(n,t,e);break;case 1:Ue||(jn(e,t),i=e.stateNode,typeof i.componentWillUnmount=="function"&&bS(e,t,i)),Qi(n,t,e);break;case 21:Qi(n,t,e);break;case 22:Ue||jn(e,t),Ue=(i=Ue)||e.memoizedState!==null,Qi(n,t,e),Ue=i;break;default:Qi(n,t,e)}}function CS(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ic(n)}catch(e){pe(t,t.return,e)}}function LE(n){switch(n.tag){case 13:case 19:var t=n.stateNode;return t===null&&(t=n.stateNode=new tv),t;case 22:return n=n.stateNode,t=n._retryCache,t===null&&(t=n._retryCache=new tv),t;default:throw Error(J(435,n.tag))}}function Vf(n,t){var e=LE(n);t.forEach(function(i){var s=jE.bind(null,n,i);e.has(i)||(e.add(i),i.then(s,s))})}function Jn(n,t){var e=t.deletions;if(e!==null)for(var i=0;i<e.length;i++){var s=e[i],a=n,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:case 5:Ge=o.stateNode,kn=!1;break t;case 3:Ge=o.stateNode.containerInfo,kn=!0;break t;case 4:Ge=o.stateNode.containerInfo,kn=!0;break t}o=o.return}if(Ge===null)throw Error(J(160));AS(a,r,s),Ge=null,kn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)RS(t,n),t=t.sibling}var _i=null;function RS(n,t){var e=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Jn(t,n),ti(n),i&4&&(ha(3,n,n.return),gc(3,n),ha(5,n,n.return));break;case 1:Jn(t,n),ti(n),i&512&&(Ue||e===null||jn(e,e.return)),i&64&&ds&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?i:e.concat(i))));break;case 26:var s=_i;if(Jn(t,n),ti(n),i&512&&(Ue||e===null||jn(e,e.return)),i&4){var a=e!==null?e.memoizedState:null;if(i=n.memoizedState,e===null)if(i===null)if(n.stateNode===null){t:{i=n.type,e=n.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[jl]||a[_n]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),pn(a,i,e),a[_n]=n,an(a),i=a;break t;case"link":var r=_v("link","href",s).get(i+(e.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(e.href==null?null:e.href)&&a.getAttribute("rel")===(e.rel==null?null:e.rel)&&a.getAttribute("title")===(e.title==null?null:e.title)&&a.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),pn(a,i,e),s.head.appendChild(a);break;case"meta":if(r=_v("meta","content",s).get(i+(e.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(e.content==null?null:""+e.content)&&a.getAttribute("name")===(e.name==null?null:e.name)&&a.getAttribute("property")===(e.property==null?null:e.property)&&a.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&a.getAttribute("charset")===(e.charSet==null?null:e.charSet)){r.splice(o,1);break e}}a=s.createElement(i),pn(a,i,e),s.head.appendChild(a);break;default:throw Error(J(468,i))}a[_n]=n,an(a),i=a}n.stateNode=i}else yv(s,n.type,n.stateNode);else n.stateNode=vv(s,i,n.memoizedProps);else a!==i?(a===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):a.count--,i===null?yv(s,n.type,n.stateNode):vv(s,i,n.memoizedProps)):i===null&&n.stateNode!==null&&Jg(n,n.memoizedProps,e.memoizedProps)}break;case 27:if(i&4&&n.alternate===null){s=n.stateNode,a=n.memoizedProps;try{for(var l=s.firstChild;l;){var c=l.nextSibling,u=l.nodeName;l[jl]||u==="HEAD"||u==="BODY"||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||s.removeChild(l),l=c}for(var f=n.type,h=s.attributes;h.length;)s.removeAttributeNode(h[0]);pn(s,f,a),s[_n]=n,s[Un]=a}catch(g){pe(n,n.return,g)}}case 5:if(Jn(t,n),ti(n),i&512&&(Ue||e===null||jn(e,e.return)),n.flags&32){s=n.stateNode;try{yo(s,"")}catch(g){pe(n,n.return,g)}}i&4&&n.stateNode!=null&&(s=n.memoizedProps,Jg(n,s,e!==null?e.memoizedProps:s)),i&1024&&(Hf=!0);break;case 6:if(Jn(t,n),ti(n),i&4){if(n.stateNode===null)throw Error(J(162));i=n.memoizedProps,e=n.stateNode;try{e.nodeValue=i}catch(g){pe(n,n.return,g)}}break;case 3:if(Vu=null,s=_i,_i=xh(t.containerInfo),Jn(t,n),_i=s,ti(n),i&4&&e!==null&&e.memoizedState.isDehydrated)try{ic(t.containerInfo)}catch(g){pe(n,n.return,g)}Hf&&(Hf=!1,DS(n));break;case 4:i=_i,_i=xh(n.stateNode.containerInfo),Jn(t,n),ti(n),_i=i;break;case 12:Jn(t,n),ti(n);break;case 13:Jn(t,n),ti(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(f0=Gi()),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Vf(n,i)));break;case 22:if(i&512&&(Ue||e===null||jn(e,e.return)),l=n.memoizedState!==null,c=e!==null&&e.memoizedState!==null,u=ds,f=Ue,ds=u||l,Ue=f||c,Jn(t,n),Ue=f,ds=u,ti(n),t=n.stateNode,t._current=n,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,i&8192&&(t._visibility=l?t._visibility&-2:t._visibility|1,l&&(t=ds||Ue,e===null||c||t||zr(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))t:for(e=null,t=n;;){if(t.tag===5||t.tag===26||t.tag===27){if(e===null){c=e=t;try{if(s=c.stateNode,l)a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{r=c.stateNode,o=c.memoizedProps.style;var d=o!=null&&o.hasOwnProperty("display")?o.display:null;r.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(g){pe(c,c.return,g)}}}else if(t.tag===6){if(e===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(g){pe(c,c.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===n)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=n.updateQueue,i!==null&&(e=i.retryQueue,e!==null&&(i.retryQueue=null,Vf(n,e))));break;case 19:Jn(t,n),ti(n),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Vf(n,i)));break;case 21:break;default:Jn(t,n),ti(n)}}function ti(n){var t=n.flags;if(t&2){try{if(n.tag!==27){t:{for(var e=n.return;e!==null;){if(ES(e)){var i=e;break t}e=e.return}throw Error(J(160))}switch(i.tag){case 27:var s=i.stateNode,a=Ff(n);dh(n,a,s);break;case 5:var r=i.stateNode;i.flags&32&&(yo(r,""),i.flags&=-33);var o=Ff(n);dh(n,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,c=Ff(n);_p(n,c,l);break;default:throw Error(J(161))}}}catch(u){pe(n,n.return,u)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function DS(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var t=n;DS(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),n=n.sibling}}function $i(n,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wS(n,t.alternate,t),t=t.sibling}function zr(n){for(n=n.child;n!==null;){var t=n;switch(t.tag){case 0:case 11:case 14:case 15:ha(4,t,t.return),zr(t);break;case 1:jn(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&bS(t,t.return,e),zr(t);break;case 26:case 27:case 5:jn(t,t.return),zr(t);break;case 22:jn(t,t.return),t.memoizedState===null&&zr(t);break;default:zr(t)}n=n.sibling}}function js(n,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=n,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:js(s,a,e),gc(4,a);break;case 1:if(js(s,a,e),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){pe(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)yS(l[s],o)}catch(c){pe(i,i.return,c)}}e&&r&64&&SS(a),Ia(a,a.return);break;case 26:case 27:case 5:js(s,a,e),e&&i===null&&r&4&&MS(a),Ia(a,a.return);break;case 12:js(s,a,e);break;case 13:js(s,a,e),e&&r&4&&CS(s,a);break;case 22:a.memoizedState===null&&js(s,a,e),Ia(a,a.return);break;default:js(s,a,e)}t=t.sibling}}function o0(n,t){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&dc(e))}function l0(n,t){n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&dc(n))}function Os(n,t,e,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)LS(n,t,e,i),t=t.sibling}function LS(n,t,e,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Os(n,t,e,i),s&2048&&gc(9,t);break;case 3:Os(n,t,e,i),s&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&dc(n)));break;case 12:if(s&2048){Os(n,t,e,i),n=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(l){pe(t,t.return,l)}}else Os(n,t,e,i);break;case 23:break;case 22:a=t.stateNode,t.memoizedState!==null?a._visibility&4?Os(n,t,e,i):Cl(n,t):a._visibility&4?Os(n,t,e,i):(a._visibility|=4,Br(n,t,e,i,(t.subtreeFlags&10256)!==0)),s&2048&&o0(t.alternate,t);break;case 24:Os(n,t,e,i),s&2048&&l0(t.alternate,t);break;default:Os(n,t,e,i)}}function Br(n,t,e,i,s){for(s=s&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var a=n,r=t,o=e,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Br(a,r,o,l,s),gc(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&4?Br(a,r,o,l,s):Cl(a,r):(u._visibility|=4,Br(a,r,o,l,s)),s&&c&2048&&o0(r.alternate,r);break;case 24:Br(a,r,o,l,s),s&&c&2048&&l0(r.alternate,r);break;default:Br(a,r,o,l,s)}t=t.sibling}}function Cl(n,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=n,i=t,s=i.flags;switch(i.tag){case 22:Cl(e,i),s&2048&&o0(i.alternate,i);break;case 24:Cl(e,i),s&2048&&l0(i.alternate,i);break;default:Cl(e,i)}t=t.sibling}}var hl=8192;function dr(n){if(n.subtreeFlags&hl)for(n=n.child;n!==null;)PS(n),n=n.sibling}function PS(n){switch(n.tag){case 26:dr(n),n.flags&hl&&n.memoizedState!==null&&yw(_i,n.memoizedState,n.memoizedProps);break;case 5:dr(n);break;case 3:case 4:var t=_i;_i=xh(n.stateNode.containerInfo),dr(n),_i=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=hl,hl=16777216,dr(n),hl=t):dr(n));break;default:dr(n)}}function NS(n){var t=n.alternate;if(t!==null&&(n=t.child,n!==null)){t.child=null;do t=n.sibling,n.sibling=null,n=t;while(n!==null)}}function Xo(n){var t=n.deletions;if(n.flags&16){if(t!==null)for(var e=0;e<t.length;e++){var i=t[e];sn=i,OS(i,n)}NS(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)US(n),n=n.sibling}function US(n){switch(n.tag){case 0:case 11:case 15:Xo(n),n.flags&2048&&ha(9,n,n.return);break;case 3:Xo(n);break;case 12:Xo(n);break;case 22:var t=n.stateNode;n.memoizedState!==null&&t._visibility&4&&(n.return===null||n.return.tag!==13)?(t._visibility&=-5,Iu(n)):Xo(n);break;default:Xo(n)}}function Iu(n){var t=n.deletions;if(n.flags&16){if(t!==null)for(var e=0;e<t.length;e++){var i=t[e];sn=i,OS(i,n)}NS(n)}for(n=n.child;n!==null;){switch(t=n,t.tag){case 0:case 11:case 15:ha(8,t,t.return),Iu(t);break;case 22:e=t.stateNode,e._visibility&4&&(e._visibility&=-5,Iu(t));break;default:Iu(t)}n=n.sibling}}function OS(n,t){for(;sn!==null;){var e=sn;switch(e.tag){case 0:case 11:case 15:ha(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var i=e.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:dc(e.memoizedState.cache)}if(i=e.child,i!==null)i.return=e,sn=i;else t:for(e=n;sn!==null;){i=sn;var s=i.sibling,a=i.return;if(TS(i),i===e){sn=null;break t}if(s!==null){s.return=a,sn=s;break t}sn=a}}}function PE(n,t,e,i){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(n,t,e,i){return new PE(n,t,e,i)}function c0(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ia(n,t){var e=n.alternate;return e===null?(e=ci(n.tag,t,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=t,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&31457280,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function zS(n,t){n.flags&=31457282;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n}function Fu(n,t,e,i,s,a){var r=0;if(i=n,typeof n=="function")c0(n)&&(r=1);else if(typeof n=="string")r=vw(n,e,ki.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case kr:return ja(e.children,s,a,t);case By:r=8,s|=24;break;case Vd:return n=ci(12,e,t,s|2),n.elementType=Vd,n.lanes=a,n;case kd:return n=ci(13,e,t,s),n.elementType=kd,n.lanes=a,n;case Gd:return n=ci(19,e,t,s),n.elementType=Gd,n.lanes=a,n;case Fy:return BS(e,s,a,t);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case iM:case _s:r=10;break t;case Iy:r=9;break t;case Dm:r=11;break t;case Lm:r=14;break t;case Ws:r=16,i=null;break t}r=29,e=Error(J(130,n===null?"null":typeof n,"")),i=null}return t=ci(r,e,t,s),t.elementType=n,t.type=i,t.lanes=a,t}function ja(n,t,e,i){return n=ci(7,n,i,t),n.lanes=e,n}function BS(n,t,e,i){n=ci(22,n,i,t),n.elementType=Fy,n.lanes=e;var s={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var a=s._current;if(a===null)throw Error(J(456));if(!(s._pendingVisibility&2)){var r=ca(a,2);r!==null&&(s._pendingVisibility|=2,An(r,a,2))}},attach:function(){var a=s._current;if(a===null)throw Error(J(456));if(s._pendingVisibility&2){var r=ca(a,2);r!==null&&(s._pendingVisibility&=-3,An(r,a,2))}}};return n.stateNode=s,n}function kf(n,t,e){return n=ci(6,n,null,t),n.lanes=e,n}function Gf(n,t,e){return t=ci(4,n.children!==null?n.children:[],n.key,t),t.lanes=e,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}function Ji(n){n.flags|=4}function nv(n,t){if(t.type!=="stylesheet"||t.state.loading&4)n.flags&=-16777217;else if(n.flags|=16777216,!s1(t)){if(t=hi.current,t!==null&&(($t&4194176)===$t?ji!==null:($t&62914560)!==$t&&!($t&536870912)||t!==ji))throw Sl=np,Mx;n.flags|=8192}}function Bc(n,t){t!==null&&(n.flags|=4),n.flags&16384&&(t=n.tag!==22?Xy():536870912,n.lanes|=t,Mo|=t)}function qo(n,t){if(!ne)switch(n.tailMode){case"hidden":t=n.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Ce(n){var t=n.alternate!==null&&n.alternate.child===n.child,e=0,i=0;if(t)for(var s=n.child;s!==null;)e|=s.lanes|s.childLanes,i|=s.subtreeFlags&31457280,i|=s.flags&31457280,s.return=n,s=s.sibling;else for(s=n.child;s!==null;)e|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=n,s=s.sibling;return n.subtreeFlags|=i,n.childLanes=e,t}function NE(n,t,e){var i=t.pendingProps;switch(Gm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return e=t.stateNode,i=null,n!==null&&(i=n.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Es(Ke),vo(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(jo(t)?Ji(t):n===null||n.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xi!==null&&(Mp(xi),xi=null))),Ce(t),null;case 26:return e=t.memoizedState,n===null?(Ji(t),e!==null?(Ce(t),nv(t,e)):(Ce(t),t.flags&=-16777217)):e?e!==n.memoizedState?(Ji(t),Ce(t),nv(t,e)):(Ce(t),t.flags&=-16777217):(n.memoizedProps!==i&&Ji(t),Ce(t),t.flags&=-16777217),null;case 27:Ju(t),e=ta.current;var s=t.type;if(n!==null&&t.stateNode!=null)n.memoizedProps!==i&&Ji(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Ce(t),null}n=ki.current,jo(t)?Pg(t):(n=e1(s,i,e),t.stateNode=n,Ji(t))}return Ce(t),null;case 5:if(Ju(t),e=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==i&&Ji(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Ce(t),null}if(n=ki.current,jo(t))Pg(t);else{switch(s=yh(ta.current),n){case 1:n=s.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:n=s.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":n=s.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":n=s.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?n.multiple=!0:i.size&&(n.size=i.size);break;default:n=typeof i.is=="string"?s.createElement(e,{is:i.is}):s.createElement(e)}}n[_n]=t,n[Un]=i;t:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break t;for(;s.sibling===null;){if(s.return===null||s.return===t)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=n;t:switch(pn(n,e,i),e){case"button":case"input":case"select":case"textarea":n=!!i.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Ji(t)}}return Ce(t),t.flags&=-16777217,null;case 6:if(n&&t.stateNode!=null)n.memoizedProps!==i&&Ji(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(n=ta.current,jo(t)){if(n=t.stateNode,e=t.memoizedProps,i=null,s=wn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}n[_n]=t,n=!!(n.nodeValue===e||i!==null&&i.suppressHydrationWarning===!0||$S(n.nodeValue,e)),n||qa(t)}else n=yh(n).createTextNode(i),n[_n]=t,t.stateNode=n}return Ce(t),null;case 13:if(i=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(s=jo(t),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(J(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[_n]=t}else fc(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),s=!1}else xi!==null&&(Mp(xi),xi=null),s=!0;if(!s)return t.flags&256?(Ss(t),t):(Ss(t),null)}if(Ss(t),t.flags&128)return t.lanes=e,t;if(e=i!==null,n=n!==null&&n.memoizedState!==null,e){i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool);var a=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)}return e!==n&&e&&(t.child.flags|=8192),Bc(t,t.updateQueue),Ce(t),null;case 4:return vo(),n===null&&m0(t.stateNode.containerInfo),Ce(t),null;case 10:return Es(t.type),Ce(t),null;case 19:if(on($e),s=t.memoizedState,s===null)return Ce(t),null;if(i=(t.flags&128)!==0,a=s.rendering,a===null)if(i)qo(s,!1);else{if(Oe!==0||n!==null&&n.flags&128)for(n=t.child;n!==null;){if(a=oh(n),a!==null){for(t.flags|=128,qo(s,!1),n=a.updateQueue,t.updateQueue=n,Bc(t,n),t.subtreeFlags=0,n=e,e=t.child;e!==null;)zS(e,n),e=e.sibling;return Ae($e,$e.current&1|2),t.child}n=n.sibling}s.tail!==null&&Gi()>ph&&(t.flags|=128,i=!0,qo(s,!1),t.lanes=4194304)}else{if(!i)if(n=oh(a),n!==null){if(t.flags|=128,i=!0,n=n.updateQueue,t.updateQueue=n,Bc(t,n),qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ne)return Ce(t),null}else 2*Gi()-s.renderingStartTime>ph&&e!==536870912&&(t.flags|=128,i=!0,qo(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Gi(),t.sibling=null,n=$e.current,Ae($e,i?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Ss(t),jm(),i=t.memoizedState!==null,n!==null?n.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?e&536870912&&!(t.flags&128)&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),e=t.updateQueue,e!==null&&Bc(t,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==e&&(t.flags|=2048),n!==null&&on(Ga),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Es(Ke),Ce(t),null;case 25:return null}throw Error(J(156,t.tag))}function UE(n,t){switch(Gm(t),t.tag){case 1:return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return Es(Ke),vo(),n=t.flags,n&65536&&!(n&128)?(t.flags=n&-65537|128,t):null;case 26:case 27:case 5:return Ju(t),null;case 13:if(Ss(t),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(J(340));fc()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return on($e),null;case 4:return vo(),null;case 10:return Es(t.type),null;case 22:case 23:return Ss(t),jm(),n!==null&&on(Ga),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 24:return Es(Ke),null;case 25:return null;default:return null}}function IS(n,t){switch(Gm(t),t.tag){case 3:Es(Ke),vo();break;case 26:case 27:case 5:Ju(t);break;case 4:vo();break;case 13:Ss(t);break;case 19:on($e);break;case 10:Es(t.type);break;case 22:case 23:Ss(t),jm(),n!==null&&on(Ga);break;case 24:Es(Ke)}}var OE={getCacheForType:function(n){var t=yn(Ke),e=t.data.get(n);return e===void 0&&(e=n(),t.data.set(n,e)),e}},zE=typeof WeakMap=="function"?WeakMap:Map,De=0,ye=null,Zt=null,$t=0,ve=0,Gn=null,ps=!1,Oo=!1,u0=!1,Cs=0,Oe=0,fa=0,Wa=0,h0=0,ui=0,Mo=0,Rl=null,Fi=null,yp=!1,f0=0,ph=1/0,mh=null,sa=null,Ic=!1,Ua=null,Dl=0,xp=0,Sp=null,Ll=0,bp=null;function Zn(){if(De&2&&$t!==0)return $t&-$t;if(Gt.T!==null){var n=So;return n!==0?n:p0()}return Ky()}function FS(){ui===0&&(ui=!($t&536870912)||ne?Wy():536870912);var n=hi.current;return n!==null&&(n.flags|=32),ui}function An(n,t,e){(n===ye&&ve===2||n.cancelPendingCommit!==null)&&(Eo(n,0),ms(n,$t,ui,!1)),uc(n,e),(!(De&2)||n!==ye)&&(n===ye&&(!(De&2)&&(Wa|=e),Oe===4&&ms(n,$t,ui,!1)),Yi(n))}function HS(n,t,e){if(De&6)throw Error(J(327));var i=!e&&(t&60)===0&&(t&n.expiredLanes)===0||cc(n,t),s=i?FE(n,t):jf(n,t,!0),a=i;do{if(s===0){Oo&&!i&&ms(n,t,0,!1);break}else if(s===6)ms(n,t,0,!ps);else{if(e=n.current.alternate,a&&!BE(e)){s=jf(n,t,!1),a=!1;continue}if(s===2){if(a=t,n.errorRecoveryDisabledLanes&a)var r=0;else r=n.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=n;s=Rl;var l=o.current.memoizedState.isDehydrated;if(l&&(Eo(o,r).flags|=256),r=jf(o,r,!1),r!==2){if(u0&&!l){o.errorRecoveryDisabledLanes|=a,Wa|=a,s=4;break t}a=Fi,Fi=s,a!==null&&Mp(a)}s=r}if(a=!1,s!==2)continue}}if(s===1){Eo(n,0),ms(n,t,0,!0);break}t:{switch(i=n,s){case 0:case 1:throw Error(J(345));case 4:if((t&4194176)===t){ms(i,t,ui,!ps);break t}break;case 2:Fi=null;break;case 3:case 5:break;default:throw Error(J(329))}if(i.finishedWork=e,i.finishedLanes=t,(t&62914560)===t&&(a=f0+300-Gi(),10<a)){if(ms(i,t,ui,!ps),Gh(i,0)!==0)break t;i.timeoutHandle=t1(iv.bind(null,i,e,Fi,mh,yp,t,ui,Wa,Mo,ps,2,-0,0),a);break t}iv(i,e,Fi,mh,yp,t,ui,Wa,Mo,ps,0,-0,0)}}break}while(!0);Yi(n)}function Mp(n){Fi===null?Fi=n:Fi.push.apply(Fi,n)}function iv(n,t,e,i,s,a,r,o,l,c,u,f,h){var d=t.subtreeFlags;if((d&8192||(d&16785408)===16785408)&&(Jl={stylesheets:null,count:0,unsuspend:_w},PS(t),t=xw(),t!==null)){n.cancelPendingCommit=t(av.bind(null,n,e,i,s,r,o,l,1,f,h)),ms(n,a,r,!c);return}av(n,e,i,s,r,o,l,u,f,h)}function BE(n){for(var t=n;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var i=0;i<e.length;i++){var s=e[i],a=s.getSnapshot;s=s.value;try{if(!Kn(a(),s))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ms(n,t,e,i){t&=~h0,t&=~Wa,n.suspendedLanes|=t,n.pingedLanes&=~t,i&&(n.warmLanes|=t),i=n.expirationTimes;for(var s=t;0<s;){var a=31-Yn(s),r=1<<a;i[a]=-1,s&=~r}e!==0&&qy(n,e,t)}function Jh(){return De&6?!0:(vc(0),!1)}function d0(){if(Zt!==null){if(ve===0)var n=Zt.return;else n=Zt,bs=lr=null,Qm(n),oo=null,Zl=0,n=Zt;for(;n!==null;)IS(n.alternate,n),n=n.return;Zt=null}}function Eo(n,t){n.finishedWork=null,n.finishedLanes=0;var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,nw(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),d0(),ye=n,Zt=e=ia(n.current,null),$t=t,ve=0,Gn=null,ps=!1,Oo=cc(n,t),u0=!1,Mo=ui=h0=Wa=fa=Oe=0,Fi=Rl=null,yp=!1,t&8&&(t|=t&32);var i=n.entangledLanes;if(i!==0)for(n=n.entanglements,i&=t;0<i;){var s=31-Yn(i),a=1<<s;t|=n[s],i&=~a}return Cs=t,qh(),e}function VS(n,t){Yt=null,Gt.H=Wi,t===xl?(t=Og(),ve=3):t===Mx?(t=Og(),ve=4):ve=t===fS?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gn=t,Zt===null&&(Oe=1,hh(n,li(t,n.current)))}function kS(){var n=Gt.H;return Gt.H=Wi,n===null?Wi:n}function GS(){var n=Gt.A;return Gt.A=OE,n}function Ep(){Oe=4,ps||($t&4194176)!==$t&&hi.current!==null||(Oo=!0),!(fa&134217727)&&!(Wa&134217727)||ye===null||ms(ye,$t,ui,!1)}function jf(n,t,e){var i=De;De|=2;var s=kS(),a=GS();(ye!==n||$t!==t)&&(mh=null,Eo(n,t)),t=!1;var r=Oe;t:do try{if(ve!==0&&Zt!==null){var o=Zt,l=Gn;switch(ve){case 8:d0(),r=6;break t;case 3:case 2:case 6:hi.current===null&&(t=!0);var c=ve;if(ve=0,Gn=null,$r(n,o,l,c),e&&Oo){r=0;break t}break;default:c=ve,ve=0,Gn=null,$r(n,o,l,c)}}IE(),r=Oe;break}catch(u){VS(n,u)}while(!0);return t&&n.shellSuspendCounter++,bs=lr=null,De=i,Gt.H=s,Gt.A=a,Zt===null&&(ye=null,$t=0,qh()),r}function IE(){for(;Zt!==null;)jS(Zt)}function FE(n,t){var e=De;De|=2;var i=kS(),s=GS();ye!==n||$t!==t?(mh=null,ph=Gi()+500,Eo(n,t)):Oo=cc(n,t);t:do try{if(ve!==0&&Zt!==null){t=Zt;var a=Gn;e:switch(ve){case 1:ve=0,Gn=null,$r(n,t,a,1);break;case 2:if(Ug(a)){ve=0,Gn=null,sv(t);break}t=function(){ve===2&&ye===n&&(ve=7),Yi(n)},a.then(t,t);break t;case 3:ve=7;break t;case 4:ve=5;break t;case 7:Ug(a)?(ve=0,Gn=null,sv(t)):(ve=0,Gn=null,$r(n,t,a,7));break;case 5:var r=null;switch(Zt.tag){case 26:r=Zt.memoizedState;case 5:case 27:var o=Zt;if(!r||s1(r)){ve=0,Gn=null;var l=o.sibling;if(l!==null)Zt=l;else{var c=o.return;c!==null?(Zt=c,tf(c)):Zt=null}break e}}ve=0,Gn=null,$r(n,t,a,5);break;case 6:ve=0,Gn=null,$r(n,t,a,6);break;case 8:d0(),Oe=6;break t;default:throw Error(J(462))}}HE();break}catch(u){VS(n,u)}while(!0);return bs=lr=null,Gt.H=i,Gt.A=s,De=e,Zt!==null?0:(ye=null,$t=0,qh(),Oe)}function HE(){for(;Zt!==null&&!lM();)jS(Zt)}function jS(n){var t=vS(n.alternate,n,Cs);n.memoizedProps=n.pendingProps,t===null?tf(n):Zt=t}function sv(n){var t=n,e=t.alternate;switch(t.tag){case 15:case 0:t=Zg(e,t,t.pendingProps,t.type,void 0,$t);break;case 11:t=Zg(e,t,t.pendingProps,t.type.render,t.ref,$t);break;case 5:Qm(t);default:IS(e,t),t=Zt=zS(t,Cs),t=vS(e,t,Cs)}n.memoizedProps=n.pendingProps,t===null?tf(n):Zt=t}function $r(n,t,e,i){bs=lr=null,Qm(t),oo=null,Zl=0;var s=t.return;try{if(CE(n,s,t,e,$t)){Oe=1,hh(n,li(e,n.current)),Zt=null;return}}catch(a){if(s!==null)throw Zt=s,a;Oe=1,hh(n,li(e,n.current)),Zt=null;return}t.flags&32768?(ne||i===1?n=!0:Oo||$t&536870912?n=!1:(ps=n=!0,(i===2||i===3||i===6)&&(i=hi.current,i!==null&&i.tag===13&&(i.flags|=16384))),WS(t,n)):tf(t)}function tf(n){var t=n;do{if(t.flags&32768){WS(t,ps);return}n=t.return;var e=NE(t.alternate,t,Cs);if(e!==null){Zt=e;return}if(t=t.sibling,t!==null){Zt=t;return}Zt=t=n}while(t!==null);Oe===0&&(Oe=5)}function WS(n,t){do{var e=UE(n.alternate,n);if(e!==null){e.flags&=32767,Zt=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(n=n.sibling,n!==null)){Zt=n;return}Zt=n=e}while(n!==null);Oe=6,Zt=null}function av(n,t,e,i,s,a,r,o,l,c){var u=Gt.T,f=Me.p;try{Me.p=2,Gt.T=null,VE(n,t,e,i,f,s,a,r,o,l,c)}finally{Gt.T=u,Me.p=f}}function VE(n,t,e,i,s,a,r,o){do ho();while(Ua!==null);if(De&6)throw Error(J(327));var l=n.finishedWork;if(i=n.finishedLanes,l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(J(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var c=l.lanes|l.childLanes;if(c|=Hm,yM(n,i,c,a,r,o),n===ye&&(Zt=ye=null,$t=0),!(l.subtreeFlags&10256)&&!(l.flags&10256)||Ic||(Ic=!0,xp=c,Sp=e,WE(th,function(){return ho(),null})),e=(l.flags&15990)!==0,l.subtreeFlags&15990||e?(e=Gt.T,Gt.T=null,a=Me.p,Me.p=2,r=De,De|=4,DE(n,l),RS(l,n),hE(Cp,n.containerInfo),Mh=!!Ap,Cp=Ap=null,n.current=l,wS(n,l.alternate,l),cM(),De=r,Me.p=a,Gt.T=e):n.current=l,Ic?(Ic=!1,Ua=n,Dl=i):XS(n,c),c=n.pendingLanes,c===0&&(sa=null),pM(l.stateNode),Yi(n),t!==null)for(s=n.onRecoverableError,l=0;l<t.length;l++)c=t[l],s(c.value,{componentStack:c.stack});return Dl&3&&ho(),c=n.pendingLanes,i&4194218&&c&42?n===bp?Ll++:(Ll=0,bp=n):Ll=0,vc(0),null}function XS(n,t){(n.pooledCacheLanes&=t)===0&&(t=n.pooledCache,t!=null&&(n.pooledCache=null,dc(t)))}function ho(){if(Ua!==null){var n=Ua,t=xp;xp=0;var e=Zy(Dl),i=Gt.T,s=Me.p;try{if(Me.p=32>e?32:e,Gt.T=null,Ua===null)var a=!1;else{e=Sp,Sp=null;var r=Ua,o=Dl;if(Ua=null,Dl=0,De&6)throw Error(J(331));var l=De;if(De|=4,US(r.current),LS(r,r.current,o,e),De=l,vc(0,!1),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(lc,r)}catch{}a=!0}return a}finally{Me.p=s,Gt.T=i,XS(n,t)}}return!1}function rv(n,t,e){t=li(e,t),t=cp(n.stateNode,t,2),n=na(n,t,2),n!==null&&(uc(n,2),Yi(n))}function pe(n,t,e){if(n.tag===3)rv(n,n,e);else for(;t!==null;){if(t.tag===3){rv(t,n,e);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sa===null||!sa.has(i))){n=li(e,n),e=uS(2),i=na(t,e,2),i!==null&&(hS(e,i,t,n),uc(i,2),Yi(i));break}}t=t.return}}function Wf(n,t,e){var i=n.pingCache;if(i===null){i=n.pingCache=new zE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(e)||(u0=!0,s.add(e),n=kE.bind(null,n,t,e),t.then(n,n))}function kE(n,t,e){var i=n.pingCache;i!==null&&i.delete(t),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,ye===n&&($t&e)===e&&(Oe===4||Oe===3&&($t&62914560)===$t&&300>Gi()-f0?!(De&2)&&Eo(n,0):h0|=e,Mo===$t&&(Mo=0)),Yi(n)}function qS(n,t){t===0&&(t=Xy()),n=ca(n,t),n!==null&&(uc(n,t),Yi(n))}function GE(n){var t=n.memoizedState,e=0;t!==null&&(e=t.retryLane),qS(n,e)}function jE(n,t){var e=0;switch(n.tag){case 13:var i=n.stateNode,s=n.memoizedState;s!==null&&(e=s.retryLane);break;case 19:i=n.stateNode;break;case 22:i=n.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),qS(n,e)}function WE(n,t){return Pm(n,t)}var gh=null,Ir=null,wp=!1,vh=!1,Xf=!1,Xa=0;function Yi(n){n!==Ir&&n.next===null&&(Ir===null?gh=Ir=n:Ir=Ir.next=n),vh=!0,wp||(wp=!0,qE(XE))}function vc(n,t){if(!Xf&&vh){Xf=!0;do for(var e=!1,i=gh;i!==null;){if(n!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Yn(42|n)+1)-1,a&=s&~(r&~o),a=a&201326677?a&201326677|1:a?a|2:0}a!==0&&(e=!0,ov(i,a))}else a=$t,a=Gh(i,i===ye?a:0),!(a&3)||cc(i,a)||(e=!0,ov(i,a));i=i.next}while(e);Xf=!1}}function XE(){vh=wp=!1;var n=0;Xa!==0&&(ew()&&(n=Xa),Xa=0);for(var t=Gi(),e=null,i=gh;i!==null;){var s=i.next,a=YS(i,t);a===0?(i.next=null,e===null?gh=s:e.next=s,s===null&&(Ir=e)):(e=i,(n!==0||a&3)&&(vh=!0)),i=s}vc(n)}function YS(n,t){for(var e=n.suspendedLanes,i=n.pingedLanes,s=n.expirationTimes,a=n.pendingLanes&-62914561;0<a;){var r=31-Yn(a),o=1<<r,l=s[r];l===-1?(!(o&e)||o&i)&&(s[r]=_M(o,t)):l<=t&&(n.expiredLanes|=o),a&=~o}if(t=ye,e=$t,e=Gh(n,n===t?e:0),i=n.callbackNode,e===0||n===t&&ve===2||n.cancelPendingCommit!==null)return i!==null&&i!==null&&bf(i),n.callbackNode=null,n.callbackPriority=0;if(!(e&3)||cc(n,e)){if(t=e&-e,t===n.callbackPriority)return t;switch(i!==null&&bf(i),Zy(e)){case 2:case 8:e=Gy;break;case 32:e=th;break;case 268435456:e=jy;break;default:e=th}return i=ZS.bind(null,n),e=Pm(e,i),n.callbackPriority=t,n.callbackNode=e,t}return i!==null&&i!==null&&bf(i),n.callbackPriority=2,n.callbackNode=null,2}function ZS(n,t){var e=n.callbackNode;if(ho()&&n.callbackNode!==e)return null;var i=$t;return i=Gh(n,n===ye?i:0),i===0?null:(HS(n,i,t),YS(n,Gi()),n.callbackNode!=null&&n.callbackNode===e?ZS.bind(null,n):null)}function ov(n,t){if(ho())return null;HS(n,t,!0)}function qE(n){iw(function(){De&6?Pm(ky,n):n()})}function p0(){return Xa===0&&(Xa=Wy()),Xa}function lv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Pu(""+n)}function cv(n,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,n.id&&e.setAttribute("form",n.id),t.parentNode.insertBefore(e,t),n=new FormData(n),e.parentNode.removeChild(e),n}function YE(n,t,e,i,s){if(t==="submit"&&e&&e.stateNode===s){var a=lv((s[Un]||null).action),r=i.submitter;r&&(t=(t=r[Un]||null)?lv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new jh("action","action",null,i,s);n.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Xa!==0){var l=r?cv(s,r):new FormData(s);op(e,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?cv(s,r):new FormData(s),op(e,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(var qf=0;qf<Dg.length;qf++){var Yf=Dg[qf],ZE=Yf.toLowerCase(),KE=Yf[0].toUpperCase()+Yf.slice(1);Ri(ZE,"on"+KE)}Ri(gx,"onAnimationEnd");Ri(vx,"onAnimationIteration");Ri(_x,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(dE,"onTransitionRun");Ri(pE,"onTransitionStart");Ri(mE,"onTransitionCancel");Ri(yx,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ql));function KS(n,t){t=(t&4)!==0;for(var e=0;e<n.length;e++){var i=n[e],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){uh(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){uh(u)}s.currentTarget=null,a=l}}}}function Qt(n,t){var e=t[Yd];e===void 0&&(e=t[Yd]=new Set);var i=n+"__bubble";e.has(i)||(QS(t,n,2,!1),e.add(i))}function Zf(n,t,e){var i=0;t&&(i|=4),QS(e,n,i,t)}var Fc="_reactListening"+Math.random().toString(36).slice(2);function m0(n){if(!n[Fc]){n[Fc]=!0,Qy.forEach(function(e){e!=="selectionchange"&&(QE.has(e)||Zf(e,!1,n),Zf(e,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[Fc]||(t[Fc]=!0,Zf("selectionchange",!1,t))}}function QS(n,t,e,i){switch(c1(t)){case 2:var s=Mw;break;case 8:s=Ew;break;default:s=y0}e=s.bind(null,t,e,n),s=void 0,!$d||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?n.addEventListener(t,e,{capture:!0,passive:s}):n.addEventListener(t,e,!0):s!==void 0?n.addEventListener(t,e,{passive:s}):n.addEventListener(t,e,!1)}function Kf(n,t,e,i,s){var a=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&(l=r.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;r=r.return}for(;o!==null;){if(r=Ba(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}ax(function(){var c=a,u=Om(e),f=[];t:{var h=xx.get(n);if(h!==void 0){var d=jh,g=n;switch(n){case"keypress":if(Uu(e)===0)break t;case"keydown":case"keyup":d=jM;break;case"focusin":g="focus",d=Af;break;case"focusout":g="blur",d=Af;break;case"beforeblur":case"afterblur":d=Af;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=_g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=PM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=qM;break;case gx:case vx:case _x:d=OM;break;case yx:d=ZM;break;case"scroll":case"scrollend":d=DM;break;case"wheel":d=QM;break;case"copy":case"cut":case"paste":d=BM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=xg;break;case"toggle":case"beforetoggle":d=JM}var _=(t&4)!==0,m=!_&&(n==="scroll"||n==="scrollend"),p=_?h!==null?h+"Capture":null:h;_=[];for(var v=c,y;v!==null;){var x=v;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||p===null||(x=Wl(v,p),x!=null&&_.push($l(v,x,y))),m)break;v=v.return}0<_.length&&(h=new d(h,g,null,e,u),f.push({event:h,listeners:_}))}}if(!(t&7)){t:{if(h=n==="mouseover"||n==="pointerover",d=n==="mouseout"||n==="pointerout",h&&e!==Qd&&(g=e.relatedTarget||e.fromElement)&&(Ba(g)||g[No]))break t;if((d||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,d?(g=e.relatedTarget||e.toElement,d=c,g=g?Ba(g):null,g!==null&&(m=Po(g),_=g.tag,g!==m||_!==5&&_!==27&&_!==6)&&(g=null)):(d=null,g=c),d!==g)){if(_=_g,x="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=xg,x="onPointerLeave",p="onPointerEnter",v="pointer"),m=d==null?h:ul(d),y=g==null?h:ul(g),h=new _(x,v+"leave",d,e,u),h.target=m,h.relatedTarget=y,x=null,Ba(u)===c&&(_=new _(p,v+"enter",g,e,u),_.target=y,_.relatedTarget=m,x=_),m=x,d&&g)e:{for(_=d,p=g,v=0,y=_;y;y=pr(y))v++;for(y=0,x=p;x;x=pr(x))y++;for(;0<v-y;)_=pr(_),v--;for(;0<y-v;)p=pr(p),y--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break e;_=pr(_),p=pr(p)}_=null}else _=null;d!==null&&uv(f,h,d,_,!1),g!==null&&m!==null&&uv(f,m,g,_,!0)}}t:{if(h=c?ul(c):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var T=Eg;else if(Mg(h))if(hx)T=cE;else{T=oE;var b=rE}else d=h.nodeName,!d||d.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Um(c.elementType)&&(T=Eg):T=lE;if(T&&(T=T(n,c))){ux(f,T,e,u);break t}b&&b(n,h,c),n==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&Kd(h,"number",h.value)}switch(b=c?ul(c):window,n){case"focusin":(Mg(b)||b.contentEditable==="true")&&(Xr=b,Jd=c,yl=null);break;case"focusout":yl=Jd=Xr=null;break;case"mousedown":tp=!0;break;case"contextmenu":case"mouseup":case"dragend":tp=!1,Rg(f,e,u);break;case"selectionchange":if(fE)break;case"keydown":case"keyup":Rg(f,e,u)}var E;if(Im)t:{switch(n){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Wr?lx(n,e)&&(D="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(D="onCompositionStart");D&&(ox&&e.locale!=="ko"&&(Wr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Wr&&(E=rx()):(Js=u,zm="value"in Js?Js.value:Js.textContent,Wr=!0)),b=_h(c,D),0<b.length&&(D=new yg(D,n,null,e,u),f.push({event:D,listeners:b}),E?D.data=E:(E=cx(e),E!==null&&(D.data=E)))),(E=eE?nE(n,e):iE(n,e))&&(D=_h(c,"onBeforeInput"),0<D.length&&(b=new yg("onBeforeInput","beforeinput",null,e,u),f.push({event:b,listeners:D}),b.data=E)),YE(f,n,c,e,u)}KS(f,t)})}function $l(n,t,e){return{instance:n,listener:t,currentTarget:e}}function _h(n,t){for(var e=t+"Capture",i=[];n!==null;){var s=n,a=s.stateNode;s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Wl(n,e),s!=null&&i.unshift($l(n,s,a)),s=Wl(n,t),s!=null&&i.push($l(n,s,a))),n=n.return}return i}function pr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function uv(n,t,e,i,s){for(var a=t._reactName,r=[];e!==null&&e!==i;){var o=e,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Wl(e,a),c!=null&&r.unshift($l(e,c,l))):s||(c=Wl(e,a),c!=null&&r.push($l(e,c,l)))),e=e.return}r.length!==0&&n.push({event:t,listeners:r})}var $E=/\r\n?/g,JE=/\u0000|\uFFFD/g;function hv(n){return(typeof n=="string"?n:""+n).replace($E,`
`).replace(JE,"")}function $S(n,t){return t=hv(t),hv(n)===t}function ef(){}function he(n,t,e,i,s,a){switch(e){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||yo(n,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&yo(n,""+i);break;case"className":Lc(n,"class",i);break;case"tabIndex":Lc(n,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Lc(n,e,i);break;case"style":sx(n,i,a);break;case"data":if(t!=="object"){Lc(n,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||e!=="href")){n.removeAttribute(e);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(e);break}i=Pu(""+i),n.setAttribute(e,i);break;case"action":case"formAction":if(typeof i=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(e==="formAction"?(t!=="input"&&he(n,t,"name",s.name,s,null),he(n,t,"formEncType",s.formEncType,s,null),he(n,t,"formMethod",s.formMethod,s,null),he(n,t,"formTarget",s.formTarget,s,null)):(he(n,t,"encType",s.encType,s,null),he(n,t,"method",s.method,s,null),he(n,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(e);break}i=Pu(""+i),n.setAttribute(e,i);break;case"onClick":i!=null&&(n.onclick=ef);break;case"onScroll":i!=null&&Qt("scroll",n);break;case"onScrollEnd":i!=null&&Qt("scrollend",n);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(e=i.__html,e!=null){if(s.children!=null)throw Error(J(60));n.innerHTML=e}}break;case"multiple":n.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":n.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){n.removeAttribute("xlink:href");break}e=Pu(""+i),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,""+i):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":i===!0?n.setAttribute(e,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,i):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?n.setAttribute(e,i):n.removeAttribute(e);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?n.removeAttribute(e):n.setAttribute(e,i);break;case"popover":Qt("beforetoggle",n),Qt("toggle",n),Lu(n,"popover",i);break;case"xlinkActuate":Ki(n,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ki(n,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ki(n,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ki(n,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ki(n,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ki(n,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ki(n,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ki(n,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ki(n,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Lu(n,"is",i);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=CM.get(e)||e,Lu(n,e,i))}}function Tp(n,t,e,i,s,a){switch(e){case"style":sx(n,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(e=i.__html,e!=null){if(s.children!=null)throw Error(J(60));n.innerHTML=e}}break;case"children":typeof i=="string"?yo(n,i):(typeof i=="number"||typeof i=="bigint")&&yo(n,""+i);break;case"onScroll":i!=null&&Qt("scroll",n);break;case"onScrollEnd":i!=null&&Qt("scrollend",n);break;case"onClick":i!=null&&(n.onclick=ef);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$y.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(s=e.endsWith("Capture"),t=e.slice(2,s?e.length-7:void 0),a=n[Un]||null,a=a!=null?a[e]:null,typeof a=="function"&&n.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(t,i,s);break t}e in n?n[e]=i:i===!0?n.setAttribute(e,""):Lu(n,e,i)}}}function pn(n,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qt("error",n),Qt("load",n);var i=!1,s=!1,a;for(a in e)if(e.hasOwnProperty(a)){var r=e[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:he(n,t,a,r,e,null)}}s&&he(n,t,"srcSet",e.srcSet,e,null),i&&he(n,t,"src",e.src,e,null);return;case"input":Qt("invalid",n);var o=a=r=s=null,l=null,c=null;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(J(137,t));break;default:he(n,t,i,u,e,null)}}ex(n,a,o,l,c,r,s,!1),eh(n);return;case"select":Qt("invalid",n),i=r=a=null;for(s in e)if(e.hasOwnProperty(s)&&(o=e[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:he(n,t,s,o,e,null)}t=a,e=r,n.multiple=!!i,t!=null?ao(n,!!i,t,!1):e!=null&&ao(n,!!i,e,!0);return;case"textarea":Qt("invalid",n),a=s=i=null;for(r in e)if(e.hasOwnProperty(r)&&(o=e[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:he(n,t,r,o,e,null)}ix(n,i,s,a),eh(n);return;case"option":for(l in e)if(e.hasOwnProperty(l)&&(i=e[l],i!=null))switch(l){case"selected":n.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:he(n,t,l,i,e,null)}return;case"dialog":Qt("cancel",n),Qt("close",n);break;case"iframe":case"object":Qt("load",n);break;case"video":case"audio":for(i=0;i<Ql.length;i++)Qt(Ql[i],n);break;case"image":Qt("error",n),Qt("load",n);break;case"details":Qt("toggle",n);break;case"embed":case"source":case"link":Qt("error",n),Qt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in e)if(e.hasOwnProperty(c)&&(i=e[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:he(n,t,c,i,e,null)}return;default:if(Um(t)){for(u in e)e.hasOwnProperty(u)&&(i=e[u],i!==void 0&&Tp(n,t,u,i,e,void 0));return}}for(o in e)e.hasOwnProperty(o)&&(i=e[o],i!=null&&he(n,t,o,i,e,null))}function tw(n,t,e,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(d in e){var f=e[d];if(e.hasOwnProperty(d)&&f!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(d)||he(n,t,d,null,i,f)}}for(var h in i){var d=i[h];if(f=e[h],i.hasOwnProperty(h)&&(d!=null||f!=null))switch(h){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(J(137,t));break;default:d!==f&&he(n,t,h,d,i,f)}}Zd(n,r,o,l,c,u,a,s);return;case"select":d=r=o=h=null;for(a in e)if(l=e[a],e.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||he(n,t,a,null,i,l)}for(s in i)if(a=i[s],l=e[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":h=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&he(n,t,s,a,i,l)}t=o,e=r,i=d,h!=null?ao(n,!!e,h,!1):!!i!=!!e&&(t!=null?ao(n,!!e,t,!0):ao(n,!!e,e?[]:"",!1));return;case"textarea":d=h=null;for(o in e)if(s=e[o],e.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:he(n,t,o,null,i,s)}for(r in i)if(s=i[r],a=e[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":h=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(J(91));break;default:s!==a&&he(n,t,r,s,i,a)}nx(n,h,d);return;case"option":for(var g in e)if(h=e[g],e.hasOwnProperty(g)&&h!=null&&!i.hasOwnProperty(g))switch(g){case"selected":n.selected=!1;break;default:he(n,t,g,null,i,h)}for(l in i)if(h=i[l],d=e[l],i.hasOwnProperty(l)&&h!==d&&(h!=null||d!=null))switch(l){case"selected":n.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:he(n,t,l,h,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in e)h=e[_],e.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_)&&he(n,t,_,null,i,h);for(c in i)if(h=i[c],d=e[c],i.hasOwnProperty(c)&&h!==d&&(h!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(J(137,t));break;default:he(n,t,c,h,i,d)}return;default:if(Um(t)){for(var m in e)h=e[m],e.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Tp(n,t,m,void 0,i,h);for(u in i)h=i[u],d=e[u],!i.hasOwnProperty(u)||h===d||h===void 0&&d===void 0||Tp(n,t,u,h,i,d);return}}for(var p in e)h=e[p],e.hasOwnProperty(p)&&h!=null&&!i.hasOwnProperty(p)&&he(n,t,p,null,i,h);for(f in i)h=i[f],d=e[f],!i.hasOwnProperty(f)||h===d||h==null&&d==null||he(n,t,f,h,i,d)}var Ap=null,Cp=null;function yh(n){return n.nodeType===9?n:n.ownerDocument}function fv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function JS(n,t){if(n===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&t==="foreignObject"?0:n}function Rp(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qf=null;function ew(){var n=window.event;return n&&n.type==="popstate"?n===Qf?!1:(Qf=n,!0):(Qf=null,!1)}var t1=typeof setTimeout=="function"?setTimeout:void 0,nw=typeof clearTimeout=="function"?clearTimeout:void 0,dv=typeof Promise=="function"?Promise:void 0,iw=typeof queueMicrotask=="function"?queueMicrotask:typeof dv<"u"?function(n){return dv.resolve(null).then(n).catch(sw)}:t1;function sw(n){setTimeout(function(){throw n})}function $f(n,t){var e=t,i=0;do{var s=e.nextSibling;if(n.removeChild(e),s&&s.nodeType===8)if(e=s.data,e==="/$"){if(i===0){n.removeChild(s),ic(t);return}i--}else e!=="$"&&e!=="$?"&&e!=="$!"||i++;e=s}while(e);ic(t)}function Dp(n){var t=n.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Dp(e),Nm(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function aw(n,t,e,i){for(;n.nodeType===1;){var s=e;if(n.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(i){if(!n[jl])switch(t){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(a=n.getAttribute("rel"),a==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(a!==s.rel||n.getAttribute("href")!==(s.href==null?null:s.href)||n.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||n.getAttribute("title")!==(s.title==null?null:s.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(a=n.getAttribute("src"),(a!==(s.src==null?null:s.src)||n.getAttribute("type")!==(s.type==null?null:s.type)||n.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(t==="input"&&n.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&n.getAttribute("name")===a)return n}else return n;if(n=Ei(n.nextSibling),n===null)break}return null}function rw(n,t,e){if(t==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=Ei(n.nextSibling),n===null))return null;return n}function Ei(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return n}function pv(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"){if(t===0)return n;t--}else e==="/$"&&t++}n=n.previousSibling}return null}function e1(n,t,e){switch(t=yh(e),n){case"html":if(n=t.documentElement,!n)throw Error(J(452));return n;case"head":if(n=t.head,!n)throw Error(J(453));return n;case"body":if(n=t.body,!n)throw Error(J(454));return n;default:throw Error(J(451))}}var fi=new Map,mv=new Set;function xh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var Ls=Me.d;Me.d={f:ow,r:lw,D:cw,C:uw,L:hw,m:fw,X:pw,S:dw,M:mw};function ow(){var n=Ls.f(),t=Jh();return n||t}function lw(n){var t=Uo(n);t!==null&&t.tag===5&&t.type==="form"?eS(t):Ls.r(n)}var zo=typeof document>"u"?null:document;function n1(n,t,e){var i=zo;if(i&&typeof t=="string"&&t){var s=oi(t);s='link[rel="'+n+'"][href="'+s+'"]',typeof e=="string"&&(s+='[crossorigin="'+e+'"]'),mv.has(s)||(mv.add(s),n={rel:n,crossOrigin:e,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),pn(t,"link",n),an(t),i.head.appendChild(t)))}}function cw(n){Ls.D(n),n1("dns-prefetch",n,null)}function uw(n,t){Ls.C(n,t),n1("preconnect",n,t)}function hw(n,t,e){Ls.L(n,t,e);var i=zo;if(i&&n&&t){var s='link[rel="preload"][as="'+oi(t)+'"]';t==="image"&&e&&e.imageSrcSet?(s+='[imagesrcset="'+oi(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(s+='[imagesizes="'+oi(e.imageSizes)+'"]')):s+='[href="'+oi(n)+'"]';var a=s;switch(t){case"style":a=wo(n);break;case"script":a=Bo(n)}fi.has(a)||(n=Ee({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:n,as:t},e),fi.set(a,n),i.querySelector(s)!==null||t==="style"&&i.querySelector(_c(a))||t==="script"&&i.querySelector(yc(a))||(t=i.createElement("link"),pn(t,"link",n),an(t),i.head.appendChild(t)))}}function fw(n,t){Ls.m(n,t);var e=zo;if(e&&n){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+oi(i)+'"][href="'+oi(n)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Bo(n)}if(!fi.has(a)&&(n=Ee({rel:"modulepreload",href:n},t),fi.set(a,n),e.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(yc(a)))return}i=e.createElement("link"),pn(i,"link",n),an(i),e.head.appendChild(i)}}}function dw(n,t,e){Ls.S(n,t,e);var i=zo;if(i&&n){var s=so(i).hoistableStyles,a=wo(n);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(_c(a)))o.loading=5;else{n=Ee({rel:"stylesheet",href:n,"data-precedence":t},e),(e=fi.get(a))&&g0(n,e);var l=r=i.createElement("link");an(l),pn(l,"link",n),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Hu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function pw(n,t){Ls.X(n,t);var e=zo;if(e&&n){var i=so(e).hoistableScripts,s=Bo(n),a=i.get(s);a||(a=e.querySelector(yc(s)),a||(n=Ee({src:n,async:!0},t),(t=fi.get(s))&&v0(n,t),a=e.createElement("script"),an(a),pn(a,"link",n),e.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function mw(n,t){Ls.M(n,t);var e=zo;if(e&&n){var i=so(e).hoistableScripts,s=Bo(n),a=i.get(s);a||(a=e.querySelector(yc(s)),a||(n=Ee({src:n,async:!0,type:"module"},t),(t=fi.get(s))&&v0(n,t),a=e.createElement("script"),an(a),pn(a,"link",n),e.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function gv(n,t,e,i){var s=(s=ta.current)?xh(s):null;if(!s)throw Error(J(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=wo(e.href),e=so(s).hoistableStyles,i=e.get(t),i||(i={type:"style",instance:null,count:0,state:null},e.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=wo(e.href);var a=so(s).hoistableStyles,r=a.get(n);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(n,r),(a=s.querySelector(_c(n)))&&!a._p&&(r.instance=a,r.state.loading=5),fi.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},fi.set(n,e),a||gw(s,n,e,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bo(e),e=so(s).hoistableScripts,i=e.get(t),i||(i={type:"script",instance:null,count:0,state:null},e.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,n))}}function wo(n){return'href="'+oi(n)+'"'}function _c(n){return'link[rel="stylesheet"]['+n+"]"}function i1(n){return Ee({},n,{"data-precedence":n.precedence,precedence:null})}function gw(n,t,e,i){n.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=n.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),pn(t,"link",e),an(t),n.head.appendChild(t))}function Bo(n){return'[src="'+oi(n)+'"]'}function yc(n){return"script[async]"+n}function vv(n,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var i=n.querySelector('style[data-href~="'+oi(e.href)+'"]');if(i)return t.instance=i,an(i),i;var s=Ee({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return i=(n.ownerDocument||n).createElement("style"),an(i),pn(i,"style",s),Hu(i,e.precedence,n),t.instance=i;case"stylesheet":s=wo(e.href);var a=n.querySelector(_c(s));if(a)return t.state.loading|=4,t.instance=a,an(a),a;i=i1(e),(s=fi.get(s))&&g0(i,s),a=(n.ownerDocument||n).createElement("link"),an(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),pn(a,"link",i),t.state.loading|=4,Hu(a,e.precedence,n),t.instance=a;case"script":return a=Bo(e.src),(s=n.querySelector(yc(a)))?(t.instance=s,an(s),s):(i=e,(s=fi.get(a))&&(i=Ee({},e),v0(i,s)),n=n.ownerDocument||n,s=n.createElement("script"),an(s),pn(s,"link",i),n.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Hu(i,e.precedence,n));return t.instance}function Hu(n,t,e){for(var i=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(n,a.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(n,t.firstChild))}function g0(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.title==null&&(n.title=t.title)}function v0(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.integrity==null&&(n.integrity=t.integrity)}var Vu=null;function _v(n,t,e){if(Vu===null){var i=new Map,s=Vu=new Map;s.set(e,i)}else s=Vu,i=s.get(e),i||(i=new Map,s.set(e,i));if(i.has(n))return i;for(i.set(n,null),e=e.getElementsByTagName(n),s=0;s<e.length;s++){var a=e[s];if(!(a[jl]||a[_n]||n==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=n+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function yv(n,t,e){n=n.ownerDocument||n,n.head.insertBefore(e,t==="title"?n.querySelector("head > title"):null)}function vw(n,t,e){if(e===1||t.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return n=t.disabled,typeof t.precedence=="string"&&n==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function s1(n){return!(n.type==="stylesheet"&&!(n.state.loading&3))}var Jl=null;function _w(){}function yw(n,t,e){if(Jl===null)throw Error(J(475));var i=Jl;if(t.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var s=wo(e.href),a=n.querySelector(_c(s));if(a){n=a._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(i.count++,i=Sh.bind(i),n.then(i,i)),t.state.loading|=4,t.instance=a,an(a);return}a=n.ownerDocument||n,e=i1(e),(s=fi.get(s))&&g0(e,s),a=a.createElement("link"),an(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),pn(a,"link",e),t.instance=a}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,n),(n=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=Sh.bind(i),n.addEventListener("load",t),n.addEventListener("error",t))}}function xw(){if(Jl===null)throw Error(J(475));var n=Jl;return n.stylesheets&&n.count===0&&Lp(n,n.stylesheets),0<n.count?function(t){var e=setTimeout(function(){if(n.stylesheets&&Lp(n,n.stylesheets),n.unsuspend){var i=n.unsuspend;n.unsuspend=null,i()}},6e4);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(e)}}:null}function Sh(){if(this.count--,this.count===0){if(this.stylesheets)Lp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var bh=null;function Lp(n,t){n.stylesheets=null,n.unsuspend!==null&&(n.count++,bh=new Map,t.forEach(Sw,n),bh=null,Sh.call(n))}function Sw(n,t){if(!(t.state.loading&4)){var e=bh.get(n);if(e)var i=e.get(null);else{e=new Map,bh.set(n,e);for(var s=n.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(e.set(r.dataset.precedence,r),i=r)}i&&e.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=e.get(r)||i,a===i&&e.set(null,s),e.set(r,s),this.count++,i=Sh.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(s,n.firstChild)),t.state.loading|=4}}var tc={$$typeof:_s,Provider:null,Consumer:null,_currentValue:Va,_currentValue2:Va,_threadCount:0};function bw(n,t,e,i,s,a,r,o){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mf(0),this.hiddenUpdates=Mf(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function a1(n,t,e,i,s,a,r,o,l,c,u,f){return n=new bw(n,t,e,r,o,l,c,f),t=1,a===!0&&(t|=24),a=ci(3,null,null,t),n.current=a,a.stateNode=n,t=Wm(),t.refCount++,n.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:e,cache:t},r0(a),n}function r1(n){return n?(n=Zr,n):Zr}function o1(n,t,e,i,s,a){s=r1(s),i.context===null?i.context=s:i.pendingContext=s,i=ea(t),i.payload={element:e},a=a===void 0?null:a,a!==null&&(i.callback=a),e=na(n,i,t),e!==null&&(An(e,n,t),wl(e,n,t))}function xv(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<t?e:t}}function _0(n,t){xv(n,t),(n=n.alternate)&&xv(n,t)}function l1(n){if(n.tag===13){var t=ca(n,67108864);t!==null&&An(t,n,67108864),_0(n,67108864)}}var Mh=!0;function Mw(n,t,e,i){var s=Gt.T;Gt.T=null;var a=Me.p;try{Me.p=2,y0(n,t,e,i)}finally{Me.p=a,Gt.T=s}}function Ew(n,t,e,i){var s=Gt.T;Gt.T=null;var a=Me.p;try{Me.p=8,y0(n,t,e,i)}finally{Me.p=a,Gt.T=s}}function y0(n,t,e,i){if(Mh){var s=Pp(i);if(s===null)Kf(n,t,i,Eh,e),Sv(n,i);else if(Tw(s,n,t,e,i))i.stopPropagation();else if(Sv(n,i),t&4&&-1<ww.indexOf(n)){for(;s!==null;){var a=Uo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=La(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Yn(r);o.entanglements[1]|=l,r&=~l}Yi(a),!(De&6)&&(ph=Gi()+500,vc(0))}}break;case 13:o=ca(a,2),o!==null&&An(o,a,2),Jh(),_0(a,2)}if(a=Pp(i),a===null&&Kf(n,t,i,Eh,e),a===s)break;s=a}s!==null&&i.stopPropagation()}else Kf(n,t,i,null,e)}}function Pp(n){return n=Om(n),x0(n)}var Eh=null;function x0(n){if(Eh=null,n=Ba(n),n!==null){var t=Po(n);if(t===null)n=null;else{var e=t.tag;if(e===13){if(n=Hy(t),n!==null)return n;n=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null)}}return Eh=n,null}function c1(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(uM()){case ky:return 2;case Gy:return 8;case th:case hM:return 32;case jy:return 268435456;default:return 32}default:return 32}}var Np=!1,aa=null,ra=null,oa=null,ec=new Map,nc=new Map,Ks=[],ww="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sv(n,t){switch(n){case"focusin":case"focusout":aa=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":ec.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nc.delete(t.pointerId)}}function Yo(n,t,e,i,s,a){return n===null||n.nativeEvent!==a?(n={blockedOn:t,domEventName:e,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Uo(t),t!==null&&l1(t)),n):(n.eventSystemFlags|=i,t=n.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),n)}function Tw(n,t,e,i,s){switch(t){case"focusin":return aa=Yo(aa,n,t,e,i,s),!0;case"dragenter":return ra=Yo(ra,n,t,e,i,s),!0;case"mouseover":return oa=Yo(oa,n,t,e,i,s),!0;case"pointerover":var a=s.pointerId;return ec.set(a,Yo(ec.get(a)||null,n,t,e,i,s)),!0;case"gotpointercapture":return a=s.pointerId,nc.set(a,Yo(nc.get(a)||null,n,t,e,i,s)),!0}return!1}function u1(n){var t=Ba(n.target);if(t!==null){var e=Po(t);if(e!==null){if(t=e.tag,t===13){if(t=Hy(e),t!==null){n.blockedOn=t,xM(n.priority,function(){if(e.tag===13){var i=Zn(),s=ca(e,i);s!==null&&An(s,e,i),_0(e,i)}});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ku(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var e=Pp(n.nativeEvent);if(e===null){e=n.nativeEvent;var i=new e.constructor(e.type,e);Qd=i,e.target.dispatchEvent(i),Qd=null}else return t=Uo(e),t!==null&&l1(t),n.blockedOn=e,!1;t.shift()}return!0}function bv(n,t,e){ku(n)&&e.delete(t)}function Aw(){Np=!1,aa!==null&&ku(aa)&&(aa=null),ra!==null&&ku(ra)&&(ra=null),oa!==null&&ku(oa)&&(oa=null),ec.forEach(bv),nc.forEach(bv)}function Hc(n,t){n.blockedOn===t&&(n.blockedOn=null,Np||(Np=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,Aw)))}var Vc=null;function Mv(n){Vc!==n&&(Vc=n,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,function(){Vc===n&&(Vc=null);for(var t=0;t<n.length;t+=3){var e=n[t],i=n[t+1],s=n[t+2];if(typeof i!="function"){if(x0(i||e)===null)continue;break}var a=Uo(e);a!==null&&(n.splice(t,3),t-=3,op(a,{pending:!0,data:s,method:e.method,action:i},i,s))}}))}function ic(n){function t(l){return Hc(l,n)}aa!==null&&Hc(aa,n),ra!==null&&Hc(ra,n),oa!==null&&Hc(oa,n),ec.forEach(t),nc.forEach(t);for(var e=0;e<Ks.length;e++){var i=Ks[e];i.blockedOn===n&&(i.blockedOn=null)}for(;0<Ks.length&&(e=Ks[0],e.blockedOn===null);)u1(e),e.blockedOn===null&&Ks.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(i=0;i<e.length;i+=3){var s=e[i],a=e[i+1],r=s[Un]||null;if(typeof a=="function")r||Mv(e);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Un]||null)o=r.formAction;else if(x0(s)!==null)continue}else o=r.action;typeof o=="function"?e[i+1]=o:(e.splice(i,3),i-=3),Mv(e)}}}function S0(n){this._internalRoot=n}nf.prototype.render=S0.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(J(409));var e=t.current,i=Zn();o1(e,i,n,t,null,null)};nf.prototype.unmount=S0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;n.tag===0&&ho(),o1(n.current,2,null,n,null,null),Jh(),t[No]=null}};function nf(n){this._internalRoot=n}nf.prototype.unstable_scheduleHydration=function(n){if(n){var t=Ky();n={blockedOn:null,target:n,priority:t};for(var e=0;e<Ks.length&&t!==0&&t<Ks[e].priority;e++);Ks.splice(e,0,n),e===0&&u1(n)}};var Ev=Oy.version;if(Ev!=="19.0.0")throw Error(J(527,Ev,"19.0.0"));Me.findDOMNode=function(n){var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(J(188)):(n=Object.keys(n).join(","),Error(J(268,n)));return n=oM(t),n=n!==null?Vy(n):null,n=n===null?null:n.stateNode,n};var Cw={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Gt,findFiberByHostInstance:Ba,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{lc=kc.inject(Cw),qn=kc}catch{}}Vh.createRoot=function(n,t){if(!zy(n))throw Error(J(299));var e=!1,i="",s=oS,a=lS,r=cS,o=null;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=a1(n,1,!1,null,null,e,i,s,a,r,o,null),n[No]=t.current,m0(n.nodeType===8?n.parentNode:n),new S0(t)};Vh.hydrateRoot=function(n,t,e){if(!zy(n))throw Error(J(299));var i=!1,s="",a=oS,r=lS,o=cS,l=null,c=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(l=e.unstable_transitionCallbacks),e.formState!==void 0&&(c=e.formState)),t=a1(n,1,!0,t,e??null,i,s,a,r,o,l,c),t.context=r1(null),e=t.current,i=Zn(),s=ea(i),s.callback=null,na(e,s,i),t.current.lanes=i,uc(t,i),Yi(t),n[No]=t.current,m0(n),new nf(t)};Vh.version="19.0.0";function h1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h1)}catch(n){console.error(n)}}h1(),Ry.exports=Vh;var Rw=Ry.exports;const Dw=yy(Rw),Lw="modulepreload",Pw=function(n){return"/Github-Page/"+n},wv={},Fn=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=Pw(l),l in wv)return;wv[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Lw,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((h,d)=>{f.addEventListener("load",h),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return s.then(r=>{for(const o of r||[])o.status==="rejected"&&a(o.reason);return t().catch(a)})};var Up=new Map,Gc=new WeakMap,Tv=0,Nw=void 0;function Uw(n){return n?(Gc.has(n)||(Tv+=1,Gc.set(n,Tv.toString())),Gc.get(n)):"0"}function Ow(n){return Object.keys(n).sort().filter(t=>n[t]!==void 0).map(t=>`${t}_${t==="root"?Uw(n.root):n[t]}`).toString()}function zw(n){const t=Ow(n);let e=Up.get(t);if(!e){const i=new Map;let s;const a=new IntersectionObserver(r=>{r.forEach(o=>{var l;const c=o.isIntersecting&&s.some(u=>o.intersectionRatio>=u);n.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=c),(l=i.get(o.target))==null||l.forEach(u=>{u(c,o)})})},n);s=a.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),e={id:t,observer:a,elements:i},Up.set(t,e)}return e}function Bw(n,t,e={},i=Nw){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=n.getBoundingClientRect();return t(i,{isIntersecting:i,target:n,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:s,observer:a,elements:r}=zw(e),o=r.get(n)||[];return r.has(n)||r.set(n,o),o.push(t),a.observe(n),function(){o.splice(o.indexOf(t),1),o.length===0&&(r.delete(n),a.unobserve(n)),r.size===0&&(a.disconnect(),Up.delete(s))}}function f1({threshold:n,delay:t,trackVisibility:e,rootMargin:i,root:s,triggerOnce:a,skip:r,initialInView:o,fallbackInView:l,onChange:c}={}){var u;const[f,h]=kt.useState(null),d=kt.useRef(c),[g,_]=kt.useState({inView:!!o,entry:void 0});d.current=c,kt.useEffect(()=>{if(r||!f)return;let y;return y=Bw(f,(x,T)=>{_({inView:x,entry:T}),d.current&&d.current(x,T),T.isIntersecting&&a&&y&&(y(),y=void 0)},{root:s,rootMargin:i,threshold:n,trackVisibility:e,delay:t},l),()=>{y&&y()}},[Array.isArray(n)?n.toString():n,f,s,i,a,r,e,l,t]);const m=(u=g.entry)==null?void 0:u.target,p=kt.useRef(void 0);!f&&m&&!a&&!r&&p.current!==m&&(p.current=m,_({inView:!!o,entry:void 0}));const v=[h,g.inView,g.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const mr=n=>{const{children:t,id:e,height:i,style:s,darkMode:a,revealPercent:r}=n,o=r||"-35% 0px",{ref:l,inView:c}=f1({root:null,rootMargin:o,triggerOnce:!0});return I.jsx("section",{ref:l,id:e,style:{minHeight:i,...s},className:`section ${c?"section-visible":"section-hidden"} ${a?"dark-mode":"light-mode"}`,children:I.jsx("div",{className:"section-content",children:t})})},d1=({darkMode:n,threeJSEntry:t,style:e})=>{const i=kt.useRef(null),s=kt.useRef(null),a=kt.useRef(null);return kt.useEffect(()=>{var c;if(typeof t!="function"){console.error("Invalid threeJSEntry function provided.");return}let r=(c=i.current)==null?void 0:c.parentElement;for(;r&&r.tagName!=="SECTION";)r=r.parentElement;s.current=r,console.log("Parent Element:",r),console.log("ThreeJS Container:",i.current),a.current=t(i,r),(()=>{var u;(u=a.current)!=null&&u.handleDarkModeChange&&a.current.handleDarkModeChange(n)})();const l=setTimeout(()=>{var u;(u=a.current)!=null&&u.handleResize&&a.current.handleResize(i)},1e3);return()=>{var u;clearTimeout(l),(u=a.current)!=null&&u.cleanup&&a.current.cleanup()}},[n,t]),I.jsx("div",{ref:i,style:{minWidth:"250px",minHeight:"250px",maxHeight:"100%",height:"100%",width:"100%",...e}})},b0=({children:n,className:t,style:e,childStyle:i,revealMode:s,revealPercent:a})=>{const r=s||"rootMargin",{ref:o,inView:l}=f1(r==="rootMargin"?{root:null,rootMargin:a,triggerOnce:!0}:{threshold:a,triggerOnce:!0});return I.jsx("div",{ref:o,className:`flex-reveal ${t} ${l?"flex-reveal-visible":"flex-reveal-hidden"}`,style:{display:"flex",width:"100%",...e},children:Hh.Children.map(n,(c,u)=>I.jsx("div",{className:"flex-child",style:{transitionDelay:`${u*.5}s`,flex:"1",flexWrap:"wrap",...i},children:c}))})},wh=({darkMode:n,text:t,style:e,onClick:i})=>(kt.useState(!1),kt.useState(!1),I.jsx("button",{onClick:i,className:`minimal-button ${n?"dark-mode":"light-mode"}`,style:{padding:"10px 20px",cursor:"pointer",...e},children:t})),Iw=({darkMode:n,isOpen:t,content:e,style:i,onClose:s})=>{if(!t)return null;console.log("LightboxModal darkMode:",n);const a=kt.isValidElement(e)?kt.cloneElement(e,{darkMode:n}):e;return I.jsx("div",{className:"lightbox-overlay",onClick:s,children:I.jsxs("div",{className:`lightbox-content ${n?"dark-mode":"light-mode"}`,onClick:r=>r.stopPropagation(),style:i,children:[I.jsx(wh,{darkMode:n,className:`close-button ${n?"dark-mode":"light-mode"}`,onClick:s,text:"X",style:{position:"absolute",top:"10px",right:"10px",fontWeight:"bold"}}),I.jsx("div",{children:a})]})})};class CU extends Hh.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,e){console.error("Error caught in ErrorBoundary:",t,e)}render(){return this.state.hasError?I.jsx("h2",{children:"Something went wrong. Please try again later."}):this.props.children}}const Fw=({darkMode:n,toggleDarkMode:t})=>(kt.useState({x:0,y:0}),I.jsxs("div",{className:"settings",children:[I.jsx("button",{className:"settings-icon",children:I.jsx("img",{src:`assets/Images/settings_gear_icon_${n?"White.png":"Black.png"}`,alt:"Settings",width:"20px",size:"20px"})}),I.jsxs("div",{className:`settings-menu-wrapper ${n?"dark-mode":"light-mode"}`,children:[" ",I.jsx("div",{className:`settings-menu ${n?"dark-mode":"light-mode"}`,children:I.jsxs("button",{onClick:t,className:"settingsMenuButton",children:[I.jsx("img",{className:"clickableImage",src:`assets/Images/${n?"DarkMode.png":"LightMode.png"}`,alt:n?"Dark Mode":"Light Mode",style:{width:"25px",height:"25px",marginRight:"0.5rem"}}),n?"Switch to Light Mode":"Switch to Dark Mode"]})})]})]}));function Hw({...n}){const t=kt.useRef(null),e=i=>{const s=t.current;s.style.height="auto",s.style.height=`${s.scrollHeight}px`,n.onChange&&n.onChange(i)};return I.jsx("textarea",{...n,ref:t,onInput:e,style:{width:"100%",minHeight:"40px",maxHeight:"300px",resize:"none",borderRadius:"4px",...n.style}})}const Vw=({darkMode:n})=>{const[t,e]=kt.useState({name:"",email:"",phone:"",message:""}),[i,s]=kt.useState({name:"",email:"",phone:"",message:""}),a=l=>{const{id:c,value:u}=l.target;e({...t,[c]:u})},r=()=>{const l={},c=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,u=/(^04\d{8}$)|(^\+?[1-9]\d{1,14}$)/;return t.name||(l.name="Name is required"),t.email?c.test(t.email)||(l.email="Please enter a valid email address"):l.email="Email is required",t.phone&&!u.test(t.phone)&&(l.phone="Please enter a valid phone number in international format"),t.message||(l.message="Message is required"),s(l),Object.keys(l).length===0},o=l=>{if(l.preventDefault(),r()){const c=document.getElementById("contactForm"),u=new FormData(c);fetch("https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/formResponse",{method:"POST",body:u,mode:"no-cors"}).then(f=>{alert("Form submitted successfully!")}).catch(f=>{console.error("Error submitting form:",f),alert("There was an error submitting the form.")})}};return I.jsxs("div",{className:`form-container ${n?"dark-mode":"light-mode"}`,children:[I.jsx("h2",{children:"Say Hi!"}),I.jsx("iframe",{name:"iframe",title:"Hidden iframe for form submission",style:{display:"none"}}),I.jsx("form",{action:"https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/formResponse",method:"POST",id:"contactForm",target:"iframe",children:I.jsxs("div",{style:{display:"flex",gap:"20px",flexDirection:"column"},children:[I.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",justifyContent:"center"},children:[I.jsxs("div",{className:`input-group ${n?"dark-mode":"light-mode"}`,style:{flexGrow:"2"},children:[I.jsx("input",{type:"text",className:t.name?"not-empty":"",id:"name",name:"entry.1954550861",placeholder:"",value:t.name,onChange:a,required:!0}),I.jsx("label",{htmlFor:"name",children:"Name"}),i.name&&I.jsx("span",{className:"error",children:i.name})]}),I.jsxs("div",{className:`input-group ${n?"dark-mode":"light-mode"}`,style:{flexGrow:"1"},children:[I.jsx("input",{type:"tel",id:"phone",name:"entry.561916195",className:t.phone?"not-empty":"",value:t.phone,onChange:a,pattern:"(^04\\d{8}$)|(^\\+?[1-9]\\d{1,14}$)",title:`Phone number must be in the format: 
                       - Local (Australian): 04xxxxxxxx 
                       - International: +1234567890`,placeholder:"Enter your phone number"}),I.jsx("label",{htmlFor:"phone",children:"Phone Number (Optional)"}),i.phone&&I.jsx("span",{className:"error",children:i.phone})]})]}),I.jsxs("div",{className:`input-group ${n?"dark-mode":"light-mode"}`,children:[I.jsx("input",{type:"email",id:"email",name:"entry.1965469943",className:t.email?"not-empty":"",value:t.email,onChange:a,required:!0}),I.jsx("label",{htmlFor:"email",children:"Email"}),i.email&&I.jsx("span",{className:"error",children:i.email})]}),I.jsxs("div",{className:`input-group ${n?"dark-mode":"light-mode"}`,children:[I.jsx(Hw,{id:"message",name:"entry.1168516071",value:t.message,onChange:a,required:!0}),I.jsx("label",{htmlFor:"message",children:"Message"}),i.message&&I.jsx("span",{className:"error",children:i.message})]}),I.jsx("button",{type:"submit",onClick:o,children:"Submit"})]})})]})},p1=({darkMode:n,scrollToSection:t})=>{const[e,i]=kt.useState(!1);kt.useState(!1),kt.useState(!1);const[s,a]=kt.useState(!1);return kt.useEffect(()=>{a(!!e)},[e]),I.jsx("div",{children:I.jsxs(b0,{revealMode:"threshold",style:{justifyContent:"center",alignItems:"center",gap:"2rem"},children:[I.jsxs("div",{className:"buttons",style:{display:"flex",gap:"1rem"},children:[I.jsx(wh,{darkMode:n,text:"Résumé",onClick:()=>window.open("assets/Files/Resume.pdf","_blank")}),I.jsx(wh,{darkMode:n,onClick:t,text:"Contact"})]}),I.jsxs("div",{className:"images",style:{display:"flex",gap:"1rem"},children:[I.jsx("div",{className:"img",style:{flex:"0"},children:I.jsx("a",{href:"https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b",target:"_blank",rel:"noreferer",children:I.jsx("img",{className:"clickableImage",src:"assets/Images/linkedIn_logo.png",alt:"LinkedIn",style:{width:"100px",height:"100px",marginRight:"8px"}})})}),I.jsx("div",{className:"img",style:{flex:"0"},children:I.jsx("a",{href:"https://github.com/Peregrine777",target:"_blank",rel:"noreferer",children:I.jsx("img",{className:"clickableImage",src:`assets/Images/github-logo_${n?"dark.png":"light.png"}`,alt:"GitHub",style:{width:"100px",height:"100px",marginRight:"8px"}})})})]})]})})},kw=({content:n,darkMode:t,contentRenderer:e})=>{const[i,s]=kt.useState(null),[a,r]=kt.useState(null),[o,l]=kt.useState(!1),[c,u]=kt.useState([]),[f,h]=kt.useState(!1),d=kt.useRef(null),g=p=>{if(d.current){const{left:v,width:y}=p.getBoundingClientRect(),x=document.querySelector(".menu-items").getBoundingClientRect().left;d.current.style.transform=`translateX(${v-x}px)`,d.current.style.width=`${y}px`}},_=(p,v)=>{g(p),i===v?(s(null),r(null),l(!1),h(!1)):(h(!1),setTimeout(()=>{var y;s(v),(y=n[v])!=null&&y.subOptions?(u(n[v].subOptions),r(n[v].subOptions[0]),l(!0)):l(!1),h(!0)},300))};kt.useEffect(()=>{const p=Object.keys(n)[0];s(p),h(!0)},[n]);const m=p=>{a===p?(r(null),h(!1)):(h(!1),setTimeout(()=>{r(p),h(!0)},300))};return I.jsxs("div",{className:`menu-bar ${t?"dark-mode":""}`,children:[I.jsxs("div",{className:"menu-items",children:[I.jsx("div",{className:"menu-underline",ref:d}),Object.keys(n).map(p=>I.jsx("div",{className:`menu-item ${i===p?"active":""}`,onClick:v=>_(v.currentTarget,p),children:p},p))]}),o&&I.jsx("div",{className:"sub-menu",children:c.map(p=>I.jsx("div",{className:`sub-menu-item ${a===p?"active":""}`,onClick:()=>m(p),children:p},p))}),I.jsx("div",{className:`content ${f?"fade-in":"fade-out"}`,style:{overflow:"auto"},children:e?e(i,a):a?`Content for ${a}`:i?`Content for ${i}`:"Select a section or sub-option"})]})},Gw=({darkMode:n,src:t,alt:e,style:i})=>{class s extends Hh.Component{constructor(){super(...arguments);Ne(this,"state",{noVariant:!1,hasError:!1,isLoading:!0});Ne(this,"handleError",()=>{const{noVariant:o}=this.state;if(!o){this.setState({noVariant:!0});return}this.setState({hasError:!0})});Ne(this,"handleLoad",()=>{this.setState({isLoading:!1})});Ne(this,"getImagePath",o=>{if(!o)return null;const[l,c]=o.split(/(?=\.[^.]+$)/);return n?`${l}_White${c}`:`${l}_Black${c}`})}render(){const{hasError:o,noVariant:l,isLoading:c}=this.state,{src:u,alt:f,style:h}=this.props,d=this.getImagePath(u),g={width:h.width||"40px",height:h.height||"40px",backgroundColor:"#f0f0f0",display:c?"block":"none"};return l?I.jsxs("div",{children:[I.jsx("div",{style:g}),I.jsx("img",{src:u,onError:this.handleError,onLoad:this.handleLoad,alt:f,style:{...h,display:c?"none":"unset",opacity:c?0:1,transition:"opacity 0.3s ease-in-out"}})]}):o?I.jsxs("div",{children:[I.jsx("div",{style:g}),I.jsx("img",{src:"assets/Images/404.png",alt:f,style:h})]}):I.jsxs("div",{children:[I.jsx("div",{style:g}),I.jsx("img",{src:d,onError:this.handleError,onLoad:this.handleLoad,alt:f,style:{...h,width:"40px",display:c?"none":"unset",opacity:c?0:1,transition:"opacity 0.3s ease-in-out"}})]})}}return I.jsx(s,{src:t,alt:e,style:i})},jw=({darkMode:n})=>{const[t,e]=kt.useState([]),[i,s]=kt.useState(!1);if(kt.useEffect(()=>{fetch("assets/Data/skills.json").then(r=>r.json()).then(r=>{console.log("Categories and Skill Counts:",r.map(o=>({category:o.title,skillCount:o.skills.length}))),e(r),s(!0)}).catch(r=>console.error("Error loading skills:",r))},[]),!i)return I.jsx("p",{children:"Loading skills..."});const a=r=>{if(!r)return null;const[o,l]=r.split(/(?=\.[^.]+$)/);return n?`${o}_White${l}`:`${o}_Black${l}`};return I.jsx("div",{children:t.map(r=>I.jsxs("div",{children:[I.jsx("h2",{style:{textAlign:"center",margin:"0.2rem"},children:r.title}),I.jsx("div",{className:"partial-divider"}),I.jsx(b0,{style:{justifyContent:"center",paddingTop:"1rem",paddingBottom:"1rem"},childStyle:{flexGrow:"0",minWidth:"150px"},children:r.skills.map(o=>(a(o.image),I.jsxs("div",{className:"skillItem",style:{},children:[I.jsx(Gw,{darkMode:n,src:`assets/Images/Skills/${o.image}`,alt:o.name,style:{maxWidth:"100%",width:"50px",objectFit:"contain",alignSelf:"normal",height:"auto"}}),I.jsx("p",{style:{marginTop:"0.1rem",fontFamily:"Montserrat, sans-serif",fontWeight:"400"},children:o.name})]},o.name)))})]},r.title))})},Ww=({darkMode:n,toggleDarkMode:t})=>I.jsxs("header",{className:`header ${n?"dark-mode":"light-mode"}`,children:[I.jsxs("div",{children:[I.jsx("img",{src:`assets/Images/Peregrine_${n?"dark.png":"light.png"}`,alt:"Logo",className:"logo",style:{verticalAlign:"text-bottom",objectFit:"contain",width:"auto",height:"30px"}}),I.jsx("h1",{style:{display:"inline-block",paddingLeft:"10px"},children:"Samuel Mckenzie-Sell"})]}),I.jsx(Fw,{darkMode:n,toggleDarkMode:t})]}),Xw=({darkMode:n})=>I.jsxs("div",{className:"container",style:{justifyContent:"center",alignItems:"center",flex:"0 1 auto",margin:"auto"},children:[I.jsx("div",{className:"column",style:{flexBasis:"10%",flex:"0 0 auto"},children:I.jsx("img",{src:`assets/Images/Peregrine_${n?"dark.png":"light.png"}`,style:{height:"100px",verticalAlign:"middle"}})}),I.jsx("div",{className:"column",style:{flexBasis:"25%",flex:"1 2 auto",alignItems:"left",textAlign:"left",padding:"0 10px"},children:I.jsx(p1,{darkMode:n})}),I.jsxs("div",{className:"column",style:{flex:"0",alignSelf:"start",lineHeight:"14px",textAlign:"left"},children:[I.jsx("p",{style:{margin:"0"},children:" samuelmckenziesell@gmail.com "}),I.jsx("p",{children:" +61 0401 384 885 "})]})]}),qw=({darkMode:n})=>{const t={Games:{subOptions:[]},"Game Engines":{subOptions:["OpenGL engine","Physics"]}},e=({title:c,img:u,link:f,description:h,children:d})=>I.jsxs("div",{className:"game",children:[I.jsx(i,{img:u,link:f}),I.jsx(s,{title:c,descr:h,children:d})]}),i=({img:c,link:u})=>I.jsx("a",{className:"game-icon",href:u,target:"_blank",rel:"noopener noreferrer",children:I.jsx("img",{className:"game-icon-img",src:c,alt:"Game Icon"})}),s=({title:c,descr:u,children:f})=>I.jsxs("div",{className:"game-info",children:[I.jsx(a,{children:c}),I.jsx(r,{children:f}),I.jsx(o,{children:u})]}),a=({children:c})=>I.jsx("div",{className:"game-title",children:c}),r=({children:c})=>I.jsx("div",{className:"features",children:c}),o=({children:c})=>I.jsx("div",{className:"game-description",children:c}),l=(c,u)=>u?I.jsxs("div",{children:[I.jsx("h2",{children:u}),I.jsxs("p",{children:["This is the content for ",u,"."]})]}):c?c==="Games"?I.jsxs("div",{children:[I.jsx("h2",{children:"Games"}),I.jsxs("div",{className:"game-list",children:[I.jsx(e,{title:"Gloria Armada",img:"assets/Images/Gloria_Armada.png",link:"https://chanel-parfait.itch.io/gloria-armada",description:"Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"}),I.jsx("h2",{style:{textAlign:"left",marginBottom:"0px"},children:"Tech Demoes"}),I.jsx(e,{title:"Gloria Armada",img:"assets/Images/Gloria_Armada.png",link:"https://chanel-parfait.itch.io/gloria-armada",description:"Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"})]})]}):I.jsxs("div",{children:[I.jsx("h2",{children:c}),I.jsxs("p",{children:["This is the content for ",c,"."]})]}):I.jsx("p",{children:"Please select a section or sub-option."});return I.jsxs("div",{style:{textAlign:"center",maxHeight:"100vh"},children:[I.jsx("h2",{children:"Game Development"}),I.jsx("div",{children:I.jsx(kw,{content:t,darkMode:n,contentRenderer:l})})]})},Yw=({darkMode:n})=>{const t=n?"white":"#333";return I.jsxs("section",{className:"analytics-overview",children:[I.jsxs("div",{className:"section-header",children:[I.jsx("h2",{style:{color:t},children:"Data Analytics Expertise"}),I.jsx("p",{children:"Leveraging data to uncover insights and drive business decisions. Although I work on sensitive projects, I can offer a range of services in statistical analysis, predictive modeling, and data visualization."})]}),I.jsxs("div",{className:"skills-and-tools",children:[I.jsx("h3",{children:"Tools & Techniques"}),I.jsxs("ul",{children:[I.jsx("li",{children:"Statistical Analysis: Python (pandas, numpy, scipy)"}),I.jsx("li",{children:"Data Visualization: Tableau, Power BI, Plotly"}),I.jsx("li",{children:"Database Management: SQL, PostgreSQL, NoSQL"}),I.jsx("li",{children:"Machine Learning: Scikit-learn, TensorFlow, Keras"}),I.jsx("li",{children:"Data Processing: ETL, web scraping, APIs"})]})]}),I.jsxs("div",{className:"impact",children:[I.jsx("h3",{children:"Impact"}),I.jsx("p",{children:"In my past work, I've helped businesses improve decision-making with data-driven insights, built predictive models for revenue forecasting, and developed interactive dashboards to monitor key performance metrics. My work directly contributes to operational efficiency and informed strategic decisions."})]}),I.jsx("div",{className:"visuals",children:I.jsx("div",{className:"sample-graph",children:I.jsx("img",{src:"/path-to-placeholder-image.png"})})})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const M0="168",fo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zw=0,Av=1,Kw=2,m1=1,g1=2,hs=3,Rs=0,Cn=1,Si=2,Mn=0,po=1,Op=2,Cv=3,Rv=4,v1=5,gs=100,Qw=101,$w=102,Jw=103,tT=104,zp=200,eT=201,nT=202,iT=203,Bp=204,Ip=205,_1=206,sT=207,y1=208,aT=209,rT=210,oT=211,lT=212,cT=213,uT=214,hT=0,fT=1,dT=2,Th=3,pT=4,mT=5,gT=6,vT=7,E0=0,_T=1,yT=2,la=0,w0=1,x1=2,S1=3,T0=4,xT=5,b1=6,M1=7,E1=300,To=301,Ao=302,Fp=303,Hp=304,sf=306,Co=1e3,Fa=1001,Vp=1002,xn=1003,ST=1004,jc=1005,bi=1006,Jf=1007,Ha=1008,Ds=1009,w1=1010,T1=1011,sc=1012,A0=1013,$a=1014,Vi=1015,wi=1016,C0=1017,R0=1018,Ja=1020,A1=35902,C1=1021,R1=1022,Wn=1023,D1=1024,L1=1025,mo=1026,tr=1027,D0=1028,L0=1029,P1=1030,P0=1031,N0=1033,Gu=33776,ju=33777,Wu=33778,Xu=33779,kp=35840,Gp=35841,jp=35842,Wp=35843,Xp=36196,qp=37492,Yp=37496,Zp=37808,Kp=37809,Qp=37810,$p=37811,Jp=37812,tm=37813,em=37814,nm=37815,im=37816,sm=37817,am=37818,rm=37819,om=37820,lm=37821,qu=36492,cm=36494,um=36495,N1=36283,hm=36284,fm=36285,dm=36286,bT=3200,MT=3201,af=0,ET=1,Qs="",yi="srgb",va="srgb-linear",U0="display-p3",rf="display-p3-linear",Ah="linear",ge="srgb",Ch="rec709",Rh="p3",gr=7680,Dv=519,wT=512,TT=513,AT=514,U1=515,CT=516,RT=517,DT=518,LT=519,Lv=35044,Pv="300 es",Ms=2e3,Dh=2001;class cr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nv=1234567;const Pl=Math.PI/180,Ro=180/Math.PI;function Io(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function Qe(n,t,e){return Math.max(t,Math.min(e,n))}function O0(n,t){return(n%t+t)%t}function PT(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function NT(n,t,e){return n!==t?(e-n)/(t-n):0}function Nl(n,t,e){return(1-e)*n+e*t}function UT(n,t,e,i){return Nl(n,t,1-Math.exp(-e*i))}function OT(n,t=1){return t-Math.abs(O0(n,t*2)-t)}function zT(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function BT(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function IT(n,t){return n+Math.floor(Math.random()*(t-n+1))}function FT(n,t){return n+Math.random()*(t-n)}function HT(n){return n*(.5-Math.random())}function VT(n){n!==void 0&&(Nv=n);let t=Nv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kT(n){return n*Pl}function GT(n){return n*Ro}function jT(n){return(n&n-1)===0&&n!==0}function WT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function XT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qT(n,t,e,i,s){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+i)/2),u=r((t+i)/2),f=a((t-i)/2),h=r((t-i)/2),d=a((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Lh={DEG2RAD:Pl,RAD2DEG:Ro,generateUUID:Io,clamp:Qe,euclideanModulo:O0,mapLinear:PT,inverseLerp:NT,lerp:Nl,damp:UT,pingpong:OT,smoothstep:zT,smootherstep:BT,randInt:IT,randFloat:FT,randFloatSpread:HT,seededRandom:VT,degToRad:kT,radToDeg:GT,isPowerOfTwo:jT,ceilPowerOfTwo:WT,floorPowerOfTwo:XT,setQuaternionFromProperEuler:qT,normalize:Sn,denormalize:Fr};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,s,a,r,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,l,c)}set(t,e,i,s,a,r,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],v=s[1],y=s[4],x=s[7],T=s[2],b=s[5],E=s[8];return a[0]=r*_+o*v+l*T,a[3]=r*m+o*y+l*b,a[6]=r*p+o*x+l*E,a[1]=c*_+u*v+f*T,a[4]=c*m+u*y+f*b,a[7]=c*p+u*x+f*E,a[2]=h*_+d*v+g*T,a[5]=h*m+d*y+g*b,a[8]=h*p+d*x+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*r-o*c,h=o*l-u*a,d=c*a-r*l,g=e*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*i)*_,t[2]=(o*i-s*r)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*a-o*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(r*e-i*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(td.makeScale(t,e)),this}rotate(t){return this.premultiply(td.makeRotation(-t)),this}translate(t,e){return this.premultiply(td.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const td=new Xt;function O1(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ac(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function YT(){const n=ac("canvas");return n.style.display="block",n}const Uv={};function Ul(n){n in Uv||(Uv[n]=!0,console.warn(n))}function ZT(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}const Ov=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zv=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zo={[va]:{transfer:Ah,primaries:Ch,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[yi]:{transfer:ge,primaries:Ch,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[rf]:{transfer:Ah,primaries:Rh,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(zv),fromReference:n=>n.applyMatrix3(Ov)},[U0]:{transfer:ge,primaries:Rh,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(zv),fromReference:n=>n.applyMatrix3(Ov).convertLinearToSRGB()}},KT=new Set([va,rf]),se={enabled:!0,_workingColorSpace:va,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!KT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Zo[t].toReference,s=Zo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Zo[n].primaries},getTransfer:function(n){return n===Qs?Ah:Zo[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Zo[t].luminanceCoefficients)}};function go(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ed(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vr;class QT{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vr===void 0&&(vr=ac("canvas")),vr.width=t.width,vr.height=t.height;const i=vr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=vr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ac("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=go(a[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(go(e[i]/255)*255):e[i]=go(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $T=0;class z1{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=Io(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(nd(s[r].image)):a.push(nd(s[r]))}else a=nd(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function nd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?QT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JT=0;class ln extends cr{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,i=Fa,s=Fa,a=bi,r=Ha,o=Wn,l=Ds,c=ln.DEFAULT_ANISOTROPY,u=Qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=Io(),this.name="",this.source=new z1(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==E1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Co:t.x=t.x-Math.floor(t.x);break;case Fa:t.x=t.x<0?0:1;break;case Vp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Co:t.y=t.y-Math.floor(t.y);break;case Fa:t.y=t.y<0?0:1;break;case Vp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=E1;ln.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,i=0,s=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(d+1)/2,T=(p+1)/2,b=(u+h)/4,E=(f+_)/4,D=(g+m)/4;return y>x&&y>T?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=b/i,a=E/i):x>T?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=b/s,a=D/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=E/a,s=D/a),this.set(i,s,a,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tA extends cr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new z1(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends tA{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class B1 extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eA extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let er=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-o;const p=l*h+c*d+u*g+f*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),b=Math.atan2(T,p*v);m=Math.sin(m*b)/T,o=Math.sin(o*b)/T}const x=o*v;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,a,r){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=a[r],h=a[r+1],d=a[r+2],g=a[r+3];return t[e]=o*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-o*d,t[e+2]=c*g+u*d+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(a/2),h=l(i/2),d=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,a=this._z,r=this._w;let o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=r*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bv.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bv.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*e-a*s),f=2*(a*i-r*e);return this.x=e+l*c+r*f-o*u,this.y=i+l*u+o*c-a*f,this.z=s+l*f+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return id.copy(this).projectOnVector(t),this.sub(id)}reflect(t){return this.sub(id.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new U,Bv=new er;class xc{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,pi):pi.fromBufferAttribute(a,r),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wc.copy(i.boundingBox)),Wc.applyMatrix4(t.matrixWorld),this.union(Wc)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ko),Xc.subVectors(this.max,Ko),_r.subVectors(t.a,Ko),yr.subVectors(t.b,Ko),xr.subVectors(t.c,Ko),zs.subVectors(yr,_r),Bs.subVectors(xr,yr),Ma.subVectors(_r,xr);let e=[0,-zs.z,zs.y,0,-Bs.z,Bs.y,0,-Ma.z,Ma.y,zs.z,0,-zs.x,Bs.z,0,-Bs.x,Ma.z,0,-Ma.x,-zs.y,zs.x,0,-Bs.y,Bs.x,0,-Ma.y,Ma.x,0];return!sd(e,_r,yr,xr,Xc)||(e=[1,0,0,0,1,0,0,0,1],!sd(e,_r,yr,xr,Xc))?!1:(qc.crossVectors(zs,Bs),e=[qc.x,qc.y,qc.z],sd(e,_r,yr,xr,Xc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ts=[new U,new U,new U,new U,new U,new U,new U,new U],pi=new U,Wc=new xc,_r=new U,yr=new U,xr=new U,zs=new U,Bs=new U,Ma=new U,Ko=new U,Xc=new U,qc=new U,Ea=new U;function sd(n,t,e,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){Ea.fromArray(n,a);const o=s.x*Math.abs(Ea.x)+s.y*Math.abs(Ea.y)+s.z*Math.abs(Ea.z),l=t.dot(Ea),c=e.dot(Ea),u=i.dot(Ea);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const nA=new xc,Qo=new U,ad=new U;class Sc{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):nA.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qo.subVectors(t,this.center);const e=Qo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Qo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qo.copy(t.center).add(ad)),this.expandByPoint(Qo.copy(t.center).sub(ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const es=new U,rd=new U,Yc=new U,Is=new U,od=new U,Zc=new U,ld=new U;let of=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(es.copy(this.origin).addScaledVector(this.direction,e),es.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){rd.copy(t).add(e).multiplyScalar(.5),Yc.copy(e).sub(t).normalize(),Is.copy(this.origin).sub(rd);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Yc),o=Is.dot(this.direction),l=-Is.dot(Yc),c=Is.lengthSq(),u=Math.abs(1-r*r);let f,h,d,g;if(u>0)if(f=r*l-o,h=r*o-l,g=a*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+r*h+2*o)+h*(r*f+h+2*l)+c}else h=a,f=Math.max(0,-(r*h+o)),d=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(r*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-r*a+o)),h=f>0?-a:Math.min(Math.max(-a,-l),a),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-a,-l),a),d=h*(h+2*l)+c):(f=Math.max(0,-(r*a+o)),h=f>0?a:Math.min(Math.max(-a,-l),a),d=-f*f+h*(h+2*l)+c);else h=r>0?-a:a,f=Math.max(0,-(r*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(rd).addScaledVector(Yc,h),d}intersectSphere(t,e){es.subVectors(t.center,this.origin);const i=es.dot(this.direction),s=es.dot(es)-i*i,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(a=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(a=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,es)!==null}intersectTriangle(t,e,i,s,a){od.subVectors(e,t),Zc.subVectors(i,t),ld.crossVectors(od,Zc);let r=this.direction.dot(ld),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Is.subVectors(this.origin,t);const l=o*this.direction.dot(Zc.crossVectors(Is,Zc));if(l<0)return null;const c=o*this.direction.dot(od.cross(Is));if(c<0||l+c>r)return null;const u=-o*Is.dot(ld);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ue{constructor(t,e,i,s,a,r,o,l,c,u,f,h,d,g,_,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,l,c,u,f,h,d,g,_,m)}set(t,e,i,s,a,r,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Sr.setFromMatrixColumn(t,0).length(),a=1/Sr.setFromMatrixColumn(t,1).length(),r=1/Sr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const h=r*u,d=r*f,g=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=r*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*o,e[4]=g*o-d,e[8]=r*c,e[1]=r*f,e[5]=r*u,e[9]=-o,e[2]=d*o-g,e[6]=_+h*o,e[10]=r*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*o,e[4]=-r*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=r*u,e[9]=_-h*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const h=r*u,d=r*f,g=o*u,_=o*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const h=r*l,d=r*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=r*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=r*l,d=r*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=r*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iA,t,sA)}lookAt(t,e,i){const s=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Fs.crossVectors(i,Hn),Fs.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Fs.crossVectors(i,Hn)),Fs.normalize(),Kc.crossVectors(Hn,Fs),s[0]=Fs.x,s[4]=Kc.x,s[8]=Hn.x,s[1]=Fs.y,s[5]=Kc.y,s[9]=Hn.y,s[2]=Fs.z,s[6]=Kc.z,s[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],y=i[7],x=i[11],T=i[15],b=s[0],E=s[4],D=s[8],M=s[12],S=s[1],L=s[5],H=s[9],P=s[13],B=s[2],F=s[6],R=s[10],j=s[14],O=s[3],W=s[7],nt=s[11],ct=s[15];return a[0]=r*b+o*S+l*B+c*O,a[4]=r*E+o*L+l*F+c*W,a[8]=r*D+o*H+l*R+c*nt,a[12]=r*M+o*P+l*j+c*ct,a[1]=u*b+f*S+h*B+d*O,a[5]=u*E+f*L+h*F+d*W,a[9]=u*D+f*H+h*R+d*nt,a[13]=u*M+f*P+h*j+d*ct,a[2]=g*b+_*S+m*B+p*O,a[6]=g*E+_*L+m*F+p*W,a[10]=g*D+_*H+m*R+p*nt,a[14]=g*M+_*P+m*j+p*ct,a[3]=v*b+y*S+x*B+T*O,a[7]=v*E+y*L+x*F+T*W,a[11]=v*D+y*H+x*R+T*nt,a[15]=v*M+y*P+x*j+T*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+a*l*f-s*c*f-a*o*h+i*c*h+s*o*d-i*l*d)+_*(+e*l*d-e*c*h+a*r*h-s*r*d+s*c*u-a*l*u)+m*(+e*c*f-e*o*d-a*r*f+i*r*d+a*o*u-i*c*u)+p*(-s*o*u-e*l*f+e*o*h+s*r*f-i*r*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,y=g*h*c-u*m*c-g*l*d+r*m*d+u*l*p-r*h*p,x=u*_*c-g*f*c+g*o*d-r*_*d-u*o*p+r*f*p,T=g*f*l-u*_*l-g*o*h+r*_*h+u*o*m-r*f*m,b=e*v+i*y+s*x+a*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=v*E,t[1]=(_*h*a-f*m*a-_*s*d+i*m*d+f*s*p-i*h*p)*E,t[2]=(o*m*a-_*l*a+_*s*c-i*m*c-o*s*p+i*l*p)*E,t[3]=(f*l*a-o*h*a-f*s*c+i*h*c+o*s*d-i*l*d)*E,t[4]=y*E,t[5]=(u*m*a-g*h*a+g*s*d-e*m*d-u*s*p+e*h*p)*E,t[6]=(g*l*a-r*m*a-g*s*c+e*m*c+r*s*p-e*l*p)*E,t[7]=(r*h*a-u*l*a+u*s*c-e*h*c-r*s*d+e*l*d)*E,t[8]=x*E,t[9]=(g*f*a-u*_*a-g*i*d+e*_*d+u*i*p-e*f*p)*E,t[10]=(r*_*a-g*o*a+g*i*c-e*_*c-r*i*p+e*o*p)*E,t[11]=(u*o*a-r*f*a-u*i*c+e*f*c+r*i*d-e*o*d)*E,t[12]=T*E,t[13]=(u*_*s-g*f*s+g*i*h-e*_*h-u*i*m+e*f*m)*E,t[14]=(g*o*s-r*_*s-g*i*l+e*_*l+r*i*m-e*o*m)*E,t[15]=(r*f*s-u*o*s+u*i*l-e*f*l-r*i*h+e*o*h)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,u=r+r,f=o+o,h=a*c,d=a*u,g=a*f,_=r*u,m=r*f,p=o*f,v=l*c,y=l*u,x=l*f,T=i.x,b=i.y,E=i.z;return s[0]=(1-(_+p))*T,s[1]=(d+x)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(h+p))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+y)*E,s[9]=(m-v)*E,s[10]=(1-(h+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let a=Sr.set(s[0],s[1],s[2]).length();const r=Sr.set(s[4],s[5],s[6]).length(),o=Sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],mi.copy(this);const c=1/a,u=1/r,f=1/o;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=f,mi.elements[9]*=f,mi.elements[10]*=f,e.setFromRotationMatrix(mi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,s,a,r,o=Ms){const l=this.elements,c=2*a/(e-t),u=2*a/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s);let d,g;if(o===Ms)d=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Dh)d=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,a,r,o=Ms){const l=this.elements,c=1/(e-t),u=1/(i-s),f=1/(r-a),h=(e+t)*c,d=(i+s)*u;let g,_;if(o===Ms)g=(r+a)*f,_=-2*f;else if(o===Dh)g=a*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Sr=new U,mi=new ue,iA=new U(0,0,0),sA=new U(1,1,1),Fs=new U,Kc=new U,Hn=new U,Iv=new ue,Fv=new er;class Ai{constructor(t=0,e=0,i=0,s=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Iv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Iv,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fv.setFromEuler(this),this.setFromQuaternion(Fv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class I1{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let aA=0;const Hv=new U,br=new er,ns=new ue,Qc=new U,$o=new U,rA=new U,oA=new er,Vv=new U(1,0,0),kv=new U(0,1,0),Gv=new U(0,0,1),jv={type:"added"},lA={type:"removed"},Mr={type:"childadded",child:null},cd={type:"childremoved",child:null};class me extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aA++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new U,e=new Ai,i=new er,s=new U(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Xt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(Vv,t)}rotateY(t){return this.rotateOnAxis(kv,t)}rotateZ(t){return this.rotateOnAxis(Gv,t)}translateOnAxis(t,e){return Hv.copy(t).applyQuaternion(this.quaternion),this.position.add(Hv.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vv,t)}translateY(t){return this.translateOnAxis(kv,t)}translateZ(t){return this.translateOnAxis(Gv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qc.copy(t):Qc.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt($o,Qc,this.up):ns.lookAt(Qc,$o,this.up),this.quaternion.setFromRotationMatrix(ns),s&&(ns.extractRotation(s.matrixWorld),br.setFromRotationMatrix(ns),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jv),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lA),cd.child=t,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ns.multiply(t.parent.matrixWorld)),t.applyMatrix4(ns),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jv),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,t,rA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,oA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(t.shapes,f)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),f=r(t.shapes),h=r(t.skeletons),d=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}me.DEFAULT_UP=new U(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new U,is=new U,ud=new U,ss=new U,Er=new U,wr=new U,Wv=new U,hd=new U,fd=new U,dd=new U;class Hi{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),gi.subVectors(t,e),s.cross(gi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){gi.subVectors(s,e),is.subVectors(i,e),ud.subVectors(t,e);const r=gi.dot(gi),o=gi.dot(is),l=gi.dot(ud),c=is.dot(is),u=is.dot(ud),f=r*c-o*o;if(f===0)return a.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(r*u-o*l)*h;return a.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(t,e,i,s,a,r,o,l){return this.getBarycoord(t,e,i,s,ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ss.x),l.addScaledVector(r,ss.y),l.addScaledVector(o,ss.z),l)}static isFrontFacing(t,e,i,s){return gi.subVectors(i,e),is.subVectors(t,e),gi.cross(is).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),is.subVectors(this.a,this.b),gi.cross(is).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return Hi.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return Hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let r,o;Er.subVectors(s,i),wr.subVectors(a,i),hd.subVectors(t,i);const l=Er.dot(hd),c=wr.dot(hd);if(l<=0&&c<=0)return e.copy(i);fd.subVectors(t,s);const u=Er.dot(fd),f=wr.dot(fd);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(i).addScaledVector(Er,r);dd.subVectors(t,a);const d=Er.dot(dd),g=wr.dot(dd);if(g>=0&&d<=g)return e.copy(a);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(wr,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Wv.subVectors(a,s),o=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Wv,o);const p=1/(m+_+h);return r=_*p,o=h*p,e.copy(i).addScaledVector(Er,r).addScaledVector(wr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const F1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hs={h:0,s:0,l:0},$c={h:0,s:0,l:0};function pd(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}let _t=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=O0(t,1),e=Qe(e,0,1),i=Qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=pd(r,a,t+1/3),this.g=pd(r,a,t),this.b=pd(r,a,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=yi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yi){const i=F1[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=go(t.r),this.g=go(t.g),this.b=go(t.b),this}copyLinearToSRGB(t){return this.r=ed(t.r),this.g=ed(t.g),this.b=ed(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return se.fromWorkingColorSpace(gn.copy(this),t),Math.round(Qe(gn.r*255,0,255))*65536+Math.round(Qe(gn.g*255,0,255))*256+Math.round(Qe(gn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(gn.copy(this),e);const i=gn.r,s=gn.g,a=gn.b,r=Math.max(i,s,a),o=Math.min(i,s,a);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=u<=.5?f/(r+o):f/(2-r-o),r){case i:l=(s-a)/f+(s<a?6:0);break;case s:l=(a-i)/f+2;break;case a:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=yi){se.fromWorkingColorSpace(gn.copy(this),t);const e=gn.r,i=gn.g,s=gn.b;return t!==yi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hs),this.setHSL(Hs.h+t,Hs.s+e,Hs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hs),t.getHSL($c);const i=Nl(Hs.h,$c.h,e),s=Nl(Hs.s,$c.s,e),a=Nl(Hs.l,$c.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const gn=new _t;_t.NAMES=F1;let cA=0,Ci=class extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cA++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=po,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bp,this.blendDst=Ip,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Th,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(i.blending=this.blending),this.side!==Rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bp&&(i.blendSrc=this.blendSrc),this.blendDst!==Ip&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Th&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class Fo extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new U,Jc=new ht;class Ti{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ul("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Jc.fromBufferAttribute(this,e),Jc.applyMatrix3(t),this.setXY(e,Jc.x,Jc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),i=Sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),i=Sn(i,this.array),s=Sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),i=Sn(i,this.array),s=Sn(s,this.array),a=Sn(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lv&&(t.usage=this.usage),t}}class H1 extends Ti{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class V1 extends Ti{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ze extends Ti{constructor(t,e,i){super(new Float32Array(t),e,i)}}let uA=0;const ei=new ue,md=new me,Tr=new U,Vn=new xc,Jo=new xc,nn=new U;class On extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uA++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(O1(t)?V1:H1)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Xt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return md.lookAt(t),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ze(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];Vn.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Jo.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Vn.min,Jo.min),Vn.expandByPoint(nn),nn.addVectors(Vn.max,Jo.max),Vn.expandByPoint(nn)):(Vn.expandByPoint(Jo.min),Vn.expandByPoint(Jo.max))}Vn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)nn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(nn));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)nn.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(t,c),nn.add(Tr)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new U,l[D]=new U;const c=new U,u=new U,f=new U,h=new ht,d=new ht,g=new ht,_=new U,m=new U;function p(D,M,S){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(a,D),d.fromBufferAttribute(a,M),g.fromBufferAttribute(a,S),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),o[D].add(_),o[M].add(_),o[S].add(_),l[D].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,M=v.length;D<M;++D){const S=v[D],L=S.start,H=S.count;for(let P=L,B=L+H;P<B;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const y=new U,x=new U,T=new U,b=new U;function E(D){T.fromBufferAttribute(s,D),b.copy(T);const M=o[D];y.copy(M),y.sub(T.multiplyScalar(T.dot(M))).normalize(),x.crossVectors(b,M);const L=x.dot(l[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,M=v.length;D<M;++D){const S=v[D],L=S.start,H=S.count;for(let P=L,B=L+H;P<B;P+=3)E(t.getX(P+0)),E(t.getX(P+1)),E(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new U,a=new U,r=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),u.subVectors(r,a),f.subVectors(s,a),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),a.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,a),f.subVectors(s,a),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Ti(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new On,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const a=t.morphAttributes;for(const c in a){const u=[],f=a[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xv=new ue,wa=new of,tu=new Sc,qv=new U,Ar=new U,Cr=new U,Rr=new U,gd=new U,eu=new U,nu=new ht,iu=new ht,su=new ht,Yv=new U,Zv=new U,Kv=new U,au=new U,ru=new U;class Be extends me{constructor(t=new On,e=new Fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){eu.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],f=a[l];u!==0&&(gd.fromBufferAttribute(f,t),r?eu.addScaledVector(gd,u):eu.addScaledVector(gd.sub(e),u))}e.add(eu)}return e}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tu.copy(i.boundingSphere),tu.applyMatrix4(a),wa.copy(t.ray).recast(t.near),!(tu.containsPoint(wa.origin)===!1&&(wa.intersectSphere(tu,qv)===null||wa.origin.distanceToSquared(qv)>(t.far-t.near)**2))&&(Xv.copy(a).invert(),wa.copy(t.ray).applyMatrix4(Xv),!(i.boundingBox!==null&&wa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wa)))}_computeIntersections(t,e,i){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,h=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=r[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,T=y;x<T;x+=3){const b=o.getX(x),E=o.getX(x+1),D=o.getX(x+2);s=ou(this,p,t,i,c,u,f,b,E,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=ou(this,r,t,i,c,u,f,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=r[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,T=y;x<T;x+=3){const b=x,E=x+1,D=x+2;s=ou(this,p,t,i,c,u,f,b,E,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;s=ou(this,r,t,i,c,u,f,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function hA(n,t,e,i,s,a,r,o){let l;if(t.side===Cn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Rs,o),l===null)return null;ru.copy(o),ru.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ru);return c<e.near||c>e.far?null:{distance:c,point:ru.clone(),object:n}}function ou(n,t,e,i,s,a,r,o,l,c){n.getVertexPosition(o,Ar),n.getVertexPosition(l,Cr),n.getVertexPosition(c,Rr);const u=hA(n,t,e,i,Ar,Cr,Rr,au);if(u){s&&(nu.fromBufferAttribute(s,o),iu.fromBufferAttribute(s,l),su.fromBufferAttribute(s,c),u.uv=Hi.getInterpolation(au,Ar,Cr,Rr,nu,iu,su,new ht)),a&&(nu.fromBufferAttribute(a,o),iu.fromBufferAttribute(a,l),su.fromBufferAttribute(a,c),u.uv1=Hi.getInterpolation(au,Ar,Cr,Rr,nu,iu,su,new ht)),r&&(Yv.fromBufferAttribute(r,o),Zv.fromBufferAttribute(r,l),Kv.fromBufferAttribute(r,c),u.normal=Hi.getInterpolation(au,Ar,Cr,Rr,Yv,Zv,Kv,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};Hi.getNormal(Ar,Cr,Rr,f.normal),u.face=f}return u}class _a extends On{constructor(t=1,e=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,a,4),g("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(f,2));function g(_,m,p,v,y,x,T,b,E,D,M){const S=x/E,L=T/D,H=x/2,P=T/2,B=b/2,F=E+1,R=D+1;let j=0,O=0;const W=new U;for(let nt=0;nt<R;nt++){const ct=nt*L-P;for(let rt=0;rt<F;rt++){const Nt=rt*S-H;W[_]=Nt*v,W[m]=ct*y,W[p]=B,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=b>0?1:-1,u.push(W.x,W.y,W.z),f.push(rt/E),f.push(1-nt/D),j+=1}}for(let nt=0;nt<D;nt++)for(let ct=0;ct<E;ct++){const rt=h+ct+F*nt,Nt=h+ct+F*(nt+1),K=h+(ct+1)+F*(nt+1),at=h+(ct+1)+F*nt;l.push(rt,Nt,at),l.push(Nt,K,at),O+=6}o.addGroup(d,O,M),d+=O,h+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Do(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function bn(n){const t={};for(let e=0;e<n.length;e++){const i=Do(n[e]);for(const s in i)t[s]=i[s]}return t}function fA(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function k1(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Xn={clone:Do,merge:bn};var dA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class be extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dA,this.fragmentShader=pA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Do(t.uniforms),this.uniformsGroups=fA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class G1 extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Ms}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vs=new U,Qv=new ht,$v=new ht;class En extends G1{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(Pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vs.x,Vs.y).multiplyScalar(-t/Vs.z),Vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vs.x,Vs.y).multiplyScalar(-t/Vs.z)}getViewSize(t,e){return this.getViewBounds(t,Qv,$v),e.subVectors($v,Qv)}setViewOffset(t,e,i,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Dr=-90,Lr=1;class mA extends me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Dr,Lr,t,e);s.layers=this.layers,this.add(s);const a=new En(Dr,Lr,t,e);a.layers=this.layers,this.add(a);const r=new En(Dr,Lr,t,e);r.layers=this.layers,this.add(r);const o=new En(Dr,Lr,t,e);o.layers=this.layers,this.add(o);const l=new En(Dr,Lr,t,e);l.layers=this.layers,this.add(l);const c=new En(Dr,Lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===Ms)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dh)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class j1 extends ln{constructor(t,e,i,s,a,r,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:To,super(t,e,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gA extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new j1(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _a(5,5,5),a=new be({name:"CubemapFromEquirect",uniforms:Do(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Mn});a.uniforms.tEquirect.value=e;const r=new Be(s,a),o=e.minFilter;return e.minFilter===Ha&&(e.minFilter=bi),new mA(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(a)}}const vd=new U,vA=new U,_A=new Xt;let fs=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=vd.subVectors(i,e).cross(vA.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(vd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_A.getNormalMatrix(t),s=this.coplanarPoint(vd).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ta=new Sc,lu=new U;class z0{constructor(t=new fs,e=new fs,i=new fs,s=new fs,a=new fs,r=new fs){this.planes=[t,e,i,s,a,r]}set(t,e,i,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ms){const i=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],y=s[14],x=s[15];if(i[0].setComponents(l-a,h-c,m-d,x-p).normalize(),i[1].setComponents(l+a,h+c,m+d,x+p).normalize(),i[2].setComponents(l+r,h+u,m+g,x+v).normalize(),i[3].setComponents(l-r,h-u,m-g,x-v).normalize(),i[4].setComponents(l-o,h-f,m-_,x-y).normalize(),e===Ms)i[5].setComponents(l+o,h+f,m+_,x+y).normalize();else if(e===Dh)i[5].setComponents(o,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ta.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ta.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ta)}intersectsSprite(t){return Ta.center.set(0,0,0),Ta.radius=.7071067811865476,Ta.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ta)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(lu.x=s.normal.x>0?t.max.x:t.min.x,lu.y=s.normal.y>0?t.max.y:t.min.y,lu.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lu)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W1(){let n=null,t=!1,e=null,i=null;function s(a,r){e(a,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function yA(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,o),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}class da extends On{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*h-r;for(let y=0;y<c;y++){const x=y*f-a;g.push(x,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const y=v+c*p,x=v+c*(p+1),T=v+1+c*(p+1),b=v+1+c*p;d.push(y,x,b),d.push(x,T,b)}this.setIndex(d),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.width,t.height,t.widthSegments,t.heightSegments)}}var xA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SA=`#ifdef USE_ALPHAHASH
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
#endif`,bA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TA=`#ifdef USE_AOMAP
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
#endif`,AA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CA=`#ifdef USE_BATCHING
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
#endif`,RA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NA=`#ifdef USE_IRIDESCENCE
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
#endif`,UA=`#ifdef USE_BUMPMAP
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
#endif`,OA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GA=`#define PI 3.141592653589793
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
} // validated`,jA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WA=`vec3 transformedNormal = objectNormal;
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
#endif`,XA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KA="gl_FragColor = linearToOutputTexel( gl_FragColor );",QA=`
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
}`,$A=`#ifdef USE_ENVMAP
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
#endif`,JA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tC=`#ifdef USE_ENVMAP
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
#endif`,eC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nC=`#ifdef USE_ENVMAP
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
#endif`,iC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oC=`#ifdef USE_GRADIENTMAP
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
}`,lC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hC=`uniform bool receiveShadow;
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
#endif`,fC=`#ifdef USE_ENVMAP
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
#endif`,dC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vC=`PhysicalMaterial material;
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
#endif`,_C=`struct PhysicalMaterial {
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
}`,yC=`
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
#endif`,xC=`#if defined( RE_IndirectDiffuse )
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
#endif`,SC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RC=`#if defined( USE_POINTS_UV )
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
#endif`,DC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OC=`#ifdef USE_MORPHTARGETS
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
#endif`,zC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kC=`#ifdef USE_NORMALMAP
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
#endif`,GC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$C=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s2=`float getShadowMask() {
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
}`,a2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r2=`#ifdef USE_SKINNING
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
#endif`,o2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l2=`#ifdef USE_SKINNING
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
#endif`,c2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d2=`#ifdef USE_TRANSMISSION
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
#endif`,p2=`#ifdef USE_TRANSMISSION
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
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x2=`uniform sampler2D t2D;
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
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w2=`#include <common>
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
}`,T2=`#if DEPTH_PACKING == 3200
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
}`,A2=`#define DISTANCE
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
}`,C2=`#define DISTANCE
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
}`,R2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L2=`uniform float scale;
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
}`,P2=`uniform vec3 diffuse;
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
}`,N2=`#include <common>
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
}`,U2=`uniform vec3 diffuse;
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
}`,O2=`#define LAMBERT
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
}`,z2=`#define LAMBERT
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
}`,B2=`#define MATCAP
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
}`,I2=`#define MATCAP
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
}`,F2=`#define NORMAL
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
}`,H2=`#define NORMAL
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
}`,V2=`#define PHONG
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
}`,k2=`#define PHONG
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
}`,G2=`#define STANDARD
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
}`,j2=`#define STANDARD
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
}`,W2=`#define TOON
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
}`,X2=`#define TOON
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
}`,q2=`uniform float size;
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
}`,Y2=`uniform vec3 diffuse;
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
}`,Z2=`#include <common>
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
}`,K2=`uniform vec3 color;
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
}`,Q2=`uniform float rotation;
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
}`,$2=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:xA,alphahash_pars_fragment:SA,alphamap_fragment:bA,alphamap_pars_fragment:MA,alphatest_fragment:EA,alphatest_pars_fragment:wA,aomap_fragment:TA,aomap_pars_fragment:AA,batching_pars_vertex:CA,batching_vertex:RA,begin_vertex:DA,beginnormal_vertex:LA,bsdfs:PA,iridescence_fragment:NA,bumpmap_pars_fragment:UA,clipping_planes_fragment:OA,clipping_planes_pars_fragment:zA,clipping_planes_pars_vertex:BA,clipping_planes_vertex:IA,color_fragment:FA,color_pars_fragment:HA,color_pars_vertex:VA,color_vertex:kA,common:GA,cube_uv_reflection_fragment:jA,defaultnormal_vertex:WA,displacementmap_pars_vertex:XA,displacementmap_vertex:qA,emissivemap_fragment:YA,emissivemap_pars_fragment:ZA,colorspace_fragment:KA,colorspace_pars_fragment:QA,envmap_fragment:$A,envmap_common_pars_fragment:JA,envmap_pars_fragment:tC,envmap_pars_vertex:eC,envmap_physical_pars_fragment:fC,envmap_vertex:nC,fog_vertex:iC,fog_pars_vertex:sC,fog_fragment:aC,fog_pars_fragment:rC,gradientmap_pars_fragment:oC,lightmap_pars_fragment:lC,lights_lambert_fragment:cC,lights_lambert_pars_fragment:uC,lights_pars_begin:hC,lights_toon_fragment:dC,lights_toon_pars_fragment:pC,lights_phong_fragment:mC,lights_phong_pars_fragment:gC,lights_physical_fragment:vC,lights_physical_pars_fragment:_C,lights_fragment_begin:yC,lights_fragment_maps:xC,lights_fragment_end:SC,logdepthbuf_fragment:bC,logdepthbuf_pars_fragment:MC,logdepthbuf_pars_vertex:EC,logdepthbuf_vertex:wC,map_fragment:TC,map_pars_fragment:AC,map_particle_fragment:CC,map_particle_pars_fragment:RC,metalnessmap_fragment:DC,metalnessmap_pars_fragment:LC,morphinstance_vertex:PC,morphcolor_vertex:NC,morphnormal_vertex:UC,morphtarget_pars_vertex:OC,morphtarget_vertex:zC,normal_fragment_begin:BC,normal_fragment_maps:IC,normal_pars_fragment:FC,normal_pars_vertex:HC,normal_vertex:VC,normalmap_pars_fragment:kC,clearcoat_normal_fragment_begin:GC,clearcoat_normal_fragment_maps:jC,clearcoat_pars_fragment:WC,iridescence_pars_fragment:XC,opaque_fragment:qC,packing:YC,premultiplied_alpha_fragment:ZC,project_vertex:KC,dithering_fragment:QC,dithering_pars_fragment:$C,roughnessmap_fragment:JC,roughnessmap_pars_fragment:t2,shadowmap_pars_fragment:e2,shadowmap_pars_vertex:n2,shadowmap_vertex:i2,shadowmask_pars_fragment:s2,skinbase_vertex:a2,skinning_pars_vertex:r2,skinning_vertex:o2,skinnormal_vertex:l2,specularmap_fragment:c2,specularmap_pars_fragment:u2,tonemapping_fragment:h2,tonemapping_pars_fragment:f2,transmission_fragment:d2,transmission_pars_fragment:p2,uv_pars_fragment:m2,uv_pars_vertex:g2,uv_vertex:v2,worldpos_vertex:_2,background_vert:y2,background_frag:x2,backgroundCube_vert:S2,backgroundCube_frag:b2,cube_vert:M2,cube_frag:E2,depth_vert:w2,depth_frag:T2,distanceRGBA_vert:A2,distanceRGBA_frag:C2,equirect_vert:R2,equirect_frag:D2,linedashed_vert:L2,linedashed_frag:P2,meshbasic_vert:N2,meshbasic_frag:U2,meshlambert_vert:O2,meshlambert_frag:z2,meshmatcap_vert:B2,meshmatcap_frag:I2,meshnormal_vert:F2,meshnormal_frag:H2,meshphong_vert:V2,meshphong_frag:k2,meshphysical_vert:G2,meshphysical_frag:j2,meshtoon_vert:W2,meshtoon_frag:X2,points_vert:q2,points_frag:Y2,shadow_vert:Z2,shadow_frag:K2,sprite_vert:Q2,sprite_frag:$2},dt={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Bi={basic:{uniforms:bn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:bn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new _t(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:bn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:bn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:bn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new _t(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:bn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:bn([dt.points,dt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:bn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:bn([dt.common,dt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:bn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:bn([dt.sprite,dt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:bn([dt.common,dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:bn([dt.lights,dt.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Bi.physical={uniforms:bn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const cu={r:0,b:0,g:0},Aa=new Ai,J2=new ue;function tR(n,t,e,i,s,a,r){const o=new _t(0);let l=a===!0?0:1,c,u,f=null,h=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(o,l):x&&x.isColor&&(p(x,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===sf)?(u===void 0&&(u=new Be(new _a(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:Do(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Aa.copy(y.backgroundRotation),Aa.x*=-1,Aa.y*=-1,Aa.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Aa.y*=-1,Aa.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(J2.makeRotationFromEuler(Aa)),u.material.toneMapped=se.getTransfer(x.colorSpace)!==ge,(f!==x||h!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Be(new da(2,2),new be({name:"BackgroundMaterial",uniforms:Do(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=se.getTransfer(x.colorSpace)!==ge,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(cu,k1(n)),i.buffers.color.setClear(cu.r,cu.g,cu.b,y,r)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:_,addToRenderList:m}}function eR(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let a=s,r=!1;function o(S,L,H,P,B){let F=!1;const R=f(P,H,L);a!==R&&(a=R,c(a.object)),F=d(S,P,H,B),F&&g(S,P,H,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(F||r)&&(r=!1,x(S,L,H,P),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,L,H){const P=H.wireframe===!0;let B=i[S.id];B===void 0&&(B={},i[S.id]=B);let F=B[L.id];F===void 0&&(F={},B[L.id]=F);let R=F[P];return R===void 0&&(R=h(l()),F[P]=R),R}function h(S){const L=[],H=[],P=[];for(let B=0;B<e;B++)L[B]=0,H[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:P,object:S,attributes:{},index:null}}function d(S,L,H,P){const B=a.attributes,F=L.attributes;let R=0;const j=H.getAttributes();for(const O in j)if(j[O].location>=0){const nt=B[O];let ct=F[O];if(ct===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),nt===void 0||nt.attribute!==ct||ct&&nt.data!==ct.data)return!0;R++}return a.attributesNum!==R||a.index!==P}function g(S,L,H,P){const B={},F=L.attributes;let R=0;const j=H.getAttributes();for(const O in j)if(j[O].location>=0){let nt=F[O];nt===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor));const ct={};ct.attribute=nt,nt&&nt.data&&(ct.data=nt.data),B[O]=ct,R++}a.attributes=B,a.attributesNum=R,a.index=P}function _(){const S=a.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const H=a.newAttributes,P=a.enabledAttributes,B=a.attributeDivisors;H[S]=1,P[S]===0&&(n.enableVertexAttribArray(S),P[S]=1),B[S]!==L&&(n.vertexAttribDivisor(S,L),B[S]=L)}function v(){const S=a.newAttributes,L=a.enabledAttributes;for(let H=0,P=L.length;H<P;H++)L[H]!==S[H]&&(n.disableVertexAttribArray(H),L[H]=0)}function y(S,L,H,P,B,F,R){R===!0?n.vertexAttribIPointer(S,L,H,B,F):n.vertexAttribPointer(S,L,H,P,B,F)}function x(S,L,H,P){_();const B=P.attributes,F=H.getAttributes(),R=L.defaultAttributeValues;for(const j in F){const O=F[j];if(O.location>=0){let W=B[j];if(W===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){const nt=W.normalized,ct=W.itemSize,rt=t.get(W);if(rt===void 0)continue;const Nt=rt.buffer,K=rt.type,at=rt.bytesPerElement,yt=K===n.INT||K===n.UNSIGNED_INT||W.gpuType===A0;if(W.isInterleavedBufferAttribute){const pt=W.data,Ct=pt.stride,Lt=W.offset;if(pt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<O.locationSize;Ht++)p(O.location+Ht,pt.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ht=0;Ht<O.locationSize;Ht++)m(O.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,Nt);for(let Ht=0;Ht<O.locationSize;Ht++)y(O.location+Ht,ct/O.locationSize,K,nt,Ct*at,(Lt+ct/O.locationSize*Ht)*at,yt)}else{if(W.isInstancedBufferAttribute){for(let pt=0;pt<O.locationSize;pt++)p(O.location+pt,W.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let pt=0;pt<O.locationSize;pt++)m(O.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Nt);for(let pt=0;pt<O.locationSize;pt++)y(O.location+pt,ct/O.locationSize,K,nt,ct*at,ct/O.locationSize*pt*at,yt)}}else if(R!==void 0){const nt=R[j];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(O.location,nt);break;case 3:n.vertexAttrib3fv(O.location,nt);break;case 4:n.vertexAttrib4fv(O.location,nt);break;default:n.vertexAttrib1fv(O.location,nt)}}}}v()}function T(){D();for(const S in i){const L=i[S];for(const H in L){const P=L[H];for(const B in P)u(P[B].object),delete P[B];delete L[H]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const H in L){const P=L[H];for(const B in P)u(P[B].object),delete P[B];delete L[H]}delete i[S.id]}function E(S){for(const L in i){const H=i[L];if(H[S.id]===void 0)continue;const P=H[S.id];for(const B in P)u(P[B].object),delete P[B];delete H[S.id]}}function D(){M(),r=!0,a!==s&&(a=s,c(a.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function nR(n,t,e){let i;function s(c){i=c}function a(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function r(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,i,h[_])}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function iR(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==Wn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const E=b===wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Ds&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Vi&&!E)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:x,maxSamples:T}}function sR(n){const t=this;let e=null,i=0,s=!1,a=!1;const r=new fs,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||a&&!m)a?u(null):c();else{const v=a?0:i,y=v*4;let x=p.clippingState||null;l.value=x,x=u(g,h,y,d);for(let T=0;T!==y;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)r.copy(f[y]).applyMatrix4(v,o),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function aR(n){let t=new WeakMap;function e(r,o){return o===Fp?r.mapping=To:o===Hp&&(r.mapping=Ao),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Fp||o===Hp)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new gA(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class lf extends G1{constructor(t=-1,e=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const to=4,Jv=[.125,.215,.35,.446,.526,.582],Oa=20,_d=new lf,t_=new _t;let yd=null,xd=0,Sd=0,bd=!1;const Na=(1+Math.sqrt(5))/2,Pr=1/Na,e_=[new U(-Na,Pr,0),new U(Na,Pr,0),new U(-Pr,0,Na),new U(Pr,0,Na),new U(0,Na,-Pr),new U(0,Na,Pr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Ph{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){yd=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yd,xd,Sd),this._renderer.xr.enabled=bd,t.scissorTest=!1,uu(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===To||t.mapping===Ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yd=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:wi,format:Wn,colorSpace:va,depthBuffer:!1},s=n_(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n_(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rR(a)),this._blurMaterial=oR(a,t,e)}return s}_compileMaterial(t){const e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,_d)}_sceneToCubeUV(t,e,i,s){const o=new En(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(t_),u.toneMapping=la,u.autoClear=!1;const d=new Fo({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new Be(new _a,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(t_),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;uu(s,v*y,p>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===To||t.mapping===Ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i_());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new Be(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;uu(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,_d)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=e_[(s-a-1)%e_.length];this._blur(t,a-1,a,r,o)}e.autoClear=i}_blur(t,e,i,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Be(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Oa-1),_=a/g,m=isFinite(a)?1+Math.floor(u*_):Oa;m>Oa&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oa}`);const p=[];let v=0;for(let E=0;E<Oa;++E){const D=E/_,M=Math.exp(-D*D/2);p.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const x=this._sizeLods[s],T=3*x*(s>y-to?s-y+to:0),b=4*(this._cubeSize-x);uu(e,T,b,3*x,2*x),l.setRenderTarget(e),l.render(f,_d)}}function rR(n){const t=[],e=[],i=[];let s=n;const a=n-to+1+Jv.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let l=1/o;r>n-to?l=Jv[r-n+to-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let b=0;b<d;b++){const E=b%3*2/3-1,D=b>2?0:-1,M=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];v.set(M,_*g*b),y.set(h,m*g*b);const S=[b,b,b,b,b,b];x.set(S,p*g*b)}const T=new On;T.setAttribute("position",new Ti(v,_)),T.setAttribute("uv",new Ti(y,m)),T.setAttribute("faceIndex",new Ti(x,p)),t.push(T),s>to&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function n_(n,t,e){const i=new Rn(n,t,e);return i.texture.mapping=sf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uu(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function oR(n,t,e){const i=new Float32Array(Oa),s=new U(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:Oa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:B0(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function i_(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:B0(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function s_(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:B0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function B0(){return`

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
	`}function lR(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fp||l===Hp,u=l===To||l===Ao;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Ph(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Ph(n)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function cR(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ul("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function uR(n,t,e,i){const s={},a=new WeakMap;function r(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",r),delete s[h.id];const d=a.get(h);d&&(t.remove(d),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let y=0,x=v.length;y<x;y+=3){const T=v[y+0],b=v[y+1],E=v[y+2];h.push(T,b,b,E,E,T)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const T=y+0,b=y+1,E=y+2;h.push(T,b,b,E,E,T)}}else return;const m=new(O1(h)?V1:H1)(h,1);m.version=_;const p=a.get(f);p&&t.remove(p),a.set(f,m)}function u(f){const h=a.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function hR(n,t,e){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,d){n.drawElements(i,d,a,h*r),e.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,a,h*r,g),e.update(d,i,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/r,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,a,h,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v];for(let v=0;v<_.length;v++)e.update(p,i,_[v])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function fR(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=o*(a/3);break;case n.LINES:e.lines+=o*(a/2);break;case n.LINE_STRIP:e.lines+=o*(a-1);break;case n.LINE_LOOP:e.lines+=o*a;break;case n.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function dR(n,t,e){const i=new WeakMap,s=new Fe;function a(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let M=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=o.attributes.position.count*y,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*T*4*f),E=new B1(b,x,T,f);E.type=Vi,E.needsUpdate=!0;const D=y*4;for(let S=0;S<f;S++){const L=m[S],H=p[S],P=v[S],B=x*T*4*S;for(let F=0;F<L.count;F++){const R=F*D;d===!0&&(s.fromBufferAttribute(L,F),b[B+R+0]=s.x,b[B+R+1]=s.y,b[B+R+2]=s.z,b[B+R+3]=0),g===!0&&(s.fromBufferAttribute(H,F),b[B+R+4]=s.x,b[B+R+5]=s.y,b[B+R+6]=s.z,b[B+R+7]=0),_===!0&&(s.fromBufferAttribute(P,F),b[B+R+8]=s.x,b[B+R+9]=s.y,b[B+R+10]=s.z,b[B+R+11]=P.itemSize===4?s.w:1)}}h={count:f,texture:E,size:new ht(x,T)},i.set(o,h),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:a}}function pR(n,t,e,i){let s=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class I0 extends ln{constructor(t,e,i,s,a,r,o,l,c,u=mo){if(u!==mo&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===mo&&(i=$a),i===void 0&&u===tr&&(i=Ja),super(null,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const X1=new ln,a_=new I0(1,1),q1=new B1,Y1=new eA,Z1=new j1,r_=[],o_=[],l_=new Float32Array(16),c_=new Float32Array(9),u_=new Float32Array(4);function Ho(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let a=r_[s];if(a===void 0&&(a=new Float32Array(s),r_[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,n[r].toArray(a,o)}return a}function tn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function en(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function cf(n,t){let e=o_[t];e===void 0&&(e=new Int32Array(t),o_[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function mR(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function gR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2fv(this.addr,t),en(e,t)}}function vR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;n.uniform3fv(this.addr,t),en(e,t)}}function _R(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4fv(this.addr,t),en(e,t)}}function yR(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;u_.set(i),n.uniformMatrix2fv(this.addr,!1,u_),en(e,i)}}function xR(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;c_.set(i),n.uniformMatrix3fv(this.addr,!1,c_),en(e,i)}}function SR(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;l_.set(i),n.uniformMatrix4fv(this.addr,!1,l_),en(e,i)}}function bR(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function MR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2iv(this.addr,t),en(e,t)}}function ER(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3iv(this.addr,t),en(e,t)}}function wR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4iv(this.addr,t),en(e,t)}}function TR(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function AR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2uiv(this.addr,t),en(e,t)}}function CR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3uiv(this.addr,t),en(e,t)}}function RR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4uiv(this.addr,t),en(e,t)}}function DR(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(a_.compareFunction=U1,a=a_):a=X1,e.setTexture2D(t||a,s)}function LR(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Y1,s)}function PR(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Z1,s)}function NR(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||q1,s)}function UR(n){switch(n){case 5126:return mR;case 35664:return gR;case 35665:return vR;case 35666:return _R;case 35674:return yR;case 35675:return xR;case 35676:return SR;case 5124:case 35670:return bR;case 35667:case 35671:return MR;case 35668:case 35672:return ER;case 35669:case 35673:return wR;case 5125:return TR;case 36294:return AR;case 36295:return CR;case 36296:return RR;case 35678:case 36198:case 36298:case 36306:case 35682:return DR;case 35679:case 36299:case 36307:return LR;case 35680:case 36300:case 36308:case 36293:return PR;case 36289:case 36303:case 36311:case 36292:return NR}}function OR(n,t){n.uniform1fv(this.addr,t)}function zR(n,t){const e=Ho(t,this.size,2);n.uniform2fv(this.addr,e)}function BR(n,t){const e=Ho(t,this.size,3);n.uniform3fv(this.addr,e)}function IR(n,t){const e=Ho(t,this.size,4);n.uniform4fv(this.addr,e)}function FR(n,t){const e=Ho(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function HR(n,t){const e=Ho(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function VR(n,t){const e=Ho(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function kR(n,t){n.uniform1iv(this.addr,t)}function GR(n,t){n.uniform2iv(this.addr,t)}function jR(n,t){n.uniform3iv(this.addr,t)}function WR(n,t){n.uniform4iv(this.addr,t)}function XR(n,t){n.uniform1uiv(this.addr,t)}function qR(n,t){n.uniform2uiv(this.addr,t)}function YR(n,t){n.uniform3uiv(this.addr,t)}function ZR(n,t){n.uniform4uiv(this.addr,t)}function KR(n,t,e){const i=this.cache,s=t.length,a=cf(e,s);tn(i,a)||(n.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||X1,a[r])}function QR(n,t,e){const i=this.cache,s=t.length,a=cf(e,s);tn(i,a)||(n.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Y1,a[r])}function $R(n,t,e){const i=this.cache,s=t.length,a=cf(e,s);tn(i,a)||(n.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Z1,a[r])}function JR(n,t,e){const i=this.cache,s=t.length,a=cf(e,s);tn(i,a)||(n.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||q1,a[r])}function t3(n){switch(n){case 5126:return OR;case 35664:return zR;case 35665:return BR;case 35666:return IR;case 35674:return FR;case 35675:return HR;case 35676:return VR;case 5124:case 35670:return kR;case 35667:case 35671:return GR;case 35668:case 35672:return jR;case 35669:case 35673:return WR;case 5125:return XR;case 36294:return qR;case 36295:return YR;case 36296:return ZR;case 35678:case 36198:case 36298:case 36306:case 35682:return KR;case 35679:case 36299:case 36307:return QR;case 35680:case 36300:case 36308:case 36293:return $R;case 36289:case 36303:case 36311:case 36292:return JR}}class e3{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=UR(e.type)}}class n3{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t3(e.type)}}class i3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],i)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function h_(n,t){n.seq.push(t),n.map[t.id]=t}function s3(n,t,e){const i=n.name,s=i.length;for(Md.lastIndex=0;;){const a=Md.exec(i),r=Md.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){h_(e,c===void 0?new e3(o,n,t):new n3(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new i3(o),h_(e,f)),e=f}}}class Yu{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);s3(a,r,this)}}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function f_(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const a3=37297;let r3=0;function o3(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}function l3(n){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(n);let i;switch(t===e?i="":t===Rh&&e===Ch?i="LinearDisplayP3ToLinearSRGB":t===Ch&&e===Rh&&(i="LinearSRGBToLinearDisplayP3"),n){case va:case rf:return[i,"LinearTransferOETF"];case yi:case U0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function d_(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+o3(n.getShaderSource(t),r)}else return s}function c3(n,t){const e=l3(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function u3(n,t){let e;switch(t){case w0:e="Linear";break;case x1:e="Reinhard";break;case S1:e="Cineon";break;case T0:e="ACESFilmic";break;case b1:e="AgX";break;case M1:e="Neutral";break;case xT:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hu=new U;function h3(){se.getLuminanceCoefficients(hu);const n=hu.x.toFixed(4),t=hu.y.toFixed(4),e=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function d3(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function p3(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(t,s),r=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:n.getAttribLocation(t,r),locationSize:o}}return e}function fl(n){return n!==""}function p_(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function m_(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const m3=/^[ \t]*#include +<([\w\d./]+)>/gm;function pm(n){return n.replace(m3,v3)}const g3=new Map;function v3(n,t){let e=Wt[t];if(e===void 0){const i=g3.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pm(e)}const _3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g_(n){return n.replace(_3,y3)}function y3(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function v_(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function x3(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===m1?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===g1?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hs&&(t="SHADOWMAP_TYPE_VSM"),t}function S3(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case To:case Ao:t="ENVMAP_TYPE_CUBE";break;case sf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function b3(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ao:t="ENVMAP_MODE_REFRACTION";break}return t}function M3(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case E0:t="ENVMAP_BLENDING_MULTIPLY";break;case _T:t="ENVMAP_BLENDING_MIX";break;case yT:t="ENVMAP_BLENDING_ADD";break}return t}function E3(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function w3(n,t,e,i){const s=n.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=x3(e),c=S3(e),u=b3(e),f=M3(e),h=E3(e),d=f3(e),g=d3(a),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fl).join(`
`),p.length>0&&(p+=`
`)):(m=[v_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),p=[v_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==la?"#define TONE_MAPPING":"",e.toneMapping!==la?Wt.tonemapping_pars_fragment:"",e.toneMapping!==la?u3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,c3("linearToOutputTexel",e.outputColorSpace),h3(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fl).join(`
`)),r=pm(r),r=p_(r,e),r=m_(r,e),o=pm(o),o=p_(o,e),o=m_(o,e),r=g_(r),o=g_(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Pv?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+r,x=v+p+o,T=f_(s,s.VERTEX_SHADER,y),b=f_(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(L){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),P=s.getShaderInfoLog(T).trim(),B=s.getShaderInfoLog(b).trim();let F=!0,R=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,b);else{const j=d_(s,T,"vertex"),O=d_(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+j+`
`+O)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(P===""||B==="")&&(R=!1);R&&(L.diagnostics={runnable:F,programLog:H,vertexShader:{log:P,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(T),s.deleteShader(b),D=new Yu(s,_),M=p3(s,_)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,a3)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=r3++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let T3=0;class A3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new C3(t),e.set(t,i)),i}}class C3{constructor(t){this.id=T3++,this.code=t,this.usedTimes=0}}function R3(n,t,e,i,s,a,r){const o=new I1,l=new A3,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,H,P){const B=H.fog,F=P.geometry,R=M.isMeshStandardMaterial?H.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||R),O=j&&j.mapping===sf?j.image.height:null,W=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const nt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ct=nt!==void 0?nt.length:0;let rt=0;F.morphAttributes.position!==void 0&&(rt=1),F.morphAttributes.normal!==void 0&&(rt=2),F.morphAttributes.color!==void 0&&(rt=3);let Nt,K,at,yt;if(W){const ae=Bi[W];Nt=ae.vertexShader,K=ae.fragmentShader}else Nt=M.vertexShader,K=M.fragmentShader,l.update(M),at=l.getVertexShaderID(M),yt=l.getFragmentShaderID(M);const pt=n.getRenderTarget(),Ct=P.isInstancedMesh===!0,Lt=P.isBatchedMesh===!0,Ht=!!M.map,xe=!!M.matcap,z=!!j,we=!!M.aoMap,Jt=!!M.lightMap,ee=!!M.bumpMap,Tt=!!M.normalMap,Te=!!M.displacementMap,Pt=!!M.emissiveMap,Bt=!!M.metalnessMap,N=!!M.roughnessMap,A=M.anisotropy>0,Z=M.clearcoat>0,et=M.dispersion>0,st=M.iridescence>0,it=M.sheen>0,Dt=M.transmission>0,mt=A&&!!M.anisotropyMap,vt=Z&&!!M.clearcoatMap,It=Z&&!!M.clearcoatNormalMap,ot=Z&&!!M.clearcoatRoughnessMap,gt=st&&!!M.iridescenceMap,Kt=st&&!!M.iridescenceThicknessMap,Ut=it&&!!M.sheenColorMap,bt=it&&!!M.sheenRoughnessMap,Vt=!!M.specularMap,jt=!!M.specularColorMap,ce=!!M.specularIntensityMap,V=Dt&&!!M.transmissionMap,lt=Dt&&!!M.thicknessMap,Q=!!M.gradientMap,$=!!M.alphaMap,ft=M.alphaTest>0,Ot=!!M.alphaHash,te=!!M.extensions;let He=la;M.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(He=n.toneMapping);const un={shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:Nt,fragmentShader:K,defines:M.defines,customVertexShaderID:at,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Lt,batchingColor:Lt&&P._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&P.instanceColor!==null,instancingMorph:Ct&&P.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:va,alphaToCoverage:!!M.alphaToCoverage,map:Ht,matcap:xe,envMap:z,envMapMode:z&&j.mapping,envMapCubeUVHeight:O,aoMap:we,lightMap:Jt,bumpMap:ee,normalMap:Tt,displacementMap:h&&Te,emissiveMap:Pt,normalMapObjectSpace:Tt&&M.normalMapType===ET,normalMapTangentSpace:Tt&&M.normalMapType===af,metalnessMap:Bt,roughnessMap:N,anisotropy:A,anisotropyMap:mt,clearcoat:Z,clearcoatMap:vt,clearcoatNormalMap:It,clearcoatRoughnessMap:ot,dispersion:et,iridescence:st,iridescenceMap:gt,iridescenceThicknessMap:Kt,sheen:it,sheenColorMap:Ut,sheenRoughnessMap:bt,specularMap:Vt,specularColorMap:jt,specularIntensityMap:ce,transmission:Dt,transmissionMap:V,thicknessMap:lt,gradientMap:Q,opaque:M.transparent===!1&&M.blending===po&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:ft,alphaHash:Ot,combine:M.combine,mapUv:Ht&&_(M.map.channel),aoMapUv:we&&_(M.aoMap.channel),lightMapUv:Jt&&_(M.lightMap.channel),bumpMapUv:ee&&_(M.bumpMap.channel),normalMapUv:Tt&&_(M.normalMap.channel),displacementMapUv:Te&&_(M.displacementMap.channel),emissiveMapUv:Pt&&_(M.emissiveMap.channel),metalnessMapUv:Bt&&_(M.metalnessMap.channel),roughnessMapUv:N&&_(M.roughnessMap.channel),anisotropyMapUv:mt&&_(M.anisotropyMap.channel),clearcoatMapUv:vt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(M.sheenRoughnessMap.channel),specularMapUv:Vt&&_(M.specularMap.channel),specularColorMapUv:jt&&_(M.specularColorMap.channel),specularIntensityMapUv:ce&&_(M.specularIntensityMap.channel),transmissionMapUv:V&&_(M.transmissionMap.channel),thicknessMapUv:lt&&_(M.thicknessMap.channel),alphaMapUv:$&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Tt||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(Ht||$),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:P.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:rt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Ht&&M.map.isVideoTexture===!0&&se.getTransfer(M.map.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Si,flipSided:M.side===Cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:te&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&M.extensions.multiDraw===!0||Lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return un.vertexUv1s=c.has(1),un.vertexUv2s=c.has(2),un.vertexUv3s=c.has(3),c.clear(),un}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(v(S,M),y(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),M.push(o.mask)}function x(M){const S=g[M.type];let L;if(S){const H=Bi[S];L=Xn.clone(H.uniforms)}else L=M.uniforms;return L}function T(M,S){let L;for(let H=0,P=u.length;H<P;H++){const B=u[H];if(B.cacheKey===S){L=B,++L.usedTimes;break}}return L===void 0&&(L=new w3(n,S,M,a),u.push(L)),L}function b(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:D}}function D3(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,l){n.get(r)[o]=l}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function L3(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function __(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function y_(){const n=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function r(f,h,d,g,_,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function o(f,h,d,g,_,m){const p=r(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=r(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||L3),i.length>1&&i.sort(h||__),s.length>1&&s.sort(h||__)}function u(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:u,sort:c}}function P3(){let n=new WeakMap;function t(i,s){const a=n.get(i);let r;return a===void 0?(r=new y_,n.set(i,[r])):s>=a.length?(r=new y_,a.push(r)):r=a[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function N3(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new _t};break;case"SpotLight":e={position:new U,direction:new U,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function U3(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let O3=0;function z3(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function B3(n){const t=new N3,e=U3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,a=new ue,r=new ue;function o(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,T=0,b=0,E=0;c.sort(z3);for(let M=0,S=c.length;M<S;M++){const L=c[M],H=L.color,P=L.intensity,B=L.distance,F=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*P,f+=H.g*P,h+=H.b*P;else if(L.isLightProbe){for(let R=0;R<9;R++)i.probe[R].addScaledVector(L.sh.coefficients[R],P);E++}else if(L.isDirectionalLight){const R=t.get(L);if(R.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,O=e.get(L);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,i.directionalShadow[d]=O,i.directionalShadowMap[d]=F,i.directionalShadowMatrix[d]=L.shadow.matrix,v++}i.directional[d]=R,d++}else if(L.isSpotLight){const R=t.get(L);R.position.setFromMatrixPosition(L.matrixWorld),R.color.copy(H).multiplyScalar(P),R.distance=B,R.coneCos=Math.cos(L.angle),R.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),R.decay=L.decay,i.spot[_]=R;const j=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,j.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[_]=j.matrix,L.castShadow){const O=e.get(L);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=F,x++}_++}else if(L.isRectAreaLight){const R=t.get(L);R.color.copy(H).multiplyScalar(P),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=R,m++}else if(L.isPointLight){const R=t.get(L);if(R.color.copy(L.color).multiplyScalar(L.intensity),R.distance=L.distance,R.decay=L.decay,L.castShadow){const j=L.shadow,O=e.get(L);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,O.shadowCameraNear=j.camera.near,O.shadowCameraFar=j.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=R,g++}else if(L.isHemisphereLight){const R=t.get(L);R.skyColor.copy(L.color).multiplyScalar(P),R.groundColor.copy(L.groundColor).multiplyScalar(P),i.hemi[p]=R,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==T||D.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=E,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=T,D.numLightProbes=E,i.version=O3++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function x_(n){const t=new B3(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function a(u){e.push(u)}function r(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function I3(n){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new x_(n),t.set(s,[o])):a>=r.length?(o=new x_(n),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class F3 extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class H3 extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const V3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k3=`uniform sampler2D shadow_pass;
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
}`;function G3(n,t,e){let i=new z0;const s=new ht,a=new ht,r=new Fe,o=new F3({depthPacking:MT}),l=new H3,c={},u=e.maxTextureSize,f={[Rs]:Cn,[Cn]:Rs,[Si]:Si},h=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:V3,fragmentShader:k3}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new On;g.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Be(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m1;let p=this.type;this.render=function(b,E,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Mn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const P=p!==hs&&this.type===hs,B=p===hs&&this.type!==hs;for(let F=0,R=b.length;F<R;F++){const j=b[F],O=j.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const W=O.getFrameExtents();if(s.multiply(W),a.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/W.x),s.x=a.x*W.x,O.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/W.y),s.y=a.y*W.y,O.mapSize.y=a.y)),O.map===null||P===!0||B===!0){const ct=this.type!==hs?{minFilter:xn,magFilter:xn}:{};O.map!==null&&O.map.dispose(),O.map=new Rn(s.x,s.y,ct),O.map.texture.name=j.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const nt=O.getViewportCount();for(let ct=0;ct<nt;ct++){const rt=O.getViewport(ct);r.set(a.x*rt.x,a.y*rt.y,a.x*rt.z,a.y*rt.w),H.viewport(r),O.updateMatrices(j,ct),i=O.getFrustum(),x(E,D,O.camera,j,this.type)}O.isPointLightShadow!==!0&&this.type===hs&&v(O,D),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,L)};function v(b,E){const D=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Rn(s.x,s.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(E,null,D,h,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(E,null,D,d,_,null)}function y(b,E,D,M){let S=null;const L=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=S.uuid,P=E.uuid;let B=c[H];B===void 0&&(B={},c[H]=B);let F=B[P];F===void 0&&(F=S.clone(),B[P]=F,E.addEventListener("dispose",T)),S=F}if(S.visible=E.visible,S.wireframe=E.wireframe,M===hs?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:f[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=n.properties.get(S);H.light=D}return S}function x(b,E,D,M,S){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===hs)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const P=t.update(b),B=b.material;if(Array.isArray(B)){const F=P.groups;for(let R=0,j=F.length;R<j;R++){const O=F[R],W=B[O.materialIndex];if(W&&W.visible){const nt=y(b,W,M,S);b.onBeforeShadow(n,b,E,D,P,nt,O),n.renderBufferDirect(D,null,P,nt,b,O),b.onAfterShadow(n,b,E,D,P,nt,O)}}}else if(B.visible){const F=y(b,B,M,S);b.onBeforeShadow(n,b,E,D,P,F,null),n.renderBufferDirect(D,null,P,F,b,null),b.onAfterShadow(n,b,E,D,P,F,null)}}const H=b.children;for(let P=0,B=H.length;P<B;P++)x(H[P],E,D,M,S)}function T(b){b.target.removeEventListener("dispose",T);for(const D in c){const M=c[D],S=b.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function j3(n){function t(){let V=!1;const lt=new Fe;let Q=null;const $=new Fe(0,0,0,0);return{setMask:function(ft){Q!==ft&&!V&&(n.colorMask(ft,ft,ft,ft),Q=ft)},setLocked:function(ft){V=ft},setClear:function(ft,Ot,te,He,un){un===!0&&(ft*=He,Ot*=He,te*=He),lt.set(ft,Ot,te,He),$.equals(lt)===!1&&(n.clearColor(ft,Ot,te,He),$.copy(lt))},reset:function(){V=!1,Q=null,$.set(-1,0,0,0)}}}function e(){let V=!1,lt=null,Q=null,$=null;return{setTest:function(ft){ft?yt(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(ft){lt!==ft&&!V&&(n.depthMask(ft),lt=ft)},setFunc:function(ft){if(Q!==ft){switch(ft){case hT:n.depthFunc(n.NEVER);break;case fT:n.depthFunc(n.ALWAYS);break;case dT:n.depthFunc(n.LESS);break;case Th:n.depthFunc(n.LEQUAL);break;case pT:n.depthFunc(n.EQUAL);break;case mT:n.depthFunc(n.GEQUAL);break;case gT:n.depthFunc(n.GREATER);break;case vT:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ft}},setLocked:function(ft){V=ft},setClear:function(ft){$!==ft&&(n.clearDepth(ft),$=ft)},reset:function(){V=!1,lt=null,Q=null,$=null}}}function i(){let V=!1,lt=null,Q=null,$=null,ft=null,Ot=null,te=null,He=null,un=null;return{setTest:function(ae){V||(ae?yt(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(ae){lt!==ae&&!V&&(n.stencilMask(ae),lt=ae)},setFunc:function(ae,Zi,Pi){(Q!==ae||$!==Zi||ft!==Pi)&&(n.stencilFunc(ae,Zi,Pi),Q=ae,$=Zi,ft=Pi)},setOp:function(ae,Zi,Pi){(Ot!==ae||te!==Zi||He!==Pi)&&(n.stencilOp(ae,Zi,Pi),Ot=ae,te=Zi,He=Pi)},setLocked:function(ae){V=ae},setClear:function(ae){un!==ae&&(n.clearStencil(ae),un=ae)},reset:function(){V=!1,lt=null,Q=null,$=null,ft=null,Ot=null,te=null,He=null,un=null}}}const s=new t,a=new e,r=new i,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,v=null,y=null,x=null,T=null,b=new _t(0,0,0),E=0,D=!1,M=null,S=null,L=null,H=null,P=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,R=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=R>=1):j.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=R>=2);let O=null,W={};const nt=n.getParameter(n.SCISSOR_BOX),ct=n.getParameter(n.VIEWPORT),rt=new Fe().fromArray(nt),Nt=new Fe().fromArray(ct);function K(V,lt,Q,$){const ft=new Uint8Array(4),Ot=n.createTexture();n.bindTexture(V,Ot),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<Q;te++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(lt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return Ot}const at={};at[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),yt(n.DEPTH_TEST),a.setFunc(Th),ee(!1),Tt(Av),yt(n.CULL_FACE),we(Mn);function yt(V){c[V]!==!0&&(n.enable(V),c[V]=!0)}function pt(V){c[V]!==!1&&(n.disable(V),c[V]=!1)}function Ct(V,lt){return u[V]!==lt?(n.bindFramebuffer(V,lt),u[V]=lt,V===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=lt),V===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function Lt(V,lt){let Q=h,$=!1;if(V){Q=f.get(lt),Q===void 0&&(Q=[],f.set(lt,Q));const ft=V.textures;if(Q.length!==ft.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Ot=0,te=ft.length;Ot<te;Ot++)Q[Ot]=n.COLOR_ATTACHMENT0+Ot;Q.length=ft.length,$=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,$=!0);$&&n.drawBuffers(Q)}function Ht(V){return d!==V?(n.useProgram(V),d=V,!0):!1}const xe={[gs]:n.FUNC_ADD,[Qw]:n.FUNC_SUBTRACT,[$w]:n.FUNC_REVERSE_SUBTRACT};xe[Jw]=n.MIN,xe[tT]=n.MAX;const z={[zp]:n.ZERO,[eT]:n.ONE,[nT]:n.SRC_COLOR,[Bp]:n.SRC_ALPHA,[rT]:n.SRC_ALPHA_SATURATE,[y1]:n.DST_COLOR,[_1]:n.DST_ALPHA,[iT]:n.ONE_MINUS_SRC_COLOR,[Ip]:n.ONE_MINUS_SRC_ALPHA,[aT]:n.ONE_MINUS_DST_COLOR,[sT]:n.ONE_MINUS_DST_ALPHA,[oT]:n.CONSTANT_COLOR,[lT]:n.ONE_MINUS_CONSTANT_COLOR,[cT]:n.CONSTANT_ALPHA,[uT]:n.ONE_MINUS_CONSTANT_ALPHA};function we(V,lt,Q,$,ft,Ot,te,He,un,ae){if(V===Mn){g===!0&&(pt(n.BLEND),g=!1);return}if(g===!1&&(yt(n.BLEND),g=!0),V!==v1){if(V!==_||ae!==D){if((m!==gs||y!==gs)&&(n.blendEquation(n.FUNC_ADD),m=gs,y=gs),ae)switch(V){case po:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Op:n.blendFunc(n.ONE,n.ONE);break;case Cv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case po:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Op:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}p=null,v=null,x=null,T=null,b.set(0,0,0),E=0,_=V,D=ae}return}ft=ft||lt,Ot=Ot||Q,te=te||$,(lt!==m||ft!==y)&&(n.blendEquationSeparate(xe[lt],xe[ft]),m=lt,y=ft),(Q!==p||$!==v||Ot!==x||te!==T)&&(n.blendFuncSeparate(z[Q],z[$],z[Ot],z[te]),p=Q,v=$,x=Ot,T=te),(He.equals(b)===!1||un!==E)&&(n.blendColor(He.r,He.g,He.b,un),b.copy(He),E=un),_=V,D=!1}function Jt(V,lt){V.side===Si?pt(n.CULL_FACE):yt(n.CULL_FACE);let Q=V.side===Cn;lt&&(Q=!Q),ee(Q),V.blending===po&&V.transparent===!1?we(Mn):we(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const $=V.stencilWrite;r.setTest($),$&&(r.setMask(V.stencilWriteMask),r.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),r.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Pt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){M!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),M=V)}function Tt(V){V!==Zw?(yt(n.CULL_FACE),V!==S&&(V===Av?n.cullFace(n.BACK):V===Kw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),S=V}function Te(V){V!==L&&(F&&n.lineWidth(V),L=V)}function Pt(V,lt,Q){V?(yt(n.POLYGON_OFFSET_FILL),(H!==lt||P!==Q)&&(n.polygonOffset(lt,Q),H=lt,P=Q)):pt(n.POLYGON_OFFSET_FILL)}function Bt(V){V?yt(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function N(V){V===void 0&&(V=n.TEXTURE0+B-1),O!==V&&(n.activeTexture(V),O=V)}function A(V,lt,Q){Q===void 0&&(O===null?Q=n.TEXTURE0+B-1:Q=O);let $=W[Q];$===void 0&&($={type:void 0,texture:void 0},W[Q]=$),($.type!==V||$.texture!==lt)&&(O!==Q&&(n.activeTexture(Q),O=Q),n.bindTexture(V,lt||at[V]),$.type=V,$.texture=lt)}function Z(){const V=W[O];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function et(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Kt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(V){rt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),rt.copy(V))}function bt(V){Nt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Nt.copy(V))}function Vt(V,lt){let Q=l.get(lt);Q===void 0&&(Q=new WeakMap,l.set(lt,Q));let $=Q.get(V);$===void 0&&($=n.getUniformBlockIndex(lt,V.name),Q.set(V,$))}function jt(V,lt){const $=l.get(lt).get(V);o.get(lt)!==$&&(n.uniformBlockBinding(lt,$,V.__bindingPointIndex),o.set(lt,$))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},O=null,W={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,v=null,y=null,x=null,T=null,b=new _t(0,0,0),E=0,D=!1,M=null,S=null,L=null,H=null,P=null,rt.set(0,0,n.canvas.width,n.canvas.height),Nt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:yt,disable:pt,bindFramebuffer:Ct,drawBuffers:Lt,useProgram:Ht,setBlending:we,setMaterial:Jt,setFlipSided:ee,setCullFace:Tt,setLineWidth:Te,setPolygonOffset:Pt,setScissorTest:Bt,activeTexture:N,bindTexture:A,unbindTexture:Z,compressedTexImage2D:et,compressedTexImage3D:st,texImage2D:gt,texImage3D:Kt,updateUBOMapping:Vt,uniformBlockBinding:jt,texStorage2D:It,texStorage3D:ot,texSubImage2D:it,texSubImage3D:Dt,compressedTexSubImage2D:mt,compressedTexSubImage3D:vt,scissor:Ut,viewport:bt,reset:ce}}function S_(n,t,e,i){const s=W3(i);switch(e){case C1:return n*t;case D1:return n*t;case L1:return n*t*2;case D0:return n*t/s.components*s.byteLength;case L0:return n*t/s.components*s.byteLength;case P1:return n*t*2/s.components*s.byteLength;case P0:return n*t*2/s.components*s.byteLength;case R1:return n*t*3/s.components*s.byteLength;case Wn:return n*t*4/s.components*s.byteLength;case N0:return n*t*4/s.components*s.byteLength;case Gu:case ju:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wu:case Xu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gp:case Wp:return Math.max(n,16)*Math.max(t,8)/4;case kp:case jp:return Math.max(n,8)*Math.max(t,8)/2;case Xp:case qp:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Yp:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zp:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kp:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Qp:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $p:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Jp:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case tm:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case em:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case nm:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case im:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case sm:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case am:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case rm:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case om:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case lm:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case qu:case cm:case um:return Math.ceil(n/4)*Math.ceil(t/4)*16;case N1:case hm:return Math.ceil(n/4)*Math.ceil(t/4)*8;case fm:case dm:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W3(n){switch(n){case Ds:case w1:return{byteLength:1,components:1};case sc:case T1:case wi:return{byteLength:2,components:1};case C0:case R0:return{byteLength:2,components:4};case $a:case A0:case Vi:return{byteLength:4,components:1};case A1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function X3(n,t,e,i,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,A){return d?new OffscreenCanvas(N,A):ac("canvas")}function _(N,A,Z){let et=1;const st=Bt(N);if((st.width>Z||st.height>Z)&&(et=Z/Math.max(st.width,st.height)),et<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const it=Math.floor(et*st.width),Dt=Math.floor(et*st.height);f===void 0&&(f=g(it,Dt));const mt=A?g(it,Dt):f;return mt.width=it,mt.height=Dt,mt.getContext("2d").drawImage(N,0,0,it,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+it+"x"+Dt+")."),mt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==xn&&N.minFilter!==bi}function p(N){n.generateMipmap(N)}function v(N,A,Z,et,st=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let it=A;if(A===n.RED&&(Z===n.FLOAT&&(it=n.R32F),Z===n.HALF_FLOAT&&(it=n.R16F),Z===n.UNSIGNED_BYTE&&(it=n.R8)),A===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(it=n.R8UI),Z===n.UNSIGNED_SHORT&&(it=n.R16UI),Z===n.UNSIGNED_INT&&(it=n.R32UI),Z===n.BYTE&&(it=n.R8I),Z===n.SHORT&&(it=n.R16I),Z===n.INT&&(it=n.R32I)),A===n.RG&&(Z===n.FLOAT&&(it=n.RG32F),Z===n.HALF_FLOAT&&(it=n.RG16F),Z===n.UNSIGNED_BYTE&&(it=n.RG8)),A===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(it=n.RG8UI),Z===n.UNSIGNED_SHORT&&(it=n.RG16UI),Z===n.UNSIGNED_INT&&(it=n.RG32UI),Z===n.BYTE&&(it=n.RG8I),Z===n.SHORT&&(it=n.RG16I),Z===n.INT&&(it=n.RG32I)),A===n.RGB&&Z===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),A===n.RGBA){const Dt=st?Ah:se.getTransfer(et);Z===n.FLOAT&&(it=n.RGBA32F),Z===n.HALF_FLOAT&&(it=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(it=Dt===ge?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function y(N,A){let Z;return N?A===null||A===$a||A===Ja?Z=n.DEPTH24_STENCIL8:A===Vi?Z=n.DEPTH32F_STENCIL8:A===sc&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$a||A===Ja?Z=n.DEPTH_COMPONENT24:A===Vi?Z=n.DEPTH_COMPONENT32F:A===sc&&(Z=n.DEPTH_COMPONENT16),Z}function x(N,A){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==xn&&N.minFilter!==bi?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function T(N){const A=N.target;A.removeEventListener("dispose",T),E(A),A.isVideoTexture&&u.delete(A)}function b(N){const A=N.target;A.removeEventListener("dispose",b),M(A)}function E(N){const A=i.get(N);if(A.__webglInit===void 0)return;const Z=N.source,et=h.get(Z);if(et){const st=et[A.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(N),Object.keys(et).length===0&&h.delete(Z)}i.remove(N)}function D(N){const A=i.get(N);n.deleteTexture(A.__webglTexture);const Z=N.source,et=h.get(Z);delete et[A.__cacheKey],r.memory.textures--}function M(N){const A=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(A.__webglFramebuffer[et]))for(let st=0;st<A.__webglFramebuffer[et].length;st++)n.deleteFramebuffer(A.__webglFramebuffer[et][st]);else n.deleteFramebuffer(A.__webglFramebuffer[et]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[et])}else{if(Array.isArray(A.__webglFramebuffer))for(let et=0;et<A.__webglFramebuffer.length;et++)n.deleteFramebuffer(A.__webglFramebuffer[et]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let et=0;et<A.__webglColorRenderbuffer.length;et++)A.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[et]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=N.textures;for(let et=0,st=Z.length;et<st;et++){const it=i.get(Z[et]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),r.memory.textures--),i.remove(Z[et])}i.remove(N)}let S=0;function L(){S=0}function H(){const N=S;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),S+=1,N}function P(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function B(N,A){const Z=i.get(N);if(N.isVideoTexture&&Te(N),N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){const et=N.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(Z,N,A);return}}e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+A)}function F(N,A){const Z=i.get(N);if(N.version>0&&Z.__version!==N.version){Nt(Z,N,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+A)}function R(N,A){const Z=i.get(N);if(N.version>0&&Z.__version!==N.version){Nt(Z,N,A);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+A)}function j(N,A){const Z=i.get(N);if(N.version>0&&Z.__version!==N.version){K(Z,N,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+A)}const O={[Co]:n.REPEAT,[Fa]:n.CLAMP_TO_EDGE,[Vp]:n.MIRRORED_REPEAT},W={[xn]:n.NEAREST,[ST]:n.NEAREST_MIPMAP_NEAREST,[jc]:n.NEAREST_MIPMAP_LINEAR,[bi]:n.LINEAR,[Jf]:n.LINEAR_MIPMAP_NEAREST,[Ha]:n.LINEAR_MIPMAP_LINEAR},nt={[wT]:n.NEVER,[LT]:n.ALWAYS,[TT]:n.LESS,[U1]:n.LEQUAL,[AT]:n.EQUAL,[DT]:n.GEQUAL,[CT]:n.GREATER,[RT]:n.NOTEQUAL};function ct(N,A){if(A.type===Vi&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===bi||A.magFilter===Jf||A.magFilter===jc||A.magFilter===Ha||A.minFilter===bi||A.minFilter===Jf||A.minFilter===jc||A.minFilter===Ha)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,O[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,O[A.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,O[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,W[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,W[A.minFilter]),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,nt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===xn||A.minFilter!==jc&&A.minFilter!==Ha||A.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function rt(N,A){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",T));const et=A.source;let st=h.get(et);st===void 0&&(st={},h.set(et,st));const it=P(A);if(it!==N.__cacheKey){st[it]===void 0&&(st[it]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,Z=!0),st[it].usedTimes++;const Dt=st[N.__cacheKey];Dt!==void 0&&(st[N.__cacheKey].usedTimes--,Dt.usedTimes===0&&D(A)),N.__cacheKey=it,N.__webglTexture=st[it].texture}return Z}function Nt(N,A,Z){let et=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(et=n.TEXTURE_3D);const st=rt(N,A),it=A.source;e.bindTexture(et,N.__webglTexture,n.TEXTURE0+Z);const Dt=i.get(it);if(it.version!==Dt.__version||st===!0){e.activeTexture(n.TEXTURE0+Z);const mt=se.getPrimaries(se.workingColorSpace),vt=A.colorSpace===Qs?null:se.getPrimaries(A.colorSpace),It=A.colorSpace===Qs||mt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ot=_(A.image,!1,s.maxTextureSize);ot=Pt(A,ot);const gt=a.convert(A.format,A.colorSpace),Kt=a.convert(A.type);let Ut=v(A.internalFormat,gt,Kt,A.colorSpace,A.isVideoTexture);ct(et,A);let bt;const Vt=A.mipmaps,jt=A.isVideoTexture!==!0,ce=Dt.__version===void 0||st===!0,V=it.dataReady,lt=x(A,ot);if(A.isDepthTexture)Ut=y(A.format===tr,A.type),ce&&(jt?e.texStorage2D(n.TEXTURE_2D,1,Ut,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Ut,ot.width,ot.height,0,gt,Kt,null));else if(A.isDataTexture)if(Vt.length>0){jt&&ce&&e.texStorage2D(n.TEXTURE_2D,lt,Ut,Vt[0].width,Vt[0].height);for(let Q=0,$=Vt.length;Q<$;Q++)bt=Vt[Q],jt?V&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,bt.width,bt.height,gt,Kt,bt.data):e.texImage2D(n.TEXTURE_2D,Q,Ut,bt.width,bt.height,0,gt,Kt,bt.data);A.generateMipmaps=!1}else jt?(ce&&e.texStorage2D(n.TEXTURE_2D,lt,Ut,ot.width,ot.height),V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,gt,Kt,ot.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,ot.width,ot.height,0,gt,Kt,ot.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){jt&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Ut,Vt[0].width,Vt[0].height,ot.depth);for(let Q=0,$=Vt.length;Q<$;Q++)if(bt=Vt[Q],A.format!==Wn)if(gt!==null)if(jt){if(V)if(A.layerUpdates.size>0){const ft=S_(bt.width,bt.height,A.format,A.type);for(const Ot of A.layerUpdates){const te=bt.data.subarray(Ot*ft/bt.data.BYTES_PER_ELEMENT,(Ot+1)*ft/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ot,bt.width,bt.height,1,gt,te,0,0)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,bt.width,bt.height,ot.depth,gt,bt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ut,bt.width,bt.height,ot.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,bt.width,bt.height,ot.depth,gt,Kt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ut,bt.width,bt.height,ot.depth,0,gt,Kt,bt.data)}else{jt&&ce&&e.texStorage2D(n.TEXTURE_2D,lt,Ut,Vt[0].width,Vt[0].height);for(let Q=0,$=Vt.length;Q<$;Q++)bt=Vt[Q],A.format!==Wn?gt!==null?jt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,bt.width,bt.height,gt,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Ut,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?V&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,bt.width,bt.height,gt,Kt,bt.data):e.texImage2D(n.TEXTURE_2D,Q,Ut,bt.width,bt.height,0,gt,Kt,bt.data)}else if(A.isDataArrayTexture)if(jt){if(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Ut,ot.width,ot.height,ot.depth),V)if(A.layerUpdates.size>0){const Q=S_(ot.width,ot.height,A.format,A.type);for(const $ of A.layerUpdates){const ft=ot.data.subarray($*Q/ot.data.BYTES_PER_ELEMENT,($+1)*Q/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ot.width,ot.height,1,gt,Kt,ft)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,gt,Kt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,ot.width,ot.height,ot.depth,0,gt,Kt,ot.data);else if(A.isData3DTexture)jt?(ce&&e.texStorage3D(n.TEXTURE_3D,lt,Ut,ot.width,ot.height,ot.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,gt,Kt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,ot.width,ot.height,ot.depth,0,gt,Kt,ot.data);else if(A.isFramebufferTexture){if(ce)if(jt)e.texStorage2D(n.TEXTURE_2D,lt,Ut,ot.width,ot.height);else{let Q=ot.width,$=ot.height;for(let ft=0;ft<lt;ft++)e.texImage2D(n.TEXTURE_2D,ft,Ut,Q,$,0,gt,Kt,null),Q>>=1,$>>=1}}else if(Vt.length>0){if(jt&&ce){const Q=Bt(Vt[0]);e.texStorage2D(n.TEXTURE_2D,lt,Ut,Q.width,Q.height)}for(let Q=0,$=Vt.length;Q<$;Q++)bt=Vt[Q],jt?V&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,gt,Kt,bt):e.texImage2D(n.TEXTURE_2D,Q,Ut,gt,Kt,bt);A.generateMipmaps=!1}else if(jt){if(ce){const Q=Bt(ot);e.texStorage2D(n.TEXTURE_2D,lt,Ut,Q.width,Q.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Kt,ot)}else e.texImage2D(n.TEXTURE_2D,0,Ut,gt,Kt,ot);m(A)&&p(et),Dt.__version=it.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function K(N,A,Z){if(A.image.length!==6)return;const et=rt(N,A),st=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Z);const it=i.get(st);if(st.version!==it.__version||et===!0){e.activeTexture(n.TEXTURE0+Z);const Dt=se.getPrimaries(se.workingColorSpace),mt=A.colorSpace===Qs?null:se.getPrimaries(A.colorSpace),vt=A.colorSpace===Qs||Dt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const It=A.isCompressedTexture||A.image[0].isCompressedTexture,ot=A.image[0]&&A.image[0].isDataTexture,gt=[];for(let $=0;$<6;$++)!It&&!ot?gt[$]=_(A.image[$],!0,s.maxCubemapSize):gt[$]=ot?A.image[$].image:A.image[$],gt[$]=Pt(A,gt[$]);const Kt=gt[0],Ut=a.convert(A.format,A.colorSpace),bt=a.convert(A.type),Vt=v(A.internalFormat,Ut,bt,A.colorSpace),jt=A.isVideoTexture!==!0,ce=it.__version===void 0||et===!0,V=st.dataReady;let lt=x(A,Kt);ct(n.TEXTURE_CUBE_MAP,A);let Q;if(It){jt&&ce&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Vt,Kt.width,Kt.height);for(let $=0;$<6;$++){Q=gt[$].mipmaps;for(let ft=0;ft<Q.length;ft++){const Ot=Q[ft];A.format!==Wn?Ut!==null?jt?V&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,Ot.width,Ot.height,Ut,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,Vt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,Ot.width,Ot.height,Ut,bt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,Vt,Ot.width,Ot.height,0,Ut,bt,Ot.data)}}}else{if(Q=A.mipmaps,jt&&ce){Q.length>0&&lt++;const $=Bt(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Vt,$.width,$.height)}for(let $=0;$<6;$++)if(ot){jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,gt[$].width,gt[$].height,Ut,bt,gt[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,gt[$].width,gt[$].height,0,Ut,bt,gt[$].data);for(let ft=0;ft<Q.length;ft++){const te=Q[ft].image[$].image;jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,te.width,te.height,Ut,bt,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,Vt,te.width,te.height,0,Ut,bt,te.data)}}else{jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ut,bt,gt[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,Ut,bt,gt[$]);for(let ft=0;ft<Q.length;ft++){const Ot=Q[ft];jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,Ut,bt,Ot.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,Vt,Ut,bt,Ot.image[$])}}}m(A)&&p(n.TEXTURE_CUBE_MAP),it.__version=st.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function at(N,A,Z,et,st,it){const Dt=a.convert(Z.format,Z.colorSpace),mt=a.convert(Z.type),vt=v(Z.internalFormat,Dt,mt,Z.colorSpace);if(!i.get(A).__hasExternalTextures){const ot=Math.max(1,A.width>>it),gt=Math.max(1,A.height>>it);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,it,vt,ot,gt,A.depth,0,Dt,mt,null):e.texImage2D(st,it,vt,ot,gt,0,Dt,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),Tt(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,st,i.get(Z).__webglTexture,0,ee(A)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,st,i.get(Z).__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(N,A,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer){const et=A.depthTexture,st=et&&et.isDepthTexture?et.type:null,it=y(A.stencilBuffer,st),Dt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=ee(A);Tt(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt,it,A.width,A.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,it,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,it,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,N)}else{const et=A.textures;for(let st=0;st<et.length;st++){const it=et[st],Dt=a.convert(it.format,it.colorSpace),mt=a.convert(it.type),vt=v(it.internalFormat,Dt,mt,it.colorSpace),It=ee(A);Z&&Tt(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,It,vt,A.width,A.height):Tt(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It,vt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,vt,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pt(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);const et=i.get(A.depthTexture).__webglTexture,st=ee(A);if(A.depthTexture.format===mo)Tt(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(A.depthTexture.format===tr)Tt(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ct(N){const A=i.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const et=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),et){const st=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,et.removeEventListener("dispose",st)};et.addEventListener("dispose",st),A.__depthDisposeCallback=st}A.__boundDepthTexture=et}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");pt(A.__webglFramebuffer,N)}else if(Z){A.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[et]),A.__webglDepthbuffer[et]===void 0)A.__webglDepthbuffer[et]=n.createRenderbuffer(),yt(A.__webglDepthbuffer[et],N,!1);else{const st=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=A.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,it)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),yt(A.__webglDepthbuffer,N,!1);else{const et=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,st)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(N,A,Z){const et=i.get(N);A!==void 0&&at(et.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Ct(N)}function Ht(N){const A=N.texture,Z=i.get(N),et=i.get(A);N.addEventListener("dispose",b);const st=N.textures,it=N.isWebGLCubeRenderTarget===!0,Dt=st.length>1;if(Dt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=A.version,r.memory.textures++),it){Z.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[mt]=[];for(let vt=0;vt<A.mipmaps.length;vt++)Z.__webglFramebuffer[mt][vt]=n.createFramebuffer()}else Z.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let mt=0;mt<A.mipmaps.length;mt++)Z.__webglFramebuffer[mt]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Dt)for(let mt=0,vt=st.length;mt<vt;mt++){const It=i.get(st[mt]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),r.memory.textures++)}if(N.samples>0&&Tt(N)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let mt=0;mt<st.length;mt++){const vt=st[mt];Z.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[mt]);const It=a.convert(vt.format,vt.colorSpace),ot=a.convert(vt.type),gt=v(vt.internalFormat,It,ot,vt.colorSpace,N.isXRRenderTarget===!0),Kt=ee(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt,gt,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,Z.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),yt(Z.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),ct(n.TEXTURE_CUBE_MAP,A);for(let mt=0;mt<6;mt++)if(A.mipmaps&&A.mipmaps.length>0)for(let vt=0;vt<A.mipmaps.length;vt++)at(Z.__webglFramebuffer[mt][vt],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,vt);else at(Z.__webglFramebuffer[mt],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(A)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let mt=0,vt=st.length;mt<vt;mt++){const It=st[mt],ot=i.get(It);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),ct(n.TEXTURE_2D,It),at(Z.__webglFramebuffer,N,It,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,0),m(It)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(mt=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,et.__webglTexture),ct(mt,A),A.mipmaps&&A.mipmaps.length>0)for(let vt=0;vt<A.mipmaps.length;vt++)at(Z.__webglFramebuffer[vt],N,A,n.COLOR_ATTACHMENT0,mt,vt);else at(Z.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,mt,0);m(A)&&p(mt),e.unbindTexture()}N.depthBuffer&&Ct(N)}function xe(N){const A=N.textures;for(let Z=0,et=A.length;Z<et;Z++){const st=A[Z];if(m(st)){const it=N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Dt=i.get(st).__webglTexture;e.bindTexture(it,Dt),p(it),e.unbindTexture()}}}const z=[],we=[];function Jt(N){if(N.samples>0){if(Tt(N)===!1){const A=N.textures,Z=N.width,et=N.height;let st=n.COLOR_BUFFER_BIT;const it=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Dt=i.get(N),mt=A.length>1;if(mt)for(let vt=0;vt<A.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let vt=0;vt<A.length;vt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[vt]);const It=i.get(A[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,It,0)}n.blitFramebuffer(0,0,Z,et,0,0,Z,et,st,n.NEAREST),l===!0&&(z.length=0,we.length=0,z.push(n.COLOR_ATTACHMENT0+vt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(z.push(it),we.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,we)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let vt=0;vt<A.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[vt]);const It=i.get(A[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,It,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const A=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function ee(N){return Math.min(s.maxSamples,N.samples)}function Tt(N){const A=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Te(N){const A=r.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function Pt(N,A){const Z=N.colorSpace,et=N.format,st=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==va&&Z!==Qs&&(se.getTransfer(Z)===ge?(et!==Wn||st!==Ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function Bt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=R,this.setTextureCube=j,this.rebindTextures=Lt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Tt}function q3(n,t){function e(i,s=Qs){let a;const r=se.getTransfer(s);if(i===Ds)return n.UNSIGNED_BYTE;if(i===C0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===R0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===A1)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===w1)return n.BYTE;if(i===T1)return n.SHORT;if(i===sc)return n.UNSIGNED_SHORT;if(i===A0)return n.INT;if(i===$a)return n.UNSIGNED_INT;if(i===Vi)return n.FLOAT;if(i===wi)return n.HALF_FLOAT;if(i===C1)return n.ALPHA;if(i===R1)return n.RGB;if(i===Wn)return n.RGBA;if(i===D1)return n.LUMINANCE;if(i===L1)return n.LUMINANCE_ALPHA;if(i===mo)return n.DEPTH_COMPONENT;if(i===tr)return n.DEPTH_STENCIL;if(i===D0)return n.RED;if(i===L0)return n.RED_INTEGER;if(i===P1)return n.RG;if(i===P0)return n.RG_INTEGER;if(i===N0)return n.RGBA_INTEGER;if(i===Gu||i===ju||i===Wu||i===Xu)if(r===ge)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Gu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Gu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ju)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kp||i===Gp||i===jp||i===Wp)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===kp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xp||i===qp||i===Yp)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Xp||i===qp)return r===ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Yp)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zp||i===Kp||i===Qp||i===$p||i===Jp||i===tm||i===em||i===nm||i===im||i===sm||i===am||i===rm||i===om||i===lm)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Zp)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kp)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qp)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$p)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jp)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tm)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===em)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nm)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===im)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sm)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===am)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rm)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===om)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lm)return r===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qu||i===cm||i===um)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===qu)return r===ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===um)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===N1||i===hm||i===fm||i===dm)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===qu)return a.COMPRESSED_RED_RGTC1_EXT;if(i===hm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ja?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Y3 extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}let eo=class extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Z3={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z3)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new eo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const K3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q3=`
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

}`;class $3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new ln,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new be({vertexShader:K3,fragmentShader:Q3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J3 extends cr{constructor(t,e){super();const i=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new $3,m=e.getContextAttributes();let p=null,v=null;const y=[],x=[],T=new ht;let b=null;const E=new En;E.layers.enable(1),E.viewport=new Fe;const D=new En;D.layers.enable(2),D.viewport=new Fe;const M=[E,D],S=new Y3;S.layers.enable(1),S.layers.enable(2);let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let at=y[K];return at===void 0&&(at=new Ed,y[K]=at),at.getTargetRaySpace()},this.getControllerGrip=function(K){let at=y[K];return at===void 0&&(at=new Ed,y[K]=at),at.getGripSpace()},this.getHand=function(K){let at=y[K];return at===void 0&&(at=new Ed,y[K]=at),at.getHandSpace()};function P(K){const at=x.indexOf(K.inputSource);if(at===-1)return;const yt=y[at];yt!==void 0&&(yt.update(K.inputSource,K.frame,c||r),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",F);for(let K=0;K<y.length;K++){const at=x[K];at!==null&&(x[K]=null,y[K].disconnect(at))}L=null,H=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,s=null,v=null,Nt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",B),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Rn(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:Ds,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,yt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?tr:mo,yt=m.stencil?Ja:$a);const Ct={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:a};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(Ct),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Rn(h.textureWidth,h.textureHeight,{format:Wn,type:Ds,depthTexture:new I0(h.textureWidth,h.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Nt.setContext(s),Nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(K){for(let at=0;at<K.removed.length;at++){const yt=K.removed[at],pt=x.indexOf(yt);pt>=0&&(x[pt]=null,y[pt].disconnect(yt))}for(let at=0;at<K.added.length;at++){const yt=K.added[at];let pt=x.indexOf(yt);if(pt===-1){for(let Lt=0;Lt<y.length;Lt++)if(Lt>=x.length){x.push(yt),pt=Lt;break}else if(x[Lt]===null){x[Lt]=yt,pt=Lt;break}if(pt===-1)break}const Ct=y[pt];Ct&&Ct.connect(yt)}}const R=new U,j=new U;function O(K,at,yt){R.setFromMatrixPosition(at.matrixWorld),j.setFromMatrixPosition(yt.matrixWorld);const pt=R.distanceTo(j),Ct=at.projectionMatrix.elements,Lt=yt.projectionMatrix.elements,Ht=Ct[14]/(Ct[10]-1),xe=Ct[14]/(Ct[10]+1),z=(Ct[9]+1)/Ct[5],we=(Ct[9]-1)/Ct[5],Jt=(Ct[8]-1)/Ct[0],ee=(Lt[8]+1)/Lt[0],Tt=Ht*Jt,Te=Ht*ee,Pt=pt/(-Jt+ee),Bt=Pt*-Jt;if(at.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Bt),K.translateZ(Pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ct[10]===-1)K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const N=Ht+Pt,A=xe+Pt,Z=Tt-Bt,et=Te+(pt-Bt),st=z*xe/A*N,it=we*xe/A*N;K.projectionMatrix.makePerspective(Z,et,st,it,N,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function W(K,at){at===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(at.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let at=K.near,yt=K.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),S.near=D.near=E.near=at,S.far=D.far=E.far=yt,(L!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far);const pt=K.parent,Ct=S.cameras;W(S,pt);for(let Lt=0;Lt<Ct.length;Lt++)W(Ct[Lt],pt);Ct.length===2?O(S,E,D):S.projectionMatrix.copy(E.projectionMatrix),nt(K,S,pt)};function nt(K,at,yt){yt===null?K.matrix.copy(at.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(at.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ro*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ct=null;function rt(K,at){if(u=at.getViewerPose(c||r),g=at,u!==null){const yt=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let pt=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,pt=!0);for(let Lt=0;Lt<yt.length;Lt++){const Ht=yt[Lt];let xe=null;if(d!==null)xe=d.getViewport(Ht);else{const we=f.getViewSubImage(h,Ht);xe=we.viewport,Lt===0&&(t.setRenderTargetTextures(v,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),t.setRenderTarget(v))}let z=M[Lt];z===void 0&&(z=new En,z.layers.enable(Lt),z.viewport=new Fe,M[Lt]=z),z.matrix.fromArray(Ht.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Ht.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(xe.x,xe.y,xe.width,xe.height),Lt===0&&(S.matrix.copy(z.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pt===!0&&S.cameras.push(z)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Lt=f.getDepthInformation(yt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,s.renderState)}}for(let yt=0;yt<y.length;yt++){const pt=x[yt],Ct=y[yt];pt!==null&&Ct!==void 0&&Ct.update(pt,at,c||r)}ct&&ct(K,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),g=null}const Nt=new W1;Nt.setAnimationLoop(rt),this.setAnimationLoop=function(K){ct=K},this.dispose=function(){}}}const Ca=new Ai,tD=new ue;function eD(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,k1(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),f(m,p)):p.isMeshPhongMaterial?(a(m,p),u(m,p)):p.isMeshStandardMaterial?(a(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),_(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Ca.copy(x),Ca.x*=-1,Ca.y*=-1,Ca.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ca.y*=-1,Ca.z*=-1),m.envMapRotation.value.setFromMatrix4(tD.makeRotationFromEuler(Ca)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nD(n,t,e,i){let s={},a={},r=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(g(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(v,T);const b=t.render.frame;a[v.id]!==b&&(h(v),a[v.id]=b)}function u(v){const y=f();v.__bindingPointIndex=y;const x=n.createBuffer(),T=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function f(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=s[v.id],x=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let b=0,E=x.length;b<E;b++){const D=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,S=D.length;M<S;M++){const L=D[M];if(d(L,b,M,T)===!0){const H=L.__offset,P=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let F=0;F<P.length;F++){const R=P[F],j=_(R);typeof R=="number"||typeof R=="boolean"?(L.__data[0]=R,n.bufferSubData(n.UNIFORM_BUFFER,H+B,L.__data)):R.isMatrix3?(L.__data[0]=R.elements[0],L.__data[1]=R.elements[1],L.__data[2]=R.elements[2],L.__data[3]=0,L.__data[4]=R.elements[3],L.__data[5]=R.elements[4],L.__data[6]=R.elements[5],L.__data[7]=0,L.__data[8]=R.elements[6],L.__data[9]=R.elements[7],L.__data[10]=R.elements[8],L.__data[11]=0):(R.toArray(L.__data,B),B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,y,x,T){const b=v.value,E=y+"_"+x;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{const D=T[E];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return T[E]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(v){const y=v.uniforms;let x=0;const T=16;for(let E=0,D=y.length;E<D;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,L=M.length;S<L;S++){const H=M[S],P=Array.isArray(H.value)?H.value:[H.value];for(let B=0,F=P.length;B<F;B++){const R=P[B],j=_(R),O=x%T,W=O%j.boundary,nt=O+W;x+=W,nt!==0&&T-nt<j.storage&&(x+=T-nt),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=j.storage}}}const b=x%T;return b>0&&(x+=T-b),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:p}}class K1{constructor(t={}){const{canvas:e=YT(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=r;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yi,this.toneMapping=la,this.toneMappingExposure=1;const y=this;let x=!1,T=0,b=0,E=null,D=-1,M=null;const S=new Fe,L=new Fe;let H=null;const P=new _t(0);let B=0,F=e.width,R=e.height,j=1,O=null,W=null;const nt=new Fe(0,0,F,R),ct=new Fe(0,0,F,R);let rt=!1;const Nt=new z0;let K=!1,at=!1;const yt=new ue,pt=new U,Ct=new Fe,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function xe(){return E===null?j:1}let z=i;function we(C,k){return e.getContext(C,k)}try{const C={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${M0}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",ft,!1),z===null){const k="webgl2";if(z=we(k,C),z===null)throw we(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Jt,ee,Tt,Te,Pt,Bt,N,A,Z,et,st,it,Dt,mt,vt,It,ot,gt,Kt,Ut,bt,Vt,jt,ce;function V(){Jt=new cR(z),Jt.init(),Vt=new q3(z,Jt),ee=new iR(z,Jt,t,Vt),Tt=new j3(z),Te=new fR(z),Pt=new D3,Bt=new X3(z,Jt,Tt,Pt,ee,Vt,Te),N=new aR(y),A=new lR(y),Z=new yA(z),jt=new eR(z,Z),et=new uR(z,Z,Te,jt),st=new pR(z,et,Z,Te),Kt=new dR(z,ee,Bt),It=new sR(Pt),it=new R3(y,N,A,Jt,ee,jt,It),Dt=new eD(y,Pt),mt=new P3,vt=new I3(Jt),gt=new tR(y,N,A,Tt,st,h,l),ot=new G3(y,st,ee),ce=new nD(z,Te,ee,Tt),Ut=new nR(z,Jt,Te),bt=new hR(z,Jt,Te),Te.programs=it.programs,y.capabilities=ee,y.extensions=Jt,y.properties=Pt,y.renderLists=mt,y.shadowMap=ot,y.state=Tt,y.info=Te}V();const lt=new J3(y,z);this.xr=lt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=Jt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Jt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(F,R,!1))},this.getSize=function(C){return C.set(F,R)},this.setSize=function(C,k,X=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,R=k,e.width=Math.floor(C*j),e.height=Math.floor(k*j),X===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(F*j,R*j).floor()},this.setDrawingBufferSize=function(C,k,X){F=C,R=k,j=X,e.width=Math.floor(C*X),e.height=Math.floor(k*X),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,k,X,Y){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,k,X,Y),Tt.viewport(S.copy(nt).multiplyScalar(j).round())},this.getScissor=function(C){return C.copy(ct)},this.setScissor=function(C,k,X,Y){C.isVector4?ct.set(C.x,C.y,C.z,C.w):ct.set(C,k,X,Y),Tt.scissor(L.copy(ct).multiplyScalar(j).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(C){Tt.setScissorTest(rt=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(C=!0,k=!0,X=!0){let Y=0;if(C){let G=!1;if(E!==null){const ut=E.texture.format;G=ut===N0||ut===P0||ut===L0}if(G){const ut=E.texture.type,xt=ut===Ds||ut===$a||ut===sc||ut===Ja||ut===C0||ut===R0,Et=gt.getClearColor(),wt=gt.getClearAlpha(),zt=Et.r,Ft=Et.g,At=Et.b;xt?(d[0]=zt,d[1]=Ft,d[2]=At,d[3]=wt,z.clearBufferuiv(z.COLOR,0,d)):(g[0]=zt,g[1]=Ft,g[2]=At,g[3]=wt,z.clearBufferiv(z.COLOR,0,g))}else Y|=z.COLOR_BUFFER_BIT}k&&(Y|=z.DEPTH_BUFFER_BIT),X&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),mt.dispose(),vt.dispose(),Pt.dispose(),N.dispose(),A.dispose(),st.dispose(),jt.dispose(),ce.dispose(),it.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Pi),lt.removeEventListener("sessionend",K0),Sa.stop()};function Q(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=Te.autoReset,k=ot.enabled,X=ot.autoUpdate,Y=ot.needsUpdate,G=ot.type;V(),Te.autoReset=C,ot.enabled=k,ot.autoUpdate=X,ot.needsUpdate=Y,ot.type=G}function ft(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ot(C){const k=C.target;k.removeEventListener("dispose",Ot),te(k)}function te(C){He(C),Pt.remove(C)}function He(C){const k=Pt.get(C).programs;k!==void 0&&(k.forEach(function(X){it.releaseProgram(X)}),C.isShaderMaterial&&it.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,X,Y,G,ut){k===null&&(k=Lt);const xt=G.isMesh&&G.matrixWorld.determinant()<0,Et=Ab(C,k,X,Y,G);Tt.setMaterial(Y,xt);let wt=X.index,zt=1;if(Y.wireframe===!0){if(wt=et.getWireframeAttribute(X),wt===void 0)return;zt=2}const Ft=X.drawRange,At=X.attributes.position;let re=Ft.start*zt,Le=(Ft.start+Ft.count)*zt;ut!==null&&(re=Math.max(re,ut.start*zt),Le=Math.min(Le,(ut.start+ut.count)*zt)),wt!==null?(re=Math.max(re,0),Le=Math.min(Le,wt.count)):At!=null&&(re=Math.max(re,0),Le=Math.min(Le,At.count));const Pe=Le-re;if(Pe<0||Pe===1/0)return;jt.setup(G,Y,Et,X,wt);let Bn,oe=Ut;if(wt!==null&&(Bn=Z.get(wt),oe=bt,oe.setIndex(Bn)),G.isMesh)Y.wireframe===!0?(Tt.setLineWidth(Y.wireframeLinewidth*xe()),oe.setMode(z.LINES)):oe.setMode(z.TRIANGLES);else if(G.isLine){let Rt=Y.linewidth;Rt===void 0&&(Rt=1),Tt.setLineWidth(Rt*xe()),G.isLineSegments?oe.setMode(z.LINES):G.isLineLoop?oe.setMode(z.LINE_LOOP):oe.setMode(z.LINE_STRIP)}else G.isPoints?oe.setMode(z.POINTS):G.isSprite&&oe.setMode(z.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)oe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))oe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Rt=G._multiDrawStarts,hn=G._multiDrawCounts,le=G._multiDrawCount,di=wt?Z.get(wt).bytesPerElement:1,fr=Pt.get(Y).currentProgram.getUniforms();for(let In=0;In<le;In++)fr.setValue(z,"_gl_DrawID",In),oe.render(Rt[In]/di,hn[In])}else if(G.isInstancedMesh)oe.renderInstances(re,Pe,G.count);else if(X.isInstancedBufferGeometry){const Rt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,hn=Math.min(X.instanceCount,Rt);oe.renderInstances(re,Pe,hn)}else oe.render(re,Pe)};function un(C,k,X){C.transparent===!0&&C.side===Si&&C.forceSinglePass===!1?(C.side=Cn,C.needsUpdate=!0,Tc(C,k,X),C.side=Rs,C.needsUpdate=!0,Tc(C,k,X),C.side=Si):Tc(C,k,X)}this.compile=function(C,k,X=null){X===null&&(X=C),m=vt.get(X),m.init(k),v.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),C!==X&&C.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const Y=new Set;return C.traverse(function(G){const ut=G.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const Et=ut[xt];un(Et,X,G),Y.add(Et)}else un(ut,X,G),Y.add(ut)}),v.pop(),m=null,Y},this.compileAsync=function(C,k,X=null){const Y=this.compile(C,k,X);return new Promise(G=>{function ut(){if(Y.forEach(function(xt){Pt.get(xt).currentProgram.isReady()&&Y.delete(xt)}),Y.size===0){G(C);return}setTimeout(ut,10)}Jt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let ae=null;function Zi(C){ae&&ae(C)}function Pi(){Sa.stop()}function K0(){Sa.start()}const Sa=new W1;Sa.setAnimationLoop(Zi),typeof self<"u"&&Sa.setContext(self),this.setAnimationLoop=function(C){ae=C,lt.setAnimationLoop(C),C===null?Sa.stop():Sa.start()},lt.addEventListener("sessionstart",Pi),lt.addEventListener("sessionend",K0),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(k),k=lt.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,k,E),m=vt.get(C,v.length),m.init(k),v.push(m),yt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Nt.setFromProjectionMatrix(yt),at=this.localClippingEnabled,K=It.init(this.clippingPlanes,at),_=mt.get(C,p.length),_.init(),p.push(_),lt.enabled===!0&&lt.isPresenting===!0){const ut=y.xr.getDepthSensingMesh();ut!==null&&pf(ut,k,-1/0,y.sortObjects)}pf(C,k,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(O,W),Ht=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Ht&&gt.addToRenderList(_,C),this.info.render.frame++,K===!0&&It.beginShadows();const X=m.state.shadowsArray;ot.render(X,C,k),K===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,G=_.transmissive;if(m.setupLights(),k.isArrayCamera){const ut=k.cameras;if(G.length>0)for(let xt=0,Et=ut.length;xt<Et;xt++){const wt=ut[xt];$0(Y,G,C,wt)}Ht&&gt.render(C);for(let xt=0,Et=ut.length;xt<Et;xt++){const wt=ut[xt];Q0(_,C,wt,wt.viewport)}}else G.length>0&&$0(Y,G,C,k),Ht&&gt.render(C),Q0(_,C,k);E!==null&&(Bt.updateMultisampleRenderTarget(E),Bt.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(y,C,k),jt.resetDefaultState(),D=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],K===!0&&It.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function pf(C,k,X,Y){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Nt.intersectsSprite(C)){Y&&Ct.setFromMatrixPosition(C.matrixWorld).applyMatrix4(yt);const xt=st.update(C),Et=C.material;Et.visible&&_.push(C,xt,Et,X,Ct.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Nt.intersectsObject(C))){const xt=st.update(C),Et=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ct.copy(C.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ct.copy(xt.boundingSphere.center)),Ct.applyMatrix4(C.matrixWorld).applyMatrix4(yt)),Array.isArray(Et)){const wt=xt.groups;for(let zt=0,Ft=wt.length;zt<Ft;zt++){const At=wt[zt],re=Et[At.materialIndex];re&&re.visible&&_.push(C,xt,re,X,Ct.z,At)}}else Et.visible&&_.push(C,xt,Et,X,Ct.z,null)}}const ut=C.children;for(let xt=0,Et=ut.length;xt<Et;xt++)pf(ut[xt],k,X,Y)}function Q0(C,k,X,Y){const G=C.opaque,ut=C.transmissive,xt=C.transparent;m.setupLightsView(X),K===!0&&It.setGlobalState(y.clippingPlanes,X),Y&&Tt.viewport(S.copy(Y)),G.length>0&&wc(G,k,X),ut.length>0&&wc(ut,k,X),xt.length>0&&wc(xt,k,X),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function $0(C,k,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Rn(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?wi:Ds,minFilter:Ha,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const ut=m.state.transmissionRenderTarget[Y.id],xt=Y.viewport||S;ut.setSize(xt.z,xt.w);const Et=y.getRenderTarget();y.setRenderTarget(ut),y.getClearColor(P),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),Ht&&gt.render(X);const wt=y.toneMapping;y.toneMapping=la;const zt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),K===!0&&It.setGlobalState(y.clippingPlanes,Y),wc(C,X,Y),Bt.updateMultisampleRenderTarget(ut),Bt.updateRenderTargetMipmap(ut),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let At=0,re=k.length;At<re;At++){const Le=k[At],Pe=Le.object,Bn=Le.geometry,oe=Le.material,Rt=Le.group;if(oe.side===Si&&Pe.layers.test(Y.layers)){const hn=oe.side;oe.side=Cn,oe.needsUpdate=!0,J0(Pe,X,Y,Bn,oe,Rt),oe.side=hn,oe.needsUpdate=!0,Ft=!0}}Ft===!0&&(Bt.updateMultisampleRenderTarget(ut),Bt.updateRenderTargetMipmap(ut))}y.setRenderTarget(Et),y.setClearColor(P,B),zt!==void 0&&(Y.viewport=zt),y.toneMapping=wt}function wc(C,k,X){const Y=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ut=C.length;G<ut;G++){const xt=C[G],Et=xt.object,wt=xt.geometry,zt=Y===null?xt.material:Y,Ft=xt.group;Et.layers.test(X.layers)&&J0(Et,k,X,wt,zt,Ft)}}function J0(C,k,X,Y,G,ut){C.onBeforeRender(y,k,X,Y,G,ut),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(y,k,X,Y,C,ut),G.transparent===!0&&G.side===Si&&G.forceSinglePass===!1?(G.side=Cn,G.needsUpdate=!0,y.renderBufferDirect(X,k,Y,G,C,ut),G.side=Rs,G.needsUpdate=!0,y.renderBufferDirect(X,k,Y,G,C,ut),G.side=Si):y.renderBufferDirect(X,k,Y,G,C,ut),C.onAfterRender(y,k,X,Y,G,ut)}function Tc(C,k,X){k.isScene!==!0&&(k=Lt);const Y=Pt.get(C),G=m.state.lights,ut=m.state.shadowsArray,xt=G.state.version,Et=it.getParameters(C,G.state,ut,k,X),wt=it.getProgramCacheKey(Et);let zt=Y.programs;Y.environment=C.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(C.isMeshStandardMaterial?A:N).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,zt===void 0&&(C.addEventListener("dispose",Ot),zt=new Map,Y.programs=zt);let Ft=zt.get(wt);if(Ft!==void 0){if(Y.currentProgram===Ft&&Y.lightsStateVersion===xt)return eg(C,Et),Ft}else Et.uniforms=it.getUniforms(C),C.onBeforeCompile(Et,y),Ft=it.acquireProgram(Et,wt),zt.set(wt,Ft),Y.uniforms=Et.uniforms;const At=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(At.clippingPlanes=It.uniform),eg(C,Et),Y.needsLights=Rb(C),Y.lightsStateVersion=xt,Y.needsLights&&(At.ambientLightColor.value=G.state.ambient,At.lightProbe.value=G.state.probe,At.directionalLights.value=G.state.directional,At.directionalLightShadows.value=G.state.directionalShadow,At.spotLights.value=G.state.spot,At.spotLightShadows.value=G.state.spotShadow,At.rectAreaLights.value=G.state.rectArea,At.ltc_1.value=G.state.rectAreaLTC1,At.ltc_2.value=G.state.rectAreaLTC2,At.pointLights.value=G.state.point,At.pointLightShadows.value=G.state.pointShadow,At.hemisphereLights.value=G.state.hemi,At.directionalShadowMap.value=G.state.directionalShadowMap,At.directionalShadowMatrix.value=G.state.directionalShadowMatrix,At.spotShadowMap.value=G.state.spotShadowMap,At.spotLightMatrix.value=G.state.spotLightMatrix,At.spotLightMap.value=G.state.spotLightMap,At.pointShadowMap.value=G.state.pointShadowMap,At.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ft,Y.uniformsList=null,Ft}function tg(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Yu.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function eg(C,k){const X=Pt.get(C);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Ab(C,k,X,Y,G){k.isScene!==!0&&(k=Lt),Bt.resetTextureUnits();const ut=k.fog,xt=Y.isMeshStandardMaterial?k.environment:null,Et=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:va,wt=(Y.isMeshStandardMaterial?A:N).get(Y.envMap||xt),zt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ft=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),At=!!X.morphAttributes.position,re=!!X.morphAttributes.normal,Le=!!X.morphAttributes.color;let Pe=la;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Pe=y.toneMapping);const Bn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=Bn!==void 0?Bn.length:0,Rt=Pt.get(Y),hn=m.state.lights;if(K===!0&&(at===!0||C!==M)){const $n=C===M&&Y.id===D;It.setState(Y,C,$n)}let le=!1;Y.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==hn.state.version||Rt.outputColorSpace!==Et||G.isBatchedMesh&&Rt.batching===!1||!G.isBatchedMesh&&Rt.batching===!0||G.isBatchedMesh&&Rt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Rt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Rt.instancing===!1||!G.isInstancedMesh&&Rt.instancing===!0||G.isSkinnedMesh&&Rt.skinning===!1||!G.isSkinnedMesh&&Rt.skinning===!0||G.isInstancedMesh&&Rt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Rt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Rt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Rt.instancingMorph===!1&&G.morphTexture!==null||Rt.envMap!==wt||Y.fog===!0&&Rt.fog!==ut||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==It.numPlanes||Rt.numIntersection!==It.numIntersection)||Rt.vertexAlphas!==zt||Rt.vertexTangents!==Ft||Rt.morphTargets!==At||Rt.morphNormals!==re||Rt.morphColors!==Le||Rt.toneMapping!==Pe||Rt.morphTargetsCount!==oe)&&(le=!0):(le=!0,Rt.__version=Y.version);let di=Rt.currentProgram;le===!0&&(di=Tc(Y,k,G));let fr=!1,In=!1,mf=!1;const Ve=di.getUniforms(),Ns=Rt.uniforms;if(Tt.useProgram(di.program)&&(fr=!0,In=!0,mf=!0),Y.id!==D&&(D=Y.id,In=!0),fr||M!==C){Ve.setValue(z,"projectionMatrix",C.projectionMatrix),Ve.setValue(z,"viewMatrix",C.matrixWorldInverse);const $n=Ve.map.cameraPosition;$n!==void 0&&$n.setValue(z,pt.setFromMatrixPosition(C.matrixWorld)),ee.logarithmicDepthBuffer&&Ve.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ve.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,In=!0,mf=!0)}if(G.isSkinnedMesh){Ve.setOptional(z,G,"bindMatrix"),Ve.setOptional(z,G,"bindMatrixInverse");const $n=G.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),Ve.setValue(z,"boneTexture",$n.boneTexture,Bt))}G.isBatchedMesh&&(Ve.setOptional(z,G,"batchingTexture"),Ve.setValue(z,"batchingTexture",G._matricesTexture,Bt),Ve.setOptional(z,G,"batchingIdTexture"),Ve.setValue(z,"batchingIdTexture",G._indirectTexture,Bt),Ve.setOptional(z,G,"batchingColorTexture"),G._colorsTexture!==null&&Ve.setValue(z,"batchingColorTexture",G._colorsTexture,Bt));const gf=X.morphAttributes;if((gf.position!==void 0||gf.normal!==void 0||gf.color!==void 0)&&Kt.update(G,X,di),(In||Rt.receiveShadow!==G.receiveShadow)&&(Rt.receiveShadow=G.receiveShadow,Ve.setValue(z,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ns.envMap.value=wt,Ns.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Ns.envMapIntensity.value=k.environmentIntensity),In&&(Ve.setValue(z,"toneMappingExposure",y.toneMappingExposure),Rt.needsLights&&Cb(Ns,mf),ut&&Y.fog===!0&&Dt.refreshFogUniforms(Ns,ut),Dt.refreshMaterialUniforms(Ns,Y,j,R,m.state.transmissionRenderTarget[C.id]),Yu.upload(z,tg(Rt),Ns,Bt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Yu.upload(z,tg(Rt),Ns,Bt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ve.setValue(z,"center",G.center),Ve.setValue(z,"modelViewMatrix",G.modelViewMatrix),Ve.setValue(z,"normalMatrix",G.normalMatrix),Ve.setValue(z,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const $n=Y.uniformsGroups;for(let vf=0,Db=$n.length;vf<Db;vf++){const ng=$n[vf];ce.update(ng,di),ce.bind(ng,di)}}return di}function Cb(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Rb(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,k,X){Pt.get(C.texture).__webglTexture=k,Pt.get(C.depthTexture).__webglTexture=X;const Y=Pt.get(C);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const X=Pt.get(C);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,X=0){E=C,T=k,b=X;let Y=!0,G=null,ut=!1,xt=!1;if(C){const wt=Pt.get(C);if(wt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1;else if(wt.__webglFramebuffer===void 0)Bt.setupRenderTarget(C);else if(wt.__hasExternalTextures)Bt.rebindTextures(C,Pt.get(C.texture).__webglTexture,Pt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const At=C.depthTexture;if(wt.__boundDepthTexture!==At){if(At!==null&&Pt.has(At)&&(C.width!==At.image.width||C.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(C)}}const zt=C.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(xt=!0);const Ft=Pt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ft[k])?G=Ft[k][X]:G=Ft[k],ut=!0):C.samples>0&&Bt.useMultisampledRTT(C)===!1?G=Pt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ft)?G=Ft[X]:G=Ft,S.copy(C.viewport),L.copy(C.scissor),H=C.scissorTest}else S.copy(nt).multiplyScalar(j).floor(),L.copy(ct).multiplyScalar(j).floor(),H=rt;if(Tt.bindFramebuffer(z.FRAMEBUFFER,G)&&Y&&Tt.drawBuffers(C,G),Tt.viewport(S),Tt.scissor(L),Tt.setScissorTest(H),ut){const wt=Pt.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,wt.__webglTexture,X)}else if(xt){const wt=Pt.get(C.texture),zt=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.__webglTexture,X||0,zt)}D=-1},this.readRenderTargetPixels=function(C,k,X,Y,G,ut,xt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){Tt.bindFramebuffer(z.FRAMEBUFFER,Et);try{const wt=C.texture,zt=wt.format,Ft=wt.type;if(!ee.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Y&&X>=0&&X<=C.height-G&&z.readPixels(k,X,Y,G,Vt.convert(zt),Vt.convert(Ft),ut)}finally{const wt=E!==null?Pt.get(E).__webglFramebuffer:null;Tt.bindFramebuffer(z.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(C,k,X,Y,G,ut,xt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){Tt.bindFramebuffer(z.FRAMEBUFFER,Et);try{const wt=C.texture,zt=wt.format,Ft=wt.type;if(!ee.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-Y&&X>=0&&X<=C.height-G){const At=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,At),z.bufferData(z.PIXEL_PACK_BUFFER,ut.byteLength,z.STREAM_READ),z.readPixels(k,X,Y,G,Vt.convert(zt),Vt.convert(Ft),0),z.flush();const re=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);await ZT(z,re,4);try{z.bindBuffer(z.PIXEL_PACK_BUFFER,At),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ut)}finally{z.deleteBuffer(At),z.deleteSync(re)}return ut}}finally{const wt=E!==null?Pt.get(E).__webglFramebuffer:null;Tt.bindFramebuffer(z.FRAMEBUFFER,wt)}}},this.copyFramebufferToTexture=function(C,k=null,X=0){C.isTexture!==!0&&(Ul("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const Y=Math.pow(2,-X),G=Math.floor(C.image.width*Y),ut=Math.floor(C.image.height*Y),xt=k!==null?k.x:0,Et=k!==null?k.y:0;Bt.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,xt,Et,G,ut),Tt.unbindTexture()},this.copyTextureToTexture=function(C,k,X=null,Y=null,G=0){C.isTexture!==!0&&(Ul("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1],k=arguments[2],G=arguments[3]||0,X=null);let ut,xt,Et,wt,zt,Ft;X!==null?(ut=X.max.x-X.min.x,xt=X.max.y-X.min.y,Et=X.min.x,wt=X.min.y):(ut=C.image.width,xt=C.image.height,Et=0,wt=0),Y!==null?(zt=Y.x,Ft=Y.y):(zt=0,Ft=0);const At=Vt.convert(k.format),re=Vt.convert(k.type);Bt.setTexture2D(k,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const Le=z.getParameter(z.UNPACK_ROW_LENGTH),Pe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Bn=z.getParameter(z.UNPACK_SKIP_PIXELS),oe=z.getParameter(z.UNPACK_SKIP_ROWS),Rt=z.getParameter(z.UNPACK_SKIP_IMAGES),hn=C.isCompressedTexture?C.mipmaps[G]:C.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,hn.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,hn.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Et),z.pixelStorei(z.UNPACK_SKIP_ROWS,wt),C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,G,zt,Ft,ut,xt,At,re,hn.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,G,zt,Ft,hn.width,hn.height,At,hn.data):z.texSubImage2D(z.TEXTURE_2D,G,zt,Ft,ut,xt,At,re,hn),z.pixelStorei(z.UNPACK_ROW_LENGTH,Le),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Bn),z.pixelStorei(z.UNPACK_SKIP_ROWS,oe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Rt),G===0&&k.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(C,k,X=null,Y=null,G=0){C.isTexture!==!0&&(Ul("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,C=arguments[2],k=arguments[3],G=arguments[4]||0);let ut,xt,Et,wt,zt,Ft,At,re,Le;const Pe=C.isCompressedTexture?C.mipmaps[G]:C.image;X!==null?(ut=X.max.x-X.min.x,xt=X.max.y-X.min.y,Et=X.max.z-X.min.z,wt=X.min.x,zt=X.min.y,Ft=X.min.z):(ut=Pe.width,xt=Pe.height,Et=Pe.depth,wt=0,zt=0,Ft=0),Y!==null?(At=Y.x,re=Y.y,Le=Y.z):(At=0,re=0,Le=0);const Bn=Vt.convert(k.format),oe=Vt.convert(k.type);let Rt;if(k.isData3DTexture)Bt.setTexture3D(k,0),Rt=z.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Bt.setTexture2DArray(k,0),Rt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const hn=z.getParameter(z.UNPACK_ROW_LENGTH),le=z.getParameter(z.UNPACK_IMAGE_HEIGHT),di=z.getParameter(z.UNPACK_SKIP_PIXELS),fr=z.getParameter(z.UNPACK_SKIP_ROWS),In=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Pe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,wt),z.pixelStorei(z.UNPACK_SKIP_ROWS,zt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ft),C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Rt,G,At,re,Le,ut,xt,Et,Bn,oe,Pe.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Rt,G,At,re,Le,ut,xt,Et,Bn,Pe.data):z.texSubImage3D(Rt,G,At,re,Le,ut,xt,Et,Bn,oe,Pe),z.pixelStorei(z.UNPACK_ROW_LENGTH,hn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,le),z.pixelStorei(z.UNPACK_SKIP_PIXELS,di),z.pixelStorei(z.UNPACK_SKIP_ROWS,fr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,In),G===0&&k.generateMipmaps&&z.generateMipmap(Rt),Tt.unbindTexture()},this.initRenderTarget=function(C){Pt.get(C).__webglFramebuffer===void 0&&Bt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Bt.setTextureCube(C,0):C.isData3DTexture?Bt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Bt.setTexture2DArray(C,0):Bt.setTexture2D(C,0),Tt.unbindTexture()},this.resetState=function(){T=0,b=0,E=null,Tt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ms}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===U0?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===rf?"display-p3":"srgb"}}class rc extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class F0 extends ln{constructor(t=null,e=1,i=1,s,a,r,o,l,c=xn,u=xn,f,h){super(null,r,o,l,c,u,s,a,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Nh=new U,Uh=new U,b_=new ue,tl=new of,fu=new Sc,wd=new U,M_=new U;class iD extends me{constructor(t=new On,e=new Ol){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)Nh.fromBufferAttribute(e,s-1),Uh.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Nh.distanceTo(Uh);t.setAttribute("lineDistance",new ze(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fu.copy(i.boundingSphere),fu.applyMatrix4(s),fu.radius+=a,t.ray.intersectsSphere(fu)===!1)return;b_.copy(s).invert(),tl.copy(t.ray).applyMatrix4(b_);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),v=u.getX(_+1),y=du(this,t,tl,l,p,v);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=du(this,t,tl,l,_,m);p&&e.push(p)}}else{const d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=d,m=g-1;_<m;_+=c){const p=du(this,t,tl,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=du(this,t,tl,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function du(n,t,e,i,s,a){const r=n.geometry.attributes.position;if(Nh.fromBufferAttribute(r,s),Uh.fromBufferAttribute(r,a),e.distanceSqToSegment(Nh,Uh,wd,M_)>i)return;wd.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(wd);if(!(l<t.near||l>t.far))return{distance:l,point:M_.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const E_=new U,w_=new U;class mm extends iD{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)E_.fromBufferAttribute(e,s),w_.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+E_.distanceTo(w_);t.setAttribute("lineDistance",new ze(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}let dl=class extends Ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}};const T_=new ue,gm=new of,pu=new Sc,mu=new U;class Zu extends me{constructor(t=new On,e=new dl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pu.copy(i.boundingSphere),pu.applyMatrix4(s),pu.radius+=a,t.ray.intersectsSphere(pu)===!1)return;T_.copy(s).invert(),gm.copy(t.ray).applyMatrix4(T_);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);mu.fromBufferAttribute(f,m),A_(mu,m,l,s,t,e,this)}}else{const h=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let g=h,_=d;g<_;g++)mu.fromBufferAttribute(f,g),A_(mu,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function A_(n,t,e,i,s,a,r){const o=gm.distanceSqToPoint(n);if(o<e){const l=new U;gm.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:r})}}class sD extends ln{constructor(t,e,i,s,a,r,o,l,c){super(t,e,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ps{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),e.push(a),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const a=i.length;let r;e?r=e:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);const u=i[s],h=i[s+1]-u,d=(r-u)/h;return(s+d)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=e||(r.isVector2?new ht:new U);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new U,s=[],a=[],r=[],o=new U,l=new ue;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new U)}a[0]=new U,r[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let d=1;d<=t;d++){if(a[d]=a[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Qe(s[d-1].dot(s[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(o,g))}r[d].crossVectors(s[d],a[d])}if(e===!0){let d=Math.acos(Qe(a[0].dot(a[t]),-1,1));d/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(d=-d);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Q1 extends Ps{constructor(t=0,e=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ht){const i=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class aD extends Q1{constructor(t,e,i,s,a,r){super(t,e,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function H0(){let n=0,t=0,e=0,i=0;function s(a,r,o,l){n=a,t=o,e=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,f){let h=(r-a)/c-(o-a)/(c+u)+(o-r)/u,d=(o-r)/u-(l-r)/(u+f)+(l-o)/f;h*=u,d*=u,s(r,o,h,d)},calc:function(a){const r=a*a,o=r*a;return n+t*a+e*r+i*o}}}const gu=new U,Td=new H0,Ad=new H0,Cd=new H0;class rD extends Ps{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){const i=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:(gu.subVectors(s[0],s[1]).add(s[0]),c=gu);const f=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(gu.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=gu),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Td.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,_,m),Ad.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,_,m),Cd.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Td.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Ad.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Cd.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Td.calc(l),Ad.calc(l),Cd.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function C_(n,t,e,i,s){const a=(i-t)*.5,r=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+a+r)*l+(-3*e+3*i-2*a-r)*o+a*n+e}function oD(n,t){const e=1-n;return e*e*t}function lD(n,t){return 2*(1-n)*n*t}function cD(n,t){return n*n*t}function zl(n,t,e,i){return oD(n,t)+lD(n,e)+cD(n,i)}function uD(n,t){const e=1-n;return e*e*e*t}function hD(n,t){const e=1-n;return 3*e*e*n*t}function fD(n,t){return 3*(1-n)*n*n*t}function dD(n,t){return n*n*n*t}function Bl(n,t,e,i,s){return uD(n,t)+hD(n,e)+fD(n,i)+dD(n,s)}class pD extends Ps{constructor(t=new ht,e=new ht,i=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ht){const i=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Bl(t,s.x,a.x,r.x,o.x),Bl(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mD extends Ps{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){const i=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Bl(t,s.x,a.x,r.x,o.x),Bl(t,s.y,a.y,r.y,o.y),Bl(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gD extends Ps{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vD extends Ps{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _D extends Ps{constructor(t=new ht,e=new ht,i=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ht){const i=e,s=this.v0,a=this.v1,r=this.v2;return i.set(zl(t,s.x,a.x,r.x),zl(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $1 extends Ps{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,s=this.v0,a=this.v1,r=this.v2;return i.set(zl(t,s.x,a.x,r.x),zl(t,s.y,a.y,r.y),zl(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yD extends Ps{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const i=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return i.set(C_(o,l.x,c.x,u.x,f.x),C_(o,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var xD=Object.freeze({__proto__:null,ArcCurve:aD,CatmullRomCurve3:rD,CubicBezierCurve:pD,CubicBezierCurve3:mD,EllipseCurve:Q1,LineCurve:gD,LineCurve3:vD,QuadraticBezierCurve:_D,QuadraticBezierCurve3:$1,SplineCurve:yD});class J1 extends On{constructor(t=new $1(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,i=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:a};const r=t.computeFrenetFrames(e,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new U,l=new U,c=new ht;let u=new U;const f=[],h=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ze(f,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(d,2));function _(){for(let y=0;y<e;y++)m(y);m(a===!1?e:0),v(),p()}function m(y){u=t.getPointAt(y/e,u);const x=r.normals[y],T=r.binormals[y];for(let b=0;b<=s;b++){const E=b/s*Math.PI*2,D=Math.sin(E),M=-Math.cos(E);l.x=M*x.x+D*T.x,l.y=M*x.y+D*T.y,l.z=M*x.z+D*T.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){const T=(s+1)*(y-1)+(x-1),b=(s+1)*y+(x-1),E=(s+1)*y+x,D=(s+1)*(y-1)+x;g.push(T,b,D),g.push(b,E,D)}}function v(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new J1(new xD[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class SD extends be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bD extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zU extends bD{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class MD extends Ci{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ED extends Ci{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}const Oh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class wD{constructor(t,e,i){const s=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const TD=new wD;class bc{constructor(t){this.manager=t!==void 0?t:TD,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}bc.DEFAULT_MATERIAL_NAME="__DEFAULT";const as={};class AD extends Error{constructor(t,e){super(t),this.response=e}}class CD extends bc{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=Oh.get(t);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(as[t]!==void 0){as[t].push({onLoad:e,onProgress:i,onError:s});return}as[t]=[],as[t].push({onLoad:e,onProgress:i,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=as[t],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){f.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let b=0,E=u.length;b<E;b++){const D=u[b];D.onProgress&&D.onProgress(T)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new AD(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Oh.add(t,c);const u=as[t];delete as[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=as[t];if(u===void 0)throw this.manager.itemError(t),c;delete as[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class RD extends bc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,r=Oh.get(t);if(r!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(r),a.manager.itemEnd(t)},0),r;const o=ac("img");function l(){u(),Oh.add(t,this),e&&e(this),a.manager.itemEnd(t)}function c(f){u(),s&&s(f),a.manager.itemError(t),a.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(t),o.src=t,o}}class Ku extends bc{constructor(t){super(t)}load(t,e,i,s){const a=new ln,r=new RD(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,e!==void 0&&e(a)},i,s),a}}class V0 extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Rd=new ue,R_=new U,D_=new U;class tb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new z0,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;R_.setFromMatrixPosition(t.matrixWorld),e.position.copy(R_),D_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(D_),e.updateMatrixWorld(),Rd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class DD extends tb{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Ro*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=t.distance||e.far;(i!==e.fov||s!==e.aspect||a!==e.far)&&(e.fov=i,e.aspect=s,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class LD extends V0{constructor(t,e,i=0,s=Math.PI/3,a=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.distance=i,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new DD}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class PD extends tb{constructor(){super(new lf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BU extends V0{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new PD}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ND extends V0{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class k0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=L_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=L_();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function L_(){return(typeof performance>"u"?Date:performance).now()}class P_{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class UD extends mm{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new On;s.setAttribute("position",new ze(e,3)),s.setAttribute("color",new ze(i,3));const a=new Ol({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(t,e,i){const s=new _t,a=this.geometry.attributes.color.array;return s.set(t),s.toArray(a,0),s.toArray(a,3),s.set(e),s.toArray(a,6),s.toArray(a,9),s.set(i),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class OD extends cr{constructor(t,e){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:M0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=M0);var Il=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var t=1.70158;return n===1?1:n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return n===0?0:--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*(n*n*((t+1)*n-t)):.5*((n-=2)*n*((t+1)*n+t)+2)}}),Bounce:Object.freeze({In:function(n){return 1-Il.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Il.Bounce.In(n*2)*.5:Il.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(t){return Math.pow(t,n)},Out:function(t){return 1-Math.pow(1-t,n)},InOut:function(t){return t<.5?Math.pow(t*2,n)/2:(1-Math.pow(2-t*2,n))/2+.5}}}}),pl=function(){return performance.now()},zD=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},n.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},n.prototype.update=function(t,e){t===void 0&&(t=pl()),e===void 0&&(e=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var a=this._tweens[i[s]],r=!e;a&&a.update(t,r)===!1&&!e&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),no={Linear:function(n,t){var e=n.length-1,i=e*t,s=Math.floor(i),a=no.Utils.Linear;return t<0?a(n[0],n[1],i):t>1?a(n[e],n[e-1],e-i):a(n[s],n[s+1>e?e:s+1],i-s)},Bezier:function(n,t){for(var e=0,i=n.length-1,s=Math.pow,a=no.Utils.Bernstein,r=0;r<=i;r++)e+=s(1-t,i-r)*s(t,r)*n[r]*a(i,r);return e},CatmullRom:function(n,t){var e=n.length-1,i=e*t,s=Math.floor(i),a=no.Utils.CatmullRom;return n[0]===n[e]?(t<0&&(s=Math.floor(i=e*(1+t))),a(n[(s-1+e)%e],n[s],n[(s+1)%e],n[(s+2)%e],i-s)):t<0?n[0]-(a(n[0],n[0],n[1],n[1],-i)-n[0]):t>1?n[e]-(a(n[e],n[e],n[e-1],n[e-1],i-e)-n[e]):a(n[s?s-1:0],n[s],n[e<s+1?e:s+1],n[e<s+2?e:s+2],i-s)},Utils:{Linear:function(n,t,e){return(t-n)*e+n},Bernstein:function(n,t){var e=no.Utils.Factorial;return e(n)/e(t)/e(n-t)},Factorial:function(){var n=[1];return function(t){var e=1;if(n[t])return n[t];for(var i=t;i>1;i--)e*=i;return n[t]=e,e}}(),CatmullRom:function(n,t,e,i,s){var a=(e-n)*.5,r=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*e+a+r)*l+(-3*t+3*e-2*a-r)*o+a*s+t}}},BD=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),vm=new zD,IU=function(){function n(t,e){e===void 0&&(e=vm),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Il.Linear.None,this._interpolationFunction=no.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=BD.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e,this},n.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t,this},n.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},n.prototype.start=function(t,e){if(t===void 0&&(t=pl()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var a in this._valuesEnd)s[a]=this._valuesEnd[a];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},n.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},n.prototype._setupProperties=function(t,e,i,s,a){for(var r in i){var o=t[r],l=Array.isArray(o),c=l?"array":typeof o,u=!l&&Array.isArray(i[r]);if(!(c==="undefined"||c==="function")){if(u){var f=i[r];if(f.length===0)continue;for(var h=[o],d=0,g=f.length;d<g;d+=1){var _=this._handleRelativeValue(o,f[d]);if(isNaN(_)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(_)}u&&(i[r]=h)}if((c==="object"||l)&&o&&!u){e[r]=l?[]:{};var m=o;for(var p in m)e[r][p]=m[p];s[r]=l?[]:{};var f=i[r];if(!this._isDynamic){var v={};for(var p in f)v[p]=f[p];i[r]=f=v}this._setupProperties(m,e[r],f,s[r],a)}else(typeof e[r]>"u"||a)&&(e[r]=o),l||(e[r]*=1),u?s[r]=i[r].slice().reverse():s[r]=e[r]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(t){return t===void 0&&(t=pl()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},n.prototype.resume=function(t){return t===void 0&&(t=pl()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},n.prototype.group=function(t){return t===void 0&&(t=vm),this._group=t,this},n.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},n.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},n.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},n.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},n.prototype.easing=function(t){return t===void 0&&(t=Il.Linear.None),this._easingFunction=t,this},n.prototype.interpolation=function(t){return t===void 0&&(t=no.Linear),this._interpolationFunction=t,this},n.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},n.prototype.onStart=function(t){return this._onStartCallback=t,this},n.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},n.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},n.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},n.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},n.prototype.onStop=function(t){return this._onStopCallback=t,this},n.prototype.update=function(t,e){if(t===void 0&&(t=pl()),e===void 0&&(e=!0),this._isPaused)return!0;var i,s,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>a)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),s=(t-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var r=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,r),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,l=this._chainedTweens.length;o<l;o++)this._chainedTweens[o].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(t,e,i,s){for(var a in i)if(e[a]!==void 0){var r=e[a]||0,o=i[a],l=Array.isArray(t[a]),c=Array.isArray(o),u=!l&&c;u?t[a]=this._interpolationFunction(o,s):typeof o=="object"&&o?this._updateProperties(t[a],r,o,s):(o=this._handleRelativeValue(r,o),typeof o=="number"&&(t[a]=r+(o-r)*s))}},n.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},n.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],i=this._valuesEnd[t];typeof i=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(i):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},n}(),Xi=vm;Xi.getAll.bind(Xi);Xi.removeAll.bind(Xi);Xi.add.bind(Xi);Xi.remove.bind(Xi);var eb=Xi.update.bind(Xi);const N_={type:"change"},G0={type:"start"},nb={type:"end"},vu=new of,U_=new fs,ID=Math.cos(70*Lh.DEG2RAD),Ye=new U,Ln=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dd=1e-6;class FD extends OD{constructor(t,e=null){super(t,e),this.state=de.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fo.ROTATE,MIDDLE:fo.DOLLY,RIGHT:fo.PAN},this.touches={ONE:Jr.ROTATE,TWO:Jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new er,this._lastTargetPosition=new U,this._quat=new er().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new P_,this._sphericalDelta=new P_,this._scale=1,this._panOffset=new U,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new U,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VD.bind(this),this._onPointerDown=HD.bind(this),this._onPointerUp=kD.bind(this),this._onContextMenu=ZD.bind(this),this._onMouseWheel=WD.bind(this),this._onKeyDown=XD.bind(this),this._onTouchStart=qD.bind(this),this._onTouchMove=YD.bind(this),this._onMouseDown=GD.bind(this),this._onMouseMove=jD.bind(this),this._interceptControlDown=KD.bind(this),this._interceptControlUp=QD.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(N_),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;Ye.copy(e).sub(this.target),Ye.applyQuaternion(this._quat),this._spherical.setFromVector3(Ye),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Ye.setFromSpherical(this._spherical),Ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=Ye.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(vu.origin.copy(this.object.position),vu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vu.direction))<ID?this.object.lookAt(this.target):(U_.setFromNormalAndCoplanarPoint(this.object.up,this.target),vu.intersectPlane(U_,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Dd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dd||this._lastTargetPosition.distanceToSquared(this.target)>Dd?(this.dispatchEvent(N_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ye.setFromMatrixColumn(e,0),Ye.multiplyScalar(-t),this._panOffset.add(Ye)}_panUp(t,e){this.screenSpacePanning===!0?Ye.setFromMatrixColumn(e,1):(Ye.setFromMatrixColumn(e,0),Ye.crossVectors(this.object.up,Ye)),Ye.multiplyScalar(t),this._panOffset.add(Ye)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ye.copy(s).sub(this.target);let a=Ye.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*e*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,a=e-i.top,r=i.width,o=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function HD(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function VD(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function kD(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nb),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function GD(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=de.DOLLY;break;case fo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}break;case fo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(G0)}function jD(n){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function WD(n){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(n.preventDefault(),this.dispatchEvent(G0),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(nb))}function XD(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function qD(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Jr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=de.TOUCH_ROTATE;break;case Jr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case Jr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=de.TOUCH_DOLLY_PAN;break;case Jr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(G0)}function YD(n){switch(this._trackPointer(n),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=de.NONE}}function ZD(n){this.enabled!==!1&&n.preventDefault()}function KD(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function QD(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Fl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ur{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $D=new lf(-1,1,1,-1,0,1);class JD extends On{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}}const tL=new JD;class uf{constructor(t){this._mesh=new Be(tL,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$D)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class eL extends ur{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Xn.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new uf(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class O_ extends ur{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class nL extends ur{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class iL{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new ht);this._width=i.width,this._height=i.height,e=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new eL(Fl),this.copyPass.material.blending=Mn,this.clock=new k0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}O_!==void 0&&(r instanceof O_?i=!0:r instanceof nL&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ib extends ur{constructor(t,e,i=null,s=null,a=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(a=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const sL={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class nr extends ur{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new _t(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(a,r,{type:wi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new Rn(a,r,{type:wi});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new Rn(a,r,{type:wi});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),a=Math.round(a/2),r=Math.round(r/2)}const o=sL;this.highPassUniforms=Xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ht(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Fl;this.copyUniforms=Xn.clone(u.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Op,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _t,this.oldClearAlpha=1,this.basic=new Fo,this.fsQuad=new uf(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new ht(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}nr.BlurDirectionX=new ht(1,0);nr.BlurDirectionY=new ht(0,1);class aL{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,s){return t[0]*e+t[1]*i+t[2]*s}dot4(t,e,i,s,a){return t[0]*e+t[1]*i+t[2]*s+t[3]*a}noise(t,e){let i,s,a;const r=.5*(Math.sqrt(3)-1),o=(t+e)*r,l=Math.floor(t+o),c=Math.floor(e+o),u=(3-Math.sqrt(3))/6,f=(l+c)*u,h=l-f,d=c-f,g=t-h,_=e-d;let m,p;g>_?(m=1,p=0):(m=0,p=1);const v=g-m+u,y=_-p+u,x=g-1+2*u,T=_-1+2*u,b=l&255,E=c&255,D=this.perm[b+this.perm[E]]%12,M=this.perm[b+m+this.perm[E+p]]%12,S=this.perm[b+1+this.perm[E+1]]%12;let L=.5-g*g-_*_;L<0?i=0:(L*=L,i=L*L*this.dot(this.grad3[D],g,_));let H=.5-v*v-y*y;H<0?s=0:(H*=H,s=H*H*this.dot(this.grad3[M],v,y));let P=.5-x*x-T*T;return P<0?a=0:(P*=P,a=P*P*this.dot(this.grad3[S],x,T)),70*(i+s+a)}noise3d(t,e,i){let s,a,r,o;const c=(t+e+i)*.3333333333333333,u=Math.floor(t+c),f=Math.floor(e+c),h=Math.floor(i+c),d=1/6,g=(u+f+h)*d,_=u-g,m=f-g,p=h-g,v=t-_,y=e-m,x=i-p;let T,b,E,D,M,S;v>=y?y>=x?(T=1,b=0,E=0,D=1,M=1,S=0):v>=x?(T=1,b=0,E=0,D=1,M=0,S=1):(T=0,b=0,E=1,D=1,M=0,S=1):y<x?(T=0,b=0,E=1,D=0,M=1,S=1):v<x?(T=0,b=1,E=0,D=0,M=1,S=1):(T=0,b=1,E=0,D=1,M=1,S=0);const L=v-T+d,H=y-b+d,P=x-E+d,B=v-D+2*d,F=y-M+2*d,R=x-S+2*d,j=v-1+3*d,O=y-1+3*d,W=x-1+3*d,nt=u&255,ct=f&255,rt=h&255,Nt=this.perm[nt+this.perm[ct+this.perm[rt]]]%12,K=this.perm[nt+T+this.perm[ct+b+this.perm[rt+E]]]%12,at=this.perm[nt+D+this.perm[ct+M+this.perm[rt+S]]]%12,yt=this.perm[nt+1+this.perm[ct+1+this.perm[rt+1]]]%12;let pt=.6-v*v-y*y-x*x;pt<0?s=0:(pt*=pt,s=pt*pt*this.dot3(this.grad3[Nt],v,y,x));let Ct=.6-L*L-H*H-P*P;Ct<0?a=0:(Ct*=Ct,a=Ct*Ct*this.dot3(this.grad3[K],L,H,P));let Lt=.6-B*B-F*F-R*R;Lt<0?r=0:(Lt*=Lt,r=Lt*Lt*this.dot3(this.grad3[at],B,F,R));let Ht=.6-j*j-O*O-W*W;return Ht<0?o=0:(Ht*=Ht,o=Ht*Ht*this.dot3(this.grad3[yt],j,O,W)),32*(s+a+r+o)}noise4d(t,e,i,s){const a=this.grad4,r=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,f,h,d,g;const _=(t+e+i+s)*l,m=Math.floor(t+_),p=Math.floor(e+_),v=Math.floor(i+_),y=Math.floor(s+_),x=(m+p+v+y)*c,T=m-x,b=p-x,E=v-x,D=y-x,M=t-T,S=e-b,L=i-E,H=s-D,P=M>S?32:0,B=M>L?16:0,F=S>L?8:0,R=M>H?4:0,j=S>H?2:0,O=L>H?1:0,W=P+B+F+R+j+O,nt=r[W][0]>=3?1:0,ct=r[W][1]>=3?1:0,rt=r[W][2]>=3?1:0,Nt=r[W][3]>=3?1:0,K=r[W][0]>=2?1:0,at=r[W][1]>=2?1:0,yt=r[W][2]>=2?1:0,pt=r[W][3]>=2?1:0,Ct=r[W][0]>=1?1:0,Lt=r[W][1]>=1?1:0,Ht=r[W][2]>=1?1:0,xe=r[W][3]>=1?1:0,z=M-nt+c,we=S-ct+c,Jt=L-rt+c,ee=H-Nt+c,Tt=M-K+2*c,Te=S-at+2*c,Pt=L-yt+2*c,Bt=H-pt+2*c,N=M-Ct+3*c,A=S-Lt+3*c,Z=L-Ht+3*c,et=H-xe+3*c,st=M-1+4*c,it=S-1+4*c,Dt=L-1+4*c,mt=H-1+4*c,vt=m&255,It=p&255,ot=v&255,gt=y&255,Kt=o[vt+o[It+o[ot+o[gt]]]]%32,Ut=o[vt+nt+o[It+ct+o[ot+rt+o[gt+Nt]]]]%32,bt=o[vt+K+o[It+at+o[ot+yt+o[gt+pt]]]]%32,Vt=o[vt+Ct+o[It+Lt+o[ot+Ht+o[gt+xe]]]]%32,jt=o[vt+1+o[It+1+o[ot+1+o[gt+1]]]]%32;let ce=.6-M*M-S*S-L*L-H*H;ce<0?u=0:(ce*=ce,u=ce*ce*this.dot4(a[Kt],M,S,L,H));let V=.6-z*z-we*we-Jt*Jt-ee*ee;V<0?f=0:(V*=V,f=V*V*this.dot4(a[Ut],z,we,Jt,ee));let lt=.6-Tt*Tt-Te*Te-Pt*Pt-Bt*Bt;lt<0?h=0:(lt*=lt,h=lt*lt*this.dot4(a[bt],Tt,Te,Pt,Bt));let Q=.6-N*N-A*A-Z*Z-et*et;Q<0?d=0:(Q*=Q,d=Q*Q*this.dot4(a[Vt],N,A,Z,et));let $=.6-st*st-it*it-Dt*Dt-mt*mt;return $<0?g=0:($*=$,g=$*$*this.dot4(a[jt],st,it,Dt,mt)),27*(u+f+h+d+g)}}const _u={name:"SSAOShader",defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new ht},cameraProjectionMatrix:{value:new ue},cameraInverseProjectionMatrix:{value:new ue},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},yu={name:"SSAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},xu={name:"SSAOBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ht}},vertexShader:`varying vec2 vUv;

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

		}`};class vs extends ur{constructor(t,e,i,s,a=32){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(a),this.generateRandomKernelRotations();const r=new I0;r.format=tr,r.type=Ja,this.normalRenderTarget=new Rn(this.width,this.height,{minFilter:xn,magFilter:xn,type:wi,depthTexture:r}),this.ssaoRenderTarget=new Rn(this.width,this.height,{type:wi}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new be({defines:Object.assign({},_u.defines),uniforms:Xn.clone(_u.uniforms),vertexShader:_u.vertexShader,fragmentShader:_u.fragmentShader,blending:Mn}),this.ssaoMaterial.defines.KERNEL_SIZE=a,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new ED,this.normalMaterial.blending=Mn,this.blurMaterial=new be({defines:Object.assign({},xu.defines),uniforms:Xn.clone(xu.uniforms),vertexShader:xu.vertexShader,fragmentShader:xu.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new be({defines:Object.assign({},yu.defines),uniforms:Xn.clone(yu.uniforms),vertexShader:yu.vertexShader,fragmentShader:yu.fragmentShader,blending:Mn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new be({uniforms:Xn.clone(Fl.uniforms),vertexShader:Fl.vertexShader,fragmentShader:Fl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:y1,blendDst:zp,blendEquation:gs,blendSrcAlpha:_1,blendDstAlpha:zp,blendEquationAlpha:gs}),this.fsQuad=new uf(null),this.originalClearColor=new _t}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,i){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case vs.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Mn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case vs.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Mn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case vs.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:i);break;case vs.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Mn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case vs.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=v1,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,i,s,a){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(a||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}renderOverride(t,e,i,s,a){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s=e.clearColor||s,a=e.clearAlpha||a,s!=null&&(t.setClearColor(s),t.setClearAlpha(a||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let i=0;i<t;i++){const s=new U;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let a=i/t;a=Lh.lerp(.1,1,a*a),s.multiplyScalar(a),e.push(s)}}generateRandomKernelRotations(){const i=new aL,s=4*4,a=new Float32Array(s);for(let r=0;r<s;r++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;a[r]=i.noise3d(o,l,c)}this.noiseTexture=new F0(a,4,4,D0,Vi),this.noiseTexture.wrapS=Co,this.noiseTexture.wrapT=Co,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){const s=e.get(i);i.visible=s}),e.clear()}}vs.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const rL={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class oL extends ur{constructor(){super();const t=rL;this.uniforms=Xn.clone(t.uniforms),this.material=new SD({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new uf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},se.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===w0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===x1?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===S1?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===T0?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===b1?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===M1&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function lL(n){if(!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=n,document.head.appendChild(t),n}}function io(n,t){var e=n.__state.conversionName.toString(),i=Math.round(n.r),s=Math.round(n.g),a=Math.round(n.b),r=n.a,o=Math.round(n.h),l=n.s.toFixed(1),c=n.v.toFixed(1);if(t||e==="THREE_CHAR_HEX"||e==="SIX_CHAR_HEX"){for(var u=n.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(e==="CSS_RGB")return"rgb("+i+","+s+","+a+")";if(e==="CSS_RGBA")return"rgba("+i+","+s+","+a+","+r+")";if(e==="HEX")return"0x"+n.hex.toString(16);if(e==="RGB_ARRAY")return"["+i+","+s+","+a+"]";if(e==="RGBA_ARRAY")return"["+i+","+s+","+a+","+r+"]";if(e==="RGB_OBJ")return"{r:"+i+",g:"+s+",b:"+a+"}";if(e==="RGBA_OBJ")return"{r:"+i+",g:"+s+",b:"+a+",a:"+r+"}";if(e==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(e==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+r+"}"}return"unknown format"}var z_=Array.prototype.forEach,el=Array.prototype.slice,tt={BREAK:{},extend:function(t){return this.each(el.call(arguments,1),function(e){var i=this.isObject(e)?Object.keys(e):[];i.forEach((function(s){this.isUndefined(e[s])||(t[s]=e[s])}).bind(this))},this),t},defaults:function(t){return this.each(el.call(arguments,1),function(e){var i=this.isObject(e)?Object.keys(e):[];i.forEach((function(s){this.isUndefined(t[s])&&(t[s]=e[s])}).bind(this))},this),t},compose:function(){var t=el.call(arguments);return function(){for(var e=el.call(arguments),i=t.length-1;i>=0;i--)e=[t[i].apply(this,e)];return e[0]}},each:function(t,e,i){if(t){if(z_&&t.forEach&&t.forEach===z_)t.forEach(e,i);else if(t.length===t.length+0){var s=void 0,a=void 0;for(s=0,a=t.length;s<a;s++)if(s in t&&e.call(i,t[s],s)===this.BREAK)return}else for(var r in t)if(e.call(i,t[r],r)===this.BREAK)return}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,i){var s=void 0;return function(){var a=this,r=arguments;function o(){s=null,i||t.apply(a,r)}var l=i||!s;clearTimeout(s),s=setTimeout(o,e),l&&t.apply(a,r)}},toArray:function(t){return t.toArray?t.toArray():el.call(t)},isUndefined:function(t){return t===void 0},isNull:function(t){return t===null},isNaN:function(n){function t(e){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(t){return t===Object(t)},isNumber:function(t){return t===t+0},isString:function(t){return t===t+""},isBoolean:function(t){return t===!1||t===!0},isFunction:function(t){return t instanceof Function}},cL=[{litmus:tt.isString,conversions:{THREE_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString()+e[1].toString()+e[2].toString()+e[2].toString()+e[3].toString()+e[3].toString(),0)}},write:io},SIX_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9]{6})$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString(),0)}},write:io},CSS_RGB:{read:function(t){var e=t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3])}},write:io},CSS_RGBA:{read:function(t){var e=t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3]),a:parseFloat(e[4])}},write:io}}},{litmus:tt.isNumber,conversions:{HEX:{read:function(t){return{space:"HEX",hex:t,conversionName:"HEX"}},write:function(t){return t.hex}}}},{litmus:tt.isArray,conversions:{RGB_ARRAY:{read:function(t){return t.length!==3?!1:{space:"RGB",r:t[0],g:t[1],b:t[2]}},write:function(t){return[t.r,t.g,t.b]}},RGBA_ARRAY:{read:function(t){return t.length!==4?!1:{space:"RGB",r:t[0],g:t[1],b:t[2],a:t[3]}},write:function(t){return[t.r,t.g,t.b,t.a]}}}},{litmus:tt.isObject,conversions:{RGBA_OBJ:{read:function(t){return tt.isNumber(t.r)&&tt.isNumber(t.g)&&tt.isNumber(t.b)&&tt.isNumber(t.a)?{space:"RGB",r:t.r,g:t.g,b:t.b,a:t.a}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b,a:t.a}}},RGB_OBJ:{read:function(t){return tt.isNumber(t.r)&&tt.isNumber(t.g)&&tt.isNumber(t.b)?{space:"RGB",r:t.r,g:t.g,b:t.b}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b}}},HSVA_OBJ:{read:function(t){return tt.isNumber(t.h)&&tt.isNumber(t.s)&&tt.isNumber(t.v)&&tt.isNumber(t.a)?{space:"HSV",h:t.h,s:t.s,v:t.v,a:t.a}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v,a:t.a}}},HSV_OBJ:{read:function(t){return tt.isNumber(t.h)&&tt.isNumber(t.s)&&tt.isNumber(t.v)?{space:"HSV",h:t.h,s:t.s,v:t.v}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v}}}}}],nl=void 0,Su=void 0,_m=function(){Su=!1;var t=arguments.length>1?tt.toArray(arguments):arguments[0];return tt.each(cL,function(e){if(e.litmus(t))return tt.each(e.conversions,function(i,s){if(nl=i.read(t),Su===!1&&nl!==!1)return Su=nl,nl.conversionName=s,nl.conversion=i,tt.BREAK}),tt.BREAK}),Su},B_=void 0,zh={hsv_to_rgb:function(t,e,i){var s=Math.floor(t/60)%6,a=t/60-Math.floor(t/60),r=i*(1-e),o=i*(1-a*e),l=i*(1-(1-a)*e),c=[[i,l,r],[o,i,r],[r,i,l],[r,o,i],[l,r,i],[i,r,o]][s];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(t,e,i){var s=Math.min(t,e,i),a=Math.max(t,e,i),r=a-s,o=void 0,l=void 0;if(a!==0)l=r/a;else return{h:NaN,s:0,v:0};return t===a?o=(e-i)/r:e===a?o=2+(i-t)/r:o=4+(t-e)/r,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:a/255}},rgb_to_hex:function(t,e,i){var s=this.hex_with_component(0,2,t);return s=this.hex_with_component(s,1,e),s=this.hex_with_component(s,0,i),s},component_from_hex:function(t,e){return t>>e*8&255},hex_with_component:function(t,e,i){return i<<(B_=e*8)|t&~(255<<B_)}},uL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Di=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")},Li=function(){function n(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),pa=function n(t,e,i){t===null&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,e);if(s===void 0){var a=Object.getPrototypeOf(t);return a===null?void 0:n(a,e,i)}else{if("value"in s)return s.value;var r=s.get;return r===void 0?void 0:r.call(i)}},ya=function(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)},xa=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:n},cn=function(){function n(){if(Di(this,n),this.__state=_m.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Li(n,[{key:"toString",value:function(){return io(this)}},{key:"toHexString",value:function(){return io(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function j0(n,t,e){Object.defineProperty(n,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(cn.recalculateRGB(this,t,e),this.__state[t])},set:function(s){this.__state.space!=="RGB"&&(cn.recalculateRGB(this,t,e),this.__state.space="RGB"),this.__state[t]=s}})}function W0(n,t){Object.defineProperty(n,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(cn.recalculateHSV(this),this.__state[t])},set:function(i){this.__state.space!=="HSV"&&(cn.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=i}})}cn.recalculateRGB=function(n,t,e){if(n.__state.space==="HEX")n.__state[t]=zh.component_from_hex(n.__state.hex,e);else if(n.__state.space==="HSV")tt.extend(n.__state,zh.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};cn.recalculateHSV=function(n){var t=zh.rgb_to_hsv(n.r,n.g,n.b);tt.extend(n.__state,{s:t.s,v:t.v}),tt.isNaN(t.h)?tt.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=t.h};cn.COMPONENTS=["r","g","b","h","s","v","hex","a"];j0(cn.prototype,"r",2);j0(cn.prototype,"g",1);j0(cn.prototype,"b",0);W0(cn.prototype,"h");W0(cn.prototype,"s");W0(cn.prototype,"v");Object.defineProperty(cn.prototype,"a",{get:function(){return this.__state.a},set:function(t){this.__state.a=t}});Object.defineProperty(cn.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=zh.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(t){this.__state.space="HEX",this.__state.hex=t}});var hr=function(){function n(t,e){Di(this,n),this.initialValue=t[e],this.domElement=document.createElement("div"),this.object=t,this.property=e,this.__onChange=void 0,this.__onFinishChange=void 0}return Li(n,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),hL={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},sb={};tt.each(hL,function(n,t){tt.each(n,function(e){sb[e]=t})});var fL=/(\d+(\.\d+)?)px/;function Ni(n){if(n==="0"||tt.isUndefined(n))return 0;var t=n.match(fL);return tt.isNull(t)?0:parseFloat(t[1])}var q={makeSelectable:function(t,e){t===void 0||t.style===void 0||(t.onselectstart=e?function(){return!1}:function(){},t.style.MozUserSelect=e?"auto":"none",t.style.KhtmlUserSelect=e?"auto":"none",t.unselectable=e?"on":"off")},makeFullscreen:function(t,e,i){var s=i,a=e;tt.isUndefined(a)&&(a=!0),tt.isUndefined(s)&&(s=!0),t.style.position="absolute",a&&(t.style.left=0,t.style.right=0),s&&(t.style.top=0,t.style.bottom=0)},fakeEvent:function(t,e,i,s){var a=i||{},r=sb[e];if(!r)throw new Error("Event type "+e+" not supported.");var o=document.createEvent(r);switch(r){case"MouseEvents":{var l=a.x||a.clientX||0,c=a.y||a.clientY||0;o.initMouseEvent(e,a.bubbles||!1,a.cancelable||!0,window,a.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;tt.defaults(a,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(e,a.bubbles||!1,a.cancelable,window,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.keyCode,a.charCode);break}default:{o.initEvent(e,a.bubbles||!1,a.cancelable||!0);break}}tt.defaults(o,s),t.dispatchEvent(o)},bind:function(t,e,i,s){var a=s||!1;return t.addEventListener?t.addEventListener(e,i,a):t.attachEvent&&t.attachEvent("on"+e,i),q},unbind:function(t,e,i,s){var a=s||!1;return t.removeEventListener?t.removeEventListener(e,i,a):t.detachEvent&&t.detachEvent("on"+e,i),q},addClass:function(t,e){if(t.className===void 0)t.className=e;else if(t.className!==e){var i=t.className.split(/ +/);i.indexOf(e)===-1&&(i.push(e),t.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return q},removeClass:function(t,e){if(e)if(t.className===e)t.removeAttribute("class");else{var i=t.className.split(/ +/),s=i.indexOf(e);s!==-1&&(i.splice(s,1),t.className=i.join(" "))}else t.className=void 0;return q},hasClass:function(t,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(t.className)||!1},getWidth:function(t){var e=getComputedStyle(t);return Ni(e["border-left-width"])+Ni(e["border-right-width"])+Ni(e["padding-left"])+Ni(e["padding-right"])+Ni(e.width)},getHeight:function(t){var e=getComputedStyle(t);return Ni(e["border-top-width"])+Ni(e["border-bottom-width"])+Ni(e["padding-top"])+Ni(e["padding-bottom"])+Ni(e.height)},getOffset:function(t){var e=t,i={left:0,top:0};if(e.offsetParent)do i.left+=e.offsetLeft,i.top+=e.offsetTop,e=e.offsetParent;while(e);return i},isActive:function(t){return t===document.activeElement&&(t.type||t.href)}},ab=function(n){ya(t,n);function t(e,i){Di(this,t);var s=xa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),a=s;s.__prev=s.getValue(),s.__checkbox=document.createElement("input"),s.__checkbox.setAttribute("type","checkbox");function r(){a.setValue(!a.__prev)}return q.bind(s.__checkbox,"change",r,!1),s.domElement.appendChild(s.__checkbox),s.updateDisplay(),s}return Li(t,[{key:"setValue",value:function(i){var s=pa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),s}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),pa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(hr),dL=function(n){ya(t,n);function t(e,i,s){Di(this,t);var a=xa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),r=s,o=a;if(a.__select=document.createElement("select"),tt.isArray(r)){var l={};tt.each(r,function(c){l[c]=c}),r=l}return tt.each(r,function(c,u){var f=document.createElement("option");f.innerHTML=u,f.setAttribute("value",c),o.__select.appendChild(f)}),a.updateDisplay(),q.bind(a.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),a.domElement.appendChild(a.__select),a}return Li(t,[{key:"setValue",value:function(i){var s=pa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),s}},{key:"updateDisplay",value:function(){return q.isActive(this.__select)?this:(this.__select.value=this.getValue(),pa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(hr),pL=function(n){ya(t,n);function t(e,i){Di(this,t);var s=xa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),a=s;function r(){a.setValue(a.__input.value)}function o(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),q.bind(s.__input,"keyup",r),q.bind(s.__input,"change",r),q.bind(s.__input,"blur",o),q.bind(s.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Li(t,[{key:"updateDisplay",value:function(){return q.isActive(this.__input)||(this.__input.value=this.getValue()),pa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(hr);function I_(n){var t=n.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}var rb=function(n){ya(t,n);function t(e,i,s){Di(this,t);var a=xa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),r=s||{};return a.__min=r.min,a.__max=r.max,a.__step=r.step,tt.isUndefined(a.__step)?a.initialValue===0?a.__impliedStep=1:a.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(a.initialValue))/Math.LN10))/10:a.__impliedStep=a.__step,a.__precision=I_(a.__impliedStep),a}return Li(t,[{key:"setValue",value:function(i){var s=i;return this.__min!==void 0&&s<this.__min?s=this.__min:this.__max!==void 0&&s>this.__max&&(s=this.__max),this.__step!==void 0&&s%this.__step!==0&&(s=Math.round(s/this.__step)*this.__step),pa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,s)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=I_(i),this}}]),t}(hr);function mL(n,t){var e=Math.pow(10,t);return Math.round(n*e)/e}var Bh=function(n){ya(t,n);function t(e,i,s){Di(this,t);var a=xa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,s));a.__truncationSuspended=!1;var r=a,o=void 0;function l(){var g=parseFloat(r.__input.value);tt.isNaN(g)||r.setValue(g)}function c(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}function u(){c()}function f(g){var _=o-g.clientY;r.setValue(r.getValue()+_*r.__impliedStep),o=g.clientY}function h(){q.unbind(window,"mousemove",f),q.unbind(window,"mouseup",h),c()}function d(g){q.bind(window,"mousemove",f),q.bind(window,"mouseup",h),o=g.clientY}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),q.bind(a.__input,"change",l),q.bind(a.__input,"blur",u),q.bind(a.__input,"mousedown",d),q.bind(a.__input,"keydown",function(g){g.keyCode===13&&(r.__truncationSuspended=!0,this.blur(),r.__truncationSuspended=!1,c())}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return Li(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():mL(this.getValue(),this.__precision),pa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(rb);function F_(n,t,e,i,s){return i+(s-i)*((n-t)/(e-t))}var ym=function(n){ya(t,n);function t(e,i,s,a,r){Di(this,t);var o=xa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,{min:s,max:a,step:r})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),q.bind(o.__background,"mousedown",c),q.bind(o.__background,"touchstart",h),q.addClass(o.__background,"slider"),q.addClass(o.__foreground,"slider-fg");function c(_){document.activeElement.blur(),q.bind(window,"mousemove",u),q.bind(window,"mouseup",f),u(_)}function u(_){_.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(F_(_.clientX,m.left,m.right,l.__min,l.__max)),!1}function f(){q.unbind(window,"mousemove",u),q.unbind(window,"mouseup",f),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(_){_.touches.length===1&&(q.bind(window,"touchmove",d),q.bind(window,"touchend",g),d(_))}function d(_){var m=_.touches[0].clientX,p=l.__background.getBoundingClientRect();l.setValue(F_(m,p.left,p.right,l.__min,l.__max))}function g(){q.unbind(window,"touchmove",d),q.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Li(t,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",pa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(rb),ob=function(n){ya(t,n);function t(e,i,s){Di(this,t);var a=xa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),r=a;return a.__button=document.createElement("div"),a.__button.innerHTML=s===void 0?"Fire":s,q.bind(a.__button,"click",function(o){return o.preventDefault(),r.fire(),!1}),q.addClass(a.__button,"button"),a.domElement.appendChild(a.__button),a}return Li(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(hr),xm=function(n){ya(t,n);function t(e,i){Di(this,t);var s=xa(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));s.__color=new cn(s.getValue()),s.__temp=new cn(0);var a=s;s.domElement=document.createElement("div"),q.makeSelectable(s.domElement,!1),s.__selector=document.createElement("div"),s.__selector.className="selector",s.__saturation_field=document.createElement("div"),s.__saturation_field.className="saturation-field",s.__field_knob=document.createElement("div"),s.__field_knob.className="field-knob",s.__field_knob_border="2px solid ",s.__hue_knob=document.createElement("div"),s.__hue_knob.className="hue-knob",s.__hue_field=document.createElement("div"),s.__hue_field.className="hue-field",s.__input=document.createElement("input"),s.__input.type="text",s.__input_textShadow="0 1px 1px ",q.bind(s.__input,"keydown",function(_){_.keyCode===13&&f.call(this)}),q.bind(s.__input,"blur",f),q.bind(s.__selector,"mousedown",function(){q.addClass(this,"drag").bind(window,"mouseup",function(){q.removeClass(a.__selector,"drag")})}),q.bind(s.__selector,"touchstart",function(){q.addClass(this,"drag").bind(window,"touchend",function(){q.removeClass(a.__selector,"drag")})});var r=document.createElement("div");tt.extend(s.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),tt.extend(s.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:s.__field_knob_border+(s.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),tt.extend(s.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),tt.extend(s.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),tt.extend(r.style,{width:"100%",height:"100%",background:"none"}),H_(r,"top","rgba(0,0,0,0)","#000"),tt.extend(s.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),vL(s.__hue_field),tt.extend(s.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:s.__input_textShadow+"rgba(0,0,0,0.7)"}),q.bind(s.__saturation_field,"mousedown",o),q.bind(s.__saturation_field,"touchstart",o),q.bind(s.__field_knob,"mousedown",o),q.bind(s.__field_knob,"touchstart",o),q.bind(s.__hue_field,"mousedown",l),q.bind(s.__hue_field,"touchstart",l);function o(_){d(_),q.bind(window,"mousemove",d),q.bind(window,"touchmove",d),q.bind(window,"mouseup",c),q.bind(window,"touchend",c)}function l(_){g(_),q.bind(window,"mousemove",g),q.bind(window,"touchmove",g),q.bind(window,"mouseup",u),q.bind(window,"touchend",u)}function c(){q.unbind(window,"mousemove",d),q.unbind(window,"touchmove",d),q.unbind(window,"mouseup",c),q.unbind(window,"touchend",c),h()}function u(){q.unbind(window,"mousemove",g),q.unbind(window,"touchmove",g),q.unbind(window,"mouseup",u),q.unbind(window,"touchend",u),h()}function f(){var _=_m(this.value);_!==!1?(a.__color.__state=_,a.setValue(a.__color.toOriginal())):this.value=a.__color.toString()}function h(){a.__onFinishChange&&a.__onFinishChange.call(a,a.__color.toOriginal())}s.__saturation_field.appendChild(r),s.__selector.appendChild(s.__field_knob),s.__selector.appendChild(s.__saturation_field),s.__selector.appendChild(s.__hue_field),s.__hue_field.appendChild(s.__hue_knob),s.domElement.appendChild(s.__input),s.domElement.appendChild(s.__selector),s.updateDisplay();function d(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=a.__saturation_field.getBoundingClientRect(),p=_.touches&&_.touches[0]||_,v=p.clientX,y=p.clientY,x=(v-m.left)/(m.right-m.left),T=1-(y-m.top)/(m.bottom-m.top);return T>1?T=1:T<0&&(T=0),x>1?x=1:x<0&&(x=0),a.__color.v=T,a.__color.s=x,a.setValue(a.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=a.__hue_field.getBoundingClientRect(),p=_.touches&&_.touches[0]||_,v=p.clientY,y=1-(v-m.top)/(m.bottom-m.top);return y>1?y=1:y<0&&(y=0),a.__color.h=y*360,a.setValue(a.__color.toOriginal()),!1}return s}return Li(t,[{key:"updateDisplay",value:function(){var i=_m(this.getValue());if(i!==!1){var s=!1;tt.each(cn.COMPONENTS,function(o){if(!tt.isUndefined(i[o])&&!tt.isUndefined(this.__color.__state[o])&&i[o]!==this.__color.__state[o])return s=!0,{}},this),s&&tt.extend(this.__color.__state,i)}tt.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var a=this.__color.v<.5||this.__color.s>.5?255:0,r=255-a;tt.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+a+","+a+","+a+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,H_(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),tt.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+a+","+a+","+a+")",textShadow:this.__input_textShadow+"rgba("+r+","+r+","+r+",.7)"})}}]),t}(hr),gL=["-moz-","-o-","-webkit-","-ms-",""];function H_(n,t,e,i){n.style.background="",tt.each(gL,function(s){n.style.cssText+="background: "+s+"linear-gradient("+t+", "+e+" 0%, "+i+" 100%); "})}function vL(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var _L={load:function(t,e){var i=e||document,s=i.createElement("link");s.type="text/css",s.rel="stylesheet",s.href=t,i.getElementsByTagName("head")[0].appendChild(s)},inject:function(t,e){var i=e||document,s=document.createElement("style");s.type="text/css",s.innerHTML=t;var a=i.getElementsByTagName("head")[0];try{a.appendChild(s)}catch{}}},yL=`<div id="dg-save" class="dg dialogue">

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

</div>`,xL=function(t,e){var i=t[e];return tt.isArray(arguments[2])||tt.isObject(arguments[2])?new dL(t,e,arguments[2]):tt.isNumber(i)?tt.isNumber(arguments[2])&&tt.isNumber(arguments[3])?tt.isNumber(arguments[4])?new ym(t,e,arguments[2],arguments[3],arguments[4]):new ym(t,e,arguments[2],arguments[3]):tt.isNumber(arguments[4])?new Bh(t,e,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Bh(t,e,{min:arguments[2],max:arguments[3]}):tt.isString(i)?new pL(t,e):tt.isFunction(i)?new ob(t,e,""):tt.isBoolean(i)?new ab(t,e):null};function SL(n){setTimeout(n,1e3/60)}var bL=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||SL,ML=function(){function n(){Di(this,n),this.backgroundElement=document.createElement("div"),tt.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),q.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),tt.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;q.bind(this.backgroundElement,"click",function(){t.hide()})}return Li(n,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),tt.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,i=function s(){e.domElement.style.display="none",e.backgroundElement.style.display="none",q.unbind(e.domElement,"webkitTransitionEnd",s),q.unbind(e.domElement,"transitionend",s),q.unbind(e.domElement,"oTransitionEnd",s)};q.bind(this.domElement,"webkitTransitionEnd",i),q.bind(this.domElement,"transitionend",i),q.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-q.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-q.getHeight(this.domElement)/2+"px"}}]),n}(),EL=lL(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);_L.inject(EL);var V_="dg",k_=72,G_=20,oc="Default",ml=function(){try{return!!window.localStorage}catch{return!1}}(),Hl=void 0,j_=!0,Hr=void 0,Ld=!1,lb=[],_e=function n(t){var e=this,i=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),q.addClass(this.domElement,V_),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=tt.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=tt.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),tt.isUndefined(i.load)?i.load={preset:oc}:i.preset&&(i.load.preset=i.preset),tt.isUndefined(i.parent)&&i.hideable&&lb.push(this),i.resizable=tt.isUndefined(i.parent)&&i.resizable,i.autoPlace&&tt.isUndefined(i.scrollable)&&(i.scrollable=!0);var s=ml&&localStorage.getItem(Vr(this,"isLocal"))==="true",a=void 0,r=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return e.parent?e.getRoot().preset:i.load.preset},set:function(h){e.parent?e.getRoot().preset=h:i.load.preset=h,CL(this),e.revert()}},width:{get:function(){return i.width},set:function(h){i.width=h,Mm(e,h)}},name:{get:function(){return i.name},set:function(h){i.name=h,r&&(r.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(h){i.closed=h,i.closed?q.addClass(e.__ul,n.CLASS_CLOSED):q.removeClass(e.__ul,n.CLASS_CLOSED),this.onResize(),e.__closeButton&&(e.__closeButton.innerHTML=h?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return s},set:function(h){ml&&(s=h,h?q.bind(window,"unload",a):q.unbind(window,"unload",a),localStorage.setItem(Vr(e,"isLocal"),h))}}}),tt.isUndefined(i.parent)){if(this.closed=i.closed||!1,q.addClass(this.domElement,n.CLASS_MAIN),q.makeSelectable(this.domElement,!1),ml&&s){e.useLocalStorage=!0;var o=localStorage.getItem(Vr(this,"gui"));o&&(i.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,q.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?(q.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(q.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),q.bind(this.__closeButton,"click",function(){e.closed=!e.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);q.addClass(l,"controller-name"),r=X0(e,l);var c=function(h){return h.preventDefault(),e.closed=!e.closed,!1};q.addClass(this.__ul,n.CLASS_CLOSED),q.addClass(r,"title"),q.bind(r,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(tt.isUndefined(i.parent)&&(j_&&(Hr=document.createElement("div"),q.addClass(Hr,V_),q.addClass(Hr,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Hr),j_=!1),Hr.appendChild(this.domElement),q.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||Mm(e,i.width)),this.__resizeHandler=function(){e.onResizeDebounced()},q.bind(window,"resize",this.__resizeHandler),q.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),q.bind(this.__ul,"transitionend",this.__resizeHandler),q.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&AL(this),a=function(){ml&&localStorage.getItem(Vr(e,"isLocal"))==="true"&&localStorage.setItem(Vr(e,"gui"),JSON.stringify(e.getSaveObject()))},this.saveToLocalStorageIfPossible=a;function u(){var f=e.getRoot();f.width+=1,tt.defer(function(){f.width-=1})}i.parent||u()};_e.toggleHide=function(){Ld=!Ld,tt.each(lb,function(n){n.domElement.style.display=Ld?"none":""})};_e.CLASS_AUTO_PLACE="a";_e.CLASS_AUTO_PLACE_CONTAINER="ac";_e.CLASS_MAIN="main";_e.CLASS_CONTROLLER_ROW="cr";_e.CLASS_TOO_TALL="taller-than-window";_e.CLASS_CLOSED="closed";_e.CLASS_CLOSE_BUTTON="close-button";_e.CLASS_CLOSE_TOP="close-top";_e.CLASS_CLOSE_BOTTOM="close-bottom";_e.CLASS_DRAG="drag";_e.DEFAULT_WIDTH=245;_e.TEXT_CLOSED="Close Controls";_e.TEXT_OPEN="Open Controls";_e._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===k_||n.keyCode===k_)&&_e.toggleHide()};q.bind(window,"keydown",_e._keydownHandler,!1);tt.extend(_e.prototype,{add:function(t,e){return Vl(this,t,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,e){return Vl(this,t,e,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.splice(this.__controllers.indexOf(t),1);var e=this;tt.defer(function(){e.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Hr.removeChild(this.domElement);var t=this;tt.each(this.__folders,function(e){t.removeFolder(e)}),q.unbind(window,"keydown",_e._keydownHandler,!1),W_(this)},addFolder:function(t){if(this.__folders[t]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+t+'"');var e={name:t,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(e.closed=this.load.folders[t].closed,e.load=this.load.folders[t]);var i=new _e(e);this.__folders[t]=i;var s=X0(this,i.domElement);return q.addClass(s,"folder"),i},removeFolder:function(t){this.__ul.removeChild(t.domElement.parentElement),delete this.__folders[t.name],this.load&&this.load.folders&&this.load.folders[t.name]&&delete this.load.folders[t.name],W_(t);var e=this;tt.each(t.__folders,function(i){t.removeFolder(i)}),tt.defer(function(){e.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var t=this.getRoot();if(t.scrollable){var e=q.getOffset(t.__ul).top,i=0;tt.each(t.__ul.childNodes,function(s){t.autoPlace&&s===t.__save_row||(i+=q.getHeight(s))}),window.innerHeight-e-G_<i?(q.addClass(t.domElement,_e.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-e-G_+"px"):(q.removeClass(t.domElement,_e.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&tt.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},onResizeDebounced:tt.debounce(function(){this.onResize()},50),remember:function(){if(tt.isUndefined(Hl)&&(Hl=new ML,Hl.domElement.innerHTML=yL),this.parent)throw new Error("You can only call remember on a top level GUI.");var t=this;tt.each(Array.prototype.slice.call(arguments),function(e){t.__rememberedObjects.length===0&&TL(t),t.__rememberedObjects.indexOf(e)===-1&&t.__rememberedObjects.push(e)}),this.autoPlace&&Mm(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=bu(this)),t.folders={},tt.each(this.__folders,function(e,i){t.folders[i]=e.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=bu(this),Sm(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[oc]=bu(this,!0)),this.load.remembered[t]=bu(this),this.preset=t,bm(this,t,!0),this.saveToLocalStorageIfPossible()},revert:function(t){tt.each(this.__controllers,function(e){this.getRoot().load.remembered?cb(t||this.getRoot(),e):e.setValue(e.initialValue),e.__onFinishChange&&e.__onFinishChange.call(e,e.getValue())},this),tt.each(this.__folders,function(e){e.revert(e)}),t||Sm(this.getRoot(),!1)},listen:function(t){var e=this.__listening.length===0;this.__listening.push(t),e&&ub(this.__listening)},updateDisplay:function(){tt.each(this.__controllers,function(t){t.updateDisplay()}),tt.each(this.__folders,function(t){t.updateDisplay()})}});function X0(n,t,e){var i=document.createElement("li");return t&&i.appendChild(t),e?n.__ul.insertBefore(i,e):n.__ul.appendChild(i),n.onResize(),i}function W_(n){q.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&q.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function Sm(n,t){var e=n.__preset_select[n.__preset_select.selectedIndex];t?e.innerHTML=e.value+"*":e.innerHTML=e.value}function wL(n,t,e){if(e.__li=t,e.__gui=n,tt.extend(e,{options:function(r){if(arguments.length>1){var o=e.__li.nextElementSibling;return e.remove(),Vl(n,e.object,e.property,{before:o,factoryArgs:[tt.toArray(arguments)]})}if(tt.isArray(r)||tt.isObject(r)){var l=e.__li.nextElementSibling;return e.remove(),Vl(n,e.object,e.property,{before:l,factoryArgs:[r]})}},name:function(r){return e.__li.firstElementChild.firstElementChild.innerHTML=r,e},listen:function(){return e.__gui.listen(e),e},remove:function(){return e.__gui.remove(e),e}}),e instanceof ym){var i=new Bh(e.object,e.property,{min:e.__min,max:e.__max,step:e.__step});tt.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(a){var r=e[a],o=i[a];e[a]=i[a]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(i,l),r.apply(e,l)}}),q.addClass(t,"has-slider"),e.domElement.insertBefore(i.domElement,e.domElement.firstElementChild)}else if(e instanceof Bh){var s=function(r){if(tt.isNumber(e.__min)&&tt.isNumber(e.__max)){var o=e.__li.firstElementChild.firstElementChild.innerHTML,l=e.__gui.__listening.indexOf(e)>-1;e.remove();var c=Vl(n,e.object,e.property,{before:e.__li.nextElementSibling,factoryArgs:[e.__min,e.__max,e.__step]});return c.name(o),l&&c.listen(),c}return r};e.min=tt.compose(s,e.min),e.max=tt.compose(s,e.max)}else e instanceof ab?(q.bind(t,"click",function(){q.fakeEvent(e.__checkbox,"click")}),q.bind(e.__checkbox,"click",function(a){a.stopPropagation()})):e instanceof ob?(q.bind(t,"click",function(){q.fakeEvent(e.__button,"click")}),q.bind(t,"mouseover",function(){q.addClass(e.__button,"hover")}),q.bind(t,"mouseout",function(){q.removeClass(e.__button,"hover")})):e instanceof xm&&(q.addClass(t,"color"),e.updateDisplay=tt.compose(function(a){return t.style.borderLeftColor=e.__color.toString(),a},e.updateDisplay),e.updateDisplay());e.setValue=tt.compose(function(a){return n.getRoot().__preset_select&&e.isModified()&&Sm(n.getRoot(),!0),a},e.setValue)}function cb(n,t){var e=n.getRoot(),i=e.__rememberedObjects.indexOf(t.object);if(i!==-1){var s=e.__rememberedObjectIndecesToControllers[i];if(s===void 0&&(s={},e.__rememberedObjectIndecesToControllers[i]=s),s[t.property]=t,e.load&&e.load.remembered){var a=e.load.remembered,r=void 0;if(a[n.preset])r=a[n.preset];else if(a[oc])r=a[oc];else return;if(r[i]&&r[i][t.property]!==void 0){var o=r[i][t.property];t.initialValue=o,t.setValue(o)}}}}function Vl(n,t,e,i){if(t[e]===void 0)throw new Error('Object "'+t+'" has no property "'+e+'"');var s=void 0;if(i.color)s=new xm(t,e);else{var a=[t,e].concat(i.factoryArgs);s=xL.apply(n,a)}i.before instanceof hr&&(i.before=i.before.__li),cb(n,s),q.addClass(s.domElement,"c");var r=document.createElement("span");q.addClass(r,"property-name"),r.innerHTML=s.property;var o=document.createElement("div");o.appendChild(r),o.appendChild(s.domElement);var l=X0(n,o,i.before);return q.addClass(l,_e.CLASS_CONTROLLER_ROW),s instanceof xm?q.addClass(l,"color"):q.addClass(l,uL(s.getValue())),wL(n,l,s),n.__controllers.push(s),s}function Vr(n,t){return document.location.href+"."+t}function bm(n,t,e){var i=document.createElement("option");i.innerHTML=t,i.value=t,n.__preset_select.appendChild(i),e&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function X_(n,t){t.style.display=n.useLocalStorage?"block":"none"}function TL(n){var t=n.__save_row=document.createElement("li");q.addClass(n.domElement,"has-save"),n.__ul.insertBefore(t,n.__ul.firstChild),q.addClass(t,"save-row");var e=document.createElement("span");e.innerHTML="&nbsp;",q.addClass(e,"button gears");var i=document.createElement("span");i.innerHTML="Save",q.addClass(i,"button"),q.addClass(i,"save");var s=document.createElement("span");s.innerHTML="New",q.addClass(s,"button"),q.addClass(s,"save-as");var a=document.createElement("span");a.innerHTML="Revert",q.addClass(a,"button"),q.addClass(a,"revert");var r=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?tt.each(n.load.remembered,function(f,h){bm(n,h,h===n.preset)}):bm(n,oc,!1),q.bind(r,"change",function(){for(var f=0;f<n.__preset_select.length;f++)n.__preset_select[f].innerHTML=n.__preset_select[f].value;n.preset=this.value}),t.appendChild(r),t.appendChild(e),t.appendChild(i),t.appendChild(s),t.appendChild(a),ml){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Vr(n,"isLocal"))==="true"&&l.setAttribute("checked","checked"),X_(n,o),q.bind(l,"change",function(){n.useLocalStorage=!n.useLocalStorage,X_(n,o)})}var u=document.getElementById("dg-new-constructor");q.bind(u,"keydown",function(f){f.metaKey&&(f.which===67||f.keyCode===67)&&Hl.hide()}),q.bind(e,"click",function(){u.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),Hl.show(),u.focus(),u.select()}),q.bind(i,"click",function(){n.save()}),q.bind(s,"click",function(){var f=prompt("Enter a new preset name.");f&&n.saveAs(f)}),q.bind(a,"click",function(){n.revert()})}function AL(n){var t=void 0;n.__resize_handle=document.createElement("div"),tt.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function e(a){return a.preventDefault(),n.width+=t-a.clientX,n.onResize(),t=a.clientX,!1}function i(){q.removeClass(n.__closeButton,_e.CLASS_DRAG),q.unbind(window,"mousemove",e),q.unbind(window,"mouseup",i)}function s(a){return a.preventDefault(),t=a.clientX,q.addClass(n.__closeButton,_e.CLASS_DRAG),q.bind(window,"mousemove",e),q.bind(window,"mouseup",i),!1}q.bind(n.__resize_handle,"mousedown",s),q.bind(n.__closeButton,"mousedown",s),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function Mm(n,t){n.domElement.style.width=t+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=t+"px"),n.__closeButton&&(n.__closeButton.style.width=t+"px")}function bu(n,t){var e={};return tt.each(n.__rememberedObjects,function(i,s){var a={},r=n.__rememberedObjectIndecesToControllers[s];tt.each(r,function(o,l){a[l]=t?o.initialValue:o.getValue()}),e[s]=a}),e}function CL(n){for(var t=0;t<n.__preset_select.length;t++)n.__preset_select[t].value===n.preset&&(n.__preset_select.selectedIndex=t)}function ub(n){n.length!==0&&bL.call(window,function(){ub(n)}),tt.each(n,function(t){t.updateDisplay()})}var RL=_e;const vn=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let n=0;n<256;n++)vn[256+n]=vn[n];function Pd(n){return n*n*n*(n*(n*6-15)+10)}function Ra(n,t,e){return t+n*(e-t)}function ks(n,t,e,i){const s=n&15,a=s<8?t:e,r=s<4?e:s==12||s==14?t:i;return(s&1?-a:a)+(s&2?-r:r)}class DL{noise(t,e,i){const s=Math.floor(t),a=Math.floor(e),r=Math.floor(i),o=s&255,l=a&255,c=r&255;t-=s,e-=a,i-=r;const u=t-1,f=e-1,h=i-1,d=Pd(t),g=Pd(e),_=Pd(i),m=vn[o]+l,p=vn[m]+c,v=vn[m+1]+c,y=vn[o+1]+l,x=vn[y]+c,T=vn[y+1]+c;return Ra(_,Ra(g,Ra(d,ks(vn[p],t,e,i),ks(vn[x],u,e,i)),Ra(d,ks(vn[v],t,f,i),ks(vn[T],u,f,i))),Ra(g,Ra(d,ks(vn[p+1],t,e,h),ks(vn[x+1],u,e,h)),Ra(d,ks(vn[v+1],t,f,h),ks(vn[T+1],u,f,h))))}}function LL(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Em(n,t){return n+Math.floor(Math.random()*(t-n+1))}function PL(n,t){return n+Math.random()*(t-n)}class hb{constructor(t){this.scene=t.scene||new rc,this.camera=t.camera,this.renderer=t.renderer,this.composer=t.composer}update(t){}getScene(){return this.scene}getCamera(){return this.camera}}const NL=Object.freeze(Object.defineProperty({__proto__:null,SceneBase:hb},Symbol.toStringTag,{value:"Module"})),FU={uniforms:{lightDirection:{value:new U(1,1,1)},lightColor:{value:new U(.9,.76,.5)},size:{value:20},enableFog:{value:!0},isWireframe:{value:!1},showNormals:{value:!1},wireframeWidth:{value:1}},vertexShader:`
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
    `},Nd={uniforms:{lightDirection:{value:new U(1,1,1)},lightColor:{value:new U(.8,.76,.5)},gradientMap:{value:null},size:{value:20},hmax:{value:null},hmin:{value:null},envMap:{value:null},vpw:{value:5e-5},vph:{value:5e-5},offset:{value:new ht(-.5,-.5)},pitch:{value:new ht(4,4)},enableFog:{value:!0},heightMap:{value:new F0(new Uint8Array(1),1,1,Wn)},hmMin:{value:0},hmMax:{value:0},heightMapRes:{value:400}},vertexShader:`
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
    `};class fb{constructor(t,e,i,s){Ne(this,"size",0);Ne(this,"cityRadius",0);Ne(this,"n",null);Ne(this,"sun",new U(0,0,0));Ne(this,"octaves",2);Ne(this,"persistence",.5);Ne(this,"lacunarity",2);Ne(this,"scale",.5);Ne(this,"height",.2);Ne(this,"maxResolution",400);Ne(this,"iterations",3);Ne(this,"falloff",.1);this.cityRadius=t*.5,this.size=t*10,this.n=new DL,this.randZ=PL(0,1e3),this.octaves=e.octaves,this.persistence=e.persistence,this.lacunarity=e.lacunarity,this.scale=e.scale,this.height=e.height,this.falloff=e.falloff,this.iterations=e.iterations,this.maxResolution=e.resolution,this.enableFog=e.enableFog,this.enableShadows=e.enableShadows,this.heightMapTexture=e.heightMap,this.hmax=-100,this.hmin=100,this.sun=i,this.sceneProperties=s,s.scene!=null?this.scene=s.scene:this.scene=new rc,this.renderer=s.renderer,this.material;var a=document.getElementById("heightgrd");a.addEventListener("click",()=>{l()},!1);var r=new sD(a),o=a.getContext("2d");l();function l(){let c=o.createLinearGradient(0,255,0,0);c.addColorStop(0,"rgb(245,245,150)"),c.addColorStop(.33,"rgb(245,245,150)"),c.addColorStop(.34,"rgb(85,172,65)"),c.addColorStop(.93,"rgb(85,172,65)"),c.addColorStop(.94,"rgb(200,200,200)"),o.fillStyle=c,o.fillRect(0,0,64,256),r.needsUpdate=!0}this.gradientMap=r}set(t,e,i){this.grid[e*this.width+t]=i}get(t,e){return this.grid[e*this.width+t]}ChunkManager(t){const e=[];e.push([0,0]);for(let i=0;i<=this.iterations;i++)for(let s=-i;s<=i;s++)for(let a=-i;a<=i;a++)(Math.abs(s)==i||Math.abs(a)==i)&&(e.push([s,a]),t.add(this.makeChunk(i+1*2,s,a)));return e}makeChunkTexture(t,e,i){for(let _=0;_<t.length;_++)t[_]=(t[_]-e)/(i-e)*255;console.log("minH, maxH: "+e+", "+i);const s=Math.sqrt(t.length);console.log("width: "+s);let a=new Uint8Array(4*s*s);for(let _=0;_<t.length;_++){const m=_*4;let p=t[_];a[m]=p,a[m+1]=p,a[m+2]=p,a[m+3]=255}let r=new F0(a,s,s,Wn);r.flipY=!0,r.flipX=!0,r.needsUpdate=!0,console.log(r.mipmaps),console.log(r),this.heightMapTextureRes=r.image.width,this.heightMapTexture=r;let o=s,l=new rc,c=new lf(-s/2,s/2,o/2,-o/2,-100,100),u=new Fo({map:r}),f=new da(s,o),h=new Be(f,u);l.add(h);let d=new Rn(s,o);this.renderer.setRenderTarget(d),this.renderer.render(l,c),this.renderer.setRenderTarget(null);let g=new Uint8Array(s*o*4);this.renderer.readRenderTargetPixels(d,0,0,s,o,g),new ImageData(new Uint8ClampedArray(g),s,o)}makeChunk(t,e,i){let s;s={max:-1e3,min:1e3};let o=new da(this.size,this.size,this.maxResolution/t,this.maxResolution/t),l=new be({side:Si});l.uniforms=Nd.uniforms,l.vertexShader=Nd.vertexShader,l.fragmentShader=Nd.fragmentShader,l.uniforms.lightDirection.value=this.sun,l.uniforms.gradientMap.value=this.gradientMap,l.uniforms.size.value=this.size,l.uniforms.enableFog.value=this.enableFog,l.uniforms.heightMap.value=this.heightMapTexture,l.uniforms.heightMapRes.value=this.heightMapTextureRes,this.material=l;const c=new Be(o,l);c.rotation.x=-Math.PI/2,c.position.setY(.2),c.position.setX(this.size*e),c.position.setZ(this.size*i);let u=o.attributes.position;c.name="Land2";let f=this.fbmNoise(c,e,i,s);l.uniforms.hmMax.value=s.max,l.uniforms.hmMin.value=s.min,t==2&&this.makeChunkTexture(f,s.min,s.max);for(let h=0;h<o.attributes.position.count;h++){const d=o.attributes.position.getY(h);u.getX(h),u.getY(h),o.setAttribute("vertexHeight",new Ti(new Float32Array([d],1)))}return c}fbmNoise(t,e=0,i=0,s){let a=s.max,r=s.min,o=t.geometry,l=o.attributes.position,c=this.octaves,u=this.persistence;const f=l.count;let h=new Array(f);for(let d=0;d<l.count;d++){let g=l.getX(d),_=l.getY(d),m=l.getZ(d);g+=e*this.size,_-=i*this.size;let p=(g+100)/200,v=(_+100)/200,y=this.fbm(p,v,c,u),x=new ht(g,_).distanceTo(new ht(0,0));if(x>this.cityRadius){x-this.size;let T=LL(x,this.cityRadius*4,this.size/1.2);y=y*this.height*(T*2*this.scale),x>this.size&&(y-=(x-this.size)*this.falloff)}else y=0;y>a&&(a=y),y<r&&(r=y),h[d]=y,l.setZ(d,m+y)}return s.max=a,s.min=r,o.computeVertexNormals(),l.needsUpdate=!0,h}fbm(t,e,i,s){let a=0,r=1,o=1,l=0;for(let c=0;c<i;c++)a+=this.n.noise(t*r,e*r,this.randZ)*o,l+=o,o*=s,r*=this.lacunarity;return a/l}updateUniforms(t){this.material.uniforms.enableFog.value=t.enableFog}}const UL=Object.freeze(Object.defineProperty({__proto__:null,Landscape:fb},Symbol.toStringTag,{value:"Module"}));class Mi{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new w);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new w);const i=this.elements,s=t.x,a=t.y,r=t.z;return e.x=i[0]*s+i[1]*a+i[2]*r,e.y=i[3]*s+i[4]*a+i[5]*r,e.z=i[6]*s+i[7]*a+i[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Mi);const i=this.elements,s=t.elements,a=e.elements,r=i[0],o=i[1],l=i[2],c=i[3],u=i[4],f=i[5],h=i[6],d=i[7],g=i[8],_=s[0],m=s[1],p=s[2],v=s[3],y=s[4],x=s[5],T=s[6],b=s[7],E=s[8];return a[0]=r*_+o*v+l*T,a[1]=r*m+o*y+l*b,a[2]=r*p+o*x+l*E,a[3]=c*_+u*v+f*T,a[4]=c*m+u*y+f*b,a[5]=c*p+u*x+f*E,a[6]=h*_+d*v+g*T,a[7]=h*m+d*y+g*b,a[8]=h*p+d*x+g*E,e}scale(t,e){e===void 0&&(e=new Mi);const i=this.elements,s=e.elements;for(let a=0;a!==3;a++)s[3*a+0]=t.x*i[3*a+0],s[3*a+1]=t.y*i[3*a+1],s[3*a+2]=t.z*i[3*a+2];return e}solve(t,e){e===void 0&&(e=new w);const i=3,s=4,a=[];let r,o;for(r=0;r<i*s;r++)a.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)a[r+s*o]=this.elements[r+3*o];a[3+4*0]=t.x,a[3+4*1]=t.y,a[3+4*2]=t.z;let l=3;const c=l;let u;const f=4;let h;do{if(r=c-l,a[r+s*r]===0){for(o=r+1;o<c;o++)if(a[r+s*o]!==0){u=f;do h=f-u,a[h+s*r]+=a[h+s*o];while(--u);break}}if(a[r+s*r]!==0)for(o=r+1;o<c;o++){const d=a[r+s*o]/a[r+s*r];u=f;do h=f-u,a[h+s*o]=h<=r?0:a[h+s*o]-a[h+s*r]*d;while(--u)}}while(--l);if(e.z=a[2*s+3]/a[2*s+2],e.y=(a[1*s+3]-a[1*s+2]*e.z)/a[1*s+1],e.x=(a[0*s+3]-a[0*s+2]*e.z-a[0*s+1]*e.y)/a[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,i){if(i===void 0)return this.elements[e+3*t];this.elements[e+3*t]=i}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let i=0;i<9;i++)t+=this.elements[i]+e;return t}reverse(t){t===void 0&&(t=new Mi);const e=3,i=6,s=OL;let a,r;for(a=0;a<3;a++)for(r=0;r<3;r++)s[a+i*r]=this.elements[a+3*r];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let o=3;const l=o;let c;const u=i;let f;do{if(a=l-o,s[a+i*a]===0){for(r=a+1;r<l;r++)if(s[a+i*r]!==0){c=u;do f=u-c,s[f+i*a]+=s[f+i*r];while(--c);break}}if(s[a+i*a]!==0)for(r=a+1;r<l;r++){const h=s[a+i*r]/s[a+i*a];c=u;do f=u-c,s[f+i*r]=f<=a?0:s[f+i*r]-s[f+i*a]*h;while(--c)}}while(--o);a=2;do{r=a-1;do{const h=s[a+i*r]/s[a+i*a];c=i;do f=i-c,s[f+i*r]=s[f+i*r]-s[f+i*a]*h;while(--c)}while(r--)}while(--a);a=2;do{const h=1/s[a+i*a];c=i;do f=i-c,s[f+i*a]=s[f+i*a]*h;while(--c)}while(a--);a=2;do{r=2;do{if(f=s[e+r+i*a],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(a,r,f)}while(r--)}while(a--);return t}setRotationFromQuaternion(t){const e=t.x,i=t.y,s=t.z,a=t.w,r=e+e,o=i+i,l=s+s,c=e*r,u=e*o,f=e*l,h=i*o,d=i*l,g=s*l,_=a*r,m=a*o,p=a*l,v=this.elements;return v[3*0+0]=1-(h+g),v[3*0+1]=u-p,v[3*0+2]=f+m,v[3*1+0]=u+p,v[3*1+1]=1-(c+g),v[3*1+2]=d-_,v[3*2+0]=f-m,v[3*2+1]=d+_,v[3*2+2]=1-(c+h),this}transpose(t){t===void 0&&(t=new Mi);const e=this.elements,i=t.elements;let s;return i[0]=e[0],i[4]=e[4],i[8]=e[8],s=e[1],i[1]=e[3],i[3]=s,s=e[2],i[2]=e[6],i[6]=s,s=e[5],i[5]=e[7],i[7]=s,t}}const OL=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(t,e,i){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),this.x=t,this.y=e,this.z=i}cross(t,e){e===void 0&&(e=new w);const i=t.x,s=t.y,a=t.z,r=this.x,o=this.y,l=this.z;return e.x=o*a-l*s,e.y=l*i-r*a,e.z=r*s-o*i,e}set(t,e,i){return this.x=t,this.y=e,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new w(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new w(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Mi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,i=this.z,s=Math.sqrt(t*t+e*e+i*i);if(s>0){const a=1/s;this.x*=a,this.y*=a,this.z*=a}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new w);const e=this.x,i=this.y,s=this.z;let a=Math.sqrt(e*e+i*i+s*s);return a>0?(a=1/a,t.x=e*a,t.y=i*a,t.z=s*a):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,i=this.z;return Math.sqrt(t*t+e*e+i*i)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z;return Math.sqrt((a-e)*(a-e)+(r-i)*(r-i)+(o-s)*(o-s))}distanceSquared(t){const e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z;return(a-e)*(a-e)+(r-i)*(r-i)+(o-s)*(o-s)}scale(t,e){e===void 0&&(e=new w);const i=this.x,s=this.y,a=this.z;return e.x=t*i,e.y=t*s,e.z=t*a,e}vmul(t,e){return e===void 0&&(e=new w),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,i){return i===void 0&&(i=new w),i.x=this.x+t*e.x,i.y=this.y+t*e.y,i.z=this.z+t*e.z,i}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new w),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const i=this.length();if(i>0){const s=zL,a=1/i;s.set(this.x*a,this.y*a,this.z*a);const r=BL;Math.abs(s.x)<.9?(r.set(1,0,0),s.cross(r,t)):(r.set(0,1,0),s.cross(r,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,i){const s=this.x,a=this.y,r=this.z;i.x=s+(t.x-s)*e,i.y=a+(t.y-a)*e,i.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(q_),q_.almostEquals(t,e)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const zL=new w,BL=new w,q_=new w;class Qn{constructor(t){t===void 0&&(t={}),this.lowerBound=new w,this.upperBound=new w,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,i,s){const a=this.lowerBound,r=this.upperBound,o=i;a.copy(t[0]),o&&o.vmult(a,a),r.copy(a);for(let l=1;l<t.length;l++){let c=t[l];o&&(o.vmult(c,Y_),c=Y_),c.x>r.x&&(r.x=c.x),c.x<a.x&&(a.x=c.x),c.y>r.y&&(r.y=c.y),c.y<a.y&&(a.y=c.y),c.z>r.z&&(r.z=c.z),c.z<a.z&&(a.z=c.z)}return e&&(e.vadd(a,a),e.vadd(r,r)),s&&(a.x-=s,a.y-=s,a.z-=s,r.x+=s,r.y+=s,r.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Qn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,a=t.upperBound,r=s.x<=i.x&&i.x<=a.x||e.x<=a.x&&a.x<=i.x,o=s.y<=i.y&&i.y<=a.y||e.y<=a.y&&a.y<=i.y,l=s.z<=i.z&&i.z<=a.z||e.z<=a.z&&a.z<=i.z;return r&&o&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,a=t.upperBound;return e.x<=s.x&&i.x>=a.x&&e.y<=s.y&&i.y>=a.y&&e.z<=s.z&&i.z>=a.z}getCorners(t,e,i,s,a,r,o,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),i.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),a.set(u.x,c.y,u.z),r.set(c.x,u.y,c.z),o.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const i=Z_,s=i[0],a=i[1],r=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7];this.getCorners(s,a,r,o,l,c,u,f);for(let h=0;h!==8;h++){const d=i[h];t.pointToLocal(d,d)}return e.setFromPoints(i)}toWorldFrame(t,e){const i=Z_,s=i[0],a=i[1],r=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7];this.getCorners(s,a,r,o,l,c,u,f);for(let h=0;h!==8;h++){const d=i[h];t.pointToWorld(d,d)}return e.setFromPoints(i)}overlapsRay(t){const{direction:e,from:i}=t,s=1/e.x,a=1/e.y,r=1/e.z,o=(this.lowerBound.x-i.x)*s,l=(this.upperBound.x-i.x)*s,c=(this.lowerBound.y-i.y)*a,u=(this.upperBound.y-i.y)*a,f=(this.lowerBound.z-i.z)*r,h=(this.upperBound.z-i.z)*r,d=Math.max(Math.max(Math.min(o,l),Math.min(c,u)),Math.min(f,h)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,u)),Math.max(f,h));return!(g<0||d>g)}}const Y_=new w,Z_=[new w,new w,new w,new w,new w,new w,new w,new w];class K_{constructor(){this.matrix=[]}get(t,e){let{index:i}=t,{index:s}=e;if(s>i){const a=s;s=i,i=a}return this.matrix[(i*(i+1)>>1)+s-1]}set(t,e,i){let{index:s}=t,{index:a}=e;if(a>s){const r=a;a=s,s=r}this.matrix[(s*(s+1)>>1)+a-1]=i?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class db{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[t]===void 0&&(i[t]=[]),i[t].includes(e)||i[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[t]!==void 0&&i[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const i=this._listeners;if(i[t]===void 0)return this;const s=i[t].indexOf(e);return s!==-1&&i[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const i=this._listeners[t.type];if(i!==void 0){t.target=this;for(let s=0,a=i.length;s<a;s++)i[s].call(this,t)}return this}}class Xe{constructor(t,e,i,s){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=i,this.w=s}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const i=Math.sin(e*.5);return this.x=t.x*i,this.y=t.y*i,this.z=t.z*i,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new w),this.normalize();const e=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/i,t.y=this.y/i,t.z=this.z/i),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const i=IL,s=FL;t.tangents(i,s),this.setFromAxisAngle(i,Math.PI)}else{const i=t.cross(e);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Xe);const i=this.x,s=this.y,a=this.z,r=this.w,o=t.x,l=t.y,c=t.z,u=t.w;return e.x=i*u+r*o+s*c-a*l,e.y=s*u+r*l+a*o-i*c,e.z=a*u+r*c+i*l-s*o,e.w=r*u-i*o-s*l-a*c,e}inverse(t){t===void 0&&(t=new Xe);const e=this.x,i=this.y,s=this.z,a=this.w;this.conjugate(t);const r=1/(e*e+i*i+s*s+a*a);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new Xe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new w);const i=t.x,s=t.y,a=t.z,r=this.x,o=this.y,l=this.z,c=this.w,u=c*i+o*a-l*s,f=c*s+l*i-r*a,h=c*a+r*s-o*i,d=-r*i-o*s-l*a;return e.x=u*c+d*-r+f*-l-h*-o,e.y=f*c+d*-o+h*-r-u*-l,e.z=h*c+d*-l+u*-o-f*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let i,s,a;const r=this.x,o=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=r*o+l*c;if(u>.499&&(i=2*Math.atan2(r,c),s=Math.PI/2,a=0),u<-.499&&(i=-2*Math.atan2(r,c),s=-Math.PI/2,a=0),i===void 0){const f=r*r,h=o*o,d=l*l;i=Math.atan2(2*o*c-2*r*l,1-2*h-2*d),s=Math.asin(2*u),a=Math.atan2(2*r*c-2*o*l,1-2*f-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=i,t.z=s,t.x=a}setFromEuler(t,e,i,s){s===void 0&&(s="XYZ");const a=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(i/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(i/2);return s==="XYZ"?(this.x=l*r*o+a*c*u,this.y=a*c*o-l*r*u,this.z=a*r*u+l*c*o,this.w=a*r*o-l*c*u):s==="YXZ"?(this.x=l*r*o+a*c*u,this.y=a*c*o-l*r*u,this.z=a*r*u-l*c*o,this.w=a*r*o+l*c*u):s==="ZXY"?(this.x=l*r*o-a*c*u,this.y=a*c*o+l*r*u,this.z=a*r*u+l*c*o,this.w=a*r*o-l*c*u):s==="ZYX"?(this.x=l*r*o-a*c*u,this.y=a*c*o+l*r*u,this.z=a*r*u-l*c*o,this.w=a*r*o+l*c*u):s==="YZX"?(this.x=l*r*o+a*c*u,this.y=a*c*o+l*r*u,this.z=a*r*u-l*c*o,this.w=a*r*o-l*c*u):s==="XZY"&&(this.x=l*r*o-a*c*u,this.y=a*c*o-l*r*u,this.z=a*r*u+l*c*o,this.w=a*r*o+l*c*u),this}clone(){return new Xe(this.x,this.y,this.z,this.w)}slerp(t,e,i){i===void 0&&(i=new Xe);const s=this.x,a=this.y,r=this.z,o=this.w;let l=t.x,c=t.y,u=t.z,f=t.w,h,d,g,_,m;return d=s*l+a*c+r*u+o*f,d<0&&(d=-d,l=-l,c=-c,u=-u,f=-f),1-d>1e-6?(h=Math.acos(d),g=Math.sin(h),_=Math.sin((1-e)*h)/g,m=Math.sin(e*h)/g):(_=1-e,m=e),i.x=_*s+m*l,i.y=_*a+m*c,i.z=_*r+m*u,i.w=_*o+m*f,i}integrate(t,e,i,s){s===void 0&&(s=new Xe);const a=t.x*i.x,r=t.y*i.y,o=t.z*i.z,l=this.x,c=this.y,u=this.z,f=this.w,h=e*.5;return s.x+=h*(a*f+r*u-o*c),s.y+=h*(r*f+o*l-a*u),s.z+=h*(o*f+a*c-r*l),s.w+=h*(-a*l-r*c-o*u),s}}const IL=new w,FL=new w,HL={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Mt{constructor(t){t===void 0&&(t={}),this.id=Mt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,i,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Mt.idCounter=0;Mt.types=HL;class ie{constructor(t){t===void 0&&(t={}),this.position=new w,this.quaternion=new Xe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ie.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ie.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,i,s){return s===void 0&&(s=new w),i.vsub(t,s),e.conjugate(Q_),Q_.vmult(s,s),s}static pointToWorldFrame(t,e,i,s){return s===void 0&&(s=new w),e.vmult(i,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,i){return i===void 0&&(i=new w),t.vmult(e,i),i}static vectorToLocalFrame(t,e,i,s){return s===void 0&&(s=new w),e.w*=-1,e.vmult(i,s),e.w*=-1,s}}const Q_=new Xe;class kl extends Mt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:i=[],normals:s=[],axes:a,boundingSphereRadius:r}=t;super({type:Mt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=i,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=a?a.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,i=this.uniqueEdges;i.length=0;const s=new w;for(let a=0;a!==t.length;a++){const r=t[a],o=r.length;for(let l=0;l!==o;l++){const c=(l+1)%o;e[r[l]].vsub(e[r[c]],s),s.normalize();let u=!1;for(let f=0;f!==i.length;f++)if(i[f].almostEquals(s)||i[f].almostEquals(s)){u=!0;break}u||i.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new w;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const i=this.vertices[this.faces[t][0]];if(e.dot(i)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const i=this.faces[t],s=this.vertices[i[0]],a=this.vertices[i[1]],r=this.vertices[i[2]];kl.computeNormal(s,a,r,e)}static computeNormal(t,e,i,s){const a=new w,r=new w;e.vsub(t,r),i.vsub(e,a),a.cross(r,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,i,s,a,r,o,l,c){const u=new w;let f=-1,h=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){u.copy(i.faceNormals[g]),a.vmult(u,u);const _=u.dot(r);_>h&&(h=_,f=g)}const d=[];for(let g=0;g<i.faces[f].length;g++){const _=i.vertices[i.faces[f][g]],m=new w;m.copy(_),a.vmult(m,m),s.vadd(m,m),d.push(m)}f>=0&&this.clipFaceAgainstHull(r,t,e,d,o,l,c)}findSeparatingAxis(t,e,i,s,a,r,o,l){const c=new w,u=new w,f=new w,h=new w,d=new w,g=new w;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){i.vmult(m.uniqueAxes[p],c);const v=m.testSepAxis(c,t,e,i,s,a);if(v===!1)return!1;v<_&&(_=v,r.copy(c))}else{const p=o?o.length:m.faces.length;for(let v=0;v<p;v++){const y=o?o[v]:v;c.copy(m.faceNormals[y]),i.vmult(c,c);const x=m.testSepAxis(c,t,e,i,s,a);if(x===!1)return!1;x<_&&(_=x,r.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){a.vmult(t.uniqueAxes[p],u);const v=m.testSepAxis(u,t,e,i,s,a);if(v===!1)return!1;v<_&&(_=v,r.copy(u))}else{const p=l?l.length:t.faces.length;for(let v=0;v<p;v++){const y=l?l[v]:v;u.copy(t.faceNormals[y]),a.vmult(u,u);const x=m.testSepAxis(u,t,e,i,s,a);if(x===!1)return!1;x<_&&(_=x,r.copy(u))}}for(let p=0;p!==m.uniqueEdges.length;p++){i.vmult(m.uniqueEdges[p],h);for(let v=0;v!==t.uniqueEdges.length;v++)if(a.vmult(t.uniqueEdges[v],d),h.cross(d,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,i,s,a);if(y===!1)return!1;y<_&&(_=y,r.copy(g))}}return s.vsub(e,f),f.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,i,s,a,r){const o=this;kl.project(o,t,i,s,Ud),kl.project(e,t,a,r,Od);const l=Ud[0],c=Ud[1],u=Od[0],f=Od[1];if(l<f||u<c)return!1;const h=l-f,d=u-c;return h<d?h:d}calculateLocalInertia(t,e){const i=new w,s=new w;this.computeLocalAABB(s,i);const a=i.x-s.x,r=i.y-s.y,o=i.z-s.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*a*2*a+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*a*2*a)}getPlaneConstantOfFace(t){const e=this.faces[t],i=this.faceNormals[t],s=this.vertices[e[0]];return-i.dot(s)}clipFaceAgainstHull(t,e,i,s,a,r,o){const l=new w,c=new w,u=new w,f=new w,h=new w,d=new w,g=new w,_=new w,m=this,p=[],v=s,y=p;let x=-1,T=Number.MAX_VALUE;for(let S=0;S<m.faces.length;S++){l.copy(m.faceNormals[S]),i.vmult(l,l);const L=l.dot(t);L<T&&(T=L,x=S)}if(x<0)return;const b=m.faces[x];b.connectedFaces=[];for(let S=0;S<m.faces.length;S++)for(let L=0;L<m.faces[S].length;L++)b.indexOf(m.faces[S][L])!==-1&&S!==x&&b.connectedFaces.indexOf(S)===-1&&b.connectedFaces.push(S);const E=b.length;for(let S=0;S<E;S++){const L=m.vertices[b[S]],H=m.vertices[b[(S+1)%E]];L.vsub(H,c),u.copy(c),i.vmult(u,u),e.vadd(u,u),f.copy(this.faceNormals[x]),i.vmult(f,f),e.vadd(f,f),u.cross(f,h),h.negate(h),d.copy(L),i.vmult(d,d),e.vadd(d,d);const P=b.connectedFaces[S];g.copy(this.faceNormals[P]);const B=this.getPlaneConstantOfFace(P);_.copy(g),i.vmult(_,_);const F=B-_.dot(e);for(this.clipFaceAgainstPlane(v,y,_,F);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[x]);const D=this.getPlaneConstantOfFace(x);_.copy(g),i.vmult(_,_);const M=D-_.dot(e);for(let S=0;S<v.length;S++){let L=_.dot(v[S])+M;if(L<=a&&(console.log(`clamped: depth=${L} to minDist=${a}`),L=a),L<=r){const H=v[S];if(L<=1e-6){const P={point:H,normal:_,depth:L};o.push(P)}}}}clipFaceAgainstPlane(t,e,i,s){let a,r;const o=t.length;if(o<2)return e;let l=t[t.length-1],c=t[0];a=i.dot(l)+s;for(let u=0;u<o;u++){if(c=t[u],r=i.dot(c)+s,a<0)if(r<0){const f=new w;f.copy(c),e.push(f)}else{const f=new w;l.lerp(c,a/(a-r),f),e.push(f)}else if(r<0){const f=new w;l.lerp(c,a/(a-r),f),e.push(f),e.push(c)}l=c,a=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const i=this.vertices,s=this.worldVertices;for(let a=0;a!==this.vertices.length;a++)e.vmult(i[a],s[a]),t.vadd(s[a],s[a]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const i=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const a=i[s];a.x<t.x?t.x=a.x:a.x>e.x&&(e.x=a.x),a.y<t.y?t.y=a.y:a.y>e.y&&(e.y=a.y),a.z<t.z?t.z=a.z:a.z>e.z&&(e.z=a.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new w);const i=this.faceNormals,s=this.worldFaceNormals;for(let a=0;a!==e;a++)t.vmult(i[a],s[a]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let i=0;i!==e.length;i++){const s=e[i].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,i,s){const a=this.vertices;let r,o,l,c,u,f,h=new w;for(let d=0;d<a.length;d++){h.copy(a[d]),e.vmult(h,h),t.vadd(h,h);const g=h;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(f===void 0||g.z>f)&&(f=g.z)}i.set(r,o,l),s.set(c,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new w);const e=this.vertices;for(let i=0;i<e.length;i++)t.vadd(e[i],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const i=this.vertices.length,s=this.vertices;if(e){for(let a=0;a<i;a++){const r=s[a];e.vmult(r,r)}for(let a=0;a<this.faceNormals.length;a++){const r=this.faceNormals[a];e.vmult(r,r)}}if(t)for(let a=0;a<i;a++){const r=s[a];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,i=this.faces,s=this.faceNormals,a=null,r=new w;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let l=s[o];const c=e[i[o][0]],u=new w;t.vsub(c,u);const f=l.dot(u),h=new w;r.vsub(c,h);const d=l.dot(h);if(f<0&&d>0||f>0&&d<0)return!1}return a?1:-1}static project(t,e,i,s,a){const r=t.vertices.length,o=VL;let l=0,c=0;const u=kL,f=t.vertices;u.setZero(),ie.vectorToLocalFrame(i,s,e,o),ie.pointToLocalFrame(i,s,u,u);const h=u.dot(o);c=l=f[0].dot(o);for(let d=1;d<r;d++){const g=f[d].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const d=c;c=l,l=d}a[0]=l,a[1]=c}}const Ud=[],Od=[];new w;const VL=new w,kL=new w;class Mc extends Mt{constructor(t){super({type:Mt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,i=this.halfExtents.z,s=w,a=[new s(-t,-e,-i),new s(t,-e,-i),new s(t,e,-i),new s(-t,e,-i),new s(-t,-e,i),new s(t,-e,i),new s(t,e,i),new s(-t,e,i)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new kl({vertices:a,faces:r,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new w),Mc.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,i){const s=t;i.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),i.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),i.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const i=t,s=this.halfExtents;if(i[0].set(s.x,0,0),i[1].set(0,s.y,0),i[2].set(0,0,s.z),i[3].set(-s.x,0,0),i[4].set(0,-s.y,0),i[5].set(0,0,-s.z),e!==void 0)for(let a=0;a!==i.length;a++)e.vmult(i[a],i[a]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,i){const s=this.halfExtents,a=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let r=0;r<a.length;r++)Gs.set(a[r][0],a[r][1],a[r][2]),e.vmult(Gs,Gs),t.vadd(Gs,Gs),i(Gs.x,Gs.y,Gs.z)}calculateWorldAABB(t,e,i,s){const a=this.halfExtents;Ui[0].set(a.x,a.y,a.z),Ui[1].set(-a.x,a.y,a.z),Ui[2].set(-a.x,-a.y,a.z),Ui[3].set(-a.x,-a.y,-a.z),Ui[4].set(a.x,-a.y,-a.z),Ui[5].set(a.x,a.y,-a.z),Ui[6].set(-a.x,a.y,-a.z),Ui[7].set(a.x,-a.y,a.z);const r=Ui[0];e.vmult(r,r),t.vadd(r,r),s.copy(r),i.copy(r);for(let o=1;o<8;o++){const l=Ui[o];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,f=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),f>s.z&&(s.z=f),c<i.x&&(i.x=c),u<i.y&&(i.y=u),f<i.z&&(i.z=f)}}}const Gs=new w,Ui=[new w,new w,new w,new w,new w,new w,new w,new w],q0={DYNAMIC:1,STATIC:2,KINEMATIC:4},Y0={AWAKE:0,SLEEPY:1,SLEEPING:2};class St extends db{constructor(t){t===void 0&&(t={}),super(),this.id=St.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new w,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new w,this.force=new w;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?St.STATIC:St.DYNAMIC,typeof t.type==typeof St.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=St.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Xe,this.initQuaternion=new Xe,this.previousQuaternion=new Xe,this.interpolatedQuaternion=new Xe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new w,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Mi,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Mi,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new w(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new w(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Qn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=St.AWAKE,this.wakeUpAfterNarrowphase=!1,t===St.SLEEPING&&this.dispatchEvent(St.wakeupEvent)}sleep(){this.sleepState=St.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===St.AWAKE&&i<s?(this.sleepState=St.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(St.sleepyEvent)):e===St.SLEEPY&&i>s?this.wakeUp():e===St.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(St.sleepEvent))}}updateSolveMassProperties(){this.sleepState===St.SLEEPING||this.type===St.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new w),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new w),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}addShape(t,e,i){const s=new w,a=new Xe;return e&&s.copy(e),i&&a.copy(i),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(a),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,i=t.length;let s=0;for(let a=0;a!==i;a++){const r=t[a];r.updateBoundingSphereRadius();const o=e[a].length(),l=r.boundingSphereRadius;o+l>s&&(s=o+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,i=this.shapeOrientations,s=t.length,a=GL,r=jL,o=this.quaternion,l=this.aabb,c=WL;for(let u=0;u!==s;u++){const f=t[u];o.vmult(e[u],a),a.vadd(this.position,a),o.mult(i[u],r),f.calculateWorldAABB(a,r,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const i=XL,s=qL;i.setRotationFromQuaternion(this.quaternion),i.transpose(s),i.scale(e,i),i.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new w),this.type!==St.DYNAMIC)return;this.sleepState===St.SLEEPING&&this.wakeUp();const i=ZL;e.cross(t,i),this.force.vadd(t,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new w),this.type!==St.DYNAMIC)return;const i=KL,s=QL;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyForce(i,s)}applyTorque(t){this.type===St.DYNAMIC&&(this.sleepState===St.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new w),this.type!==St.DYNAMIC)return;this.sleepState===St.SLEEPING&&this.wakeUp();const i=e,s=$L;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const a=JL;i.cross(t,a),this.invInertiaWorld.vmult(a,a),this.angularVelocity.vadd(a,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new w),this.type!==St.DYNAMIC)return;const i=tP,s=eP;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyImpulse(i,s)}updateMassProperties(){const t=nP;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,i=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Mc.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!i?1/e.x:0,e.y>0&&!i?1/e.y:0,e.z>0&&!i?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const i=new w;return t.vsub(this.position,i),this.angularVelocity.cross(i,e),this.velocity.vadd(e,e),e}integrate(t,e,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===St.DYNAMIC||this.type===St.KINEMATIC)||this.sleepState===St.SLEEPING)return;const s=this.velocity,a=this.angularVelocity,r=this.position,o=this.force,l=this.torque,c=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,d=u*t;s.x+=o.x*d*h.x,s.y+=o.y*d*h.y,s.z+=o.z*d*h.z;const g=f.elements,_=this.angularFactor,m=l.x*_.x,p=l.y*_.y,v=l.z*_.z;a.x+=t*(g[0]*m+g[1]*p+g[2]*v),a.y+=t*(g[3]*m+g[4]*p+g[5]*v),a.z+=t*(g[6]*m+g[7]*p+g[8]*v),r.x+=s.x*t,r.y+=s.y*t,r.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}St.idCounter=0;St.COLLIDE_EVENT_NAME="collide";St.DYNAMIC=q0.DYNAMIC;St.STATIC=q0.STATIC;St.KINEMATIC=q0.KINEMATIC;St.AWAKE=Y0.AWAKE;St.SLEEPY=Y0.SLEEPY;St.SLEEPING=Y0.SLEEPING;St.wakeupEvent={type:"wakeup"};St.sleepyEvent={type:"sleepy"};St.sleepEvent={type:"sleep"};const GL=new w,jL=new Xe,WL=new Qn,XL=new Mi,qL=new Mi,YL=new Mi,ZL=new w,KL=new w,QL=new w,$L=new w,JL=new w,tP=new w,eP=new w,nP=new w;class iP{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&St.STATIC||t.sleepState===St.SLEEPING)&&(e.type&St.STATIC||e.sleepState===St.SLEEPING))}intersectionTest(t,e,i,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,i,s):this.doBoundingSphereBroadphase(t,e,i,s)}doBoundingSphereBroadphase(t,e,i,s){const a=sP;e.position.vsub(t.position,a);const r=(t.boundingRadius+e.boundingRadius)**2;a.lengthSquared()<r&&(i.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,i,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(i.push(t),s.push(e))}makePairsUnique(t,e){const i=aP,s=rP,a=oP,r=t.length;for(let o=0;o!==r;o++)s[o]=t[o],a[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==r;o++){const l=s[o].id,c=a[o].id,u=l<c?`${l},${c}`:`${c},${l}`;i[u]=o,i.keys.push(u)}for(let o=0;o!==i.keys.length;o++){const l=i.keys.pop(),c=i[l];t.push(s[c]),e.push(a[c]),delete i[l]}}setWorld(t){}static boundingSphereCheck(t,e){const i=new w;t.position.vsub(e.position,i);const s=t.shapes[0],a=e.shapes[0];return Math.pow(s.boundingSphereRadius+a.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(t,e,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const sP=new w;new w;new Xe;new w;const aP={keys:[]},rP=[],oP=[];new w;new w;new w;class lP extends iP{constructor(){super()}collisionPairs(t,e,i){const s=t.bodies,a=s.length;let r,o;for(let l=0;l!==a;l++)for(let c=0;c!==l;c++)r=s[l],o=s[c],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,e,i)}aabbQuery(t,e,i){i===void 0&&(i=[]);for(let s=0;s<t.bodies.length;s++){const a=t.bodies[s];a.aabbNeedsUpdate&&a.updateAABB(),a.aabb.overlaps(e)&&i.push(a)}return i}}class Ih{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,i,s,a,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(s),this.shape=a,this.body=r,this.distance=o}}let pb,mb,gb,vb,_b,yb,xb;const Z0={CLOSEST:1,ANY:2,ALL:4};pb=Mt.types.SPHERE;mb=Mt.types.PLANE;gb=Mt.types.BOX;vb=Mt.types.CYLINDER;_b=Mt.types.CONVEXPOLYHEDRON;yb=Mt.types.HEIGHTFIELD;xb=Mt.types.TRIMESH;class je{get[pb](){return this._intersectSphere}get[mb](){return this._intersectPlane}get[gb](){return this._intersectBox}get[vb](){return this._intersectConvex}get[_b](){return this._intersectConvex}get[yb](){return this._intersectHeightfield}get[xb](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new w),e===void 0&&(e=new w),this.from=t.clone(),this.to=e.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=je.ANY,this.result=new Ih,this.hasHit=!1,this.callback=i=>{}}intersectWorld(t,e){return this.mode=e.mode||je.ANY,this.result=e.result||new Ih,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB($_),zd.length=0,t.broadphase.aabbQuery(t,$_,zd),this.intersectBodies(zd),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const s=cP,a=uP;for(let r=0,o=t.shapes.length;r<o;r++){const l=t.shapes[r];if(!(i&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],a),t.quaternion.vmult(t.shapeOffsets[r],s),s.vadd(t.position,s),this.intersectShape(l,a,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let i=0,s=t.length;!this.result.shouldStop&&i<s;i++)this.intersectBody(t[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,i,s){const a=this.from;if(EP(a,this.direction,i)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,i,s,t)}_intersectBox(t,e,i,s,a){return this._intersectConvex(t.convexPolyhedronRepresentation,e,i,s,a)}_intersectPlane(t,e,i,s,a){const r=this.from,o=this.to,l=this.direction,c=new w(0,0,1);e.vmult(c,c);const u=new w;r.vsub(i,u);const f=u.dot(c);o.vsub(i,u);const h=u.dot(c);if(f*h>0||r.distanceTo(o)<f)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const g=new w,_=new w,m=new w;r.vsub(i,g);const p=-c.dot(g)/d;l.scale(p,_),r.vadd(_,m),this.reportIntersection(c,m,a,s,-1)}getAABB(t){const{lowerBound:e,upperBound:i}=t,s=this.to,a=this.from;e.x=Math.min(s.x,a.x),e.y=Math.min(s.y,a.y),e.z=Math.min(s.z,a.z),i.x=Math.max(s.x,a.x),i.y=Math.max(s.y,a.y),i.z=Math.max(s.z,a.z)}_intersectHeightfield(t,e,i,s,a){t.data,t.elementSize;const r=hP;r.from.copy(this.from),r.to.copy(this.to),ie.pointToLocalFrame(i,e,r.from,r.from),ie.pointToLocalFrame(i,e,r.to,r.to),r.updateDirection();const o=fP;let l,c,u,f;l=c=0,u=f=t.data.length-1;const h=new Qn;r.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,o,!0),u=Math.min(u,o[0]+1),f=Math.min(f,o[1]+1);for(let d=l;d<u;d++)for(let g=c;g<f;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,g,h),!!h.overlapsRay(r)){if(t.getConvexTrianglePillar(d,g,!1),ie.pointToWorldFrame(i,e,t.pillarOffset,Mu),this._intersectConvex(t.pillarConvex,e,Mu,s,a,J_),this.result.shouldStop)return;t.getConvexTrianglePillar(d,g,!0),ie.pointToWorldFrame(i,e,t.pillarOffset,Mu),this._intersectConvex(t.pillarConvex,e,Mu,s,a,J_)}}}_intersectSphere(t,e,i,s,a){const r=this.from,o=this.to,l=t.radius,c=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,u=2*((o.x-r.x)*(r.x-i.x)+(o.y-r.y)*(r.y-i.y)+(o.z-r.z)*(r.z-i.z)),f=(r.x-i.x)**2+(r.y-i.y)**2+(r.z-i.z)**2-l**2,h=u**2-4*c*f,d=dP,g=pP;if(!(h<0))if(h===0)r.lerp(o,h,d),d.vsub(i,g),g.normalize(),this.reportIntersection(g,d,a,s,-1);else{const _=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(r.lerp(o,_,d),d.vsub(i,g),g.normalize(),this.reportIntersection(g,d,a,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(r.lerp(o,m,d),d.vsub(i,g),g.normalize(),this.reportIntersection(g,d,a,s,-1))}}_intersectConvex(t,e,i,s,a,r){const o=mP,l=ty,c=r&&r.faceList||null,u=t.faces,f=t.vertices,h=t.faceNormals,d=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),p=c?c.length:u.length,v=this.result;for(let y=0;!v.shouldStop&&y<p;y++){const x=c?c[y]:y,T=u[x],b=h[x],E=e,D=i;l.copy(f[T[0]]),E.vmult(l,l),l.vadd(D,l),l.vsub(g,l),E.vmult(b,o);const M=d.dot(o);if(Math.abs(M)<this.precision)continue;const S=o.dot(l)/M;if(!(S<0)){d.scale(S,Pn),Pn.vadd(g,Pn),vi.copy(f[T[0]]),E.vmult(vi,vi),D.vadd(vi,vi);for(let L=1;!v.shouldStop&&L<T.length-1;L++){Oi.copy(f[T[L]]),zi.copy(f[T[L+1]]),E.vmult(Oi,Oi),E.vmult(zi,zi),D.vadd(Oi,Oi),D.vadd(zi,zi);const H=Pn.distanceTo(g);!(je.pointInTriangle(Pn,vi,Oi,zi)||je.pointInTriangle(Pn,Oi,vi,zi))||H>m||this.reportIntersection(o,Pn,a,s,x)}}}}_intersectTrimesh(t,e,i,s,a,r){const o=gP,l=bP,c=MP,u=ty,f=vP,h=_P,d=yP,g=SP,_=xP,m=t.indices;t.vertices;const p=this.from,v=this.to,y=this.direction;c.position.copy(i),c.quaternion.copy(e),ie.vectorToLocalFrame(i,e,y,f),ie.pointToLocalFrame(i,e,p,h),ie.pointToLocalFrame(i,e,v,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,d.vsub(h,f),f.normalize();const x=h.distanceSquared(d);t.tree.rayQuery(this,c,l);for(let T=0,b=l.length;!this.result.shouldStop&&T!==b;T++){const E=l[T];t.getNormal(E,o),t.getVertex(m[E*3],vi),vi.vsub(h,u);const D=f.dot(o),M=o.dot(u)/D;if(M<0)continue;f.scale(M,Pn),Pn.vadd(h,Pn),t.getVertex(m[E*3+1],Oi),t.getVertex(m[E*3+2],zi);const S=Pn.distanceSquared(h);!(je.pointInTriangle(Pn,Oi,vi,zi)||je.pointInTriangle(Pn,vi,Oi,zi))||S>x||(ie.vectorToWorldFrame(e,o,_),ie.pointToWorldFrame(i,e,Pn,g),this.reportIntersection(_,g,a,s,E))}l.length=0}reportIntersection(t,e,i,s,a){const r=this.from,o=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof a<"u"?a:-1,this.mode){case je.ALL:this.hasHit=!0,c.set(r,o,t,e,i,s,l),c.hasHit=!0,this.callback(c);break;case je.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,i,s,l));break;case je.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,i,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,i,s){s.vsub(e,za),i.vsub(e,il),t.vsub(e,Bd);const a=za.dot(za),r=za.dot(il),o=za.dot(Bd),l=il.dot(il),c=il.dot(Bd);let u,f;return(u=l*o-r*c)>=0&&(f=a*c-r*o)>=0&&u+f<a*l-r*r}}je.CLOSEST=Z0.CLOSEST;je.ANY=Z0.ANY;je.ALL=Z0.ALL;const $_=new Qn,zd=[],il=new w,Bd=new w,cP=new w,uP=new Xe,Pn=new w,vi=new w,Oi=new w,zi=new w;new w;new Ih;const J_={faceList:[0]},Mu=new w,hP=new je,fP=[],dP=new w,pP=new w,mP=new w;new w;new w;const ty=new w,gP=new w,vP=new w,_P=new w,yP=new w,xP=new w,SP=new w;new Qn;const bP=[],MP=new ie,za=new w,Eu=new w;function EP(n,t,e){e.vsub(n,za);const i=za.dot(t);return t.scale(i,Eu),Eu.vadd(n,Eu),e.distanceTo(Eu)}class wP{static defaults(t,e){t===void 0&&(t={});for(let i in e)i in t||(t[i]=e[i]);return t}}class ey{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ec{constructor(t,e,i,s){i===void 0&&(i=-1e6),s===void 0&&(s=1e6),this.id=Ec.idCounter++,this.minForce=i,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ey,this.jacobianElementB=new ey,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,i){const s=e,a=t,r=i;this.a=4/(r*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(r*r*a*(1+4*s))}computeB(t,e,i){const s=this.computeGW(),a=this.computeGq(),r=this.computeGiMf();return-a*t-s*e-r*i}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,a=i.position,r=s.position;return t.spatial.dot(a)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,a=i.velocity,r=s.velocity,o=i.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(a,o)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,a=i.vlambda,r=s.vlambda,o=i.wlambda,l=s.wlambda;return t.multiplyVectors(a,o)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,a=i.force,r=i.torque,o=s.force,l=s.torque,c=i.invMassSolve,u=s.invMassSolve;return a.scale(c,ny),o.scale(u,iy),i.invInertiaWorldSolve.vmult(r,sy),s.invInertiaWorldSolve.vmult(l,ay),t.multiplyVectors(ny,sy)+e.multiplyVectors(iy,ay)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,a=i.invMassSolve,r=s.invMassSolve,o=i.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=a+r;return o.vmult(t.rotational,wu),c+=wu.dot(t.rotational),l.vmult(e.rotational,wu),c+=wu.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,i=this.jacobianElementB,s=this.bi,a=this.bj,r=TP;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),a.vlambda.addScaledVector(a.invMassSolve*t,i.spatial,a.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda),a.invInertiaWorldSolve.vmult(i.rotational,r),a.wlambda.addScaledVector(t,r,a.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ec.idCounter=0;const ny=new w,iy=new w,sy=new w,ay=new w,wu=new w,TP=new w;class AP extends Ec{constructor(t,e,i){i===void 0&&(i=1e6),super(t,e,0,i),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(t){const e=this.a,i=this.b,s=this.bi,a=this.bj,r=this.ri,o=this.rj,l=CP,c=RP,u=s.velocity,f=s.angularVelocity;s.force,s.torque;const h=a.velocity,d=a.angularVelocity;a.force,a.torque;const g=DP,_=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;r.cross(p,l),o.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(a.position),g.vadd(o,g),g.vsub(s.position,g),g.vsub(r,g);const v=p.dot(g),y=this.restitution+1,x=y*h.dot(p)-y*u.dot(p)+d.dot(c)-f.dot(l),T=this.computeGiMf();return-v*e-x*i-t*T}getImpactVelocityAlongNormal(){const t=LP,e=PP,i=NP,s=UP,a=OP;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(i,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,a),this.ni.dot(a)}}const CP=new w,RP=new w,DP=new w,LP=new w,PP=new w,NP=new w,UP=new w,OP=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class ry extends Ec{constructor(t,e,i){super(t,e,-i,i),this.ri=new w,this.rj=new w,this.t=new w}computeB(t){this.a;const e=this.b;this.bi,this.bj;const i=this.ri,s=this.rj,a=zP,r=BP,o=this.t;i.cross(o,a),s.cross(o,r);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),a.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(r);const u=this.computeGW(),f=this.computeGiMf();return-u*e-t*f}}const zP=new w,BP=new w;class hf{constructor(t,e,i){i=wP.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=hf.idCounter++,this.materials=[t,e],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}hf.idCounter=0;class ff{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ff.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ff.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new je;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class IP extends Mt{constructor(){super({type:Mt.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new w),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,i,s){rs.set(0,0,1),e.vmult(rs,rs);const a=Number.MAX_VALUE;i.set(-a,-a,-a),s.set(a,a,a),rs.x===1?s.x=t.x:rs.x===-1&&(i.x=t.x),rs.y===1?s.y=t.y:rs.y===-1&&(i.y=t.y),rs.z===1?s.z=t.z:rs.z===-1&&(i.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const rs=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Qn;new w;new Qn;new w;new w;new w;new w;new w;new w;new w;new Qn;new w;new ie;new Qn;class FP{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,i=e.indexOf(t);i!==-1&&e.splice(i,1)}removeAllEquations(){this.equations.length=0}}class HP extends FP{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let i=0;const s=this.iterations,a=this.tolerance*this.tolerance,r=this.equations,o=r.length,l=e.bodies,c=l.length,u=t;let f,h,d,g,_,m;if(o!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const p=kP,v=GP,y=VP;p.length=o,v.length=o,y.length=o;for(let x=0;x!==o;x++){const T=r[x];y[x]=0,v[x]=T.computeB(u),p[x]=1/T.computeC()}if(o!==0){for(let b=0;b!==c;b++){const E=l[b],D=E.vlambda,M=E.wlambda;D.set(0,0,0),M.set(0,0,0)}for(i=0;i!==s;i++){g=0;for(let b=0;b!==o;b++){const E=r[b];f=v[b],h=p[b],m=y[b],_=E.computeGWlambda(),d=h*(f-_-E.eps*m),m+d<E.minForce?d=E.minForce-m:m+d>E.maxForce&&(d=E.maxForce-m),y[b]+=d,g+=d>0?d:-d,E.addToWlambda(d)}if(g*g<a)break}for(let b=0;b!==c;b++){const E=l[b],D=E.velocity,M=E.angularVelocity;E.vlambda.vmul(E.linearFactor,E.vlambda),D.vadd(E.vlambda,D),E.wlambda.vmul(E.angularFactor,E.wlambda),M.vadd(E.wlambda,M)}let x=r.length;const T=1/u;for(;x--;)r[x].multiplier=y[x]*T}return i}}const VP=[],kP=[],GP=[];St.STATIC;class jP{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class WP extends jP{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const Se={sphereSphere:Mt.types.SPHERE,spherePlane:Mt.types.SPHERE|Mt.types.PLANE,boxBox:Mt.types.BOX|Mt.types.BOX,sphereBox:Mt.types.SPHERE|Mt.types.BOX,planeBox:Mt.types.PLANE|Mt.types.BOX,convexConvex:Mt.types.CONVEXPOLYHEDRON,sphereConvex:Mt.types.SPHERE|Mt.types.CONVEXPOLYHEDRON,planeConvex:Mt.types.PLANE|Mt.types.CONVEXPOLYHEDRON,boxConvex:Mt.types.BOX|Mt.types.CONVEXPOLYHEDRON,sphereHeightfield:Mt.types.SPHERE|Mt.types.HEIGHTFIELD,boxHeightfield:Mt.types.BOX|Mt.types.HEIGHTFIELD,convexHeightfield:Mt.types.CONVEXPOLYHEDRON|Mt.types.HEIGHTFIELD,sphereParticle:Mt.types.PARTICLE|Mt.types.SPHERE,planeParticle:Mt.types.PLANE|Mt.types.PARTICLE,boxParticle:Mt.types.BOX|Mt.types.PARTICLE,convexParticle:Mt.types.PARTICLE|Mt.types.CONVEXPOLYHEDRON,cylinderCylinder:Mt.types.CYLINDER,sphereCylinder:Mt.types.SPHERE|Mt.types.CYLINDER,planeCylinder:Mt.types.PLANE|Mt.types.CYLINDER,boxCylinder:Mt.types.BOX|Mt.types.CYLINDER,convexCylinder:Mt.types.CONVEXPOLYHEDRON|Mt.types.CYLINDER,heightfieldCylinder:Mt.types.HEIGHTFIELD|Mt.types.CYLINDER,particleCylinder:Mt.types.PARTICLE|Mt.types.CYLINDER,sphereTrimesh:Mt.types.SPHERE|Mt.types.TRIMESH,planeTrimesh:Mt.types.PLANE|Mt.types.TRIMESH};class XP{get[Se.sphereSphere](){return this.sphereSphere}get[Se.spherePlane](){return this.spherePlane}get[Se.boxBox](){return this.boxBox}get[Se.sphereBox](){return this.sphereBox}get[Se.planeBox](){return this.planeBox}get[Se.convexConvex](){return this.convexConvex}get[Se.sphereConvex](){return this.sphereConvex}get[Se.planeConvex](){return this.planeConvex}get[Se.boxConvex](){return this.boxConvex}get[Se.sphereHeightfield](){return this.sphereHeightfield}get[Se.boxHeightfield](){return this.boxHeightfield}get[Se.convexHeightfield](){return this.convexHeightfield}get[Se.sphereParticle](){return this.sphereParticle}get[Se.planeParticle](){return this.planeParticle}get[Se.boxParticle](){return this.boxParticle}get[Se.convexParticle](){return this.convexParticle}get[Se.cylinderCylinder](){return this.convexConvex}get[Se.sphereCylinder](){return this.sphereConvex}get[Se.planeCylinder](){return this.planeConvex}get[Se.boxCylinder](){return this.boxConvex}get[Se.convexCylinder](){return this.convexConvex}get[Se.heightfieldCylinder](){return this.heightfieldCylinder}get[Se.particleCylinder](){return this.particleCylinder}get[Se.sphereTrimesh](){return this.sphereTrimesh}get[Se.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new WP,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,i,s,a,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new AP(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&i.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||t.material,u=s.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(o.restitution=c.restitution*u.restitution),o.si=a||i,o.sj=r||s,o}createFrictionEquationsFromContact(t,e){const i=t.bi,s=t.bj,a=t.si,r=t.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const u=a.material||i.material,f=r.material||s.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(c=u.friction*f.friction),c>0){const h=c*(o.frictionGravity||o.gravity).length();let d=i.invMass+s.invMass;d>0&&(d=1/d);const g=this.frictionEquationPool,_=g.length?g.pop():new ry(i,s,h*d),m=g.length?g.pop():new ry(i,s,h*d);return _.bi=m.bi=i,_.bj=m.bj=s,_.minForce=m.minForce=-h*d,_.maxForce=m.maxForce=h*d,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const i=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Da.setZero(),Nr.setZero(),Ur.setZero();const a=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==a?(Da.vadd(e.ni,Da),Nr.vadd(e.ri,Nr),Ur.vadd(e.rj,Ur)):(Da.vsub(e.ni,Da),Nr.vadd(e.rj,Nr),Ur.vadd(e.ri,Ur));const r=1/t;Nr.scale(r,i.ri),Ur.scale(r,i.rj),s.ri.copy(i.ri),s.rj.copy(i.rj),Da.normalize(),Da.tangents(i.t,s.t)}getContacts(t,e,i,s,a,r,o){this.contactPointPool=a,this.frictionEquationPool=o,this.result=s,this.frictionResult=r;const l=ZP,c=KP,u=qP,f=YP;for(let h=0,d=t.length;h!==d;h++){const g=t[h],_=e[h];let m=null;g.material&&_.material&&(m=i.getContactMaterial(g.material,_.material)||null);const p=g.type&St.KINEMATIC&&_.type&St.STATIC||g.type&St.STATIC&&_.type&St.KINEMATIC||g.type&St.KINEMATIC&&_.type&St.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const y=g.shapes[v];for(let x=0;x<_.shapes.length;x++){_.quaternion.mult(_.shapeOrientations[x],c),_.quaternion.vmult(_.shapeOffsets[x],f),f.vadd(_.position,f);const T=_.shapes[x];if(!(y.collisionFilterMask&T.collisionFilterGroup&&T.collisionFilterMask&y.collisionFilterGroup)||u.distanceTo(f)>y.boundingSphereRadius+T.boundingSphereRadius)continue;let b=null;y.material&&T.material&&(b=i.getContactMaterial(y.material,T.material)||null),this.currentContactMaterial=b||m||i.defaultContactMaterial;const E=y.type|T.type,D=this[E];if(D){let M=!1;y.type<T.type?M=D.call(this,y,T,u,f,l,c,g,_,y,T,p):M=D.call(this,T,y,f,u,c,l,_,g,y,T,p),M&&p&&(i.shapeOverlapKeeper.set(y.id,T.id),i.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,i,s,a,r,o,l,c,u,f){if(f)return i.distanceSquared(s)<(t.radius+e.radius)**2;const h=this.createContactEquation(o,l,t,e,c,u);s.vsub(i,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(i,h.ri),h.ri.vsub(o.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,i,s,a,r,o,l,c,u,f){const h=this.createContactEquation(o,l,t,e,c,u);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),i.vsub(s,Tu),h.ni.scale(h.ni.dot(Tu),oy),Tu.vsub(oy,h.rj),-Tu.dot(h.ni)<=t.radius){if(f)return!0;const d=h.ri,g=h.rj;d.vadd(i,d),d.vsub(o.position,d),g.vadd(s,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,i,s,a,r,o,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,i,s,a,r,o,l,t,e,f)}sphereBox(t,e,i,s,a,r,o,l,c,u,f){const h=this.v3pool,d=bN;i.vsub(s,Au),e.getSideNormals(d,r);const g=t.radius;let _=!1;const m=EN,p=wN,v=TN;let y=null,x=0,T=0,b=0,E=null;for(let R=0,j=d.length;R!==j&&_===!1;R++){const O=yN;O.copy(d[R]);const W=O.length();O.normalize();const nt=Au.dot(O);if(nt<W+g&&nt>0){const ct=xN,rt=SN;ct.copy(d[(R+1)%3]),rt.copy(d[(R+2)%3]);const Nt=ct.length(),K=rt.length();ct.normalize(),rt.normalize();const at=Au.dot(ct),yt=Au.dot(rt);if(at<Nt&&at>-Nt&&yt<K&&yt>-K){const pt=Math.abs(nt-W-g);if((E===null||pt<E)&&(E=pt,T=at,b=yt,y=W,m.copy(O),p.copy(ct),v.copy(rt),x++,f))return!0}}}if(x){_=!0;const R=this.createContactEquation(o,l,t,e,c,u);m.scale(-g,R.ri),R.ni.copy(m),R.ni.negate(R.ni),m.scale(y,m),p.scale(T,p),m.vadd(p,m),v.scale(b,v),m.vadd(v,R.rj),R.ri.vadd(i,R.ri),R.ri.vsub(o.position,R.ri),R.rj.vadd(s,R.rj),R.rj.vsub(l.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}let D=h.get();const M=MN;for(let R=0;R!==2&&!_;R++)for(let j=0;j!==2&&!_;j++)for(let O=0;O!==2&&!_;O++)if(D.set(0,0,0),R?D.vadd(d[0],D):D.vsub(d[0],D),j?D.vadd(d[1],D):D.vsub(d[1],D),O?D.vadd(d[2],D):D.vsub(d[2],D),s.vadd(D,M),M.vsub(i,M),M.lengthSquared()<g*g){if(f)return!0;_=!0;const W=this.createContactEquation(o,l,t,e,c,u);W.ri.copy(M),W.ri.normalize(),W.ni.copy(W.ri),W.ri.scale(g,W.ri),W.rj.copy(D),W.ri.vadd(i,W.ri),W.ri.vsub(o.position,W.ri),W.rj.vadd(s,W.rj),W.rj.vsub(l.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}h.release(D),D=null;const S=h.get(),L=h.get(),H=h.get(),P=h.get(),B=h.get(),F=d.length;for(let R=0;R!==F&&!_;R++)for(let j=0;j!==F&&!_;j++)if(R%3!==j%3){d[j].cross(d[R],S),S.normalize(),d[R].vadd(d[j],L),H.copy(i),H.vsub(L,H),H.vsub(s,H);const O=H.dot(S);S.scale(O,P);let W=0;for(;W===R%3||W===j%3;)W++;B.copy(i),B.vsub(P,B),B.vsub(L,B),B.vsub(s,B);const nt=Math.abs(O),ct=B.length();if(nt<d[W].length()&&ct<g){if(f)return!0;_=!0;const rt=this.createContactEquation(o,l,t,e,c,u);L.vadd(P,rt.rj),rt.rj.copy(rt.rj),B.negate(rt.ni),rt.ni.normalize(),rt.ri.copy(rt.rj),rt.ri.vadd(s,rt.ri),rt.ri.vsub(i,rt.ri),rt.ri.normalize(),rt.ri.scale(g,rt.ri),rt.ri.vadd(i,rt.ri),rt.ri.vsub(o.position,rt.ri),rt.rj.vadd(s,rt.rj),rt.rj.vsub(l.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}h.release(S,L,H,P,B)}planeBox(t,e,i,s,a,r,o,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,i,s,a,r,o,l,t,e,f)}convexConvex(t,e,i,s,a,r,o,l,c,u,f,h,d){const g=VN;if(!(i.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,i,a,s,r,g,h,d)){const _=[],m=kN;t.clipAgainstHull(i,a,e,s,r,g,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(f)return!0;const y=this.createContactEquation(o,l,t,e,c,u),x=y.ri,T=y.rj;g.negate(y.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,x),T.copy(_[v].point),x.vsub(i,x),T.vsub(s,T),x.vadd(i,x),x.vsub(o.position,x),T.vadd(s,T),T.vsub(l.position,T),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,i,s,a,r,o,l,c,u,f){const h=this.v3pool;i.vsub(s,AN);const d=e.faceNormals,g=e.faces,_=e.vertices,m=t.radius;let p=!1;for(let v=0;v!==_.length;v++){const y=_[v],x=LN;r.vmult(y,x),s.vadd(x,x);const T=DN;if(x.vsub(i,T),T.lengthSquared()<m*m){if(f)return!0;p=!0;const b=this.createContactEquation(o,l,t,e,c,u);b.ri.copy(T),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),x.vsub(s,b.rj),b.ri.vadd(i,b.ri),b.ri.vsub(o.position,b.ri),b.rj.vadd(s,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&p===!1;v++){const x=d[v],T=g[v],b=PN;r.vmult(x,b);const E=NN;r.vmult(_[T[0]],E),E.vadd(s,E);const D=UN;b.scale(-m,D),i.vadd(D,D);const M=ON;D.vsub(E,M);const S=M.dot(b),L=zN;if(i.vsub(E,L),S<0&&L.dot(b)>0){const H=[];for(let P=0,B=T.length;P!==B;P++){const F=h.get();r.vmult(_[T[P]],F),s.vadd(F,F),H.push(F)}if(_N(H,b,i)){if(f)return!0;p=!0;const P=this.createContactEquation(o,l,t,e,c,u);b.scale(-m,P.ri),b.negate(P.ni);const B=h.get();b.scale(-S,B);const F=h.get();b.scale(-m,F),i.vsub(s,P.rj),P.rj.vadd(F,P.rj),P.rj.vadd(B,P.rj),P.rj.vadd(s,P.rj),P.rj.vsub(l.position,P.rj),P.ri.vadd(i,P.ri),P.ri.vsub(o.position,P.ri),h.release(B),h.release(F),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let R=0,j=H.length;R!==j;R++)h.release(H[R]);return}else for(let P=0;P!==T.length;P++){const B=h.get(),F=h.get();r.vmult(_[T[(P+1)%T.length]],B),r.vmult(_[T[(P+2)%T.length]],F),s.vadd(B,B),s.vadd(F,F);const R=CN;F.vsub(B,R);const j=RN;R.unit(j);const O=h.get(),W=h.get();i.vsub(B,W);const nt=W.dot(j);j.scale(nt,O),O.vadd(B,O);const ct=h.get();if(O.vsub(i,ct),nt>0&&nt*nt<R.lengthSquared()&&ct.lengthSquared()<m*m){if(f)return!0;const rt=this.createContactEquation(o,l,t,e,c,u);O.vsub(s,rt.rj),O.vsub(i,rt.ni),rt.ni.normalize(),rt.ni.scale(m,rt.ri),rt.rj.vadd(s,rt.rj),rt.rj.vsub(l.position,rt.rj),rt.ri.vadd(i,rt.ri),rt.ri.vsub(o.position,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(let Nt=0,K=H.length;Nt!==K;Nt++)h.release(H[Nt]);h.release(B),h.release(F),h.release(O),h.release(ct),h.release(W);return}h.release(B),h.release(F),h.release(O),h.release(ct),h.release(W)}for(let P=0,B=H.length;P!==B;P++)h.release(H[P])}}}planeConvex(t,e,i,s,a,r,o,l,c,u,f){const h=BN,d=IN;d.set(0,0,1),a.vmult(d,d);let g=0;const _=FN;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),r.vmult(h,h),s.vadd(h,h),h.vsub(i,_),d.dot(_)<=0){if(f)return!0;const v=this.createContactEquation(o,l,t,e,c,u),y=HN;d.scale(d.dot(_),y),h.vsub(y,y),y.vsub(i,v.ri),v.ni.copy(d),h.vsub(s,v.rj),v.ri.vadd(i,v.ri),v.ri.vsub(o.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,i,s,a,r,o,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,i,s,a,r,o,l,t,e,f)}sphereHeightfield(t,e,i,s,a,r,o,l,c,u,f){const h=e.data,d=t.radius,g=e.elementSize,_=tU,m=JN;ie.pointToLocalFrame(s,r,i,m);let p=Math.floor((m.x-d)/g)-1,v=Math.ceil((m.x+d)/g)+1,y=Math.floor((m.y-d)/g)-1,x=Math.ceil((m.y+d)/g)+1;if(v<0||x<0||p>h.length||y>h[0].length)return;p<0&&(p=0),v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),p>=h.length&&(p=h.length-1),v>=h.length&&(v=h.length-1),x>=h[0].length&&(x=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const T=[];e.getRectMinMax(p,y,v,x,T);const b=T[0],E=T[1];if(m.z-d>E||m.z+d<b)return;const D=this.result;for(let M=p;M<v;M++)for(let S=y;S<x;S++){const L=D.length;let H=!1;if(e.getConvexTrianglePillar(M,S,!1),ie.pointToWorldFrame(s,r,e.pillarOffset,_),i.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,i,_,a,r,o,l,t,e,f)),f&&H||(e.getConvexTrianglePillar(M,S,!0),ie.pointToWorldFrame(s,r,e.pillarOffset,_),i.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,i,_,a,r,o,l,t,e,f)),f&&H))return!0;if(D.length-L>2)return}}boxHeightfield(t,e,i,s,a,r,o,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,i,s,a,r,o,l,t,e,f)}convexHeightfield(t,e,i,s,a,r,o,l,c,u,f){const h=e.data,d=e.elementSize,g=t.boundingSphereRadius,_=QN,m=$N,p=KN;ie.pointToLocalFrame(s,r,i,p);let v=Math.floor((p.x-g)/d)-1,y=Math.ceil((p.x+g)/d)+1,x=Math.floor((p.y-g)/d)-1,T=Math.ceil((p.y+g)/d)+1;if(y<0||T<0||v>h.length||x>h[0].length)return;v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),T<0&&(T=0),v>=h.length&&(v=h.length-1),y>=h.length&&(y=h.length-1),T>=h[0].length&&(T=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const b=[];e.getRectMinMax(v,x,y,T,b);const E=b[0],D=b[1];if(!(p.z-g>D||p.z+g<E))for(let M=v;M<y;M++)for(let S=x;S<T;S++){let L=!1;if(e.getConvexTrianglePillar(M,S,!1),ie.pointToWorldFrame(s,r,e.pillarOffset,_),i.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,i,_,a,r,o,l,null,null,f,m,null)),f&&L||(e.getConvexTrianglePillar(M,S,!0),ie.pointToWorldFrame(s,r,e.pillarOffset,_),i.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,i,_,a,r,o,l,null,null,f,m,null)),f&&L))return!0}}sphereParticle(t,e,i,s,a,r,o,l,c,u,f){const h=XN;if(h.set(0,0,1),s.vsub(i,h),h.lengthSquared()<=t.radius*t.radius){if(f)return!0;const g=this.createContactEquation(l,o,e,t,c,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,i,s,a,r,o,l,c,u,f){const h=GN;h.set(0,0,1),o.quaternion.vmult(h,h);const d=jN;if(s.vsub(o.position,d),h.dot(d)<=0){if(f)return!0;const _=this.createContactEquation(l,o,e,t,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=WN;h.scale(h.dot(s),m),s.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,i,s,a,r,o,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,i,s,a,r,o,l,t,e,f)}convexParticle(t,e,i,s,a,r,o,l,c,u,f){let h=-1;const d=YN,g=ZN;let _=null;const m=qN;if(m.copy(s),m.vsub(i,m),a.conjugate(ly),ly.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(i,a),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(a);for(let p=0,v=t.faces.length;p!==v;p++){const y=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];s.vsub(y[0],cy);const T=-x.dot(cy);if(_===null||Math.abs(T)<Math.abs(_)){if(f)return!0;_=T,h=p,d.copy(x)}}if(h!==-1){const p=this.createContactEquation(l,o,e,t,c,u);d.scale(_,g),g.vadd(s,g),g.vsub(i,g),p.rj.copy(g),d.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,y=p.rj;v.vadd(s,v),v.vsub(l.position,v),y.vadd(i,y),y.vsub(o.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,i,s,a,r,o,l,c,u,f){return this.convexHeightfield(e,t,s,i,r,a,l,o,c,u,f)}particleCylinder(t,e,i,s,a,r,o,l,c,u,f){return this.convexParticle(e,t,s,i,r,a,l,o,c,u,f)}sphereTrimesh(t,e,i,s,a,r,o,l,c,u,f){const h=sN,d=aN,g=rN,_=oN,m=lN,p=cN,v=dN,y=iN,x=eN,T=pN;ie.pointToLocalFrame(s,r,i,m);const b=t.radius;v.lowerBound.set(m.x-b,m.y-b,m.z-b),v.upperBound.set(m.x+b,m.y+b,m.z+b),e.getTrianglesInAABB(v,T);const E=nN,D=t.radius*t.radius;for(let P=0;P<T.length;P++)for(let B=0;B<3;B++)if(e.getVertex(e.indices[T[P]*3+B],E),E.vsub(m,x),x.lengthSquared()<=D){if(y.copy(E),ie.pointToWorldFrame(s,r,y,E),E.vsub(i,x),f)return!0;let F=this.createContactEquation(o,l,t,e,c,u);F.ni.copy(x),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(t.radius,F.ri),F.ri.vadd(i,F.ri),F.ri.vsub(o.position,F.ri),F.rj.copy(E),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let P=0;P<T.length;P++)for(let B=0;B<3;B++){e.getVertex(e.indices[T[P]*3+B],h),e.getVertex(e.indices[T[P]*3+(B+1)%3],d),d.vsub(h,g),m.vsub(d,p);const F=p.dot(g);m.vsub(h,p);let R=p.dot(g);if(R>0&&F<0&&(m.vsub(h,p),_.copy(g),_.normalize(),R=p.dot(_),_.scale(R,p),p.vadd(h,p),p.distanceTo(m)<t.radius)){if(f)return!0;const O=this.createContactEquation(o,l,t,e,c,u);p.vsub(m,O.ni),O.ni.normalize(),O.ni.scale(t.radius,O.ri),O.ri.vadd(i,O.ri),O.ri.vsub(o.position,O.ri),ie.pointToWorldFrame(s,r,p,p),p.vsub(l.position,O.rj),ie.vectorToWorldFrame(r,O.ni,O.ni),ie.vectorToWorldFrame(r,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}const M=uN,S=hN,L=fN,H=tN;for(let P=0,B=T.length;P!==B;P++){e.getTriangleVertices(T[P],M,S,L),e.getNormal(T[P],H),m.vsub(M,p);let F=p.dot(H);if(H.scale(F,p),m.vsub(p,p),F=p.distanceTo(m),je.pointInTriangle(p,M,S,L)&&F<t.radius){if(f)return!0;let R=this.createContactEquation(o,l,t,e,c,u);p.vsub(m,R.ni),R.ni.normalize(),R.ni.scale(t.radius,R.ri),R.ri.vadd(i,R.ri),R.ri.vsub(o.position,R.ri),ie.pointToWorldFrame(s,r,p,p),p.vsub(l.position,R.rj),ie.vectorToWorldFrame(r,R.ni,R.ni),ie.vectorToWorldFrame(r,R.ri,R.ri),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}}T.length=0}planeTrimesh(t,e,i,s,a,r,o,l,c,u,f){const h=new w,d=QP;d.set(0,0,1),a.vmult(d,d);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const _=new w;_.copy(h),ie.pointToWorldFrame(s,r,_,h);const m=$P;if(h.vsub(i,m),d.dot(m)<=0){if(f)return!0;const v=this.createContactEquation(o,l,t,e,c,u);v.ni.copy(d);const y=JP;d.scale(m.dot(d),y),h.vsub(y,y),v.ri.copy(y),v.ri.vsub(o.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Da=new w,Nr=new w,Ur=new w,qP=new w,YP=new w,ZP=new Xe,KP=new Xe,QP=new w,$P=new w,JP=new w,tN=new w,eN=new w;new w;const nN=new w,iN=new w,sN=new w,aN=new w,rN=new w,oN=new w,lN=new w,cN=new w,uN=new w,hN=new w,fN=new w,dN=new Qn,pN=[],Tu=new w,oy=new w,mN=new w,gN=new w,vN=new w;function _N(n,t,e){let i=null;const s=n.length;for(let a=0;a!==s;a++){const r=n[a],o=mN;n[(a+1)%s].vsub(r,o);const l=gN;o.cross(t,l);const c=vN;e.vsub(r,c);const u=l.dot(c);if(i===null||u>0&&i===!0||u<=0&&i===!1){i===null&&(i=u>0);continue}else return!1}return!0}const Au=new w,yN=new w,xN=new w,SN=new w,bN=[new w,new w,new w,new w,new w,new w],MN=new w,EN=new w,wN=new w,TN=new w,AN=new w,CN=new w,RN=new w,DN=new w,LN=new w,PN=new w,NN=new w,UN=new w,ON=new w,zN=new w;new w;new w;const BN=new w,IN=new w,FN=new w,HN=new w,VN=new w,kN=new w,GN=new w,jN=new w,WN=new w,XN=new w,ly=new Xe,qN=new w;new w;const YN=new w,cy=new w,ZN=new w,KN=new w,QN=new w,$N=[0],JN=new w,tU=new w;class uy{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const i=e;e=t,t=i}return t<<16|e}set(t,e){const i=this.getKey(t,e),s=this.current;let a=0;for(;i>s[a];)a++;if(i!==s[a]){for(let r=s.length-1;r>=a;r--)s[r+1]=s[r];s[a]=i}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const i=this.current,s=this.previous,a=i.length,r=s.length;let o=0;for(let l=0;l<a;l++){let c=!1;const u=i[l];for(;u>s[o];)o++;c=u===s[o],c||hy(t,u)}o=0;for(let l=0;l<r;l++){let c=!1;const u=s[l];for(;u>i[o];)o++;c=i[o]===u,c||hy(e,u)}}}function hy(n,t){n.push((t&4294901760)>>16,t&65535)}const Id=(n,t)=>n<t?`${n}-${t}`:`${t}-${n}`;class eU{constructor(){this.data={keys:[]}}get(t,e){const i=Id(t,e);return this.data[i]}set(t,e,i){const s=Id(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=i}delete(t,e){const i=Id(t,e),s=this.data.keys.indexOf(i);s!==-1&&this.data.keys.splice(s,1),delete this.data[i]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const i=e.pop();delete t[i]}}}class fy extends db{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new lP,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new HP,this.constraints=[],this.narrowphase=new XP(this),this.collisionMatrix=new K_,this.collisionMatrixPrevious=new K_,this.bodyOverlapKeeper=new uy,this.shapeOverlapKeeper=new uy,this.contactmaterials=[],this.contactMaterialTable=new eU,this.defaultMaterial=new ff("default"),this.defaultContactMaterial=new hf(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,i){i instanceof Ih?this.raycastClosest(t,e,{skipBackfaces:!0},i):this.raycastAll(t,e,{skipBackfaces:!0},i)}raycastAll(t,e,i,s){return i===void 0&&(i={}),i.mode=je.ALL,i.from=t,i.to=e,i.callback=s,Fd.intersectWorld(this,i)}raycastAny(t,e,i,s){return i===void 0&&(i={}),i.mode=je.ANY,i.from=t,i.to=e,i.result=s,Fd.intersectWorld(this,i)}raycastClosest(t,e,i,s){return i===void 0&&(i={}),i.mode=je.CLOSEST,i.from=t,i.to=e,i.result=s,Fd.intersectWorld(this,i)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof St&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,i=this.bodies,s=i.indexOf(t);if(s!==-1){i.splice(s,1);for(let a=0;a!==i.length;a++)i[a].index=a;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let i=0;i<e.length;i++){const s=e[i].shapes;for(let a=0;a<s.length;a++){const r=s[a];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const i=Ze.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=i-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=i}step(t,e,i){if(i===void 0&&(i=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Ze.now();let a=0;for(;this.accumulator>=t&&a<i&&(this.internalStep(t),this.accumulator-=t,a++,!(Ze.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,i=rU,s=oU,a=this.bodies.length,r=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,f=St.DYNAMIC;let h=-1/0;const d=this.constraints,g=aU;l.length();const _=l.x,m=l.y,p=l.z;let v=0;for(c&&(h=Ze.now()),v=0;v!==a;v++){const P=r[v];if(P.type===f){const B=P.force,F=P.mass;B.x+=F*_,B.y+=F*m,B.z+=F*p}}for(let P=0,B=this.subsystems.length;P!==B;P++)this.subsystems[P].update();c&&(h=Ze.now()),i.length=0,s.length=0,this.broadphase.collisionPairs(this,i,s),c&&(u.broadphase=Ze.now()-h);let y=d.length;for(v=0;v!==y;v++){const P=d[v];if(!P.collideConnected)for(let B=i.length-1;B>=0;B-=1)(P.bodyA===i[B]&&P.bodyB===s[B]||P.bodyB===i[B]&&P.bodyA===s[B])&&(i.splice(B,1),s.splice(B,1))}this.collisionMatrixTick(),c&&(h=Ze.now());const x=sU,T=e.length;for(v=0;v!==T;v++)x.push(e[v]);e.length=0;const b=this.frictionEquations.length;for(v=0;v!==b;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,s,this,e,x,this.frictionEquations,g),c&&(u.narrowphase=Ze.now()-h),c&&(h=Ze.now()),v=0;v<this.frictionEquations.length;v++)o.addEquation(this.frictionEquations[v]);const E=e.length;for(let P=0;P!==E;P++){const B=e[P],F=B.bi,R=B.bj,j=B.si,O=B.sj;let W;if(F.material&&R.material?W=this.getContactMaterial(F.material,R.material)||this.defaultContactMaterial:W=this.defaultContactMaterial,W.friction,F.material&&R.material&&(F.material.friction>=0&&R.material.friction>=0&&F.material.friction*R.material.friction,F.material.restitution>=0&&R.material.restitution>=0&&(B.restitution=F.material.restitution*R.material.restitution)),o.addEquation(B),F.allowSleep&&F.type===St.DYNAMIC&&F.sleepState===St.SLEEPING&&R.sleepState===St.AWAKE&&R.type!==St.STATIC){const nt=R.velocity.lengthSquared()+R.angularVelocity.lengthSquared(),ct=R.sleepSpeedLimit**2;nt>=ct*2&&(F.wakeUpAfterNarrowphase=!0)}if(R.allowSleep&&R.type===St.DYNAMIC&&R.sleepState===St.SLEEPING&&F.sleepState===St.AWAKE&&F.type!==St.STATIC){const nt=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),ct=F.sleepSpeedLimit**2;nt>=ct*2&&(R.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,R,!0),this.collisionMatrixPrevious.get(F,R)||(sl.body=R,sl.contact=B,F.dispatchEvent(sl),sl.body=F,R.dispatchEvent(sl)),this.bodyOverlapKeeper.set(F.id,R.id),this.shapeOverlapKeeper.set(j.id,O.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Ze.now()-h,h=Ze.now()),v=0;v!==a;v++){const P=r[v];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(y=d.length,v=0;v!==y;v++){const P=d[v];P.update();for(let B=0,F=P.equations.length;B!==F;B++){const R=P.equations[B];o.addEquation(R)}}o.solve(t,this),c&&(u.solve=Ze.now()-h),o.removeAllEquations();const D=Math.pow;for(v=0;v!==a;v++){const P=r[v];if(P.type&f){const B=D(1-P.linearDamping,t),F=P.velocity;F.scale(B,F);const R=P.angularVelocity;if(R){const j=D(1-P.angularDamping,t);R.scale(j,R)}}}this.dispatchEvent(iU),c&&(h=Ze.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(v=0;v!==a;v++)r[v].integrate(t,S,L);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Ze.now()-h),this.stepnumber+=1,this.dispatchEvent(nU);let H=!0;if(this.allowSleep)for(H=!1,v=0;v!==a;v++){const P=r[v];P.sleepTick(this.time),P.sleepState!==St.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(os,ls),t){for(let a=0,r=os.length;a<r;a+=2)al.bodyA=this.getBodyById(os[a]),al.bodyB=this.getBodyById(os[a+1]),this.dispatchEvent(al);al.bodyA=al.bodyB=null}if(e){for(let a=0,r=ls.length;a<r;a+=2)rl.bodyA=this.getBodyById(ls[a]),rl.bodyB=this.getBodyById(ls[a+1]),this.dispatchEvent(rl);rl.bodyA=rl.bodyB=null}os.length=ls.length=0;const i=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((i||s)&&this.shapeOverlapKeeper.getDiff(os,ls),i){for(let a=0,r=os.length;a<r;a+=2){const o=this.getShapeById(os[a]),l=this.getShapeById(os[a+1]);cs.shapeA=o,cs.shapeB=l,o&&(cs.bodyA=o.body),l&&(cs.bodyB=l.body),this.dispatchEvent(cs)}cs.bodyA=cs.bodyB=cs.shapeA=cs.shapeB=null}if(s){for(let a=0,r=ls.length;a<r;a+=2){const o=this.getShapeById(ls[a]),l=this.getShapeById(ls[a+1]);us.shapeA=o,us.shapeB=l,o&&(us.bodyA=o.body),l&&(us.bodyB=l.body),this.dispatchEvent(us)}us.bodyA=us.bodyB=us.shapeA=us.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let i=0;i!==e;i++){const s=t[i];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new Qn;const Fd=new je,Ze=globalThis.performance||{};if(!Ze.now){let n=Date.now();Ze.timing&&Ze.timing.navigationStart&&(n=Ze.timing.navigationStart),Ze.now=()=>Date.now()-n}new w;const nU={type:"postStep"},iU={type:"preStep"},sl={type:St.COLLIDE_EVENT_NAME,body:null,contact:null},sU=[],aU=[],rU=[],oU=[],os=[],ls=[],al={type:"beginContact",bodyA:null,bodyB:null},rl={type:"endContact",bodyA:null,bodyB:null},cs={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},us={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Sb{constructor(t,e,i){this.obj=t,this.position=i,this.mesh=e,this.body,this.initMesh()}initMesh(){this.body=new St({type:St.DYNAMIC,mass:5,shape:new Mc(new w(.25,.25,.25))}),this.body.allowSleep=!0,this.body.sleepSpeedLimit=.5,this.body.sleepTimeLimit=1,this.body.position=new w(this.position.x,this.position.y+1,this.position.z),this.obj.addBody(this.body)}updateMesh(){let t=new w(this.body.position.x-this.position.x,this.body.position.y-this.position.y,this.body.position.z-this.position.z);this.mesh.position.copy(t)}}const lU=Object.freeze(Object.defineProperty({__proto__:null,Fragment:Sb},Symbol.toStringTag,{value:"Module"})),cU=/^[og]\s*(.+)?/,uU=/^mtllib /,hU=/^usemtl /,fU=/^usemap /,dy=/\s+/,py=new U,Hd=new U,my=new U,gy=new U,ni=new U,Cu=new _t;function dU(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,a){const r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:r!==void 0?r.smooth:this.smooth,groupStart:r!==void 0?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),s&&this.materials.length>1)for(let r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseNormalIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseUVIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/2)*2},addVertex:function(t,e,i){const s=this.vertices,a=this.object.geometry.vertices;a.push(s[t+0],s[t+1],s[t+2]),a.push(s[e+0],s[e+1],s[e+2]),a.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,i){const s=this.normals,a=this.object.geometry.normals;a.push(s[t+0],s[t+1],s[t+2]),a.push(s[e+0],s[e+1],s[e+2]),a.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(t,e,i){const s=this.vertices,a=this.object.geometry.normals;py.fromArray(s,t),Hd.fromArray(s,e),my.fromArray(s,i),ni.subVectors(my,Hd),gy.subVectors(py,Hd),ni.cross(gy),ni.normalize(),a.push(ni.x,ni.y,ni.z),a.push(ni.x,ni.y,ni.z),a.push(ni.x,ni.y,ni.z)},addColor:function(t,e,i){const s=this.colors,a=this.object.geometry.colors;s[t]!==void 0&&a.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&a.push(s[e+0],s[e+1],s[e+2]),s[i]!==void 0&&a.push(s[i+0],s[i+1],s[i+2])},addUV:function(t,e,i){const s=this.uvs,a=this.object.geometry.uvs;a.push(s[t+0],s[t+1]),a.push(s[e+0],s[e+1]),a.push(s[i+0],s[i+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,i,s,a,r,o,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(t,u),h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(i,u);if(this.addVertex(f,h,d),this.addColor(f,h,d),o!==void 0&&o!==""){const g=this.normals.length;f=this.parseNormalIndex(o,g),h=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(f,h,d)}else this.addFaceNormal(f,h,d);if(s!==void 0&&s!==""){const g=this.uvs.length;f=this.parseUVIndex(s,g),h=this.parseUVIndex(a,g),d=this.parseUVIndex(r,g),this.addUV(f,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let i=0,s=t.length;i<s;i++){const a=this.parseVertexIndex(t[i],e);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let a=0,r=t.length;a<r;a++)this.addVertexLine(this.parseVertexIndex(t[a],i));for(let a=0,r=e.length;a<r;a++)this.addUVLine(this.parseUVIndex(e[a],s))}};return n.startObject("",!1),n}class vy extends bc{constructor(t){super(t),this.materials=null}load(t,e,i,s){const a=this,r=new CD(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(o){try{e(a.parse(o))}catch(l){s?s(l):console.error(l),a.manager.itemError(t)}},i,s)}setMaterials(t){return this.materials=t,this}parse(t){const e=new dU;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const i=t.split(`
`);let s=[];for(let o=0,l=i.length;o<l;o++){const c=i[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const f=c.split(dy);switch(f[0]){case"v":e.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(Cu.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),e.colors.push(Cu.r,Cu.g,Cu.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":e.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const h=c.slice(1).trim().split(dy),d=[];for(let _=0,m=h.length;_<m;_++){const p=h[_];if(p.length>0){const v=p.split("/");d.push(v)}}const g=d[0];for(let _=1,m=d.length-1;_<m;_++){const p=d[_],v=d[_+1];e.addFace(g[0],p[0],v[0],g[1],p[1],v[1],g[2],p[2],v[2])}}else if(u==="l"){const f=c.substring(1).trim().split(" ");let h=[];const d=[];if(c.indexOf("/")===-1)h=f;else for(let g=0,_=f.length;g<_;g++){const m=f[g].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&d.push(m[1])}e.addLineGeometry(h,d)}else if(u==="p"){const h=c.slice(1).trim().split(" ");e.addPointGeometry(h)}else if((s=cU.exec(c))!==null){const f=(" "+s[0].slice(1).trim()).slice(1);e.startObject(f)}else if(hU.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(uU.test(c))e.materialLibraries.push(c.substring(7).trim());else if(fU.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const h=s[1].trim().toLowerCase();e.object.smooth=h!=="0"&&h!=="off"}else e.object.smooth=!0;const f=e.object.currentMaterial();f&&(f.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const a=new eo;if(a.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){const c=e.objects[o],u=c.geometry,f=c.materials,h=u.type==="Line",d=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const _=new On;_.setAttribute("position",new ze(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new ze(u.normals,3)),u.colors.length>0&&(g=!0,_.setAttribute("color",new ze(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new ze(u.uvs,2));const m=[];for(let v=0,y=f.length;v<y;v++){const x=f[v],T=x.name+"_"+x.smooth+"_"+g;let b=e.materials[T];if(this.materials!==null){if(b=this.materials.create(x.name),h&&b&&!(b instanceof Ol)){const E=new Ol;Ci.prototype.copy.call(E,b),E.color.copy(b.color),b=E}else if(d&&b&&!(b instanceof dl)){const E=new dl({size:10,sizeAttenuation:!1});Ci.prototype.copy.call(E,b),E.color.copy(b.color),E.map=b.map,b=E}}b===void 0&&(h?b=new Ol:d?b=new dl({size:1,sizeAttenuation:!1}):b=new MD,b.name=x.name,b.flatShading=!x.smooth,b.vertexColors=g,e.materials[T]=b),m.push(b)}let p;if(m.length>1){for(let v=0,y=f.length;v<y;v++){const x=f[v];_.addGroup(x.groupStart,x.groupCount,v)}h?p=new mm(_,m):d?p=new Zu(_,m):p=new Be(_,m)}else h?p=new mm(_,m[0]):d?p=new Zu(_,m[0]):p=new Be(_,m[0]);p.name=c.name,a.add(p)}else if(e.vertices.length>0){const o=new dl({size:1,sizeAttenuation:!1}),l=new On;l.setAttribute("position",new ze(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new ze(e.colors,3)),o.vertexColors=!0);const c=new Zu(l,o);a.add(c)}return a}}const _y={uniforms:{lightDirection:{value:new U(1,1,1)},lightColor:{value:new U(.8,.76,.5)},baseColor:{value:new U(.5,.5,.5)},type:{value:0},textureMap:{value:null},normalMap:{value:null},frame:{value:0},roofColor:{value:new U(.5,.5,.5)}},vertexShader:`


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
    `};class bb extends me{constructor(e,i,s){super();Ne(this,"shatterArray");Ne(this,"materialsArray");this.parent=e,this.height=i,this.blockBody,this.blockMesh,this.isShattered=!1,this.materialsArray=[],this.shatterArray=[],this.reclaimerProperties=s,this.physicsworld=s.physicsworld;let a=Math.min(this.height,3);this.material=this.reclaimerProperties.materialsArray[a],this.material.needsUpdate=!0}defaults(){let e=Math.min(this.height,3);this.material=this.reclaimerProperties.materialsArray[e],this.material.needsUpdate=!0}colourDebug(){this.material=this.reclaimerProperties.materialsArray[4],this.blockMesh.material=this.material}createBlock(e,i,s){this.position.set(e,i,s),this.blockBody=new St({type:St.DYNAMIC,mass:0,shape:new Mc(new w(.5,.5,.5)),collided:!1}),this.blockBody.position.set(e,i+.5,s),this.blockBody.allowSleep=!0,this.blockBody.sleepSpeedLimit=1,this.blockBody.sleepTimeLimit=1,this.physicsworld.addBody(this.blockBody),this.blockBody.addEventListener("collide",function(a){a.body.collided=!0}),this.loadModel(),this.parent.add(this.blockMesh)}loadModel(){let e=new me,i=new vy;new Be;let s=this.material,a="assets/Objects/Buildings/";this.height==0&&(a+="park1.obj"),this.height==1?a+="house1obj.obj":this.height==2?a+="apartment1.obj":a+="skyScraper1.obj",i.load(a,function(r){r.traverse(function(o){o instanceof Be&&(o.material=s,o.castShadow=!0,o.recieveShadow=!0)}),e.add(r)}),this.blockMesh=e}shatterBlock(){this.physicsworld.removeBody(this.blockBody),this.parent.remove(this.blockMesh),this.shatterArray=this.createCube(this.position.x,this.position.y+.5,this.position.z),this.shatterFrame=this.reclaimerProperties.reclaimFrame}createCube(e,i,s){let a=new me;a.position.set(e,i,s);let r=this.physicsworld,o=this.material,l=[];return new vy().load("assets/Objects/fracturedCube-cubes2.obj",function(u){u.traverse(function(f){if(f instanceof Be){f.material=o;var h=new U;f.geometry.computeBoundingBox();var d=f.geometry.boundingBox;h.subVectors(d.max,d.min),h.multiplyScalar(.5),h.add(d.min),h.add(a.position);let g=new Sb(r,f,h);l.push(g),g.updateMesh()}}),a.add(u)}),this.parent.add(a),l}unfreezeBlock(){this.shatterArray.length==0?(this.blockBody.mass=5,this.blockBody.updateMassProperties()):this.shatterArray.forEach(e=>{e.unfreezeMesh()})}freezeBlock(){this.shatterArray.length==0?(this.blockBody.mass=5,this.blockBody.updateMassProperties()):this.shatterArray.forEach(e=>{e.freezeMesh()})}updateBlock(){this.reclaimerProperties.reclaimFrame-this.shatterFrame>=3?(this.physicsworld.removeBody(this.blockBody),this.shatterArray.forEach(e=>{this.physicsworld.removeBody(e.body)})):this.shatterArray.length==0?(this.blockBody.collided&&!this.isShattered&&(this.isShattered=!0),this.blockMesh.position.copy(this.blockBody.position),this.blockMesh.quaternion.copy(this.blockBody.quaternion)):this.shatterArray.forEach(e=>{e.updateMesh()}),this.material.uniforms.frame.value=this.reclaimerProperties.reclaimFrame}}const pU=Object.freeze(Object.defineProperty({__proto__:null,BuildingBlock:bb},Symbol.toStringTag,{value:"Module"}));class Mb extends me{constructor(t,e,i){super(),this.parent=t,this.reclaimerProperties=i,this.physicsworld=i.physicsworld,this.height=e,this.buildingBlocks=[];const s={0:"Park",1:"House",2:"Apartment",3:"Skyscraper"};this.type=s[e]}colourDebug(){this.buildingBlocks.forEach(t=>{t.colourDebug()})}createBuilding(t,e,i){let s=this.reclaimerProperties.land.children[0].geometry.attributes.position;new Float32Array(s.count),new Float32Array(s.count);let r=0+.2;for(var o=0;o<this.height;o++){var l=new bb(this.parent,this.height,this.reclaimerProperties);l.createBlock(t-i/2,r+o,e-i/2),this.buildingBlocks.push(l)}}getRandomBlock(){return this.getBlock(Em(0,this.getHeight()-1))}getBlock(t){return this.buildingBlocks[t]}getPosition(){return this.position}getHeight(){return this.height}getType(){return this.type}setType(t){this.type=t}getBlock(t){return t<=this.height?this.buildingBlocks[t]:null}freezeBuilding(){this.buildingBlocks.forEach(t=>{t.freezeBlock()})}unfreezeBuilding(){this.buildingBlocks.forEach(t=>{t.unfreezeBlock()})}updateBuilding(){this.buildingBlocks.forEach(t=>{t.updateBlock()})}}const mU=Object.freeze(Object.defineProperty({__proto__:null,Building:Mb},Symbol.toStringTag,{value:"Module"}));class Eb extends me{constructor(e,i,s){super();Ne(this,"size",0);Ne(this,"citySize",0);Ne(this,"n",null);this.parent=e,this.citySize=i*5,this.size=i,this.buildings=[],this.reclaimerProperties=s,this.centerX=Math.floor(this.citySize/2),this.centerZ=Math.floor(this.citySize/2);let a=.1;this.density=1,this.map=new Array(this.citySize);for(let r=0;r<this.citySize;r++){this.map[r]=new Array(this.citySize);for(let o=0;o<this.citySize;o++){const l=Math.abs(this.centerX-r),c=Math.abs(this.centerZ-o),u=Math.sqrt(l*l+c*c),f=Math.max(0,1-u/Math.max(this.centerX,this.centerZ))*this.density;if(Math.random()>f)this.map[r][o]={type:"park",height:0,building:null};else if(r%2==1||o%2==1)this.map[r][o]={type:"road",height:0,building:null};else{let h=Math.max(this.gaussianHeight(this.citySize,this.density,u),1),d=Math.max(this.noiseHeight(this.citySize,this.density,u),1),g=Math.max(1,Math.floor(a*d+h*(1-a)));this.map[r][o]={type:"building",height:g,building:null};let _=new Mb(e,this.map[r][o].height,this.reclaimerProperties);this.map[r][o].building=_,_.height>0&&this.buildings.push(_),_.createBuilding(r,o,this.citySize),_.updateBuilding()}}}}getBuildingsCount(){return this.buildings.length}getTileFromMap(e,i){return this.map[e][i].building}getRandomBuildings(e){let i=[];for(let s=0;s<e;s++){let a=this.getRandomBuilding();i.push(a)}return i}getRandomBuilding(){return this.buildings[Em(0,this.buildings.length)]}getBuildingsSurrounding(e,i){let s=[this.getBuilding(e,i+2),this.getBuilding(e+2,i),this.getBuilding(e,i-2),this.getBuilding(e-2,i)];return s.forEach(a=>{a.colourDebug()}),s}updateBuildings(){this.buildings.forEach(e=>{e.updateBuilding()})}gaussianHeight(e,i,s){return gU(s*2,Math.min(e*e*i/125.5,10),e/6)}noiseHeight(e,i){return Em(0,Math.min(e*e*i/255,20))}}function gU(n,t,e){return t*Math.exp(-Math.pow(n/e,2))}const vU=Object.freeze(Object.defineProperty({__proto__:null,City:Eb},Symbol.toStringTag,{value:"Module"}));class _U extends Be{constructor(t,e={}){super(t),this.isWater=!0;const i=this,s=e.textureWidth!==void 0?e.textureWidth:512,a=e.textureHeight!==void 0?e.textureHeight:512,r=e.clipBias!==void 0?e.clipBias:0,o=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,u=e.sunDirection!==void 0?e.sunDirection:new U(.70707,.70707,0),f=new _t(e.sunColor!==void 0?e.sunColor:16777215),h=new _t(e.waterColor!==void 0?e.waterColor:8355711),d=e.eye!==void 0?e.eye:new U(0,0,0),g=e.distortionScale!==void 0?e.distortionScale:20,_=e.side!==void 0?e.side:Rs,m=e.fog!==void 0?e.fog:!1,p=new fs,v=new U,y=new U,x=new U,T=new ue,b=new U(0,0,-1),E=new Fe,D=new U,M=new U,S=new Fe,L=new ue,H=new En,P=new Rn(s,a),B={name:"MirrorShader",uniforms:Xn.merge([dt.fog,dt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ue},sunColor:{value:new _t(8355711)},sunDirection:{value:new U(.70707,.70707,0)},eye:{value:new U},waterColor:{value:new _t(5592405)}}]),vertexShader:`
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
				}`},F=new be({name:B.name,uniforms:Xn.clone(B.uniforms),vertexShader:B.vertexShader,fragmentShader:B.fragmentShader,lights:!0,side:_,fog:m});F.uniforms.mirrorSampler.value=P.texture,F.uniforms.textureMatrix.value=L,F.uniforms.alpha.value=o,F.uniforms.time.value=l,F.uniforms.normalSampler.value=c,F.uniforms.sunColor.value=f,F.uniforms.waterColor.value=h,F.uniforms.sunDirection.value=u,F.uniforms.distortionScale.value=g,F.uniforms.eye.value=d,i.material=F,i.onBeforeRender=function(R,j,O){if(y.setFromMatrixPosition(i.matrixWorld),x.setFromMatrixPosition(O.matrixWorld),T.extractRotation(i.matrixWorld),v.set(0,0,1),v.applyMatrix4(T),D.subVectors(y,x),D.dot(v)>0)return;D.reflect(v).negate(),D.add(y),T.extractRotation(O.matrixWorld),b.set(0,0,-1),b.applyMatrix4(T),b.add(x),M.subVectors(y,b),M.reflect(v).negate(),M.add(y),H.position.copy(D),H.up.set(0,1,0),H.up.applyMatrix4(T),H.up.reflect(v),H.lookAt(M),H.far=O.far,H.updateMatrixWorld(),H.projectionMatrix.copy(O.projectionMatrix),L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),L.multiply(H.projectionMatrix),L.multiply(H.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(v,y),p.applyMatrix4(H.matrixWorldInverse),E.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const W=H.projectionMatrix;S.x=(Math.sign(E.x)+W.elements[8])/W.elements[0],S.y=(Math.sign(E.y)+W.elements[9])/W.elements[5],S.z=-1,S.w=(1+W.elements[10])/W.elements[14],E.multiplyScalar(2/E.dot(S)),W.elements[2]=E.x,W.elements[6]=E.y,W.elements[10]=E.z+1-r,W.elements[14]=E.w,d.setFromMatrixPosition(O.matrixWorld);const nt=R.getRenderTarget(),ct=R.xr.enabled,rt=R.shadowMap.autoUpdate;i.visible=!1,R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(P),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(j,H),i.visible=!0,R.xr.enabled=ct,R.shadowMap.autoUpdate=rt,R.setRenderTarget(nt);const Nt=O.viewport;Nt!==void 0&&R.state.viewport(Nt)}}}class df extends Be{constructor(){const t=df.SkyShader,e=new be({name:t.name,uniforms:Xn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Cn,depthWrite:!1});super(new _a(1,1,1),e),this.isSky=!0}}df.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
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

		}`};class wb{constructor(t,e){let i,s;s=new U;const a=new da(1e4,1e4);i=new _U(a,{textureWidth:512,textureHeight:512,waterNormals:new Ku().load("assets/Textures/waternormals.jpg",function(c){c.wrapS=c.wrapT=Co}),sunDirection:new U,sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:t.fog!==void 0}),i.rotation.x=-Math.PI/2,i.position.y=-10,t.add(i);const r=new df;r.scale.setScalar(1e4),t.add(r);const o=r.material.uniforms;o.turbidity.value=10,o.rayleigh.value=2,o.mieCoefficient.value=.005,o.mieDirectionalG.value=.8;let l={elevation:2,azimuth:180};this.parameters=l,new Ph(e),this.water=i,this.sun=s,this.sky=r,this.scene=t,this.renderer=e,this.parameters=l,this.updateSun(t,e,l)}updateSun(t,e,i){let s=this.sun,a=this.sky,r=this.water;this.parameters=i;const o=new Ph(e);let l;const c=Lh.degToRad(90-this.parameters.elevation),u=Lh.degToRad(this.parameters.azimuth);s.setFromSphericalCoords(1,c,u),a.material.uniforms.sunPosition.value.copy(s),r.material.uniforms.sunDirection.value.copy(s).normalize(),l!==void 0&&l.dispose(),l=o.fromScene(a),o.dispose(),t.environment=l.texture}update(){this.water.material.uniforms.time.value+=.5/60}}const yU=Object.freeze(Object.defineProperty({__proto__:null,Environment:wb},Symbol.toStringTag,{value:"Module"}));class Tb extends hb{constructor(t){super(t),console.log("Reclaimer Scene created with params:",t),this.scene.name="Reclaimer",this.frame=0,this.reclaimFrame=0,this.isReclaiming=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=g1,this.composer.addPass(new ib(this.scene,this.camera)),this.composer.addPass(new vs(this.scene,this.camera,0,0)),this.composer.addPass(new nr({x:screen.width,y:screen.height},.7,0,.85)),this.renderer.toneMapping=T0,this.renderer.toneMappingExposure=1,this.physicsworld=new fy({gravity:new w(0,-9.82,0),quatNormalizeFast:!0,quatNormalizeSkip:8}),console.log("Rec renderer:",this.renderer),console.log("Rec Cam:",this.camera);const e=new fy({gravity:new w(0,-9.82,0),quatNormalizeFast:!0,quatNormalizeSkip:8});function i(){const M=new St({type:St.STATIC,shape:new IP});return M.quaternion.setFromEuler(-Math.PI/2,0,0),M.position.set(0,.2,0),M}e.addBody(i());const s=new _a,a=new Fo({color:65280}),r=new Be(s,a);this.scene.add(r);let o={size:20,sunHelper:!1},l={octaves:8,persistence:.5,lacunarity:2,scale:1,height:100,falloff:.1,speed:5e-4,noiseType:"Perlin",noise:"fbm",iterations:3,resolution:511,enableFog:!0,enableShadows:!0,heightMap:new ln};this.environment=new wb(this.scene,this.renderer);let c=this.environment.sun,u=[],f={scene:this.scene,physicsworld:e,environment:this.environment,sunDirection:c,frame:this.frame,reclaimFrame:this.reclaimFrame,materialsArray:u,renderer:this.renderer},h=new me;this.scene.add(h);let d=new me;d.name="land",this.scene.add(d),new fb(o.size,l,c,f).ChunkManager(d),f.land=d;let g=new _t(.25,.25,.5),_=new Ku().load("assets/Textures/GlassWindow/Glass_Window_003_basecolor.jpg"),m=new Ku().load("assets/Textures/GlassWindow/Glass_Window_003_normal.jpg"),p=new _t(14053929),v=new Ku().load("assets/Textures/Bricks/Brick_Wall_019_basecolor.jpg"),y=new _t(16636755),x=new _t(.9,.05,.05),T=new be({side:Si,uniforms:Xn.merge([dt.fog])});T.uniforms={lightDirection:{value:f.sunDirection},baseColor:{value:g},textureMap:{value:_},normalMap:{value:m},frame:{value:f.scene.frame},type:{value:3},roofColor:{value:x}},T.vertexShader=_y.vertexShader,T.fragmentShader=_y.fragmentShader,T.needsUpdate=!0;let b=T.clone();b.uniforms.lightDirection.value=f.sunDirection,b.uniforms.baseColor.value=p,b.uniforms.textureMap.value=v,b.uniforms.type.value=2,b.needsUpdate=!0;let E=T.clone();E.uniforms.baseColor.value=y,E.uniforms.textureMap.value=null,E.uniforms.type.value=1,E.uniforms.lightDirection.value=f.sunDirection,E.needsUpdate=!0;let D=T.clone();D.uniforms.baseColor.value=new _t(1,1,0),f.materialsArray.push(null),f.materialsArray.push(E),f.materialsArray.push(b),f.materialsArray.push(T),f.materialsArray.push(D),new Eb(h,o.size,f),console.log("Reclaimer final:",this)}update(t){eb(t),this.environment.update()}}const xU=Object.freeze(Object.defineProperty({__proto__:null,sc_Reclaimer:Tb},Symbol.toStringTag,{value:"Module"}));function SU(n,t){const e=n.current;if(!e)return;let i=new rc,s=null,a=i,r=new K1({antialias:!0});const o=window.devicePixelRatio||1;r.setSize(e.offsetWidth,e.offsetHeight),r.setPixelRatio(o),r.domElement.width=e.offsetWidth,r.domElement.height=e.offsetHeight,e.appendChild(r.domElement);let l={FOV:55},c=new En(l.FOV,e.offsetWidth/e.offsetHeight,.1,1e3);c.position.set(-20,5,-20),c.lookAt(0,0,0),r.setSize(window.innerWidth,window.innerHeight),r.outputColorSpace=yi;let u=new iL(r);u.setPixelRatio(window.devicePixelRatio),u.setSize(e.offsetWidth,e.offsetHeight);const f=new ib(a,c);u.addPass(f);const h=new vs(a,c,0,0);u.addPass(h),u.addPass(new nr({x:e.offsetWidth,y:e.offsetHeight},.7,0,.85));const d=new oL;u.addPass(d),r.toneMapping=w0,r.toneMappingExposure=1;function g(P){f.scene=P,h.scene=P}let _=M();function m(){let P=new Tb({camera:c,composer:u,renderer:r,gui:_});s=P,a=P.getScene(),g(a)}const p=new UD(5);i.add(p);const v=new _a,y=new Fo({color:65280});new Be(v,y);let x=new _t(.5,.72,1);const T=new ND(x,.5);i.add(T);let b=new _t(1,.98,.8);const E=new LD(b,1);E.castShadow=!0,E.position.set(30,15,30),E.lookAt(0,0,50),i.add(E);let D=new FD(c,r.domElement);function M(){let P=new RL({autoPlace:!1});return P.addFolder("General"),P.close(),console.log("datGUI container:"+e),P}const S=P=>{r.setSize(e.offsetWidth,e.offsetHeight),u.setSize(e.offsetWidth,e.offsetHeight),u.setPixelRatio(window.devicePixelRatio),c.aspect=e.offsetWidth/e.offsetHeight,c.updateProjectionMatrix()};window.addEventListener("resize",S),m();const L=new k0;let H=P=>{D.update(),eb(P);const B=L.getDelta();u.render(),s&&s.update(B),requestAnimationFrame(H)};return requestAnimationFrame(H),{handleResize:S,scene:i,cleanup:()=>{window.removeEventListener("resize",S),r.dispose(),e.removeChild(r.domElement)}}}const bU=({darkMode:n})=>I.jsxs("div",{style:{textAlign:"center"},children:[I.jsx("h2",{children:"Interactive Media"}),I.jsxs("div",{id:"flexLB",style:{display:"flex",flexWrap:"wrap",gap:"2rem",margin:"auto"},children:[I.jsx("div",{className:"column-content",id:"pf3js",style:{maxHeight:"600px",minWidth:"250px",minHeight:"250px",maxWidth:"900px"},children:I.jsx(d1,{darkMode:n,containerID:"pf3js",threeJSEntry:SU})}),I.jsx("div",{style:{flex:"1",minWidth:"400px"},children:I.jsx("p",{children:"Interactive visualizations, simulations, and animations using react, three.js"})})]})]}),Ru={uniforms:{time:{value:0},noiseScale:{value:1},noiseStrength:{value:.2},noiseFrequency:{value:5},noiseSpeed:{value:.1},noiseOffset:{value:new U(0,0,0)},color:{value:new _t(16777215)},bgColor:{value:new _t(0)}},vertexShader:`
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
  `},Du={uniforms:{time:{value:0},pointSize:{value:20},noiseScale:{value:1},noiseStrength:{value:.2},noiseFrequency:{value:5},noiseSpeed:{value:.1},noiseOffset:{value:new U(0,0,0)},color:{value:new _t(16777215)},bgColor:{value:new _t(0)}},vertexShader:`
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
    `};function MU(n,t){let e=n.current;if(!e)return;const i=new K1({antialias:!0}),s=window.devicePixelRatio||1;i.setSize(e.offsetWidth,e.offsetHeight),i.setPixelRatio(s),e.appendChild(i.domElement);const a=window.getComputedStyle(t).backgroundColor,r=new rc;console.log(a),r.background=new _t(a);const o=new En(40,e.offsetWidth/e.offsetHeight,.1,1e3);o.position.z=10.5;const l=new eo;r.add(l),l.add(o);const c=new da(10,10,100,100);let u=0,f=new be(Ru);f.uniforms=Ru.uniforms,f.transparent=!0,f.vertexShader=Ru.vertexShader,f.fragmentShader=Ru.fragmentShader,f.uniforms.bgColor.value=new _t(a),f.wireframe=!0;let h=new be(Du);h.uniforms=Du.uniforms,h.transparent=!0,h.vertexShader=Du.vertexShader,h.fragmentShader=Du.fragmentShader;const d=new Be(c,f);d.position.set(0,-.2,5.1),d.rotation.x=-Math.PI/2,r.add(d);const g=new Zu(c,h);g.position.set(0,-.2,5.1),g.rotation.x=-Math.PI/2,r.add(g);const _={};_.x=0,_.y=0,window.addEventListener("mousemove",D=>{_.x=(D.clientX/visualViewport.width-.5)*2,_.y=(D.clientY/visualViewport.height-.5)*2});let m=.5;window.addEventListener("scroll",()=>{const D=document.documentElement.scrollHeight-window.innerHeight;m=window.scrollY/D},{passive:!0});const p=D=>{i.setSize(e.offsetWidth,e.offsetHeight),o.aspect=e.offsetWidth/e.offsetHeight,o.updateProjectionMatrix()};window.addEventListener("resize",p);const v=new k0;let y=0,x=!1;const T=(D,M,S,L)=>D*Math.max(0,1-Math.pow(Math.abs(M/S),L)),b=()=>{const D=v.getElapsedTime(),M=D-y;u+=M,y=D,f.uniforms.time.value=u,h.uniforms.time.value=u,x||(p(),x=!0);const S=_.x,L=-_.y;o.position.x+=T((S-o.position.x)*.05*M,o.position.x,1,1),o.position.y+=T((L-o.position.y)*.05*M,o.position.y,1,1),o.lookAt(0,0,0),l.position.y=-(m-.2),i.render(r,o),requestAnimationFrame(b)};return b(),{handleResize:p,handleDarkModeChange:()=>{console.log("Dark Mode Changed");const D=window.getComputedStyle(t).backgroundColor;new _t(D);const M=D.match(/\d+/g).map(Number),S=new _t(1-M[0]/255,1-M[1]/255,1-M[2]/255);console.log("BackgroundColor: ",D),r.background=new _t(D),f.uniforms.bgColor.value=new _t(D),f.uniforms.color.value=new _t(S),console.log("ForegroundColor: ",S),h.uniforms.color.value=new _t(S),f.uniforms.color.value=new _t(S)},scene:r,cleanup:()=>{window.removeEventListener("resize",p),i.dispose(),e.removeChild(i.domElement)}}}const EU=({darkMode:n,handleOpenLightbox:t})=>{const e=n?"white":"#333";return I.jsxs(b0,{style:{justifyContent:"center",gap:"2rem"},childStyle:{minWidth:"400px"},children:[I.jsxs("div",{className:`portfolioCard ${n?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>t(I.jsx(qw,{}),{height:"80vh"}),children:[I.jsx("h2",{style:{color:e},children:"GameDev"}),I.jsx("h3",{children:"Games, game engines, physics and rendering"}),I.jsx("img",{src:"assets/Images/Gloria_Armada.png",alt:"Gloria Armada",style:{maxWidth:"100%",objectFit:"contain",alignSelf:"normal",height:"auto"}})]}),I.jsxs("div",{className:`portfolioCard ${n?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>t(I.jsx(Yw,{darkMode:n}),{height:"80vh"}),children:[I.jsx("h2",{style:{color:e},children:"Data Analysis"}),I.jsx("p",{children:"Using data to uncover insights, drive business decisions, and create actionable solutions, with expertise in statistical analysis, machine learning, and visualization."}),I.jsx("img",{src:"assets/Images/tableau.webp",alt:"tableau",style:{maxWidth:"100%",objectFit:"contain",alignSelf:"normal",height:"auto"}})]}),I.jsxs("div",{className:`portfolioCard ${n?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>t(I.jsx(bU,{darkMode:n}),{height:"80vh"}),children:[I.jsx("h2",{style:{textAlign:"center"},children:"Interactive Media"}),I.jsx("p",{children:"Interactive visualizations, simulations, and animations using react, three.js"}),I.jsx("div",{className:"column-content",id:"threejsContainer",children:I.jsx(d1,{darkMode:n,containerID:"threejsContainer",threeJSEntry:MU})})]})]})},wU=({darkMode:n,handleOpenLightbox:t,scrollToSection:e})=>I.jsxs("div",{className:"container",children:[I.jsxs("div",{className:"column",style:{flexGrow:"0"},children:[I.jsxs("div",{style:{flex:"1",flexDirection:"vertical"},children:[I.jsx("div",{style:{justifyContent:"center"},children:I.jsx("h2",{style:{textAlign:"left",fontSize:"36",textWrap:"wrap",paddingLeft:"0rem"},children:"Let's make something amazing together!"})}),I.jsxs("p",{style:{lineHeight:"1.5rem"},children:["I am a software engineer with a passion for creating innovative solutions. ",I.jsx("br",{})," I have experience in various programming languages and frameworks. ",I.jsx("br",{})," I enjoy collaborating with teams and solving complex problems."]})]}),I.jsx(p1,{darkMode:n,scrollToSection:e})]}),I.jsx("div",{className:"column",margin:"4rem",padding:"4rem",style:{flexShrink:"3"},children:I.jsx("img",{src:"assets/Images/Profile.png",alt:"Profile",style:{maxWidth:"300px",verticalAlign:"middle",height:"auto"}})})]}),TU=()=>{const[n,t]=kt.useState(!0),[e,i]=kt.useState(!1),[s,a]=kt.useState("Test"),[r,o]=kt.useState(null),l=Object.assign({"./Scenes/CSSRenderer/CSSRenderer.js":()=>Fn(()=>import("./CSSRenderer-CqLeATZj.js"),[]),"./Scenes/Intro/introScene.js":()=>Fn(()=>import("./introScene-BHLNfSaO.js"),__vite__mapDeps([0,1])),"./Scenes/Intro/terrainScene.js":()=>Fn(()=>import("./terrainScene-B-ZCohrm.js"),__vite__mapDeps([2,1])),"./Scenes/Reclaimer/Building.js":()=>Fn(()=>Promise.resolve().then(()=>mU),void 0),"./Scenes/Reclaimer/BuildingBlock.js":()=>Fn(()=>Promise.resolve().then(()=>pU),void 0),"./Scenes/Reclaimer/City.js":()=>Fn(()=>Promise.resolve().then(()=>vU),void 0),"./Scenes/Reclaimer/Environment.js":()=>Fn(()=>Promise.resolve().then(()=>yU),void 0),"./Scenes/Reclaimer/Fragment.js":()=>Fn(()=>Promise.resolve().then(()=>lU),void 0),"./Scenes/Reclaimer/Reclaimer.js":()=>Fn(()=>Promise.resolve().then(()=>xU),void 0),"./Scenes/Reclaimer/Vine.js":()=>Fn(()=>import("./Vine-DPsQUJlG.js"),[]),"./Scenes/Reclaimer/landscape.js":()=>Fn(()=>Promise.resolve().then(()=>UL),void 0),"./Scenes/SampleScene/sampleScene.js":()=>Fn(()=>import("./sampleScene-ZY-Bsmgb.js"),[]),"./Scenes/sceneBase.js":()=>Fn(()=>Promise.resolve().then(()=>NL),void 0)});async function c(){const m=[];for(const p in l){const v=await l[p]();for(const y in v)typeof v[y]=="function"&&y.startsWith("sc_")&&m.push(v[y])}return m}c().then(m=>{console.log("Loaded scenes:",m)}),kt.useEffect(()=>{setTimeout(()=>{window.scrollTo(0,0)},5)},[]);const[u,f]=kt.useState(!1);kt.useEffect(()=>{const m=()=>{f(!0),window.removeEventListener("scroll",m)};return window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}},[]);const h=()=>{const m=document.getElementById("contactMe");m!=null?m.scrollIntoView({behavior:"smooth",block:"start"}):console.error("Target section not found")},d=(m,p)=>{document.body.classList.add("no-scroll"),history.pushState({lightboxOpen:!0},"","#lightbox"),a(m),o(p),i(!0)},g=()=>{var m;document.body.classList.remove("no-scroll"),i(!1),(m=history.state)!=null&&m.lightboxOpen&&setTimeout(()=>history.back(),100)};window.addEventListener("popstate",m=>{var p;(p=m.state)!=null&&p.lightboxOpen&&g()});const _=()=>{t(m=>{const p=!m;return document.body.className=p?"dark-mode":"light-mode",p})};return I.jsxs("div",{className:"app",children:[I.jsx(Iw,{darkMode:n,isOpen:e,content:s,style:r,onClose:g}),I.jsx(Ww,{darkMode:n,toggleDarkMode:_}),I.jsxs("main",{className:`main ${n?"dark-mode":"light-mode"}`,children:[I.jsx(mr,{title:"Greetings",darkMode:n,style:{paddingTop:"1rem",height:"80vh"},revealPercent:"-50% 0px",children:I.jsx(wU,{darkMode:n,scrollToSection:h})}),I.jsx(mr,{title:"Overview",darkMode:n,style:{padding:"20 0"},children:I.jsx(EU,{darkMode:n,handleOpenLightbox:d})}),I.jsx(mr,{title:"Skills",darkMode:n,children:I.jsx(jw,{darkMode:n,children:" "})}),I.jsxs(mr,{title:"ContactMe",id:"contactMe",darkMode:n,revealPercent:"50px 0px",style:{backgroundColor:"#0061aa",paddingBottom:"1rem",paddingTop:"1rem"},children:[I.jsx("h2",{style:{textAlign:"center",color:"white",marginTop:"0px"},children:"Get In Touch!"}),I.jsx(wh,{darkMode:n,text:"Contact",style:{color:"white",borderColor:"white",borderRadius:"5px"},onClick:()=>d(I.jsx(Vw,{darkMode:n}),{height:"unset"})})]}),I.jsx(mr,{title:"Portfolio",darkMode:n,style:{padding:"0px"}}),I.jsx(mr,{title:"Footer",darkMode:n,revealPercent:"50px 0px",children:I.jsx(Xw,{darkMode:n})})]})]})};Dw.createRoot(document.getElementById("root")).render(I.jsx(Hh.StrictMode,{children:I.jsx(TU,{})}));export{ND as A,xc as B,_t as C,Si as D,Il as E,DL as I,FU as L,Fo as M,me as O,da as P,hb as S,J1 as T,U as V,be as a,Be as b,ue as c,rD as d,zU as e,IU as f,_a as g,BU as h,PL as r};
