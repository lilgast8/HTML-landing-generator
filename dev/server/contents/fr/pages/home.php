<?php



class HomeContent extends AbstractContent
{
	
	protected function setData()
	{
		$d		= new stdClass();
		
		
		$d->metas			= new stdClass();
		$d->metas->title	= "Accueil — HTML landing generator";
		$d->metas->desc		= "Accueil — HTML landing generator";
		
		
		$d->title = "Bonjour monde !";
		
		
		
		$this->data = $d;
	}
	
}



?>