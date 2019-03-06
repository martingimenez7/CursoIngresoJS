function mostrar()
{
   var planeta;
   var mensaje;

   planeta = prompt("ingrese el nombre de un planeta");

   switch (planeta)
   {
     case "la tierra":
         mensaje = "aca vivimos";
      break

      case "mercurio":
      case "venus":
         mensaje = "aca hace mas calor";
      break

      case "saturno":
      case "jupiter":
      case "marte":
      case "urano":
      case "neptuno":
         mensaje = "aca hace mas frio";
      break 
      
      default :
         mensaje = "este planeta no existe"
      break               
   }

   alert(mensaje);
}