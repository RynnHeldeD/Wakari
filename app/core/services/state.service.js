(function() {
	'use strict';
	
	angular
		.module('wakari-app')
		.factory('StateService', StateService);
	
	StateService.$inject = ['$http', '$state', '$timeout'];

	function StateService($http, $state, $timeout) {
		return {
			goToSearch: goToSearch,
			goToWordCreate: goToWordCreate,
			goToWordDetail: goToWordDetail,
			goToThemeCreate: goToThemeCreate,
			goToThemeDetail: goToThemeDetail
		};

		function goToSearch(query) {
			$state.go('index.search', {
				'query': query
			});
		}

		function goToWordCreate() {
			$state.go('word-create');
		}

		function goToWordDetail(wordId) {
			$state.go('word-detail', {
				'wordId': wordId
			});
		}

		function goToThemeCreate() {
			$state.go('theme-create');
		}

		function goToThemeDetail(themeId) {
			$state.go('theme-detail', {
				'themeId': themeId
			});
		}
	}
})();