

STFL.Views		= STFL.Views || {};
STFL.Views.Pages	= STFL.Views.Pages || {};


STFL.Views.Pages.Project = ( function( window ) {
	'use strict';
	
	
	function Project() {
		STFL.AbstractPageView.call( this );
	}
	
	
	Project.prototype				= Object.create( STFL.AbstractPageView.prototype );
	Project.prototype.constructor	= Project;
	
	
	Project.prototype.init = function() {
		STFL.AbstractPageView.prototype.init.call( this );
	};
	
	
	Project.prototype.bindEvents = function() {
		STFL.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	Project.prototype.unbindEvents = function() {
		STFL.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	Project.prototype.resize = function() {
		
	};
	
	
	return Project;
	
	
} ) ( window );

