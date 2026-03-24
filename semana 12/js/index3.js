// 3. Calculadora de IMC
let peso = parseFloat(prompt("Ingrese su peso en kg:"))
let altura = parseFloat(prompt("Ingrese su altura en metros:"))

let imc = peso / (altura * altura)

if (imc > 25) {
    alert("Su IMC es: " + imc + " (Sobrepeso)")
} else {
    alert("Su IMC es: " + imc + " (Normal)")
}
