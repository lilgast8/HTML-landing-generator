<?php



include_once 'server/core/controllers/AbstractViewController.php';

include_once 'server/contents/AbstractContent.php';



class PagesController
{
	
	protected static $instance;
	
	private $twig				= null;
	
	private $pageController		= null;
	private $page				= null;
	
	
	protected function __construct()
	{
		$this->setTwig();
		$this->setTwigExtensions();
	}
	
	
	public static function getInstance()
	{
		if ( !isset( self::$instance ) )
			self::$instance = new self;
		
		return self::$instance;
	}
	
	
	private function setTwig()
	{
		$loader	= new Twig_Loader_Filesystem( array(
			Path::$FILE->views,
			Path::$FILE->viewsPages,
			Path::$FILE->viewsPartials,
			Path::$FILE->viewsStatics,
			Path::$FILE->viewsShared,
			Path::$FILE->svgSprite
		) );
		
		$this->twig	= new Twig_Environment( $loader, array(
			'debug' => true
		) );
		$this->twig->addExtension( new Twig_Extension_Debug() );
	}
	
	
	private function setTwigExtensions()
	{
		$this->twig->addGlobal( 'Helpers', new TwigHelpers() );
		
		// $this->twig->addExtension( new Twig_Extensions_Extension_Text() );
		// $this->twig->addExtension( new Twig_Extensions_Extension_I18n() );
		// $this->twig->addExtension( new Twig_Extensions_Extension_Intl() );
		// $this->twig->addExtension( new Twig_Extensions_Extension_Array() );
		// $this->twig->addExtension( new Twig_Extensions_Extension_Date() );
	}
	
	
	public function setPageInfos()
	{
		$this->page = Page::getInstance();
		
		if ( Router::$CONTENT_TYPE != '404' ) {
			$this->page->id		= 'home';
			$this->page->js		= $this->page->id;
			$this->page->twig	= $this->page->id;
			$this->page->ctrl	= $this->page->id;
		}
		else {
			$this->page->id		= 'error-404';
			$this->page->js		= $this->page->id;
			$this->page->twig	= $this->page->id;
			$this->page->ctrl	= $this->page->id;
		}
	}
	
	
	public function init()
	{
		$this->setPageInfos();
		$this->page->setParams();
		
		$this->setPageViewController();
		$this->initPageController();
	}
	
	
	private function setPageViewController()
	{
		$controllerClassName	= Strings::titleCase( $this->page->ctrl );
		
		$phpFilePath			= 'server/core/controllers/pages/' . $controllerClassName . '.php';
		
		if ( !file_exists( $phpFilePath ) ) {
			$controllerClassName	= 'AbstractViewController';
			$phpFilePath			= 'server/core/controllers/AbstractViewController.php';
		}
		
		include_once $phpFilePath;
		
		$this->pageController = new $controllerClassName( $this->page->ctrl, $this->page->alias, 'page' );
	}
	
	
	private function initPageController()
	{
		$this->pageController->init( $this->twig );
	}
	
	
	public function displayView()
	{
		$this->pageController->displayView();
	}
	
	
	public function getPageController()
	{
		return $this->pageController;
	}
	
}



?>