<html>
<head>
<script>
function ver_hora()
{
	var miHora = new date();
	var horas = miHora.getHours().toStringt();
	var minutos = miHora.getMinutes().toStringt();
    
    if(minutos.length==1) minutos = "0" + minutos;

    var segundos = miHora.getSeconds().toStringt();
     
    if (segundos.length==1) segundos = "0" + segundos;

    document.forms[0].miReloj.value = horas + " : " + minutos + " : " + segundos;
}
</script>
</head>
<body>
<form>
<p align = "center">
<input type = "text" size = "10" name = "miReloj">
</p>
</form>
<script>
 var r = setInterval("ver_hora()",500);
 <script>
 <body>
<html>