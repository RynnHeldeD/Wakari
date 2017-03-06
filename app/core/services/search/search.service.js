(function() {
	'use strict';
	
	angular
		.module('wakari-app')
		.factory('SearchService', SearchService);
	
	SearchService.$inject = ['$http'];

	function SearchService($http) {
		var endpoint = 'http://wakari-api.huitiemeciel.info/search';

		return {
			search: search,
			autocomplete: autocomplete
		};

		function search(query) {
			return $http.post(endpoint, {"data": JSON.stringify(query)});
		}

		function autocomplete(query) {
			return $http.post(endpoint + '/autocomplete', {"data": JSON.stringify(query)})
				.then(function(response) {
					return response.data;
				});
		}
	}
})();