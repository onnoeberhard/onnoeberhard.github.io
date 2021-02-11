$(function() {
	var left = {
		imgFront	: -229,
		imgBack		: -300,
		imgicon		: -100,
		h3			: -300,
		p			: -300,
		a			: -200
	}
	var current = {
		imgFront	: 130,
		imgBack		: 230,
		imgicon		: 570,
		h3			: 630,
		p			: 630,
		a			: 580
	}
	
	var isScrolling = false;

	$('#app_slider_main').carouFredSel({
		scroll	: {
			duration		: 0,
			timeoutDuration	: 3000
		},
		auto	: false,
		prev	: {
			button		: '#app_prev',
			key			: 'left',
			conditions	: function() {
				return (!isScrolling);
			},
			onBefore	: function( data ) {
				isScrolling = true;
				$(this).delay(1000);
				data.items.old.find('img.img-front').delay(500).animate({left: 1000});
				data.items.old.find('img.img-back').delay(400).animate({left: 1000});
				data.items.old.find('img.app-icon').delay(300).animate({left: 1000});
				data.items.old.find('h3').delay(200).animate({left: 1000});
				data.items.old.find('p').delay(100).animate({left: 1000});
				data.items.old.find('a').animate({left: 1000});
			},
			onAfter: function( data ) {
				data.items.old.find('img.img-front').css({left: current.imgFront});
				data.items.old.find('img.img-back').css({left: current.imgBack});
				data.items.old.find('img.app-icon').css({left: current.imgicon});
				data.items.old.find('h3').animate({left: current.h3});
				data.items.old.find('p').css({left: current.p});
				data.items.old.find('a').css({left: current.a});
				data.items.visible.find('img.img-front').css({left: left.imgFront}).delay(500).animate({left: current.imgFront}, function() {isScrolling = false;});
				data.items.visible.find('img.img-back').css({left: left.imgBack}).delay(400).animate({left: current.imgBack});
				data.items.visible.find('img.app-icon').css({left: left.imgicon}).delay(300).animate({left: current.imgicon});
				data.items.visible.find('h3').css({left: left.h3}).delay(200).animate({left: current.h3});
				data.items.visible.find('p').css({left: left.p}).delay(100).animate({left: current.p});
				data.items.visible.find('a').css({left: left.a}).animate({left: current.a});
			}
		},
		next	: {
			button		: '#app_next',
			key			: 'right',
			conditions	: function() {
				return (!isScrolling);
			},
			onBefore	: function( data ) {
				isScrolling = true;
				$(this).delay(1000);
				data.items.old.find('img.img-front').animate({left: left.imgFront});
				data.items.old.find('img.img-back').delay(100).animate({left: left.imgBack});
				data.items.old.find('img.app-icon').delay(200).animate({left: left.imgicon});
				data.items.old.find('h3').delay(300).animate({left: left.h3});
				data.items.old.find('p').delay(400).animate({left: left.p});
				data.items.old.find('a').delay(500).animate({left: left.a});
			},
			onAfter: function( data ) {
				data.items.old.find('img.img-front').css({left: current.imgFront});
				data.items.old.find('img.img-back').css({left: current.imgBack});
				data.items.old.find('img.app-icon').css({left: current.imgicon});
				data.items.old.find('h3').css({left: current.h3});
				data.items.old.find('p').css({left: current.p});
				data.items.old.find('a').css({left: current.a});
				data.items.visible.find('img.img-front').css({left: 1000}).animate({left: current.imgFront});
				data.items.visible.find('img.img-back').css({left: 1000}).delay(100).animate({left: current.imgBack});
				data.items.visible.find('img.app-icon').css({left: 1000}).delay(200).animate({left: current.imgicon});
				data.items.visible.find('h3').css({left: 1000}).delay(300).animate({left: current.h3});
				data.items.visible.find('p').css({left: 1000}).delay(400).animate({left: current.p});
				data.items.visible.find('a').css({left: 1000}).delay(500).animate({left: current.a}, function() {isScrolling = false;});
			}
		}
	});
});
$(function() {
	$('#sl_slider_main').carouFredSel({
		auto:false,
		items:{visible:1},
		scroll:{duration:750},
		prev:{button:'#sl_prev'},
		next:{button:'#sl_next'}
	});
});

$(function() {
	$('#tm_project_detail_view').carouFredSel({
		circular: false,
		items: 1,
		direction: 'up',
		auto: false,
		prev: {
			fx: 'fade'
		},
		next: {
			fx: 'cover'
		}
	});
	$('#tm_project_detail_view').trigger( 'linkAnchors', [ '#tm_project_detail_view', 'a' ] );
});

var scrollToSection = function (id) {
    $('html,body').animate({ scrollTop: $("#" + id).offset().top }, 700, function() {
        window.location.hash = id;
    });
    return false;
};

$(function() {
	var $l = $('#slscreeni-left'),
		$c = $('#slscreeni-center'),
		$r = $('#slscreeni-right');
		
	$l.carouFredSel({
		auto: false,
		items: 1,
		direction: 'right',
		prev: {
			button: '#slsss_prev',
			fx: 'uncover',
			onBefore: function() {
				setTimeout(function() {
					$c.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			fx: 'cover'
		}
	});
	$c.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			onBefore: function() {
				setTimeout(function() {
					$r.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			onBefore: function() {
				setTimeout(function() {
					$l.trigger( 'next' );
				}, 100);
			}
		}
	});
	$r.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			fx: 'cover'
		},
		next: {
			button: '#slsss_next',
			fx: 'uncover',
			onBefore: function() {
				setTimeout(function() {
					$c.trigger( 'next' );
				}, 100);
			}
		}
	});
});

$(function() {
	var $l = $('#vcscreeni-left'),
		$c = $('#vcscreeni-center'),
		$r = $('#vcscreeni-right');
		
	$l.carouFredSel({
		auto: false,
		items: 1,
		direction: 'right',
		prev: {
			button: '#vcsss_prev',
			fx: 'uncover',
			onBefore: function() {
				setTimeout(function() {
					$c.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			fx: 'cover'
		}
	});
	$c.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			onBefore: function() {
				setTimeout(function() {
					$r.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			onBefore: function() {
				setTimeout(function() {
					$l.trigger( 'next' );
				}, 100);
			}
		}
	});
	$r.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			fx: 'cover'
		},
		next: {
			button: '#vcsss_next',
			fx: 'uncover',
			onBefore: function() {
				setTimeout(function() {
					$c.trigger( 'next' );
				}, 100);
			}
		}
	});
});

$(function() {
	addScrollTopAnimation();
	function addScrollTopAnimation() {
		var $scrolltop_link = $('#scroll-top');
		$scrolltop_link.on( 'click' ,  function ( ev ) {
			ev.preventDefault();
			$( 'html, body' ).animate( {
				scrollTop: 0
			}, 700 );
		}).data('hidden', 1).hide(); 
		var scroll_event_fired = false;
		$(window).on('scroll', function() {
			scroll_event_fired = true;
		});
		setInterval( function() {
			if( scroll_event_fired ) {
				scroll_event_fired = false; 
				var is_hidden =  $scrolltop_link.data('hidden'); 
				if ( $( this ).scrollTop()  >  500) {
					if( is_hidden ) {
						$scrolltop_link.fadeIn(600).data('hidden', 0);
					}
				}
				else {
					if( !is_hidden ) {
						$scrolltop_link.slideUp().data('hidden', 1);
					}
				}
			}
		}, 300); 
	}
});

// var slpage = 0;
// var slpage_max = 1;

// $(function() {
	// changePage(slpage_max, slpage, 'sl_prev', 'sl_next');
// });

// function changePage(max, cur, prev_id, next_id)
// {
	// if(cur == 0)
		// document.getElementById(prev_id).style.display = 'none';
	// else
		// document.getElementById(prev_id).style.display = 'block';
	// if(cur == max)
		// document.getElementById(next_id).style.display = 'none';
	// else
		// document.getElementById(next_id).style.display = 'block';
// };