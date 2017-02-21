(function() {
	'use strict';
	
	angular
		.module('search-bar')
		.component('searchBar', {
			templateUrl: 'app/components/search-bar/search-bar.template.html',
			controller: SearchBarController
		});
	
	SearchBarController.$inject = ['WordService'];

	function SearchBarController(WordService) {
		var self = this;
		this.searchResult = null;
		this.userSearch = "";

		WordService.searchByKeyword().then(function(response) {
			self.searchResult = response.data;
		});

		this.search = function() {
			console.log('you searched for : "' + self.userSearch + '"');
		}
	}
})();