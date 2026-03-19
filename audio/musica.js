// musica.js
const audio = new Audio('../audio/musica.mp3'); // Ajusta la ruta a tu mp3
audio.loop = true;

function sincronizarMusica() {
    const estado = localStorage.getItem("musicaEstado");
    const tiempoGuardado = localStorage.getItem("musicaTiempo");

    if (estado === "play") {
        if (tiempoGuardado) {
            audio.currentTime = parseFloat(tiempoGuardado);
        }
        audio.play().catch(e => console.log("Esperando interacción..."));
    }

    // Guardar el tiempo actual cada segundo para la siguiente página
    setInterval(() => {
        if (!audio.paused) {
            localStorage.setItem("musicaTiempo", audio.currentTime);
        }
    }, 1000);
}

// Iniciar al cargar la página
window.addEventListener('load', sincronizarMusica);

// Por si el navegador bloquea el auto-play, activar al primer clic
window.addEventListener('click', () => {
    if (localStorage.getItem("musicaEstado") === "play" && audio.paused) {
        audio.play();
    }
}, { once: true });
