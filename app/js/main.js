(function() {
	'use strict';
        require('angular');
        require('angular-route');
        require('angular-animate');
        var mainCtrl = require('./controllers/mainctrl');
	angular.module('SampleApp', ['ngRoute', 'ngAnimate'])
	.config([
        '$locationProvider',
        '$routeProvider',
        function($locationProvider, $routeProvider) {
        	$locationProvider.hashPrefix('!');
        	$routeProvider.when("/",{
        		templateUrl: '../views/_partial.html',
        		controller: 'MainController'
        	})
        	.otherwise({
        		redirectTo: '/'
        	});
        }
	])
	.controller('MainController',['$scope',mainCtrl]);

}());
