define(["require","ember", "router","controllers/loginController"], function(require, ember, router) {
	
	if (window.App != undefined) return window.App;
	
	/*Module Pattern*/
	var appConfig = {
		Router : router,
		LoginController: require("controllers/loginController")
	};

	window.App = ember.Application.create(appConfig);
	window.App.Bootstrap = window.Bootstrap;

	return window.App;
});
