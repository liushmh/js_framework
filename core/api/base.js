define([
	'ember'
],function(
	em
){
	"use strict";

	return em.Object.extend({

		baseUrl: 'http://192.168.0.13:3000/',
		
		_get: function(resourceUrl, data){
			return em.$.ajax({
				url: this.baseUrl + resourceUrl,
				dataType: 'json',
				data: data,
				type: 'GET'
			});
		},
		
		_post: function(resourceUrl, data){
			return em.$.ajax({
				url: this.baseUrl + resourceUrl,
				dataType: 'json',
				data: data,
				type: 'POST'
			});
		},
		
		_put: function(resourceUrl, data){
			return em.$.ajax({
				url: this.baseUrl + resourceUrl,
				dataType: 'json',
				data: data,
				type: 'PUT'
			});
		},
		
		_delete: function(resourceUrl, data){
			return em.$.ajax({
				url: this.baseUrl + resourceUrl,
				dataType: 'json',
				data: data,
				type: 'DELETE'
			});
		},

	});
});