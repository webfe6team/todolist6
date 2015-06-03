
<meta charset="utf-8">
<?php include("ConnectDB.php") ?>

<?php 

	$email = $_POST["email"];
	$nickName = $_POST["nickName"];
	$passw = $_POST["passw"];
	$info = $_POST["info"];

	$sql = "INSERT INTO userinfo_tb (email, nickName, passw, info) VALUES ('$email', '$nickName', '$passw', '$info')";
	mysql_query($sql);

	$tip = "[ $nickName ]，恭喜您已注册成功！";
	echo "<script>alert('$tip');location.href='../index.html';</script>";
?>

<?php mysql_close($conn); ?>
