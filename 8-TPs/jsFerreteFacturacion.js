/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
   var preciouno;
   var preciodos; 
   var preciotres;
   var suma;
   var resultado;

  preciouno = PrecioUno.value;
  preciouno = parseInt(preciouno);

  preciodos = PrecioDos.value;
  preciodos = parseInt(preciodos);

  preciotres = PrecioTres.value;
  preciotres = parseInt(preciotres);

  suma = preciouno + preciodos + preciotres;

  resultado = suma

  alert("la suma es de: " + resultado);
  
  //sumar en amarillo en el html

}
function Promedio () 
{
	
   var preciouno;
   var preciodos; 
   var preciotres;
   var promedio;
   var suma;
   var resultado;

  preciouno = PrecioUno.value;
  preciouno = parseInt(preciouno);

  preciodos = PrecioDos.value;
  preciodos = parseInt(preciodos);

  preciotres = PrecioTres.value;
  preciotres = parseInt(preciotres);

  suma = preciouno + preciodos + preciotres;
  
  promedio = suma / 3;

  resultado = promedio;

  alert("el promedio es de: " + resultado);

}
function PrecioFinal () 
{
	
   var preciouno;
   var preciodos; 
   var preciotres;
   var iva;
   var suma;
   var resultado;
   var sumaiva;

  preciouno = PrecioUno.value;
  preciouno = parseInt(preciouno);

  preciodos = PrecioDos.value;
  preciodos = parseInt(preciodos);

  preciotres = PrecioTres.value;
  preciotres = parseInt(preciotres);

  suma = preciouno + preciodos + preciotres;
  
  iva = suma * 21 / 100;

  sumaiva = suma + iva;

  resultado = sumaiva;

  alert("el promedio es de: " + sumaiva);


}