(function() {
	'use strict';

	angular
		.module('wakari-app-search')
		.config(config);
	
	config.$inject = ['$stateProvider'];

	function config($stateProvider) {
		var searchState = {
			name: 'index.search',
			url: 'search/{query}',
			component: 'searchResult',
			resolve: {
				searchData: resolveSearch,
				query: resolveQuery
			}
		};

		resolveSearch.$inject = ['SearchService', '$stateParams'];
		resolveQuery.$inject = ['$stateParams'];

		function resolveSearch(SearchService, $stateParams) {
			return SearchService.search($stateParams.query);
		}

		function resolveQuery($stateParams) {
			return $stateParams.query;
		}
		
		$stateProvider.state(searchState);
	}
})();