function mostrar()
{
//tomo la edad  
  var edadm;
  var mensaje;
  
  edadm = edad.value;

  if(edadm>"17"){
  	mensaje="usted es mayor de edad";
  }else{
  	mensaje="usted no es menor de edad";
  }
  alert(mensaje);

}//FIN DE LA FUNCIÓN