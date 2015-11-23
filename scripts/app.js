angular.module("todoListApp", [])
.controller("mainCtrl", function($scope){
  $scope.learningNgChange = function() {
    console.log("Input changed")
  };


  $scope.todos = [
  {"name": "clean the house"},
  {"name": "do the laundry"},
  {"name": "go to post office"},
  {"name": "walk the dog"},
  {"name": "iron"}
  ]


});