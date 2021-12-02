/*
Para esse exercício, a sua responsabilidade é ajudar o Bart a escrever no quadro negro uma das frases à sua escolha (ou uma das frases escolhidas de forma aleatória pelo seu programa) utilizando a estrutura de repetição while, mas atenção, no quadro só há espaço para 11 linhas.
Regras:
Crie um formulário contendo um campo para informar a quantidade de vezes que o Bart Simpson deverá escrever a frase na lousa e um botão para executar a ação.
Ao final da execução, mostre quantas vezes foi necessário apagar o quadro e quantas linhas foram escritas na última iteração do while.
Desafio opcional: Apresentar, de forma “animada” a escrita das letras no quadro negro.
*/
//Declarações de Variaveis
let btnExecutar = document.querySelector("#btnExecutar");
let conteudo = document.querySelector("#content");
let resetar = document.querySelector("#resetar");

//evento
btnExecutar.addEventListener("click", function () {
    conteudo.innerHTML = "";
    resetar.innerHTML = "";    
    const inputQuantidadeVezes = document.querySelector("#quantidadeVezes").value;   
    let numeroVezes = 0;
    
    while(numeroVezes < inputQuantidadeVezes) {
      const fraseBart = document.createElement("blockquote");
      fraseBart.innerHTML = "Peixes não gostam de café";
      conteudo.appendChild(fraseBart);
            
      numeroVezes++;
      let contadorRepeticao = 0;
      
      if ((numeroVezes > 10) && (contadorRepeticao < (inputQuantidadeVezes / 11))){
        contadorRepeticao++;
        resetar.innerHTML = `O quadro foi apagado ${Math.trunc(inputQuantidadeVezes / 11)} vezes.` ;
        fraseBart = document.getElementById("content");
        fraseBart.innerHTML = "";
      }     
    };
});