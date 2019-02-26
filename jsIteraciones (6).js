function mostrar()
{

	var contador=0;
	var acumulador=0;
    
    numero = prompt("ingrese un numero");
   
    while(numero<4)
    {
        contador++;
        numero = prompt("ingrese un numero");
        numero = parseInt(numero);
        acumulador+= numero;
    }
    


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN