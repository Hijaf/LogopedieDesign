/* Logopedie - Projet Web
 * JS Document - /html5/test_two/js/script.js
 * coded by Micael Dekleyn 2383
 * 21 January 2012
 */

 ( function ( $ ) {
	"use strict";

	// --- global vars
	var timer,
		delay = 8000;

	// --- methods
	var changeImage = function(){
		$( ".eventSlider" ).slideUp( 1000, function(){
			$( ".eventSlider" ).slideDown( 800 );
		} );
	};

	// --- onload
	$( function () {
		// --- onload routines
		timer = setInterval(changeImage,delay);
	} );

}( jQuery ) );
