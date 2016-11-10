

STFL.Views		= STFL.Views || {};
STFL.Views.Pages	= STFL.Views.Pages || {};


STFL.Views.Pages.Home = ( function( window ) {
	'use strict';
	
	
	function Home() {
		STFL.AbstractPageView.call( this );
	}
	
	
	Home.prototype				= Object.create( STFL.AbstractPageView.prototype );
	Home.prototype.constructor	= Home;
	
	
	Home.prototype.init = function() {
		STFL.AbstractPageView.prototype.init.call( this );
	};
	
	
	Home.prototype.bindEvents = function() {
		STFL.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	Home.prototype.unbindEvents = function() {
		STFL.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	Home.prototype.resize = function() {
		
	};
	
	
	return Home;
	
	
} ) ( window );

