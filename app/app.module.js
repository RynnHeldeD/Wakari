(function() {
	'use strict';
	
	angular
		.module('wakari-app', [
			'ngMaterial',
			'ui.router',
			'wakari-app-search',
			'wakari-app-word',
			'wakari-app-theme',
			'wakari-app-toolbar'
		]);
})();