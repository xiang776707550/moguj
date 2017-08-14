$(function(){
	
/*	$("#phoneb").focus(function(){
		$(".ertip").show();
	})
	$("#phoneb").blur(function(){
		$(".ertip").hide();
	})*/
	
	//login
	var oForm = document.getElementById("form");
	var oIn1 = document.getElementById("phoneb");
	var oIn2 = document.getElementById("input2");
	var oErr = document.getElementById("ertip");
	var oBtn = document.getElementById("btn");
	//标识位
	var flag = true;
	var flag1 = flag2 =false;
	//手机验证
	function ain1(){
		var regEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
		var regPhone = /^1\d{10}$/;
		if(oIn1.value == ""){
			flag = false;
			$("#ertip").show();
			oErr.innerHTML = "请输入用户名/邮箱/手机号！"
		}
		else if(!regPhone.test(oIn1.value) || regEmail.test(oIn1.value)){
			oErr.innerHTML = "用户名/邮箱/手机号(格式错误)";
			flag = false;
		}else{
			$("#ertip").hide();
			flag1=true;
		}
	}
	
	//密码验证
	function ain2(){
		if(oIn2.value ==""){
			flag = false;
			$("#ertip").show();
			oErr.innerHTML = "请输入密码!"
		}else if(oIn2.value.length<6 || oIn2.value.length>20){
			oErr.innerHTML = "您输入的密码格式不正确";
			flag = false;
		}else{
			$("#ertip").hide();
			flag2=true;
		}
	}

	oIn1.onblur=function(){
		ain1();
	}
	oIn2.onblur=function(){
		ain2();
	}
	
//	console.log($("#btn"));
	
	
	//点击登录验证
	oBtn.onclick=function(){
		ain1();
		ain2();
		console.log(flag);
		if(flag){
//			alert("ok");
			location.href = "index.html";
		}
		else{
			$("#ertip").show();
	 		oErr.innerHTML = "请输入正确的手机密码格式!"	
		}
	}
	
	















})
