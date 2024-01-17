
//         npm install -g ts-node INSTALAR NODE EN VSS
//         ts-node myProy.ts     IMPRIMIR LOS CONSOLE LOGS

//TIPOS DE DATOS
const nameUser:string = "Matias"; 
const ageUser:number = 21; 
const premium:boolean = true; 
const u:undefined = undefined;
const n:null = null;

let songName = "Yesterday";
songName = "Rainbow";
//songName = 1; No se puede porque ya la definimos de tipo String y a otro tipo de dato como number da error

//Conjunto de constantes del tipo de dato que eramos, en este caso String. Un enum.
enum days{
    Lunes = "Lunes",
    Martes = "Martes",
    Miercoles = "Miercoles",
    Jueves = "Jueves",
    Viernes = "Viernes",
    Sabado = "Sabado",
    Domingo = "Domingo"
}
console.log(days)

// Dos formas de inicializar ARRAYS
let myArray: number[] = [1,2,3,4,5,];
let anotherArray: Array<number> = [1,2,3,4,5];
console.log(anotherArray)


//Array de objetos
const animals: {name: string, type: string}[] = [
    { name: "Luna", type: "Perro" },
    { name: "Mario", type: "Perro" },
    { name: "Pedro", type: "Pajaro "}
];
console.log(animals)


enum animalsEnum{
    Gato = "Gato",
    Perro = "Perro",
    Pajaro = "Pajaro"
}
const animals2: {name: string, type: animalsEnum}[] = [
    { name: "Luna", type: animalsEnum.Gato},
    { name: "Mario", type: animalsEnum.Perro},
    { name: "Pedro", type: animalsEnum.Pajaro}
];
console.log(animals2)
//HASTA ACA TAREA 1
//FUNCIONES
//Las funciones sirven para organizar nuestro código. Es conveniente tenerlo dividido en partes pequeñas.
function saludar() : void {
  console.log("Hola Mundo");
}
saludar();
//con la palabra return podemos guardar ese dato y utilizarlo como querramos
function saludar2() :string {
  return "Holaaa"
}
let saludo = saludar2();
console.log(saludo);

function sumar (n1 :number, n2 : number){
  return n1 + n2;
}
let resultado = sumar(50,100);
console.log("El resultado es: " + resultado)
function suma(a :string, b? : string) :string{ //variableOpcional?
    return a + b; //con esto queda de que si tengo una variale y una variable con ? en el caso de los string te lo toma
  } //tAMBIEN SE PUEDE HACER UN PARAMETRO POR DEFECTO HELLO: SREING = "HOLA"
  
  function sayHello(name: string, hello: string = "Hola"): string{
    return `${hello} ${name}`;
  }
console.log(sayHello("Juana")) //Hola juana
//Hasta aca tarea 2

//INTERFACES es un molde para los objetos
interface Animal {
  name: string;
  weight: number;
  walk(): void;
}

const dog: Animal = {
  name: "Cacho",
  weight: 30,
  walk() {
    return this.name + "puede caminar"; 
  }
}
console.log(dog.walk())
function walk(): number{
  return 4;
}//CON ESTE EJEMPLO VEMOS QUE SI LO DECLARO VOID Y DESPUES NUMBER NO PASA NADA, NO ES LO CORRECO
//LAS INTERFACES PUEDEN HEREDAR PROPIEDADES Y METODOS
interface Person{
  name:string;
  age:number;
  sayHelloo():void;
}

interface Employee extends Person{
  workPosition: string;
}

const employee: Employee = {
  name:"Carlos",
  age:25,
  sayHelloo() {
  console.log("Hola, soy" + this.name + " tengo " + this.age + "años y soy un/a " + this.workPosition)
},
workPosition:"Desarollador"
}
employee.sayHelloo();
//HACER TAREA 3


//OBJETOS
//Se crea de la siguiente forma, se le puede meter inclusive otros objetos dentro
let miAuto = {
  marca:"Fiat",
  modelo:2011,
  aire_ac: true,
  color:"Azul",
  dueno : { //otro objeto
    nombre: "juan",
    apellido: "perez"
  }
};
let modeloAuto = miAuto.modelo //con esto guardo en una variable el modelo del auto
console.log(modeloAuto)
miAuto.modelo=2018; //con esto puedo cambiar los valores que tiene adentro el objeto
console.log(modeloAuto)
console.log("El dueño del auto es: " + miAuto.dueno.apellido)  //puedo llamar al objeto dentro del otro objeto













 
