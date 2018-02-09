<?php 
    // header('Content-Type: application/json; charset=utf-8');
    // $name = $_POST['name'];
    // $message = "$name прислал сообщение";
    // $result = mail("p.reshetnev@yandex.ru", "Заказ с сайта", $message);

    // echo json_encode(array(
    //     'status' => $result,
    // ));

    $to = 'p.reshetnev@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратная связь'; //Загаловок сообщения
    $message = 'Имя: '.$_POST['name'].' Почта: '.$_POST['email'].' Сообщение: '.$_POST['massage'];
    header('Content-type: application/json; charset=utf-8 \r\n'); //Кодировка письма
    $result = mail($to, $subject, $message);
    echo json_encode(array(
        'status' => $result,
    ));
?>