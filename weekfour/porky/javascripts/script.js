$(document).ready(function(){
	console.log("Porky Pig Script Loaded");
	$(".navWrapper").sticky({topSpacing:0});

	$('img').bind('mouseenter mouseleave', function() {
    $(this).attr({
		src: $(this).attr('data-other-src') 
		, 'data-other-src': $(this).attr('src') 
		})
	});

	$('.mainNav ul li a').on('click', function() {
		var scrollAnchor = $(this).attr('data-scroll'),
		scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

	$('body,html').animate(
		{
			scrollTop: scrollPoint
		}, 500);

		return false;

	})
	$('.pageWrapper').scroll(function() {
	    var scrollNav = $('.pageWrapper').scrollTop();
	    if (scrollNav >= 100) {
	        $('.mainNav ul li').addClass('fixed');
	        $('.wrapper section').each(function(i) {
	            if ($(this).position().top <= windscroll - 20) {
	                $('.mainNav ul li a.active').removeClass('active');
	                $('.mainNav ul li a').eq(i).addClass('active');
	            }
	        });

	    } else {

	        $('.mainNav ul li').removeClass('fixed');
	        $('.mainNav ul li a.active').removeClass('active');
	        $('.mainNav ul li a:first').addClass('active');
	    }

	}).scroll();
});
