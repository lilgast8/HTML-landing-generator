

HLG.MainView = ( function( window ) {
	'use strict';
	
	
	function MainView() {
		HLG.AbstractMainView.call( this );
	}
	
	
	MainView.prototype				= Object.create( HLG.AbstractMainView.prototype );
	MainView.prototype.constructor	= MainView;
	
	
	/*MainView.prototype.initDOM = function() {
		HLG.AbstractMainView.prototype.initDOM.call( this );
	};*/
	
	
	/*MainView.prototype.initEl = function() {
		this.disableScrollRestoration();
	};*/
	
	
	/*MainView.prototype.bindEvents = function() {
		HLG.AbstractMainView.prototype.bindEvents.call( this );
	};*/
	
	
	/*MainView.prototype.initStaticsViews = function() {
		HLG.AbstractMainView.prototype.initStaticsViews.call( this );
	};*/
	
	
	return new MainView();
	
	
} ) ( window );

