

let salarioSemanal;
let horasTrabajo= 13;


if (horasTrabajo <= 40) {
    salarioSemanal = 265 *  horasTrabajo;
    
  } else {
    salarioSemanal = (40 * 265) + ((horasTrabajo - 40) * 350);
  
}

console.log("El sueldo semanal que le corresponde es de " + salarioSemanal + " USD");



