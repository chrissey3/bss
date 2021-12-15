<?php
  class PostView {
      private $posts = [];

      

      public function ReturnPost($mySql, $id){
       
        $sql = "SELECT * FROM products WHERE NOT seller_id = '$id'";
        $result = $mySql->Query($sql);
        
        while($r = $result->fetch_assoc()){
           array_push($this->posts, $r);
        }
        
        
        return $this->posts;
    }

    public function ReturnOwnPost($mySql, $id){
       
      $sql = "SELECT * FROM products WHERE seller_id = '$id'";
      $result = $mySql->Query($sql);
      
      while($r = $result->fetch_assoc()){
         array_push($this->posts, $r);
      }
      
      
      return $this->posts;
  }
  }
?>