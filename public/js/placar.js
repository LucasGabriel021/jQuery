function inserirPlacar() {
    let corpoTabela = $(".placar").find("tbody"); // Método find vasculha a árvore de nós do elemento em busca de um elemento filho especificado.
    // console.log(corpoTabela);
    let usuario = "Lucas";
    let numPalavras = $("#contadorPalavras").text();

    let novaLinha = criarNovaLinha(usuario, numPalavras);
    novaLinha.find(".btn-remover").click(removeLinha);

    corpoTabela.append(novaLinha);
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

    console.log(linha);

    return linha;
}

function removeLinha() {
    // console.log("Botão funcionando!");
    event.preventDefault();
    $(this).parent().parent().remove();
}