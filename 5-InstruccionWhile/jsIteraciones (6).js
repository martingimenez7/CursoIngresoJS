function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero =0;

    numero = prompt("ingrese un numero");
    numero = parseInt(numero);


    while(contador<4)
    {
        numero = prompt("ingrese otro numero");
        contador++;
        acumulador++;
    }

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN