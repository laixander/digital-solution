import{r as u,m as b,o as f,c as h,p,K as k,a as t,b as s,u as a}from"./CHaCGwNM.js";import{X as g,c as m}from"./Dl9AgtqY.js";const w={class:"relative inline-block"},x={class:"peer-checked:text-white text-amber-500 w-6 h-6 absolute top-0.5 left-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500"},v={class:"peer-checked:text-green-600 text-white w-6 h-6 absolute top-0.5 right-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500"},V={__name:"DsToggleSwitch",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:c}){const i=n,l=c,r=u(i.modelValue);return b(r,o=>l("update:modelValue",o)),(o,e)=>(f(),h("div",w,[p(t("input",{type:"checkbox",id:"hs-default-switch-with-icons",class:"peer relative w-[3.25rem] h-7 p-px bg-amber-400 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-600 before:inline-block before:size-6 before:bg-white checked:before:bg-green-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-green-200","onUpdate:modelValue":e[0]||(e[0]=d=>r.value=d)},null,512),[[k,r.value]]),e[1]||(e[1]=t("label",{for:"hs-default-switch-with-icons",class:"sr-only"},"Switch Status",-1)),t("span",x,[s(a(g),{class:"shrink-0 w-3 h-3"})]),t("span",v,[s(a(m),{class:"shrink-0 w-3 h-3"})])]))}};export{V as _};
