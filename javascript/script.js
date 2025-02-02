const respuestas = (r1, r2, r3, r4);
function calculo() {
  if (respuestas.sort().includes()) {
    res;
  }
}

document
  .getElementById("orientacionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const respuesta1 = document.querySelector(
      'input[name="pregunta1"]:checked'
    );
    const respuesta2 = document.querySelector(
      'input[name="pregunta2"]:checked'
    );
    const respuesta3 = document.querySelector(
      'input[name="pregunta3"]:checked'
    );
    const respuesta4 = document.querySelector('input[name="pregunta4"]').value;

    let resultado = "";

    if (respuesta1 && respuesta2) {
      const esAtraidoMismoSexo = respuesta1.value === "sí";
      const esAtraidoSexoOpuesto = respuesta2.value === "sí";

      if (esAtraidoMismoSexo && !esAtraidoSexoOpuesto) {
        resultado = "Podrías identificarte como homosexual.";
      } else if (esAtraidoSexoOpuesto && !esAtraidoMismoSexo) {
        resultado = "Podrías identificarte como heterosexual.";
      } else if (esAtraidoMismoSexo && esAtraidoSexoOpuesto) {
        resultado = "Podrías identificarte como bisexual.";
      } else {
        resultado =
          "La orientación sexual puede ser diversa y no siempre se puede clasificar fácilmente.";
      }
    }

    // Mostrar el resultado
    document.getElementById("resultado").innerText = resultado;
  });
