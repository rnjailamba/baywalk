    



$(document).on('ready page:load', function () {
	$('.carousel').carousel({
    	interval: 3500
    });

	$("#servicess").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#services").offset().top
	    }, 2000);
	});

	$("#aboutt").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#about").offset().top
	    }, 2000);
	});
	$("#reserve").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top
	    }, 2000);
	});

  });