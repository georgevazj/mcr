'use strict';
var app = angular.module("mcr")
app.controller("MainController", mainCtrl);

function mainCtrl($http) {
	var vm = this;
	
	vm.title = "MCR";
	vm.subtitle = "Artist advisor";

	vm.menuHome = "Home";
	vm.menuAbout = "About";
	vm.menuServices = "Services";
	vm.menuPortfolio = "Portfolio";
	vm.menuContact = "Contact";

	vm.switchLanguage = function(lang){
		if (lang=="en"){
			vm.subtitle = "Artist advisor";
			vm.buttonLink = "Find Out More";

			vm.menuHome = "Home";
			vm.menuAbout = "About";
			vm.menuServices = "Services";
			vm.menuPortfolio = "Portfolio";
			vm.menuContact = "Contact";

		}
		else if(lang == "rs") {
			vm.subtitle = "художник советник";
			vm.buttonLink = "Узнать больше";

			vm.menuHome = "Главная";
			vm.menuAbout = "Около";
			vm.menuServices = "Сервисы";
			vm.menuPortfolio = "портфолио";
			vm.menuContact = "контакт";
		}
		else if(lang == "ch"){
			vm.subtitle = "艺术家顾问";
			vm.buttonLink = "了解更多";

			vm.menuHome = "家";
			vm.menuAbout = "关于";
			vm.menuServices = "服务";
			vm.menuPortfolio = "皮包";
			vm.menuContact = "联系";
		}
	}
}