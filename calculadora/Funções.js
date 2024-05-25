function ValorNaTela(value) {
    document.getElementById('interface').value += value;
}
    
function limparTela() {
    document.getElementById('interface').value = '';
}
    
function calcular() {
    try {
        document.getElementById('interface').value = eval(document.getElementById('interface').value);
    } catch(error) {
        document.getElementById('interface').value = 'Error';
    }
}