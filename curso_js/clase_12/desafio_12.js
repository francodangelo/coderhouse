//  Crear un algoritmo con objetos 
/*  Crear un script en JS que le solicite al usuario ingresar datos. 
    Luego realizar operaciones con estos datos */

// Crear una calculadora de sueldo bruto a sueldo neto 
// siguiendo esta pagina: https://www.toptrabajos.com/blog/ar/calcular-sueldo-neto-argentina/

// Definicion funcion de bruto a neto
function brutoNeto(sueldoBruto) {
    obraSocial = sueldoBruto * 0.03 
    descINSSJP = sueldoBruto * 0.03 
    jubilacion = sueldoBruto * 0.11

    // Calculate sueldo neto
    sueldoNeto = sueldoBruto - obraSocial - descINSSJP - jubilacion

    // Output
    return sueldoNeto
}

// Definicion Objeto Persona
function Persona(bruto, neto) {
    this.bruto = bruto
    this.neto = neto
}

// Main Function
function main() {
    // Get user inputs
    var bruto = $( "#input_bruto" ).val()
    var neto = brutoNeto(bruto)
    var newPersona = new Persona(bruto, neto)

    $( "#output_neto" ).text( neto )
}

// Bring button to life
// $( "#btn" ).click( function () { main() })
document.getElementById("btn").addEventListener("click", main);
// Trigger function using enter 
$( document ).keypress(function(event)
{
    if(event.which == 13) {
        main()
    }
})
// Set button for reset
$( document ).ready( function() {
    $( "button" ).click( function() {
        location.reload( true )
    })
})