
<?php 

    function updateInfo($email, $info){
        $sql = "UPDATE userinfo_tb SET info='$info' WHERE email='$email'";
        mysql_query($sql);
    }


	function getInfo($email){
        $sql = "SELECT info FROM userinfo_tb WHERE email='$email'";
        $res = mysql_query($sql);
        $row = mysql_fetch_array($res);
        $info = $row["info"];
        return $info;
    }

    function getNickName($email){
        $sql = "SELECT nickName FROM userinfo_tb WHERE email='$email'";
        $res = mysql_query($sql);
        $row = mysql_fetch_array($res);
        $nickName = $row["nickName"];
        return $nickName;
    }


?>
