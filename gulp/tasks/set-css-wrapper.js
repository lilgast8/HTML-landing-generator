var gulp		= require( 'gulp' );

var paths		= require( '../utils/paths' );

var gutil		= require( 'gulp-util' );
var fs			= require( 'fs' );



gulp.task( 'set-css-wrapper', function() {
	
	var configFile		= fs.readFileSync( paths.env.dev + paths.configs.configFile, 'utf8' );
	var config			= JSON.parse( configFile );
	
	var filePath		= paths.env.dev + paths.assets.css.app.desktopFile;
	
	var data			= fs.readFileSync( filePath, 'utf8' );
	var startPos		= data.indexOf( '#' );
	var endPos			= data.indexOf( ' {' );
	
	var stringToReplace	= data.substring( startPos, endPos );
	var newString		= '#' + config.CSS_WRAPPER;
	
	data				= data.replace( new RegExp( stringToReplace, 'g' ), newString );
	
	fs.writeFileSync( filePath, data, 'utf8' );
	
	
	console.log( gutil.colors.cyan( 'CSS wrapper renamed from ' ), gutil.colors.bold( gutil.colors.magenta( stringToReplace ) ), gutil.colors.cyan( ' to ' ), gutil.colors.bold( gutil.colors.magenta( newString ) ) );
	
} );