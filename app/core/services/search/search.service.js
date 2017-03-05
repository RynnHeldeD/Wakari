(function() {
	'use strict';
	
	angular
		.module('wakari-app')
		.factory('SearchService', SearchService);
	
	SearchService.$inject = ['$http'];

	function SearchService($http) {
		var endpoint = 'http://wakari-api.huitiemeciel.info/search';

		return {
			search: search
		};

		function search(query) {
			return $http.get(endpoint + '/' + query);
		}
	}
})();