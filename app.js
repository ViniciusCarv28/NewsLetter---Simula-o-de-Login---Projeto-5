//Selecionar Elementos
const root = document.documentElement;
const btn = document.getElementById("btnTem");
const ano = document.getElementById("ano");

//Preenchendo ano atual
ano.textContent = new Date().getFullYear()

//Tema light/dark Alternância Boolean
btn.addEventListener("click", ()=> {
const escuro = root.getAttribute("data-tema")==='escuro'

if (escuro) {
root.removeAttribute("data-tema")
}else{
root.setAttribute("data-tema","escuro")
}

})