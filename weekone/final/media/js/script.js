$(document).ready(function(){
	console.log("Q3 Portfolio Script Loaded");
	 $('header nav').meanmenu();
	 window.scrollReveal = new scrollReveal();

	var navpos = $('#menu').offset();
		console.log(navpos.top);
	$(window).bind('scroll', function() {
		if ($(window).scrollTop() > navpos.top) {
			$('#menu').addClass('fixed');
	}else {
			$('#menu').removeClass('fixed');
		}
	});
});