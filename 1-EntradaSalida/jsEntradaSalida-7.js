/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno; 
  var numerodos;
  var suma; 

  numerouno = numeroUno.value;
  numerouno = parseInt(numerouno);
  
  numerodos = numeroDos.value;
  numerodos = parseInt(numerodos);

  suma = numerouno + numerodos;

  alert("la suma es " + suma);
}

function restar()
{
	 var numerouno; 
  var numerodos;
  var resta; 

  numerouno = numeroUno.value;
  numerouno = parseInt(numerouno);
  
  numerodos = numeroDos.value;
  numerodos = parseInt(numerodos);

  resta = numerouno - numerodos;

  alert("la resta es " + resta);
}

function multiplicar()
{ 
	var numerouno; 
  var numerodos;
  var multiplicar; 

  numerouno = numeroUno.value;
  numerouno = parseInt(numerouno);
  
  numerodos = numeroDos.value;
  numerodos = parseInt(numerodos);

  multiplicar = numerouno * numerodos;

  alert("la multiplicacion es " + multiplicar);
}

function dividir()
{
	var numerouno; 
  var numerodos;
  var division; 

  numerouno = numeroUno.value;
  numerouno = parseInt(numerouno);
  
  numerodos = numeroDos.value;
  numerodos = parseInt(numerodos);

  division = numerouno / numerodos;

  alert("la division es " + division);
}

