(function() {
	var $master = $('#globe-graphic-container');
	// DEFINE ALL GLOBAL VARIABLES HERE
	
	var init = function() {
		setupPym();
		// PUT CODE HERE YOU WANT TO RUN AT THE START
	};

	var setupPym = function() {
		if (window.console && console.log) { console.log('-- init globe graphic --'); }
		
		var pymChild = null;
		var previousContainerHeight = 0;
		var animationFrame = new AnimationFrame(10);
		var pollContainerHeight = function() {
			var h = $master.height();
			if(h !== previousContainerHeight) {
				previousContainerHeight = h;
				_pymChild.sendHeight();
			}
			animationFrame.request(pollContainerHeight);
		};

		_pymChild = pym.Child({ renderCallback: parentResize });
		pollContainerHeight();
	};

	// This function will be called once when the page loads and again when the parent window size changes
	var parentResize = function() {
		// PUT CODE HERE YOU WANT TO RUN WHEN WINDOW RESIZES
	};

	// (BEGIN) PUT CUSTOM CODE HERE

	// (END) PUT CUSTOM CODE HERE

	init();
})();