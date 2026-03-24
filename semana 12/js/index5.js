// 5. Año Bisiesto
let año = parseInt(prompt("Ingrese un año:"))

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
    alert("El año " + año + " es bisiesto")
} else {
    alert("El año " + año + " no es bisiesto")
}
