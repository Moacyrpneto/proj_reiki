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