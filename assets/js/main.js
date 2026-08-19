document.addEventListener("DOMContentLoaded", () => {
    const cabecalho = document.querySelector("#header");
    const menuNavegacao = document.querySelector("#menu");
    const botaoMenu = document.querySelector("#btn-menu");
    const linksNavegacao = document.querySelectorAll("#menu a");
    const botaoTopo = document.querySelector(".btn-topo");

    const fecharMenu = () => {
        if (!menuNavegacao || !botaoMenu) return;

        menuNavegacao.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");

        const icone = botaoMenu.querySelector("i");
        if (icone) {
            icone.classList.remove("bi-x-lg");
            icone.classList.add("bi-list");
        }
    };

    const alternarMenu = (event) => {
        event.stopPropagation();
        if (!menuNavegacao || !botaoMenu) return;

        const aberto = !menuNavegacao.classList.contains("aberto");
        menuNavegacao.classList.toggle("aberto", aberto);
        botaoMenu.setAttribute("aria-expanded", String(aberto));
        botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");

        const icone = botaoMenu.querySelector("i");
        if (icone) {
            icone.classList.toggle("bi-list", !aberto);
            icone.classList.toggle("bi-x-lg", aberto);
        }
    };

    if (botaoMenu && menuNavegacao) {
        botaoMenu.addEventListener("click", alternarMenu);

        linksNavegacao.forEach((link) => {
            link.addEventListener("click", () => {
                fecharMenu();
            });
        });

        document.addEventListener("click", (event) => {
            if (
                menuNavegacao.classList.contains("aberto") &&
                !menuNavegacao.contains(event.target) &&
                !botaoMenu.contains(event.target)
            ) {
                fecharMenu();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") fecharMenu();
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 900) fecharMenu();
        });
    }

    const atualizarScroll = () => {
        if (cabecalho) {
            cabecalho.classList.toggle("scrolled", window.scrollY > 50);
        }
        if (botaoTopo) {
            botaoTopo.classList.toggle("visivel", window.scrollY > 400);
        }
    };

    window.addEventListener("scroll", atualizarScroll, { passive: true });
    atualizarScroll();

    if (botaoTopo) {
        botaoTopo.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const secoes = document.querySelectorAll("section[id]");

    const atualizarSecaoAtiva = () => {
        let secaoAtual = "";

        secoes.forEach((secao) => {
            if (window.scrollY >= secao.offsetTop - 120) {
                secaoAtual = secao.id;
            }
        });

        linksNavegacao.forEach((link) => {
            const ativo = link.getAttribute("href") === `#${secaoAtual}`;
            link.classList.toggle("ativo", ativo);
        });
    };

    window.addEventListener("scroll", atualizarSecaoAtiva, { passive: true });
    atualizarSecaoAtiva();
});
