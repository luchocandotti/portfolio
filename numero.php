<?php
$archivo = 'numero.txt';

// Si no existe, lo crea en 0
if (!file_exists($archivo)) {
    file_put_contents($archivo, '0');
}

// Leer número actual
$numeroActual = (int) file_get_contents($archivo);

// Sumar 1
$nuevoNumero = $numeroActual + 1;

// Guardar
file_put_contents($archivo, (string)$nuevoNumero);

// Devolver número actualizado
echo $nuevoNumero;
?>