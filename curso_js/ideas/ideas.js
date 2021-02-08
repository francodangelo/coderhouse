//  Crear un algoritmo simple 
/*  Crear un script en JS que le solicite al usuario ingresar datos. 
    Luego realizar operaciones con estos datos */

// Crear una calculadora de sueldo bruto a sueldo neto 
// siguiendo esta pagina: https://www.toptrabajos.com/blog/ar/calcular-sueldo-neto-argentina/
/*
console.log("Inicio de programa: Calculadora de Bruto - Neto")

// Define function
function brutoNeto(sueldoBruto) {
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
sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto: "))
porcentajeSindical = parseFloat(prompt("Porcentaje de Cuota Sindical (si aplica): ") / 100)

// Output
console.log("Su sueldo Neto es de: " + sueldoNeto + " pesos.")

// Alerts
alert("Su sueldo Neto es de: " + sueldoNeto + " pesos.")
alert("Fin de programa")

// Definición de la función
function sumaYMuestra(primerNumero, segundoNumero) { 
    var resultado = primerNumero + segundoNumero
    alert("El resultado es " + resultado)
  }
  
  // Declaración de las variables
  var numero1 = 3;
  var numero2 = 5;
  
  // Llamada a la función
  sumaYMuestra(numero1, numero2)

*/

// // Get element by ID
// var submit = document.getElementById("submit")

// submit.onclick = function() {
//     var sueldoBruto = document.querySelector("sueldoBruto").value //document.getElementById("sueldoBruto").value
    
//     document.getElementById("outputSN").innerText = sueldoBruto
// }
  

// Array.from(document.querySelectorAll("#sueldoForm input")).reduce((acc, input) => ({ ...acc, [input.id]: [input.value]}), {})

const   wrapper = document.querySelector('wrap-contact100'),
        form    = wrapper.querySelectorAll('contact100-form'),
        submitInput  = form[0].querySelector('input[type="submit"]');
        // submit = document.getElementById("submitInput")

function    getDataForm(e){
    // Prevent Default Behaviour of the Submit
    e.preventDefault();

    var formData = new FormData(form[0]);

    alert( formData.get('sueldoBruto'));
}

document.addEventListener('DOMContentLoaded', function(){ 
            
    submit.addEventListener('click', getDataForm, false);

}, false);