$(document).ready(function () {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL);
    });
});

var logar = (formulario) => {

    let login = formulario[0].value;
    let senha = formulario[1].value;

    axios.post('https://cadastro-ifpb-prod.herokuapp.com/auth/login', {"login": login, "password": senha})
        .then(function(response) {
            console.log(response);
            alert("Login Realizado com Sucesso.");
            window.location.assign("tabela.html");
        })
        .catch(function(response) {
            alert("Login e/ou Senha Inválido(s).");
        })
}

function logar2(objeto) {

    let login = objeto[0].value;
    let senha = objeto[1].value;

    if (login == "ifpb" && senha == "ifpb#123")
        window.location.assign("tabela.html");
    else
        alert("Login ou Senha Incorretos! Tente Novamente.");
};