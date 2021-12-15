<?php
  class MessageChain {
      private $toId;
      private $fromId;
      private $chain = [];

      function __construct($to, $from){
          $this->toId = $to;
          $this->fromId = $from;
      }

      public function ReturnMessage($mySql){
      
        $sql = "SELECT * FROM message WHERE (to_id = '$this->toId' && from_id = '$this->fromId') || (to_id = '$this->fromId' && from_id = '$this->toId')";
        $result = $mySql->Query($sql);
        
        while($r = $result->fetch_assoc()){
           array_push($this->chain, $r);
        }
        
        
        return $this->chain;
    }

    public function ReturnUserName($mySql){
      $messageArray = [];
      $sql = "SELECT DISTINCT user.firstname, user.lastname, user.id
      FROM message
      RIGHT JOIN user ON message.from_id = user.id || message.to_id = user.id
       WHERE (to_id = '$this->fromId' || from_id = '$this->fromId') && user.id NOT IN ('$this->fromId')";
      $result = $mySql->Query($sql);
      
      while($r = $result->fetch_assoc()){
        
         array_push($messageArray, $r);
      }
      
      
      return $messageArray;
  }
  }
?>

