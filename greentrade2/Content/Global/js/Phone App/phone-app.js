﻿var myApp = angular.module('phoneApp', ['ngMaterial']);

myApp.controller('phoneAppController', ['$scope','$window', function ($scope, $window) {
  //  vm = this;
   // $scope.brand = 'ff';
    //vm.series;
    //vm.carrier;
    //vm.color;
    //vm.GB;
    //vm.condition;
    $scope.subTitle;
    $scope.updateTitle = updateTitle;
    function updateTitle(subTitle) {
        $scope.subTitle = subTitle;
    }

    $scope.phoneData = {
        brandSelected: "",
        seriesSelected: "",
        carrierSelected: "",
        colorSelected: "",
        GBSelected: 0,
        conditionSelected: ""
    };
    
    $scope.offer = $window.offerFromSession;
    $scope.loggedIn = $window.loggedIn;
    $scope.updateOffer = updateOffer;
    function updateOffer(offer) {
        $scope.offer = offer;
    }

}]);