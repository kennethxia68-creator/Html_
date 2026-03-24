// 8. Conversor de Unidades
let celsius = parseFloat(prompt("Ingrese la temperatura en Celsius:"))
let opcion = prompt("¿Convertir a Fahrenheit o Kelvin? (F/K)")

if (opcion === "F" || opcion === "f") {
    let fahrenheit = (celsius * 9/5) + 32
    alert("Temperatura en Fahrenheit: " + fahrenheit)
} else if (opcion === "K" || opcion === "k") {
    let kelvin = celsius + 273.15
    alert("Temperatura en Kelvin: " + kelvin)
} else {
    alert("Opción no válida")
}