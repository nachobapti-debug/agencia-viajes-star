const formularioVuelos = document.getElementById("form-vuelos");
const fechaViaje = document.getElementById("fecha-viaje");
const resultadoVuelos = document.getElementById("resultado-vuelos");

const fechaActual = new Date().toISOString().split("T")[0];
fechaViaje.min = fechaActual;

formularioVuelos.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const fecha = fechaViaje.value;

    if (origen === destino) {
        resultadoVuelos.textContent =
            "La ciudad de origen y destino deben ser diferentes.";
        return;
    }

    resultadoVuelos.textContent =
        "Búsqueda realizada desde " + origen +
        " hacia " + destino +
        " para el día " + fecha + ".";
});
 
