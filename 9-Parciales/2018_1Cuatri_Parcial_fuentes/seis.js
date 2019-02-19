function mostrar()
{ 
  var horaUno;
  var mensaje;

  hora = laHora.value;

  switch(hora)
  {
  	case (hora):
  	   if (hora>5 && hora<11){      
            mensaje = "es de mañana";
  	    }else{
  	        if (hora>11 && hora<20){
         	    mensaje = "es de tarde";
            }else{
            	if (hora>19 && hora<24){
        	        mensaje = "es de noche";
                }else{
       	            mensaje = "es de noche, a dormir";
                }//3°if
            }//2°if
  	    }//1°if
    break
  }
  alert(mensaje);
}
