/*estaVivo = true

//Operadores logicos   (==, <, <=, >, >=)
/*
    ==   -> pregunta por valor
    ===  -> pregunta por valor y tipo

//  == true    -> es lo mismo que no colocarlo
if (estaVivo) {   //if ( estaVivo == true  ) {
    alert("El cliente esta vivo")
} else {
    alert("El cliente no esta vivo")
}

console.log("Continua programa")
*/
/*
nombre = prompt("Ingrese su nombre");

if (nombre == "") {
    alert("No ingreso su nombre");
} else {
    alert("Su nombre es: " + nombre)
}
*/

/*
edad = prompt("Ingrese su edad")

if (edad <= 15) {
    alert("Es demasiado menor")
} else if (edad < 18)  {    //16 y 17
    alert("Es menor de edad")
} else if (edad >= 90) {   //90, 91, etc
    alert("Jubilacion")
} else {
    alert("Es mayor de edad")
}
*/

/*
saldoCuenta = 3000

retirarDinero = parseInt(prompt("Ingrese cuanto quiere retirar"))

if (retirarDinero <= saldoCuenta) {
    alert("Retiró " + retirarDinero)
    saldoCuenta = saldoCuenta - retirarDinero

    retirarDinero = parseInt(prompt("Dispone de otro retiro:"))

    if (retirarDinero <= saldoCuenta) {
        alert("Volvio a retirar " + retirarDinero)
        saldoCuenta = saldoCuenta - retirarDinero
    }

} else {
    alert("No tiene fondos suficientes")
}

alert("Saldo restante " + saldoCuenta);
console.log("Saldo restante " + saldoCuenta);
*/
/*
nombre = prompt("Ingrese su nombre");

if (nombre != "" && nombre != null && nombre != " ") {    
    alert("Su nombre es: " + nombre)
}
*/

/*
    &&   -> se tienen que cumplir TODAS las condiciones
    ||   -> se tiene que cumplir AL MENOS una condicion
    !    -> no se cumple todo lo que esta en la condicion
*/


/*
    1) Ingreso tarjeta
    2) Retiro sea menor o igual al saldo
    3) Que no supere el limite permitido.
       Pero si es cliente exclusivo, permitir exceder el limite
*/

saldoCuenta = 3000
limitePermitido = 1000
clienteExclusivo = true

codigoTarjeta = prompt("Ingrese codigo de tarjeta")
retirarDinero = parseInt(prompt("Ingrese cuanto quiere retirar"))

//condiciones anidadas
if ( (codigoTarjeta != "" && retirarDinero <= saldoCuenta) && (retirarDinero <= limitePermitido || clienteExclusivo) ) {
    alert("Retiró " + retirarDinero)
    saldoCuenta = saldoCuenta - retirarDinero
} else {
    alert("ERROR")
    /*if (codigoTarjeta == "") {
        alert("No ingreso tarjeta")
    }
    if (retirarDinero > saldoCuenta) {
        alert("No tiene fondos suficientes")
    }*/
}

console.log("Saldo: " + saldoCuenta)