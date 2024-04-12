console.log("Hola esta es la consola")

console.log("tambien es un string")

console.log("un valor de tipo texto")
console.log(20)
console.log("20")
console.log(1.2)
console.log(1, 62)
console.log(1 + 1)
console.log(true)
console.log(false)


//JavaScript tiene tres tipos de declaraciones de variables.
//var
//let
//const

let x = 10;
let y = false;
let z = x;
let n = "Juanito";

//Practica con let

let nombreUser = "Lizeth";
let edadUser = 27;
console.log(nombreUser);
console.log(edadUser)


//Practica let concatenando (,)
let nombreUser2 = "Lizeth";
let edadUser2 = 27;
console.log("Mi nombre es: " + nombreUser2 + "y tengo: " + edadUser2 + " años")

//Practica let con suma
let numeroUno = 26
let numeroDos = 27
console.log(numeroUno + numeroDos)

//Practica con prompt
let numeroUno1 = prompt("Ingrese un numero 1: ");
let numeroDos2 = prompt("Ingrese un numero 2: ");

console.log(typeof numeroUno1);

let resultado = parseInt(numeroUno1) + parseInt(numeroDos2)
console.log(resultado);

//Practica con parseInt
let numeroUno3 = parseInt(prompt("Ingrese un numero 1: "));
let numeroDos4 = parseInt(prompt("Ingrese un numero 2: "));

//console.log(parseInt numeroUno1));

let resultado2 = numeroUno3 + numeroDos4
console.log(resultado2);

//Practica con Operadores
//Operadores Aritméticos

//Adición: Suma dos números juntos.
let resultado5 = 10 + 20;
console.log(resultado5);

//Resta: Resta el numero de la derecha del de la izquierda.
let resultado6 = 10 - 20;
console.log(resultado6);

//Resta con decimales: Resta el numero de la derecha del de la izquierda.
let resultado7 = 10.5 - 20;
console.log(resultado7);

//Multiplicación: Multiplica dos números juntos.
let resultado8 = 10 * 20;
console.log(resultado8);

//División: Divide el número de la izquierda por el de la derecha.
let resultado9 = 10 / 20;
console.log(resultado9);

//Sobrante (también llamado módulo): Retorna el restante después de dividir el número de la izquierda en porciones enteras del de la derecha.
let resultado10 = 8 % 3;
console.log(resultado10);

//Multliples operaciónes
let resultado11 = 2 * (100 / 5) + 10;
console.log(resultado11);


//Operadores Relacionales
//Los operadores relacionales definidos por JavaScript son idénticos a los que definen las matemáticas: 

//mayor que (>)
let resultado12 = 20 > 10;
console.log(resultado12);

//menor que (<)
let resultado13 = 20 < 10;
console.log(resultado13);

//mayor o igual (>=)
let resultado121 = 20 >= 10;
console.log(resultado121);

//menor o igual (<=)
let resultado122 = 20 <= 10;
console.log(resultado122);

//igual que (===) recomendado como regla para utilizar
let resultado14 = 20 === 10;
console.log(resultado14);

//igual a (==) (20 numero == 20 de un string) no recomendado como regla para utilizar
let resultado15 = 20 == "20";
console.log(resultado15);

//distinto de (!==) recomendado como regla para utilizar
let resultado16 = 20 !== 10;
console.log(resultado16);

//distinto de (!=) (10 numero == 10 de un string) no recomendado como regla para utilizar
let resultado17 = 10 != "10";
console.log(resultado17);

//Operadores lógicos
//Los operadores lógicos se usan para combinar dos valores Booleanos y devolver un resultado verdadero, falso o nulo. 
//Los operadores lógicos también se denominan operadores Booleanos.

//&& : Si los dos son verdaderos devuelve verdadero.
let resultado18 = true && true;
console.log(resultado18);

let resultado181 = 20 > 10 && 10 < 20;
console.log(resultado181);

let resultado182 = true && true && false;
console.log(resultado182);

//|| : Con que uno sea verdadero devolverá verdadero.
let resultado19 = true || false;
console.log(resultado19);

let resultado191 = true || false || false;
console.log(resultado191);

//! : Negación
let resultado20 = !false;
console.log(resultado20);

//Estructuras de control (Condicionales)

//if/else (Si ocurre algo, haz esto, sino, haz lo esto otro...)
//if (condicion) { Abrir llaves 

    // bloque verdadero

//Cerrar llaves } else { Abrir llaves
    
    // bloque falso

//Cerrar llaves }

//Ejemplo 1
let stringUser = prompt("Escriba 'javascript'");

if (stringUser === "javascript") {
    console.log("Lo escribiste super bien!");
} else {
    console.log("Lo escribiste mal");
}

//Ejemplo 2
let numUsuario = prompt("Ingrese numero del 1 al 10");

console.log(numUsuario + " Es: " + typeof numUsuario);

//parseInt: Indica a la logica que es un numero el q se ingresa por el user
console.log(parseInt(numUsuario));  

if (parseInt(numUsuario) <= 10) {
    // Sentencia true
    console.log("Genial!!");
} else {
    // Sentencia false
    console.log("Super mal!!");
}

//?: operador ternario (Operador ternario: Equivalente a If/else , método abreviado.)

//switch (Estructura para casos específicos: Similar a varios If/else anidados.)
// comillas invertidas (ALT + 96) = ``

let opcionUser = prompt(`
Elija una opción:
1: Libros
2: Películas
3: Juegos
`);

switch (opcionUser) {
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("NFS");
        break;
    default:
        console.log("Opción no válida");
        break;
}


//Repetitivas o iterativas

//while
let numero = 0;
while (numero <= 10) {
    console.log(numero);
    numero++; //numero = numero + 1;
}
console.log("FIN: " + numero);


let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);

let vidas = 3

let numeroUser1 = parseInt(prompt("Adivine el numero del 1 al 10"))

while(numeroMaquina !== numeroUser1 && vidas > 1)   {

    let mensaje = 
        numeroMaquina > numeroUser1 
        ? "El numeroMaquina es Mayor" 
        : "El numeroMaquina es Menor";

    console.log("Te equivocaste! " + mensaje);
    numeroUser1 = parseInt(prompt("numero del 1 al 10"));
    vidas --;

}


if(numeroMaquina === numeroUser1)   {
    console.log("Ganaste");
}

else        {
    console.log("Perdiste")

}




//do... while

//for


//Array y se identifica con [] corchetes
//Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. 
//Tanto la longitud como el tipo de los elementos de un array son variables.

let frutas = ["manzana", "platano", "pera", 10];
console.log(frutas);
console.log(frutas.length);


//Conceptos claves:
//length: Tamaño de array (cantidad de elementos)
//índice: Comienzan en cero, es decir, el índice del primer elemento de un array es 0.

let frutas2 = ["manzana", "platano", "pera"];
console.log(frutas2);
console.log(frutas2.length);
console.log(frutas2[0]);
console.log(frutas2[1]);
console.log(frutas2[2]);
console.log(frutas2[3]);


//for
//Crea un bucle que consiste en tres expresiones opcionales, 
//encerradas en paréntesis y separadas por puntos y comas, 
//seguidas de una sentencia ejecutada en un bucle.

let frutas3 = ["manzana", "platano", "pera"];

for (let i = 0; i < frutas3.length; i++) { 
    
//La (i) se identifica como indice
// (i++) se identifica como incremento que esi = i + 1

    console.log(frutas[i]);
}


//for of
//La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, 
//como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), 
//TypedArray, Map, Set e iterables definidos por el usuario.

let frutas4 = ["manzana", "platano", "pera"];

for (let fruta4 of frutas4) {
    console.log(fruta4);
}


//functions (opens new window): Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — 
//un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, 
//debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.

//El nombre de la función.
//Una lista de parámetros de la función, entre paréntesis y separados por comas.
//Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }.

function saludar() {
    console.log("Bienvenido!");
}

saludar();

//y esto funcionará...

saludar();
function saludar() {
    console.log("Bienvenido!");
}

//una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. 
//"Hoisting" usualmente es una pregunta técnica en una entrevista de trabajo 😲



//Funciones con argumentos/parámetros:
function saludar(nombreUsuario) {
    console.log("Bienvenido! " + nombreUsuario);
}
saludar("Ignacio");


//Funciones con retorno:
function saludar(nombreUsuario) {
    return "Bienvenido " + nombreUsuario;
}

console.log(saludar("Ignacio"));

//Ejemplo sumar:
function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

let numero1 = prompt("Ingrese primer número");
let numero2 = prompt("Ingrese segundo número");

let resultadoUnoDos = sumar(numero1, numero2);

console.log("El total es: " + resultadoUnoDos);


//reutilizables
//Una característica fundamental de las funciones es que se pueden reutilizar.
function sumar(n1, n2) {
    return n1 + n2;
}

let resultadoUno = sumar(10, 20);
let resultadoDos = sumar(50, 60);
let resultadoTres = sumar(100, 30);

console.log("El total uno es: " + resultadoUno);
console.log("El total dos es: " + resultadoDos);
console.log("El total tres es: " + resultadoTres);
