({baseUrl:'core',
out:'build/main.js',
wrap:true,
paths : {
		'app': 'app/main',	
		'router':'app/router',	
		'models': 'app/models',
		'views': 'app/views',
		'controllers': 'app/controllers',
    	'templates': 'app/templates',
    	'api': 'api',
    	/*framework*/
    	
		/*libs*/
		'jquery': 'libs/jquery.min',
		'handlebars': 'libs/handlebars',
		'ember_bootstrap': 'libs/ember-bootstrap.min',
		'ember_validations': 'libs/ember-validations.min',
		'ember': 'libs/ember',
		'QUnit':'libs/qunit',
		
		/*requirejs-plugins*/
		'text': 'libs/requirejs/plugins/text',
		'hbs': 'libs/requirejs/plugins/hbs',
		'domReady': 'libs/requirejs/plugins/domReady'
	}})
