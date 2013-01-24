/* Logopedie - Projet Web
 * JS Document - /html5/test_two/js/script.js
 * coded by Micael Dekleyn 2383
 * 21 January 2012
 */

 ( function ( $ ) {
	"use strict";

	// --- global vars
	var timer,
		delay = 8000,
		gmap,
		styledMap;

	var firstSlide = $( "#slider .eventSlider:first" ).attr( "id" ),
		lastSlide = $( "#slider .eventSlider:last" ).attr( "id" );

	// --- methods
	// -- Slider Image
	var changeImage = function(){
		var currentSlide = $( ".eventSlider:visible" ).attr( "id" );
		var nextSlide = $( "#" + currentSlide ).next().attr( "id" );

		nextSlide = currentSlide === lastSlide ? firstSlide : nextSlide ;

		$( "#" + currentSlide ).slideUp( 1500, function(){
			$( "#" + nextSlide ).slideDown( 2000 );
		} );
	}; // -- changeImage

	// -- Generate map
	var generateMap = function(){
		var styles = [
		    {
		    	stylers: [
		        	{ hue: "#001aff" },
		        	{ saturation: -100 }
		      	]	
		    },{
		      featureType: "road",
		      elementType: "geometry",
		      stylers: [
		        { lightness: 100 },
		        { visibility: "simplified" }
		      ]
		    },{
		      featureType: "road",
		      elementType: "labels",
		      stylers: [
		        { visibility: "on" }
		      ]
		    }
		];

		styledMap = new google.maps.StyledMapType(styles,
	    				{name: "Styled Map"}
	    			);

		gmap = new google.maps.Map(document.getElementById("gmap"),{
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.HYBRID,
			center: new google.maps.LatLng( 50.5875838, 5.5702195),
			mapTypeControlOptions: {
		      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		    }
		});

		gmap.mapTypes.set('map_style', styledMap);
	  	gmap.setMapTypeId('map_style');
	}; // -- generateMap

	var addMarker = function(){
		var markerIcon = new google.maps.MarkerImage( "../img/marker.png" );
		gmap.setZoom(12);
		gmap.panTo(new google.maps.LatLng( 50.5875838, 5.5702195));
		var marker = new google.maps.Marker({
			map: gmap,
			position: new google.maps.LatLng( 50.5875838, 5.5702195),
			title: "Site universitaire du Sart Tilman, B38 Rue de l’Aunaie, 30 4000 Sart Tilman",
			icon: markerIcon
		});
	}; // -- addMarker

	// --- onload
	$( function () {
		// --- onload routines
		$( ".eventSlider" ).not( ":first" ).hide();
		timer = setInterval( changeImage,delay );

		if( $( "#gmap" ).length ){
			generateMap();
			addMarker();
		}
	} );

}( jQuery ) );
