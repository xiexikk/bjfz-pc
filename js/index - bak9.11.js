// JavaScript Document

$(function(){
	//banner
	//$('.banner-inner .bannerImg li').css('opacity','1');
	$('.banner-inner .bannerImg li').eq(0).show().siblings().hide();
	$('.banner-inner .dots li').eq(0).addClass('current').siblings().removeClass('current');
	var uli_length = $('.banner-inner .bannerImg li').length;	//oli_length=uli_length
	//console.log(uli_length);
	var ol_ml = -(uli_length*27) / 2;
	$('.banner-inner .dots').css('margin-left', ol_ml+'px');
	
	
	function bSt02ff(yourClass, yourPicNum){
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
	bSt02ff('.banner-inner', uli_length);
	
	//产品卖点
	$('.attr-inner .bd .lp,.attr-inner .bd .rp li').hover(function(e) {
		$(this).children('.txt').addClass('current');
	}, function(e) {
		$(this).children('.txt').removeClass('current');
	});
	
	//热销单品
	function letsPlay(yourClass){
		var liWidth = 240;
		var liNum = $(yourClass+' ul li').length;
		//console.log(liNum);
		var showNum = 4;
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
	letsPlay('.hot-inner .bd');	
})