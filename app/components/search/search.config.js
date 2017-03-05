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
				searchData: resolveSearch
			}
		};

        resolveSearch.$inject = ['SearchService', '$stateParams'];

        function resolveSearch(SearchService, $stateParams) {
			return SearchService.search($stateParams.query);
		}

		$stateProvider.state(searchState);
    }
})();