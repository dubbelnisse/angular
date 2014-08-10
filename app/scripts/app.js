'use strict';

/**
 * @ngdoc overview
 * @name iteamNordicjsApp
 * @description
 * # iteamNordicjsApp
 *
 * Main module of the application.
 */
angular
  .module('iteamNordicjsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'iteamNordicjsApp.controllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
