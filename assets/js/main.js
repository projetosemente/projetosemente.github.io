document.addEventListener("DOMContentLoaded", () => {


const cabecalho = document.querySelector(".header");

const menuNavegacao = document.querySelector(".navbar");

const botaoMenu = document.querySelector(".btn-menu");

const linksNavegacao = document.querySelectorAll(".nav-link");

const botaoTopo = document.querySelector(".btn-topo");





/*
MENU MOBILE
*/

if(botaoMenu && menuNavegacao){


botaoMenu.addEventListener("click", () => {


menuNavegacao.classList.toggle("aberto");


const aberto = menuNavegacao.classList.contains("aberto");


botaoMenu.setAttribute(
"aria-expanded",
aberto
);


});


}





/*
FECHAR MENU AO CLICAR
*/

linksNavegacao.forEach(link => {


link.addEventListener("click", () => {


if(menuNavegacao){

menuNavegacao.classList.remove("aberto");

}


if(botaoMenu){

botaoMenu.setAttribute(
"aria-expanded",
"false"
);

}


});


});






/*
SCROLL
*/

window.addEventListener("scroll", () => {



if(cabecalho){

cabecalho.classList.toggle(
"scrolled",
window.scrollY > 50
);

}



if(botaoTopo){

botaoTopo.classList.toggle(
"visivel",
window.scrollY > 400
);

}



});







/*
VOLTAR AO TOPO
*/

if(botaoTopo){


botaoTopo.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}






/*
MENU ATIVO
*/


const secoes = document.querySelectorAll("section[id]");



window.addEventListener(
"scroll",
()=>{


let secaoAtual = "";



secoes.forEach(secao=>{


if(
window.scrollY >= secao.offsetTop - 120
){

secaoAtual = secao.id;

}


});




linksNavegacao.forEach(link=>{


link.classList.remove("ativo");



if(
link.getAttribute("href") === "#" + secaoAtual
){

link.classList.add("ativo");

}


});


});


});
