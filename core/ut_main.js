require(
    ['config'],
    function(config) {
    	requirejs.config(config);
    	//api.login();
    	require(['QUnit', 'api/unittest/ut_testAPI'], function(QUnit, userAPI){
        // run the tests.
        userAPI.run();
        
        // start QUnit.
        QUnit.load();
        QUnit.start();
     });
    }
);