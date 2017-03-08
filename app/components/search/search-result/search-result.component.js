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
	
	SearchResultController.$inject = ['WordService', 'SearchService', '$state'];

	function SearchResultController(WordService, SearchService, $state) {
		var self = this;
		this.searchResults = null;
		this.userQuery = null;

		this.$onInit = function() {
			self.searchResults = self.searchData.data;
			self.userQuery = self.query;
		};

		this.goToWordDetails = function(wordId) {
			$state.go('word-detail', {
				wordId: wordId
			});
		}

		this.goToThemeDetails = function(themeId) {
			$state.go('theme-detail', {
				themeId: themeId
			});
		};
	}
})();