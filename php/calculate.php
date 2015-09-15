<?php
require 'Service.php';

$celsius = $_GET['temp'];
$temp = 0.00;

if(is_numeric($celsius) && !is_null($celsius)) {
    $temp = Service::getTemp($celsius);
}
    echo (number_format($temp, 2));


?>