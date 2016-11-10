var gulp	= require( 'gulp' );

var paths	= require( '../utils/paths' );

var curl	= require("curljs");
var fs		= require( 'fs' );
var gutil	= require( 'gulp-util' );

var config	= require( '../../' + paths.env.dev + paths.configs.configFile );




gulp.task( 'htmlify', [ 'delete' ], function() {
	
	var typeList;
	
	for ( var lg in config.HTMLIFY ) {
		typeList = config.HTMLIFY[ lg ];
		
		for ( i = 0; i < typeList.length; i++ ) {
			htmlify( lg, typeList[ i ] );
		}
	}
	
} );



function htmlify( lg, type ) {
	var url			= config.ENV.base_url + lg;
	
	var dataObject	= { htmlify: 'true' };
	var curlOpts	= curl.opts.silent()
								.ignore_cert()
								.follow_redirects()
								.max_redirs( 5 )
								.connect_timeout( 3 )
								.post_data( dataObject );
	
	console.log( url );
	curl( url, curlOpts, function( err, data, stderr ) {
		var stringToReplace	= 'LANDING_TYPE';
		var newString		= type
		var filePath		= paths.env.prod + config.TLP_NAME + '-' + lg + '-' + type + '.html';
		
		data = data.replace( new RegExp( 'LANDING_TYPE', 'g' ), type );
		
		fs.writeFileSync( filePath, data, 'utf8' );
		
		console.log( gutil.colors.bgGreen( ' ' + filePath + ' ' ) + gutil.colors.green( ' file was succefully created.' ) );
	} );
}