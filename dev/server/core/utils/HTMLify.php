<?php



class HTMLify
{
	
	protected static $instance;
	
	// static $ALL_LANG		= null;
	
	
	protected function __construct()
	{
		/*$this->router	= Router::getInstance();
		$this->path		= Path::getInstance();
		
		$this->setGlobalInfos();
		$this->router->setUrl();
		$this->setCurrentLang();
		$this->checkDefaultLang();
		// $this->router->setPageUrl();
		$this->setLangLinks();
		
		$this->path->setFileLangVar();
		
		$this->setParams();*/
		$this->checkHTMLify();
	}
	
	
	public static function getInstance()
	{
		if ( !isset( self::$instance ) )
			self::$instance = new self;
		
		return self::$instance;
	}
	
	
	private function checkHTMLify()
	{
		
		if ( Router::$CONTENT_TYPE == 'htmlify' ) {
			// echo '⚡️ SLP ⚡️ <br><br>';
			
			foreach ( Config::$HTMLIFY as $lg => $typeList ) {
				// echo $lg.'<br>';
				
				for ( $i = 0; $i < count( $typeList ); $i++ ) {
					// echo $typeList[ $i ].'<br />';
					$this->htmlify( $lg, $typeList[ $i ] );
				}
			}
			
			
			// $url	= Path::$URL->base . 'fr';
			
			// $caller	= new Caller( $url );
			// $rs		= $caller->dispatch();
			
			// file_put_contents ( '../www/template-fr.html' , $rs );
		}
		
	}
	
	
	private function htmlify( $lg, $type )
	{
		// echo $lg.' - '.$type.'<br>';
		
		$url	= Path::$URL->base . $lg;
		
		// echo $url.' - <br>';
		$caller	= new Caller( $url );
		$html	= $caller->dispatch();
		
		file_put_contents ( '../www/template-' . $lg . '-' . $type . '.html' , $html );
	}
	
}



?>