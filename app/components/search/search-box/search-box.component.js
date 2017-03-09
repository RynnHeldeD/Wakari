(function() {
	'use strict';
	
	angular
		.module('wakari-app-search')
		.component('searchBox', {
			templateUrl: 'app/components/search/search-box/search-box.template.html',
			controller: SearchBoxController
		});
	
	SearchBoxController.$inject = ['WordService', 'SearchService', 'StateService'];

	function SearchBoxController(WordService, SearchService, StateService) {
		var self = this;
		self.searchResults = null;
		
		// Autocomplete variables
		self.selectedItem = null;
		self.searchText = null;

		self.recentSearches = [];

		self.$onInit = function() {
			// var startId = 14;
			// var endId = 20;

			// for (var wordId = startId; wordId <= endId; wordId++) {
			// 	WordService.get(wordId).then(function (response) {
			// 		self.recentSearches.push(response.data);
			// 	});
			// }
		};

		self.autocomplete = function(query) {
			return SearchService.autocomplete(query);
		}

		self.search = function(query) {
			StateService.goToSearch(query);
		}

		self.onSelectedItemChanged = function(item) {
			if (self.selectedItem) {
				if (item.type === 'word') {
					self.goToWordDetail(item.id);
				}
				else if (item.type === 'theme') {
					self.goToThemeDetail(item.id);
				}
			}
		}

		self.goToWordDetail = function(wordId) {
			StateService.goToWordDetail(wordId);
		}

		self.goToThemeDetail = function(themeId) {
			StateService.goToThemeDetail(themeId);
		}

		self.goToWordCreate = function() {
			StateService.goToWordCreate();
		}

		self.translate = function(key) {
			return WordService.translate(key);
		}
	}
})();