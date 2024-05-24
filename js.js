document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
    } else {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar código para realmente enviar os dados do formulário.
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
