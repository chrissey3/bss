<?php
  
  require('../class/mysql.php');
  require('../class/message.php');
  require('../class/messageChain.php');

  $mySql = new MySQL();

  if($_GET['action'] == 'send'){
  $messageFetch = json_decode(file_get_contents('php://input'));

  $theMessage = $messageFetch->message;
  $to = $messageFetch->to;
  $from = $messageFetch->from;

  
  $messageObject = new Message($theMessage, $to, $from);

 

  
  $messageObject->SaveMessage($mySql);
    $response['save'] = true;
    echo json_encode($response);
  }

  if($_GET['action'] == 'show'){
     $user = json_decode(file_get_contents('php://input'));
     $to = $user->to;
     $from = $user->from;
     

     $chainObject = new MessageChain($to, $from);
     $response['message'] = $chainObject->ReturnMessage($mySql);
     echo json_encode($response);

     
  }

  if($_GET['action'] == 'init'){
    $user = json_decode(file_get_contents('php://input'));
    $from = $user->from;
    

    $chainObject = new MessageChain(null, $from);
    $response['userCon'] = $chainObject->ReturnUserName($mySql);
    echo json_encode($response);

    
 }

 if($_GET['action'] == 'new'){
   $id = json_decode(file_get_contents('php://input'));
   $sql = "SELECT * FROM user WHERE id = '$id'";
   $row = $mySql->Query($sql);
   $result = $row->fetch_assoc();
   $response['seller'] = $result;
   echo json_encode($response);
 }


    
    
 



  
?>