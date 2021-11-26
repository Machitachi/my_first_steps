/*Crie uma página html para receber avaliações de satisfação de um estabelecimento fictício (dê um nome para o seu estabelecimento).
Após submeter o formulário, apresente as respostas do usuário em um bloco à parte.*/


function addPerson() {

  palestra();
  removeDataFromForm();

  return true;
}

function palestra() {
  let form = document.querySelector(".speaker-form");
  let input = document.querySelector("#full-name").value;
  let palco =  document.querySelector("#talk-type").value;
  let workshop =  document.querySelector("#talk-workshop").value;
  let size = document.querySelector("#t-shirt-size").value;
  let abstract =  document.querySelector("#abstract").value;
  let confirmar =  document.querySelector("#available").value;
  let tableBody = document.getElementById("table-body");

  let dados = "<tr>";
  dados += "<td>" + input+ "</td>";  
  dados+= "<td>" + abstract + "</td>";
  dados+= "</tr>";

  tableBody.innerHTML  += dados;
}

function removeDataFromForm() {
  document.getElementById("full-name").value = "";  
  document.getElementById("t-shirt-size").value = "";
  document.getElementById("abstract").value = "";
  
  return true;
}

