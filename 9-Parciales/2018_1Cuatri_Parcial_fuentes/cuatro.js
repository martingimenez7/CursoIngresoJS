function mostrar()
{
   var numeroUno;
   var numeroDos;
   var mensaje;
   var resultado;

   numeroUno = prompt("ingrese el primer numero");
   numeroUno = parseInt(numeroUno);
   numeroDos = prompt("ingrese el segundo numero");
   numeroDos = parseInt(numeroDos);

   if(numeroUno==numeroDos){

      mensaje = numeroUno + numeroDos;
   }else{

      if(numeroUno>numeroDos){

        mensaje = numeroUno - numeroDos;
      }else{

        if(numeroUno<numeroDos){

          mensaje = numeroUno + numeroDos;
        }
      }
    }
    resultado = numeroUno + numeroDos;
   if(resultado>10){

    mensaje = "la suma es "+resultado+" y supero el diez";
   }

   alert(mensaje);
}

/* var cantidad;
  var metododepago;
  var recargo;
  var precioproducto;
  var calculouno;
  var calculodos;
  var preciofinal;

  cantidad =  prompt ( " ingrese la cantidad de productos comprados " );
  precioproducto =  prompt ( " ingrese el precio de / los productos " );
  metododepago =  prompt ( " paga con targeta o efectivo? " );

  if (cantidad > 2 )
{
    if (cantidad > 2 ) 
      {
     calculouno =  parseInt (calculouno);
     precioproducto = parseInt(precioproducto); 
     calculouno = precioproducto * 10 / 100 ;
     preciofinal = precioproducto - calculouno;
   }else
    {
       preciofinal;
    }

   if (precioproducto > 1999 )
    {
     calculodos = parseInt(calculodos); 
     precioproducto = parseInt(precioproducto); 
     calculodos = precioproducto * 15 / 100 ;
     preciofinal = precioproducto - calculodos;
        }else
         {
           preciofinal;
         }
  }       
  
  if (metododepago == " targeta " )
  {
     recargo = parseInt (recargo);
     preciodelproducto = parseInt (precioproducto);
     recargo = precioproducto * 10 / 100 ;
     preciofinal = preciofinal + recargo;
  }
  if (metododepago == " efectivo " )
  {
    preciofinal;
  }
  alert( " el monto final es de "  + preciofinal);*/
