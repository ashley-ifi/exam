class Persona {
    nombre="Luis";
    apellido="Santos";
    edad= 20;

    getDetalles() {
         return `nombre ${this.nombre}, apellido ${this.apellido} , edad ${this.edad}`;
    }


    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad=edad;
    }
    
}

class Empleado extends Persona {

         empleadoConf;
         empleadoSind;

      
        constructor(Empleado,empleadoConf,empleadoSind) {
          this.empleadoConf=empleadoConf;
          this.empleadoSind=empleadoSind;
        }



        getDetalles() {
            super.getDetalles();

            console.log(`nombre ${this.nombre}, apellido ${this.apellido} , edad ${this.edad}, tipo1:${this.empleadoConf}, tipo2:${this.empleadoSind}` );
            }
      }
       


    



class Nomina {

     sueldo;
      empleados= [];

    
      calcularPago() {
        if (Empleado== empleadoSind){
           sueldo= 350- (100/10);
        } else if(Empleado== empleadoConf){
           sueldo=500- (100/13);
        }
    }
}