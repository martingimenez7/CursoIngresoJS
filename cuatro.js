function mostrar()
{
   var importeUno;
   var importeDos;
   var importeTres;
   var importeCuatro;
   var suma;
   var resultado;
   var descuentoUno;
   var descuentoDos;
   var aumento;
   var precioFinal;
   var mensaje;
   var mensajeM;

   importeUno=prompt("ingrese el primer numero");
   importeUno=parseInt(importeUno);
   importeDos=prompt("ingrese el segundo numero");
   importeDos=parseInt(importeDos);
   importeTres=prompt("ingrese el tercer numero");
   importeTres=parseInt(importeTres);
   importeCuatro=prompt("ingrese el cuarto numero");
   importeCuatro=parseInt(importeCuatro);

   suma = importeUno + importeDos + importeTres + importeCuatro;
   resultado = suma

   if(resultado>100){
   	 mensajeM = "el numero mayor es " + >(importeUno,importeCuatro,importeTres,importeDos);
   	 descuentoUno = resultado *10 /100;
   	 precioFinal = resultado - descuentoUno;
   	 mensaje = "el precio final es de " + precioFinal + " y tuvo un descuento del " + descuentoUno;
   }else{
        if(suma>50){
        	mensajeM = "el numero mayor es " 
        	descuentoDos = resultado*5/100;
        	precioFinal = resultado-descuentoDos;
        	mensaje = "el precio final es de " + precioFinal + " y tuvo un descuento del " + descuentoDos;
        }else{
        	mensajeM = "el numero mayor es " 
        	aumento = resultado*15/100;
        	precioFinal = resultado+aumento;
        	mensaje = "el precio final es de " + precioFinal + " y tuvo un aumento del " + aumento;
        }//suma<50
    }//suma>100

    alert(mensajeM);
    alert(mensaje);
}
