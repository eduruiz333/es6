// LEXICAL THIS

// O "THIS" EM FUNÇÃO NORMAL, FAZ REFERÊNCIA AO CONTEXTO ONDE A AÇÃO ESTÁ INSERIDA

const btn = document.querySelector('#btn')
btn.addEventListener('click', function () {
    console.log(this)
})


// O "THIS" EM ARROW FUNCTION FAZ REFERÊNCIA AO CONTEXTO GERAL, COMO SE FOSSE ALGO GLOBAL
const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', () => {
    console.log(this)
})

//////////////////////////////////////////////////

// Exercício do sanduíche com função normal
const sanduicheiche = {
    pao: 'integral',
    queijo: 'provolone',

    pedido: function () {
        return `Eu quero um sanduba com pão ${this.pao} e queijo ${this.queijo}.`
    },

    fazer: function () {
        var self = this;
        window.setTimeout(function () {
            console.log(self.pedido())
        }, 500)

    }

}

const btnPedido = document.querySelector('#btn-pedido')

btnPedido.addEventListener('click', function () {
    sanduicheiche.fazer()
})

// Exercício do sanduíche com arrow function
const sanduicheiche2 = {
    pao: 'frances',
    queijo: 'mussarela',

    pedido: function () {
        return `Eu quero um sanduba com pão ${this.pao} e queijo ${this.queijo}.`
    },

    fazer: function () {
        window.setTimeout(() => {
            console.log(this.pedido())
        }, 500)

    }

}

const btnPedido2 = document.querySelector('#btn-pedido2')

btnPedido2.addEventListener('click', function () {
    sanduicheiche2.fazer()
})

// OBS: ARROW FUNCTION É MAIS ÚTIL PARA TRABALHAR COM O THIS QUANDO SE TEM FUNÇÃO DENTRO DE FUNÇÃO (ESTÁ NO CURSO JS COM TDD SEÇÃO 2 AULA 17.3.2
// ARROW FUNCTION NÃO É BALA DE PRATA, DEVE SER AVALIADA AO QUE VOCÊ PRECISA USAR NO MOMENTO