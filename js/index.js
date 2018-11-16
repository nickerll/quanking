$(function(){
	var now=0
	var timer=null
	$('.btn a').hover(function(){//当鼠标滑动到按钮上时
		clearInterval(timer)//清除定时器
		now=$(this).index()//获取到当前的按钮的下标
		move()//执行move()
	},function(){//当鼠标划出时
		timer=setInterval(star,3000)//执行定时器
	})
	$(".toright").click(function(){//点击右侧按钮时
		clearInterval(timer)//清除定时器
		//执行函数
		now++
		clickshow()
		move()
		//定时器继续执行
		timer=setInterval(star,3000)
	})
	$(".toleft").click(function(){//当点击左侧按钮时
		clearInterval(timer)//清除定时器
		now--
		if(now<0){//当now小于零时
			now=$('.btn a').length-1//now下标跳转到最后一个
		}
		if(now==2){//当now下标为2时，让包裹整个按钮的盒子向左移动一个li标签的长度
			$('.btn').css('left',(now-2)*220)
		}
		if(now==3){//因为now--，减到小于零的时候跳转到最后一个下标为3，所以让它向左移动一个li标签的长度
			$('.btn').css('left',-220)
		}
		move()
		timer=setInterval(star,3000)//当不再点击左侧按钮定时器继续执行
	})
	function clickshow(){//点击右侧按钮
		if(now==$('.btn a').length){
			now=0
		}
		if(now>2){
			$('.btn').css('left',(now-2)*-220)
		}else{
			$('.btn').css('left',0)
		}
	}
	function move(){//图片和按钮的运动
		$('.newin').css('left',now*-663)
		$('.btn a').css('color','#918D8D')
		$('.btn a').eq(now).css('color','white')
	}
	function star(){//将两个函数放在一个函数里
		now++
		clickshow()
		move()
	}
	timer=setInterval(star,3000)//执行定时器
	$('.newin').eq(now).hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(star,3000)
	})
	
	// 热门 新闻 公告 活动
	$('.nwrito ul li').mouseover(function(){
		$('.nwrito ul li').removeClass('on1')
		$(this).addClass('on1')
		$('.nwrito ul li').find('span').remove()
		$(this).append("<span class='on'></span>")
		$('.gogaco ul').eq($(this).index()).show().siblings().hide()
	})
	// 攻略 新手专区
	$('.tuwen').eq(0).show().siblings().hide()
	$('.ul li').mouseover(function(){
		$('.ul li').removeClass('ll')
		$(this).addClass('ll')
		$('.tuwen').eq($(this).index()).show().siblings().hide()
		
	})
	// 视频中心
	$('.shiping').eq(0).show().siblings().hide()
	$('.shizhong li').mouseover(function(){
		$('.shizhong li').removeClass('ll')
		$(this).addClass('ll')
		$('.shiping').eq($(this).index()).show().siblings().hide()
	})
	// 同人专区
	$('.shiping2').eq(0).show().siblings().hide()
	$('.shi li').mouseover(function(){
		$('.shi li').removeClass('ll')
		$(this).addClass('ll')
		$('.shiping2').eq($(this).index()).show().siblings().hide()
	})
	// 格斗家专区选项卡
	var bg=parseInt($('.geco').css('background-position-x'))
	var time=setInterval(function(){
		bg--
		$('.geco').css('background-position-x',bg)
	},30)
	
	
	
	
	
	
	
	
})