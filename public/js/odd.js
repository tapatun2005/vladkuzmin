(function($) {
	
	function init() {
		setBg();
		setLoad();
		setIlluminator();
		$('.logo-link').on('click', goLink);
		$('.fish-link').on('click', goLink);
		$('.a-close-button').on('click', goLink);
		$('.hello').on('click', goLink);
		$('.close-button').on('click', goLink2);
		// $('form').on('submit', submitForm);
		$('.logo-mobile').on('click', showMenu);
		$('.menu-link').on('click', golinkMenu);
		$('.close-button-index').on('click', hideMenu);
		$('.nav-arrow .right').on('click', goLink2);
		$(window).on('scroll', socialButton);
	}


	function socialButton (e) {
		 if ($(document).height() - 150 <= ($(window).height() + $(window).scrollTop())) {
	        $(".share").addClass("scroll-bottom");
	    }
	    else {
	    	$(".share").removeClass("scroll-bottom");
	    }
	}

	function setBg(e) {
		$('html, body').css({
			'background': 'none'
		});
	}

	function logoMove(e) {
		$('.logo-move').addClass('add');
	}

	function setLoad(e) {
		$('.load-bg').animate({"width":"250%", "padding-top":"250%"});
	}
	function closeLoad() {
		$('.load-bg').animate({"width":"0%", "padding-top":"0%"});
	}

	function goLink2(e) {
		e.preventDefault();
		var goTo = this.getAttribute("href");
		hideIlluminator();
		 setTimeout(function(){
	       window.location = goTo;
	    },3500);
	}

	function goLink(e) {
		e.preventDefault();
		var goTo = this.getAttribute("href");
		closeLoad();
		logoMove();
		 setTimeout(function(){
	       window.location = goTo;
	    },3500);
	}

	// function submitForm(e) {
	// 	e.preventDefault();
	// 	setTimeout(function() {
	//     	$('form').submit();
	//   	},3500);
	//   	closeLoad();
	//   	logoMove();
	//    	$(".submit").addClass('submit-move');
	// }

	function setIlluminator() {
		$('.close-button').fadeIn(1000);
		$('.nav-arrow .right').fadeIn(1500);
		enquire.register("screen and (min-width:920px)", function() {
		    $('.illuminator').animate({"width":"50%", "padding-top":"50%"},2000);
		});

		enquire.register("screen and (max-width:919px)", function() {
		    $('.illuminator').animate({"width":"90%", "padding-top":"90%"},2000);
		});
	}

	function hideIlluminator() {
		$('.close-button').fadeOut(1000);
		$('.nav-arrow .right').fadeOut(1500);
		 $(".illuminator").animate({"width":"0%", "padding-top":"0%"},2000);
	}

	function showMenu(e) {
		e.preventDefault();
		$('.menu-mobile').show();
		$('.menu-mobile').animate({"width":"75%", "padding-top":"75%", "border-radius":"50%"}, 2500);
		closeLoad();
		$(".close-button-index").fadeIn(1000);
	}

	function hideMenu(e){
		$(this).fadeOut(500);
		$('.menu-mobile').animate({"width":"0%", "padding-top":"0%"}, 1000);
		$('.menu-mobile').hide(1000);
		setLoad();
	}
	

	function golinkMenu(e) {
		e.preventDefault();
		var goTo = this.getAttribute("href");
		$('.close-button-index').fadeOut(500);
		$('.menu-mobile').animate({"width":"0%", "padding-top":"0%"}, 1000);
		setTimeout(function(){
	       window.location = goTo;
	    }, 1000);
	    logoMove();
	}


 
init();

})(jQuery);