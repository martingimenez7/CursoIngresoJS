function mostrar()
{
  //Genero el número RANDOM entre 1 y 10 

  var mensaje;
  var numerorandom;
   var numerorandom =Math.floor((Math.random() * 10) + 1); 

    if (numerorandom>8&&numerorandom<11)
     {
         mensaje="EXELENTE";
     }

   if (numerorandom>4&&numerorandom<9)
     {
         mensaje= "aprobo";
     }

   if (numerorandom<4)
     {      
        mensaje="vamos, la proxima se puede";
     }

    alert(mensaje);
}//FIN DE LA FUNCIÓN