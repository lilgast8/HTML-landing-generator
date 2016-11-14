

HLG.Views		= HLG.Views || {};
HLG.Views.Pages	= HLG.Views.Pages || {};


HLG.Views.Pages.About = ( function( window ) {
	'use strict';
	
	
	function About() {
		HLG.AbstractPageView.call( this );
	}
	
	
	About.prototype				= Object.create( HLG.AbstractPageView.prototype );
	About.prototype.constructor	= About;
	
	
	About.prototype.init = function() {
		HLG.AbstractPageView.prototype.init.call( this );
	};
	
	
	About.prototype.bindEvents = function() {
		HLG.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	About.prototype.unbindEvents = function() {
		HLG.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	About.prototype.resize = function() {
		
	};
	
	
	return About;
	
	
} ) ( window );

