function mostrar()
{
  var precioefectivo;
  var preciotargeta;
  var recargo;
  var preciofinal;

  precioefectivo = prompt("ingrese el precio del producto");
 
  precioefectivo = parseInt(precioefectivo);

  preciotargeta = parseInt(preciotargeta);
 
  recargo = precioefectivo * 10 /100;

  preciotargeta = precioefectivo + recargo;

  preciofinal = preciotargeta;

    alert("el precio de producto en efectivo es "+precioefectivo+", con tarjeta tiene un recargo del 10%, que seria "+recargo+", costandole final "+preciofinal);
}

