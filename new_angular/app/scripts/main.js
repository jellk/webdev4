console.log('\'Allo \'Allo!');
'use strict'; 
var myApp = angular.module("myApp",[]);

myApp.controller("formCtrl",["$scope", function($scope){
  
  $scope.submitForm = function(){
    if($scope.form.$valid){
      alert("Form Submitted!");
    }
  }

     $scope.searchText = "";

     $scope.selectedItem = {
         "name": "",
         "department": "",
         "imageNum": -99
     };

     $scope.items = [
         {
             "name": "Lester The Cat Molester",
             "department": "Advertising",
             "imageNum": 10
         },
         {
             "name": "Jack The Licker",
             "department": "Payroll",
             "imageNum": 9
         },
         {
             "name": "P.S. Taker",
             "department": "Tech Support",
             "imageNum": 8
         },
         {
             "name": "Codename Unknown",
             "department": "Human Resources",
             "imageNum": 7
         },
         {
             "name": "Count Kristoff J Moon",
             "department": "Research and Development",
             "imageNum": 6
         },
         {
             "name": "Seven Dust",
             "department": "Advertising",
             "imageNum": 5
         },
         {
             "name": "George R. R. Meowtin",
             "department": "Customer Relations",
             "imageNum": 4
         },
         {
             "name": "Emily Lickinson",
             "department": "Customer Relations",
             "imageNum": 3
         },
         {
             "name": "Tom Pawyer",
             "department": "Finances",
             "imageNum": 2
         },
         {
             "name": "Catniss Everclean",
             "department": "Public Relations",
             "imageNum": 1
         }
     ];
  
}]);