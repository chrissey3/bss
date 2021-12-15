<?php
  include("../class/mysql.php");
  
  $mySql = new MySQL();


   $userSignup = json_decode(file_get_contents('php://input'));
   $mail = $userSignup->mail;
        $password = $userSignup->password;
        $passwordCheck = $userSignup->passwordCheck;

        if (!empty($mail) && !empty($password)) {
            // Check if passwords are the same
            if ($password == $passwordCheck) {

                // Check if username already exists
                $sql = "SELECT id FROM userlogin WHERE email = '$mail'";
                $result = $mySql->Query($sql);
                
                if($result->num_rows == 0){
                    $firstname = $userSignup->firstname;
                    $lastname = $userSignup->lastname;
                    $mail = $userSignup->mail;
                    $password = password_hash($userSignup->password, PASSWORD_DEFAULT);
                    $city = $userSignup->city;
                    $phone = $userSignup->phone;

                    $sql = "CALL AddNewUser('$mail', '$password', '$city', '$firstname', '$lastname', '$phone')";
                    

                    if ($mySql->Query($sql) === TRUE) {
                        $response['signupSuccess'] = TRUE;
                        echo json_encode($response);
                    } else {
                        $response['signupSuccess'] = FALSE;
                        $response['error'] = "Signup failed. Please try again.";
                        echo json_encode($response);
                    }
                }
            }else{
                $response['signupSuccess'] = false;
                $response['error'] = "Passwords does not match";
                echo json_encode($response);
            }
        }else{$response['signupSuccess'] = false;
        $response['error'] = "Fill in all the fields";
        echo json_encode($response);
        }
?>