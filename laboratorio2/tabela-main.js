function navegar(idPage) {
    let secoes = document.getElementsByClassName('container-secao');
    for (var i=0; i<secoes.length; i++) {
        if (secoes[i].id == idPage) {
            secoes[i].style.display = 'block';
        } else {
            secoes[i].style.display = 'none';
        }
    }
}

function deslogar() {
    if (confirm("Tem certeza que deseja sair?"))
        window.location.assign("index.html");
}

function adicionar(objeto) {
    alert("Nome do Aluno: " + objeto[0].value + "\nIdade do Aluno: " + objeto[1].value + "\nSérie do Aluno: " + objeto[2].value + "\nMatrícula do Aluno: " + objeto[3].value);
}

$(document).ready(function () {

    let alunos = [{nome:"Nome Pessoa 1", idade: 1, serie: 1, matricula:"20181111111"},
                    {nome:"Nome Pessoa 2", idade: 2, serie: 2, matricula:"20282222222"},
                    {nome:"Nome Pessoa 3", idade: 3, serie: 3, matricula:"20383333333"},
                    {nome:"Nome Pessoa 4", idade: 4, serie: 4, matricula:"20484444444"},
                    {nome:"Nome Pessoa 5", idade: 5, serie: 5, matricula:"20585555555"}];

    $("#atualizar-todos-alunos").click(function () {
        if (confirm('\nEsta ação colocará 5 novos dados de alunos\nna tabela "Alunos Registrados"!\n\nVocê confirma esta ação?')) {
            let tabela = $(".tabela-alunos-corpo");

            for (let aluno in alunos) {

                let linha = "<tr id='linha" + aluno + "'>";

                aluno = alunos[aluno];

                linha += "<td><input type='checkbox' class='checkbox-tabela-alunos'></td>";
                linha += "<td>" + aluno.nome + "</td>";
                linha += "<td>" + aluno.idade + "</td>";
                linha += "<td>" + aluno.serie + "</td>";
                linha += "<td>" + aluno.matricula + "</td>";
                linha += "<td><i class='fas fa-pencil-alt'></i><i class='fas fa-trash'></i></td>"

                tabela.append(linha);
            }
        }
    });

    $("#checkbox-tabela-alunos-todos").click(function () {
        if ($(this).prop("checked")) {
            $(".checkbox-tabela-alunos").each(function () {
                $(this).prop("checked", true);
            });
        }
        else {
            $(".checkbox-tabela-alunos").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    $("#remover-todos-alunos").click(function () {

        let excluir = false;

        $(".checkbox-tabela-alunos").each(function () {
            if ($(this).prop("checked")) excluir = true;
        })

        if (excluir) {
            if (confirm('\nEsta ação excluirá todos os dados de alunos selecionados na checkbox!\n\nVocê confirma esta ação?')) {
                
                $(".checkbox-tabela-alunos").each(function () {
                    if ($(this).prop("checked")) {
                        let pai = $(this).parent().parent();
                        pai.remove();
                    }
                });

                $("#checkbox-tabela-alunos-todos").prop("checked", false);
            }
        }
    });
});

