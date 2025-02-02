document.addEventListener("DOMContentLoaded", function () {
  function obtenerResultado(elementId) {
    const elemento = document.getElementById(elementId);
    return elemento.value;
  }

  function manejarEnvioFormulario(event) {
    event.preventDefault();

    const razon = obtenerResultado("reason");
    const atraccion = obtenerResultado("attraction");
    const beso = obtenerResultado("kiss");
    const coqueteo = obtenerResultado("flirt");

    const respuestas = {
      razon,
      atraccion,
      beso,
      coqueteo,
    };

    const orientacion = determinarOrientacion(respuestas);
    mostrarResultado(orientacion);
  }

  function determinarOrientacion(respuestas) {
    let puntaje = 0;

    if (respuestas.razon === "dudas") puntaje += 1;
    if (respuestas.razon === "atraccion") puntaje += 3;
    if (respuestas.atraccion === "si") puntaje += 3;
    if (respuestas.atraccion === "a veces") puntaje += 2;
    if (respuestas.atraccion === "no") puntaje += 1;
    if (respuestas.beso === "si") puntaje += 3;
    if (respuestas.beso === "pocas veces") puntaje += 2;
    if (respuestas.beso === "no") puntaje += 1;
    if (respuestas.coqueteo === "interesado") puntaje += 3;
    if (respuestas.coqueteo === "incomodo") puntaje += 1;
    if (respuestas.coqueteo === "me daria igual") puntaje += 2;
    if (respuestas.coqueteo === "me haria cuestionar") puntaje += 2;

    if (puntaje >= 10) {
      return "Posiblemente homosexual";
    } else if (puntaje >= 6) {
      return "Posiblemente bisexual";
    } else {
      return "Posiblemente heterosexual";
    }
  }

  function mostrarResultado(orientacion) {
    const resultadoElement = document.getElementById("result");
    resultadoElement.innerText = `Tu orientación sexual es: ${orientacion}`;
  }

  const formulario = document.getElementById("orientationForm");
  formulario.addEventListener("submit", manejarEnvioFormulario);

  const steps = document.querySelectorAll(".form-step");
  let currentStep = 0;

  function showStep(step) {
    steps.forEach((stepElement, index) => {
      stepElement.classList.toggle("active", index === step);
    });
  }

  document.querySelectorAll(".next-step").forEach((button) => {
    button.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  showStep(currentStep);
});
