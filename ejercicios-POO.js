var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("==========================================================EJERCICIO 1");
/*EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades*/
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = "izquierda"; // valor por defecto
    }
    //cambiar alineación (centrado, derecha o izquierda)
    CabeceraPagina.prototype.definirAlineacion = function (alineacion) {
        var opcionesValidas = ["centrado", "derecha", "izquierda"];
        if (opcionesValidas.indexOf(alineacion.toLowerCase()) !== -1) {
            this.alineacion = alineacion;
        }
        else {
            console.log("Alineación no válida. Use: centrado, derecha o izquierda.");
        }
    };
    // mostrar todas las propiedades
    CabeceraPagina.prototype.mostrarCabecera = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
var paginaWeb = new CabeceraPagina("Mi página web", "Azul", "Arial"); //Objeto
paginaWeb.definirAlineacion("centrado");
paginaWeb.mostrarCabecera();
console.log("==========================================================EJERCICIO 2");
/* EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial
*/
var Calculadora = /** @class */ (function () {
    //se ejecuta para cuando se crea un nuevo objeto de la clase, en este caso es calc
    function Calculadora(a, b) {
        this.a = a;
        this.b = b;
    }
    Calculadora.prototype.sumar = function () {
        return this.a + this.b;
    };
    Calculadora.prototype.restar = function () {
        return this.a - this.b;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.a * this.b;
    };
    Calculadora.prototype.dividir = function () {
        return this.a / this.b;
    };
    Calculadora.prototype.potencia = function () {
        return Math.pow(this.a, this.b);
    };
    Calculadora.prototype.factorial = function () {
        // -bucle for para multiplicar los números del 1 al b
        var resultado = 1;
        for (var i = 1; i <= this.b; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
var calc = new Calculadora(2, 5); //crear la instancia u objeto de la clase
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
var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }
    Cancion.prototype.mostrarDatos = function () {
        return "T\u00EDtulo: ".concat(this.titulo, " \n        G\u00E9nero: ").concat(this.genero, "\n        Autor: ").concat(this.autor);
    };
    //para obtener el valor del atributo privado autor
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    //se usa porque autor es privado y no se puede acceder desde fuera
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    return Cancion;
}());
var cancioncita = new Cancion("Fairytale", "Pop"); //Objeto
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
var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    Cuenta.prototype.depositar = function () {
        if (this.cantidad < 5) {
            console.log("La cantidad depositada debe ser mayor a $5.00");
        }
        else {
            console.log("La cantidad depositada es correcta: " + "$" + this.cantidad);
        }
    };
    Cuenta.prototype.retirar = function (valor) {
        if (this.cantidad > valor) {
            this.cantidad -= valor;
            console.log("Se ha retirado: $" + valor);
            console.log("Cantidad restante: $" + this.cantidad);
        }
        else {
            console.log("No hay efectivo en la cuenta");
        }
    };
    Cuenta.prototype.mostrarDatos = function () {
        return "Nombre: ".concat(this.nombre, "\n        Tipo de cuenta: ").concat(this.tipoCuenta, "\n        N\u00FAmero de cuenta: ").concat(this.numeroCuenta);
    };
    return Cuenta;
}());
var cantMoney = new Cuenta("Rin", 10, "Cuenta de ahorro", "123456789"); // Objeto
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
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    Persona.prototype.MayorEdad = function () {
        if (this.edad >= 18) {
            console.log("Es mayor de edad");
        }
        else {
            console.log("No es mayor de edad!;");
        }
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        //Traemos la FUNCIONALIDAD del constructor del PADRE
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    Empleado.prototype.imprimirSueldo = function () {
        console.log("Sueldo : $" + this.sueldo);
    };
    //Se llama al método método abstracto
    Empleado.prototype.mostrarDatos = function () {
        console.log("Nombre: " + this.nombre); //Los atributos PRIVATE no se pueden usar en las clases HIJAS
        console.log("Apellido: " + this.apellido);
        console.log("Dirección: " + this.direccion);
        console.log("Teléfono: " + this.telefono);
        console.log("Edad: " + this.edad);
    };
    return Empleado;
}(Persona));
var datos = new Empleado("Max", "Salazar", "3a Av Flores col Sta. Catalina", 24517896, 28, 500);
datos.mostrarDatos();
datos.MayorEdad();
datos.imprimirSueldo();
