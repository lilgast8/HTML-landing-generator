

WLD.Views		= WLD.Views || {};
WLD.Views.Pages	= WLD.Views.Pages || {};


WLD.Views.Pages.LegalNotices = ( function( window ) {
	'use strict';
	
	
	function LegalNotices() {
		WLD.AbstractPageView.call( this );
	}
	
	
	LegalNotices.prototype				= Object.create( WLD.AbstractPageView.prototype );
	LegalNotices.prototype.constructor	= LegalNotices;
	
	
	LegalNotices.prototype.initDOM = function() {
		WLD.AbstractPageView.prototype.initDOM.call( this );
		
		this.$email	= this.$page.find( '.email' );
		
		// STF_gl_encryptMailto( this.$.email, 'contact', 'domain', 'com', true );
	};
	
	
	LegalNotices.prototype.bindEvents = function() {
		WLD.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	LegalNotices.prototype.unbindEvents = function() {
		WLD.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	LegalNotices.prototype.resize = function() {
		
	};
	
	
	return LegalNotices;
	
	
} ) ( window );

