(function() {
	'use strict';
	
	angular
		.module('wakari-app')
		.config(config);
	
	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {
		var indexState = {
			name: 'index',
			url: '/',
			component: 'searchBox'
		};

		$urlRouterProvider.otherwise('/');
		$stateProvider.state(indexState);
	}
})();