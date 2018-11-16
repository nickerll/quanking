$(function(){
	// 点击左侧top 返回到顶部
	$('.top1').click(function(){
		$('html').animate({'scrollTop':0},500)
	})
	
	// 新闻资讯左侧小的轮播
	var now=0
	var timer1=null
	$('.btn1 span').mouseover(function(){
		now=$(this).index()//把当前按钮的下标赋值给now
		move()//执行move
	})
	function move(){
		$('.btn1 span').css('background','#878787')
		$('.btn1 span').eq(now).css('background','red')
		$('.gbox').css('left',now*-247)
	}
	timer1=setInterval(function(){
		now++
		if(now==$('.btn1 span').length){
			now=0
		}
		move()
	},2000)
	
})
