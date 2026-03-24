// 4. Examen Aprobado
let nota1 = parseFloat(prompt("Ingrese la primera nota:"))
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"))
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"))

let promedio = (nota1 + nota2 + nota3) / 3

if (promedio >= 6) {
    alert("Promedio: " + promedio + " - Aprobado")
} else {
    alert("Promedio: " + promedio + " - Reprobado")
}

