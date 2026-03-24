// 6. Clasificador de Edades
let edad = parseInt(prompt("Ingrese su edad:"))

if (edad >= 0 && edad <= 2) {
    alert("Bebé")
} else if (edad <= 12) {
    alert("Niño")
} else if (edad <= 17) {
    alert("Adolescente")
} else if (edad <= 64) {
    alert("Adulto")
} else {
    alert("Adulto Mayor")
}