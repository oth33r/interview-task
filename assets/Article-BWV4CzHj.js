import{r as y,c as z,d as I,e as F,j as e,f as q,g as H,h as E,i as V,k as B,l as P,m as G,u as O,S as Q,o as $}from"./index-BXWjiGx1.js";import{z as b,u as C,I as j,E as f,B as m,C as X,a as J,b as K,d as U,L as w,e as W}from"./index-DG7If2PJ.js";import{c as k,A as Y,u as S,X as Z,M as _}from"./Modal-Bat1lEhd.js";const A=b.object({content:b.string().min(1,"Comment required"),parent:b.number().positive().nullable().optional().or(b.literal(null))});/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=k("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=k("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=k("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),M=({articleId:l,comment:t})=>{const[p,o]=y.useState(!1),[s,d]=y.useState(!1),{register:r,handleSubmit:c,reset:n,errors:i}=C({schema:A}),[x,{isLoading:h}]=z(),[g]=I(),[N]=F(),v=a=>{x({commentId:a,articleId:l})},R=(a,u)=>{g({articleId:l,commentId:u,data:a}),n(),o(!1)},L=(a,u)=>{N({articleId:l,data:{...a,parent:u}}),n(),d(!1)},T=()=>{d(!1),o(a=>!a),n()},D=()=>{o(!1),d(a=>!a),n()};return e.jsxs("div",{className:"text-left space-y-3",children:[e.jsxs("div",{className:"bg-white px-2 py-1.5 rounded-md max-w-[500px] w-fit break-words space-y-1",children:[e.jsx("h5",{className:"text-neutral-400 text-sm",children:t.author.username}),e.jsx("p",{children:t.content}),p&&e.jsxs("form",{onSubmit:c(a=>R(a,t.id)),className:"flex gap-4 mb-5",children:[e.jsxs("div",{className:"flex flex-col gap-2 w-[400px]",children:[e.jsx(j,{...r("content"),placeholder:"Type your edited comment",className:"h-[40px] text-black"}),e.jsx(f,{error:i.content})]}),e.jsx(m,{type:"submit",className:"max-w-[150px]",disabled:h,children:"Reply"})]}),s&&e.jsxs("form",{onSubmit:c(a=>L(a,t.id)),className:"flex gap-4 mb-5",children:[e.jsxs("div",{className:"flex flex-col gap-2 w-[400px]",children:[e.jsx(j,{...r("content"),placeholder:"Type your reply comment",className:"h-[40px] text-black"}),e.jsx(f,{error:i.content})]}),e.jsx(m,{type:"submit",className:"max-w-[150px]",disabled:h,children:"Reply"})]}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(m,{className:"w-fit h-6 group",onClick:T,children:e.jsx(se,{size:14,className:"group-hover:text-emerald-500"})}),e.jsx(m,{className:"w-fit h-6 group",onClick:D,children:e.jsx(ee,{size:14,className:"group-hover:text-emerald-500"})}),e.jsx(m,{className:"w-fit h-6 group",onClick:()=>v(t.id),children:e.jsx(te,{size:14,className:"group-hover:text-rose-500"})})]})]}),e.jsx("div",{className:"pl-6",children:t.children.map((a,u)=>e.jsx(M,{comment:a,articleId:l},u))})]})},ae=({id:l,comments:t})=>{const{register:p,handleSubmit:o,reset:s,errors:d}=C({schema:A}),[r,{isLoading:c}]=q(),n=i=>{r({id:l,data:{...i,parent:null}}),s()};return e.jsxs("div",{className:"",children:[e.jsxs("form",{onSubmit:o(n),className:"flex gap-4 mb-5",children:[e.jsxs("div",{className:"flex flex-col gap-2 w-[400px]",children:[e.jsx(j,{...p("content"),placeholder:"Type your comment"}),e.jsx(f,{error:d.content})]}),e.jsx(m,{type:"submit",variant:"secondary",className:"max-w-[150px]",disabled:c,children:"Comment"})]}),t==null?void 0:t.map((i,x)=>e.jsx(M,{comment:i,articleId:l},x))]})},le=({modalName:l,article:t})=>{const{handleClick:p,handleSubmit:o,register:s,buttonRef:d,errors:r,reset:c}=C({schema:Y}),[n,{isLoading:i,isSuccess:x}]=H(),h=S();y.useEffect(()=>{x&&(c(),h(E(l)))},[h,x,c,l]);const g=v=>{n({id:t.id,data:v})},N=()=>{c(),h(E(l))};return e.jsxs(X,{className:"w-[600px] bg-primary px-[50px] drop-shadow-xl border-none relative",children:[e.jsxs(J,{className:"items-center",children:[e.jsx(K,{className:"text-white text-5xl font-semibold",children:"Edit article"}),e.jsx("button",{className:"absolute text-white top-2 right-4",onClick:N,children:e.jsx(Z,{})})]}),e.jsx(U,{children:e.jsxs("form",{onSubmit:o(g),className:"space-y-2",children:[e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(w,{htmlFor:"title",className:"font-semibold text-white uppercase",children:"Title"}),e.jsx(j,{id:"title",defaultValue:t.title,placeholder:"Type title",className:`${r.title?"border-rose-500":"border-white"}`,...s("title")}),e.jsx(f,{error:r.title})]}),e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(w,{htmlFor:"content",className:"font-semibold text-white uppercase",children:"Content"}),e.jsx("textarea",{rows:4,placeholder:"Type content",defaultValue:t.content,className:`${r.content&&"border-rose-500"} rounded-lg bg-primary border border-white resize-none text-white py-1.5 px-2 text-sm placeholder:text-neutral-500`,...s("content")}),e.jsx(f,{error:r.content})]}),e.jsxs("div",{children:[e.jsx(w,{htmlFor:"image",className:"font-semibold text-white uppercase",children:"Image"}),e.jsx(j,{type:"file",id:"image",...s("image")})]}),e.jsx("button",{hidden:!0,ref:d})]})}),e.jsx(W,{className:"flex gap-2 flex-col items-start",children:e.jsx(m,{variant:"secondary",type:"submit",onClick:p,disabled:i,children:"Edit article"})})]})},ce=()=>{const l=V(),t=Number(l[0].get("id")),{isLoading:p,isError:o,data:s}=B(t),{data:d=[]}=P(t),[r,{isLoading:c,isSuccess:n}]=G(),i=O(),x=S();if(console.log(s),y.useEffect(()=>{n&&i("/")},[i,n]),o)return e.jsx("div",{children:"Error"});if(p||c)return e.jsx(Q,{});const h=()=>{r(s.id)};return e.jsxs("div",{className:"flex flex-col gap-4 bg-primary min-h-screen w-full overflow-x-hidden py-4 px-4",children:[e.jsxs("div",{className:"w-1/2 rounded-lg flex flex-col overflow-hidden",children:[e.jsx("img",{src:(s==null?void 0:s.image)??"",alt:"Article image",className:"object-cover max-h-[600px] w-full aspect-square rounded-lg select-none pointer-events-none"}),e.jsxs("div",{className:"text-white space-y-3 text-wrap",children:[e.jsxs("div",{className:"flex gap-2 mt-2",children:[e.jsx(m,{variant:"secondary",onClick:()=>x($("editArticle")),className:"w-[200px]",children:"Edit article"}),e.jsx(m,{variant:"secondary",onClick:h,className:"w-[200px]",children:"Delete article"})]}),e.jsxs("h3",{className:"text-sm sm:text-xl border-b-2 border-neutral-400 rounded-b-none",children:["Article's author:"," ",e.jsx("span",{className:"font-semibold",children:s==null?void 0:s.author.username})]}),e.jsx("p",{className:"break-words",children:s==null?void 0:s.content})]})]}),e.jsx(_,{modalName:"editArticle",children:e.jsx(le,{modalName:"editArticle",article:s})}),e.jsx(ae,{comments:d,id:t})]})};export{ce as default};
