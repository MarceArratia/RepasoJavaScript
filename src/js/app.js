// //template String 
// const nombre = 'Juan';
// const trabajo='Desarrollador web';

// //concatenar javascript

// console.log('Nombre: ' + nombre +',Trabajo: ' + trabajo );
// console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// //concatenar con múltiples líneas
// const contenedorApp = document.querySelector('#app');
// // let html = '<ul>'+
// // '<li>Nombre: ' + nombre '</li>'

// let html = `
// <ul>
// <li> Nombre: ${nombre} </li>
// <li> Trabajo: ${trabajo} </li>
// </ul>
// `;

// contenedorApp.innerHTML = html;

//Creando una funcion
//function declaration
// function saludar(){
//     console.log('Bienvenido ' + nombre);
// }
// saludar('Juan');

// //function expression,siempre se debe declarar antes de invocar

// const cliente = function(nombreCliente){
//     console.log('Mostrando datos del cliente: ' + nombreCliente);
// }
// cliente('Juan');

//parametros por default


// const actividad = function (nombre='Walter White',actividad='Enseñar quimica')
// {
//     console.log(`La persona ${nombre}, está realizando la actividad ${actividad}`);
// }

// actividad('Juan', 'Aprender JavaScript');
// actividad('Pedro', 'Creando un sitio web')
// actividad('Antonio');

//arrow functions
// let viajando= (destino,duracion) =>
//   `Viajando a la ciudad de: ${destino} por ${duracion}`;

// let viaje;
//  viaje = viajando('París');
//  viaje = viajando('Londres');
//  viaje = viajando('Barcelona','9 días');
// console.log(viaje);

//objetos
//object literal

// const persona = {
//     nombre: 'Juan',
//     profesion: 'Desarrollador web',
//     edad:500

// }

//console.log(persona);
// const mostrarCliente = mostrarInformacionTarea(persona.nombre,persona.profesion);
// console.log(mostrarCliente);
//object constructor
// function Tarea(nombre,urgencia){
//     this.nombre = nombre;
//     this.urgencia = urgencia;

// }
// //agregar un  prototipe a tarea
// Tarea.prototype.mostrarInformacionTarea =function (){
//     return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
// }

// //crear nueva tarea


// const tarea1 = new Tarea('Aprender JavaScript y React','Urgente');
// const tarea2 = new Tarea('Pasear al perro','media');
// console.log(tarea1);

// const aprendiendoJS= {
//     version:{
//        nueva: 'ES6',
//        anterior: 'ES5'
//     } 
//    ,
//     frameworks: ['React','VueJS','AngularJS']
// }

//Destructuring es extraer valores de un objeto

// console.log(aprendiendoJS);
// //version anterior
// let version =aprendiendoJS.version;

//Destructuring es extraer valores de un objeto

// let {anterior}= aprendiendoJS.version;
// console.log(anterior);

// const banda = 'Metallica';
// const genero = 'Heavy metal';
// const canciones = ['Master of puppets','Seek & destroy','Enter sadman'];

// const metallica = {banda,genero,canciones};
// console.log(metallica);

//metodos o funciones en un objeto

// const persona ={
//     nombre: 'Juan',
//     trabajo: 'Desarrollador web',
//     edad: 500,
//     msicaRock: true,
//     mostrarInformacion: function(){
//         console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
//     }
// }
// persona.mostrarInformacion();
//arreglos y .map

// carrito = ['producto 1','Producto 2','Producto 3'];
// console.log(carrito);

// carrito.map(producto =>{
//     return 'El producto es ' +producto;
// });

// const persona ={
//     nombre: 'Juan',
//     trabajo: 'Desarrollador web',
//     edad: 500,
// }
// console.log(Object.keys(persona));

//sprear operator
let lenguajes = ['Javascript','PHP','Python'];
let frameworks = ['ReactJS','Laravel','Django'];

let combinacion = [...lenguajes,...frameworks];
console.log(combinacion);






