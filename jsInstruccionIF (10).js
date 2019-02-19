function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
    
    var mensaje;
    var numerorandom;
    var numerorandom =Math.floor((Math.random() * 11) + 1); 
   
    if (numerorandom>8&&numerorandom<11)
     {
         mensaje="EXELENTE";
     }else
        if(numerorandom>4&&numerorandom<9)
       {
          mensaje= "aprobo";
       }else
       {     
        mensaje="vamos, la proxima se puede";
       }

     
   
    alert(mensaje);

}//FIN DE LA FUNCIÓN