const radioCpf = document.querySelector('#Radio-Cpf');
const radioRg = document.querySelector('#Radio-Rg');
const inputCep =  document.querySelector('#Campo-Cep');
const inputCpf = document.querySelector('#Campo-Cpf');
const inputRg = document.querySelector('#Campo-Rg');


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

(function(){
  
  inputCep.addEventListener('blur', e=> {
  		const value = inputCep.value.replace(/[^0-9]+/, '');
      const url = `https://viacep.com.br/ws/${value}/json/`;
      
      fetch(url)
      .then( response => response.json())
      .then( json => {
      		
          if( json.logradouro ) {
          	document.querySelector('#Campo-Rua').value = json.logradouro;
            document.querySelector('#Campo-Bairro').value = json.bairro;
            document.querySelector('#Campo-Cidade').value = json.localidade;
          }
      
      });
      
      
  });

	





})();






  
  





