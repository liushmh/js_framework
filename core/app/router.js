define(["ember"], function(Ember) {
	
	
	var Router = Ember.Router.extend();

	Router.map(function() {
		// this.route("index", {
			// path : "/"
		// });
		this.route("login", {
			path : "/"
		});
	});

	return Router;
}); 