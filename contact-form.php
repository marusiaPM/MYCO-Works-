<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


if($_POST) {
	$contact_name = "";
   $company_name = "";
	$email = "";
   $reason = "";
	$message = "";
	$email_body = "<div>";
	$recipient = "contact@thelondonoffice.com";

   // name 
	if(isset($_POST['contact_name'])) {
		$contact_name = filter_var($_POST['contact_name'], FILTER_SANITIZE_STRING);
		$email_body .= "<div>
								<label><b>Visitor Name:</b></label>&nbsp;<span>".$contact_name."</span>
							</div> </br> </br>";
	}

   // company name
	if(isset($_POST['contact-company-name'])) {
		$company_name = filter_var($_POST['contact-company-name'], FILTER_SANITIZE_STRING);
		$email_body .= "<div>
								<label><b>Visitor Company:</b></label>&nbsp;<span>".$company_name."</span> 
							</div> </br> </br>";
	}

   // email 
	if(isset($_POST['contact-email'])) {
		$email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['contact-email']);
		$email = filter_var($email, FILTER_VALIDATE_EMAIL);
		$email_body .= "<div>
								<label><b>Visitor Email:</b></label>&nbsp;<span>".$email."</span>
							</div> </br> </br>";
	}

   // reason 
	if(isset($_POST['contact-reason'])) {
		$reason = filter_var($_POST['contact-reason'], FILTER_SANITIZE_STRING);
		$email_body .= "<div>
								<label><b>Reason for Contact:</b></label>&nbsp;<span>".$reason."</span>
							</div> </br> </br>";
	}

   //message
	if(isset($_POST['contact-message'])) {
		$message = htmlspecialchars($_POST['contact-message'], FILTER_SANITIZE_STRING);
		$email_body .= "<div>
								<label><b>Visitor Message:</b></label>
								<div>".$message."</div> </br>
							</div>";
	}


   $email_body .= "</div>";

	$subject = $reason;

	$headers  = 'MIME-Version: 1.0' . "\r\n"
	.'Content-type: text/html; charset=utf-8' . "\r\n"
	.'From: ' . $email . "\r\n";

	if(mail($recipient, $subject, $email_body, $headers)) {
		header('Location: thank-you.html');
	} else {
		echo '<p>We are sorry but the email did not go through.</p>';
	}

} else {
   echo '<p>Something went wrong</p>';
}
?>
 