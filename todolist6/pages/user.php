<?php ob_start(); ?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>我的空间</title>

	<script type="text/javascript" src="../static/js/jquery-1.8.2.min.js"></script>

	<link href="../static/css/base.css" rel="stylesheet" type="text/css" />
    
    <style type="text/css">

	.show {
		width: 500px;
		min-height: 100px;
		background: #eee;
		margin-top: 10px;
	}

	</style>
    
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
    
    
    <button id="update">提交</button>
    

    <div id="email" class="show"></div>
    <div id="nickName" class="show"></div>
    <div id="task" class="show"></div>

<script type="text/javascript" >
    
    
    /*
    	显示数据
    */
    
    var email = "<?php echo $_SESSION["email"]; ?>";
    
    // 显示email
    $("#email").html(email);
    
    // 显示nickName
    $.ajax({
        type: "post",
        url: "TreatGetNickName.php",
        data: {email: email},
        dataType: "text",
        success: function(data) {
            $("#nickName").html(data);
        },
        error: function(data) {
           $("#nickName").html("失败");
        }
    });
    
    // 显示info
	$.ajax({
        type: "post",
        url: "TreatGetInfo.php",
        data: {email: email},
        dataType: "text",
        success: function(data) {
            $("#task").html(data);
            alert(JSON.parse(data).currentTask[0].taskName);
        },
        error: function(data) {
            $("#task").html("失败");
        }
    });
    
    /*
    	更改info
    */
    
    var newInfoObj = {
        "currentTask" : [
            {
                "taskName" : "todolist6",
                "taskDescribe" : "360实训todolist小组项目",
                "taskType" : "互联网任务",
                "taskMark" : true,
                "startTime" : "2015-6-1",
                "taskState" : false,
                "endTime" : ""
            },
            {
                "taskName" : "123",
                "taskDescribe" : "P25第6题",
                "taskType" : "其它任务",
                "taskMark" : false,
                "startTime" : "2015-5-26",
                "taskState" : false,
                "endTime" : ""
            }
        ],
    
        "completedTask" : [
            {
                "taskName" : "数学作业",
                "taskDescribe" : "P55第6题",
                "taskType" : "其它任务",
                "taskMark" : true,
                "startTime" : "2015-6-1",
                "taskState" : true,
                "endTime" : "2015-6-2"
            }
        ],
        
        "deletedTask" : [
            {
                "taskName" : "ppt制作",
                "taskDescribe" : "制作关于一季度市场销售状况介绍的ppt",
                "taskType" : "媒体任务",
                "taskMark" : true,
                "startTime" : "2015-6-1",
                "taskState" : true,
                "endTime" : "2015-6-2"
            }
		]
    }
    
    $("#update").click(function(){
        $.ajax({
            type: "post",
            url: "TreatUpdateInfo.php",     
            data: {email: email, info: JSON.stringify(newInfoObj)},  
            success: function(data) {
                alert(data.trim());
            },
            error: function(data) {
                alert("失败");
            }
        })
    });
    
    
</script>

</body>
</html>


