'use strict';


angular.module('gameTesting.controllers', []).
controller('listController', function($scope) {
    $scope.itemList = [
      {
          item: {
              itemName: 'shotgun',
              type: 'weapon'
          }
      },
      {
          item: {
              itemName: 'handgun',
              type: 'weapon'
          }
      },
    ];
});