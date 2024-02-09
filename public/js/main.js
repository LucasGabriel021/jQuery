// let frase = jQuery(".frase"); => ALternativa ao dolar, o seletor.
let tempoInicial = parseInt($("#tempoDigitacao").text());
let campo = $("#campoDigitacao");

// $(document).ready(function() {
//     atualizaFrase();
//     inicializarContadores();
//     inicializarCronometro();
//     $("#btnReiniciar").click(reiniciaJogo);
// });

$(function() {
    atualizaFrase();
    inicializarContadores();
    inicializarCronometro();
    $("#btnReiniciar").click(reiniciaJogo);
    $("#btnReiniciar").attr("disabled", true);
});

function atualizaFrase() {
    let frase = $(".frase").text(); // método text pega apenas o texto.
    let qtdPalavras = frase.split(" ").length; // método split transforma um texto em array onde aceita no parâmetro um separador
    let tamanhoFrase = $("#tamanhoFrase");
    tamanhoFrase.text(qtdPalavras); // o método text permite atribuir também o valor se or passado sem seu parâmetro
}

function inicializarContadores() {
    campo.on("input", function() { // Evento on refere-se a quando o elemento for selecionado e adiciona outros eventos ao elemento. O evento input é disparado quando um elemento do campo é alterado
        // console.log(campo.val());
        let conteudo = campo.val();
        let qtdPalavrasCampo = conteudo.split(/\S+/).length - 1;
        // console.log(qtdPalavrasCampo);
        let qtdCaracteres = conteudo.length;
    
        $("#contadorPalavras").text(qtdPalavrasCampo);
        $("#contadorCaracteres").text(qtdCaracteres);
    });
}

function inicializarCronometro() {
    let tempoRestante = $("#tempoDigitacao").text();
    campo.one("focus", function() { // O evento one executa a função apenas UMA vez
    tempoDigitacao
    // console.log(parseInt(tempoRestante));
    let cronometroId = setInterval(function(){
        tempoRestante--;
        // console.log(tempoRestante);
        $("#tempoDigitacao").text(tempoRestante);
        if(tempoRestante < 1) {
            campo.attr("disabled", true); // O booleando atribui se for true e se for false ele reteira
            clearInterval(cronometroId); // Este método cancela um ação repetitiva pelosetInterval();
            $("#btnReiniciar").attr("disabled", false);
        }
    }, 1000);
});
}

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contadorPalavras").text("0");
    $("#contadorCaracteres").text("0");
    $("#tempoDigitacao").text(tempoInicial);  
    inicializarCronometro(); 
    $("#btnReiniciar").attr("disabled", true);
}
