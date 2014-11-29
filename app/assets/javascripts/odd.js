$(document).ready(function(){

	$('.fish-link').click(function (e) {
	   	e.preventDefault();                   // prevent default anchor behavior
	    var goTo = this.getAttribute("href"); // store anchor href
	    // do something while timeOut ticks ... 
	    setTimeout(function(){
	         window.location = goTo;
	    },2500);
	});

	$(".load-bg").velocity(
		{
			width: "250%",
			"padding-top": "250%"
		}
	);

});