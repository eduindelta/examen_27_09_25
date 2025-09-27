let nota_input = prompt("Introduce tu nota (del 0 al 10):");
let nota = parseFloat(nota_input);

if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Error: La entrada no es válida. Debes introducir un número entre 0 y 10.");
} else if (nota < 5) {
    alert("Calificación: Suspenso");
} else if (nota >= 5 && nota < 7) {
    alert("Calificación: Aprobado");
} else if (nota >= 7 && nota < 9) {
    alert("Calificación: Notable");
} else {
    alert("Calificación: Sobresaliente");
}