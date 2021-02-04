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

let sueldoMinimo = 10000

if (brutoNeto(bruto, sindical) > sueldoMinimo) {
    alert("Ud. puede realizar la compra");
    console.log("Ud. puede realizar la compra")
   

    let baseDatos = [
        {id : 1,
        nombre : "arroz", 
        precio: 50,
        cantidad:1},   
        {id: 2,
        nombre: "fideos",
        precio:70,
        cantidad:1},
        {id: 3,
        nombre: "harina",
        precio: 40,
        cantidad:1}
    ]    
    function AddCarrito(productoNuevo){    
        if (verificarCarrito(productoNuevo)){
            let carritoViejo = JSON.parse(localStorage.getItem("carrito"))
            let longitud = JSON.parse(localStorage.getItem("carrito")).length        
            for(let i=0;i<longitud;i++){
                if(carritoViejo[i].id == productoNuevo.id){
                    carritoViejo[i].cantidad = carritoViejo[i].cantidad +productoNuevo.cantidad 
                    localStorage.setItem("carrito",JSON.stringify(carritoViejo))
                }
            }   
        } else
        {
    // Array donde voy ubicar los productos
        let carrito = [];
    
    // Variable para guardar la ubicación
        let getStorage = localStorage.getItem("carrito")
    
    // consulta si la clave "carrito" del local storage esta vacía
        if(getStorage !== null){
            carrito = JSON.parse(localStorage.getItem("carrito"))
        }
    // agrego un elemento al array de productos, agrego el nuevo producto
        carrito.push(productoNuevo)
        localStorage.setItem("carrito",JSON.stringify(carrito))}
    }
    console.log(baseDatos)
    let compra = parseInt(prompt("Elija qué desea comprar: 1-arroz, 2-fideos, 3-harina"))
    let prod 
    switch (compra){
            case 1:
                prod = baseDatos[0]
            break;
            case 2:
                prod = baseDatos[1]
            break;
            case 3:
                prod = baseDatos[2]
            break}
            
    let agregar = prompt("Desea agregarlo al carrito? S/N")
    if(agregar.toLowerCase().trim() == "s"){
        AddCarrito(prod)
       
    }
    function verificarCarrito(nuevoProd) {
        console.log(nuevoProd)
        let existeAnterior = false;
        if(localStorage.getItem("carrito") !== null){        
            let cantidad = JSON.parse(localStorage.getItem("carrito")).length
            console.log(cantidad)
            for(let i=0; i < cantidad; i++){
                if (JSON.parse(localStorage.getItem("carrito"))[i].id == nuevoProd.id){
                    existeAnterior= true
                }
            }
        }
        return existeAnterior
    }



    } 
    else {
    alert("Para para poder comprar debe superar el sueldo mínimo de: " + sueldoMinimo)
    console.log("Para para poder comprar debe superar el sueldo mínimo de: " + sueldoMinimo)
    
    }


   console.log("Fin de programa")



