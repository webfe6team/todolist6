
var EventUtil = {
	addEvent: function(element, eventType, handler){
		var event_arr = eventType.split(' ');
		if(event_arr.length != handler.length){
			return;
		}

		for(var i = 0, len = event_arr.length; i<len; i++){
			if(element.addEventListener){//标准浏览器
				element.addEventListener(event_arr[i], handler[i], false);
			}else{
				element.attachEvent('on' + event_arr[i], handler[i]);
			}
		}
	},

	removeEvent: function(element, eventType, handler){
		var event_arr = eventType.split(' ');
		if(event_arr.length != handler.length){
			return;
		}

		for(var i = 0, len = event_arr.length; i<len; i++){
			if(element.removeEventListener){//标准浏览器
				element.removeEventListener(event_arr[i], handler[i], false);
			}else{
				element.detachEvent('on' + event_arr[i], handler[i]);
			}
		}
	},

	getEvent: function(event){
		return event || window.event;
	},

	getTarget: function(event){
		return this.getEvent(event).target || this.getEvent(event).srcElement;
	},
	//阻止默认行为
	preventDefault: function(event){
		var evt = this.getEvent(event);
		if(evt.preventDefault){//标准浏览器
			evt.preventDefault();
		}else{
			evt.returnValue = false;
		}
	},
	//阻止事件冒泡
	stopPropagation: function(event){
		var evt = this.getEvent(event);
		if(evt.stopPropagation){//标准浏览器
			evt.stopPropagation();
		}else{
			evt.cancelBubble = true;
		}
	}
};