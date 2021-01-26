/*  Crear un algoritmo que dado una lista de dias, recorra la lista e indique los numeros que
    son pares. En caso de que el dia sea el numero 7, imprimir un alert con un mensaje
    personalizado */

console.log("Inicio de programa: Recorrido Dias")

// Define list of days 
var days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

// Go over the list of days
for (day in days) { // i=0; i<7; i++
    if (day == 6) {
        alert("Cristiano usa la 7.")
        console.log(days[day] + " es impar.")
    }
    else if (day % 2 == 0) {
        console.log(days[day] + " es impar.")
    }
    else {
        console.log(days[day] + " es par.")
    }
}

// Alerts
alert("Fin de programa")