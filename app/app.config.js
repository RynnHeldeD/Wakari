(function() {
	'use strict';
	
	angular
		.module('wakari-app')
		.config(config);
	
	config.$inject = ['$stateProvider', '$urlRouterProvider', '$mdThemingProvider'];

	function config($stateProvider, $urlRouterProvider, $mdThemingProvider) {
		var indexState = {
			name: 'index',
			url: '/',
			component: 'searchBox'
		};

		$urlRouterProvider.otherwise('/');
		$stateProvider.state(indexState);

		// THEMING
		var orangePalette = $mdThemingProvider.extendPalette('orange', {
			contrastDefaultColor: 'light'
		});

		$mdThemingProvider.definePalette('light-orange', orangePalette);

		$mdThemingProvider.theme('default')
			.primaryPalette('red')
			.accentPalette('light-orange');
	}
})();