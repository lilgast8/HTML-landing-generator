<?php



class Config
{
	
	protected static $instance;
	
	const CONFIG_FILE_PATH		= 'configs/config.json';
	
	static $ENV					= null;
	static $ENVS				= null;
	static $HTMLIFY				= null;
	static $TLP_NAME			= null;
	
	private $jsFiles			= null;
	
	private $params				= null;
	
	
	protected function __construct()
	{
		$this->setConfig();
	}
	
	
	public static function getInstance()
	{
		if ( !isset( self::$instance ) )
			self::$instance = new self;
		
		return self::$instance;
	}
	
	
	private function setConfig()
	{
		$config = $this->getConfigFile();
		
		foreach ( $config as $varName => $value )
			self::${ $varName } = $value;
	}
	
	
	private function getConfigFile()
	{
		if ( !file_exists( self::CONFIG_FILE_PATH ) )
			throw new ErrorException( 'Config file is missing!' );
		
		$config = file_get_contents( self::CONFIG_FILE_PATH );
		$config = json_decode( $config );
		
		
		return $config;
	}
	
	
	public function init()
	{
		$this->setParams();
	}
	
	
	public function getJsFilesFile()
	{
		if ( !$this->jsFiles ) { // load file if it wasn't already done
			
			if ( !file_exists( Path::$FILE->jsFilesFile ) )
				throw new ErrorException( 'JsFilesFile is missing!' );
			
			$this->jsFiles	= file_get_contents( Path::$FILE->jsFilesFile );
			$this->jsFiles	= json_decode( $this->jsFiles );
		}
		
		
		return $this->jsFiles;
	}
	
	
	private function setParams()
	{
		$this->params = new stdClass();
		
		$this->params->ENV		= self::$ENV;
		$this->params->ALL_LANG	= self::$ALL_LANG;
	}
	
	
	public function getParams()
	{
		return $this->params;
	}
	
}



?>