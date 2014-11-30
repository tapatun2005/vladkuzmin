$(document).ready(function(){
	$('.illuminator').animate({"border":"5000px solid #000"});
	if (window.matchMedia("(min-width: 920px)").matches) {
	  $('.illuminator').animate({"width":"50%", "padding-top":"50%"},2000);
	} else {
	  $('.illuminator').animate({"width":"90%", "padding-top":"90%"},2000);
	}
	$('.a-close-button').click(function (e) {
	    e.preventDefault();                   // prevent default anchor behavior
	    $("this").fadeOut();
	    var goTo = this.getAttribute("href"); // store anchor href

	    // do something while timeOut ticks ...

	    $(".illuminator").animate({"width":"0%", "padding-top":"0%"},2000);
	    $(".share").css({"opacity":"0"});
	    setTimeout(function(){
	       window.location = goTo;
	    },3500);
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