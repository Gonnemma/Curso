"use strict";

function cambiarTexto(){
    let titulo = document.querySelector("#inpText").value;
    document.getElementById("titulo").innerText=titulo;
}
let btn=document.getElementById("btn1");
btn.addEventListener("click", cambiarTexto)
/*
document.querySelector("#titulo"); //si se trata de ID se usa #
document.querySelector(".titulo"); //si se trata de class se usa .
*/

