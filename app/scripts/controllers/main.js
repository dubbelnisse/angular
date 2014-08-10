'use strict';

/**
 * @ngdoc function
 * @name iteamNordicjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iteamNordicjsApp
 */
angular.module('iteamNordicjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('iteamNordicjsApp.controllers', [])
  .controller('questionsCtrl', function ($scope) {
    
    $scope.questionsList = [
      {
        question: 'Which was your first computer?',
        alternatives: {
          alt1: 'C64',
          alt2: 'VIC20',
          alt3: 'Amiga',
          alt4: 'Atari',
          alt5: 'Apple II',
          alt6: 'Macintosh',
        }
      }
    ];

    $scope.moduleState = 'list';

    $scope.showThanks = function (alternative) {
      $scope.selectedAlt = alternative;
      $scope.moduleState = 'thanks';
    };
    
    $scope.showList = function() {
      $scope.moduleState = 'list';

    };

  });
