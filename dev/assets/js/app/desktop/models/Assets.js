

HLG.Models = HLG.Models || {};


HLG.Models.Assets = ( function( window ) {
	'use strict';
	
	
	function Assets() {
		HLG.AbstractAssets.call( this );
	}
	
	
	Assets.prototype				= Object.create( HLG.AbstractAssets.prototype );
	Assets.prototype.constructor	= Assets;
	
	
	Assets.prototype.init = function() {
		this.aImg = [
			/* bgs */
			
			/* btns */
			
			/* icons */
			
			/* logos */
			
			/* others */
			
			/* temp */
			// HLG.Path.URL.img + 'temp/home.jpg',
			// HLG.Path.URL.img + 'temp/404.jpg',
		];
		
		
		this.aJson = {
			// global: HLG.Path.URL.json + 'test-global.json',
			// home: HLG.Path.URL.json + 'test-home.json'
		};
	};
	
	
	return new Assets();
	
	
} ) ( window );

