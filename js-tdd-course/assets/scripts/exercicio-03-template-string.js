
let content = document.querySelector('.alchemy')

const alchemy = {
    title: 'O CAIBALION: OS 7 PRINCÍPIOS DA VERDADE',
    intro: 'Os Princípios da Verdade são Sete; aquele que os conhece perfeitamente, possui a Chave Mágica com a qual todas as Portas do Templo podem ser abertas completamente.',
    present: 'Os Sete Princípios em que se baseia toda a Filosofia hermética são os seguintes:',
    precepts: [
        'O Princípio de Mentalismo.',
        'O Princípio de Correspondência.',
        'O Princípio de Vibração.',
        'O Princípio de Polaridade.',
        'O Princípio de Ritmo.',
        'O Princípio de Causa e Efeito.',
        'O Princípio de Gênero.'
    ],
    conclusion: 'Estes Sete Princípios podem ser explicados e explanados, como vamos fazer nesta lição. Uma pequena explanação de cada um deles pode ser feita agora, e é o que vamos fazer.',
    author: 'Os Três Iniciados'
}

function renderAuthor(name) {
    return (name) ? name : 'desconhecido'
}

const markup = `

   <article class="p-4">
        <header>
            <h1>${alchemy.title}</h1>
        </header>
        <section class="p-5 mb-3">
            <p>${alchemy.intro}</p>
            <h2>${alchemy.present}</h2>
        </section>
        <section class="p-5 mb-3">
            <ol>
                ${alchemy.precepts.map((precept) => `<li>${precept}</li>`).join('')}
            </ol>
        </section>
        <section class="p-5 mb-3">
            <h6>${alchemy.conclusion}</h6>
            <p>Autor: ${renderAuthor(alchemy.author)}</p>
        </section>
    </article>
`

content.innerHTML = markup