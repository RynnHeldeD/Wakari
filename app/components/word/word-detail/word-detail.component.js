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

		// Chips variables
		self.searchText = null;
		self.selectedItem = null;

		self.$onInit = function() {
			self.word = self.wordData.data;
			ThemeService.getAll().then(function(response) {
				self.themes = response.data;
			});
		};

		self.goToThemeDetail = function(themeId) {
			StateService.goToThemeDetail(themeId);
		};

		self.delete = function() {
			WordService.remove(750);
		};

		self.edit = function() {
			self.editing = true;
			self.tempWord = angular.copy(self.word);
		};

		self.cancelEdit = function() {
			self.editing = false;
			self.searchText = null;
		};

		self.save = function() {
			self.word = angular.copy(self.tempWord);

			WordService.save(self.word)
				.then(function(response) {
					self.editing = false;
					self.tempWord = null;
				});
		};

		self.createChip = function(chip) {
			if (angular.isObject(chip)) {
				return chip;
			}
			
			return {
				name: chip,
				type: 'new'
			};
		};

		self.searchTheme = function(query) {
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