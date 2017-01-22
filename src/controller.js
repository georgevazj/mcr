'use strict';
var app = angular.module("mcr")
app.controller("MainController", mainCtrl);

function mainCtrl($http) {
	var vm = this;
	
	vm.title = "MCR";
	vm.subtitle = "Artist advisor";

	vm.switchLanguage = function(lang){
		if (lang=="en"){
			vm.subtitle = "Artist advisor";
			vm.buttonLink = "Find Out More";
		}
		else if(lang == "rs") {
			vm.subtitle = "художник советник";
			vm.buttonLink = "Узнать больше";
		}
		else if(lang == "ch"){
			vm.subtitle = "艺术家顾问";
			vm.buttonLink = "了解更多";
		}
	}
}