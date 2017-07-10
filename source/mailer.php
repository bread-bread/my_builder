<?php 
    header('Content-Type: application/json; charset=utf-8');
    $name = $_POST['name'];
    $message = "$name прислал сообщение";
    $result = mail("p.reshetnev@yandex.ru", "Заказ с сайта", $message);

    echo json_encode(array(
        'status' => $result,
    ));
    ?>