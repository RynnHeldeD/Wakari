(function() {
	'use strict';

	angular
		.module('wakari-app-theme')
		.component('themeDetail', {
			templateUrl: 'app/components/theme/theme-detail/theme-detail.template.html',
			controller: ThemeDetailController,
			bindings: {
				themeData: '<',
				wordsData: '<'
			}
		});
	
	ThemeDetailController.$inject = ['WordService'];

	function ThemeDetailController(WordService) {
		var self = this;
		self.theme = null;
		self.words = null;

		self.$onInit = onInit;
		
		function onInit() {
			self.theme = self.themeData.data;
			self.words = self.wordsData.data;
		};
	}
})();