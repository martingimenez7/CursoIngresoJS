function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

    var random;
   
   random = prompt("ingresar la nota");
   random = parseInt(random);

    
    if (random>8&&random<11)
     {
         alert("EXELENTE");
     }
    
   if (random>4&&random<9)
     {
         alert("aprobo");
     }

   if (random<4)
     {    	
         alert("vamos, la proxima se puede");
     }
    

}//FIN DE LA FUNCIÓN