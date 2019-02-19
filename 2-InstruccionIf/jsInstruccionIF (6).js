function mostrar()
{
//tomo la edad  

 var edadm;
  var mensaje;

  edadm=edad.value;

  if (edadm>17)
    {
       mensaje="usted es un mayor";
    }else
    {
    	mensaje="usted es un adolescente";
    } 
     if(edadm<12)
     {
     	mensaje="usted es un niño";
     }
     alert(mensaje);



}//FIN DE LA FUNCIÓN