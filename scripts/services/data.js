"use strict";

angular.module("todoListApp")

.service("dataService", function($http){

  this.helloWorld = function(){
    console.log("This is the hello service fucntion.");
  };

  this.getTodos = function(callback) {
    $http.get("mock/todos.json")
  .then(callback)
};

this.deleteTodo = function(todo){
  console.log("The " + todo.name + " has been deleted")
};

this.saveTodo = function(todo) {
  console.log("The " + todo.name + " was saved");
}
});