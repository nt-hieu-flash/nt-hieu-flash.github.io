// JavaScript Document



function menuButtonFunc(x) {
	x.classList.toggle("menu-change");
}

$(document).ready(function(){
	$(".menu-button").click(function(){
		$(".menu").slideToggle("slow");
	});
});


// shadow scrolling header
$(window).scroll(function() {     
   	var scroll = $(window).scrollTop();
   	if (scroll > 90) {
		$("header").addClass("active");
   	}
   	else {
		$("header").removeClass("active");
   	}
});

// top up page button
$(window).scroll(function() {     
   	var scroll = $(window).scrollTop();
   	if (scroll > 180) {
		$(".top-page-button").addClass("show-top-btn");
   	}
   	else {
		$(".top-page-button").removeClass("show-top-btn");
   	}
});

// WOW animate
new WOW().init();


// Slider
$(function() {
	var Page = (function() {
		var $navArrows = $( '#nav-arrows' ).hide(),
		$shadow = $( '#shadow' ).hide(),
		slicebox = $( '#sb-slider' ).slicebox( {
			onReady : function() {
				$navArrows.show();
				$shadow.show();
			},
			orientation : 'r',
			cuboidsRandom : true,
			disperseFactor : 30
		} ),
		init = function() {
			initEvents();
		},
		initEvents = function() {
			// add navigation events
			$navArrows.children( ':first' ).on( 'click', function() {
				slicebox.next();
				return false;
			});
			$navArrows.children( ':last' ).on( 'click', function() {
				slicebox.previous();
				return false;
			});
		};
		return { init : init };
	})();
	Page.init();
});



// magnific popup
$(document).ready(function(){
	$('.image-link').magnificPopup({type:'image'});
})
$('.my-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {enabled:true}
})






















