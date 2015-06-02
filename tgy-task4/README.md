###任务4完成  
完成个人任务管理，项目任务统计，提供tgyBase.js封装函数，可参考  

#####php需要接口  
1. getTaskSum():获取条数  
  需要返回：本人近期任务总数，已完成任务数量，待完成任务数量  
2. getTaskDetail():获取任务细节  
  前台传递参数：day = 1 表示今天计划，2表示昨天计划  
  后台返回参数：taskOperator 本条任务操作  taskText 任务信息  taskCreateTime 任务创建时间  
3. insertTask():插入新任务  
  前台传递参数：taskOperator 本条任务操作  taskText 任务信息  taskCreateTime
  后台返回参数：boolean 是否插入成功   

####js对外提供的全局变量
   变量名称：window.tgy
   提供给`王建兵`大大的接口：window.tgy.insertTask(value1, value2, state)  为任务聊表插入节点，需要传入参数：  
   value1 完成任务的内容   
   value2 当前时间  例如: 22:32   
   state  操作名称，默认：完成任务