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
    
    ThemeDetailController.$inject = ['WordService'];

    function ThemeDetailController(WordService) {
        var self = this;

		this.$onInit = function() {
			self.theme = self.themeData.data;
            self.words = self.wordsData.data;
		};
    }
})();