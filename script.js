const inputRg = document.querySelector('.Campo-Rg');
const inputCpf = document.querySelector('.CampoCpf');
const radioCpf = document.querySelector('.Radio-Cpf')
const radioRg = document.querySelector('.Radio-Rg')

function validarForm () {
    
    if(inputCpf.value.length >= 12) {
        window.alert('CPF TEM LIMITE DE 11 CARACTERES');
        return false;
    } else {
       return true;
    }  
}
function validarRG () {

    if (inputRg.value.length >= 10) {
        window.alert('RG TEM LIMITE DE 9 CARACTERES');
        return false;
    } else
    return validarForm();
}

 document.querySelector('.button').addEventListener('click', function() {
     validarRG();
});

document.getElementById('radio').forEach(function(radio) {
    
})



