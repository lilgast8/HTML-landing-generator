

STFL.Views		= STFL.Views || {};
STFL.Views.Pages	= STFL.Views.Pages || {};


STFL.Views.Pages.Error404 = ( function( window ) {
	'use strict';
	
	
	function Error404() {
		STFL.AbstractPageView.call( this );
	}
	
	
	Error404.prototype				= Object.create( STFL.AbstractPageView.prototype );
	Error404.prototype.constructor	= Error404;
	
	
	Error404.prototype.init = function() {
		STFL.AbstractPageView.prototype.init.call( this );
	};
	
	
	Error404.prototype.bindEvents = function() {
		STFL.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	Error404.prototype.unbindEvents = function() {
		STFL.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	Error404.prototype.resize = function() {
		
	};
	
	
	return Error404;
	
	
} ) ( window );

