
function mostrar()
{   
  var nombreuno;
  var nombredos;
  var edaduno;
  var edaddos;
  var suma;

   nombreuno =  prompt ( " ingrese su nombre " );
   nombredos =  prompt ( " ingrese su nombre " );
   edaduno =  pronta ( " ingrese su edad " );
   edaduno =  parseInt (edaduno);
   edaddos =  prompt ( " ingrese su edad " );
   edaddos =  parseInt (edaddos);

   suma = edaduno + edaddos;

   alerta ( " ustedes son " + nombreuno + " y " + nombredos + " , sus edades son " + edaduno + " y " + edaddos + " , y la suma de sus edades es " + suma);
}



/*{   
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
