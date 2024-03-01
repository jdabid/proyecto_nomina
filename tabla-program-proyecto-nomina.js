//console.table(['carro', 'moto', 'triciclo']);

const readlineSync = require('readline-sync');

const cantidadDeEmpleados = +readlineSync.question(`Ingrese la cantidad de empleados: `);

let TotalNominaIncluidoItems = 0;

for (let i = 0; i < cantidadDeEmpleados; i++) {

    let cantidadPrimaria = 0;
    let cantidadSecundaria = 0;
    let cantidadUniversidad = 0;
    let salarioX = 0;
    let salarioY = 0;
    let salarioZ = 0;

    salario = +readlineSync.question(`Ingrese el salario del empleado${i+1} `);
    while (salario <= 0 || isNaN(salario)) {
            console.error(`para el salario usted debe escribir un valor numérico mayor a 0`);
            salario = +readlineSync.question(`Ingrese el salario del empleado${i+1} `);            
    }
    console.log(`El salario del empleado ${i+1} = ${salario}`);    
    

    estrato = +readlineSync.question(`Indique el estrato del empleado${i+1} `);
    while (estrato <= 0 || estrato > 6 || isNaN(estrato)) {
        console.error(`para indicar el estrato usted debe escribir un valor numérico desde 1 hasta 6`);
        estrato = +readlineSync.question(`Indique el estrato del empleado${i+1} `);        
    }
    
    if (estrato == 1) {
        estrato1 =  salario*0.15;
        console.dir(`empleado${i+1} estrato 1 = ${estrato1}`);
        salario = salario + estrato1;
        }
        else if (estrato == 2) {
            estrato2 = salario*0.10;
            console.dir(`empleado${i+1} estrato 2 = ${estrato2}`);
            salario = salario + estrato2;
            
        } 
        else if (estrato == 3) {
            estrato3 = salario*0.05;
            console.dir(`empleado${i+1} estrato 3 = ${estrato3}`);
            salario = salario + estrato3;            
        }

    const SIesrural = 35000;
    rural = +readlineSync.question(`EL empleado${i+1} vive en zona rural? *** marque 1(SI) - 2(NO) `);
    while (rural <= 0 || rural > 2 || isNaN(rural)) {
        console.error(`Recuerde para indicar la zona del empleado${i+1} *** marque 1(SI) - 2(NO) `);
        rural = +readlineSync.question(`EL empleado${i+1} es rural? *** marque 1(SI) - 2(NO) `);        
    }
        
    if (rural == 1) {
        ruralSI =  salario+SIesrural;
        console.dir(`empleado${i+1} rural SI = ${ruralSI}`);
        salario = salario + SIesrural;
        }
        else {
            console.dir(`empleado${i+1} rural NO = ${rural}`);
        }

    hijos = +readlineSync.question(`EL empleado${i+1} tiene hijos? *** marque 1(SI) - 2(NO) `);
    while (hijos <= 0 || hijos > 2 || isNaN(hijos)) {
        console.error(`Recuerde para indicar si empleado${i+1} tiene hijos *** marque 1(SI) - 2(NO) `);
        hijos = +readlineSync.question(`EL empleado${i+1} tiene hijos? *** marque 1(SI) - 2(NO) `);        
    }

    if (hijos == 2) {
        console.dir(`empleado${i+1} NO tiene hijos = ${hijos}`);        
    } else {
            console.dir(`empleado${i+1} hijos SI = ${hijos}`);
            hijosQueEstudian = +readlineSync.question(`El empleado${i+1} tiene hijos que estudien? *** marque 1(SI) - 2(NO) `);
            while (hijosQueEstudian <= 0 || hijosQueEstudian >2 || isNaN(hijosQueEstudian)) {
                console.error(`Recuerde para indicar si el empleado${i+1} tiene hijos que estudien *** marque 1(SI) - 2(NO) `);
                hijosQueEstudian = +readlineSync.question(`El empleado${i+1} tiene hijos que estudien? *** marque 1(SI) - 2(NO) `);
            }
            if (hijosQueEstudian == 2) {
                console.dir(`empleado${i+1} NO estudian los hijos = ${hijosQueEstudian}`);                
            } else {
                console.dir(`empleado${i+1} los hijos SI estudian = ${hijosQueEstudian}`)
                cantidadEstudian = +readlineSync.question(`Indique la cantidad de hijos que esudian del empleado${i+1} `);
                while (cantidadEstudian<1 || isNaN(cantidadEstudian)) {
                    console.error(`Recuerde para indicar la cantidad de hijos que estudian del empleado${i+1} *** marque un número que sea mayor a 0`);
                    cantidadEstudian = +readlineSync.question(`Indique la cantidad de los hijos que esudian del empleado${i+1} `);
                }
                console.log(`# de hijos que estudian del empleado${i+1} es ${cantidadEstudian}`);
                console.dir(`cantidadEstudian ${typeof(cantidadEstudian)}`);

                //PRIMARIA
                primaria = +readlineSync.question(`El empleado${i+1} tiene hijos en PRIMARIA? *** marque 1(SI) - 2(NO) `);
                while (primaria <= 0 || primaria > 2 || isNaN(primaria)) {
                    console.error(`Recuerde para indicar la cantidad de hijos en PRIMARIA del empleado${i+1} *** marque 1(SI) - 2(NO) `);
                    primaria = +readlineSync.question(`El empleado${i+1} tiene hijos en PRIMARIA? *** marque 1(SI) - 2(NO) `);
                }
                if (primaria == 2) {
                    console.dir(`El empleado${i+1} No tiene en PRIMARIA`);                    
                } else {                    
                    let primariaX = 100;
                    cantidadPrimaria = +readlineSync.question(`Indique la cantidad de hijos en PRIMARIA del empleado${i+1} `);
                    while (cantidadPrimaria < 1 || cantidadPrimaria > cantidadEstudian || isNaN(cantidadPrimaria)) {
                        console.error(`Recuerde para indicar la cantidad de hijos en PRIMARIA del empleado${i+1} *** marque un número entre 1 y ${cantidadEstudian}(Cantidad hijos que estudian)`);
                        cantidadPrimaria = +readlineSync.question(`Indique la cantidad de hijos en PRIMARIA del empleado${i+1} `);
                    }
                    console.dir(`El empleado${i+1} Si tiene en PRIMARIA -- cantidadPrimaria "${cantidadPrimaria}"`);
                    console.dir(`cantidadPrimaria typeOF "${typeof(cantidadPrimaria)}"`);
                    salarioX = primariaX * cantidadPrimaria + salario;
                    console.dir(`salario mas primariaX = ${salarioX} `);
                    salario = salarioX;
                    console.log(`********* salario = salarioX ${salario} **************`);
                }

                //SECUNDARIA

                if ((cantidadEstudian-cantidadPrimaria) == 0) {
                    console.log(`El empleado${i+1} No tiene en SECUNDARIA`);
                    console.log(`El empleado${i+1} No tiene en UNIVERSIDAD`);                    
                } else if ((cantidadEstudian-cantidadPrimaria) > 0) {
                    secundaria = +readlineSync.question(`El empleado${i+1} tiene hijos en SECUNDARIA? *** marque 1(SI) - 2(NO) `);
                    while (secundaria <= 0 || secundaria > 2 || isNaN(secundaria)) {
                        console.error(`Recuerde para indicar la cantidad de hijos en SECUNDARIA del empleado${i+1} *** marque 1(SI) - 2(NO) `);
                        secundaria = +readlineSync.question(`El empleado${i+1} tiene hijos en SECUNDARIA? *** marque 1(SI) - 2(NO) `);
                    }
                    if (secundaria == 2) {
                        console.dir(`El empleado${i+1} No tiene en SECUNDARIA`);                    
                } else {
                    let secundariaZ = 200;
                    cantidadSecundaria = +readlineSync.question(`Indique la cantidad de hijos en SECUNDARIA del empleado${i+1} `);
                    while (cantidadSecundaria < 1 || cantidadSecundaria > (cantidadEstudian-cantidadPrimaria) || isNaN(cantidadSecundaria)) {
                        console.error(`Recuerde para indicar la cantidad de hijos en SECUNDARIA del empleado${i+1} *** marque un número entre 1 y ${(cantidadEstudian-cantidadPrimaria)}`);
                        cantidadSecundaria = +readlineSync.question(`Indique la cantidad de hijos en SECUNDARIA del empleado${i+1} `);
                    }
                    console.dir(`El empleado${i+1} Si tiene en SECUNDARIA -- cantidadSecundaria "${cantidadSecundaria}"`);
                    console.dir(`cantidadSecundaria typeOF "${typeof(cantidadSecundaria)}"`);
                    salarioZ = secundariaZ * cantidadSecundaria + salario;
                    console.dir(`salario mas secundariaZ = ${salarioZ} `);
                    salario = salarioZ;
                    console.log(`********* salario = salarioZ ${salario} **************`);
                }

                //UNIVERSIDAD
                if ((cantidadEstudian-cantidadPrimaria-cantidadSecundaria) == 0) {
                    console.dir(`El empleado${i+1} No tiene en UNIVERSIDAD`);
                    } else {
                        console.log(`**************`);                    
                        let universidadY = 300;
                        cantidadUniversidad = (cantidadEstudian-cantidadPrimaria-cantidadSecundaria);
                        console.dir(`El empleado${i+1} Si tiene en UNIVERSIDAD -- cantidadUniversidad "${cantidadUniversidad}"`);
                        console.dir(`cantidadUniversidad typeOF "${typeof(cantidadUniversidad)}"`);
                        salarioY = universidadY * cantidadUniversidad + salario;
                        console.dir(`salario mas secundariaZ = ${salarioY} `);
                        salario = salarioY;
                        console.log(`********* salario = salarioY ${salario} **************`);
                    }
                }
            }
    }

    console.log(`--------------------------------------`);
    console.dir(`salario mas primariaX = ${salarioX} `);
    console.dir(`salario mas secundariaZ = ${salarioZ} `);
    console.dir(`salario mas secundariaZ = ${salarioY} `);
    console.log(`--------------------------------------`);
    console.dir(`**** Salario del empleado empleado${i+1} queda en: ${salario}`);
    TotalNominaIncluidoItems = TotalNominaIncluidoItems + salario;
}

console.info(`1* El costo total de la nomina incluyendo todos los items: $${TotalNominaIncluidoItems}`);
