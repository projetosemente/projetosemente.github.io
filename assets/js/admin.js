document.addEventListener("DOMContentLoaded", () => {

    /*
     * ==========================================================
     * PROTEÇÃO DO PAINEL
     * ==========================================================
     */

    const logado =
        sessionStorage.getItem(
            "projetoSementeLogado"
        );

    if (logado !== "true") {

        window.location.href = "login.html";

        return;
    }


    /*
     * ==========================================================
     * CARREGAR USUÁRIO
     * ==========================================================
     */

    const usuarioSalvo =
        sessionStorage.getItem(
            "projetoSementeUsuario"
        );

    if (usuarioSalvo) {

        try {

            const usuario =
                JSON.parse(usuarioSalvo);

            const nome =
                document.getElementById("nomeUsuario");

            if (nome && usuario.nome) {
                nome.textContent = usuario.nome;
            }

        } catch (erro) {

            console.warn(
                "Não foi possível carregar os dados do usuário."
            );

        }

    }


    /*
     * ==========================================================
     * LOGOUT
     * ==========================================================
     */

    const btnSair =
        document.getElementById("btnSair");

    if (btnSair) {

        btnSair.addEventListener("click", () => {

            sessionStorage.removeItem(
                "projetoSementeLogado"
            );

            sessionStorage.removeItem(
                "projetoSementeUsuario"
            );

            window.location.href = "login.html";

        });

    }


    /*
     * ==========================================================
     * MENU MOBILE
     * ==========================================================
     */

    const btnSidebar =
        document.getElementById("btnSidebar");

    const sidebar =
        document.getElementById("sidebar");

    if (btnSidebar && sidebar) {

        btnSidebar.addEventListener("click", () => {

            sidebar.classList.toggle("open");

        });

    }

});
