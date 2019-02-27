function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta;
    var numero;
    
    numero = parseInt(numero);
    
    do{
    	numero=prompt("ingrese un numero positivo");
        respuesta=prompt("desea ingresar otro numero?");
        contador++;
        positivo++;
    }while(respuesta=="si")

    do{
    	numero=prompt("ingrese un numero negativo");
        respuesta=prompt("desea ingresar otro numero?");
        contador++;
        negativo++;
    }
    while(respuesta=="si");

    if(numero>=0){
    	positivo = numero + numero;
    }else{
    	negativo = numero * numero;
    }

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN