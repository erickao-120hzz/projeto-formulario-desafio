document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // impede o envio

    const inputs = document.querySelectorAll('#form input');
    let formValido = true;

    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;

        if (input.value.trim() === '') {
            input.classList.add('error');
            errorMessage.innerText = 'Campo obrigatório';
            errorMessage.style.display = 'block';
            formValido = false;
        } else {
            input.classList.remove('error');
            errorMessage.innerText = '';
            errorMessage.style.display = 'none';
        }
    });

    if (formValido) {
        alert('Formulário enviado com sucesso!');
        // Aqui podemos usar form.submit() se quiser continuar o envio
    }
});
