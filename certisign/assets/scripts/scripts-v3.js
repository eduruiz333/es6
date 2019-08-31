// REFATURAÇÃO COM ECMA 8

(async function () {
    try {
        const getDados = await fetch('https://gip.certisign.com.br/gip/rest/vitrine/validades/site/entrevista-candidato')
        const resultado = await getDados.json()

        return (() => {
            const content = document.querySelector('#certisign-content')
            const contentModal = document.querySelector('.modal-itens')
            let printaCard = ''
            let printaModal = ''
            let listaImagens = []
            let listaTiposMidia = []
            let listaValidades = []
            let listaTipos = []
            let listaLinksCompra = []
            let listaCategorias = []
    
            for(dados of resultado) {
                let imagem = dados.imagem
                let tipoMidia = dados.midia
                let validade = dados.validade
                let tipo = dados.tipo
                let linkComprar = dados.linkGar
                let categoria = dados.categoria
    
                // Alimenta arrays para modal
                listaImagens.push(imagem)
                listaTiposMidia.push(tipoMidia)
                listaValidades.push(validade)
                listaTipos.push(tipo)
                listaLinksCompra.push(linkComprar)
                listaCategorias.push(categoria)
    
                printaCard += `
                <div class="card-content mb-3">
                    <img class="image" src="${imagem}" alt="Produto ${tipo}">
                    <p class="media-type">${tipoMidia}</p>
                    <p class="expiration">Validade ${validade} meses</p>
                    <p class="type">Tipo ${tipo}</p>
                    <a class="buy btn btn-outline-secondary" href="${linkComprar}" title="Comprar este produto" target="_blank">Comprar</a>
                    <a class="modal-link-index" href="#" data-toggle="modal" data-target="#productModal">
                        <i class="fas fa-plus-circle"></i>
                        Saiba mais
                    </a>
                </div>
                `
            }
            content.innerHTML = printaCard // Printa os cards na tela
            
            // Recupera uma lista (ARRAY) do click que irá abrir a modal
            let modalLinkIndex = document.querySelectorAll('.modal-link-index')
            
            // Adiciona um EventListener para cada elemento da array modalLinkIndex
            for (let index = 0; index < modalLinkIndex.length; index++) {
              modalLinkIndex[index].addEventListener("click", () => {
                printaModal = `
                    <span>${listaCategorias[index]}</span>
                    <span>${listaTipos[index]}</span>
                    <span>${listaTiposMidia[index]}</span>
                    <img class="image" src="${listaImagens[index]}" alt="Produto ${listaTipos[index]}">
                    <p><strong>Categoria:</strong> ${listaCategorias[index]}</p>
                    <p><strong>Mídia:</strong> ${listaTiposMidia[index]}</p>
                    <a class="buy btn btn-outline-secondary" href="${listaLinksCompra[index]}" title="Comprar este produto" target="_blank">Comprar</a>
                `
                    contentModal.innerHTML = printaModal // Printa a modal dinamicamente de acordo com o elemento clicado
              })
            }

            console.log(':: :: :: CERTISIGN - Certificação Digital :: :: ::');
        }) ()
    }

    // Tratamento de erro
    catch (erro) {
        console.error('Ops, parece que temos um erro... ', erro)
    }

}) ()