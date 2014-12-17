//LOADING PAGE//
$(document).ready(function(){
	$('body, html').css({"background":"none"});
	$('.load-bg').animate({"width":"250%", "padding-top":"250%"});
	setTimeout(function(){
       $('.load-bg').fadeOut();
    },2000);

    $('.fish-link').click(function (e) {
	    e.preventDefault();// prevent default anchor behavior
	    var goTo = this.getAttribute("href"); // store anchor href
	    $(".load-bg").show();
	    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
	    // do something while timeOut ticks ...
	    setTimeout(function(){
	       window.location = goTo;
	    },3500);
	});



	//MENU//


	if (window.matchMedia("(max-width: 550px)").matches) {
	    $('.logo-link').click(function (e) {
	    	//$(this).removeAttr("href");
		    e.preventDefault();// prevent default anchor behavior
		    $(".close-button-index").show();
		    $(".menu-mobile").show();
		    $('.menu-mobile').animate({"width":"75%", "padding-top":"75%", "border-radius":"50%"}, 2500);
		    // store anchor href
		    $(".load-bg").fadeIn();
		    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
		});
		$('.menu-link').click(function (e) {
		    e.preventDefault();// prevent default anchor behavior
		    $('.close-button-index').fadeOut();
		    var goTo = this.getAttribute("href"); // store anchor href
		    $('.menu-mobile').animate({"width":"0%", "padding-top":"0%"},1000);
		    // do something while timeOut ticks ...
		    setTimeout(function(){
		       window.location = goTo;
		    }, 1000);
		});
		$('.portfolio-link').click(function (e) {
		    e.preventDefault();// prevent default anchor behavior
		    var goTo = this.getAttribute("href"); // store anchor href
		    $(".load-bg").show();
		    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
		    // do something while timeOut ticks ...
		    setTimeout(function(){
		       window.location = goTo;
		    },3500);
		});
		$('.close-button-index').click(function (e) {
		    e.preventDefault();// prevent default anchor behavior
		    $(this).fadeOut();
		    $('.menu-mobile').animate({"width":"0%", "padding-top":"0%"},1000);
		    setTimeout(function(){
		       $('.menu-mobile').hide();
		    },1000);
		    // do something while timeOut ticks ...
		    $('.load-bg').animate({"width":"250%", "padding-top":"250%"});
	    	setTimeout(function(){
		       $('.load-bg').hide();
		    },2000);
		});
	  }
	else {
	   $('.logo-link').click(function (e) {
		    e.preventDefault();// prevent default anchor behavior
		    var goTo = this.getAttribute("href"); // store anchor href
		    $(".load-bg").show();
		    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
		    // do something while timeOut ticks ...
		    setTimeout(function(){
		       window.location = goTo;
		    },3500);
		});
	 };


//PORTFOLIO PAGE//
	if (window.matchMedia("(min-width: 920px)").matches) {
		  $('.illuminator').animate({"width":"50%", "padding-top":"50%"},2000);
		} 
		else {
		  $('.illuminator').animate({"width":"90%", "padding-top":"90%"},2000);
	};
	$('.a-close-button').click(function (e) {
	    e.preventDefault();                   // prevent default anchor behavior
	    $(this).fadeOut();
	    var goTo = this.getAttribute("href"); // store anchor href
	    // do something while timeOut ticks ...
	    $(".illuminator").animate({"width":"0%", "padding-top":"0%"},2000);
	    $(".share").animate({"opacity":"0"});
	    setTimeout(function(){
	       window.location = goTo;
	    },3500);
	});

//enquire.register("screen and (min-width:920px)", function() {
//    $('.illuminator').animate({"width":"50%", "padding-top":"50%"},2000);
//});
//enquire.register("screen and (max-width:919px)", function() {
//    $('.illuminator').animate({"width":"90%", "padding-top":"90%"},2000);
//});





$(window).scroll(function() {
    if ($(document).height() - 150 <= ($(window).height() + $(window).scrollTop())) {
        $(".share").addClass("scroll-bottom");
    }
    else {
    	$(".share").removeClass("scroll-bottom");
    }
});


//FORM//
$('form').submit(function(){
		setTimeout(function() {
	    	$('form').submit();
	  	},3500);
		$(".load-bg").show();
	    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
	   	$(".submit").addClass('submit-move');
	});

});