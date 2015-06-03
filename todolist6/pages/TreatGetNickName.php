
<?php include("ConnectDB.php") ?>
<?php include("SQLutils.php") ?>

<?php
    
    $email = $_POST["email"];
    
	$info = getNickName($email);
    echo $info;
?>

<?php mysql_close($conn); ?>