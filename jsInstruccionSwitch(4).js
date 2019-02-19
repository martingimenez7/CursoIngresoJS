function mostrar()
{
 
 var mesDelAño = document.getElementById('mes').value;
 var mensaje;

	switch(mesDelAño)
	{
		case "Febrero":
		    mensaje = "este mes tiene 28 dias";
	    break

		case "Mayo":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		    mensaje = "este mes tiene 30 dias"; 
		break   

        default:
		    mensaje = "este mes tiene 31 dias";
	    break     
	}

  alert(mensaje);
}