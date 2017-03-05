(function() {
	'use strict';
	
	angular
		.module('wakari-app-search')
		.component('searchBox', {
			templateUrl: 'app/components/search/search-box/search-box.template.html',
			controller: SearchBoxController
		});
	
	SearchBoxController.$inject = ['WordService', 'SearchService', '$state'];

	function SearchBoxController(WordService, SearchService, $state) {
		var self = this;
		this.searchResults = null;
		
		// Autocomplete variables
		this.selectedItem = null;
		this.searchText = '';

		this.recentSearches = [];

		this.$onInit = function() {
			var startId = 14;
			var endId = 20;

			for (var wordId = startId; wordId <= endId; wordId++) {
				WordService.get(wordId).then(function (response) {
					self.recentSearches.push(response.data);
				});
			}
		};

		this.autocomplete = function(query) {
			return SearchService.autocomplete(query);
		}

		this.search = function(query) {
			$state.go('index.search', {
				query: query
			});
		}

		this.onSelectedItemChanged = function(query) {
			if (self.selectedItem) {
				self.search(query);
			}
		}

		this.goToWordDetails = function(wordId) {
            $state.go('word-detail', {
				wordId: wordId
			});
		}

		this.goToCreateWord = function() {
			$state.go('word-create');
		}
	}
})();