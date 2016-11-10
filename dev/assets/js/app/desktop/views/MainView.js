

STFL.MainView = ( function( window ) {
	'use strict';
	
	
	function MainView() {
		STFL.AbstractMainView.call( this );
	}
	
	
	MainView.prototype				= Object.create( STFL.AbstractMainView.prototype );
	MainView.prototype.constructor	= MainView;
	
	
	/*MainView.prototype.initDOM = function() {
		STFL.AbstractMainView.prototype.initDOM.call( this );
	};*/
	
	
	/*MainView.prototype.initEl = function() {
		this.disableScrollRestoration();
	};*/
	
	
	/*MainView.prototype.bindEvents = function() {
		STFL.AbstractMainView.prototype.bindEvents.call( this );
	};*/
	
	
	/*MainView.prototype.initStaticsViews = function() {
		STFL.AbstractMainView.prototype.initStaticsViews.call( this );
	};*/
	
	
	return new MainView();
	
	
} ) ( window );

