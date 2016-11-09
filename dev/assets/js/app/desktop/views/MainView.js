

WLD.MainView = ( function( window ) {
	'use strict';
	
	
	function MainView() {
		WLD.AbstractMainView.call( this );
	}
	
	
	MainView.prototype				= Object.create( WLD.AbstractMainView.prototype );
	MainView.prototype.constructor	= MainView;
	
	
	/*MainView.prototype.initDOM = function() {
		WLD.AbstractMainView.prototype.initDOM.call( this );
	};*/
	
	
	MainView.prototype.initEl = function() {
		this.disableScrollRestoration();
	};
	
	
	/*MainView.prototype.bindEvents = function() {
		WLD.AbstractMainView.prototype.bindEvents.call( this );
	};*/
	
	
	/*MainView.prototype.initStaticsViews = function() {
		WLD.AbstractMainView.prototype.initStaticsViews.call( this );
	};*/
	
	
	return new MainView();
	
	
} ) ( window );

