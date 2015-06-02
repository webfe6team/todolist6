
<?php 

$host = "w.rdc.sae.sina.com.cn:3307";
$name = "kjnx3j4jyn";
$password = "25lmkx3w3zxx0z3lkw1ymx3wj14ijik1x1yz2z25";
$dbname = "app_todolist6";

$conn = mysql_connect($host, $name, $password);
if (!$conn){
  	die("Connect Fail");
}

mysql_select_db($dbname, $conn);


?>

