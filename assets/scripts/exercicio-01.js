// Recupera parágrafos em ordem como um Array, e altera a cor do segundo
let p1 = document.getElementsByTagName('p')[0];
let p2 = document.getElementsByTagName('p')[1];
p2.style.color = 'blue';

// Pega o valor digitado na caixa de texto e escreve dentro da div
pegaValor = () => {
    if (valor.value == '') {
        mensagem.innerHTML = `O texto digitado foi <strong>"nadica de nada"</strong>`
    } else {
        mensagem.innerHTML = `O texto digitado foi <strong>${valor.value}</strong>`
    }
}

let valor = document.querySelector('.valor');
let btnAction = document.querySelector('.btn-action');
let mensagem = document.querySelector('.mensagem');
btnAction.addEventListener('click', pegaValor);

// Interage com a div ao passar o mouse e ao clicar
clicou = () => {
    interacao.innerText = 'Clicou';
    interacao.style.background = 'red'
}
entrou = () => {
    interacao.innerText = 'Entrou';
    interacao.style.background = 'blue'
}
saiu = () => {
    interacao.innerText = 'Saiu';
    interacao.style.background = 'green'
}


let interacao = document.querySelector('.area');
interacao.addEventListener('click', clicou);
interacao.addEventListener('mouseenter', entrou);
interacao.addEventListener('mouseout', saiu);

// Aqui uma função autoexecutável
(() => {
    console.log('Função autoexecutável')
})();