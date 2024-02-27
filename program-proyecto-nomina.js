const readlineSync = require('readline-sync');
const cantidadDeEmpleados = +readlineSync.question(`Ingrese la cantidad de empleados: `);

let TotalNominaIncluidoItems = 0;
let productoDeMayoresDimensiones = 0;
let promedioDelCostoDeProductosEnElFleteIncluidoImpuestos = 0;
let costoDeImpuestosPorElFlete = 0;

let proctoMayorDimension = 0;

for (let i = 0; i < cantidadDeEmpleados; i++) {
    salario = +readlineSync.question(`Ingrese el salario del empleado ${i+1} `);
    while (salario <= 0 || isNaN(salario)) {
            console.error(`para el salario usted debe escribir un valor numérico mayor a 0`);
            salario = +readlineSync.question(`Ingrese el salario del empleado ${i+1} `);            
    }
    console.log(`El salario del empleado ${i+1} = ${salario}`);
    TotalNominaIncluidoItems = TotalNominaIncluidoItems + salario;
    console.dir(`**** Total nómina hasta el momento es: ${TotalNominaIncluidoItems}`);
}

console.log(`1* El costo total de la nomina incluyendo todos los items: ${TotalNominaIncluidoItems}`);
