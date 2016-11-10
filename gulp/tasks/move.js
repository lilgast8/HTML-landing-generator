var gulp	= require( 'gulp' );

var options	= require( '../utils/options' );
var paths	= require( '../utils/paths' );

var plumber	= require( 'gulp-plumber' );



gulp.task( 'move', function() {
	
	var movePath = null;
	
	/* Prod */
	if ( options.task == 'prod' ) {
		
		var imgPathFrom;
		
		if ( options.image.min )
			imgPathFrom = [];
		else
			imgPathFrom = [
				paths.env.dev + paths.assets.img.allFiles,
				'!' + paths.env.dev + paths.emptyFiles
			];
		
		
		movePath = {
			from: [
				[ paths.env.dev + paths.assets.css.minAllFiles ],
				[
					paths.env.dev + paths.assets.css.fonts.allFiles,
					'!' + paths.env.dev + paths.emptyFiles
				],
				[
					paths.env.dev + paths.assets.files.allFiles,
					'!' + paths.env.dev + paths.emptyFiles
				],
				imgPathFrom,
				[ paths.env.dev + paths.assets.js.vendor.HTML5ShivFile ],
				[
					paths.env.dev + paths.assets.sounds.allFiles,
					'!' + paths.env.dev + paths.emptyFiles
				],
				[
					paths.env.dev + paths.assets.svg.sprite.allFiles,
					'!' + paths.env.dev + paths.emptyFiles
				],
				[
					paths.env.dev + paths.assets.videos.allFiles,
					'!' + paths.env.dev + paths.emptyFiles
				]
			],
			to: [
				paths.env.prod + paths.assets.css.dir,
				paths.env.prod + paths.assets.css.fonts.dir,
				paths.env.prod + paths.assets.files.dir,
				paths.env.prod + paths.assets.img.dir,
				paths.env.prod + paths.assets.js.vendor.dir,
				paths.env.prod + paths.assets.sounds.dir,
				paths.env.prod + paths.assets.svg.sprite.dir,
				paths.env.prod + paths.assets.videos.dir
			]
		};
	}
	
	
	/* SASS */
	else if ( options.task == 'sass' )
		movePath = {
			from: [
				[ paths.env.dev + paths.assets.css.minAllFiles ],
				[
					paths.env.dev + paths.assets.css.fonts.allFiles,
					'!' + paths.env.dev + paths.emptyFiles
				]
			],
			to: [
				paths.env.prod + paths.assets.css.dir,
				paths.env.prod + paths.assets.css.fonts.dir
			]
		};
	
	
	/* Files */
	else if ( options.task == 'files' )
		movePath = {
			from: [
				[
					paths.env.dev + paths.assets.files.allFiles,
					'!' + paths.env.dev + paths.emptyFiles
				]
			],
			to: [ paths.env.prod + paths.assets.files.dir ]
		};
	
	
	/* JS & JS-min */
	else if ( options.task == 'js' || options.task == 'js-min' )
		movePath = {
			from: [ paths.env.dev + paths.assets.js.vendor.HTML5ShivFile ],
			to: [ paths.env.prod + paths.assets.js.vendor.dir ]
		};
	
	
	/* SVG */
	else if ( options.task == 'svg' )
		movePath = {
			from: [ paths.env.dev + paths.assets.svg.sprite.allFiles ],
			to: [ paths.env.prod + paths.assets.svg.sprite.dir ]
		};
	
	
	/* Image */
	else if ( options.task == 'image' || options.task == 'image-min' || options.task == 'image-move' )
		movePath = {
			from: [
				[
					paths.env.dev + paths.assets.img.allFiles,
					'!' + paths.env.dev + paths.emptyFiles
				]
			],
			to: [ paths.env.prod + paths.assets.img.dir ]
		};
	
	
	/* Sounds */
	else if ( options.task == 'sounds' )
		movePath = {
			from: [
				[
					paths.env.dev + paths.assets.sounds.allFiles,
					'!' + paths.env.dev + paths.emptyFiles
				]
			],
			to: [ paths.env.prod + paths.assets.sounds.dir ]
		};
	
	
	/* Videos */
	else if ( options.task == 'videos' )
		movePath = {
			from: [
				[
					paths.env.dev + paths.assets.videos.allFiles,
					'!' + paths.env.dev + paths.emptyFiles
				]
			],
			to: [ paths.env.prod + paths.assets.videos.dir ]
		};
	
	
	
	if ( movePath !== null ) {
		for ( var i = 0; i < movePath.from.length; i++ ) {
			
			gulp.src( movePath.from[i] )
				.pipe( plumber() )
				.pipe( gulp.dest( movePath.to[i] ) );
			
		}
	}
	
} );