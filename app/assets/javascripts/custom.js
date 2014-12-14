$(window).load(function() {
	$('body, html').css({"background":"none"})
	$('.load-bg').animate({"width":"250%", "padding-top":"250%"});
	setTimeout(function(){
       $('.load-bg').fadeOut();
    },2000);
});
