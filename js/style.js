$(document).ready(function(){
	$(".search form input:eq(1)").click(function(){
		window.open("http://www.baidu.com/s?wd="+ $(this).siblings().val() +"");
//		使用百度搜索内容
	});
	$(".search form input:eq(0)").focus(function(){
		$(this).val("");
//		当搜索框获取焦点是清空val值
	});
//	search   END
		
		
	$("#nav ul li a").click(function(){
		$(this).css({
			background: '#e0e2e0',
			color: '#e0e2e0',
			borderBottom: '2px solid #8FC31F',
			borderTop: '2px solid #8FC31F'
		}).find("img").show(300);
//		导航图片显示其他的隐藏
		$(this).parent().siblings().find("img").css("display","none");
		$(this).parent().siblings().find("a").css({
			color: '#323232',
			border: 'none'
		});
//		导航图片隐藏其他的显示
	});

//	nav   END


	$('#myCarousel').carousel({interval:3000});//每隔3秒自动轮播 
//	banner   END


	$("#indicator ul li").hover(
		function(){
			$(this).css({
				background:'url(img/travel'+($(this).index()+1)+'.jpg) center center',
				backgroundSize:'cover'})
				.find('img').css("opacity","0");	
		},
		function(){
			$(this).css({background:''}).find('img').css("opacity","1");
		});
//	出行风向标内容区鼠标移入移出效果        END
	
	
	if( ( navigator.appName != "Microsoft Internet Explorer" || isChrome() ) && (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) == null )
				{
				    var dir;
				    var beforeTop=$(window).scrollTop();   
				    $(window).bind("scroll",function(){  
				            afterTop = $(window).scrollTop();               
				            if( afterTop > beforeTop ){//下滚   
								dir="down";
				            }else{//上滚  
								dir="up";
				            }  
				            beforeTop=afterTop;
							var Wh1=$(window).scrollTop();
							var Wh2=Wh1+$(window).height();
							$(".intr-list,.content,.more").each(function(){
//								需要移动的显现的div名称
								var Oh1=$(this).offset().top;
								var Oh2=Oh1+$(this).outerHeight(true); 
								var ifshow=$(this).attr("ifshow");
								var paraIn=$(this).attr("paraIn");
								var paraOut=$(this).attr("paraOut");
								if( dir=="down" && Oh1<Wh2 && Oh1>Wh1 && ifshow=="0" ){
									$(this).attr("ifshow","1").removeClass(paraOut).addClass(paraIn);
									if( $(this).attr("iftimetree") == "true" ){
										$(this).next().removeClass("h1").addClass("s1");
									}
								}else if( dir=="up" && Oh2>Wh2 && ifshow=="1" ){
									$(this).attr("ifshow","0").removeClass(paraIn).addClass(paraOut);
									if( $(this).attr("iftimetree") == "true" ){
										$(this).next().removeClass("s1").addClass("h1");
									}
								}
							});
					});
					
				}
//	      图片的显现	和出行风向标内容区       END	

	
		$(".theme5").addClass("theme-list");
//		旅行风格内容区的图片旋转,和css3配合使用     END



});
