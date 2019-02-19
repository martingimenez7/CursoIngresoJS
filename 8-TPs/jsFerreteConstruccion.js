/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  
  var largo;
  var ancho;
  var radio;
  var alambre;
  var multiplicacionl;
  var multiplicaciona;
  var alambreportres;
  var resultado;
  
  largo = Largo.value;
  largo = parseInt(largo);

  ancho = Ancho.value;
  ancho = parseInt(ancho);

  radio = Radio.value;
  radio = parseInt(radio);

  multiplicacionl = largo * 2;
  multiplicaciona = ancho * 2;

  alambre = multiplicaciona + multiplicacionl;

  Radio.value = alambre;

  alambreportres= alambre * 3;

  resultado = alambreportres;

  alert("la cantidad de alambre que se necesita es: " + resultado + " mts");
}
function Circulo () 
{
	var radio;
  var alambre;
  var alambreportres;
  var resultado;

  radio = Radio.value;
  radio = parseInt(radio);

  alambreportres= radio * 3;
  resultado = alambreportres;

 alert("la cantidad de alambre que se necesita es: " + resultado + " mts");
}
function Materiales () 
{
	var cemento;
  var cal;
  var largo;
  var ancho;
  var multiplicacionl;
  var multiplicaciona;
  var radio;

  largo = Largo.value;
  largo = parseInt(largo);

  ancho = Ancho.value;
  ancho = parseInt(ancho); 

  multiplicacionl = largo * 2;
  multiplicaciona = ancho * 2;
  
  radio = multiplicacionl + multiplicaciona;
  Radio.value = radio;

  cemento = radio * 2;
  cal = radio * 3;

  alert("se necesitan "+cemento+" bolsas de cemento y "+cal+" de cal");

} 