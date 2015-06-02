<?php ob_start(); ?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>我的空间</title>

	<script type="text/javascript" src="../static/js/jquery-1.8.2.min.js"></script>

	<link href="../static/css/base.css" rel="stylesheet" type="text/css" />

</head>
<body>

<?php 
	session_start();
	$userLoginFlag = null;
	if(isset($_SESSION["userLoginFlag"])){
		$userLoginFlag = $_SESSION["userLoginFlag"];
	}
	
	if($userLoginFlag != "success"){	
		echo "<script>alert('对不起，您还未登录或者当前页面已过期！');location.href='../index.html';</script>";
		exit();
	}
?>

<?php include("ConnectDB.php") ?>

<?php 
	$email = $_SESSION["email"];

	$sql = "SELECT nickName, info FROM userinfo_tb WHERE email='$email'";
	$res = mysql_query($sql);
	$row = mysql_fetch_array($res);
	$nickName = $row["nickName"];
	$info = $row["info"];

?>

<?php mysql_close($conn); ?>

</body>
</html>


