

HLG.Main = ( function( window ) {
	'use strict';
	
	
	function Main() {
		
	}
	
	
	Main.prototype.init = function() {
		// HLG.Config.init();
		HLG.Props.init();
		HLG.Device.init();
		HLG.Path.init();
		// HLG.Lang.init();
		
		// _initDebug.call( this );
		
		HLG.PagesController.init();
		HLG.MainView.init();
		// HLG.Router.init();
		HLG.PagesController.initFirstPage();
		
		// this.$window.on( 'load', $.proxy( _windowLoad, this ) );
	};
	
	
	/*var _initDebug = function() {
		_initFPSStats.call( this, false );
		_initMemoryStats.call( this, false );
		_initDatGUI.call( this, false );
	};
	
	
	var _initFPSStats = function( isSet ) {
		HLG.Config.setFPSStats( isSet );
		
		if ( isSet && ( HLG.Config.IS_DEV || HLG.Config.IS_PREPROD_LOCAL ) )
			HLG.Utils.FPSStats.init();
	};
	
	
	var _initMemoryStats = function( isSet ) {
		HLG.Config.setMemoryStats( isSet );
		
		if ( isSet && ( HLG.Config.IS_DEV || HLG.Config.IS_PREPROD_LOCAL ) )
			HLG.Utils.MemoryStats.init();
	};
	
	
	var _initDatGUI = function( isSet ) {
		if ( isSet && ( HLG.Config.IS_DEV || HLG.Config.IS_PREPROD_LOCAL ) )
			HLG.Utils.DatGUI.init();
	};*/
	
	
	return new Main();
	
	
} ) ( window );


$( HLG.Main.init.bind( HLG.Main ) );

