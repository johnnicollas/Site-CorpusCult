document.addEventListener('DOMContentLoaded', () => {

    // 1. MANIPULAÇÃO DE ELEMENTOS (document.querySelector, addEventListener)

    // Elementos do Menu Mobile (Interação 1)
    const menuToggle = document.querySelector('#menu-toggle');
    const mobileMenu = document.querySelector('#mobile-menu');

    // Botão Voltar ao Topo (Interação 2)
    const backToTopButton = document.querySelector('#back-to-top');

    const contactForm = document.querySelector('#contact-form');

    // ABRIR/FECHAR MENU MOBILE (EVENTO CLICK)
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    window.addEventListener('scroll', () => {
        // Mostra o botão após rolar 300px
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('invisible', 'opacity-0');
            backToTopButton.classList.add('visible', 'opacity-100');
        } else {
            backToTopButton.classList.remove('visible', 'opacity-100');
            backToTopButton.classList.add('invisible', 'opacity-0');
        }
    });

    // EVENTO de CLICK para rolar para o topo
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Rola suavemente
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.querySelector('#nome').value.trim();
            const telefone = document.querySelector('#telefone').value.trim();
            const estilo = document.querySelector('#estilo').value;
            const mensagem = document.querySelector('#mensagem').value.trim();
            const resultado = document.querySelector('#form-message');

            let isValid = true;
            let feedback = '';

            if (nome.length < 3) {
                isValid = false;
                feedback += 'Nome deve ter pelo menos 3 caracteres.<br>';
            }

            if (estilo === '') {
                isValid = false;
                feedback += 'Por favor, selecione um estilo de tatuagem.<br>';
            }

            if (mensagem === '') {
                isValid = false;
                feedback += 'Por favor, descreva sua ideia.<br>';
            }

            if (isValid) {
                const numeroWhatsApp = '5583988075802';

                const textoPlano = `Olá, meu nome é ${nome}.\n` +
                    `Telefone: ${telefone}\n` +
                    `Tatuador Preferido: ${estilo}\n` +
                    `Ideia: ${mensagem}`;

                const textoWhatsApp = encodeURIComponent(textoPlano);

                const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`;

                resultado.className = 'mt-4 p-3 bg-green-600 text-white rounded-lg text-center';
                feedback = 'Redirecionando para o WhatsApp...';

                // Redireciona o usuário para o WhatsApp
                window.open(linkWhatsApp, '_blank');

                contactForm.reset();
            } else {
                resultado.className = 'mt-4 p-3 bg-red-600 text-white rounded-lg';
            }

            resultado.innerHTML = feedback;
        });
    }

    // ===================================================
    // REQUISITOS ADICIONAIS DE JS: ARRAYS E OBJETOS
    // ===================================================

    // Array de Objetos para armazenar dados (Obrigatório)
    const artistas = [
        { nome: 'Kaique "The Shadow"', especialidade: 'Blackwork', email: 'kaique@corpustcult.com' },
        { nome: 'Julia "Ink Flow"', especialidade: 'Aquarela', email: 'julia@corpustcult.com' },
        { nome: 'Ramon "Geometric"', especialidade: 'Geométrico', email: 'ramon@corpustcult.com' }
    ];

    // Exemplo de Função com Loop (for, forEach ou map) e Condicional (if)
    function buscarArtistaPorEspecialidade(especialidade) {
        // USO DE LOOP (forEach)
        let encontrados = [];
        artistas.forEach(artista => {
            // USO DE CONDICIONAL (if)
            if (artista.especialidade === especialidade) {
                encontrados.push(artista.nome);
            }
        });

        // Exemplo de log para demonstrar a função
        console.log(`[Corpus Cult] Artistas em ${especialidade}:`, encontrados);
        return encontrados;
    }

    // Exemplo de chamada da função ao carregar a página
    buscarArtistaPorEspecialidade('Blackwork');

    // ----------------------------------------------------------------
    // EXEMPLO DE CRIAR/ALTERAR ELEMENTOS (createElement, appendChild, textContent)
    // ----------------------------------------------------------------
    const footerElement = document.querySelector('footer div.text-center');

    if (footerElement) {
        // Cria um novo elemento (createElement obrigatório)
        const versionP = document.createElement('p');
        versionP.classList.add('text-xs', 'mt-1', 'text-gray-600');

        // Define o conteúdo (textContent obrigatório)
        versionP.textContent = 'Corpus Cult Versão 1.0 (Projeto Base)';

        // Adiciona ao rodapé (appendChild obrigatório)
        footerElement.appendChild(versionP);
    }
});