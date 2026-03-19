const infoText = document.getElementById('info-text');
const stemContainer = document.querySelector('.stem-container');

const contenido = [
    "🌻 El 21 de marzo celebramos el equinoccio de primavera, el momento en que la naturaleza vuelve a la vida.🌻",
    "✨ Regalar flores amarillas es una tradición inspirada en la serie 'Floricienta', representando un sueño de amor puro.",
    "💛 El color amarillo simboliza la luz del sol, la energía positiva y el optimismo por un futuro brillante juntos.💛",
    "🌻 ¿Sabías que el girasol siempre busca la luz? Es un símbolo de lealtad y de mirar siempre el lado positivo.🌻",
    "☀️ Dar flores amarillas este día es un gesto de ternura que dice: 'Quiero que brilles en mi vida siempre'.☀️",
    "💛 No siempre tengo las palabras correctas para decirlo, pero te admiro profundamente. No solo por lo que haces, sino por como lo haces. Por tu forma de avanzar, aun cuándo las cosas no son fáciles. Por tu fuerza silenciosa, tu luz constante, tu manera de ver la vida desde un lugar auténtico. Muchas peronas pasan por el mundo dejandoruido, pero tu dejas huella. Eres inspiración, aunque no lo pretendas. Eres ejemplo, aunque no te des cuenta. Gracias por ser tú, simplemente tú y por enseñarme tanto sin necesidad de decir una sola palabra.💛",
    "🌼 El 21 de marzo también nos recuerda valorar la amistad verdadera, esa que florece en cualquier estación.🌼",
    "🌻 ¿Qué le dice un pétalo a otro? ¡Qué suerte tenerte cerca en este jardín! 💖",
    "✨ ¡Tu jardín está casi listo! Estamos terminando de regar los últimos sueños para ti..."
];

let i = 0;
const tiempoPorFrase = 18000; // 18 segundos por cada una

// Función para añadir el emoji de girasol sobre la barra
function plantarGirasol(porcentaje) {
    const girasol = document.createElement('span');
    girasol.innerText = "🌻";
    girasol.className = "mini-girasol";
    girasol.style.left = porcentaje + "%";
    stemContainer.appendChild(girasol);
}

// 1. Plantar el primer girasol de inmediato (para la frase "¿Sabías que...?")
setTimeout(() => {
    plantarGirasol(2); // Un poco después del inicio
}, 500);

const cambiarTexto = () => {
    if (i < contenido.length) {
        infoText.style.opacity = 0; 
        
        setTimeout(() => {
            infoText.innerText = contenido[i];
            infoText.style.opacity = 1;
            
            // Calculamos el progreso (son 10 pasos en total: el inicial + 9 del array)
            let progresoActual = ((i + 1) / 10) * 100;
            plantarGirasol(progresoActual);
            
            i++;
        }, 800);
    }
};

// Iniciar el ciclo de cambio cada 18 segundos
const intervaloTexto = setInterval(() => {
    if (i < contenido.length) {
        cambiarTexto();
    } else {
        clearInterval(intervaloTexto);
    }
}, tiempoPorFrase);

// Redirigir cuando se completen los 180 segundos
window.onload = function() {
    const tiempoTotal = 180000; // 180 segundos exactos
    
    setTimeout(function() {
        window.location.href = "../florpersonal/flor.html"; 
    }, tiempoTotal + 1000); // Un segundo extra de margen
};
