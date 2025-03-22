<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "aishwarya@example.com";  // Your email
    $subject = "New Message from Portfolio Contact Form";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "Message Sent Successfully!";
    } else {
        echo "Error Sending Message!";
    }
}
?>
