var options	= require( 'minimist' )( process.argv.slice(2) );
var paths	= require( '../utils/paths' );
var image	= require( '../utils/image' );

var gutil	= require( 'gulp-util' );



options.image		= image;

options.task		= options._[0] === undefined ? 'default' : options._[0];
options.subtask		= null;

options.isDev		= null;
options.env			= getEnv();
options.device		= getDevice();

options.filePath	= null;
options.fileName	= null;
options.devicePath	= null;
options.cssSrcPath	= null;
options.jsSrcPath	= null;
options.jsonSrcPath	= null;
options.svgSrcPath	= null;



function getEnv() {
	var config		= require( '../../' + paths.env.dev + paths.configs.configFile );
	var defaultEnv	= 'dev';
	var env			= options.env;
	
	// dev
	if ( env == defaultEnv || options.task == 'init' || options.task == 'default' ) {
		env = 'dev';
		
		options.isDev = true;
	}
	
	// prod
	else {
		env = 'prod';
		
		options.isDev = false;
	}
	
	console.log( gutil.colors.bgMagenta( ' — ENV: ' + env + ' — ' ) );
	
	
	return env;
}


function getDevice() {
	var device	= options.device === undefined ? 'desktop' : options.device;
	device		= device !== undefined ? device.toLowerCase() : undefined;
	
	
	return device;
}



module.exports = options;