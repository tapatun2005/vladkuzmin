//LOADING PAGE//
$(document).ready(function() {
	
	$('body, html').css({"background":"none"})
	$('.load-bg').animate({"width":"250%", "padding-top":"250%"});
	setTimeout(function(){
       $('.load-bg').fadeOut();
    },2000);

    $('a, .fish-link').click(function (e) {
	    e.preventDefault();// prevent default anchor behavior
	    var goTo = this.getAttribute("href"); // store anchor href
	    $(".load-bg").show();
	    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
	    // do something while timeOut ticks ...
	    setTimeout(function(){
	       window.location = goTo;
	    },3500);
	});

});