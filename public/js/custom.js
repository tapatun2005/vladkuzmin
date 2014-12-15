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


//PORTFOLIO PAGE//
	if (window.matchMedia("(min-width: 920px)").matches) {
		  $('.illuminator').animate({"width":"50%", "padding-top":"50%"},2000);
		} 
		else {
		  $('.illuminator').animate({"width":"90%", "padding-top":"90%"},2000);
	}
	$('.a-close-button').click(function (e) {
	    e.preventDefault();                   // prevent default anchor behavior
	    $(this).fadeOut();
	    var goTo = this.getAttribute("href"); // store anchor href
	    // do something while timeOut ticks ...
	    $(".illuminator").css({"width":"0%", "padding-top":"0%"},2000);
	    $(".share").css({"opacity":"0"});
	    setTimeout(function(){
	       window.location = goTo;
	    },3500);
	}); 

});