

HLG.PagesController = ( function( window ) {
	'use strict';
	
	
	function PagesController() {
		HLG.AbstractPagesController.call( this );
		
		// this.LOADING_MODE			= null;
		// this.DYNAMIC_IMG_TO_LOAD	= null;
		// this.IS_HIDE_INIT			= null;
	}
	
	
	PagesController.prototype				= Object.create( HLG.AbstractPagesController.prototype );
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
	
	
	/*PagesController.prototype.manageMenuLinks = function() {
		this.updateMenuLinks( HLG.Views.Statics.Header.$menuLink );
		this.updateMenuLinks( HLG.Views.Statics.Footer.$footerLink );
	};
	
	
	PagesController.prototype.manageLangLinks = function() {
		this.changeLangLinks( HLG.Views.Statics.Header.$headerLgLink );
		this.changeLangLinks( HLG.Views.Statics.Footer.$footerLgLink );
	};*/
	
	
	return new PagesController();
	
	
} ) ( window );

