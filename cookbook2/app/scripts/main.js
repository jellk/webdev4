console.log('YOOOOOOO ');
$(document).ready(function (){
	'use strict';
	var toggleMenu = function() {
		$('header').toggleClass('toggle');
		$('.main').toggleClass('push');
		$('.overlay').toggleClass('block');
		$('#social, .logo').toggleClass('reveal');
	};

	//Nav
	$('.navBtn').click(function(){
		toggleMenu();
	});
});
