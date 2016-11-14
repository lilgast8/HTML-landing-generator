

HLG.Views		= HLG.Views || {};
HLG.Views.Pages	= HLG.Views.Pages || {};


HLG.Views.Pages.Home = ( function( window ) {
	'use strict';
	
	
	function Home() {
		HLG.AbstractPageView.call( this );
	}
	
	
	Home.prototype				= Object.create( HLG.AbstractPageView.prototype );
	Home.prototype.constructor	= Home;
	
	
	Home.prototype.init = function() {
		HLG.AbstractPageView.prototype.init.call( this );
	};
	
	
	Home.prototype.bindEvents = function() {
		HLG.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	Home.prototype.unbindEvents = function() {
		HLG.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	Home.prototype.resize = function() {
		
	};
	
	
	return Home;
	
	
} ) ( window );

