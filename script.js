function validarForm () {
    let inputCpf = document.querySelector('.CampoCpf2');
    
    if(inputCpf.value.length >= 12) {
        window.alert('CPF TEM LIMITE DE 11 CARACTERES');
        return false;
    } else {
       return true;
    }  
}
function validarRG () {
    let inputRg = document.querySelector('.Campo-Rg2');

    if (inputRg.value.length >= 10) {
        window.alert('RG TEM LIMITE DE 9 CARACTERES');
        return false;
    } else
    return validarForm();
}

 document.querySelector('.button').addEventListener('click', function() {
     validarRG();
});
