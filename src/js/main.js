(function() {
	/*** define your global variables here ***/

	
	var init = function() {
		// DON'T TOUCH THIS
		setupPym();
		
		/*** call functions you want to run on load here ***/


	};

	// This function will be called once when the page loads and again when the parent window size changes
	var parentResize = function() {
		/*** put code here you want to run on window resize ***/
		

	};

	/*** (begin) put all custom code here ***/



	/*** (end) ***/

	// DON'T TOUCH THIS
	var setupPym = function() {
		if (window.console && console.log) { console.log('-- init globe graphic --'); }
		var $master = $('#globe-graphic-container');
		var pymChild = null;
		var height = {previous: 0, current: 0};

		var pollHeight = function() {
			height.current = $master.outerHeight(true);
			if(height.current !== height.previous) {
				height.previous = height.current;
				pymChild.sendHeight();
			}
			requestAnimationFrame(pollHeight);
		};

		pymChild = pym.Child({ renderCallback: parentResize });

		pymChild.sendMessage('height-request', true);
		pymChild.onMessage('height-send', function(msg) {
			var initialHeight = +msg;
			// OKAY, YOU CAN TOUCH THIS
			/*** call a function here, passing it the "initialHeight" variable if you need it ***/

		});
		
		pollHeight();
	};

	init();
})();