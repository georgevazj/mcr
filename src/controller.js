'use strict';
var app = angular.module("mcr")
app.controller("HeaderController", headerCtrl);

function headerCtrl($http) {
	var vm = this;
	this.title = "MCR";
	this.subtitle = "Artist advisor";
	this.buttonLink = "Find Out More";
}