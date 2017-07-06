/*
	<div class="banner-bd">
		<ul>
			li
			...
			li
		</ul>
		<a class="lBtn"></a>
		<a class="rBtn"></a>
		<ol>
			li
			...
			li
		</ol>
	</div>
*/

/*
	ex:		bSt01('.con', 800, 6);		className/px/picNum
			bSt02('.con', 5);			className/picNum
			bSt03('.con', 400, 4);		className/px/picNum
*/

function bSt01(yourClass, yourPicWidth, yourPicNum){
	var picIndex = yourPicNum - 1;
	var num = 0;
	
	$(yourClass).hover(function(e) {
		$(yourClass+' .lBtn,'+yourClass+' .rBtn').show();
	}, function(e) {
		$(yourClass+' .lBtn,'+yourClass+' .rBtn').hide();
	});
	$(yourClass+' .rBtn').click(function(e) {
		num++;
		if(num > picIndex){
			num = 0;
		}
		$(yourClass+' ol li').eq(num).addClass('current').siblings().removeClass('current');
		$(yourClass+' ul').stop().animate({'left':-yourPicWidth*num+'px'}, 300);
	});
	$(yourClass+' .lBtn').click(function(e) {
		num--;
		if(num < 0){
			num = picIndex;
		}
		$(yourClass+' ol li').eq(num).addClass('current').siblings().removeClass('current');
		$(yourClass+' ul').stop().animate({'left':-yourPicWidth*num+'px'}, 300);
	});
	$(yourClass+' ol li').click(function(e) {
		num = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(yourClass+' ul').stop().animate({'left':-yourPicWidth*num+'px'}, 300);
	});
}

function bSt02(yourClass, yourPicNum){
	//$(yourClass+' ul li').eq(0).show();
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

function bSt03(yourClass, yourPicWidth, yourPicNum){
	$(yourClass+' ul').append($(yourClass+' ul li').eq(0).clone(true));
	var picIndex = yourPicNum - 1;
	var loopNum = 0;
	var dotNum = 0;
	var timer01 = null;
	var rBtnClFn = function(e) {
		dotNum++;
		if(dotNum > picIndex){
			dotNum = 0;
		}
		$(yourClass+' ol li').eq(dotNum).addClass('current').siblings().removeClass('current');
		loopNum++;
		if(loopNum > yourPicNum){
			loopNum = 1;
			$(yourClass+' ul').css('left','0');
		}
		$(yourClass+' ul').stop().animate({'left':-yourPicWidth*loopNum+'px'}, 300);
	};
	var lBtnClFn = function(e) {
		dotNum--;
		if(dotNum < 0){
			dotNum = picIndex;
		}
		$(yourClass+' ol li').eq(dotNum).addClass('current').siblings().removeClass('current');
		loopNum--;
		if(loopNum < 0){
			loopNum = picIndex;
			$(yourClass+' ul').css('left',-yourPicWidth*(loopNum+1)+'px');
		}
		$(yourClass+' ul').stop().animate({'left':-yourPicWidth*loopNum+'px'}, 300);
	};
	
	timer01 = setInterval(rBtnClFn, 2000);
	$(yourClass).hover(function(e) {
		clearInterval(timer01);
	}, function(e) {
		clearInterval(timer01);
		timer01 = setInterval(rBtnClFn, 2000);
	});	
	$(yourClass+' .rBtn').click(rBtnClFn);
	$(yourClass+' .lBtn').click(lBtnClFn);
	$(yourClass+' ol li').click(function(e) {
		dotNum = $(this).index();
		loopNum = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(yourClass+' ul').stop().animate({'left':-yourPicWidth*loopNum+'px'}, 300);
	});	
}
