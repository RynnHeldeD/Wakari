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

	WordDetailController.$inject = ['WordService', 'ThemeService', '$state'];

	function WordDetailController(WordService, ThemeService, $state) {
		var self = this;

		this.editing = false;
		this.tempWord = null;
		this.themes = [];

		// Chips variables
		this.searchText = null;
		this.selectedItem = null;

		this.$onInit = function() {
			self.word = self.wordData.data;
			ThemeService.getAll().then(function(response) {
				self.themes = response.data;
			});
		};

		this.goToThemeDetails = function(themeId) {
			$state.go('theme-detail', {
				themeId: themeId
			});
		};

		this.delete = function() {
			WordService.remove(750);
		};

		this.edit = function() {
			this.editing = true;
			this.tempWord = angular.copy(this.word);
		};

		this.cancelEdit = function() {
			this.editing = false;
			this.searchText = null;
		};

		this.save = function() {
			self.word = angular.copy(self.tempWord);

			WordService.save(self.word)
				.then(function(response) {
					self.editing = false;
					self.tempWord = null;
				});
		};

		this.createChip = function(chip) {
			if (angular.isObject(chip)) {
				return chip;
			}
			
			return {
				name: chip,
				type: 'new'
			};
		};

		this.searchTheme = function(query) {
			var results = query ? self.themes.filter(themeFilter(query)) : [];
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