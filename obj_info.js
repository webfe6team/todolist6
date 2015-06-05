
任务对象：task
属性：
1. 任务名称(taskName: String)
2. 任务内容描述(taskDescribe: String)
3. 任务类型描述(taskType: String)
4. 是否为星标任务(taskMark: boolen)
5. 创建时间(startTime: Date)
6. 任务状态，是否已完成(taskState: boolen)
7. 完成时间(endTime: Date)

task = {
	"taskName" : "todolist6",
	"taskDescribe" : "360实训todolist小组项目",
	"priority" : "紧急",//任务优先级：普通，紧急，非常紧急
	"startTime" : "2015-6-1",
	"endTime" : ""
}


项目对象：item

1. 项目名称(itemName: String)

2. 项目类型(itemType: String)// 互联网，媒体，……

3. 项目描述(itemDescribe: String)

4. 是否为星标项目(isStar: boolen)

5. 项目是否公开(isPublic: boolen)

6. 项目中当前任务(currentTask: list)

7. 项目中已完成的任务(completedTask: list)

8. 项目中已删除的任务(deletedTask: list)

item = {
	"itemName" : "第一个项目",
	"itemType" : "这是项目类型",
	"itemDescribe" : "这是项目描述",
	"isStar" : false,
	"isPublic" : false,

	"currentTask" : [
		{
			"taskName" : "todolist6",
			"taskDescribe" : "360实训todolist小组项目",
			"priority" : "紧急",
			"startTime" : "2015-6-1",
			"endTime" : ""
		},
		{
			"taskName" : "123",
			"taskDescribe" : "P25第6题",
			"priority" : "紧急",
			"startTime" : "2015-5-26",
			"endTime" : ""
		}
	],

	"completedTask" : [
		{
			"taskName" : "数学作业",
			"taskDescribe" : "P55第6题",
			"priority" : "紧急",
			"startTime" : "2015-6-1",
			"endTime" : "2015-6-2"
		}
	],

	"deletedTask" : [
		{
			"taskName" : "ppt制作",
			"taskDescribe" : "制作关于一季度市场销售状况介绍的ppt",
			"priority" : "紧急",
			"startTime" : "2015-6-1",
			"endTime" : "2015-6-2"
		}
	]
}






info对象：

info = {
	"itemList" : [item1, item2]
}


var item1 = {
	"itemName" : "第一个项目",
	"itemType" : "这是项目类型",
	"itemDescribe" : "这是项目描述",
	"isStar" : false,
	"isPublic" : false,

	"currentTask" : [
		{
			"taskName" : "todolist6",
			"taskDescribe" : "360实训todolist小组项目",
			"priority" : "紧急",
			"startTime" : "2015-6-1",
			"endTime" : ""
		},
		{
			"taskName" : "123",
			"taskDescribe" : "P25第6题",
			"priority" : "紧急",
			"startTime" : "2015-5-26",
			"endTime" : ""
		}
	],
}


var item2 = {
	"itemName" : "第一个项目",
	"itemType" : "这是项目类型",
	"itemDescribe" : "这是项目描述",
	"isStar" : false,
	"isPublic" : false,

	"completedTask" : [
		{
			"taskName" : "数学作业",
			"taskDescribe" : "P55第6题",
			"priority" : "紧急",
			"startTime" : "2015-6-1",
			"endTime" : "2015-6-2"
		}
	],

	"deletedTask" : [
		{
			"taskName" : "ppt制作",
			"taskDescribe" : "制作关于一季度市场销售状况介绍的ppt",
			"priority" : "紧急",
			"startTime" : "2015-6-1",
			"endTime" : "2015-6-2"
		}
	]
}



var info = {
	"itemList" : [item1, item2]
}




