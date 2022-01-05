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

        item.total = totalToPay;      
        addToPage(item);

    });
}