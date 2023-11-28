console.log("prueba de conexion");

//tipo de varibales 

// const para variables constantes
const pi = 3.1416;
const pu = 2.54;
var name = "Julian Guerrero";


// var para variables globales
var cal_days = 15;


// let para variables de bloque o locales; 
let j = 0;
let count = 1;


//Formas de impresion 

//alert
//alert(name);



//librerias 



//  Swal.fire(name)

//tipos de datos;

//numericos
var number = 10;
var number_two = 2.3;

//String
var text="Soy un texto";

//booleanos

var boolean = true; // false

//array

let array = [1,2,3,4,5];
let array_text = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let array_mix = [1,"as",2,true];
let array_mul = [

    {name:"Caleb",last_name:"Acosta",age:"18"},
    {name:"pedro",last_name:"ortiz",age:"23"},
    {name:"juan",last_name:"duarte",age:"3"},
    {name:"pablo",last_name:"martinez",age:"12"}
];

//****************Operadores Basicos 
//suma 
var suma = number + number_two;
console.log("suma = "+ suma);

//resta 
var resta = number - number_two;
console.log("resta = "+resta);

//multiplicacion
var multiplicacion = number * number_two;
console.log("multiplicacion = "+ suma);

//Division 
var resta = number / number_two;
console.log("Division = "+resta);

//modulo

var modulo = number % number_two;
console.log("modulo = "+modulo);

console.log(
    "suma = "+ suma+ "\n"+ 
    "resta = "+resta+ "\n"+ 
    "multiplicacion = "+ multiplicacion+ "\n"+ 
    "Division = "+resta+ "\n"+ 
    "modulo = "+modulo
);

var respuesta =
"suma = "+ suma+ "<br>"+ 
"resta = "+resta+ "<br>"+ 
"multiplicacion = "+ multiplicacion+"<br>"+ 
"Division = "+resta+"<br>"+ 
"modulo = "+modulo

Swal.fire(respuesta);

var bool=false;
var numeric=7;
if(!bool && numeric=="7"){
  console.log("ENTRA IF")
}
else{
  console.log("ENTRAR ELSE")
}
//or //con if
var age="37";
if(age==32||numeric===7){
  console.log("ENTRAR EN IF");
  age++
}
else{
  console.log("ENTRAR EN ELSE");
  age-=2;
}
//for
for (let i = 0; i < array.length; i++) {
  const element = (array_text[i]+(i+1));
  
}
//while
let position=0;
while (position<array_text.length) {
  console.log(array_text[position])
  position++;
}
//funtions load_page
function load_page(){
  //ejm();
  //ejm2();
}
function ejm(){
 alert("BIENVENIDO")
}
function ejm2(){
  alert("BIENVENIDO2")
 }
 function box_onblur(){
  alert("salio");
 }
 function box_onblur(){
 const blox_onblur= document.querySelector("#blox_onblur");
 if(blox_onblur.value.length<=2);{
  alert("problemas con el texto");
 }
 }
 const btn_changeColor = document.querySelector("#change_color")
 btn_changeColor.addEventListener("click",()=> {
  document.body.style.backgroundColor="red";
  document.body.style.color="#fff";
 });
 const form= document.querySelector("#form_register");
 const nombres= document.querySelector("#nombres");
 const apellidos= document.querySelector("#apellidos");
 const validation= document.querySelector("#validation");
 form.addEventListener("sumit", name_event=>{
  
 })
 function load_pages(){
   document.getElementById("nombres")


 }