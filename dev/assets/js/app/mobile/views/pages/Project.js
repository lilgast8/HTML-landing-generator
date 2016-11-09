

WLD.Views		= WLD.Views || {};
WLD.Views.Pages	= WLD.Views.Pages || {};


WLD.Views.Pages.Project = ( function( window ) {
	'use strict';
	
	
	function Project() {
		WLD.AbstractPageView.call( this );
	}
	
	
	Project.prototype				= Object.create( WLD.AbstractPageView.prototype );
	Project.prototype.constructor	= Project;
	
	
	Project.prototype.init = function() {
		WLD.AbstractPageView.prototype.init.call( this );
	};
	
	
	Project.prototype.bindEvents = function() {
		WLD.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	Project.prototype.unbindEvents = function() {
		WLD.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	Project.prototype.resize = function() {
		
	};
	
	
	return Project;
	
	
} ) ( window );

