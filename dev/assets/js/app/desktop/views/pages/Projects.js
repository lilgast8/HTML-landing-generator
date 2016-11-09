

WLD.Views		= WLD.Views || {};
WLD.Views.Pages	= WLD.Views.Pages || {};


WLD.Views.Pages.Projects = ( function( window ) {
	'use strict';
	
	
	function Projects() {
		WLD.AbstractPageView.call( this );
	}
	
	
	Projects.prototype				= Object.create( WLD.AbstractPageView.prototype );
	Projects.prototype.constructor	= Projects;
	
	
	Projects.prototype.initDOM = function() {
		WLD.AbstractPageView.prototype.initDOM.call( this );
		
		this.$projectLink = this.$page.find( '.proj-link' );
	};
	
	
	Projects.prototype.bindEvents = function() {
		WLD.AbstractPageView.prototype.bindEvents.call( this );
		
		this.$projectLink.on( 'click', $.proxy( this.changeUrl, this ) );
	};
	
	
	Projects.prototype.unbindEvents = function() {
		WLD.AbstractPageView.prototype.unbindEvents.call( this );
		
		this.$projectLink.off( 'click', $.proxy( this.changeUrl, this ) );
	};
	
	
	Projects.prototype.resize = function() {
		
	};
	
	
	return Projects;
	
	
} ) ( window );

