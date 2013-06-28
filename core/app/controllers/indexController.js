define([ "ember", "api/testAPI" ], function(Ember, apiBase) {
	var indexController = Ember.Controller.extend({
		username : 'ymliu',
		address : 'test',
		roles:[{id:1,description:'teacher'},{id:2,description:'student'}],
		role:'',
		status : '',
		register : function() {
		},
		load: function()
		{
			var remoteAPI = new apiBase()
			self = this
			remoteAPI.load().done(function(data){
				self.set('username',data.name)
			});
		}
	});

	return indexController;
});