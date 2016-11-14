

HLG.Views		= HLG.Views || {};
HLG.Views.Pages	= HLG.Views.Pages || {};


HLG.Views.Pages.Project = ( function( window ) {
	'use strict';
	
	
	function Project() {
		HLG.AbstractPageView.call( this );
	}
	
	
	Project.prototype				= Object.create( HLG.AbstractPageView.prototype );
	Project.prototype.constructor	= Project;
	
	
	Project.prototype.init = function() {
		HLG.AbstractPageView.prototype.init.call( this );
	};
	
	
	Project.prototype.bindEvents = function() {
		HLG.AbstractPageView.prototype.bindEvents.call( this );
	};
	
	
	Project.prototype.unbindEvents = function() {
		HLG.AbstractPageView.prototype.unbindEvents.call( this );
	};
	
	
	Project.prototype.resize = function() {
		
	};
	
	
	return Project;
	
	
} ) ( window );

