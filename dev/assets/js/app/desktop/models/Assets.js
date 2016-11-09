

WLD.Models = WLD.Models || {};


WLD.Models.Assets = ( function( window ) {
	'use strict';
	
	
	function Assets() {
		WLD.AbstractAssets.call( this );
	}
	
	
	Assets.prototype				= Object.create( WLD.AbstractAssets.prototype );
	Assets.prototype.constructor	= Assets;
	
	
	Assets.prototype.init = function() {
		this.aImg = [
			/* bgs */
			
			/* btns */
			
			/* icons */
			
			/* logos */
			
			/* others */
			
			/* temp */
			WLD.Path.URL.img + 'temp/home.jpg',
			WLD.Path.URL.img + 'temp/404.jpg',
		];
		
		
		this.aJson = {
			global: WLD.Path.URL.json + 'test-global.json',
			home: WLD.Path.URL.json + 'test-home.json'
		};
		
		
		// this.aImg = {
		// 	'global': [
		// 		/* bgs */
				
		// 		/* btns */
				
		// 		/* icons */
				
		// 		/* logos */
				
		// 		/* others */
		// 	],
			
		// 	'error-404': [
		// 		/* temp */
		// 		WLD.Path.URL.img + 'temp/404.jpg',
		// 	],
			
		// 	'not-available': [
		// 		/* temp */
		// 		WLD.Path.URL.img + 'temp/not-available.gif',
		// 	],
			
		// 	'home': [
		// 		/* temp */
		// 		WLD.Path.URL.img + 'temp/home.jpg',
		// 	],
			
		// 	'about': [
		// 		/* temp */
		// 		WLD.Path.URL.img + 'temp/about-1.jpg',
		// 		WLD.Path.URL.img + 'temp/about-2.jpg',
		// 	],
			
		// 	'projects': [
		// 		/* temp */
		// 		WLD.Path.URL.img + 'temp/projects.jpg',
		// 	]
		// };
		
		
		// this.aJson = {
		// 	'global': {
		// 		global: WLD.Path.URL.json + 'test-global.json'
		// 	},
			
		// 	'home': {
		// 		home: WLD.Path.URL.json + 'test-home.json'
		// 	},
			
		// 	'projects': {
		// 		projects: WLD.Path.URL.json + 'test-projects.json'
		// 	}
		// };
	};
	
	
	return new Assets();
	
	
} ) ( window );

