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
        
        // .trim() elimina espacios en blanco al inicio o final que se van por error
        const u = document.getElementById('userInput').value.trim();
        const p = document.getElementById('passInput').value.trim();

        // Buscamos si el nombre existe sin importar mayúsculas/minúsculas
        const usuarioValido = Object.keys(usuariosAutorizados).find(
            key => key.toLowerCase() === u.toLowerCase()
        );

        // Verificamos si encontramos al usuario y si su contraseña coincide EXACTAMENTE
        if (usuarioValido && usuariosAutorizados[usuarioValido] === p) {
            
            // Guardamos el nombre original (con la primera mayúscula) para el ramo
            localStorage.setItem("usuarioLogueado", usuarioValido); 

            // CONFIGURACIÓN DE MÚSICA PARA QUE NO SE CORTE
            localStorage.setItem("musicaEstado", "play");
            localStorage.setItem("musicaTiempo", "0");
            
            // Redirigir a la página de espera
            window.location.href = "../esperar/espera.html";
        } else {
            // SI LOS DATOS SON INCORRECTOS O NO EXISTEN
            mostrarErrorFlor();
        }
    };
}

// MOSTRAR ERROR AL OLVIDAR ACCESOS
if (forgotLink) {
    forgotLink.onclick = function(e) {
        e.preventDefault();
        mostrarErrorFlor();
    };
}

// CERRAR EL ERROR
if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };
}
