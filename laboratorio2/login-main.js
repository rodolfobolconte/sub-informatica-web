$(document).ready(function () {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL);
    });
});

var logar = (login, senha) => {
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://cadastro-ifpb-prod.herokuapp.com/" + "auth/", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function (response) {
        if (xhr.responseText && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.login + ", " + json.password);
        }
    };

    var data = JSON.stringify({"login": login, "password": senha});
    xhr.send(data);
}

function logar2(objeto) {

    console.log(objeto[0].value);
    console.log(objeto[1].value);

};