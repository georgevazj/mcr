'use strict';
angular.module("mcr", ["ngRoute", "ngResource"])
	.config(function($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl: "index.html"
			})
		// use the HTML5 History API
        //$locationProvider.html5Mode(true);
	})