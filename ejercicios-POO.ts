console.log("==========================================================EJERCICIO 1");
/*EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades*/


console.log("==========================================================EJERCICIO 2");
/* EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial
*/

class Calculadora {
    a: number;
    b: number;

    //se ejecuta para cuando se crea un nuevo objeto de la clase, en este caso es calc
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    sumar(): number {
        return this.a + this.b;
    }
    restar(): number {
        return this.a - this.b;
    }
    multiplicar(): number {
        return this.a * this.b;
    }
    dividir(): number {
        return this.a / this.b;
    }
    potencia(): number {
        return Math.pow(this.a, this.b);
    }
    factorial(): number {
        // -bucle for para multiplicar los números del 1 al b
        let resultado = 1;
        for (let i = 1; i <= this.b; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

const calc = new Calculadora(2, 5); //crear la instancia u objeto de la clase

console.log("Suma:", calc.sumar());
console.log("Resta:", calc.restar());
console.log("Multiplicación:", calc.multiplicar());
console.log("División:", calc.dividir());
console.log("Potencia:", calc.potencia());
console.log("Factorial:", calc.factorial());


console.log("==========================================================EJERCICIO 3");
/*
EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción. 
*/

class Cancion {
    titulo: string;
    genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
    }

    mostrarDatos(): string {
        return `Título: ${this.titulo} 
        Género: ${this.genero}
        Autor: ${this.autor}`;
    }

    //para obtener el valor del atributo privado autor
    getAutor(): string {
        return this.autor;
    }
    //se usa porque autor es privado y no se puede acceder desde fuera
    setAutor(autor: string) {
        this.autor = autor;
    }
}

const cancioncita = new Cancion("Fairytale", "Pop"); //Objeto
cancioncita.setAutor("Alexander Rybak"); //e stablece el autor de la canción usando el setter
console.log(cancioncita.mostrarDatos());


console.log("==========================================================EJERCICIO 4");
/*EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos:
• Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
número de cuenta.
• Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
correctamente y la cantidad depositada.
• Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
• Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
• Define un objeto de la clase Cuenta y llama sus métodos.
*/

class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    depositar(): void {
        if (this.cantidad < 5) {
            console.log("La cantidad depositada debe ser mayor a $5.00");
        } else {
            console.log("La cantidad depositada es correcta: " + "$" + this.cantidad);
        }
    }

    retirar(valor: number): void {//eliminar void
        if (this.cantidad > valor) {
            this.cantidad -= valor;
            console.log("Se ha retirado: $" + valor);
            console.log("Cantidad restante: $" + this.cantidad);
        } else {
            console.log("No hay efectivo en la cuenta");
        }
    }

    mostrarDatos(): string {
        return `Nombre: ${this.nombre}
        Tipo de cuenta: ${this.tipoCuenta}
        Número de cuenta: ${this.numeroCuenta}`;
    }
}

const cantMoney = new Cuenta("Rin", 10, "Cuenta de ahorro", "123456789"); // Objeto

cantMoney.depositar();
cantMoney.retirar(4);
cantMoney.mostrarDatos();


console.log("==========================================================EJERCICIO 5");
/* 
EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
*/

abstract class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: number;
    edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: number, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    MayorEdad(): void {
        if (this.edad >= 18) {
            console.log("Es mayor de edad");
        } else {
            console.log("No es mayor de edad!;")
        }
    }

    // aQUI Se crea el método abstracto (obligatorio de implementar en clases hijas)
    abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    // Se agregar un nuevo atributo HIJO más los del padre
    sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: number, edad: number, sueldo: number) {
        //Traemos la FUNCIONALIDAD del constructor del PADRE
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    cargarSueldo(sueldo: number) {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): void {
        console.log("Sueldo : $" + this.sueldo);
    }


    //Se llama al método método abstracto
    mostrarDatos(): void {
        console.log("Nombre: " + this.nombre); //Los atributos PRIVATE no se pueden usar en las clases HIJAS
        console.log("Apellido: " + this.apellido);
        console.log("Dirección: " + this.direccion);
        console.log("Teléfono: " + this.telefono);
        console.log("Edad: " + this.edad);
    }

}

const datos = new Empleado("Max", "Salazar", "3a Av Flores col Sta. Catalina", 24517896, 28, 500);

datos.mostrarDatos();
datos.MayorEdad();
datos.imprimirSueldo();
