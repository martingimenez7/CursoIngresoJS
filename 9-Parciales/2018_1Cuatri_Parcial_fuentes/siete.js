function mostrar()
{
    var nota1 = prompt("Por favor, ingrese su nota");
    var nota2 = prompt("Por favor, ingrese su nota");
    var nota3 = prompt("Por favor, ingrese su nota");
    var nota4 = prompt("Por favor, ingrese su nota");
    var nota5 = prompt("Por favor, ingrese su nota"); 
    /*var sexo1 = prompt("Por favor ingrese su sexo");
    var sexo2 = prompt("Por favor ingrese su sexo");
    var sexo3 = prompt("Por favor ingrese su sexo");
    var sexo4 = prompt("Por favor ingrese su sexo");
    var sexo5 = prompt("Por favor ingrese su sexo");*/

    nota1, nota2, nota3, nota4, nota5 = parseInt(nota1, nota2, nota3, nota4, nota5);
    

   while(nota1<=10&&nota2<=10&&nota3<=10&&nota4<=10&&nota5<=10)
   {
      promedio = nota1 + nota2 + nota3 + nota4 + nota5 / 5;
      alert("el promedio de las notas de los 5 alumnos es " + promedio);
   }
}
