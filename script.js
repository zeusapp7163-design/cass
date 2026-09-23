document.addEventListener("click",async e=>{
 const b=e.target.closest("[data-copy]");
 if(!b)return;
 const code=b.dataset.copy;
 try{await navigator.clipboard.writeText(code)}catch{const x=document.createElement("textarea");x.value=code;document.body.appendChild(x);x.select();document.execCommand("copy");x.remove()}
 const t=document.querySelector(".toast");t.textContent=`Промокод ${code} скопирован`;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800);
});