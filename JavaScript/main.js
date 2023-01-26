const edad = parseInt(prompt("ingrese su edad"));
const esMayorA18 = edad >= 18;
const peso = prompt("ingrese su peso");
const esMayorA58Kg = peso >= 58;
if (esMayorA18) {
  alert("usted tiene puede donar sangre");
  const nombreYapellido = prompt("ingrese su nombre completo");
  const documento = parseInt(prompt("ingrese su documento"));

  alert(" su nombre es:" + nombre + " su documento es:" + documento);
} else {
  alert("usted no tiene acceso");
}

const TipoDeSangre = prompt("ingrese su tipo de sangre");
const Factor = prompt("ingrese factro (+ o -)");
