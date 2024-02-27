const readlineSync = require('readline-sync');

let cantidadEmpleados = 0;
let costoTotalDeLaNominaMasItemns = 0;

cantidadEmpleados = +readlineSync.question('Ingrese la cantidad de empleados ');
if(isNaN(cantidadEmpleados)){
    console.error(`La cantidad de empleados debe ser un valor numerico`);
}
else {

    if(cantidadEmpleados <= 0){
        console.error(`La cantidad de empleados debe ser mayor a cero`);
    }
    else{
        let estrato = +readlineSync.question('Indique el estrato del empleado: ');
        while (estrato != 1 && estrato != 2 && estrato != 3) {
            console.error(`Para el estrato usted debe digitar 1, 2 ó 3`);
            estrato = +readlineSync.question('Indique el estrato del empleado: ');   
        }
        console.log(`Estrato = ${estrato}`);

        if (estrato === 1) {
            
        } else {
            
        }
    }
}

console.log(`El costo total de la nomina incluyendo todos los items es: ${costoTotalDeLaNominaMasItemns}`);
