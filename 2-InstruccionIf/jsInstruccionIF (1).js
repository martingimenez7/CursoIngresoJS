function mostrar()
{
  var numeroR;
  var contador=0; 

  while(contador<5)
  {
    numeroR= prompt("ingrese un numero");
    numeroR = parseInt(numeroR);
    while(isNaN(numeroR)== true || numeroR<0 || numeroR>10)
    {
      numeroR = prompt("Error, ingrese su nota");
      numeroR = parseInt(numeroR);
    }

   contador = contador+1;

  }

  alert("el numero min es " + Math.min(contador));

}//FIN DE LA FUNCIÓN