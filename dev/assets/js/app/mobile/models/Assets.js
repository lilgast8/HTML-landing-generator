

HLG.Models = HLG.Models || {};


HLG.Models.Assets = ( function( window ) {
	'use strict';
	
	
	function Assets() {
		HLG.AbstractAssets.call( this );
	}
	
	
	Assets.prototype				= Object.create( HLG.AbstractAssets.prototype );
	Assets.prototype.constructor	= Assets;
	
	
	Assets.prototype.init = function() {
		this.aImg = {
			'global': [
				/* bgs */
				
				/* btns */
				
				/* icons */
				
				/* logos */
				
				/* others */
			],
			
			'error-404': [
				/* temp */
				HLG.Path.URL.img + 'temp/404.jpg',
			],
			
			'not-available': [
				/* temp */
				HLG.Path.URL.img + 'temp/not-available.gif',
			],
			
			'home': [
				/* temp */
				HLG.Path.URL.img + 'temp/home.jpg',
			],
			
			'about': [
				/* temp */
				HLG.Path.URL.img + 'temp/about-1.jpg',
				HLG.Path.URL.img + 'temp/about-2.jpg',
			],
			
			'projects': [
				/* temp */
				HLG.Path.URL.img + 'temp/projects.jpg',
			]
		};
		
		
		this.aJson = {
			'global': {
				global: HLG.Path.URL.json + 'test-global.json'
			},
			
			'home': {
				home: HLG.Path.URL.json + 'test-home.json'
			},
			
			'projects': {
				projects: HLG.Path.URL.json + 'test-projects.json'
			}
		};
	};
	
	
	return new Assets();
	
	
} ) ( window );

