define({
	app_name: "TTUP",
	
	shim : {
		'ember' : {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		},
		'QUnit': {
	           exports: 'QUnit',
	           init: function() {
	               QUnit.config.autoload = false;
	               QUnit.config.autostart = false;
	           }
	       } 
	},
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
		'ember': 'libs/ember',
		'QUnit':'libs/qunit',
		
		/*requirejs-plugins*/
		'text': 'libs/requirejs/plugins/text',
		'hbs': 'libs/requirejs/plugins/hbs',
		'domReady': 'libs/requirejs/plugins/domReady'
	},
	/*hbs plugin options*/
	// hbs: {
		// disableI18n: true,
		// templateExtension: "html"
	// }

}); 