<?php
  class Post{
      private $id;
      private $img_path;
      private $price;
      private $name;
      private $description;
      private $expiration_date;
      private $seller_id;
      private $food_category;
      private $date_of_purchase;

      function __construct($img_path, $price, $name, $description, $expiration_date, $seller_id, $food_category, $date_of_purchase){
       
        $this->img_path = $img_path;
        $this->price = $price;
        $this->name = $name;
        $this->description = $description;
        $this->expiration_date = $expiration_date;
        $this->seller_id = $seller_id;
        $this->food_category = $food_category;
        $this->date_of_purchase = $date_of_purchase; 
      }

      public function GetPostArray(){
        $userArray = ['id'=>$this->id, 'img_path'=>$this->img_path, 'price'=>$this->price, 'name'=>$this->name, 'description'=>$this->description, 'expiration_date'=>$this->expiration_date, 'seller_id'=>$this->seller_id, 'food_category'=>$this->food_category, 'date_of_purchase'=>$this->date_of_purchase];
        return $userArray;
    }
      public function SavePost($mySql){
        //$sql = "INSERT INTO products (img_path, price, name, description, expiration_date, seller_id, food_category, date_of_purchase) VALUE ('$this->img_path', '$this->price', '$this->name', '$this->description', '$this->expiration_date', '$this->seller_id', '$this->food_category', '$this->date_of_purchase')";
        $sql = "INSERT INTO products (price, name, description, expiration_date, seller_id, food_category, date_of_purchase) VALUE ('$this->price', '$this->name', '$this->description', '$this->expiration_date', '$this->seller_id', '$this->food_category', '$this->date_of_purchase')";
        $mySql->Query($sql);
      }

     
     
  }
?>