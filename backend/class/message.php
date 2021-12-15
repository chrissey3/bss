<?php
  class Message {
      private $message;
      private $from;
      private $to;
      
      function __construct($message, $to, $from){
        $this->message = $message;
        $this->from = $from;
        $this->to = $to;
      }
      
     

      public function SaveMessage($mySql){
       $sql = "INSERT INTO message (from_id, to_id, the_message) VALUE ('$this->from', '$this->to', '$this->message')";
       $mySql->Query($sql);
 
      }

      

  }
     
?>