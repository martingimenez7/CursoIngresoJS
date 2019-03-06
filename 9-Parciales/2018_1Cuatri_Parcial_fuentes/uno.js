function mostrar()
{   
    var largo;
    var ancho;
    var largoX2;
    var anchoX2;
    var perimetro;
    var calculo;

    largo = prompt("Por favor, ingrese el largo del rectangulo");
    ancho = prompt("Por favor, ingrese el ancho del rectangulo");

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    largoX2 = largo * 2;
    anchoX2 = ancho * 2;

    calculo = largoX2 + anchoX2;
    perimetro = calculo;

    alert("el perimetro del rectangulo es: " + perimetro);
}
