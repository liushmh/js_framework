define(['ember', 'api/testAPI', 'QUnit'], function(ember, testAPI, QUnit) {

	var run = function() {
		test('jsut for testing', function() {
			api = new testAPI();
			api.load().done(function(data){
				equal(data.name, 'CHATEAU DE SAINT COSME');
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
