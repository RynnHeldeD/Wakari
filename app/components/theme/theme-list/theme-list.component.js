(function() {
	'use strict';
	
	angular
		.module('wakari-app-word')
		.component('themeList', {
			templateUrl: 'app/components/theme/theme-list/theme-list.template.html',
			controller: ThemeListController,
			bindings: {
				themesData: '<'
			}
		});

	ThemeListController.$inject = ['ThemeService', 'StateService', '$mdDialog'];

	function ThemeListController(ThemeService, StateService, $mdDialog) {
		var self = this;

		self.themes = [];

		self.$onInit = onInit;
		self.goToThemeDetail = StateService.goToThemeDetail;
		self.showRemoveConfirm = showRemoveConfirm;
		
		function onInit() {
			self.themes = self.themesData.data;
		}

		function showRemoveConfirm(ev) {
			var deleteConfirm = $mdDialog.confirm()
				.title('Voulez-vous vraiment supprimer ce thème ?')
				.textContent('Ce thème sera supprimé de manière définitive.')
				.ariaLabel('Confirmer la suppression du thème')
				.targetEvent(ev)
				.ok('Oui, supprimer')
				.cancel('Non');

			$mdDialog.show(deleteConfirm).then(remove, cancel);

			function remove() {
				console.log('ok, remove');
				
			}

			function cancel() {
				console.log('do not remove!');
				
			}
		}
	}
})();