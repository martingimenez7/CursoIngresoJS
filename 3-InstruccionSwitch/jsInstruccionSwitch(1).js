function mostrar()
{
   var habitacion;
   var medioDePago;
   var descuento;
   var resultado;
   var paquete;
   
   habitacion=prompt("ingresar precio de habitacion");

   paquete=prompt("tiene algun paquete?")

   medioDePago=prompt("ingresar medio de pago");


   switch(medioDePago)
   {
       case "targeta visa":
            descuento = 10;
        break

        case "paypal":
            descuento = 15;
        break
 
        case "mercadopago":
            descuento = 10;
        break

        case "efectivo":
            descuento = 20;
        break

        default :
            descuento = 5;
        break                            
   }
   
    habitacion=parseInt(habitacion);
    descuento=parseInt(descuento);

    descuento=habitacion*descuento/100;
    resultado=habitacion-descuento;

    alert("el precio final es de "+resultado);
}//FIN DE LA FUNCIÓN 