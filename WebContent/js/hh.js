// JavaScript Document
$(function(){
    $("#goToTop").remove();
//banner
	var curr = 0;
	var imglen = $(".banImgs li").length;
	$(".banImgs li:eq(0)").css("display","block");
	var bannerBtn ='';
	var bannerBill = '<div class="bannerBillLeft"></div>';

	for(var i=0;i<imglen;i++) {
		if(i==0) {
			bannerBill+='<div class="bannerBillFirst"></div>';
		} else if(i==imglen-2) {
			if(imglen%2==0){
				bannerBill+='<div class="bannerBillFirst rotate180"></div>';
			}else{
				bannerBill+='<div class="bannerBillFirst flipx"></div>';
			}
			
		} else if (i==imglen-1){}
		else {
			if(i%2==0){
				bannerBill+='<div class="bannerBillAnd flipy"></div>';
			}else{
				bannerBill+='<div class="bannerBillAnd"></div>';
			}
			
		}
		
	    bannerBtn += '<a href="javascript:void(0)" onfocus="this.blur();" class="trigger"></a>';
	}
	bannerBill+='<div class="bannerBillLeft flipx"></div>';
	$("#jsNav").html(bannerBill);
	$("#jsNav").append(bannerBtn);
	$(".jsNav .trigger:eq(0)").addClass("current");

	//鐗规畩寮曞鐐�
	for( var t=0; t<imglen; t++){
	    var fL =581; // 鐢辨牱寮廱annerBillLeft width-9 鑾峰緱
	    $(".jsNav .trigger:eq("+t+")").css("left",(fL+t*43)+"px");

	    if(t>0&&t<imglen-1){
		    if(t%2==1){
		        $(".jsNav .trigger:eq("+t+")").css("top","-8px");
		    } else {
		        $(".jsNav .trigger:eq("+t+")").css("top","9px");
		    }
	    }

	}

	$("#jsNav .trigger").each(function(i){
		$(this).click(function(){
		    if(!$(".banImgs li").is(":animated")){
			    this.blur();
			    curr = i;
			    $(".banImgs li").eq(i).css("z-index","10").siblings("li").css("z-index","1");
			    $(".banImgs li").eq(i).fadeIn(1000).siblings("li").fadeOut(1000);
			    $(this).siblings(".trigger").removeClass("current").end().addClass("current");
			}
			else{
			    return false;
			}
		});
	});

	var pg = function(flag){
		if (flag) {
			if (curr == 0) {
				todo = (imglen-1);
			} else {
				todo = (curr - 1) % imglen;
			}
		} else {
			
			todo = (curr + 1) % imglen;
		}
		$("#jsNav .trigger").eq(todo).click();
	};

	var timer = setInterval(function(){
		todo = (curr + 1) % imglen;
		$("#jsNav .trigger").eq(todo).click();
	},5000);
		
	$("#jsNav a").hover(function(){
			clearInterval(timer);
		},
		function(){
			timer = setInterval(function(){
				todo = (curr + 1) % imglen;
				$("#jsNav .trigger").eq(todo).click();
			},5000);			
		}
	);
});

$(function(){
	$("#topwxgzh").mouseenter(function(){
		$('#topwxgzh').css({"background-position":"0 -30px"});
		$('#topqrcode').css({"display":"block"});
	})
	$("#topwxgzh").mouseleave(function(){
		$('#topwxgzh').css({"background-position":"0 0"});
		$('#topqrcode').css({"display":"none"});
	})
	$("#topqrcode").mouseenter(function(){
		$('#topwxgzh').css({"background-position":"0 -30px"});
		$('#topqrcode').css({"display":"block"});
	})
	$("#topqrcode").mouseleave(function(){
		$('#topwxgzh').css({"background-position":"0 0"});
		$('#topqrcode').css({"display":"none"});
	})
})