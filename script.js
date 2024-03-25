const radioCpf = document.querySelector('#Radio-Cpf');
const radioRg = document.querySelector('#Radio-Rg');
const inputCep =  document.querySelector('#Campo-Cep');
const inputCpf = document.querySelector('#Campo-Cpf');
const inputRg = document.querySelector('#Campo-Rg');
const inputTelefone = document.querySelector('#CampoTelefone');
let inputEmail = document.querySelector('#CampoEmail');

function validarRG () {
    if (inputRg.value.length <= 10) {
        window.alert('RG TEM LIMITE DE 9 CARACTERES');
        return false;
    } else
    return true;
};
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

function validarTelefone () {
    if(inputTelefone.value.length <= 12) {
        window.alert('TELEFONE INCORRETO LIMITE DE CARACTERES');
        return false;
    } else {
        return true;
    }
}
 document.querySelector('.button').addEventListener('click',  function() {
    validarTelefone();
 });


function validarEmail (inputEmail) {
    if (inputEmail.indexOf(".") === -1) {
        window.alert('Email incorreto. O email deve conter "."');
        return false;
    } 
    if (inputEmail.includes(" ")) {
        window.alert('O Email não pode contém espaços em branco');
        return false;
    }
    return true;
}
document.querySelector('.button').addEventListener('click', function() {
    let inputEmail = document.querySelector('#CampoEmail').value;
    validarEmail(inputEmail);
});
$ (function()
{
    $('#cpf').blur(function()
    {
     let cpf = $('#cpf').val().replace(/[^0-9]/g, '').toString();

      if( cpf.length == 11 )
        {
      var v = [];

            v[0] = 1 * cpf[0] + 2 * cpf[1] + 3 * cpf[2];
            v[0] += 4 * cpf[3] + 5 * cpf[4] + 6 * cpf[5];
            v[0] += 7 * cpf[6] + 8 * cpf[7] + 9 * cpf[8];
            v[0] = v[0] % 11;    
            v[0] = v[0] % 10;

            v[1] = 1 * cpf[1] + 2 * cpf[2] + 3 * cpf[3];
            v[1] += 4 * cpf[4] + 5 * cpf[5] + 6 * cpf[6];
            v[1] += 7 * cpf[7] + 8 * cpf[8] + 9 * v[0];
            v[1] = v[1] % 11;
            v[1] = v[1] % 10;

        if ( (v[0] != cpf[9]) || (v[1] != cpf[10]) ) {
             alert('CPF INVALIDO' + cpf);

                $('#cpf').val('');
                $('cpf').focus();
          }
         }
         else
        {
        alert('cpf false' + cpf);

            $('#cpf').val('');
            $('#cpf').focus();
        }
    });
});
document.querySelector('.button').addEventListener('clik', function(){
});
