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
		var previousContainerHeight = 0;
		var currentHeight = 0;
		var pollContainerHeight = function() {
			currentHeight = $master.outerHeight(true);
			if(currentHeight !== previousContainerHeight) {
				previousContainerHeight = currentHeight;
				pymChild.sendHeight();
			}
			requestAnimationFrame(pollContainerHeight);
		};

		pymChild = pym.Child({ renderCallback: parentResize });
		pollContainerHeight();
	};

	init();
})();