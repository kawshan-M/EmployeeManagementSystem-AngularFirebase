"use strict";(self.webpackChunkemployee_management_system=self.webpackChunkemployee_management_system||[]).push([[5283],{5283:(W,v,p)=>{p.r(v),p.d(v,{startTapClick:()=>S});var i=p(7693),u=p(2674);const S=s=>{if(void 0===i.d)return;let t,E,a,o=10*-m,r=0;const k=s.getBoolean("animated",!0)&&s.getBoolean("rippleEffect",!0),f=new WeakMap,L=e=>{o=(0,u.u)(e),R(e)},A=()=>{a&&clearTimeout(a),a=void 0,t&&(g(!1),t=void 0)},D=e=>{t||_(b(e),e)},R=e=>{_(void 0,e)},_=(e,n)=>{if(e&&e===t)return;a&&clearTimeout(a),a=void 0;const{x:d,y:c}=(0,u.v)(n);if(t){if(f.has(t))throw new Error("internal error");t.classList.contains(l)||w(t,d,c),g(!0)}if(e){const I=f.get(e);I&&(clearTimeout(I),f.delete(e)),e.classList.remove(l);const M=()=>{w(e,d,c),a=void 0};h(e)?M():a=setTimeout(M,P)}t=e},w=(e,n,d)=>{if(r=Date.now(),e.classList.add(l),!k)return;const c=y(e);null!==c&&(C(),E=c.addRipple(n,d))},C=()=>{void 0!==E&&(E.then(e=>e()),E=void 0)},g=e=>{C();const n=t;if(!n)return;const d=T-Date.now()+r;if(e&&d>0&&!h(n)){const c=setTimeout(()=>{n.classList.remove(l),f.delete(n)},T);f.set(n,c)}else n.classList.remove(l)};i.d.addEventListener("ionGestureCaptured",A),i.d.addEventListener("touchstart",e=>{o=(0,u.u)(e),D(e)},!0),i.d.addEventListener("touchcancel",L,!0),i.d.addEventListener("touchend",L,!0),i.d.addEventListener("pointercancel",A,!0),i.d.addEventListener("mousedown",e=>{if(2===e.button)return;const n=(0,u.u)(e)-m;o<n&&D(e)},!0),i.d.addEventListener("mouseup",e=>{const n=(0,u.u)(e)-m;o<n&&R(e)},!0)},b=s=>{if(void 0===s.composedPath)return s.target.closest(".ion-activatable");{const o=s.composedPath();for(let r=0;r<o.length-2;r++){const t=o[r];if(!(t instanceof ShadowRoot)&&t.classList.contains("ion-activatable"))return t}}},h=s=>s.classList.contains("ion-activatable-instant"),y=s=>{if(s.shadowRoot){const o=s.shadowRoot.querySelector("ion-ripple-effect");if(o)return o}return s.querySelector("ion-ripple-effect")},l="ion-activated",P=100,T=150,m=2500}}]);