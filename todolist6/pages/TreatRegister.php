
<meta charset="utf-8">
<?php include("ConnectDB.php") ?>

<?php 

	$email = $_POST["email"];
	$nickName = $_POST["nickName"];
	$passw = $_POST["passw"];

	$sql = "INSERT INTO userinfo_tb (email, nickName, passw) VALUES ('$email', '$nickName','$passw')";
	mysql_query($sql);

	$tip = "[ $nickName ]，恭喜您已注册成功！";
	echo "<script>alert('$tip');location.href='../index.html';</script>";
?>

<?php mysql_close($conn); ?>
