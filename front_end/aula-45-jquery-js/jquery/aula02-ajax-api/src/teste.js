class Pessoa {
  constructor(nome, sobrenome) {
    this._nome;
    this._sobrenome;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  get sobrenome() {
    return this._sobrenome;
  }

  set sobrenome(sobrenome) {
    this._sobrenome = sobrenome;
  }

  falar(msg) {
    console.log(`${this.nome} está falando ${msg}`);
  }

  comer() {
    console.log(`${this.nome} está comendo...`);
  }

  beber(bebida) {
    console.log(`${this.nome} ${sobrenome} está bebendo ${bebida}`);
  }
}

class Carro {
  constructor(modelo) {
    this._marca = 'Honda';
    this._modelo;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(modelo) {
    this._modelo = modelo;
  }

  imprimir() {
    console.log(`${this.marca} ${this.modelo}`)
  }
}

const acessar = new Carro();
console.log(acessar.modelo)


//----------------------------------------------

let moedaEscolhida = "";

$.ajax({url:"https://economia.awesomeapi.com.br/json/all"}).done((data)=>{
    Object.entries(data).forEach((obj)=>{
        $("#select-moeda").append(`<option value="${obj[0]}">${obj[0]}</option>`)
    })
})
$("#select-moeda").on("change",function(){
    moedaEscolhida = $("#select-moeda").val();
    if(moedaEscolhida === "none"){
        $("#cotacao-atual").html("Escolha uma moeda.")
        return false;
    }
    $.ajax({url:`https://economia.awesomeapi.com.br/json/${moedaEscolhida}-BRL`}).done((data)=>{
    $("#cotacao-atual").html(`Cotação atual: ${Object.values(data)[0].code} - ${Object.values(data)[0].codein}<br/> Preço de compra:${Object.values(data)[0].ask}.<br/> Preço de venda: ${Object.values(data)[0].bid}.<br/> Máximo: ${Object.values(data)[0].high}.<br/> Mínimo: ${Object.values(data)[0].low}.<br/> Variação: ${Object.values(data)[0].varBid}.<br/> Porcentagem de variação:${Object.values(data)[0].pctChange}`);
});    
});

$("#btn").on("click",function(){
    $("#resposta").html("")
    const iniDate = $("#data-inicio").val().replaceAll("-","");
    const endDate = $("#data-fim").val().replaceAll("-","");
    $.ajax({url:`https://economia.awesomeapi.com.br/${moedaEscolhida}-BRL/${10**20}?start_date=${iniDate}&end_date=${endDate}`}).done(function (data){
        data.forEach((obj=>{
            const dia = new Date(obj.timestamp*1000).getDate();
            const mes = new Date(obj.timestamp*1000).getMonth() +1;
            const ano = new Date(obj.timestamp*1000).getFullYear();
            const hora = new Date(obj.timestamp*1000).toTimeString().split("GMT")[0];
            $("#resposta").append(`<tr><td>${moedaEscolhida}</td><td>${obj.bid}</td><td>${obj.ask}</td><td>${obj.high}</td><td>${obj.low}</td><td>${obj.varBid}</td><td>${obj.pctChange}</td><td>${dia}/${mes}/${ano} - ${hora}</td></tr>`)
        }))
    });
});


// ------------------------------------------------------------------

$(document).ready(function() {
	$.ajax({ url: "https://economia.awesomeapi.com.br/json/all"})
    .done( (data) => {
		  Object.entries(data).forEach( (moeda) => {
			$("#moedas").append(`<option>${moeda[0]}</option>`);
  	})
  });
/*
  $("#data-in").on("change", function() {
    const data = $(this).val().replaceAll("-", "");
    const moeda = $("#moedas").val();

    $.ajax({ url: `https://economia.awesomeapi.com.br/${moeda}/?start_date-${data}&end_date-${data}` })
      .done( (data) => {
        $("#retorn").html(JSON.stringify(data));
      });
  })

  $("#moedas").on("change", function() {
    const data = $(this).val().replaceAll("-", "");
    const moeda = $("#moedas").val();

    $.ajax({ url: `https://economia.awesomeapi.com.br/${moeda}/?start_date-${data}&end_date-${data}` })
      .done( (...data) => {
        $(".result").html(JSON.stringify());
      });
  })
*/
  $("#btn").click(function() {
    // const data = $(this).val().replaceAll("-", "");
   // $("#result").html("")
    const moeda = $("#moedas").val();
    const dataInicial = $("#data-inicial").val().replaceAll("-", "");
    const dataFinal = $("#data-final").val().replaceAll("-", "");

    $.ajax({ url: `https://economia.awesomeapi.com.br/${moeda}-BRL/${10**20}?start_date=${dataInicial}&end_date=${dataFinal}` })
      .done( (data) => {
        const { code, bid, ask, high, low, varBid, pctChange, create_date} = data[0];

        data.forEach((obj) => {
          const dia = new Date(obj.timestamp*1000).getDate();
          const mes = new Date(obj.timestamp*1000).getMonth() +1;
          const ano = new Date(obj.timestamp*1000).getFullYear();
          const hora = new Date(obj.timestamp*1000).toTimeString().split("GMT")[0];

        $("#result").append(
          `<tr>
            <td>${ code }</td>
            <td>${ bid }</td>
            <td>${ ask }</td>
            <td>${ high }</td>
            <td>${ low }</td>
            <td>${ varBid }</td>
            <td>${ pctChange }</td>
            <td>${ create_date }</td>
            <td>${dia}/${mes}/${ano} - ${hora}</td>
          </tr>`);
        });
        })        
  })
});


// -----------------------------------------------------------------------------------------
