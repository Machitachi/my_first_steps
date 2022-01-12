const dataArray = [];
const oneDay = (1000 * 60 * 60 * 24);

const dataProvided = () => ({

    cliente: document.getElementById("cliente").value,
    vencimento: document.getElementById('data_vencimento').value,
    valor: parseFloat(document.getElementById('valor_compra').value),
    total: "",
});

function removeDataFromForm() {
    let clear = document.getElementById("table-body");
    clear.innerHTML = "";
}

function addToPage(item){

    let tableRows = document.createElement("tr");
    let tableDataCliente = document.createElement("td");
    let tableDataVencimento = document.createElement("td");
    let tableDataCompra = document.createElement("td");
    let tableDataTotalJuros = document.createElement("td");

    tableDataCliente.textContent = item.cliente;
    tableDataVencimento.textContent = item.vencimento;
    tableDataCompra.textContent = item.valor;
    tableDataTotalJuros.textContent = item.total;

    tableRows.appendChild(tableDataCliente);
    tableRows.appendChild(tableDataVencimento);
    tableRows.appendChild(tableDataCompra);
    tableRows.appendChild(tableDataTotalJuros);

    let tabela = document.getElementById("table-body");
    tabela.appendChild(tableRows);
}

function armazenarArray(){
   
    dataArray.push(dataProvided());  
    removeDataFromForm();
    dataArray.forEach(addToPage);

    document.getElementById("cliente").value = "";
    document.getElementById('data_vencimento').value = "";
    document.getElementById('valor_compra').value = "";
}

function juros(){

    removeDataFromForm();

    let calculatedInterest = dataArray.map(function(item, indice) {

        const today = new Date();
        const dueDate = new Date(item.vencimento);
        
        let DifferenceInTime = (today.getTime() - dueDate.getTime()) / oneDay;
        let rate = ((DifferenceInTime * 0.001) + 0.02);
        let purchaseAmount = item.valor;
        let totalToPay = "";
        
        if (DifferenceInTime > 0) {
            totalToPay = (purchaseAmount + purchaseAmount * rate).toFixed(2);
        } else {
            totalToPay = purchaseAmount;
        }

        item.total = parseFloat(totalToPay);      
        addToPage(item);

    });
}

function organizarPorCliente() {

    dataArray.sort(function (a, b) {
	
        return (a.cliente > b.cliente) ? 1 : ((b.cliente > a.cliente) ? -1 : 0);
    });

    removeDataFromForm();

    function agruparPor(item, index) {
        return item.reduce(function (comparar, obj) {
          let valor = obj[index];
          if (!comparar[valor]) {
            comparar[valor] = [];
          }
          comparar[valor].push(obj);
          return comparar;
        }, {});
    }

    let agruparPorClientes = agruparPor(dataArray, 'cliente');
    const array = [];
    for (const key in agruparPorClientes)
    array.push(agruparPorClientes[key]);

    for(let index = 0; index <= array.length; index += 1) {

        array[index].forEach(addToPage);

        const somaFeita = array[index].map(item => item.total).reduce((prev, curr) => prev + curr, 0);

        let tableRows = document.createElement("tr");
        let agrupar = document.createElement("h3");
        agrupar.textContent = `Total do Cliente: ${somaFeita}`;
        tableRows.appendChild(agrupar);
        let tabela = document.getElementById("table-body");
        tabela.appendChild(tableRows);
    }
}

function organizarPorVencimento (){

    dataArray.sort(function (a, b) {
	
        return (a.vencimento > b.vencimento) ? 1 : ((b.vencimento > a.vencimento) ? -1 : 0);
    });

    removeDataFromForm();

    function agruparPor(item, index) {
        return item.reduce(function (comparar, obj) {
          let valor = obj[index];
          if (!comparar[valor]) {
            comparar[valor] = [];
          }
          comparar[valor].push(obj);
          return comparar;
        }, {});
    }

    let agruparPorClientes = agruparPor(dataArray, 'vencimento');
    const array = [];
    for (const key in agruparPorClientes)
    array.push(agruparPorClientes[key]);

    for(let index = 0; index <= array.length; index += 1) {

        array[index].forEach(addToPage);

        const somaFeita = array[index].map(item => item.total).reduce((prev, curr) => prev + curr, 0);

        let tableRows = document.createElement("tr");
        let agrupar = document.createElement("h3");
        agrupar.textContent = `Total da Data: ${somaFeita}`;
        tableRows.appendChild(agrupar);
        let tabela = document.getElementById("table-body");
        tabela.appendChild(tableRows);
        
    }
}


function filtragemPorPeriodo(){

    removeDataFromForm();

    const minimumDate = document.getElementById("data_inicial").value;
    const maximumDate = document.getElementById("data_final").value;
    const initialValue = document.getElementById("valor_inicial").value;
    const finalValue = document.getElementById("valor_final").value;

    let filterInformation = dataArray.filter((array) => ((array.valor >= initialValue) && (array.valor <= finalValue) && (array.vencimento >= minimumDate) && (array.vencimento <= maximumDate)));

    let tableRows = document.createElement("tr");
    let agrupar = document.createElement("h3");
    agrupar.textContent = "Filtro por período ";
    tableRows.appendChild(agrupar);
    let tabela = document.getElementById("table-body");
    tabela.appendChild(tableRows);

    filterInformation.forEach(addToPage);
}