

WLD.Views		= WLD.Views || {};
WLD.Views.Pages	= WLD.Views.Pages || {};


WLD.Views.Pages.Error404 = ( function( window ) {
	'use strict';
	
	
	function Error404() {
		WLD.AbstractPageView.call( this );
	}
	
	
	Error404.prototype				= Object.create( WLD.AbstractPageView.prototype );
	Error404.prototype.constructor	= Error404;
	
	
	Error404.prototype.init = function() {
		WLD.AbstractPageView.prototype.init.call( this );
	};
	
	
	Error404.prototype.bindEvents = function() {
		WLD.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	Error404.prototype.unbindEvents = function() {
		WLD.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	Error404.prototype.resize = function() {
		
	};
	
	
	return Error404;
	
	
} ) ( window );

