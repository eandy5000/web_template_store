

angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/templates', {
      templateUrl: "templates/templates.html",
      controller: "TemplatesCtrl"
    })

    .when('/templates/:templateId', {
      templateUrl: "templates/template-details.html",
      controller: "TemplatesDetailsCtrl"
    })

}])

.controller('TemplatesCtrl',['$scope','$http',function($scope, $http){
  $http.get('./data/templates.json').success(function(data){
    $scope.templates = data;
  });
}])

.controller('TemplatesDetailsCtrl',
    ['$scope','$http','$routeParams','$filter',function($scope, $http, $routeParams, $filter){



}]);
