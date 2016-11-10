

STFL.Main = ( function( window ) {
	'use strict';
	
	
	function Main() {
		
	}
	
	
	Main.prototype.init = function() {
		// STFL.Config.init();
		STFL.Props.init();
		STFL.Device.init();
		STFL.Path.init();
		// STFL.Lang.init();
		
		// _initDebug.call( this );
		
		STFL.PagesController.init();
		STFL.MainView.init();
		// STFL.Router.init();
		STFL.PagesController.initFirstPage();
		
		// this.$window.on( 'load', $.proxy( _windowLoad, this ) );
	};
	
	
	/*var _initDebug = function() {
		_initFPSStats.call( this, false );
		_initMemoryStats.call( this, false );
		_initDatGUI.call( this, false );
	};
	
	
	var _initFPSStats = function( isSet ) {
		STFL.Config.setFPSStats( isSet );
		
		if ( isSet && ( STFL.Config.IS_DEV || STFL.Config.IS_PREPROD_LOCAL ) )
			STFL.Utils.FPSStats.init();
	};
	
	
	var _initMemoryStats = function( isSet ) {
		STFL.Config.setMemoryStats( isSet );
		
		if ( isSet && ( STFL.Config.IS_DEV || STFL.Config.IS_PREPROD_LOCAL ) )
			STFL.Utils.MemoryStats.init();
	};
	
	
	var _initDatGUI = function( isSet ) {
		if ( isSet && ( STFL.Config.IS_DEV || STFL.Config.IS_PREPROD_LOCAL ) )
			STFL.Utils.DatGUI.init();
	};*/
	
	
	return new Main();
	
	
} ) ( window );


$( STFL.Main.init.bind( STFL.Main ) );

