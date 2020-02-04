
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
            console.log(response);
            console.log('Cadastro efetuado com sucesso');
        });

    console.log(dados)
});