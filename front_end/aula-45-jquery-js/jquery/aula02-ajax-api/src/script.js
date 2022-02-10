$(document).ready(function() {
	$.ajax({ url: "https://economia.awesomeapi.com.br/json/all"})
    .done( (data) => {
		  Object.entries(data).forEach( (moeda) => {
			$("#moedas").append(`<option>${moeda[0]}</option>`);
  	})
  });

  $("#btn").click(function() {
    
    const moeda = $("#moedas").val();
    const dataInicial = $("#data-inicial").val().replaceAll("-", "");
    const dataFinal = $("#data-final").val().replaceAll("-", "");

    $.ajax({ url: `https://economia.awesomeapi.com.br/${moeda}-BRL/${ 10 ** 20 }?start_date=${dataInicial}&end_date=${dataFinal}` })
      .done( (data) => {
        const { code, bid, ask, high, low, varBid, pctChange } = data[0];

        data.forEach((obj) => {
          const dia = new Date(obj.timestamp*1000).getDate();
          const mes = new Date(obj.timestamp*1000).getMonth() + 1;
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
            <td>${dia}/${mes}/${ano} - ${hora}</td>            
          </tr>`);
        });
      })        
  })
});


// -----------------------------------------------------------------------------------------
