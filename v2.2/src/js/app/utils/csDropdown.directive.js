'use strict';
angular.module('csDropdown').
directive('csDropdown', function($window, $rootScope) {
    return {
        restrict: 'A',
        scope: {
            bool: '=csDropdown'
        },
        link: function(scope, elem, attrs) {
            var page = angular.element($window);
            // On Dropdown Button Pressed
            elem.on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // If closed, open it
                if (!scope.bool) {
                    open();
                    // Bind to page click
                    page.on('click', function(e) {
                        var target = angular.element(e.target);
                        // Close menu if the click was outside of the dropdown menu (with clas cs-dropdown-menu)                        
                        if (!target.hasClass('.cs-dropdown-menu') && target.parents('.cs-dropdown-menu').length == 0) {
                            close();
                            page.off('click');
                        }
                    });
                    // If open, close it
                } else {
                    close();
                    page.off('click');
                }
            });

            function open() {
                $rootScope.$emit('csDropdown:open', {
                    elem: elem
                }); // Tell other menu's to close
                scope.$apply(function() {
                    scope.bool = true;
                });
            }

            function close() {
                scope.$apply(function() {
                    scope.bool = false;
                });
            }
            // Close other menu's when another one is opened
            $rootScope.$on('csDropdown:open', function(e, args) {
                if (elem != args.elem) close();
            });
        }
    };
});