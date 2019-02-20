function mostrar()
{
   var habitacion;
   var medioDePago;
   var descuento;
   var resultado;
   var paquete;
   
   habitacion=prompt("ingresar precio de habitacion");
   habitacion=parseInt(habitacion);
   paquete=prompt("tiene algun paquete?")
   medioDePago=prompt("ingresar medio de pago");
   medioDePago=parseInt(medioDePago);

   switch(habitacion,medioDePago,paquete)
   {
      case "targeta visa":
            descuento=10;
        break  
      case "paypal":
           descuento=15;
        break   
      case "mercadoPago":
           descuento=10;
        break
      case "efectivo":
           descuento=20;
            case "soloDesayunos":
                descuento=10;
            break
            case "todoIncluido":
                descuento=15;
            break
                    
        break
       case "todoIncluido":
          case "paypal":
              descuento=10;          
            break  
        break     
      default:
           descuento=5;
        break                            
    }
    descuento=habitacion*descuento/100;
    resultado=habitacion-descuento;
    alert("el precio final es de "+resultado);

}
