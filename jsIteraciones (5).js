function mostrar()
{

var sexo = prompt("ingrese f ó m .");

  while(sexo=="f"||sexo=="m")
   {
   	 alert("su sexo es " + sexo);
   	 break
   }


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN