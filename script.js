var conteudoCpf =  document.querySelector('radioCpf-conteudo');
var conteudoRg = document.querySelector('radioRg-conteudo');

function Cadastrar() {
    var conteudoCpf =  document.querySelector('radioCpf-conteudo');
    var conteudoRg = document.querySelector('radioRg-conteudo');
    const opcaoCpf =  document.querySelector('Campo-Cpf');
    const opcaopRg = document.querySelector('Campo-Rg');

    if(opcaoCpf.checked) {
        conteudoCpf.style.display = "block";
        conteudoRg.style.display = "none";
    } else if(opcaopRg.checked) {
        conteudoRg.style.display = "none";
        conteudoCpf.style.display = "block";
    } else {
        window.alert('selecione apenas um');
    }
 }



