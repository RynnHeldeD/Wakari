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

		self.$onInit = function() {
			self.searchResults = self.searchData.data;
			self.userQuery = self.query;
		};

		self.goToWordDetails = function(wordId) {
			StateService.goToWordDetail(wordId);
		}

		self.goToThemeDetails = function(themeId) {
			StateService.goToThemeDetail(themeId);
		};
	}
})();