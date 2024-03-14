function validarForm() {
    let Nome = document.querySelector('.CampoNome');

    if (Nome.value.trim() === "") {
        window.alert('PREENCHA TODOS OS CAMPOS');
        Nome.focus();
        return false; 
    }
    return true; 
}


