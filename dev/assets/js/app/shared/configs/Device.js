

HLG.Device = ( function( window ) {
	'use strict';
	
	
	function Device() {
		this.HAS_MOBILE_VERSION	= null;
		this.TABLET_VERSION		= null;
		this.FORCE_DEVICE		= null;
		
		this.DEVICE				= null;
		this.IS_DESKTOP			= null;
		this.IS_TABLET			= null;
		this.IS_MOBILE			= null;
		this.BROWSER			= null;
		this.BROWSER_VERSION	= null;
		this.BROWSER_ENGINE		= null;
		this.IS_OLD_BROWSER		= null;
		this.IS_IE				= null;
		this.IS_EDGE			= null;
	}
	
	
	Device.prototype.init = function() {
		_setDevice.call( this );
	};
	
	var _setDevice = function() {
		this.DEVICE				= Detectizr.device.type;
		
		this.IS_DESKTOP			= this.DEVICE == 'desktop';
		this.IS_TABLET			= this.DEVICE == 'tablet';
		this.IS_MOBILE			= this.DEVICE == 'mobile';
		
		this.BROWSER			= Detectizr.browser.name;
 		this.BROWSER_VERSION	= parseFloat( Detectizr.browser.major + '.' + Detectizr.browser.minor );
 		this.IS_IE				= this.BROWSER == 'ie' ? true : false;
	};
	
	
	return new Device();
	
	
} ) ( window );

