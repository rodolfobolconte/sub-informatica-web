$(document).ready(function () {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL);
    });
});

var logar = (formulario) => {

    let login = formulario[0].value;
    let senha = formulario[1].value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://cadastro-ifpb-prod.herokuapp.com/auth/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function (response) {
        if (xhr.readyState == 4 && xhr.status === 200) {
            alert("Login Realizado com Sucesso");
            window.location.assign("tabela.html");
        }
    };

    var data = JSON.stringify({"login": login, "password": senha});
    xhr.send(data);
}

function logar2(objeto) {

    let login = objeto[0].value;
    let senha = objeto[1].value;

    if (login == "ifpb" && senha == "ifpb#123")
        window.location.assign("tabela.html");
    else
        alert("Login ou Senha Incorretos! Tente Novamente.");
};