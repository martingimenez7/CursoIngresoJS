function mostrar()
{
   var precio;
   var descuento;
   var calculo;
   var precioFinal;

   precio = prompt("Por favor, ingrese el precio del producto");
   descuento = prompt("Por favor, ingrese su descuento");

   precio = parseInt(precio);
   descuento = parseInt(descuento);

   calculo = precio * descuento / 100;
   resultado = precio - calculo;
   
   precioFinal = resultado;

   elPrecioFinal.value = precioFinal;
}
