

STFL.Models = STFL.Models || {};


STFL.Models.Assets = ( function( window ) {
	'use strict';
	
	
	function Assets() {
		STFL.AbstractAssets.call( this );
	}
	
	
	Assets.prototype				= Object.create( STFL.AbstractAssets.prototype );
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
				STFL.Path.URL.img + 'temp/404.jpg',
			],
			
			'not-available': [
				/* temp */
				STFL.Path.URL.img + 'temp/not-available.gif',
			],
			
			'home': [
				/* temp */
				STFL.Path.URL.img + 'temp/home.jpg',
			],
			
			'about': [
				/* temp */
				STFL.Path.URL.img + 'temp/about-1.jpg',
				STFL.Path.URL.img + 'temp/about-2.jpg',
			],
			
			'projects': [
				/* temp */
				STFL.Path.URL.img + 'temp/projects.jpg',
			]
		};
		
		
		this.aJson = {
			'global': {
				global: STFL.Path.URL.json + 'test-global.json'
			},
			
			'home': {
				home: STFL.Path.URL.json + 'test-home.json'
			},
			
			'projects': {
				projects: STFL.Path.URL.json + 'test-projects.json'
			}
		};
	};
	
	
	return new Assets();
	
	
} ) ( window );

