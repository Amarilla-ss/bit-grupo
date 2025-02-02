function obtenerResultado(elementId) {
  const elemento = document.getElementById(elementId);
  return elemento.value;
}

function EnvioFormulario(event) {
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
  if (respuestas.atraccion === "si") puntaje += 2;
  if (respuestas.beso === "si") puntaje += 2;
  if (respuestas.coqueteo === "interesado") puntaje += 1;

  if (puntaje >= 5) {
    return "Posiblemente homosexual";
  } else if (puntaje >= 3) {
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
formulario.addEventListener("submit", EnvioFormulario);
