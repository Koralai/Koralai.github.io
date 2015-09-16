(function(){
  "use strict";

  angular.module('moodRing').directive('ringColor', function(){
    return {
      restrict: 'E',
      templateUrl: 'moodring/templates/ring-color.html'
    };
  });

})();
