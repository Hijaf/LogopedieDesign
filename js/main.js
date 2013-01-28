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
			center: new google.maps.LatLng( 50.5875838, 5.5702195 ),
			mapTypeControlOptions: {
		      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		    }
		});

		gmap.mapTypes.set('map_style', styledMap);
	  	gmap.setMapTypeId('map_style');
	}; // -- generateMap

	var addMarker = function(){
		var markerIcon = new google.maps.MarkerImage( "../img/marker.png" );
		gmap.panTo(new google.maps.LatLng( 50.5875838, 5.5702195));
		if( $( "#gmap" ).attr( "class" ) !== "recherche" ){
			gmap.setZoom(12);
			var marker = new google.maps.Marker({
				map: gmap,
				position: new google.maps.LatLng( 50.5875838, 5.5702195),
				title: "Site universitaire du Sart Tilman, B38 Rue de l’Aunaie, 30 4000 Sart Tilman",
				icon: markerIcon
			});
		}else{
			gmap.setZoom(5);
			var markerMontreal = new google.maps.Marker({
				map: gmap,
				position: new google.maps.LatLng(45.500,-73.600),
				title: "Montréal",			
				icon: markerIcon
			});
			var markerPhiladelphie = new google.maps.Marker({
				map: gmap,
				position: new google.maps.LatLng(40.000,-75.167),
				title: "Philadelphie",
				icon: markerIcon
			});		
			var markerLiege = new google.maps.Marker({
				map: gmap,
				position: new google.maps.LatLng(50.5875838,5.5702195),
				title: "Liège",
				icon: markerIcon
			});
			var markerGand = new google.maps.Marker({
				map: gmap,
				position: new google.maps.LatLng(51.033,3.700),
				title: "Gand",
				icon: markerIcon
			});
			var markerBruxelles = new google.maps.Marker({
				map: gmap,
				position: new google.maps.LatLng(50.850,4.350),
				title: "Bruxelles",
				icon: markerIcon
			});
			var markerAnvers = new google.maps.Marker({
				map: gmap,
				position: new google.maps.LatLng(51.217,4.417),
				title: "Anvers",
				icon: markerIcon
			});
			var markerToulouse = new google.maps.Marker({
				map: gmap,
				position: new google.maps.LatLng(43.617,1.450),
				title: "Toulouse",
				icon: markerIcon
			});
			var markerMarseille = new google.maps.Marker({
				map: gmap,
				position: new google.maps.LatLng(43.300,5.367),
				title: "Marseille",
				icon: markerIcon
			});
			var markerLyon = new google.maps.Marker({
				map: gmap,
				position: new google.maps.LatLng(45.767,4.833),
				title: "Lyon",
				icon: markerIcon
			});
			var markerLondres = new google.maps.Marker({
				map: gmap,
				position: new google.maps.LatLng(51.500,-0.167),
				title: "Londres",
				icon: markerIcon
			});
			var markerNeuss = new google.maps.Marker({
				map: gmap,
				position: new google.maps.LatLng(51.200,6.6833),
				title: "Neuss (Rhénanie du Nord Westphalie)",
				icon: markerIcon
			});	
		}
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
