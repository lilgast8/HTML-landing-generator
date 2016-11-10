<?php



class Router
{
	
	protected static $instance;
	
	static $URL					= null;
	static $CONTENT_TYPE		= null;
	static $LANDING_TYPE		= null;
	
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
		self::$URL->fullPath	= $this->getFullPath();
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
	
	
	private function getFullPath()
	{
		$path		= str_replace( Path::$URL->base, '', self::$URL->full );
		
		// remove ?search
		$pathParams	= explode( '?', $path );
		$path		= $pathParams[0];
		
		
		return $path;
	}
	
	
	private function getPath()
	{
		$path = Strings::removeFirstSpecificChar( self::$URL->fullPath, '/' );
		$path = Strings::removeLastSpecificChar( self::$URL->fullPath, '/' );
		
		
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
		$this->setParams();
	}
	
	
	private function setContentType()
	{
		self::$CONTENT_TYPE = '404';
		
		$type = isset( $_GET[ 'type' ] ) ? $_GET[ 'type' ] : null;
		
		foreach ( Config::$HTMLIFY as $lg => $typeList ) {
			if ( $lg == self::$URL->pathParams[ 0 ] && count( self::$URL->pathParams ) == 1 && substr( self::$URL->fullPath, -1, 1 ) != '/' ) {
				if ( in_array( $type, $typeList ) ) {
					self::$CONTENT_TYPE = 'view';
					
					break;
				}
			}
		}
		
		if ( isset( $_POST[ 'htmlify' ] ) )
			self::$CONTENT_TYPE = 'htmlify';
		
		else if ( self::$CONTENT_TYPE != 'view' ) {
			$type	= in_array( $type, Config::$HTMLIFY->{ Lang::$LANG } ) ? $type : Config::$HTMLIFY->{ Lang::$LANG }[0];
			$url	= Path::$URL->base . Lang::$LANG . '?type=' . $type;
			
			header( 'Location: ' . $url );
			exit();
		}
		
		self::$LANDING_TYPE = $type;
		
		
		$this->path->setJsFilesUrl();
	}
	
	
	private function setParams()
	{
		$this->params = new stdClass();
		
		$this->params->LANDING_TYPE = self::$LANDING_TYPE;
	}
	
	
	public function getParams()
	{
		return $this->params;
	}
	
}



?>