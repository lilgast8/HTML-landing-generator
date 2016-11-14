

HLG.Views		= HLG.Views || {};
HLG.Views.Pages	= HLG.Views.Pages || {};


HLG.Views.Pages.Projects = ( function( window ) {
	'use strict';
	
	
	function Projects() {
		HLG.AbstractPageView.call( this );
	}
	
	
	Projects.prototype				= Object.create( HLG.AbstractPageView.prototype );
	Projects.prototype.constructor	= Projects;
	
	
	Projects.prototype.initDOM = function() {
		HLG.AbstractPageView.prototype.initDOM.call( this );
		
		this.$projectLink = this.$page.find( '.project-link' );
	};
	
	
	Projects.prototype.bindEvents = function() {
		HLG.AbstractPageView.prototype.bindEvents.call( this );
		
		this.$projectLink.on( 'click', $.proxy( this.changeUrl, this ) );
	};
	
	
	Projects.prototype.unbindEvents = function() {
		HLG.AbstractPageView.prototype.unbindEvents.call( this );
		
		this.$projectLink.off( 'click', $.proxy( this.changeUrl, this ) );
	};
	
	
	Projects.prototype.resize = function() {
		
	};
	
	
	return Projects;
	
	
} ) ( window );

