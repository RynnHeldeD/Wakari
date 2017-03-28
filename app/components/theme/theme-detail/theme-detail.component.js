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
	
	ThemeDetailController.$inject = ['WordService', 'StateService'];

	function ThemeDetailController(WordService, StateService) {
		var self = this;
		self.theme = null;
		self.words = null;

		self.$onInit = onInit;
		self.goToWordDetail = StateService.goToWordDetail;
		
		function onInit() {
			self.theme = self.themeData.data;
			self.words = self.wordsData.data;
		};
	}
})();