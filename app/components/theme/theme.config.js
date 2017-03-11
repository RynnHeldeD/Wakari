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

		var themeCreateState = {
			name: 'theme-create',
			url: '/theme/new',
			component: 'themeCreate'
		};

		var themeListState = {
			name: 'theme-list',
			url: '/theme/all',
			component: 'themeList',
			resolve: {
				themesData: resolveThemes
			}
		}

		resolveTheme.$inject = ['ThemeService', '$stateParams'];
		resolveWords.$inject = ['ThemeService', '$stateParams'];

		function resolveTheme(ThemeService, $stateParams) {
			return ThemeService.get(+$stateParams.themeId);
		}

		function resolveWords(ThemeService, $stateParams) {
			return ThemeService.getWords(+$stateParams.themeId);
		}

		function resolveThemes(ThemeService) {
			return ThemeService.getAll();
		}

		$stateProvider.state(themeDetailState);
		$stateProvider.state(themeCreateState);
		$stateProvider.state(themeListState);
	}
})();