(function() {
	'use strict';
	
	angular
		.module('wakari-app')
		.factory('WordService', WordService);
	
	WordService.$inject = ['$http'];

	function WordService($http) {
		return {
			getById: getById,
			searchByKeyword: searchByKeyword
		};

		function getById(id) {
			return $http.get('app/core/models/words.json')
				.then(function(response) {
					return response.data.find(function(word) {
						return word.id === id
					})
				});
		}

		function searchByKeyword(keyword) {
			return $http.get('app/core/models/search.json');
		}
	}
})();