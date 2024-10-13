import{r as o,t as g,v as f,p as h,w,j as b}from"./index-DbaHB2kb.js";import{z as i}from"./index-DYZ0VIuC.js";/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=(...e)=>e.filter((t,r,s)=>!!t&&s.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=o.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:a="",children:n,iconNode:p,...l},m)=>o.createElement("svg",{ref:m,...y,width:t,height:t,stroke:e,strokeWidth:s?Number(r)*24/Number(t):r,className:c("lucide",a),...l},[...p.map(([u,d])=>o.createElement(u,d)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,t)=>{const r=o.forwardRef(({className:s,...a},n)=>o.createElement(E,{ref:n,iconNode:t,className:c(`lucide-${x(e)}`,s),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=j("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),A=g.withTypes(),C=5e6,M=["image/jpeg","image/jpg","image/png","image/webp"],S=i.object({title:i.string().min(1,"Title required").max(100,"Maximum length of title 100 characters"),content:i.string().min(1,"Content required"),image:i.any().refine(e=>{var t;return((t=e[0])==null?void 0:t.size)<=C},"Max image size is 5MB.").refine(e=>{var t;return M.includes((t=e[0])==null?void 0:t.type)},"Only .jpg, .jpeg, .png and .webp formats are supported.")}),k=f.withTypes(),T=({modalName:e,children:t})=>{const{modals:r}=k(a=>a.modals),s=A();return o.useEffect(()=>{s(h(e))},[s,e]),r[e]?w.createPortal(b.jsx("div",{className:"absolute top-0 w-full h-screen flex justify-center items-center bg-primary/90",children:t}),document.body):null};export{S as A,T as M,L as X,j as c,A as u};
