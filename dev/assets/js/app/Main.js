

WLD.Main = ( function( window ) {
	'use strict';
	
	
	function Main() {
		
	}
	
	
	Main.prototype.init = function() {
		WLD.Config.init();
		WLD.Props.init();
		WLD.Device.init();
		WLD.Path.init();
		WLD.Lang.init();
		
		// _initDebug.call( this );
		
		WLD.PagesController.init();
		WLD.MainView.init();
		// WLD.Router.init();
		WLD.PagesController.initFirstPage();
		
		// this.$window.on( 'load', $.proxy( _windowLoad, this ) );
	};
	
	
	/*var _initDebug = function() {
		_initFPSStats.call( this, false );
		_initMemoryStats.call( this, false );
		_initDatGUI.call( this, false );
	};
	
	
	var _initFPSStats = function( isSet ) {
		WLD.Config.setFPSStats( isSet );
		
		if ( isSet && ( WLD.Config.IS_DEV || WLD.Config.IS_PREPROD_LOCAL ) )
			WLD.Utils.FPSStats.init();
	};
	
	
	var _initMemoryStats = function( isSet ) {
		WLD.Config.setMemoryStats( isSet );
		
		if ( isSet && ( WLD.Config.IS_DEV || WLD.Config.IS_PREPROD_LOCAL ) )
			WLD.Utils.MemoryStats.init();
	};
	
	
	var _initDatGUI = function( isSet ) {
		if ( isSet && ( WLD.Config.IS_DEV || WLD.Config.IS_PREPROD_LOCAL ) )
			WLD.Utils.DatGUI.init();
	};*/
	
	
	return new Main();
	
	
} ) ( window );


$( WLD.Main.init.bind( WLD.Main ) );

