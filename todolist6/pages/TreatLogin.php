<?php ob_start(); ?>
<meta charset="utf-8">

<?php include("ConnectDB.php") ?>

<?php 

	$email = $_POST["email"];
	$thisPassw = $_POST["passw"];

	$sql = "SELECT passw FROM userinfo_tb WHERE email='$email'";
	$res = mysql_query($sql);

	if(!mysql_affected_rows()){
		echo "<script>alert('登录失败！请检查帐号和密码是否正确');location.href='../index.html';</script>";
		exit();
	}

	$row = mysql_fetch_array($res);
	$passw = $row["passw"];

	if($thisPassw == $passw){
		session_start();
		$_SESSION["userLoginFlag"] = "success";
		$_SESSION["email"] = $email;
		$url = "user.php";
		header("Location: $url"); 
	}else{
		echo "<script>alert('登录失败！请检查帐号和密码是否正确');location.href='../index.html';</script>";
	}
	
?>

<?php mysql_close($conn); ?>



