function mostrar()
{
  var marca;
  var peso;
  var temperatura;
  var respuesta="si";
  var contador=0;
  var cantTempPar=0;
  var mensaje1;
  var marcaMasPesado;
  var productoMasPesado;
  var mensaje2;
  var cantBajoCero=0;
  var acumuladorPeso=0;
  var mensaje3;
  var pesoMax=0;
  var mensaje4;
  var pesoMin=0;
  var mensaje5;
  var mensaje3;

   while(respuesta=="si")
   {	
      marca = prompt("Ingrese la marca de su producto");
      while(isNaN(marca)==false)
       {
         marca = prompt("Error, ingrese la marca de su producto");
       }
       
      peso = prompt("Ingrese el peso del producto");
      peso = parseInt(peso);
      while(isNaN(peso)== true || peso<1 || peso>100)
       {
         peso = prompt("Error, ingrese el peso del producto");
         peso = parseInt(peso);
       }
      
      temperatura = prompt("Ingrese la temperatura del producto");
      temperatura = parseInt(temperatura);
      while(isNaN(temperatura)== true || temperatura<-30 || temperatura>30)
       {
         temperatura = prompt("Error, ingrese la temperatura del producto");
         temperatura = parseInt(temperatura);
       }

     acumuladorPeso = acumuladorPeso + peso; 

     respuesta = prompt("desea ingresar otro producto?");
     
        if(temperatura>=0 && temperatura%2==0){
            cantTempPar = cantTempPar+1;
           mensaje1 = "la cantidad de temperatura pares es " + cantTempPar;
        }else if(temperatura<0){
    	  cantBajoCero = cantBajoCero+1;
    	  mensaje3 = "la cantidad de productos bajo 0° es "+cantBajoCero;
        }

       if(contador==0){

          marcaMasPesado = marca;
          productoMasPesado = peso;
          mensaje2 = "la marca del producto mas pesado es "+marca+" y su peso es de "+peso+"kg";
        }else if(productoMasPesado<peso){
              marcaMasPesado = marca;
              productoMasPesado = peso;
               mensaje2 = "la marca del producto mas pesado es "+marca+" y su peso es de "+peso+"kg";
            }

      if(contador==0){
    	  pesoMax = peso;
    	  mensaje4 = "el peso maximo es de "+pesoMax+"kg";
        }else if(pesoMax<peso){
    	      pesoMax = peso;
    	      mensaje4 = "el peso maximo es de "+pesoMax+"kg";
            }
    
      if(contador==0){
    	  pesoMin = peso;
    	  mensaje5="el peso minimo es de "+pesoMin+"kg";
        }else if(pesoMin>peso){
    	   pesoMin = peso;
    	   mensaje5="el peso minimo es de "+pesoMin+"kg";
        }

      contador=contador+1;
    }


    acumuladorPeso = acumuladorPeso / contador;
    mensaje6 = "el promedio del peso de todos los productos es "+ acumuladorPeso+"kg";

    document.write(mensaje1 + "<br>" + mensaje2 + "<br>" +mensaje3  + "<br>" + mensaje6  + "<br>" +  mensaje4 + " y " + mensaje5);
}
