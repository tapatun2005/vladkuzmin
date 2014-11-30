$(document).ready(function(){
	if (window.matchMedia("(min-width: 920px)").matches) {
	  $('.illuminator').animate({"width":"50%", "padding-top":"50%"},1500);
	} else {
	  $('.illuminator').animate({"width":"90%", "padding-top":"90%"},1500);
	}
	$('.a-close-button').click(function (e) {
	    e.preventDefault();                   // prevent default anchor behavior
	    $("this").fadeOut();
	    var goTo = this.getAttribute("href"); // store anchor href

	    // do something while timeOut ticks ...

	    $(".illuminator").animate({"width":"0%", "padding-top":"0%"},1500);
	    $(".share").css({"opacity":"0"});
	    setTimeout(function(){
	       window.location = goTo;
	    },1200);
	}); 
});

$(window).scroll(function() {
    if ($(document).height() - 150 <= ($(window).height() + $(window).scrollTop())) {
        $(".share").addClass("scroll-bottom");
    }
    else {
    	$(".share").removeClass("scroll-bottom");
    }
});