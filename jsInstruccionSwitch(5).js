function mostrar()
{
var laHora = document.getElementById('hora').value;
var mensaje;
    
    switch(laHora)
    {
    	case "7":
    	case "8":
    	case "9":
    	case "10":
    	case "11":
    	    mensaje = "es de mañana";
    	break

    	default:
    	     mensaje = "no es de mañana"
    	break
    }	

    alert(mensaje);
	



}//FIN DE LA FUNCIÓN