(function() {
	'use strict';
	
	angular
		.module('search-bar')
		.component('searchBar', {
			templateUrl: 'app/components/search-bar/search-bar.template.html',
			controller: SearchBarController
		});
	
	SearchBarController.$inject = [];

	function SearchBarController() {
		
	}
})();