(function() {
	'use strict';
	
	angular
		.module('wakari-app-word')
		.component('wordCreate', {
			templateUrl: 'app/components/word/word-create/word-create.template.html',
			controller: WordCreateController
		});

	WordCreateController.$inject = ['WordService', 'ThemeService'];

	function WordCreateController(WordService, ThemeService) {
		var self = this;

		this.word = null;
		this.themes = [];

		// Chips variables
		this.searchText = null;
		this.selectedItem = null;

		this.$onInit = function() {
			self.word = {
				kana: '',
				kanji: '',
				romaji: '',
				meaning: '',
				notes: '',
				themes: []
			};

			ThemeService.getAll().then(function(response) {
				self.themes = response.data;
			});
		};

		this.create = function() {
			WordService.create(self.word).then(function(response) {
				if (!response.error) {
					self.goToWordDetails(response.data.id);
				}
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