/*
 *   base.js 抹平浏览器差异，尽量保证兼容性
 *   提供基本功能性函数
 *   揭示块模式
 */
var Caelum = {};   //命名空间，用来保存模块
 /*
  * 事件模块，默认不开启事件捕获
  */
Caelum.Event = (function(window){
 	var _flag = false;	//默认不开启事件捕获
 	function addHandler(element, type, handler, flag) {
 		flag = flag || _flag;
 		if(element.addEventListener) {
 			element.addEventListener(type, handler, flag);
 		}else if(element.attachElement){
 			element.attachElement("on" + type, handler);    //IE
 		}else {
 			element["on"+type] = hanlder;
 		}
 	}
 	function removeHandler(element,type,handler,flag) {
 		flag = flag || _flag;
 		if(element.removeEventListener) {
			element.removeEventListener(type, handler,flag);
		}else if(element.detachEvent) {
			element.detachEvent("on" + type, handler);
		}else{
			element["on"+type] = null;
		}
 	}
 	function getEvent(event) {
 		return event ? event : window.event;  //IE下event保存在window对象中
 	}
 	function getTarget(event) {
 		return event.target || event.srcElement;
 	}
 	//取消默认行为
 	function preventDefault(event) {
 		if(event.preventDefault) {
			event.preventDefault();
		}else {
			event.returnValue = false;
		}
 	}
 	//取消时间冒泡
 	function stopPropagation(event) {
 		if(event.stopPropagation) {
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
 	}
 	return {
 		"addHandler" : addHandler,
 		"removeHandler" : removeHandler,
 		"getEvent" : getEvent,
 		"getTarget" : getTarget,
 		"preventDefault" : preventDefault,
 		"stopPropagation" : stopPropagation
 	}
 })(window)

 /*
  *  动画函数,   私有函数：_getStyle
  */
Caelum.animation = (function(window){
	//用于获取元素的css样式,私有
	function _getStyle(obj, attr) {
		return window.getComputedStyle ? 
			   window.getComputedStyle(obj,null)[attr] : 
			   obj.currentStyle[attr]                    //IE
	}
	function animate(obj, options, delay, fn) {
		clearInterval(obj.timer);   //防止多次触发
		obj.timer = setInterval(function(){
			var flag = true;       //标志，判断是否动画全部执行完毕
			var icur = 0;          //保存当前状态
			for(var attr in options) {
				//判断运动是否是透明值
				if(attr === "opacity") {
					icur = parseInt(parseFloat(_getStyle(obj, attr)) * 100);
				}else {
					icur = parseInt(_getStyle(obj, attr)); 
				}
				var speed = (options[attr] - icur) / 8;   //计算运动速度
				//运动速度如果大于0则向下取整，如果小于0想上取整；
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if(icur != options[attr]) {
					flag = false;      //若不等于目标值，修改标志位
				}
				if(attr === "opacity") {
					obj.style.opacity = (options[attr] + speed) / 100;
				}else{
					obj.style[attr] = icur + speed + "px";
				}
			}
			//如果动画到达目标，结束定时，执行回调函数
			if(flag){
				clearInterval(obj.timer);
				if(fn) {
					fn();
				}
			}	
		}, delay || 30)
	}
	return animate;
})(window)

/*
 *   功能性函数， addClass, removeClass, nextSibling保存在全局
 */
Caelum.Array = (function(){
	//去掉数组重复项
	function unique(array) {
	    var result = [],
	    len = array.length;
	    loop: for (var i = 0; i < len; i++) {
	        for (var x = i + 1; x < len; x++) {
	            if (array[i] === array[x]) {
	                continue loop;
	            }
	        }
	        result.push(array[i]);
	    }
	    return result;
	}
	//合并数组
	function merge(array) {
	    var args = [].slice.call(arguments),
	    len = args.length,
	    result = [];
	    for (var i = 0; i < len; i++) {
	        result = result.concat(args[i]);  //连接所有数组
	    }
	    return unique(result);  //去重
	}
	//取target的补集
	function diff(target, array) {
		for(var i = 0; i < target.length; i++) {
			for(var j=0; j < array.length; j++) {
				if(target[i] === array[j]) {
					target.splice(i,1);   //删除
					i--;
					break;
				}
			}
		}
		return target;   //取补集
	}
	return {
		unique : unique,
		merge : merge,
		diff : diff
	}
})()
/*
 *公开到全局部分函数,添加删除样式，获取下一个元素节点
 */
function addClass(ele, value) {
	if(arguments.length !== 2) {
		return false;
	}
	var results = Caelum.Array.merge(ele.className.split(" "), value.split(" ")); //将给出的字符串，拆分成数组，取并集
	ele.className = results.join(" ");
}
function removeClass(ele, value) {
	if(arguments.length !== 2) {
		return false;
	}
	try {
		var results = Caelum.Array.diff(ele.className.split(" "), value.split(" "));
	}catch(e){
		return;
	}
	ele.className = results.join(" ");
}
//取下一个元素节点，剔除文本节点的干扰，若不存在下一个兄弟节点则返回null
function nextSibling(element) {
	var result = element.nextSibling;
	while(result) {
		if(result.nodeType === 1) {
			return result;
		}
		result = result.nextSibling;
	}
	return null;
}
//字符串格式化函数，用于节点操作
function format(string, args) {
    var array = [].slice.call(arguments,1);
    return string.replace(/\{([^{}]+)\}/gm,function(match,name){ 
        var index = Number(name);   //尝试是不是数字;
        if(index >= 0) {
            return array[index];
        }
        if(args && args[name] !== void 0) {
            return args[name];
        }
        return '';   //都没有的情况下
    })
}

function afterInsert(parent, aimNode, insertNode) {
	if(parent.lastChild === aimNode) {
		parent.appendChild(insertNode);
	}else {
		parent.insertBefore(insertNode, aimNode.nextSibling );
	}
}