// CÓDIGO PARA MÉTODO POST => ENVIA INFORMAÇÕES DA TELA DO FRONT PARA O BACK-END

let nome = document.querySelector('#nome');
let job = document.querySelector('#job');
let form = document.querySelector('#formulario');

console.log(nome, job, form);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let dados = {
        name: nome.value,
        job: job.value
    };

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(dados)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            // console.log(response);
            console.log('Cadastro efetuado com sucesso');
        });

    console.log(dados)
});



// CÓDIGO PARA MÉTODO GET => SOLICITA INFORMAÇÕES DO BACK END E EXIBE NA TELA DO FRONT

let btn = document.querySelector('#load');
let lista = document.querySelector('#list');

btn.addEventListener('click', function () {
    fetch('https://reqres.in/api/users?page=2')
        .then(function (response) {
            // console.log(response);
            return response.json()
        })
        .then(function (response) {
            response.data.forEach(function (user) {
                // console.log(user);
                let item = document.createElement('li');
                item.classList.add('list-group-item');

                item.innerHTML = '<img src="'+user.avatar+'"/> <span>'+user.first_name+'</span>';

                list.appendChild(item);
            })
        })
});