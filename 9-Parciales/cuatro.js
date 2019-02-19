function mostrar()
{
  var cantidad;
  var descuentouno;
  var descuentodos;
  var metododepago;
  var recargo;
  var precioproducto;
  var calculouno;
  var calculodos;
  var preciofinal;
 
  cantidad = prompt("ingrese la cantidad de productos comprados");
  precioproducto = prompt("ingrese el precio de/los productos");
  metododepago= prompt("paga con targeta o efectivo?");
  
  
  calculouno= parseInt(calculouno);  
  calculodos = parseInt(calculodos);  
  recargo = parseInt(recargo);
  preciodelproducto=parseInt(precioproducto);

  if(cantidad>2)
  {
    calculouno=precioproducto*10/100;
    preciofinal=precioproducto+calculouno;
  }
  if (precioproducto>1999)
  {
    calculodos=precioproducto*15/100;
    calculouno=precioproducto*10/100;
    preciofinal=precioproducto-calculodos-calculouno;
  }

  if(metododepago=="targeta")
  {
    recargo=precioproducto*10/100;
    preciofinal=preciofinal+recargo;
  }
  if(metododepago=="efectivo")
  {
    
  }
  alert("el monto final es de " + preciofinal);

  

}

