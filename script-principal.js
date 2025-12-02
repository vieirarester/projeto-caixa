let saldo = 0;
document.getElementById("paragrafoSaldo").innerHTML = saldo;
const btnSacar = document.getElementById("btnSacar");
const btnDepositar = document.getElementById("btnDepositar");

function mostrarMensagem(mensagem){
    document.getElementById("logMensagens").innerHTML = mensagem;
}

function atualizarSaldo() {
    document.getElementById("paragrafoSaldo").innerHTML = saldo.toFixed(2);
}

function mostrarCampoSaque() {
    document.getElementById("tela").innerHTML = `
        <p>Digite o valor</p>
        <input type="number" id="valorSaque">
        <button onclick="confirmarSaque()">Confirmar</button>
    `;
}

function mostrarCampoDeposito() {
    document.getElementById("tela").innerHTML = `
        <p>Digite o valor</p>
        <input type="number" id="valorDeposito">
        <button onclick="confirmarDeposito()">Confirmar</button>
    `;
}

function confirmarSaque(){
    let valor = parseFloat(document.getElementById("valorSaque").value)

    if (isNaN(valor) || valor <= 0) {
        mostrarMensagem("Valor inválido.");
        return;
    }

    if (valor > saldo) {
        mostrarMensagem("Saldo insuficiente.");
    } else {
        saldo -= valor;
        atualizarSaldo()
        mostrarMensagem(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }
}

function confirmarDeposito(){
    let valor = parseFloat(document.getElementById("valorDeposito").value)

    if (isNaN(valor) || valor <= 0) {
        mostrarMensagem("Valor inválido.");
        return;
    }

    saldo += valor;
    atualizarSaldo()
    mostrarMensagem(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
}

btnSacar.onclick = mostrarCampoSaque;
btnDepositar.onclick = mostrarCampoDeposito;