(function() {
	'use strict';
	
	angular
		.module('wakari-app-word')
		.config(config);
	
	config.$inject = ['$stateProvider'];

	function config($stateProvider) {
		var wordDetailState = {
			name: 'word-detail',
			url: '/word/{wordId}',
			component: 'wordDetail',
			resolve: {
				wordData: resolveWord
			}
		};

		var wordCreateState = {
			name: 'word-create',
			url: '/word/new',
			component: 'wordCreate'
		};

		resolveWord.$inject = ['WordService', '$stateParams'];

		function resolveWord(WordService, $stateParams) {
			return WordService.get(+$stateParams.wordId);
		}

		$stateProvider.state(wordDetailState);
		$stateProvider.state(wordCreateState);
	}
})();