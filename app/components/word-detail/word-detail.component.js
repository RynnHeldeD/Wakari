(function() {
	'use strict';
	
	angular
		.module('word-detail')
		.component('wordDetail', {
			templateUrl: 'app/components/word-detail/word-detail.template.html',
			controller: WordDetailController,
			bindings: {
				wordData: '<'
			}
		});

	WordDetailController.$inject = ['WordService'];

	function WordDetailController(WordService) {
		var self = this;

		this.$onInit = function() {
			self.word = self.wordData.data;
		};

		this.create = function() {
			var word = {
				kana: 'いえ',
				kanji: '家',
				romaji: 'ue',
				meaning: 'maisonette',
				notes: "♫ C'est une maison bleue ! ♫"
			};

			WordService.create(word).then(function (response) {
				self.test = response.data;
				console.log(self.test);
			});
		};

		this.save = function() {
			self.test.notes += ' UPDATED AGAIN ! :D';
			WordService.save(self.test);
		};

		this.delete = function() {
			WordService.remove(750);
		};
	}
})();