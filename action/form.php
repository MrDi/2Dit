<?php
$myemail = "dm@2dit.ru";
$user_name = htmlspecialchars($_POST["name"]);
$user_phone = htmlspecialchars($_POST["phone_email"]);
$message = htmlspecialchars($_POST["message"]);

$tema ="Заявка с сайта 2dit.ru";
$message_to_myemail = "Здравствуйте! <br>
Вашей контактной формой было отправлено сообщение! <br>
Имя отправителя: $user_name <br> 
Телефон или email: $user_phone <br>
Сообщение: $message";
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $myemail \r\n";
//$headers .= "Cc: studio.2dit@yandex.ru\r\n";
/* Отправляем сообщение, используя mail() функцию */

if($user_phone!=''){
    mail($myemail, $tema, $message_to_myemail, $headers);
}



//echo "Привет " . $user_name . "!" . "Мы Вам перезвоним по номеру: " . $user_phone;


?>