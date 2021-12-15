<?php
  class User {
      private $id;
      private $email;
      private $password;
      private $city_name;
      private $firstname;
      private $lastname;
      private $phone_number;
      private $profile_pic_path;


     public function GetId(){
        return $this->id;
    }
    public function GetMail(){
        return $this->email;
    }
     public function GetPass(){
         return $this->password;
     }
     public function GetCity(){
        return $this->city_name;
    }
    public function GetFirstname(){
        return $this->firstname;
    }
    public function GetLastname(){
        return $this->lastname;
    }
    public function GetPhone(){
        return $this->phone_number;
    }
    public function GetPic(){
        return $this->profile_pic_path;
    }
    public function GetUserArray(){
        $userArray = ['id'=>$this->id, 'email'=>$this->email, 'password'=>$this->password, 'city_name'=>$this->city_name, 'firstname'=>$this->firstname, 'lastname'=>$this->lastname, 'phone_number'=>$this->phone_number, 'profile_pic_path'=>$this->profile_pic_path];
        return $userArray;
    }
    public function JsonEncode(){
        $user = json_encode($this->GetUserArray());
        return $user;
    }

    }
?>