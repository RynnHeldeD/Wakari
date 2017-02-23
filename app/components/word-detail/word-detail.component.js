(function() {
	'use strict';
	
	angular
		.module('word-detail')
		.component('wordDetail', {
			templateUrl: 'app/components/word-detail/word-detail.template.html',
			controller: WordDetailController,
			bindings: {
				word: '<'
			}
		});

	WordDetailController.$inject = [];

	function WordDetailController() {

	}
})();