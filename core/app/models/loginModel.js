define(["ember","ember_validations"], function(ember, router) {
	return ember.Object.extend(Ember.Validations,{
		username:'',
		password:'',
		validations : {
			username : {
				presence : true,
				length : [10]
			},
			password : {
				presence : true
			}
		},
		login : function() {
			var self = this;
			this.validate().then(function(){
				if(self.get('isValid'))
				{
					console.log('ok')
				}
				else
				{
					console.log('error')
				}
			})
		}
	});
}); 