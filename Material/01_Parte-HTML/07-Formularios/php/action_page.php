<?php
$nombre = filter_input(INPUT_POST, 'nombre');
$apellido = filter_input(INPUT_POST, 'apellido');
$edad = filter_input(INPUT_POST, 'edad');
$hm = filter_input(INPUT_POST, 'hm');
if (!empty($nombre)){
if (!empty($apellido)){
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "kerjox";
// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '
. mysqli_connect_error());
}
else{
$sql = "INSERT INTO data (Nombre, Apellido, Edad, Genero)
values ('$nombre','$apellido','$edad','$hm')";
if ($conn->query($sql)){
echo "Respuesta registrada correctamente";
}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();
}
}
else{
echo "Apellido no puede estar vacio";
die();
}
}
else{
echo "Nombre no puede estar vacio";
die();
}
?>