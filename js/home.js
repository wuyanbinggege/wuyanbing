var flag = true;
	var timer = setInterval(autoPlay , 3000);
    var index = 0;
    function autoPlay(){
     	index++;
     	if(index == 4){
     		index = 0;
     	}
     	$(".banner_u2 li").eq(index).addClass("active").siblings().removeClass("active");
     	$(".banner_u1").animate({"left":-1900*index},1500,
     		
     	)
     	if(flag){
     		
     	$("#banner").hover(
     		function(){
     		clearInterval(timer)
     		$(".banner_u2").on("mouseenter","li",function(){
     			$(this).addClass("active").siblings().removeClass("active")
     			
     			$(".banner_u1").stop().animate({"left":-($(this).index())*1900},1000)
     		})
     		},
     		function(){
     		timer = setInterval(autoPlay , 3000)
     		})
     	}
     	flag = false;
    }
    $("#xuanfu_li3").click(function(){
    	$("body,html").animate({scrollTop : 0},1000)
    })
    
    $("#jinkou li").click(function(){
    	alert("该地区不支持购买此商品！")
    })
     	
    $(".buy_box_dt>img").hover(
    	function(){
    		
    		$(this).stop().animate({"width":280,"height":280,"left":-5,"top":-5},300)
    	},
    	function(){
    		$(this).stop().animate({"width":270,"height":270,"left":0,"top":0},300)
    	    
    })
    $(".buy_box_box02").click(function(){
    	$(this).css({"background":"orange","color":"#fff"})
    })
    
