<?php
// namespace util;

// use app\Path;

class Caller {
	
	public $url = null;
	public $param = null;
	
	/**
	 * @param String $url
	 * @param array $param
	 * @param Boolean $autodispatch
	 */
	
	public function __construct( $url, $param = null ) {
		
		/*$toreplace = array(
			"{base_url}"=>Path::getInstance()->getBaseUrl()
		);
		
		if($param != null && is_array($param)){
			$toreplace = array_merge($toreplace,$param);
		}
		
		foreach($toreplace as $k=>$v){
			$url = str_replace($k,$v,$url);
		}*/
		//
		
		$this->url		= $url;
		$this->param	= ($param != null) ? $param:array();
	}
	
	public function dispatch(){
		$curl = curl_init($this->url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		if($this->param){
			// print_r($this->param);exit;
			curl_setopt($curl, CURLOPT_POST, true);
			curl_setopt($curl, CURLOPT_POSTFIELDS, $this->param);
		}
		
		$curl_response = curl_exec($curl);
		if ($curl_response === false) {
			$info = curl_getinfo($curl);
			curl_close($curl);
			die('error occured during curl exec. Additioanl info: ' . var_export($info));
		}
		curl_close($curl);
		// $decoded = json_decode($curl_response);
		// if (isset($decoded->response) && isset($decoded->response->status) && $decoded->response->status == 'ERROR') {
		// 	die('error occured: ' . $decoded->response->errormessage);
		// }
		// return $decoded;
		return $curl_response;
	}
}