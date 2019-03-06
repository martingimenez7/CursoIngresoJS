function mostrar()
{ 
  var hora;
  var mensaje;

  hora = laHora.value;

  switch(hora)
  {
    case (hora):
      if(hora>5 && hora<12){

        mensaje = "es de mañana";

      }else if (hora>11 && hora<20){

          mensaje = "es de tarde";

        }else if(hora>19 && hora<24){
        
            mensaje = "es de noche, a dormir";
        
          }else{

              mensaje= " es de noche";

            }
    break
            
    default: 
      mensaje = "esta hora no es valida";
    break          
  }
  alert(mensaje);
}