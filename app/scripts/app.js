'use strict';

/**
 * @ngdoc overview
 * @name wooappApp
 * @description
 * # wooappApp
 *
 * Main module of the application.
 */
angular
  .module('wooappApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      });

    $locationProvider.html5Mode(true).hashPrefix('!');
  });
