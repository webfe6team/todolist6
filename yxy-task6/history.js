$(document).ready(function(){
      $.ajax({
        type: "post",
        url: "TreatGetInfo.php",
        data: {email: email},
        dataType: "text",
        success: function(data) {
          var list = JSON.parse(data);
          //插入已完成任务
          //alert(list);
          for(var i = 0;i<list.completedTask.length;i++){
            var taskName = list.completedTask[i].taskName,
                taskDescribe = list.completedTask[i].taskDescribe,
                taskType = list.completedTask[i].taskType,
                taskMark = list.completedTask[i].taskMark,
                startTime = list.completedTask[i].startTime,
                taskState = list.completedTask[i].taskState,
                endTime = list.completedTask[i].endTime;
            var newCard = $(".card").clone();
            newCard.find(".taskName") = text("任务名称："+taskName);
            newCard.find(".taskType") = text("任务类型："+taskType);
            newCard.find(".taskDescribe") = text("任务描述："+taskDescribe);
            newCard.find(".startTime") = text("开始时间："+startTime);
            newCard.find(".endTime") = text("结束时间"+endTime);
            $("#yxy-completedTask").append(newCard);
          }
          //插入已删除任务
          for(var j = 0;j < list.deletedTask.length;j++){
            var taskName = list.deletedTask[i].taskName,
                taskDescribe = list.deletedTask[i].taskDescribe,
                taskType = list.deletedTask[i].taskType,
                taskMark = list.deletedTask[i].taskMark,
                startTime = list.deletedTask[i].startTime,
                taskState = list.deletedTask[i].taskState,
                endTime = list.deletedTask[i].endTime;
            var newCard = $(".card").clone.show();
            newCard.find(".taskName") = text("任务名称："+taskName);
            newCard.find(".taskType") = text("任务类型："+taskType);
            newCard.find(".taskDescribe") = text("任务描述："+taskDescribe);
            newCard.find(".startTime") = text("开始时间："+startTime);
            newCard.find(".endTime") = text("结束时间"+endTime);
            $("#yxy-deletedTask").append(newCard);
          }
            //$("#task").html(data);
            //alert(JSON.parse(data).currentTask[0].taskName);
        },
        error: function(data) {
            alert("数据请求失败！抱歉！");
        }
    });
    });