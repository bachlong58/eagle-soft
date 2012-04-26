<?php
defined('ERROR_REPORTING') || define('ERROR_REPORTING', E_ALL);

defined('APPLICATION_ENV') || define('APPLICATION_ENV', 'development');
defined('ROOT_DIR') 	|| define('ROOT_DIR', $_SERVER['DOCUMENT_ROOT'] . '/Zend1.11');
defined('APPLICATION_PATH') 	|| define('APPLICATION_PATH', ROOT_DIR . '/application');

$paths = array(
	ROOT_DIR. '/library',
	get_include_path()
);

set_include_path(implode(PATH_SEPARATOR, $paths));

/** Zend_Application */
require_once 'Zend/Application.php';
$application = new Zend_Application(
			    	    APPLICATION_ENV,
			        	APPLICATION_PATH . '/configs/application.ini'
			    );
    
$application->bootstrap();
$application->run();