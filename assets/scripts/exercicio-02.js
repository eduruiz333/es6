

// Pega o valor digitado na caixa de texto e escreve dentro da div
/* pegaValor = () => {
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
})(); */

/* -------------------------------------------------------------- */

// Usando SPREAD OPERATOR em uma função quando não se tem uma quantidade prevista de elementos num array

multiplicar = (multiplicador, ...valores) => {
    return valores.map(valor => valor * multiplicador)
}

console.log(multiplicar(5, 1, 2, 3, 4, 5))


//Início de estudos sobre Programação Funcional e conceitos de funções puras

fnMult = (x, y) => x * y

calc = (fn, x, y) => {
    return fnMult(x, y)
}

console.log('Resultado: ' + calc(fnMult, 3, 3));




// FIBONACCI
// 1 - Definir parâmetro de quantidade numérica para cálculo da sequência
// 2 - Efetuar as somas começando de 0, 1 com a quantidade de iterações iguais à definida no parâmetro acima
// 3 - A cada iteração, escrever o resultado da soma na posição atual

(fibonacci = () => {
    const fibonacci = document.querySelector('.fibonacci')
    let printaFibonacci = ''

    const quantidade = 10
    let primeiro = 0
    let segundo = 1
    let soma = undefined
    
    for (let i = 0; i <= quantidade; i ++) {
        soma = primeiro + segundo
        primeiro = soma
        segundo = primeiro - segundo
        printaFibonacci += `<span> - ${soma}</span>`
    }

    fibonacci.innerHTML = '0' + printaFibonacci
}) ()


// MESMA SEQUÊNCIA USANDO SOMENTE LOG, E RECONHECENDO SE O NÚMERO CONSTA NO ARRAY
/*
    (fibonacci = () => {
        const quantidade = 10
        let primeiro = 0
        let segundo = 1
        let soma = undefined
        let lista = [0]

        for (let i = 0; i <= quantidade; i ++) {
            soma = primeiro + segundo
            primeiro = soma
            segundo = primeiro - segundo
            lista.push(soma)
        }
        console.log(lista)

        if(lista.indexOf(quantidade) !== -1) {
            console.log('sim, o numero calculado consta na sequência de Fibonacci')
        } else {
            console.log('não, o numero calculado não consta na sequência de Fibonacci')
        }

    }) ()
*/
