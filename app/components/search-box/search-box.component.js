(function() {
	'use strict';
	
	angular
		.module('search-box')
		.component('searchBox', {
			templateUrl: 'app/components/search-box/search-box.template.html',
			controller: SearchBoxController
		});
	
	SearchBoxController.$inject = ['WordService'];

	function SearchBoxController(WordService) {
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