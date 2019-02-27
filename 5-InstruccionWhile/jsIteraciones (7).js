function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;
    
    numero = parseInt(numero);

    do{
    	numero=prompt("ingrese un numero");
        respuesta=prompt("desea ingresar otro numero?");
        contador++;
        acumulador++;
    }
    while(respuesta=="si");

   document.getElementById('suma').value=acumulador;
   document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN