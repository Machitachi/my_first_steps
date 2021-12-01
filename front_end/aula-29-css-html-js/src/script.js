//Declarações de variaveis
let paoFrances = document.querySelector("#frances");
let paoAstrauliano = document.querySelector("#astrauliano");
let paoBrioche = document.querySelector("#brioche");

let picanha = document.querySelector("#picanha");
let costela = document.querySelector("#costela");
let vegano = document.querySelector("#vegano");

let alface = document.querySelector("#alface");
let tomate = document.querySelector("#tomate");
let semSalada = document.querySelector("#semSalada");

let tipoMussarela = document.querySelector("#mussarela");
let tipoPrato = document.querySelector("#prato");
let tipoCheddar = document.querySelector("#cheddar");

//pedidos
let tipoPao = document.querySelector("#tipoPao");
let burguer = document.querySelector("#burguer");
let pedidosAlface= document.querySelector("#pedidosAlface");
let pedidosTomate = document.querySelector("#pedidosTomate");
let pedidosMussarela = document.querySelector("#pedidosMussarela");
let pedidosCheddar = document.querySelector("#pedidosCheddar");
let totalDoPedido = document.getElementById("total");       

function calculoDoPedido() {
//Tipos de paes
let valorPao;
if (paoFrances.checked) {
valorPao = 3.00;
tipoPao.innerHTML = "Francês";
} else if (paoAstrauliano.checked) {
  valorPao = 8.00;
  tipoPao.innerHTML = "Australiano";
} else if (paoBrioche.checked) {
  valorPao = 6.00;
  tipoPao.innerHTML = "Brioche";
} else {
  valorPao = 0.00;
  tipoPao.innerHTML = "...";
}

//Carne ou vegano
let valorBurger;
if (picanha.checked) {
  valorBurger = 13.00;
  burguer.innerHTML = "Picanha";
} else if (costela.checked) { 
  valorBurger = 10.00;
  burguer.innerHTML = "Costela";
} else if (vegano.checked) {
  valorBurger = 12.00;
  burguer.innerHTML = "Vegano";
} else {
    valorBurger = 0.00;
    burguer.innerHTML = "...";
}

//Com salada ou Sem salada
let valorSalada;
let salada1;
let salada2;
if (alface.checked) {
  salada1 = 1.50;
  pedidosAlface.innerHTML = "Alface";
} else {
  salada1 = 0.00;
  pedidosAlface.innerHTML = "...";
}
if (tomate.checked) {
  salada2 = 1.50;
  pedidosTomate.innerHTML = "Tomate";
} else {
  salada2 = 0.00;
  pedidosTomate.innerHTML = "...";
}

if (semSalada.checked) {
  salada1 = 0.00;
  salada2 = 0.00;
  pedidosTomate.innerHTML = "...";
  pedidosAlface.innerHTML = "...";
}

valorSalada = salada1 + salada2;

//Tipos de queijos
let valorQueijo;
let queijo1;
let queijo2;
let queijo3;
if (mussarela.checked) {
  queijo1 = 3.00;
  pedidosMussarela.innerHTML = "Mussarela";
} else {
  queijo1 = 0.00;
  pedidosMussarela.innerHTML = "...";
}
if (prato.checked) {
  queijo2 = 3.00;
  pedidosPrato.innerHTML = "Prato";
} else {
  queijo2 = 0.00;
  pedidosPrato.innerHTML = "...";
}
if (cheddar.checked) {
  queijo3 = 5.00;
  pedidosCheddar.innerHTML = "Cheddar";
} else {
  queijo3 = 0.00;
  pedidosCheddar.innerHTML = "...";
}  

//Resultado do pedido
valorQueijo = queijo1 + queijo2 + queijo3;
valorTotal = (valorPao + valorBurger + valorSalada + valorQueijo).toFixed(2);
totalDoPedido.innerHTML += 'R$ ' + valorTotal;
return true;
}

