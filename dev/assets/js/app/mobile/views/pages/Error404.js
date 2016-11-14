

HLG.Views		= HLG.Views || {};
HLG.Views.Pages	= HLG.Views.Pages || {};


HLG.Views.Pages.Error404 = ( function( window ) {
	'use strict';
	
	
	function Error404() {
		HLG.AbstractPageView.call( this );
	}
	
	
	Error404.prototype				= Object.create( HLG.AbstractPageView.prototype );
	Error404.prototype.constructor	= Error404;
	
	
	Error404.prototype.init = function() {
		HLG.AbstractPageView.prototype.init.call( this );
	};
	
	
	Error404.prototype.bindEvents = function() {
		HLG.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	Error404.prototype.unbindEvents = function() {
		HLG.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	Error404.prototype.resize = function() {
		
	};
	
	
	return Error404;
	
	
} ) ( window );

