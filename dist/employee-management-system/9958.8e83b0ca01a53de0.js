"use strict";(self.webpackChunkemployee_management_system=self.webpackChunkemployee_management_system||[]).push([[9958],{9958:(M,d,a)=>{a.r(d),a.d(d,{ion_ripple_effect:()=>u});var b=a(5861),n=a(3419),h=a(27);const u=class{constructor(t){(0,n.r)(this,t),this.type="bounded"}addRipple(t,k){var i=this;return(0,b.Z)(function*(){return new Promise(v=>{(0,n.e)(()=>{const r=i.el.getBoundingClientRect(),o=r.width,s=r.height,A=Math.sqrt(o*o+s*s),p=Math.max(s,o),I=i.unbounded?p:A+w,l=Math.floor(p*g),E=I/l;let c=t-r.left,f=k-r.top;i.unbounded&&(c=.5*o,f=.5*s);const C=c-.5*l,O=f-.5*l,P=.5*o-c,D=.5*s-f;(0,n.w)(()=>{const m=document.createElement("div");m.classList.add("ripple-effect");const e=m.style;e.top=O+"px",e.left=C+"px",e.width=e.height=l+"px",e.setProperty("--final-scale",`${E}`),e.setProperty("--translate-end",`${P}px, ${D}px`),(i.el.shadowRoot||i.el).appendChild(m),setTimeout(()=>{v(()=>{_(m)})},325)})})})})()}get unbounded(){return"unbounded"===this.type}render(){const t=(0,h.b)(this);return(0,n.h)(n.H,{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return(0,n.f)(this)}},_=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},w=10,g=.5;u.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);