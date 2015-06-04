function windowLoad(){
	(function(){
		getClass();
		var oUl = document.getElementById('elastic_nav_ul');
		var aLi = oUl.getElementsByTagName('li');
		var aContent = document.getElementsByClassName('w-content');
		var oW_nav_right = document.getElementById('w-nav-right');
		var aA = oW_nav_right.getElementsByTagName('a');
		var oW_hidden = document.getElementById('w-hidden');
		var aUl_hidden = oW_hidden.getElementsByTagName('ul');
		
		
		/*导航栏部分切换*/
		for( var i = 0, len = aLi.length; i < len; i++ ){
			(function(i){
				aLi[i].onclick = function(){
					try{
						for( var j = 0; j < len; j++){
							aContent[j].style.display = 'none';
							Move(aContent[j],{width: 0});
						}
						aContent[i].style.display = 'block';
					}catch(e){
						return false;
					}
					Move(aContent[i],{width: 1340});
				}
			})(i);
		}
		elastic_nav(oUl, aLi);
		
		
		
		/*右侧点击弹出菜单部分*/
		w_nav_show(aA, aUl_hidden, 0, 1);
		w_nav_show(aA, aUl_hidden, 1, 0);
	})();
}

if (document.all){ 
	window.attachEvent("onload",windowLoad)//对于IE 
} 
else{ 
	window.addEventListener("load",windowLoad,false);//对于其他浏览器
}

/*nav-right切换方法*/
function w_nav_show(obj1, obj2, x, y){
	obj1[x].onclick = function(ev){
		var oEvent = ev ||event;
		Move(obj2[y],{height: 0});
		if(obj2[x].offsetHeight == 250)
			Move(obj2[x],{height: 0});
		else{
				Move(obj2[x],{height: 250});
			}
	}
}

/*nav导航栏*/
function elastic_nav(oUl, aLi)
{
	var addli = document.createElement('li');
	oUl.appendChild(addli);
	var oBg = aLi[aLi.length-1];
	for(var i = 0;i < aLi.length - 1; i++)
	{
		aLi[i].onmouseover = function ()
		{
			oBg.className = 'startMove';
			oBg.style.zIndex = 1;
			startMove(oBg,this.offsetLeft);
		}
	}
	var iSpeed = 0;
	var left = 0;
	function startMove(obj,iTarget) 
	{
		clearInterval(obj.timer);
		obj.timer = setInterval(function ()
		{
			iSpeed += (iTarget - obj.offsetLeft)/5;
			iSpeed *= 0.7;
			left += iSpeed;
			if(Math.abs(iSpeed) < 1 && Math.abs(left-iTarget) < 1 )
			{
				clearInterval(obj.timer)
			}
			else
			{
				obj.style.left = left+'px';
			}
			
		},30);
	}
}




function getClass()
{
	if(!document.getElementsByClassName)
	{  
		document.getElementsByClassName = function(className, element)
		{  
			var children = (element || document).getElementsByTagName('*');  
			var elements = new Array();  
			for (var i = 0; i < children.length; i++)
			{  
				var child = children[i];  
				var classNames = child.className.split(' ');  
				for (var j = 0; j < classNames.length; j++)
				{
				
					if (classNames[j] == className)
					{   
						elements.push(child);  
						break;  
					}  
				 }  
			}   
			return elements;  
		}  
	}  
}


//获取样式
function getStyle(obj, attr) 
{ 
	if(obj.currentStyle) 
	{ 
		return obj.currentStyle[attr]; 
	} 
	else 
	{ 
		return getComputedStyle(obj,false)[attr]; 
	} 
} 


function Move(obj,json,fn)
{
   clearInterval(obj.timer);
   obj.timer = setInterval(function()
   {
		var bStop = true;//这一次运动结束，所有的值都到达了
		for(var attr in json)
		{
			//获取当前值
		   var iCur = 0;
		   if(attr == 'opacity')
		   {
				iCur = parseFloat( getStyle(obj,attr) * 100);
		   }
		   else
			{
				iCur = parseInt( getStyle(obj,attr));
			}
			
			//算速度
			var iSpeed = (json[attr]-iCur)/6;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			//检测停止
			if(iCur != json[attr])
			{
				bStop = false;
			}
			if(attr =='opacity')
			{
			   obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed)+')';
			   obj.style.opacity = (iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr] = iCur + iSpeed + 'px';
			}
		}
			
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fn)
			{
				fn();
			}
		}
		
	},30);
}

