//  Crear un algoritmo simple 
/*  Crear un script en JS que le solicite al usuario ingresar datos. 
    Luego realizar operaciones con estos datos */

// Crear una calculadora de sueldo bruto a sueldo neto 
console.log("Inicio de programa: Calculadora de Bruto - Neto")

// Pedir al usuario su sueldo bruto como input
sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto: "))

// Calcular sueldo neto
sueldoNeto = sueldoBruto * 0.75

// Output
console.log("Su sueldo Neto es de: " + sueldoNeto + " pesos.")

// Alerts
alert("Su sueldo Neto es de: " + sueldoNeto + " pesos.")
alert("Fin de programa")