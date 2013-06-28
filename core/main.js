(function(root){
	require(["config"], function(config){
		requirejs.config(config);
		require(["app", "ember"], function(objApp, Ember){
			
			require(["ember_bootstrap"],function(bootstrap){
				var app_name = config.app_name || "app";
				App = Ember.Application.create(objApp);
			
				root[app_name] = App;
				App.Bootstrap = window.Bootstrap;
			});
		});
	});
})(this);