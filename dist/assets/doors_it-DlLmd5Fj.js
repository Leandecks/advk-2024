import{a as g}from"./foundLetters-CmyvoFxs.js";function b(l,i,c,s,d,p){const o=s,u=d,n=document.getElementById(l),t=document.createElement("p");t.style.display="inline-block",t.style.margin="0 0 0 1rem",t.style.color="white";const e=document.createElement("button"),a=i,r=c;e.style.border="none",u.addEventListener("click",()=>{n.checked?(n.parentElement.style.background="#2a7b6f",t.textContent="Risposta corretta!",n.parentElement.appendChild(t),e.textContent=`Congratulazioni, hai risolto il quiz! ${r} La lettera di oggi è "${a}".`,e.style.backgroundColor="#2a7b6f",o.appendChild(e),g(a,p)):(n.parentElement.style.background="#964a50",t.textContent="...sarebbe stato corretto!",n.parentElement.appendChild(t),e.textContent=`Purtroppo oggi non ce l'hai fatta a risolvere il quiz! ${r} Ricordati che puoi indovinare la parola finale anche senza risolvere ogni singolo quiz...`,e.style.backgroundColor="#964a50",e.style.backgroundColor="#964a50",o.appendChild(e))})}export{b as v};
