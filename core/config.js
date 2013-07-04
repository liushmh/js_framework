define({
	app_name: "TTUP",
	out:'build/main.js',
	shim : {
		'ember' : {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		},
		'ember_validations':['ember'],
		'ember_bootstrap':['ember'],
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
		'ember_validations': 'libs/ember-validations.min',
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