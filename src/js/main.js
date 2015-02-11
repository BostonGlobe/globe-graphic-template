(function() {
	/*** define your global variables here ***/



	var init = function() {
		setupPym(); // DO NOT TOUCH
		
		/*** call functions you want to run on load here ***/



	};

	// This is called once when the page loads, and again whenever the parent window resizes
	var parentResize = function() {
		/*** put code here you want to run on window resize ***/

		

	};

	/*** (begin) your functions here ***/
	









	/************** (end) **************/


	/************************************/
	/* DANGER ZONE: DON'T GO BELOW HERE */
	/************************************/
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
			// OKAY, YOU CAN TOUCH THIS IF YOU ARE CAREFUL
			/*** call a function here, passing it the "initialHeight" variable if you need it ***/

		});
		pollHeight();
	};
	init();
})();