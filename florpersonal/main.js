const garden = document.getElementById('flower-garden');
const audio = document.getElementById('musica-fondo');
const textoContainer = document.getElementById('contenedor-texto');
const totalFlowers = 21;

// ==========================================
// 1. SINCRONIZACIÓN DE MÚSICA (NUEVO)
// ==========================================
// Recuperar el tiempo guardado en localStorage
const tiempoGuardado = localStorage.getItem("musicaTiempo");
if (tiempoGuardado) {
    audio.currentTime = parseFloat(tiempoGuardado);
}

// Intentar reproducir automáticamente (algunos navegadores requieren clic)
audio.play().catch(() => {
    console.log("El navegador bloqueó el audio. Esperando clic del usuario.");
});

// Guardar el progreso de la música cada segundo
setInterval(() => {
    if (!audio.paused) {
        localStorage.setItem("musicaTiempo", audio.currentTime);
    }
}, 1000);

// ==========================================
// 2. DICCIONARIO DE FRASES PERSONALIZADAS
// ==========================================
const frasesPersonalizadas = {
    "Fati": "Dicen que las flores amarillas son para quienes traen luz a la vida de los demás, y tú has sido ese brillo constante en la mía. Gracias por estar conmigo en las buenas, las malas y las peores; sé que sin importar lo que pase, siempre contaré contigo. Estaré toda mi vida agradecido con la vida por haberte conocido y te prometo que, a pesar de cualquier problema, algún día seré yo quien te cuide con la misma entrega con la que tú me cuidaste a mí.",
    "Alondra": "Te regalo estas flores porque el amarillo simboliza la alegría, y eso es exactamente lo que tú nos das cada día.",
    "Esther": "Que estas flores amarillas te recuerden lo mucho que te aprecio y lo valiosa que es tu amistad.",
    "Daphne": "Para mí, el amarillo es sinónimo de la energía y felicidad que me regala tu sonrisa; queria que estas flores fueran la excusa ideal para seguir iluminando mis días con ellas. Sé perfectamente el corazón y el esfuerzo que le estás poniendo a tu examén. Me inspira verte tan enfocada, y aunque ahora los libros te roban todo el tiempo, espero que este detalle sea ese rayito de luz que te dé fuerzas extra para el último estirón. Se que te irá increíble por que eres brillante. Me encantaria tener la oportunidad de conocerte más allá de los estudios, en un momento donde la única tarea sea disfrutar, Por eso, ¿me darías el gusto de invitarte a salir para celebrar tu éxito cuando termines el examén? Me haría muy feliz compartir un momento especial contigo.",
    "Yess": "En un mundo lleno de flores, tú siempre serás mi favorita porque no solo brillas, sino que me sostienes. Gracias por ser mi refugio cuando necesito desahogarme, por el abrazo que me salva y por ese regaño necesario que me ayuda a crecer. Te entrego estas flores amarillas como símbolo de lo mucho que valoro contar contigo y como mi promesa de que, a pesar de las situaciones, voy a mejorar y dar lo mejor de mí en esto que apenas comienzo. Cada vez que los veo juntos (tu y julio), siento esa calidez y esa seguridad tan especial, como si estuviera bajo el cuidado de mi mamá y su pareja de mi mamá; esa es la paz que me transmiten. Hoy tú me ayudas a florecer, pero te aseguro que algún día seré yo quien te cuide y te devuelva toda esa luz con la misma entrega con la que tú lo haces conmigo.",
    "Yussel": "Que el brillo de estas flores combine con la energía tan bonita que siempre transmites.",
    "Rosy": "Dicen que las flores amarillas atraen la suerte, pero yo ya tuve toda la suerte del mundo al conocerte.",
    "Gaby": "Por más primaveras compartiendo risas y momentos inolvidables. ¡Te quiero amiga!",
    "Fatima": "Te envío estas flores amarillas como un pequeño gesto de gratitud por haber sido la primera persona que confió en mí desde mi primer día como residente. Aunque hoy ya no estemos en el mismo lugar, tu apoyo fue la luz que necesitaba para empezar; hoy sigo dando lo mejor de mí, llevando conmigo todo lo que aprendí a tu lado.",
    "Martha": "Que la energía de estas flores te recuerde lo especial que eres y la luz que transmites a los que te rodeamos.",
    "Marlen": "Te envío estas flores porque combinan perfectamente con tu vibra y con la alegría que siempre contagias.",
    "Susana": "Ya llegó la primavera y no queria que te quedaras sin tus flores.",
    "Dianita": "Gracias por ser el rayo de sol que ilumina la oficina; que estas flores amarillas te devuelvan un poco de la alegría que nos das cada día.",
    "Sandy": "El amarillo es el color de la lealtad, y no hay nadie en quien confíe más que en ti. Gracias por ser mi apoyo siempre.",
    "Yuli": "Te mando estas flores virtuales porque, aunque el tiempo pase, tu disposición para ayudarme nunca cambia. Eres oro puro.",
    "Mayita":"Nuestra amistad floreció entre retos y aprendizajes del sistema dual, y hoy te envió estas flores amarillas por que, aunque no nos veamos, se que siempre estás a un mensaje de distancia cuándo te necesito."
};

// ==========================================
// 3. LÓGICA DE PERSONALIZACIÓN
// ==========================================
const nombreUsuario = localStorage.getItem("usuarioLogueado") || "Persona Especial";
const fraseParaMostrar = frasesPersonalizadas[nombreUsuario] || frasesPersonalizadas["Default"];

textoContainer.innerHTML = `
    <h1 id="nombre-dinamico">Para: ${nombreUsuario}</h1>
    <p class="Título">${fraseParaMostrar}</p>
    <p class="Título sub">Gracias por iluminar mis días con tu presencia.</p>
`;

// ==========================================
// 4. GENERACIÓN DE LAS 21 FLORES
// ==========================================
for (let i = 0; i < totalFlowers; i++) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    
    const angle = (i - 10) * 4.5; 
    const randomHeight = 180 + Math.floor(Math.random() * 120);
    const randomDelay = (Math.random() * 3).toFixed(2);

    flower.style.transform = `rotate(${angle}deg)`;
    flower.style.height = `${randomHeight}px`;
    flower.style.animationDelay = `-${randomDelay}s`;
    flower.style.zIndex = 400 - randomHeight;

    flower.innerHTML = `
        <div class="flower__leafs">
            <div class="flower__leaf"></div><div class="flower__leaf"></div>
            <div class="flower__leaf"></div><div class="flower__leaf"></div>
            <div class="flower__white-circle"></div>
        </div>
        <div class="flower__line"></div>
    `;
    garden.appendChild(flower);
}

// 5. ACTIVAR MÚSICA POR CLIC (Respaldo por bloqueo del navegador)
window.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().catch(error => console.log("Error al reproducir audio"));
    }
}, { once: true });
