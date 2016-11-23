

HLG.Views			= HLG.Views || {};
HLG.Views.Statics	= HLG.Views.Statics || {};


HLG.Views.Statics.Header = ( function( window ) {
	'use strict';
	
	
	function Header() {
		HLG.AbstractView.call( this );
	}
	
	
	Header.prototype				= Object.create( HLG.AbstractView.prototype );
	Header.prototype.constructor	= Header;
	
	
	Header.prototype.initDOM = function() {
		// this.$header		= WLD.MainView.$mainCont.find( '.header' );
		// this.$headerLgLink	= this.$header.find( '.header-lang-link' );
		// this.$menu			= this.$header.find( '.menu' );
		// this.$menuLink		= this.$menu.find( '.menu-link' );
	};
	
	
	Header.prototype.bindEvents = function() {
		HLG.AbstractView.prototype.bindEvents.call( this );
		
		// this.$menuLink.on( 'click', $.proxy( this.changeUrl, this ) );
	};
	
	
	return new Header();
	
	
} ) ( window );

