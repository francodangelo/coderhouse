/*
var edadCliente
var edadCliente2
var nombreCliente
var apellidoCliente
*/
/*
//Var numerica -int, float- (sin comillas)
edadCliente = 30    //El "=" es para asignar valores a una variable

//Var texto -string- (con comillas simples o dobles)
nombreCliente = "Franco"
apellidoCliente = 'Dangelo'

//Operaciones (+ , -, / , *)
edadCliente = 30 + 5
edadCliente = edadCliente + 1   //36

edadCliente2 = "30"

//La suma de strigs (textos) se denomina concatenacion
edadCliente2 = "30" + "5"   //"305"
edadCliente2 = edadCliente2 + "5"   //"3055"
edadCliente3 = edadCliente3 + 1;    //error

*/

//Funcion prompt que retorna un string SIEMPRE
console.log("Inicio de programa")


nombre = prompt("Ingrese su nombre")

//Parsearlo (convertirlo) a int (numero entero)
edad = parseInt(prompt("Ingrese su edad", "SOLO NUMEROS"))
//edad = parseInt(edad)
edad = edad + 10

//Console
console.log("Su edad es de: " + edad + " años")

//Alert
alert("Su edad es de: " + edad + " años")
alert("Fin de programa")

//Combinar comillas
alert("Su nombre es '" + nombre + "'")
alert('Su nombre es "' + nombre + '"')