// 1. Calculadora de Descuento
let precio = parseFloat(prompt("Ingrese el precio del producto:"))

if (precio > 100) {
    let descuento = precio * 0.15
    let total = precio - descuento
    alert("Se aplicó descuento. Precio final: Q" + total)
} else {
    alert("No aplica descuento. Precio final: Q" + precio)
}