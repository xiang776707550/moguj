$(function(){
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
		console.log(data);
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
//	轮播
	var $pic = $("#pic");
	var $aLi = $("#pic li");
	var len = $aLi.length;
	var i =0;
	function move(){
		i++;
		if(i == len){
			i=1;
		}
//		console.log(i);
		$aLi.eq(i).fadeIn().siblings().fadeOut();
		//匹配角标
		if(i == len-1){
			$("#nav li").eq(0).addClass("active").siblings().removeClass("active");
		}else{
			$("#nav li").eq(i).addClass("active").siblings().removeClass("active");
		}
		
	}
	var timer = setInterval(move,3000);
	//鼠标划入小圆点
	$("#nav li").hover(function(){
		clearInterval(timer);
		i = $(this).index()-1;
		move();	
	},function(){
		clearInterval(timer);
		move();
		timer = setInterval(move,3000);
	})
	
	
	
	//倒计时
	zhong();
			function zhong(){
				var nowTime = new Date();
				var endTime = new Date("2018-10-28 23:00:00");
				var ss = endTime - nowTime;
				var s = Math.floor(ss/1000%60);
				var m = Math.floor(ss/1000/60%60);
				var h = Math.floor(ss/1000/60/60%24);
				
				s = s < 10 ? "0"+s :s;
				m = m < 10 ? "0"+m :m;
				h = h < 10 ? "0"+h :h;

				demo.innerHTML = h+":"+m+":"+s;
			};
			setInterval(function(){
           		zhong();
       		},1000);
       		
    $("#main_top .img1").hover(function(){
    	$(this).stop().animate({"left":"-20px"},500);
    },function(){
    	$(this).stop().animate({"left":"0px"},500);
    });
    
    $("#main_top .img2").hover(function(){
    	$(this).stop().animate({"right":"20px"},500);
    },function(){
    	$(this).stop().animate({"right":"10px"},500);
    });
    
    $(".king_l .img1").hover(function(){
    	$(this).stop().animate({"top":"-15px"},500);
    },function(){
    	$(this).stop().animate({"top":"0"},500);
    })
    
   
    
    $("#kin .img2").hover(function(){
    	$(this).stop().animate({"bottom":"10px"},500);
    },function(){
    	$(this).stop().animate({"bottom":"0"},500);
    })
    
    $(".king_r img").hover(function(){
    	$(this).css("opacity",".6");
    },function(){
    	$(this).css("opacity","1");
    })
    
    //Nav导航json数据处理
    $.ajax({
    	type:"get",
    	url:"nav_data.json",
    	async:true,
    	success:function(data){
    		
    		 move1(data);	
    	}
    	
    })
   function move1(data){
//	console.log(data);
	//li 1
	$(".nav_list").find("li:nth-child(1)").mouseover(function(){
	$(".coat").find("h3").get()[0].innerHTML=data[0].title;

	var data1 = data[0].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[0].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	$(".nav-top").find("ul").find("li:nth-child(2)").find("a").css({"color":"#f07"});
	$(".nav-top").find("ul").find("li:nth-child(5)").find("a").css({"color":"#f07"});
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[0].subNavLists[1].subNavTit;
	var data4 = data[0].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	$(".nav-center").find("ul").find("li:nth-child(1)").find("a").css({"color":"#f07"});
	$(".nav-center").find("ul").find("li:nth-child(6)").find("a").css({"color":"#f07"});
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[0].subNavLists[2].subNavTit;
	var data5 = data[0].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	$(".nav-bottom").find("ul").find("li:nth-child(3)").find("a").css({"color":"#f07"});
	$(".nav-bottom").find("ul").find("li:nth-child(4)").find("a").css({"color":"#f07"});
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[0].subNavLists[3].subNavTit;
	var data6 = data[0].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});
	
	//右边hover栏
	/*var data7 = data[0].rImg;
	var data8 = data[0].smallTit;
	var data9 = data[0].price;
//	console.log(data7);
//	console.log(data8);
	var oPage = document.getElementsByClassName("page_activity")[0];
	var oMenu = oPage.getElementsByClassName("pc_indexPage_nav_menu")[0];
	var oGuss = oMenu.getElementsByClassName("nav_more_guess")[0];
	var oUl = oGuss.getElementsByTagName("ul")[0];
	var oLi = oUl.getElementsByTagName("li")[0];
	var html = "";
	for(let i=0;i<data7.length;i++){
		html += "<img src="+data7[i]+">";
		oLi.innerHTML = html;
	}*/
	
	//li 2
	$(".nav_list").find("li:nth-child(2)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[1].title;

	var data1 = data[1].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[1].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	$(".nav-top").find("ul").find("li:nth-child(1)").find("a").css({"color":"#f07"});
	$(".nav-top").find("ul").find("li:nth-child(2)").find("a").css({"color":"#f07"});
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[1].subNavLists[1].subNavTit;
	var data4 = data[1].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	$(".nav-center").find("ul").find("li:nth-child(4)").find("a").css({"color":"#f07"});
	$(".nav-center").find("ul").find("li:nth-child(7)").find("a").css({"color":"#f07"});
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[1].subNavLists[2].subNavTit;
	var data5 = data[1].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	$(".nav-bottom").find("ul").find("li:nth-child(2)").find("a").css({"color":"#f07"});
  	$(".nav-bottom").find("ul").find("li:nth-child(7)").find("a").css({"color":"#f07"});
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[1].subNavLists[3].subNavTit;
	var data6 = data[1].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});
	
	//li 3
	$(".nav_list").find("li:nth-child(3)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[2].title;

	var data1 = data[2].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[2].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	$(".nav-top").find("ul").find("li:nth-child(2)").find("a").css({"color":"#f07"});
	$(".nav-top").find("ul").find("li:nth-child(5)").find("a").css({"color":"#f07"});
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[2].subNavLists[1].subNavTit;
	var data4 = data[2].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-center").find("ul").find("li:nth-child(1)").find("a").css({"color":"#f07"});
	$(".nav-center").find("ul").find("li:nth-child(6)").find("a").css({"color":"#f07"});
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[2].subNavLists[2].subNavTit;
	var data5 = data[2].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[2].subNavLists[3].subNavTit;
	var data6 = data[2].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	$(".nav-bottom").find("ul").find("li:nth-child(3)").find("a").css({"color":"#f07"});
	$(".nav-bottom").find("ul").find("li:nth-child(4)").find("a").css({"color":"#f07"});
	});
	
	//li 4
	$(".nav_list").find("li:nth-child(4)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[3].title;

	var data1 = data[3].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[3].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[3].subNavLists[1].subNavTit;
	var data4 = data[3].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[3].subNavLists[2].subNavTit;
	var data5 = data[3].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[3].subNavLists[3].subNavTit;
	var data6 = data[3].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});
	
	//li 5
	$(".nav_list").find("li:nth-child(5)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[4].title;

	var data1 = data[4].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[4].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[4].subNavLists[1].subNavTit;
	var data4 = data[4].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[4].subNavLists[2].subNavTit;
	var data5 = data[4].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[4].subNavLists[3].subNavTit;
	var data6 = data[4].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});
	
	//li 6
	$(".nav_list").find("li:nth-child(6)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[5].title;

	var data1 = data[5].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[5].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[5].subNavLists[1].subNavTit;
	var data4 = data[5].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[5].subNavLists[2].subNavTit;
	var data5 = data[5].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[5].subNavLists[3].subNavTit;
	var data6 = data[5].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});
	
	//li 7 
	$(".nav_list").find("li:nth-child(7)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[6].title;

	var data1 = data[6].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[6].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[6].subNavLists[1].subNavTit;
	var data4 = data[6].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[6].subNavLists[2].subNavTit;
	var data5 = data[6].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[6].subNavLists[3].subNavTit;
	var data6 = data[6].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});
	
	// li 8
	$(".nav_list").find("li:nth-child(8)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[7].title;

	var data1 = data[7].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[7].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[7].subNavLists[1].subNavTit;
	var data4 = data[7].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[7].subNavLists[2].subNavTit;
	var data5 = data[7].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[7].subNavLists[3].subNavTit;
	var data6 = data[7].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});
	
	//li 9 
	$(".nav_list").find("li:nth-child(9)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[8].title;

	var data1 = data[8].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[8].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[8].subNavLists[1].subNavTit;
	var data4 = data[8].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[8].subNavLists[2].subNavTit;
	var data5 = data[8].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[8].subNavLists[3].subNavTit;
	var data6 = data[8].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});
	
	// li 10
	$(".nav_list").find("li:nth-child(10)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[9].title;

	var data1 = data[9].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[9].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[9].subNavLists[1].subNavTit;
	var data4 = data[9].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[9].subNavLists[2].subNavTit;
	var data5 = data[9].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[9].subNavLists[3].subNavTit;
	var data6 = data[9].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});
	
	//li 11
	$(".nav_list").find("li:nth-child(11)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[10].title;

	var data1 = data[10].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[10].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[10].subNavLists[1].subNavTit;
	var data4 = data[10].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[10].subNavLists[2].subNavTit;
	var data5 = data[10].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[10].subNavLists[3].subNavTit;
	var data6 = data[10].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});
	
	//12
	$(".nav_list").find("li:nth-child(12)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[11].title;

	var data1 = data[11].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[11].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[11].subNavLists[1].subNavTit;
	var data4 = data[11].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[11].subNavLists[2].subNavTit;
	var data5 = data[11].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[11].subNavLists[3].subNavTit;
	var data6 = data[11].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});
	
	//13
	$(".nav_list").find("li:nth-child(13)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[12].title;

	var data1 = data[12].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[12].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[12].subNavLists[1].subNavTit;
	var data4 = data[12].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[12].subNavLists[2].subNavTit;
	var data5 = data[12].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[12].subNavLists[3].subNavTit;
	var data6 = data[12].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});
	
	//14
	$(".nav_list").find("li:nth-child(14)").mouseover(function(){
		$(".coat").find("h3").get()[0].innerHTML=data[13].title;

	var data1 = data[13].subNavLists[0].subNavTit;
	console.log(data1);
	$(".nav-top").find("p").find("span").get()[0].innerHTML = data1;
	
	var data2 = data[13].subNavLists[0].subNavList;
	console.log(data2);
	var aNavTop = document.getElementsByClassName("nav-top")[0];
	var oUl = aNavTop.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data2.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data2[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-center").find("p").find("span").get()[0].innerHTML = data[13].subNavLists[1].subNavTit;
	var data4 = data[13].subNavLists[1].subNavList;
	console.log(data4);
	var aCenter = document.getElementsByClassName("nav-center")[0];
	var oUl = aCenter.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data4.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data4[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	$(".nav-center").find("li:nth-child(2)").css({"color":"#f07"});
	
	$(".nav-bottom").find("p").find("span").get()[0].innerHTML = data[13].subNavLists[2].subNavTit;
	var data5 = data[13].subNavLists[2].subNavList;
	console.log(data5);
	var aBottom = document.getElementsByClassName("nav-bottom")[0];
	var oUl = aBottom.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data5.length; i++) {
		var oLi =document.createElement("li");
		html += "<li><a href='index.html'>"+data5[i]+"</a></li>";
		oUl.innerHTML = html;
	}
	
	$(".nav-bottom-b").find("p").find("span").get()[0].innerHTML = data[13].subNavLists[3].subNavTit;
	var data6 = data[13].subNavLists[3].subNavList;
	console.log(data6);
	var aBottomm = document.getElementsByClassName("nav-bottom-b")[0];
	var oUl = aBottomm.getElementsByTagName("ul")[0];

	var html = "";
	for(let i = 0; i < data6.length; i++) {
//		var oLi =document.createElement("li");
		html += "<li><a href='index.html'><img src="+data6[i]+"></a></li>";
		oUl.innerHTML = html;
	}
	});

}


	$.ajax({
		type:"get",
		url:"index.json",
		async:true,
		success:function(data){
			move2(data);
		}
	});
	function move2(data){
//		console.log(data[0]);
		var oKing = document.getElementById("kin");
		var oKing1 = document.getElementById("kin1");
		var oKing2 = document.getElementById("kin2");
		var oKing3 = document.getElementById("kin3");
		var oKing4 = document.getElementById("kin4");
		var oKing5 = document.getElementById("kin5");
		var oKing6 = document.getElementById("kin6");
		var oKing7 = document.getElementById("kin7");
		var html = "";
		for(let i=0;i<6;i++){
			html += "<a href='#'><h3>"+data[i].title+"</h3><p>"+data[i].mtitle+"</p><img class='img2' src="+data[i].img+" /></a>"
		}
		oKing.innerHTML = html;
		$(".king_c .img2").hover(function(){
	    	$(this).stop().animate({"bottom":"10px"},500);
	    },function(){
	    	$(this).stop().animate({"bottom":"0"},500);
	    })
//		console.log(html);
		var html = "";
		for(let i=6;i<12;i++){
			html += "<a href='#'><h3>"+data[i].title+"</h3><p>"+data[i].mtitle+"</p><img class='img2' src="+data[i].img+" /></a>"
			
		}
		oKing1.innerHTML = html;
		$(".king_c .img2").hover(function(){
	    	$(this).stop().animate({"bottom":"10px"},500);
	    },function(){
	    	$(this).stop().animate({"bottom":"0"},500);
	    })
//		console.log(html);

		//3
		var html = "";
		for(let i=12;i<18;i++){
			html += "<a href='#'><h3>"+data[i].title+"</h3><p>"+data[i].mtitle+"</p><img class='img2' src="+data[i].img+" /></a>"
			
		}
		oKing2.innerHTML = html;
		$(".king_c .img2").hover(function(){
	    	$(this).stop().animate({"bottom":"10px"},500);
	    },function(){
	    	$(this).stop().animate({"bottom":"0"},500);
	    })
		
		//4
		var html = "";
		for(let i=18;i<24;i++){
			html += "<a href='#'><h3>"+data[i].title+"</h3><p>"+data[i].mtitle+"</p><img class='img2' src="+data[i].img+" /></a>"
			
		}
		oKing3.innerHTML = html;
		$(".king_c .img2").hover(function(){
	    	$(this).stop().animate({"bottom":"10px"},500);
	    },function(){
	    	$(this).stop().animate({"bottom":"0"},500);
	    })
		
		//5
		var html = "";
		for(let i=24;i<30;i++){
			html += "<a href='#'><h3>"+data[i].title+"</h3><p>"+data[i].mtitle+"</p><img class='img2' src="+data[i].img+" /></a>"
			
		}
		oKing4.innerHTML = html;
		$(".king_c .img2").hover(function(){
	    	$(this).stop().animate({"bottom":"10px"},500);
	    },function(){
	    	$(this).stop().animate({"bottom":"0"},500);
	    })
		
		//6
		var html = "";
		for(let i=12;i<18;i++){
			html += "<a href='#'><h3>"+data[i].title+"</h3><p>"+data[i].mtitle+"</p><img class='img2' src="+data[i].img+" /></a>"
			
		}
		oKing5.innerHTML = html;
		$(".king_c .img2").hover(function(){
	    	$(this).stop().animate({"bottom":"10px"},500);
	    },function(){
	    	$(this).stop().animate({"bottom":"0"},500);
	    })
		
		//7
		var html = "";
		for(let i=18;i<24;i++){
			html += "<a href='#'><h3>"+data[i].title+"</h3><p>"+data[i].mtitle+"</p><img class='img2' src="+data[i].img+" /></a>"
			
		}
		oKing6.innerHTML = html;
		$(".king_c .img2").hover(function(){
	    	$(this).stop().animate({"bottom":"10px"},500);
	    },function(){
	    	$(this).stop().animate({"bottom":"0"},500);
	    })
		
		//8
		var html = "";
		for(let i=24;i<30;i++){
			html += "<a href='#'><h3>"+data[i].title+"</h3><p>"+data[i].mtitle+"</p><img class='img2' src="+data[i].img+" /></a>"
			
		}
		oKing7.innerHTML = html;
		$(".king_c .img2").hover(function(){
	    	$(this).stop().animate({"bottom":"10px"},500);
	    },function(){
	    	$(this).stop().animate({"bottom":"0"},500);
	    })
	}
	
	
	//瀑布流
	
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
		var html = "";
		for(let i = 0;i<data.length;i++){
			
			html += "<li class='lover fl'><a href='list.html'><img src="+data[i].img+" /><p>"+data[i].title+"</p><div class='mit'><b>"+data[i].price+"</b><s>"+data[i].pri+"</s><span>"+data[i].num+"</span></div><i>找相似</i></a></li>"
		}
		oLove.innerHTML = html;
	}

	


	//左右轮播
	var $pid = $("#pid");
	var $aI = $pid.find("li");
	$aI.eq(0).clone().appendTo($pid);
	var lem = $aI.length+1;
	var perWidth = $aI.outerWidth();
	console.log(perWidth);
	$pid.css("width",lem*perWidth);
	var j =0;
	function move13(){
		j++;
		if(j == lem){
			$pid.css("left",0);
			j=1;
		}
		if(j == -1){
			$pid.css("left",-(lem-1)*perWidth);
			j = lem-2;
		}
		$pid.stop().animate({"left":-j*perWidth},500);
	}
	var timer1 = setInterval(move13,3000);
	
	$("#ban1").hover(function(){
		$(".btnne").css("display","block");
	},function(){
		$(".btnne").css("display","none");
	})
	
	$('.btnne:last').click(function() {
		clearInterval(timer1);
		move13();
		timer1 = setInterval(function() {
			move13()
		}, 3000)
	})
	$('.btnne:first').click(function() {
		clearInterval(timer1);
		j = j - 2;
		move13();
		timer1 = setInterval(function() {
			move13()
		}, 3000)
	})


	
	 $(".king_c .img2").hover(function(){
    	$(this).stop().animate({"bottom":"10px"},500);
    },function(){
    	$(this).stop().animate({"bottom":"0"},500);
    })




	



})


