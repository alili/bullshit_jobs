import{d as u,i as d,a as p,f as l,E as s,g as r,t as c,o as i,_ as m}from"./index-ef7a7824.js";const f=["innerHTML"],k=["textContent"],v=["textContent"],y=u({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(t){const n=t;return d(p),(o,e)=>t.noteHtml?(i(),l("div",{key:0,class:s(["prose overflow-auto outline-none",n.class]),onClick:e[0]||(e[0]=a=>o.$emit("click")),innerHTML:t.noteHtml},null,10,f)):t.note?(i(),l("div",{key:1,class:s(["prose overflow-auto outline-none",n.class]),onClick:e[1]||(e[1]=a=>o.$emit("click"))},[r("p",{textContent:c(t.note)},null,8,k)],2)):(i(),l("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:e[2]||(e[2]=a=>o.$emit("click"))},[r("p",{textContent:c(n.placeholder||"No notes.")},null,8,v)],2))}}),g=m(y,[["__file","/home/runner/work/bullshit_jobs/bullshit_jobs/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};
