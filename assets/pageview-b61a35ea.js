import{a5 as n}from"./app-c4ce6300.js";const r=async()=>{try{const{pageviewCount:t}=await n(()=>import("./app-c4ce6300.js").then(e=>e.a6),[]);return t({serverURL:"https://waline.gpt-vip.top"})}catch{console.error("@waline/client is not installed!");return}};export{r as updatePageview};