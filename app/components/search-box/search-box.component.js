(function() {
	'use strict';
	
	angular
		.module('search-box')
		.component('searchBox', {
			templateUrl: 'app/components/search-box/search-box.template.html',
			controller: SearchBoxController
		});
	
	SearchBoxController.$inject = ['WordService', '$state'];

	function SearchBoxController(WordService, $state) {
		var self = this;
		this.searchResult = null;
		this.userSearch = "";
		this.recentSearches = [];

		this.$onInit = function() {
			var startId = 14;
			var endId = 20;

			for (var wordId = startId; wordId <= endId; wordId++) {
				WordService.get(wordId).then(function (response) {
					self.recentSearches.push(response.data);
				});
			}

			WordService.searchByKeyword().then(function(response) {
				// self.searchResult = response.data;
			});
		};


		this.search = function() {
			console.log('you searched for : "' + self.userSearch + '"');
		}

		this.goToWordDetails = function(wordId) {
			$state.go('word-detail', {wordId: wordId});
		}
	}
})();