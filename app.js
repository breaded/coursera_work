(function(){
    'use strict';

    angular.module('myFirstApp', [])

    .controller('MyFirstController', function ($scope) {
     $scope.name = "readed";
     $scope.SayHello = function () {
         return "Hello coursera";
     };
    });

})();
