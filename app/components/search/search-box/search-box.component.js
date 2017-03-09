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
		this.searchResults = null;
		
		// Autocomplete variables
		this.selectedItem = null;
		this.searchText = null;

		this.recentSearches = [];

		this.$onInit = function() {
			// var startId = 14;
			// var endId = 20;

			// for (var wordId = startId; wordId <= endId; wordId++) {
			// 	WordService.get(wordId).then(function (response) {
			// 		self.recentSearches.push(response.data);
			// 	});
			// }
		};

		this.autocomplete = function(query) {
			return SearchService.autocomplete(query);
		}

		this.search = function(query) {
			StateService.goToSearch(query);
		}

		this.onSelectedItemChanged = function(item) {
			if (self.selectedItem) {
				if (item.type === 'word') {
					self.goToWordDetail(item.id);
				}
				else if (item.type === 'theme') {
					self.goToThemeDetail(item.id);
				}
			}
		}

		this.goToWordDetail = function(wordId) {
			StateService.goToWordDetail(wordId);
		}

		this.goToThemeDetail = function(themeId) {
			StateService.goToThemeDetail(themeId);
		}

		this.goToWordCreate = function() {
			StateService.goToWordCreate();
		}

		this.translate = function(key) {
			return WordService.translate(key);
		}
	}
})();