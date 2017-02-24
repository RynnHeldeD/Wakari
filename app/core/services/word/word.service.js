(function() {
	'use strict';
	
	angular
		.module('wakari-app')
		.factory('WordService', WordService);
	
	WordService.$inject = ['$http'];

	function WordService($http) {
		var endpoint = 'http://wakari-api.huitiemeciel.info/word';

		return {
			get: get,
			create: create,
			save: save,
			remove: remove,
			searchByKeyword: searchByKeyword
		};

		function get(id) {
			return $http.get(endpoint + '/' + id);
		}

		function create(word) {
			return $http.put(endpoint, {"data": JSON.stringify(word)});
		}

		function save(word) {
			return $http.post(endpoint, {"data": JSON.stringify(word)});
		}

		function remove(id) {
			return $http.delete(endpoint + '/' + id);
		}

		function searchByKeyword(keyword) {
			return $http.get('app/core/models/search.json');
		}
	}
})();