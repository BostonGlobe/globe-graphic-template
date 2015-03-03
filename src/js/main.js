'use strict';
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
		var container = document.getElementById('globe-graphic-container');
		var pymChild = null;
		var height = {previous: 0, current: 0};

		var pollHeight = function() {
			height.current = container.offsetHeight;
			if(height.current !== height.previous) {
				height.previous = height.current;
				pymChild.sendHeight();
			}
			requestAnimationFrame(pollHeight);
		};

		pymChild = pym.Child({ renderCallback: parentResize });
		/*** to get parent window height, see http://github.com/russellgoldenberg/globe-iframe-graphic#get-parent-height ***/

		pollHeight();
	};
	init();
})();