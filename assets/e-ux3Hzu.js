import{e as p,r as u,o as i,c as o,a as e,t as a}from"./BJE7q9Cv.js";const y={__name:"[id]",setup(c){const n=[{id:1,subject:"Mathematics",department:"Science",type:"Lecture",gradeType:"Numeric"},{id:2,subject:"History",department:"Humanities",type:"Seminar",gradeType:"Pass/Fail"}],l=p().params.id,t=u(n.find(s=>s.id===parseInt(l,10)));return(s,r)=>(i(),o("div",null,[r[0]||(r[0]=e("h1",{class:"text-2xl font-bold mb-4"},"Details Page",-1)),e("p",null,"Subject: "+a(t.value.subject),1),e("p",null,"Department: "+a(t.value.department),1),e("p",null,"Type: "+a(t.value.type),1),e("p",null,"Grade Type: "+a(t.value.gradeType),1)]))}};export{y as default};
