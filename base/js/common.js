
jQuery(function($){
	$('#header .toplink ul li:eq(0)').css('background','none');
	$('#contents .toplinkset ul li:last-child').css('background','none');
	$('#footer .link ul li:last-child').addClass('end');
	
	// 메인 탭
	var main_gnb = false;
	var time;
	$('.mc_box .gnbmenu').mouseleave(function(){
		if(main_gnb == false){ 
			main_gnb = true;
			 time = setTimeout(function(){
				$('.mc_box .gnbmenu li').removeClass('on');
				main_gnb = false;
			},2500);
		}
	});
	
	$('.gnbmenu li').mouseover(function(){
		clearInterval(time);
		main_gnb = false;
		$('.gnbmenu li').removeClass('on');
		$(this).addClass('on');
	});
	
	$('.gnbmenu>li>a').focus(function(){
		$('.gnbmenu li').removeClass('on');
		$(this).parent().addClass('on');
	});
	
	$('.submenu ul li').mouseover(function(){
		$('.lnb_on').removeClass('lnb_on');
		$(this).addClass('lnb_on');
	});
	
	$('.submenu>ul>li>a').focus(function(){
		$('.lnb_on').removeClass('lnb_on');
		$(this).parent().addClass('lnb_on');
	});
	
	$('.tablist h3').click(function(){
		$('.tablist').removeClass('on');
		$(this).parent().addClass('on');
	});
	
	
	$('.gnbm h3').mouseover(function(){
		$('.gnbm').removeClass('on');
		$(this).parent().addClass('on');
	});

	$('.gnbm h3 a').focus(function(){
		$('.gnbm').removeClass('on');
		$(this).parent().parent().addClass('on');
	});
	
	
	$('.subbox > ul > li').mouseover(function(){
		$('.subbox > ul > li').removeClass('gnb_on');
		$(this).addClass('gnb_on');
	});
	
	$('.subbox > ul > li > a').focus(function(){
		$('.subbox > ul > li').removeClass('gnb_on');
		$(this).parent().addClass('gnb_on');
	});

	$('.sidebar ul li a').mouseover(function(){
		$(this).next().append($('#sidebarbox'));
		$('#sidebarbox .box').html($(this).children().attr('alt'));
		$('#sidebarbox').show();
	});
	$('.sidebar ul li a').focus(function(){
		$(this).next().append($('#sidebarbox'));
		$('#sidebarbox .box').html($(this).children().attr('alt'));
		$('#sidebarbox').show();
	});	
	$('.sidebar ul li a').mouseout(function(){
		$('#sidebarbox').hide();
	});	
	$('.sidebar ul li a').blur(function(){
		$('#sidebarbox').hide();
	});
	$('.lnbm li').mouseover(function(){
		$('.lnbm li').removeClass('on');
		$(this).addClass('on');
	});

	$('.lnbm li a').focus(function(){
		$('.lnbm li').removeClass('on');
		$(this).parent().addClass('on');
	});
	
	
/* 메인 수정으로 미사용
	$('.gnb_menu li').mouseover(function(){
		$('.gnb_menu li').removeClass('on');
		$(this).addClass('on');
	});
	
	$('.gnb_menu li').mouseout(function(){
		$('.gnb_menu li').removeClass('on');
	});	

	$('.gnb_menu li a').focus(function(){
		$('.gnb_menu li').removeClass('on');
		$(this).parent().addClass('on');
	});
	
	$('.gnb_menu li a').mouseout(function(){
		$('.gnb_menu li').removeClass('on');
	});	
*/	
	
	
	//input 텍스트 val값 조절
	/*
	var text_val = '차량번호입력';
	$('input#lb_viewform, input#lb_viewform2').val(text_val);
	
	$('input#lb_viewform, input#lb_viewform2').focus(function(){
		$(this).css('color','#272727');
		if($(this).val() == text_val) {
			$(this).val('');
		}
	});
	$('input#lb_viewform, input#lb_viewform2').blur(function(){
		if ($(this).val() == '' && text_val != '') {
			$(this).css('color','#999999');
			$(this).val(text_val);
		}
	});
	*/
});

function menuload(a,b){
	$('.gnbm').removeClass('on');
	$('.lnbm li').removeClass('on');

	//$('.gnbm:eq('+(a-1)+')').addClass('on');
	$('.lnbm li:eq('+(b-1)+')').addClass('on');

	var gnb_on = $('.gnbmenu ul li.on'),  timecheck_gnb = false;
	$('.gnbmenu').mouseleave(function(){

		if(timecheck_gnb == false){ 
			timecheck_gnb = true;
			setTimeout(function(){
				$('.gnbm').removeClass('on');
				gnb_on.addClass('on');
				timecheck_gnb = false;
			},2000);
		}
	});
	var sub_on = $('.lnbm li.on'), timecheck_sub = false;
	$('.lnbm').mouseleave(function(){
		if(timecheck_sub == false){ 
			timecheck_sub = true;
			setTimeout(function(){
			$('.lnbm li').removeClass('on');
				sub_on.addClass('on');
				timecheck_sub = false;
			},2000);
		}
	});	
	
	
	//서브메뉴 스크롤
	$(function() {
		var offset = $(".sidebar").offset();
		var topPadding = 15;
		$(window).scroll(function() {
			if ($(window).scrollTop() > offset.top) {
				$(".sidebar").stop().animate({
					marginTop: $(window).scrollTop() - offset.top + topPadding
				});
			} else {
				$(".sidebar").stop().animate({
					marginTop: 0
				});
			};
		});
	});
}
;(function($){
	$.fn.inputKeyCode = function(options){
		options = $.extend({
			href:"javascript:doLogin()"
		},options);
		return this.keypress(function(e){
			if(e.keyCode == 13){
				location.href = options.href;
			};
		});
	};
})(jQuery);