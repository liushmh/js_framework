define([ "ember", "api/testAPI" ], function(Ember, apiBase) {
var indexController = Ember.Controller.extend({
username : 'ymliu',
address : 'test',
imageIndex : 0,
imageList: [
{id:0,desc:'big pic',url:'http://farm6.staticflickr.com/5494/9177025685_f35d8c8255_c.jpg',isActive:'active'},
{id:1,desc:'small pic',url:'http://farm6.staticflickr.com/5494/9177025685_f35d8c8255_z.jpg',isActive:''}
],
roles:[{id:1,description:'teacher'},{id:2,description:'student'}],
role:'',
status : '',
register : function() {
},
load: function() {
	var remoteAPI = new apiBase()
	self = this
	return remoteAPI.load().done(function(data) {
		self.set('username', data.name)
	});
}
});

return indexController;
});