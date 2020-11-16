<?php
include("conexion.php");


$name = trim($_POST['name']);
$actprinc = trim($_POST['actprinc']);
$partpr = trim($_POST['partpr']);
$actsec = trim($_POST['actsec']);
$partsec = trim($_POST['partsec']);
$personal = trim($_POST['personal']);
$activos = trim($_POST['activos']);
$activosText = trim($_POST['activosText']);
$dem = trim($_POST['dem']);
$riesgos = trim($_POST['riesgos']);
$fechaRegistro = date("d/m/y");


$insertar = "INSERT INTO empresas(nombre,actPrincipal,participacionActPrincipal,actSecundaria,participacionActSecundaria,personalEmpleado,activos,activosDescripcion,demanda,riesgos,fechaRegistro) VALUES ('$name','$actprinc','$partpr','$actsec','$partsec','$personal','$activos','$activosText','$dem','$riesgos','$fechaRegistro')";

$query = mysqli_query($conectar, $insertar);

if($query){
    echo "correcto";
}else{
    echo "incorrecto";
}


?>