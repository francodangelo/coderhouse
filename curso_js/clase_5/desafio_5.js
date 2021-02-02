//  Crear un algoritmo con objetos 
/*  Crear un script en JS que le solicite al usuario ingresar datos. 
    Luego realizar operaciones con estos datos */

// Crear una calculadora de sueldo bruto a sueldo neto 
// siguiendo esta pagina: https://www.toptrabajos.com/blog/ar/calcular-sueldo-neto-argentina/

// Define function
function brutoNeto(sueldoBruto, porcentajeSindical) {
    obraSocial = sueldoBruto * 0.03 
    descINSSJP = sueldoBruto * 0.03 
    jubilacion = sueldoBruto * 0.11
    cuotaSindical = sueldoBruto * porcentajeSindical

    // Calculate sueldo neto
    if (cuotaSindical > 0) {
        sueldoNeto = sueldoBruto - cuotaSindical - obraSocial - descINSSJP - jubilacion
    } else {
        sueldoNeto = sueldoBruto - obraSocial - descINSSJP - jubilacion
    }

    // Output
    return sueldoNeto
}

// Define object
function Persona(bruto, sindical, neto) {
    this.bruto = bruto
    this.sindical = sindical
    this.neto = neto
}

console.log("Inicio de programa: Calculadora de Bruto - Neto")

// Ask user for inputs
let bruto = parseInt(prompt("Ingrese su sueldo bruto: "))
let sindical = parseFloat(prompt("Porcentaje de Cuota Sindical (si aplica): ") / 100)
let neto = brutoNeto(bruto, sindical)

let persona1 = new Persona(bruto, sindical, neto)

// Output
console.log("Su sueldo Neto es de: " + persona1.neto + " pesos.")
console.log("Bruto = " + persona1.bruto + ", Cuota Sindical = " + persona1.sindical + " & Neto = " + persona1.neto) // check

// Alerts
alert("Su sueldo Neto es de: " + persona1.neto + " pesos.")
alert("Fin de programa")