import{r as o,t as g,v as h,p as f,w,j as E}from"./index-BXWjiGx1.js";import{z as c}from"./index-DG7If2PJ.js";/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(...e)=>e.filter((t,r,s)=>!!t&&s.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=o.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:a="",children:n,iconNode:l,...u},p)=>o.createElement("svg",{ref:p,...b,width:t,height:t,stroke:e,strokeWidth:s?Number(r)*24/Number(t):r,className:i("lucide",a),...u},[...l.map(([m,d])=>o.createElement(m,d)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(e,t)=>{const r=o.forwardRef(({className:s,...a},n)=>o.createElement(y,{ref:n,iconNode:t,className:i(`lucide-${x(e)}`,s),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=A("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),j=g.withTypes(),C=5e6,M=["image/jpeg","image/jpg","image/png","image/webp"],P=c.object({title:c.string().min(1,"Title required").max(100,"Maximum length of title 100 characters"),content:c.string().min(1,"Content required"),image:c.any().optional().refine(e=>{var t;return e.length==1?!!M.includes((t=e==null?void 0:e[0])==null?void 0:t.type):!0},"Invalid file. choose either JPEG or PNG image").refine(e=>{var t;return e.length==1?((t=e[0])==null?void 0:t.size)<=C:!0},"Max file size allowed is 8MB.")}),k=h.withTypes(),S=({modalName:e,children:t})=>{const{modals:r}=k(a=>a.modals),s=j();return o.useEffect(()=>{s(f(e))},[s,e]),r[e]?w.createPortal(E.jsx("div",{className:"absolute top-0 w-full h-screen flex justify-center items-center bg-primary/90",children:t}),document.body):null};export{P as A,S as M,L as X,A as c,j as u};
