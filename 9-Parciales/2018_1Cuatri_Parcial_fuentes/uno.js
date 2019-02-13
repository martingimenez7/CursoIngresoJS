
function mostrar()
{   
  var nombreuno;
  var nombredos;
  var edaduno;
  var edaddos;
  var suma; 

   nombreuno = prompt("ingrese su nombre");
   nombredos = prompt("ingrese su nombre");
   edaduno = prompt("ingrese su edad");
   edaduno = parseInt(edaduno);
   edaddos = prompt("ingrese su edad");
   edaddos = parseInt(edaddos);

   suma = edaduno + edaddos;

   alert("ustedes son "+ nombreuno +" y "+ nombredos +" ,sus edades son "+ edaduno +" y "+ edaddos +" , y la suma de sus edades es "+ suma);
}
