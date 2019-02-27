function mostrar()
{
    var numero
    var letra
    var contador=0;
     
     while(contador<0)
     {
        numero = prompt("ingrese numero");
        numero = parseInt(numero);
        while(isNaN(numero)==true || numero<-100 || numero>100)
        {
          numero = prompt("Error, ingrese numero");
          numero = parseInt(numero);
        }
     
        letra = prompt("ingrese letra");
        while(isNaN(letra)==false)
        {
           letra = prompt("error, ingrese letra");
        }
      contador=contado+1;
    }

 
}
