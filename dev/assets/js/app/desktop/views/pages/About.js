

WLD.Views		= WLD.Views || {};
WLD.Views.Pages	= WLD.Views.Pages || {};


WLD.Views.Pages.About = ( function( window ) {
	'use strict';
	
	
	function About() {
		WLD.AbstractPageView.call( this );
	}
	
	
	About.prototype				= Object.create( WLD.AbstractPageView.prototype );
	About.prototype.constructor	= About;
	
	
	About.prototype.init = function() {
		WLD.AbstractPageView.prototype.init.call( this );
	};
	
	
	About.prototype.bindEvents = function() {
		WLD.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	About.prototype.unbindEvents = function() {
		WLD.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	About.prototype.resize = function() {
		
	};
	
	
	return About;
	
	
} ) ( window );

