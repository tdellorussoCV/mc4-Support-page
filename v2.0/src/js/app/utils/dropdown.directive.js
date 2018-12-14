.directive('projectDropdown', ['$document', function($document) {
    return {
      restrict: 'E',
      templateUrl: 'project-dropdown.html',
      link: function(scope, element, attr) {
        scope.isProjectDropdownVisible = false;

        scope.toggleProjectDropdown = function(){
          console.log("Projects");
          scope.isProjectDropdownVisible = !scope.isProjectDropdownVisible;
        }
        
        $document.bind('click', function(event){
          var isClickedElementChildOfPopup = element
            .find(event.target)
            .length > 0;
            
          if (isClickedElementChildOfPopup)
            return;
            
          scope.isProjectDropdownVisible = false;
          scope.$apply();
        });
      }
    };
  }])