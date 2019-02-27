function mostrar()
{ 
  var contador=0;
  var acumulador=0;
  var promedio;
  var nota;
  var sexoNotaMasBaja;
  var varonesMayor;
  var notaMinima;
  var cantidadVaronesMayoresASeis;

   while(contador<0)
   {
     nota = prompt("ingrese nota");
     nota = parseInt(nota);
     while(isNaN(nota)==true || nota<0 || nota>10)
     {
      nota = prompt("Error, ingrese nota");
      nota = parseInt(nota);
     }

     sexo = prompt("ingrese sexo");
     while(isNaN(sexo)==false || sexo!="f" || sexo!="m")
     {
      sexo = prompt("ingrese sexo");
     }

     acumulador = acumulador + nota;
     if(contador==0){

      notaMinima = nota;
      sexoNotaMasBaja = sexo;

     }else if(notaMinima>nota){

       notaMinima = nota;
       sexoNotaMasBaja = sexo;
      }

      if(nota>5 && sexo=="m"){

        cantidadVaronesMayoresASeis = cantidadVaronesMayoresASeis+1;
      }

      promedio = nota/5;
      alert("el promedio es " + promedio);

      contador = contador+1;
   }
}
