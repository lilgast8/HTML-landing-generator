<?php



class Router
{
	
	protected static $instance;
	
	static $URL					= null;
	static $ALT_LANG_URL		= null;
	static $LINK				= null;
	static $JS_VIEWS_ID			= null;
	
	static $CONTENT_TYPE		= null;
	
	private $isHomepage			= null;
	
	private $params				= null;
	
	
	protected function __construct()
	{
		$this->path = Path::getInstance();
		
		$this->setPage();
	}
	
	
	public static function getInstance()
	{
		if ( !isset( self::$instance ) )
			self::$instance = new self;
		
		return self::$instance;
	}
	
	
	private function setPage()
	{
		$this->page	= Page::getInstance();
		$this->page->init();
	}
	
	
	public function setUrl()
	{
		self::$URL				= new stdClass();
		
		self::$URL->full		= $this->getFullUrl();
		self::$URL->path		= $this->getPath();
		self::$URL->pathParams	= explode( '/', self::$URL->path );
		self::$URL->page		= null;
		self::$URL->pageParams	= null;
		self::$URL->fullGa		= $this->getFullGaUrl();
	}
	
	
	private function getFullUrl()
	{
		$protocol = ( !empty( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443 ) ? 'https://' : 'http://';
		
		
		return $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
	}
	
	
	private function getPath()
	{
		$path		= str_replace( Path::$URL->base, '', self::$URL->full );
		
		// remove ?search
		$pathParams	= explode( '?', $path );
		$path		= $pathParams[0];
		
		$path = Strings::removeFirstSpecificChar( $path, '/' );
		$path = Strings::removeLastSpecificChar( $path, '/' );
		
		
		return $path;
	}
	
	
	private function getFullGaUrl()
	{
		$fullGA = str_replace( Path::$URL->base, '', self::$URL->full );
		
		
		return $fullGA;
	}
	
	
	private function getPageUrl()
	{
		$pageUrl = preg_replace( '/' . Lang::$LANG . '/', '', self::$URL->path, 1 );
		
		$pageUrl = Strings::removeFirstSpecificChar( $pageUrl, '/' );
		$pageUrl = Strings::removeLastSpecificChar( $pageUrl, '/' );
		
		
		return $pageUrl;
	}
	
	
	public function init()
	{
		$this->setContentType();
	}
	
	
	private function setContentType()
	{
		self::$CONTENT_TYPE = '404';
		
		if ( isset( $_POST[ 'htmlify' ] ) )
			self::$CONTENT_TYPE = 'htmlify';
		
		else if ( self::$URL->path == '' ||
			 count( self::$URL->pathParams ) == 1 && self::$URL->pathParams[0] != Lang::$LANG ||
			 count( self::$URL->pathParams ) > 1 ) {
			header( 'Status: 301 Moved Permanently', true, 301 );
			header( 'Location: ' . Path::$URL->base . Lang::$LANG );
			exit();
		}
		
		else {
			for ( $i = 0; $i < count( Lang::$ALL_LANG ); $i++ ) {
				$lg = Lang::$ALL_LANG [ $i ];
				
				if ( $lg == self::$URL->path ) {
					self::$CONTENT_TYPE = 'view';
					
					break;
				}
			}
		}
		
		
		$this->path->setJsFilesUrl();
	}
	
}



?>