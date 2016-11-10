<?php



class GlobalContent extends AbstractContent
{
	
	protected function setData()
	{
		$d = new stdClass();
		
		
		$d->menu		= new stdClass();
		
		// $d->menu->home	= "Home";
		
		
		
		$this->data = $d;
	}
	
}



?>