
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
	"taskType" : "互联网项目",
	"taskMark" : true,
	"startTime" : "2015-6-1",
	"taskState" : false,
	"endTime" : ""
}


信息对象：info

1. 当前任务(currentTask: list)

2. 已完成的任务(completedTask: list)

3. 已删除的任务(deletedTask: list)

info = {
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


