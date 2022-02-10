$( function() {
  
  let valor1;
  let valor2;
  let operacao;
  
  $("input[name=btn]").click( function() {
    $("#result").val($("#result").val() + $(this).val());
  });
  
  $("input[name=ce]").click( function() {
    $("#result").val("");
    $("#op").text("");
    
  });
  
  $("input[name=soma]").click( function() {
    if ($("#result").val() !== "") {
      valor1 = parseFloat($("#result").val());
      $("#result").val("");
      operacao = "soma";
      $("#op").text($(this).val());      
    } else {
      alert("Insira um valor para efetuar a operação!");      
    }
  });
  
  $("input[name=subtrair]").click( function() {
    if ($("#result").val() !== "") {
      valor1 = parseFloat($("#result").val());
      $("#result").val("");
      operacao = "subtrair";
      $("#op").text($(this).val());      
    } else {
      alert("Insira um valor para efetuar a operação!");      
    }
  });
  
  $("input[name=multiplicar]").click( function() {
    if ($("#result").val() !== "") {
      valor1 = parseFloat($("#result").val());
      $("#result").val("");
      operacao = "multiplicar";
      $("#op").text($(this).val());      
    } else {
      alert("Insira um valor para efetuar a operação!");      
    }
  });
  
  $("input[name=dividir]").click( function() {
    if ($("#result").val() !== "") {
      valor1 = parseFloat($("#result").val());
      $("#result").val("");
      operacao = "dividir";
      $("#op").text($(this).val());      
    } else {
      alert("Insira um valor para efetuar a operação!");      
    }
  });
  
  $("input[name=igual]").click( function() {
    if ($("#result").val() !== "") {
      valor2 = parseFloat($("#result").val());
      
      if (operacao === "soma") {
        $("#result").val(valor1 + valor2);
      } else if (operacao === "subtrair") {
        $("#result").val(valor1 - valor2);
      } else if (operacao === "multiplicar") {
        $("#result").val(valor1 * valor2);
      } else if (operacao === "dividir") {
        $("#result").val(valor1 / valor2);
      }
           
    } else {
      alert("Insira um valor para efetuar o calculo!"); 
  }
  });  
  
  $("input[name=c]").click( function() {
    let tamanho = $("#result").val().length;
    let valor = $("#result"). val();
    valor = valor.replace(valor.charAt(tamanho - 1), "");
     $("#result").val(valor);
  });
});