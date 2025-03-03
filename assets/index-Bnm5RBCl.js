const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Building-DG6dX7z8.js","assets/BuildingBlock-CjzO6Gh7.js","assets/Fragment-DgXTwJ0G.js","assets/City-Bygalz_h.js","assets/Reclaimer-pLWv8uB7.js","assets/landscape-DbDn1J1F.js","assets/Environment-KckQum6Z.js"])))=>i.map(i=>d[i]);
var vb=Object.defineProperty;var yb=(t,e,n)=>e in t?vb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Fo=(t,e,n)=>yb(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function ny(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iy={exports:{}},Cf={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb=Symbol.for("react.transitional.element"),Sb=Symbol.for("react.fragment");function ay(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:xb,type:t,key:i,ref:e!==void 0?e:null,props:n}}Cf.Fragment=Sb;Cf.jsx=ay;Cf.jsxs=ay;iy.exports=Cf;var P=iy.exports,ry={exports:{}},it={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=Symbol.for("react.transitional.element"),Mb=Symbol.for("react.portal"),bb=Symbol.for("react.fragment"),Eb=Symbol.for("react.strict_mode"),Tb=Symbol.for("react.profiler"),Ab=Symbol.for("react.consumer"),wb=Symbol.for("react.context"),Cb=Symbol.for("react.forward_ref"),Rb=Symbol.for("react.suspense"),Db=Symbol.for("react.memo"),sy=Symbol.for("react.lazy"),Vg=Symbol.iterator;function Lb(t){return t===null||typeof t!="object"?null:(t=Vg&&t[Vg]||t["@@iterator"],typeof t=="function"?t:null)}var oy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ly=Object.assign,cy={};function Ao(t,e,n){this.props=t,this.context=e,this.refs=cy,this.updater=n||oy}Ao.prototype.isReactComponent={};Ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uy(){}uy.prototype=Ao.prototype;function cm(t,e,n){this.props=t,this.context=e,this.refs=cy,this.updater=n||oy}var um=cm.prototype=new uy;um.constructor=cm;ly(um,Ao.prototype);um.isPureReactComponent=!0;var kg=Array.isArray,Ht={H:null,A:null,T:null,S:null},fy=Object.prototype.hasOwnProperty;function fm(t,e,n,i,a,r){return n=r.ref,{$$typeof:lm,type:t,key:e,ref:n!==void 0?n:null,props:r}}function Pb(t,e){return fm(t.type,e,void 0,void 0,void 0,t.props)}function hm(t){return typeof t=="object"&&t!==null&&t.$$typeof===lm}function Ub(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gg=/\/+/g;function ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ub(""+t.key):e.toString(36)}function jg(){}function Nb(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(jg,jg):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ds(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case lm:case Mb:s=!0;break;case sy:return s=t._init,Ds(s(t._payload),e,n,i,a)}}if(s)return a=a(t),s=i===""?"."+ih(t,0):i,kg(a)?(n="",s!=null&&(n=s.replace(Gg,"$&/")+"/"),Ds(a,e,n,"",function(c){return c})):a!=null&&(hm(a)&&(a=Pb(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(Gg,"$&/")+"/")+s)),e.push(a)),1;s=0;var o=i===""?".":i+":";if(kg(t))for(var l=0;l<t.length;l++)i=t[l],r=o+ih(i,l),s+=Ds(i,e,n,r,a);else if(l=Lb(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+ih(i,l++),s+=Ds(i,e,n,r,a);else if(r==="object"){if(typeof t.then=="function")return Ds(Nb(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function Sc(t,e,n){if(t==null)return t;var i=[],a=0;return Ds(t,i,"","",function(r){return e.call(n,r,a++)}),i}function Ob(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xg=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function zb(){}it.Children={map:Sc,forEach:function(t,e,n){Sc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sc(t,function(){e++}),e},toArray:function(t){return Sc(t,function(e){return e})||[]},only:function(t){if(!hm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};it.Component=Ao;it.Fragment=bb;it.Profiler=Tb;it.PureComponent=cm;it.StrictMode=Eb;it.Suspense=Rb;it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ht;it.act=function(){throw Error("act(...) is not supported in production builds of React.")};it.cache=function(t){return function(){return t.apply(null,arguments)}};it.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=ly({},t.props),a=t.key,r=void 0;if(e!=null)for(s in e.ref!==void 0&&(r=void 0),e.key!==void 0&&(a=""+e.key),e)!fy.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return fm(t.type,a,void 0,void 0,r,i)};it.createContext=function(t){return t={$$typeof:wb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Ab,_context:t},t};it.createElement=function(t,e,n){var i,a={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)fy.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return fm(t,r,void 0,void 0,null,a)};it.createRef=function(){return{current:null}};it.forwardRef=function(t){return{$$typeof:Cb,render:t}};it.isValidElement=hm;it.lazy=function(t){return{$$typeof:sy,_payload:{_status:-1,_result:t},_init:Ob}};it.memo=function(t,e){return{$$typeof:Db,type:t,compare:e===void 0?null:e}};it.startTransition=function(t){var e=Ht.T,n={};Ht.T=n;try{var i=t(),a=Ht.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(zb,Xg)}catch(r){Xg(r)}finally{Ht.T=e}};it.unstable_useCacheRefresh=function(){return Ht.H.useCacheRefresh()};it.use=function(t){return Ht.H.use(t)};it.useActionState=function(t,e,n){return Ht.H.useActionState(t,e,n)};it.useCallback=function(t,e){return Ht.H.useCallback(t,e)};it.useContext=function(t){return Ht.H.useContext(t)};it.useDebugValue=function(){};it.useDeferredValue=function(t,e){return Ht.H.useDeferredValue(t,e)};it.useEffect=function(t,e){return Ht.H.useEffect(t,e)};it.useId=function(){return Ht.H.useId()};it.useImperativeHandle=function(t,e,n){return Ht.H.useImperativeHandle(t,e,n)};it.useInsertionEffect=function(t,e){return Ht.H.useInsertionEffect(t,e)};it.useLayoutEffect=function(t,e){return Ht.H.useLayoutEffect(t,e)};it.useMemo=function(t,e){return Ht.H.useMemo(t,e)};it.useOptimistic=function(t,e){return Ht.H.useOptimistic(t,e)};it.useReducer=function(t,e,n){return Ht.H.useReducer(t,e,n)};it.useRef=function(t){return Ht.H.useRef(t)};it.useState=function(t){return Ht.H.useState(t)};it.useSyncExternalStore=function(t,e,n){return Ht.H.useSyncExternalStore(t,e,n)};it.useTransition=function(){return Ht.H.useTransition()};it.version="19.0.0";ry.exports=it;var F=ry.exports;const Rf=ny(F);var hy={exports:{}},Df={},dy={exports:{}},py={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,q){var V=N.length;N.push(q);e:for(;0<V;){var le=V-1>>>1,ue=N[le];if(0<a(ue,q))N[le]=q,N[V]=ue,V=le;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var q=N[0],V=N.pop();if(V!==q){N[0]=V;e:for(var le=0,ue=N.length,Se=ue>>>1;le<Se;){var We=2*(le+1)-1,Qe=N[We],Z=We+1,oe=N[Z];if(0>a(Qe,V))Z<ue&&0>a(oe,Qe)?(N[le]=oe,N[Z]=V,le=Z):(N[le]=Qe,N[We]=V,le=We);else if(Z<ue&&0>a(oe,V))N[le]=oe,N[Z]=V,le=Z;else break e}}return q}function a(N,q){var V=N.sortIndex-q.sortIndex;return V!==0?V:N.id-q.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],u=1,f=null,h=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;function g(N){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=N)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function x(N){if(y=!1,g(N),!_)if(n(l)!==null)_=!0,K();else{var q=n(c);q!==null&&$(x,q.startTime-N)}}var w=!1,S=-1,A=5,C=-1;function T(){return!(t.unstable_now()-C<A)}function M(){if(w){var N=t.unstable_now();C=N;var q=!0;try{e:{_=!1,y&&(y=!1,d(S),S=-1),p=!0;var V=h;try{t:{for(g(N),f=n(l);f!==null&&!(f.expirationTime>N&&T());){var le=f.callback;if(typeof le=="function"){f.callback=null,h=f.priorityLevel;var ue=le(f.expirationTime<=N);if(N=t.unstable_now(),typeof ue=="function"){f.callback=ue,g(N),q=!0;break t}f===n(l)&&i(l),g(N)}else i(l);f=n(l)}if(f!==null)q=!0;else{var Se=n(c);Se!==null&&$(x,Se.startTime-N),q=!1}}break e}finally{f=null,h=V,p=!1}q=void 0}}finally{q?D():w=!1}}}var D;if(typeof v=="function")D=function(){v(M)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,Y=Q.port2;Q.port1.onmessage=M,D=function(){Y.postMessage(null)}}else D=function(){m(M,0)};function K(){w||(w=!0,D())}function $(N,q){S=m(function(){N(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,K())},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var V=h;h=q;try{return N()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=h;h=N;try{return q()}finally{h=V}},t.unstable_scheduleCallback=function(N,q,V){var le=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?le+V:le):V=le,N){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=V+ue,N={id:u++,callback:q,priorityLevel:N,startTime:V,expirationTime:ue,sortIndex:-1},V>le?(N.sortIndex=V,e(c,N),n(l)===null&&N===n(c)&&(y?(d(S),S=-1):y=!0,$(x,V-le))):(N.sortIndex=ue,e(l,N),_||p||(_=!0,K())),N},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(N){var q=h;return function(){var V=h;h=q;try{return N.apply(this,arguments)}finally{h=V}}}})(py);dy.exports=py;var Ib=dy.exports,my={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fb=F;function gy(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ca(){}var Dn={d:{f:Ca,r:function(){throw Error(gy(522))},D:Ca,C:Ca,L:Ca,m:Ca,X:Ca,S:Ca,M:Ca},p:0,findDOMNode:null},Bb=Symbol.for("react.portal");function Hb(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bb,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var pl=Fb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Lf(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Dn;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(gy(299));return Hb(t,e,null,n)};Pn.flushSync=function(t){var e=pl.T,n=Dn.p;try{if(pl.T=null,Dn.p=2,t)return t()}finally{pl.T=e,Dn.p=n,Dn.d.f()}};Pn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Dn.d.C(t,e))};Pn.prefetchDNS=function(t){typeof t=="string"&&Dn.d.D(t)};Pn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Lf(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Dn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&Dn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Pn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Lf(e.as,e.crossOrigin);Dn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Dn.d.M(t)};Pn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Lf(n,e.crossOrigin);Dn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Pn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Lf(e.as,e.crossOrigin);Dn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Dn.d.m(t)};Pn.requestFormReset=function(t){Dn.d.r(t)};Pn.unstable_batchedUpdates=function(t,e){return t(e)};Pn.useFormState=function(t,e,n){return pl.H.useFormState(t,e,n)};Pn.useFormStatus=function(){return pl.H.useHostTransitionStatus()};Pn.version="19.0.0";function _y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_y)}catch(t){console.error(t)}}_y(),my.exports=Pn;var vy=my.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var on=Ib,yy=F,Vb=vy;function ee(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function xy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var kb=Symbol.for("react.element"),Mc=Symbol.for("react.transitional.element"),al=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),Sy=Symbol.for("react.strict_mode"),bd=Symbol.for("react.profiler"),Gb=Symbol.for("react.provider"),My=Symbol.for("react.consumer"),ca=Symbol.for("react.context"),dm=Symbol.for("react.forward_ref"),Ed=Symbol.for("react.suspense"),Td=Symbol.for("react.suspense_list"),pm=Symbol.for("react.memo"),Ba=Symbol.for("react.lazy"),by=Symbol.for("react.offscreen"),jb=Symbol.for("react.memo_cache_sentinel"),Wg=Symbol.iterator;function Bo(t){return t===null||typeof t!="object"?null:(t=Wg&&t[Wg]||t["@@iterator"],typeof t=="function"?t:null)}var Xb=Symbol.for("react.client.reference");function Ad(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Xb?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case al:return"Portal";case bd:return"Profiler";case Sy:return"StrictMode";case Ed:return"Suspense";case Td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ca:return(t.displayName||"Context")+".Provider";case My:return(t._context.displayName||"Context")+".Consumer";case dm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pm:return e=t.displayName||null,e!==null?e:Ad(t.type)||"Memo";case Ba:e=t._payload,t=t._init;try{return Ad(t(e))}catch{}}return null}var $e=yy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,zt=Object.assign,ah,Yg;function rl(t){if(ah===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ah=e&&e[1]||"",Yg=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ah+t+Yg}var rh=!1;function sh(t,e){if(!t||rh)return"";rh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var h=p}Reflect.construct(t,[],f)}else{try{f.call()}catch(p){h=p}t.call(f.prototype)}}else{try{throw Error()}catch(p){h=p}(f=t())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var u=`
`+l[i].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=i&&0<=a);break}}}finally{rh=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?rl(n):""}function Wb(t){switch(t.tag){case 26:case 27:case 5:return rl(t.type);case 16:return rl("Lazy");case 13:return rl("Suspense");case 19:return rl("SuspenseList");case 0:case 15:return t=sh(t.type,!1),t;case 11:return t=sh(t.type.render,!1),t;case 1:return t=sh(t.type,!0),t;default:return""}}function qg(t){try{var e="";do e+=Wb(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function wo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ey(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zg(t){if(wo(t)!==t)throw Error(ee(188))}function Yb(t){var e=t.alternate;if(!e){if(e=wo(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Zg(a),t;if(r===i)return Zg(a),e;r=r.sibling}throw Error(ee(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Ty(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Ty(t),e!==null)return e;t=t.sibling}return null}var sl=Array.isArray,Nt=Vb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Hr={pending:!1,data:null,method:null,action:null},wd=[],Fs=-1;function Wi(t){return{current:t}}function pn(t){0>Fs||(t.current=wd[Fs],wd[Fs]=null,Fs--)}function It(t,e){Fs++,wd[Fs]=t.current,t.current=e}var Bi=Wi(null),Fl=Wi(null),Qa=Wi(null),Bu=Wi(null);function Hu(t,e){switch(It(Qa,e),It(Fl,t),It(Bi,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?K_(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=K_(t),e=IS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pn(Bi),It(Bi,e)}function uo(){pn(Bi),pn(Fl),pn(Qa)}function Cd(t){t.memoizedState!==null&&It(Bu,t);var e=Bi.current,n=IS(e,t.type);e!==n&&(It(Fl,t),It(Bi,n))}function Vu(t){Fl.current===t&&(pn(Bi),pn(Fl)),Bu.current===t&&(pn(Bu),Zl._currentValue=Hr)}var Rd=Object.prototype.hasOwnProperty,mm=on.unstable_scheduleCallback,oh=on.unstable_cancelCallback,qb=on.unstable_shouldYield,Zb=on.unstable_requestPaint,Hi=on.unstable_now,Kb=on.unstable_getCurrentPriorityLevel,Ay=on.unstable_ImmediatePriority,wy=on.unstable_UserBlockingPriority,ku=on.unstable_NormalPriority,Qb=on.unstable_LowPriority,Cy=on.unstable_IdlePriority,$b=on.log,Jb=on.unstable_setDisableYieldValue,ac=null,Kn=null;function eE(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(ac,t,void 0,(t.current.flags&128)===128)}catch{}}function Za(t){if(typeof $b=="function"&&Jb(t),Kn&&typeof Kn.setStrictMode=="function")try{Kn.setStrictMode(ac,t)}catch{}}var Qn=Math.clz32?Math.clz32:iE,tE=Math.log,nE=Math.LN2;function iE(t){return t>>>=0,t===0?32:31-(tE(t)/nE|0)|0}var bc=128,Ec=4194304;function Cr(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Pf(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,a=t.suspendedLanes,r=t.pingedLanes,s=t.warmLanes;t=t.finishedLanes!==0;var o=n&134217727;return o!==0?(n=o&~a,n!==0?i=Cr(n):(r&=o,r!==0?i=Cr(r):t||(s=o&~s,s!==0&&(i=Cr(s))))):(o=n&~a,o!==0?i=Cr(o):r!==0?i=Cr(r):t||(s=n&~s,s!==0&&(i=Cr(s)))),i===0?0:e!==0&&e!==i&&!(e&a)&&(a=i&-i,s=e&-e,a>=s||a===32&&(s&4194176)!==0)?e:i}function rc(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function aE(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ry(){var t=bc;return bc<<=1,!(bc&4194176)&&(bc=128),t}function Dy(){var t=Ec;return Ec<<=1,!(Ec&62914560)&&(Ec=4194304),t}function lh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sc(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function rE(t,e,n,i,a,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=s&~n;0<n;){var u=31-Qn(n),f=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];p!==null&&(p.lane&=-536870913)}n&=~f}i!==0&&Ly(t,i,0),r!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function Ly(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Qn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&4194218}function Py(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function Uy(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Ny(){var t=Nt.p;return t!==0?t:(t=window.event,t===void 0?32:YS(t.type))}function sE(t,e){var n=Nt.p;try{return Nt.p=t,e()}finally{Nt.p=n}}var pr=Math.random().toString(36).slice(2),En="__reactFiber$"+pr,Fn="__reactProps$"+pr,Co="__reactContainer$"+pr,Dd="__reactEvents$"+pr,oE="__reactListeners$"+pr,lE="__reactHandles$"+pr,Kg="__reactResources$"+pr,Bl="__reactMarker$"+pr;function gm(t){delete t[En],delete t[Fn],delete t[Dd],delete t[oE],delete t[lE]}function Or(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Co]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$_(t);t!==null;){if(n=t[En])return n;t=$_(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){if(t=t[En]||t[Co]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ol(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ee(33))}function $s(t){var e=t[Kg];return e||(e=t[Kg]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function hn(t){t[Bl]=!0}var Oy=new Set,zy={};function Jr(t,e){fo(t,e),fo(t+"Capture",e)}function fo(t,e){for(zy[t]=e,t=0;t<e.length;t++)Oy.add(e[t])}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qg={},$g={};function uE(t){return Rd.call($g,t)?!0:Rd.call(Qg,t)?!1:cE.test(t)?$g[t]=!0:(Qg[t]=!0,!1)}function vu(t,e,n){if(uE(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Tc(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Zi(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function si(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Iy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fE(t){var e=Iy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gu(t){t._valueTracker||(t._valueTracker=fE(t))}function Fy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Iy(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ju(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var hE=/[\n"\\]/g;function ci(t){return t.replace(hE,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ld(t,e,n,i,a,r,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+si(e)):t.value!==""+si(e)&&(t.value=""+si(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?Pd(t,s,si(e)):n!=null?Pd(t,s,si(n)):i!=null&&t.removeAttribute("value"),a==null&&r!=null&&(t.defaultChecked=!!r),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+si(o):t.removeAttribute("name")}function By(t,e,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;n=n!=null?""+si(n):"",e=e!=null?""+si(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function Pd(t,e,n){e==="number"&&ju(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Js(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+si(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Hy(t,e,n){if(e!=null&&(e=""+si(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+si(n):""}function Vy(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(ee(92));if(sl(i)){if(1<i.length)throw Error(ee(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=si(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i)}function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var dE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jg(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||dE.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function ky(t,e,n){if(e!=null&&typeof e!="object")throw Error(ee(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&Jg(t,a,i)}else for(var r in e)e.hasOwnProperty(r)&&Jg(t,r,e[r])}function _m(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yu(t){return mE.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ud=null;function vm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bs=null,eo=null;function e_(t){var e=Ro(t);if(e&&(t=e.stateNode)){var n=t[Fn]||null;e:switch(t=e.stateNode,e.type){case"input":if(Ld(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ci(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Fn]||null;if(!a)throw Error(ee(90));Ld(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Fy(i)}break e;case"textarea":Hy(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Js(t,!!n.multiple,e,!1)}}}var ch=!1;function Gy(t,e,n){if(ch)return t(e,n);ch=!0;try{var i=t(e);return i}finally{if(ch=!1,(Bs!==null||eo!==null)&&(kf(),Bs&&(e=Bs,t=eo,eo=Bs=null,e_(e),t)))for(e=0;e<t.length;e++)e_(t[e])}}function Hl(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Fn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Nd=!1;if(va)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){Nd=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{Nd=!1}var Ka=null,ym=null,xu=null;function jy(){if(xu)return xu;var t,e=ym,n=e.length,i,a="value"in Ka?Ka.value:Ka.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return xu=a.slice(t,1<i?1-i:void 0)}function Su(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ac(){return!0}function t_(){return!1}function Hn(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ac:t_,this.isPropagationStopped=t_,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ac)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ac)},persist:function(){},isPersistent:Ac}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uf=Hn(es),oc=zt({},es,{view:0,detail:0}),gE=Hn(oc),uh,fh,Vo,Nf=zt({},oc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vo&&(Vo&&t.type==="mousemove"?(uh=t.screenX-Vo.screenX,fh=t.screenY-Vo.screenY):fh=uh=0,Vo=t),uh)},movementY:function(t){return"movementY"in t?t.movementY:fh}}),n_=Hn(Nf),_E=zt({},Nf,{dataTransfer:0}),vE=Hn(_E),yE=zt({},oc,{relatedTarget:0}),hh=Hn(yE),xE=zt({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),SE=Hn(xE),ME=zt({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bE=Hn(ME),EE=zt({},es,{data:0}),i_=Hn(EE),TE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wE[t])?!!e[t]:!1}function xm(){return CE}var RE=zt({},oc,{key:function(t){if(t.key){var e=TE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Su(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xm,charCode:function(t){return t.type==="keypress"?Su(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Su(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),DE=Hn(RE),LE=zt({},Nf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),a_=Hn(LE),PE=zt({},oc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xm}),UE=Hn(PE),NE=zt({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),OE=Hn(NE),zE=zt({},Nf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),IE=Hn(zE),FE=zt({},es,{newState:0,oldState:0}),BE=Hn(FE),HE=[9,13,27,32],Sm=va&&"CompositionEvent"in window,ml=null;va&&"documentMode"in document&&(ml=document.documentMode);var VE=va&&"TextEvent"in window&&!ml,Xy=va&&(!Sm||ml&&8<ml&&11>=ml),r_=" ",s_=!1;function Wy(t,e){switch(t){case"keyup":return HE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function kE(t,e){switch(t){case"compositionend":return Yy(e);case"keypress":return e.which!==32?null:(s_=!0,r_);case"textInput":return t=e.data,t===r_&&s_?null:t;default:return null}}function GE(t,e){if(Hs)return t==="compositionend"||!Sm&&Wy(t,e)?(t=jy(),xu=ym=Ka=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xy&&e.locale!=="ko"?null:e.data;default:return null}}var jE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jE[t.type]:e==="textarea"}function qy(t,e,n,i){Bs?eo?eo.push(i):eo=[i]:Bs=i,e=of(e,"onChange"),0<e.length&&(n=new Uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var gl=null,Vl=null;function XE(t){NS(t,0)}function Of(t){var e=ol(t);if(Fy(e))return t}function l_(t,e){if(t==="change")return e}var Zy=!1;if(va){var dh;if(va){var ph="oninput"in document;if(!ph){var c_=document.createElement("div");c_.setAttribute("oninput","return;"),ph=typeof c_.oninput=="function"}dh=ph}else dh=!1;Zy=dh&&(!document.documentMode||9<document.documentMode)}function u_(){gl&&(gl.detachEvent("onpropertychange",Ky),Vl=gl=null)}function Ky(t){if(t.propertyName==="value"&&Of(Vl)){var e=[];qy(e,Vl,t,vm(t)),Gy(XE,e)}}function WE(t,e,n){t==="focusin"?(u_(),gl=e,Vl=n,gl.attachEvent("onpropertychange",Ky)):t==="focusout"&&u_()}function YE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Of(Vl)}function qE(t,e){if(t==="click")return Of(e)}function ZE(t,e){if(t==="input"||t==="change")return Of(e)}function KE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:KE;function kl(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Rd.call(e,a)||!Jn(t[a],e[a]))return!1}return!0}function f_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function h_(t,e){var n=f_(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=f_(n)}}function Qy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $y(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ju(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ju(t.document)}return e}function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function QE(t,e){var n=$y(e);e=t.focusedElem;var i=t.selectionRange;if(n!==e&&e&&e.ownerDocument&&Qy(e.ownerDocument.documentElement,e)){if(i!==null&&Mm(e)){if(t=i.start,n=i.end,n===void 0&&(n=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(n,e.value.length);else if(n=(t=e.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var a=e.textContent.length,r=Math.min(i.start,a);i=i.end===void 0?r:Math.min(i.end,a),!n.extend&&r>i&&(a=i,i=r,r=a),a=h_(e,r);var s=h_(e,i);a&&s&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),n.removeAllRanges(),r>i?(n.addRange(t),n.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),n.addRange(t)))}}for(t=[],n=e;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)n=t[e],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $E=va&&"documentMode"in document&&11>=document.documentMode,Vs=null,Od=null,_l=null,zd=!1;function d_(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zd||Vs==null||Vs!==ju(i)||(i=Vs,"selectionStart"in i&&Mm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_l&&kl(_l,i)||(_l=i,i=of(Od,"onSelect"),0<i.length&&(e=new Uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vs)))}function xr(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},mh={},Jy={};va&&(Jy=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function ts(t){if(mh[t])return mh[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jy)return mh[t]=e[n];return t}var ex=ts("animationend"),tx=ts("animationiteration"),nx=ts("animationstart"),JE=ts("transitionrun"),e1=ts("transitionstart"),t1=ts("transitioncancel"),ix=ts("transitionend"),ax=new Map,p_="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ri(t,e){ax.set(t,e),Jr(e,[t])}var ai=[],Gs=0,bm=0;function zf(){for(var t=Gs,e=bm=Gs=0;e<t;){var n=ai[e];ai[e++]=null;var i=ai[e];ai[e++]=null;var a=ai[e];ai[e++]=null;var r=ai[e];if(ai[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&rx(n,a,r)}}function If(t,e,n,i){ai[Gs++]=t,ai[Gs++]=e,ai[Gs++]=n,ai[Gs++]=i,bm|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Em(t,e,n,i){return If(t,e,n,i),Xu(t)}function sr(t,e){return If(t,null,null,e),Xu(t)}function rx(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(a=!0)),t=r,r=r.return;a&&e!==null&&t.tag===3&&(r=t.stateNode,a=31-Qn(n),r=r.hiddenUpdates,t=r[a],t===null?r[a]=[e]:t.push(e),e.lane=n|536870912)}function Xu(t){if(50<Rl)throw Rl=0,ap=null,Error(ee(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var js={},m_=new WeakMap;function ui(t,e){if(typeof t=="object"&&t!==null){var n=m_.get(t);return n!==void 0?n:(e={value:t,source:e,stack:qg(e)},m_.set(t,e),e)}return{value:t,source:e,stack:qg(e)}}var Xs=[],Ws=0,Wu=null,Yu=0,oi=[],li=0,Vr=null,ua=1,fa="";function Rr(t,e){Xs[Ws++]=Yu,Xs[Ws++]=Wu,Wu=t,Yu=e}function sx(t,e,n){oi[li++]=ua,oi[li++]=fa,oi[li++]=Vr,Vr=t;var i=ua;t=fa;var a=32-Qn(i)-1;i&=~(1<<a),n+=1;var r=32-Qn(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,ua=1<<32-Qn(e)+a|n<<a|i,fa=r+t}else ua=1<<r|n<<a|i,fa=t}function Tm(t){t.return!==null&&(Rr(t,1),sx(t,1,0))}function Am(t){for(;t===Wu;)Wu=Xs[--Ws],Xs[Ws]=null,Yu=Xs[--Ws],Xs[Ws]=null;for(;t===Vr;)Vr=oi[--li],oi[li]=null,fa=oi[--li],oi[li]=null,ua=oi[--li],oi[li]=null}var Rn=null,_n=null,mt=!1,Ei=null,Ni=!1,Id=Error(ee(519));function Wr(t){var e=Error(ee(418,""));throw Gl(ui(e,t)),Id}function g_(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[En]=t,e[Fn]=i,n){case"dialog":ut("cancel",e),ut("close",e);break;case"iframe":case"object":case"embed":ut("load",e);break;case"video":case"audio":for(n=0;n<Wl.length;n++)ut(Wl[n],e);break;case"source":ut("error",e);break;case"img":case"image":case"link":ut("error",e),ut("load",e);break;case"details":ut("toggle",e);break;case"input":ut("invalid",e),By(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Gu(e);break;case"select":ut("invalid",e);break;case"textarea":ut("invalid",e),Vy(e,i.value,i.defaultValue,i.children),Gu(e)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||zS(e.textContent,n)?(i.popover!=null&&(ut("beforetoggle",e),ut("toggle",e)),i.onScroll!=null&&ut("scroll",e),i.onScrollEnd!=null&&ut("scrollend",e),i.onClick!=null&&(e.onclick=jf),e=!0):e=!1,e||Wr(t)}function __(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 3:case 27:Ni=!0;return;case 5:case 13:Ni=!1;return;default:Rn=Rn.return}}function ko(t){if(t!==Rn)return!1;if(!mt)return __(t),mt=!0,!1;var e=!1,n;if((n=t.tag!==3&&t.tag!==27)&&((n=t.tag===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||fp(t.type,t.memoizedProps)),n=!n),n&&(e=!0),e&&_n&&Wr(t),__(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){_n=Ai(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}_n=null}}else _n=Rn?Ai(t.stateNode.nextSibling):null;return!0}function lc(){_n=Rn=null,mt=!1}function Gl(t){Ei===null?Ei=[t]:Ei.push(t)}var vl=Error(ee(460)),ox=Error(ee(474)),Fd={then:function(){}};function v_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wc(){}function lx(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(wc,wc),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===vl?Error(ee(483)):t;default:if(typeof e.status=="string")e.then(wc,wc);else{if(t=Lt,t!==null&&100<t.shellSuspendCounter)throw Error(ee(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===vl?Error(ee(483)):t}throw yl=e,vl}}var yl=null;function y_(){if(yl===null)throw Error(ee(459));var t=yl;return yl=null,t}var to=null,jl=0;function Cc(t){var e=jl;return jl+=1,to===null&&(to=[]),lx(to,t,e)}function Go(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Rc(t,e){throw e.$$typeof===kb?Error(ee(525)):(t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function x_(t){var e=t._init;return e(t._payload)}function cx(t){function e(d,v){if(t){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d){for(var v=new Map;d!==null;)d.key!==null?v.set(d.key,d):v.set(d.index,d),d=d.sibling;return v}function a(d,v){return d=er(d,v),d.index=0,d.sibling=null,d}function r(d,v,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=33554434,v):g):(d.flags|=33554434,v)):(d.flags|=1048576,v)}function s(d){return t&&d.alternate===null&&(d.flags|=33554434),d}function o(d,v,g,x){return v===null||v.tag!==6?(v=wh(g,d.mode,x),v.return=d,v):(v=a(v,g),v.return=d,v)}function l(d,v,g,x){var w=g.type;return w===Is?u(d,v,g.props.children,x,g.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ba&&x_(w)===v.type)?(v=a(v,g.props),Go(v,g),v.return=d,v):(v=Au(g.type,g.key,g.props,null,d.mode,x),Go(v,g),v.return=d,v)}function c(d,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Ch(g,d.mode,x),v.return=d,v):(v=a(v,g.children||[]),v.return=d,v)}function u(d,v,g,x,w){return v===null||v.tag!==7?(v=Gr(g,d.mode,x,w),v.return=d,v):(v=a(v,g),v.return=d,v)}function f(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=wh(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Mc:return g=Au(v.type,v.key,v.props,null,d.mode,g),Go(g,v),g.return=d,g;case al:return v=Ch(v,d.mode,g),v.return=d,v;case Ba:var x=v._init;return v=x(v._payload),f(d,v,g)}if(sl(v)||Bo(v))return v=Gr(v,d.mode,g,null),v.return=d,v;if(typeof v.then=="function")return f(d,Cc(v),g);if(v.$$typeof===ca)return f(d,Dc(d,v),g);Rc(d,v)}return null}function h(d,v,g,x){var w=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return w!==null?null:o(d,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mc:return g.key===w?l(d,v,g,x):null;case al:return g.key===w?c(d,v,g,x):null;case Ba:return w=g._init,g=w(g._payload),h(d,v,g,x)}if(sl(g)||Bo(g))return w!==null?null:u(d,v,g,x,null);if(typeof g.then=="function")return h(d,v,Cc(g),x);if(g.$$typeof===ca)return h(d,v,Dc(d,g),x);Rc(d,g)}return null}function p(d,v,g,x,w){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(g)||null,o(v,d,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Mc:return d=d.get(x.key===null?g:x.key)||null,l(v,d,x,w);case al:return d=d.get(x.key===null?g:x.key)||null,c(v,d,x,w);case Ba:var S=x._init;return x=S(x._payload),p(d,v,g,x,w)}if(sl(x)||Bo(x))return d=d.get(g)||null,u(v,d,x,w,null);if(typeof x.then=="function")return p(d,v,g,Cc(x),w);if(x.$$typeof===ca)return p(d,v,g,Dc(v,x),w);Rc(v,x)}return null}function _(d,v,g,x){for(var w=null,S=null,A=v,C=v=0,T=null;A!==null&&C<g.length;C++){A.index>C?(T=A,A=null):T=A.sibling;var M=h(d,A,g[C],x);if(M===null){A===null&&(A=T);break}t&&A&&M.alternate===null&&e(d,A),v=r(M,v,C),S===null?w=M:S.sibling=M,S=M,A=T}if(C===g.length)return n(d,A),mt&&Rr(d,C),w;if(A===null){for(;C<g.length;C++)A=f(d,g[C],x),A!==null&&(v=r(A,v,C),S===null?w=A:S.sibling=A,S=A);return mt&&Rr(d,C),w}for(A=i(A);C<g.length;C++)T=p(A,d,C,g[C],x),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?C:T.key),v=r(T,v,C),S===null?w=T:S.sibling=T,S=T);return t&&A.forEach(function(D){return e(d,D)}),mt&&Rr(d,C),w}function y(d,v,g,x){if(g==null)throw Error(ee(151));for(var w=null,S=null,A=v,C=v=0,T=null,M=g.next();A!==null&&!M.done;C++,M=g.next()){A.index>C?(T=A,A=null):T=A.sibling;var D=h(d,A,M.value,x);if(D===null){A===null&&(A=T);break}t&&A&&D.alternate===null&&e(d,A),v=r(D,v,C),S===null?w=D:S.sibling=D,S=D,A=T}if(M.done)return n(d,A),mt&&Rr(d,C),w;if(A===null){for(;!M.done;C++,M=g.next())M=f(d,M.value,x),M!==null&&(v=r(M,v,C),S===null?w=M:S.sibling=M,S=M);return mt&&Rr(d,C),w}for(A=i(A);!M.done;C++,M=g.next())M=p(A,d,C,M.value,x),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?C:M.key),v=r(M,v,C),S===null?w=M:S.sibling=M,S=M);return t&&A.forEach(function(Q){return e(d,Q)}),mt&&Rr(d,C),w}function m(d,v,g,x){if(typeof g=="object"&&g!==null&&g.type===Is&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mc:e:{for(var w=g.key;v!==null;){if(v.key===w){if(w=g.type,w===Is){if(v.tag===7){n(d,v.sibling),x=a(v,g.props.children),x.return=d,d=x;break e}}else if(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ba&&x_(w)===v.type){n(d,v.sibling),x=a(v,g.props),Go(x,g),x.return=d,d=x;break e}n(d,v);break}else e(d,v);v=v.sibling}g.type===Is?(x=Gr(g.props.children,d.mode,x,g.key),x.return=d,d=x):(x=Au(g.type,g.key,g.props,null,d.mode,x),Go(x,g),x.return=d,d=x)}return s(d);case al:e:{for(w=g.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(d,v.sibling),x=a(v,g.children||[]),x.return=d,d=x;break e}else{n(d,v);break}else e(d,v);v=v.sibling}x=Ch(g,d.mode,x),x.return=d,d=x}return s(d);case Ba:return w=g._init,g=w(g._payload),m(d,v,g,x)}if(sl(g))return _(d,v,g,x);if(Bo(g)){if(w=Bo(g),typeof w!="function")throw Error(ee(150));return g=w.call(g),y(d,v,g,x)}if(typeof g.then=="function")return m(d,v,Cc(g),x);if(g.$$typeof===ca)return m(d,v,Dc(d,g),x);Rc(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,v!==null&&v.tag===6?(n(d,v.sibling),x=a(v,g),x.return=d,d=x):(n(d,v),x=wh(g,d.mode,x),x.return=d,d=x),s(d)):n(d,v)}return function(d,v,g,x){try{jl=0;var w=m(d,v,g,x);return to=null,w}catch(A){if(A===vl)throw A;var S=fi(29,A,null,d.mode);return S.lanes=x,S.return=d,S}finally{}}}var Yr=cx(!0),ux=cx(!1),po=Wi(null),qu=Wi(0);function S_(t,e){t=Sa,It(qu,t),It(po,e),Sa=t|e.baseLanes}function Bd(){It(qu,Sa),It(po,po.current)}function wm(){Sa=qu.current,pn(po),pn(qu)}var pi=Wi(null),Vi=null;function Ga(t){var e=t.alternate;It(rn,rn.current&1),It(pi,t),Vi===null&&(e===null||po.current!==null||e.memoizedState!==null)&&(Vi=t)}function fx(t){if(t.tag===22){if(It(rn,rn.current),It(pi,t),Vi===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Vi=t)}}else ja()}function ja(){It(rn,rn.current),It(pi,pi.current)}function ha(t){pn(pi),Vi===t&&(Vi=null),pn(rn)}var rn=Wi(0);function Zu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var n1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},i1=on.unstable_scheduleCallback,a1=on.unstable_NormalPriority,nn={$$typeof:ca,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cm(){return{controller:new n1,data:new Map,refCount:0}}function cc(t){t.refCount--,t.refCount===0&&i1(a1,function(){t.controller.abort()})}var xl=null,Hd=0,mo=0,no=null;function r1(t,e){if(xl===null){var n=xl=[];Hd=0,mo=Qm(),no={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Hd++,e.then(M_,M_),e}function M_(){if(--Hd===0&&xl!==null){no!==null&&(no.status="fulfilled");var t=xl;xl=null,mo=0,no=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function s1(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var b_=$e.S;$e.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&r1(t,e),b_!==null&&b_(t,e)};var kr=Wi(null);function Rm(){var t=kr.current;return t!==null?t:Lt.pooledCache}function Mu(t,e){e===null?It(kr,kr.current):It(kr,e.pool)}function hx(){var t=Rm();return t===null?null:{parent:nn._currentValue,pool:t}}var or=0,at=null,bt=null,Zt=null,Ku=!1,io=!1,qr=!1,Qu=0,Xl=0,ao=null,o1=0;function Xt(){throw Error(ee(321))}function Dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Lm(t,e,n,i,a,r){return or=r,at=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$e.H=t===null||t.memoizedState===null?ns:mr,qr=!1,r=n(i,a),qr=!1,io&&(r=px(e,n,i,a)),dx(t),r}function dx(t){$e.H=ji;var e=bt!==null&&bt.next!==null;if(or=0,Zt=bt=at=null,Ku=!1,Xl=0,ao=null,e)throw Error(ee(300));t===null||dn||(t=t.dependencies,t!==null&&ef(t)&&(dn=!0))}function px(t,e,n,i){at=t;var a=0;do{if(io&&(ao=null),Xl=0,io=!1,25<=a)throw Error(ee(301));if(a+=1,Zt=bt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}$e.H=is,r=e(n,i)}while(io);return r}function l1(){var t=$e.H,e=t.useState()[0];return e=typeof e.then=="function"?uc(e):e,t=t.useState()[0],(bt!==null?bt.memoizedState:null)!==t&&(at.flags|=1024),e}function Pm(){var t=Qu!==0;return Qu=0,t}function Um(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Nm(t){if(Ku){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Ku=!1}or=0,Zt=bt=at=null,io=!1,Xl=Qu=0,ao=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?at.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Kt(){if(bt===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Zt===null?at.memoizedState:Zt.next;if(e!==null)Zt=e,bt=t;else{if(t===null)throw at.alternate===null?Error(ee(467)):Error(ee(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Zt===null?at.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}var Ff;Ff=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function uc(t){var e=Xl;return Xl+=1,ao===null&&(ao=[]),t=lx(ao,t,e),e=at,(Zt===null?e.memoizedState:Zt.next)===null&&(e=e.alternate,$e.H=e===null||e.memoizedState===null?ns:mr),t}function Bf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return uc(t);if(t.$$typeof===ca)return Tn(t)}throw Error(ee(438,String(t)))}function Om(t){var e=null,n=at.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=at.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Ff(),at.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=jb;return e.index++,n}function ya(t,e){return typeof e=="function"?e(t):e}function bu(t){var e=Kt();return zm(e,bt,t)}function zm(t,e,n){var i=t.queue;if(i===null)throw Error(ee(311));i.lastRenderedReducer=n;var a=t.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}e.baseQueue=a=r,i.pending=null}if(r=t.baseState,a===null)t.memoizedState=r;else{e=a.next;var o=s=null,l=null,c=e,u=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(dt&f)===f:(or&f)===f){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===mo&&(u=!0);else if((or&h)===h){c=c.next,h===mo&&(u=!0);continue}else f={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,at.lanes|=h,cr|=h;f=c.action,qr&&n(r,f),r=c.hasEagerState?c.eagerState:n(r,f)}else h={lane:f,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,s=r):l=l.next=h,at.lanes|=f,cr|=f;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=o,!Jn(r,t.memoizedState)&&(dn=!0,u&&(n=no,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function gh(t){var e=Kt(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);Jn(r,e.memoizedState)||(dn=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function mx(t,e,n){var i=at,a=Kt(),r=mt;if(r){if(n===void 0)throw Error(ee(407));n=n()}else n=e();var s=!Jn((bt||a).memoizedState,n);if(s&&(a.memoizedState=n,dn=!0),a=a.queue,Im(vx.bind(null,i,a,t),[t]),a.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(i.flags|=2048,go(9,_x.bind(null,i,a,n,e),{destroy:void 0},null),Lt===null)throw Error(ee(349));r||or&60||gx(i,e,n)}return n}function gx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=at.updateQueue,e===null?(e=Ff(),at.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _x(t,e,n,i){e.value=n,e.getSnapshot=i,yx(e)&&xx(t)}function vx(t,e,n){return n(function(){yx(e)&&xx(t)})}function yx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function xx(t){var e=sr(t,2);e!==null&&Ln(e,t,2)}function Vd(t){var e=Nn();if(typeof t=="function"){var n=t;if(t=n(),qr){Za(!0);try{n()}finally{Za(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e}function Sx(t,e,n,i){return t.baseState=n,zm(t,bt,typeof i=="function"?i:ya)}function c1(t,e,n,i,a){if(Vf(t))throw Error(ee(485));if(t=e.action,t!==null){var r={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};$e.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,Mx(e,r)):(r.next=n.next,e.pending=n.next=r)}}function Mx(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var r=$e.T,s={};$e.T=s;try{var o=n(a,i),l=$e.S;l!==null&&l(s,o),E_(t,e,o)}catch(c){kd(t,e,c)}finally{$e.T=r}}else try{r=n(a,i),E_(t,e,r)}catch(c){kd(t,e,c)}}function E_(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){T_(t,e,i)},function(i){return kd(t,e,i)}):T_(t,e,n)}function T_(t,e,n){e.status="fulfilled",e.value=n,bx(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Mx(t,n)))}function kd(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,bx(e),e=e.next;while(e!==i)}t.action=null}function bx(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ex(t,e){return e}function Tx(t,e){if(mt){var n=Lt.formState;if(n!==null){e:{var i=at;if(mt){if(_n){t:{for(var a=_n,r=Ni;a.nodeType!==8;){if(!r){a=null;break t}if(a=Ai(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){_n=Ai(a.nextSibling),i=a.data==="F!";break e}}Wr(i)}i=!1}i&&(e=n[0])}}return n=Nn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ex,lastRenderedState:e},n.queue=i,n=kx.bind(null,at,i),i.dispatch=n,i=Vd(!1),r=Vm.bind(null,at,!1,i.queue),i=Nn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=c1.bind(null,at,a,r,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function Ax(t){var e=Kt();return wx(e,bt,t)}function wx(t,e,n){e=zm(t,e,Ex)[0],t=bu(ya)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?uc(e):e;var i=Kt(),a=i.queue,r=a.dispatch;return n!==i.memoizedState&&(at.flags|=2048,go(9,u1.bind(null,a,n),{destroy:void 0},null)),[e,r,t]}function u1(t,e){t.action=e}function Cx(t){var e=Kt(),n=bt;if(n!==null)return wx(e,n,t);Kt(),e=e.memoizedState,n=Kt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function go(t,e,n,i){return t={tag:t,create:e,inst:n,deps:i,next:null},e=at.updateQueue,e===null&&(e=Ff(),at.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Rx(){return Kt().memoizedState}function Eu(t,e,n,i){var a=Nn();at.flags|=t,a.memoizedState=go(1|e,n,{destroy:void 0},i===void 0?null:i)}function Hf(t,e,n,i){var a=Kt();i=i===void 0?null:i;var r=a.memoizedState.inst;bt!==null&&i!==null&&Dm(i,bt.memoizedState.deps)?a.memoizedState=go(e,n,r,i):(at.flags|=t,a.memoizedState=go(1|e,n,r,i))}function A_(t,e){Eu(8390656,8,t,e)}function Im(t,e){Hf(2048,8,t,e)}function Dx(t,e){return Hf(4,2,t,e)}function Lx(t,e){return Hf(4,4,t,e)}function Px(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ux(t,e,n){n=n!=null?n.concat([t]):null,Hf(4,4,Px.bind(null,e,t),n)}function Fm(){}function Nx(t,e){var n=Kt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Dm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ox(t,e){var n=Kt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Dm(e,i[1]))return i[0];if(i=t(),qr){Za(!0);try{t()}finally{Za(!1)}}return n.memoizedState=[i,e],i}function Bm(t,e,n){return n===void 0||or&1073741824?t.memoizedState=e:(t.memoizedState=n,t=bS(),at.lanes|=t,cr|=t,n)}function zx(t,e,n,i){return Jn(n,e)?n:po.current!==null?(t=Bm(t,n,i),Jn(t,e)||(dn=!0),t):or&42?(t=bS(),at.lanes|=t,cr|=t,e):(dn=!0,t.memoizedState=n)}function Ix(t,e,n,i,a){var r=Nt.p;Nt.p=r!==0&&8>r?r:8;var s=$e.T,o={};$e.T=o,Vm(t,!1,e,n);try{var l=a(),c=$e.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=s1(l,i);Sl(t,e,u,$n(t))}else Sl(t,e,i,$n(t))}catch(f){Sl(t,e,{then:function(){},status:"rejected",reason:f},$n())}finally{Nt.p=r,$e.T=s}}function f1(){}function Gd(t,e,n,i){if(t.tag!==5)throw Error(ee(476));var a=Fx(t).queue;Ix(t,a,e,Hr,n===null?f1:function(){return Bx(t),n(i)})}function Fx(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Hr,baseState:Hr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:Hr},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Bx(t){var e=Fx(t).next.queue;Sl(t,e,{},$n())}function Hm(){return Tn(Zl)}function Hx(){return Kt().memoizedState}function Vx(){return Kt().memoizedState}function h1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=$n();t=$a(n);var i=Ja(e,t,n);i!==null&&(Ln(i,e,n),bl(i,e,n)),e={cache:Cm()},t.payload=e;return}e=e.return}}function d1(t,e,n){var i=$n();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Vf(t)?Gx(e,n):(n=Em(t,e,n,i),n!==null&&(Ln(n,t,i),jx(n,e,i)))}function kx(t,e,n){var i=$n();Sl(t,e,n,i)}function Sl(t,e,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vf(t))Gx(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Jn(o,s))return If(t,e,a,0),Lt===null&&zf(),!1}catch{}finally{}if(n=Em(t,e,a,i),n!==null)return Ln(n,t,i),jx(n,e,i),!0}return!1}function Vm(t,e,n,i){if(i={lane:2,revertLane:Qm(),action:i,hasEagerState:!1,eagerState:null,next:null},Vf(t)){if(e)throw Error(ee(479))}else e=Em(t,n,i,2),e!==null&&Ln(e,t,2)}function Vf(t){var e=t.alternate;return t===at||e!==null&&e===at}function Gx(t,e){io=Ku=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jx(t,e,n){if(n&4194176){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Py(t,n)}}var ji={readContext:Tn,use:Bf,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useLayoutEffect:Xt,useInsertionEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useSyncExternalStore:Xt,useId:Xt};ji.useCacheRefresh=Xt;ji.useMemoCache=Xt;ji.useHostTransitionStatus=Xt;ji.useFormState=Xt;ji.useActionState=Xt;ji.useOptimistic=Xt;var ns={readContext:Tn,use:Bf,useCallback:function(t,e){return Nn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:A_,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Eu(4194308,4,Px.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Eu(4194308,4,t,e)},useInsertionEffect:function(t,e){Eu(4,2,t,e)},useMemo:function(t,e){var n=Nn();e=e===void 0?null:e;var i=t();if(qr){Za(!0);try{t()}finally{Za(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Nn();if(n!==void 0){var a=n(e);if(qr){Za(!0);try{n(e)}finally{Za(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=d1.bind(null,at,t),[i.memoizedState,t]},useRef:function(t){var e=Nn();return t={current:t},e.memoizedState=t},useState:function(t){t=Vd(t);var e=t.queue,n=kx.bind(null,at,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Fm,useDeferredValue:function(t,e){var n=Nn();return Bm(n,t,e)},useTransition:function(){var t=Vd(!1);return t=Ix.bind(null,at,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=at,a=Nn();if(mt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Lt===null)throw Error(ee(349));dt&60||gx(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,A_(vx.bind(null,i,r,t),[t]),i.flags|=2048,go(9,_x.bind(null,i,r,n,e),{destroy:void 0},null),n},useId:function(){var t=Nn(),e=Lt.identifierPrefix;if(mt){var n=fa,i=ua;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=o1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return Nn().memoizedState=h1.bind(null,at)}};ns.useMemoCache=Om;ns.useHostTransitionStatus=Hm;ns.useFormState=Tx;ns.useActionState=Tx;ns.useOptimistic=function(t){var e=Nn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Vm.bind(null,at,!0,n),n.dispatch=e,[t,e]};var mr={readContext:Tn,use:Bf,useCallback:Nx,useContext:Tn,useEffect:Im,useImperativeHandle:Ux,useInsertionEffect:Dx,useLayoutEffect:Lx,useMemo:Ox,useReducer:bu,useRef:Rx,useState:function(){return bu(ya)},useDebugValue:Fm,useDeferredValue:function(t,e){var n=Kt();return zx(n,bt.memoizedState,t,e)},useTransition:function(){var t=bu(ya)[0],e=Kt().memoizedState;return[typeof t=="boolean"?t:uc(t),e]},useSyncExternalStore:mx,useId:Hx};mr.useCacheRefresh=Vx;mr.useMemoCache=Om;mr.useHostTransitionStatus=Hm;mr.useFormState=Ax;mr.useActionState=Ax;mr.useOptimistic=function(t,e){var n=Kt();return Sx(n,bt,t,e)};var is={readContext:Tn,use:Bf,useCallback:Nx,useContext:Tn,useEffect:Im,useImperativeHandle:Ux,useInsertionEffect:Dx,useLayoutEffect:Lx,useMemo:Ox,useReducer:gh,useRef:Rx,useState:function(){return gh(ya)},useDebugValue:Fm,useDeferredValue:function(t,e){var n=Kt();return bt===null?Bm(n,t,e):zx(n,bt.memoizedState,t,e)},useTransition:function(){var t=gh(ya)[0],e=Kt().memoizedState;return[typeof t=="boolean"?t:uc(t),e]},useSyncExternalStore:mx,useId:Hx};is.useCacheRefresh=Vx;is.useMemoCache=Om;is.useHostTransitionStatus=Hm;is.useFormState=Cx;is.useActionState=Cx;is.useOptimistic=function(t,e){var n=Kt();return bt!==null?Sx(n,bt,t,e):(n.baseState=t,[t,n.queue.dispatch])};function _h(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:zt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jd={isMounted:function(t){return(t=t._reactInternals)?wo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$n(),a=$a(i);a.payload=e,n!=null&&(a.callback=n),e=Ja(t,a,i),e!==null&&(Ln(e,t,i),bl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$n(),a=$a(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Ja(t,a,i),e!==null&&(Ln(e,t,i),bl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$n(),i=$a(n);i.tag=2,e!=null&&(i.callback=e),e=Ja(t,i,n),e!==null&&(Ln(e,t,n),bl(e,t,n))}};function w_(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!kl(n,i)||!kl(a,r):!0}function C_(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jd.enqueueReplaceState(e,e.state,null)}function Zr(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=zt({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}var $u=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Xx(t){$u(t)}function Wx(t){console.error(t)}function Yx(t){$u(t)}function Ju(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function R_(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Xd(t,e,n){return n=$a(n),n.tag=3,n.payload={element:null},n.callback=function(){Ju(t,e)},n}function qx(t){return t=$a(t),t.tag=3,t}function Zx(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;t.payload=function(){return a(r)},t.callback=function(){R_(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){R_(e,n,i),typeof a!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function p1(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&fc(e,n,a,!0),n=pi.current,n!==null){switch(n.tag){case 13:return Vi===null?sp():n.alternate===null&&jt===0&&(jt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Fd?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Dh(t,i,a)),!1;case 22:return n.flags|=65536,i===Fd?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Dh(t,i,a)),!1}throw Error(ee(435,n.tag))}return Dh(t,i,a),sp(),!1}if(mt)return e=pi.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==Id&&(t=Error(ee(422),{cause:i}),Gl(ui(t,n)))):(i!==Id&&(e=Error(ee(423),{cause:i}),Gl(ui(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=ui(i,n),a=Xd(t.stateNode,i,a),bh(t,a),jt!==4&&(jt=2)),!1;var r=Error(ee(520),{cause:i});if(r=ui(r,n),wl===null?wl=[r]:wl.push(r),jt!==4&&(jt=2),e===null)return!0;i=ui(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Xd(n.stateNode,i,t),bh(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(tr===null||!tr.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=qx(a),Zx(a,t,n,i),bh(n,a),!1}n=n.return}while(n!==null);return!1}var Kx=Error(ee(461)),dn=!1;function gn(t,e,n,i){e.child=t===null?ux(e,null,n,i):Yr(e,t.child,n,i)}function D_(t,e,n,i,a){n=n.render;var r=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Kr(e),i=Lm(t,e,n,s,r,a),o=Pm(),t!==null&&!dn?(Um(t,e,a),xa(t,e,a)):(mt&&o&&Tm(e),e.flags|=1,gn(t,e,i,a),e.child)}function L_(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!Wm(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,Qx(t,e,r,i,a)):(t=Au(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!km(t,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:kl,n(s,i)&&t.ref===e.ref)return xa(t,e,a)}return e.flags|=1,t=er(r,i),t.ref=e.ref,t.return=e,e.child=t}function Qx(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(kl(r,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=r,km(t,a))t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,xa(t,e,a)}return Wd(t,e,n,i,a)}function $x(t,e,n){var i=e.pendingProps,a=i.children,r=(e.stateNode._pendingVisibility&2)!==0,s=t!==null?t.memoizedState:null;if(Ml(t,e),i.mode==="hidden"||r){if(e.flags&128){if(i=s!==null?s.baseLanes|n:n,t!==null){for(a=e.child=t.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;e.childLanes=r&~i}else e.childLanes=0,e.child=null;return P_(t,e,i,n)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Mu(e,s!==null?s.cachePool:null),s!==null?S_(e,s):Bd(),fx(e);else return e.lanes=e.childLanes=536870912,P_(t,e,s!==null?s.baseLanes|n:n,n)}else s!==null?(Mu(e,s.cachePool),S_(e,s),ja(),e.memoizedState=null):(t!==null&&Mu(e,null),Bd(),ja());return gn(t,e,a,n),e.child}function P_(t,e,n,i){var a=Rm();return a=a===null?null:{parent:nn._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&Mu(e,null),Bd(),fx(e),t!==null&&fc(t,e,i,!0),null}function Ml(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(ee(284));(t===null||t.ref!==n)&&(e.flags|=2097664)}}function Wd(t,e,n,i,a){return Kr(e),n=Lm(t,e,n,i,void 0,a),i=Pm(),t!==null&&!dn?(Um(t,e,a),xa(t,e,a)):(mt&&i&&Tm(e),e.flags|=1,gn(t,e,n,a),e.child)}function U_(t,e,n,i,a,r){return Kr(e),e.updateQueue=null,n=px(e,i,n,a),dx(t),i=Pm(),t!==null&&!dn?(Um(t,e,r),xa(t,e,r)):(mt&&i&&Tm(e),e.flags|=1,gn(t,e,n,r),e.child)}function N_(t,e,n,i,a){if(Kr(e),e.stateNode===null){var r=js,s=n.contextType;typeof s=="object"&&s!==null&&(r=Tn(s)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=jd,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},Gm(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?Tn(s):js,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(_h(e,n,s,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&jd.enqueueReplaceState(r,r.state,null),Tl(e,i,r,a),El(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=Zr(n,o);r.props=l;var c=r.context,u=n.contextType;s=js,typeof u=="object"&&u!==null&&(s=Tn(u));var f=n.getDerivedStateFromProps;u=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&C_(e,r,i,s),Ha=!1;var h=e.memoizedState;r.state=h,Tl(e,i,r,a),El(),c=e.memoizedState,o||h!==c||Ha?(typeof f=="function"&&(_h(e,n,f,i),c=e.memoizedState),(l=Ha||w_(e,n,l,i,h,c,s))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,$d(t,e),s=e.memoizedProps,u=Zr(n,s),r.props=u,f=e.pendingProps,h=r.context,c=n.contextType,l=js,typeof c=="object"&&c!==null&&(l=Tn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==f||h!==l)&&C_(e,r,i,l),Ha=!1,h=e.memoizedState,r.state=h,Tl(e,i,r,a),El();var p=e.memoizedState;s!==f||h!==p||Ha||t!==null&&t.dependencies!==null&&ef(t.dependencies)?(typeof o=="function"&&(_h(e,n,o,i),p=e.memoizedState),(u=Ha||w_(e,n,u,i,h,p,l)||t!==null&&t.dependencies!==null&&ef(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),r.props=i,r.state=p,r.context=l,i=u):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,Ml(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=Yr(e,t.child,null,a),e.child=Yr(e,null,n,a)):gn(t,e,n,a),e.memoizedState=r.state,t=e.child):t=xa(t,e,a),t}function O_(t,e,n,i){return lc(),e.flags|=256,gn(t,e,n,i),e.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function yh(t){return{baseLanes:t,cachePool:hx()}}function xh(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=hi),t}function Jx(t,e,n){var i=e.pendingProps,a=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(mt){if(a?Ga(e):ja(),mt){var o=_n,l;if(l=o){e:{for(l=o,o=Ni;l.nodeType!==8;){if(!o){o=null;break e}if(l=Ai(l.nextSibling),l===null){o=null;break e}}o=l}o!==null?(e.memoizedState={dehydrated:o,treeContext:Vr!==null?{id:ua,overflow:fa}:null,retryLane:536870912},l=fi(18,null,null,0),l.stateNode=o,l.return=e,e.child=l,Rn=e,_n=null,l=!0):l=!1}l||Wr(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return o.data==="$!"?e.lanes=16:e.lanes=536870912,null;ha(e)}return o=i.children,i=i.fallback,a?(ja(),a=e.mode,o=qd({mode:"hidden",children:o},a),i=Gr(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,a=e.child,a.memoizedState=yh(n),a.childLanes=xh(t,s,n),e.memoizedState=vh,i):(Ga(e),Yd(e,o))}if(l=t.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)e.flags&256?(Ga(e),e.flags&=-257,e=Sh(t,e,n)):e.memoizedState!==null?(ja(),e.child=t.child,e.flags|=128,e=null):(ja(),a=i.fallback,o=e.mode,i=qd({mode:"visible",children:i.children},o),a=Gr(a,o,n,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,Yr(e,t.child,null,n),i=e.child,i.memoizedState=yh(n),i.childLanes=xh(t,s,n),e.memoizedState=vh,e=a);else if(Ga(e),o.data==="$!"){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(ee(419)),i.stack="",i.digest=s,Gl({value:i,source:null,stack:null}),e=Sh(t,e,n)}else if(dn||fc(t,e,n,!1),s=(n&t.childLanes)!==0,dn||s){if(s=Lt,s!==null){if(i=n&-n,i&42)i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=64;break;case 268435456:i=134217728;break;default:i=0}if(i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane)throw l.retryLane=i,sr(t,i),Ln(s,t,i),Kx}o.data==="$?"||sp(),e=Sh(t,e,n)}else o.data==="$?"?(e.flags|=128,e.child=t.child,e=R1.bind(null,t),o._reactRetry=e,e=null):(t=l.treeContext,_n=Ai(o.nextSibling),Rn=e,mt=!0,Ei=null,Ni=!1,t!==null&&(oi[li++]=ua,oi[li++]=fa,oi[li++]=Vr,ua=t.id,fa=t.overflow,Vr=e),e=Yd(e,i.children),e.flags|=4096);return e}return a?(ja(),a=i.fallback,o=e.mode,l=t.child,c=l.sibling,i=er(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&31457280,c!==null?a=er(c,a):(a=Gr(a,o,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o===null?o=yh(n):(l=o.cachePool,l!==null?(c=nn._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=hx(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=xh(t,s,n),e.memoizedState=vh,i):(Ga(e),n=t.child,t=n.sibling,n=er(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function Yd(t,e){return e=qd({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function qd(t,e){return SS(t,e,0,null)}function Sh(t,e,n){return Yr(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function z_(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Kd(t.return,e,n)}function Mh(t,e,n,i,a){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function eS(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;if(gn(t,e,i.children,n),i=rn.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&z_(t,n,e);else if(t.tag===19)z_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(It(rn,i),a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&Zu(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Mh(e,!1,a,n,r);break;case"backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Zu(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Mh(e,!0,n,null,r);break;case"together":Mh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xa(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cr|=e.lanes,!(n&e.childLanes))if(t!==null){if(fc(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function km(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&ef(t)))}function m1(t,e,n){switch(e.tag){case 3:Hu(e,e.stateNode.containerInfo),Xa(e,nn,t.memoizedState.cache),lc();break;case 27:case 5:Cd(e);break;case 4:Hu(e,e.stateNode.containerInfo);break;case 10:Xa(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Ga(e),e.flags|=128,null):n&e.child.childLanes?Jx(t,e,n):(Ga(e),t=xa(t,e,n),t!==null?t.sibling:null);Ga(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(fc(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return eS(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),It(rn,rn.current),i)break;return null;case 22:case 23:return e.lanes=0,$x(t,e,n);case 24:Xa(e,nn,t.memoizedState.cache)}return xa(t,e,n)}function tS(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)dn=!0;else{if(!km(t,n)&&!(e.flags&128))return dn=!1,m1(t,e,n);dn=!!(t.flags&131072)}else dn=!1,mt&&e.flags&1048576&&sx(e,Yu,e.index);switch(e.lanes=0,e.tag){case 16:e:{t=e.pendingProps;var i=e.elementType,a=i._init;if(i=a(i._payload),e.type=i,typeof i=="function")Wm(i)?(t=Zr(i,t),e.tag=1,e=N_(null,e,i,t,n)):(e.tag=0,e=Wd(null,e,i,t,n));else{if(i!=null){if(a=i.$$typeof,a===dm){e.tag=11,e=D_(null,e,i,t,n);break e}else if(a===pm){e.tag=14,e=L_(null,e,i,t,n);break e}}throw e=Ad(i)||i,Error(ee(306,e,""))}}return e;case 0:return Wd(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=Zr(i,e.pendingProps),N_(t,e,i,a,n);case 3:e:{if(Hu(e,e.stateNode.containerInfo),t===null)throw Error(ee(387));var r=e.pendingProps;a=e.memoizedState,i=a.element,$d(t,e),Tl(e,r,null,n);var s=e.memoizedState;if(r=s.cache,Xa(e,nn,r),r!==a.cache&&Qd(e,[nn],n,!0),El(),r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){e=O_(t,e,r,n);break e}else if(r!==i){i=ui(Error(ee(424)),e),Gl(i),e=O_(t,e,r,n);break e}else for(_n=Ai(e.stateNode.containerInfo.firstChild),Rn=e,mt=!0,Ei=null,Ni=!0,n=ux(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lc(),r===i){e=xa(t,e,n);break e}gn(t,e,r,n)}e=e.child}return e;case 26:return Ml(t,e),t===null?(n=ev(e.type,null,e.pendingProps,null))?e.memoizedState=n:mt||(n=e.type,t=e.pendingProps,i=lf(Qa.current).createElement(n),i[En]=e,i[Fn]=t,vn(i,n,t),hn(i),e.stateNode=i):e.memoizedState=ev(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Cd(e),t===null&&mt&&(i=e.stateNode=BS(e.type,e.pendingProps,Qa.current),Rn=e,Ni=!0,_n=Ai(i.firstChild)),i=e.pendingProps.children,t!==null||mt?gn(t,e,i,n):e.child=Yr(e,null,i,n),Ml(t,e),e.child;case 5:return t===null&&mt&&((a=i=_n)&&(i=X1(i,e.type,e.pendingProps,Ni),i!==null?(e.stateNode=i,Rn=e,_n=Ai(i.firstChild),Ni=!1,a=!0):a=!1),a||Wr(e)),Cd(e),a=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,i=r.children,fp(a,r)?i=null:s!==null&&fp(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=Lm(t,e,l1,null,null,n),Zl._currentValue=a),Ml(t,e),gn(t,e,i,n),e.child;case 6:return t===null&&mt&&((t=n=_n)&&(n=W1(n,e.pendingProps,Ni),n!==null?(e.stateNode=n,Rn=e,_n=null,t=!0):t=!1),t||Wr(e)),null;case 13:return Jx(t,e,n);case 4:return Hu(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Yr(e,null,i,n):gn(t,e,i,n),e.child;case 11:return D_(t,e,e.type,e.pendingProps,n);case 7:return gn(t,e,e.pendingProps,n),e.child;case 8:return gn(t,e,e.pendingProps.children,n),e.child;case 12:return gn(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Xa(e,e.type,i.value),gn(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,Kr(e),a=Tn(a),i=i(a),e.flags|=1,gn(t,e,i,n),e.child;case 14:return L_(t,e,e.type,e.pendingProps,n);case 15:return Qx(t,e,e.type,e.pendingProps,n);case 19:return eS(t,e,n);case 22:return $x(t,e,n);case 24:return Kr(e),i=Tn(nn),t===null?(a=Rm(),a===null&&(a=Lt,r=Cm(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),e.memoizedState={parent:i,cache:a},Gm(e),Xa(e,nn,a)):(t.lanes&n&&($d(t,e),Tl(e,null,null,n),El()),a=t.memoizedState,r=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),Xa(e,nn,i)):(i=r.cache,Xa(e,nn,i),i!==a.cache&&Qd(e,[nn],n,!0))),gn(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(ee(156,e.tag))}var Zd=Wi(null),as=null,da=null;function Xa(t,e,n){It(Zd,e._currentValue),e._currentValue=n}function ga(t){t._currentValue=Zd.current,pn(Zd)}function Kd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qd(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Kd(r.return,n,t),i||(s=null);break e}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(ee(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Kd(s,n,t),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function fc(t,e,n,i){t=null;for(var a=e,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(ee(387));if(s=s.memoizedProps,s!==null){var o=a.type;Jn(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===Bu.current){if(s=a.alternate,s===null)throw Error(ee(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Zl):t=[Zl])}a=a.return}t!==null&&Qd(e,t,n,i),e.flags|=262144}function ef(t){for(t=t.firstContext;t!==null;){if(!Jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Kr(t){as=t,da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return nS(as,t)}function Dc(t,e){return as===null&&Kr(t),nS(t,e)}function nS(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},da===null){if(t===null)throw Error(ee(308));da=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else da=da.next=e;return n}var Ha=!1;function Gm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $d(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function $a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Vt&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=Xu(t),rx(t,null,n),e}return If(t,i,e,n),Xu(t)}function bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194176)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Py(t,n)}}function bh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Jd=!1;function El(){if(Jd){var t=no;if(t!==null)throw t}}function Tl(t,e,n,i){Jd=!1;var a=t.updateQueue;Ha=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==s&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(r!==null){var f=a.baseState;s=0,u=c=l=null,o=r;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(dt&h)===h:(i&h)===h){h!==0&&h===mo&&(Jd=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var _=t,y=o;h=e;var m=n;switch(y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=zt({},f,h);break e;case 2:Ha=!0}}h=o.callback,h!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,s|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);u===null&&(l=f),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=u,r===null&&(a.shared.lanes=0),cr|=s,t.lanes=s,t.memoizedState=f}}function iS(t,e){if(typeof t!="function")throw Error(ee(191,t));t.call(e)}function aS(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)iS(n[t],e)}function hc(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){At(e,e.return,o)}}function lr(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var l=n;try{o()}catch(c){At(a,l,c)}}}i=i.next}while(i!==r)}}catch(c){At(e,e.return,c)}}function rS(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{aS(e,n)}catch(i){At(t,t.return,i)}}}function sS(t,e,n){n.props=Zr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){At(t,e,i)}}function zr(t,e){try{var n=t.ref;if(n!==null){var i=t.stateNode;switch(t.tag){case 26:case 27:case 5:var a=i;break;default:a=i}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(r){At(t,e,r)}}function qn(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){At(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){At(t,e,a)}else n.current=null}function oS(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){At(t,t.return,a)}}function I_(t,e,n){try{var i=t.stateNode;H1(i,t.type,n,e),i[Fn]=e}catch(a){At(t,t.return,a)}}function lS(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Eh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ep(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jf));else if(i!==4&&i!==27&&(t=t.child,t!==null))for(ep(t,e,n),t=t.sibling;t!==null;)ep(t,e,n),t=t.sibling}function tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&i!==27&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}var sa=!1,Gt=!1,Th=!1,F_=typeof WeakSet=="function"?WeakSet:Set,fn=null,B_=!1;function g1(t,e){if(t=t.containerInfo,cp=hf,t=$y(t),Mm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||a!==0&&f.nodeType!==3||(o=s+a),f!==r||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===a&&(o=s),h===r&&++u===i&&(l=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(up={focusedElem:t,selectionRange:n},hf=!1,fn=e;fn!==null;)if(e=fn,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fn=t;else for(;fn!==null;){switch(e=fn,r=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&r!==null){t=void 0,n=e,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var _=Zr(n.type,a,n.elementType===n.type);t=i.getSnapshotBeforeUpdate(_,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(y){At(n,n.return,y)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)hp(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hp(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(ee(163))}if(t=e.sibling,t!==null){t.return=e.return,fn=t;break}fn=e.return}return _=B_,B_=!1,_}function cS(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Qi(t,n),i&4&&hc(5,n);break;case 1:if(Qi(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(o){At(n,n.return,o)}else{var a=Zr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){At(n,n.return,o)}}i&64&&rS(n),i&512&&zr(n,n.return);break;case 3:if(Qi(t,n),i&64&&(i=n.updateQueue,i!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{aS(i,t)}catch(o){At(n,n.return,o)}}break;case 26:Qi(t,n),i&512&&zr(n,n.return);break;case 27:case 5:Qi(t,n),e===null&&i&4&&oS(n),i&512&&zr(n,n.return);break;case 12:Qi(t,n);break;case 13:Qi(t,n),i&4&&hS(t,n);break;case 22:if(a=n.memoizedState!==null||sa,!a){e=e!==null&&e.memoizedState!==null||Gt;var r=sa,s=Gt;sa=a,(Gt=e)&&!s?Ia(t,n,(n.subtreeFlags&8772)!==0):Qi(t,n),sa=r,Gt=s}i&512&&(n.memoizedProps.mode==="manual"?zr(n,n.return):qn(n,n.return));break;default:Qi(t,n)}}function uS(t){var e=t.alternate;e!==null&&(t.alternate=null,uS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&gm(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,Xn=!1;function Ki(t,e,n){for(n=n.child;n!==null;)fS(t,e,n),n=n.sibling}function fS(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 26:Gt||qn(n,e),Ki(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Gt||qn(n,e);var i=qt,a=Xn;for(qt=n.stateNode,Ki(t,e,n),n=n.stateNode,e=n.attributes;e.length;)n.removeAttributeNode(e[0]);gm(n),qt=i,Xn=a;break;case 5:Gt||qn(n,e);case 6:a=qt;var r=Xn;if(qt=null,Ki(t,e,n),qt=a,Xn=r,qt!==null)if(Xn)try{t=qt,i=n.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)}catch(s){At(n,e,s)}else try{qt.removeChild(n.stateNode)}catch(s){At(n,e,s)}break;case 18:qt!==null&&(Xn?(e=qt,n=n.stateNode,e.nodeType===8?Ih(e.parentNode,n):e.nodeType===1&&Ih(e,n),$l(e)):Ih(qt,n.stateNode));break;case 4:i=qt,a=Xn,qt=n.stateNode.containerInfo,Xn=!0,Ki(t,e,n),qt=i,Xn=a;break;case 0:case 11:case 14:case 15:Gt||lr(2,n,e),Gt||lr(4,n,e),Ki(t,e,n);break;case 1:Gt||(qn(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&sS(n,e,i)),Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:Gt||qn(n,e),Gt=(i=Gt)||n.memoizedState!==null,Ki(t,e,n),Gt=i;break;default:Ki(t,e,n)}}function hS(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{$l(t)}catch(n){At(e,e.return,n)}}function _1(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new F_),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new F_),e;default:throw Error(ee(435,t.tag))}}function Ah(t,e){var n=_1(t);e.forEach(function(i){var a=D1.bind(null,t,i);n.has(i)||(n.add(i),i.then(a,a))})}function ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 27:case 5:qt=o.stateNode,Xn=!1;break e;case 3:qt=o.stateNode.containerInfo,Xn=!0;break e;case 4:qt=o.stateNode.containerInfo,Xn=!0;break e}o=o.return}if(qt===null)throw Error(ee(160));fS(r,s,a),qt=null,Xn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)dS(e,t),e=e.sibling}var Si=null;function dS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ti(e,t),ni(t),i&4&&(lr(3,t,t.return),hc(3,t),lr(5,t,t.return));break;case 1:ti(e,t),ni(t),i&512&&(Gt||n===null||qn(n,n.return)),i&64&&sa&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Si;if(ti(e,t),ni(t),i&512&&(Gt||n===null||qn(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Bl]||r[En]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),vn(r,i,n),r[En]=t,hn(r),i=r;break e;case"link":var s=nv("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break t}}r=a.createElement(i),vn(r,i,n),a.head.appendChild(r);break;case"meta":if(s=nv("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break t}}r=a.createElement(i),vn(r,i,n),a.head.appendChild(r);break;default:throw Error(ee(468,i))}r[En]=t,hn(r),i=r}t.stateNode=i}else iv(a,t.type,t.stateNode);else t.stateNode=tv(a,i,t.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?iv(a,t.type,t.stateNode):tv(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&I_(t,t.memoizedProps,n.memoizedProps)}break;case 27:if(i&4&&t.alternate===null){a=t.stateNode,r=t.memoizedProps;try{for(var l=a.firstChild;l;){var c=l.nextSibling,u=l.nodeName;l[Bl]||u==="HEAD"||u==="BODY"||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=c}for(var f=t.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);vn(a,f,r),a[En]=t,a[Fn]=r}catch(_){At(t,t.return,_)}}case 5:if(ti(e,t),ni(t),i&512&&(Gt||n===null||qn(n,n.return)),t.flags&32){a=t.stateNode;try{ho(a,"")}catch(_){At(t,t.return,_)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,I_(t,a,n!==null?n.memoizedProps:a)),i&1024&&(Th=!0);break;case 6:if(ti(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(ee(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(_){At(t,t.return,_)}}break;case 3:if(Cu=null,a=Si,Si=cf(e.containerInfo),ti(e,t),Si=a,ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$l(e.containerInfo)}catch(_){At(t,t.return,_)}Th&&(Th=!1,pS(t));break;case 4:i=Si,Si=cf(t.stateNode.containerInfo),ti(e,t),ni(t),Si=i;break;case 12:ti(e,t),ni(t);break;case 13:ti(e,t),ni(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zm=Hi()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Ah(t,i)));break;case 22:if(i&512&&(Gt||n===null||qn(n,n.return)),l=t.memoizedState!==null,c=n!==null&&n.memoizedState!==null,u=sa,f=Gt,sa=u||l,Gt=f||c,ti(e,t),Gt=f,sa=u,ni(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,i&8192&&(e._visibility=l?e._visibility&-2:e._visibility|1,l&&(e=sa||Gt,n===null||c||e||Ls(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(n=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(n===null){c=n=e;try{if(a=c.stateNode,l)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=c.stateNode,o=c.memoizedProps.style;var p=o!=null&&o.hasOwnProperty("display")?o.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(_){At(c,c.return,_)}}}else if(e.tag===6){if(n===null){c=e;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(_){At(c,c.return,_)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ah(t,n))));break;case 19:ti(e,t),ni(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Ah(t,i)));break;case 21:break;default:ti(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{if(t.tag!==27){e:{for(var n=t.return;n!==null;){if(lS(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 27:var a=i.stateNode,r=Eh(t);tf(t,r,a);break;case 5:var s=i.stateNode;i.flags&32&&(ho(s,""),i.flags&=-33);var o=Eh(t);tf(t,o,s);break;case 3:case 4:var l=i.stateNode.containerInfo,c=Eh(t);ep(t,c,l);break;default:throw Error(ee(161))}}}catch(u){At(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pS(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;pS(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Qi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)cS(t,e.alternate,e),e=e.sibling}function Ls(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:lr(4,e,e.return),Ls(e);break;case 1:qn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&sS(e,e.return,n),Ls(e);break;case 26:case 27:case 5:qn(e,e.return),Ls(e);break;case 22:qn(e,e.return),e.memoizedState===null&&Ls(e);break;default:Ls(e)}t=t.sibling}}function Ia(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,r=e,s=r.flags;switch(r.tag){case 0:case 11:case 15:Ia(a,r,n),hc(4,r);break;case 1:if(Ia(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){At(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)iS(l[a],o)}catch(c){At(i,i.return,c)}}n&&s&64&&rS(r),zr(r,r.return);break;case 26:case 27:case 5:Ia(a,r,n),n&&i===null&&s&4&&oS(r),zr(r,r.return);break;case 12:Ia(a,r,n);break;case 13:Ia(a,r,n),n&&s&4&&hS(a,r);break;case 22:r.memoizedState===null&&Ia(a,r,n),zr(r,r.return);break;default:Ia(a,r,n)}e=e.sibling}}function jm(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&cc(n))}function Xm(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&cc(t))}function Ra(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mS(t,e,n,i),e=e.sibling}function mS(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Ra(t,e,n,i),a&2048&&hc(9,e);break;case 3:Ra(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&cc(t)));break;case 12:if(a&2048){Ra(t,e,n,i),t=e.stateNode;try{var r=e.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){At(e,e.return,l)}}else Ra(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,e.memoizedState!==null?r._visibility&4?Ra(t,e,n,i):Al(t,e):r._visibility&4?Ra(t,e,n,i):(r._visibility|=4,Ps(t,e,n,i,(e.subtreeFlags&10256)!==0)),a&2048&&jm(e.alternate,e);break;case 24:Ra(t,e,n,i),a&2048&&Xm(e.alternate,e);break;default:Ra(t,e,n,i)}}function Ps(t,e,n,i,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=t,s=e,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Ps(r,s,o,l,a),hc(8,s);break;case 23:break;case 22:var u=s.stateNode;s.memoizedState!==null?u._visibility&4?Ps(r,s,o,l,a):Al(r,s):(u._visibility|=4,Ps(r,s,o,l,a)),a&&c&2048&&jm(s.alternate,s);break;case 24:Ps(r,s,o,l,a),a&&c&2048&&Xm(s.alternate,s);break;default:Ps(r,s,o,l,a)}e=e.sibling}}function Al(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:Al(n,i),a&2048&&jm(i.alternate,i);break;case 24:Al(n,i),a&2048&&Xm(i.alternate,i);break;default:Al(n,i)}e=e.sibling}}var ll=8192;function us(t){if(t.subtreeFlags&ll)for(t=t.child;t!==null;)gS(t),t=t.sibling}function gS(t){switch(t.tag){case 26:us(t),t.flags&ll&&t.memoizedState!==null&&rT(Si,t.memoizedState,t.memoizedProps);break;case 5:us(t);break;case 3:case 4:var e=Si;Si=cf(t.stateNode.containerInfo),us(t),Si=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=ll,ll=16777216,us(t),ll=e):us(t));break;default:us(t)}}function _S(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function jo(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];fn=i,yS(i,t)}_S(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vS(t),t=t.sibling}function vS(t){switch(t.tag){case 0:case 11:case 15:jo(t),t.flags&2048&&lr(9,t,t.return);break;case 3:jo(t);break;case 12:jo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,Tu(t)):jo(t);break;default:jo(t)}}function Tu(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];fn=i,yS(i,t)}_S(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:lr(8,e,e.return),Tu(e);break;case 22:n=e.stateNode,n._visibility&4&&(n._visibility&=-5,Tu(e));break;default:Tu(e)}t=t.sibling}}function yS(t,e){for(;fn!==null;){var n=fn;switch(n.tag){case 0:case 11:case 15:lr(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:cc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,fn=i;else e:for(n=t;fn!==null;){i=fn;var a=i.sibling,r=i.return;if(uS(i),i===n){fn=null;break e}if(a!==null){a.return=r,fn=a;break e}fn=r}}}function v1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(t,e,n,i){return new v1(t,e,n,i)}function Wm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function er(t,e){var n=t.alternate;return n===null?(n=fi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&31457280,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function xS(t,e){t.flags&=31457282;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Au(t,e,n,i,a,r){var s=0;if(i=t,typeof t=="function")Wm(t)&&(s=1);else if(typeof t=="string")s=iT(t,n,Bi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Is:return Gr(n.children,a,r,e);case Sy:s=8,a|=24;break;case bd:return t=fi(12,n,e,a|2),t.elementType=bd,t.lanes=r,t;case Ed:return t=fi(13,n,e,a),t.elementType=Ed,t.lanes=r,t;case Td:return t=fi(19,n,e,a),t.elementType=Td,t.lanes=r,t;case by:return SS(n,a,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gb:case ca:s=10;break e;case My:s=9;break e;case dm:s=11;break e;case pm:s=14;break e;case Ba:s=16,i=null;break e}s=29,n=Error(ee(130,t===null?"null":typeof t,"")),i=null}return e=fi(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function Gr(t,e,n,i){return t=fi(7,t,i,e),t.lanes=n,t}function SS(t,e,n,i){t=fi(22,t,i,e),t.elementType=by,t.lanes=n;var a={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var r=a._current;if(r===null)throw Error(ee(456));if(!(a._pendingVisibility&2)){var s=sr(r,2);s!==null&&(a._pendingVisibility|=2,Ln(s,r,2))}},attach:function(){var r=a._current;if(r===null)throw Error(ee(456));if(a._pendingVisibility&2){var s=sr(r,2);s!==null&&(a._pendingVisibility&=-3,Ln(s,r,2))}}};return t.stateNode=a,t}function wh(t,e,n){return t=fi(6,t,null,e),t.lanes=n,t}function Ch(t,e,n){return e=fi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $i(t){t.flags|=4}function H_(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!kS(e)){if(e=pi.current,e!==null&&((dt&4194176)===dt?Vi!==null:(dt&62914560)!==dt&&!(dt&536870912)||e!==Vi))throw yl=Fd,ox;t.flags|=8192}}function Lc(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Dy():536870912,t.lanes|=e,_o|=e)}function Xo(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&31457280,i|=a.flags&31457280,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function y1(t,e,n){var i=e.pendingProps;switch(Am(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return Bt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ga(nn),uo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ko(e)?$i(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ei!==null&&(rp(Ei),Ei=null))),Bt(e),null;case 26:return n=e.memoizedState,t===null?($i(e),n!==null?(Bt(e),H_(e,n)):(Bt(e),e.flags&=-16777217)):n?n!==t.memoizedState?($i(e),Bt(e),H_(e,n)):(Bt(e),e.flags&=-16777217):(t.memoizedProps!==i&&$i(e),Bt(e),e.flags&=-16777217),null;case 27:Vu(e),n=Qa.current;var a=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&$i(e);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Bt(e),null}t=Bi.current,ko(e)?g_(e):(t=BS(a,i,n),e.stateNode=t,$i(e))}return Bt(e),null;case 5:if(Vu(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&$i(e);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Bt(e),null}if(t=Bi.current,ko(e))g_(e);else{switch(a=lf(Qa.current),t){case 1:t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}t[En]=e,t[Fn]=i;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=t;e:switch(vn(t,n,i),n){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&$i(e)}}return Bt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&$i(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=Qa.current,ko(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=Rn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[En]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||zS(t.nodeValue,n)),t||Wr(e)}else t=lf(t).createTextNode(i),t[En]=e,e.stateNode=t}return Bt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=ko(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ee(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ee(317));a[En]=e}else lc(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),a=!1}else Ei!==null&&(rp(Ei),Ei=null),a=!0;if(!a)return e.flags&256?(ha(e),e):(ha(e),null)}if(ha(e),e.flags&128)return e.lanes=n,e;if(n=i!==null,t=t!==null&&t.memoizedState!==null,n){i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Lc(e,e.updateQueue),Bt(e),null;case 4:return uo(),t===null&&$m(e.stateNode.containerInfo),Bt(e),null;case 10:return ga(e.type),Bt(e),null;case 19:if(pn(rn),a=e.memoizedState,a===null)return Bt(e),null;if(i=(e.flags&128)!==0,r=a.rendering,r===null)if(i)Xo(a,!1);else{if(jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=Zu(t),r!==null){for(e.flags|=128,Xo(a,!1),t=r.updateQueue,e.updateQueue=t,Lc(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)xS(n,t),n=n.sibling;return It(rn,rn.current&1|2),e.child}t=t.sibling}a.tail!==null&&Hi()>nf&&(e.flags|=128,i=!0,Xo(a,!1),e.lanes=4194304)}else{if(!i)if(t=Zu(r),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Lc(e,t),Xo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!mt)return Bt(e),null}else 2*Hi()-a.renderingStartTime>nf&&n!==536870912&&(e.flags|=128,i=!0,Xo(a,!1),e.lanes=4194304);a.isBackwards?(r.sibling=e.child,e.child=r):(t=a.last,t!==null?t.sibling=r:e.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Hi(),e.sibling=null,t=rn.current,It(rn,i?t&1|2:t&1),e):(Bt(e),null);case 22:case 23:return ha(e),wm(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),n=e.updateQueue,n!==null&&Lc(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&pn(kr),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ga(nn),Bt(e),null;case 25:return null}throw Error(ee(156,e.tag))}function x1(t,e){switch(Am(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ga(nn),uo(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Vu(e),null;case 13:if(ha(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));lc()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pn(rn),null;case 4:return uo(),null;case 10:return ga(e.type),null;case 22:case 23:return ha(e),wm(),t!==null&&pn(kr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ga(nn),null;case 25:return null;default:return null}}function MS(t,e){switch(Am(e),e.tag){case 3:ga(nn),uo();break;case 26:case 27:case 5:Vu(e);break;case 4:uo();break;case 13:ha(e);break;case 19:pn(rn);break;case 10:ga(e.type);break;case 22:case 23:ha(e),wm(),t!==null&&pn(kr);break;case 24:ga(nn)}}var S1={getCacheForType:function(t){var e=Tn(nn),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},M1=typeof WeakMap=="function"?WeakMap:Map,Vt=0,Lt=null,ct=null,dt=0,Rt=0,Wn=null,oa=!1,Do=!1,Ym=!1,Sa=0,jt=0,cr=0,jr=0,qm=0,hi=0,_o=0,wl=null,Oi=null,tp=!1,Zm=0,nf=1/0,af=null,tr=null,Pc=!1,Lr=null,Cl=0,np=0,ip=null,Rl=0,ap=null;function $n(){if(Vt&2&&dt!==0)return dt&-dt;if($e.T!==null){var t=mo;return t!==0?t:Qm()}return Ny()}function bS(){hi===0&&(hi=!(dt&536870912)||mt?Ry():536870912);var t=pi.current;return t!==null&&(t.flags|=32),hi}function Ln(t,e,n){(t===Lt&&Rt===2||t.cancelPendingCommit!==null)&&(vo(t,0),la(t,dt,hi,!1)),sc(t,n),(!(Vt&2)||t!==Lt)&&(t===Lt&&(!(Vt&2)&&(jr|=n),jt===4&&la(t,dt,hi,!1)),Yi(t))}function ES(t,e,n){if(Vt&6)throw Error(ee(327));var i=!n&&(e&60)===0&&(e&t.expiredLanes)===0||rc(t,e),a=i?T1(t,e):Rh(t,e,!0),r=i;do{if(a===0){Do&&!i&&la(t,e,0,!1);break}else if(a===6)la(t,e,0,!oa);else{if(n=t.current.alternate,r&&!b1(n)){a=Rh(t,e,!1),r=!1;continue}if(a===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var o=t;a=wl;var l=o.current.memoizedState.isDehydrated;if(l&&(vo(o,s).flags|=256),s=Rh(o,s,!1),s!==2){if(Ym&&!l){o.errorRecoveryDisabledLanes|=r,jr|=r,a=4;break e}r=Oi,Oi=a,r!==null&&rp(r)}a=s}if(r=!1,a!==2)continue}}if(a===1){vo(t,0),la(t,e,0,!0);break}e:{switch(i=t,a){case 0:case 1:throw Error(ee(345));case 4:if((e&4194176)===e){la(i,e,hi,!oa);break e}break;case 2:Oi=null;break;case 3:case 5:break;default:throw Error(ee(329))}if(i.finishedWork=n,i.finishedLanes=e,(e&62914560)===e&&(r=Zm+300-Hi(),10<r)){if(la(i,e,hi,!oa),Pf(i,0)!==0)break e;i.timeoutHandle=FS(V_.bind(null,i,n,Oi,af,tp,e,hi,jr,_o,oa,2,-0,0),r);break e}V_(i,n,Oi,af,tp,e,hi,jr,_o,oa,0,-0,0)}}break}while(!0);Yi(t)}function rp(t){Oi===null?Oi=t:Oi.push.apply(Oi,t)}function V_(t,e,n,i,a,r,s,o,l,c,u,f,h){var p=e.subtreeFlags;if((p&8192||(p&16785408)===16785408)&&(ql={stylesheets:null,count:0,unsuspend:aT},gS(e),e=sT(),e!==null)){t.cancelPendingCommit=e(G_.bind(null,t,n,i,a,s,o,l,1,f,h)),la(t,r,s,!c);return}G_(t,n,i,a,s,o,l,u,f,h)}function b1(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Jn(r(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function la(t,e,n,i){e&=~qm,e&=~jr,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var r=31-Qn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&Ly(t,n,e)}function kf(){return Vt&6?!0:(dc(0),!1)}function Km(){if(ct!==null){if(Rt===0)var t=ct.return;else t=ct,da=as=null,Nm(t),to=null,jl=0,t=ct;for(;t!==null;)MS(t.alternate,t),t=t.return;ct=null}}function vo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,k1(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Km(),Lt=t,ct=n=er(t.current,null),dt=e,Rt=0,Wn=null,oa=!1,Do=rc(t,e),Ym=!1,_o=hi=qm=jr=cr=jt=0,Oi=wl=null,tp=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-Qn(i),r=1<<a;e|=t[a],i&=~r}return Sa=e,zf(),n}function TS(t,e){at=null,$e.H=ji,e===vl?(e=y_(),Rt=3):e===ox?(e=y_(),Rt=4):Rt=e===Kx?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Wn=e,ct===null&&(jt=1,Ju(t,ui(e,t.current)))}function AS(){var t=$e.H;return $e.H=ji,t===null?ji:t}function wS(){var t=$e.A;return $e.A=S1,t}function sp(){jt=4,oa||(dt&4194176)!==dt&&pi.current!==null||(Do=!0),!(cr&134217727)&&!(jr&134217727)||Lt===null||la(Lt,dt,hi,!1)}function Rh(t,e,n){var i=Vt;Vt|=2;var a=AS(),r=wS();(Lt!==t||dt!==e)&&(af=null,vo(t,e)),e=!1;var s=jt;e:do try{if(Rt!==0&&ct!==null){var o=ct,l=Wn;switch(Rt){case 8:Km(),s=6;break e;case 3:case 2:case 6:pi.current===null&&(e=!0);var c=Rt;if(Rt=0,Wn=null,Ys(t,o,l,c),n&&Do){s=0;break e}break;default:c=Rt,Rt=0,Wn=null,Ys(t,o,l,c)}}E1(),s=jt;break}catch(u){TS(t,u)}while(!0);return e&&t.shellSuspendCounter++,da=as=null,Vt=i,$e.H=a,$e.A=r,ct===null&&(Lt=null,dt=0,zf()),s}function E1(){for(;ct!==null;)CS(ct)}function T1(t,e){var n=Vt;Vt|=2;var i=AS(),a=wS();Lt!==t||dt!==e?(af=null,nf=Hi()+500,vo(t,e)):Do=rc(t,e);e:do try{if(Rt!==0&&ct!==null){e=ct;var r=Wn;t:switch(Rt){case 1:Rt=0,Wn=null,Ys(t,e,r,1);break;case 2:if(v_(r)){Rt=0,Wn=null,k_(e);break}e=function(){Rt===2&&Lt===t&&(Rt=7),Yi(t)},r.then(e,e);break e;case 3:Rt=7;break e;case 4:Rt=5;break e;case 7:v_(r)?(Rt=0,Wn=null,k_(e)):(Rt=0,Wn=null,Ys(t,e,r,7));break;case 5:var s=null;switch(ct.tag){case 26:s=ct.memoizedState;case 5:case 27:var o=ct;if(!s||kS(s)){Rt=0,Wn=null;var l=o.sibling;if(l!==null)ct=l;else{var c=o.return;c!==null?(ct=c,Gf(c)):ct=null}break t}}Rt=0,Wn=null,Ys(t,e,r,5);break;case 6:Rt=0,Wn=null,Ys(t,e,r,6);break;case 8:Km(),jt=6;break e;default:throw Error(ee(462))}}A1();break}catch(u){TS(t,u)}while(!0);return da=as=null,$e.H=i,$e.A=a,Vt=n,ct!==null?0:(Lt=null,dt=0,zf(),jt)}function A1(){for(;ct!==null&&!qb();)CS(ct)}function CS(t){var e=tS(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,e===null?Gf(t):ct=e}function k_(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=U_(n,e,e.pendingProps,e.type,void 0,dt);break;case 11:e=U_(n,e,e.pendingProps,e.type.render,e.ref,dt);break;case 5:Nm(e);default:MS(n,e),e=ct=xS(e,Sa),e=tS(n,e,Sa)}t.memoizedProps=t.pendingProps,e===null?Gf(t):ct=e}function Ys(t,e,n,i){da=as=null,Nm(e),to=null,jl=0;var a=e.return;try{if(p1(t,a,e,n,dt)){jt=1,Ju(t,ui(n,t.current)),ct=null;return}}catch(r){if(a!==null)throw ct=a,r;jt=1,Ju(t,ui(n,t.current)),ct=null;return}e.flags&32768?(mt||i===1?t=!0:Do||dt&536870912?t=!1:(oa=t=!0,(i===2||i===3||i===6)&&(i=pi.current,i!==null&&i.tag===13&&(i.flags|=16384))),RS(e,t)):Gf(e)}function Gf(t){var e=t;do{if(e.flags&32768){RS(e,oa);return}t=e.return;var n=y1(e.alternate,e,Sa);if(n!==null){ct=n;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);jt===0&&(jt=5)}function RS(t,e){do{var n=x1(t.alternate,t);if(n!==null){n.flags&=32767,ct=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ct=t;return}ct=t=n}while(t!==null);jt=6,ct=null}function G_(t,e,n,i,a,r,s,o,l,c){var u=$e.T,f=Nt.p;try{Nt.p=2,$e.T=null,w1(t,e,n,i,f,a,r,s,o,l,c)}finally{$e.T=u,Nt.p=f}}function w1(t,e,n,i,a,r,s,o){do ro();while(Lr!==null);if(Vt&6)throw Error(ee(327));var l=t.finishedWork;if(i=t.finishedLanes,l===null)return null;if(t.finishedWork=null,t.finishedLanes=0,l===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var c=l.lanes|l.childLanes;if(c|=bm,rE(t,i,c,r,s,o),t===Lt&&(ct=Lt=null,dt=0),!(l.subtreeFlags&10256)&&!(l.flags&10256)||Pc||(Pc=!0,np=c,ip=n,L1(ku,function(){return ro(),null})),n=(l.flags&15990)!==0,l.subtreeFlags&15990||n?(n=$e.T,$e.T=null,r=Nt.p,Nt.p=2,s=Vt,Vt|=4,g1(t,l),dS(l,t),QE(up,t.containerInfo),hf=!!cp,up=cp=null,t.current=l,cS(t,l.alternate,l),Zb(),Vt=s,Nt.p=r,$e.T=n):t.current=l,Pc?(Pc=!1,Lr=t,Cl=i):DS(t,c),c=t.pendingLanes,c===0&&(tr=null),eE(l.stateNode),Yi(t),e!==null)for(a=t.onRecoverableError,l=0;l<e.length;l++)c=e[l],a(c.value,{componentStack:c.stack});return Cl&3&&ro(),c=t.pendingLanes,i&4194218&&c&42?t===ap?Rl++:(Rl=0,ap=t):Rl=0,dc(0),null}function DS(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,cc(e)))}function ro(){if(Lr!==null){var t=Lr,e=np;np=0;var n=Uy(Cl),i=$e.T,a=Nt.p;try{if(Nt.p=32>n?32:n,$e.T=null,Lr===null)var r=!1;else{n=ip,ip=null;var s=Lr,o=Cl;if(Lr=null,Cl=0,Vt&6)throw Error(ee(331));var l=Vt;if(Vt|=4,vS(s.current),mS(s,s.current,o,n),Vt=l,dc(0,!1),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(ac,s)}catch{}r=!0}return r}finally{Nt.p=a,$e.T=i,DS(t,e)}}return!1}function j_(t,e,n){e=ui(n,e),e=Xd(t.stateNode,e,2),t=Ja(t,e,2),t!==null&&(sc(t,2),Yi(t))}function At(t,e,n){if(t.tag===3)j_(t,t,n);else for(;e!==null;){if(e.tag===3){j_(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=ui(n,t),n=qx(2),i=Ja(e,n,2),i!==null&&(Zx(n,i,e,t),sc(i,2),Yi(i));break}}e=e.return}}function Dh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new M1;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Ym=!0,a.add(n),t=C1.bind(null,t,e,n),e.then(t,t))}function C1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Lt===t&&(dt&n)===n&&(jt===4||jt===3&&(dt&62914560)===dt&&300>Hi()-Zm?!(Vt&2)&&vo(t,0):qm|=n,_o===dt&&(_o=0)),Yi(t)}function LS(t,e){e===0&&(e=Dy()),t=sr(t,e),t!==null&&(sc(t,e),Yi(t))}function R1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),LS(t,n)}function D1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(ee(314))}i!==null&&i.delete(e),LS(t,n)}function L1(t,e){return mm(t,e)}var rf=null,Us=null,op=!1,sf=!1,Lh=!1,Xr=0;function Yi(t){t!==Us&&t.next===null&&(Us===null?rf=Us=t:Us=Us.next=t),sf=!0,op||(op=!0,U1(P1))}function dc(t,e){if(!Lh&&sf){Lh=!0;do for(var n=!1,i=rf;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Qn(42|t)+1)-1,r&=a&~(s&~o),r=r&201326677?r&201326677|1:r?r|2:0}r!==0&&(n=!0,X_(i,r))}else r=dt,r=Pf(i,i===Lt?r:0),!(r&3)||rc(i,r)||(n=!0,X_(i,r));i=i.next}while(n);Lh=!1}}function P1(){sf=op=!1;var t=0;Xr!==0&&(V1()&&(t=Xr),Xr=0);for(var e=Hi(),n=null,i=rf;i!==null;){var a=i.next,r=PS(i,e);r===0?(i.next=null,n===null?rf=a:n.next=a,a===null&&(Us=n)):(n=i,(t!==0||r&3)&&(sf=!0)),i=a}dc(t)}function PS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-Qn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=aE(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=Lt,n=dt,n=Pf(t,t===e?n:0),i=t.callbackNode,n===0||t===e&&Rt===2||t.cancelPendingCommit!==null)return i!==null&&i!==null&&oh(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||rc(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&oh(i),Uy(n)){case 2:case 8:n=wy;break;case 32:n=ku;break;case 268435456:n=Cy;break;default:n=ku}return i=US.bind(null,t),n=mm(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&oh(i),t.callbackPriority=2,t.callbackNode=null,2}function US(t,e){var n=t.callbackNode;if(ro()&&t.callbackNode!==n)return null;var i=dt;return i=Pf(t,t===Lt?i:0),i===0?null:(ES(t,i,e),PS(t,Hi()),t.callbackNode!=null&&t.callbackNode===n?US.bind(null,t):null)}function X_(t,e){if(ro())return null;ES(t,e,!0)}function U1(t){G1(function(){Vt&6?mm(Ay,t):t()})}function Qm(){return Xr===0&&(Xr=Ry()),Xr}function W_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:yu(""+t)}function Y_(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function N1(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var r=W_((a[Fn]||null).action),s=i.submitter;s&&(e=(e=s[Fn]||null)?W_(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var o=new Uf("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Xr!==0){var l=s?Y_(a,s):new FormData(a);Gd(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?Y_(a,s):new FormData(a),Gd(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Ph=0;Ph<p_.length;Ph++){var Uh=p_[Ph],O1=Uh.toLowerCase(),z1=Uh[0].toUpperCase()+Uh.slice(1);Ri(O1,"on"+z1)}Ri(ex,"onAnimationEnd");Ri(tx,"onAnimationIteration");Ri(nx,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(JE,"onTransitionRun");Ri(e1,"onTransitionStart");Ri(t1,"onTransitionCancel");Ri(ix,"onTransitionEnd");fo("onMouseEnter",["mouseout","mouseover"]);fo("onMouseLeave",["mouseout","mouseover"]);fo("onPointerEnter",["pointerout","pointerover"]);fo("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function NS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(u){$u(u)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(u){$u(u)}a.currentTarget=null,r=l}}}}function ut(t,e){var n=e[Dd];n===void 0&&(n=e[Dd]=new Set);var i=t+"__bubble";n.has(i)||(OS(e,t,2,!1),n.add(i))}function Nh(t,e,n){var i=0;e&&(i|=4),OS(n,t,i,e)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function $m(t){if(!t[Uc]){t[Uc]=!0,Oy.forEach(function(n){n!=="selectionchange"&&(I1.has(n)||Nh(n,!1,t),Nh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Uc]||(e[Uc]=!0,Nh("selectionchange",!1,e))}}function OS(t,e,n,i){switch(YS(e)){case 2:var a=cT;break;case 8:a=uT;break;default:a=ng}n=a.bind(null,e,n,t),a=void 0,!Nd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Oh(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;s=s.return}for(;o!==null;){if(s=Or(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue e}o=o.parentNode}}i=i.return}Gy(function(){var c=r,u=vm(n),f=[];e:{var h=ax.get(t);if(h!==void 0){var p=Uf,_=t;switch(t){case"keypress":if(Su(n)===0)break e;case"keydown":case"keyup":p=DE;break;case"focusin":_="focus",p=hh;break;case"focusout":_="blur",p=hh;break;case"beforeblur":case"afterblur":p=hh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=n_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=vE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=UE;break;case ex:case tx:case nx:p=SE;break;case ix:p=OE;break;case"scroll":case"scrollend":p=gE;break;case"wheel":p=IE;break;case"copy":case"cut":case"paste":p=bE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=a_;break;case"toggle":case"beforetoggle":p=BE}var y=(e&4)!==0,m=!y&&(t==="scroll"||t==="scrollend"),d=y?h!==null?h+"Capture":null:h;y=[];for(var v=c,g;v!==null;){var x=v;if(g=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||g===null||d===null||(x=Hl(v,d),x!=null&&y.push(Yl(v,x,g))),m)break;v=v.return}0<y.length&&(h=new p(h,_,null,n,u),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Ud&&(_=n.relatedTarget||n.fromElement)&&(Or(_)||_[Co]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Or(_):null,_!==null&&(m=wo(_),y=_.tag,_!==m||y!==5&&y!==27&&y!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=n_,x="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=a_,x="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:ol(p),g=_==null?h:ol(_),h=new y(x,v+"leave",p,n,u),h.target=m,h.relatedTarget=g,x=null,Or(u)===c&&(y=new y(d,v+"enter",_,n,u),y.target=g,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,d=_,v=0,g=y;g;g=fs(g))v++;for(g=0,x=d;x;x=fs(x))g++;for(;0<v-g;)y=fs(y),v--;for(;0<g-v;)d=fs(d),g--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=fs(y),d=fs(d)}y=null}else y=null;p!==null&&q_(f,h,p,y,!1),_!==null&&m!==null&&q_(f,m,_,y,!0)}}e:{if(h=c?ol(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=l_;else if(o_(h))if(Zy)w=ZE;else{w=YE;var S=WE}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&_m(c.elementType)&&(w=l_):w=qE;if(w&&(w=w(t,c))){qy(f,w,n,u);break e}S&&S(t,h,c),t==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&Pd(h,"number",h.value)}switch(S=c?ol(c):window,t){case"focusin":(o_(S)||S.contentEditable==="true")&&(Vs=S,Od=c,_l=null);break;case"focusout":_l=Od=Vs=null;break;case"mousedown":zd=!0;break;case"contextmenu":case"mouseup":case"dragend":zd=!1,d_(f,n,u);break;case"selectionchange":if($E)break;case"keydown":case"keyup":d_(f,n,u)}var A;if(Sm)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Hs?Wy(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Xy&&n.locale!=="ko"&&(Hs||C!=="onCompositionStart"?C==="onCompositionEnd"&&Hs&&(A=jy()):(Ka=u,ym="value"in Ka?Ka.value:Ka.textContent,Hs=!0)),S=of(c,C),0<S.length&&(C=new i_(C,t,null,n,u),f.push({event:C,listeners:S}),A?C.data=A:(A=Yy(n),A!==null&&(C.data=A)))),(A=VE?kE(t,n):GE(t,n))&&(C=of(c,"onBeforeInput"),0<C.length&&(S=new i_("onBeforeInput","beforeinput",null,n,u),f.push({event:S,listeners:C}),S.data=A)),N1(f,t,c,n,u)}NS(f,e)})}function Yl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function of(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=Hl(t,n),a!=null&&i.unshift(Yl(t,a,r)),a=Hl(t,e),a!=null&&i.push(Yl(t,a,r))),t=t.return}return i}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function q_(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Hl(n,r),c!=null&&s.unshift(Yl(n,c,l))):a||(c=Hl(n,r),c!=null&&s.push(Yl(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var F1=/\r\n?/g,B1=/\u0000|\uFFFD/g;function Z_(t){return(typeof t=="string"?t:""+t).replace(F1,`
`).replace(B1,"")}function zS(t,e){return e=Z_(e),Z_(t)===e}function jf(){}function Mt(t,e,n,i,a,r){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ho(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ho(t,""+i);break;case"className":Tc(t,"class",i);break;case"tabIndex":Tc(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Tc(t,n,i);break;case"style":ky(t,i,r);break;case"data":if(e!=="object"){Tc(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=yu(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&Mt(t,e,"name",a.name,a,null),Mt(t,e,"formEncType",a.formEncType,a,null),Mt(t,e,"formMethod",a.formMethod,a,null),Mt(t,e,"formTarget",a.formTarget,a,null)):(Mt(t,e,"encType",a.encType,a,null),Mt(t,e,"method",a.method,a,null),Mt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=yu(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=jf);break;case"onScroll":i!=null&&ut("scroll",t);break;case"onScrollEnd":i!=null&&ut("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ee(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ee(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=yu(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":ut("beforetoggle",t),ut("toggle",t),vu(t,"popover",i);break;case"xlinkActuate":Zi(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Zi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Zi(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Zi(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Zi(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Zi(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Zi(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Zi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Zi(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":vu(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=pE.get(n)||n,vu(t,n,i))}}function lp(t,e,n,i,a,r){switch(n){case"style":ky(t,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ee(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ee(60));t.innerHTML=n}}break;case"children":typeof i=="string"?ho(t,i):(typeof i=="number"||typeof i=="bigint")&&ho(t,""+i);break;case"onScroll":i!=null&&ut("scroll",t);break;case"onScrollEnd":i!=null&&ut("scrollend",t);break;case"onClick":i!=null&&(t.onclick=jf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zy.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),r=t[Fn]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):vu(t,n,i)}}}function vn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ut("error",t),ut("load",t);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ee(137,e));default:Mt(t,e,r,s,n,null)}}a&&Mt(t,e,"srcSet",n.srcSet,n,null),i&&Mt(t,e,"src",n.src,n,null);return;case"input":ut("invalid",t);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":a=u;break;case"type":s=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(ee(137,e));break;default:Mt(t,e,i,u,n,null)}}By(t,r,o,l,c,s,a,!1),Gu(t);return;case"select":ut("invalid",t),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:Mt(t,e,a,o,n,null)}e=r,n=s,t.multiple=!!i,e!=null?Js(t,!!i,e,!1):n!=null&&Js(t,!!i,n,!0);return;case"textarea":ut("invalid",t),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ee(91));break;default:Mt(t,e,s,o,n,null)}Vy(t,i,a,r),Gu(t);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Mt(t,e,l,i,n,null)}return;case"dialog":ut("cancel",t),ut("close",t);break;case"iframe":case"object":ut("load",t);break;case"video":case"audio":for(i=0;i<Wl.length;i++)ut(Wl[i],t);break;case"image":ut("error",t),ut("load",t);break;case"details":ut("toggle",t);break;case"embed":case"source":case"link":ut("error",t),ut("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(ee(137,e));default:Mt(t,e,c,i,n,null)}return;default:if(_m(e)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&lp(t,e,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Mt(t,e,o,i,n,null))}function H1(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,u=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(p)||Mt(t,e,p,null,i,f)}}for(var h in i){var p=i[h];if(f=n[h],i.hasOwnProperty(h)&&(p!=null||f!=null))switch(h){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(ee(137,e));break;default:p!==f&&Mt(t,e,h,p,i,f)}}Ld(t,s,o,l,c,u,r,a);return;case"select":p=s=o=h=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||Mt(t,e,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":h=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&Mt(t,e,a,r,i,l)}e=o,n=s,i=p,h!=null?Js(t,!!n,h,!1):!!i!=!!n&&(e!=null?Js(t,!!n,e,!0):Js(t,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Mt(t,e,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":h=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(ee(91));break;default:a!==r&&Mt(t,e,s,a,i,r)}Hy(t,h,p);return;case"option":for(var _ in n)if(h=n[_],n.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_))switch(_){case"selected":t.selected=!1;break;default:Mt(t,e,_,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:Mt(t,e,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)h=n[y],n.hasOwnProperty(y)&&h!=null&&!i.hasOwnProperty(y)&&Mt(t,e,y,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ee(137,e));break;default:Mt(t,e,c,h,i,p)}return;default:if(_m(e)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&lp(t,e,m,void 0,i,h);for(u in i)h=i[u],p=n[u],!i.hasOwnProperty(u)||h===p||h===void 0&&p===void 0||lp(t,e,u,h,i,p);return}}for(var d in n)h=n[d],n.hasOwnProperty(d)&&h!=null&&!i.hasOwnProperty(d)&&Mt(t,e,d,null,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h==null&&p==null||Mt(t,e,f,h,i,p)}var cp=null,up=null;function lf(t){return t.nodeType===9?t:t.ownerDocument}function K_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function IS(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function fp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zh=null;function V1(){var t=window.event;return t&&t.type==="popstate"?t===zh?!1:(zh=t,!0):(zh=null,!1)}var FS=typeof setTimeout=="function"?setTimeout:void 0,k1=typeof clearTimeout=="function"?clearTimeout:void 0,Q_=typeof Promise=="function"?Promise:void 0,G1=typeof queueMicrotask=="function"?queueMicrotask:typeof Q_<"u"?function(t){return Q_.resolve(null).then(t).catch(j1)}:FS;function j1(t){setTimeout(function(){throw t})}function Ih(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(i===0){t.removeChild(a),$l(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=a}while(n);$l(e)}function hp(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":hp(n),gm(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function X1(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Bl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==a.rel||t.getAttribute("href")!==(a.href==null?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function W1(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ai(t.nextSibling),t===null))return null;return t}function Ai(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function $_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function BS(t,e,n){switch(e=lf(n),t){case"html":if(t=e.documentElement,!t)throw Error(ee(452));return t;case"head":if(t=e.head,!t)throw Error(ee(453));return t;case"body":if(t=e.body,!t)throw Error(ee(454));return t;default:throw Error(ee(451))}}var mi=new Map,J_=new Set;function cf(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var ba=Nt.d;Nt.d={f:Y1,r:q1,D:Z1,C:K1,L:Q1,m:$1,X:eT,S:J1,M:tT};function Y1(){var t=ba.f(),e=kf();return t||e}function q1(t){var e=Ro(t);e!==null&&e.tag===5&&e.type==="form"?Bx(e):ba.r(t)}var Lo=typeof document>"u"?null:document;function HS(t,e,n){var i=Lo;if(i&&typeof e=="string"&&e){var a=ci(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),J_.has(a)||(J_.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),vn(e,"link",t),hn(e),i.head.appendChild(e)))}}function Z1(t){ba.D(t),HS("dns-prefetch",t,null)}function K1(t,e){ba.C(t,e),HS("preconnect",t,e)}function Q1(t,e,n){ba.L(t,e,n);var i=Lo;if(i&&t&&e){var a='link[rel="preload"][as="'+ci(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ci(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ci(n.imageSizes)+'"]')):a+='[href="'+ci(t)+'"]';var r=a;switch(e){case"style":r=yo(t);break;case"script":r=Po(t)}mi.has(r)||(t=zt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),mi.set(r,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(pc(r))||e==="script"&&i.querySelector(mc(r))||(e=i.createElement("link"),vn(e,"link",t),hn(e),i.head.appendChild(e)))}}function $1(t,e){ba.m(t,e);var n=Lo;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+ci(i)+'"][href="'+ci(t)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Po(t)}if(!mi.has(r)&&(t=zt({rel:"modulepreload",href:t},e),mi.set(r,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(mc(r)))return}i=n.createElement("link"),vn(i,"link",t),hn(i),n.head.appendChild(i)}}}function J1(t,e,n){ba.S(t,e,n);var i=Lo;if(i&&t){var a=$s(i).hoistableStyles,r=yo(t);e=e||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(pc(r)))o.loading=5;else{t=zt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=mi.get(r))&&Jm(t,n);var l=s=i.createElement("link");hn(l),vn(l,"link",t),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,wu(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function eT(t,e){ba.X(t,e);var n=Lo;if(n&&t){var i=$s(n).hoistableScripts,a=Po(t),r=i.get(a);r||(r=n.querySelector(mc(a)),r||(t=zt({src:t,async:!0},e),(e=mi.get(a))&&eg(t,e),r=n.createElement("script"),hn(r),vn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function tT(t,e){ba.M(t,e);var n=Lo;if(n&&t){var i=$s(n).hoistableScripts,a=Po(t),r=i.get(a);r||(r=n.querySelector(mc(a)),r||(t=zt({src:t,async:!0,type:"module"},e),(e=mi.get(a))&&eg(t,e),r=n.createElement("script"),hn(r),vn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function ev(t,e,n,i){var a=(a=Qa.current)?cf(a):null;if(!a)throw Error(ee(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=yo(n.href),n=$s(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=yo(n.href);var r=$s(a).hoistableStyles,s=r.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=a.querySelector(pc(t)))&&!r._p&&(s.instance=r,s.state.loading=5),mi.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mi.set(t,n),r||nT(a,t,n,s.state))),e&&i===null)throw Error(ee(528,""));return s}if(e&&i!==null)throw Error(ee(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Po(n),n=$s(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(ee(444,t))}}function yo(t){return'href="'+ci(t)+'"'}function pc(t){return'link[rel="stylesheet"]['+t+"]"}function VS(t){return zt({},t,{"data-precedence":t.precedence,precedence:null})}function nT(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),vn(e,"link",n),hn(e),t.head.appendChild(e))}function Po(t){return'[src="'+ci(t)+'"]'}function mc(t){return"script[async]"+t}function tv(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+ci(n.href)+'"]');if(i)return e.instance=i,hn(i),i;var a=zt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),hn(i),vn(i,"style",a),wu(i,n.precedence,t),e.instance=i;case"stylesheet":a=yo(n.href);var r=t.querySelector(pc(a));if(r)return e.state.loading|=4,e.instance=r,hn(r),r;i=VS(n),(a=mi.get(a))&&Jm(i,a),r=(t.ownerDocument||t).createElement("link"),hn(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),vn(r,"link",i),e.state.loading|=4,wu(r,n.precedence,t),e.instance=r;case"script":return r=Po(n.src),(a=t.querySelector(mc(r)))?(e.instance=a,hn(a),a):(i=n,(a=mi.get(r))&&(i=zt({},n),eg(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),hn(a),vn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(ee(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,wu(i,n.precedence,t));return e.instance}function wu(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Jm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function eg(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Cu=null;function nv(t,e,n){if(Cu===null){var i=new Map,a=Cu=new Map;a.set(n,i)}else a=Cu,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var r=n[a];if(!(r[Bl]||r[En]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function iv(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function iT(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function kS(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var ql=null;function aT(){}function rT(t,e,n){if(ql===null)throw Error(ee(475));var i=ql;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var a=yo(n.href),r=t.querySelector(pc(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=uf.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=r,hn(r);return}r=t.ownerDocument||t,n=VS(n),(a=mi.get(a))&&Jm(n,a),r=r.createElement("link"),hn(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),vn(r,"link",n),e.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(i.count++,e=uf.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function sT(){if(ql===null)throw Error(ee(475));var t=ql;return t.stylesheets&&t.count===0&&dp(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&dp(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function uf(){if(this.count--,this.count===0){if(this.stylesheets)dp(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ff=null;function dp(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ff=new Map,e.forEach(oT,t),ff=null,uf.call(t))}function oT(t,e){if(!(e.state.loading&4)){var n=ff.get(t);if(n)var i=n.get(null);else{n=new Map,ff.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=uf.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Zl={$$typeof:ca,Provider:null,Consumer:null,_currentValue:Hr,_currentValue2:Hr,_threadCount:0};function lT(t,e,n,i,a,r,s,o){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lh(0),this.hiddenUpdates=lh(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function GS(t,e,n,i,a,r,s,o,l,c,u,f){return t=new lT(t,e,n,s,o,l,c,f),e=1,r===!0&&(e|=24),r=fi(3,null,null,e),t.current=r,r.stateNode=t,e=Cm(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},Gm(r),t}function jS(t){return t?(t=js,t):js}function XS(t,e,n,i,a,r){a=jS(a),i.context===null?i.context=a:i.pendingContext=a,i=$a(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Ja(t,i,e),n!==null&&(Ln(n,t,e),bl(n,t,e))}function av(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tg(t,e){av(t,e),(t=t.alternate)&&av(t,e)}function WS(t){if(t.tag===13){var e=sr(t,67108864);e!==null&&Ln(e,t,67108864),tg(t,67108864)}}var hf=!0;function cT(t,e,n,i){var a=$e.T;$e.T=null;var r=Nt.p;try{Nt.p=2,ng(t,e,n,i)}finally{Nt.p=r,$e.T=a}}function uT(t,e,n,i){var a=$e.T;$e.T=null;var r=Nt.p;try{Nt.p=8,ng(t,e,n,i)}finally{Nt.p=r,$e.T=a}}function ng(t,e,n,i){if(hf){var a=pp(i);if(a===null)Oh(t,e,i,df,n),rv(t,i);else if(hT(a,t,e,n,i))i.stopPropagation();else if(rv(t,i),e&4&&-1<fT.indexOf(t)){for(;a!==null;){var r=Ro(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Cr(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Qn(s);o.entanglements[1]|=l,s&=~l}Yi(r),!(Vt&6)&&(nf=Hi()+500,dc(0))}}break;case 13:o=sr(r,2),o!==null&&Ln(o,r,2),kf(),tg(r,2)}if(r=pp(i),r===null&&Oh(t,e,i,df,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Oh(t,e,i,null,n)}}function pp(t){return t=vm(t),ig(t)}var df=null;function ig(t){if(df=null,t=Or(t),t!==null){var e=wo(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Ey(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return df=t,null}function YS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kb()){case Ay:return 2;case wy:return 8;case ku:case Qb:return 32;case Cy:return 268435456;default:return 32}default:return 32}}var mp=!1,nr=null,ir=null,ar=null,Kl=new Map,Ql=new Map,Wa=[],fT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rv(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Kl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(e.pointerId)}}function Wo(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=Ro(e),e!==null&&WS(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function hT(t,e,n,i,a){switch(e){case"focusin":return nr=Wo(nr,t,e,n,i,a),!0;case"dragenter":return ir=Wo(ir,t,e,n,i,a),!0;case"mouseover":return ar=Wo(ar,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return Kl.set(r,Wo(Kl.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Ql.set(r,Wo(Ql.get(r)||null,t,e,n,i,a)),!0}return!1}function qS(t){var e=Or(t.target);if(e!==null){var n=wo(e);if(n!==null){if(e=n.tag,e===13){if(e=Ey(n),e!==null){t.blockedOn=e,sE(t.priority,function(){if(n.tag===13){var i=$n(),a=sr(n,i);a!==null&&Ln(a,n,i),tg(n,i)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ru(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pp(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ud=i,n.target.dispatchEvent(i),Ud=null}else return e=Ro(n),e!==null&&WS(e),t.blockedOn=n,!1;e.shift()}return!0}function sv(t,e,n){Ru(t)&&n.delete(e)}function dT(){mp=!1,nr!==null&&Ru(nr)&&(nr=null),ir!==null&&Ru(ir)&&(ir=null),ar!==null&&Ru(ar)&&(ar=null),Kl.forEach(sv),Ql.forEach(sv)}function Nc(t,e){t.blockedOn===e&&(t.blockedOn=null,mp||(mp=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,dT)))}var Oc=null;function ov(t){Oc!==t&&(Oc=t,on.unstable_scheduleCallback(on.unstable_NormalPriority,function(){Oc===t&&(Oc=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(ig(i||n)===null)continue;break}var r=Ro(n);r!==null&&(t.splice(e,3),e-=3,Gd(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function $l(t){function e(l){return Nc(l,t)}nr!==null&&Nc(nr,t),ir!==null&&Nc(ir,t),ar!==null&&Nc(ar,t),Kl.forEach(e),Ql.forEach(e);for(var n=0;n<Wa.length;n++){var i=Wa[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Wa.length&&(n=Wa[0],n.blockedOn===null);)qS(n),n.blockedOn===null&&Wa.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[Fn]||null;if(typeof r=="function")s||ov(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[Fn]||null)o=s.formAction;else if(ig(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ov(n)}}}function ag(t){this._internalRoot=t}Xf.prototype.render=ag.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));var n=e.current,i=$n();XS(n,i,t,e,null,null)};Xf.prototype.unmount=ag.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&ro(),XS(t.current,2,null,t,null,null),kf(),e[Co]=null}};function Xf(t){this._internalRoot=t}Xf.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ny();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wa.length&&e!==0&&e<Wa[n].priority;n++);Wa.splice(n,0,t),n===0&&qS(t)}};var lv=yy.version;if(lv!=="19.0.0")throw Error(ee(527,lv,"19.0.0"));Nt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Yb(e),t=t!==null?Ty(t):null,t=t===null?null:t.stateNode,t};var pT={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:$e,findFiberByHostInstance:Or,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{ac=zc.inject(pT),Kn=zc}catch{}}Df.createRoot=function(t,e){if(!xy(t))throw Error(ee(299));var n=!1,i="",a=Xx,r=Wx,s=Yx,o=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=GS(t,1,!1,null,null,n,i,a,r,s,o,null),t[Co]=e.current,$m(t.nodeType===8?t.parentNode:t),new ag(e)};Df.hydrateRoot=function(t,e,n){if(!xy(t))throw Error(ee(299));var i=!1,a="",r=Xx,s=Wx,o=Yx,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),e=GS(t,1,!0,e,n??null,i,a,r,s,o,l,c),e.context=jS(null),n=e.current,i=$n(),a=$a(i),a.callback=null,Ja(n,a,i),e.current.lanes=i,sc(e,i),Yi(e),t[Co]=e.current,$m(t),new Xf(e)};Df.version="19.0.0";function ZS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ZS)}catch(t){console.error(t)}}ZS(),hy.exports=Df;var mT=hy.exports;const gT=ny(mT);var rg={};Object.defineProperty(rg,"__esModule",{value:!0});rg.parse=bT;rg.serialize=ET;const _T=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,vT=/^[\u0021-\u003A\u003C-\u007E]*$/,yT=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,xT=/^[\u0020-\u003A\u003D-\u007E]*$/,ST=Object.prototype.toString,MT=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function bT(t,e){const n=new MT,i=t.length;if(i<2)return n;const a=(e==null?void 0:e.decode)||TT;let r=0;do{const s=t.indexOf("=",r);if(s===-1)break;const o=t.indexOf(";",r),l=o===-1?i:o;if(s>l){r=t.lastIndexOf(";",s-1)+1;continue}const c=cv(t,r,s),u=uv(t,s,c),f=t.slice(c,u);if(n[f]===void 0){let h=cv(t,s+1,l),p=uv(t,l,h);const _=a(t.slice(h,p));n[f]=_}r=l+1}while(r<i);return n}function cv(t,e,n){do{const i=t.charCodeAt(e);if(i!==32&&i!==9)return e}while(++e<n);return n}function uv(t,e,n){for(;e>n;){const i=t.charCodeAt(--e);if(i!==32&&i!==9)return e+1}return n}function ET(t,e,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!_T.test(t))throw new TypeError(`argument name is invalid: ${t}`);const a=i(e);if(!vT.test(a))throw new TypeError(`argument val is invalid: ${e}`);let r=t+"="+a;if(!n)return r;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);r+="; Max-Age="+n.maxAge}if(n.domain){if(!yT.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);r+="; Domain="+n.domain}if(n.path){if(!xT.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);r+="; Path="+n.path}if(n.expires){if(!AT(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);r+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.partitioned&&(r+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":r+="; Priority=Low";break;case"medium":r+="; Priority=Medium";break;case"high":r+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"none":r+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return r}function TT(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function AT(t){return ST.call(t)==="[object Date]"}/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fv="popstate";function wT(t={}){function e(i,a){let{pathname:r,search:s,hash:o}=i.location;return Jl("",{pathname:r,search:s,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:ur(a)}return RT(e,n,null,t)}function ft(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CT(){return Math.random().toString(36).substring(2,10)}function hv(t,e){return{usr:t.state,key:t.key,idx:e}}function Jl(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?gr(e):e,state:n,key:e&&e.key||i||CT()}}function ur({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function gr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function RT(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:r=!1}=i,s=a.history,o="POP",l=null,c=u();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function u(){return(s.state||{idx:null}).idx}function f(){o="POP";let m=u(),d=m==null?null:m-c;c=m,l&&l({action:o,location:y.location,delta:d})}function h(m,d){o="PUSH";let v=Jl(y.location,m,d);c=u()+1;let g=hv(v,c),x=y.createHref(v);try{s.pushState(g,"",x)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;a.location.assign(x)}r&&l&&l({action:o,location:y.location,delta:1})}function p(m,d){o="REPLACE";let v=Jl(y.location,m,d);c=u();let g=hv(v,c),x=y.createHref(v);s.replaceState(g,"",x),r&&l&&l({action:o,location:y.location,delta:0})}function _(m){let d=a.location.origin!=="null"?a.location.origin:a.location.href,v=typeof m=="string"?m:ur(m);return v=v.replace(/ $/,"%20"),ft(d,`No window.location.(origin|href) available to create URL for href: ${v}`),new URL(v,d)}let y={get action(){return o},get location(){return t(a,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(fv,f),l=m,()=>{a.removeEventListener(fv,f),l=null}},createHref(m){return e(a,m)},createURL:_,encodeLocation(m){let d=_(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:p,go(m){return s.go(m)}};return y}var DT=new Set(["lazy","caseSensitive","path","id","index","children"]);function LT(t){return t.index===!0}function pf(t,e,n=[],i={}){return t.map((a,r)=>{let s=[...n,String(r)],o=typeof a.id=="string"?a.id:s.join("-");if(ft(a.index!==!0||!a.children,"Cannot specify children on an index route"),ft(!i[o],`Found a route id collision on id "${o}".  Route id's must be globally unique within Data Router usages`),LT(a)){let l={...a,...e(a),id:o};return i[o]=l,l}else{let l={...a,...e(a),id:o,children:void 0};return i[o]=l,a.children&&(l.children=pf(a.children,e,s,i)),l}})}function Ya(t,e,n="/"){return Du(t,e,n,!1)}function Du(t,e,n,i){let a=typeof e=="string"?gr(e):e,r=wi(a.pathname||"/",n);if(r==null)return null;let s=KS(t);UT(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let c=jT(r);o=kT(s[l],c,i)}return o}function PT(t,e){let{route:n,pathname:i,params:a}=t;return{id:n.id,pathname:i,params:a,data:e[n.id],handle:n.handle}}function KS(t,e=[],n=[],i=""){let a=(r,s,o)=>{let l={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};l.relativePath.startsWith("/")&&(ft(l.relativePath.startsWith(i),`Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(i.length));let c=ki([i,l.relativePath]),u=n.concat(l);r.children&&r.children.length>0&&(ft(r.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),KS(r.children,e,u,c)),!(r.path==null&&!r.index)&&e.push({path:c,score:HT(c,r.index),routesMeta:u})};return t.forEach((r,s)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))a(r,s);else for(let l of QS(r.path))a(r,s,l)}),e}function QS(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return a?[r,""]:[r];let s=QS(i.join("/")),o=[];return o.push(...s.map(l=>l===""?r:[r,l].join("/"))),a&&o.push(...s),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function UT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VT(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var NT=/^:[\w-]+$/,OT=3,zT=2,IT=1,FT=10,BT=-2,dv=t=>t==="*";function HT(t,e){let n=t.split("/"),i=n.length;return n.some(dv)&&(i+=BT),e&&(i+=zT),n.filter(a=>!dv(a)).reduce((a,r)=>a+(NT.test(r)?OT:r===""?IT:FT),i)}function VT(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function kT(t,e,n=!1){let{routesMeta:i}=t,a={},r="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,u=r==="/"?e:e.slice(r.length)||"/",f=mf({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!f&&c&&n&&!i[i.length-1].route.index&&(f=mf({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(a,f.params),s.push({params:a,pathname:ki([r,f.pathname]),pathnameBase:YT(ki([r,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(r=ki([r,f.pathnameBase]))}return s}function mf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=GT(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let r=a[0],s=r.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((c,{paramName:u,isOptional:f},h)=>{if(u==="*"){let _=o[h]||"";s=r.slice(0,r.length-_.length).replace(/(.)\/+$/,"$1")}const p=o[h];return f&&!p?c[u]=void 0:c[u]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:s,pattern:t}}function GT(t,e=!1,n=!0){yn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function jT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return yn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function wi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function XT(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?gr(t):t;return{pathname:n?n.startsWith("/")?n:WT(n,e):e,search:qT(i),hash:ZT(a)}}function WT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Fh(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $S(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function sg(t){let e=$S(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function og(t,e,n,i=!1){let a;typeof t=="string"?a=gr(t):(a={...t},ft(!a.pathname||!a.pathname.includes("?"),Fh("?","pathname","search",a)),ft(!a.pathname||!a.pathname.includes("#"),Fh("#","pathname","hash",a)),ft(!a.search||!a.search.includes("#"),Fh("#","search","hash",a)));let r=t===""||a.pathname==="",s=r?"/":a.pathname,o;if(s==null)o=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;a.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=XT(a,o),c=s&&s!=="/"&&s.endsWith("/"),u=(r||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}var ki=t=>t.join("/").replace(/\/\/+/g,"/"),YT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,gf=class{constructor(t,e,n,i=!1){this.status=t,this.statusText=e||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function ec(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var JS=["POST","PUT","PATCH","DELETE"],KT=new Set(JS),QT=["GET",...JS],$T=new Set(QT),JT=new Set([301,302,303,307,308]),eA=new Set([307,308]),Bh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},tA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Yo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},lg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nA=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),eM="remix-router-transitions",tM=Symbol("ResetLoaderData");function iA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u";ft(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=t.mapRouteProperties||nA,a={},r=pf(t.routes,i,void 0,a),s,o=t.basename||"/",l=t.dataStrategy||lA,c=t.patchRoutesOnNavigation,u={...t.future},f=null,h=new Set,p=null,_=null,y=null,m=t.hydrationData!=null,d=Ya(r,t.history.location,o),v=!1,g=null;if(d==null&&!c){let U=ri(404,{pathname:t.history.location.pathname}),{matches:H,route:W}=Ev(r);d=H,g={[W.id]:U}}d&&!t.hydrationData&&rt(d,r,t.history.location.pathname).active&&(d=null);let x;if(d)if(d.some(U=>U.route.lazy))x=!1;else if(!d.some(U=>U.route.loader))x=!0;else{let U=t.hydrationData?t.hydrationData.loaderData:null,H=t.hydrationData?t.hydrationData.errors:null;if(H){let W=d.findIndex(re=>H[re.route.id]!==void 0);x=d.slice(0,W+1).every(re=>!_p(re.route,U,H))}else x=d.every(W=>!_p(W.route,U,H))}else{x=!1,d=[];let U=rt(null,r,t.history.location.pathname);U.active&&U.matches&&(v=!0,d=U.matches)}let w,S={historyAction:t.history.action,location:t.history.location,matches:d,initialized:x,navigation:Bh,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},A="POP",C=!1,T,M=!1,D=new Map,Q=null,Y=!1,K=!1,$=new Set,N=new Map,q=0,V=-1,le=new Map,ue=new Set,Se=new Map,We=new Map,Qe=new Set,Z=new Map,oe,Ee=null;function Ce(){if(f=t.history.listen(({action:U,location:H,delta:W})=>{if(oe){oe(),oe=void 0;return}yn(Z.size===0||W!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let re=I({currentLocation:S.location,nextLocation:H,historyAction:U});if(re&&W!=null){let xe=new Promise(Pe=>{oe=Pe});t.history.go(W*-1),xt(re,{state:"blocked",location:H,proceed(){xt(re,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),xe.then(()=>t.history.go(W))},reset(){let Pe=new Map(S.blockers);Pe.set(re,Yo),ze({blockers:Pe})}});return}return st(U,H)}),n){yA(e,D);let U=()=>xA(e,D);e.addEventListener("pagehide",U),Q=()=>e.removeEventListener("pagehide",U)}return S.initialized||st("POP",S.location,{initialHydration:!0}),w}function He(){f&&f(),Q&&Q(),h.clear(),T&&T.abort(),S.fetchers.forEach((U,H)=>Ke(H)),S.blockers.forEach((U,H)=>Je(H))}function qe(U){return h.add(U),()=>h.delete(U)}function ze(U,H={}){S={...S,...U};let W=[],re=[];S.fetchers.forEach((xe,Pe)=>{xe.state==="idle"&&(Qe.has(Pe)?W.push(Pe):re.push(Pe))}),Qe.forEach(xe=>{!S.fetchers.has(xe)&&!N.has(xe)&&W.push(xe)}),[...h].forEach(xe=>xe(S,{deletedFetchers:W,viewTransitionOpts:H.viewTransitionOpts,flushSync:H.flushSync===!0})),W.forEach(xe=>Ke(xe)),re.forEach(xe=>S.fetchers.delete(xe))}function yt(U,H,{flushSync:W}={}){var ge,Xe;let re=S.actionData!=null&&S.navigation.formMethod!=null&&Mi(S.navigation.formMethod)&&S.navigation.state==="loading"&&((ge=U.state)==null?void 0:ge._isRedirect)!==!0,xe;H.actionData?Object.keys(H.actionData).length>0?xe=H.actionData:xe=null:re?xe=S.actionData:xe=null;let Pe=H.loaderData?Mv(S.loaderData,H.loaderData,H.matches||[],H.errors):S.loaderData,ke=S.blockers;ke.size>0&&(ke=new Map(ke),ke.forEach((et,wt)=>ke.set(wt,Yo)));let Ae=C===!0||S.navigation.formMethod!=null&&Mi(S.navigation.formMethod)&&((Xe=U.state)==null?void 0:Xe._isRedirect)!==!0;s&&(r=s,s=void 0),Y||A==="POP"||(A==="PUSH"?t.history.push(U,U.state):A==="REPLACE"&&t.history.replace(U,U.state));let De;if(A==="POP"){let et=D.get(S.location.pathname);et&&et.has(U.pathname)?De={currentLocation:S.location,nextLocation:U}:D.has(U.pathname)&&(De={currentLocation:U,nextLocation:S.location})}else if(M){let et=D.get(S.location.pathname);et?et.add(U.pathname):(et=new Set([U.pathname]),D.set(S.location.pathname,et)),De={currentLocation:S.location,nextLocation:U}}ze({...H,actionData:xe,loaderData:Pe,historyAction:A,location:U,initialized:!0,navigation:Bh,revalidation:"idle",restoreScrollPosition:Be(U,H.matches||S.matches),preventScrollReset:Ae,blockers:ke},{viewTransitionOpts:De,flushSync:W===!0}),A="POP",C=!1,M=!1,Y=!1,K=!1,Ee==null||Ee.resolve(),Ee=null}async function O(U,H){if(typeof U=="number"){t.history.go(U);return}let W=gp(S.location,S.matches,o,U,H==null?void 0:H.fromRouteId,H==null?void 0:H.relative),{path:re,submission:xe,error:Pe}=pv(!1,W,H),ke=S.location,Ae=Jl(S.location,re,H&&H.state);Ae={...Ae,...t.history.encodeLocation(Ae)};let De=H&&H.replace!=null?H.replace:void 0,ge="PUSH";De===!0?ge="REPLACE":De===!1||xe!=null&&Mi(xe.formMethod)&&xe.formAction===S.location.pathname+S.location.search&&(ge="REPLACE");let Xe=H&&"preventScrollReset"in H?H.preventScrollReset===!0:void 0,et=(H&&H.flushSync)===!0,wt=I({currentLocation:ke,nextLocation:Ae,historyAction:ge});if(wt){xt(wt,{state:"blocked",location:Ae,proceed(){xt(wt,{state:"proceeding",proceed:void 0,reset:void 0,location:Ae}),O(U,H)},reset(){let Jt=new Map(S.blockers);Jt.set(wt,Yo),ze({blockers:Jt})}});return}await st(ge,Ae,{submission:xe,pendingError:Pe,preventScrollReset:Xe,replace:H&&H.replace,enableViewTransition:H&&H.viewTransition,flushSync:et})}function kt(){Ee||(Ee=SA()),ae(),ze({revalidation:"loading"});let U=Ee.promise;return S.navigation.state==="submitting"?U:S.navigation.state==="idle"?(st(S.historyAction,S.location,{startUninterruptedRevalidation:!0}),U):(st(A||S.historyAction,S.navigation.location,{overrideNavigation:S.navigation,enableViewTransition:M===!0}),U)}async function st(U,H,W){T&&T.abort(),T=null,A=U,Y=(W&&W.startUninterruptedRevalidation)===!0,me(S.location,S.matches),C=(W&&W.preventScrollReset)===!0,M=(W&&W.enableViewTransition)===!0;let re=s||r,xe=W&&W.overrideNavigation,Pe=W!=null&&W.initialHydration&&S.matches&&S.matches.length>0&&!v?S.matches:Ya(re,H,o),ke=(W&&W.flushSync)===!0;if(Pe&&S.initialized&&!K&&pA(S.location,H)&&!(W&&W.submission&&Mi(W.submission.formMethod))){yt(H,{matches:Pe},{flushSync:ke});return}let Ae=rt(Pe,re,H.pathname);if(Ae.active&&Ae.matches&&(Pe=Ae.matches),!Pe){let{error:Ut,notFoundMatches:E,route:z}=fe(H.pathname);yt(H,{matches:E,loaderData:{},errors:{[z.id]:Ut}},{flushSync:ke});return}T=new AbortController;let De=hs(t.history,H,T.signal,W&&W.submission),ge;if(W&&W.pendingError)ge=[Pr(Pe).route.id,{type:"error",error:W.pendingError}];else if(W&&W.submission&&Mi(W.submission.formMethod)){let Ut=await _t(De,H,W.submission,Pe,Ae.active,{replace:W.replace,flushSync:ke});if(Ut.shortCircuited)return;if(Ut.pendingActionResult){let[E,z]=Ut.pendingActionResult;if(Yn(z)&&ec(z.error)&&z.error.status===404){T=null,yt(H,{matches:Ut.matches,loaderData:{},errors:{[E]:z.error}});return}}Pe=Ut.matches||Pe,ge=Ut.pendingActionResult,xe=Hh(H,W.submission),ke=!1,Ae.active=!1,De=hs(t.history,De.url,De.signal)}let{shortCircuited:Xe,matches:et,loaderData:wt,errors:Jt}=await Oe(De,H,Pe,Ae.active,xe,W&&W.submission,W&&W.fetcherSubmission,W&&W.replace,W&&W.initialHydration===!0,ke,ge);Xe||(T=null,yt(H,{matches:et||Pe,...bv(ge),loaderData:wt,errors:Jt}))}async function _t(U,H,W,re,xe,Pe={}){ae();let ke=_A(H,W);if(ze({navigation:ke},{flushSync:Pe.flushSync===!0}),xe){let ge=await Pt(re,H.pathname,U.signal);if(ge.type==="aborted")return{shortCircuited:!0};if(ge.type==="error"){let Xe=Pr(ge.partialMatches).route.id;return{matches:ge.partialMatches,pendingActionResult:[Xe,{type:"error",error:ge.error}]}}else if(ge.matches)re=ge.matches;else{let{notFoundMatches:Xe,error:et,route:wt}=fe(H.pathname);return{matches:Xe,pendingActionResult:[wt.id,{type:"error",error:et}]}}}let Ae,De=cl(re,H);if(!De.route.action&&!De.route.lazy)Ae={type:"error",error:ri(405,{method:U.method,pathname:H.pathname,routeId:De.route.id})};else if(Ae=(await te("action",S,U,[De],re,null))[De.route.id],U.signal.aborted)return{shortCircuited:!0};if(Ir(Ae)){let ge;return Pe&&Pe.replace!=null?ge=Pe.replace:ge=yv(Ae.response.headers.get("Location"),new URL(U.url),o)===S.location.pathname+S.location.search,await j(U,Ae,!0,{submission:W,replace:ge}),{shortCircuited:!0}}if(Yn(Ae)){let ge=Pr(re,De.route.id);return(Pe&&Pe.replace)!==!0&&(A="PUSH"),{matches:re,pendingActionResult:[ge.route.id,Ae]}}return{matches:re,pendingActionResult:[De.route.id,Ae]}}async function Oe(U,H,W,re,xe,Pe,ke,Ae,De,ge,Xe){let et=xe||Hh(H,Pe),wt=Pe||ke||Av(et),Jt=!Y&&!De;if(re){if(Jt){let Ge=Ft(Xe);ze({navigation:et,...Ge!==void 0?{actionData:Ge}:{}},{flushSync:ge})}let de=await Pt(W,H.pathname,U.signal);if(de.type==="aborted")return{shortCircuited:!0};if(de.type==="error"){let Ge=Pr(de.partialMatches).route.id;return{matches:de.partialMatches,loaderData:{},errors:{[Ge]:de.error}}}else if(de.matches)W=de.matches;else{let{error:Ge,notFoundMatches:Tt,route:St}=fe(H.pathname);return{matches:Tt,loaderData:{},errors:{[St.id]:Ge}}}}let Ut=s||r,[E,z]=gv(t.history,S,W,wt,H,De===!0,K,$,Qe,Se,ue,Ut,o,Xe);if(V=++q,E.length===0&&z.length===0){let de=Ve();return yt(H,{matches:W,loaderData:{},errors:Xe&&Yn(Xe[1])?{[Xe[0]]:Xe[1].error}:null,...bv(Xe),...de?{fetchers:new Map(S.fetchers)}:{}},{flushSync:ge}),{shortCircuited:!0}}if(Jt){let de={};if(!re){de.navigation=et;let Ge=Ft(Xe);Ge!==void 0&&(de.actionData=Ge)}z.length>0&&(de.fetchers=je(z)),ze(de,{flushSync:ge})}z.forEach(de=>{ve(de.key),de.controller&&N.set(de.key,de.controller)});let k=()=>z.forEach(de=>ve(de.key));T&&T.signal.addEventListener("abort",k);let{loaderResults:G,fetcherResults:B}=await se(S,W,E,z,U);if(U.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",k),z.forEach(de=>N.delete(de.key));let ce=Ic(G);if(ce)return await j(U,ce.result,!0,{replace:Ae}),{shortCircuited:!0};if(ce=Ic(B),ce)return ue.add(ce.key),await j(U,ce.result,!0,{replace:Ae}),{shortCircuited:!0};let{loaderData:ye,errors:we}=Sv(S,W,G,Xe,z,B);De&&S.errors&&(we={...S.errors,...we});let Me=Ve(),Ie=Re(V),Fe=Me||Ie||z.length>0;return{matches:W,loaderData:ye,errors:we,...Fe?{fetchers:new Map(S.fetchers)}:{}}}function Ft(U){if(U&&!Yn(U[1]))return{[U[0]]:U[1].data};if(S.actionData)return Object.keys(S.actionData).length===0?null:S.actionData}function je(U){return U.forEach(H=>{let W=S.fetchers.get(H.key),re=qo(void 0,W?W.data:void 0);S.fetchers.set(H.key,re)}),new Map(S.fetchers)}async function Ze(U,H,W,re){ve(U);let xe=(re&&re.flushSync)===!0,Pe=s||r,ke=gp(S.location,S.matches,o,W,H,re==null?void 0:re.relative),Ae=Ya(Pe,ke,o),De=rt(Ae,Pe,ke);if(De.active&&De.matches&&(Ae=De.matches),!Ae){pe(U,H,ri(404,{pathname:ke}),{flushSync:xe});return}let{path:ge,submission:Xe,error:et}=pv(!0,ke,re);if(et){pe(U,H,et,{flushSync:xe});return}let wt=cl(Ae,ge),Jt=(re&&re.preventScrollReset)===!0;if(Xe&&Mi(Xe.formMethod)){await R(U,H,ge,wt,Ae,De.active,xe,Jt,Xe);return}Se.set(U,{routeId:H,path:ge}),await b(U,H,ge,wt,Ae,De.active,xe,Jt,Xe)}async function R(U,H,W,re,xe,Pe,ke,Ae,De){ae(),Se.delete(U);function ge(ht){if(!ht.route.action&&!ht.route.lazy){let lt=ri(405,{method:De.formMethod,pathname:W,routeId:H});return pe(U,H,lt,{flushSync:ke}),!0}return!1}if(!Pe&&ge(re))return;let Xe=S.fetchers.get(U);Le(U,vA(De,Xe),{flushSync:ke});let et=new AbortController,wt=hs(t.history,W,et.signal,De);if(Pe){let ht=await Pt(xe,W,wt.signal);if(ht.type==="aborted")return;if(ht.type==="error"){pe(U,H,ht.error,{flushSync:ke});return}else if(ht.matches){if(xe=ht.matches,re=cl(xe,W),ge(re))return}else{pe(U,H,ri(404,{pathname:W}),{flushSync:ke});return}}N.set(U,et);let Jt=q,E=(await te("action",S,wt,[re],xe,U))[re.route.id];if(wt.signal.aborted){N.get(U)===et&&N.delete(U);return}if(Qe.has(U)){if(Ir(E)||Yn(E)){Le(U,Fa(void 0));return}}else{if(Ir(E))if(N.delete(U),V>Jt){Le(U,Fa(void 0));return}else return ue.add(U),Le(U,qo(De)),j(wt,E,!1,{fetcherSubmission:De,preventScrollReset:Ae});if(Yn(E)){pe(U,H,E.error);return}}let z=S.navigation.location||S.location,k=hs(t.history,z,et.signal),G=s||r,B=S.navigation.state!=="idle"?Ya(G,S.navigation.location,o):S.matches;ft(B,"Didn't find any matches after fetcher action");let ce=++q;le.set(U,ce);let ye=qo(De,E.data);S.fetchers.set(U,ye);let[we,Me]=gv(t.history,S,B,De,z,!1,K,$,Qe,Se,ue,G,o,[re.route.id,E]);Me.filter(ht=>ht.key!==U).forEach(ht=>{let lt=ht.key,Ue=S.fetchers.get(lt),en=qo(void 0,Ue?Ue.data:void 0);S.fetchers.set(lt,en),ve(lt),ht.controller&&N.set(lt,ht.controller)}),ze({fetchers:new Map(S.fetchers)});let Ie=()=>Me.forEach(ht=>ve(ht.key));et.signal.addEventListener("abort",Ie);let{loaderResults:Fe,fetcherResults:de}=await se(S,B,we,Me,k);if(et.signal.aborted)return;et.signal.removeEventListener("abort",Ie),le.delete(U),N.delete(U),Me.forEach(ht=>N.delete(ht.key));let Ge=Ic(Fe);if(Ge)return j(k,Ge.result,!1,{preventScrollReset:Ae});if(Ge=Ic(de),Ge)return ue.add(Ge.key),j(k,Ge.result,!1,{preventScrollReset:Ae});let{loaderData:Tt,errors:St}=Sv(S,B,Fe,void 0,Me,de);if(S.fetchers.has(U)){let ht=Fa(E.data);S.fetchers.set(U,ht)}Re(ce),S.navigation.state==="loading"&&ce>V?(ft(A,"Expected pending action"),T&&T.abort(),yt(S.navigation.location,{matches:B,loaderData:Tt,errors:St,fetchers:new Map(S.fetchers)})):(ze({errors:St,loaderData:Mv(S.loaderData,Tt,B,St),fetchers:new Map(S.fetchers)}),K=!1)}async function b(U,H,W,re,xe,Pe,ke,Ae,De){let ge=S.fetchers.get(U);Le(U,qo(De,ge?ge.data:void 0),{flushSync:ke});let Xe=new AbortController,et=hs(t.history,W,Xe.signal);if(Pe){let E=await Pt(xe,W,et.signal);if(E.type==="aborted")return;if(E.type==="error"){pe(U,H,E.error,{flushSync:ke});return}else if(E.matches)xe=E.matches,re=cl(xe,W);else{pe(U,H,ri(404,{pathname:W}),{flushSync:ke});return}}N.set(U,Xe);let wt=q,Ut=(await te("loader",S,et,[re],xe,U))[re.route.id];if(N.get(U)===Xe&&N.delete(U),!et.signal.aborted){if(Qe.has(U)){Le(U,Fa(void 0));return}if(Ir(Ut))if(V>wt){Le(U,Fa(void 0));return}else{ue.add(U),await j(et,Ut,!1,{preventScrollReset:Ae});return}if(Yn(Ut)){pe(U,H,Ut.error);return}Le(U,Fa(Ut.data))}}async function j(U,H,W,{submission:re,fetcherSubmission:xe,preventScrollReset:Pe,replace:ke}={}){H.response.headers.has("X-Remix-Revalidate")&&(K=!0);let Ae=H.response.headers.get("Location");ft(Ae,"Expected a Location header on the redirect Response"),Ae=yv(Ae,new URL(U.url),o);let De=Jl(S.location,Ae,{_isRedirect:!0});if(n){let Ut=!1;if(H.response.headers.has("X-Remix-Reload-Document"))Ut=!0;else if(lg.test(Ae)){const E=t.history.createURL(Ae);Ut=E.origin!==e.location.origin||wi(E.pathname,o)==null}if(Ut){ke?e.location.replace(Ae):e.location.assign(Ae);return}}T=null;let ge=ke===!0||H.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Xe,formAction:et,formEncType:wt}=S.navigation;!re&&!xe&&Xe&&et&&wt&&(re=Av(S.navigation));let Jt=re||xe;if(eA.has(H.response.status)&&Jt&&Mi(Jt.formMethod))await st(ge,De,{submission:{...Jt,formAction:Ae},preventScrollReset:Pe||C,enableViewTransition:W?M:void 0});else{let Ut=Hh(De,re);await st(ge,De,{overrideNavigation:Ut,fetcherSubmission:xe,preventScrollReset:Pe||C,enableViewTransition:W?M:void 0})}}async function te(U,H,W,re,xe,Pe){let ke,Ae={};try{ke=await cA(l,U,H,W,re,xe,Pe,a,i)}catch(De){return re.forEach(ge=>{Ae[ge.route.id]={type:"error",error:De}}),Ae}for(let[De,ge]of Object.entries(ke))if(mA(ge)){let Xe=ge.result;Ae[De]={type:"redirect",response:hA(Xe,W,De,xe,o)}}else Ae[De]=await fA(ge);return Ae}async function se(U,H,W,re,xe){let Pe=te("loader",U,xe,W,H,null),ke=Promise.all(re.map(async ge=>{if(ge.matches&&ge.match&&ge.controller){let et=(await te("loader",U,hs(t.history,ge.path,ge.controller.signal),[ge.match],ge.matches,ge.key))[ge.match.route.id];return{[ge.key]:et}}else return Promise.resolve({[ge.key]:{type:"error",error:ri(404,{pathname:ge.path})}})})),Ae=await Pe,De=(await ke).reduce((ge,Xe)=>Object.assign(ge,Xe),{});return{loaderResults:Ae,fetcherResults:De}}function ae(){K=!0,Se.forEach((U,H)=>{N.has(H)&&$.add(H),ve(H)})}function Le(U,H,W={}){S.fetchers.set(U,H),ze({fetchers:new Map(S.fetchers)},{flushSync:(W&&W.flushSync)===!0})}function pe(U,H,W,re={}){let xe=Pr(S.matches,H);Ke(U),ze({errors:{[xe.route.id]:W},fetchers:new Map(S.fetchers)},{flushSync:(re&&re.flushSync)===!0})}function Te(U){return We.set(U,(We.get(U)||0)+1),Qe.has(U)&&Qe.delete(U),S.fetchers.get(U)||tA}function Ke(U){let H=S.fetchers.get(U);N.has(U)&&!(H&&H.state==="loading"&&le.has(U))&&ve(U),Se.delete(U),le.delete(U),ue.delete(U),Qe.delete(U),$.delete(U),S.fetchers.delete(U)}function he(U){let H=(We.get(U)||0)-1;H<=0?(We.delete(U),Qe.add(U)):We.set(U,H),ze({fetchers:new Map(S.fetchers)})}function ve(U){let H=N.get(U);H&&(H.abort(),N.delete(U))}function ot(U){for(let H of U){let W=Te(H),re=Fa(W.data);S.fetchers.set(H,re)}}function Ve(){let U=[],H=!1;for(let W of ue){let re=S.fetchers.get(W);ft(re,`Expected fetcher: ${W}`),re.state==="loading"&&(ue.delete(W),U.push(W),H=!0)}return ot(U),H}function Re(U){let H=[];for(let[W,re]of le)if(re<U){let xe=S.fetchers.get(W);ft(xe,`Expected fetcher: ${W}`),xe.state==="loading"&&(ve(W),le.delete(W),H.push(W))}return ot(H),H.length>0}function Ye(U,H){let W=S.blockers.get(U)||Yo;return Z.get(U)!==H&&Z.set(U,H),W}function Je(U){S.blockers.delete(U),Z.delete(U)}function xt(U,H){let W=S.blockers.get(U)||Yo;ft(W.state==="unblocked"&&H.state==="blocked"||W.state==="blocked"&&H.state==="blocked"||W.state==="blocked"&&H.state==="proceeding"||W.state==="blocked"&&H.state==="unblocked"||W.state==="proceeding"&&H.state==="unblocked",`Invalid blocker state transition: ${W.state} -> ${H.state}`);let re=new Map(S.blockers);re.set(U,H),ze({blockers:re})}function I({currentLocation:U,nextLocation:H,historyAction:W}){if(Z.size===0)return;Z.size>1&&yn(!1,"A router only supports one blocker at a time");let re=Array.from(Z.entries()),[xe,Pe]=re[re.length-1],ke=S.blockers.get(xe);if(!(ke&&ke.state==="proceeding")&&Pe({currentLocation:U,nextLocation:H,historyAction:W}))return xe}function fe(U){let H=ri(404,{pathname:U}),W=s||r,{matches:re,route:xe}=Ev(W);return{notFoundMatches:re,route:xe,error:H}}function J(U,H,W){if(p=U,y=H,_=W||null,!m&&S.navigation===Bh){m=!0;let re=Be(S.location,S.matches);re!=null&&ze({restoreScrollPosition:re})}return()=>{p=null,y=null,_=null}}function ne(U,H){return _&&_(U,H.map(re=>PT(re,S.loaderData)))||U.key}function me(U,H){if(p&&y){let W=ne(U,H);p[W]=y()}}function Be(U,H){if(p){let W=ne(U,H),re=p[W];if(typeof re=="number")return re}return null}function rt(U,H,W){if(c)if(U){if(Object.keys(U[0].params).length>0)return{active:!0,matches:Du(H,W,o,!0)}}else return{active:!0,matches:Du(H,W,o,!0)||[]};return{active:!1,matches:null}}async function Pt(U,H,W){if(!c)return{type:"success",matches:U};let re=U;for(;;){let xe=s==null,Pe=s||r,ke=a;try{await c({signal:W,path:H,matches:re,patch:(ge,Xe)=>{W.aborted||vv(ge,Xe,Pe,ke,i)}})}catch(ge){return{type:"error",error:ge,partialMatches:re}}finally{xe&&!W.aborted&&(r=[...r])}if(W.aborted)return{type:"aborted"};let Ae=Ya(Pe,H,o);if(Ae)return{type:"success",matches:Ae};let De=Du(Pe,H,o,!0);if(!De||re.length===De.length&&re.every((ge,Xe)=>ge.route.id===De[Xe].route.id))return{type:"success",matches:null};re=De}}function $t(U){a={},s=pf(U,i,void 0,a)}function pt(U,H){let W=s==null;vv(U,H,s||r,a,i),W&&(r=[...r],ze({}))}return w={get basename(){return o},get future(){return u},get state(){return S},get routes(){return r},get window(){return e},initialize:Ce,subscribe:qe,enableScrollRestoration:J,navigate:O,fetch:Ze,revalidate:kt,createHref:U=>t.history.createHref(U),encodeLocation:U=>t.history.encodeLocation(U),getFetcher:Te,deleteFetcher:he,dispose:He,getBlocker:Ye,deleteBlocker:Je,patchRoutes:pt,_internalFetchControllers:N,_internalSetRoutes:$t},w}function aA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function gp(t,e,n,i,a,r){let s,o;if(a){s=[];for(let c of e)if(s.push(c),c.route.id===a){o=c;break}}else s=e,o=e[e.length-1];let l=og(i||".",sg(s),wi(t.pathname,n)||t.pathname,r==="path");if(i==null&&(l.search=t.search,l.hash=t.hash),(i==null||i===""||i===".")&&o){let c=cg(l.search);if(o.route.index&&!c)l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index";else if(!o.route.index&&c){let u=new URLSearchParams(l.search),f=u.getAll("index");u.delete("index"),f.filter(p=>p).forEach(p=>u.append("index",p));let h=u.toString();l.search=h?`?${h}`:""}}return n!=="/"&&(l.pathname=l.pathname==="/"?n:ki([n,l.pathname])),ur(l)}function pv(t,e,n){if(!n||!aA(n))return{path:e};if(n.formMethod&&!gA(n.formMethod))return{path:e,error:ri(405,{method:n.formMethod})};let i=()=>({path:e,error:ri(400,{type:"invalid-body"})}),r=(n.formMethod||"get").toUpperCase(),s=iM(e);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!Mi(r))return i();let f=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((h,[p,_])=>`${h}${p}=${_}
`,""):String(n.body);return{path:e,submission:{formMethod:r,formAction:s,formEncType:n.formEncType,formData:void 0,json:void 0,text:f}}}else if(n.formEncType==="application/json"){if(!Mi(r))return i();try{let f=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:e,submission:{formMethod:r,formAction:s,formEncType:n.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}ft(typeof FormData=="function","FormData is not available in this environment");let o,l;if(n.formData)o=vp(n.formData),l=n.formData;else if(n.body instanceof FormData)o=vp(n.body),l=n.body;else if(n.body instanceof URLSearchParams)o=n.body,l=xv(o);else if(n.body==null)o=new URLSearchParams,l=new FormData;else try{o=new URLSearchParams(n.body),l=xv(o)}catch{return i()}let c={formMethod:r,formAction:s,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:l,json:void 0,text:void 0};if(Mi(c.formMethod))return{path:e,submission:c};let u=gr(e);return t&&u.search&&cg(u.search)&&o.append("index",""),u.search=`?${o}`,{path:ur(u),submission:c}}function mv(t,e,n=!1){let i=t.findIndex(a=>a.route.id===e);return i>=0?t.slice(0,n?i+1:i):t}function gv(t,e,n,i,a,r,s,o,l,c,u,f,h,p){let _=p?Yn(p[1])?p[1].error:p[1].data:void 0,y=t.createURL(e.location),m=t.createURL(a),d=n;r&&e.errors?d=mv(n,Object.keys(e.errors)[0],!0):p&&Yn(p[1])&&(d=mv(n,p[0]));let v=p?p[1].statusCode:void 0,g=v&&v>=400,x=d.filter((S,A)=>{let{route:C}=S;if(C.lazy)return!0;if(C.loader==null)return!1;if(r)return _p(C,e.loaderData,e.errors);if(rA(e.loaderData,e.matches[A],S))return!0;let T=e.matches[A],M=S;return _v(S,{currentUrl:y,currentParams:T.params,nextUrl:m,nextParams:M.params,...i,actionResult:_,actionStatus:v,defaultShouldRevalidate:g?!1:s||y.pathname+y.search===m.pathname+m.search||y.search!==m.search||sA(T,M)})}),w=[];return c.forEach((S,A)=>{if(r||!n.some(Q=>Q.route.id===S.routeId)||l.has(A))return;let C=Ya(f,S.path,h);if(!C){w.push({key:A,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let T=e.fetchers.get(A),M=cl(C,S.path),D=!1;u.has(A)?D=!1:o.has(A)?(o.delete(A),D=!0):T&&T.state!=="idle"&&T.data===void 0?D=s:D=_v(M,{currentUrl:y,currentParams:e.matches[e.matches.length-1].params,nextUrl:m,nextParams:n[n.length-1].params,...i,actionResult:_,actionStatus:v,defaultShouldRevalidate:g?!1:s}),D&&w.push({key:A,routeId:S.routeId,path:S.path,matches:C,match:M,controller:new AbortController})}),[x,w]}function _p(t,e,n){if(t.lazy)return!0;if(!t.loader)return!1;let i=e!=null&&e[t.id]!==void 0,a=n!=null&&n[t.id]!==void 0;return!i&&a?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!i&&!a}function rA(t,e,n){let i=!e||n.route.id!==e.route.id,a=!t.hasOwnProperty(n.route.id);return i||a}function sA(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function _v(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}function vv(t,e,n,i,a){let r;if(t){let l=i[t];ft(l,`No route found to patch children into: routeId = ${t}`),l.children||(l.children=[]),r=l.children}else r=n;let s=e.filter(l=>!r.some(c=>nM(l,c))),o=pf(s,a,[t||"_","patch",String((r==null?void 0:r.length)||"0")],i);r.push(...o)}function nM(t,e){return"id"in t&&"id"in e&&t.id===e.id?!0:t.index===e.index&&t.path===e.path&&t.caseSensitive===e.caseSensitive?(!t.children||t.children.length===0)&&(!e.children||e.children.length===0)?!0:t.children.every((n,i)=>{var a;return(a=e.children)==null?void 0:a.some(r=>nM(n,r))}):!1}async function oA(t,e,n){if(!t.lazy)return;let i=await t.lazy();if(!t.lazy)return;let a=n[t.id];ft(a,"No route found in manifest");let r={};for(let s in i){let l=a[s]!==void 0&&s!=="hasErrorBoundary";yn(!l,`Route "${a.id}" has a static property "${s}" defined but its lazy function is also returning a value for this property. The lazy route property "${s}" will be ignored.`),!l&&!DT.has(s)&&(r[s]=i[s])}Object.assign(a,r),Object.assign(a,{...e(a),lazy:void 0})}async function lA({matches:t}){let e=t.filter(i=>i.shouldLoad);return(await Promise.all(e.map(i=>i.resolve()))).reduce((i,a,r)=>Object.assign(i,{[e[r].route.id]:a}),{})}async function cA(t,e,n,i,a,r,s,o,l,c){let u=r.map(p=>p.route.lazy?oA(p.route,l,o):void 0),f=r.map((p,_)=>{let y=u[_],m=a.some(v=>v.route.id===p.route.id);return{...p,shouldLoad:m,resolve:async v=>(v&&i.method==="GET"&&(p.route.lazy||p.route.loader)&&(m=!0),m?uA(e,i,p,y,v,c):Promise.resolve({type:"data",result:void 0}))}}),h=await t({matches:f,request:i,params:r[0].params,fetcherKey:s,context:c});try{await Promise.all(u)}catch{}return h}async function uA(t,e,n,i,a,r){let s,o,l=c=>{let u,f=new Promise((_,y)=>u=y);o=()=>u(),e.signal.addEventListener("abort",o);let h=_=>typeof c!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${t}" [routeId: ${n.route.id}]`)):c({request:e,params:n.params,context:r},..._!==void 0?[_]:[]),p=(async()=>{try{return{type:"data",result:await(a?a(y=>h(y)):h())}}catch(_){return{type:"error",result:_}}})();return Promise.race([p,f])};try{let c=n.route[t];if(i)if(c){let u,[f]=await Promise.all([l(c).catch(h=>{u=h}),i]);if(u!==void 0)throw u;s=f}else if(await i,c=n.route[t],c)s=await l(c);else if(t==="action"){let u=new URL(e.url),f=u.pathname+u.search;throw ri(405,{method:e.method,pathname:f,routeId:n.route.id})}else return{type:"data",result:void 0};else if(c)s=await l(c);else{let u=new URL(e.url),f=u.pathname+u.search;throw ri(404,{pathname:f})}}catch(c){return{type:"error",result:c}}finally{o&&e.signal.removeEventListener("abort",o)}return s}async function fA(t){var i,a,r,s,o,l;let{result:e,type:n}=t;if(aM(e)){let c;try{let u=e.headers.get("Content-Type");u&&/\bapplication\/json\b/.test(u)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(u){return{type:"error",error:u}}return n==="error"?{type:"error",error:new gf(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:"data",data:c,statusCode:e.status,headers:e.headers}}return n==="error"?Tv(e)?e.data instanceof Error?{type:"error",error:e.data,statusCode:(i=e.init)==null?void 0:i.status,headers:(a=e.init)!=null&&a.headers?new Headers(e.init.headers):void 0}:{type:"error",error:new gf(((r=e.init)==null?void 0:r.status)||500,void 0,e.data),statusCode:ec(e)?e.status:void 0,headers:(s=e.init)!=null&&s.headers?new Headers(e.init.headers):void 0}:{type:"error",error:e,statusCode:ec(e)?e.status:void 0}:Tv(e)?{type:"data",data:e.data,statusCode:(o=e.init)==null?void 0:o.status,headers:(l=e.init)!=null&&l.headers?new Headers(e.init.headers):void 0}:{type:"data",data:e}}function hA(t,e,n,i,a){let r=t.headers.get("Location");if(ft(r,"Redirects returned/thrown from loaders/actions must have a Location header"),!lg.test(r)){let s=i.slice(0,i.findIndex(o=>o.route.id===n)+1);r=gp(new URL(e.url),s,a,r),t.headers.set("Location",r)}return t}function yv(t,e,n){if(lg.test(t)){let i=t,a=i.startsWith("//")?new URL(e.protocol+i):new URL(i),r=wi(a.pathname,n)!=null;if(a.origin===e.origin&&r)return a.pathname+a.search+a.hash}return t}function hs(t,e,n,i){let a=t.createURL(iM(e)).toString(),r={signal:n};if(i&&Mi(i.formMethod)){let{formMethod:s,formEncType:o}=i;r.method=s.toUpperCase(),o==="application/json"?(r.headers=new Headers({"Content-Type":o}),r.body=JSON.stringify(i.json)):o==="text/plain"?r.body=i.text:o==="application/x-www-form-urlencoded"&&i.formData?r.body=vp(i.formData):r.body=i.formData}return new Request(a,r)}function vp(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,typeof i=="string"?i:i.name);return e}function xv(t){let e=new FormData;for(let[n,i]of t.entries())e.append(n,i);return e}function dA(t,e,n,i=!1,a=!1){let r={},s=null,o,l=!1,c={},u=n&&Yn(n[1])?n[1].error:void 0;return t.forEach(f=>{if(!(f.route.id in e))return;let h=f.route.id,p=e[h];if(ft(!Ir(p),"Cannot handle redirect results in processLoaderData"),Yn(p)){let _=p.error;if(u!==void 0&&(_=u,u=void 0),s=s||{},a)s[h]=_;else{let y=Pr(t,h);s[y.route.id]==null&&(s[y.route.id]=_)}i||(r[h]=tM),l||(l=!0,o=ec(p.error)?p.error.status:500),p.headers&&(c[h]=p.headers)}else r[h]=p.data,p.statusCode&&p.statusCode!==200&&!l&&(o=p.statusCode),p.headers&&(c[h]=p.headers)}),u!==void 0&&n&&(s={[n[0]]:u},r[n[0]]=void 0),{loaderData:r,errors:s,statusCode:o||200,loaderHeaders:c}}function Sv(t,e,n,i,a,r){let{loaderData:s,errors:o}=dA(e,n,i);return a.forEach(l=>{let{key:c,match:u,controller:f}=l,h=r[c];if(ft(h,"Did not find corresponding fetcher result"),!(f&&f.signal.aborted))if(Yn(h)){let p=Pr(t.matches,u==null?void 0:u.route.id);o&&o[p.route.id]||(o={...o,[p.route.id]:h.error}),t.fetchers.delete(c)}else if(Ir(h))ft(!1,"Unhandled fetcher revalidation redirect");else{let p=Fa(h.data);t.fetchers.set(c,p)}}),{loaderData:s,errors:o}}function Mv(t,e,n,i){let a=Object.entries(e).filter(([,r])=>r!==tM).reduce((r,[s,o])=>(r[s]=o,r),{});for(let r of n){let s=r.route.id;if(!e.hasOwnProperty(s)&&t.hasOwnProperty(s)&&r.route.loader&&(a[s]=t[s]),i&&i.hasOwnProperty(s))break}return a}function bv(t){return t?Yn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Pr(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function Ev(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function ri(t,{pathname:e,routeId:n,method:i,type:a,message:r}={}){let s="Unknown Server Error",o="Unknown @remix-run/router error";return t===400?(s="Bad Request",i&&e&&n?o=`You made a ${i} request to "${e}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:a==="invalid-body"&&(o="Unable to encode submission body")):t===403?(s="Forbidden",o=`Route "${n}" does not match URL "${e}"`):t===404?(s="Not Found",o=`No route matches URL "${e}"`):t===405&&(s="Method Not Allowed",i&&e&&n?o=`You made a ${i.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(o=`Invalid request method "${i.toUpperCase()}"`)),new gf(t||500,s,new Error(o),!0)}function Ic(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[i,a]=e[n];if(Ir(a))return{key:i,result:a}}}function iM(t){let e=typeof t=="string"?gr(t):t;return ur({...e,hash:""})}function pA(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function mA(t){return aM(t.result)&&JT.has(t.result.status)}function Yn(t){return t.type==="error"}function Ir(t){return(t&&t.type)==="redirect"}function Tv(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function aM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function gA(t){return $T.has(t.toUpperCase())}function Mi(t){return KT.has(t.toUpperCase())}function cg(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function cl(t,e){let n=typeof e=="string"?gr(e).search:e.search;if(t[t.length-1].route.index&&cg(n||""))return t[t.length-1];let i=$S(t);return i[i.length-1]}function Av(t){let{formMethod:e,formAction:n,formEncType:i,text:a,formData:r,json:s}=t;if(!(!e||!n||!i)){if(a!=null)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:void 0,text:a};if(r!=null)return{formMethod:e,formAction:n,formEncType:i,formData:r,json:void 0,text:void 0};if(s!==void 0)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:s,text:void 0}}}function Hh(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function _A(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function qo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function vA(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Fa(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function yA(t,e){try{let n=t.sessionStorage.getItem(eM);if(n){let i=JSON.parse(n);for(let[a,r]of Object.entries(i||{}))r&&Array.isArray(r)&&e.set(a,new Set(r||[]))}}catch{}}function xA(t,e){if(e.size>0){let n={};for(let[i,a]of e)n[i]=[...a];try{t.sessionStorage.setItem(eM,JSON.stringify(n))}catch(i){yn(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function SA(){let t,e,n=new Promise((i,a)=>{t=async r=>{i(r);try{await n}catch{}},e=async r=>{a(r);try{await n}catch{}}});return{promise:n,resolve:t,reject:e}}var rs=F.createContext(null);rs.displayName="DataRouter";var gc=F.createContext(null);gc.displayName="DataRouterState";var ug=F.createContext({isTransitioning:!1});ug.displayName="ViewTransition";var rM=F.createContext(new Map);rM.displayName="Fetchers";var MA=F.createContext(null);MA.displayName="Await";var qi=F.createContext(null);qi.displayName="Navigation";var Wf=F.createContext(null);Wf.displayName="Location";var Ea=F.createContext({outlet:null,matches:[],isDataRoute:!1});Ea.displayName="Route";var fg=F.createContext(null);fg.displayName="RouteError";function bA(t,{relative:e}={}){ft(_c(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=F.useContext(qi),{hash:a,pathname:r,search:s}=vc(t,{relative:e}),o=r;return n!=="/"&&(o=r==="/"?n:ki([n,r])),i.createHref({pathname:o,search:s,hash:a})}function _c(){return F.useContext(Wf)!=null}function ss(){return ft(_c(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(Wf).location}var sM="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function oM(t){F.useContext(qi).static||F.useLayoutEffect(t)}function EA(){let{isDataRoute:t}=F.useContext(Ea);return t?IA():TA()}function TA(){ft(_c(),"useNavigate() may be used only in the context of a <Router> component.");let t=F.useContext(rs),{basename:e,navigator:n}=F.useContext(qi),{matches:i}=F.useContext(Ea),{pathname:a}=ss(),r=JSON.stringify(sg(i)),s=F.useRef(!1);return oM(()=>{s.current=!0}),F.useCallback((l,c={})=>{if(yn(s.current,sM),!s.current)return;if(typeof l=="number"){n.go(l);return}let u=og(l,JSON.parse(r),a,c.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:ki([e,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[e,n,r,a,t])}F.createContext(null);function vc(t,{relative:e}={}){let{matches:n}=F.useContext(Ea),{pathname:i}=ss(),a=JSON.stringify(sg(n));return F.useMemo(()=>og(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function AA(t,e,n,i){ft(_c(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:r}=F.useContext(qi),{matches:s}=F.useContext(Ea),o=s[s.length-1],l=o?o.params:{},c=o?o.pathname:"/",u=o?o.pathnameBase:"/",f=o&&o.route;{let v=f&&f.path||"";lM(c,!f||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let h=ss(),p;p=h;let _=p.pathname||"/",y=_;if(u!=="/"){let v=u.replace(/^\//,"").split("/");y="/"+_.replace(/^\//,"").split("/").slice(v.length).join("/")}let m=!r&&n&&n.matches&&n.matches.length>0?n.matches:Ya(t,{pathname:y});return yn(f||m!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),yn(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),LA(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:ki([u,a.encodeLocation?a.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:ki([u,a.encodeLocation?a.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,i)}function wA(){let t=zA(),e=ec(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},r={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:r},"ErrorBoundary")," or"," ",F.createElement("code",{style:r},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:a},n):null,s)}var CA=F.createElement(wA,null),RA=class extends F.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?F.createElement(Ea.Provider,{value:this.props.routeContext},F.createElement(fg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function DA({routeContext:t,match:e,children:n}){let i=F.useContext(rs);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(Ea.Provider,{value:t},n)}function LA(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,r=n==null?void 0:n.errors;if(r!=null){let l=a.findIndex(c=>c.route.id&&(r==null?void 0:r[c.route.id])!==void 0);ft(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(r).join(",")}`),a=a.slice(0,Math.min(a.length,l+1))}let s=!1,o=-1;if(n)for(let l=0;l<a.length;l++){let c=a[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(o=l),c.route.id){let{loaderData:u,errors:f}=n,h=c.route.loader&&!u.hasOwnProperty(c.route.id)&&(!f||f[c.route.id]===void 0);if(c.route.lazy||h){s=!0,o>=0?a=a.slice(0,o+1):a=[a[0]];break}}}return a.reduceRight((l,c,u)=>{let f,h=!1,p=null,_=null;n&&(f=r&&c.route.id?r[c.route.id]:void 0,p=c.route.errorElement||CA,s&&(o<0&&u===0?(lM("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,_=null):o===u&&(h=!0,_=c.route.hydrateFallbackElement||null)));let y=e.concat(a.slice(0,u+1)),m=()=>{let d;return f?d=p:h?d=_:c.route.Component?d=F.createElement(c.route.Component,null):c.route.element?d=c.route.element:d=l,F.createElement(DA,{match:c,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:d})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?F.createElement(RA,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:m(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):m()},null)}function hg(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function PA(t){let e=F.useContext(rs);return ft(e,hg(t)),e}function UA(t){let e=F.useContext(gc);return ft(e,hg(t)),e}function NA(t){let e=F.useContext(Ea);return ft(e,hg(t)),e}function dg(t){let e=NA(t),n=e.matches[e.matches.length-1];return ft(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function OA(){return dg("useRouteId")}function zA(){var i;let t=F.useContext(fg),e=UA("useRouteError"),n=dg("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function IA(){let{router:t}=PA("useNavigate"),e=dg("useNavigate"),n=F.useRef(!1);return oM(()=>{n.current=!0}),F.useCallback(async(a,r={})=>{yn(n.current,sM),n.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:e,...r}))},[t,e])}var wv={};function lM(t,e,n){!e&&!wv[t]&&(wv[t]=!0,yn(!1,n))}var Cv={};function Rv(t,e){!t&&!Cv[e]&&(Cv[e]=!0,console.warn(e))}function FA(t){let e={hasErrorBoundary:t.hasErrorBoundary||t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&(t.element&&yn(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(e,{element:F.createElement(t.Component),Component:void 0})),t.HydrateFallback&&(t.hydrateFallbackElement&&yn(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(e,{hydrateFallbackElement:F.createElement(t.HydrateFallback),HydrateFallback:void 0})),t.ErrorBoundary&&(t.errorElement&&yn(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(e,{errorElement:F.createElement(t.ErrorBoundary),ErrorBoundary:void 0})),e}var BA=class{constructor(){this.status="pending",this.promise=new Promise((t,e)=>{this.resolve=n=>{this.status==="pending"&&(this.status="resolved",t(n))},this.reject=n=>{this.status==="pending"&&(this.status="rejected",e(n))}})}};function HA({router:t,flushSync:e}){let[n,i]=F.useState(t.state),[a,r]=F.useState(),[s,o]=F.useState({isTransitioning:!1}),[l,c]=F.useState(),[u,f]=F.useState(),[h,p]=F.useState(),_=F.useRef(new Map),y=F.useCallback((g,{deletedFetchers:x,flushSync:w,viewTransitionOpts:S})=>{g.fetchers.forEach((C,T)=>{C.data!==void 0&&_.current.set(T,C.data)}),x.forEach(C=>_.current.delete(C)),Rv(w===!1||e!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let A=t.window!=null&&t.window.document!=null&&typeof t.window.document.startViewTransition=="function";if(Rv(S==null||A,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!S||!A){e&&w?e(()=>i(g)):F.startTransition(()=>i(g));return}if(e&&w){e(()=>{u&&(l&&l.resolve(),u.skipTransition()),o({isTransitioning:!0,flushSync:!0,currentLocation:S.currentLocation,nextLocation:S.nextLocation})});let C=t.window.document.startViewTransition(()=>{e(()=>i(g))});C.finished.finally(()=>{e(()=>{c(void 0),f(void 0),r(void 0),o({isTransitioning:!1})})}),e(()=>f(C));return}u?(l&&l.resolve(),u.skipTransition(),p({state:g,currentLocation:S.currentLocation,nextLocation:S.nextLocation})):(r(g),o({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}))},[t.window,e,u,l]);F.useLayoutEffect(()=>t.subscribe(y),[t,y]),F.useEffect(()=>{s.isTransitioning&&!s.flushSync&&c(new BA)},[s]),F.useEffect(()=>{if(l&&a&&t.window){let g=a,x=l.promise,w=t.window.document.startViewTransition(async()=>{F.startTransition(()=>i(g)),await x});w.finished.finally(()=>{c(void 0),f(void 0),r(void 0),o({isTransitioning:!1})}),f(w)}},[a,l,t.window]),F.useEffect(()=>{l&&a&&n.location.key===a.location.key&&l.resolve()},[l,u,n.location,a]),F.useEffect(()=>{!s.isTransitioning&&h&&(r(h.state),o({isTransitioning:!0,flushSync:!1,currentLocation:h.currentLocation,nextLocation:h.nextLocation}),p(void 0))},[s.isTransitioning,h]);let m=F.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:g=>t.navigate(g),push:(g,x,w)=>t.navigate(g,{state:x,preventScrollReset:w==null?void 0:w.preventScrollReset}),replace:(g,x,w)=>t.navigate(g,{replace:!0,state:x,preventScrollReset:w==null?void 0:w.preventScrollReset})}),[t]),d=t.basename||"/",v=F.useMemo(()=>({router:t,navigator:m,static:!1,basename:d}),[t,m,d]);return F.createElement(F.Fragment,null,F.createElement(rs.Provider,{value:v},F.createElement(gc.Provider,{value:n},F.createElement(rM.Provider,{value:_.current},F.createElement(ug.Provider,{value:s},F.createElement(GA,{basename:d,location:n.location,navigationType:n.historyAction,navigator:m},F.createElement(VA,{routes:t.routes,future:t.future,state:n})))))),null)}var VA=F.memo(kA);function kA({routes:t,future:e,state:n}){return AA(t,void 0,n,e)}function GA({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:r=!1}){ft(!_c(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=t.replace(/^\/*/,"/"),o=F.useMemo(()=>({basename:s,navigator:a,static:r,future:{}}),[s,a,r]);typeof n=="string"&&(n=gr(n));let{pathname:l="/",search:c="",hash:u="",state:f=null,key:h="default"}=n,p=F.useMemo(()=>{let _=wi(l,s);return _==null?null:{location:{pathname:_,search:c,hash:u,state:f,key:h},navigationType:i}},[s,l,c,u,f,h,i]);return yn(p!=null,`<Router basename="${s}"> is not able to match the URL "${l}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:F.createElement(qi.Provider,{value:o},F.createElement(Wf.Provider,{children:e,value:p}))}var Lu="get",Pu="application/x-www-form-urlencoded";function Yf(t){return t!=null&&typeof t.tagName=="string"}function jA(t){return Yf(t)&&t.tagName.toLowerCase()==="button"}function XA(t){return Yf(t)&&t.tagName.toLowerCase()==="form"}function WA(t){return Yf(t)&&t.tagName.toLowerCase()==="input"}function YA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function qA(t,e){return t.button===0&&(!e||e==="_self")&&!YA(t)}var Fc=null;function ZA(){if(Fc===null)try{new FormData(document.createElement("form"),0),Fc=!1}catch{Fc=!0}return Fc}var KA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vh(t){return t!=null&&!KA.has(t)?(yn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pu}"`),null):t}function QA(t,e){let n,i,a,r,s;if(XA(t)){let o=t.getAttribute("action");i=o?wi(o,e):null,n=t.getAttribute("method")||Lu,a=Vh(t.getAttribute("enctype"))||Pu,r=new FormData(t)}else if(jA(t)||WA(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(i=l?wi(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||Lu,a=Vh(t.getAttribute("formenctype"))||Vh(o.getAttribute("enctype"))||Pu,r=new FormData(o,t),!ZA()){let{name:c,type:u,value:f}=t;if(u==="image"){let h=c?`${c}.`:"";r.append(`${h}x`,"0"),r.append(`${h}y`,"0")}else c&&r.append(c,f)}}else{if(Yf(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Lu,i=null,a=Pu,s=t}return r&&a==="text/plain"&&(s=r,r=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:r,body:s}}function pg(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function $A(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function JA(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function ew(t,e,n){let i=await Promise.all(t.map(async a=>{let r=e.routes[a.route.id];if(r){let s=await $A(r,n);return s.links?s.links():[]}return[]}));return aw(i.flat(1).filter(JA).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Dv(t,e,n,i,a,r){let s=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,o=(l,c)=>{var u;return n[c].pathname!==l.pathname||((u=n[c].route.path)==null?void 0:u.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return r==="assets"?e.filter((l,c)=>s(l,c)||o(l,c)):r==="data"?e.filter((l,c)=>{var f;let u=i.routes[l.route.id];if(!u||!u.hasLoader)return!1;if(s(l,c)||o(l,c))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function tw(t,e,{includeHydrateFallback:n}={}){return nw(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let r=[a.module];return a.clientActionModule&&(r=r.concat(a.clientActionModule)),a.clientLoaderModule&&(r=r.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(r=r.concat(a.hydrateFallbackModule)),a.imports&&(r=r.concat(a.imports)),r}).flat(1))}function nw(t){return[...new Set(t)]}function iw(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function aw(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let r=JSON.stringify(iw(a));return n.has(r)||(n.add(r),i.push({key:r,link:a})),i},[])}function rw(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function sw(){let t=F.useContext(rs);return pg(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function ow(){let t=F.useContext(gc);return pg(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var mg=F.createContext(void 0);mg.displayName="FrameworkContext";function cM(){let t=F.useContext(mg);return pg(t,"You must render this element inside a <HydratedRouter> element"),t}function lw(t,e){let n=F.useContext(mg),[i,a]=F.useState(!1),[r,s]=F.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:f}=e,h=F.useRef(null);F.useEffect(()=>{if(t==="render"&&s(!0),t==="viewport"){let y=d=>{d.forEach(v=>{s(v.isIntersecting)})},m=new IntersectionObserver(y,{threshold:.5});return h.current&&m.observe(h.current),()=>{m.disconnect()}}},[t]),F.useEffect(()=>{if(i){let y=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(y)}}},[i]);let p=()=>{a(!0)},_=()=>{a(!1),s(!1)};return n?t!=="intent"?[r,h,{}]:[r,h,{onFocus:Zo(o,p),onBlur:Zo(l,_),onMouseEnter:Zo(c,p),onMouseLeave:Zo(u,_),onTouchStart:Zo(f,p)}]:[!1,h,{}]}function Zo(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function cw({page:t,...e}){let{router:n}=sw(),i=F.useMemo(()=>Ya(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?F.createElement(fw,{page:t,matches:i,...e}):null}function uw(t){let{manifest:e,routeModules:n}=cM(),[i,a]=F.useState([]);return F.useEffect(()=>{let r=!1;return ew(t,e,n).then(s=>{r||a(s)}),()=>{r=!0}},[t,e,n]),i}function fw({page:t,matches:e,...n}){let i=ss(),{manifest:a,routeModules:r}=cM(),{loaderData:s,matches:o}=ow(),l=F.useMemo(()=>Dv(t,e,o,a,i,"data"),[t,e,o,a,i]),c=F.useMemo(()=>Dv(t,e,o,a,i,"assets"),[t,e,o,a,i]),u=F.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let p=new Set,_=!1;if(e.forEach(m=>{var v;let d=a.routes[m.route.id];!d||!d.hasLoader||(!l.some(g=>g.route.id===m.route.id)&&m.route.id in s&&((v=r[m.route.id])!=null&&v.shouldRevalidate)||d.hasClientLoader?_=!0:p.add(m.route.id))}),p.size===0)return[];let y=rw(t);return _&&p.size>0&&y.searchParams.set("_routes",e.filter(m=>p.has(m.route.id)).map(m=>m.route.id).join(",")),[y.pathname+y.search]},[s,i,a,l,e,t,r]),f=F.useMemo(()=>tw(c,a),[c,a]),h=uw(c);return F.createElement(F.Fragment,null,u.map(p=>F.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...n})),f.map(p=>F.createElement("link",{key:p,rel:"modulepreload",href:p,...n})),h.map(({key:p,link:_})=>F.createElement("link",{key:p,..._})))}function hw(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var uM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{uM&&(window.__reactRouterVersion="7.2.0")}catch{}function dw(t,e){return iA({basename:e==null?void 0:e.basename,future:e==null?void 0:e.future,history:wT({window:e==null?void 0:e.window}),hydrationData:pw(),routes:t,mapRouteProperties:FA,dataStrategy:e==null?void 0:e.dataStrategy,patchRoutesOnNavigation:e==null?void 0:e.patchRoutesOnNavigation,window:e==null?void 0:e.window}).initialize()}function pw(){let t=window==null?void 0:window.__staticRouterHydrationData;return t&&t.errors&&(t={...t,errors:mw(t.errors)}),t}function mw(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,a]of e)if(a&&a.__type==="RouteErrorResponse")n[i]=new gf(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let r=window[a.__subType];if(typeof r=="function")try{let s=new r(a.message);s.stack="",n[i]=s}catch{}}if(n[i]==null){let r=new Error(a.message);r.stack="",n[i]=r}}else n[i]=a;return n}var fM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hM=F.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:r,replace:s,state:o,target:l,to:c,preventScrollReset:u,viewTransition:f,...h},p){let{basename:_}=F.useContext(qi),y=typeof c=="string"&&fM.test(c),m,d=!1;if(typeof c=="string"&&y&&(m=c,uM))try{let T=new URL(window.location.href),M=c.startsWith("//")?new URL(T.protocol+c):new URL(c),D=wi(M.pathname,_);M.origin===T.origin&&D!=null?c=D+M.search+M.hash:d=!0}catch{yn(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=bA(c,{relative:a}),[g,x,w]=lw(i,h),S=yw(c,{replace:s,state:o,target:l,preventScrollReset:u,relative:a,viewTransition:f});function A(T){e&&e(T),T.defaultPrevented||S(T)}let C=F.createElement("a",{...h,...w,href:m||v,onClick:d||r?e:A,ref:hw(p,x),target:l,"data-discover":!y&&n==="render"?"true":void 0});return g&&!y?F.createElement(F.Fragment,null,C,F.createElement(cw,{page:v})):C});hM.displayName="Link";var gw=F.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:r,to:s,viewTransition:o,children:l,...c},u){let f=vc(s,{relative:c.relative}),h=ss(),p=F.useContext(gc),{navigator:_,basename:y}=F.useContext(qi),m=p!=null&&Ew(f)&&o===!0,d=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,v=h.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(v=v.toLowerCase(),g=g?g.toLowerCase():null,d=d.toLowerCase()),g&&y&&(g=wi(g,y)||g);const x=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let w=v===d||!a&&v.startsWith(d)&&v.charAt(x)==="/",S=g!=null&&(g===d||!a&&g.startsWith(d)&&g.charAt(d.length)==="/"),A={isActive:w,isPending:S,isTransitioning:m},C=w?e:void 0,T;typeof i=="function"?T=i(A):T=[i,w?"active":null,S?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let M=typeof r=="function"?r(A):r;return F.createElement(hM,{...c,"aria-current":C,className:T,ref:u,style:M,to:s,viewTransition:o},typeof l=="function"?l(A):l)});gw.displayName="NavLink";var _w=F.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:r,method:s=Lu,action:o,onSubmit:l,relative:c,preventScrollReset:u,viewTransition:f,...h},p)=>{let _=Mw(),y=bw(o,{relative:c}),m=s.toLowerCase()==="get"?"get":"post",d=typeof o=="string"&&fM.test(o),v=g=>{if(l&&l(g),g.defaultPrevented)return;g.preventDefault();let x=g.nativeEvent.submitter,w=(x==null?void 0:x.getAttribute("formmethod"))||s;_(x||g.currentTarget,{fetcherKey:e,method:w,navigate:n,replace:a,state:r,relative:c,preventScrollReset:u,viewTransition:f})};return F.createElement("form",{ref:p,method:m,action:y,onSubmit:i?l:v,...h,"data-discover":!d&&t==="render"?"true":void 0})});_w.displayName="Form";function vw(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dM(t){let e=F.useContext(rs);return ft(e,vw(t)),e}function yw(t,{target:e,replace:n,state:i,preventScrollReset:a,relative:r,viewTransition:s}={}){let o=EA(),l=ss(),c=vc(t,{relative:r});return F.useCallback(u=>{if(qA(u,e)){u.preventDefault();let f=n!==void 0?n:ur(l)===ur(c);o(t,{replace:f,state:i,preventScrollReset:a,relative:r,viewTransition:s})}},[l,o,c,n,i,e,t,a,r,s])}var xw=0,Sw=()=>`__${String(++xw)}__`;function Mw(){let{router:t}=dM("useSubmit"),{basename:e}=F.useContext(qi),n=OA();return F.useCallback(async(i,a={})=>{let{action:r,method:s,encType:o,formData:l,body:c}=QA(i,e);if(a.navigate===!1){let u=a.fetcherKey||Sw();await t.fetch(u,n,a.action||r,{preventScrollReset:a.preventScrollReset,formData:l,body:c,formMethod:a.method||s,formEncType:a.encType||o,flushSync:a.flushSync})}else await t.navigate(a.action||r,{preventScrollReset:a.preventScrollReset,formData:l,body:c,formMethod:a.method||s,formEncType:a.encType||o,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,e,n])}function bw(t,{relative:e}={}){let{basename:n}=F.useContext(qi),i=F.useContext(Ea);ft(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),r={...vc(t||".",{relative:e})},s=ss();if(t==null){r.search=s.search;let o=new URLSearchParams(r.search),l=o.getAll("index");if(l.some(u=>u==="")){o.delete("index"),l.filter(f=>f).forEach(f=>o.append("index",f));let u=o.toString();r.search=u?`?${u}`:""}}return(!t||t===".")&&a.route.index&&(r.search=r.search?r.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(r.pathname=r.pathname==="/"?n:ki([n,r.pathname])),ur(r)}function Ew(t,e={}){let n=F.useContext(ug);ft(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=dM("useViewTransitionState"),a=vc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let r=wi(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=wi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return mf(a.pathname,s)!=null||mf(a.pathname,r)!=null}new TextEncoder;/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tw(t){return F.createElement(HA,{flushSync:vy.flushSync,...t})}var yp=new Map,Bc=new WeakMap,Lv=0,Aw=void 0;function ww(t){return t?(Bc.has(t)||(Lv+=1,Bc.set(t,Lv.toString())),Bc.get(t)):"0"}function Cw(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?ww(t.root):t[e]}`).toString()}function Rw(t){const e=Cw(t);let n=yp.get(e);if(!n){const i=new Map;let a;const r=new IntersectionObserver(s=>{s.forEach(o=>{var l;const c=o.isIntersecting&&a.some(u=>o.intersectionRatio>=u);t.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=c),(l=i.get(o.target))==null||l.forEach(u=>{u(c,o)})})},t);a=r.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:r,elements:i},yp.set(e,n)}return n}function Dw(t,e,n={},i=Aw){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:a,observer:r,elements:s}=Rw(n),o=s.get(t)||[];return s.has(t)||s.set(t,o),o.push(e),r.observe(t),function(){o.splice(o.indexOf(e),1),o.length===0&&(s.delete(t),r.unobserve(t)),s.size===0&&(r.disconnect(),yp.delete(a))}}function pM({threshold:t,delay:e,trackVisibility:n,rootMargin:i,root:a,triggerOnce:r,skip:s,initialInView:o,fallbackInView:l,onChange:c}={}){var u;const[f,h]=F.useState(null),p=F.useRef(c),[_,y]=F.useState({inView:!!o,entry:void 0});p.current=c,F.useEffect(()=>{if(s||!f)return;let g;return g=Dw(f,(x,w)=>{y({inView:x,entry:w}),p.current&&p.current(x,w),w.isIntersecting&&r&&g&&(g(),g=void 0)},{root:a,rootMargin:i,threshold:t,trackVisibility:n,delay:e},l),()=>{g&&g()}},[Array.isArray(t)?t.toString():t,f,a,i,r,s,n,l,e]);const m=(u=_.entry)==null?void 0:u.target,d=F.useRef(void 0);!f&&m&&!r&&!s&&d.current!==m&&(d.current=m,y({inView:!!o,entry:void 0}));const v=[h,_.inView,_.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const Va=t=>{const{children:e,id:n,height:i,style:a,darkMode:r,revealPercent:s}=t,o=s||"-35% 0px",{ref:l,inView:c}=pM({root:null,rootMargin:o,triggerOnce:!0});return P.jsx("section",{ref:l,id:n,style:{minHeight:i,...a},className:`section ${c?"section-visible":"section-hidden"} ${r?"dark-mode":"light-mode"}`,children:P.jsx("div",{className:"section-content",children:e})})},mM=({darkMode:t,threeJSEntry:e,style:n,onInit:i})=>{const a=F.useRef(null),r=F.useRef(null),s=F.useRef(null);return F.useEffect(()=>{var u;if(typeof e!="function"){console.error("Invalid threeJSEntry function provided.");return}let o=(u=a.current)==null?void 0:u.parentElement;for(;o&&o.tagName!=="SECTION";)o=o.parentElement;r.current=o,console.log("Parent Element:",o),console.log("ThreeJS Container:",a.current),s.current=e(a,o),i&&i(s),(()=>{var f;(f=s.current)!=null&&f.handleDarkModeChange&&s.current.handleDarkModeChange(t)})();const c=setTimeout(()=>{var f;(f=s.current)!=null&&f.handleResize&&s.current.handleResize(a)},1e3);return()=>{var f;clearTimeout(c),(f=s.current)!=null&&f.cleanup&&s.current.cleanup()}},[t,e]),P.jsx("div",{ref:a,style:{minWidth:"250px",minHeight:"250px",maxHeight:"100%",height:"100%",width:"100%",...n}})},gg=({children:t,className:e,style:n,childStyle:i,revealMode:a,revealPercent:r})=>{const s=a||"rootMargin",{ref:o,inView:l}=pM(s==="rootMargin"?{root:null,rootMargin:r,triggerOnce:!0}:{threshold:r,triggerOnce:!0});return P.jsx("div",{ref:o,className:`flex-reveal ${e} ${l?"flex-reveal-visible":"flex-reveal-hidden"}`,style:{display:"flex",width:"100%",...n},children:Rf.Children.map(t,(c,u)=>P.jsx("div",{className:"flex-child",style:{transitionDelay:`${u*.5}s`,flex:"1",flexWrap:"wrap",...i},children:c}))})},_f=({darkMode:t,text:e,style:n,onClick:i})=>(F.useState(!1),F.useState(!1),P.jsx("button",{onClick:i,className:`minimal-button ${t?"dark-mode":"light-mode"}`,style:{padding:"10px 20px",cursor:"pointer",...n},children:e})),gM=({darkMode:t,isOpen:e,content:n,style:i,onClose:a})=>{if(!e)return null;console.log("LightboxModal darkMode:",t);const r=F.isValidElement(n)?F.cloneElement(n,{darkMode:t}):n;return P.jsx("div",{className:"lightbox-overlay",onClick:a,children:P.jsxs("div",{className:`lightbox-content ${t?"dark-mode":"light-mode"}`,onClick:s=>s.stopPropagation(),style:i,children:[P.jsx(_f,{darkMode:t,className:`close-button ${t?"dark-mode":"light-mode"}`,onClick:a,text:"X",style:{position:"absolute",top:"10px",right:"10px",fontWeight:"bold"}}),P.jsx("div",{children:r})]})})};class qU extends Rf.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){console.error("Error caught in ErrorBoundary:",e,n)}render(){return this.state.hasError?P.jsx("h2",{children:"Something went wrong. Please try again later."}):this.props.children}}const Lw=({darkMode:t,toggleDarkMode:e})=>(F.useState({x:0,y:0}),P.jsxs("div",{className:"settings",children:[P.jsx("button",{className:"settings-icon",children:P.jsx("img",{src:`assets/Images/settings_gear_icon_${t?"White.png":"Black.png"}`,alt:"Settings",width:"20px",size:"20px"})}),P.jsxs("div",{className:`settings-menu-wrapper ${t?"dark-mode":"light-mode"}`,children:[" ",P.jsx("div",{className:`settings-menu ${t?"dark-mode":"light-mode"}`,children:P.jsxs("button",{onClick:e,className:"settingsMenuButton",children:[P.jsx("img",{className:"clickableImage",src:`assets/Images/${t?"DarkMode.png":"LightMode.png"}`,alt:t?"Dark Mode":"Light Mode",style:{width:"25px",height:"25px",marginRight:"0.5rem"}}),t?"Switch to Light Mode":"Switch to Dark Mode"]})})]})]}));function Pw({...t}){const e=F.useRef(null),n=i=>{const a=e.current;a.style.height="auto",a.style.height=`${a.scrollHeight}px`,t.onChange&&t.onChange(i)};return P.jsx("textarea",{...t,ref:e,onInput:n,style:{width:"100%",minHeight:"40px",maxHeight:"300px",resize:"none",borderRadius:"4px",...t.style}})}const Uw=({darkMode:t})=>{const[e,n]=F.useState({name:"",email:"",phone:"",message:""}),[i,a]=F.useState({name:"",email:"",phone:"",message:""}),r=l=>{const{id:c,value:u}=l.target;n({...e,[c]:u})},s=()=>{const l={},c=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,u=/(^04\d{8}$)|(^\+?[1-9]\d{1,14}$)/;return e.name||(l.name="Name is required"),e.email?c.test(e.email)||(l.email="Please enter a valid email address"):l.email="Email is required",e.phone&&!u.test(e.phone)&&(l.phone="Please enter a valid phone number in international format"),e.message||(l.message="Message is required"),a(l),Object.keys(l).length===0},o=l=>{if(l.preventDefault(),s()){const c=document.getElementById("contactForm"),u=new FormData(c);fetch("https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/formResponse",{method:"POST",body:u,mode:"no-cors"}).then(f=>{alert("Form submitted successfully!")}).catch(f=>{console.error("Error submitting form:",f),alert("There was an error submitting the form.")})}};return P.jsxs("div",{className:"form-container   ",children:[P.jsx("h2",{children:"Say Hi!"}),P.jsx("iframe",{name:"iframe",title:"Hidden iframe for form submission",style:{display:"none"}}),P.jsx("form",{action:"https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/formResponse",method:"POST",id:"contactForm",target:"iframe",children:P.jsxs("div",{style:{display:"flex",gap:"20px",flexDirection:"column"},children:[P.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",justifyContent:"center"},children:[P.jsxs("div",{className:`input-group ${t?"dark-mode":"light-mode"}`,style:{flexGrow:"2"},children:[P.jsx("input",{type:"text",className:e.name?"not-empty":"",id:"name",name:"entry.1954550861",placeholder:"",value:e.name,onChange:r,required:!0}),P.jsx("label",{htmlFor:"name",children:"Name"}),i.name&&P.jsx("span",{className:"error",children:i.name})]}),P.jsxs("div",{className:`input-group ${t?"dark-mode":"light-mode"}`,style:{flexGrow:"1"},children:[P.jsx("input",{type:"tel",id:"phone",name:"entry.561916195",className:e.phone?"not-empty":"",value:e.phone,onChange:r,pattern:"(^04\\d{8}$)|(^\\+?[1-9]\\d{1,14}$)",title:`Phone number must be in the format: 
                       - Local (Australian): 04xxxxxxxx 
                       - International: +1234567890`,placeholder:"Enter your phone number"}),P.jsx("label",{htmlFor:"phone",children:"Phone Number (Optional)"}),i.phone&&P.jsx("span",{className:"error",children:i.phone})]})]}),P.jsxs("div",{className:`input-group ${t?"dark-mode":"light-mode"}`,children:[P.jsx("input",{type:"email",id:"email",name:"entry.1965469943",className:e.email?"not-empty":"",value:e.email,onChange:r,required:!0}),P.jsx("label",{htmlFor:"email",children:"Email"}),i.email&&P.jsx("span",{className:"error",children:i.email})]}),P.jsxs("div",{className:`input-group ${t?"dark-mode":"light-mode"}`,children:[P.jsx(Pw,{id:"message",name:"entry.1168516071",value:e.message,onChange:r,required:!0}),P.jsx("label",{htmlFor:"message",children:"Message"}),i.message&&P.jsx("span",{className:"error",children:i.message})]}),P.jsx("button",{type:"submit",onClick:o,children:"Submit"})]})})]})},xp=({darkMode:t,scrollToSection:e,style:n})=>{const[i,a]=F.useState(!1);F.useState(!1),F.useState(!1);const[r,s]=F.useState(!1);return F.useEffect(()=>{s(!!i)},[i]),P.jsx("div",{style:{...n},children:P.jsxs(gg,{className:"socials-flex",revealMode:"threshold",style:{justifyContent:"center",alignItems:"center"},children:[P.jsxs("div",{className:"buttons",style:{display:"flex",gap:"1rem"},children:[P.jsx(_f,{darkMode:t,text:"Résumé",onClick:()=>window.open("assets/Files/Resume.pdf","_blank")}),P.jsx(_f,{darkMode:t,onClick:e,text:"Contact"})]}),P.jsxs("div",{className:"images",style:{display:"flex",gap:"1rem"},children:[P.jsx("div",{className:"img",style:{flex:"0"},children:P.jsx("a",{href:"https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b",target:"_blank",rel:"noreferer",children:P.jsx("img",{className:"clickableImage",src:"assets/Images/linkedIn_logo.png",alt:"LinkedIn",style:{width:"100px",height:"100px",marginRight:"8px"}})})}),P.jsx("div",{className:"img",style:{flex:"0"},children:P.jsx("a",{href:"https://github.com/Peregrine777",target:"_blank",rel:"noreferer",children:P.jsx("img",{className:"clickableImage scalable",src:`assets/Images/github-logo_${t?"dark.png":"light.png"}`,alt:"GitHub",style:{width:"100px",height:"100px",marginRight:"8px"}})})})]})]})})},Nw=({content:t,darkMode:e,contentRenderer:n})=>{const[i,a]=F.useState(null),[r,s]=F.useState(null),[o,l]=F.useState(!1),[c,u]=F.useState([]),[f,h]=F.useState(!1),p=F.useRef(null),_=d=>{if(p.current){const{left:v,width:g}=d.getBoundingClientRect(),x=document.querySelector(".menu-items").getBoundingClientRect().left;p.current.style.transform=`translateX(${v-x+g/2-50}px)`,p.current.style.width="100px"}},y=(d,v)=>{_(d),i===v?(a(null),s(null),l(!1),h(!1)):(h(!1),setTimeout(()=>{var g;a(v),(g=t[v])!=null&&g.subOptions?(u(t[v].subOptions),s(t[v].subOptions[0]),l(!0)):l(!1),h(!0)},300))};F.useEffect(()=>{const d=Object.keys(t)[0];a(d),h(!0)},[t]);const m=d=>{r===d?(s(null),h(!1)):(h(!1),setTimeout(()=>{s(d),h(!0)},300))};return P.jsxs("div",{className:`menu-bar ${e?"dark-mode":""}`,children:[P.jsxs("div",{className:"menu-items",children:[P.jsx("div",{className:`menu-underline ${e?"dark-mode":"light-mode"}`,ref:p}),Object.keys(t).map(d=>P.jsx("div",{className:`menu-item ${i===d?"active":""}`,onClick:v=>y(v.currentTarget,d),children:d},d))]}),o&&P.jsx("div",{className:"sub-menu",children:c.map(d=>P.jsx("div",{className:`sub-menu-item ${r===d?"active":""}`,onClick:()=>m(d),children:d},d))}),P.jsx("div",{className:`content ${f?"fade-in":"fade-out"}`,style:{overflow:"auto"},children:n?n(i,r):r?`Content for ${r}`:i?`Content for ${i}`:"Select a section or sub-option"})]})},Ow=({darkMode:t,src:e,alt:n,style:i})=>{class a extends Rf.Component{constructor(){super(...arguments);Fo(this,"state",{noVariant:!1,hasError:!1,isLoading:!0});Fo(this,"handleError",()=>{const{noVariant:o}=this.state;if(!o){this.setState({noVariant:!0});return}this.setState({hasError:!0})});Fo(this,"handleLoad",()=>{this.setState({isLoading:!1})});Fo(this,"getImagePath",o=>{if(!o)return null;const[l,c]=o.split(/(?=\.[^.]+$)/);return t?`${l}_White${c}`:`${l}_Black${c}`})}render(){const{hasError:o,noVariant:l,isLoading:c}=this.state,{src:u,alt:f,style:h}=this.props,p=this.getImagePath(u),_={width:h.width||"40px",height:h.height||"40px",backgroundColor:"#f0f0f0",display:c?"block":"none"};return l?P.jsxs("div",{children:[P.jsx("div",{style:_}),P.jsx("img",{src:u,onError:this.handleError,onLoad:this.handleLoad,alt:f,style:{...h,display:c?"none":"unset",opacity:c?0:1,transition:"opacity 0.3s ease-in-out"}})]}):o?P.jsxs("div",{children:[P.jsx("div",{style:_}),P.jsx("img",{src:"assets/Images/404.png",alt:f,style:h})]}):P.jsxs("div",{children:[P.jsx("div",{style:_}),P.jsx("img",{src:p,onError:this.handleError,onLoad:this.handleLoad,alt:f,style:{...h,width:"40px",display:c?"none":"unset",opacity:c?0:1,transition:"opacity 0.3s ease-in-out"}})]})}}return P.jsx(a,{src:e,alt:n,style:i})},zw=({darkMode:t})=>{const[e,n]=F.useState([]),[i,a]=F.useState(!1);if(F.useEffect(()=>{fetch("assets/Data/skills.json").then(s=>s.json()).then(s=>{console.log("Categories and Skill Counts:",s.map(o=>({category:o.title,skillCount:o.skills.length}))),n(s),a(!0)}).catch(s=>console.error("Error loading skills:",s))},[]),!i)return P.jsx("p",{children:"Loading skills..."});const r=s=>{if(!s)return null;const[o,l]=s.split(/(?=\.[^.]+$)/);return t?`${o}_White${l}`:`${o}_Black${l}`};return P.jsx("div",{children:e.map(s=>P.jsxs("div",{children:[P.jsx("h2",{style:{textAlign:"center",margin:"0.2rem"},children:s.title}),P.jsx("div",{className:"partial-divider"}),P.jsx(gg,{style:{justifyContent:"center",paddingTop:"1rem",paddingBottom:"1rem"},childStyle:{flexGrow:"0",minWidth:"150px"},children:s.skills.map(o=>(r(o.image),P.jsxs("div",{className:"skillItem",style:{},children:[P.jsx(Ow,{darkMode:t,src:`assets/Images/Skills/${o.image}`,alt:o.name,style:{maxWidth:"100%",width:"50px",objectFit:"contain",alignSelf:"normal",height:"auto"}}),P.jsx("p",{style:{marginTop:"0.1rem",fontFamily:"Montserrat, sans-serif",fontWeight:"400"},children:o.name})]},o.name)))})]},s.title))})},_M=({darkMode:t,toggleDarkMode:e})=>P.jsxs("header",{className:`header ${t?"dark-mode":"light-mode"}`,children:[P.jsxs("div",{children:[P.jsx("img",{src:`assets/Images/Peregrine_${t?"dark.png":"light.png"}`,alt:"Logo",className:"logo",style:{verticalAlign:"text-bottom",objectFit:"contain",width:"auto",height:"30px"}}),P.jsx("h1",{style:{display:"inline-block",paddingLeft:"10px"},children:"Samuel Mckenzie-Sell"})]}),P.jsx(Lw,{darkMode:t,toggleDarkMode:e})]}),vM=({darkMode:t})=>P.jsxs("div",{className:"container",style:{justifyContent:"center",alignItems:"center",flex:"0 1 auto"},children:[P.jsx("div",{className:"column",style:{flexBasis:"10%",flex:"0 0 auto"},children:P.jsx("img",{src:`assets/Images/Peregrine_${t?"dark.png":"light.png"}`,style:{height:"100px",verticalAlign:"middle"}})}),P.jsx("div",{className:"column",style:{flexBasis:"25%",flex:"1 2 auto",alignItems:"left",textAlign:"left",padding:"0 10px"},children:P.jsx(xp,{darkMode:t})}),P.jsxs("div",{className:"column",style:{flex:"0",alignSelf:"center",lineHeight:"14px",textAlign:"left"},children:[P.jsx("p",{style:{marginTop:"10px"},children:" samuelmckenziesell@gmail.com "}),P.jsx("p",{children:" +61 0401 384 885 "})]})]}),Iw=({darkMode:t})=>{const[e,n]=F.useState(!1);F.useEffect(()=>{const f=()=>{n(window.innerWidth<768)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const i={Games:{subOptions:[]},"Game Engines":{subOptions:[]},"Interactive Experiences":{subOptions:[]}},a=({title:f,img:h,link:p,description:_,children:y})=>P.jsxs("div",{className:"game",children:[!e&&P.jsx(r,{img:h,link:p}),P.jsx(s,{title:f,descr:_,img:h,link:p,children:y})]}),r=({img:f,link:h})=>P.jsx("a",{className:"game-icon",href:h,target:"_blank",rel:"noopener noreferrer",children:P.jsx("img",{className:"game-icon-img",src:f,alt:"Game Icon"})}),s=({title:f,descr:h,img:p,link:_,children:y})=>P.jsxs("div",{className:"game-info",children:[P.jsx(o,{children:f}),e&&P.jsxs("div",{className:"image-holder-small",children:[" ",P.jsx(r,{img:p,link:_})," "]}),P.jsx(l,{children:y}),P.jsx(c,{children:h})]}),o=({children:f})=>P.jsx("div",{className:"game-title",children:f}),l=({children:f})=>P.jsx("div",{className:"features",children:f}),c=({children:f})=>P.jsx("div",{className:"game-description",children:f}),u=(f,h)=>h?P.jsxs("div",{children:[P.jsx("h2",{children:h}),P.jsxs("p",{children:["This is the content for ",h,"."]})]}):f?f==="Games"?P.jsxs("div",{style:{padding:"10px"},children:[P.jsx("h2",{style:{textAlign:"left",marginBottom:"16px"},children:"Games"}),P.jsxs("div",{className:"game-list",children:[P.jsx(a,{title:"Gloria Armada",img:"assets/Images/Gloria_Armada.png",link:"https://chanel-parfait.itch.io/gloria-armada",description:"Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"}),P.jsx("h2",{style:{textAlign:"left",marginBottom:"0px"},children:"Tech Demos"}),P.jsx(a,{title:"Procedural Jones",img:"assets/Images/PJ_CaveGen.png",link:"https://github.com/Peregrine777/Procedural-Jones-CaveGen",description:"Procedural Jones is a tech demo that showcases procedural generation of walkable caves using rules-based box/corridor placement and marching-cubes terrain generation."})]})]}):f==="Game Engines"?P.jsx("div",{style:{width:"95vw",padding:"10px"}}):P.jsxs("div",{children:[P.jsx("h2",{children:f}),P.jsxs("p",{children:["This is the content for ",f,"."]})]}):P.jsx("p",{children:"Please select a section or sub-option."});return P.jsxs("div",{style:{textAlign:"center",maxHeight:"100vh"},children:[P.jsx("h2",{children:"Game Development"}),P.jsx("div",{children:P.jsx(Nw,{content:i,darkMode:t,contentRenderer:u})})]})},Fw=({darkMode:t})=>{const e=t?"white":"#333";return P.jsxs("section",{className:"analytics-overview",children:[P.jsxs("div",{className:"section-header",children:[P.jsx("h2",{style:{color:e},children:"Data Analytics Expertise"}),P.jsx("p",{children:"Leveraging data to uncover insights and drive business decisions. Although I work on sensitive projects, I can offer a range of services in statistical analysis, predictive modeling, and data visualization."})]}),P.jsxs("div",{className:"skills-and-tools",children:[P.jsx("h3",{children:"Tools & Techniques"}),P.jsxs("ul",{children:[P.jsx("li",{children:"Statistical Analysis: Python (pandas, numpy, scipy)"}),P.jsx("li",{children:"Data Visualization: Tableau, Power BI, Plotly"}),P.jsx("li",{children:"Database Management: SQL, PostgreSQL, NoSQL"}),P.jsx("li",{children:"Machine Learning: Scikit-learn, TensorFlow, Keras"}),P.jsx("li",{children:"Data Processing: ETL, web scraping, APIs"})]})]}),P.jsxs("div",{className:"impact",children:[P.jsx("h3",{children:"Impact"}),P.jsx("p",{children:"In my past work, I've helped businesses improve decision-making with data-driven insights, built predictive models for revenue forecasting, and developed interactive dashboards to monitor key performance metrics. My work directly contributes to operational efficiency and informed strategic decisions."})]}),P.jsx("div",{className:"visuals",children:P.jsx("div",{className:"sample-graph",children:P.jsx("img",{src:"/path-to-placeholder-image.png"})})})]})},Bw="modulepreload",Hw=function(t){return"/Github-Page/"+t},Pv={},kn=function(e,n,i){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(n.map(l=>{if(l=Hw(l),l in Pv)return;Pv[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Bw,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _g="168",so={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vw=0,Uv=1,kw=2,yM=1,Gw=2,ra=3,fr=0,In=1,zi=2,_a=0,oo=1,Nv=2,Ov=3,zv=4,jw=5,Ur=100,Xw=101,Ww=102,Yw=103,qw=104,Zw=200,Kw=201,Qw=202,$w=203,Sp=204,Mp=205,Jw=206,eC=207,tC=208,nC=209,iC=210,aC=211,rC=212,sC=213,oC=214,lC=0,cC=1,uC=2,vf=3,fC=4,hC=5,dC=6,pC=7,vg=0,mC=1,gC=2,rr=0,xM=1,SM=2,MM=3,bM=4,_C=5,EM=6,TM=7,AM=300,xo=301,So=302,bp=303,Ep=304,qf=306,Tp=1e3,Fr=1001,Ap=1002,zn=1003,vC=1004,Hc=1005,Ti=1006,kh=1007,Br=1008,Ma=1009,wM=1010,CM=1011,tc=1012,yg=1013,Qr=1014,pa=1015,Uo=1016,xg=1017,Sg=1018,Mo=1020,RM=35902,DM=1021,LM=1022,di=1023,PM=1024,UM=1025,lo=1026,bo=1027,NM=1028,Mg=1029,OM=1030,bg=1031,Eg=1033,Uu=33776,Nu=33777,Ou=33778,zu=33779,wp=35840,Cp=35841,Rp=35842,Dp=35843,Lp=36196,Pp=37492,Up=37496,Np=37808,Op=37809,zp=37810,Ip=37811,Fp=37812,Bp=37813,Hp=37814,Vp=37815,kp=37816,Gp=37817,jp=37818,Xp=37819,Wp=37820,Yp=37821,Iu=36492,qp=36494,Zp=36495,zM=36283,Kp=36284,Qp=36285,$p=36286,yC=3200,xC=3201,Zf=0,SC=1,qa="",bi="srgb",_r="srgb-linear",Tg="display-p3",Kf="display-p3-linear",yf="linear",Ct="srgb",xf="rec709",Sf="p3",ds=7680,Iv=519,MC=512,bC=513,EC=514,IM=515,TC=516,AC=517,wC=518,CC=519,Fv=35044,Bv="300 es",ma=2e3,Mf=2001;class os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hv=1234567;const Dl=Math.PI/180,Eo=180/Math.PI;function No(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[t&255]+Sn[t>>8&255]+Sn[t>>16&255]+Sn[t>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function an(t,e,n){return Math.max(e,Math.min(n,t))}function Ag(t,e){return(t%e+e)%e}function RC(t,e,n,i,a){return i+(t-e)*(a-i)/(n-e)}function DC(t,e,n){return t!==e?(n-t)/(e-t):0}function Ll(t,e,n){return(1-n)*t+n*e}function LC(t,e,n,i){return Ll(t,e,1-Math.exp(-n*i))}function PC(t,e=1){return e-Math.abs(Ag(t,e*2)-e)}function UC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function NC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function OC(t,e){return t+Math.floor(Math.random()*(e-t+1))}function zC(t,e){return t+Math.random()*(e-t)}function IC(t){return t*(.5-Math.random())}function FC(t){t!==void 0&&(Hv=t);let e=Hv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BC(t){return t*Dl}function HC(t){return t*Eo}function VC(t){return(t&t-1)===0&&t!==0}function kC(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function GC(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function jC(t,e,n,i,a){const r=Math.cos,s=Math.sin,o=r(n/2),l=s(n/2),c=r((e+i)/2),u=s((e+i)/2),f=r((e-i)/2),h=s((e-i)/2),p=r((i-e)/2),_=s((i-e)/2);switch(a){case"XYX":t.set(o*u,l*f,l*h,o*c);break;case"YZY":t.set(l*h,o*u,l*f,o*c);break;case"ZXZ":t.set(l*f,l*h,o*u,o*c);break;case"XZX":t.set(o*u,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*u,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ns(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function wn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const XC={DEG2RAD:Dl,RAD2DEG:Eo,generateUUID:No,clamp:an,euclideanModulo:Ag,mapLinear:RC,inverseLerp:DC,lerp:Ll,damp:LC,pingpong:PC,smoothstep:UC,smootherstep:NC,randInt:OC,randFloat:zC,randFloatSpread:IC,seededRandom:FC,degToRad:BC,radToDeg:HC,isPowerOfTwo:VC,ceilPowerOfTwo:kC,floorPowerOfTwo:GC,setQuaternionFromProperEuler:jC,normalize:wn,denormalize:Ns};class be{constructor(e=0,n=0){be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,n,i,a,r,s,o,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c)}set(e,n,i,a,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],y=a[0],m=a[3],d=a[6],v=a[1],g=a[4],x=a[7],w=a[2],S=a[5],A=a[8];return r[0]=s*y+o*v+l*w,r[3]=s*m+o*g+l*S,r[6]=s*d+o*x+l*A,r[1]=c*y+u*v+f*w,r[4]=c*m+u*g+f*S,r[7]=c*d+u*x+f*A,r[2]=h*y+p*v+_*w,r[5]=h*m+p*g+_*S,r[8]=h*d+p*x+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*o*c-i*r*u+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,h=o*l-u*r,p=c*r-s*l,_=n*f+i*h+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(a*c-u*i)*y,e[2]=(o*i-a*s)*y,e[3]=h*y,e[4]=(u*n-a*l)*y,e[5]=(a*r-o*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(s*n-i*r)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Gh.makeScale(e,n)),this}rotate(e){return this.premultiply(Gh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gh=new nt;function FM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function WC(){const t=nc("canvas");return t.style.display="block",t}const Vv={};function Pl(t){t in Vv||(Vv[t]=!0,console.warn(t))}function YC(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const kv=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gv=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ko={[_r]:{transfer:yf,primaries:xf,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[bi]:{transfer:Ct,primaries:xf,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Kf]:{transfer:yf,primaries:Sf,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Gv),fromReference:t=>t.applyMatrix3(kv)},[Tg]:{transfer:Ct,primaries:Sf,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Gv),fromReference:t=>t.applyMatrix3(kv).convertLinearToSRGB()}},qC=new Set([_r,Kf]),gt={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!qC.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ko[e].toReference,a=Ko[n].fromReference;return a(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ko[t].primaries},getTransfer:function(t){return t===qa?yf:Ko[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ko[e].luminanceCoefficients)}};function co(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ps;class ZC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=nc("canvas")),ps.width=e.width,ps.height=e.height;const i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=co(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(co(n[i]/255)*255):n[i]=co(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KC=0;class BM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KC++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Xh(a[s].image)):r.push(Xh(a[s]))}else r=Xh(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function Xh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ZC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QC=0;class xn extends os{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Fr,a=Fr,r=Ti,s=Br,o=di,l=Ma,c=xn.DEFAULT_ANISOTROPY,u=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QC++}),this.uuid=No(),this.name="",this.source=new BM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==AM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tp:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case Ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tp:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case Ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=AM;xn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,n=0,i=0,a=1){sn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,x=(p+1)/2,w=(d+1)/2,S=(u+h)/4,A=(f+y)/4,C=(_+m)/4;return g>x&&g>w?g<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(g),a=S/i,r=A/i):x>w?x<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(x),i=S/a,r=C/a):w<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(w),i=A/r,a=C/r),this.set(i,a,r,n),this}let v=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-y)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $C extends os{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new sn(0,0,e,n),this.scissorTest=!1,this.viewport=new sn(0,0,e,n);const a={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new xn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new BM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends $C{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class HM extends xn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=zn,this.minFilter=zn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JC extends xn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=zn,this.minFilter=zn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],u=i[a+2],f=i[a+3];const h=r[s+0],p=r[s+1],_=r[s+2],y=r[s+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||c!==p||u!==_){let m=1-o;const d=l*h+c*p+u*_+f*y,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const w=Math.sqrt(g),S=Math.atan2(w,d*v);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w}const x=o*v;if(l=l*m+h*x,c=c*m+p*x,u=u*m+_*x,f=f*m+y*x,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],u=i[a+3],f=r[s],h=r[s+1],p=r[s+2],_=r[s+3];return e[n]=o*_+u*f+l*p-c*h,e[n+1]=l*_+u*h+c*f-o*p,e[n+2]=c*_+u*p+o*h-l*f,e[n+3]=u*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(a/2),f=o(r/2),h=l(i/2),p=l(a/2),_=l(r/2);switch(s){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*o+a*c-r*l,this._y=a*u+s*l+r*o-i*c,this._z=r*u+s*c+i*l-a*o,this._w=s*u-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*e._w+i*e._x+a*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=a*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),u=2*(o*n-r*a),f=2*(r*i-s*n);return this.x=n+l*c+s*f-o*u,this.y=i+l*u+o*c-r*f,this.z=a+l*f+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wh=new L,jv=new $r;class Ii{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,vi):vi.fromBufferAttribute(r,s),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vc.copy(i.boundingBox)),Vc.applyMatrix4(e.matrixWorld),this.union(Vc)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),kc.subVectors(this.max,Qo),ms.subVectors(e.a,Qo),gs.subVectors(e.b,Qo),_s.subVectors(e.c,Qo),Da.subVectors(gs,ms),La.subVectors(_s,gs),Sr.subVectors(ms,_s);let n=[0,-Da.z,Da.y,0,-La.z,La.y,0,-Sr.z,Sr.y,Da.z,0,-Da.x,La.z,0,-La.x,Sr.z,0,-Sr.x,-Da.y,Da.x,0,-La.y,La.x,0,-Sr.y,Sr.x,0];return!Yh(n,ms,gs,_s,kc)||(n=[1,0,0,0,1,0,0,0,1],!Yh(n,ms,gs,_s,kc))?!1:(Gc.crossVectors(Da,La),n=[Gc.x,Gc.y,Gc.z],Yh(n,ms,gs,_s,kc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new L,new L,new L,new L,new L,new L,new L,new L],vi=new L,Vc=new Ii,ms=new L,gs=new L,_s=new L,Da=new L,La=new L,Sr=new L,Qo=new L,kc=new L,Gc=new L,Mr=new L;function Yh(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){Mr.fromArray(t,r);const o=a.x*Math.abs(Mr.x)+a.y*Math.abs(Mr.y)+a.z*Math.abs(Mr.z),l=e.dot(Mr),c=n.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const eR=new Ii,$o=new L,qh=new L;class yc{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eR.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const n=$o.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector($o,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(qh)),this.expandByPoint($o.copy(e.center).sub(qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new L,Zh=new L,jc=new L,Pa=new L,Kh=new L,Xc=new L,Qh=new L;class Qf{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ea)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ea.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ea.copy(this.origin).addScaledVector(this.direction,n),ea.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Zh.copy(e).add(n).multiplyScalar(.5),jc.copy(n).sub(e).normalize(),Pa.copy(this.origin).sub(Zh);const r=e.distanceTo(n)*.5,s=-this.direction.dot(jc),o=Pa.dot(this.direction),l=-Pa.dot(jc),c=Pa.lengthSq(),u=Math.abs(1-s*s);let f,h,p,_;if(u>0)if(f=s*l-o,h=s*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const y=1/u;f*=y,h*=y,p=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-s*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(s*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=s>0?-r:r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(Zh).addScaledVector(jc,h),p}intersectSphere(e,n){ea.subVectors(e.center,this.origin);const i=ea.dot(this.direction),a=ea.dot(ea)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,ea)!==null}intersectTriangle(e,n,i,a,r){Kh.subVectors(n,e),Xc.subVectors(i,e),Qh.crossVectors(Kh,Xc);let s=this.direction.dot(Qh),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Pa.subVectors(this.origin,e);const l=o*this.direction.dot(Xc.crossVectors(Pa,Xc));if(l<0)return null;const c=o*this.direction.dot(Kh.cross(Pa));if(c<0||l+c>s)return null;const u=-o*Pa.dot(Qh);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,i,a,r,s,o,l,c,u,f,h,p,_,y,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c,u,f,h,p,_,y,m)}set(e,n,i,a,r,s,o,l,c,u,f,h,p,_,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=a,d[1]=r,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,a=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),s=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*u,p=s*f,_=o*u,y=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=_+p*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,y=c*f;n[0]=h+y*o,n[4]=_*o-p,n[8]=s*c,n[1]=s*f,n[5]=s*u,n[9]=-o,n[2]=p*o-_,n[6]=y+h*o,n[10]=s*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,y=c*f;n[0]=h-y*o,n[4]=-s*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=s*u,n[9]=y-h*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const h=s*u,p=s*f,_=o*u,y=o*f;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,_=o*l,y=o*c;n[0]=l*u,n[4]=y-h*f,n[8]=_*f+p,n[1]=f,n[5]=s*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=s*l,p=s*c,_=o*l,y=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+y,n[5]=s*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*u,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tR,e,nR)}lookAt(e,n,i){const a=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Ua.crossVectors(i,Gn),Ua.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Ua.crossVectors(i,Gn)),Ua.normalize(),Wc.crossVectors(Gn,Ua),a[0]=Ua.x,a[4]=Wc.x,a[8]=Gn.x,a[1]=Ua.y,a[5]=Wc.y,a[9]=Gn.y,a[2]=Ua.z,a[6]=Wc.z,a[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],y=i[6],m=i[10],d=i[14],v=i[3],g=i[7],x=i[11],w=i[15],S=a[0],A=a[4],C=a[8],T=a[12],M=a[1],D=a[5],Q=a[9],Y=a[13],K=a[2],$=a[6],N=a[10],q=a[14],V=a[3],le=a[7],ue=a[11],Se=a[15];return r[0]=s*S+o*M+l*K+c*V,r[4]=s*A+o*D+l*$+c*le,r[8]=s*C+o*Q+l*N+c*ue,r[12]=s*T+o*Y+l*q+c*Se,r[1]=u*S+f*M+h*K+p*V,r[5]=u*A+f*D+h*$+p*le,r[9]=u*C+f*Q+h*N+p*ue,r[13]=u*T+f*Y+h*q+p*Se,r[2]=_*S+y*M+m*K+d*V,r[6]=_*A+y*D+m*$+d*le,r[10]=_*C+y*Q+m*N+d*ue,r[14]=_*T+y*Y+m*q+d*Se,r[3]=v*S+g*M+x*K+w*V,r[7]=v*A+g*D+x*$+w*le,r[11]=v*C+g*Q+x*N+w*ue,r[15]=v*T+g*Y+x*q+w*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],y=e[7],m=e[11],d=e[15];return _*(+r*l*f-a*c*f-r*o*h+i*c*h+a*o*p-i*l*p)+y*(+n*l*p-n*c*h+r*s*h-a*s*p+a*c*u-r*l*u)+m*(+n*c*f-n*o*p-r*s*f+i*s*p+r*o*u-i*c*u)+d*(-a*o*u-n*l*f+n*o*h+a*s*f-i*s*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],y=e[13],m=e[14],d=e[15],v=f*m*c-y*h*c+y*l*p-o*m*p-f*l*d+o*h*d,g=_*h*c-u*m*c-_*l*p+s*m*p+u*l*d-s*h*d,x=u*y*c-_*f*c+_*o*p-s*y*p-u*o*d+s*f*d,w=_*f*l-u*y*l-_*o*h+s*y*h+u*o*m-s*f*m,S=n*v+i*g+a*x+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=v*A,e[1]=(y*h*r-f*m*r-y*a*p+i*m*p+f*a*d-i*h*d)*A,e[2]=(o*m*r-y*l*r+y*a*c-i*m*c-o*a*d+i*l*d)*A,e[3]=(f*l*r-o*h*r-f*a*c+i*h*c+o*a*p-i*l*p)*A,e[4]=g*A,e[5]=(u*m*r-_*h*r+_*a*p-n*m*p-u*a*d+n*h*d)*A,e[6]=(_*l*r-s*m*r-_*a*c+n*m*c+s*a*d-n*l*d)*A,e[7]=(s*h*r-u*l*r+u*a*c-n*h*c-s*a*p+n*l*p)*A,e[8]=x*A,e[9]=(_*f*r-u*y*r-_*i*p+n*y*p+u*i*d-n*f*d)*A,e[10]=(s*y*r-_*o*r+_*i*c-n*y*c-s*i*d+n*o*d)*A,e[11]=(u*o*r-s*f*r-u*i*c+n*f*c+s*i*p-n*o*p)*A,e[12]=w*A,e[13]=(u*y*a-_*f*a+_*i*h-n*y*h-u*i*m+n*f*m)*A,e[14]=(_*o*a-s*y*a-_*i*l+n*y*l+s*i*m-n*o*m)*A,e[15]=(s*f*a-u*o*a+u*i*l-n*f*l-s*i*h+n*o*h)*A,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*s,0,c*l-a*o,u*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,u=s+s,f=o+o,h=r*c,p=r*u,_=r*f,y=s*u,m=s*f,d=o*f,v=l*c,g=l*u,x=l*f,w=i.x,S=i.y,A=i.z;return a[0]=(1-(y+d))*w,a[1]=(p+x)*w,a[2]=(_-g)*w,a[3]=0,a[4]=(p-x)*S,a[5]=(1-(h+d))*S,a[6]=(m+v)*S,a[7]=0,a[8]=(_+g)*A,a[9]=(m-v)*A,a[10]=(1-(h+y))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;let r=vs.set(a[0],a[1],a[2]).length();const s=vs.set(a[4],a[5],a[6]).length(),o=vs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],yi.copy(this);const c=1/r,u=1/s,f=1/o;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=f,yi.elements[9]*=f,yi.elements[10]*=f,n.setFromRotationMatrix(yi),i.x=r,i.y=s,i.z=o,this}makePerspective(e,n,i,a,r,s,o=ma){const l=this.elements,c=2*r/(n-e),u=2*r/(i-a),f=(n+e)/(n-e),h=(i+a)/(i-a);let p,_;if(o===ma)p=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===Mf)p=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=ma){const l=this.elements,c=1/(n-e),u=1/(i-a),f=1/(s-r),h=(n+e)*c,p=(i+a)*u;let _,y;if(o===ma)_=(s+r)*f,y=-2*f;else if(o===Mf)_=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vs=new L,yi=new Ot,tR=new L(0,0,0),nR=new L(1,1,1),Ua=new L,Wc=new L,Gn=new L,Xv=new Ot,Wv=new $r;class Ci{constructor(e=0,n=0,i=0,a=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],u=a[9],f=a[2],h=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-an(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wv.setFromEuler(this),this.setFromQuaternion(Wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class VM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iR=0;const Yv=new L,ys=new $r,ta=new Ot,Yc=new L,Jo=new L,aR=new L,rR=new $r,qv=new L(1,0,0),Zv=new L(0,1,0),Kv=new L(0,0,1),Qv={type:"added"},sR={type:"removed"},xs={type:"childadded",child:null},$h={type:"childremoved",child:null};class Qt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iR++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new L,n=new Ci,i=new $r,a=new L(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new nt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new VM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(qv,e)}rotateY(e){return this.rotateOnAxis(Zv,e)}rotateZ(e){return this.rotateOnAxis(Kv,e)}translateOnAxis(e,n){return Yv.copy(e).applyQuaternion(this.quaternion),this.position.add(Yv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(qv,e)}translateY(e){return this.translateOnAxis(Zv,e)}translateZ(e){return this.translateOnAxis(Kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Yc.copy(e):Yc.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Jo,Yc,this.up):ta.lookAt(Yc,Jo,this.up),this.quaternion.setFromRotationMatrix(ta),a&&(ta.extractRotation(a.matrixWorld),ys.setFromRotationMatrix(ta),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qv),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sR),$h.child=e,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qv),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,aR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,rR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Qt.DEFAULT_UP=new L(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new L,na=new L,Jh=new L,ia=new L,Ss=new L,Ms=new L,$v=new L,ed=new L,td=new L,nd=new L;class Fi{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),xi.subVectors(e,n),a.cross(xi);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){xi.subVectors(a,n),na.subVectors(i,n),Jh.subVectors(e,n);const s=xi.dot(xi),o=xi.dot(na),l=xi.dot(Jh),c=na.dot(na),u=na.dot(Jh),f=s*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,_=(s*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,ia)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ia.x),l.addScaledVector(s,ia.y),l.addScaledVector(o,ia.z),l)}static isFrontFacing(e,n,i,a){return xi.subVectors(i,n),na.subVectors(e,n),xi.cross(na).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),xi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return Fi.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;Ss.subVectors(a,i),Ms.subVectors(r,i),ed.subVectors(e,i);const l=Ss.dot(ed),c=Ms.dot(ed);if(l<=0&&c<=0)return n.copy(i);td.subVectors(e,a);const u=Ss.dot(td),f=Ms.dot(td);if(u>=0&&f<=u)return n.copy(a);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(Ss,s);nd.subVectors(e,r);const p=Ss.dot(nd),_=Ms.dot(nd);if(_>=0&&p<=_)return n.copy(r);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Ms,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return $v.subVectors(r,a),o=(f-u)/(f-u+(p-_)),n.copy(a).addScaledVector($v,o);const d=1/(m+y+h);return s=y*d,o=h*d,n.copy(i).addScaledVector(Ss,s).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},qc={h:0,s:0,l:0};function id(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let Ne=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,a=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,a),this}setHSL(e,n,i,a=gt.workingColorSpace){if(e=Ag(e,1),n=an(n,0,1),i=an(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=id(s,r,e+1/3),this.g=id(s,r,e),this.b=id(s,r,e-1/3)}return gt.toWorkingColorSpace(this,a),this}setStyle(e,n=bi){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bi){const i=kM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}copyLinearToSRGB(e){return this.r=jh(e.r),this.g=jh(e.g),this.b=jh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bi){return gt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(an(Mn.r*255,0,255))*65536+Math.round(an(Mn.g*255,0,255))*256+Math.round(an(Mn.b*255,0,255))}getHexString(e=bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(Mn.copy(this),n);const i=Mn.r,a=Mn.g,r=Mn.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case i:l=(a-r)/f+(a<r?6:0);break;case a:l=(r-i)/f+2;break;case r:l=(i-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=bi){gt.fromWorkingColorSpace(Mn.copy(this),e);const n=Mn.r,i=Mn.g,a=Mn.b;return e!==bi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(Na),this.setHSL(Na.h+e,Na.s+n,Na.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Na),e.getHSL(qc);const i=Ll(Na.h,qc.h,n),a=Ll(Na.s,qc.s,n),r=Ll(Na.l,qc.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Mn=new Ne;Ne.NAMES=kM;let oR=0;class Ta extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=No(),this.name="",this.type="Material",this.blending=oo,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sp,this.blendDst=Mp,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=vf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sp&&(i.blendSrc=this.blendSrc),this.blendDst!==Mp&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wg extends Ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new L,Zc=new be;class Gi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Fv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Pl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Zc.fromBufferAttribute(this,n),Zc.applyMatrix3(e),this.setXY(n,Zc.x,Zc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ns(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ns(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ns(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ns(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),a=wn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),a=wn(a,this.array),r=wn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fv&&(e.usage=this.usage),e}}class GM extends Gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class jM extends Gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class An extends Gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let lR=0;const ii=new Ot,ad=new Qt,bs=new L,jn=new Ii,el=new Ii,un=new L;class gi extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(FM(e)?jM:GM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,n,i){return ii.makeTranslation(e,n,i),this.applyMatrix4(ii),this}scale(e,n,i){return ii.makeScale(e,n,i),this.applyMatrix4(ii),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=[];for(let i=0,a=e.length;i<a;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new An(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];el.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(jn.min,el.min),jn.expandByPoint(un),un.addVectors(jn.max,el.max),jn.expandByPoint(un)):(jn.expandByPoint(el.min),jn.expandByPoint(el.max))}jn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)un.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(un));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)un.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),un.add(bs)),a=Math.max(a,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new L,l[C]=new L;const c=new L,u=new L,f=new L,h=new be,p=new be,_=new be,y=new L,m=new L;function d(C,T,M){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),h.fromBufferAttribute(r,C),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,M),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),o[C].add(y),o[T].add(y),o[M].add(y),l[C].add(m),l[T].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,T=v.length;C<T;++C){const M=v[C],D=M.start,Q=M.count;for(let Y=D,K=D+Q;Y<K;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const g=new L,x=new L,w=new L,S=new L;function A(C){w.fromBufferAttribute(a,C),S.copy(w);const T=o[C];g.copy(T),g.sub(w.multiplyScalar(w.dot(T))).normalize(),x.crossVectors(S,T);const D=x.dot(l[C])<0?-1:1;s.setXYZW(C,g.x,g.y,g.z,D)}for(let C=0,T=v.length;C<T;++C){const M=v[C],D=M.start,Q=M.count;for(let Y=D,K=D+Q;Y<K;Y+=3)A(e.getX(Y+0)),A(e.getX(Y+1)),A(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const a=new L,r=new L,s=new L,o=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(n,_),r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),u.subVectors(s,r),f.subVectors(a,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)a.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),u.subVectors(s,r),f.subVectors(a,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Gi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gi,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(a[l]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jv=new Ot,br=new Qf,Kc=new yc,e0=new L,Es=new L,Ts=new L,As=new L,rd=new L,Qc=new L,$c=new be,Jc=new be,eu=new be,t0=new L,n0=new L,i0=new L,tu=new L,nu=new L;class Zn extends Qt{constructor(e=new gi,n=new wg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Qc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(rd.fromBufferAttribute(f,e),s?Qc.addScaledVector(rd,u):Qc.addScaledVector(rd.sub(n),u))}n.add(Qc)}return n}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kc.copy(i.boundingSphere),Kc.applyMatrix4(r),br.copy(e.ray).recast(e.near),!(Kc.containsPoint(br.origin)===!1&&(br.intersectSphere(Kc,e0)===null||br.origin.distanceToSquared(e0)>(e.far-e.near)**2))&&(Jv.copy(r).invert(),br.copy(e.ray).applyMatrix4(Jv),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=s[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=g;x<w;x+=3){const S=o.getX(x),A=o.getX(x+1),C=o.getX(x+2);a=iu(this,d,e,i,c,u,f,S,A,C),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){const v=o.getX(m),g=o.getX(m+1),x=o.getX(m+2);a=iu(this,s,e,i,c,u,f,v,g,x),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=s[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=g;x<w;x+=3){const S=x,A=x+1,C=x+2;a=iu(this,d,e,i,c,u,f,S,A,C),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){const v=m,g=m+1,x=m+2;a=iu(this,s,e,i,c,u,f,v,g,x),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function cR(t,e,n,i,a,r,s,o){let l;if(e.side===In?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===fr,o),l===null)return null;nu.copy(o),nu.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(nu);return c<n.near||c>n.far?null:{distance:c,point:nu.clone(),object:t}}function iu(t,e,n,i,a,r,s,o,l,c){t.getVertexPosition(o,Es),t.getVertexPosition(l,Ts),t.getVertexPosition(c,As);const u=cR(t,e,n,i,Es,Ts,As,tu);if(u){a&&($c.fromBufferAttribute(a,o),Jc.fromBufferAttribute(a,l),eu.fromBufferAttribute(a,c),u.uv=Fi.getInterpolation(tu,Es,Ts,As,$c,Jc,eu,new be)),r&&($c.fromBufferAttribute(r,o),Jc.fromBufferAttribute(r,l),eu.fromBufferAttribute(r,c),u.uv1=Fi.getInterpolation(tu,Es,Ts,As,$c,Jc,eu,new be)),s&&(t0.fromBufferAttribute(s,o),n0.fromBufferAttribute(s,l),i0.fromBufferAttribute(s,c),u.normal=Fi.getInterpolation(tu,Es,Ts,As,t0,n0,i0,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};Fi.getNormal(Es,Ts,As,f.normal),u.face=f}return u}class Oo extends gi{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,s,r,0),_("z","y","x",1,-1,i,n,-e,s,r,1),_("x","z","y",1,1,e,i,n,a,s,2),_("x","z","y",1,-1,e,i,-n,a,s,3),_("x","y","z",1,-1,e,n,i,a,r,4),_("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(u,3)),this.setAttribute("uv",new An(f,2));function _(y,m,d,v,g,x,w,S,A,C,T){const M=x/A,D=w/C,Q=x/2,Y=w/2,K=S/2,$=A+1,N=C+1;let q=0,V=0;const le=new L;for(let ue=0;ue<N;ue++){const Se=ue*D-Y;for(let We=0;We<$;We++){const Qe=We*M-Q;le[y]=Qe*v,le[m]=Se*g,le[d]=K,c.push(le.x,le.y,le.z),le[y]=0,le[m]=0,le[d]=S>0?1:-1,u.push(le.x,le.y,le.z),f.push(We/A),f.push(1-ue/C),q+=1}}for(let ue=0;ue<C;ue++)for(let Se=0;Se<A;Se++){const We=h+Se+$*ue,Qe=h+Se+$*(ue+1),Z=h+(Se+1)+$*(ue+1),oe=h+(Se+1)+$*ue;l.push(We,Qe,oe),l.push(Qe,Z,oe),V+=6}o.addGroup(p,V,T),p+=V,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone():Array.isArray(a)?e[n][i]=a.slice():e[n][i]=a}}return e}function Cn(t){const e={};for(let n=0;n<t.length;n++){const i=To(t[n]);for(const a in i)e[a]=i[a]}return e}function uR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function XM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Cg={clone:To,merge:Cn};var fR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fR,this.fragmentShader=hR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=uR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class WM extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=ma}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new L,a0=new be,r0=new be;class On extends WM{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,n){return this.getViewBounds(e,a0,r0),n.subVectors(r0,a0)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Dl*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ws=-90,Cs=1;class dR extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new On(ws,Cs,e,n);a.layers=this.layers,this.add(a);const r=new On(ws,Cs,e,n);r.layers=this.layers,this.add(r);const s=new On(ws,Cs,e,n);s.layers=this.layers,this.add(s);const o=new On(ws,Cs,e,n);o.layers=this.layers,this.add(o);const l=new On(ws,Cs,e,n);l.layers=this.layers,this.add(l);const c=new On(ws,Cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(e===ma)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mf)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(n,r),e.setRenderTarget(i,1,a),e.render(n,s),e.setRenderTarget(i,2,a),e.render(n,o),e.setRenderTarget(i,3,a),e.render(n,l),e.setRenderTarget(i,4,a),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,a),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class YM extends xn{constructor(e,n,i,a,r,s,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:xo,super(e,n,i,a,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pR extends hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new YM(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ti}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Oo(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:_a});r.uniforms.tEquirect.value=n;const s=new Zn(a,r),o=n.minFilter;return n.minFilter===Br&&(n.minFilter=Ti),new dR(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,a){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}const sd=new L,mR=new L,gR=new nt;class ka{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=sd.subVectors(i,n).cross(mR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sd),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gR.getNormalMatrix(e),a=this.coplanarPoint(sd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new yc,au=new L;class Rg{constructor(e=new ka,n=new ka,i=new ka,a=new ka,r=new ka,s=new ka){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ma){const i=this.planes,a=e.elements,r=a[0],s=a[1],o=a[2],l=a[3],c=a[4],u=a[5],f=a[6],h=a[7],p=a[8],_=a[9],y=a[10],m=a[11],d=a[12],v=a[13],g=a[14],x=a[15];if(i[0].setComponents(l-r,h-c,m-p,x-d).normalize(),i[1].setComponents(l+r,h+c,m+p,x+d).normalize(),i[2].setComponents(l+s,h+u,m+_,x+v).normalize(),i[3].setComponents(l-s,h-u,m-_,x-v).normalize(),i[4].setComponents(l-o,h-f,m-y,x-g).normalize(),n===ma)i[5].setComponents(l+o,h+f,m+y,x+g).normalize();else if(n===Mf)i[5].setComponents(o,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(au.x=a.normal.x>0?e.max.x:e.min.x,au.y=a.normal.y>0?e.max.y:e.min.y,au.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(au)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qM(){let t=null,e=!1,n=null,i=null;function a(r,s){n(r,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function _R(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,o),f.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let p=0,_=h.length;p<_;p++){const y=h[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}class zo extends gi{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,f=e/o,h=n/l,p=[],_=[],y=[],m=[];for(let d=0;d<u;d++){const v=d*h-s;for(let g=0;g<c;g++){const x=g*f-r;_.push(x,-v,0),y.push(0,0,1),m.push(g/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const g=v+c*d,x=v+c*(d+1),w=v+1+c*(d+1),S=v+1+c*d;p.push(g,x,S),p.push(x,w,S)}this.setIndex(p),this.setAttribute("position",new An(_,3)),this.setAttribute("normal",new An(y,3)),this.setAttribute("uv",new An(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var vR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yR=`#ifdef USE_ALPHAHASH
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
#endif`,xR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ER=`#ifdef USE_AOMAP
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
#endif`,TR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AR=`#ifdef USE_BATCHING
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
#endif`,wR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LR=`#ifdef USE_IRIDESCENCE
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
#endif`,PR=`#ifdef USE_BUMPMAP
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
#endif`,UR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,VR=`#define PI 3.141592653589793
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
} // validated`,kR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GR=`vec3 transformedNormal = objectNormal;
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
#endif`,jR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qR="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZR=`
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
}`,KR=`#ifdef USE_ENVMAP
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
#endif`,QR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$R=`#ifdef USE_ENVMAP
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
#endif`,JR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e2=`#ifdef USE_ENVMAP
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
#endif`,t2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r2=`#ifdef USE_GRADIENTMAP
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
}`,s2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c2=`uniform bool receiveShadow;
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
#endif`,u2=`#ifdef USE_ENVMAP
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
#endif`,f2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m2=`PhysicalMaterial material;
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
#endif`,g2=`struct PhysicalMaterial {
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
}`,_2=`
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
#endif`,v2=`#if defined( RE_IndirectDiffuse )
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
#endif`,y2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w2=`#if defined( USE_POINTS_UV )
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
#endif`,C2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U2=`#ifdef USE_MORPHTARGETS
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
#endif`,N2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H2=`#ifdef USE_NORMALMAP
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
#endif`,V2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nD=`float getShadowMask() {
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
}`,iD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aD=`#ifdef USE_SKINNING
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
#endif`,rD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sD=`#ifdef USE_SKINNING
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
#endif`,oD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fD=`#ifdef USE_TRANSMISSION
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
#endif`,hD=`#ifdef USE_TRANSMISSION
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
#endif`,dD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _D=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vD=`uniform sampler2D t2D;
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
}`,yD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bD=`#include <common>
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
}`,ED=`#if DEPTH_PACKING == 3200
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
}`,TD=`#define DISTANCE
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
}`,AD=`#define DISTANCE
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
}`,wD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RD=`uniform float scale;
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
}`,DD=`uniform vec3 diffuse;
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
}`,LD=`#include <common>
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
}`,PD=`uniform vec3 diffuse;
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
}`,UD=`#define LAMBERT
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
}`,ND=`#define LAMBERT
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
}`,OD=`#define MATCAP
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
}`,zD=`#define MATCAP
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
}`,ID=`#define NORMAL
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
}`,FD=`#define NORMAL
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
}`,BD=`#define PHONG
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
}`,HD=`#define PHONG
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
}`,VD=`#define STANDARD
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
}`,kD=`#define STANDARD
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
}`,GD=`#define TOON
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
}`,jD=`#define TOON
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
}`,XD=`uniform float size;
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
}`,WD=`uniform vec3 diffuse;
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
}`,YD=`#include <common>
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
}`,qD=`uniform vec3 color;
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
}`,ZD=`uniform float rotation;
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
}`,KD=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:vR,alphahash_pars_fragment:yR,alphamap_fragment:xR,alphamap_pars_fragment:SR,alphatest_fragment:MR,alphatest_pars_fragment:bR,aomap_fragment:ER,aomap_pars_fragment:TR,batching_pars_vertex:AR,batching_vertex:wR,begin_vertex:CR,beginnormal_vertex:RR,bsdfs:DR,iridescence_fragment:LR,bumpmap_pars_fragment:PR,clipping_planes_fragment:UR,clipping_planes_pars_fragment:NR,clipping_planes_pars_vertex:OR,clipping_planes_vertex:zR,color_fragment:IR,color_pars_fragment:FR,color_pars_vertex:BR,color_vertex:HR,common:VR,cube_uv_reflection_fragment:kR,defaultnormal_vertex:GR,displacementmap_pars_vertex:jR,displacementmap_vertex:XR,emissivemap_fragment:WR,emissivemap_pars_fragment:YR,colorspace_fragment:qR,colorspace_pars_fragment:ZR,envmap_fragment:KR,envmap_common_pars_fragment:QR,envmap_pars_fragment:$R,envmap_pars_vertex:JR,envmap_physical_pars_fragment:u2,envmap_vertex:e2,fog_vertex:t2,fog_pars_vertex:n2,fog_fragment:i2,fog_pars_fragment:a2,gradientmap_pars_fragment:r2,lightmap_pars_fragment:s2,lights_lambert_fragment:o2,lights_lambert_pars_fragment:l2,lights_pars_begin:c2,lights_toon_fragment:f2,lights_toon_pars_fragment:h2,lights_phong_fragment:d2,lights_phong_pars_fragment:p2,lights_physical_fragment:m2,lights_physical_pars_fragment:g2,lights_fragment_begin:_2,lights_fragment_maps:v2,lights_fragment_end:y2,logdepthbuf_fragment:x2,logdepthbuf_pars_fragment:S2,logdepthbuf_pars_vertex:M2,logdepthbuf_vertex:b2,map_fragment:E2,map_pars_fragment:T2,map_particle_fragment:A2,map_particle_pars_fragment:w2,metalnessmap_fragment:C2,metalnessmap_pars_fragment:R2,morphinstance_vertex:D2,morphcolor_vertex:L2,morphnormal_vertex:P2,morphtarget_pars_vertex:U2,morphtarget_vertex:N2,normal_fragment_begin:O2,normal_fragment_maps:z2,normal_pars_fragment:I2,normal_pars_vertex:F2,normal_vertex:B2,normalmap_pars_fragment:H2,clearcoat_normal_fragment_begin:V2,clearcoat_normal_fragment_maps:k2,clearcoat_pars_fragment:G2,iridescence_pars_fragment:j2,opaque_fragment:X2,packing:W2,premultiplied_alpha_fragment:Y2,project_vertex:q2,dithering_fragment:Z2,dithering_pars_fragment:K2,roughnessmap_fragment:Q2,roughnessmap_pars_fragment:$2,shadowmap_pars_fragment:J2,shadowmap_pars_vertex:eD,shadowmap_vertex:tD,shadowmask_pars_fragment:nD,skinbase_vertex:iD,skinning_pars_vertex:aD,skinning_vertex:rD,skinnormal_vertex:sD,specularmap_fragment:oD,specularmap_pars_fragment:lD,tonemapping_fragment:cD,tonemapping_pars_fragment:uD,transmission_fragment:fD,transmission_pars_fragment:hD,uv_pars_fragment:dD,uv_pars_vertex:pD,uv_vertex:mD,worldpos_vertex:gD,background_vert:_D,background_frag:vD,backgroundCube_vert:yD,backgroundCube_frag:xD,cube_vert:SD,cube_frag:MD,depth_vert:bD,depth_frag:ED,distanceRGBA_vert:TD,distanceRGBA_frag:AD,equirect_vert:wD,equirect_frag:CD,linedashed_vert:RD,linedashed_frag:DD,meshbasic_vert:LD,meshbasic_frag:PD,meshlambert_vert:UD,meshlambert_frag:ND,meshmatcap_vert:OD,meshmatcap_frag:zD,meshnormal_vert:ID,meshnormal_frag:FD,meshphong_vert:BD,meshphong_frag:HD,meshphysical_vert:VD,meshphysical_frag:kD,meshtoon_vert:GD,meshtoon_frag:jD,points_vert:XD,points_frag:WD,shadow_vert:YD,shadow_frag:qD,sprite_vert:ZD,sprite_frag:KD},_e={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Ui={basic:{uniforms:Cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Cn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Cn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Cn([_e.points,_e.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Cn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Cn([_e.common,_e.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Cn([_e.sprite,_e.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Cn([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Cn([_e.lights,_e.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Ui.physical={uniforms:Cn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ru={r:0,b:0,g:0},Tr=new Ci,QD=new Ot;function $D(t,e,n,i,a,r,s){const o=new Ne(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function y(v){let g=!1;const x=_(v);x===null?d(o,l):x&&x.isColor&&(d(x,1),g=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,g){const x=_(g);x&&(x.isCubeTexture||x.mapping===qf)?(u===void 0&&(u=new Zn(new Oo(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:To(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),Tr.copy(g.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(QD.makeRotationFromEuler(Tr)),u.material.toneMapped=gt.getTransfer(x.colorSpace)!==Ct,(f!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Zn(new zo(2,2),new Bn({name:"BackgroundMaterial",uniforms:To(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=gt.getTransfer(x.colorSpace)!==Ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,g){v.getRGB(ru,XM(t)),i.buffers.color.setClear(ru.r,ru.g,ru.b,g,s)}return{getClearColor:function(){return o},setClearColor:function(v,g=1){o.set(v),l=g,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(o,l)},render:y,addToRenderList:m}}function JD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=h(null);let r=a,s=!1;function o(M,D,Q,Y,K){let $=!1;const N=f(Y,Q,D);r!==N&&(r=N,c(r.object)),$=p(M,Y,Q,K),$&&_(M,Y,Q,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,x(M,D,Q,Y),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,D,Q){const Y=Q.wireframe===!0;let K=i[M.id];K===void 0&&(K={},i[M.id]=K);let $=K[D.id];$===void 0&&($={},K[D.id]=$);let N=$[Y];return N===void 0&&(N=h(l()),$[Y]=N),N}function h(M){const D=[],Q=[],Y=[];for(let K=0;K<n;K++)D[K]=0,Q[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Q,attributeDivisors:Y,object:M,attributes:{},index:null}}function p(M,D,Q,Y){const K=r.attributes,$=D.attributes;let N=0;const q=Q.getAttributes();for(const V in q)if(q[V].location>=0){const ue=K[V];let Se=$[V];if(Se===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),ue===void 0||ue.attribute!==Se||Se&&ue.data!==Se.data)return!0;N++}return r.attributesNum!==N||r.index!==Y}function _(M,D,Q,Y){const K={},$=D.attributes;let N=0;const q=Q.getAttributes();for(const V in q)if(q[V].location>=0){let ue=$[V];ue===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const Se={};Se.attribute=ue,ue&&ue.data&&(Se.data=ue.data),K[V]=Se,N++}r.attributes=K,r.attributesNum=N,r.index=Y}function y(){const M=r.newAttributes;for(let D=0,Q=M.length;D<Q;D++)M[D]=0}function m(M){d(M,0)}function d(M,D){const Q=r.newAttributes,Y=r.enabledAttributes,K=r.attributeDivisors;Q[M]=1,Y[M]===0&&(t.enableVertexAttribArray(M),Y[M]=1),K[M]!==D&&(t.vertexAttribDivisor(M,D),K[M]=D)}function v(){const M=r.newAttributes,D=r.enabledAttributes;for(let Q=0,Y=D.length;Q<Y;Q++)D[Q]!==M[Q]&&(t.disableVertexAttribArray(Q),D[Q]=0)}function g(M,D,Q,Y,K,$,N){N===!0?t.vertexAttribIPointer(M,D,Q,K,$):t.vertexAttribPointer(M,D,Q,Y,K,$)}function x(M,D,Q,Y){y();const K=Y.attributes,$=Q.getAttributes(),N=D.defaultAttributeValues;for(const q in $){const V=$[q];if(V.location>=0){let le=K[q];if(le===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const ue=le.normalized,Se=le.itemSize,We=e.get(le);if(We===void 0)continue;const Qe=We.buffer,Z=We.type,oe=We.bytesPerElement,Ee=Z===t.INT||Z===t.UNSIGNED_INT||le.gpuType===yg;if(le.isInterleavedBufferAttribute){const Ce=le.data,He=Ce.stride,qe=le.offset;if(Ce.isInstancedInterleavedBuffer){for(let ze=0;ze<V.locationSize;ze++)d(V.location+ze,Ce.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ze=0;ze<V.locationSize;ze++)m(V.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let ze=0;ze<V.locationSize;ze++)g(V.location+ze,Se/V.locationSize,Z,ue,He*oe,(qe+Se/V.locationSize*ze)*oe,Ee)}else{if(le.isInstancedBufferAttribute){for(let Ce=0;Ce<V.locationSize;Ce++)d(V.location+Ce,le.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<V.locationSize;Ce++)m(V.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let Ce=0;Ce<V.locationSize;Ce++)g(V.location+Ce,Se/V.locationSize,Z,ue,Se*oe,Se/V.locationSize*Ce*oe,Ee)}}else if(N!==void 0){const ue=N[q];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(V.location,ue);break;case 3:t.vertexAttrib3fv(V.location,ue);break;case 4:t.vertexAttrib4fv(V.location,ue);break;default:t.vertexAttrib1fv(V.location,ue)}}}}v()}function w(){C();for(const M in i){const D=i[M];for(const Q in D){const Y=D[Q];for(const K in Y)u(Y[K].object),delete Y[K];delete D[Q]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const Q in D){const Y=D[Q];for(const K in Y)u(Y[K].object),delete Y[K];delete D[Q]}delete i[M.id]}function A(M){for(const D in i){const Q=i[D];if(Q[M.id]===void 0)continue;const Y=Q[M.id];for(const K in Y)u(Y[K].object),delete Y[K];delete Q[M.id]}}function C(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:C,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function eL(t,e,n){let i;function a(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function s(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)s(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let y=0;y<f;y++)_+=u[y];for(let y=0;y<h.length;y++)n.update(_,i,h[y])}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tL(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(S){return!(S!==di&&i.convert(S)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const A=S===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Ma&&i.convert(S)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==pa&&!A)}function l(S){if(S==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:x,maxSamples:w}}function nL(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new ka,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||a;return a=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!a||_===null||_.length===0||r&&!m)r?u(null):c();else{const v=r?0:i,g=v*4;let x=d.clippingState||null;l.value=x,x=u(_,h,g,p);for(let w=0;w!==g;++w)x[w]=n[w];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const d=p+y*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,x=p;g!==y;++g,x+=4)s.copy(f[g]).applyMatrix4(v,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function iL(t){let e=new WeakMap;function n(s,o){return o===bp?s.mapping=xo:o===Ep&&(s.mapping=So),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===bp||o===Ep)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new pR(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Dg extends WM{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zs=4,s0=[.125,.215,.35,.446,.526,.582],Nr=20,od=new Dg,o0=new Ne;let ld=null,cd=0,ud=0,fd=!1;const Dr=(1+Math.sqrt(5))/2,Rs=1/Dr,l0=[new L(-Dr,Rs,0),new L(Dr,Rs,0),new L(-Rs,0,Dr),new L(Rs,0,Dr),new L(0,Dr,-Rs),new L(0,Dr,Rs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class c0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,a=100){ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,a,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,cd,ud),this._renderer.xr.enabled=fd,e.scissorTest=!1,su(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xo||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Uo,format:di,colorSpace:_r,depthBuffer:!1},a=u0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u0(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aL(r)),this._blurMaterial=rL(r,e,n)}return a}_compileMaterial(e){const n=new Zn(this._lodPlanes[0],e);this._renderer.compile(n,od)}_sceneToCubeUV(e,n,i,a){const o=new On(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(o0),u.toneMapping=rr,u.autoClear=!1;const p=new wg({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),_=new Zn(new Oo,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(o0),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):v===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const g=this._cubeSize;su(a,v*g,d>2?g:0,g,g),u.setRenderTarget(a),y&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===xo||e.mapping===So;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=h0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=f0());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new Zn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;su(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,od)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=l0[(a-r-1)%l0.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Zn(this._lodPlanes[a],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),y=r/_,m=isFinite(r)?1+Math.floor(u*y):Nr;m>Nr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nr}`);const d=[];let v=0;for(let A=0;A<Nr;++A){const C=A/y,T=Math.exp(-C*C/2);d.push(T),A===0?v+=T:A<m&&(v+=2*T)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const x=this._sizeLods[a],w=3*x*(a>g-Zs?a-g+Zs:0),S=4*(this._cubeSize-x);su(n,w,S,3*x,2*x),l.setRenderTarget(n),l.render(f,od)}}function aL(t){const e=[],n=[],i=[];let a=t;const r=t-Zs+1+s0.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>t-Zs?l=s0[s-t+Zs-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,y=3,m=2,d=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),x=new Float32Array(d*_*p);for(let S=0;S<p;S++){const A=S%3*2/3-1,C=S>2?0:-1,T=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(T,y*_*S),g.set(h,m*_*S);const M=[S,S,S,S,S,S];x.set(M,d*_*S)}const w=new gi;w.setAttribute("position",new Gi(v,y)),w.setAttribute("uv",new Gi(g,m)),w.setAttribute("faceIndex",new Gi(x,d)),e.push(w),a>Zs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function u0(t,e,n){const i=new hr(t,e,n);return i.texture.mapping=qf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function su(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function rL(t,e,n){const i=new Float32Array(Nr),a=new L(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Lg(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function f0(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lg(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function h0(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Lg(){return`

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
	`}function sL(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===bp||l===Ep,u=l===xo||l===So;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new c0(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&a(p)?(n===null&&(n=new c0(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function oL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=t.getExtension(i)}return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Pl("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function lL(t,e,n,i){const a={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",s),delete a[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,x=v.length;g<x;g+=3){const w=v[g+0],S=v[g+1],A=v[g+2];h.push(w,S,S,A,A,w)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,x=v.length/3-1;g<x;g+=3){const w=g+0,S=g+1,A=g+2;h.push(w,S,S,A,A,w)}}else return;const m=new(FM(h)?jM:GM)(h,1);m.version=y;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function cL(t,e,n){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,p){t.drawElements(i,p,r,h*s),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,r,h*s,_),n.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function f(h,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/s,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,y,0,_);let d=0;for(let v=0;v<_;v++)d+=p[v];for(let v=0;v<y.length;v++)n.update(d,i,y[v])}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function uL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function fL(t,e,n){const i=new WeakMap,a=new sn;function r(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let g=0;p===!0&&(g=1),_===!0&&(g=2),y===!0&&(g=3);let x=o.attributes.position.count*g,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const S=new Float32Array(x*w*4*f),A=new HM(S,x,w,f);A.type=pa,A.needsUpdate=!0;const C=g*4;for(let M=0;M<f;M++){const D=m[M],Q=d[M],Y=v[M],K=x*w*4*M;for(let $=0;$<D.count;$++){const N=$*C;p===!0&&(a.fromBufferAttribute(D,$),S[K+N+0]=a.x,S[K+N+1]=a.y,S[K+N+2]=a.z,S[K+N+3]=0),_===!0&&(a.fromBufferAttribute(Q,$),S[K+N+4]=a.x,S[K+N+5]=a.y,S[K+N+6]=a.z,S[K+N+7]=0),y===!0&&(a.fromBufferAttribute(Y,$),S[K+N+8]=a.x,S[K+N+9]=a.y,S[K+N+10]=a.z,S[K+N+11]=Y.itemSize===4?a.w:1)}}h={count:f,texture:A,size:new be(x,w)},i.set(o,h),o.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function hL(t,e,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(a.get(f)!==c&&(e.update(f),a.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return f}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}class ZM extends xn{constructor(e,n,i,a,r,s,o,l,c,u=lo){if(u!==lo&&u!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===lo&&(i=Qr),i===void 0&&u===bo&&(i=Mo),super(null,a,r,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const KM=new xn,d0=new ZM(1,1),QM=new HM,$M=new JC,JM=new YM,p0=[],m0=[],g0=new Float32Array(16),_0=new Float32Array(9),v0=new Float32Array(4);function Io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=p0[a];if(r===void 0&&(r=new Float32Array(a),p0[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function ln(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function cn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $f(t,e){let n=m0[e];n===void 0&&(n=new Int32Array(e),m0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function dL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ln(n,e))return;t.uniform2fv(this.addr,e),cn(n,e)}}function mL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ln(n,e))return;t.uniform3fv(this.addr,e),cn(n,e)}}function gL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ln(n,e))return;t.uniform4fv(this.addr,e),cn(n,e)}}function _L(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ln(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),cn(n,e)}else{if(ln(n,i))return;v0.set(i),t.uniformMatrix2fv(this.addr,!1,v0),cn(n,i)}}function vL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ln(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),cn(n,e)}else{if(ln(n,i))return;_0.set(i),t.uniformMatrix3fv(this.addr,!1,_0),cn(n,i)}}function yL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ln(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),cn(n,e)}else{if(ln(n,i))return;g0.set(i),t.uniformMatrix4fv(this.addr,!1,g0),cn(n,i)}}function xL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function SL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ln(n,e))return;t.uniform2iv(this.addr,e),cn(n,e)}}function ML(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ln(n,e))return;t.uniform3iv(this.addr,e),cn(n,e)}}function bL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ln(n,e))return;t.uniform4iv(this.addr,e),cn(n,e)}}function EL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function TL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ln(n,e))return;t.uniform2uiv(this.addr,e),cn(n,e)}}function AL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ln(n,e))return;t.uniform3uiv(this.addr,e),cn(n,e)}}function wL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ln(n,e))return;t.uniform4uiv(this.addr,e),cn(n,e)}}function CL(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(d0.compareFunction=IM,r=d0):r=KM,n.setTexture2D(e||r,a)}function RL(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||$M,a)}function DL(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||JM,a)}function LL(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||QM,a)}function PL(t){switch(t){case 5126:return dL;case 35664:return pL;case 35665:return mL;case 35666:return gL;case 35674:return _L;case 35675:return vL;case 35676:return yL;case 5124:case 35670:return xL;case 35667:case 35671:return SL;case 35668:case 35672:return ML;case 35669:case 35673:return bL;case 5125:return EL;case 36294:return TL;case 36295:return AL;case 36296:return wL;case 35678:case 36198:case 36298:case 36306:case 35682:return CL;case 35679:case 36299:case 36307:return RL;case 35680:case 36300:case 36308:case 36293:return DL;case 36289:case 36303:case 36311:case 36292:return LL}}function UL(t,e){t.uniform1fv(this.addr,e)}function NL(t,e){const n=Io(e,this.size,2);t.uniform2fv(this.addr,n)}function OL(t,e){const n=Io(e,this.size,3);t.uniform3fv(this.addr,n)}function zL(t,e){const n=Io(e,this.size,4);t.uniform4fv(this.addr,n)}function IL(t,e){const n=Io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function FL(t,e){const n=Io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function BL(t,e){const n=Io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function HL(t,e){t.uniform1iv(this.addr,e)}function VL(t,e){t.uniform2iv(this.addr,e)}function kL(t,e){t.uniform3iv(this.addr,e)}function GL(t,e){t.uniform4iv(this.addr,e)}function jL(t,e){t.uniform1uiv(this.addr,e)}function XL(t,e){t.uniform2uiv(this.addr,e)}function WL(t,e){t.uniform3uiv(this.addr,e)}function YL(t,e){t.uniform4uiv(this.addr,e)}function qL(t,e,n){const i=this.cache,a=e.length,r=$f(n,a);ln(i,r)||(t.uniform1iv(this.addr,r),cn(i,r));for(let s=0;s!==a;++s)n.setTexture2D(e[s]||KM,r[s])}function ZL(t,e,n){const i=this.cache,a=e.length,r=$f(n,a);ln(i,r)||(t.uniform1iv(this.addr,r),cn(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||$M,r[s])}function KL(t,e,n){const i=this.cache,a=e.length,r=$f(n,a);ln(i,r)||(t.uniform1iv(this.addr,r),cn(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||JM,r[s])}function QL(t,e,n){const i=this.cache,a=e.length,r=$f(n,a);ln(i,r)||(t.uniform1iv(this.addr,r),cn(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||QM,r[s])}function $L(t){switch(t){case 5126:return UL;case 35664:return NL;case 35665:return OL;case 35666:return zL;case 35674:return IL;case 35675:return FL;case 35676:return BL;case 5124:case 35670:return HL;case 35667:case 35671:return VL;case 35668:case 35672:return kL;case 35669:case 35673:return GL;case 5125:return jL;case 36294:return XL;case 36295:return WL;case 36296:return YL;case 35678:case 36198:case 36298:case 36306:case 35682:return qL;case 35679:case 36299:case 36307:return ZL;case 35680:case 36300:case 36308:case 36293:return KL;case 36289:case 36303:case 36311:case 36292:return QL}}class JL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=PL(n.type)}}class e3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$L(n.type)}}class t3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function y0(t,e){t.seq.push(e),t.map[e.id]=e}function n3(t,e,n){const i=t.name,a=i.length;for(hd.lastIndex=0;;){const r=hd.exec(i),s=hd.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){y0(n,c===void 0?new JL(o,t,e):new e3(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new t3(o),y0(n,f)),n=f}}}class Fu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=e.getActiveUniform(n,a),s=e.getUniformLocation(n,r.name);n3(r,s,this)}}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function x0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const i3=37297;let a3=0;function r3(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function s3(t){const e=gt.getPrimaries(gt.workingColorSpace),n=gt.getPrimaries(t);let i;switch(e===n?i="":e===Sf&&n===xf?i="LinearDisplayP3ToLinearSRGB":e===xf&&n===Sf&&(i="LinearSRGBToLinearDisplayP3"),t){case _r:case Kf:return[i,"LinearTransferOETF"];case bi:case Tg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function S0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),a=t.getShaderInfoLog(e).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+r3(t.getShaderSource(e),s)}else return a}function o3(t,e){const n=s3(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function l3(t,e){let n;switch(e){case xM:n="Linear";break;case SM:n="Reinhard";break;case MM:n="Cineon";break;case bM:n="ACESFilmic";break;case EM:n="AgX";break;case TM:n="Neutral";break;case _C:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ou=new L;function c3(){gt.getLuminanceCoefficients(ou);const t=ou.x.toFixed(4),e=ou.y.toFixed(4),n=ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function f3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function h3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function ul(t){return t!==""}function M0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jp(t){return t.replace(d3,m3)}const p3=new Map;function m3(t,e){let n=tt[e];if(n===void 0){const i=p3.get(e);if(i!==void 0)n=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jp(n)}const g3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E0(t){return t.replace(g3,_3)}function _3(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function T0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===yM?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Gw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ra&&(e="SHADOWMAP_TYPE_VSM"),e}function y3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case xo:case So:e="ENVMAP_TYPE_CUBE";break;case qf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function x3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function S3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case vg:e="ENVMAP_BLENDING_MULTIPLY";break;case mC:e="ENVMAP_BLENDING_MIX";break;case gC:e="ENVMAP_BLENDING_ADD";break}return e}function M3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function b3(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=v3(n),c=y3(n),u=x3(n),f=S3(n),h=M3(n),p=u3(n),_=f3(r),y=a.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ul).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ul).join(`
`),d.length>0&&(d+=`
`)):(m=[T0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),d=[T0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?tt.tonemapping_pars_fragment:"",n.toneMapping!==rr?l3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,o3("linearToOutputTexel",n.outputColorSpace),c3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ul).join(`
`)),s=Jp(s),s=M0(s,n),s=b0(s,n),o=Jp(o),o=M0(o,n),o=b0(o,n),s=E0(s),o=E0(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=v+m+s,x=v+d+o,w=x0(a,a.VERTEX_SHADER,g),S=x0(a,a.FRAGMENT_SHADER,x);a.attachShader(y,w),a.attachShader(y,S),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function A(D){if(t.debug.checkShaderErrors){const Q=a.getProgramInfoLog(y).trim(),Y=a.getShaderInfoLog(w).trim(),K=a.getShaderInfoLog(S).trim();let $=!0,N=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,y,w,S);else{const q=S0(a,w,"vertex"),V=S0(a,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Q+`
`+q+`
`+V)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(Y===""||K==="")&&(N=!1);N&&(D.diagnostics={runnable:$,programLog:Q,vertexShader:{log:Y,prefix:m},fragmentShader:{log:K,prefix:d}})}a.deleteShader(w),a.deleteShader(S),C=new Fu(a,y),T=h3(a,y)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(y,i3)),M},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=a3++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=S,this}let E3=0;class T3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new A3(e),n.set(e,i)),i}}class A3{constructor(e){this.id=E3++,this.code=e,this.usedTimes=0}}function w3(t,e,n,i,a,r,s){const o=new VM,l=new T3,c=new Set,u=[],f=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,D,Q,Y){const K=Q.fog,$=Y.geometry,N=T.isMeshStandardMaterial?Q.environment:null,q=(T.isMeshStandardMaterial?n:e).get(T.envMap||N),V=q&&q.mapping===qf?q.image.height:null,le=_[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ue=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Se=ue!==void 0?ue.length:0;let We=0;$.morphAttributes.position!==void 0&&(We=1),$.morphAttributes.normal!==void 0&&(We=2),$.morphAttributes.color!==void 0&&(We=3);let Qe,Z,oe,Ee;if(le){const pt=Ui[le];Qe=pt.vertexShader,Z=pt.fragmentShader}else Qe=T.vertexShader,Z=T.fragmentShader,l.update(T),oe=l.getVertexShaderID(T),Ee=l.getFragmentShaderID(T);const Ce=t.getRenderTarget(),He=Y.isInstancedMesh===!0,qe=Y.isBatchedMesh===!0,ze=!!T.map,yt=!!T.matcap,O=!!q,kt=!!T.aoMap,st=!!T.lightMap,_t=!!T.bumpMap,Oe=!!T.normalMap,Ft=!!T.displacementMap,je=!!T.emissiveMap,Ze=!!T.metalnessMap,R=!!T.roughnessMap,b=T.anisotropy>0,j=T.clearcoat>0,te=T.dispersion>0,se=T.iridescence>0,ae=T.sheen>0,Le=T.transmission>0,pe=b&&!!T.anisotropyMap,Te=j&&!!T.clearcoatMap,Ke=j&&!!T.clearcoatNormalMap,he=j&&!!T.clearcoatRoughnessMap,ve=se&&!!T.iridescenceMap,ot=se&&!!T.iridescenceThicknessMap,Ve=ae&&!!T.sheenColorMap,Re=ae&&!!T.sheenRoughnessMap,Ye=!!T.specularMap,Je=!!T.specularColorMap,xt=!!T.specularIntensityMap,I=Le&&!!T.transmissionMap,fe=Le&&!!T.thicknessMap,J=!!T.gradientMap,ne=!!T.alphaMap,me=T.alphaTest>0,Be=!!T.alphaHash,rt=!!T.extensions;let Pt=rr;T.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Pt=t.toneMapping);const $t={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:Qe,fragmentShader:Z,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:Ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:qe,batchingColor:qe&&Y._colorsTexture!==null,instancing:He,instancingColor:He&&Y.instanceColor!==null,instancingMorph:He&&Y.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:_r,alphaToCoverage:!!T.alphaToCoverage,map:ze,matcap:yt,envMap:O,envMapMode:O&&q.mapping,envMapCubeUVHeight:V,aoMap:kt,lightMap:st,bumpMap:_t,normalMap:Oe,displacementMap:h&&Ft,emissiveMap:je,normalMapObjectSpace:Oe&&T.normalMapType===SC,normalMapTangentSpace:Oe&&T.normalMapType===Zf,metalnessMap:Ze,roughnessMap:R,anisotropy:b,anisotropyMap:pe,clearcoat:j,clearcoatMap:Te,clearcoatNormalMap:Ke,clearcoatRoughnessMap:he,dispersion:te,iridescence:se,iridescenceMap:ve,iridescenceThicknessMap:ot,sheen:ae,sheenColorMap:Ve,sheenRoughnessMap:Re,specularMap:Ye,specularColorMap:Je,specularIntensityMap:xt,transmission:Le,transmissionMap:I,thicknessMap:fe,gradientMap:J,opaque:T.transparent===!1&&T.blending===oo&&T.alphaToCoverage===!1,alphaMap:ne,alphaTest:me,alphaHash:Be,combine:T.combine,mapUv:ze&&y(T.map.channel),aoMapUv:kt&&y(T.aoMap.channel),lightMapUv:st&&y(T.lightMap.channel),bumpMapUv:_t&&y(T.bumpMap.channel),normalMapUv:Oe&&y(T.normalMap.channel),displacementMapUv:Ft&&y(T.displacementMap.channel),emissiveMapUv:je&&y(T.emissiveMap.channel),metalnessMapUv:Ze&&y(T.metalnessMap.channel),roughnessMapUv:R&&y(T.roughnessMap.channel),anisotropyMapUv:pe&&y(T.anisotropyMap.channel),clearcoatMapUv:Te&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Re&&y(T.sheenRoughnessMap.channel),specularMapUv:Ye&&y(T.specularMap.channel),specularColorMapUv:Je&&y(T.specularColorMap.channel),specularIntensityMapUv:xt&&y(T.specularIntensityMap.channel),transmissionMapUv:I&&y(T.transmissionMap.channel),thicknessMapUv:fe&&y(T.thicknessMap.channel),alphaMapUv:ne&&y(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Oe||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!$.attributes.uv&&(ze||ne),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:We,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Pt,decodeVideoTexture:ze&&T.map.isVideoTexture===!0&&gt.getTransfer(T.map.colorSpace)===Ct,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===zi,flipSided:T.side===In,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:rt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&T.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function d(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)M.push(D),M.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(v(M,T),g(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function v(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function g(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),T.push(o.mask)}function x(T){const M=_[T.type];let D;if(M){const Q=Ui[M];D=Cg.clone(Q.uniforms)}else D=T.uniforms;return D}function w(T,M){let D;for(let Q=0,Y=u.length;Q<Y;Q++){const K=u[Q];if(K.cacheKey===M){D=K,++D.usedTimes;break}}return D===void 0&&(D=new b3(t,M,T,r),u.push(D)),D}function S(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function A(T){l.remove(T)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:w,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:C}}function C3(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function R3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function A0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function w0(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(f,h,p,_,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function o(f,h,p,_,y,m){const d=s(f,h,p,_,y,m);p.transmission>0?i.push(d):p.transparent===!0?a.push(d):n.push(d)}function l(f,h,p,_,y,m){const d=s(f,h,p,_,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?a.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||R3),i.length>1&&i.sort(h||A0),a.length>1&&a.sort(h||A0)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:u,sort:c}}function D3(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new w0,t.set(i,[s])):a>=r.length?(s=new w0,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function L3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Ne};break;case"SpotLight":n={position:new L,direction:new L,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":n={color:new Ne,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function P3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let U3=0;function N3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function O3(t){const e=new L3,n=P3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const a=new L,r=new Ot,s=new Ot;function o(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,y=0,m=0,d=0,v=0,g=0,x=0,w=0,S=0,A=0;c.sort(N3);for(let T=0,M=c.length;T<M;T++){const D=c[T],Q=D.color,Y=D.intensity,K=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=Q.r*Y,f+=Q.g*Y,h+=Q.b*Y;else if(D.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(D.sh.coefficients[N],Y);A++}else if(D.isDirectionalLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const q=D.shadow,V=n.get(D);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=N,p++}else if(D.isSpotLight){const N=e.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(Q).multiplyScalar(Y),N.distance=K,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,i.spot[y]=N;const q=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,q.updateMatrices(D),D.castShadow&&S++),i.spotLightMatrix[y]=q.matrix,D.castShadow){const V=n.get(D);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=$,x++}y++}else if(D.isRectAreaLight){const N=e.get(D);N.color.copy(Q).multiplyScalar(Y),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=N,m++}else if(D.isPointLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),N.distance=D.distance,N.decay=D.decay,D.castShadow){const q=D.shadow,V=n.get(D);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=D.shadow.matrix,g++}i.point[_]=N,_++}else if(D.isHemisphereLight){const N=e.get(D);N.skyColor.copy(D.color).multiplyScalar(Y),N.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[d]=N,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==v||C.numPointShadows!==g||C.numSpotShadows!==x||C.numSpotMaps!==w||C.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=x+w-S,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,C.directionalLength=p,C.pointLength=_,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=v,C.numPointShadows=g,C.numSpotShadows=x,C.numSpotMaps=w,C.numLightProbes=A,i.version=U3++)}function l(c,u){let f=0,h=0,p=0,_=0,y=0;const m=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const g=c[d];if(g.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),f++}else if(g.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),s.identity(),r.copy(g.matrixWorld),r.premultiply(m),s.extractRotation(r),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),_++}else if(g.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function C0(t){const e=new O3(t),n=[],i=[];function a(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function s(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function z3(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new C0(t),e.set(a,[o])):r>=s.length?(o=new C0(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class I3 extends Ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F3 extends Ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const B3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H3=`uniform sampler2D shadow_pass;
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
}`;function V3(t,e,n){let i=new Rg;const a=new be,r=new be,s=new sn,o=new I3({depthPacking:xC}),l=new F3,c={},u=n.maxTextureSize,f={[fr]:In,[In]:fr,[zi]:zi},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:B3,fragmentShader:H3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new gi;_.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Zn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yM;let d=this.type;this.render=function(S,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(_a),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const Y=d!==ra&&this.type===ra,K=d===ra&&this.type!==ra;for(let $=0,N=S.length;$<N;$++){const q=S[$],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const le=V.getFrameExtents();if(a.multiply(le),r.copy(V.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/le.x),a.x=r.x*le.x,V.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/le.y),a.y=r.y*le.y,V.mapSize.y=r.y)),V.map===null||Y===!0||K===!0){const Se=this.type!==ra?{minFilter:zn,magFilter:zn}:{};V.map!==null&&V.map.dispose(),V.map=new hr(a.x,a.y,Se),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const ue=V.getViewportCount();for(let Se=0;Se<ue;Se++){const We=V.getViewport(Se);s.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),Q.viewport(s),V.updateMatrices(q,Se),i=V.getFrustum(),x(A,C,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===ra&&v(V,C),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(T,M,D)};function v(S,A){const C=e.update(y);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new hr(a.x,a.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(A,null,C,h,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(A,null,C,p,y,null)}function g(S,A,C,T){let M=null;const D=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)M=D;else if(M=C.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Q=M.uuid,Y=A.uuid;let K=c[Q];K===void 0&&(K={},c[Q]=K);let $=K[Y];$===void 0&&($=M.clone(),K[Y]=$,A.addEventListener("dispose",w)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,T===ra?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Q=t.properties.get(M);Q.light=C}return M}function x(S,A,C,T,M){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===ra)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const Y=e.update(S),K=S.material;if(Array.isArray(K)){const $=Y.groups;for(let N=0,q=$.length;N<q;N++){const V=$[N],le=K[V.materialIndex];if(le&&le.visible){const ue=g(S,le,T,M);S.onBeforeShadow(t,S,A,C,Y,ue,V),t.renderBufferDirect(C,null,Y,ue,S,V),S.onAfterShadow(t,S,A,C,Y,ue,V)}}}else if(K.visible){const $=g(S,K,T,M);S.onBeforeShadow(t,S,A,C,Y,$,null),t.renderBufferDirect(C,null,Y,$,S,null),S.onAfterShadow(t,S,A,C,Y,$,null)}}const Q=S.children;for(let Y=0,K=Q.length;Y<K;Y++)x(Q[Y],A,C,T,M)}function w(S){S.target.removeEventListener("dispose",w);for(const C in c){const T=c[C],M=S.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function k3(t){function e(){let I=!1;const fe=new sn;let J=null;const ne=new sn(0,0,0,0);return{setMask:function(me){J!==me&&!I&&(t.colorMask(me,me,me,me),J=me)},setLocked:function(me){I=me},setClear:function(me,Be,rt,Pt,$t){$t===!0&&(me*=Pt,Be*=Pt,rt*=Pt),fe.set(me,Be,rt,Pt),ne.equals(fe)===!1&&(t.clearColor(me,Be,rt,Pt),ne.copy(fe))},reset:function(){I=!1,J=null,ne.set(-1,0,0,0)}}}function n(){let I=!1,fe=null,J=null,ne=null;return{setTest:function(me){me?Ee(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(me){fe!==me&&!I&&(t.depthMask(me),fe=me)},setFunc:function(me){if(J!==me){switch(me){case lC:t.depthFunc(t.NEVER);break;case cC:t.depthFunc(t.ALWAYS);break;case uC:t.depthFunc(t.LESS);break;case vf:t.depthFunc(t.LEQUAL);break;case fC:t.depthFunc(t.EQUAL);break;case hC:t.depthFunc(t.GEQUAL);break;case dC:t.depthFunc(t.GREATER);break;case pC:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=me}},setLocked:function(me){I=me},setClear:function(me){ne!==me&&(t.clearDepth(me),ne=me)},reset:function(){I=!1,fe=null,J=null,ne=null}}}function i(){let I=!1,fe=null,J=null,ne=null,me=null,Be=null,rt=null,Pt=null,$t=null;return{setTest:function(pt){I||(pt?Ee(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(pt){fe!==pt&&!I&&(t.stencilMask(pt),fe=pt)},setFunc:function(pt,U,H){(J!==pt||ne!==U||me!==H)&&(t.stencilFunc(pt,U,H),J=pt,ne=U,me=H)},setOp:function(pt,U,H){(Be!==pt||rt!==U||Pt!==H)&&(t.stencilOp(pt,U,H),Be=pt,rt=U,Pt=H)},setLocked:function(pt){I=pt},setClear:function(pt){$t!==pt&&(t.clearStencil(pt),$t=pt)},reset:function(){I=!1,fe=null,J=null,ne=null,me=null,Be=null,rt=null,Pt=null,$t=null}}}const a=new e,r=new n,s=new i,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,_=!1,y=null,m=null,d=null,v=null,g=null,x=null,w=null,S=new Ne(0,0,0),A=0,C=!1,T=null,M=null,D=null,Q=null,Y=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,N=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=N>=1):q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=N>=2);let V=null,le={};const ue=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),We=new sn().fromArray(ue),Qe=new sn().fromArray(Se);function Z(I,fe,J,ne){const me=new Uint8Array(4),Be=t.createTexture();t.bindTexture(I,Be),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let rt=0;rt<J;rt++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(fe+rt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return Be}const oe={};oe[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),s.setClear(0),Ee(t.DEPTH_TEST),r.setFunc(vf),_t(!1),Oe(Uv),Ee(t.CULL_FACE),kt(_a);function Ee(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function Ce(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function He(I,fe){return u[I]!==fe?(t.bindFramebuffer(I,fe),u[I]=fe,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function qe(I,fe){let J=h,ne=!1;if(I){J=f.get(fe),J===void 0&&(J=[],f.set(fe,J));const me=I.textures;if(J.length!==me.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Be=0,rt=me.length;Be<rt;Be++)J[Be]=t.COLOR_ATTACHMENT0+Be;J.length=me.length,ne=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,ne=!0);ne&&t.drawBuffers(J)}function ze(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const yt={[Ur]:t.FUNC_ADD,[Xw]:t.FUNC_SUBTRACT,[Ww]:t.FUNC_REVERSE_SUBTRACT};yt[Yw]=t.MIN,yt[qw]=t.MAX;const O={[Zw]:t.ZERO,[Kw]:t.ONE,[Qw]:t.SRC_COLOR,[Sp]:t.SRC_ALPHA,[iC]:t.SRC_ALPHA_SATURATE,[tC]:t.DST_COLOR,[Jw]:t.DST_ALPHA,[$w]:t.ONE_MINUS_SRC_COLOR,[Mp]:t.ONE_MINUS_SRC_ALPHA,[nC]:t.ONE_MINUS_DST_COLOR,[eC]:t.ONE_MINUS_DST_ALPHA,[aC]:t.CONSTANT_COLOR,[rC]:t.ONE_MINUS_CONSTANT_COLOR,[sC]:t.CONSTANT_ALPHA,[oC]:t.ONE_MINUS_CONSTANT_ALPHA};function kt(I,fe,J,ne,me,Be,rt,Pt,$t,pt){if(I===_a){_===!0&&(Ce(t.BLEND),_=!1);return}if(_===!1&&(Ee(t.BLEND),_=!0),I!==jw){if(I!==y||pt!==C){if((m!==Ur||g!==Ur)&&(t.blendEquation(t.FUNC_ADD),m=Ur,g=Ur),pt)switch(I){case oo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nv:t.blendFunc(t.ONE,t.ONE);break;case Ov:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case oo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ov:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}d=null,v=null,x=null,w=null,S.set(0,0,0),A=0,y=I,C=pt}return}me=me||fe,Be=Be||J,rt=rt||ne,(fe!==m||me!==g)&&(t.blendEquationSeparate(yt[fe],yt[me]),m=fe,g=me),(J!==d||ne!==v||Be!==x||rt!==w)&&(t.blendFuncSeparate(O[J],O[ne],O[Be],O[rt]),d=J,v=ne,x=Be,w=rt),(Pt.equals(S)===!1||$t!==A)&&(t.blendColor(Pt.r,Pt.g,Pt.b,$t),S.copy(Pt),A=$t),y=I,C=!1}function st(I,fe){I.side===zi?Ce(t.CULL_FACE):Ee(t.CULL_FACE);let J=I.side===In;fe&&(J=!J),_t(J),I.blending===oo&&I.transparent===!1?kt(_a):kt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),a.setMask(I.colorWrite);const ne=I.stencilWrite;s.setTest(ne),ne&&(s.setMask(I.stencilWriteMask),s.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),s.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),je(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function _t(I){T!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),T=I)}function Oe(I){I!==Vw?(Ee(t.CULL_FACE),I!==M&&(I===Uv?t.cullFace(t.BACK):I===kw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),M=I}function Ft(I){I!==D&&($&&t.lineWidth(I),D=I)}function je(I,fe,J){I?(Ee(t.POLYGON_OFFSET_FILL),(Q!==fe||Y!==J)&&(t.polygonOffset(fe,J),Q=fe,Y=J)):Ce(t.POLYGON_OFFSET_FILL)}function Ze(I){I?Ee(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+K-1),V!==I&&(t.activeTexture(I),V=I)}function b(I,fe,J){J===void 0&&(V===null?J=t.TEXTURE0+K-1:J=V);let ne=le[J];ne===void 0&&(ne={type:void 0,texture:void 0},le[J]=ne),(ne.type!==I||ne.texture!==fe)&&(V!==J&&(t.activeTexture(J),V=J),t.bindTexture(I,fe||oe[I]),ne.type=I,ne.texture=fe)}function j(){const I=le[V];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(I){We.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),We.copy(I))}function Re(I){Qe.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Qe.copy(I))}function Ye(I,fe){let J=l.get(fe);J===void 0&&(J=new WeakMap,l.set(fe,J));let ne=J.get(I);ne===void 0&&(ne=t.getUniformBlockIndex(fe,I.name),J.set(I,ne))}function Je(I,fe){const ne=l.get(fe).get(I);o.get(fe)!==ne&&(t.uniformBlockBinding(fe,ne,I.__bindingPointIndex),o.set(fe,ne))}function xt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},V=null,le={},u={},f=new WeakMap,h=[],p=null,_=!1,y=null,m=null,d=null,v=null,g=null,x=null,w=null,S=new Ne(0,0,0),A=0,C=!1,T=null,M=null,D=null,Q=null,Y=null,We.set(0,0,t.canvas.width,t.canvas.height),Qe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),r.reset(),s.reset()}return{buffers:{color:a,depth:r,stencil:s},enable:Ee,disable:Ce,bindFramebuffer:He,drawBuffers:qe,useProgram:ze,setBlending:kt,setMaterial:st,setFlipSided:_t,setCullFace:Oe,setLineWidth:Ft,setPolygonOffset:je,setScissorTest:Ze,activeTexture:R,bindTexture:b,unbindTexture:j,compressedTexImage2D:te,compressedTexImage3D:se,texImage2D:ve,texImage3D:ot,updateUBOMapping:Ye,uniformBlockBinding:Je,texStorage2D:Ke,texStorage3D:he,texSubImage2D:ae,texSubImage3D:Le,compressedTexSubImage2D:pe,compressedTexSubImage3D:Te,scissor:Ve,viewport:Re,reset:xt}}function R0(t,e,n,i){const a=G3(i);switch(n){case DM:return t*e;case PM:return t*e;case UM:return t*e*2;case NM:return t*e/a.components*a.byteLength;case Mg:return t*e/a.components*a.byteLength;case OM:return t*e*2/a.components*a.byteLength;case bg:return t*e*2/a.components*a.byteLength;case LM:return t*e*3/a.components*a.byteLength;case di:return t*e*4/a.components*a.byteLength;case Eg:return t*e*4/a.components*a.byteLength;case Uu:case Nu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ou:case zu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cp:case Dp:return Math.max(t,16)*Math.max(e,8)/4;case wp:case Rp:return Math.max(t,8)*Math.max(e,8)/2;case Lp:case Pp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Up:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Np:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Op:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ip:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Bp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Vp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case kp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Iu:case qp:case Zp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zM:case Kp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Qp:case $p:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function G3(t){switch(t){case Ma:case wM:return{byteLength:1,components:1};case tc:case CM:case Uo:return{byteLength:2,components:1};case xg:case Sg:return{byteLength:2,components:4};case Qr:case yg:case pa:return{byteLength:4,components:1};case RM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function j3(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return p?new OffscreenCanvas(R,b):nc("canvas")}function y(R,b,j){let te=1;const se=Ze(R);if((se.width>j||se.height>j)&&(te=j/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor(te*se.width),Le=Math.floor(te*se.height);f===void 0&&(f=_(ae,Le));const pe=b?_(ae,Le):f;return pe.width=ae,pe.height=Le,pe.getContext("2d").drawImage(R,0,0,ae,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ae+"x"+Le+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==zn&&R.minFilter!==Ti}function d(R){t.generateMipmap(R)}function v(R,b,j,te,se=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=b;if(b===t.RED&&(j===t.FLOAT&&(ae=t.R32F),j===t.HALF_FLOAT&&(ae=t.R16F),j===t.UNSIGNED_BYTE&&(ae=t.R8)),b===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(ae=t.R8UI),j===t.UNSIGNED_SHORT&&(ae=t.R16UI),j===t.UNSIGNED_INT&&(ae=t.R32UI),j===t.BYTE&&(ae=t.R8I),j===t.SHORT&&(ae=t.R16I),j===t.INT&&(ae=t.R32I)),b===t.RG&&(j===t.FLOAT&&(ae=t.RG32F),j===t.HALF_FLOAT&&(ae=t.RG16F),j===t.UNSIGNED_BYTE&&(ae=t.RG8)),b===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(ae=t.RG8UI),j===t.UNSIGNED_SHORT&&(ae=t.RG16UI),j===t.UNSIGNED_INT&&(ae=t.RG32UI),j===t.BYTE&&(ae=t.RG8I),j===t.SHORT&&(ae=t.RG16I),j===t.INT&&(ae=t.RG32I)),b===t.RGB&&j===t.UNSIGNED_INT_5_9_9_9_REV&&(ae=t.RGB9_E5),b===t.RGBA){const Le=se?yf:gt.getTransfer(te);j===t.FLOAT&&(ae=t.RGBA32F),j===t.HALF_FLOAT&&(ae=t.RGBA16F),j===t.UNSIGNED_BYTE&&(ae=Le===Ct?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function g(R,b){let j;return R?b===null||b===Qr||b===Mo?j=t.DEPTH24_STENCIL8:b===pa?j=t.DEPTH32F_STENCIL8:b===tc&&(j=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qr||b===Mo?j=t.DEPTH_COMPONENT24:b===pa?j=t.DEPTH_COMPONENT32F:b===tc&&(j=t.DEPTH_COMPONENT16),j}function x(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==zn&&R.minFilter!==Ti?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){const b=R.target;b.removeEventListener("dispose",w),A(b),b.isVideoTexture&&u.delete(b)}function S(R){const b=R.target;b.removeEventListener("dispose",S),T(b)}function A(R){const b=i.get(R);if(b.__webglInit===void 0)return;const j=R.source,te=h.get(j);if(te){const se=te[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(R),Object.keys(te).length===0&&h.delete(j)}i.remove(R)}function C(R){const b=i.get(R);t.deleteTexture(b.__webglTexture);const j=R.source,te=h.get(j);delete te[b.__cacheKey],s.memory.textures--}function T(R){const b=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let se=0;se<b.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(b.__webglFramebuffer[te][se]);else t.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)t.deleteFramebuffer(b.__webglFramebuffer[te]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=R.textures;for(let te=0,se=j.length;te<se;te++){const ae=i.get(j[te]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),s.memory.textures--),i.remove(j[te])}i.remove(R)}let M=0;function D(){M=0}function Q(){const R=M;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),M+=1,R}function Y(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function K(R,b){const j=i.get(R);if(R.isVideoTexture&&Ft(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(j,R,b);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+b)}function $(R,b){const j=i.get(R);if(R.version>0&&j.__version!==R.version){Qe(j,R,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+b)}function N(R,b){const j=i.get(R);if(R.version>0&&j.__version!==R.version){Qe(j,R,b);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+b)}function q(R,b){const j=i.get(R);if(R.version>0&&j.__version!==R.version){Z(j,R,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+b)}const V={[Tp]:t.REPEAT,[Fr]:t.CLAMP_TO_EDGE,[Ap]:t.MIRRORED_REPEAT},le={[zn]:t.NEAREST,[vC]:t.NEAREST_MIPMAP_NEAREST,[Hc]:t.NEAREST_MIPMAP_LINEAR,[Ti]:t.LINEAR,[kh]:t.LINEAR_MIPMAP_NEAREST,[Br]:t.LINEAR_MIPMAP_LINEAR},ue={[MC]:t.NEVER,[CC]:t.ALWAYS,[bC]:t.LESS,[IM]:t.LEQUAL,[EC]:t.EQUAL,[wC]:t.GEQUAL,[TC]:t.GREATER,[AC]:t.NOTEQUAL};function Se(R,b){if(b.type===pa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ti||b.magFilter===kh||b.magFilter===Hc||b.magFilter===Br||b.minFilter===Ti||b.minFilter===kh||b.minFilter===Hc||b.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,V[b.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,V[b.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,V[b.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,le[b.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,le[b.minFilter]),b.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zn||b.minFilter!==Hc&&b.minFilter!==Br||b.type===pa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function We(R,b){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));const te=b.source;let se=h.get(te);se===void 0&&(se={},h.set(te,se));const ae=Y(b);if(ae!==R.__cacheKey){se[ae]===void 0&&(se[ae]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,j=!0),se[ae].usedTimes++;const Le=se[R.__cacheKey];Le!==void 0&&(se[R.__cacheKey].usedTimes--,Le.usedTimes===0&&C(b)),R.__cacheKey=ae,R.__webglTexture=se[ae].texture}return j}function Qe(R,b,j){let te=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=t.TEXTURE_3D);const se=We(R,b),ae=b.source;n.bindTexture(te,R.__webglTexture,t.TEXTURE0+j);const Le=i.get(ae);if(ae.version!==Le.__version||se===!0){n.activeTexture(t.TEXTURE0+j);const pe=gt.getPrimaries(gt.workingColorSpace),Te=b.colorSpace===qa?null:gt.getPrimaries(b.colorSpace),Ke=b.colorSpace===qa||pe===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let he=y(b.image,!1,a.maxTextureSize);he=je(b,he);const ve=r.convert(b.format,b.colorSpace),ot=r.convert(b.type);let Ve=v(b.internalFormat,ve,ot,b.colorSpace,b.isVideoTexture);Se(te,b);let Re;const Ye=b.mipmaps,Je=b.isVideoTexture!==!0,xt=Le.__version===void 0||se===!0,I=ae.dataReady,fe=x(b,he);if(b.isDepthTexture)Ve=g(b.format===bo,b.type),xt&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Ve,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Ve,he.width,he.height,0,ve,ot,null));else if(b.isDataTexture)if(Ye.length>0){Je&&xt&&n.texStorage2D(t.TEXTURE_2D,fe,Ve,Ye[0].width,Ye[0].height);for(let J=0,ne=Ye.length;J<ne;J++)Re=Ye[J],Je?I&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Re.width,Re.height,ve,ot,Re.data):n.texImage2D(t.TEXTURE_2D,J,Ve,Re.width,Re.height,0,ve,ot,Re.data);b.generateMipmaps=!1}else Je?(xt&&n.texStorage2D(t.TEXTURE_2D,fe,Ve,he.width,he.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he.width,he.height,ve,ot,he.data)):n.texImage2D(t.TEXTURE_2D,0,Ve,he.width,he.height,0,ve,ot,he.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Je&&xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ve,Ye[0].width,Ye[0].height,he.depth);for(let J=0,ne=Ye.length;J<ne;J++)if(Re=Ye[J],b.format!==di)if(ve!==null)if(Je){if(I)if(b.layerUpdates.size>0){const me=R0(Re.width,Re.height,b.format,b.type);for(const Be of b.layerUpdates){const rt=Re.data.subarray(Be*me/Re.data.BYTES_PER_ELEMENT,(Be+1)*me/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,Be,Re.width,Re.height,1,ve,rt,0,0)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Re.width,Re.height,he.depth,ve,Re.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,Ve,Re.width,Re.height,he.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Re.width,Re.height,he.depth,ve,ot,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,Ve,Re.width,Re.height,he.depth,0,ve,ot,Re.data)}else{Je&&xt&&n.texStorage2D(t.TEXTURE_2D,fe,Ve,Ye[0].width,Ye[0].height);for(let J=0,ne=Ye.length;J<ne;J++)Re=Ye[J],b.format!==di?ve!==null?Je?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,Re.width,Re.height,ve,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,J,Ve,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?I&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Re.width,Re.height,ve,ot,Re.data):n.texImage2D(t.TEXTURE_2D,J,Ve,Re.width,Re.height,0,ve,ot,Re.data)}else if(b.isDataArrayTexture)if(Je){if(xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ve,he.width,he.height,he.depth),I)if(b.layerUpdates.size>0){const J=R0(he.width,he.height,b.format,b.type);for(const ne of b.layerUpdates){const me=he.data.subarray(ne*J/he.data.BYTES_PER_ELEMENT,(ne+1)*J/he.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,he.width,he.height,1,ve,ot,me)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ve,ot,he.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ve,he.width,he.height,he.depth,0,ve,ot,he.data);else if(b.isData3DTexture)Je?(xt&&n.texStorage3D(t.TEXTURE_3D,fe,Ve,he.width,he.height,he.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ve,ot,he.data)):n.texImage3D(t.TEXTURE_3D,0,Ve,he.width,he.height,he.depth,0,ve,ot,he.data);else if(b.isFramebufferTexture){if(xt)if(Je)n.texStorage2D(t.TEXTURE_2D,fe,Ve,he.width,he.height);else{let J=he.width,ne=he.height;for(let me=0;me<fe;me++)n.texImage2D(t.TEXTURE_2D,me,Ve,J,ne,0,ve,ot,null),J>>=1,ne>>=1}}else if(Ye.length>0){if(Je&&xt){const J=Ze(Ye[0]);n.texStorage2D(t.TEXTURE_2D,fe,Ve,J.width,J.height)}for(let J=0,ne=Ye.length;J<ne;J++)Re=Ye[J],Je?I&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ve,ot,Re):n.texImage2D(t.TEXTURE_2D,J,Ve,ve,ot,Re);b.generateMipmaps=!1}else if(Je){if(xt){const J=Ze(he);n.texStorage2D(t.TEXTURE_2D,fe,Ve,J.width,J.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,ot,he)}else n.texImage2D(t.TEXTURE_2D,0,Ve,ve,ot,he);m(b)&&d(te),Le.__version=ae.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Z(R,b,j){if(b.image.length!==6)return;const te=We(R,b),se=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+j);const ae=i.get(se);if(se.version!==ae.__version||te===!0){n.activeTexture(t.TEXTURE0+j);const Le=gt.getPrimaries(gt.workingColorSpace),pe=b.colorSpace===qa?null:gt.getPrimaries(b.colorSpace),Te=b.colorSpace===qa||Le===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ke=b.isCompressedTexture||b.image[0].isCompressedTexture,he=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let ne=0;ne<6;ne++)!Ke&&!he?ve[ne]=y(b.image[ne],!0,a.maxCubemapSize):ve[ne]=he?b.image[ne].image:b.image[ne],ve[ne]=je(b,ve[ne]);const ot=ve[0],Ve=r.convert(b.format,b.colorSpace),Re=r.convert(b.type),Ye=v(b.internalFormat,Ve,Re,b.colorSpace),Je=b.isVideoTexture!==!0,xt=ae.__version===void 0||te===!0,I=se.dataReady;let fe=x(b,ot);Se(t.TEXTURE_CUBE_MAP,b);let J;if(Ke){Je&&xt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ye,ot.width,ot.height);for(let ne=0;ne<6;ne++){J=ve[ne].mipmaps;for(let me=0;me<J.length;me++){const Be=J[me];b.format!==di?Ve!==null?Je?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me,0,0,Be.width,Be.height,Ve,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me,Ye,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me,0,0,Be.width,Be.height,Ve,Re,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me,Ye,Be.width,Be.height,0,Ve,Re,Be.data)}}}else{if(J=b.mipmaps,Je&&xt){J.length>0&&fe++;const ne=Ze(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ye,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(he){Je?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ve[ne].width,ve[ne].height,Ve,Re,ve[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,ve[ne].width,ve[ne].height,0,Ve,Re,ve[ne].data);for(let me=0;me<J.length;me++){const rt=J[me].image[ne].image;Je?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me+1,0,0,rt.width,rt.height,Ve,Re,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me+1,Ye,rt.width,rt.height,0,Ve,Re,rt.data)}}else{Je?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ve,Re,ve[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,Ve,Re,ve[ne]);for(let me=0;me<J.length;me++){const Be=J[me];Je?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me+1,0,0,Ve,Re,Be.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me+1,Ye,Ve,Re,Be.image[ne])}}}m(b)&&d(t.TEXTURE_CUBE_MAP),ae.__version=se.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function oe(R,b,j,te,se,ae){const Le=r.convert(j.format,j.colorSpace),pe=r.convert(j.type),Te=v(j.internalFormat,Le,pe,j.colorSpace);if(!i.get(b).__hasExternalTextures){const he=Math.max(1,b.width>>ae),ve=Math.max(1,b.height>>ae);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,ae,Te,he,ve,b.depth,0,Le,pe,null):n.texImage2D(se,ae,Te,he,ve,0,Le,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Oe(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,se,i.get(j).__webglTexture,0,_t(b)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,se,i.get(j).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(R,b,j){if(t.bindRenderbuffer(t.RENDERBUFFER,R),b.depthBuffer){const te=b.depthTexture,se=te&&te.isDepthTexture?te.type:null,ae=g(b.stencilBuffer,se),Le=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=_t(b);Oe(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,ae,b.width,b.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,ae,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ae,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,R)}else{const te=b.textures;for(let se=0;se<te.length;se++){const ae=te[se],Le=r.convert(ae.format,ae.colorSpace),pe=r.convert(ae.type),Te=v(ae.internalFormat,Le,pe,ae.colorSpace),Ke=_t(b);j&&Oe(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,Te,b.width,b.height):Oe(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,Te,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Te,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const te=i.get(b.depthTexture).__webglTexture,se=_t(b);if(b.depthTexture.format===lo)Oe(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(b.depthTexture.format===bo)Oe(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function He(R){const b=i.get(R),j=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const te=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),te){const se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,te.removeEventListener("dispose",se)};te.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=te}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ce(b.__webglFramebuffer,R)}else if(j){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]===void 0)b.__webglDepthbuffer[te]=t.createRenderbuffer(),Ee(b.__webglDepthbuffer[te],R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ae)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),Ee(b.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,se)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(R,b,j){const te=i.get(R);b!==void 0&&oe(te.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&He(R)}function ze(R){const b=R.texture,j=i.get(R),te=i.get(b);R.addEventListener("dispose",S);const se=R.textures,ae=R.isWebGLCubeRenderTarget===!0,Le=se.length>1;if(Le||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=b.version,s.memory.textures++),ae){j.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[pe]=[];for(let Te=0;Te<b.mipmaps.length;Te++)j.__webglFramebuffer[pe][Te]=t.createFramebuffer()}else j.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)j.__webglFramebuffer[pe]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Le)for(let pe=0,Te=se.length;pe<Te;pe++){const Ke=i.get(se[pe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&Oe(R)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const Te=se[pe];j.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[pe]);const Ke=r.convert(Te.format,Te.colorSpace),he=r.convert(Te.type),ve=v(Te.internalFormat,Ke,he,Te.colorSpace,R.isXRRenderTarget===!0),ot=_t(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ot,ve,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,j.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),Ee(j.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Se(t.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)oe(j.__webglFramebuffer[pe][Te],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Te);else oe(j.__webglFramebuffer[pe],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(b)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let pe=0,Te=se.length;pe<Te;pe++){const Ke=se[pe],he=i.get(Ke);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),Se(t.TEXTURE_2D,Ke),oe(j.__webglFramebuffer,R,Ke,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),m(Ke)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,te.__webglTexture),Se(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)oe(j.__webglFramebuffer[Te],R,b,t.COLOR_ATTACHMENT0,pe,Te);else oe(j.__webglFramebuffer,R,b,t.COLOR_ATTACHMENT0,pe,0);m(b)&&d(pe),n.unbindTexture()}R.depthBuffer&&He(R)}function yt(R){const b=R.textures;for(let j=0,te=b.length;j<te;j++){const se=b[j];if(m(se)){const ae=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Le=i.get(se).__webglTexture;n.bindTexture(ae,Le),d(ae),n.unbindTexture()}}}const O=[],kt=[];function st(R){if(R.samples>0){if(Oe(R)===!1){const b=R.textures,j=R.width,te=R.height;let se=t.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(R),pe=b.length>1;if(pe)for(let Te=0;Te<b.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Te]);const Ke=i.get(b[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,j,te,0,0,j,te,se,t.NEAREST),l===!0&&(O.length=0,kt.length=0,O.push(t.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.resolveDepthBuffer===!1&&(O.push(ae),kt.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,kt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,O))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Te=0;Te<b.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Te]);const Ke=i.get(b[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function _t(R){return Math.min(a.maxSamples,R.samples)}function Oe(R){const b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ft(R){const b=s.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function je(R,b){const j=R.colorSpace,te=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||j!==_r&&j!==qa&&(gt.getTransfer(j)===Ct?(te!==di||se!==Ma)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}function Ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=D,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=N,this.setTextureCube=q,this.rebindTextures=qe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Oe}function X3(t,e){function n(i,a=qa){let r;const s=gt.getTransfer(a);if(i===Ma)return t.UNSIGNED_BYTE;if(i===xg)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===RM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===wM)return t.BYTE;if(i===CM)return t.SHORT;if(i===tc)return t.UNSIGNED_SHORT;if(i===yg)return t.INT;if(i===Qr)return t.UNSIGNED_INT;if(i===pa)return t.FLOAT;if(i===Uo)return t.HALF_FLOAT;if(i===DM)return t.ALPHA;if(i===LM)return t.RGB;if(i===di)return t.RGBA;if(i===PM)return t.LUMINANCE;if(i===UM)return t.LUMINANCE_ALPHA;if(i===lo)return t.DEPTH_COMPONENT;if(i===bo)return t.DEPTH_STENCIL;if(i===NM)return t.RED;if(i===Mg)return t.RED_INTEGER;if(i===OM)return t.RG;if(i===bg)return t.RG_INTEGER;if(i===Eg)return t.RGBA_INTEGER;if(i===Uu||i===Nu||i===Ou||i===zu)if(s===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Uu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ou)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Uu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ou)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wp||i===Cp||i===Rp||i===Dp)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wp)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cp)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rp)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dp)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lp||i===Pp||i===Up)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lp||i===Pp)return s===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Up)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Np||i===Op||i===zp||i===Ip||i===Fp||i===Bp||i===Hp||i===Vp||i===kp||i===Gp||i===jp||i===Xp||i===Wp||i===Yp)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Np)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Op)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zp)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ip)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fp)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bp)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hp)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vp)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kp)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gp)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jp)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xp)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wp)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yp)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Iu||i===qp||i===Zp)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Iu)return s===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qp)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zp)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zM||i===Kp||i===Qp||i===$p)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Iu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kp)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qp)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$p)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class W3 extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let fl=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Y3={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y3)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const q3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z3=`
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

}`;class K3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const a=new xn,r=e.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Bn({vertexShader:q3,fragmentShader:Z3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zn(new zo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q3 extends os{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const y=new K3,m=n.getContextAttributes();let d=null,v=null;const g=[],x=[],w=new be;let S=null;const A=new On;A.layers.enable(1),A.viewport=new sn;const C=new On;C.layers.enable(2),C.viewport=new sn;const T=[A,C],M=new W3;M.layers.enable(1),M.layers.enable(2);let D=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=g[Z];return oe===void 0&&(oe=new dd,g[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=g[Z];return oe===void 0&&(oe=new dd,g[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=g[Z];return oe===void 0&&(oe=new dd,g[Z]=oe),oe.getHandSpace()};function Y(Z){const oe=x.indexOf(Z.inputSource);if(oe===-1)return;const Ee=g[oe];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,c||s),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",K),a.removeEventListener("inputsourceschange",$);for(let Z=0;Z<g.length;Z++){const oe=x[Z];oe!==null&&(x[Z]=null,g[Z].disconnect(oe))}D=null,Q=null,y.reset(),e.setRenderTarget(d),p=null,h=null,f=null,a=null,v=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(d=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",K),a.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),a.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,oe),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new hr(p.framebufferWidth,p.framebufferHeight,{format:di,type:Ma,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,Ee=null,Ce=null;m.depth&&(Ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=m.stencil?bo:lo,Ee=m.stencil?Mo:Qr);const He={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:r};f=new XRWebGLBinding(a,n),h=f.createProjectionLayer(He),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new hr(h.textureWidth,h.textureHeight,{format:di,type:Ma,depthTexture:new ZM(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Qe.setContext(a),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(Z){for(let oe=0;oe<Z.removed.length;oe++){const Ee=Z.removed[oe],Ce=x.indexOf(Ee);Ce>=0&&(x[Ce]=null,g[Ce].disconnect(Ee))}for(let oe=0;oe<Z.added.length;oe++){const Ee=Z.added[oe];let Ce=x.indexOf(Ee);if(Ce===-1){for(let qe=0;qe<g.length;qe++)if(qe>=x.length){x.push(Ee),Ce=qe;break}else if(x[qe]===null){x[qe]=Ee,Ce=qe;break}if(Ce===-1)break}const He=g[Ce];He&&He.connect(Ee)}}const N=new L,q=new L;function V(Z,oe,Ee){N.setFromMatrixPosition(oe.matrixWorld),q.setFromMatrixPosition(Ee.matrixWorld);const Ce=N.distanceTo(q),He=oe.projectionMatrix.elements,qe=Ee.projectionMatrix.elements,ze=He[14]/(He[10]-1),yt=He[14]/(He[10]+1),O=(He[9]+1)/He[5],kt=(He[9]-1)/He[5],st=(He[8]-1)/He[0],_t=(qe[8]+1)/qe[0],Oe=ze*st,Ft=ze*_t,je=Ce/(-st+_t),Ze=je*-st;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ze),Z.translateZ(je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),He[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const R=ze+je,b=yt+je,j=Oe-Ze,te=Ft+(Ce-Ze),se=O*yt/b*R,ae=kt*yt/b*R;Z.projectionMatrix.makePerspective(j,te,se,ae,R,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let oe=Z.near,Ee=Z.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),M.near=C.near=A.near=oe,M.far=C.far=A.far=Ee,(D!==M.near||Q!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,Q=M.far);const Ce=Z.parent,He=M.cameras;le(M,Ce);for(let qe=0;qe<He.length;qe++)le(He[qe],Ce);He.length===2?V(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),ue(Z,M,Ce)};function ue(Z,oe,Ee){Ee===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Eo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let Se=null;function We(Z,oe){if(u=oe.getViewerPose(c||s),_=oe,u!==null){const Ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Ce=!1;Ee.length!==M.cameras.length&&(M.cameras.length=0,Ce=!0);for(let qe=0;qe<Ee.length;qe++){const ze=Ee[qe];let yt=null;if(p!==null)yt=p.getViewport(ze);else{const kt=f.getViewSubImage(h,ze);yt=kt.viewport,qe===0&&(e.setRenderTargetTextures(v,kt.colorTexture,h.ignoreDepthValues?void 0:kt.depthStencilTexture),e.setRenderTarget(v))}let O=T[qe];O===void 0&&(O=new On,O.layers.enable(qe),O.viewport=new sn,T[qe]=O),O.matrix.fromArray(ze.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(ze.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(yt.x,yt.y,yt.width,yt.height),qe===0&&(M.matrix.copy(O.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ce===!0&&M.cameras.push(O)}const He=a.enabledFeatures;if(He&&He.includes("depth-sensing")){const qe=f.getDepthInformation(Ee[0]);qe&&qe.isValid&&qe.texture&&y.init(e,qe,a.renderState)}}for(let Ee=0;Ee<g.length;Ee++){const Ce=x[Ee],He=g[Ee];Ce!==null&&He!==void 0&&He.update(Ce,oe,c||s)}Se&&Se(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),_=null}const Qe=new qM;Qe.setAnimationLoop(We),this.setAnimationLoop=function(Z){Se=Z},this.dispose=function(){}}}const Ar=new Ci,$3=new Ot;function J3(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,XM(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,v,g,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,g):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===In&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===In&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),g=v.envMap,x=v.envMapRotation;g&&(m.envMap.value=g,Ar.copy(x),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),m.envMapRotation.value.setFromMatrix4($3.makeRotationFromEuler(Ar)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===In&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function eP(t,e,n,i){let a={},r={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const x=g.program;i.uniformBlockBinding(v,x)}function c(v,g){let x=a[v.id];x===void 0&&(_(v),x=u(v),a[v.id]=x,v.addEventListener("dispose",m));const w=g.program;i.updateUBOMapping(v,w);const S=e.render.frame;r[v.id]!==S&&(h(v),r[v.id]=S)}function u(v){const g=f();v.__bindingPointIndex=g;const x=t.createBuffer(),w=v.__size,S=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,w,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function f(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=a[v.id],x=v.uniforms,w=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let S=0,A=x.length;S<A;S++){const C=Array.isArray(x[S])?x[S]:[x[S]];for(let T=0,M=C.length;T<M;T++){const D=C[T];if(p(D,S,T,w)===!0){const Q=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let $=0;$<Y.length;$++){const N=Y[$],q=y(N);typeof N=="number"||typeof N=="boolean"?(D.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,Q+K,D.__data)):N.isMatrix3?(D.__data[0]=N.elements[0],D.__data[1]=N.elements[1],D.__data[2]=N.elements[2],D.__data[3]=0,D.__data[4]=N.elements[3],D.__data[5]=N.elements[4],D.__data[6]=N.elements[5],D.__data[7]=0,D.__data[8]=N.elements[6],D.__data[9]=N.elements[7],D.__data[10]=N.elements[8],D.__data[11]=0):(N.toArray(D.__data,K),K+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Q,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,x,w){const S=v.value,A=g+"_"+x;if(w[A]===void 0)return typeof S=="number"||typeof S=="boolean"?w[A]=S:w[A]=S.clone(),!0;{const C=w[A];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return w[A]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function _(v){const g=v.uniforms;let x=0;const w=16;for(let A=0,C=g.length;A<C;A++){const T=Array.isArray(g[A])?g[A]:[g[A]];for(let M=0,D=T.length;M<D;M++){const Q=T[M],Y=Array.isArray(Q.value)?Q.value:[Q.value];for(let K=0,$=Y.length;K<$;K++){const N=Y[K],q=y(N),V=x%w,le=V%q.boundary,ue=V+le;x+=le,ue!==0&&w-ue<q.storage&&(x+=w-ue),Q.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=x,x+=q.storage}}}const S=x%w;return S>0&&(x+=w-S),v.__size=x,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const x=s.indexOf(g.__bindingPointIndex);s.splice(x,1),t.deleteBuffer(a[g.id]),delete a[g.id],delete r[g.id]}function d(){for(const v in a)t.deleteBuffer(a[v]);s=[],a={},r={}}return{bind:l,update:c,dispose:d}}class eb{constructor(e={}){const{canvas:n=WC(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bi,this.toneMapping=rr,this.toneMappingExposure=1;const g=this;let x=!1,w=0,S=0,A=null,C=-1,T=null;const M=new sn,D=new sn;let Q=null;const Y=new Ne(0);let K=0,$=n.width,N=n.height,q=1,V=null,le=null;const ue=new sn(0,0,$,N),Se=new sn(0,0,$,N);let We=!1;const Qe=new Rg;let Z=!1,oe=!1;const Ee=new Ot,Ce=new L,He=new sn,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function yt(){return A===null?q:1}let O=i;function kt(E,z){return n.getContext(E,z)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_g}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ne,!1),n.addEventListener("webglcontextcreationerror",me,!1),O===null){const z="webgl2";if(O=kt(z,E),O===null)throw kt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let st,_t,Oe,Ft,je,Ze,R,b,j,te,se,ae,Le,pe,Te,Ke,he,ve,ot,Ve,Re,Ye,Je,xt;function I(){st=new oL(O),st.init(),Ye=new X3(O,st),_t=new tL(O,st,e,Ye),Oe=new k3(O),Ft=new uL(O),je=new C3,Ze=new j3(O,st,Oe,je,_t,Ye,Ft),R=new iL(g),b=new sL(g),j=new _R(O),Je=new JD(O,j),te=new lL(O,j,Ft,Je),se=new hL(O,te,j,Ft),ot=new fL(O,_t,Ze),Ke=new nL(je),ae=new w3(g,R,b,st,_t,Je,Ke),Le=new J3(g,je),pe=new D3,Te=new z3(st),ve=new $D(g,R,b,Oe,se,h,l),he=new V3(g,se,_t),xt=new eP(O,Ft,_t,Oe),Ve=new eL(O,st,Ft),Re=new cL(O,st,Ft),Ft.programs=ae.programs,g.capabilities=_t,g.extensions=st,g.properties=je,g.renderLists=pe,g.shadowMap=he,g.state=Oe,g.info=Ft}I();const fe=new Q3(g,O);this.xr=fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize($,N,!1))},this.getSize=function(E){return E.set($,N)},this.setSize=function(E,z,k=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,N=z,n.width=Math.floor(E*q),n.height=Math.floor(z*q),k===!0&&(n.style.width=E+"px",n.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set($*q,N*q).floor()},this.setDrawingBufferSize=function(E,z,k){$=E,N=z,q=k,n.width=Math.floor(E*k),n.height=Math.floor(z*k),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,z,k,G){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,z,k,G),Oe.viewport(M.copy(ue).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Se)},this.setScissor=function(E,z,k,G){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,z,k,G),Oe.scissor(D.copy(Se).multiplyScalar(q).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(E){Oe.setScissorTest(We=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(E=!0,z=!0,k=!0){let G=0;if(E){let B=!1;if(A!==null){const ce=A.texture.format;B=ce===Eg||ce===bg||ce===Mg}if(B){const ce=A.texture.type,ye=ce===Ma||ce===Qr||ce===tc||ce===Mo||ce===xg||ce===Sg,we=ve.getClearColor(),Me=ve.getClearAlpha(),Ie=we.r,Fe=we.g,de=we.b;ye?(p[0]=Ie,p[1]=Fe,p[2]=de,p[3]=Me,O.clearBufferuiv(O.COLOR,0,p)):(_[0]=Ie,_[1]=Fe,_[2]=de,_[3]=Me,O.clearBufferiv(O.COLOR,0,_))}else G|=O.COLOR_BUFFER_BIT}z&&(G|=O.DEPTH_BUFFER_BIT),k&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ne,!1),n.removeEventListener("webglcontextcreationerror",me,!1),pe.dispose(),Te.dispose(),je.dispose(),R.dispose(),b.dispose(),se.dispose(),Je.dispose(),xt.dispose(),ae.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",H),fe.removeEventListener("sessionend",W),re.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=Ft.autoReset,z=he.enabled,k=he.autoUpdate,G=he.needsUpdate,B=he.type;I(),Ft.autoReset=E,he.enabled=z,he.autoUpdate=k,he.needsUpdate=G,he.type=B}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){const z=E.target;z.removeEventListener("dispose",Be),rt(z)}function rt(E){Pt(E),je.remove(E)}function Pt(E){const z=je.get(E).programs;z!==void 0&&(z.forEach(function(k){ae.releaseProgram(k)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,k,G,B,ce){z===null&&(z=qe);const ye=B.isMesh&&B.matrixWorld.determinant()<0,we=wt(E,z,k,G,B);Oe.setMaterial(G,ye);let Me=k.index,Ie=1;if(G.wireframe===!0){if(Me=te.getWireframeAttribute(k),Me===void 0)return;Ie=2}const Fe=k.drawRange,de=k.attributes.position;let Ge=Fe.start*Ie,Tt=(Fe.start+Fe.count)*Ie;ce!==null&&(Ge=Math.max(Ge,ce.start*Ie),Tt=Math.min(Tt,(ce.start+ce.count)*Ie)),Me!==null?(Ge=Math.max(Ge,0),Tt=Math.min(Tt,Me.count)):de!=null&&(Ge=Math.max(Ge,0),Tt=Math.min(Tt,de.count));const St=Tt-Ge;if(St<0||St===1/0)return;Je.setup(B,G,we,k,Me);let ht,lt=Ve;if(Me!==null&&(ht=j.get(Me),lt=Re,lt.setIndex(ht)),B.isMesh)G.wireframe===!0?(Oe.setLineWidth(G.wireframeLinewidth*yt()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if(B.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),Oe.setLineWidth(Ue*yt()),B.isLineSegments?lt.setMode(O.LINES):B.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else B.isPoints?lt.setMode(O.POINTS):B.isSprite&&lt.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ue=B._multiDrawStarts,en=B._multiDrawCounts,vt=B._multiDrawCount,_i=Me?j.get(Me).bytesPerElement:1,cs=je.get(G).currentProgram.getUniforms();for(let Vn=0;Vn<vt;Vn++)cs.setValue(O,"_gl_DrawID",Vn),lt.render(Ue[Vn]/_i,en[Vn])}else if(B.isInstancedMesh)lt.renderInstances(Ge,St,B.count);else if(k.isInstancedBufferGeometry){const Ue=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,en=Math.min(k.instanceCount,Ue);lt.renderInstances(Ge,St,en)}else lt.render(Ge,St)};function $t(E,z,k){E.transparent===!0&&E.side===zi&&E.forceSinglePass===!1?(E.side=In,E.needsUpdate=!0,ge(E,z,k),E.side=fr,E.needsUpdate=!0,ge(E,z,k),E.side=zi):ge(E,z,k)}this.compile=function(E,z,k=null){k===null&&(k=E),m=Te.get(k),m.init(z),v.push(m),k.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==k&&E.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const G=new Set;return E.traverse(function(B){const ce=B.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){const we=ce[ye];$t(we,k,B),G.add(we)}else $t(ce,k,B),G.add(ce)}),v.pop(),m=null,G},this.compileAsync=function(E,z,k=null){const G=this.compile(E,z,k);return new Promise(B=>{function ce(){if(G.forEach(function(ye){je.get(ye).currentProgram.isReady()&&G.delete(ye)}),G.size===0){B(E);return}setTimeout(ce,10)}st.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let pt=null;function U(E){pt&&pt(E)}function H(){re.stop()}function W(){re.start()}const re=new qM;re.setAnimationLoop(U),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(E){pt=E,fe.setAnimationLoop(E),E===null?re.stop():re.start()},fe.addEventListener("sessionstart",H),fe.addEventListener("sessionend",W),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(z),z=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,z,A),m=Te.get(E,v.length),m.init(z),v.push(m),Ee.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Qe.setFromProjectionMatrix(Ee),oe=this.localClippingEnabled,Z=Ke.init(this.clippingPlanes,oe),y=pe.get(E,d.length),y.init(),d.push(y),fe.enabled===!0&&fe.isPresenting===!0){const ce=g.xr.getDepthSensingMesh();ce!==null&&xe(ce,z,-1/0,g.sortObjects)}xe(E,z,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(V,le),ze=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ze&&ve.addToRenderList(y,E),this.info.render.frame++,Z===!0&&Ke.beginShadows();const k=m.state.shadowsArray;he.render(k,E,z),Z===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,B=y.transmissive;if(m.setupLights(),z.isArrayCamera){const ce=z.cameras;if(B.length>0)for(let ye=0,we=ce.length;ye<we;ye++){const Me=ce[ye];ke(G,B,E,Me)}ze&&ve.render(E);for(let ye=0,we=ce.length;ye<we;ye++){const Me=ce[ye];Pe(y,E,Me,Me.viewport)}}else B.length>0&&ke(G,B,E,z),ze&&ve.render(E),Pe(y,E,z);A!==null&&(Ze.updateMultisampleRenderTarget(A),Ze.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(g,E,z),Je.resetDefaultState(),C=-1,T=null,v.pop(),v.length>0?(m=v[v.length-1],Z===!0&&Ke.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function xe(E,z,k,G){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Qe.intersectsSprite(E)){G&&He.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);const ye=se.update(E),we=E.material;we.visible&&y.push(E,ye,we,k,He.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Qe.intersectsObject(E))){const ye=se.update(E),we=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),He.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),He.copy(ye.boundingSphere.center)),He.applyMatrix4(E.matrixWorld).applyMatrix4(Ee)),Array.isArray(we)){const Me=ye.groups;for(let Ie=0,Fe=Me.length;Ie<Fe;Ie++){const de=Me[Ie],Ge=we[de.materialIndex];Ge&&Ge.visible&&y.push(E,ye,Ge,k,He.z,de)}}else we.visible&&y.push(E,ye,we,k,He.z,null)}}const ce=E.children;for(let ye=0,we=ce.length;ye<we;ye++)xe(ce[ye],z,k,G)}function Pe(E,z,k,G){const B=E.opaque,ce=E.transmissive,ye=E.transparent;m.setupLightsView(k),Z===!0&&Ke.setGlobalState(g.clippingPlanes,k),G&&Oe.viewport(M.copy(G)),B.length>0&&Ae(B,z,k),ce.length>0&&Ae(ce,z,k),ye.length>0&&Ae(ye,z,k),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function ke(E,z,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new hr(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Uo:Ma,minFilter:Br,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ce=m.state.transmissionRenderTarget[G.id],ye=G.viewport||M;ce.setSize(ye.z,ye.w);const we=g.getRenderTarget();g.setRenderTarget(ce),g.getClearColor(Y),K=g.getClearAlpha(),K<1&&g.setClearColor(16777215,.5),g.clear(),ze&&ve.render(k);const Me=g.toneMapping;g.toneMapping=rr;const Ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),Z===!0&&Ke.setGlobalState(g.clippingPlanes,G),Ae(E,k,G),Ze.updateMultisampleRenderTarget(ce),Ze.updateRenderTargetMipmap(ce),st.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let de=0,Ge=z.length;de<Ge;de++){const Tt=z[de],St=Tt.object,ht=Tt.geometry,lt=Tt.material,Ue=Tt.group;if(lt.side===zi&&St.layers.test(G.layers)){const en=lt.side;lt.side=In,lt.needsUpdate=!0,De(St,k,G,ht,lt,Ue),lt.side=en,lt.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ze.updateMultisampleRenderTarget(ce),Ze.updateRenderTargetMipmap(ce))}g.setRenderTarget(we),g.setClearColor(Y,K),Ie!==void 0&&(G.viewport=Ie),g.toneMapping=Me}function Ae(E,z,k){const G=z.isScene===!0?z.overrideMaterial:null;for(let B=0,ce=E.length;B<ce;B++){const ye=E[B],we=ye.object,Me=ye.geometry,Ie=G===null?ye.material:G,Fe=ye.group;we.layers.test(k.layers)&&De(we,z,k,Me,Ie,Fe)}}function De(E,z,k,G,B,ce){E.onBeforeRender(g,z,k,G,B,ce),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(g,z,k,G,E,ce),B.transparent===!0&&B.side===zi&&B.forceSinglePass===!1?(B.side=In,B.needsUpdate=!0,g.renderBufferDirect(k,z,G,B,E,ce),B.side=fr,B.needsUpdate=!0,g.renderBufferDirect(k,z,G,B,E,ce),B.side=zi):g.renderBufferDirect(k,z,G,B,E,ce),E.onAfterRender(g,z,k,G,B,ce)}function ge(E,z,k){z.isScene!==!0&&(z=qe);const G=je.get(E),B=m.state.lights,ce=m.state.shadowsArray,ye=B.state.version,we=ae.getParameters(E,B.state,ce,z,k),Me=ae.getProgramCacheKey(we);let Ie=G.programs;G.environment=E.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=(E.isMeshStandardMaterial?b:R).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",Be),Ie=new Map,G.programs=Ie);let Fe=Ie.get(Me);if(Fe!==void 0){if(G.currentProgram===Fe&&G.lightsStateVersion===ye)return et(E,we),Fe}else we.uniforms=ae.getUniforms(E),E.onBeforeCompile(we,g),Fe=ae.acquireProgram(we,Me),Ie.set(Me,Fe),G.uniforms=we.uniforms;const de=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(de.clippingPlanes=Ke.uniform),et(E,we),G.needsLights=Ut(E),G.lightsStateVersion=ye,G.needsLights&&(de.ambientLightColor.value=B.state.ambient,de.lightProbe.value=B.state.probe,de.directionalLights.value=B.state.directional,de.directionalLightShadows.value=B.state.directionalShadow,de.spotLights.value=B.state.spot,de.spotLightShadows.value=B.state.spotShadow,de.rectAreaLights.value=B.state.rectArea,de.ltc_1.value=B.state.rectAreaLTC1,de.ltc_2.value=B.state.rectAreaLTC2,de.pointLights.value=B.state.point,de.pointLightShadows.value=B.state.pointShadow,de.hemisphereLights.value=B.state.hemi,de.directionalShadowMap.value=B.state.directionalShadowMap,de.directionalShadowMatrix.value=B.state.directionalShadowMatrix,de.spotShadowMap.value=B.state.spotShadowMap,de.spotLightMatrix.value=B.state.spotLightMatrix,de.spotLightMap.value=B.state.spotLightMap,de.pointShadowMap.value=B.state.pointShadowMap,de.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Fe,G.uniformsList=null,Fe}function Xe(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Fu.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function et(E,z){const k=je.get(E);k.outputColorSpace=z.outputColorSpace,k.batching=z.batching,k.batchingColor=z.batchingColor,k.instancing=z.instancing,k.instancingColor=z.instancingColor,k.instancingMorph=z.instancingMorph,k.skinning=z.skinning,k.morphTargets=z.morphTargets,k.morphNormals=z.morphNormals,k.morphColors=z.morphColors,k.morphTargetsCount=z.morphTargetsCount,k.numClippingPlanes=z.numClippingPlanes,k.numIntersection=z.numClipIntersection,k.vertexAlphas=z.vertexAlphas,k.vertexTangents=z.vertexTangents,k.toneMapping=z.toneMapping}function wt(E,z,k,G,B){z.isScene!==!0&&(z=qe),Ze.resetTextureUnits();const ce=z.fog,ye=G.isMeshStandardMaterial?z.environment:null,we=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:_r,Me=(G.isMeshStandardMaterial?b:R).get(G.envMap||ye),Ie=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Fe=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),de=!!k.morphAttributes.position,Ge=!!k.morphAttributes.normal,Tt=!!k.morphAttributes.color;let St=rr;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(St=g.toneMapping);const ht=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,lt=ht!==void 0?ht.length:0,Ue=je.get(G),en=m.state.lights;if(Z===!0&&(oe===!0||E!==T)){const ei=E===T&&G.id===C;Ke.setState(G,E,ei)}let vt=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==en.state.version||Ue.outputColorSpace!==we||B.isBatchedMesh&&Ue.batching===!1||!B.isBatchedMesh&&Ue.batching===!0||B.isBatchedMesh&&Ue.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ue.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ue.instancing===!1||!B.isInstancedMesh&&Ue.instancing===!0||B.isSkinnedMesh&&Ue.skinning===!1||!B.isSkinnedMesh&&Ue.skinning===!0||B.isInstancedMesh&&Ue.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ue.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ue.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ue.instancingMorph===!1&&B.morphTexture!==null||Ue.envMap!==Me||G.fog===!0&&Ue.fog!==ce||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ke.numPlanes||Ue.numIntersection!==Ke.numIntersection)||Ue.vertexAlphas!==Ie||Ue.vertexTangents!==Fe||Ue.morphTargets!==de||Ue.morphNormals!==Ge||Ue.morphColors!==Tt||Ue.toneMapping!==St||Ue.morphTargetsCount!==lt)&&(vt=!0):(vt=!0,Ue.__version=G.version);let _i=Ue.currentProgram;vt===!0&&(_i=ge(G,z,B));let cs=!1,Vn=!1,eh=!1;const Wt=_i.getUniforms(),wa=Ue.uniforms;if(Oe.useProgram(_i.program)&&(cs=!0,Vn=!0,eh=!0),G.id!==C&&(C=G.id,Vn=!0),cs||T!==E){Wt.setValue(O,"projectionMatrix",E.projectionMatrix),Wt.setValue(O,"viewMatrix",E.matrixWorldInverse);const ei=Wt.map.cameraPosition;ei!==void 0&&ei.setValue(O,Ce.setFromMatrixPosition(E.matrixWorld)),_t.logarithmicDepthBuffer&&Wt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Wt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,Vn=!0,eh=!0)}if(B.isSkinnedMesh){Wt.setOptional(O,B,"bindMatrix"),Wt.setOptional(O,B,"bindMatrixInverse");const ei=B.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),Wt.setValue(O,"boneTexture",ei.boneTexture,Ze))}B.isBatchedMesh&&(Wt.setOptional(O,B,"batchingTexture"),Wt.setValue(O,"batchingTexture",B._matricesTexture,Ze),Wt.setOptional(O,B,"batchingIdTexture"),Wt.setValue(O,"batchingIdTexture",B._indirectTexture,Ze),Wt.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&Wt.setValue(O,"batchingColorTexture",B._colorsTexture,Ze));const th=k.morphAttributes;if((th.position!==void 0||th.normal!==void 0||th.color!==void 0)&&ot.update(B,k,_i),(Vn||Ue.receiveShadow!==B.receiveShadow)&&(Ue.receiveShadow=B.receiveShadow,Wt.setValue(O,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wa.envMap.value=Me,wa.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&z.environment!==null&&(wa.envMapIntensity.value=z.environmentIntensity),Vn&&(Wt.setValue(O,"toneMappingExposure",g.toneMappingExposure),Ue.needsLights&&Jt(wa,eh),ce&&G.fog===!0&&Le.refreshFogUniforms(wa,ce),Le.refreshMaterialUniforms(wa,G,q,N,m.state.transmissionRenderTarget[E.id]),Fu.upload(O,Xe(Ue),wa,Ze)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fu.upload(O,Xe(Ue),wa,Ze),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Wt.setValue(O,"center",B.center),Wt.setValue(O,"modelViewMatrix",B.modelViewMatrix),Wt.setValue(O,"normalMatrix",B.normalMatrix),Wt.setValue(O,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ei=G.uniformsGroups;for(let nh=0,_b=ei.length;nh<_b;nh++){const Hg=ei[nh];xt.update(Hg,_i),xt.bind(Hg,_i)}}return _i}function Jt(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Ut(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,z,k){je.get(E.texture).__webglTexture=z,je.get(E.depthTexture).__webglTexture=k;const G=je.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const k=je.get(E);k.__webglFramebuffer=z,k.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,k=0){A=E,w=z,S=k;let G=!0,B=null,ce=!1,ye=!1;if(E){const Me=je.get(E);if(Me.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(O.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)Ze.setupRenderTarget(E);else if(Me.__hasExternalTextures)Ze.rebindTextures(E,je.get(E.texture).__webglTexture,je.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const de=E.depthTexture;if(Me.__boundDepthTexture!==de){if(de!==null&&je.has(de)&&(E.width!==de.image.width||E.height!==de.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(E)}}const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Fe=je.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?B=Fe[z][k]:B=Fe[z],ce=!0):E.samples>0&&Ze.useMultisampledRTT(E)===!1?B=je.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?B=Fe[k]:B=Fe,M.copy(E.viewport),D.copy(E.scissor),Q=E.scissorTest}else M.copy(ue).multiplyScalar(q).floor(),D.copy(Se).multiplyScalar(q).floor(),Q=We;if(Oe.bindFramebuffer(O.FRAMEBUFFER,B)&&G&&Oe.drawBuffers(E,B),Oe.viewport(M),Oe.scissor(D),Oe.setScissorTest(Q),ce){const Me=je.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Me.__webglTexture,k)}else if(ye){const Me=je.get(E.texture),Ie=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.__webglTexture,k||0,Ie)}C=-1},this.readRenderTargetPixels=function(E,z,k,G,B,ce,ye){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=je.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Oe.bindFramebuffer(O.FRAMEBUFFER,we);try{const Me=E.texture,Ie=Me.format,Fe=Me.type;if(!_t.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-G&&k>=0&&k<=E.height-B&&O.readPixels(z,k,G,B,Ye.convert(Ie),Ye.convert(Fe),ce)}finally{const Me=A!==null?je.get(A).__webglFramebuffer:null;Oe.bindFramebuffer(O.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(E,z,k,G,B,ce,ye){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=je.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Oe.bindFramebuffer(O.FRAMEBUFFER,we);try{const Me=E.texture,Ie=Me.format,Fe=Me.type;if(!_t.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-G&&k>=0&&k<=E.height-B){const de=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,de),O.bufferData(O.PIXEL_PACK_BUFFER,ce.byteLength,O.STREAM_READ),O.readPixels(z,k,G,B,Ye.convert(Ie),Ye.convert(Fe),0),O.flush();const Ge=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await YC(O,Ge,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,de),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ce)}finally{O.deleteBuffer(de),O.deleteSync(Ge)}return ce}}finally{const Me=A!==null?je.get(A).__webglFramebuffer:null;Oe.bindFramebuffer(O.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(E,z=null,k=0){E.isTexture!==!0&&(Pl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-k),B=Math.floor(E.image.width*G),ce=Math.floor(E.image.height*G),ye=z!==null?z.x:0,we=z!==null?z.y:0;Ze.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,k,0,0,ye,we,B,ce),Oe.unbindTexture()},this.copyTextureToTexture=function(E,z,k=null,G=null,B=0){E.isTexture!==!0&&(Pl("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],z=arguments[2],B=arguments[3]||0,k=null);let ce,ye,we,Me,Ie,Fe;k!==null?(ce=k.max.x-k.min.x,ye=k.max.y-k.min.y,we=k.min.x,Me=k.min.y):(ce=E.image.width,ye=E.image.height,we=0,Me=0),G!==null?(Ie=G.x,Fe=G.y):(Ie=0,Fe=0);const de=Ye.convert(z.format),Ge=Ye.convert(z.type);Ze.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Tt=O.getParameter(O.UNPACK_ROW_LENGTH),St=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ht=O.getParameter(O.UNPACK_SKIP_PIXELS),lt=O.getParameter(O.UNPACK_SKIP_ROWS),Ue=O.getParameter(O.UNPACK_SKIP_IMAGES),en=E.isCompressedTexture?E.mipmaps[B]:E.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,en.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,en.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,we),O.pixelStorei(O.UNPACK_SKIP_ROWS,Me),E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,Ie,Fe,ce,ye,de,Ge,en.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,Ie,Fe,en.width,en.height,de,en.data):O.texSubImage2D(O.TEXTURE_2D,B,Ie,Fe,ce,ye,de,Ge,en),O.pixelStorei(O.UNPACK_ROW_LENGTH,Tt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ht),O.pixelStorei(O.UNPACK_SKIP_ROWS,lt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ue),B===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(E,z,k=null,G=null,B=0){E.isTexture!==!0&&(Pl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,E=arguments[2],z=arguments[3],B=arguments[4]||0);let ce,ye,we,Me,Ie,Fe,de,Ge,Tt;const St=E.isCompressedTexture?E.mipmaps[B]:E.image;k!==null?(ce=k.max.x-k.min.x,ye=k.max.y-k.min.y,we=k.max.z-k.min.z,Me=k.min.x,Ie=k.min.y,Fe=k.min.z):(ce=St.width,ye=St.height,we=St.depth,Me=0,Ie=0,Fe=0),G!==null?(de=G.x,Ge=G.y,Tt=G.z):(de=0,Ge=0,Tt=0);const ht=Ye.convert(z.format),lt=Ye.convert(z.type);let Ue;if(z.isData3DTexture)Ze.setTexture3D(z,0),Ue=O.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Ze.setTexture2DArray(z,0),Ue=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const en=O.getParameter(O.UNPACK_ROW_LENGTH),vt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),_i=O.getParameter(O.UNPACK_SKIP_PIXELS),cs=O.getParameter(O.UNPACK_SKIP_ROWS),Vn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,St.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Me),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ie),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Fe),E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Ue,B,de,Ge,Tt,ce,ye,we,ht,lt,St.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ue,B,de,Ge,Tt,ce,ye,we,ht,St.data):O.texSubImage3D(Ue,B,de,Ge,Tt,ce,ye,we,ht,lt,St),O.pixelStorei(O.UNPACK_ROW_LENGTH,en),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_i),O.pixelStorei(O.UNPACK_SKIP_ROWS,cs),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Vn),B===0&&z.generateMipmaps&&O.generateMipmap(Ue),Oe.unbindTexture()},this.initRenderTarget=function(E){je.get(E).__webglFramebuffer===void 0&&Ze.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ze.setTextureCube(E,0):E.isData3DTexture?Ze.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ze.setTexture2DArray(E,0):Ze.setTexture2D(E,0),Oe.unbindTexture()},this.resetState=function(){w=0,S=0,A=null,Oe.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Tg?"display-p3":"srgb",n.unpackColorSpace=gt.workingColorSpace===Kf?"display-p3":"srgb"}}class Pg extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class tP extends xn{constructor(e=null,n=1,i=1,a,r,s,o,l,c=zn,u=zn,f,h){super(null,s,o,l,c,u,a,r,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tb extends Ta{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bf=new L,Ef=new L,D0=new Ot,tl=new Qf,lu=new yc,pd=new L,L0=new L;class nP extends Qt{constructor(e=new gi,n=new tb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let a=1,r=n.count;a<r;a++)bf.fromBufferAttribute(n,a-1),Ef.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=bf.distanceTo(Ef);e.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lu.copy(i.boundingSphere),lu.applyMatrix4(a),lu.radius+=r,e.ray.intersectsSphere(lu)===!1)return;D0.copy(a).invert(),tl.copy(e.ray).applyMatrix4(D0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count);for(let y=p,m=_-1;y<m;y+=c){const d=u.getX(y),v=u.getX(y+1),g=cu(this,e,tl,l,d,v);g&&n.push(g)}if(this.isLineLoop){const y=u.getX(_-1),m=u.getX(p),d=cu(this,e,tl,l,y,m);d&&n.push(d)}}else{const p=Math.max(0,s.start),_=Math.min(h.count,s.start+s.count);for(let y=p,m=_-1;y<m;y+=c){const d=cu(this,e,tl,l,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=cu(this,e,tl,l,_-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function cu(t,e,n,i,a,r){const s=t.geometry.attributes.position;if(bf.fromBufferAttribute(s,a),Ef.fromBufferAttribute(s,r),n.distanceSqToSegment(bf,Ef,pd,L0)>i)return;pd.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(pd);if(!(l<e.near||l>e.far))return{distance:l,point:L0.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,object:t}}const P0=new L,U0=new L;class iP extends nP{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let a=0,r=n.count;a<r;a+=2)P0.fromBufferAttribute(n,a),U0.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+P0.distanceTo(U0);e.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}let aP=class extends Ta{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const N0=new Ot,em=new Qf,uu=new yc,fu=new L;class rP extends Qt{constructor(e=new gi,n=new aP){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uu.copy(i.boundingSphere),uu.applyMatrix4(a),uu.radius+=r,e.ray.intersectsSphere(uu)===!1)return;N0.copy(a).invert(),em.copy(e.ray).applyMatrix4(N0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let _=h,y=p;_<y;_++){const m=c.getX(_);fu.fromBufferAttribute(f,m),O0(fu,m,l,a,e,n,this)}}else{const h=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let _=h,y=p;_<y;_++)fu.fromBufferAttribute(f,_),O0(fu,_,l,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function O0(t,e,n,i,a,r,s){const o=em.distanceSqToPoint(t);if(o<n){const l=new L;em.closestPointToPoint(t,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class $U extends xn{constructor(e,n,i,a,r,s,o,l,c){super(e,n,i,a,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Aa{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,a=this.getPoint(0),r=0;n.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(a),n.push(r),a=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let a=0;const r=i.length;let s;n?s=n:s=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-s,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===s)return a/(r-1);const u=i[a],h=i[a+1]-u,p=(s-u)/h;return(a+p)/(r-1)}getTangent(e,n){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const s=this.getPoint(a),o=this.getPoint(r),l=n||(s.isVector2?new be:new L);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new L,a=[],r=[],s=[],o=new L,l=new Ot;for(let p=0;p<=e;p++){const _=p/e;a[p]=this.getTangentAt(_,new L)}r[0]=new L,s[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(a[0].x),f=Math.abs(a[0].y),h=Math.abs(a[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(an(a[p-1].dot(a[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}s[p].crossVectors(a[p],r[p])}if(n===!0){let p=Math.acos(an(r[0].dot(r[e]),-1,1));p/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(a[_],p*_)),s[_].crossVectors(a[_],r[_])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nb extends Aa{constructor(e=0,n=0,i=1,a=1,r=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=a,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new be){const i=n,a=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=a;for(;r>a;)r-=a;r<Number.EPSILON&&(s?r=0:r=a),this.aClockwise===!0&&!s&&(r===a?r=-a:r=r-a);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sP extends nb{constructor(e,n,i,a,r,s){super(e,n,i,i,a,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Ug(){let t=0,e=0,n=0,i=0;function a(r,s,o,l){t=r,e=o,n=-3*r+3*s-2*o-l,i=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){a(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,u,f){let h=(s-r)/c-(o-r)/(c+u)+(o-s)/u,p=(o-s)/u-(l-s)/(u+f)+(l-o)/f;h*=u,p*=u,a(s,o,h,p)},calc:function(r){const s=r*r,o=s*r;return t+e*r+n*s+i*o}}}const hu=new L,md=new Ug,gd=new Ug,_d=new Ug;class oP extends Aa{constructor(e=[],n=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=a}getPoint(e,n=new L){const i=n,a=this.points,r=a.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=a[(o-1)%r]:(hu.subVectors(a[0],a[1]).add(a[0]),c=hu);const f=a[o%r],h=a[(o+1)%r];if(this.closed||o+2<r?u=a[(o+2)%r]:(hu.subVectors(a[r-1],a[r-2]).add(a[r-1]),u=hu),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),md.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,y,m),gd.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,y,m),_d.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,y,m)}else this.curveType==="catmullrom"&&(md.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),gd.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),_d.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(md.calc(l),gd.calc(l),_d.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const a=e.points[n];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const a=this.points[n];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const a=e.points[n];this.points.push(new L().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function z0(t,e,n,i,a){const r=(i-e)*.5,s=(a-n)*.5,o=t*t,l=t*o;return(2*n-2*i+r+s)*l+(-3*n+3*i-2*r-s)*o+r*t+n}function lP(t,e){const n=1-t;return n*n*e}function cP(t,e){return 2*(1-t)*t*e}function uP(t,e){return t*t*e}function Ul(t,e,n,i){return lP(t,e)+cP(t,n)+uP(t,i)}function fP(t,e){const n=1-t;return n*n*n*e}function hP(t,e){const n=1-t;return 3*n*n*t*e}function dP(t,e){return 3*(1-t)*t*t*e}function pP(t,e){return t*t*t*e}function Nl(t,e,n,i,a){return fP(t,e)+hP(t,n)+dP(t,i)+pP(t,a)}class mP extends Aa{constructor(e=new be,n=new be,i=new be,a=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=a}getPoint(e,n=new be){const i=n,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Nl(e,a.x,r.x,s.x,o.x),Nl(e,a.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gP extends Aa{constructor(e=new L,n=new L,i=new L,a=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=a}getPoint(e,n=new L){const i=n,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Nl(e,a.x,r.x,s.x,o.x),Nl(e,a.y,r.y,s.y,o.y),Nl(e,a.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _P extends Aa{constructor(e=new be,n=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new be){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new be){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vP extends Aa{constructor(e=new L,n=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new L){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new L){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yP extends Aa{constructor(e=new be,n=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new be){const i=n,a=this.v0,r=this.v1,s=this.v2;return i.set(Ul(e,a.x,r.x,s.x),Ul(e,a.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ib extends Aa{constructor(e=new L,n=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new L){const i=n,a=this.v0,r=this.v1,s=this.v2;return i.set(Ul(e,a.x,r.x,s.x),Ul(e,a.y,r.y,s.y),Ul(e,a.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xP extends Aa{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new be){const i=n,a=this.points,r=(a.length-1)*e,s=Math.floor(r),o=r-s,l=a[s===0?s:s-1],c=a[s],u=a[s>a.length-2?a.length-1:s+1],f=a[s>a.length-3?a.length-1:s+2];return i.set(z0(o,l.x,c.x,u.x,f.x),z0(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const a=e.points[n];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const a=this.points[n];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const a=e.points[n];this.points.push(new be().fromArray(a))}return this}}var SP=Object.freeze({__proto__:null,ArcCurve:sP,CatmullRomCurve3:oP,CubicBezierCurve:mP,CubicBezierCurve3:gP,EllipseCurve:nb,LineCurve:_P,LineCurve3:vP,QuadraticBezierCurve:yP,QuadraticBezierCurve3:ib,SplineCurve:xP});class ab extends gi{constructor(e=new ib(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),n=64,i=1,a=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:a,closed:r};const s=e.computeFrenetFrames(n,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new L,l=new L,c=new be;let u=new L;const f=[],h=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new An(f,3)),this.setAttribute("normal",new An(h,3)),this.setAttribute("uv",new An(p,2));function y(){for(let g=0;g<n;g++)m(g);m(r===!1?n:0),v(),d()}function m(g){u=e.getPointAt(g/n,u);const x=s.normals[g],w=s.binormals[g];for(let S=0;S<=a;S++){const A=S/a*Math.PI*2,C=Math.sin(A),T=-Math.cos(A);l.x=T*x.x+C*w.x,l.y=T*x.y+C*w.y,l.z=T*x.z+C*w.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,f.push(o.x,o.y,o.z)}}function d(){for(let g=1;g<=n;g++)for(let x=1;x<=a;x++){const w=(a+1)*(g-1)+(x-1),S=(a+1)*g+(x-1),A=(a+1)*g+x,C=(a+1)*(g-1)+x;_.push(w,S,C),_.push(S,A,C)}}function v(){for(let g=0;g<=n;g++)for(let x=0;x<=a;x++)c.x=g/n,c.y=x/a,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ab(new SP[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class MP extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bP extends Ta{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JU extends bP{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class eN extends Ta{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tN extends Ta{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Tf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class EP{constructor(e,n,i){const a=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,r===!1&&a.onStart!==void 0&&a.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const TP=new EP;class Jf{constructor(e){this.manager=e!==void 0?e:TP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(a,r){i.load(e,a,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Jf.DEFAULT_MATERIAL_NAME="__DEFAULT";const aa={};class AP extends Error{constructor(e,n){super(e),this.response=n}}class nN extends Jf{constructor(e){super(e)}load(e,n,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Tf.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(aa[e]!==void 0){aa[e].push({onLoad:n,onProgress:i,onError:a});return}aa[e]=[],aa[e].push({onLoad:n,onProgress:i,onError:a});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=aa[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,_=p!==0;let y=0;const m=new ReadableStream({start(d){v();function v(){f.read().then(({done:g,value:x})=>{if(g)d.close();else{y+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let S=0,A=u.length;S<A;S++){const C=u[S];C.onProgress&&C.onProgress(w)}d.enqueue(x),v()}},g=>{d.error(g)})}}});return new Response(m)}else throw new AP(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Tf.add(e,c);const u=aa[e];delete aa[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=aa[e];if(u===void 0)throw this.manager.itemError(e),c;delete aa[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wP extends Jf{constructor(e){super(e)}load(e,n,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Tf.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){n&&n(s),r.manager.itemEnd(e)},0),s;const o=nc("img");function l(){u(),Tf.add(e,this),n&&n(this),r.manager.itemEnd(e)}function c(f){u(),a&&a(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class iN extends Jf{constructor(e){super(e)}load(e,n,i,a){const r=new xn,s=new wP(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,a),r}}class Ng extends Qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const vd=new Ot,I0=new L,F0=new L;class rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rg,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;I0.setFromMatrixPosition(e.matrixWorld),n.position.copy(I0),F0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(F0),n.updateMatrixWorld(),vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class CP extends rb{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Eo*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,r=e.distance||n.far;(i!==n.fov||a!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=a,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class RP extends Ng{constructor(e,n,i=0,a=Math.PI/3,r=0,s=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=i,this.angle=a,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new CP}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class DP extends rb{constructor(){super(new Dg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aN extends Ng{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new DP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class LP extends Ng{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Og{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=B0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=B0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function B0(){return(typeof performance>"u"?Date:performance).now()}class H0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(an(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class PP extends iP{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new gi;a.setAttribute("position",new An(n,3)),a.setAttribute("color",new An(i,3));const r=new tb({vertexColors:!0,toneMapped:!1});super(a,r),this.type="AxesHelper"}setColors(e,n,i){const a=new Ne,r=this.geometry.attributes.color.array;return a.set(e),a.toArray(r,0),a.toArray(r,3),a.set(n),a.toArray(r,6),a.toArray(r,9),a.set(i),a.toArray(r,12),a.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class UP extends os{constructor(e,n){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_g}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_g);var Ol=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return this.None(t)},Out:function(t){return this.None(t)},InOut:function(t){return this.None(t)}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-Ol.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?Ol.Bounce.In(t*2)*.5:Ol.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),hl=function(){return performance.now()},NP=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(n){return e._tweens[n]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,n){e===void 0&&(e=hl()),n===void 0&&(n=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var a=0;a<i.length;a++){var r=this._tweens[i[a]],s=!n;r&&r.update(e,s)===!1&&!n&&delete this._tweens[i[a]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),Ks={Linear:function(t,e){var n=t.length-1,i=n*e,a=Math.floor(i),r=Ks.Utils.Linear;return e<0?r(t[0],t[1],i):e>1?r(t[n],t[n-1],n-i):r(t[a],t[a+1>n?n:a+1],i-a)},Bezier:function(t,e){for(var n=0,i=t.length-1,a=Math.pow,r=Ks.Utils.Bernstein,s=0;s<=i;s++)n+=a(1-e,i-s)*a(e,s)*t[s]*r(i,s);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,a=Math.floor(i),r=Ks.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(a=Math.floor(i=n*(1+e))),r(t[(a-1+n)%n],t[a],t[(a+1)%n],t[(a+2)%n],i-a)):e<0?t[0]-(r(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(r(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):r(t[a?a-1:0],t[a],t[n<a+1?n:a+1],t[n<a+2?n:a+2],i-a)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=Ks.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,a){var r=(n-t)*.5,s=(i-e)*.5,o=a*a,l=a*o;return(2*e-2*n+r+s)*l+(-3*e+3*n-2*r-s)*o+r*a+e}}},OP=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),tm=new NP,rN=function(){function t(e,n){n===void 0&&(n=tm),this._object=e,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Ol.Linear.None,this._interpolationFunction=Ks.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=OP.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(e,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=n,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,n){if(e===void 0&&(e=hl()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var a={};for(var r in this._valuesEnd)a[r]=this._valuesEnd[r];this._valuesEnd=a}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,n,i,a,r){for(var s in i){var o=e[s],l=Array.isArray(o),c=l?"array":typeof o,u=!l&&Array.isArray(i[s]);if(!(c==="undefined"||c==="function")){if(u){var f=i[s];if(f.length===0)continue;for(var h=[o],p=0,_=f.length;p<_;p+=1){var y=this._handleRelativeValue(o,f[p]);if(isNaN(y)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(y)}u&&(i[s]=h)}if((c==="object"||l)&&o&&!u){n[s]=l?[]:{};var m=o;for(var d in m)n[s][d]=m[d];a[s]=l?[]:{};var f=i[s];if(!this._isDynamic){var v={};for(var d in f)v[d]=f[d];i[s]=f=v}this._setupProperties(m,n[s],f,a[s],r)}else(typeof n[s]>"u"||r)&&(n[s]=o),l||(n[s]*=1),u?a[s]=i[s].slice().reverse():a[s]=n[s]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=hl()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=hl()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,n=this._chainedTweens.length;e<n;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=tm),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=Ol.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=Ks.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,n){if(e===void 0&&(e=hl()),n===void 0&&(n=!0),this._isPaused)return!0;var i,a,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>r)return!1;n&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),a=(e-this._startTime)/this._duration,a=this._duration===0||a>1?1:a;var s=this._easingFunction(a);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,s),this._onUpdateCallback&&this._onUpdateCallback(this._object,a),a===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,l=this._chainedTweens.length;o<l;o++)this._chainedTweens[o].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,n,i,a){for(var r in i)if(n[r]!==void 0){var s=n[r]||0,o=i[r],l=Array.isArray(e[r]),c=Array.isArray(o),u=!l&&c;u?e[r]=this._interpolationFunction(o,a):typeof o=="object"&&o?this._updateProperties(e[r],s,o,a):(o=this._handleRelativeValue(s,o),typeof o=="number"&&(e[r]=s+(o-s)*a))}},t.prototype._handleRelativeValue=function(e,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?e+parseFloat(n):parseFloat(n)},t.prototype._swapEndStartRepeatValues=function(e){var n=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=n},t}(),Xi=tm;Xi.getAll.bind(Xi);Xi.removeAll.bind(Xi);Xi.add.bind(Xi);Xi.remove.bind(Xi);var zP=Xi.update.bind(Xi);const V0={type:"change"},zg={type:"start"},sb={type:"end"},du=new Qf,k0=new ka,IP=Math.cos(70*XC.DEG2RAD),tn=new L,Un=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yd=1e-6;class FP extends UP{constructor(e,n=null){super(e,n),this.state=Et.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:so.ROTATE,MIDDLE:so.DOLLY,RIGHT:so.PAN},this.touches={ONE:qs.ROTATE,TWO:qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new $r,this._lastTargetPosition=new L,this._quat=new $r().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new H0,this._sphericalDelta=new H0,this._scale=1,this._panOffset=new L,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new L,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HP.bind(this),this._onPointerDown=BP.bind(this),this._onPointerUp=VP.bind(this),this._onContextMenu=qP.bind(this),this._onMouseWheel=jP.bind(this),this._onKeyDown=XP.bind(this),this._onTouchStart=WP.bind(this),this._onTouchMove=YP.bind(this),this._onMouseDown=kP.bind(this),this._onMouseMove=GP.bind(this),this._interceptControlDown=ZP.bind(this),this._interceptControlUp=KP.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(V0),this.update(),this.state=Et.NONE}update(e=null){const n=this.object.position;tn.copy(n).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=Un:i>Math.PI&&(i-=Un),a<-Math.PI?a+=Un:a>Math.PI&&(a-=Un),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),n.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=tn.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(du.origin.copy(this.object.position),du.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(du.direction))<IP?this.object.lookAt(this.target):(k0.setFromNormalAndCoplanarPoint(this.object.up,this.target),du.intersectPlane(k0,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>yd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yd||this._lastTargetPosition.distanceToSquared(this.target)>yd?(this.dispatchEvent(V0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){tn.setFromMatrixColumn(n,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,n){this.screenSpacePanning===!0?tn.setFromMatrixColumn(n,1):(tn.setFromMatrixColumn(n,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;tn.copy(a).sub(this.target);let r=tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,r=n-i.top,s=i.width,o=i.height;this._mouse.x=a/s*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/n.clientHeight),this._rotateUp(Un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,a=e.pageY-n.y,r=Math.sqrt(i*i+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/n.clientHeight),this._rotateUp(Un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,a=e.pageY-n.y,r=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new be,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function BP(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function HP(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function VP(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sb),this.state=Et.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function kP(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case so.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Et.DOLLY;break;case so.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}break;case so.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(zg)}function GP(t){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function jP(t){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(t.preventDefault(),this.dispatchEvent(zg),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(sb))}function XP(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function WP(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Et.TOUCH_ROTATE;break;case qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Et.TOUCH_DOLLY_PAN;break;case qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(zg)}function YP(t){switch(this._trackPointer(t),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Et.NONE}}function qP(t){this.enabled!==!1&&t.preventDefault()}function ZP(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KP(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const QP={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class xc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $P=new Dg(-1,1,1,-1,0,1);class JP extends gi{constructor(){super(),this.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new An([0,2,0,0,2,0],2))}}const eU=new JP;class ob{constructor(e){this._mesh=new Zn(eU,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$P)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class tU extends xc{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Bn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cg.clone(e.uniforms),this.material=new Bn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ob(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class G0 extends xc{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const a=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),r.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(a.EQUAL,1,4294967295),r.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),r.buffers.stencil.setLocked(!0)}}class nU extends xc{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class iU{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new be);this._width=i.width,this._height=i.height,n=new hr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Uo}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new tU(QP),this.copyPass.material.blending=_a,this.clock=new Og}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let a=0,r=this.passes.length;a<r;a++){const s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}G0!==void 0&&(s instanceof G0?i=!0:s instanceof nU&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(i,a),this.renderTarget2.setSize(i,a);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class aU extends xc{constructor(e,n,i=null,a=null,r=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,n,i){const a=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=a}}const rU={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class sU extends xc{constructor(){super();const e=rU;this.uniforms=Cg.clone(e.uniforms),this.material=new MP({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ob(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xM?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===SM?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===MM?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bM?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===EM?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===TM&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function oU(t){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=t,document.head.appendChild(e),t}}function Qs(t,e){var n=t.__state.conversionName.toString(),i=Math.round(t.r),a=Math.round(t.g),r=Math.round(t.b),s=t.a,o=Math.round(t.h),l=t.s.toFixed(1),c=t.v.toFixed(1);if(e||n==="THREE_CHAR_HEX"||n==="SIX_CHAR_HEX"){for(var u=t.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(n==="CSS_RGB")return"rgb("+i+","+a+","+r+")";if(n==="CSS_RGBA")return"rgba("+i+","+a+","+r+","+s+")";if(n==="HEX")return"0x"+t.hex.toString(16);if(n==="RGB_ARRAY")return"["+i+","+a+","+r+"]";if(n==="RGBA_ARRAY")return"["+i+","+a+","+r+","+s+"]";if(n==="RGB_OBJ")return"{r:"+i+",g:"+a+",b:"+r+"}";if(n==="RGBA_OBJ")return"{r:"+i+",g:"+a+",b:"+r+",a:"+s+"}";if(n==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(n==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+s+"}"}return"unknown format"}var j0=Array.prototype.forEach,nl=Array.prototype.slice,ie={BREAK:{},extend:function(e){return this.each(nl.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(a){this.isUndefined(n[a])||(e[a]=n[a])}).bind(this))},this),e},defaults:function(e){return this.each(nl.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(a){this.isUndefined(e[a])&&(e[a]=n[a])}).bind(this))},this),e},compose:function(){var e=nl.call(arguments);return function(){for(var n=nl.call(arguments),i=e.length-1;i>=0;i--)n=[e[i].apply(this,n)];return n[0]}},each:function(e,n,i){if(e){if(j0&&e.forEach&&e.forEach===j0)e.forEach(n,i);else if(e.length===e.length+0){var a=void 0,r=void 0;for(a=0,r=e.length;a<r;a++)if(a in e&&n.call(i,e[a],a)===this.BREAK)return}else for(var s in e)if(n.call(i,e[s],s)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,n,i){var a=void 0;return function(){var r=this,s=arguments;function o(){a=null,i||e.apply(r,s)}var l=i||!a;clearTimeout(a),a=setTimeout(o,n),l&&e.apply(r,s)}},toArray:function(e){return e.toArray?e.toArray():nl.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(t){function e(n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return isNaN(t)}),isArray:Array.isArray||function(t){return t.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},lU=[{litmus:ie.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString()+n[1].toString()+n[2].toString()+n[2].toString()+n[3].toString()+n[3].toString(),0)}},write:Qs},SIX_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9]{6})$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString(),0)}},write:Qs},CSS_RGB:{read:function(e){var n=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3])}},write:Qs},CSS_RGBA:{read:function(e){var n=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(n[4])}},write:Qs}}},{litmus:ie.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:ie.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:ie.isObject,conversions:{RGBA_OBJ:{read:function(e){return ie.isNumber(e.r)&&ie.isNumber(e.g)&&ie.isNumber(e.b)&&ie.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return ie.isNumber(e.r)&&ie.isNumber(e.g)&&ie.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return ie.isNumber(e.h)&&ie.isNumber(e.s)&&ie.isNumber(e.v)&&ie.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return ie.isNumber(e.h)&&ie.isNumber(e.s)&&ie.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],il=void 0,pu=void 0,nm=function(){pu=!1;var e=arguments.length>1?ie.toArray(arguments):arguments[0];return ie.each(lU,function(n){if(n.litmus(e))return ie.each(n.conversions,function(i,a){if(il=i.read(e),pu===!1&&il!==!1)return pu=il,il.conversionName=a,il.conversion=i,ie.BREAK}),ie.BREAK}),pu},X0=void 0,Af={hsv_to_rgb:function(e,n,i){var a=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),s=i*(1-n),o=i*(1-r*n),l=i*(1-(1-r)*n),c=[[i,l,s],[o,i,s],[s,i,l],[s,o,i],[l,s,i],[i,s,o]][a];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,n,i){var a=Math.min(e,n,i),r=Math.max(e,n,i),s=r-a,o=void 0,l=void 0;if(r!==0)l=s/r;else return{h:NaN,s:0,v:0};return e===r?o=(n-i)/s:n===r?o=2+(i-e)/s:o=4+(e-n)/s,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:r/255}},rgb_to_hex:function(e,n,i){var a=this.hex_with_component(0,2,e);return a=this.hex_with_component(a,1,n),a=this.hex_with_component(a,0,i),a},component_from_hex:function(e,n){return e>>n*8&255},hex_with_component:function(e,n,i){return i<<(X0=n*8)|e&~(255<<X0)}},cU=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Di=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Li=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),dr=function t(e,n,i){e===null&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,n);if(a===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:t(r,n,i)}else{if("value"in a)return a.value;var s=a.get;return s===void 0?void 0:s.call(i)}},vr=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},yr=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},mn=function(){function t(){if(Di(this,t),this.__state=nm.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Li(t,[{key:"toString",value:function(){return Qs(this)}},{key:"toHexString",value:function(){return Qs(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),t}();function Ig(t,e,n){Object.defineProperty(t,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(mn.recalculateRGB(this,e,n),this.__state[e])},set:function(a){this.__state.space!=="RGB"&&(mn.recalculateRGB(this,e,n),this.__state.space="RGB"),this.__state[e]=a}})}function Fg(t,e){Object.defineProperty(t,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(mn.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(mn.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}mn.recalculateRGB=function(t,e,n){if(t.__state.space==="HEX")t.__state[e]=Af.component_from_hex(t.__state.hex,n);else if(t.__state.space==="HSV")ie.extend(t.__state,Af.hsv_to_rgb(t.__state.h,t.__state.s,t.__state.v));else throw new Error("Corrupted color state")};mn.recalculateHSV=function(t){var e=Af.rgb_to_hsv(t.r,t.g,t.b);ie.extend(t.__state,{s:e.s,v:e.v}),ie.isNaN(e.h)?ie.isUndefined(t.__state.h)&&(t.__state.h=0):t.__state.h=e.h};mn.COMPONENTS=["r","g","b","h","s","v","hex","a"];Ig(mn.prototype,"r",2);Ig(mn.prototype,"g",1);Ig(mn.prototype,"b",0);Fg(mn.prototype,"h");Fg(mn.prototype,"s");Fg(mn.prototype,"v");Object.defineProperty(mn.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(mn.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Af.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var ls=function(){function t(e,n){Di(this,t),this.initialValue=e[n],this.domElement=document.createElement("div"),this.object=e,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return Li(t,[{key:"onChange",value:function(n){return this.__onChange=n,this}},{key:"onFinishChange",value:function(n){return this.__onFinishChange=n,this}},{key:"setValue",value:function(n){return this.object[this.property]=n,this.__onChange&&this.__onChange.call(this,n),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),t}(),uU={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},lb={};ie.each(uU,function(t,e){ie.each(t,function(n){lb[n]=e})});var fU=/(\d+(\.\d+)?)px/;function Pi(t){if(t==="0"||ie.isUndefined(t))return 0;var e=t.match(fU);return ie.isNull(e)?0:parseFloat(e[1])}var X={makeSelectable:function(e,n){e===void 0||e.style===void 0||(e.onselectstart=n?function(){return!1}:function(){},e.style.MozUserSelect=n?"auto":"none",e.style.KhtmlUserSelect=n?"auto":"none",e.unselectable=n?"on":"off")},makeFullscreen:function(e,n,i){var a=i,r=n;ie.isUndefined(r)&&(r=!0),ie.isUndefined(a)&&(a=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),a&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,n,i,a){var r=i||{},s=lb[n];if(!s)throw new Error("Event type "+n+" not supported.");var o=document.createEvent(s);switch(s){case"MouseEvents":{var l=r.x||r.clientX||0,c=r.y||r.clientY||0;o.initMouseEvent(n,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;ie.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(n,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{o.initEvent(n,r.bubbles||!1,r.cancelable||!0);break}}ie.defaults(o,a),e.dispatchEvent(o)},bind:function(e,n,i,a){var r=a||!1;return e.addEventListener?e.addEventListener(n,i,r):e.attachEvent&&e.attachEvent("on"+n,i),X},unbind:function(e,n,i,a){var r=a||!1;return e.removeEventListener?e.removeEventListener(n,i,r):e.detachEvent&&e.detachEvent("on"+n,i),X},addClass:function(e,n){if(e.className===void 0)e.className=n;else if(e.className!==n){var i=e.className.split(/ +/);i.indexOf(n)===-1&&(i.push(n),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return X},removeClass:function(e,n){if(n)if(e.className===n)e.removeAttribute("class");else{var i=e.className.split(/ +/),a=i.indexOf(n);a!==-1&&(i.splice(a,1),e.className=i.join(" "))}else e.className=void 0;return X},hasClass:function(e,n){return new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var n=getComputedStyle(e);return Pi(n["border-left-width"])+Pi(n["border-right-width"])+Pi(n["padding-left"])+Pi(n["padding-right"])+Pi(n.width)},getHeight:function(e){var n=getComputedStyle(e);return Pi(n["border-top-width"])+Pi(n["border-bottom-width"])+Pi(n["padding-top"])+Pi(n["padding-bottom"])+Pi(n.height)},getOffset:function(e){var n=e,i={left:0,top:0};if(n.offsetParent)do i.left+=n.offsetLeft,i.top+=n.offsetTop,n=n.offsetParent;while(n);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},cb=function(t){vr(e,t);function e(n,i){Di(this,e);var a=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),r=a;a.__prev=a.getValue(),a.__checkbox=document.createElement("input"),a.__checkbox.setAttribute("type","checkbox");function s(){r.setValue(!r.__prev)}return X.bind(a.__checkbox,"change",s,!1),a.domElement.appendChild(a.__checkbox),a.updateDisplay(),a}return Li(e,[{key:"setValue",value:function(i){var a=dr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),a}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),dr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ls),hU=function(t){vr(e,t);function e(n,i,a){Di(this,e);var r=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=a,o=r;if(r.__select=document.createElement("select"),ie.isArray(s)){var l={};ie.each(s,function(c){l[c]=c}),s=l}return ie.each(s,function(c,u){var f=document.createElement("option");f.innerHTML=u,f.setAttribute("value",c),o.__select.appendChild(f)}),r.updateDisplay(),X.bind(r.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),r.domElement.appendChild(r.__select),r}return Li(e,[{key:"setValue",value:function(i){var a=dr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),a}},{key:"updateDisplay",value:function(){return X.isActive(this.__select)?this:(this.__select.value=this.getValue(),dr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(ls),dU=function(t){vr(e,t);function e(n,i){Di(this,e);var a=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),r=a;function s(){r.setValue(r.__input.value)}function o(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),X.bind(a.__input,"keyup",s),X.bind(a.__input,"change",s),X.bind(a.__input,"blur",o),X.bind(a.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return Li(e,[{key:"updateDisplay",value:function(){return X.isActive(this.__input)||(this.__input.value=this.getValue()),dr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ls);function W0(t){var e=t.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var ub=function(t){vr(e,t);function e(n,i,a){Di(this,e);var r=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=a||{};return r.__min=s.min,r.__max=s.max,r.__step=s.step,ie.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=W0(r.__impliedStep),r}return Li(e,[{key:"setValue",value:function(i){var a=i;return this.__min!==void 0&&a<this.__min?a=this.__min:this.__max!==void 0&&a>this.__max&&(a=this.__max),this.__step!==void 0&&a%this.__step!==0&&(a=Math.round(a/this.__step)*this.__step),dr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,a)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=W0(i),this}}]),e}(ls);function pU(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n}var wf=function(t){vr(e,t);function e(n,i,a){Di(this,e);var r=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,a));r.__truncationSuspended=!1;var s=r,o=void 0;function l(){var _=parseFloat(s.__input.value);ie.isNaN(_)||s.setValue(_)}function c(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}function u(){c()}function f(_){var y=o-_.clientY;s.setValue(s.getValue()+y*s.__impliedStep),o=_.clientY}function h(){X.unbind(window,"mousemove",f),X.unbind(window,"mouseup",h),c()}function p(_){X.bind(window,"mousemove",f),X.bind(window,"mouseup",h),o=_.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),X.bind(r.__input,"change",l),X.bind(r.__input,"blur",u),X.bind(r.__input,"mousedown",p),X.bind(r.__input,"keydown",function(_){_.keyCode===13&&(s.__truncationSuspended=!0,this.blur(),s.__truncationSuspended=!1,c())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Li(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():pU(this.getValue(),this.__precision),dr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ub);function Y0(t,e,n,i,a){return i+(a-i)*((t-e)/(n-e))}var im=function(t){vr(e,t);function e(n,i,a,r,s){Di(this,e);var o=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,{min:a,max:r,step:s})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),X.bind(o.__background,"mousedown",c),X.bind(o.__background,"touchstart",h),X.addClass(o.__background,"slider"),X.addClass(o.__foreground,"slider-fg");function c(y){document.activeElement.blur(),X.bind(window,"mousemove",u),X.bind(window,"mouseup",f),u(y)}function u(y){y.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(Y0(y.clientX,m.left,m.right,l.__min,l.__max)),!1}function f(){X.unbind(window,"mousemove",u),X.unbind(window,"mouseup",f),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(y){y.touches.length===1&&(X.bind(window,"touchmove",p),X.bind(window,"touchend",_),p(y))}function p(y){var m=y.touches[0].clientX,d=l.__background.getBoundingClientRect();l.setValue(Y0(m,d.left,d.right,l.__min,l.__max))}function _(){X.unbind(window,"touchmove",p),X.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Li(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",dr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ub),fb=function(t){vr(e,t);function e(n,i,a){Di(this,e);var r=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=r;return r.__button=document.createElement("div"),r.__button.innerHTML=a===void 0?"Fire":a,X.bind(r.__button,"click",function(o){return o.preventDefault(),s.fire(),!1}),X.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return Li(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(ls),am=function(t){vr(e,t);function e(n,i){Di(this,e);var a=yr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));a.__color=new mn(a.getValue()),a.__temp=new mn(0);var r=a;a.domElement=document.createElement("div"),X.makeSelectable(a.domElement,!1),a.__selector=document.createElement("div"),a.__selector.className="selector",a.__saturation_field=document.createElement("div"),a.__saturation_field.className="saturation-field",a.__field_knob=document.createElement("div"),a.__field_knob.className="field-knob",a.__field_knob_border="2px solid ",a.__hue_knob=document.createElement("div"),a.__hue_knob.className="hue-knob",a.__hue_field=document.createElement("div"),a.__hue_field.className="hue-field",a.__input=document.createElement("input"),a.__input.type="text",a.__input_textShadow="0 1px 1px ",X.bind(a.__input,"keydown",function(y){y.keyCode===13&&f.call(this)}),X.bind(a.__input,"blur",f),X.bind(a.__selector,"mousedown",function(){X.addClass(this,"drag").bind(window,"mouseup",function(){X.removeClass(r.__selector,"drag")})}),X.bind(a.__selector,"touchstart",function(){X.addClass(this,"drag").bind(window,"touchend",function(){X.removeClass(r.__selector,"drag")})});var s=document.createElement("div");ie.extend(a.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),ie.extend(a.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:a.__field_knob_border+(a.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),ie.extend(a.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),ie.extend(a.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),ie.extend(s.style,{width:"100%",height:"100%",background:"none"}),q0(s,"top","rgba(0,0,0,0)","#000"),ie.extend(a.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),gU(a.__hue_field),ie.extend(a.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:a.__input_textShadow+"rgba(0,0,0,0.7)"}),X.bind(a.__saturation_field,"mousedown",o),X.bind(a.__saturation_field,"touchstart",o),X.bind(a.__field_knob,"mousedown",o),X.bind(a.__field_knob,"touchstart",o),X.bind(a.__hue_field,"mousedown",l),X.bind(a.__hue_field,"touchstart",l);function o(y){p(y),X.bind(window,"mousemove",p),X.bind(window,"touchmove",p),X.bind(window,"mouseup",c),X.bind(window,"touchend",c)}function l(y){_(y),X.bind(window,"mousemove",_),X.bind(window,"touchmove",_),X.bind(window,"mouseup",u),X.bind(window,"touchend",u)}function c(){X.unbind(window,"mousemove",p),X.unbind(window,"touchmove",p),X.unbind(window,"mouseup",c),X.unbind(window,"touchend",c),h()}function u(){X.unbind(window,"mousemove",_),X.unbind(window,"touchmove",_),X.unbind(window,"mouseup",u),X.unbind(window,"touchend",u),h()}function f(){var y=nm(this.value);y!==!1?(r.__color.__state=y,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function h(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}a.__saturation_field.appendChild(s),a.__selector.appendChild(a.__field_knob),a.__selector.appendChild(a.__saturation_field),a.__selector.appendChild(a.__hue_field),a.__hue_field.appendChild(a.__hue_knob),a.domElement.appendChild(a.__input),a.domElement.appendChild(a.__selector),a.updateDisplay();function p(y){y.type.indexOf("touch")===-1&&y.preventDefault();var m=r.__saturation_field.getBoundingClientRect(),d=y.touches&&y.touches[0]||y,v=d.clientX,g=d.clientY,x=(v-m.left)/(m.right-m.left),w=1-(g-m.top)/(m.bottom-m.top);return w>1?w=1:w<0&&(w=0),x>1?x=1:x<0&&(x=0),r.__color.v=w,r.__color.s=x,r.setValue(r.__color.toOriginal()),!1}function _(y){y.type.indexOf("touch")===-1&&y.preventDefault();var m=r.__hue_field.getBoundingClientRect(),d=y.touches&&y.touches[0]||y,v=d.clientY,g=1-(v-m.top)/(m.bottom-m.top);return g>1?g=1:g<0&&(g=0),r.__color.h=g*360,r.setValue(r.__color.toOriginal()),!1}return a}return Li(e,[{key:"updateDisplay",value:function(){var i=nm(this.getValue());if(i!==!1){var a=!1;ie.each(mn.COMPONENTS,function(o){if(!ie.isUndefined(i[o])&&!ie.isUndefined(this.__color.__state[o])&&i[o]!==this.__color.__state[o])return a=!0,{}},this),a&&ie.extend(this.__color.__state,i)}ie.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,s=255-r;ie.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,q0(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),ie.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+s+","+s+","+s+",.7)"})}}]),e}(ls),mU=["-moz-","-o-","-webkit-","-ms-",""];function q0(t,e,n,i){t.style.background="",ie.each(mU,function(a){t.style.cssText+="background: "+a+"linear-gradient("+e+", "+n+" 0%, "+i+" 100%); "})}function gU(t){t.style.background="",t.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",t.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var _U={load:function(e,n){var i=n||document,a=i.createElement("link");a.type="text/css",a.rel="stylesheet",a.href=e,i.getElementsByTagName("head")[0].appendChild(a)},inject:function(e,n){var i=n||document,a=document.createElement("style");a.type="text/css",a.innerHTML=e;var r=i.getElementsByTagName("head")[0];try{r.appendChild(a)}catch{}}},vU=`<div id="dg-save" class="dg dialogue">

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

</div>`,yU=function(e,n){var i=e[n];return ie.isArray(arguments[2])||ie.isObject(arguments[2])?new hU(e,n,arguments[2]):ie.isNumber(i)?ie.isNumber(arguments[2])&&ie.isNumber(arguments[3])?ie.isNumber(arguments[4])?new im(e,n,arguments[2],arguments[3],arguments[4]):new im(e,n,arguments[2],arguments[3]):ie.isNumber(arguments[4])?new wf(e,n,{min:arguments[2],max:arguments[3],step:arguments[4]}):new wf(e,n,{min:arguments[2],max:arguments[3]}):ie.isString(i)?new dU(e,n):ie.isFunction(i)?new fb(e,n,""):ie.isBoolean(i)?new cb(e,n):null};function xU(t){setTimeout(t,1e3/60)}var SU=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||xU,MU=function(){function t(){Di(this,t),this.backgroundElement=document.createElement("div"),ie.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),X.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),ie.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;X.bind(this.backgroundElement,"click",function(){e.hide()})}return Li(t,[{key:"show",value:function(){var n=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),ie.defer(function(){n.backgroundElement.style.opacity=1,n.domElement.style.opacity=1,n.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var n=this,i=function a(){n.domElement.style.display="none",n.backgroundElement.style.display="none",X.unbind(n.domElement,"webkitTransitionEnd",a),X.unbind(n.domElement,"transitionend",a),X.unbind(n.domElement,"oTransitionEnd",a)};X.bind(this.domElement,"webkitTransitionEnd",i),X.bind(this.domElement,"transitionend",i),X.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-X.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-X.getHeight(this.domElement)/2+"px"}}]),t}(),bU=oU(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);_U.inject(bU);var Z0="dg",K0=72,Q0=20,ic="Default",dl=function(){try{return!!window.localStorage}catch{return!1}}(),zl=void 0,$0=!0,Os=void 0,xd=!1,hb=[],Dt=function t(e){var n=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),X.addClass(this.domElement,Z0),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=ie.defaults(i,{closeOnTop:!1,autoPlace:!0,width:t.DEFAULT_WIDTH}),i=ie.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),ie.isUndefined(i.load)?i.load={preset:ic}:i.preset&&(i.load.preset=i.preset),ie.isUndefined(i.parent)&&i.hideable&&hb.push(this),i.resizable=ie.isUndefined(i.parent)&&i.resizable,i.autoPlace&&ie.isUndefined(i.scrollable)&&(i.scrollable=!0);var a=dl&&localStorage.getItem(zs(this,"isLocal"))==="true",r=void 0,s=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:i.load.preset},set:function(h){n.parent?n.getRoot().preset=h:i.load.preset=h,wU(this),n.revert()}},width:{get:function(){return i.width},set:function(h){i.width=h,om(n,h)}},name:{get:function(){return i.name},set:function(h){i.name=h,s&&(s.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(h){i.closed=h,i.closed?X.addClass(n.__ul,t.CLASS_CLOSED):X.removeClass(n.__ul,t.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=h?t.TEXT_OPEN:t.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return a},set:function(h){dl&&(a=h,h?X.bind(window,"unload",r):X.unbind(window,"unload",r),localStorage.setItem(zs(n,"isLocal"),h))}}}),ie.isUndefined(i.parent)){if(this.closed=i.closed||!1,X.addClass(this.domElement,t.CLASS_MAIN),X.makeSelectable(this.domElement,!1),dl&&a){n.useLocalStorage=!0;var o=localStorage.getItem(zs(this,"gui"));o&&(i.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=t.TEXT_CLOSED,X.addClass(this.__closeButton,t.CLASS_CLOSE_BUTTON),i.closeOnTop?(X.addClass(this.__closeButton,t.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(X.addClass(this.__closeButton,t.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),X.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);X.addClass(l,"controller-name"),s=Bg(n,l);var c=function(h){return h.preventDefault(),n.closed=!n.closed,!1};X.addClass(this.__ul,t.CLASS_CLOSED),X.addClass(s,"title"),X.bind(s,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(ie.isUndefined(i.parent)&&($0&&(Os=document.createElement("div"),X.addClass(Os,Z0),X.addClass(Os,t.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Os),$0=!1),Os.appendChild(this.domElement),X.addClass(this.domElement,t.CLASS_AUTO_PLACE)),this.parent||om(n,i.width)),this.__resizeHandler=function(){n.onResizeDebounced()},X.bind(window,"resize",this.__resizeHandler),X.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),X.bind(this.__ul,"transitionend",this.__resizeHandler),X.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&AU(this),r=function(){dl&&localStorage.getItem(zs(n,"isLocal"))==="true"&&localStorage.setItem(zs(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function u(){var f=n.getRoot();f.width+=1,ie.defer(function(){f.width-=1})}i.parent||u()};Dt.toggleHide=function(){xd=!xd,ie.each(hb,function(t){t.domElement.style.display=xd?"none":""})};Dt.CLASS_AUTO_PLACE="a";Dt.CLASS_AUTO_PLACE_CONTAINER="ac";Dt.CLASS_MAIN="main";Dt.CLASS_CONTROLLER_ROW="cr";Dt.CLASS_TOO_TALL="taller-than-window";Dt.CLASS_CLOSED="closed";Dt.CLASS_CLOSE_BUTTON="close-button";Dt.CLASS_CLOSE_TOP="close-top";Dt.CLASS_CLOSE_BOTTOM="close-bottom";Dt.CLASS_DRAG="drag";Dt.DEFAULT_WIDTH=245;Dt.TEXT_CLOSED="Close Controls";Dt.TEXT_OPEN="Open Controls";Dt._keydownHandler=function(t){document.activeElement.type!=="text"&&(t.which===K0||t.keyCode===K0)&&Dt.toggleHide()};X.bind(window,"keydown",Dt._keydownHandler,!1);ie.extend(Dt.prototype,{add:function(e,n){return Il(this,e,n,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,n){return Il(this,e,n,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var n=this;ie.defer(function(){n.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Os.removeChild(this.domElement);var e=this;ie.each(this.__folders,function(n){e.removeFolder(n)}),X.unbind(window,"keydown",Dt._keydownHandler,!1),J0(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var n={name:e,parent:this};n.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(n.closed=this.load.folders[e].closed,n.load=this.load.folders[e]);var i=new Dt(n);this.__folders[e]=i;var a=Bg(this,i.domElement);return X.addClass(a,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],J0(e);var n=this;ie.each(e.__folders,function(i){e.removeFolder(i)}),ie.defer(function(){n.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var n=X.getOffset(e.__ul).top,i=0;ie.each(e.__ul.childNodes,function(a){e.autoPlace&&a===e.__save_row||(i+=X.getHeight(a))}),window.innerHeight-n-Q0<i?(X.addClass(e.domElement,Dt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-n-Q0+"px"):(X.removeClass(e.domElement,Dt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&ie.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:ie.debounce(function(){this.onResize()},50),remember:function(){if(ie.isUndefined(zl)&&(zl=new MU,zl.domElement.innerHTML=vU),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;ie.each(Array.prototype.slice.call(arguments),function(n){e.__rememberedObjects.length===0&&TU(e),e.__rememberedObjects.indexOf(n)===-1&&e.__rememberedObjects.push(n)}),this.autoPlace&&om(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=mu(this)),e.folders={},ie.each(this.__folders,function(n,i){e.folders[i]=n.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=mu(this),rm(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[ic]=mu(this,!0)),this.load.remembered[e]=mu(this),this.preset=e,sm(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){ie.each(this.__controllers,function(n){this.getRoot().load.remembered?db(e||this.getRoot(),n):n.setValue(n.initialValue),n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())},this),ie.each(this.__folders,function(n){n.revert(n)}),e||rm(this.getRoot(),!1)},listen:function(e){var n=this.__listening.length===0;this.__listening.push(e),n&&pb(this.__listening)},updateDisplay:function(){ie.each(this.__controllers,function(e){e.updateDisplay()}),ie.each(this.__folders,function(e){e.updateDisplay()})}});function Bg(t,e,n){var i=document.createElement("li");return e&&i.appendChild(e),n?t.__ul.insertBefore(i,n):t.__ul.appendChild(i),t.onResize(),i}function J0(t){X.unbind(window,"resize",t.__resizeHandler),t.saveToLocalStorageIfPossible&&X.unbind(window,"unload",t.saveToLocalStorageIfPossible)}function rm(t,e){var n=t.__preset_select[t.__preset_select.selectedIndex];e?n.innerHTML=n.value+"*":n.innerHTML=n.value}function EU(t,e,n){if(n.__li=e,n.__gui=t,ie.extend(n,{options:function(s){if(arguments.length>1){var o=n.__li.nextElementSibling;return n.remove(),Il(t,n.object,n.property,{before:o,factoryArgs:[ie.toArray(arguments)]})}if(ie.isArray(s)||ie.isObject(s)){var l=n.__li.nextElementSibling;return n.remove(),Il(t,n.object,n.property,{before:l,factoryArgs:[s]})}},name:function(s){return n.__li.firstElementChild.firstElementChild.innerHTML=s,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof im){var i=new wf(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});ie.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var s=n[r],o=i[r];n[r]=i[r]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(i,l),s.apply(n,l)}}),X.addClass(e,"has-slider"),n.domElement.insertBefore(i.domElement,n.domElement.firstElementChild)}else if(n instanceof wf){var a=function(s){if(ie.isNumber(n.__min)&&ie.isNumber(n.__max)){var o=n.__li.firstElementChild.firstElementChild.innerHTML,l=n.__gui.__listening.indexOf(n)>-1;n.remove();var c=Il(t,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return c.name(o),l&&c.listen(),c}return s};n.min=ie.compose(a,n.min),n.max=ie.compose(a,n.max)}else n instanceof cb?(X.bind(e,"click",function(){X.fakeEvent(n.__checkbox,"click")}),X.bind(n.__checkbox,"click",function(r){r.stopPropagation()})):n instanceof fb?(X.bind(e,"click",function(){X.fakeEvent(n.__button,"click")}),X.bind(e,"mouseover",function(){X.addClass(n.__button,"hover")}),X.bind(e,"mouseout",function(){X.removeClass(n.__button,"hover")})):n instanceof am&&(X.addClass(e,"color"),n.updateDisplay=ie.compose(function(r){return e.style.borderLeftColor=n.__color.toString(),r},n.updateDisplay),n.updateDisplay());n.setValue=ie.compose(function(r){return t.getRoot().__preset_select&&n.isModified()&&rm(t.getRoot(),!0),r},n.setValue)}function db(t,e){var n=t.getRoot(),i=n.__rememberedObjects.indexOf(e.object);if(i!==-1){var a=n.__rememberedObjectIndecesToControllers[i];if(a===void 0&&(a={},n.__rememberedObjectIndecesToControllers[i]=a),a[e.property]=e,n.load&&n.load.remembered){var r=n.load.remembered,s=void 0;if(r[t.preset])s=r[t.preset];else if(r[ic])s=r[ic];else return;if(s[i]&&s[i][e.property]!==void 0){var o=s[i][e.property];e.initialValue=o,e.setValue(o)}}}}function Il(t,e,n,i){if(e[n]===void 0)throw new Error('Object "'+e+'" has no property "'+n+'"');var a=void 0;if(i.color)a=new am(e,n);else{var r=[e,n].concat(i.factoryArgs);a=yU.apply(t,r)}i.before instanceof ls&&(i.before=i.before.__li),db(t,a),X.addClass(a.domElement,"c");var s=document.createElement("span");X.addClass(s,"property-name"),s.innerHTML=a.property;var o=document.createElement("div");o.appendChild(s),o.appendChild(a.domElement);var l=Bg(t,o,i.before);return X.addClass(l,Dt.CLASS_CONTROLLER_ROW),a instanceof am?X.addClass(l,"color"):X.addClass(l,cU(a.getValue())),EU(t,l,a),t.__controllers.push(a),a}function zs(t,e){return document.location.href+"."+e}function sm(t,e,n){var i=document.createElement("option");i.innerHTML=e,i.value=e,t.__preset_select.appendChild(i),n&&(t.__preset_select.selectedIndex=t.__preset_select.length-1)}function ey(t,e){e.style.display=t.useLocalStorage?"block":"none"}function TU(t){var e=t.__save_row=document.createElement("li");X.addClass(t.domElement,"has-save"),t.__ul.insertBefore(e,t.__ul.firstChild),X.addClass(e,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",X.addClass(n,"button gears");var i=document.createElement("span");i.innerHTML="Save",X.addClass(i,"button"),X.addClass(i,"save");var a=document.createElement("span");a.innerHTML="New",X.addClass(a,"button"),X.addClass(a,"save-as");var r=document.createElement("span");r.innerHTML="Revert",X.addClass(r,"button"),X.addClass(r,"revert");var s=t.__preset_select=document.createElement("select");if(t.load&&t.load.remembered?ie.each(t.load.remembered,function(f,h){sm(t,h,h===t.preset)}):sm(t,ic,!1),X.bind(s,"change",function(){for(var f=0;f<t.__preset_select.length;f++)t.__preset_select[f].innerHTML=t.__preset_select[f].value;t.preset=this.value}),e.appendChild(s),e.appendChild(n),e.appendChild(i),e.appendChild(a),e.appendChild(r),dl){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(zs(t,"isLocal"))==="true"&&l.setAttribute("checked","checked"),ey(t,o),X.bind(l,"change",function(){t.useLocalStorage=!t.useLocalStorage,ey(t,o)})}var u=document.getElementById("dg-new-constructor");X.bind(u,"keydown",function(f){f.metaKey&&(f.which===67||f.keyCode===67)&&zl.hide()}),X.bind(n,"click",function(){u.innerHTML=JSON.stringify(t.getSaveObject(),void 0,2),zl.show(),u.focus(),u.select()}),X.bind(i,"click",function(){t.save()}),X.bind(a,"click",function(){var f=prompt("Enter a new preset name.");f&&t.saveAs(f)}),X.bind(r,"click",function(){t.revert()})}function AU(t){var e=void 0;t.__resize_handle=document.createElement("div"),ie.extend(t.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function n(r){return r.preventDefault(),t.width+=e-r.clientX,t.onResize(),e=r.clientX,!1}function i(){X.removeClass(t.__closeButton,Dt.CLASS_DRAG),X.unbind(window,"mousemove",n),X.unbind(window,"mouseup",i)}function a(r){return r.preventDefault(),e=r.clientX,X.addClass(t.__closeButton,Dt.CLASS_DRAG),X.bind(window,"mousemove",n),X.bind(window,"mouseup",i),!1}X.bind(t.__resize_handle,"mousedown",a),X.bind(t.__closeButton,"mousedown",a),t.domElement.insertBefore(t.__resize_handle,t.domElement.firstElementChild)}function om(t,e){t.domElement.style.width=e+"px",t.__save_row&&t.autoPlace&&(t.__save_row.style.width=e+"px"),t.__closeButton&&(t.__closeButton.style.width=e+"px")}function mu(t,e){var n={};return ie.each(t.__rememberedObjects,function(i,a){var r={},s=t.__rememberedObjectIndecesToControllers[a];ie.each(s,function(o,l){r[l]=e?o.initialValue:o.getValue()}),n[a]=r}),n}function wU(t){for(var e=0;e<t.__preset_select.length;e++)t.__preset_select[e].value===t.preset&&(t.__preset_select.selectedIndex=e)}function pb(t){t.length!==0&&SU.call(window,function(){pb(t)}),ie.each(t,function(e){e.updateDisplay()})}var CU=Dt;const bn=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let t=0;t<256;t++)bn[256+t]=bn[t];function Sd(t){return t*t*t*(t*(t*6-15)+10)}function wr(t,e,n){return e+t*(n-e)}function za(t,e,n,i){const a=t&15,r=a<8?e:n,s=a<4?n:a==12||a==14?e:i;return(a&1?-r:r)+(a&2?-s:s)}class RU{noise(e,n,i){const a=Math.floor(e),r=Math.floor(n),s=Math.floor(i),o=a&255,l=r&255,c=s&255;e-=a,n-=r,i-=s;const u=e-1,f=n-1,h=i-1,p=Sd(e),_=Sd(n),y=Sd(i),m=bn[o]+l,d=bn[m]+c,v=bn[m+1]+c,g=bn[o+1]+l,x=bn[g]+c,w=bn[g+1]+c;return wr(y,wr(_,wr(p,za(bn[d],e,n,i),za(bn[x],u,n,i)),wr(p,za(bn[v],e,f,i),za(bn[w],u,f,i))),wr(_,wr(p,za(bn[d+1],e,n,h),za(bn[x+1],u,n,h)),wr(p,za(bn[v+1],e,f,h),za(bn[w+1],u,f,h))))}}function sN(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function oN(t,e){return t+Math.floor(Math.random()*(e-t+1))}function DU(t,e){return t+Math.random()*(e-t)}class mb{constructor(e){this.scene=e.scene||new Pg,this.camera=e.camera,this.renderer=e.renderer,this.composer=e.composer}update(e){}getScene(){return this.scene}getCamera(){return this.camera}}const LU=Object.freeze(Object.defineProperty({__proto__:null,SceneBase:mb},Symbol.toStringTag,{value:"Module"})),ty=function(){class t{constructor(i){this._params=i,this._quadtree=new e({size:i.size,min_node_size:i.min_node_size,cell_resolution:i.cell_resolution,localToWorld:new Ot})}GetChildren(){return this._quadtree.GetChildren()}Insert(i){this._quadtree.Insert(i)}}class e{constructor(i){const a=i.size,r=new Ii(new L(-a/2,0,-a/2),new L(a/2,0,a/2));this._root={bounds:r,children:[],center:r.getCenter(new L),size:r.getSize(new L),depth:0,root:!0},this._params=i}GetChildren(){const i=[];return this._GetChildren(this._root,i),i}_GetChildren(i,a){if(i.children.length===0){a.push(i);return}for(let r of i.children)this._GetChildren(r,a)}Insert(i){this._Insert(this._root,i)}_Insert(i,a){if(this._DistanceToChild(i,a)<i.size.x*1&&i.size.x>this._params.min_node_size){i.children=this._CreateChildren(i,i.depth+1);for(let s of i.children)this._Insert(s,a)}}_DistanceToChild(i,a){return i.center.distanceTo(new L(a.x,a.y,a.z))}_CreateChildren(i,a){const r=i.bounds.getCenter(new L),s=new Ii(new L(i.bounds.min.x,0,i.bounds.min.z),new L(r.x,0,r.z)),o=new Ii(new L(r.x,0,i.bounds.min.z),new L(i.bounds.max.x,0,r.z)),l=new Ii(new L(i.bounds.min.x,0,r.z),new L(r.x,0,i.bounds.max.z)),c=new Ii(new L(r.x,0,r.z),new L(i.bounds.max.x,0,i.bounds.max.z));return[s,o,l,c].map(u=>({bounds:u,children:[],center:u.getCenter(new L),size:u.getSize(new L),depth:a}))}}return{FlatQuadTree:t,QuadTree:e}}(),Md={uniforms:{lightDirection:{value:new L(1,1,1)},lightColor:{value:new L(.9,.76,.5)},size:{value:20},enableFog:{value:!0},isWireframe:{value:!1},showNormals:{value:!1},wireframeWidth:{value:1}},vertexShader:`
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
    `},PU=23;let UU=0;class NU{constructor(e){this._worker=new Worker(e,{type:"module"}),this._worker.onmessage=n=>{this._OnMessage(n)},this._resolve=null,this._id=UU++}_OnMessage(e){const n=this._resolve;this._resolve=null,n(e.data)}get id(){return this._id}postMessage(e,n,i=[]){this._resolve=n,console.log("Sending message to worker:",e),this._worker.postMessage(e,i)}}class OU{constructor(e,n){this._workers=[...Array(e)].map(i=>new NU(n)),this._free=[...this._workers],this._busy={},this._queue=[],this._queueMaxLength=this._workers.length*4}get length(){return this._workers.length}get Busy(){return this._queue.length>0||Object.keys(this._busy).length>0}_CullQueue(){this._queue.pop()}Enqueue(e,n){this._queue.push([e,n]),this._PumpQueue(),this._queue.length>this._queueMaxLength}_PumpQueue(){for(;this._free.length>0&&this._queue.length>0;){const e=this._free.pop();this._busy[e.id]=e;const[n,i]=this._queue.shift();e.postMessage(n,a=>{delete this._busy[e.id],this._free.push(e),i(a),this._PumpQueue()})}}}class zU{constructor(e){this.camera=e.camera,this.scene=e.scene,this.gui=e.gui,this.wireframe=!1,this.updateTerrain=!0;const n=new URL("/Github-Page/assets/TerrainBuilder_threaded_worker-oBh92YcB.js",import.meta.url);this._workerPool=new OU(PU,n),this.updateInProgress=!1,this.FLAT_PLANE_SIZE=e.flat_plane_size||1e4,this.MIN_CELL_SIZE=e.min_cell_size||16,this.CELL_RESOLUTION=e.cell_resolution||256,this.noise=new RU,this.noiseZ=DU(0,1e3),this.noiseParams={amplitude:10,octaves:16,frequency:1,persistence:.5,lacunarity:2,exponentiation:2,noiseZ:this.noiseZ},this.quadTree=new ty.FlatQuadTree({size:this.FLAT_PLANE_SIZE,min_node_size:this.MIN_CELL_SIZE,cell_resolution:this.CELL_RESOLUTION}),this.terrainChunks={},this.updateQuadtreeTiles(),this._initGUI()}_initGUI(){if(!this.gui)return;let e=this.gui.addFolder("Terrain");e.add(this,"updateTerrain").name("Update Terrain"),e.add(this,"wireframe").onChange(()=>{this.updateTerrainMesh()}),e.add(this,"FLAT_PLANE_SIZE").name("Terrain Size").min(100).max(1e4).step(100).onChange(()=>{this.updateTerrainParams({flat_plane_size:this.FLAT_PLANE_SIZE})}),e.add(this,"MIN_CELL_SIZE").name("Min Cell Size").min(1).max(512).step(32).onChange(()=>{this.updateTerrainParams({min_cell_size:this.MIN_CELL_SIZE})}),e.add(this,"CELL_RESOLUTION").name("Cell Resolution").min(16).max(512).step(16).onChange(()=>{this.updateTerrainParams({cell_resolution:this.CELL_RESOLUTION})});let n=e.addFolder("NoiseParams");n.add(this.noiseParams,"octaves").min(1).max(16).step(1).name("Octaves").onChange(()=>{console.log("Octaves changed:",this.noiseParams.octaves),this.updateTerrainParams({octaves:this.noiseParams.octaves}),n.updateDisplay()}),n.add(this.noiseParams,"frequency").min(.1).max(2).step(.1).name("Frequency").onChange(()=>{this.updateTerrainParams({frequency:this.noiseParams.frequency})}),n.add(this.noiseParams,"amplitude").min(.1).max(10).step(.1).name("Amplitude").onChange(()=>{this.updateTerrainParams({amplitude:this.noiseParams.amplitude})}),n.add(this.noiseParams,"persistence").min(.1).max(2).step(.1).name("Persistence").onChange(()=>{this.updateTerrainParams({persistence:this.noiseParams.persistence})}),n.add(this.noiseParams,"lacunarity").min(1).max(4).step(.1).name("Lacunarity").onChange(()=>{this.updateTerrainParams({lacunarity:this.noiseParams.lacunarity})}),n.add(this.noiseParams,"exponentiation").min(1).max(10).step(.1).name("Exponentiation").onChange(()=>{this.updateTerrainParams({exponentiation:this.noiseParams.exponentiation})})}updateTerrainMesh(){for(let e in this.terrainChunks)this.terrainChunks[e].material.wireframe=this.wireframe}updateTerrainParams(e){this.FLAT_PLANE_SIZE=e.flat_plane_size||this.FLAT_PLANE_SIZE,this.MIN_CELL_SIZE=e.min_cell_size||this.MIN_CELL_SIZE,this.CELL_RESOLUTION=e.cell_resolution||this.CELL_RESOLUTION,this.noiseParams.octaves=e.octaves||this.noiseParams.octaves,this.noiseParams.frequency=e.frequency||this.noiseParams.frequency,this.noiseParams.amplitude=e.amplitude||this.noiseParams.amplitude,this.noiseParams.persistence=e.persistence||this.noiseParams.persistence,this.noiseParams.lacunarity=e.lacunarity||this.noiseParams.lacunarity,this.noiseParams.exponentiation=e.exponentiation||this.noiseParams.exponentiation,this.quadTree=new ty.FlatQuadTree({size:this.FLAT_PLANE_SIZE,min_node_size:this.MIN_CELL_SIZE,cell_resolution:this.CELL_RESOLUTION}),this.updateQuadtreeTiles()}async updateQuadtreeTiles(){if(this.updateInProgress)return;this.updateInProgress=!0,this.quadTree.Insert(this.camera.position);const e=this.quadTree.GetChildren(),n={},i=new L,a=new L,r=[];for(let s of e){const o=s.bounds.getCenter(i);s.bounds.getSize(a);const l=a.x;new Ne(10066329);const c=this.quadTree._params.cell_resolution,u=`${o.x}_${o.z}_${s.depth}`;this.terrainChunks[u]?(n[u]=this.terrainChunks[u],delete this.terrainChunks[u]):r.push(this.generateTile(i,l,c).then(f=>{n[u]=f}).catch(f=>{console.error(f)}))}try{await Promise.all(r);for(const s in this.terrainChunks)this.scene.remove(this.terrainChunks[s]);this.terrainChunks=n}finally{this.updateInProgress=!1}}generateTile(e,n,i){const a={center:{x:e.x,y:e.y,z:e.z},size:n,planeSize:this.FLAT_PLANE_SIZE,resolution:i,noiseParams:this.noiseParams,noiseZ:this.noiseZ};return new Promise(r=>{this._workerPool.Enqueue({subject:"generate_tile",params:a},s=>{const o=new zo(n,n,i,i);let l=new Bn({side:zi});l.uniforms=Md.uniforms,l.vertexShader=Md.vertexShader,l.fragmentShader=Md.fragmentShader,l.uniforms.size.value=this.FLAT_PLANE_SIZE,l.uniforms.enableFog.value=!0,l.uniforms.showNormals.value=!1,l.wireframe=this.wireframe;const c=new Zn(o,l);c.position.set(a.center.x,a.center.y,a.center.z),c.rotation.x=-Math.PI/2;let u=c.geometry.attributes.position;for(let h=0;h<u.count;h++){let p=s.data.positions[h];u.setZ(h,p)}let f=c.geometry.attributes.normal;for(let h=0;h<f.count;h++){const p=s.data.normals[h*3+0],_=s.data.normals[h*3+1],y=s.data.normals[h*3+2];f.setXYZ(h,-p,y,-_)}u.needsUpdate=!0,this.scene.add(c),r(c)})})}update(){if(this.updateTerrain){const e=this.camera.position;this.needsUpdate(e)&&this.updateQuadtreeTiles()}}needsUpdate(e){return this.lastCameraPosition?this.lastCameraPosition.distanceTo(e)>1?(this.lastCameraPosition.copy(e),!0):!1:(this.lastCameraPosition=new L().copy(e),!0)}}const lN={uniforms:{lightDirection:{value:new L(1,1,1)},lightColor:{value:new L(.8,.76,.5)},gradientMap:{value:null},size:{value:20},hmax:{value:null},hmin:{value:null},envMap:{value:null},vpw:{value:5e-5},vph:{value:5e-5},offset:{value:new be(-.5,-.5)},pitch:{value:new be(4,4)},enableFog:{value:!0},heightMap:{value:new tP(new Uint8Array(1),1,1,di)},hmMin:{value:0},hmMax:{value:0},heightMapRes:{value:400}},vertexShader:`
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
    `},cN={uniforms:{lightDirection:{value:new L(1,1,1)},lightColor:{value:new L(.8,.76,.5)},baseColor:{value:new L(.5,.5,.5)},type:{value:0},textureMap:{value:null},normalMap:{value:null},frame:{value:0},roofColor:{value:new L(.5,.5,.5)}},vertexShader:`


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
    `};class gb extends mb{constructor(e){super(e),this.updateTerrain=!0,this.terrain=new zU({camera:this.camera,scene:this.scene,renderer:this.renderer,gui:this.gui})}update(e){super.update(e),this.terrain.update()}}const IU=Object.freeze(Object.defineProperty({__proto__:null,sc_TerrainScene:gb},Symbol.toStringTag,{value:"Module"}));function FU(t,e){const n=Object.assign({"./Scenes/CSSRenderer/CSSRenderer.js":()=>kn(()=>import("./CSSRenderer-iOJVpi76.js"),[]),"./Scenes/Intro/introScene.js":()=>kn(()=>import("./introScene-Dh4qMpsl.js"),[]),"./Scenes/Intro/terrainScene.js":()=>kn(()=>Promise.resolve().then(()=>IU),void 0),"./Scenes/Reclaimer/Building.js":()=>kn(()=>import("./Building-DG6dX7z8.js"),__vite__mapDeps([0,1,2])),"./Scenes/Reclaimer/BuildingBlock.js":()=>kn(()=>import("./BuildingBlock-CjzO6Gh7.js"),__vite__mapDeps([1,2])),"./Scenes/Reclaimer/City.js":()=>kn(()=>import("./City-Bygalz_h.js"),__vite__mapDeps([3,0,1,2])),"./Scenes/Reclaimer/Environment.js":()=>kn(()=>import("./Environment-KckQum6Z.js"),[]),"./Scenes/Reclaimer/Fragment.js":()=>kn(()=>import("./Fragment-DgXTwJ0G.js").then($=>$.b),[]),"./Scenes/Reclaimer/Reclaimer.js":()=>kn(()=>import("./Reclaimer-pLWv8uB7.js"),__vite__mapDeps([4,5,3,0,1,2,6])),"./Scenes/Reclaimer/Vine.js":()=>kn(()=>import("./Vine-BB32CW3c.js"),[]),"./Scenes/Reclaimer/landscape.js":()=>kn(()=>import("./landscape-DbDn1J1F.js"),[]),"./Scenes/SampleScene/sampleScene.js":()=>kn(()=>import("./sampleScene-DShdBTic.js"),[]),"./Scenes/sceneBase.js":()=>kn(()=>Promise.resolve().then(()=>LU),void 0)}),i=[];async function a(){for(const $ in n){const N=await n[$]();for(const q in N)typeof N[q]=="function"&&q.startsWith("sc_")&&i.push(N[q])}return i}a();const r=t.current;if(!r)return;let s=new Pg,o=null,l=s,c=new eb({antialias:!0});const u=window.devicePixelRatio||1;c.setSize(r.offsetWidth,r.offsetHeight),c.setPixelRatio(u),c.domElement.width=r.offsetWidth,c.domElement.height=r.offsetHeight,r.appendChild(c.domElement);let f={FOV:55},h=new On(f.FOV,r.offsetWidth/r.offsetHeight,.1,1e4);h.position.set(-20,5,-20),h.lookAt(0,0,0),c.setSize(window.innerWidth,window.innerHeight),c.outputColorSpace=bi;let p=new iU(c);p.setPixelRatio(window.devicePixelRatio),p.setSize(r.offsetWidth,r.offsetHeight);const _=new aU(l,h);p.addPass(_);const y=new sU;p.addPass(y);function m($){_.scene=$}let d=M();const v=new PP(5);s.add(v);const g=new Oo,x=new wg({color:65280});new Zn(g,x);let w=new Ne(.5,.72,1);const S=new LP(w,.5);s.add(S);let A=new Ne(1,.98,.8);const C=new RP(A,1);C.castShadow=!0,C.position.set(30,15,30),C.lookAt(0,0,50),s.add(C);let T=new FP(h,c.domElement);function M(){let $=new CU({autoPlace:!1});return $.addFolder("General"),$.close(),r.appendChild($.domElement),console.log("datGUI container:"+r),$}const D=$=>{c.setSize(r.offsetWidth,r.offsetHeight),p.setSize(r.offsetWidth,r.offsetHeight),p.setPixelRatio(window.devicePixelRatio),h.aspect=r.offsetWidth/r.offsetHeight,h.updateProjectionMatrix()};window.addEventListener("resize",D);const Q=$=>{console.log("3js switcing to:",$);let N=new $({camera:h,composer:p,renderer:c,gui:d});o=N,l=N.getScene(),m(l)};Q(gb);const Y=new Og;let K=$=>{T.update(),zP($);const N=Y.getDelta();p.render(),o&&o.update(N),requestAnimationFrame(K)};return requestAnimationFrame(K),{handleResize:D,scene:s,scenes:i,switchScene:Q,cleanup:()=>{window.removeEventListener("resize",D),c.dispose(),r.removeChild(c.domElement)}}}const BU=({threeJSInstance:t,switchScene:e})=>{const[n,i]=F.useState(!0),[a,r]=F.useState([]);return F.useEffect(()=>{if(t.current){const s=t.current.scenes||[];r(s),i(!1)}},[t]),n?P.jsx("p",{children:"Loading scenes..."}):P.jsx("div",{style:{display:"flex",gap:"10px",justifyContent:"center"},children:a.length>0?a.map((s,o)=>P.jsx("button",{onClick:()=>e(s),style:{padding:"10px",borderRadius:"5px",backgroundColor:"#333",color:"white",cursor:"pointer"},children:s.name},o)):P.jsx("p",{children:"No scenes found"})})},HU=({darkMode:t})=>{const[e,n]=F.useState(null),i=r=>{n(r)},a=r=>{var s;(s=e==null?void 0:e.current)!=null&&s.scenes&&r&&(console.log(`Switching to scene: ${r.name||sceneIndex}`),e.current.switchScene(r))};return P.jsxs("div",{style:{textAlign:"center"},children:[P.jsx("h2",{children:"Interactive Media"}),P.jsxs("div",{id:"flexLB",style:{display:"flex",flexWrap:"wrap",gap:"2rem",margin:"auto"},children:[P.jsx("div",{className:"column-content",id:"pf3js",style:{maxHeight:"600px",minWidth:"250px",minHeight:"250px",maxWidth:"900px"},children:P.jsx(mM,{darkMode:t,containerID:"pf3js",threeJSEntry:FU,onInit:i})}),P.jsx("div",{style:{flex:"1",minWidth:"400px"},children:P.jsx("p",{children:"Interactive visualizations, simulations, and animations using react, three.js"})})]}),e&&P.jsx(BU,{threeJSInstance:e,switchScene:a})]})},gu={uniforms:{time:{value:0},noiseScale:{value:1},noiseStrength:{value:.2},noiseFrequency:{value:5},noiseSpeed:{value:.1},noiseOffset:{value:new L(0,0,0)},color:{value:new Ne(16777215)},bgColor:{value:new Ne(0)}},vertexShader:`
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
  `},_u={uniforms:{time:{value:0},pointSize:{value:20},noiseScale:{value:1},noiseStrength:{value:.2},noiseFrequency:{value:5},noiseSpeed:{value:.1},noiseOffset:{value:new L(0,0,0)},color:{value:new Ne(16777215)},bgColor:{value:new Ne(0)}},vertexShader:`
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
    `};function VU(t,e){let n=t.current;if(!n)return;const i=new eb({antialias:!0}),a=window.devicePixelRatio||1;i.setSize(n.offsetWidth,n.offsetHeight),i.setPixelRatio(a),n.appendChild(i.domElement);const r=window.getComputedStyle(e).backgroundColor,s=new Pg;console.log(r),s.background=new Ne(r);const o=new On(40,n.offsetWidth/n.offsetHeight,.1,1e3);o.position.z=10.5;const l=new fl;s.add(l),l.add(o);const c=new zo(10,10,100,100);let u=0,f=new Bn(gu);f.uniforms=gu.uniforms,f.transparent=!0,f.vertexShader=gu.vertexShader,f.fragmentShader=gu.fragmentShader,f.uniforms.bgColor.value=new Ne(r),f.wireframe=!0;let h=new Bn(_u);h.uniforms=_u.uniforms,h.transparent=!0,h.vertexShader=_u.vertexShader,h.fragmentShader=_u.fragmentShader;const p=new Zn(c,f);p.position.set(0,-.2,5.1),p.rotation.x=-Math.PI/2,s.add(p);const _=new rP(c,h);_.position.set(0,-.2,5.1),_.rotation.x=-Math.PI/2,s.add(_);const y={};y.x=0,y.y=0,window.addEventListener("mousemove",C=>{y.x=(C.clientX/visualViewport.width-.5)*2,y.y=(C.clientY/visualViewport.height-.5)*2});let m=.5;window.addEventListener("scroll",()=>{const C=document.documentElement.scrollHeight-window.innerHeight;m=window.scrollY/C},{passive:!0});const d=C=>{i.setSize(n.offsetWidth,n.offsetHeight),o.aspect=n.offsetWidth/n.offsetHeight,o.updateProjectionMatrix()};window.addEventListener("resize",d);const v=new Og;let g=0,x=!1;const w=(C,T,M,D)=>C*Math.max(0,1-Math.pow(Math.abs(T/M),D)),S=()=>{const C=v.getElapsedTime(),T=C-g;u+=T,g=C,f.uniforms.time.value=u,h.uniforms.time.value=u,x||(d(),x=!0);const M=y.x,D=-y.y;o.position.x+=w((M-o.position.x)*.1*T,o.position.x,1,1),o.position.y+=w((D-o.position.y)*.1*T,o.position.y,1,1),o.lookAt(0,0,0),l.position.y=-(m*.5-.2),i.render(s,o),requestAnimationFrame(S)};return S(),{handleResize:d,handleDarkModeChange:()=>{console.log("Dark Mode Changed");const C=window.getComputedStyle(e).backgroundColor;new Ne(C);const T=C.match(/\d+/g).map(Number),M=new Ne(1-T[0]/255,1-T[1]/255,1-T[2]/255);console.log("BackgroundColor: ",C),s.background=new Ne(C),f.uniforms.bgColor.value=new Ne(C),f.uniforms.color.value=new Ne(M),console.log("ForegroundColor: ",M),h.uniforms.color.value=new Ne(M),f.uniforms.color.value=new Ne(M)},scene:s,cleanup:()=>{window.removeEventListener("resize",d),i.dispose(),n.removeChild(i.domElement)}}}const kU=({darkMode:t,handleOpenLightbox:e})=>{const n=t?"white":"#333";return P.jsxs(gg,{style:{gap:"2rem"},className:"content-scroll",children:[P.jsxs("div",{className:`portfolioCard ${t?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>e(P.jsx(Iw,{}),{height:"80vh"}),children:[P.jsx("h2",{style:{color:n},children:"GameDev"}),P.jsxs("p",{children:["Games, game engines, physics and rendering ",P.jsx("br",{}),P.jsx("br",{}),P.jsx("br",{})]}),P.jsx("img",{src:"assets/Images/Gloria_Armada.png",alt:"Gloria Armada",style:{maxWidth:"100%",objectFit:"contain",alignSelf:"normal",height:"auto"}})]}),P.jsxs("div",{className:`portfolioCard ${t?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>e(P.jsx(Fw,{darkMode:t}),{height:"80vh"}),children:[P.jsx("h2",{style:{color:n},children:"Data Analysis"}),P.jsx("p",{children:"Using data to uncover insights, drive business decisions, and create actionable solutions, with expertise in statistical analysis, machine learning, and visualization."}),P.jsx("img",{src:"assets/Images/tableau.webp",alt:"tableau",style:{maxWidth:"100%",objectFit:"contain",alignSelf:"normal",height:"auto"}})]}),P.jsxs("div",{className:`portfolioCard ${t?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>e(P.jsx(HU,{darkMode:t}),{height:"80vh"}),children:[P.jsx("h2",{style:{textAlign:"center"},children:"Interactive Media"}),P.jsx("p",{children:"Interactive visualizations, simulations, and animations using react, three.js"}),P.jsx("div",{className:"column-content",id:"threejsContainer",children:P.jsx(mM,{darkMode:t,containerID:"threejsContainer",threeJSEntry:VU})})]})]})},GU=({darkMode:t,handleOpenLightbox:e,scrollToSection:n})=>{const[i,a]=F.useState(!1);return F.useEffect(()=>{const r=()=>{a(window.innerWidth<768)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),P.jsxs("div",{className:"greetings-container",children:[P.jsxs("div",{className:"greetings-content",children:[P.jsx("h2",{className:"title",children:"Let's make something amazing together!"}),P.jsxs("p",{className:"greetings-text",children:["I am a Data Analyst & Software Engineer with a passion for creating innovative solutions."," "]}),P.jsxs("p",{className:"greetings-text",children:["I have experience in various programming languages and frameworks."," "]}),P.jsx("p",{className:"greetings-text",children:"I enjoy collaborating with teams and solving complex problems."}),!i&&P.jsx("div",{className:"button-container",children:P.jsx(xp,{darkMode:t,scrollToSection:n})})]}),P.jsx("div",{className:"greetings-image",style:{flexGrow:"0",flexShrink:"3",order:"1"},children:P.jsx("img",{className:"profileImg",src:"assets/Images/Profile.png",alt:"Profile"})}),i&&P.jsx("div",{className:"button-container",children:P.jsx(xp,{darkMode:t,scrollToSection:n})})]})},jU=(t,e)=>{const[n,i]=F.useState(!1),[a,r]=F.useState("Test"),[s,o]=F.useState(null),l=()=>{var c;document.body.classList.remove("no-scroll"),i(!1),(c=history.state)!=null&&c.lightboxOpen&&setTimeout(()=>history.back(),100)};return P.jsxs("div",{children:[P.jsx(gM,{darkMode:t,isOpen:n,content:a,style:s,onClose:l}),P.jsx(_M,{darkMode:t,toggleDarkMode:e}),P.jsx(Va,{title:"about",darkMode:t,revealPercent:"50px 0px"}),P.jsx(Va,{title:"Footer",darkMode:t,revealPercent:"50px 0px",children:P.jsx(vM,{darkMode:t})})]})},XU=()=>{const[t,e]=F.useState(!0),[n,i]=F.useState(!1),[a,r]=F.useState("Test"),[s,o]=F.useState(null),l=Object.assign({});(()=>{window.location.hash==="#lightbox"&&window.history.replaceState(null,"",window.location.pathname)})();async function u(){const d=[];for(const v in l){const g=await l[v]();for(const x in g)typeof g[x]=="function"&&x.startsWith("sc_")&&d.push(g[x])}return d}F.useEffect(()=>{u().then(d=>{console.log("Loaded scenes:",d)}),setTimeout(()=>{window.scrollTo(0,0)},5)},[]);const[f,h]=F.useState(!1);F.useEffect(()=>{const d=()=>{h(!0),window.removeEventListener("scroll",d)};return window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}},[]),F.useEffect(()=>{document.body.className=t?"dark-mode":"light-mode"},[t]);const p=()=>{const d=document.getElementById("contactMe");d!=null?d.scrollIntoView({behavior:"smooth",block:"start"}):console.error("Target section not found")},_=(d,v)=>{requestAnimationFrame(()=>{document.body.classList.add("no-scroll")}),history.pushState({lightboxOpen:!0},"","#lightbox"),r(d),o(v),i(!0)},y=()=>{requestAnimationFrame(()=>{document.body.classList.remove("no-scroll"),i(!1),window.location.hash==="#lightbox"&&setTimeout(()=>history.back(),100)})};F.useEffect(()=>{const d=v=>{var g;console.log("Popstate event:",v.state),(g=v.state)!=null&&g.lightboxOpen||(console.log("Closing lightbox"),y()),window.location.hash==="#lightbox"&&window.history.replaceState(null,"",window.location.pathname)};return window.addEventListener("popstate",d),()=>{window.removeEventListener("popstate",d)}},[]);const m=()=>{e(d=>!d)};return P.jsxs("div",{className:"app",children:[P.jsx(gM,{lbName:"",darkMode:t,isOpen:n,content:a,style:s,onClose:y}),P.jsx(_M,{darkMode:t,toggleDarkMode:m}),P.jsxs("main",{className:`main ${t?"dark-mode":"light-mode"}`,children:[P.jsx(Va,{title:"Greetings",darkMode:t,style:{paddingTop:"1rem",minHeight:"70vh",maxHeight:"80vh"},revealPercent:"-50% 0px",children:P.jsx(GU,{darkMode:t,scrollToSection:p})}),P.jsx(Va,{title:"Overview",darkMode:t,revealPercent:"50px 0px",style:{padding:"0"},children:P.jsx(kU,{darkMode:t,handleOpenLightbox:_})}),P.jsx(Va,{title:"Skills",darkMode:t,revealPercent:"10px 0px",children:P.jsx(zw,{darkMode:t,children:" "})}),P.jsxs(Va,{title:"ContactMe",id:"contactMe",darkMode:t,revealPercent:"50px 0px",style:{backgroundColor:"#0061aa",paddingBottom:"3rem",paddingTop:"2.5rem"},children:[P.jsx("h2",{style:{textAlign:"center",color:"white",marginTop:"0px"},children:"Get In Touch!"}),P.jsx(_f,{darkMode:t,text:"Contact",style:{color:"white",borderColor:"white",borderRadius:"5px"},onClick:()=>_(P.jsx(Uw,{darkMode:t}),{height:"unset"})})]}),P.jsx(Va,{title:"",darkMode:t,style:{padding:"0px"}}),P.jsx(Va,{title:"Footer",darkMode:t,revealPercent:"50px 0px",style:{padding:"10px",paddingTop:"2rem"},children:P.jsx(vM,{darkMode:t})})]})]})},WU=()=>{const t=dw([{path:"/Github-Page/",element:P.jsx(XU,{})},{path:"/Github-Page/GloriaArmada",element:P.jsx(jU,{})}]);return P.jsx(Tw,{router:t})};gT.createRoot(document.getElementById("root")).render(P.jsx(Rf.StrictMode,{children:P.jsx(WU,{})}));export{tb as $,Nv as A,Oo as B,Ne as C,zi as D,cN as E,ob as F,CU as G,Uo as H,zP as I,oN as J,Jf as K,Md as L,wg as M,zn as N,Qt as O,zo as P,nN as Q,NM as R,mb as S,xn as T,Cg as U,L as V,hr as W,fl as X,gi as Y,Zw as Z,An as _,Bn as a,Ta as a0,aP as a1,eN as a2,iP as a3,rP as a4,fr as a5,ka as a6,sn as a7,On as a8,In as a9,c0 as aa,oP as ab,JU as ac,ab as ad,rN as ae,Ol as af,RU as ag,Pg as ah,$U as ai,di as aj,Dg as ak,lN as al,Gi as am,sN as an,LP as ao,aN as ap,Zn as b,xc as c,be as d,QP as e,Ot as f,ZM as g,bo as h,Mo as i,_a as j,tN as k,tC as l,Ur as m,Jw as n,jw as o,tP as p,ty as q,DU as r,pa as s,Tp as t,XC as u,Gw as v,aU as w,bM as x,iN as y,_e as z};
//# sourceMappingURL=index-Bnm5RBCl.js.map
