import{r as p,x as V,o as r,c as s,a as t,F as u,f as y,n as x,y as N,d as c,t as f,l as k,u as b,q as m,g as z,b as h}from"./BJE7q9Cv.js";import{a as B}from"./DW5lH2HW.js";import{c as A}from"./CfuhQ4U8.js";import{C as D,A as q,b as F}from"./QdjxvZFd.js";const L={class:"flex flex-col"},R={class:"overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"},S={class:"min-w-full inline-block align-middle"},T={class:"overflow-hidden"},U={class:"min-w-full divide-y divide-gray-200 border-b border-gray-200 dark:divide-neutral-700"},$={class:"bg-gray-50 dark:bg-neutral-800"},j=["onClick"],E={key:1},M={class:"divide-y divide-gray-200 dark:divide-neutral-700"},O={key:0,class:"px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center"},P={class:"inline-flex gap-x-2"},G={type:"button",class:"py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"},H={type:"button",class:"py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"},W={__name:"DsTable",props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0},isVisible:{type:Boolean,default:!1}},setup(g){const v=g,a=p(null),o=p(null),w=V(()=>a.value?[...v.rows].sort((i,l)=>{const e=i[a.value],n=l[a.value];return o.value==="asc"?e>n?1:e<n?-1:0:o.value==="desc"?e<n?1:e>n?-1:0:0}):v.rows);function _(i){a.value===i?o.value=o.value==="asc"?"desc":"asc":(a.value=i,o.value="asc")}return(i,l)=>(r(),s(u,null,[t("div",L,[t("div",R,[t("div",S,[t("div",T,[t("table",U,[t("thead",$,[t("tr",null,[(r(!0),s(u,null,y(g.columns,(e,n)=>(r(),s("th",{key:n,scope:"col",class:x(["px-6 py-3 text-xs font-medium uppercase",e.align==="end"?"text-end":"text-start","text-gray-500 dark:text-neutral-500"])},[e.sortable?(r(),s("a",{key:0,onClick:N(d=>_(e.field),["prevent"]),class:"group inline-flex items-center gap-x-2 font-semibold hover:text-gray-600 focus:text-gray-600 cursor-pointer"},[c(f(e.label)+" ",1),t("span",null,[a.value===e.field&&o.value==="asc"?(r(),k(b(B),{key:0,class:"size-3.5 inline"})):a.value===e.field&&o.value==="desc"?(r(),k(b(A),{key:1,class:"size-3.5 inline"})):a.value!==e.field?(r(),k(b(D),{key:2,class:"shrink-0 size-3.5 inline"})):m("",!0)])],8,j)):(r(),s("span",E,f(e.label),1))],2))),128))])]),t("tbody",M,[(r(!0),s(u,null,y(w.value,(e,n)=>(r(),s("tr",{key:n},[(r(!0),s(u,null,y(g.columns,(d,C)=>(r(),s("td",{key:C,class:x(["px-6 py-4 whitespace-nowrap text-sm",d.align==="end"?"text-end":"text-start","text-gray-800 dark:text-neutral-200"])},[d.slotName?z(i.$slots,d.slotName,{key:0,row:e,value:e[d.field]}):(r(),s(u,{key:1},[c(f(e[d.field]),1)],64))],2))),128))]))),128))])])])])])]),g.isVisible?(r(),s("div",O,[l[2]||(l[2]=t("div",null,[t("p",{class:"text-sm text-gray-600 dark:text-neutral-400"},[t("span",{class:"font-semibold text-gray-800 dark:text-neutral-200"},"10"),c(" results ")])],-1)),t("div",null,[t("div",P,[t("button",G,[h(b(q),{class:"shrink-0 size-4"}),l[0]||(l[0]=c(" Prev "))]),t("button",H,[l[1]||(l[1]=c(" Next ")),h(b(F),{class:"shrink-0 size-4"})])])])])):m("",!0)],64))}};export{W as _};
