<?php
namespace Api\Model;

use Symfony\Component\HttpFoundation\Request;

class CacheModel {
	private $_cachetime = 86400; //60*60*24

	public function _getcache($cachefile)
	{		
		$cachetime=$this->_cachetime;
		if (file_exists($cachefile) && time() - $cachetime < filemtime($cachefile))
		{
			return file_get_contents($cachefile);
		}
		else
		{
			return false;
		}
	}
	
	public function _writecache($cachefile, $json)
	{
		$cached = fopen($cachefile, 'w');
		fwrite($cached, $json);
		fclose($cached);
	}
	
	public function _getCacheFileName(Request $request)
	{
		return '../tmp/'. md5($request->getUri()).'.tmp';
	}
}

?>