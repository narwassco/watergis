function k(){}function X(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function q(){return Object.create(null)}function g(t){t.forEach(B)}function W(t){return typeof t=="function"}function gt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function bt(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function Y(t){return Object.keys(t).length===0}function Z(t,...n){if(t==null)return k;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function xt(t,n,e){t.$$.on_destroy.push(Z(n,e))}function wt(t,n,e,i){if(t){const s=I(t,n,e,i);return t[0](s)}}function I(t,n,e,i){return t[1]&&i?X(e.ctx.slice(),t[1](i(n))):e.ctx}function $t(t,n,e,i){if(t[2]&&i){const s=t[2](i(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(n.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=n.dirty[l]|s[l];return c}return n.dirty|s}return n.dirty}function vt(t,n,e,i,s,c){if(s){const r=I(n,e,i,c);t.p(r,s)}}function Et(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function kt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function At(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function Tt(t){const n={};for(const e in t)n[e]=!0;return n}function Nt(t){return t==null?"":t}function St(t,n,e){return t.set(e),n}function Ct(t){return t&&W(t.destroy)?t.destroy:k}let A=!1;function tt(){A=!0}function nt(){A=!1}function et(t,n,e,i){for(;t<n;){const s=t+(n-t>>1);e(s)<=i?t=s+1:n=s}return t}function it(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&o.push(f)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let s=0;for(let o=0;o<n.length;o++){const u=n[o].claim_order,f=(s>0&&n[e[s]].claim_order<=u?s+1:et(1,s,b=>n[e[b]].claim_order,u))-1;i[o]=e[f]+1;const a=f+1;e[a]=o,s=Math.max(a,s)}const c=[],r=[];let l=n.length-1;for(let o=e[s]+1;o!=0;o=i[o-1]){for(c.push(n[o-1]);l>=o;l--)r.push(n[l]);l--}for(;l>=0;l--)r.push(n[l]);c.reverse(),r.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<r.length;o++){for(;u<c.length&&r[o].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(r[o],f)}}function st(t,n){t.appendChild(n)}function rt(t,n){if(A){for(it(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ot(t,n,e){t.insertBefore(n,e||null)}function ct(t,n,e){A&&!e?rt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function jt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function j(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function Mt(){return M(" ")}function Ht(){return M("")}function D(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Lt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function qt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function F(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Dt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:F(t,i,n[i])}function Pt(t,n){for(const e in n)F(t,e,n[e])}function lt(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function J(t,n,e,i,s=!1){R(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(n(l)){const o=e(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(n(l)){const o=e(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function K(t,n,e,i){return J(t,s=>s.nodeName===n,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];e[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(n))}function zt(t,n,e){return K(t,n,e,j)}function Ot(t,n,e){return K(t,n,e,G)}function ut(t,n){return J(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>M(n),!0)}function Bt(t){return ut(t," ")}function P(t,n,e){for(let i=e;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===n)return i}return t.length}function Wt(t,n){const e=P(t,"HTML_TAG_START",0),i=P(t,"HTML_TAG_END",e);if(e===i)return new z(void 0,n);R(t);const s=t.splice(e,i-e+1);p(s[0]),p(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new z(c,n)}function It(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Gt(t,n){t.value=n==null?"":n}function Ft(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Rt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function Jt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}let w;function at(){if(w===void 0){w=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{w=!0}}return w}function Kt(t,n){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=j("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=at();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=D(window,"message",r=>{r.source===i.contentWindow&&n()})):(i.src="about:blank",i.onload=()=>{c=D(i.contentWindow,"resize",n)}),st(t,i),()=>{(s||c&&i.contentWindow)&&c(),p(i)}}function Qt(t,n,e){t.classList[e?"add":"remove"](n)}function ft(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,e,i,n),s}function Ut(t,n=document.body){return Array.from(n.querySelectorAll(t))}class dt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=G(e.nodeName):this.e=j(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)ot(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(p)}}class z extends dt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)ct(this.t,this.n[e],n)}}let y;function m(t){y=t}function _(){if(!y)throw new Error("Function called outside component initialization");return y}function Vt(t){_().$$.on_mount.push(t)}function Xt(t){_().$$.after_update.push(t)}function Yt(t){_().$$.on_destroy.push(t)}function Zt(){const t=_();return(n,e,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[n];if(s){const c=ft(n,e,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function tn(t,n){return _().$$.context.set(t,n),n}function nn(t){return _().$$.context.get(t)}function en(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],O=[],v=[],N=[],Q=Promise.resolve();let S=!1;function U(){S||(S=!0,Q.then(V))}function sn(){return U(),Q}function C(t){v.push(t)}function rn(t){N.push(t)}const T=new Set;let $=0;function V(){const t=y;do{for(;$<h.length;){const n=h[$];$++,m(n),_t(n.$$)}for(m(null),h.length=0,$=0;O.length;)O.pop()();for(let n=0;n<v.length;n+=1){const e=v[n];T.has(e)||(T.add(e),e())}v.length=0}while(h.length);for(;N.length;)N.pop()();S=!1,T.clear(),m(t)}function _t(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const E=new Set;let d;function on(){d={r:0,c:[],p:d}}function cn(){d.r||g(d.c),d=d.p}function ht(t,n){t&&t.i&&(E.delete(t),t.i(n))}function ln(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const un=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function an(t,n){const e={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=n[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(e[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in e||(e[r]=void 0);return e}function fn(t){return typeof t=="object"&&t!==null?t:{}}function dn(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function _n(t){t&&t.c()}function hn(t,n){t&&t.l(n)}function mt(t,n,e,i){const{fragment:s,on_mount:c,on_destroy:r,after_update:l}=t.$$;s&&s.m(n,e),i||C(()=>{const o=c.map(B).filter(W);r?r.push(...o):g(o),t.$$.on_mount=[]}),l.forEach(C)}function pt(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function yt(t,n){t.$$.dirty[0]===-1&&(h.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function mn(t,n,e,i,s,c,r,l=[-1]){const o=y;m(t);const u=t.$$={fragment:null,ctx:null,props:c,update:k,not_equal:s,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:q(),dirty:l,skip_bound:!1,root:n.target||o.$$.root};r&&r(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,b,...H)=>{const L=H.length?H[0]:b;return u.ctx&&s(u.ctx[a],u.ctx[a]=L)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](L),f&&yt(t,a)),b}):[],u.update(),f=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){tt();const a=lt(n.target);u.fragment&&u.fragment.l(a),a.forEach(p)}else u.fragment&&u.fragment.c();n.intro&&ht(t.$$.fragment),mt(t,n.target,n.anchor,n.customElement),nt(),V()}m(o)}class pn{$destroy(){pt(this,1),this.$destroy=k}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}$set(n){this.$$set&&!Y(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{G as $,k as A,wt as B,vt as C,Et as D,$t as E,rt as F,xt as G,D as H,en as I,Lt as J,qt as K,X as L,Dt as M,Ct as N,an as O,W as P,g as Q,At as R,pn as S,_ as T,kt as U,un as V,O as W,fn as X,nn as Y,tn as Z,Yt as _,Mt as a,Ot as a0,Pt as a1,Z as a2,St as a3,dn as a4,rn as a5,Tt as a6,jt as a7,Gt as a8,Ut as a9,bt as aa,Nt as ab,C as ac,Kt as ad,Zt as ae,Rt as af,Jt as ag,Qt as ah,z as ai,Wt as aj,ct as b,Bt as c,cn as d,Ht as e,ht as f,on as g,p as h,mn as i,Xt as j,j as k,zt as l,lt as m,F as n,Vt as o,Ft as p,M as q,ut as r,gt as s,ln as t,It as u,_n as v,hn as w,mt as x,pt as y,sn as z};
