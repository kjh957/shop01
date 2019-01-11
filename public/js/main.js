// Firebase Init
var config = {
    apiKey: "AIzaSyBf8yvKxFZJNwL6UP1Y9BS5G85crVxBzM4",
    authDomain: "wlsgh957-shop.firebaseapp.com",
    databaseURL: "https://wlsgh957-shop.firebaseio.com",
    projectId: "wlsgh957-shop",
    storageBucket: "wlsgh957-shop.appspot.com",
    messagingSenderId: "16738569239"
  };
  firebase.initializeApp(config);

// top_nav hover 이벤트
$(".top_icon").mouseenter(function(){
	$(this).children("img").css({"opacity":.7});
});
$(".top_icon").mouseleave(function(){
	$(this).children("img").css({"opacity":1});
});

// rt_wings 이벤트
$(".top_nav .fa-bars").click(function(){
	var $bg = $(".rt_bg");
	var $cont = $(".rt_cont");
	$bg.css({"opacity":0, "display":"block"}).stop().animate({"opacity":.3}, 1000);
	$cont.css({"display":"block", "right":"-240px"}).stop().animate({"right":0}, 1000);
});

$(".rt_cont .fa-close").click(function(){
	var $bg = $(".rt_bg");
	var $cont = $(".rt_cont");
	$bg.stop().animate({"opacity":0}, 800, function(){
		$(this).css({"display":"none"});
	});
	$cont.stop().animate({"right":"-240px"}, 800, function(){
		$(this).css({"display":"none"});
	});
});

$(".madals").click(function(e){
	e.stopPropagation();
});