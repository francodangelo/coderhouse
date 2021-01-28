//  Crear un algoritmo con funciones 
/*  Crear un script en JS que le solicite al usuario ingresar datos. 
    Luego realizar operaciones con estos datos */

// Crear una calculadora de sueldo bruto a sueldo neto 
// siguiendo esta pagina: https://www.toptrabajos.com/blog/ar/calcular-sueldo-neto-argentina/

console.log("Inicio de programa: Calculadora de Bruto - Neto")

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


// Ask user for inputs
bruto = parseInt(prompt("Ingrese su sueldo bruto: "))
sindical = parseFloat(prompt("Porcentaje de Cuota Sindical (si aplica): ") / 100)

// Output
console.log("Su sueldo Neto es de: " + brutoNeto(bruto, sindical) + " pesos.")

// Alerts
alert("Su sueldo Neto es de: " + brutoNeto(bruto, sindical) + " pesos.")
alert("Fin de programa")