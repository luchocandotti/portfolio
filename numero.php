<?php
// Archivo donde se guarda el número
$archivo = 'numero.txt';

// Si es una petición GET, devolver el número actual
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($archivo)) {
        echo file_get_contents($archivo);
    } else {
        echo '000';
    }
    exit;
}

// Si es una petición POST, guardar el nuevo número
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $numero = $_POST['numero'] ?? '000';
    // Validar que sea solo números
    $numero = preg_replace('/[^0-9]/', '', $numero);
    file_put_contents($archivo, $numero);
    echo $numero;
    exit;
}
?>