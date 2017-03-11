(function() {
	'use strict';
	
	angular
		.module('wakari-app-word')
		.component('wordCreate', {
			templateUrl: 'app/components/word/word-create/word-create.template.html',
			controller: WordCreateController
		});

	WordCreateController.$inject = ['WordService', 'ThemeService', 'StateService'];

	function WordCreateController(WordService, ThemeService, StateService) {
		var self = this;

		self.word = null;
		self.themes = [];

		// Autocomplete variables
		self.searchText = null;
		self.selectedItem = null;

		self.$onInit = onInit;
		self.create = create;
		self.createChip = createChip;
		self.searchTheme = searchTheme;
		
		function onInit() {
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

		function create() {
			WordService.create(self.word).then(function(response) {
				if (!response.error) {
					StateService.goToWordDetail(response.data.id);
				}
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