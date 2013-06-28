define([
        "controllers/indexController", 
        "router"], 
function(
		indexController, 
		Router) {
	/*Module Pattern*/
	var App = {

		Router : Router,
		IndexController : indexController
	};
	return App;
});
