(function() {
    'use strict';

    angular
        .module('wakari-app-theme')
        .config(config);
    
    config.$inject = ['$stateProvider'];

	function config($stateProvider) {
		var themeDetailState = {
			name: 'theme-detail',
			url: '/theme/{themeId}',
			component: 'themeDetail',
			resolve: {
				themeData: resolveTheme,
				wordsData: resolveWords
			}
		};

		resolveTheme.$inject = ['ThemeService', '$stateParams'];
		resolveWords.$inject = ['ThemeService', '$stateParams'];

		function resolveTheme(ThemeService, $stateParams) {
			return ThemeService.get(+$stateParams.themeId);
		}

		function resolveWords(ThemeService, $stateParams) {
			return ThemeService.getWords(+$stateParams.themeId);
		}

		$stateProvider.state(themeDetailState);
	}
})();