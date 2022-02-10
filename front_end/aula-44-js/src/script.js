class Calculadora {
  constructor(_operand1, _operand2, _operation) {
    this.operand1 = _operand1;
    this.operand2 = _operand2;
    this.operation = _operation;
  }

  setOperand1(_operand1) {
    this.operand1 = _operand1;
  }
  
  setOperand2(_operand2) {
    this.operand2 = _operand2;
  }

  setOperation(_operation) {
    this.operation = _operation;
  }

  getResult() {
    if (this.operation === "+") {
      return this.operand1 + this.operand2;
    } else if (this.operation === "-") {
      return this.operand1 - this.operand2;
    } else if (this.operation === "*") {
      return this.operand1 * this.operand2;
    } else if (this.operation === "/") {
      return this.operand1 / this.operand2;
    }
  }

  clearCalculator() {
    this.setOperand1("");
    this.setOperand2("");
    this.setOperation("");
  }
}

$(document).ready(function () {
  let numberOne;
  let $result = $(".top");
  let calc = new Calculadora("", "", "+");

  function reset() {
    numberOne = null;
    numberTwo = null;
    operator = null;
    $result.val("");
  }

  $(".number a").click(function () {
    let number = $(this).text();
    let currentVal = $result.val();
    let newVal;

    if (currentVal === "0") {
      newVal = number;
    } else {
      newVal = currentVal + number;
    }

    $result.val(newVal);
  });

  $(".operator a").click(function () {
    calc.setOperation($(this).text());
    calc.setOperand1(parseFloat($result.val()));
    $result.val("");
    console.log(numberOne);
  });

  $("#igual").click(function () {
    calc.setOperand2(parseFloat($result.val()));
    let total = calc.getResult();
    $result.val(total);
  });

  $("#result").click(function () {
    reset();
  });
});
