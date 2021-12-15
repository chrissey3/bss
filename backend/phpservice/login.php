<?php

  
  require ('../class/user.php');
  
  require ('../class/mysql.php');

  $mySql = new MySQL();
  $userLogin = json_decode(file_get_contents('php://input'));

  if($userLogin->mail != null){
     $mail = $userLogin->mail;

  if($userLogin->password != null){
  $pass = $userLogin->password;


$sql = "SELECT * FROM user WHERE email = '$mail'";
  $row = $mySql->Query($sql);
  if($row->num_rows > 0){
    
    
  $user = $row->fetch_object('User');
  if(password_verify($pass, $user->GetPass())){
    $response['login'] = TRUE;
    $response['user'] = $user->GetUserArray();
   
    echo json_encode($response);
    exit;
      
  }else{
    $response['login'] = FALSE;
    $response['error'] = "wrong password";
    echo json_encode($response);
    exit;
  }
}else{
  $response['login'] = FALSE;
    $response['error'] = "wrong email";
    echo json_encode($response);
    exit;
  
}


}else{
  $response['login'] = FALSE;
  $response['error'] = "write your password";
  echo json_encode($response);
  exit;
}

}else{
  $response['login'] = FALSE;
    $response['error'] = "Write your mail";
    echo json_encode($response);
    exit;
}




  
  
?>