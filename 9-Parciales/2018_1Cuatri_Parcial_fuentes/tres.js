function mostrar()
{

  var precio;
  var descuento;
  var resultado;

  precio = prompt("por favor, ingrese el precio");
  precio = parseInt(precio);

  descuento = prompt("por favor, ingrese el descuento");
  descuento = parseInt(descuento);

  descuento = precio * descuento / 100;

  resultado = precio - descuento;
  
  elPrecioFinal.value = resultado;
}
