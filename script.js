document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video-reiki");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                video.play(); // Reproduz o vídeo ao entrar na seção
            } else {
                video.pause(); // Pausa o vídeo ao sair da seção
                video.currentTime = 0; // Reinicia o vídeo para o início
            }
        });
    }, { threshold: 0.5 }); // O vídeo será considerado visível se 50% dele estiver na viewport

    observer.observe(video);
});

//script do feedback

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nomeFeedback").value;
    const mensagem = document.getElementById("mensagemFeedback").value;
    const feedbackContainer = document.getElementById("listaFeedbacks");

    const novoFeedback = document.createElement("div");
    novoFeedback.classList.add("card", "mb-3");
    novoFeedback.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${nome}</h5>
            <p class="card-text">${mensagem}</p>
        </div>
    `;

    feedbackContainer.prepend(novoFeedback);

    document.getElementById("feedbackForm").reset();
});

//configurando o email para mobile e navegador

function abrirEmail() {
    const assunto = encodeURIComponent("Quero participar como reikiano");
    const corpo = encodeURIComponent("Olá! Gostaria de saber como posso participar como terapeuta.");
    const email = "fraternoreiki@gmail.com";

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // Mobile: Abre o app de e-mail
        window.location.href = `mailto:${email}?subject=${assunto}&body=${corpo}`;
    } else {
        // Desktop: Abre o Gmail no navegador
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${assunto}&body=${corpo}`;
        window.open(gmailUrl, '_blank');
    }
}