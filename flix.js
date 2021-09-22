function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
       listarFilmesNaTela(filmeFavorito)
    }else {
        alert('Endereço de filme inválido');
    }
    document.getElementById("filme").value ="";
}

function listarFilmesNaTela(filmeFavorito) {
    console.log(filmeFavorito)
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = 
        elementoListaFilmes.innerHTML + elementoFilmeFavorito;   
}