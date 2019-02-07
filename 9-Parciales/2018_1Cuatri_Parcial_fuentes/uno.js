
function mostrar()
{   
   var ancho;
   var largo;
   var calculoancho;
   var calculoancho;
   var perimetro;

   ancho = prompt("ingresar el ancho de un rectangulo");    
    ancho = parseInt(ancho);

    largo = prompt("ingrese el largo de un rectangulo");
     largo = parseInt(largo); 

    calculoancho = ancho * 2;
    calculolargo = largo * 2;

    perimetro = calculoancho + calculolargo;
  
   alert("el perimetro del rectangulo es de: " + perimetro);
}
