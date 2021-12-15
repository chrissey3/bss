<?php

  
  require ('../class/user.php');
  require ('../class/mysql.php');

  $mySql = new MySQL();
  $userUpdate = json_decode(file_get_contents('php://input'));
  $password = password_hash($userUpdate->password, PASSWORD_DEFAULT);
  if($_GET['action'] == 'user'){


    $sql = "UPDATE user SET email = '$userUpdate->mail', password = '$password', city_name = '$userUpdate->city', firstname = '$userUpdate->firstname', lastname = '$userUpdate->lastname', phone_number = '$userUpdate->phone' WHERE  id = '$userUpdate->id'";
    $row = $mySql->Query($sql);
    $result = $row->fetch_assoc();
    $response['userData'] = $result;
    echo json_encode($response);
  }




  
  
?>