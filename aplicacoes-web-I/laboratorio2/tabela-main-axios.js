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

function atualizarTodosAlunos (confirma) {

    //Trecho para Atualizar Alunos Localmente na Tabela
    /*let alunos = [{name:"Nome Pessoa 1", idade: 1, serie: 1, matricula:"20181111111"},
                    {name:"Nome Pessoa 2", idade: 2, serie: 2, matricula:"20282222222"},
                    {name:"Nome Pessoa 3", idade: 3, serie: 3, matricula:"20383333333"},
                    {name:"Nome Pessoa 4", idade: 4, serie: 4, matricula:"20484444444"},
                    {name:"Nome Pessoa 5", idade: 5, serie: 5, matricula:"20585555555"}];

    if (confirm('\nEsta ação colocará 5 novos dados de alunos\nna tabela "Alunos Registrados"!\n\nVocê confirma esta ação?'))
        preencherTabela(alunos);*/

    //Trecho para Atualizar Alunos do Servidor na Tabela utilizando AXIOS
    axios.get('https://cadastro-ifpb-prod.herokuapp.com/alunos')
    .then(function(response) {
        console.log(response);
        var alunos = response.data;

        if (confirma) {
            if (confirm('\nEsta ação retornará os dados de alunos cadastrados no Servidor!\n\nVocê confirma esta ação?'))
                preencherTabela(alunos);
        }
        else {
            preencherTabela(alunos);
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}

function inserirNovoAluno(formulario) {

    if (confirm("Tem certeza que deseja inserir os Dados na Tabela?")) {
        //Trecho para Adicionar Aluno Localmente
        /*let aluno = [{name:formulario[0].value, idade:formulario[1].value, serie:formulario[2].value, matricula:formulario[3].value}];
        removerTodosAlunos(true);
        atualizarTodosAlunos(false);
        preencherTabela(aluno);
        formulario[0].value = formulario[1].value = formulario[2].value = formulario[3].value = null;
        navegar("section-home");*/

        //Trecho para Adicionar Aluno no Servidor  utilizando AXIOS
        let name = formulario[0].value;
        let idade = formulario[1].value;
        let serie = formulario[2].value;
        let matricula = formulario[3].value;

        axios.post('https://cadastro-ifpb-prod.herokuapp.com/alunos', {"name": name, "idade": idade, "serie": serie, "matricula": matricula})
            .then(function(response) {
                console.log("Aluno adicionado com Sucesso");
                removerTodosAlunos(true);
                atualizarTodosAlunos(false);
                formulario[0].value = formulario[1].value = formulario[2].value = formulario[3].value = null;
                navegar("section-home");
            })
            .catch(function(response) {
                alert("Erro ao Adicionar Aluno.");
            })
    }
}

function preencherTabela (alunos) {
    let tabela = $(".tabela-alunos-corpo");

    for (let aluno in alunos) {

        let linha = "<tr id='linha" + aluno + "'>";

        aluno = alunos[aluno];

        linha += "<td><input type='checkbox' class='checkbox-tabela-alunos'></td>";
        linha += "<td>" + aluno.name + "</td>";
        linha += "<td>" + aluno.idade + "</td>";
        linha += "<td>" + aluno.serie + "</td>";
        linha += "<td>" + aluno.matricula + "</td>";
        linha += "<td><i class='fas fa-pencil-alt'></i><i class='fas fa-trash'></i></td>"

        tabela.append(linha);
    }
}

function removerTodosAlunos(limparTabela) {

    if (limparTabela) {
        $(".checkbox-tabela-alunos").each(function () {
            let pai = $(this).parent().parent();
            pai.remove();
        });

        return 0;
    }

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
}


$(document).ready(function () {

    $("#atualizar-todos-alunos").click(function () {
        atualizarTodosAlunos(true);
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
        removerTodosAlunos(false);
    });
});