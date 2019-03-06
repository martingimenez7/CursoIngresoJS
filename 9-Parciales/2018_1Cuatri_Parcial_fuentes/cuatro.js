function mostrar()
{
   var numeroUno;
   var numeroDos;
   var mensaje;
   var suma;

   numeroUno = prompt("ingrese un numero");
   numeroDos = prompt("ingrese otro numero");   
   
   if(numeroUno==numeroDos)
   {
    mensaje= numeroUno+numeroDos; 
   }else if(numeroUno>numeroDos){
         mensaje = numeroUno - numeroDos;
      }else{
          mensaje = numeroUno + numeroDos;
        }

   numeroUno = parseInt(numeroUno);
   numeroDos = parseInt(numeroDos);
   suma = numeroUno + numeroDos;

    if(suma>10){
       mensaje= "la suma es " + suma + " y supero el 10";
    }  
   numeroUno = parseInt(numeroUno);
   numeroDos = parseInt(numeroDos);
   
   alert(mensaje);
}