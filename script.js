const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario !== "admin") {
        mensagem.textContent = "Usuário não encontrado!";
        mensagem.style.color = "red";
        return;
    }

    if (senha !== "1234") {
        mensagem.textContent = "Senha incorreta!";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = "Login bem-sucedido!";
    mensagem.style.color = "white";
});