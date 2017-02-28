(function() {
	'use strict';
	
	angular
		.module('wakari-app')
		.factory('ThemeService', ThemeService);
	
	ThemeService.$inject = ['$http'];

	function ThemeService($http) {
		var endpoint = 'http://wakari-api.huitiemeciel.info/theme';

		return {
			get: get,
			create: create,
			save: save,
			remove: remove,
			getWords: getWords
		};

		function get(id) {
			return $http.get(endpoint + '/' + id);
		}

		function create(theme) {
			return $http.put(endpoint, {"data": JSON.stringify(theme)});
		}

		function save(theme) {
			return $http.post(endpoint, {"data": JSON.stringify(theme)});
		}

		function remove(id) {
			return $http.delete(endpoint + '/' + id);
		}

		function getWords(theme) {
			return $http.get(endpoint + '/' + theme + '/words');
		}
	}
})();