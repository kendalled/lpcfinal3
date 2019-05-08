/*
	Lapel Pins & Coins
*/

var settings = {

	banner: {

		// Indicators (= the clickable dots at the bottom).
			indicators: true,

		// Transition speed (in ms)
		// For timing purposes only. It *must* match the transition speed of "#banner > article".
			speed: 1500,

		// Transition delay (in ms)
			delay: 4000

	}

};


(function($) {

	var	$window	= $(window),
		$body	= $('body'),
		$banner	= $('#banner'),
		$header	= $('#header .inner');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	
	// Dropdowns.
		$('#nav > ul')
			.dropotron({
				alignment: 'left',
				hideDelay: 350
			});

	// Nav Panel.

		// Toggle.
			$('<a href="#navPanel" title="Toggles Navigation Menu" class="navPanelToggle"><span class="label">Toggles Navigation Menu</span></a>')
				.appendTo($header);

		// Panel.
			$('<div id="navPanel">' + '<nav>' + $('#nav').navList() + '</nav>' + '<a href="#navPanel" class="close"></a>' + '</div>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});


})(jQuery);
