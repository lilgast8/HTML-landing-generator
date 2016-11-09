

WLD.Views			= WLD.Views || {};
WLD.Views.Statics	= WLD.Views.Statics || {};


WLD.Views.Statics.Footer = ( function( window ) {
	'use strict';
	
	
	function Footer() {
		WLD.AbstractView.call( this );
	}
	
	
	Footer.prototype				= Object.create( WLD.AbstractView.prototype );
	Footer.prototype.constructor	= Footer;
	
	
	Footer.prototype.initDOM = function() {
		this.$footer		= $( document.getElementById( 'footer' ) );
		this.$footerLgLink	= this.$footer.find( '.footer-lang-link' );
		this.$footerLink	= this.$footer.find( '.footer-link' );
	};
	
	
	Footer.prototype.bindEvents = function() {
		WLD.AbstractView.prototype.bindEvents.call( this );
		
		this.$footerLink.on( 'click', $.proxy( this.changeUrl, this ) );
	};
	
	
	return new Footer();
	
	
} ) ( window );

