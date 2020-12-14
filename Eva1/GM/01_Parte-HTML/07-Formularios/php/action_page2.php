<?php
$nya = filter_input(INPUT_POST, 'NombreApellido');
$password = filter_input(INPUT_POST, 'Password');
$ciudad = filter_input(INPUT_POST, 'Ciudad');
$sexo = filter_input(INPUT_POST, 'Sexo');
$fecha = filter_input(INPUT_POST, 'Fecha');
$aficiones = filter_input(INPUT_POST, 'Aficiones');
$comentario = filter_input(INPUT_POST, 'Comentario');
if (!empty($nya)){
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
$sql = "INSERT INTO data2 (NombreApellido, Password, Ciudad, Sexo, Fecha, Aficiones, Comentario)
values ('$nya','$clave','$ciudad','$sexo','$fecha','$aficiocnes','$comentario')";
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