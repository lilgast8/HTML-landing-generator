

HLG.Views		= HLG.Views || {};
HLG.Views.Pages	= HLG.Views.Pages || {};


HLG.Views.Pages.LegalNotices = ( function( window ) {
	'use strict';
	
	
	function LegalNotices() {
		HLG.AbstractPageView.call( this );
	}
	
	
	LegalNotices.prototype				= Object.create( HLG.AbstractPageView.prototype );
	LegalNotices.prototype.constructor	= LegalNotices;
	
	
	LegalNotices.prototype.initDOM = function() {
		HLG.AbstractPageView.prototype.initDOM.call( this );
		
		this.$email	= this.$page.find( '.email' );
		
		// STF_gl_encryptMailto( this.$.email, 'contact', 'domain', 'com', true );
	};
	
	
	LegalNotices.prototype.bindEvents = function() {
		HLG.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	LegalNotices.prototype.unbindEvents = function() {
		HLG.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	LegalNotices.prototype.resize = function() {
		
	};
	
	
	return LegalNotices;
	
	
} ) ( window );

