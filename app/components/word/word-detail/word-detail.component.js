(function() {
	'use strict';
	
	angular
		.module('wakari-app-word')
		.component('wordDetail', {
			templateUrl: 'app/components/word/word-detail/word-detail.template.html',
			controller: WordDetailController,
			bindings: {
				wordData: '<'
			}
		});

	WordDetailController.$inject = ['WordService', 'ThemeService', 'StateService'];

	function WordDetailController(WordService, ThemeService, StateService) {
		var self = this;

		self.editing = false;
		self.tempWord = null;
		self.themes = [];

		// Autocomplete variables
		self.searchText = null;
		self.selectedItem = null;

		self.$onInit = onInit;
		self.goToThemeDetail = StateService.goToThemeDetail;
		self.remove = remove;
		self.edit = edit;
		self.cancelEdit = cancelEdit;
		self.save = save;
		self.createChip = createChip;
		self.searchTheme = searchTheme;
		
		function onInit() {
			self.word = self.wordData.data;
			ThemeService.getAll().then(function(response) {
				self.themes = response.data;
			});
		};

		function remove() {
			WordService.remove(750);
		};

		function edit() {
			self.editing = true;
			self.tempWord = angular.copy(self.word);
		};

		function cancelEdit() {
			self.editing = false;
			self.searchText = null;
		};

		function save() {
			self.word = angular.copy(self.tempWord);

			WordService.save(self.word)
				.then(function(response) {
					self.editing = false;
					self.tempWord = null;
				});
		};

		function createChip(chip) {
			if (angular.isObject(chip)) {
				return chip;
			}
			
			return {
				name: chip,
				type: 'new'
			};
		};

		function searchTheme(query) {
			var results = query ? self.themes.filter(themeFilter(query)) : self.themes;
			return results;
		};

		function themeFilter(query) {
			var lowercaseQuery = angular.lowercase(query);

			return function(theme) {
				return angular.lowercase(theme.name).indexOf(lowercaseQuery) === 0;
			}
		};
	}
})();