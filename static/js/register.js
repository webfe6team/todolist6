
(function(){

	/*
		提示密码强度
	*/
	//判断输入密码的类型    
	function charMode(input) {
		if (input >= 48 && input <= 57) //数字    
			return 1;
		if (input >= 65 && input <= 90) //大写    
			return 2;
		if (input >= 97 && input <= 122) //小写    
			return 4;
		else
			return 8;
	} 
	//计算密码模式    
	function bitTotal(num) {
		modes = 0;
		for (i = 0; i < 4; i++) {
			if (num & 1) modes++;
			num >>>= 1;
		}
		return modes;
	}
	//返回强度级别    
	function checkStrong(sPW) {
		if (sPW.length < 6)
			return 1;
		var modes = 0;
		for (i = 0; i < sPW.length; i++) {
			//密码模式    
			modes |= charMode(sPW.charCodeAt(i));
		}
		return bitTotal(modes);
	}
	//显示颜色    
	function pwStrength(pwd) {
		var default_color = "#FFF0F5"; //默认颜色  
		var L_color = "#5599FF"; //低强度的颜色，且只显示在最左边的单元格中  
		var M_color = "#0066FF"; //中等强度的颜色，且只显示在左边两个单元格中  
		var H_color = "#0044BB"; //高强度的颜色，三个单元格都显示  
		var Lcolor, Mcolor, Hcolor, S_level;
		if (pwd == null || pwd == '') {
			Lcolor = Mcolor = Hcolor = default_color;
		} else {
			S_level = checkStrong(pwd);
			switch (S_level) {
				case 0:
					Lcolor = Mcolor = Hcolor = default_color;
					break;
				case 1:
					Lcolor = L_color;
					Mcolor = Hcolor = default_color;
					break;
				case 2:
					Lcolor = L_color;
					Mcolor = M_color;
					Hcolor = default_color;
					break;
				default:
					Lcolor = L_color;
					Mcolor = M_color;
					Hcolor = H_color;
			}
		}
		document.getElementById("strength_L").style.background = Lcolor;
		document.getElementById("strength_M").style.background = Mcolor;
		document.getElementById("strength_H").style.background = Hcolor;
		return;
	}

	//

	var obj = document.getElementById("passw");

	obj.onkeyup = function(){
		pwStrength(obj.value);
	};

	obj.onblur = function(){
		pwStrength(obj.value);
	};

	
	/*
		表单验证
	*/

	function check(){

		var email = document.getElementById("email").value;
		var nickName = document.getElementById("nickName").value;
		var passw = document.getElementById("passw").value;
		var passwInsure = document.getElementById("passwInsure").value;

		if(email == ""){
			alert("帐号不能为空！");
			return false;
		}

		if(nickName == ""){
			alert("昵称不能为空！");
			return false;
		}

		if(passw == ""){
			alert("密码不能为空！");
			return false;
		}

		if(passwInsure == ""){
			alert("密码确认不能为空！");
			return false;
		}

		if(passw !== passwInsure){
			alert("两次密码不相同！");
			document.getElementById("passw").value = "";
			document.getElementById("passwInsure").value = "";
			return false;
		}

		return true;
	}

	var btn_submit = document.getElementById("submit");
	btn_submit.onclick = function(){
		return check();
	}

	/*
		提交按钮是否显示
	*/

	var cb_agree = document.getElementById("agree");
	btn_submit.disabled = true;
	btn_submit.style.backgroundColor = "#aaa"; 

	cb_agree.onclick = function(){
		if(cb_agree.checked == false){
			btn_submit.disabled = true;
			btn_submit.style.backgroundColor = "#aaa"; 
		}else{
			btn_submit.disabled = false;
			btn_submit.style.backgroundColor = "#5599FF";
		}
	}

})();


