(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchItems = ""; // User input
      $scope.message = "";    // Output
      $scope.messageClass = "";
      $scope.borderClass = "";
  
      $scope.checkLunch = function () {
        if (!$scope.lunchItems.trim()) {
          $scope.message = "Please enter data first";
          $scope.messageClass = "red";
          $scope.borderClass = "border-red";
          return;
        }
  
        // Split items by commas and filter
        const items = $scope.lunchItems.split(',')
          .map(item => item.trim())
          .filter(item => item);
  
        if (items.length === 0) {
          $scope.message = "Please enter data first";
          $scope.messageClass = "red";
          $scope.borderClass = "border-red";
        } else if (items.length <= 3) {
          $scope.message = "Enjoy!";
          $scope.messageClass = "green";
          $scope.borderClass = "border-green";
        } else {
          $scope.message = "Too much!";
          $scope.messageClass = "green";
          $scope.borderClass = "border-green";
        }
      };
    }
  })();
  