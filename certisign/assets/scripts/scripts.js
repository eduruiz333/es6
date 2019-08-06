let listImage = [];
let listMediaType = [];
let listExpiration = [];
let listType = [];
let listBuy = [];
let listCategory = [];
let putInfosModal = '';

const api_certisign = {
    print:() => {
        const API = 'https://gip.certisign.com.br/gip/rest/vitrine/validades/site/entrevista-candidato';
        const content = document.querySelector('#certisign-content');
        let putInfos = '';
        let cardId = 0;
        // API request
        fetch(API)
        // Promisses
            .then(res => res.json())
            .then((json) => {

                // JSON data - iterations
                for (const data of json) {
                    let image = data.imagem;
                    let mediaType = data.midia;
                    let expiration = data.validade;
                    let type = data.tipo;
                    let buy = data.linkGar;
                    let category = data.categoria;

                    // Feed array for modal
                    listImage.push(image);
                    listMediaType.push(mediaType);
                    listExpiration.push(expiration);
                    listType.push(type);
                    listBuy.push(buy);
                    listCategory.push(category);

                    // Writing HTML cards...
                    putInfos += `
                    <div class="card-content mb-3">
                        <img class="image" src="${image}" alt="Produto ${type}">
                        <p class="media-type">${mediaType}</p>
                        <p class="expiration">Validade ${expiration} meses</p>
                        <p class="type">Tipo ${type}</p>
                        <a class="buy btn btn-outline-secondary" href="${buy}" title="Comprar este produto" target="_blank">Comprar</a>
                        <a class="card-id" href="#" id="${cardId}" data-toggle="modal" data-target="#productModal" onClick="getId(this.id)">
                            <i class="fas fa-plus-circle"></i>
                            Saiba mais
                        </a>
                    </div>
                `;
                    cardId = cardId+1;
                }
                content.innerHTML = putInfos;

            })
    }
};
api_certisign.print();

// Modal feeder
const contentModal = document.querySelector('.modal-itens');
let getId = function reply_click(clicked_id) {
    let index = clicked_id;

    putInfosModal = `
    <span>${listCategory[index]}</span>
    <span>${listType[index]}</span>
    <span>${listMediaType[index]}</span>
    <img class="image" src="${listImage[index]}" alt="Produto ${listType[index]}">
    <p><strong>Categoria:</strong> ${listCategory[index]}</p>
    <p><strong>Mídia:</strong> ${listMediaType[index]}</p>
    <a class="buy btn btn-outline-secondary" href="${listBuy[1]}" title="Comprar este produto" target="_blank">Comprar</a>
`;
    contentModal.innerHTML = putInfosModal;
}