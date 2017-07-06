// JavaScript Document

$(function(){
	//搜索框
		//顶部搜索
	var tip_search = $('.nav-inner .search input').val();
	$('.nav-inner .search input').focus(function(e) {
		if($(this).val() == tip_search){
			$(this).val('');
		}
	});
	$('.nav-inner .search input').blur(function(e) {
		if($(this).val() == ''){
			$(this).val(tip_search);
		}
	});
		//底部订阅
	var tip_mail = $('.footer-inner .rt .search input').val();
	$('.footer-inner .rt .search input').focus(function(e) {
		if($(this).val() == tip_mail){
			$(this).val('');
		}
	});
	$('.footer-inner .rt .search input').blur(function(e) {
		if($(this).val() == ''){
			$(this).val(tip_mail);
		}
	});
	
	//登录注册
	$('.hd-inner .ir .logreg .sub .shd a').click(function(e) {
		$(this).addClass('current').siblings().removeClass('current');
	});
	$('.hd-inner .ir li .login a').click(function(e) {
		$(this).closest('li').find('.sub').toggle();
		$('.hd-inner .ir .gosp .sub').hide();	
	});	
	$('.hd-inner .ir li .login a').eq(0).click(function(e) {
		if($(this).closest('li').find('.sub').css('left') == '-87px'){				
			$(this).closest('li').find('.sub').show().css('left', '-138px');
		}
	});
	$('.hd-inner .ir li .login a').eq(1).click(function(e) {
		if($(this).closest('li').find('.sub').css('left') == '-138px'){				
			$(this).closest('li').find('.sub').show().css('left', '-87px');
		}
	});
	var logCli = function(e) {
		$('.hd-inner .ir .logreg .sub .shd').children('a').eq(0).addClass('current').siblings().removeClass('current');
		$('.hd-inner .ir .logreg .sub .sbd').children('.bd-log').show().siblings().hide();
	}
	var regCli = function(e) {
		$('.hd-inner .ir .logreg .sub .shd').children('a').eq(1).addClass('current').siblings().removeClass('current');
		$('.hd-inner .ir .logreg .sub .sbd').children('.bd-reg').show().siblings().hide();
	}	
	$('.hd-inner .ir .logreg .sub .shd a').eq(0).click(logCli);
	$('.hd-inner .ir .logreg .sub .shd a').eq(1).click(regCli);
	$('.hd-inner .ir li .login a').eq(0).click(logCli);
	$('.hd-inner .ir li .login a').eq(1).click(regCli);
	
	//注册下拉
	$('#mailInput,#pswInput,#confPswInput,#nameInput').focus(function(e) {
		var myText = $(this).siblings();
		if(myText.html()!=''){
			myText.html('');
		}
    });
	function myBlur(yourID){	
		var txt = $(yourID).closest('div').find('label').html();
		//console.log(txt);		
		$(yourID).blur(function(e) {
			var myText = $(this).siblings();
			if(myText.html()==''){
				myText.html(txt);
			}
			var myValues = $(this).val()
			if(myValues!=''){
				myText.hide()	
			}else{
				myText.show()
			}
		});
	}
	myBlur('#mailInput');
	myBlur('#pswInput');
	myBlur('#confPswInput');
	myBlur('#nameInput');
	
	//购物车
	$('.hd-inner .ir .gosp a').eq(0).click(function(e) {
		$(this).closest('li').find('.sub').toggle();
		$('.hd-inner .ir .logreg div:eq(1)').hide();	
	});	
	 /*注册登录（空白处）购物车（空白处）消失*/
	$('.logreg,.gosp').click(function(event) {
		event.stopPropagation();
    });
	$(document).click(function (event) { 
		$('.hd-inner .ir .logreg .sub').hide();
		$('.hd-inner .ir .gosp .sub').hide();
	 }); 
	
		//点击查看
	function goodsPlay(yourClass){	
	}
	goodsPlay('.hd-inner .ir .gosp .sub .slibd');	
		//购买数量
	function clNumChange(yourClass,myNum){
		var maxNum = myNum;
		$(yourClass+' .clL').click(function(e) {
			var num = parseInt($(this).parent().children('.count').val());
			num--;
			if(num < 0){
				num = 0;	
			}
			$(this).parent().children('.count').val(num);		
			//console.log($(this).parent().children('.count').val());
		});
		$(yourClass+' .clR').click(function(e) {
			var num = parseInt($(this).parent().children('.count').val());
			num++;
			if(num > maxNum){
				num = maxNum;	
			}
			$(this).parent().children('.count').val(num);		
			//console.log($(this).parent().children('.count').val());
		});
	}
	clNumChange('.hd-inner .ir .gosp .sub .slibd .goods .txt .card',20);
	clNumChange('.hd-inner .ir .gosp .sub .slibd .goods .txt .clo',10);
//			var maxNum = 100;
//		$('.hd-inner .ir .gosp .sub .slibd .goods .txt .clL').click(function(e) {
//			var num = parseInt($(this).parent().children('.count').val());
//			num--;
//			if(num < 0){
//				num = 0;	
//			}
//			$(this).parent().children('.count').val(num);		
//			//console.log($(this).parent().children('.count').val());
//		});
//		$('.hd-inner .ir .gosp .sub .slibd .goods .txt .clR').click(function(e) {
//			var num = parseInt($(this).parent().children('.count').val());
//			num++;
//			if(num > maxNum){
//				num = maxNum;	
//			}
//			$(this).parent().children('.count').val(num);		
//			//console.log($(this).parent().children('.count').val());
//		});	
		
	
	//上下切换
	
	var myLoop = '.hd-inner .ir .gosp .sub .slibd';
	/*var addNum = 2;	
	for(var i = 0; i < addNum; i++){
		 $( myLoop +' ul').append($( myLoop +' ul li').eq(i).clone(true));
	}*/
	var myHegiht = $( myLoop +' ul li').height()+16;
	var myLiNum = $( myLoop +' ul li').length;
	var myLiNumChange = myLiNum - 2;
	var lNum = 0;
	$(myLoop+' .downBtn').click(function(e) {
		$(this).siblings().removeAttr('title');
		lNum ++;
		if(lNum > myLiNumChange){
			lNum = myLiNumChange;
			$(this).attr('title','到底了!');  	
		}
		$( myLoop +' ul').stop().animate({'top':-myHegiht*lNum+'px'},500);
    });
	
	$(myLoop+' .upBtn').click(function(e) {
		$(this).siblings().removeAttr('title');
		lNum --;
		if(lNum <0 ){
			lNum = 0;
			$(this).attr('title','到顶了!');  	
		}
		$( myLoop +' ul').stop().animate({'top':-myHegiht*lNum+'px'},500);
    });
	
	//中英文
	$('.cen-inner .lan a').eq(0).addClass('addBg').siblings().removeClass('addBg');
	$('.cen-inner .lan a').eq(1).hide();
	var chL1 = $('.cen-inner .lan a').eq(0).html();
	var chL2 = $('.cen-inner .lan a').eq(1).html();
	$('.cen-inner .lan').hover(function(e) {
		$(this).children('a').eq(1).show();
	}, function(e) {
		$(this).children('a').eq(1).hide();
	});
	
	$('.cen-inner .lan a').eq(1).click(function(e) {
		var temp = '';
		temp = chL1
		chL1 = chL2;
		chL2 = temp;
		$('.cen-inner .lan a').eq(0).html(chL1);
		$('.cen-inner .lan a').eq(1).html(chL2);
		$('.cen-inner .lan a').eq(1).hide();
	});
	
	//导航滑过
	var wb = 166;	//960-794
	var aLiw = new Array();
	var lil = $('.nav-inner .navUl').children('li').length;
	for(var i = 0; i < lil; i++){
		aLiw[i] = $('.nav-inner .navUl').children('li').eq(i).width();
		//console.log(aLiw[i]);
	}
	/*$('.nav-inner .navUl li.li01 .subNav').css('left', -(wb+0)+'px');
	$('.nav-inner .navUl li.ii02 .subNav').css('left', -(wb+aLiw[0])+'px');
	$('.nav-inner .navUl li.li03 .subNav').css('left', -(wb+aLiw[0]+aLiw[1])+'px');*/
	
	$('.nav-inner .navUl li').hover(function(e) {
		$(this).find('h2 a').addClass('current');
		$(this).find('.tri').show();
		$(this).find('.subNav').show();
	}, function(e) {
		$(this).find('h2 a').removeClass('current');
		$(this).find('.tri').hide();
		$(this).find('.subNav').hide();
	});	
	
	//一些样式
	$('.nav-inner .navUl li.li04 .subNav .subList li .cllist:first').css('padding-left', '0');
	$('.nav-inner .navUl li.li04 .subNav .subList li .cllist:last').css('border-right', '0');
})