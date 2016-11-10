

STFL.Views		= STFL.Views || {};
STFL.Views.Pages	= STFL.Views.Pages || {};


STFL.Views.Pages.Projects = ( function( window ) {
	'use strict';
	
	
	function Projects() {
		STFL.AbstractPageView.call( this );
	}
	
	
	Projects.prototype				= Object.create( STFL.AbstractPageView.prototype );
	Projects.prototype.constructor	= Projects;
	
	
	Projects.prototype.initDOM = function() {
		STFL.AbstractPageView.prototype.initDOM.call( this );
		
		this.$projectLink = this.$page.find( '.proj-link' );
	};
	
	
	Projects.prototype.bindEvents = function() {
		STFL.AbstractPageView.prototype.bindEvents.call( this );
		
		this.$projectLink.on( 'click', $.proxy( this.changeUrl, this ) );
	};
	
	
	Projects.prototype.unbindEvents = function() {
		STFL.AbstractPageView.prototype.unbindEvents.call( this );
		
		this.$projectLink.off( 'click', $.proxy( this.changeUrl, this ) );
	};
	
	
	Projects.prototype.resize = function() {
		
	};
	
	
	return Projects;
	
	
} ) ( window );

