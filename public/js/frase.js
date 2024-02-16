$("#btnFrase").click(fraseAleatoria);
$("#btnBuscar").click(buscaFrase);

/**
 * Teste com API Fake: https://jsonplaceholder.typicode.com/posts
 */
function fraseAleatoria() {
    $("#spinner").toggle();
    $.get("https://jsonplaceholder.typicode.com/posts", trocaFrase)
    .fail(function() {
        setTimeout(function() {
            $("#erro").toggle();
        }, 1500);
    })
    .always(function() {
        $("#spinner").toggle();
    });
}

function trocaFrase(data) {
    let frase = $(".frase");
    let numAleatorio = Math.floor(Math.random() * data.length); // As funções do objeto Math, permitem realizar algumas operações com números, entre eles temos o floor que arredonda o número para baixo e o random que gera um número aleatório.
    console.log(data[numAleatorio]);
    frase.text(data[numAleatorio].body);
    atualizaFrase();
    atualizaTempoInicial(data[numAleatorio].id);
}

function buscaFrase() {
    $("#spinner").toggle();
    let fraseId = $("#fraseId").val();
    console.log("ID da minha frase:", fraseId);
    let dados = {id: fraseId};
    $.get("https://jsonplaceholder.typicode.com/posts", dados, trocarFrase)
    .fail(function() {
        setTimeout(function() {
            $("#erro").toggle();
        }, 1500);
    })
    .always(function() {
        $("#spinner").toggle();
    });
}

function trocarFrase(data) {
    console.log(data);
    let frase = $(".frase");
    frase.text(data[0].body);
    atualizaFrase();
    atualizaTempoInicial(data[0].id);
}