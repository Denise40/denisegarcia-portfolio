// MENU MOBILE
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// FORMULÁRIO
function enviarFormulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // Verificando campos vazios
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return false;
    }

    // Verificando formato do e-mail
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Digite um e-mail válido!");
        return false;
    }

    // Sucesso
    alert("Mensagem enviada com sucesso!");

    document.getElementById("formContato").reset();
    return false;
}