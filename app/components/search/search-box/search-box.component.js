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
		
		// Autocomplete variables
		self.selectedItem = null;
		self.searchText = null;

		// self.recentSearches = [];

		self.$onInit = onInit;
		self.autocomplete = autocomplete;
		self.search = search;
		self.onSelectedItemChanged = onSelectedItemChanged;
		self.goToWordDetail = StateService.goToWordDetail;
		self.goToWordCreate = StateService.goToWordCreate;
		self.goToThemeDetail = StateService.goToThemeDetail;
		self.goToThemeCreate = StateService.goToThemeCreate;
		self.translate = translate;

		function onInit() {
			// var startId = 14;
			// var endId = 20;

			// for (var wordId = startId; wordId <= endId; wordId++) {
			// 	WordService.get(wordId).then(function (response) {
			// 		self.recentSearches.push(response.data);
			// 	});
			// }
		}

		function autocomplete(query) {
			return SearchService.autocomplete(query);
		}

		function search(query) {
			StateService.goToSearch(query);
		}

		function onSelectedItemChanged(item) {
			if (self.selectedItem) {
				if (item.type === 'word') {
					self.goToWordDetail(item.id);
				}
				else if (item.type === 'theme') {
					self.goToThemeDetail(item.id);
				}
			}
		}

		 function translate(key) {
			return WordService.translate(key);
		}
	}
})();