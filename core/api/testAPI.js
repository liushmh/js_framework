define([
	'api/base'
],function(
	apiBase
){
	return apiBase.extend({
		load: function()
		{
			return this._get('wines/51cde3d4d30628a691000001');
		}
	});
});
