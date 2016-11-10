

STFL.Views		= STFL.Views || {};
STFL.Views.Pages	= STFL.Views.Pages || {};


STFL.Views.Pages.LegalNotices = ( function( window ) {
	'use strict';
	
	
	function LegalNotices() {
		STFL.AbstractPageView.call( this );
	}
	
	
	LegalNotices.prototype				= Object.create( STFL.AbstractPageView.prototype );
	LegalNotices.prototype.constructor	= LegalNotices;
	
	
	LegalNotices.prototype.initDOM = function() {
		STFL.AbstractPageView.prototype.initDOM.call( this );
		
		this.$email	= this.$page.find( '.email' );
		
		// STF_gl_encryptMailto( this.$.email, 'contact', 'domain', 'com', true );
	};
	
	
	LegalNotices.prototype.bindEvents = function() {
		STFL.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	LegalNotices.prototype.unbindEvents = function() {
		STFL.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	LegalNotices.prototype.resize = function() {
		
	};
	
	
	return LegalNotices;
	
	
} ) ( window );

