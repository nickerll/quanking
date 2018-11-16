$(function(){
	$('.juqing').find('li').mouseover(function(){
		$('.juqing').find('li').removeClass('red')
		$(this).addClass('red')
		$('.juqing').find('li').find('p').removeClass('white')
		$(this).find('p').addClass('white')
	})
	
	
	$(window).scroll(function(){
		if($(document).scrollTop()>$(window).height()){
			$('.side-nav').css('display','block')
			$('.side-nav').fadeIn()
			if($(document).scrollTop()==1219){
				$('.side-nav ul li').removeClass('totop')
				$('.side-nav ul li').eq(1).addClass('totop')
			}else if($(document).scrollTop()==2726){
				$('.side-nav ul li').removeClass('totop')
				$('.side-nav ul li').eq(2).addClass('totop')
			}else if($(document).scrollTop()==3263){
				$('.side-nav ul li').removeClass('totop')
				$('.side-nav ul li').eq(3).addClass('totop')
			}
		}else{
			$('.side-nav ul li').removeClass('totop')
			$('.side-nav').css('display','none')
		}
		
	})
	
	
	
	
	
	
	
})