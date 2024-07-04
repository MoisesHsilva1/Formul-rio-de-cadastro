function ValidarCep () {
    console.log('testando ')
}

document.querySelector('.button').addEventListener('click', function () {
    let inputEmail = document.querySelector('#CampoEmail').value;

      if (inputEmail.indexOf(".") == -1) {
        window.alert('Email incorreto. O email deve conter "."');
        return false;
    };
    if (inputEmail.includes(" ")) {
        window.alert('O Email não pode contém espaços em branco');
        return false;
    };

});

function alterarDisableRadios() {
    const radioCpf = document.querySelector('#Radio-Cpf');
    const radioRg = document.querySelector('#Radio-Rg');
    let inputCpf = document.querySelector('#Campo-Cpf');
    let inputRg = document.querySelector('#Campo-Rg');
    const radios = document.getElementsByName('Documento');

    if (radios[0].checked) {
        inputCpf.disabled = false;
        inputCpf.required = true;
        inputRg.disabled = true;
    } else if (radios[1].checked) {
        inputRg.disabled = false;
        inputRg.required = true;
        inputCpf.disabled = true;
    }
}







