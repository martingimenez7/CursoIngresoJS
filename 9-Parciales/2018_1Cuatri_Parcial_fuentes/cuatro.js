function mostrar()
{
  var cantidad;
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
  alert( " el monto final es de "  + preciofinal);

}