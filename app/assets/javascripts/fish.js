$(window).load(function() {
	var a = document.getElementById("fishes");
	// Get the SVG document inside the Object tag
	var svgDoc = a.contentDocument;
	// Get one of the SVG items by ID;
	var svgItem = svgDoc.getElementById("fish-1");
	// Set the colour to something else
	//svgItem.setAttribute("fill", "lime");
	var link = svgItem.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
	$(svgItem).hover(function(){
		$(this).css({"cursor":"pointer"});
	});
	$(svgItem).click(function (e){
		e.preventDefault();// prevent default anchor behavior
		$('.load-bg').show();
		$('.load-bg').animate({"width":"0%", "padding-top":"0%"});
		setTimeout(function(){
	       window.location = link;
	    },2500);
	});
	console.log(link);

});