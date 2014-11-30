$(document).ready(function(){

	$('.fish-link').click(function (e) {
	   	e.preventDefault();                   // prevent default anchor behavior
	    var goTo = this.getAttribute("href"); // store anchor href
	    // do something while timeOut ticks ... 
	    setTimeout(function(){
	         window.location = goTo;
	    },2500);
	});

	$('.illuminator').animate({"width":"50%", "padding-top":"50%"}, 1000);

});