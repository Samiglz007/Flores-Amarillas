// ==========================================
// 1. LISTA DE USUARIOS AUTORIZADOS
// ==========================================
const usuariosAutorizados = {
    "Fati": "Adivinala",
    "Alondra": "La misma de ayer",
    "Esther": "Vivan los tacos",
    "Daphne": "Deja te veo sonreir y te la doy",
    "Yess": "No la tengo",
    "Yussel": "Ni lo sueñes",
    "Rosy": "El perro se la comió",
    "Gaby": "Está en la pared",
    "Fatima": "Trae botana primero",
    "Martha": "Dime un chiste",
    "Marlen": "Sigue buscando",
    "Susy": "Cuál contraseña",
    "Dianita": "Ya te la dije",
    "Sandy": "Cuál clave",
    "Yuli": "En letra cursiva",
    "Mayita":"Si me mandas un audio cantando te la paso"
};

// SELECCIÓN DE ELEMENTOS
const loginForm = document.getElementById('loginForm');
const modal = document.getElementById('errorModal');
const forgotLink = document.getElementById('forgotLink');
const closeBtn = document.getElementById('closeBtn');

// FUNCIÓN PARA MOSTRAR LA FLOR ROTA (Error)
function mostrarErrorFlor() {
    if (modal) {
        modal.style.display = "flex";
    }
}

// VALIDAR LOGIN
if (loginForm) {
    loginForm.onsubmit = function(e) {
        e.preventDefault();
        
        const u = document.getElementById('userInput').value.trim();
        const p = document.getElementById('passInput').value.trim();

        const usuarioValido = Object.keys(usuariosAutorizados).find(
            key => key.toLowerCase() === u.toLowerCase()
        );

        if (usuarioValido && usuariosAutorizados[usuarioValido] === p) {
            
            localStorage.setItem("usuarioLogueado", usuarioValido); 

            // --- NUEVA LÓGICA DE AUDIO ---
            // Buscamos el audio en el index.html
            const musica = document.getElementById('musica-fondo');
            if (musica) {
                musica.play().catch(err => console.log("Audio bloqueado:", err));
            }

            localStorage.setItem("musicaEstado", "play");
            localStorage.setItem("musicaTiempo", "0");
            
            // Damos un pequeño margen de 300ms para que el audio arranque antes de cambiar de página
            setTimeout(() => {
                window.location.href = "esperar/espera.html";
            }, 300);

        } else {
            mostrarErrorFlor();
        }
    };
}

// RESTO DEL CÓDIGO (Olvidar accesos y Cerrar Error)
if (forgotLink) {
    forgotLink.onclick = function(e) {
        e.preventDefault();
        mostrarErrorFlor();
    };
}

if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };
}
