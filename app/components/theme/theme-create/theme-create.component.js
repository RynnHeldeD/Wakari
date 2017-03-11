(function() {
	'use strict';

	angular
		.module('wakari-app-theme')
		.component('themeCreate', {
			templateUrl: 'app/components/theme/theme-create/theme-create.template.html',
			controller: ThemeCreateController
		});
	
	ThemeCreateController.$inject = ['ThemeService', 'StateService'];

	function ThemeCreateController(ThemeService, StateService) {
		var self = this;
		self.theme = null;

		self.$onInit = onInit;
		self.create = create;
		
		function onInit() {
			self.theme = {
				name: ''
			};
		};

		function create() {
			ThemeService.create(self.theme).then(function(response) {
				if (!response.error) {
					StateService.goToThemeDetail(response.data.id);
				}
			});
		}
	}
})();