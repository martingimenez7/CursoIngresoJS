function mostrar()
{
    var letra;
    var numero;
    var contador=0;
    var acumulador=0;
    var cantNumPares=0;
    var mensaje1;
    var mensaje2;
    var mensaje3;
    var mensaje4;
    var mensaje5;
    var mensaje6;
    var mensaje7;
    var respuesta="si";
    var cantNumImpares=0;
    var cantDeCeros=0;
    var acumuladorNumPositivos=0;
    var acumuladorNumNegativos=0;
    var numeroMax=0;
    var letraNumMax;
    var letraNumMin;
    var numeroMin=0;
    var contadorDeNumPos=0;

  while(respuesta=="si")
  {
    letra = prompt("Ingrese una letra");
   while(isNaN(letra)== false)
    {
      letra = prompt("Error, ingrese una letra");
      letra = parseInt(letra);
    }

    numero = prompt("Ingrese un numero");
    numero = parseInt(numero);
   while(isNaN(numero)==true || numero<=-100 && numero>=100)
    {
      numero = prompt("Error, ingrese un numero");
      numero = parseInt(numero);
    }
    

    respuesta = prompt("desea ingresar otra letra y numero?");
    

    if(numero>=0 && numero%2==0){
        cantNumPares = cantNumPares+1;
        mensaje1 = "la cantidad de numeros pares es " + cantNumPares;
    }else{
        cantNumImpares =cantNumImpares+1; 
        mensaje2 = "la cantidad de numeros impares es " + cantNumImpares; 
    }

    if(numero==0){
        cantDeCeros = cantDeCeros+1;
        mensaje3 = "la cantidad de ceros es "+ cantDeCeros;
    }else if(numero>0){

          acumuladorNumPositivos = acumuladorNumPositivos + numero;
          contadorDeNumPos=contadorDeNumPos+1;
          mensaje4 = "el promedio de numeros positivos es " + acumuladorNumPositivos;
        }else{
    	      acumuladorNumNegativos = acumuladorNumNegativos+numero;
               mensaje5 = "la suma de numeros negativos es "+ acumuladorNumNegativos;
            }      

     if(contador==0){
        numeroMax = numero;
        letraNumMax = letra;
        mensaje6 = "el numero mas alto es "+numeroMax+" y su letra es "+ letraNumMax;
    }else if(numeroMax<numero){ 
            numeroMax = numero;
            letraNumMax = letra;
            mensaje6 = "el numero mas alto es "+numeroMax+" y su letra es "+ letraNumMax;
        }

    if(contador==0){
    	numeroMin = numero;
    	letraNumMin = letra;
    	mensaje7 = "el numero mas bajo es " +numeroMin+" y su letra es "+ letraNumMin;
    }else if(numeroMin>numero){
            numeroMin = numero;
    	    letraNumMin = letra;
    	    mensaje7 = "el numero mas bajo es  " +numeroMin+" y su letra es "+ letraNumMin;
        }
    

   contador=contador+1
  }

   acumuladorNumPositivos = acumuladorNumPositivos/contadorDeNumPos;
   
  document.write(mensaje1 + "<br>" + mensaje2 + "<br>" + mensaje3 + "<br>" + mensaje4 + "<br>" + mensaje5+ "<br>" + mensaje6 + "<br>" + mensaje7);
} 