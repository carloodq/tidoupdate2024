<?php

if (isset($_POST['submit'])) {

  // Recipient email address (replace with your email)
  $to = "your_email@example.com";

  // Get form data
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $surname = filter_var($_POST['surname'], FILTER_SANITIZE_STRING);
  $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
  $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

  // Construct email body
  $body = "Name: $name $surname\n";
  $body .= "Email: $email\n\n";
  $body .= "Subject: $subject\n\n";
  $body .= "Message:\n$message";

  // Set email headers
  $headers = "From: $email \r\n";
  $headers .= "Reply-To: $email \r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you, your message has been sent!";
  } else {
    echo "There was an error sending your message. Please try again later.";
  }

} else {
  // Display error message if form is not submitted
  echo "Please fill out the form and submit.";
}

?>
