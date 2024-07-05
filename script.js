document.querySelector('#Campo-Cep').addEventListener('input', function () {
    const cep = this.value
    const mensagemError = document.querySelector('#Campo-MensagemErro-Cep');

    if (cep.length === 8 ) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    mensagemError.style.display = 'block';
                    resetFields();
                } else {
                    mensagemError.style.display = 'none'
                    document.getElementById('Campo-Bairro').value = data.bairro;
                    document.getElementById('Campo-Cidade').value = data.localidade;
                    document.getElementById('uf').value = data.uf;
                    document.getElementById('Campo-Rua').value = data.logradouro;
                }
            })
            .catch(error => {
                console.error('Erro no Cep', error);
                mensagemError.style.display = 'block'
                resetFields();
            });
    }
})

document.querySelector('.button').addEventListener('click', function () {
    let inputEmail = document.querySelector('#CampoEmail').value;
    const MensagemErrorEmail =  document.querySelector('#CampoEmail-MensagemError')

    if (inputEmail.indexOf(".") == -1) {
        MensagemErrorEmail.style.display = 'block';
        return false; 
    };
    if (inputEmail.includes(" ")) {
       MensagemErrorEmail.style.display = 'block';
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


 function validarForm() {
    console.log('testando direcinamento')
    
 }





