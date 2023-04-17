import{d as _,i as d,a as h,u as p,b as u,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as b,j as x,o as l,k as y,l as k,m as N,p as j,q as w,_ as P}from"./index-ef7a7824.js";import{N as S}from"./NoteDisplay-8c126869.js";const V={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=f(()=>x.slice(0,-1).map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(l(),n("div",{id:"page-root",style:b(a(w))},[t("div",V,[t("div",L,[t("h1",T,s(a(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(a(i),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(y)),1),k(" "+s(e==null?void 0:e.title)+" ",1),z])]),N(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(l(),n("hr",F)):j("v-if",!0)]))),128))])],4))}}),R=P(M,[["__file","/home/runner/work/bullshit_jobs/bullshit_jobs/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
