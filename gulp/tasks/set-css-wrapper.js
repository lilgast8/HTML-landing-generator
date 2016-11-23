var gulp		= require( 'gulp' );

var paths		= require( '../utils/paths' );

var gutil		= require( 'gulp-util' );
var fs			= require( 'fs' );



gulp.task( 'set-css-wrapper', function() {
	
	var configFile		= fs.readFileSync( paths.env.dev + paths.configs.configFile, 'utf8' );
	var config			= JSON.parse( configFile );
	
	
	// css
	renameCSSWrapper(	paths.env.dev + paths.assets.css.app.desktopFile,
						'.', ' {',
						'.' + config.CSS_WRAPPER,
						'css' );
	
	// js
	renameCSSWrapper(	paths.env.dev + paths.assets.js.app.dir + 'shared/abstracts/views/AbstractMainView.js',
						'this.$hlgWrap =', 'CSS_WRAPPER',
						"this.$hlgWrap = $( '." + config.CSS_WRAPPER +"' ); // ",
						'js' );
	
} );


function renameCSSWrapper( filePath, startString, endString, newString, type ) {
	var data			= fs.readFileSync( filePath, 'utf8' );
	var startPos		= data.indexOf( startString );
	var endPos			= data.indexOf( endString );
	
	var stringToReplace	= data.substring( startPos, endPos );
	
	data				= data.replace( stringToReplace, newString );
	
	
	fs.writeFileSync( filePath, data, 'utf8' );
}