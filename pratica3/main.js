$(document).ready(function () {

    let alunos = [{nome:"Nome Pessoa 1", matricula:20181111111, email:"emailpessoa1@gmail.com", telefone:"(83) 91111-1111"},
                    {nome:"Nome Pessoa 2", matricula:20282222222, email:"emailpessoa2@gmail.com", telefone:"(83) 92222-2222"},
                    {nome:"Nome Pessoa 3", matricula:20383333333, email:"emailpessoa3@gmail.com", telefone:"(83) 93333-3333"},
                    {nome:"Nome Pessoa 4", matricula:20484444444, email:"emailpessoa4@gmail.com", telefone:"(83) 94444-4444"},
                    {nome:"Nome Pessoa 5", matricula:20585555555, email:"emailpessoa5@gmail.com", telefone:"(83) 95555-5555"}];

    

    $("#adicionar-todos-alunos").click(function () {
        if (confirm('Esta ação colocará 5 novos dados de alunos\nna tabela "Alunos Registrados", você confirma esta ação?')) {
            let tabela = $(".tabela-alunos-corpo");

            for (let aluno in alunos) {

                let linha = "<tr id='linha" + aluno + "'>";

                aluno = alunos[aluno];

                linha += "<td><input type='checkbox' class='checkbox-tabela-alunos'></td>";
                linha += "<td>" + aluno.nome + "</td>";
                linha += "<td>" + aluno.matricula + "</td>";
                linha += "<td>" + aluno.email + "</td>";
                linha += "<td>" + aluno.telefone + "</td>";
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
        $(".checkbox-tabela-alunos").each(function () {
            if ($(this).prop("checked")) {
                let pai = $(this).parent().parent();
                pai.remove();
            }
        })
    });
});

