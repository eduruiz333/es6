
// IMUTABILIDADE DE CONSTANTES

const edu = {
    nome: 'Eduardo',
    idade: 47,

}

console.log(edu)

Object.freeze(edu)
// SEM O FREEZE, É POSSÍVEL REESCREVER OS VALORES DAS CHAVES DE UM OBJETO, MESMO QUE ESTEJA DECLARADO COMO CONSTANTE, PORTANTO, PARA QUE UM OBJETO SEJA CONST, DEVE-SE USAR O FREEZE

edu.idade = 34

console.log(edu)

/////////////////////////////////////////////

// ARROW FUNCTIONS

const metal = ['Metallica', 'Slayer', 'Kreator', 'Behemnoth']

// Função clássica
/*
const fuckyeah = metal.map(function (band) {
    return `Hell yeah, ${band}!`
})
*/

// Arrow function
/*

const fuckyeah = metal.map((band) => {
    return `Hell yeah, ${band}!`
})
*/

// Arrow function One Line
const fuckyeah = metal.map((band) => `Hell yeah, ${band}!`)
console.log(fuckyeah)

// Encadeamentos com arrow function
const fuckslayer = metal
    .filter(band => band === 'Slayer')
    .map(band => `Hell yeah, ${band}!`)

console.log(fuckslayer)