<?php
  require('../class/mysql.php');
  require('../class/post.php');
  require('../class/postView.php');

  $mySql = new MySQL();

  if($_GET['action'] == 'create'){
    $post = json_decode(file_get_contents('php://input'));
    $price = $post->price;
    $seller = $post->seller;
    $name = $post->name;
    $description = $post->description;
    $category = $post->category;
    $purchase = $post->purchase;
    $best = $post->best;
  
    $postObject = new Post('null', $price, $name, $description, $best, $seller, $category, $purchase);
    $postObject->SavePost($mySql);
    $response['postCreate'] = true;
    echo json_encode($response);

  }

  if($_GET['action'] == 'showPost'){
      $posts = new PostView();
      $userId = $post = json_decode(file_get_contents('php://input'));
      $response['post'] = $posts->ReturnPost($mySql, $userId);
      echo json_encode($response);
  }
  if($_GET['action'] == 'showOwn'){
    $posts = new PostView();
      $userId = json_decode(file_get_contents('php://input'));
      $response['ownPost'] = $posts->ReturnOwnPost($mySql, $userId);
      echo json_encode($response);
  }
  if($_GET['action'] == 'remove'){
    $product = json_decode(file_get_contents('php://input'));
    $sql = "DELETE FROM products WHERE id = '$product'";
    $mySql->Query($sql);
    $response['delete'] = true;
    echo json_encode($response);

  }

  if($_GET['action'] == 'name'){
    $id = json_decode(file_get_contents('php://input'));
    $sql = "SELECT firstname, lastname FROM user WHERE id ='$id'";
    $row = $mySql->Query($sql)->fetch_assoc();
    $response['sellerName'] = $row;
    echo json_encode($response);
  }
?>