var w=async(n,e={})=>{Array.isArray(e)&&(e=e[0]);const t=document.createElement("a");let r=n;"body"in n&&(r=await async function(s,u){const o=s.getReader(),i=new ReadableStream({start:l=>async function f(){return o.read().then(({done:b,value:p})=>{if(!b)return l.enqueue(p),f();l.close()})}()}),d=new Response(i),y=await d.blob();return o.releaseLock(),new Blob([y],{type:u})}(n.body,n.headers.get("content-type"))),t.download=e.fileName||"Untitled",t.href=URL.createObjectURL(await r);const c=()=>{typeof a=="function"&&a()},a=e.legacySetup&&e.legacySetup(c,()=>a(reject),t);return t.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(t.href),3e4),c()}),t.click(),null};export{w as default};
//# sourceMappingURL=file-save-3189631c-fOa8IYo3.js.map
