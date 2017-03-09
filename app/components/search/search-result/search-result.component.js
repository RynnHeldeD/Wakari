(function() {
	'use strict';
	
	angular
		.module('wakari-app-search')
		.component('searchResult', {
			templateUrl: 'app/components/search/search-result/search-result.template.html',
			controller: SearchResultController,
			bindings: {
				searchData: '<',
				query: '<'
			}
		});
	
	SearchResultController.$inject = ['WordService', 'SearchService', 'StateService'];

	function SearchResultController(WordService, SearchService, StateService) {
		var self = this;
		self.searchResults = null;
		self.userQuery = null;

		self.$onInit = onInit;
		self.goToWordDetail = StateService.goToWordDetail;
		self.goToThemeDetail = StateService.goToThemeDetail;

		function onInit() {
			self.searchResults = self.searchData.data;
			self.userQuery = self.query;
		};
	}
})();