

STFL.PagesController = ( function( window ) {
	'use strict';
	
	
	function PagesController() {
		STFL.AbstractPagesController.call( this );
		
		// this.LOADING_MODE			= null;
		// this.DYNAMIC_IMG_TO_LOAD	= null;
		// this.IS_HIDE_INIT			= null;
	}
	
	
	PagesController.prototype				= Object.create( STFL.AbstractPagesController.prototype );
	PagesController.prototype.constructor	= PagesController;
	
	
	/*PagesController.prototype.initPages = function() {
		
	};*/
	
	
	/*PagesController.prototype.managePageHidingTransitions = function() {
		
	};*/
	
	
	/*PagesController.prototype.checkPageHiding = function() {
		
	};*/
	
	
	/*PagesController.prototype.managePageShowingTransitions = function() {
		
	};*/
	
	
	/*AbstractPagesController.prototype.checkPageShowing = function() {
		
	};*/
	
	
	PagesController.prototype.manageMenuLinks = function() {
		this.updateMenuLinks( STFL.Views.Statics.Header.$menuLink );
		this.updateMenuLinks( STFL.Views.Statics.Footer.$footerLink );
	};
	
	
	PagesController.prototype.manageLangLinks = function() {
		this.changeLangLinks( STFL.Views.Statics.Header.$headerLgLink );
		this.changeLangLinks( STFL.Views.Statics.Footer.$footerLgLink );
	};
	
	
	return new PagesController();
	
	
} ) ( window );

