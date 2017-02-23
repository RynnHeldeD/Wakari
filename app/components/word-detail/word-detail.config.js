(function() {
	'use strict';
	
	angular
		.module('word-detail')
		.config(config);
	
	config.$inject = ['$stateProvider'];

	function config($stateProvider) {
		var wordDetailState = {
			name: 'word-detail',
			url: '/word/:wordId',
			component: 'wordDetail'
		};

		$stateProvider.state(wordDetailState);
	}
})();