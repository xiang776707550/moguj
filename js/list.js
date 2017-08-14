$(function(){
	
	//cookie封装
	function getcookie(name,value,n){
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i=0;i<arr.length;i++){
		var arr1 = arr[i].split("=");
			if(arr1[0]==name){
				return arr1[1];
			}
	}
	};
	
	function setcookie(name,value,n){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+n);
		document.cookie=name+"="+value+";expires="+oDate;
	}
	
	function removecookie(name){
		//删除cookie，把生命期设为过期时间
		setcookie(name,1,-1);
	}

	
//	购物车
	$(".cart-info-wrap").hover(function(){
		$(".shop-cart-info").slideDown(30);
	},function(){
		$(".shop-cart-info").slideUp(30);
	})
	//客房服务
	$(".custom-item").hover(function(){
		$(".ext-mode").slideDown(30);
	},function(){
		$(".ext-mode").slideUp(30);
	})
	//我的小店
	$(".myxiaodian").hover(function(){
		$(".ext-mode1").slideDown(30);
	},function(){
		$(".ext-mode1").slideUp(30);
	})
	
	//固定导航栏
	$("#fixedbar .car").hover(function(){
		$(this).css("background","#f07");
		$(".car a").css("border","none");
	},function(){
		$(this).css("background","");
		$(".car a").css("border","");
	})
	$("#fixedbar .juan").hover(function(){
		$(this).css("background","#f07");
		$(".juan a").css("border","none");
	},function(){
		$(this).css("background","");
		$(".juan a").css("border","");
	})
	$("#fixedbar .money").hover(function(){
		$(this).css("background","#f07");
		$(".money a").css("border","none");
	},function(){
		$(this).css("background","");
		$(".money a").css("border","");
	})
	$("#fixedbar .footer").hover(function(){
		$(this).css("background","#f07");
		$(".footer a").css("border","none");
	},function(){
		$(this).css("background","");
		$(".footer a").css("border","");
	})
	
	//商品
	$(".selected").hover(function(){
		$(".wo").slideDown(30);
	},function(){
		$(".wo").slideUp(30);
	})
	
	//search
	$("#ts_txt").focus(function(){
		$("#ts_txt")[0].value = "";
		$("#list").css("display","block");
//		alert("aa");
	});
	$("#ts_txt").blur(function(){
		$("#ts_txt")[0].value = "宽松显瘦纯色短裤";
		$("#list").css("display","none");
	});
	
	//搜索库
//	var val = $("#ts_txt")[0].value;
//	$.getJSON('http://list.mogujie.com/module/mget?code=tips&keyWord='+val+'&callback=?',function(data){
//		console.log(data);
//		
//		console.log(val);
//		var html = "";
//		for(var i in data){
//			html +="<li><a href='http://list.mogujie.com/module/mget?code=tips&keyWord=s&callback="+data[i]+"'>"+data[i]+"</a></li>"
//		}
//		$("#list").innerHTML = html;
//	})

	var oInput = document.getElementById("ts_txt");
	var oList = document.getElementById("list");
	var oHead = document.getElementsByTagName("head")[0];
	
	oInput.oninput=function(){
		var val = this.value;
		$.getJSON("http://list.mogujie.com/module/mget?code=tips&keyWord="+val+"&callback=?",function(data){
		console.log(data.data.tips.data);
		data = data.data.tips.data;
		var html = "";
//		console.log(data[0].query);
		for(var i in data){
			html += "<li><a href=''>"+data[i].query+"</a></li>";
		}
		oList.innerHTML = html;
	})
			
	}
	
	
	
	//清除历史记录
	$(".del").click(function(){
		$("#list").innerHTML = "";
//		alert("aaa");
	})
	
	
	$(".nav_list_row").hover(function(){
		$(".sub_catagory").css("display","block");
		$(".coat").css("display","block");
	},function(){
		$(".sub_catagory").css("display","none");
	});
	
	//划入显示
	$(".coat").hover(function(){
		$(".coat").css("display","block");
		$(".nav_more_guess").css("display","block");
	},function(){
//		$(".coat").css("display","none");
	});
	
	$(".nav_more_guess").hover(function(){
		$(".nav_more_guess").css("display","block");
	},function(){
		$(".nav_more_guess").css("display","none");
		$(".coat").css("display","none");
	})

var oNums = document.getElementById("nums");
$.ajax({
		type:"get",
		url:"index1.json",
		async:true,
		success:function(data){
			move3(data);
		}
	});
	function move3(data){
//		console.log(data);
		var oLove = document.getElementById("lovecon");
		var aBtn = document.getElementsByClassName("lover");
		var html = "";
		for(let i = 0;i<data.length;i++){
			
			html += "<li class='lover fl' data-id="+data[i].id+"><a href='details.html?id="+data[i].id+"'><img src="+data[i].img+" /><p>"+data[i].title+"</p><div class='mit'><b>"+data[i].price+"</b><s>"+data[i].pri+"</s><span>"+data[i].num+"</span></div><i>找相似</i></a></li>"
		}
		oLove.innerHTML = html;
		
		
		var str = getcookie("cart");
		console.log(str);
		var obj = str ? JSON.parse(str) : {};
		console.log(obj);
		
		for(var k = 0;k<aBtn.length;k++){
//			console.log(k);
			aBtn[k].onclick=function(){
//				alert("111");
				var id = this.getAttribute("data-id");
				obj[id] = obj[id] ? ++obj[id] :1;
				//存cookie
				console.log(obj);
				var objTostr = JSON.stringify(obj);
				setcookie("cart",objTostr,7);
				
			}
		}
		
		
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//判断页数 
	
	var html = "";
	for(var i =0;i<5;i++){
		html += "<a href='javascript:;'>"+(i+1)+"</a>";
	}
	oNums.innerHTML = html;
//	console.log(html);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

})


//分页功能
			/*var oNewList=document.getElementById("newsList");
			var oPage=document.getElementsByClassName("page")[0];
			var oNums=document.getElementById("nums");
			var aA=oPage.getElementsByTagName("a");
			//让数据显示在Ul里面
			function cb(data){
				//console.log(data);
			var data=data.comments;
			//console.log(data);
			var html='';
			for(var i in data){
				html+='<li><span class="newTitle">'+data[i].content+'</span><span class="addTime">'+data[i].creationTime+'</span></li>'
			}
			oNewList.innerHTML=html;
	        }
			//追加script标签
			function List(k){
				var oScript=document.createElement("script");
				oScript.src="https://club.jd.com/comment/productPageComments.action?callback=cb&productId=4715874&score=0&sortType=5&page="+k+"&pageSize=10&isShadowSku=0&fold=1";
				document.body.appendChild(oScript);
				console.log(k);
			}
			
			//让其先执行一次  在打开页面时显示第一页数据
			List(0);
			//判断页数  假定有8页
			var html="";
			for(var i=0;i<8;i++){
				html+="<a href='javascript:;'>"+(i+1)+"</a>"
			}
			oNums.innerHTML=html;
			//让第一页高亮显示  给其添加className
			aA[1].className="cur";
			//确定页码
			var k=1;
			for(let i=0;i<aA.length;i++){
				aA[i].onclick=function(){
					//每次点击时 更换每页的数据  执行一次
					List(k);
					switch(i){
						case 0:
						if(k>0){
							k--;
						}
						break;
						case aA.length-1:
						k++;
						break;
						default:
						k=i+1;
					}
					//清空所有a标签的classname
					for(var m=0;m<aA.length;m++){
			   			aA[m].className=""
			   		}
					//给当前的a标签添加classname;
			   		aA[k-1].className="cur";
				}
			}*/