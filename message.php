<?php
  $name = htmlspecialchars($_POST['nameipt']);
  $email = htmlspecialchars($_POST['emailipt']);
  $message = htmlspecialchars($_POST['messageipt']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "ludadev9@gmail.com";
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\n\nMessage:\n$message\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Your message has been sent";
      }else{
         echo "Sorry, failed to send your message!";
      }
    }else{
      echo "Enter a valid email address!";
    }
  }else{
    echo "Email and message field is required!";
  }
?>
