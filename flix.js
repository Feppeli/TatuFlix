function adicionarFilme() { //Função criada apartir da função pré-criada no HTML
    var filmeFavorito = document.getElementById("filme").value; // retirando o valor do id="filme" no HTML
    if (filmeFavorito.endsWith(".jpg")) { // criando uma ccondicional para só aceitar itens com final em ".jpg"
       listarFilmesNaTela(filmeFavorito)
    }else {
        alert('Endereço de filme inválido');
    }
    document.getElementById("filme").value =""; /* Deixando o valor de filme vazio faráque sempre que 
    acionarmos o botão o input fique em branco */
}

function listarFilmesNaTela(filmeFavorito) { // função criada para mostrar as imagens na tela
    console.log(filmeFavorito)
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">"; // variável lincando a imagem enviada no input
    var elementoListaFilmes = document.getElementById("listaFilmes"); // retirando as informações e linkando a variável
    elementoListaFilmes.innerHTML =  // imprimindo as imagens na tela através do HTML
        elementoListaFilmes.innerHTML + elementoFilmeFavorito;   
}
