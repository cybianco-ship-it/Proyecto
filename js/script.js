document.getElementById("comprobar").addEventListener("click", function () {
    let puntaje = 0;

    let p1 = document.querySelector('input[name="p1"]:checked');
    let p2 = document.querySelector('input[name="p2"]:checked');
    let p3 = document.querySelector('input[name="p3"]:checked');
    let p4 = document.querySelector('input[name="p4"]:checked');
    let p5 = document.querySelector('input[name="p5"]:checked');
    let p6 = document.querySelector('input[name="p6"]:checked');
    let p7 = document.querySelector('input[name="p7"]:checked');
    let p8 = document.querySelector('input[name="p8"]:checked');
    let p9 = document.querySelector('input[name="p9"]:checked');
    let p10 = document.querySelector('input[name="p10"]:checked');

    const contenedorResultado = document.getElementById("resultado");

    if (!p1 || !p2 || !p3 || !p4 || !p5 || !p6 || !p7 || !p8 || !p9 || !p10) {
        contenedorResultado.className = "alerta-error"; 
        contenedorResultado.innerHTML = "<strong>Atención:</strong> Debes responder todas las preguntas antes de comprobar.";
        return;
    }
    if (p1.value === "b") puntaje++; 
    if (p2.value === "a") puntaje++; 
    if (p3.value === "b") puntaje++; 
    if (p4.value === "a") puntaje++; 
    if (p5.value === "b") puntaje++; 
    if (p6.value === "b") puntaje++; 
    if (p7.value === "a") puntaje++; 
    if (p8.value === "b") puntaje++; 
    if (p9.value === "a") puntaje++; 
    if (p10.value === "b") puntaje++; 

    let mensaje = "<h3>Resultado: " + puntaje + " / 10 puntos</h3>";

    if (puntaje === 10) {
        mensaje += "¡Felicitaciones! Demuestras un dominio absoluto de la vida e historia del Beato Pedro Casani.";
        contenedorResultado.className = "alerta-exito";
    } else if (puntaje >= 6) {
        mensaje += "¡Buen trabajo! Tienes una idea clara de su trayectoria, aunque puedes repasar algunos detalles.";
        contenedorResultado.className = "alerta-advertencia";
    } else {
        mensaje += "Te invitamos a leer nuevamente la biografía e intentarlo otra vez.";
        contenedorResultado.className = "alerta-error";
    }

    contenedorResultado.innerHTML = mensaje;
});

document.getElementById("reiniciar").addEventListener("click", function () {
    let opciones = document.querySelectorAll('input[type="radio"]');

    for (let opcion of opciones) {
        opcion.checked = false;
    }

    const contenedorResultado = document.getElementById("resultado");
    contenedorResultado.innerHTML = "";
    contenedorResultado.className = ""; 
});