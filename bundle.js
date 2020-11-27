(function () {
  'use strict';

  function e(e,n){const t=Object.create(null),o=e.split(",");for(let e=0;e<o.length;e++)t[o[e]]=!0;return n?e=>!!t[e.toLowerCase()]:e=>!!t[e]}const n=e("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl"),t=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function o(e){if(w(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],s=o(A(r)?l(r):r);if(s)for(const e in s)n[e]=s[e];}return n}if(B(e))return e}const r=/;(?![^(]*\))/g,s=/:(.+)/;function l(e){const n={};return e.split(r).forEach(e=>{if(e){const t=e.split(s);t.length>1&&(n[t[0].trim()]=t[1].trim());}}),n}function i(e){let n="";if(A(e))n=e;else if(w(e))for(let t=0;t<e.length;t++)n+=i(e[t])+" ";else if(B(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const u=e=>null==e?"":B(e)?JSON.stringify(e,p,2):String(e),p=(e,n)=>k(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((e,[n,t])=>(e[n+" =>"]=t,e),{})}:S(n)?{[`Set(${n.size})`]:[...n.values()]}:!B(n)||w(n)||N(n)?n:String(n),f={},d=[],h=()=>{},g=()=>!1,m=/^on[^a-z]/,v=e=>m.test(e),y=e=>e.startsWith("onUpdate:"),_=Object.assign,b=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1);},C=Object.prototype.hasOwnProperty,x=(e,n)=>C.call(e,n),w=Array.isArray,k=e=>"[object Map]"===M(e),S=e=>"[object Set]"===M(e),F=e=>"function"==typeof e,A=e=>"string"==typeof e,T=e=>"symbol"==typeof e,B=e=>null!==e&&"object"==typeof e,O=e=>B(e)&&F(e.then)&&F(e.catch),L=Object.prototype.toString,M=e=>L.call(e),N=e=>"[object Object]"===M(e),R=e=>A(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,P=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),U=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},V=/-(\w)/g,I=U(e=>e.replace(V,(e,n)=>n?n.toUpperCase():"")),$=/\B([A-Z])/g,j=U(e=>e.replace($,"-$1").toLowerCase()),D=U(e=>e.charAt(0).toUpperCase()+e.slice(1)),H=U(e=>e?"on"+D(e):""),z=(e,n)=>e!==n&&(e==e||n==n),W=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n);},K=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t});},q=e=>{const n=parseFloat(e);return isNaN(n)?e:n},G=new WeakMap,J=[];let X;const Z=Symbol(""),Q=Symbol("");function Y(e,n=f){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const t=function(e,n){const t=function(){if(!t.active)return n.scheduler?void 0:e();if(!J.includes(t)){te(t);try{return re.push(oe),oe=!0,J.push(t),X=t,e()}finally{J.pop(),le(),X=J[J.length-1];}}};return t.id=ne++,t.allowRecurse=!!n.allowRecurse,t._isEffect=!0,t.active=!0,t.raw=e,t.deps=[],t.options=n,t}(e,n);return n.lazy||t(),t}function ee(e){e.active&&(te(e),e.options.onStop&&e.options.onStop(),e.active=!1);}let ne=0;function te(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0;}}let oe=!0;const re=[];function se(){re.push(oe),oe=!1;}function le(){const e=re.pop();oe=void 0===e||e;}function ie(e,n,t){if(!oe||void 0===X)return;let o=G.get(e);o||G.set(e,o=new Map);let r=o.get(t);r||o.set(t,r=new Set),r.has(X)||(r.add(X),X.deps.push(r));}function ce(e,n,t,o,r,s){const l=G.get(e);if(!l)return;const i=new Set,c=e=>{e&&e.forEach(e=>{(e!==X||e.allowRecurse)&&i.add(e);});};if("clear"===n)l.forEach(c);else if("length"===t&&w(e))l.forEach((e,n)=>{("length"===n||n>=o)&&c(e);});else switch(void 0!==t&&c(l.get(t)),n){case"add":w(e)?R(t)&&c(l.get("length")):(c(l.get(Z)),k(e)&&c(l.get(Q)));break;case"delete":w(e)||(c(l.get(Z)),k(e)&&c(l.get(Q)));break;case"set":k(e)&&c(l.get(Z));}i.forEach(e=>{e.options.scheduler?e.options.scheduler(e):e();});}const ae=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(T)),ue=ge(),pe=ge(!1,!0),fe=ge(!0),de=ge(!0,!0),he={};function ge(e=!1,n=!1){return function(t,o,r){if("__v_isReactive"===o)return !e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&r===(e?He:De).get(t))return t;const s=w(t);if(s&&x(he,o))return Reflect.get(he,o,r);const l=Reflect.get(t,o,r);if(T(o)?ae.has(o):"__proto__"===o||"__v_isRef"===o)return l;if(e||ie(t,0,o),n)return l;if(tn(l)){return !s||!R(o)?l.value:l}return B(l)?e?qe(l):We(l):l}}["includes","indexOf","lastIndexOf"].forEach(e=>{const n=Array.prototype[e];he[e]=function(...e){const t=Ye(this);for(let e=0,n=this.length;e<n;e++)ie(t,0,e+"");const o=n.apply(t,e);return -1===o||!1===o?n.apply(t,e.map(Ye)):o};}),["push","pop","shift","unshift","splice"].forEach(e=>{const n=Array.prototype[e];he[e]=function(...e){se();const t=n.apply(this,e);return le(),t};});function me(e=!1){return function(n,t,o,r){const s=n[t];if(!e&&(o=Ye(o),!w(n)&&tn(s)&&!tn(o)))return s.value=o,!0;const l=w(n)&&R(t)?Number(t)<n.length:x(n,t),i=Reflect.set(n,t,o,r);return n===Ye(r)&&(l?z(o,s)&&ce(n,"set",t,o):ce(n,"add",t,o)),i}}const ve={get:ue,set:me(),deleteProperty:function(e,n){const t=x(e,n),o=Reflect.deleteProperty(e,n);return o&&t&&ce(e,"delete",n,void 0),o},has:function(e,n){const t=Reflect.has(e,n);return T(n)&&ae.has(n)||ie(e,0,n),t},ownKeys:function(e){return ie(e,0,w(e)?"length":Z),Reflect.ownKeys(e)}},ye={get:fe,set:(e,n)=>!0,deleteProperty:(e,n)=>!0},_e=_({},ve,{get:pe,set:me(!0)}),be=_({},ye,{get:de}),Ce=e=>B(e)?We(e):e,xe=e=>B(e)?qe(e):e,we=e=>e,ke=e=>Reflect.getPrototypeOf(e);function Se(e,n,t=!1,o=!1){const r=Ye(e=e.__v_raw),s=Ye(n);n!==s&&!t&&ie(r,0,n),!t&&ie(r,0,s);const{has:l}=ke(r),i=t?xe:o?we:Ce;return l.call(r,n)?i(e.get(n)):l.call(r,s)?i(e.get(s)):void 0}function Ee(e,n=!1){const t=this.__v_raw,o=Ye(t),r=Ye(e);return e!==r&&!n&&ie(o,0,e),!n&&ie(o,0,r),e===r?t.has(e):t.has(e)||t.has(r)}function Fe(e,n=!1){return e=e.__v_raw,!n&&ie(Ye(e),0,Z),Reflect.get(e,"size",e)}function Ae(e){e=Ye(e);const n=Ye(this),t=ke(n).has.call(n,e),o=n.add(e);return t||ce(n,"add",e,e),o}function Te(e,n){n=Ye(n);const t=Ye(this),{has:o,get:r}=ke(t);let s=o.call(t,e);s||(e=Ye(e),s=o.call(t,e));const l=r.call(t,e),i=t.set(e,n);return s?z(n,l)&&ce(t,"set",e,n):ce(t,"add",e,n),i}function Be(e){const n=Ye(this),{has:t,get:o}=ke(n);let r=t.call(n,e);r||(e=Ye(e),r=t.call(n,e));o&&o.call(n,e);const s=n.delete(e);return r&&ce(n,"delete",e,void 0),s}function Oe(){const e=Ye(this),n=0!==e.size,t=e.clear();return n&&ce(e,"clear",void 0,void 0),t}function Le(e,n){return function(t,o){const r=this,s=r.__v_raw,l=Ye(s),i=e?xe:n?we:Ce;return !e&&ie(l,0,Z),s.forEach((e,n)=>t.call(o,i(e),i(n),r))}}function Me(e,n,t){return function(...o){const r=this.__v_raw,s=Ye(r),l=k(s),i="entries"===e||e===Symbol.iterator&&l,c="keys"===e&&l,a=r[e](...o),u=n?xe:t?we:Ce;return !n&&ie(s,0,c?Q:Z),{next(){const{value:e,done:n}=a.next();return n?{value:e,done:n}:{value:i?[u(e[0]),u(e[1])]:u(e),done:n}},[Symbol.iterator](){return this}}}}function Ne(e){return function(...n){return "delete"!==e&&this}}const Re={get(e){return Se(this,e)},get size(){return Fe(this)},has:Ee,add:Ae,set:Te,delete:Be,clear:Oe,forEach:Le(!1,!1)},Pe={get(e){return Se(this,e,!1,!0)},get size(){return Fe(this)},has:Ee,add:Ae,set:Te,delete:Be,clear:Oe,forEach:Le(!1,!0)},Ue={get(e){return Se(this,e,!0)},get size(){return Fe(this,!0)},has(e){return Ee.call(this,e,!0)},add:Ne("add"),set:Ne("set"),delete:Ne("delete"),clear:Ne("clear"),forEach:Le(!0,!1)};function Ve(e,n){const t=n?Pe:e?Ue:Re;return (n,o,r)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?n:Reflect.get(x(t,o)&&o in n?t:n,o,r)}["keys","values","entries",Symbol.iterator].forEach(e=>{Re[e]=Me(e,!1,!1),Ue[e]=Me(e,!0,!1),Pe[e]=Me(e,!1,!0);});const Ie={get:Ve(!1,!1)},$e={get:Ve(!1,!0)},je={get:Ve(!0,!1)},De=new WeakMap,He=new WeakMap;function ze(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>M(e).slice(8,-1))(e))}function We(e){return e&&e.__v_isReadonly?e:Je(e,!1,ve,Ie)}function Ke(e){return Je(e,!1,_e,$e)}function qe(e){return Je(e,!0,ye,je)}function Je(e,n,t,o){if(!B(e))return e;if(e.__v_raw&&(!n||!e.__v_isReactive))return e;const r=n?He:De,s=r.get(e);if(s)return s;const l=ze(e);if(0===l)return e;const i=new Proxy(e,2===l?o:t);return r.set(e,i),i}function Xe(e){return Ze(e)?Xe(e.__v_raw):!(!e||!e.__v_isReactive)}function Ze(e){return !(!e||!e.__v_isReadonly)}function Qe(e){return Xe(e)||Ze(e)}function Ye(e){return e&&Ye(e.__v_raw)||e}function tn(e){return Boolean(e&&!0===e.__v_isRef)}function an(e){return tn(e)?e.value:e}const un={get:(e,n,t)=>an(Reflect.get(e,n,t)),set:(e,n,t,o)=>{const r=e[n];return tn(r)&&!tn(t)?(r.value=t,!0):Reflect.set(e,n,t,o)}};function pn(e){return Xe(e)?e:new Proxy(e,un)}class gn{constructor(e,n){this._object=e,this._key=n,this.__v_isRef=!0;}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e;}}function mn(e,n){return tn(e[n])?e[n]:new gn(e,n)}class vn{constructor(e,n,t){this._setter=n,this._dirty=!0,this.__v_isRef=!0,this.effect=Y(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,ce(Ye(this),"set","value"));}}),this.__v_isReadonly=t;}get value(){return this._dirty&&(this._value=this.effect(),this._dirty=!1),ie(Ye(this),0,"value"),this._value}set value(e){this._setter(e);}}function xn(e,n,t,o){let r;try{r=o?e(...o):e();}catch(e){kn(e,n,t);}return r}function wn(e,n,t,o){if(F(e)){const r=xn(e,n,t,o);return r&&O(r)&&r.catch(e=>{kn(e,n,t);}),r}const r=[];for(let s=0;s<e.length;s++)r.push(wn(e[s],n,t,o));return r}function kn(e,n,t,o=!0){if(n){let o=n.parent;const r=n.proxy,s=t;for(;o;){const n=o.ec;if(n)for(let t=0;t<n.length;t++)if(!1===n[t](e,r,s))return;o=o.parent;}const l=n.appContext.config.errorHandler;if(l)return void xn(l,null,10,[e,r,s])}!function(e,n,t,o=!0){console.error(e);}(e,0,0,o);}let Sn=!1,En=!1;const Fn=[];let An=0;const Tn=[];let Bn=null,On=0;const Ln=[];let Mn=null,Nn=0;const Rn=Promise.resolve();let Pn=null,Un=null;function Vn(e){const n=Pn||Rn;return e?n.then(this?e.bind(this):e):n}function In(e){Fn.length&&Fn.includes(e,Sn&&e.allowRecurse?An+1:An)||e===Un||(Fn.push(e),$n());}function $n(){Sn||En||(En=!0,Pn=Rn.then(Kn));}function jn(e,n,t,o){w(e)?t.push(...e):n&&n.includes(e,e.allowRecurse?o+1:o)||t.push(e),$n();}function Dn(e){jn(e,Mn,Ln,Nn);}function Hn(e,n=null){if(Tn.length){for(Un=n,Bn=[...new Set(Tn)],Tn.length=0,On=0;On<Bn.length;On++)Bn[On]();Bn=null,On=0,Un=null,Hn(e,n);}}function zn(e){if(Ln.length){const e=[...new Set(Ln)];if(Ln.length=0,Mn)return void Mn.push(...e);for(Mn=e,Mn.sort((e,n)=>Wn(e)-Wn(n)),Nn=0;Nn<Mn.length;Nn++)Mn[Nn]();Mn=null,Nn=0;}}const Wn=e=>null==e.id?1/0:e.id;function Kn(e){En=!1,Sn=!0,Hn(e),Fn.sort((e,n)=>Wn(e)-Wn(n));try{for(An=0;An<Fn.length;An++){const e=Fn[An];e&&xn(e,null,14);}}finally{An=0,Fn.length=0,zn(),Sn=!1,Pn=null,(Fn.length||Ln.length)&&Kn(e);}}function Jn(e,n,...t){const o=e.vnode.props||f;let r=t;const s=n.startsWith("update:"),l=s&&n.slice(7);if(l&&l in o){const e=("modelValue"===l?"model":l)+"Modifiers",{number:n,trim:s}=o[e]||f;s?r=t.map(e=>e.trim()):n&&(r=t.map(q));}let i=H(I(n)),c=o[i];!c&&s&&(i=H(j(n)),c=o[i]),c&&wn(c,e,6,r);const a=o[i+"Once"];if(a){if(e.emitted){if(e.emitted[i])return}else (e.emitted={})[i]=!0;wn(a,e,6,r);}}function Xn(e,n,t=!1){if(!n.deopt&&void 0!==e.__emits)return e.__emits;const o=e.emits;let r={},s=!1;if(!F(e)){const o=e=>{s=!0,_(r,Xn(e,n,!0));};!t&&n.mixins.length&&n.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o);}return o||s?(w(o)?o.forEach(e=>r[e]=null):_(r,o),e.__emits=r):e.__emits=null}function Zn(e,n){return !(!e||!v(n))&&(n=n.replace(/Once$/,""),x(e,n[2].toLowerCase()+n.slice(3))||x(e,n.slice(2)))}let Qn=null;function Yn(e){Qn=e;}function et(e){const{type:n,vnode:t,proxy:o,withProxy:r,props:s,propsOptions:[l],slots:i,attrs:c,emit:a,render:u,renderCache:p,data:f,setupState:d,ctx:h}=e;let g;Qn=e;try{let e;if(4&t.shapeFlag){const n=r||o;g=ur(u.call(n,n,p,s,d,f,h)),e=c;}else {const t=n;0,g=ur(t(s,t.length>1?{attrs:c,slots:i,emit:a}:null)),e=n.props?c:tt(c);}let m=g;if(!1!==n.inheritAttrs&&e){const n=Object.keys(e),{shapeFlag:t}=m;n.length&&(1&t||6&t)&&(l&&n.some(y)&&(e=ot(e,l)),m=lr(m,e));}t.dirs&&(m.dirs=m.dirs?m.dirs.concat(t.dirs):t.dirs),t.transition&&(m.transition=t.transition),g=m;}catch(n){kn(n,e,1),g=sr(zo);}return Qn=null,g}function nt(e){const n=e.filter(e=>!(Yo(e)&&e.type===zo&&"v-if"!==e.children));return 1===n.length&&Yo(n[0])?n[0]:null}const tt=e=>{let n;for(const t in e)("class"===t||"style"===t||v(t))&&((n||(n={}))[t]=e[t]);return n},ot=(e,n)=>{const t={};for(const o in e)y(o)&&o.slice(9)in n||(t[o]=e[o]);return t};function rt(e,n,t){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return !0;for(let r=0;r<o.length;r++){const s=o[r];if(n[s]!==e[s]&&!Zn(t,s))return !0}return !1}function st({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent;}function ct(e){if(F(e)&&(e=e()),w(e)){e=nt(e);}return ur(e)}function at(e,n){n&&n.pendingBranch?w(e)?n.effects.push(...e):n.effects.push(e):Dn(e);}let pt=0;const ft=e=>pt+=e;function ht(e,n=Qn){if(!n)return e;const t=(...t)=>{pt||Go(!0);const o=Qn;Yn(n);const r=e(...t);return Yn(o),pt||Jo(),r};return t._c=!0,t}let gt=null;function bt(e,n,t,o){const[r,s]=e.propsOptions;if(n)for(const s in n){const l=n[s];if(P(s))continue;let i;r&&x(r,i=I(s))?t[i]=l:Zn(e.emitsOptions,s)||(o[s]=l);}if(s){const n=Ye(t);for(let o=0;o<s.length;o++){const l=s[o];t[l]=Ct(r,n,l,n[l],e);}}}function Ct(e,n,t,o,r){const s=e[t];if(null!=s){const e=x(s,"default");if(e&&void 0===o){const e=s.default;s.type!==Function&&F(e)?(Lr(r),o=e(n),Lr(null)):o=e;}s[0]&&(x(n,t)||e?!s[1]||""!==o&&o!==j(t)||(o=!0):o=!1);}return o}function xt(e,n,t=!1){if(!n.deopt&&e.__props)return e.__props;const o=e.props,r={},s=[];let l=!1;if(!F(e)){const o=e=>{l=!0;const[t,o]=xt(e,n,!0);_(r,t),o&&s.push(...o);};!t&&n.mixins.length&&n.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o);}if(!o&&!l)return e.__props=d;if(w(o))for(let e=0;e<o.length;e++){const n=I(o[e]);wt(n)&&(r[n]=f);}else if(o)for(const e in o){const n=I(e);if(wt(n)){const t=o[e],l=r[n]=w(t)||F(t)?{type:t}:t;if(l){const e=Et(Boolean,l.type),t=Et(String,l.type);l[0]=e>-1,l[1]=t<0||e<t,(e>-1||x(l,"default"))&&s.push(n);}}}return e.__props=[r,s]}function wt(e){return "$"!==e[0]}function kt(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:""}function St(e,n){return kt(e)===kt(n)}function Et(e,n){if(w(n)){for(let t=0,o=n.length;t<o;t++)if(St(n[t],e))return t}else if(F(n))return St(n,e)?0:-1;return -1}function Ft(e,n,t=Br,o=!1){if(t){const r=t[e]||(t[e]=[]),s=n.__weh||(n.__weh=(...o)=>{if(t.isUnmounted)return;se(),Lr(t);const r=wn(n,t,e,o);return Lr(null),le(),r});return o?r.unshift(s):r.push(s),s}}const At=e=>(n,t=Br)=>!Nr&&Ft(e,n,t),Tt=At("bm"),Bt=At("m"),Ot=At("bu"),Lt=At("u"),Mt=At("bum"),Nt=At("um"),Rt=At("rtg"),Pt=At("rtc"),Ut=(e,n=Br)=>{Ft("ec",e,n);};const It={};function $t(e,n,t){return jt(e,n,t)}function jt(e,n,{immediate:t,deep:o,flush:r,onTrack:s,onTrigger:l}=f,i=Br){let c,a,u=!1;if(tn(e)?(c=()=>e.value,u=!!e._shallow):Xe(e)?(c=()=>e,o=!0):c=w(e)?()=>e.map(e=>tn(e)?e.value:Xe(e)?Ht(e):F(e)?xn(e,i,2):void 0):F(e)?n?()=>xn(e,i,2):()=>{if(!i||!i.isUnmounted)return a&&a(),xn(e,i,3,[p])}:h,n&&o){const e=c;c=()=>Ht(e());}const p=e=>{a=v.options.onStop=()=>{xn(e,i,4);};};let d=w(e)?[]:It;const g=()=>{if(v.active)if(n){const e=v();(o||u||z(e,d))&&(a&&a(),wn(n,i,3,[e,d===It?void 0:d,p]),d=e);}else v();};let m;g.allowRecurse=!!n,m="sync"===r?g:"post"===r?()=>So(g,i&&i.suspense):()=>{!i||i.isMounted?function(e){jn(e,Bn,Tn,On);}(g):g();};const v=Y(c,{lazy:!0,onTrack:s,onTrigger:l,scheduler:m});return Vr(v),n?t?g():d=v():"post"===r?So(v,i&&i.suspense):v(),()=>{ee(v),i&&b(i.effects,v);}}function Dt(e,n,t){const o=this.proxy;return jt(A(e)?()=>o[e]:e.bind(o),n.bind(o),t,this)}function Ht(e,n=new Set){if(!B(e)||n.has(e))return e;if(n.add(e),tn(e))Ht(e.value,n);else if(w(e))for(let t=0;t<e.length;t++)Ht(e[t],n);else if(S(e)||k(e))e.forEach(e=>{Ht(e,n);});else for(const t in e)Ht(e[t],n);return e}function zt(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bt(()=>{e.isMounted=!0;}),Mt(()=>{e.isUnmounting=!0;}),e}const Wt=[Function,Array],Kt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Wt,onEnter:Wt,onAfterEnter:Wt,onEnterCancelled:Wt,onBeforeLeave:Wt,onLeave:Wt,onAfterLeave:Wt,onLeaveCancelled:Wt,onBeforeAppear:Wt,onAppear:Wt,onAfterAppear:Wt,onAppearCancelled:Wt},setup(e,{slots:n}){const t=Or(),o=zt();let r;return ()=>{const s=n.default&&Qt(n.default(),!0);if(!s||!s.length)return;const l=Ye(e),{mode:i}=l,c=s[0];if(o.isLeaving)return Jt(c);const a=Xt(c);if(!a)return Jt(c);const u=Gt(a,l,o,t);Zt(a,u);const p=t.subTree,f=p&&Xt(p);let d=!1;const{getTransitionKey:h}=a.type;if(h){const e=h();void 0===r?r=e:e!==r&&(r=e,d=!0);}if(f&&f.type!==zo&&(!er(a,f)||d)){const e=Gt(f,l,o,t);if(Zt(f,e),"out-in"===i)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,t.update();},Jt(c);"in-out"===i&&(e.delayLeave=(e,n,t)=>{qt(o,f)[String(f.key)]=f,e._leaveCb=()=>{n(),e._leaveCb=void 0,delete u.delayedLeave;},u.delayedLeave=t;});}return c}}};function qt(e,n){const{leavingVNodes:t}=e;let o=t.get(n.type);return o||(o=Object.create(null),t.set(n.type,o)),o}function Gt(e,n,t,o){const{appear:r,mode:s,persisted:l=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:d,onLeaveCancelled:h,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:y}=n,_=String(e.key),b=qt(t,e),C=(e,n)=>{e&&wn(e,o,9,n);},x={mode:s,persisted:l,beforeEnter(n){let o=i;if(!t.isMounted){if(!r)return;o=g||i;}n._leaveCb&&n._leaveCb(!0);const s=b[_];s&&er(e,s)&&s.el._leaveCb&&s.el._leaveCb(),C(o,[n]);},enter(e){let n=c,o=a,s=u;if(!t.isMounted){if(!r)return;n=m||c,o=v||a,s=y||u;}let l=!1;const i=e._enterCb=n=>{l||(l=!0,C(n?s:o,[e]),x.delayedLeave&&x.delayedLeave(),e._enterCb=void 0);};n?(n(e,i),n.length<=1&&i()):i();},leave(n,o){const r=String(e.key);if(n._enterCb&&n._enterCb(!0),t.isUnmounting)return o();C(p,[n]);let s=!1;const l=n._leaveCb=t=>{s||(s=!0,o(),C(t?h:d,[n]),n._leaveCb=void 0,b[r]===e&&delete b[r]);};b[r]=e,f?(f(n,l),f.length<=1&&l()):l();},clone:e=>Gt(e,n,t,o)};return x}function Jt(e){if(Yt(e))return (e=lr(e)).children=null,e}function Xt(e){return Yt(e)?e.children?e.children[0]:void 0:e}function Zt(e,n){6&e.shapeFlag&&e.component?Zt(e.component.subTree,n):128&e.shapeFlag?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n;}function Qt(e,n=!1){let t=[],o=0;for(let r=0;r<e.length;r++){const s=e[r];s.type===Do?(128&s.patchFlag&&o++,t=t.concat(Qt(s.children,n))):(n||s.type!==zo)&&t.push(s);}if(o>1)for(let e=0;e<t.length;e++)t[e].patchFlag=-2;return t}const Yt=e=>e.type.__isKeepAlive;function oo(e,n){so(e,"a",n);}function ro(e,n){so(e,"da",n);}function so(e,n,t=Br){const o=e.__wdc||(e.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent;}e();});if(Ft(n,o,t),t){let e=t.parent;for(;e&&e.parent;)Yt(e.parent.vnode)&&lo(o,n,t,e),e=e.parent;}}function lo(e,n,t,o){const r=Ft(n,e,o,!0);Nt(()=>{b(o[n],r);},t);}const ao=e=>"_"===e[0]||"$stable"===e,uo=e=>w(e)?e.map(ur):[ur(e)],po=(e,n,t)=>ht(e=>uo(n(e)),t),fo=(e,n)=>{const t=e._ctx;for(const o in e){if(ao(o))continue;const r=e[o];if(F(r))n[o]=po(0,r,t);else if(null!=r){const e=uo(r);n[o]=()=>e;}}},ho=(e,n)=>{const t=uo(n);e.slots.default=()=>t;};function go(e,n){if(null===Qn)return e;const t=Qn.proxy,o=e.dirs||(e.dirs=[]);for(let e=0;e<n.length;e++){let[r,s,l,i=f]=n[e];F(r)&&(r={mounted:r,updated:r}),o.push({dir:r,instance:t,value:s,oldValue:void 0,arg:l,modifiers:i});}return e}function mo(e,n,t,o){const r=e.dirs,s=n&&n.dirs;for(let l=0;l<r.length;l++){const i=r[l];s&&(i.oldValue=s[l].value);const c=i.dir[o];c&&wn(c,t,8,[e.el,i,e,n]);}}function vo(){return {app:null,config:{isNativeTag:g,performance:!1,globalProperties:{},optionMergeStrategies:{},isCustomElement:g,errorHandler:void 0,warnHandler:void 0},mixins:[],components:{},directives:{},provides:Object.create(null)}}let yo=0;function _o(e,n){return function(t,o=null){null==o||B(o)||(o=null);const r=vo(),s=new Set;let l=!1;const i=r.app={_uid:yo++,_component:t,_props:o,_container:null,_context:r,version:ns,get config(){return r.config},set config(e){},use:(e,...n)=>(s.has(e)||(e&&F(e.install)?(s.add(e),e.install(i,...n)):F(e)&&(s.add(e),e(i,...n))),i),mixin:e=>(r.mixins.includes(e)||(r.mixins.push(e),(e.props||e.emits)&&(r.deopt=!0)),i),component:(e,n)=>n?(r.components[e]=n,i):r.components[e],directive:(e,n)=>n?(r.directives[e]=n,i):r.directives[e],mount(s,c){if(!l){const a=sr(t,o);return a.appContext=r,c&&n?n(a,s):e(a,s),l=!0,i._container=s,s.__vue_app__=i,a.component.proxy}},unmount(){l&&e(null,i._container);},provide:(e,n)=>(r.provides[e]=n,i)};return i}}const ko={scheduler:In,allowRecurse:!0},So=at,Eo=(e,n,t,o,r)=>{if(w(e))return void e.forEach((e,s)=>Eo(e,n&&(w(n)?n[s]:n),t,o,r));let s;s=r?4&r.shapeFlag?r.component.exposed||r.component.proxy:r.el:null;const{i:l,r:i}=e,c=n&&n.r,a=l.refs===f?l.refs={}:l.refs,u=l.setupState;if(null!=c&&c!==i&&(A(c)?(a[c]=null,x(u,c)&&(u[c]=null)):tn(c)&&(c.value=null)),A(i)){const e=()=>{a[i]=s,x(u,i)&&(u[i]=s);};s?(e.id=-1,So(e,o)):e();}else if(tn(i)){const e=()=>{i.value=s;};s?(e.id=-1,So(e,o)):e();}else F(i)&&xn(i,t,12,[s,a]);};function Fo(e){return To(e)}function To(e,n){const{insert:t,remove:o,patchProp:r,forcePatchProp:s,createElement:l,createText:i,createComment:c,setText:a,setElementText:u,parentNode:p,nextSibling:g,setScopeId:m=h,cloneNode:v,insertStaticContent:y}=e,b=(e,n,t,o=null,r=null,s=null,l=!1,i=!1)=>{e&&!er(e,n)&&(o=ne(e),G(e,r,s,!0),e=null),-2===n.patchFlag&&(i=!1,n.dynamicChildren=null);const{type:c,ref:a,shapeFlag:u}=n;switch(c){case Ho:C(e,n,t,o);break;case zo:w(e,n,t,o);break;case Wo:null==e&&k(n,t,o,l);break;case Do:M(e,n,t,o,r,s,l,i);break;default:1&u?S(e,n,t,o,r,s,l,i):6&u?N(e,n,t,o,r,s,l,i):(64&u||128&u)&&c.process(e,n,t,o,r,s,l,i,oe);}null!=a&&r&&Eo(a,e&&e.ref,r,s,n);},C=(e,n,o,r)=>{if(null==e)t(n.el=i(n.children),o,r);else {const t=n.el=e.el;n.children!==e.children&&a(t,n.children);}},w=(e,n,o,r)=>{null==e?t(n.el=c(n.children||""),o,r):n.el=e.el;},k=(e,n,t,o)=>{[e.el,e.anchor]=y(e.children,n,t,o);},S=(e,n,t,o,r,s,l,i)=>{l=l||"svg"===n.type,null==e?E(n,t,o,r,s,l,i):T(e,n,r,s,l,i);},E=(e,n,o,s,i,c,a)=>{let p,f;const{type:d,props:h,shapeFlag:g,transition:m,scopeId:y,patchFlag:_,dirs:b}=e;if(e.el&&void 0!==v&&-1===_)p=e.el=v(e.el);else {if(p=e.el=l(e.type,c,h&&h.is),8&g?u(p,e.children):16&g&&A(e.children,p,null,s,i,c&&"foreignObject"!==d,a||!!e.dynamicChildren),b&&mo(e,null,s,"created"),h){for(const n in h)P(n)||r(p,n,null,h[n],c,e.children,s,i,Q);(f=h.onVnodeBeforeMount)&&Bo(f,s,e);}F(p,y,e,s);}b&&mo(e,null,s,"beforeMount");const C=(!i||i&&!i.pendingBranch)&&m&&!m.persisted;C&&m.beforeEnter(p),t(p,n,o),((f=h&&h.onVnodeMounted)||C||b)&&So(()=>{f&&Bo(f,s,e),C&&m.enter(p),b&&mo(e,null,s,"mounted");},i);},F=(e,n,t,o)=>{if(n&&m(e,n),o){const r=o.type.__scopeId;r&&r!==n&&m(e,r+"-s"),t===o.subTree&&F(e,o.vnode.scopeId,o.vnode,o.parent);}},A=(e,n,t,o,r,s,l,i=0)=>{for(let c=i;c<e.length;c++){const i=e[c]=l?pr(e[c]):ur(e[c]);b(null,i,n,t,o,r,s,l);}},T=(e,n,t,o,l,i)=>{const c=n.el=e.el;let{patchFlag:a,dynamicChildren:p,dirs:d}=n;a|=16&e.patchFlag;const h=e.props||f,g=n.props||f;let m;if((m=g.onVnodeBeforeUpdate)&&Bo(m,t,n,e),d&&mo(n,e,t,"beforeUpdate"),a>0){if(16&a)L(c,n,h,g,t,o,l);else if(2&a&&h.class!==g.class&&r(c,"class",null,g.class,l),4&a&&r(c,"style",h.style,g.style,l),8&a){const i=n.dynamicProps;for(let n=0;n<i.length;n++){const a=i[n],u=h[a],p=g[a];(p!==u||s&&s(c,a))&&r(c,a,u,p,l,e.children,t,o,Q);}}1&a&&e.children!==n.children&&u(c,n.children);}else i||null!=p||L(c,n,h,g,t,o,l);const v=l&&"foreignObject"!==n.type;p?B(e.dynamicChildren,p,c,t,o,v):i||D(e,n,c,null,t,o,v),((m=g.onVnodeUpdated)||d)&&So(()=>{m&&Bo(m,t,n,e),d&&mo(n,e,t,"updated");},o);},B=(e,n,t,o,r,s)=>{for(let l=0;l<n.length;l++){const i=e[l],c=n[l],a=i.type===Do||!er(i,c)||6&i.shapeFlag||64&i.shapeFlag?p(i.el):t;b(i,c,a,null,o,r,s,!0);}},L=(e,n,t,o,l,i,c)=>{if(t!==o){for(const a in o){if(P(a))continue;const u=o[a],p=t[a];(u!==p||s&&s(e,a))&&r(e,a,p,u,c,n.children,l,i,Q);}if(t!==f)for(const s in t)P(s)||s in o||r(e,s,t[s],null,c,n.children,l,i,Q);}},M=(e,n,o,r,s,l,c,a)=>{const u=n.el=e?e.el:i(""),p=n.anchor=e?e.anchor:i("");let{patchFlag:f,dynamicChildren:d}=n;f>0&&(a=!0),null==e?(t(u,o,r),t(p,o,r),A(n.children,o,p,s,l,c,a)):f>0&&64&f&&d?(B(e.dynamicChildren,d,o,s,l,c),(null!=n.key||s&&n===s.subTree)&&Oo(e,n,!0)):D(e,n,o,p,s,l,c,a);},N=(e,n,t,o,r,s,l,i)=>{null==e?512&n.shapeFlag?r.ctx.activate(n,t,o,l,i):R(n,t,o,r,s,l,i):U(e,n,i);},R=(e,n,t,o,r,s,l)=>{const i=e.component=function(e,n,t){const o=e.type,r=(n?n.appContext:e.appContext)||Ar,s={uid:Tr++,vnode:e,type:o,parent:n,appContext:r,root:null,next:null,subTree:null,update:null,render:null,proxy:null,exposed:null,withProxy:null,effects:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xt(o,r),emitsOptions:Xn(o,r),emit:null,emitted:null,ctx:f,data:f,props:f,attrs:f,slots:f,refs:f,setupState:f,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null};return s.ctx={_:s},s.root=n?n.root:s,s.emit=Jn.bind(null,s),s}(e,o,r);if(Yt(e)&&(i.ctx.renderer=oe),function(e,n=!1){Nr=n;const{props:t,children:o,shapeFlag:r}=e.vnode,s=4&r;(function(e,n,t,o=!1){const r={},s={};K(s,tr,1),bt(e,n,r,s),e.props=t?o?r:Ke(r):e.type.props?r:s,e.attrs=s;})(e,t,s,n),((e,n)=>{if(32&e.vnode.shapeFlag){const t=n._;t?(e.slots=n,K(n,"_",t)):fo(n,e.slots={});}else e.slots={},n&&ho(e,n);K(e.slots,tr,1);})(e,o);const l=s?function(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Er);const{setup:o}=t;if(o){const t=e.setupContext=o.length>1?function(e){const n=n=>{e.exposed=pn(n);};return {attrs:e.attrs,slots:e.slots,emit:e.emit,expose:n}}(e):null;Br=e,se();const r=xn(o,e,0,[e.props,t]);if(le(),Br=null,O(r)){if(n)return r.then(n=>{Rr(e,n);});e.asyncDep=r;}else Rr(e,r);}else Ur(e);}(e,n):void 0;Nr=!1;}(i),i.asyncDep){if(r&&r.registerDep(i,V),!e.el){const e=i.subTree=sr(zo);w(null,e,n,t);}}else V(i,e,n,t,r,s,l);},U=(e,n,t)=>{const o=n.component=e.component;if(function(e,n,t){const{props:o,children:r,component:s}=e,{props:l,children:i,patchFlag:c}=n,a=s.emitsOptions;if(n.dirs||n.transition)return !0;if(!(t&&c>=0))return !(!r&&!i||i&&i.$stable)||o!==l&&(o?!l||rt(o,l,a):!!l);if(1024&c)return !0;if(16&c)return o?rt(o,l,a):!!l;if(8&c){const e=n.dynamicProps;for(let n=0;n<e.length;n++){const t=e[n];if(l[t]!==o[t]&&!Zn(a,t))return !0}}return !1}(e,n,t)){if(o.asyncDep&&!o.asyncResolved)return void $(o,n,t);o.next=n,function(e){const n=Fn.indexOf(e);n>-1&&Fn.splice(n,1);}(o.update),o.update();}else n.component=e.component,n.el=e.el,o.vnode=n;},V=(e,n,t,o,r,s,l)=>{e.update=Y((function(){if(e.isMounted){let n,{next:t,bu:o,u:i,parent:c,vnode:a}=e,u=t;t?(t.el=a.el,$(e,t,l)):t=a,o&&W(o),(n=t.props&&t.props.onVnodeBeforeUpdate)&&Bo(n,c,t,a);const f=et(e),d=e.subTree;e.subTree=f,b(d,f,p(d.el),ne(d),e,r,s),t.el=f.el,null===u&&st(e,f.el),i&&So(i,r),(n=t.props&&t.props.onVnodeUpdated)&&So(()=>{Bo(n,c,t,a);},r);}else {let l;const{el:i,props:c}=n,{bm:a,m:u,parent:p}=e;a&&W(a),(l=c&&c.onVnodeBeforeMount)&&Bo(l,p,n);const f=e.subTree=et(e);i&&ie?ie(n.el,f,e,r):(b(null,f,t,o,e,r,s),n.el=f.el),u&&So(u,r),(l=c&&c.onVnodeMounted)&&So(()=>{Bo(l,p,n);},r);const{a:d}=e;d&&256&n.shapeFlag&&So(d,r),e.isMounted=!0;}}),ko);},$=(e,n,t)=>{n.component=e;const o=e.vnode.props;e.vnode=n,e.next=null,function(e,n,t,o){const{props:r,attrs:s,vnode:{patchFlag:l}}=e,i=Ye(r),[c]=e.propsOptions;if(!(o||l>0)||16&l){let o;bt(e,n,r,s);for(const s in i)n&&(x(n,s)||(o=j(s))!==s&&x(n,o))||(c?!t||void 0===t[s]&&void 0===t[o]||(r[s]=Ct(c,n||f,s,void 0,e)):delete r[s]);if(s!==i)for(const e in s)n&&x(n,e)||delete s[e];}else if(8&l){const t=e.vnode.dynamicProps;for(let o=0;o<t.length;o++){const l=t[o],a=n[l];if(c)if(x(s,l))s[l]=a;else {const n=I(l);r[n]=Ct(c,i,n,a,e);}else s[l]=a;}}ce(e,"set","$attrs");}(e,n.props,o,t),((e,n)=>{const{vnode:t,slots:o}=e;let r=!0,s=f;if(32&t.shapeFlag){const e=n._;e?1===e?r=!1:_(o,n):(r=!n.$stable,fo(n,o)),s=n;}else n&&(ho(e,n),s={default:1});if(r)for(const e in o)ao(e)||e in s||delete o[e];})(e,n.children),Hn(void 0,e.update);},D=(e,n,t,o,r,s,l,i=!1)=>{const c=e&&e.children,a=e?e.shapeFlag:0,p=n.children,{patchFlag:f,shapeFlag:d}=n;if(f>0){if(128&f)return void z(c,p,t,o,r,s,l,i);if(256&f)return void H(c,p,t,o,r,s,l,i)}8&d?(16&a&&Q(c,r,s),p!==c&&u(t,p)):16&a?16&d?z(c,p,t,o,r,s,l,i):Q(c,r,s,!0):(8&a&&u(t,""),16&d&&A(p,t,o,r,s,l,i));},H=(e,n,t,o,r,s,l,i)=>{const c=(e=e||d).length,a=(n=n||d).length,u=Math.min(c,a);let p;for(p=0;p<u;p++){const o=n[p]=i?pr(n[p]):ur(n[p]);b(e[p],o,t,null,r,s,l,i);}c>a?Q(e,r,s,!0,!1,u):A(n,t,o,r,s,l,i,u);},z=(e,n,t,o,r,s,l,i)=>{let c=0;const a=n.length;let u=e.length-1,p=a-1;for(;c<=u&&c<=p;){const o=e[c],a=n[c]=i?pr(n[c]):ur(n[c]);if(!er(o,a))break;b(o,a,t,null,r,s,l,i),c++;}for(;c<=u&&c<=p;){const o=e[u],c=n[p]=i?pr(n[p]):ur(n[p]);if(!er(o,c))break;b(o,c,t,null,r,s,l,i),u--,p--;}if(c>u){if(c<=p){const e=p+1,u=e<a?n[e].el:o;for(;c<=p;)b(null,n[c]=i?pr(n[c]):ur(n[c]),t,u,r,s,l),c++;}}else if(c>p)for(;c<=u;)G(e[c],r,s,!0),c++;else {const f=c,h=c,g=new Map;for(c=h;c<=p;c++){const e=n[c]=i?pr(n[c]):ur(n[c]);null!=e.key&&g.set(e.key,c);}let m,v=0;const y=p-h+1;let _=!1,C=0;const x=new Array(y);for(c=0;c<y;c++)x[c]=0;for(c=f;c<=u;c++){const o=e[c];if(v>=y){G(o,r,s,!0);continue}let a;if(null!=o.key)a=g.get(o.key);else for(m=h;m<=p;m++)if(0===x[m-h]&&er(o,n[m])){a=m;break}void 0===a?G(o,r,s,!0):(x[a-h]=c+1,a>=C?C=a:_=!0,b(o,n[a],t,null,r,s,l,i),v++);}const w=_?function(e){const n=e.slice(),t=[0];let o,r,s,l,i;const c=e.length;for(o=0;o<c;o++){const c=e[o];if(0!==c){if(r=t[t.length-1],e[r]<c){n[o]=r,t.push(o);continue}for(s=0,l=t.length-1;s<l;)i=(s+l)/2|0,e[t[i]]<c?s=i+1:l=i;c<e[t[s]]&&(s>0&&(n[o]=t[s-1]),t[s]=o);}}s=t.length,l=t[s-1];for(;s-- >0;)t[s]=l,l=n[l];return t}(x):d;for(m=w.length-1,c=y-1;c>=0;c--){const e=h+c,i=n[e],u=e+1<a?n[e+1].el:o;0===x[c]?b(null,i,t,u,r,s,l):_&&(m<0||c!==w[m]?q(i,t,u,2):m--);}}},q=(e,n,o,r,s=null)=>{const{el:l,type:i,transition:c,children:a,shapeFlag:u}=e;if(6&u)return void q(e.component.subTree,n,o,r);if(128&u)return void e.suspense.move(n,o,r);if(64&u)return void i.move(e,n,o,oe);if(i===Do){t(l,n,o);for(let e=0;e<a.length;e++)q(a[e],n,o,r);return void t(e.anchor,n,o)}if(2!==r&&1&u&&c)if(0===r)c.beforeEnter(l),t(l,n,o),So(()=>c.enter(l),s);else {const{leave:e,delayLeave:r,afterLeave:s}=c,i=()=>t(l,n,o),a=()=>{e(l,()=>{i(),s&&s();});};r?r(l,i,a):a();}else t(l,n,o);},G=(e,n,t,o=!1,r=!1)=>{const{type:s,props:l,ref:i,children:c,dynamicChildren:a,shapeFlag:u,patchFlag:p,dirs:f}=e;if(null!=i&&n&&Eo(i,null,n,t,null),256&u)return void n.ctx.deactivate(e);const d=1&u&&f;let h;if((h=l&&l.onVnodeBeforeUnmount)&&Bo(h,n,e),6&u)Z(e.component,t,o);else {if(128&u)return void e.suspense.unmount(t,o);d&&mo(e,null,n,"beforeUnmount"),a&&(s!==Do||p>0&&64&p)?Q(a,n,t,!1,!0):(s===Do&&(128&p||256&p)||!r&&16&u)&&Q(c,n,t),64&u&&(o||!Lo(e.props))&&e.type.remove(e,oe),o&&J(e);}((h=l&&l.onVnodeUnmounted)||d)&&So(()=>{h&&Bo(h,n,e),d&&mo(e,null,n,"unmounted");},t);},J=e=>{const{type:n,el:t,anchor:r,transition:s}=e;if(n===Do)return void X(t,r);const l=()=>{o(t),s&&!s.persisted&&s.afterLeave&&s.afterLeave();};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:n,delayLeave:o}=s,r=()=>n(t,l);o?o(e.el,l,r):r();}else l();},X=(e,n)=>{let t;for(;e!==n;)t=g(e),o(e),e=t;o(n);},Z=(e,n,t)=>{const{bum:o,effects:r,update:s,subTree:l,um:i}=e;if(o&&W(o),r)for(let e=0;e<r.length;e++)ee(r[e]);s&&(ee(s),G(l,e,n,t)),i&&So(i,n),So(()=>{e.isUnmounted=!0;},n),n&&n.pendingBranch&&!n.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===n.pendingId&&(n.deps--,0===n.deps&&n.resolve());},Q=(e,n,t,o=!1,r=!1,s=0)=>{for(let l=s;l<e.length;l++)G(e[l],n,t,o,r);},ne=e=>6&e.shapeFlag?ne(e.component.subTree):128&e.shapeFlag?e.suspense.next():g(e.anchor||e.el),te=(e,n)=>{null==e?n._vnode&&G(n._vnode,null,null,!0):b(n._vnode||null,e,n),zn(),n._vnode=e;},oe={p:b,um:G,m:q,r:J,mt:R,mc:A,pc:D,pbc:B,n:ne,o:e};let re,ie;return n&&([re,ie]=n(oe)),{render:te,hydrate:re,createApp:_o(te,re)}}function Bo(e,n,t,o=null){wn(e,n,7,[t,o]);}function Oo(e,n,t=!1){const o=e.children,r=n.children;if(w(o)&&w(r))for(let e=0;e<o.length;e++){const n=o[e];let s=r[e];1&s.shapeFlag&&!s.dynamicChildren&&((s.patchFlag<=0||32===s.patchFlag)&&(s=r[e]=pr(r[e]),s.el=n.el),t||Oo(n,s));}}const Lo=e=>e&&(e.disabled||""===e.disabled);function Po(e){return $o("components",e)||e}const Uo=Symbol();function Vo(e){return A(e)?$o("components",e,!1)||e:e||Uo}function $o(e,n,t=!0){const o=Qn||Br;if(o){const t=o.type;if("components"===e){const e=t.displayName||t.name;if(e&&(e===n||e===I(n)||e===D(I(n))))return t}return jo(o[e]||t[e],n)||jo(o.appContext[e],n)}}function jo(e,n){return e&&(e[n]||e[I(n)]||e[D(I(n))])}const Do=Symbol(void 0),Ho=Symbol(void 0),zo=Symbol(void 0),Wo=Symbol(void 0),Ko=[];let qo=null;function Go(e=!1){Ko.push(qo=e?null:[]);}function Jo(){Ko.pop(),qo=Ko[Ko.length-1]||null;}function Qo(e,n,t,o,r){const s=sr(e,n,t,o,r,!0);return s.dynamicChildren=qo||d,Jo(),qo&&qo.push(s),s}function Yo(e){return !!e&&!0===e.__v_isVNode}function er(e,n){return e.type===n.type&&e.key===n.key}const tr="__vInternal",or=({key:e})=>null!=e?e:null,rr=({ref:e})=>null!=e?w(e)?e:{i:Qn,r:e}:null,sr=function(e,n=null,t=null,r=0,s=null,l=!1){e&&e!==Uo||(e=zo);if(Yo(e)){const o=lr(e,n,!0);return t&&fr(o,t),o}c=e,F(c)&&"__vccOpts"in c&&(e=e.__vccOpts);var c;if(n){(Qe(n)||tr in n)&&(n=_({},n));let{class:e,style:t}=n;e&&!A(e)&&(n.class=i(e)),B(t)&&(Qe(t)&&!w(t)&&(t=_({},t)),n.style=o(t));}const a=A(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:B(e)?4:F(e)?2:0,u={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&or(n),ref:n&&rr(n),scopeId:gt,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};if(fr(u,t),128&a){const{content:e,fallback:n}=function(e){const{shapeFlag:n,children:t}=e;let o,r;return 32&n?(o=ct(t.default),r=ct(t.fallback)):(o=ct(t),r=ur(null)),{content:o,fallback:r}}(u);u.ssContent=e,u.ssFallback=n;}!l&&qo&&(r>0||6&a)&&32!==r&&qo.push(u);return u};function lr(e,n,t=!1){const{props:o,ref:r,patchFlag:s}=e,l=n?dr(o||{},n):o;return {__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&or(l),ref:n&&n.ref?t&&r?w(r)?r.concat(rr(n)):[r,rr(n)]:rr(n):r,scopeId:e.scopeId,children:e.children,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Do?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lr(e.ssContent),ssFallback:e.ssFallback&&lr(e.ssFallback),el:e.el,anchor:e.anchor}}function ir(e=" ",n=0){return sr(Ho,null,e,n)}function ur(e){return null==e||"boolean"==typeof e?sr(zo):w(e)?sr(Do,null,e):"object"==typeof e?null===e.el?e:lr(e):sr(Ho,null,String(e))}function pr(e){return null===e.el?e:lr(e)}function fr(e,n){let t=0;const{shapeFlag:o}=e;if(null==n)n=null;else if(w(n))t=16;else if("object"==typeof n){if(1&o||64&o){const t=n.default;return void(t&&(t._c&&ft(1),fr(e,t()),t._c&&ft(-1)))}{t=32;const o=n._;o||tr in n?3===o&&Qn&&(1024&Qn.vnode.patchFlag?(n._=2,e.patchFlag|=1024):n._=1):n._ctx=Qn;}}else F(n)?(n={default:n,_ctx:Qn},t=32):(n=String(n),64&o?(t=16,n=[ir(n)]):t=8);e.children=n,e.shapeFlag|=t;}function dr(...e){const n=_({},e[0]);for(let t=1;t<e.length;t++){const r=e[t];for(const e in r)if("class"===e)n.class!==r.class&&(n.class=i([n.class,r.class]));else if("style"===e)n.style=o([n.style,r.style]);else if(v(e)){const t=n[e],o=r[e];t!==o&&(n[e]=t?[].concat(t,r[e]):o);}else ""!==e&&(n[e]=r[e]);}return n}function hr(e,n){if(Br){let t=Br.provides;const o=Br.parent&&Br.parent.provides;o===t&&(t=Br.provides=Object.create(o)),t[e]=n;}}function gr(e,n,t=!1){const o=Br||Qn;if(o){const r=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&F(n)?n():n}}let mr=!1;function vr(e,n,t=[],o=[],r=[],s=!1){const{mixins:l,extends:i,data:c,computed:a,methods:u,watch:p,provide:d,inject:g,components:m,directives:v,beforeMount:y,mounted:b,beforeUpdate:C,updated:x,activated:k,deactivated:S,beforeUnmount:E,unmounted:A,render:T,renderTracked:O,renderTriggered:L,errorCaptured:M,expose:N}=n,R=e.proxy,P=e.ctx,U=e.appContext.mixins;if(s&&T&&e.render===h&&(e.render=T),s||(mr=!0,yr("beforeCreate","bc",n,e,U),mr=!1,Cr(e,U,t,o,r)),i&&vr(e,i,t,o,r,!0),l&&Cr(e,l,t,o,r),g)if(w(g))for(let e=0;e<g.length;e++){const n=g[e];P[n]=gr(n);}else for(const e in g){const n=g[e];P[e]=B(n)?gr(n.from||e,n.default,!0):gr(n);}if(u)for(const e in u){const n=u[e];F(n)&&(P[e]=n.bind(R));}if(s?c&&t.push(c):(t.length&&t.forEach(n=>xr(e,n,R)),c&&xr(e,c,R)),a)for(const e in a){const n=a[e],t=jr({get:F(n)?n.bind(R,R):F(n.get)?n.get.bind(R,R):h,set:!F(n)&&F(n.set)?n.set.bind(R):h});Object.defineProperty(P,e,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e});}if(p&&o.push(p),!s&&o.length&&o.forEach(e=>{for(const n in e)wr(e[n],P,R,n);}),d&&r.push(d),!s&&r.length&&r.forEach(e=>{const n=F(e)?e.call(R):e;for(const e in n)hr(e,n[e]);}),s&&(m&&_(e.components||(e.components=_({},e.type.components)),m),v&&_(e.directives||(e.directives=_({},e.type.directives)),v)),s||yr("created","c",n,e,U),y&&Tt(y.bind(R)),b&&Bt(b.bind(R)),C&&Ot(C.bind(R)),x&&Lt(x.bind(R)),k&&oo(k.bind(R)),S&&ro(S.bind(R)),M&&Ut(M.bind(R)),O&&Pt(O.bind(R)),L&&Rt(L.bind(R)),E&&Mt(E.bind(R)),A&&Nt(A.bind(R)),w(N)&&!s)if(N.length){const n=e.exposed||(e.exposed=pn({}));N.forEach(e=>{n[e]=mn(R,e);});}else e.exposed||(e.exposed=f);}function yr(e,n,t,o,r){br(e,n,r,o);const{extends:s,mixins:l}=t;s&&_r(e,n,s,o),l&&br(e,n,l,o);const i=t[e];i&&wn(i.bind(o.proxy),o,n);}function _r(e,n,t,o){t.extends&&_r(e,n,t.extends,o);const r=t[e];r&&wn(r.bind(o.proxy),o,n);}function br(e,n,t,o){for(let r=0;r<t.length;r++){const s=t[r].mixins;s&&br(e,n,s,o);const l=t[r][e];l&&wn(l.bind(o.proxy),o,n);}}function Cr(e,n,t,o,r){for(let s=0;s<n.length;s++)vr(e,n[s],t,o,r,!0);}function xr(e,n,t){const o=n.call(t,t);B(o)&&(e.data===f?e.data=We(o):_(e.data,o));}function wr(e,n,t,o){const r=o.includes(".")?function(e,n){const t=n.split(".");return ()=>{let n=e;for(let e=0;e<t.length&&n;e++)n=n[t[e]];return n}}(t,o):()=>t[o];if(A(e)){const t=n[e];F(t)&&$t(r,t);}else if(F(e))$t(r,e.bind(t));else if(B(e))if(w(e))e.forEach(e=>wr(e,n,t,o));else {const o=F(e.handler)?e.handler.bind(t):n[e.handler];F(o)&&$t(r,o,e);}}function kr(e,n,t){const o=t.appContext.config.optionMergeStrategies,{mixins:r,extends:s}=n;s&&kr(e,s,t),r&&r.forEach(n=>kr(e,n,t));for(const r in n)e[r]=o&&x(o,r)?o[r](e[r],n[r],t.proxy,r):n[r];}const Sr=_(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>e.parent&&e.parent.proxy,$root:e=>e.root&&e.root.proxy,$emit:e=>e.emit,$options:e=>function(e){const n=e.type,{__merged:t,mixins:o,extends:r}=n;if(t)return t;const s=e.appContext.mixins;if(!s.length&&!o&&!r)return n;const l={};return s.forEach(n=>kr(l,n,e)),kr(l,n,e),n.__merged=l}(e),$forceUpdate:e=>()=>In(e.update),$nextTick:e=>Vn.bind(e.proxy),$watch:e=>Dt.bind(e)}),Er={get({_:e},n){const{ctx:t,setupState:o,data:r,props:s,accessCache:l,type:i,appContext:c}=e;if("__v_skip"===n)return !0;let a;if("$"!==n[0]){const i=l[n];if(void 0!==i)switch(i){case 0:return o[n];case 1:return r[n];case 3:return t[n];case 2:return s[n]}else {if(o!==f&&x(o,n))return l[n]=0,o[n];if(r!==f&&x(r,n))return l[n]=1,r[n];if((a=e.propsOptions[0])&&x(a,n))return l[n]=2,s[n];if(t!==f&&x(t,n))return l[n]=3,t[n];mr||(l[n]=4);}}const u=Sr[n];let p,d;return u?("$attrs"===n&&ie(e,0,n),u(e)):(p=i.__cssModules)&&(p=p[n])?p:t!==f&&x(t,n)?(l[n]=3,t[n]):(d=c.config.globalProperties,x(d,n)?d[n]:void 0)},set({_:e},n,t){const{data:o,setupState:r,ctx:s}=e;if(r!==f&&x(r,n))r[n]=t;else if(o!==f&&x(o,n))o[n]=t;else if(n in e.props)return !1;return ("$"!==n[0]||!(n.slice(1)in e))&&(s[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:o,appContext:r,propsOptions:s}},l){let i;return void 0!==t[l]||e!==f&&x(e,l)||n!==f&&x(n,l)||(i=s[0])&&x(i,l)||x(o,l)||x(Sr,l)||x(r.config.globalProperties,l)}},Fr=_({},Er,{get(e,n){if(n!==Symbol.unscopables)return Er.get(e,n,e)},has:(e,t)=>"_"!==t[0]&&!n(t)}),Ar=vo();let Tr=0;let Br=null;const Or=()=>Br||Qn,Lr=e=>{Br=e;};let Nr=!1;function Rr(e,n,t){F(n)?e.render=n:B(n)&&(e.setupState=pn(n)),Ur(e);}function Ur(e,n){const t=e.type;e.render||(e.render=t.render||h,e.render._rc&&(e.withProxy=new Proxy(e.ctx,Fr))),Br=e,vr(e,t),Br=null;}function Vr(e){Br&&(Br.effects||(Br.effects=[])).push(e);}function jr(e){const n=function(e){let n,t;return F(e)?(n=e,t=h):(n=e.get,t=e.set),new vn(n,t,F(e)||!e.set)}(e);return Vr(n.effect),n}function Dr(e){return F(e)?{setup:e,name:e.name}:e}function Gr(e,n,t){const o=arguments.length;return 2===o?B(n)&&!w(n)?Yo(n)?sr(e,null,[n]):sr(e,n):sr(e,null,n):(o>3?t=Array.prototype.slice.call(arguments,2):3===o&&Yo(t)&&(t=[t]),sr(e,n,t))}function Qr(e,n){let t;if(w(e)||A(e)){t=new Array(e.length);for(let o=0,r=e.length;o<r;o++)t[o]=n(e[o],o);}else if("number"==typeof e){t=new Array(e);for(let o=0;o<e;o++)t[o]=n(o+1,o);}else if(B(e))if(e[Symbol.iterator])t=Array.from(e,n);else {const o=Object.keys(e);t=new Array(o.length);for(let r=0,s=o.length;r<s;r++){const s=o[r];t[r]=n(e[s],s,r);}}else t=[];return t}const ns="3.0.3",os="http://www.w3.org/2000/svg",rs="undefined"!=typeof document?document:null;let ss,ls;const is={insert:(e,n,t)=>{n.insertBefore(e,t||null);},remove:e=>{const n=e.parentNode;n&&n.removeChild(e);},createElement:(e,n,t)=>n?rs.createElementNS(os,e):rs.createElement(e,t?{is:t}:void 0),createText:e=>rs.createTextNode(e),createComment:e=>rs.createComment(e),setText:(e,n)=>{e.nodeValue=n;},setElementText:(e,n)=>{e.textContent=n;},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rs.querySelector(e),setScopeId(e,n){e.setAttribute(n,"");},cloneNode:e=>e.cloneNode(!0),insertStaticContent(e,n,t,o){const r=o?ls||(ls=rs.createElementNS(os,"svg")):ss||(ss=rs.createElement("div"));r.innerHTML=e;const s=r.firstChild;let l=s,i=l;for(;l;)i=l,is.insert(l,n,t),l=r.firstChild;return [s,i]}};const cs=/\s*!important$/;function as(e,n,t){if(w(t))t.forEach(t=>as(e,n,t));else if(n.startsWith("--"))e.setProperty(n,t);else {const o=function(e,n){const t=ps[n];if(t)return t;let o=I(n);if("filter"!==o&&o in e)return ps[n]=o;o=D(o);for(let t=0;t<us.length;t++){const r=us[t]+o;if(r in e)return ps[n]=r}return n}(e,n);cs.test(t)?e.setProperty(j(o),t.replace(cs,""),"important"):e[o]=t;}}const us=["Webkit","Moz","ms"],ps={};const fs="http://www.w3.org/1999/xlink";let ds=Date.now;"undefined"!=typeof document&&ds()>document.createEvent("Event").timeStamp&&(ds=()=>performance.now());let hs=0;const gs=Promise.resolve(),ms=()=>{hs=0;};function vs(e,n,t,o){e.addEventListener(n,t,o);}function ys(e,n,t,o,r=null){const s=e._vei||(e._vei={}),l=s[n];if(o&&l)l.value=o;else {const[t,i]=function(e){let n;if(_s.test(e)){let t;for(n={};t=e.match(_s);)e=e.slice(0,e.length-t[0].length),n[t[0].toLowerCase()]=!0;}return [e.slice(2).toLowerCase(),n]}(n);if(o){vs(e,t,s[n]=function(e,n){const t=e=>{(e.timeStamp||ds())>=t.attached-1&&wn(function(e,n){if(w(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0;},n.map(e=>n=>!n._stopped&&e(n))}return n}(e,t.value),n,5,[e]);};return t.value=e,t.attached=(()=>hs||(gs.then(ms),hs=ds()))(),t}(o,r),i);}else l&&(!function(e,n,t,o){e.removeEventListener(n,t,o);}(e,t,l,i),s[n]=void 0);}}const _s=/(?:Once|Passive|Capture)$/;const bs=/^on[a-z]/;const ks=(e,{slots:n})=>Gr(Kt,Fs(e),n);ks.displayName="Transition";const Ss={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Es=ks.props=_({},Kt.props,Ss);function Fs(e){let{name:n="v",type:t,css:o=!0,duration:r,enterFromClass:s=n+"-enter-from",enterActiveClass:l=n+"-enter-active",enterToClass:i=n+"-enter-to",appearFromClass:c=s,appearActiveClass:a=l,appearToClass:u=i,leaveFromClass:p=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:d=n+"-leave-to"}=e;const h={};for(const n in e)n in Ss||(h[n]=e[n]);if(!o)return h;const g=function(e){if(null==e)return null;if(B(e))return [As(e.enter),As(e.leave)];{const n=As(e);return [n,n]}}(r),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:C,onLeave:x,onLeaveCancelled:w,onBeforeAppear:k=y,onAppear:S=b,onAppearCancelled:E=C}=h,F=(e,n,t)=>{Bs(e,n?u:i),Bs(e,n?a:l),t&&t();},A=(e,n)=>{Bs(e,d),Bs(e,f),n&&n();},T=e=>(n,o)=>{const r=e?S:b,l=()=>F(n,e,o);r&&r(n,l),Os(()=>{Bs(n,e?c:s),Ts(n,e?u:i),r&&r.length>1||(m?setTimeout(l,m):Ls(n,t,l));});};return _(h,{onBeforeEnter(e){y&&y(e),Ts(e,l),Ts(e,s);},onBeforeAppear(e){k&&k(e),Ts(e,a),Ts(e,c);},onEnter:T(!1),onAppear:T(!0),onLeave(e,n){const o=()=>A(e,n);Ts(e,f),Ts(e,p),Os(()=>{Bs(e,p),Ts(e,d),x&&x.length>1||(v?setTimeout(o,v):Ls(e,t,o));}),x&&x(e,o);},onEnterCancelled(e){F(e,!1),C&&C(e);},onAppearCancelled(e){F(e,!0),E&&E(e);},onLeaveCancelled(e){A(e),w&&w(e);}})}function As(e){return q(e)}function Ts(e,n){n.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(n);}function Bs(e,n){n.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0));}function Os(e){requestAnimationFrame(()=>{requestAnimationFrame(e);});}function Ls(e,n,t){const{type:o,timeout:r,propCount:s}=Ms(e,n);if(!o)return t();const l=o+"end";let i=0;const c=()=>{e.removeEventListener(l,a),t();},a=n=>{n.target===e&&++i>=s&&c();};setTimeout(()=>{i<s&&c();},r+1),e.addEventListener(l,a);}function Ms(e,n){const t=window.getComputedStyle(e),o=e=>(t[e]||"").split(", "),r=o("transitionDelay"),s=o("transitionDuration"),l=Ns(r,s),i=o("animationDelay"),c=o("animationDuration"),a=Ns(i,c);let u=null,p=0,f=0;"transition"===n?l>0&&(u="transition",p=l,f=s.length):"animation"===n?a>0&&(u="animation",p=a,f=c.length):(p=Math.max(l,a),u=p>0?l>a?"transition":"animation":null,f=u?"transition"===u?s.length:c.length:0);return {type:u,timeout:p,propCount:f,hasTransform:"transition"===u&&/\b(transform|all)(,|$)/.test(t.transitionProperty)}}function Ns(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((n,t)=>Rs(n)+Rs(e[t])))}function Rs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}const Ps=new WeakMap,Us=new WeakMap,Vs={name:"TransitionGroup",props:_({},Es,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=Or(),o=zt();let r,s;return Lt(()=>{if(!r.length)return;const n=e.moveClass||(e.name||"v")+"-move";if(!function(e,n,t){const o=e.cloneNode();e._vtc&&e._vtc.forEach(e=>{e.split(/\s+/).forEach(e=>e&&o.classList.remove(e));});t.split(/\s+/).forEach(e=>e&&o.classList.add(e)),o.style.display="none";const r=1===n.nodeType?n:n.parentNode;r.appendChild(o);const{hasTransform:s}=Ms(o);return r.removeChild(o),s}(r[0].el,t.vnode.el,n))return;r.forEach(Is),r.forEach($s);const o=r.filter(js);o.forEach(e=>{const t=e.el,o=t.style;Ts(t,n),o.transform=o.webkitTransform=o.transitionDuration="";const r=t._moveCb=e=>{e&&e.target!==t||e&&!/transform$/.test(e.propertyName)||(t.removeEventListener("transitionend",r),t._moveCb=null,Bs(t,n));};t.addEventListener("transitionend",r);});}),()=>{const l=Ye(e),i=Fs(l),c=l.tag||Do;r=s,s=n.default?Qt(n.default()):[];for(let e=0;e<s.length;e++){const n=s[e];null!=n.key&&Zt(n,Gt(n,i,o,t));}if(r)for(let e=0;e<r.length;e++){const n=r[e];Zt(n,Gt(n,i,o,t)),Ps.set(n,n.el.getBoundingClientRect());}return sr(c,null,s)}}};function Is(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb();}function $s(e){Us.set(e,e.el.getBoundingClientRect());}function js(e){const n=Ps.get(e),t=Us.get(e),o=n.left-t.left,r=n.top-t.top;if(o||r){const n=e.el.style;return n.transform=n.webkitTransform=`translate(${o}px,${r}px)`,n.transitionDuration="0s",e}}const Ds=e=>{const n=e.props["onUpdate:modelValue"];return w(n)?e=>W(n,e):n};function Hs(e){e.target.composing=!0;}function zs(e){const n=e.target;n.composing&&(n.composing=!1,function(e,n){const t=document.createEvent("HTMLEvents");t.initEvent(n,!0,!0),e.dispatchEvent(t);}(n,"input"));}const Ws={created(e,{modifiers:{lazy:n,trim:t,number:o}},r){e._assign=Ds(r);const s=o||"number"===e.type;vs(e,n?"change":"input",n=>{if(n.target.composing)return;let o=e.value;t?o=o.trim():s&&(o=q(o)),e._assign(o);}),t&&vs(e,"change",()=>{e.value=e.value.trim();}),n||(vs(e,"compositionstart",Hs),vs(e,"compositionend",zs),vs(e,"change",zs));},mounted(e,{value:n}){e.value=null==n?"":n;},beforeUpdate(e,{value:n,modifiers:{trim:t,number:o}},r){if(e._assign=Ds(r),e.composing)return;if(document.activeElement===e){if(t&&e.value.trim()===n)return;if((o||"number"===e.type)&&q(e.value)===n)return}const s=null==n?"":n;e.value!==s&&(e.value=s);}};const cl=_({patchProp:(e,n,o,r,s=!1,l,i,c,a)=>{switch(n){case"class":!function(e,n,t){if(null==n&&(n=""),t)e.setAttribute("class",n);else {const t=e._vtc;t&&(n=(n?[n,...t]:[...t]).join(" ")),e.className=n;}}(e,r,s);break;case"style":!function(e,n,t){const o=e.style;if(t)if(A(t))n!==t&&(o.cssText=t);else {for(const e in t)as(o,e,t[e]);if(n&&!A(n))for(const e in n)null==t[e]&&as(o,e,"");}else e.removeAttribute("style");}(e,o,r);break;default:v(n)?y(n)||ys(e,n,0,r,i):function(e,n,t,o){if(o)return "innerHTML"===n||!!(n in e&&bs.test(n)&&F(t));if("spellcheck"===n||"draggable"===n)return !1;if("form"===n&&"string"==typeof t)return !1;if("list"===n&&"INPUT"===e.tagName)return !1;if(bs.test(n)&&A(t))return !1;return n in e}(e,n,r,s)?function(e,n,t,o,r,s,l){if("innerHTML"===n||"textContent"===n)return o&&l(o,r,s),void(e[n]=null==t?"":t);if("value"!==n||"PROGRESS"===e.tagName)if(""===t&&"boolean"==typeof e[n])e[n]=!0;else if(null==t&&"string"==typeof e[n])e[n]="",e.removeAttribute(n);else try{e[n]=t;}catch(e){}else {e._value=t;const n=null==t?"":t;e.value!==n&&(e.value=n);}}(e,n,r,l,i,c,a):("true-value"===n?e._trueValue=r:"false-value"===n&&(e._falseValue=r),function(e,n,o,r){if(r&&n.startsWith("xlink:"))null==o?e.removeAttributeNS(fs,n.slice(6,n.length)):e.setAttributeNS(fs,n,o);else {const r=t(n);null==o||r&&!1===o?e.removeAttribute(n):e.setAttribute(n,r?"":o);}}(e,n,r,s));}},forcePatchProp:(e,n)=>"value"===n},is);let al;function pl(){return al||(al=Fo(cl))}const gl=(...e)=>{const n=pl().createApp(...e),{mount:t}=n;return n.mount=e=>{const o=vl(e);if(!o)return;const r=n._component;F(r)||r.render||r.template||(r.template=o.innerHTML),o.innerHTML="";const s=t(o);return o.removeAttribute("v-cloak"),o.setAttribute("data-v-app",""),s},n};function vl(e){if(A(e)){return document.querySelector(e)}return e}

  var script = Dr({
      setup: function () {
          var state = We({
              color: '#fb8500',
              size: 60,
              types: [{ type: 'spins' }, { type: 'circular' }, { type: 'dots' }],
          });
          return {
              state: state,
          };
      },
  });

  const _hoisted_1 = /*#__PURE__*/sr("h1", null, "Vue Easy Spinner", -1 /* HOISTED */);
  const _hoisted_2 = { class: "box-inner" };
  const _hoisted_3 = /*#__PURE__*/sr("label", { for: "changeColor" }, "Color:", -1 /* HOISTED */);
  const _hoisted_4 = /*#__PURE__*/sr("label", { for: "changeSize" }, "Size:", -1 /* HOISTED */);
  const _hoisted_5 = { class: "sample-box" };
  const _hoisted_6 = { class: "box-title" };
  const _hoisted_7 = { class: "box-inner" };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Spinner = Po("Spinner");

    return (Go(), Qo("div", null, [
      _hoisted_1,
      sr("h2", _hoisted_2, [
        _hoisted_3,
        go(sr("input", {
          type: "color",
          class: "color-picker",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.state.color = $event)),
          id: "changeColor"
        }, null, 512 /* NEED_PATCH */), [
          [Ws, _ctx.state.color]
        ]),
        _hoisted_4,
        go(sr("input", {
          type: "range",
          id: "changeSize",
          name: "size",
          min: "20",
          max: "100",
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (_ctx.state.size = $event))
        }, null, 512 /* NEED_PATCH */), [
          [Ws, _ctx.state.size]
        ])
      ]),
      sr("main", _hoisted_5, [
        (Go(true), Qo(Do, null, Qr(_ctx.state.types, (item) => {
          return (Go(), Qo("section", {
            key: item.type,
            class: "box-item"
          }, [
            sr("h3", _hoisted_6, u(item.type), 1 /* TEXT */),
            sr("div", _hoisted_7, [
              sr(_component_Spinner, {
                type: item.type,
                color: _ctx.state.color,
                size: _ctx.state.size
              }, null, 8 /* PROPS */, ["type", "color", "size"])
            ])
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ]))
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "\nh1 {\n  font-family: 'Sansita Swashed', 'Helvetica Neue';\n  font-size: 10vw;\n  background: linear-gradient(90deg, #41b883, #35495e);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin: 5vh 0;\n}\n.sample-box {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1200px;\n  margin: auto;\n  font-size: 2.5vmax;\n  color: #333;\n}\n.box-item {\n  flex: 0 0 33.33%;\n  box-sizing: border-box;\n  text-align: center;\n  margin-bottom: 5vh;\n}\n.box-title {\n  font-size: 4vmax;\n  font-style: oblique;\n}\n.item-text {\n  margin-left: 3%;\n}\n.box-inner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.color-picker {\n  width: 4vmax;\n  height: 4vmax;\n  clip-path: circle(calc(2vmax - 6px) at 2vmax 2vmax);\n  vertical-align: top;\n  box-sizing: border-box;\n  border: none;\n}\n";
  styleInject(css_248z);

  script.render = render;
  script.__file = "src/App.vue";

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  const _hoisted_1$1 = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  };
  const _hoisted_2$1 = /*#__PURE__*/sr("path", {
    fill: "none",
    d: "M0 0h100v100H0V0z"
  }, null, -1 /* HOISTED */);
  const _hoisted_3$1 = /*#__PURE__*/sr("path", {
    d: "M50 2c2.3 0 4.2 2.7 4.2 6v12c0 3.3-1.9 6-4.2 6-2.3 0-4.2-2.7-4.2-6V8c0-3.3 1.9-6 4.2-6z",
    fill: "currentColor"
  }, [
    /*#__PURE__*/sr("animate", {
      accumulate: "none",
      additive: "replace",
      attributeName: "opacity",
      begin: "-1s",
      calcMode: "linear",
      dur: "1s",
      fill: "remove",
      from: "1",
      repeatCount: "indefinite",
      restart: "always",
      to: "0"
    })
  ], -1 /* HOISTED */);
  const _hoisted_4$1 = /*#__PURE__*/sr("path", {
    d: "M74 8.4c2 1.2 2.3 4.4.6 7.3l-6 10.4C67 29 64 30.4 62 29.2c-2-1.2-2.3-4.4-.6-7.3l6-10.4C69 8.7 72 7.3 74 8.4z",
    fill: "currentColor"
  }, [
    /*#__PURE__*/sr("animate", {
      accumulate: "none",
      additive: "replace",
      attributeName: "opacity",
      begin: "-0.9166666666666666s",
      calcMode: "linear",
      dur: "1s",
      fill: "remove",
      from: "1",
      repeatCount: "indefinite",
      restart: "always",
      to: "0"
    })
  ], -1 /* HOISTED */);
  const _hoisted_5$1 = /*#__PURE__*/sr("path", {
    d: "M91.6 26c1.2 2-.2 5-3.1 6.6l-10.4 6c-2.9 1.7-6.1 1.4-7.3-.6-1.2-2 .2-5 3.1-6.6l10.4-6c2.8-1.7 6.1-1.4 7.3.6z",
    fill: "currentColor"
  }, [
    /*#__PURE__*/sr("animate", {
      accumulate: "none",
      additive: "replace",
      attributeName: "opacity",
      begin: "-0.8333333333333334s",
      calcMode: "linear",
      dur: "1s",
      fill: "remove",
      from: "1",
      repeatCount: "indefinite",
      restart: "always",
      to: "0"
    })
  ], -1 /* HOISTED */);
  const _hoisted_6$1 = /*#__PURE__*/sr("path", {
    d: "M98 50c0 2.3-2.7 4.2-6 4.2H80c-3.3 0-6-1.9-6-4.2 0-2.3 2.7-4.2 6-4.2h12c3.3 0 6 1.9 6 4.2z",
    fill: "currentColor"
  }, [
    /*#__PURE__*/sr("animate", {
      accumulate: "none",
      additive: "replace",
      attributeName: "opacity",
      begin: "-0.75s",
      calcMode: "linear",
      dur: "1s",
      fill: "remove",
      from: "1",
      repeatCount: "indefinite",
      restart: "always",
      to: "0"
    })
  ], -1 /* HOISTED */);
  const _hoisted_7$1 = /*#__PURE__*/sr("path", {
    d: "M91.6 74c-1.2 2-4.4 2.3-7.3.6l-10.4-6C71 67 69.6 64 70.8 62c1.2-2 4.4-2.3 7.3-.6l10.4 6c2.8 1.6 4.2 4.6 3.1 6.6z",
    fill: "currentColor"
  }, [
    /*#__PURE__*/sr("animate", {
      accumulate: "none",
      additive: "replace",
      attributeName: "opacity",
      begin: "-0.6666666666666666s",
      calcMode: "linear",
      dur: "1s",
      fill: "remove",
      from: "1",
      repeatCount: "indefinite",
      restart: "always",
      to: "0"
    })
  ], -1 /* HOISTED */);
  const _hoisted_8 = /*#__PURE__*/sr("path", {
    d: "M74 91.6c-2 1.2-5-.2-6.6-3.1l-6-10.4c-1.7-2.9-1.4-6.1.6-7.3 2-1.2 5 .2 6.6 3.1l6 10.4c1.7 2.8 1.4 6.1-.6 7.3z",
    fill: "currentColor"
  }, [
    /*#__PURE__*/sr("animate", {
      accumulate: "none",
      additive: "replace",
      attributeName: "opacity",
      begin: "-0.5833333333333334s",
      calcMode: "linear",
      dur: "1s",
      fill: "remove",
      from: "1",
      repeatCount: "indefinite",
      restart: "always",
      to: "0"
    })
  ], -1 /* HOISTED */);
  const _hoisted_9 = /*#__PURE__*/sr("path", {
    d: "M50 98c-2.3 0-4.2-2.7-4.2-6V80c0-3.3 1.9-6 4.2-6 2.3 0 4.2 2.7 4.2 6v12c0 3.3-1.9 6-4.2 6z",
    fill: "currentColor"
  }, [
    /*#__PURE__*/sr("animate", {
      accumulate: "none",
      additive: "replace",
      attributeName: "opacity",
      begin: "-0.5s",
      calcMode: "linear",
      dur: "1s",
      fill: "remove",
      from: "1",
      repeatCount: "indefinite",
      restart: "always",
      to: "0"
    })
  ], -1 /* HOISTED */);
  const _hoisted_10 = /*#__PURE__*/sr("path", {
    d: "M26 91.6c-2-1.2-2.3-4.4-.6-7.3l6-10.4C33 71 36 69.6 38 70.8c2 1.2 2.3 4.4.6 7.3l-6 10.4C31 91.3 28 92.7 26 91.6z",
    fill: "currentColor"
  }, [
    /*#__PURE__*/sr("animate", {
      accumulate: "none",
      additive: "replace",
      attributeName: "opacity",
      begin: "-0.4166666666666667s",
      calcMode: "linear",
      dur: "1s",
      fill: "remove",
      from: "1",
      repeatCount: "indefinite",
      restart: "always",
      to: "0"
    })
  ], -1 /* HOISTED */);
  const _hoisted_11 = /*#__PURE__*/sr("path", {
    d: "M8.4 74c-1.2-2 .2-5 3.1-6.6l10.4-6c2.9-1.7 6.1-1.4 7.3.6 1.2 2-.2 5-3.1 6.6l-10.4 6c-2.8 1.7-6.1 1.4-7.3-.6z",
    fill: "currentColor"
  }, [
    /*#__PURE__*/sr("animate", {
      accumulate: "none",
      additive: "replace",
      attributeName: "opacity",
      begin: "-0.3333333333333333s",
      calcMode: "linear",
      dur: "1s",
      fill: "remove",
      from: "1",
      repeatCount: "indefinite",
      restart: "always",
      to: "0"
    })
  ], -1 /* HOISTED */);
  const _hoisted_12 = /*#__PURE__*/sr("path", {
    d: "M2 50c0-2.3 2.7-4.2 6-4.2h12c3.3 0 6 1.9 6 4.2 0 2.3-2.7 4.2-6 4.2H8c-3.3 0-6-1.9-6-4.2z",
    fill: "currentColor"
  }, [
    /*#__PURE__*/sr("animate", {
      accumulate: "none",
      additive: "replace",
      attributeName: "opacity",
      begin: "-0.25s",
      calcMode: "linear",
      dur: "1s",
      fill: "remove",
      from: "1",
      repeatCount: "indefinite",
      restart: "always",
      to: "0"
    })
  ], -1 /* HOISTED */);
  const _hoisted_13 = /*#__PURE__*/sr("path", {
    d: "M8.4 26c1.2-2 4.4-2.3 7.3-.6l10.4 6C29 33 30.4 36 29.2 38c-1.2 2-4.4 2.3-7.3.6l-10.4-6C8.7 31 7.3 28 8.4 26z",
    fill: "currentColor"
  }, [
    /*#__PURE__*/sr("animate", {
      accumulate: "none",
      additive: "replace",
      attributeName: "opacity",
      begin: "-0.16666666666666666s",
      calcMode: "linear",
      dur: "1s",
      fill: "remove",
      from: "1",
      repeatCount: "indefinite",
      restart: "always",
      to: "0"
    })
  ], -1 /* HOISTED */);
  const _hoisted_14 = /*#__PURE__*/sr("path", {
    d: "M26 8.4c2-1.2 5 .2 6.6 3.1l6 10.4c1.7 2.9 1.4 6.1-.6 7.3-2 1.2-5-.2-6.6-3.1l-6-10.4c-1.7-2.8-1.4-6.1.6-7.3z",
    fill: "currentColor"
  }, [
    /*#__PURE__*/sr("animate", {
      accumulate: "none",
      additive: "replace",
      attributeName: "opacity",
      begin: "-0.08333333333333333s",
      calcMode: "linear",
      dur: "1s",
      fill: "remove",
      from: "1",
      repeatCount: "indefinite",
      restart: "always",
      to: "0"
    })
  ], -1 /* HOISTED */);

  function render$1(_ctx, _cache) {
    return (Go(), Qo("svg", _hoisted_1$1, [
      _hoisted_2$1,
      _hoisted_3$1,
      _hoisted_4$1,
      _hoisted_5$1,
      _hoisted_6$1,
      _hoisted_7$1,
      _hoisted_8,
      _hoisted_9,
      _hoisted_10,
      _hoisted_11,
      _hoisted_12,
      _hoisted_13,
      _hoisted_14
    ]))
  }

  render$1.__file = "package/components/spins.vue";

  const _hoisted_1$2 = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 50 50"
  };
  const _hoisted_2$2 = /*#__PURE__*/sr("g", { style: {"animation":"Circular-_-rotate 2s linear infinite","height":"50px","transform-origin":"center center","width":"50px"} }, [
    /*#__PURE__*/sr("circle", {
      cx: "25",
      cy: "25",
      r: "20",
      fill: "none",
      "stroke-width": "5",
      "stroke-miterlimit": "10",
      stroke: "currentColor",
      style: {"animation":"Circular-_-dash 1.5s ease-in-out infinite"},
      "stroke-dasharray": "1,200",
      "stroke-linecap": "round"
    })
  ], -1 /* HOISTED */);

  function render$2(_ctx, _cache) {
    return (Go(), Qo("svg", _hoisted_1$2, [
      _hoisted_2$2
    ]))
  }

  var css_248z$1 = "\n@keyframes Circular-_-rotate {\n100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n}\n}\n@keyframes Circular-_-dash {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n}\n100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n}\n}\n";
  styleInject(css_248z$1);

  render$2.__file = "package/components/circular.vue";

  const _hoisted_1$3 = {
    version: "1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 300 300",
    width: "64",
    height: "64"
  };
  const _hoisted_2$3 = /*#__PURE__*/sr("circle", {
    r: "16",
    cy: "64",
    cx: "236",
    fill: "currentColor",
    style: {"transform-origin":"150px 150px","animation":"Dots-_-rotate 5.5s linear infinite"},
    opacity: ".001"
  }, null, -1 /* HOISTED */);
  const _hoisted_3$2 = /*#__PURE__*/sr("circle", {
    r: "16",
    cy: "64",
    cx: "236",
    fill: "currentColor",
    style: {"transform-origin":"150px 150px","animation":"Dots-_-rotate 5.5s linear infinite","animation-delay":"240ms"},
    opacity: ".001"
  }, null, -1 /* HOISTED */);
  const _hoisted_4$2 = /*#__PURE__*/sr("circle", {
    r: "16",
    cy: "64",
    cx: "236",
    fill: "currentColor",
    style: {"transform-origin":"150px 150px","animation":"Dots-_-rotate 5.5s linear infinite","animation-delay":"480ms"},
    opacity: ".001"
  }, null, -1 /* HOISTED */);
  const _hoisted_5$2 = /*#__PURE__*/sr("circle", {
    r: "16",
    cy: "64",
    cx: "236",
    fill: "currentColor",
    style: {"transform-origin":"150px 150px","animation":"Dots-_-rotate 5.5s linear infinite","animation-delay":"720ms"},
    opacity: ".001"
  }, null, -1 /* HOISTED */);
  const _hoisted_6$2 = /*#__PURE__*/sr("circle", {
    r: "16",
    cy: "64",
    cx: "236",
    fill: "currentColor",
    style: {"transform-origin":"150px 150px","animation":"Dots-_-rotate 5.5s linear infinite","animation-delay":"960ms"},
    opacity: ".001"
  }, null, -1 /* HOISTED */);

  function render$3(_ctx, _cache) {
    return (Go(), Qo("svg", _hoisted_1$3, [
      _hoisted_2$3,
      _hoisted_3$2,
      _hoisted_4$2,
      _hoisted_5$2,
      _hoisted_6$2
    ]))
  }

  var css_248z$2 = "\n@keyframes Dots-_-rotate {\n0% {\n    transform: rotate3d(0, 0, 1, 225deg);\n    opacity: 1;\n    animation-timing-function: ease-out;\n}\n7% {\n    transform: rotate3d(0, 0, 1, 345deg);\n    animation-timing-function: linear;\n}\n30% {\n    transform: rotate3d(0, 0, 1, 455deg);\n    animation-timing-function: ease-in-out;\n}\n39% {\n    transform: rotate3d(0, 0, 1, 690deg);\n    animation-timing-function: linear;\n}\n60% {\n    transform: rotate3d(0, 0, 1, 815deg);\n    opacity: 1;\n    animation-timing-function: ease-out;\n}\n75% {\n    transform: rotate3d(0, 0, 1, 945deg);\n    animation-timing-function: ease-out;\n}\n76% {\n    transform: rotate3d(0, 0, 1, 945deg);\n    opacity: 0;\n}\n100% {\n    transform: rotate3d(0, 0, 1, 945deg);\n    opacity: 0;\n}\n}\n";
  styleInject(css_248z$2);

  render$3.__file = "package/components/dots.vue";

  var script$1 = Dr({
      name: 'spinner',
      components: { Spins: render$1, Circular: render$2, Dots: render$3 },
      props: {
          type: {
              type: String,
              "default": 'spins',
          },
          size: {
              type: [Number, String],
          },
          color: {
              type: String,
          },
      },
      setup: function (props) {
          var allStyles = jr(function () {
              var color = props.color, fontSize = props.size;
              return {
                  color: color,
                  fontSize: fontSize,
              };
          });
          return {
              allStyles: allStyles,
          };
      },
  });

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return (Go(), Qo(Vo(_ctx.type), {
      class: _ctx.$style.main,
      style: _ctx.allStyles
    }, null, 8 /* PROPS */, ["class", "style"]))
  }

  var css_248z$3 = "\n.__S-main__ {\n  width: 1em;\n  height: 1em;\n}\n";
  styleInject(css_248z$3);

  var style0 = {"main":"__S-main__"};

  const cssModules = script$1.__cssModules = {};
  cssModules["$style"] = style0;

  script$1.render = render$4;
  script$1.__file = "package/Spinner.vue";

  var defaultOptions = {
      prefix: '',
  };
  function capitalize(s) {
      return s[0].toUpperCase() + s.slice(1);
  }
  var spinnerPlugin = {
      install: function (Vue, userOptions) {
          if (userOptions === void 0) { userOptions = {}; }
          var options = __assign(__assign({}, defaultOptions), userOptions);
          var prefix = options.prefix;
          var globalName = prefix
              ? prefix + "-" + script$1.name
              : capitalize(script$1.name);
          Vue.component(globalName, script$1);
      },
  };

  gl(script).use(spinnerPlugin).mount('#app');

}());
