




$(document).ready(function() {
	
	$('.load-bg').animate({"width":"250%", "padding-top":"250%"});
	setTimeout(function(){
       $('.load-bg').hide();
    },2000);

	$('body').smoothWheel()

	$('.fish-link').click(function (e) {
	    e.preventDefault();// prevent default anchor behavior
	    var goTo = this.getAttribute("id"); // store anchor href
	    $(".load-bg").show();
	    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
	    // do something while timeOut ticks ...
	    setTimeout(function(){
	       window.location = goTo;
	    },2500);
	});

	$('form').submit(function(){
		setTimeout(function() {
	    	$('form').submit();
	  	},3500);
		$(".load-bg").show();
	    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
	   	$(".submit").addClass('submit-move');
	});

	if (window.matchMedia("(max-width: 550px)").matches) {
	    $('.logo-link').click(function (e) {
	    	$(this).removeAttr("href");
		    e.preventDefault();// prevent default anchor behavior
		    $(".close-button-index").show();
		    $(".menu-mobile").show();
		    $('.menu-mobile').animate({"width":"75%", "padding-top":"75%"}, 2500);
		    // store anchor href
		    $(".load-bg").show();
		    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
		});
		$('.menu-link').click(function (e) {
		    e.preventDefault();// prevent default anchor behavior
		    var goTo = this.getAttribute("href"); // store anchor href
		    $('.menu-mobile').animate({"width":"0%", "padding-top":"0%"},1000);
		    // do something while timeOut ticks ...
		    setTimeout(function(){
		       window.location = goTo;
		    }, 1000);
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
		    },2500);
		});
	 }

 	$('.portfolio-link').click(function (e) {
	    e.preventDefault();// prevent default anchor behavior
	    var goTo = this.getAttribute("href"); // store anchor href
	    $(".load-bg").show();
	    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
	    // do something while timeOut ticks ...
	    setTimeout(function(){
	       window.location = goTo;
	    },2500);
	});




	$('.logo-contact-link').click(function (e) {
	    e.preventDefault();// prevent default anchor behavior
	    var goTo = this.getAttribute("href"); // store anchor href
	    $(".load-bg").show();
	    $('.load-bg').animate({"width":"0%", "padding-top":"0%"});
	   
	    // do something while timeOut ticks ...
	    setTimeout(function(){
	       window.location = goTo;
	    },2500);
	});
});