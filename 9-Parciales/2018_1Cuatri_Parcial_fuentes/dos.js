function mostrar()
{
  var precioefectivo;
  var preciotargeta;
  var recargo;
  var preciofinal;

  precioefectivo =  prompt ( " ingrese el precio del producto " );

  precioefectivo =  parseInt (precioefectivo);

  preciotargeta =  parseInt (preciotargeta);

  recargo = precioefectivo *  10  / 100 ;

  preciotargeta = precioefectivo + recargo;

  preciofinal = preciotargeta;

    alerta ( " el precio del producto en efectivo es " + precioefectivo + " , con tarjeta tiene un recargo del 10%, que seria " + recargo + " , costandole final " + preciofinal);
}

/*{
  var nombre;
  var localidad;

  nombre = elNombre.value;
  localidad = laLocalidad.value;

  alert("usted es " + nombre + " y vive en la localidad de " + localidad);
}
