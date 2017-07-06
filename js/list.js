// JavaScript Document

$(function(){
	/*list_spot.html*/
		//新品、最佳单品
	function letsPlay(yourClass){
		var liWidth = 264;
		var liNum = $(yourClass+' ul li').length;;
		//console.log(liNum);
		var showNum = 3;
		$(yourClass+' ul').width(liWidth*(liNum+showNum)+'px');
		for(var i = 0; i < showNum; i++){
				$(yourClass+' ul').append($(yourClass+' ul li').eq(i).clone(true));
		}	
			
		var picIndex = liNum-1;
		var loopNum = 0;
		var rBtnClFn = function(e) {
			//loopNum++;
			loopNum+=showNum;
			if(loopNum > liNum){
				//loopNum = 1;
				loopNum = showNum;
				$(yourClass+' ul').css('left','0');
			}
			//console.log(loopNum);
			$(yourClass+' ul').stop().animate({'left':-liWidth*loopNum+'px'}, 500);
		};
		var lBtnClFn = function(e) {
			//loopNum--;
			loopNum-=showNum;
			if(loopNum < 0){
				loopNum = liNum-showNum;		//liNum-showNum
				$(yourClass+' ul').css('left',-liWidth*(loopNum+showNum)+'px');
			}
			//console.log(loopNum);
			$(yourClass+' ul').stop().animate({'left':-liWidth*loopNum+'px'}, 500);
		};
		$(yourClass+' .lrBtn .rBtn').click(rBtnClFn);
		$(yourClass+' .lrBtn .lBtn').click(lBtnClFn);
		var timer01 = null;		
		timer01 = setInterval(rBtnClFn, 5000);	
		$(yourClass).hover(function(e) {
			clearInterval(timer01);
		}, function(e) {
			clearInterval(timer01);
			timer01 = setInterval(rBtnClFn, 5000);
		});
	}
/*	function letsPlay(yourClass){
		var liWidth = 264;
		var liNum = $(yourClass+' ul li').length;;
		//console.log(liNum);
		var showNum = 3;
		$(yourClass+' ul').width(liWidth*(liNum+showNum)+'px');
		for(var i = 0; i < showNum; i++){
				$(yourClass+' ul').append($(yourClass+' ul li').eq(i).clone(true));
		}	
			
		var picIndex = liNum-1;
		var loopNum = 0;
		var rBtnClFn = function(e) {
			loopNum++;
			if(loopNum > liNum){
				loopNum = 1;
				$(yourClass+' ul').css('left','0');
			}
			//console.log(loopNum);
			$(yourClass+' ul').stop().animate({'left':-liWidth*loopNum+'px'}, 300);
		};
		var lBtnClFn = function(e) {
			loopNum--;
			if(loopNum < 0){
				loopNum = picIndex;
				$(yourClass+' ul').css('left',-liWidth*(loopNum+1)+'px');
			}
			//console.log(loopNum);
			$(yourClass+' ul').stop().animate({'left':-liWidth*loopNum+'px'}, 300);
		};
		$(yourClass+' .lrBtn .rBtn').click(rBtnClFn);
		$(yourClass+' .lrBtn .lBtn').click(lBtnClFn);		
	}*/
	letsPlay('.spot-inner .contents .new .bd');	
	letsPlay('.spot-inner .contents .best .bd');
	
	/*list_spot-select.html*/
	$('.con_sposel .banner ul li').eq(0).show().siblings().hide();
	$('.con_sposel .banner ol li').eq(0).addClass('current').siblings().removeClass('current');
	var uli_len = $('.con_sposel .banner ul li').length;
	//console.log(uli_len);
	var ol_mt = -(uli_len*14-7) / 2;
	$('.con_sposel .banner ol').css('margin-top',ol_mt+'px');
	function bSt02(yourClass, yourPicNum){
		$(yourClass+' ul li').eq(0).show();
		var picIndex = yourPicNum - 1;
		var num = 0;
		var timer01 = null;
		var rBtnClFn = function(e) {
			$(yourClass+' ul li').eq(num).stop().fadeOut();
			num++;
			if(num > picIndex){
				num = 0;
			}
			$(yourClass+' ol li').eq(num).addClass('current').siblings().removeClass('current');
			$(yourClass+' ul li').eq(num).stop().fadeIn();
		};
		var lBtnClFn = function(e) {
			$(yourClass+' ul li').eq(num).stop().fadeOut();
			num--;
			if(num < 0){
				num = picIndex;
			}
			$(yourClass+' ol li').eq(num).addClass('current').siblings().removeClass('current');
			$(yourClass+' ul li').eq(num).stop().fadeIn();			
		};
		
		timer01 = setInterval(rBtnClFn, 2000);
		
		$(yourClass).hover(function(e) {
			//$(yourClass+' .lBtn,'+yourClass+' .rBtn').show();
			clearInterval(timer01);
		}, function(e) {
			//$(yourClass+' .lBtn,'+yourClass+' .rBtn').hide();
			clearInterval(timer01);
			timer01 = setInterval(rBtnClFn, 2000);
		});
		$(yourClass+' .rBtn').click(rBtnClFn);
		$(yourClass+' .lBtn').click(lBtnClFn);
		$(yourClass+' ol li').click(function(e) {
			var beforeNum = num;
			num = $(this).index();
			$(this).addClass('current').siblings().removeClass('current');
			$(yourClass+' ul li').eq(beforeNum).stop().fadeOut();
			$(yourClass+' ul li').eq(num).stop().fadeIn();
		});		
	}
	bSt02('.spot-inner .con_sposel .banner', uli_len);
	
	$('.spot-inner .aside .cls .clhd').click(function(e) {
		$(this).toggleClass('fly');
		$(this).siblings().stop().slideToggle(300);
	});
	var li_Num = $('.con_sposel .show .bd ul li').length;
	for(var n=2; n<li_Num; n+=3){
		$('.con_sposel .show .bd ul li').eq(n).css('margin-right','0');
	}
	
	/*list_attraction.html*/
		//mr0的添加
	var liN = $('.attraction-inner .article .new-product .product ul li').length;
	//console.log(liN);
	for(var i = 2; i < liN; i += 3){
		$('.attraction-inner .article .new-product .product ul li').eq(i).addClass('mr0');
	}
	
	$('.attraction-inner .article .new-product .product ul li a').hover(function(e) {
		$(this).parent().find('h4 a').toggleClass('current');
	});
	
		//划过logo变化
	$('.con_sposel .show .bd ul li').hover(function(e) {
		//console.log($(this).find('.what img').attr('src'));
		//console.log($(this).find('.what img').attr('rel'));
		var chSrc = $(this).find('.what img').attr('src');
		var chRel = $(this).find('.what img').attr('rel');
		var temp = '';
		temp = chSrc;
		chSrc = chRel;
		chRel = temp;
		$(this).find('.what img').attr('src', chSrc);
		$(this).find('.what img').attr('rel', chRel);
	});
})