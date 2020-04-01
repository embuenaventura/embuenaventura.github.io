<?php

    $to = "embuenaventura1@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $mobile = $_POST['mobile'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $firstname . " " . $lastname . "\n" . "Contact Number: " . $mobile . "\n" . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $firstname . " " . $lastname . "\n\n" . $_POST['message'];

    $headers = "From: " . $from;
    $headers2 = "From: " . $to;

    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $firstname . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    
?>