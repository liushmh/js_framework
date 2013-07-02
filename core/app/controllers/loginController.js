define(["ember", "api/testAPI","ember_validations"], function(Ember, apiBase) {
	return Ember.Controller.extend(Ember.Validations.Mixin, {
		username:'',
		err_username:'',
		password:'',
		err_password:'',
		validations : {
			username : {
				presence : true,
				presence: { message: 'user name must not be blank' },
				length : {minimum:6, messages: { tooShort: 'should be more than 6 characters'}}
			},
			password : {
				presence : true,
				presence: { message: 'password must not be blank' }
			}
		},
		login : function() {
			var self = this;
			self.validate().then(function(){
				if(self.get('isValid'))
				{
					self.set('err_username','');
					self.set('err_password','');
				}
				else
				{
					self.set('err_username',self.errors.get('username'));
					self.set('err_password',self.errors.get('password'));
					
				}
			})
		}
	});
});
