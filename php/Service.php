<?php
class Service {
    public static function getTemp($celsius) {
        return ($celsius * 1.8) + 32;
    }
}
?>