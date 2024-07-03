const radioCpf = document.querySelector('#Radio-Cpf');
const radioRg = document.querySelector('#Radio-Rg');
let inputCep = document.querySelector('#Campo-Cep').value;
let inputCpf = document.querySelector('#Campo-Cpf');
let inputRg = document.querySelector('#Campo-Rg');
let inputTelefone = document.querySelector('#CampoTelefone');
const radios = document.getElementsByName('Documento');
let inputEmail = document.querySelector('#CampoEmail');
let CampoRua =  document.querySelector('#Campo-Rua')
let CampoBairro = document.querySelector('#Campo-Bairro')
let CampoNumero =  document.querySelector('#Campo-Numero')
let CampoEstados = document.querySelector('#uf') 
let CampoCidade =  document.querySelector('#Campo-Cidade')
let CampoComplemento = document.querySelector('#Campo-Complemento')
const CamposEndereco = document.getElementsByClassName('formulario__campos__endereco')

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

function alterarDisableRadios() {
    if (radios[0].checked) {
        inputCpf.disabled = false;
        inputRg.disabled = true;
    } else if (radios[1].checked) {
        inputRg.disabled = false;
        inputCpf.disabled = true;
    }
}
function CepHabilitaCampos () {
    console.log('tESTNANDO')
    if (inputCep.value == '') {
        CampoRua.hidden = false;
    }
}







