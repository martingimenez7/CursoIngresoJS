/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividiendo;
	var divisor;	
	var resto; 

    dividiendo = numeroDividendo.value;
	dividiendo = parseInt(dividiendo);

	divisor = numeroDivisor.value;
	divisor = parseInt(divisor);

	resto = dividiendo % divisor;

	alert("el resto es " + resto);
}
