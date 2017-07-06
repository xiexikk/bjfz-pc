// JavaScript Document

$(function(){
/*folder : detail-account begin*/
	/*dliac_addr.html*/
	$('#addressDetail,#postCode,#receiverName,#mobileNumber,#phoneNumber').focus(function(e) {
		var myText = $(this).siblings();
		if(myText.html()!=''){
			myText.html('');
		}
    });	
	function myBlur_addr(yourID){		
		var txt = $(yourID).closest('em').find('label').html();
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
	myBlur_addr('#addressDetail');
	myBlur_addr('#postCode');
	myBlur_addr('#receiverName');
	myBlur_addr('#mobileNumber');
	myBlur_addr('#phoneNumber');
	
	/*dliac_favo.html*/
		//收藏夹mr0
	var favoNum = $('.account-inner .con_favo .con ul li').length;
	for(var i = 2; i < favoNum; i += 3){
		$('.account-inner .con_favo .con ul li').eq(i).addClass('noMr');
	}
	
		//全选
	function toggleSelectAll(classA, classCon){
		$(classA).click(function(e) {
			if( $(this).attr('checked') ){
				//$(classCon).attr('checked',true);
			}else{
				$(classCon).attr('checked',false);
			}
   		 });		 
		var chksum = $(classCon).size();
		function allchk(){
			var chk = 0;
			for(var i = 0; i < chksum; i++){				
				if($(classCon).eq(i).attr("checked")){
					chk++;  
					console.log(chk);
				}  
			}
			if(chksum == chk){        
				$(classA).attr("checked",true);
			}else{
				$(classA).attr("checked",false);
			} 
		}
		$(classCon).click(function(){ allchk() });
	}
	toggleSelectAll('.account-inner .con_favo .foot .foot-l input', '.account-inner .con_favo .con ul li input');
	
	$('.account-inner .con_favo .foot .foot-m a').eq(1).addClass('noBr');
		//划过出现op
	$('.account-inner .con_favo .con ul li .op').hide();
	$('.account-inner .con_favo .con ul li').hover(function(e) {
		$(this).find('.op').show();
	}, function(e) {
		$(this).find('.op').hide();
	});
		
	/*dliac_me.html*/
	$('#trueName,#comMail').focus(function(e) {
		var myText = $(this).siblings();
		if(myText.html()!=''){
			myText.html('');
		}
    });
	function myBlur_me(yourID){	
		var txt = $(yourID).closest('em').find('label').html();
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
	myBlur_me('#trueName');
	myBlur_me('#comMail');
	
	/*dliac_ordser.html*/
		
	/*dliac_psw.html*/
	
	/*dliac_scar.html*/
	$('.account-inner .con_scar .foot .foot-m a').eq(1).addClass('noBr');
		//全选
	var clAx = '.account-inner .con_scar .item-th .th-selectAll input';
	var clAy = '.account-inner .con_scar .foot .foot-l input';
	var clCon = '.account-inner .con_scar .item-wrap ul li input.checkbox';
	toggleSelectAll(clAx, clCon);
	toggleSelectAll(clAy, clCon);
	function ala(classA, classB){
		if($(classA).attr("checked")){
			$(classB).attr("checked",true);
		}else{
			$(classB).attr("checked",false);
		}
	}
	$(clAx).click(function(){ ala(clAx, clAy) });
	$(clAy).click(function(){ ala(clAy, clAx) });		

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
	clNumChange('.account-inner .con_scar .item-wrap ul li .card',100);
	clNumChange('.account-inner .con_scar .item-wrap ul li .clo',50);
	/*dliac_success.html*/
		/*for himself*/
/*folder : detail-account end*/


/*folder : detail-attraction begin*/
	/*dliat_.html*/
/*folder : detail-attraction end*/


/*folder : detail-info begin*/	
	/*dliin_able.html*/	
	
	/*dliin_about.html*/
	$('.info-inner .con_about .banner .play ul li').eq(0).show().siblings().hide();
	$('.info-inner .con_about .banner ol li').eq(0).addClass('current').siblings().removeClass('current');
	var abuli_l = $('.info-inner .con_about .banner ul li').length; 
	//console.log(abuli_l);
	var abol_ml = -(abuli_l*27) / 2;
	$('.info-inner .con_about .banner ol').css('margin-left', abol_ml+'px');
	function bSt02f(yourClass, yourPicNum){
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
	bSt02f('.info-inner .con_about .banner', abuli_l);
	/*dliin_activity.html*/
	$('.info-inner .con_activity .banner .play ul li').eq(0).show().siblings().hide();
	$('.info-inner .con_activity .banner ol li').eq(0).addClass('current').siblings().removeClass('current');
	var aculi_l = $('.info-inner .con_activity .banner ul li').length; 
	//console.log(abuli_l);
	var acol_ml = -(aculi_l*27) / 2;
	$('.info-inner .con_activity .banner ol').css('margin-left', acol_ml+'px');	
	bSt02f('.info-inner .con_activity .banner', aculi_l);
	
	var chcol = $('.info-inner .con_activity .exhinfo table tr').length;
	for(var i = 1; i < chcol; i++){			
		if($('.info-inner .con_activity .exhinfo table tr').eq(i).children('td').eq(0).html()=='待定' || $('.info-inner .con_activity .exhinfo table tr').eq(i).children('td').eq(0).html() == 'undetermined'){
			$('.info-inner .con_activity .exhinfo table tr').eq(i).addClass('gray');
		}
	}
	/*dliin_contact.html*/
		//下拉
	$('#country,#city,#street').click(function(e) {
        $(this).children('ul').toggle()
    });	
	function sel(yourID){			
		$(yourID+' ul li a').click(function(e) {
			var myCon = $(this).html()
			var myT = $(yourID+' a em')
			myT.html(myCon)
		});
	}
	sel('#country');
	sel('#city');
	sel('#street');	
	
		//空白处，排他隐藏
	$('.info-inner .con_contact .sel form').click(function(event) {
		event.stopPropagation();
		$(this).siblings().find('ul').hide();		
    });
	$(document).click(function(event) {
      $('.info-inner .con_contact .sel form').find('ul').hide(); 
    });
	
		//地点
	var contln = $('.info-inner .con_contact .addr-in ul li').length;
	for(var i = 0; i < contln; i++){		
		$('.info-inner .con_contact .addr-in ul li').eq(i).children('p').eq(0).addClass('bla');
	}
	$('.info-inner .con_contact .addr-in ul li').hover(function(e) {
		$(this).children('p').eq(0).removeClass('bla');
	}, function(e) {
		$(this).children('p').eq(0).addClass('bla');
	});
	$('.info-inner .con_contact .addr-in ul li').click(function(e) {
		$(this).addClass('current').siblings().removeClass('current');
		$('.info-inner .con_contact .addr-in ul li p').eq(0).addClass('bla');
		$(this).children('p').eq(0).addClass('whi');
	});
	
	/*dliin_create.html*/	
	var cre = $('.info-inner .con_create .bd .show').length;
	for(var i = 1; i < cre; i += 2){
		$('.info-inner .con_create .bd .show').eq(i).children('.pic').addClass('change');
		$('.info-inner .con_create .bd .show').eq(i).children('.txt').addClass('change');
	}
	/*dliin_factory.html*/
	var facl = $('.info-inner .con_factory .show ul li').length;
	for(var i = 3; i < facl; i += 4){
		$('.info-inner .con_factory .show ul li').eq(i).addClass('noMr');
	}
	/*dliin_honor.html*/
	
	/*dliin_information.html*/
	
	/*dliin_privacy.html*/
/*folder : detail-info end*/


/*folder : detail-service begin*/
	/*dlise_comques.html*/	
	$('.service-inner .con_comques .con ul li').children('p').hide();
	$('.service-inner .con_comques .con ul li h3').click(function(e) {
		$(this).parent().siblings().children('h3').removeClass('fly');
		$(this).parent().siblings().children('p').hide();
		$(this).siblings().stop().slideToggle(200);
		$(this).toggleClass('fly');
	});
	
	/*dlise_cusser.html*/
	var txt_feedback = $('#feedback').closest('div').find('label').html();
	$('#feedback').focus(function(e) {
		var myText = $('.service-inner .con_cusser .fb .txtinp .fbcc');
		if(myText.html()!=''){
			myText.html('');
		}
    });
	$('#feedback').blur(function(e) {
		var myText = $('.service-inner .con_cusser .fb .txtinp .fbcc');
		if(myText.html()==''){
			myText.html(txt_feedback);
		}
		var myValues = $(this).val()
		if(myValues!=''){
			myText.hide()	
		}else{
			myText.show()
		}
    });
	
	/*dlise_orderpro.html*/
		
	/*dlise_subsinfo.html*/
	var txt_mail = $('#mail').closest('div').find('label').html();
	$('#mail').focus(function(e) {
		var myText = $('.service-inner .con_subsinfo .con .inp label');
		if(myText.html()!=''){
			myText.html('');
		}
    });
	$('#mail').blur(function(e) {
		var myText = $('.service-inner .con_subsinfo .con .inp label');
		if(myText.html()==''){
			myText.html(txt_mail);
		}
		var myValues = $(this).val()
		if(myValues!=''){
			myText.hide()	
		}else{
			myText.show()
		}
    });
/*folder : detail-service end*/


/*folder : detail-spot begin*/
	/*detail-spot01.html*/
		//放水前后对比
	/*$('.spot-inner .detail .bd .pics .compare .txt a').eq(0).hover(function(e) {
		$(this).addClass('current').siblings().removeClass('current');
		$(this).closest('.compare').find('.pic a').eq(0).show().siblings().hide();
	});
	$('.spot-inner .detail .bd .pics .compare .txt a').eq(1).hover(function(e) {
		$(this).addClass('current').siblings().removeClass('current');
		$(this).closest('.compare').find('.pic a').eq(1).show().siblings().hide();
	});*/
		//上下切换
	var myLoop = '.spot-inner .detail .bd .pics .loop';
	var myHegiht = $( myLoop +' ul li').height()+7;
	var myLiNum = $( myLoop +' ul li').length;
	var myLiNumChange = myLiNum - 2;
	var lNum = 0;
	$(myLoop+' .dBtn').click(function(e) {
		$(this).siblings().removeAttr('title');
		lNum ++;
		if(lNum > myLiNumChange){
			lNum = myLiNumChange;
			$(this).attr('title','到底了!');  	
		}
		$( myLoop +' ul').stop().animate({'top':-myHegiht*lNum+'px'},500);
    });
	
	$(myLoop+' .uBtn').click(function(e) {
		$(this).siblings().removeAttr('title');
		lNum --;
		if(lNum <0 ){
			lNum = 0;
			$(this).attr('title','到顶了!');  	
		}
		$( myLoop +' ul').stop().animate({'top':-myHegiht*lNum+'px'},500);
    });
	/*$('.spot-inner .detail .bd .bpics .pic').hover(function(e) {
		$(this).children('.zoom-in').stop().fadeToggle(300);
	});*/
		//购买数量
	clNumChange('.spot-inner .detail .bd .pro_detail .bt .buy .card',10);
	clNumChange('.spot-inner .detail .bd .pro_detail .bt .buy .cloth',5);
	
		//热销单品
	function letsPlay(yourClass){
		var liWidth = 240;
		var liNum = $(yourClass+' ul li').length;;
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
	letsPlay('.spot-inner .hot .hot-inner .bd');	
/*folder : detail-spot end*/

/*ch 9.14*/
/*dliac_psw-find.html*/
	var old_lc = $('.con_find-inner .code label').html();
	$('.con_find-inner .code .inpCode').focus(function(e) {
		$(this).parent('.code').find('label').hide();
	});
	$('.con_find-inner .code .inpCode').blur(function(e) {
		if($(this).val() == ''){
			$(this).parent('.code').find('label').show();
		}
	});
})