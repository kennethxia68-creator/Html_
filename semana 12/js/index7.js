// 7. División Segura
let dividendo = parseFloat(prompt("Ingrese el dividendo:"))
let divisor = parseFloat(prompt("Ingrese el divisor:"))

if (divisor === 0) {
    alert("Error: No se puede dividir entre cero")
} else {
    let resultado = dividendo / divisor
    alert("Resultado: " + resultado)
}
