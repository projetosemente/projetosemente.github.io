document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const mensagem = document.getElementById("loginMensagem");
    const mostrarSenha = document.getElementById("mostrarSenha");

    /*
     * ==========================================================
     * CREDENCIAIS DA DEMONSTRAÇÃO
     * ==========================================================
     *
     * IMPORTANTE:
     * Isto NÃO é autenticação real.
     *
     * Serve apenas para apresentação do projeto estático.
     */

    const DEMO_EMAIL = "admin@projetosemente.com";
    const DEMO_SENHA = "123456";

    /*
     * Mostrar / ocultar senha
     */

    mostrarSenha.addEventListener("click", () => {

        const tipo =
            senha.getAttribute("type") === "password"
                ? "text"
                : "password";

        senha.setAttribute("type", tipo);

        mostrarSenha.innerHTML =
            tipo === "text"
                ? '<i class="bi bi-eye-slash"></i>'
                : '<i class="bi bi-eye"></i>';

    });

    /*
     * Login
     */

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        mensagem.textContent = "";

        const emailDigitado =
            email.value.trim().toLowerCase();

        const senhaDigitada =
            senha.value;

        if (
            emailDigitado === DEMO_EMAIL &&
            senhaDigitada === DEMO_SENHA
        ) {

            /*
             * Criamos uma sessão somente para a demonstração.
             */

            sessionStorage.setItem(
                "projetoSementeLogado",
                "true"
            );

            sessionStorage.setItem(
                "projetoSementeUsuario",
                JSON.stringify({
                    nome: "Administrador",
                    email: DEMO_EMAIL,
                    tipo: "Administrador"
                })
            );

            /*
             * Encaminha para o painel.
             */

            window.location.href = "admin.html";

        } else {

            mensagem.textContent =
                "E-mail ou senha incorretos.";

            senha.value = "";
            senha.focus();
        }

    });

});
