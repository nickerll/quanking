$(function(){
	$.ajax({
		url:"js/ssr.txt",
		type:"get",
		data:{},
		async:false,
		datatype:"json",
	}).done(function(result){
		var Img=eval(result)[0].all
		var Wo=eval(result)[0].word
		var Sr=eval(result)[0].sysid
		for(var i=0;i<Img.length;i++){
			$('.rolelist').append(`<li class="all ${Sr[i]}"><img src="img/gedoujia/${Img[i]}"/><p>${Wo[i]}</p></li>`)
		}
		$('.ssr li').click(function(){
			$('.ssr li').removeClass('alli')
			$(this).addClass('alli')
			var tit = $(this).attr('title')
			$('.rolelist li').hide().filter(`.${tit}`).show()
		})
		$('#sou').focus(function(){
			for(var i=0;i<$('.rolelist li p').length;i++){
				if($('#sou').val()==$('.rolelist li p').eq(i).text()){
					$('.rolelist li').hide()
					$('.rolelist li p').eq(i).parent().show()
					console.log()
				}
			}
		})
	})
	
	
	
})