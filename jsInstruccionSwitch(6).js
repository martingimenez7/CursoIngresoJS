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

    	case "12":
    	case "13":
    	case "14":
    	case "15":
    	case "16":
    	case "17":
    	case "18":
    	case "19":
    	    mensaje = "es de tarde";
    	break
    	
    	case "20":
    	case "21":
    	case "22":
    	case "23":
    	case "24":
    	case "0":
    	case "1":
    	case "2":
    	case "3":
    	case "4":
    	case "5":
    	case "6":
    	    mensaje = "es de noche";
    	break  

    	default:
    	    mensaje = "la hora no existe";
    	break          
    }
alert(mensaje);
}//FIN DE LA FUNCIÓN