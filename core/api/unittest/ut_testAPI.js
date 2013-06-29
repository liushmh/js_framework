define(['api/testAPI', 'QUnit'], function(testAPI, QUnit) {

	var run = function() {
		asyncTest('jsut for testing', function() {
			
			api = new testAPI();
			api.load().done(function(data){
				equal(data.name, 'CHATEAU DE SAINT COSME');
				start();
		});
		
		});
	};

	return {
		run : run
	};
	// api = new testAPI();
	// api.load()
	//
	//
	// test("should mock ajax", function() {
	// api.load().done(function(data){
	// equal(data.name, 'CHATEAU DE SAINT COSME')
	// })

});
