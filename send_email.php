<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if reCAPTCHA token is set
    if (isset($_POST['recaptcha_token'])) {
        $recaptcha_token = $_POST['recaptcha_token'];
    } else {
        echo "reCAPTCHA token is missing. Please try again.";
        exit;
    }

    // Secret key from Google reCAPTCHA (replace with your actual secret key)
    $secret_key = '6Lc3nbkqAAAAAPosWZoyvzEQi7xb6XXUUt0zGjSc';  // Replace with your secret key from Google reCAPTCHA

    // Verify the reCAPTCHA token by sending a request to Google's API
    $response = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret_key . '&response=' . $recaptcha_token);
    $response_keys = json_decode($response, true);

    // Check if reCAPTCHA validation was successful and if the score is above a threshold
    if (intval($response_keys["success"]) !== 1 || $response_keys["score"] < 0.5) {
        echo "Sorry, we couldn't verify if you are human. Please try again.";
        exit;
    }

    // Sanitize and validate form data
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_SPECIAL_CHARS);
    $message = filter_var(trim($_POST['message']), FILTER_SANITIZE_SPECIAL_CHARS);

    // Check if data is valid
    if (empty($name) || empty($email) || empty($phone) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "There was a problem with your submission. Please complete the form and try again.";
        exit;
    }

    // Business email address
    $to = "skipper@glassbottomedboat.co.uk"; // Replace with your email address
    $subject = "New Contact Form Submission";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Message:\n$message\n";

    // Use PHPMailer for better security and functionality
    require 'vendor/autoload.php';  // Make sure this path is correct for your server
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    // SMTP configuration
    $mail->isSMTP();  // Use SMTP
    $mail->Host = 'SMTP.hostinger.com';  // Hostinger SMTP server
    $mail->SMTPAuth = true;  // Enable SMTP authentication
    $mail->Username = 'skipper@glassbottomedboat.co.uk';  // SMTP authentication email (should be the same as "From")
    $mail->Password = 'MikeAngela85@';  // Replace with your email password or app-specific password
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;  // Use SSL encryption
    $mail->Port = 465;  // SMTP port for SSL

    // Set the sender's email address and name
    $mail->setFrom('skipper@glassbottomedboat.co.uk', $name);  
    $mail->addAddress($to);  // Recipient email address
    $mail->Subject = $subject;
    $mail->Body = $email_content;

    // Send email
    if ($mail->send()) {
        // Display an alert and redirect to the book page after successful submission
        echo "<script>alert('Thank you! We will get back to you as soon as we can.'); window.location.href = 'book.html';</script>";
        exit;
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message. Error: " . $mail->ErrorInfo;
    }
} else {
    echo "There was a problem with your submission. Please try again.";
}

?>