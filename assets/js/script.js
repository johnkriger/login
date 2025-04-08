document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();

    let email = document.querySelector('#cli-email').value;
    let password = document.querySelector('#cli-senha').value   ;

    console.log(email, password);


    //criando um json
    let json = {

        'email': email,
        'senha': password

    };

    console.log(json);

    //convertendo um json em string
    let stringJson = JSON.stringify(json);

    console.log(stringJson);

    //convertendo uma string para json
    let jsonParse = JSON.parse(stringJson);

    console.log(jsonParse);
        
});