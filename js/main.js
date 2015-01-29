(function() {
	
	var _pymChild = null;
	var $globeGraphicContainer = $('#globe-graphic-container');
	// DEFINE ALL GLOBAL VARIABLES HERE
	
	var init = function() {
		log('-- init globe graphic --');
		_pymChild = pym.Child({ renderCallback: resize });
		$globeGraphicContainer.on('resize', updateHeight);
		// PUT CODE HERE YOU WANT TO RUN AT THE START
	};

	// This function will be called once when the page loads and again any time the window is resized.
	var resize = function() {
		// PUT CODE HERE YOU WANT TO RUN WHEN WINDOW RESIZES
	};

	// This function should be called whenever your graphic's height changes and tells the parent iframe to update
	var updateHeight = function() {
		_pymChild.sendHeight();
	};

	// (BEGIN) PUT CUSTOM CODE HERE


	// (END) PUT CUSTOM CODE HERE
		
	// Cross browser console logging, use same as console.log
	var log = function(input) {
		if (window.console && console.log) {
			console.log(input);
		};
	};

	init();
})();