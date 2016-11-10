

STFL.Views		= STFL.Views || {};
STFL.Views.Pages	= STFL.Views.Pages || {};


STFL.Views.Pages.About = ( function( window ) {
	'use strict';
	
	
	function About() {
		STFL.AbstractPageView.call( this );
	}
	
	
	About.prototype				= Object.create( STFL.AbstractPageView.prototype );
	About.prototype.constructor	= About;
	
	
	About.prototype.init = function() {
		STFL.AbstractPageView.prototype.init.call( this );
	};
	
	
	About.prototype.bindEvents = function() {
		STFL.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	About.prototype.unbindEvents = function() {
		STFL.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	About.prototype.resize = function() {
		
	};
	
	
	return About;
	
	
} ) ( window );

