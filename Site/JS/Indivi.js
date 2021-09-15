const titulo = document.getElementById('titulo');
const fotos = document.querySelectorAll('img');
const fotoGrande = fotos[5];
const descricao = document.getElementById('texto');
const nome = document.getElementById('nome');

function setPersonagem(personagemNome) {
    titulo.innerText = info[personagemNome].Nome;

    for(var i = 1; i < fotos.length; i++) {
        fotos[i].src = info[personagemNome].fotos[i - 1];
    }

    fotoGrande.src = info[personagemNome].fotos[0];

    nome.innerText = info[personagemNome].Nome;
    descricao.innerHTML = info[personagemNome].Descrição;
}