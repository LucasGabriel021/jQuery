$("#btnPlacar").click(mostraPlacar);
$("#btnSync").click(sincronizaPlacar);

function inserirPlacar() {
    let corpoTabela = $(".placar").find("tbody"); // Método find vasculha a árvore de nós do elemento em busca de um elemento filho especificado.
    // console.log(corpoTabela);
    let usuario = "Lucas";
    let numPalavras = $("#contadorPalavras").text();

    let novaLinha = criarNovaLinha(usuario, numPalavras);
    novaLinha.find(".btn-remover").click(removeLinha);

    corpoTabela.append(novaLinha);
    $(".placar").slideDown(500);
    scrollPlacar();
}

function scrollPlacar() {
    let posicaoPlacar = $(".placar").offset().top;
    $("body").animate({
        scrollTop: posicaoPlacar+"px"
    }, 1000);
}

function criarNovaLinha(usuario, numPalavras) {
    let linha = $("<tr>"); // Criando um elemento
    let colunaUsuario = $("<td>").text(usuario).addClass("center");
    let colunaNumPalavras = $("<td>").text(numPalavras).addClass("center");
    let colunaRemover = $("<td>").addClass("center");
    let tagA = $("<a>").addClass("btn-remover").attr("href", "#");
    let tagI = $("<i>").addClass("small").addClass("material-icons").text("delete");

    tagA.append(tagI); // Em formato de cascata, moldamos o elemento.
    colunaRemover.append(tagA);
    linha.append(colunaUsuario);
    linha.append(colunaNumPalavras);
    linha.append(colunaRemover);

    // console.log(linha);

    return linha;
}

function removeLinha() {
    // console.log("Botão funcionando!");
    event.preventDefault();
    let linhaRemovida = $(this).parent().parent();
    linhaRemovida.fadeOut(600);
    setTimeout(function() {
        linhaRemovida.remove();
    }, 1000);
}

function mostraPlacar() {
    $(".placar").stop().slideToggle(500);
}

function sincronizaPlacar() {
    let placar = [];
    let linhas = $("tbody tr");

    linhas.each(function(index, value) {
        let usuario = $(this).find("td:nth-child(1)").text();
        let palavras = $(this).find("td:nth-child(2)").text();

        console.log(usuario);
        console.log(palavras);

        let score = {
            userId: 1,
            id: palavras,
            title: usuario,
            body: $(".frase").text()
        }
    
        placar.push(score);
    });
    console.log(placar);

    let dados = {
        dados: placar
    }

    $.post("https://jsonplaceholder.typicode.com/posts", dados, function() {
        console.log("Sincronizado!");
    });
}

function atualizaPlacar() {
    $.get("https://jsonplaceholder.typicode.com/posts", function(data) {
        // console.log(data);

        $(data).each(function() {
            let linha = criarNovaLinha(this.body, this.id);
            console.log(linha);
            linha.find(".btn-remover").click(removeLinha);
            $("tbody").append(linha);
        })
    });
}