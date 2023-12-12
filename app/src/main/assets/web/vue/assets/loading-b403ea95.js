import{u as D,z as L,K as v,a5 as Y,ae as y}from"./vendor-e583d05b.js";import{u as b}from"./index-054bb4fd.js";function k(t){return typeof t=="function"?t():D(t)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const w=()=>{};function H(t,n){function e(...o){return new Promise((a,r)=>{Promise.resolve(t(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(a).catch(r)})}return e}function W(t,n=!0,e=!0,o=!1){let a=0,r,i=!0,s=w,l;const f=()=>{r&&(clearTimeout(r),r=void 0,s(),s=w)};return p=>{const c=k(t),g=Date.now()-a,d=()=>l=p();return f(),c<=0?(a=Date.now(),d()):(g>c&&(e||!i)?(a=Date.now(),d()):n&&(l=new Promise((m,h)=>{s=o?h:m,r=setTimeout(()=>{a=Date.now(),i=!0,m(d()),f()},Math.max(0,c-g))})),!e&&!r&&(r=setTimeout(()=>i=!0,c)),i=!1,l)}}function E(t,n=200,e=!1,o=!0,a=!1){return H(W(n,e,o,a),t)}const T=/[YMDHhms]o|\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function $(t,n,e,o){let a=t<12?"AM":"PM";return o&&(a=a.split("").reduce((r,i)=>r+=`${i}.`,"")),e?a.toLowerCase():a}function u(t){const n=["th","st","nd","rd"],e=t%100;return t+(n[(e-20)%10]||n[e]||n[0])}function x(t,n,e={}){var o;const a=t.getFullYear(),r=t.getMonth(),i=t.getDate(),s=t.getHours(),l=t.getMinutes(),f=t.getSeconds(),M=t.getMilliseconds(),p=t.getDay(),c=(o=e.customMeridiem)!=null?o:$,g={Yo:()=>u(a),YY:()=>String(a).slice(-2),YYYY:()=>a,M:()=>r+1,Mo:()=>u(r+1),MM:()=>`${r+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(e.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(e.locales,{month:"long"}),D:()=>String(i),Do:()=>u(i),DD:()=>`${i}`.padStart(2,"0"),H:()=>String(s),Ho:()=>u(s),HH:()=>`${s}`.padStart(2,"0"),h:()=>`${s%12||12}`.padStart(1,"0"),ho:()=>u(s%12||12),hh:()=>`${s%12||12}`.padStart(2,"0"),m:()=>String(l),mo:()=>u(l),mm:()=>`${l}`.padStart(2,"0"),s:()=>String(f),so:()=>u(f),ss:()=>`${f}`.padStart(2,"0"),SSS:()=>`${M}`.padStart(3,"0"),d:()=>p,dd:()=>t.toLocaleDateString(e.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(e.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(e.locales,{weekday:"long"}),A:()=>c(s,l),AA:()=>c(s,l,!1,!0),a:()=>c(s,l,!0),aa:()=>c(s,l,!0,!0)};return n.replace(T,(d,m)=>{var h,S;return(S=m??((h=g[d])==null?void 0:h.call(g)))!=null?S:d})}const R=t=>/,\s*\{/.test(t)||!(t.startsWith("http")||t.startsWith("data:")||t.startsWith("blob:"));function U(t){return location.origin+"/image?path="+encodeURIComponent(t)+"&url="+encodeURIComponent(sessionStorage.getItem("bookUrl"))+"&width="+b().config.readWidth}const z=t=>{let n=new Date().getTime(),e=Math.floor((n-t)/1e3),o="";return e<=30?o="刚刚":e<60?o=e+"秒前":e<3600?o=Math.floor(e/60)+"分钟前":e<86400?o=Math.floor(e/3600)+"小时前":e<2592e3?o=Math.floor(e/86400)+"天前":o=x(new Date(t),"YYYY-MM-DD"),o},A='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"/></svg>';const C=(t,n,e=A)=>{const o=L(!1);let a=null;const r=()=>o.value=!1,i=()=>o.value=!0;v(o,l=>{if(!l)return a==null?void 0:a.close();a=y.service({target:D(t),spinner:e,text:n,lock:!0,background:"rgba(0, 0, 0, 0)"})});const s=l=>{if(!(l instanceof Promise))throw TypeError("loadingWrapper argument must be Promise");return i(),l.finally(r)};return Y(()=>{r()}),{isLoading:o,showLoading:i,closeLoading:r,loadingWrapper:s}};export{E as a,z as d,U as g,R as i,C as u};
