//LOADING PAGE//
$(window).load(function() {
	$('.load-bg').animate({"width":"250%", "padding-top":"250%"});
	setTimeout(function(){
       $('.load-bg').fadeOut();
    },2000);
});



$(document).ready(function() {

//	var b = document.documentElement;
//	b.setAttribute('data-useragent',  navigator.userAgent);	
//	b.setAttribute('data-platform', navigator.platform );

// IE 10 == Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)

//	var c = document.documentElement;
//	c.setAttribute('data-useragent',  navigator.userAgent);
//	c.setAttribute('data-platform', navigator.platform );
//	c.className += ((!!('ontouchstart' in window) || !!('onmsgesturechange' in window))?' touch':'');
	
//	$('body').smoothWheel()

//	$('.fish-link').click(function (e) {
//	    e.preventDefault();// prevent default anchor behavior
//	    var goTo = this.getAttribute("href"); // store anchor href
//	    $(".load-bg").show();
//	    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
	    // do something while timeOut ticks ...
//	    setTimeout(function(){
//	       window.location = goTo;
//	    },3500);
//	});

//	$('form').submit(function(){
//		setTimeout(function() {
//	    	$('form').submit();
//	  	},3500);
//		$(".load-bg").show();
//	    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
//	   	$(".submit").addClass('submit-move');
//	});

	if (window.matchMedia('(max-width: 550px)').matches) {
	    $('.logo-link').click(function (e) {
	    	$(this).removeAttr("href");
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
	 }




//	$('.logo-contact-link').click(function (e) {
//	    e.preventDefault();// prevent default anchor behavior
//	    var goTo = this.getAttribute("href"); // store anchor href
//	    $(".load-bg").show();
//	    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
	   
	    // do something while timeOut ticks ...
//	    setTimeout(function(){
//	       window.location = goTo;
//	    },3500);
//	});
});