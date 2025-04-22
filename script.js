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