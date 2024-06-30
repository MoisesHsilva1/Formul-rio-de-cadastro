const radioCpf = document.querySelector('#Radio-Cpf');
const radioRg = document.querySelector('#Radio-Rg');
const inputCep = document.querySelector('#Campo-Cep');
const inputCpf = document.querySelector('#Campo-Cpf');
const inputRg = document.querySelector('#Campo-Rg');
const inputTelefone = document.querySelector('#CampoTelefone');
let inputEmail = document.querySelector('#CampoEmail');

function validarRG() {
    if (inputRg.value.length <= 10) {
        window.alert('RG TEM LIMITE DE 9 CARACTERES');
        return false;
    } else
        return true;
};
document.querySelector('.button').addEventListener('click', function () {
    validarRG();
});

(function () {

    inputCep.addEventListener('blur', e => {
        const value = inputCep.value.replace(/[^0-9]+/, '');
        const url = `https://viacep.com.br/ws/${value}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(json => {

                if (json.logradouro) {
                    document.querySelector('#Campo-Rua').value = json.logradouro;
                    document.querySelector('#Campo-Bairro').value = json.bairro;
                    document.querySelector('#Campo-Cidade').value = json.localidade;
                }
            });
    });

})();

function validarTelefone() {
    if (inputTelefone.value.length <= 12) {
        window.alert('TELEFONE INCORRETO LIMITE DE CARACTERES');
        return false;
    } else {
        return true;
    }
}
document.querySelector('.button').addEventListener('click', function () {
    validarTelefone();
});


function validarEmail(inputEmail) {
    if (inputEmail.indexOf(".") == -1) {
        window.alert('Email incorreto. O email deve conter "."');
        return false;
    }
    if (inputEmail.includes(" ")) {
        window.alert('O Email não pode contém espaços em branco');
        return false;
    }
    return true;
}
document.querySelector('.button').addEventListener('click', function () {
    let inputEmail = document.querySelector('#CampoEmail').value;
    validarEmail(inputEmail);
});

function RadiosDisable () {
    let radios = document.getElementsByName('Documento')
    if (radios[0].checked) {
        document.getElementsByClass('formulario__campos__radios')[1].disabled = true;
        document.getElementsByClass('formulario__campos__radios')[0].disabled =  false;

    } else if (radios[1].checked){
      document.getElementsByClass('formulario__campos__radios')[1].disabled =  true;
      document.getElementsByClass('formulario__campos__radios')[0];disabled = false;
    }
}







