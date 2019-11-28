<?php
if (!empty($_POST)){
   $first_name = $_POST['first name'];
   $last_name = $_POST['last name'];
   $email = $_POST['email'];
   $phone = $_POST['phone'];

   echo <p> . $first_name . </p>;
   echo <p> . $last_name . </p>;
   echo <p> . $email . </p>;
   echo <p> . $phone . </p>;
}
?>