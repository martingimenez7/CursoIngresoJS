function mostrar()
{
   var notas;
   var sexo;
   var contador=0;
   var acumulador=0;
   var notaMinima=0;
   var sexoNotaMasBaja;
   var cantidadDeVaronesMayorASeis=0;
   var mensaje1;
   var mensaje2;
   var promedio;
 
  while(contador<5)
  {
    notas = prompt("Ingrese su nota");
    notas = parseInt(notas);
   while(isNaN(notas)== true || notas<0 || notas>10)
    {
      notas = prompt("Error, ingrese su nota");
      notas = parseInt(notas);
    }

    sexo = prompt("Ingrese sexo");
   while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
    {
      sexo = prompt("Error, ingrese sexo");
    }

    acumulador= acumulador + notas;
    
    if(contador==0){

      notaMinima = notas;
      sexoNotaMasBaja = sexo;
      mensaje1 = "La nota mas baja es "+ notaMinima +" y su sexo es "+ sexo;

     }else if(notaMinima>notas){

         notaMinima = notas;
         sexoNotaMasBaja = sexo;
         mensaje1 = "La nota mas baja es "+ notaMinima +" y su sexo es "+ sexo;
      }

    if(notas>6 && sexo=="m"){

      cantidadDeVaronesMayorASeis = cantidadDeVaronesMayorASeis+1;
      mensaje2 = "La cantidad de varones con nota mayor a seis son " + cantidadDeVaronesMayorASeis;
    }else{
      mensaje2 = "";
    }
  
   contador = contador+1;
  }

  acumulador=acumulador/5;
  promedio=acumulador;
  
  alert("El promedio de las notas totales es " + promedio +". "+ mensaje1 +". "+ mensaje2);
}