
const readlineSync = require('readline-sync');
let cantidadDeEmpleados = +readlineSync.question(`Ingrese la cantidad de empleados: `);
    while (cantidadDeEmpleados <= 0 || isNaN(cantidadDeEmpleados)) {
            console.error(`Recuerde para la cantidad de empleados usted debe escribir un número mayor a 0`);
            cantidadDeEmpleados = +readlineSync.question(`Ingrese la cantidad de empleados: `);            
    }


let TotalNominaIncluidoItems = 0;
let TotalNominahombres = 0;
let TotalNominamujeres = 0;
let empleadoQueMasDineroCuesta = '';
let subsidioSecundaria = 0;
let subsidioPasajeExtranjero = 0;

let tablaEmpleadoMatriz = [];

let salarioM = 0;
let salarioF = 0;
let contadorPersonasMasculino = 0;
let contadorPersonasFemenino = 0;
let valorEmpleadoMAyorSubsidio = 0;

for (let i = 0; i < cantidadDeEmpleados; i++) {
    
    //Salario
    let salario = +readlineSync.question(`Ingrese el salario del empleado${i+1} $`);
    let subsidiosDelEmpleado = 0;
    while (salario <= 0 || isNaN(salario)) {
            console.error(`Recuerde para indicar el salario del empleado${i+1}, usted debe escribir un valor numérico mayor a 0`);
            salario = +readlineSync.question(`Ingrese el salario del empleado${i+1} $`);            
    }
    console.dir(`El salario del empleado${i+1} = $${salario}`);    
    

    //Estrato
    let estrato = +readlineSync.question(`Indique el estrato del empleado${i+1} `);
    while (estrato <= 0 || estrato > 6 || isNaN(estrato)) {
        console.error(`Recuerde para indicar el estrato, usted debe escribir un valor numérico desde 1 hasta 6`);
        estrato = +readlineSync.question(`Indique el estrato del empleado${i+1} `);        
    }
    
    if (estrato == 1) {
        estrato1 =  salario*0.15;
        console.dir(`empleado${i+1} estrato 1, valor subsidio = ${estrato1}`);
        salario = salario + estrato1;
        subsidiosDelEmpleado = subsidiosDelEmpleado + estrato1;
        }
        else if (estrato == 2) {
            estrato2 = salario*0.10;
            console.dir(`empleado${i+1} estrato 2, valor subsidio = ${estrato2}`);
            salario = salario + estrato2;
            subsidiosDelEmpleado = subsidiosDelEmpleado + estrato2;
            
        } 
        else if (estrato == 3) {
            estrato3 = salario*0.05;
            console.dir(`empleado${i+1} estrato 3, valor subsidio = ${estrato3}`);
            salario = salario + estrato3;
            subsidiosDelEmpleado = subsidiosDelEmpleado + estrato3;            
        }

    
    //Rural
    const SIesrural = 35000;
    let rural = readlineSync.question(`EL empleado${i+1} vive en zona rural? *** (SI) ó (NO) `);
    while (rural.toLowerCase() != 'si' && rural.toLowerCase() != 'no') {
        console.error(`Recuerde para indicar la zona del empleado${i+1} *** marque (SI) ó (NO) `);
        rural = readlineSync.question(`EL empleado${i+1} vive en zona rural? *** (SI) ó (NO) `);        
    }
        
    if (rural == 'no') {
        console.dir(`empleado${i+1} rural NO = ${rural}`);        
        }
        else {
            ruralSI =  salario+SIesrural;
            console.dir(`empleado${i+1} rural SI, salario hasta el momento = $${ruralSI}`);
            salario = salario + SIesrural;
            subsidiosDelEmpleado = subsidiosDelEmpleado + SIesrural;            
        }

    
    //Subsidio hijos estudiantes
    let cantidadPrimaria = 0;
    
    let hijos = +readlineSync.question(`EL empleado${i+1} tiene hijos? *** marque 1(SI) - 2(NO) `);
    while (hijos <= 0 || hijos > 2 || isNaN(hijos)) {
        console.error(`Recuerde para indicar si el empleado${i+1} tiene hijos *** marque 1(SI) - 2(NO) `);
        hijos = +readlineSync.question(`EL empleado${i+1} tiene hijos? *** marque 1(SI) - 2(NO) `);        
    }

    if (hijos == 2) {
        console.dir(`empleado${i+1} NO tiene hijos = ${hijos}`);        
    } else {
            console.dir(`empleado${i+1} hijos SI`);
            let hijosQueEstudian = +readlineSync.question(`El empleado${i+1} tiene hijos que estudien? *** marque 1(SI) - 2(NO) `);
            while (hijosQueEstudian <= 0 || hijosQueEstudian >2 || isNaN(hijosQueEstudian)) {
                console.error(`Recuerde para indicar si el empleado${i+1} tiene hijos que estudien *** marque 1(SI) - 2(NO) `);
                hijosQueEstudian = +readlineSync.question(`El empleado${i+1} tiene hijos que estudien? *** marque 1(SI) - 2(NO) `);
            }
            if (hijosQueEstudian == 2) {
                console.dir(`empleado${i+1} NO estudian los hijos = ${hijosQueEstudian}`);                
            } else {
                console.dir(`empleado${i+1} los hijos SI estudian`)
                cantidadEstudian = +readlineSync.question(`Indique la cantidad de hijos que esudian del empleado${i+1} `);
                while (cantidadEstudian<1 || isNaN(cantidadEstudian)) {
                    console.error(`Recuerde para indicar la cantidad de hijos que estudian del empleado${i+1} *** marque un número que sea mayor a 0`);
                    cantidadEstudian = +readlineSync.question(`Indique la cantidad de los hijos que esudian del empleado${i+1} `);
                }
                console.dir(`# de hijos que estudian del empleado${i+1} es ${cantidadEstudian}`);

                //PRIMARIA
                let primaria = +readlineSync.question(`El empleado${i+1} tiene hijos en PRIMARIA? *** marque 1(SI) - 2(NO) `);
                while (primaria <= 0 || primaria > 2 || isNaN(primaria)) {
                    console.error(`Recuerde para indicar la cantidad de hijos en PRIMARIA del empleado${i+1} *** marque 1(SI) - 2(NO) `);
                    primaria = +readlineSync.question(`El empleado${i+1} tiene hijos en PRIMARIA? *** marque 1(SI) - 2(NO) `);
                }
                if (primaria == 2) {
                    console.dir(`El empleado${i+1} No tiene en PRIMARIA`);
                }
                // ******
                    else {
                        const primariaX = 100;
                        cantidadPrimaria = +readlineSync.question(`Indique la cantidad de hijos en PRIMARIA del empleado${i+1} `);
                    while (cantidadPrimaria < 1 || cantidadPrimaria > cantidadEstudian || isNaN(cantidadPrimaria)) {
                        console.error(`Recuerde para indicar la cantidad de hijos en PRIMARIA del empleado${i+1} *** marque un número entre 1 y ${cantidadEstudian}(Cantidad hijos que estudian)`);
                        cantidadPrimaria = +readlineSync.question(`Indique la cantidad de hijos en PRIMARIA del empleado${i+1} `);
                    }
                    console.dir(`El empleado${i+1} Si tiene en PRIMARIA -- cantidadPrimaria "${cantidadPrimaria}"`);
                    salarioX = primariaX * cantidadPrimaria + salario;
                    console.dir(`salario mas primariaX = $${salarioX} `);
                    salario = salarioX;
                    console.dir(`Empleado${i+1} salario hasta el momento $${salario}`);
                    console.dir(`El empleado${i+1} Si tiene en PRIMARIA -- cantidadPrimaria "${cantidadPrimaria}"`);
                    subsidiosDelEmpleado = subsidiosDelEmpleado + (primariaX*cantidadPrimaria);
                    }
                    
                    // ************************************************************
                    if ((cantidadEstudian-cantidadPrimaria) == 0) {
                        console.log(`El empleado${i+1} No tiene en SECUNDARIA`);
                        console.log(`El empleado${i+1} No tiene en UNIVERSIDAD`);                    
                        } 
                    
                    if ((cantidadEstudian-cantidadPrimaria) > 0) {
                        secundaria = +readlineSync.question(`El empleado${i+1} tiene hijos en SECUNDARIA? *** marque 1(SI) - 2(NO) `);
                        while (secundaria <= 0 || secundaria > 2 || isNaN(secundaria)) {
                            console.error(`Recuerde para indicar la cantidad de hijos en SECUNDARIA del empleado${i+1} *** marque 1(SI) - 2(NO) `);
                            secundaria = +readlineSync.question(`El empleado${i+1} tiene hijos en SECUNDARIA? *** marque 1(SI) - 2(NO) `);
                        }

                        let cantidadSecundaria = 0;
                        if (secundaria == 1) {
                            const secundariaZ = 200;
                            cantidadSecundaria = +readlineSync.question(`Indique la cantidad de hijos en SECUNDARIA del empleado${i+1} `);
                            while (cantidadSecundaria < 1 || cantidadSecundaria > (cantidadEstudian-cantidadPrimaria) || isNaN(cantidadSecundaria)) {
                                console.error(`Recuerde para indicar la cantidad de hijos en SECUNDARIA del empleado${i+1} *** marque un número entre 1 y ${(cantidadEstudian-cantidadPrimaria)}`);
                                cantidadSecundaria = +readlineSync.question(`Indique la cantidad de hijos en SECUNDARIA del empleado${i+1} `);
                            }
                            console.dir(`El empleado${i+1} Si tiene en SECUNDARIA -- cantidadSecundaria "${cantidadSecundaria}"`);
                            salarioZ = secundariaZ * cantidadSecundaria + salario;
                            console.dir(`salario mas secundariaZ = $${salarioZ} `);
                            salario = salarioZ;
                            console.log(`********* salario = salarioZ $${salario} **************`);
                            subsidiosDelEmpleado = subsidiosDelEmpleado + (secundariaZ*cantidadSecundaria);
                            subsidioSecundaria = subsidioSecundaria + secundariaZ*cantidadSecundaria;
                            

                        } else {
                            console.dir(`El empleado${i+1} No tiene en SECUNDARIA`);                                
                        }
                        debugger;
                        //UNIVERSIDAD
                        if ((cantidadEstudian-cantidadPrimaria-cantidadSecundaria) == 0) {
                            console.dir(`El empleado${i+1} No tiene en UNIVERSIDAD`);
                            } else {
                                console.log(`**************`);                    
                                let universidadY = 300;
                                cantidadUniversidad = (cantidadEstudian-cantidadPrimaria-cantidadSecundaria);
                                console.dir(`El empleado${i+1} Si tiene en UNIVERSIDAD -- cantidadUniversidad "${cantidadUniversidad}"`);
                                salarioY = universidadY * cantidadUniversidad + salario;
                                console.dir(`salario mas secundariaZ = $${salarioY} `);
                                salario = salarioY;
                                console.log(`********* salario = salarioY $${salario} **************`);
                                subsidiosDelEmpleado = subsidiosDelEmpleado + (universidadY*cantidadUniversidad);
                            }
                                        
            }           
                            // *************************************************************+
                        }
                    
                }
            
    //Extranjero

    let extranjero = +readlineSync.question(`EL empleado${i+1} es extranjero? *** marque 1(SI) - 2(NO) `);
    while (extranjero <= 0 || extranjero > 2 || isNaN(extranjero)) {
        console.error(`Recuerde para indicar si empleado${i+1} es extranjero *** marque 1(SI) - 2(NO) `);
        extranjero = +readlineSync.question(`EL empleado${i+1} es extranjero? *** marque 1(SI) - 2(NO) `);        
    }
        
    if (extranjero == 2) {
        console.dir(`empleado${i+1} extranjero NO = ${extranjero}`);
        }
        else {
            let SIesextranjero = +readlineSync.question(`Indique el valor del pasaje del empleado${i+1} para viajar al extranjero $`);
            while (SIesextranjero < 1 || isNaN(SIesextranjero)) {
                console.error(`Recuerde para indicar el valor del pasaje del empleado${i+1} *** dijite un valor numérico mayor a 0 `);
                SIesextranjero = +readlineSync.question(`Indique el valor del pasaje del empleado${i+1} para viajar al extranjero $`);        
            }
            console.dir(`empleado${i+1} extranjero SI, valor pasaje = $${SIesextranjero}`);
            extranjeroSI = (SIesextranjero*2)+salario;
            console.dir(`*****extranjeroSI = ${extranjeroSI}******`);
            salario = extranjeroSI;
            console.dir(`salario + SIesextranjero, salario hasta el momento = $${salario}`);
            subsidiosDelEmpleado = subsidiosDelEmpleado + (SIesextranjero*2);
            subsidioPasajeExtranjero = subsidioPasajeExtranjero + (SIesextranjero*2);
        }

    //Hombres - mujeres
    let genero = readlineSync.question(`registre el género del empleado${i+1} *** Ingrese f(femenino) - m(masculino): `);
    while (genero.toLowerCase() != 'f' && genero.toLowerCase() != 'm') {
    console.error(`Recuerde escribir "f" o "m" para indicar el  género del empleado${i+1}`);
    genero = readlineSync.question(`registre el género del empleado${i+1} *** Ingrese f(femenino) - m(masculino): `);
    }
    if(genero.toLowerCase() == 'f'){
        contadorPersonasFemenino++;
        salarioF = salario;
        console.dir(`empleado${i+1} género(${genero}) -- salarioF = ${salarioF}`);
        TotalNominamujeres = TotalNominamujeres + salarioF;
        console.log(`Total nomina de las mujeres hasta el momento ${TotalNominamujeres}`);

    }
        else 
        {
            contadorPersonasMasculino++;
            salarioM = salario;
            console.dir(`empleado${i+1} género(${genero}) -- salarioM = ${salarioM}`);
            TotalNominahombres = TotalNominahombres + salarioM;
            console.log(`Total nomina de los hombres hasta el momento ${TotalNominahombres}`);
        }
        
    //empleadoQueMasDineroCuesta
    if (subsidiosDelEmpleado > valorEmpleadoMAyorSubsidio) {
        valorEmpleadoMAyorSubsidio = subsidiosDelEmpleado;
        empleadoQueMasDineroCuesta = `empleado${i+1}`
        console.dir(`Este subsidio es el mas alto por el momento ${subsidiosDelEmpleado}`);
        console.log(`empleado${i+1} subsidio mas alto`);
        }
    
            

    // ************************************************************
    const tablaEmpleado = {
        empleado:`empleado${i+1}`,genero:genero, salario:salario, estrato:estrato, rural:rural, extranjero:`1=SI -- 2=NO = (${extranjero})`, subsidiosDelEmpleado:subsidiosDelEmpleado
    }
    tablaEmpleadoMatriz.push(tablaEmpleado);

    // ************************************************************

    console.log(`************************************************************`);
    console.dir(`Subsidios del empleado${i+1} =$${subsidiosDelEmpleado}`)
    console.log(`************************************************************`);

    console.dir(`**** Salario del empleado empleado${i+1} queda en: $${salario}`);
    console.dir(`**** Subsidio del empleado empleado${i+1} queda en: $${subsidiosDelEmpleado}`);
    TotalNominaIncluidoItems = TotalNominaIncluidoItems + salario;
}

console.dir(`Total cantidad hombres = ${contadorPersonasMasculino}`);
console.dir(`Total cantidad mujeres = ${contadorPersonasFemenino}`);

console.log(`------------------------0------------------------0-------------------------0---------------------`);
console.table(tablaEmpleadoMatriz);
console.log(`------------------------0------------------------0-------------------------0---------------------`);


console.info(`****** 1* El costo total de la nómina incluyendo todos los items: $${TotalNominaIncluidoItems}`);
console.info(`****** 2* Total nomina de los hombres: $${TotalNominahombres}`);
console.info(`****** 3* Total nomina de las mujeres: $${TotalNominamujeres}`);
console.info(`****** 4* El empleado que mas dinero le cuesta a la empresa es: $${empleadoQueMasDineroCuesta}`);
console.info(`****** 5* El subsidio para secundaria tiene un valor de: $${subsidioSecundaria}`);
console.info(`****** 6* El subsidio de pasajes para los empleados extranjeros tiene un valor de: $${subsidioPasajeExtranjero}`);
