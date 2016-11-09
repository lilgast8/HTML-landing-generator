

WLD.Views		= WLD.Views || {};
WLD.Views.Pages	= WLD.Views.Pages || {};


WLD.Views.Pages.Home = ( function( window ) {
	'use strict';
	
	
	function Home() {
		WLD.AbstractPageView.call( this );
	}
	
	
	Home.prototype				= Object.create( WLD.AbstractPageView.prototype );
	Home.prototype.constructor	= Home;
	
	
	Home.prototype.init = function() {
		WLD.AbstractPageView.prototype.init.call( this );
	};
	
	
	Home.prototype.bindEvents = function() {
		WLD.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	Home.prototype.unbindEvents = function() {
		WLD.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	Home.prototype.resize = function() {
		
	};
	
	
	return Home;
	
	
} ) ( window );

