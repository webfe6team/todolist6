
(function(){
	
	/*
		表单验证
	*/

	function check(){

		var email = document.getElementById("email").value;
		var passw = document.getElementById("passw").value;

		if(email == ""){
			alert("帐号不能为空！");
			return false;
		}

		if(passw == ""){
			alert("密码不能为空！");
			return false;
		}

		return true;
	}

	var btn_submit = document.getElementById("submit");
	btn_submit.onclick = function(){
		return check();
	}

})();


