
<?php include("ConnectDB.php") ?>
<?php include("SQLutils.php") ?>

<?php
    
    $email = $_POST["email"];
	$info = $_POST["info"];
    
	updateInfo($email, $info);
    echo "success";
?>

<?php mysql_close($conn); ?>