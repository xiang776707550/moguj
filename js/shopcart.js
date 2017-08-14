$(function(){
	//cookie封装
	function getcookie(name,value,n){
	var str = document.cookie;
	var arr = str.split('; ');
	for(var i=0;i<arr.length;i++){
		var arr1 = arr[i].split('=');
			if(arr1[0]==name){
				return arr1[1];
			}
	}
	};
	
	function setcookie(name,value,n){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+n);
		document.cookie=name+'='+value+';expires='+oDate;
	}
	
	function removecookie(name){
		//删除cookie，把生命期设为过期时间
		setcookie(name,1,-1);
	}
	
//	购物车
	$('.cart-info-wrap').hover(function(){
		$('.shop-cart-info').slideDown(30);
	},function(){
		$('.shop-cart-info').slideUp(30);
	})
	//客房服务
	$('.custom-item').hover(function(){
		$('.ext-mode').slideDown(30);
	},function(){
		$('.ext-mode').slideUp(30);
	})
	//我的小店
	$('.myxiaodian').hover(function(){
		$('.ext-mode1').slideDown(30);
	},function(){
		$('.ext-mode1').slideUp(30);
	})
	
	//固定导航栏
	$('#fixedbar .car').hover(function(){
		$(this).css('background','#f07');
		$('.car a').css('border','none');
	},function(){
		$(this).css('background','');
		$('.car a').css('border','');
	})
	$('#fixedbar .juan').hover(function(){
		$(this).css('background','#f07');
		$('.juan a').css('border','none');
	},function(){
		$(this).css('background','');
		$('.juan a').css('border','');
	})
	$('#fixedbar .money').hover(function(){
		$(this).css('background','#f07');
		$('.money a').css('border','none');
	},function(){
		$(this).css('background','');
		$('.money a').css('border','');
	})
	$('#fixedbar .footer').hover(function(){
		$(this).css('background','#f07');
		$('.footer a').css('border','none');
	},function(){
		$(this).css('background','');
		$('.footer a').css('border','');
	})
	
	//商品
	$('.selected').hover(function(){
		$('.wo').slideDown(30);
	},function(){
		$('.wo').slideUp(30);
	})
	
	//search
	$('#ts_txt').focus(function(){
		$('#ts_txt')[0].value = '';
		$('#list').css('display','block');
//		alert('aa');
	});
	$('#ts_txt').blur(function(){
		$('#ts_txt')[0].value = '宽松显瘦纯色短裤';
		$('#list').css('display','none');
	});
	


	
	$('.nav_list_row').hover(function(){
		$('.sub_catagory').css('display','block');
		$('.coat').css('display','block');
	},function(){
		$('.sub_catagory').css('display','none');
	});
	
	//划入显示
	$('.coat').hover(function(){
		$('.coat').css('display','block');
		$('.nav_more_guess').css('display','block');
	},function(){
//		$('.coat').css('display','none');
	});
	
	$('.nav_more_guess').hover(function(){
		$('.nav_more_guess').css('display','block');
	},function(){
		$('.nav_more_guess').css('display','none');
		$('.coat').css('display','none');
	})



	//
	$('#shop_h li').hover(function(){
//		alert('11');
		$(this).addClass('colo').siblings().removeClass('colo');
	})





/*	//数量加减
	var i =1;
	$('.cut').click(function(){
		i--;
		if(i<1){
			i =1;
			$('.cut').css('color','#999');
		}
		$('.txt')[0].value = i;
		
//		var j = $('#txt')[0].value;
	})
	$('.add').click(function(){
		i++;
		if(i>1){
			$('.cut').css('color','#333');	
		}
		$('.txt')[0].value = i;
//		var k = $('#txt')[0].value;
	})
	
	
	//
	$('#resolution').hover(function(){
		$(this).css('opacity','.8');
	},function(){
		$(this).css('opacity','1');
		
	})
	
	
	//删除商品
	$('.dele').click(function(){
		$('.shop_pri').slideToggle();
		$('.details').hide();
		$('.deleg').show();
		
	})
	
	//撤销删除
	$('.deleg').click(function(){
		$('.shop_pri').slideToggle(100);
		$('.details').show();
		$('.deleg').hide();
	})
	
	//显示大图
	$('#girl').hover(function(){
		$('#bigme').fadeToggle();
	})
	
	//全选
	$('#selectAll').click(function () {
		if($('#list1,#list2,#list3,#list4').checked){   
        	$('#list1').prop('checked', false); 
	  		 $('#list2').prop('checked', false);
	  		 $('#list3').prop('checked', false);
	  		 $('#list4').prop('checked', false); 
	    }else{   
			$('#list1').prop('checked', true); 
	  		$('#list2').prop('checked',true);
	  		$('#list3').prop('checked', true);
	  		$('#list4').prop('checked', true);
	  		 
	  		$('#numss')[0].innerHTML = val;
	  		var allprice = val*price;
	  		console.log(allprice);
	  		$('#allprice')[0].innerHTML = '￥'+allprice;
  		 	$('#resolution').css('background','#f07');
	  		 
	    }   
  		 
  		 
	});
	
	
	//选中获取总金额
//	console.log($('#txt')[0].value);
	var val = i;
	console.log(val);
	var price = $('#pricesingle')[0].innerHTML;
	console.log(price);
	$('#selectAll2').click(function () {
  		 $('#list1').prop('checked', true); 
  		 $('#list2').prop('checked', true);
  		 $('#list3').prop('checked', true);
  		 $('#list4').prop('checked', true);
  		 
  		 $('#numss')[0].innerHTML = val;
  		 var allprice = val*price;
  		 console.log(allprice);
  		 $('#allprice')[0].innerHTML = '￥'+allprice;
  		 $('#resolution').css('background','#f07');
	});*/
	
	
	$.ajax({
		type:'get',
		url:'index1.json',
		async:true,
		success:function(data){
			warea(data);
		}
	});
	function warea(data){
		var oNum = document.getElementById('num');
		var oNum1 =document.getElementById('num1');
		var oWare = document.getElementById('ware'); 
		var strCookie = getcookie('cart');
		
		if(!strCookie){
			//无
		}else{
			var objCookie = JSON.parse(strCookie);
			console.log(objCookie);
			var html = '';
			
			for(var attr in objCookie){
/*				html += '<div class='shop_pri'><span class='inpt'><input type='checkbox' id='list4' value='' /><i>韩国战衣衣不舍攻关</i></span><span class='xinxi'><img src='images/shopxin.gif' /><i></i>满99元减5元</span><div class='coupon'><span>优惠卷</span><i><img src='images/cou.png' /></i></div><span class='go'><a href='details.html'>去店铺凑单 ></a></span></div><div class='details'><span class='inpt'><input type='checkbox' name='' id='list2' value='' /></span><span class='deta' id='bigmei'><img class='im1 girler' src='+data[attr].img+'><p class='bigme'><img class='im2' src='' /></p><a href='details.html'></a></span><span class='deta2'><p>颜色：深蓝色</p><p>尺码：M</p></span><span class='deta2 de1'><p><s>''</s></p><p></p><p class='p3'>活动价</p></span><span class='deta2 de2'><div class='num' onselectstart='return false;' style='-moz-user-select:none;'><span class='cut'>-	</span><input type='text' class='txt' value='1' /><span class='add'>+</span></div></span><span class='deta2 de3'><p id='pricesingle' class='p4'>88.88</p></span><span class='deta2 de4'><p class='dele'>删除</p></span></div><div class='deleg' id='deleg'><p><span>成功删除一件商品 , 如有误 , 可</span><a href='javascript:;'>撤销本次删除</a></p></div>'
*/				console.log(objCookie[attr]);
				html +="<div class='shop_pri'><span class='inpt'><input type='checkbox' name='' class='list4' value='' /><i>韩国战衣衣不舍攻关</i></span><span class='xinxi'><img src='images/shopxin.gif' /><i></i>满99元减5元</span><div class='coupon'><span>优惠卷</span><i><img src='images/cou.png' /></i></div><span class='go'><a href='details.html'>去店铺凑单 ></a></span></div><div class='details'><span class='inpt'><input type='checkbox' name='' class='list2' value='' /></span><span class='deta' id='bigmei'><img class='im1 girler' src='images/deta1.jpg' /><p class='bigme'><img class='im2' src='images/deta1.jpg' /></p><a href='details.html'>韩版夏季新款小清新别致侧系带蝴蝶接腰短袖系带连衣裙</a></span><span class='deta2'><p>颜色：深蓝色</p><p>尺码：M</p></span><span class='deta2 de1'><p><s>98.88</s></p><p>55.20</p><p class='p3'>活动价</p></span><span class='deta2 de2'><div class='num' onselectstart='return false;' style='-moz-user-select:none;'><span class='cut'>-</span><input type='text' class='txt' value="+objCookie[attr]+" /><span class='add'>+</span></div></span><span class='deta2 de3'><p id='pricesingle' class='p4'>55.20</p></span><span class='deta2 de4'><p class='dele'>删除</p></span></div><div class='deleg' id='deleg'><p><span>成功删除一件商品 , 如有误 , 可</span><a href='javascript:;'>撤销本次删除</a></p></div>"
			}
			oWare.innerHTML = html;
		}
		
		var sum = 0;
			for(var i in objCookie){
				sum+=objCookie[i];
			}
		oNum.innerHTML = sum;
		
		var sum1 = 0;
			for(var i in objCookie){
				sum1+=objCookie[i];
			}
		oNum1.innerHTML = sum1;
		
			//数量加减
	
	
	$('.cut').each(function(k){
		var i = $(this).siblings('.txt').val();
		$(this).click(function(){
			
			i--;
			if(i<1){
				i =1;
				$('.cut').css('color','#999');
			}
			$('.txt').eq(k).val(i);
		})
	})
	/*$('.cut').click(function(){
		i--;
		if(i<1){
			i =1;
			$('.cut').css('color','#999');
		}
		$('.txt')[0].value = i;
		
	})*/
	$('.add').each(function(k){
		console.log($('.txt').val());
		var i = $(this).siblings('.txt').val();
		$(this).click(function(){
		
			i++;
			if(i>1){
				$('.cut').css('color','#333');
			}
			$('.txt').eq(k).val(i)
		})
	})
	/*$('.add').click(function(){
		i++;
		if(i>1){
			$('.cut').css('color','#333');	
		}
		$('.txt')[0].value = i;
	})*/
	
	
	//
	$('#resolution').hover(function(){
		$(this).css('opacity','.8');
	},function(){
		$(this).css('opacity','1');
		
	})
	
	
	//删除商品
	$('.dele').each(function(i){
		$(this).click(function(){
			$('.shop_pri').eq(i).slideUp();
			$('.details').eq(i).hide();
			$('.deleg').eq(i).show();
		})
	})
	
	//撤销删除
	$('.deleg').each(function(k){
		$(this).click(function(){
			$('.shop_pri').eq(k).slideDown(100);
			$('.details').eq(k).show();
			$('.deleg').eq(k).hide();
		})
	})
	/*$('.deleg').click(function(){
		$('.shop_pri').slideToggle(100);
		$('.details').show();
		$('.deleg').hide();
	})*/
	
	$('.girler').each(function(i){
		$(this).hover(function(){
			
			$(this).next('.bigme').fadeToggle();
		})
	})
	//显示大图
/*	console.log($('.girl'));
	$('.girler').hover(function(){
//		alert('aaa');
		$('.bigme').fadeToggle();
	})*/
	
	//全选
	$('#selectAll').click(function () {
		if($('.list1,.list2,.list3,.list4').checked){   
        	$('.list1').prop('checked', false); 
	  		 $('.list2').prop('checked', false);
	  		 $('.list3').prop('checked', false);
	  		 $('.list4').prop('checked', false); 
	    }else{   
			$('.list1').prop('checked', true); 
	  		$('.list2').prop('checked',true);
	  		$('.list3').prop('checked', true);
	  		$('.list4').prop('checked', true);
	  		 
	  		 
	  		$('#numss')[0].innerHTML = val;
	  		var allprice = val*price;
	  		console.log(allprice);
	  		$('#allprice')[0].innerHTML = '￥'+allprice;
  		 	$('#resolution').css('background','#f07');
	  		 
	    }   
  		 
  		 
	});
	
	
	//选中获取总金额
//	console.log($('#txt')[0].value);
	var val = oNum.innerHTML;
	console.log(val);
	var price = $('#pricesingle')[0].innerHTML;
	console.log(price);
	$('#selectAll2').click(function () {
  		 $('.list1').prop('checked', true); 
  		 $('.list2').prop('checked', true);
  		 $('.list3').prop('checked', true);
  		 $('.list4').prop('checked', true);
  		 
  		 $('#numss')[0].innerHTML = val;
  		 var allprice = val*price;
  		 console.log(allprice);
  		 $('#allprice')[0].innerHTML = '￥'+allprice;
  		 $('#resolution').css('background','#f07');
	});
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})