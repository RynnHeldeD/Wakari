(function() {
	'use strict';
	
	angular
		.module('wakari-app-toolbar')
		.component('toolbar', {
			templateUrl: 'app/components/toolbar/toolbar.template.html',
			controller: ToolbarController,
			controllerAs: 'ctrl'
		});

	ToolbarController.$inject = ['StateService', '$mdDialog'];

	function ToolbarController(StateService, $mdDialog) {
		var self = this;
		var originEvent = null;

		self.$onInit = onInit;
		self.openMenu = openMenu;
		self.goToThemeList = StateService.goToThemeList;
		self.soon = soon;
		
		function onInit() {
			
		}

		function openMenu($mdMenu, $event) {
			originEvent = $event;
			$mdMenu.open($event);
		}

		function soon() {
			$mdDialog.show($mdDialog.alert().title('Soon').ok('OK'));
		}
	}
})();