const radioCpf = document.querySelector('.Radio-Cpf');
const radioRg = document.querySelector('.Radio-Rg');
const inputCep =  document.querySelector('.Campo-Cep');

function validarCpf () {
    if(inputCpf.value.length >= 12) {
        window.alert('CPF TEM LIMITE DE 11 CARACTERES');
        return false;
    } else {
       return true;
    }      
}
document.querySelector('.button').addEventListener('click', function() {
    validarCpf();
});

function validarRG () {
    if (inputRg.value.length >= 10) {
        window.alert('RG TEM LIMITE DE 9 CARACTERES');
        return false;
    } else
    return true;
}
    document.querySelector('.button').addEventListener('click', function() {
     validarRG();
});

function validarCep () {
    if( inputCep.value.length >= 10) {
        window.alert('CEP TEM LIMITE DE 9 CARACTERESS');
        return false;
    } else {
        return true;
    }
}
    document.querySelector('.button').addEventListener('click', function() {
    validarCep();
});

  document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === "cpf") {
              document.querySelector('.Campo-Cpf').classList.remove('hidden');
              document.querySelector('.Campo-Cpf').setAttribute('required', true);
              document.querySelector('.Campo-Rg').classList.add('hidden');
              document.querySelector('.Campo-Rg').removeAttribute('required');
            } else if (this.value === "rg") {
             document.querySelector('.Campo-Cpf').classList.add('hidden')
             document.querySelector('.CampoCpf').removeAttribute('required');
             document.querySelector('.Campo-Rg').classList.remove('hidden');
             document.querySelector('.Campo-Rg').setAttribute('required', true);
            } 
        });
 });

  





