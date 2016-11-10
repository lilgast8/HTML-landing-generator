<?php



class HomeContent extends AbstractContent
{
	
	protected function setData()
	{
		$d = new stdClass();
		
		
		$d->metas			= new stdClass();
		$d->metas->title	= "Home — HTML landing generator";
		$d->metas->desc		= "Home — HTML landing generator";
		
		
		$d->title = "Hello world!";
		
		
		
		$this->data = $d;
	}
	
}



?>