var myApp = angular.module("myApp", [
    "ngRoute",
    "ngMaterial",
    "ngMdIcons"
]).controller("appCtrl", function($rootScope){
    $rootScope.navFlag = true;
    $rootScope.currentNavItem = 'home';
})



myApp.config(function($routeProvider){
    
    $routeProvider
        .when("/home", {
            templateUrl: "views/home.html",
            controller: "homeCtrl"
        })
        .when("/", {
            redirectTo: "/home"
        })
        .when("/article", {
            templateUrl: "views/article.html",
            controller: "articleCtrl"
        })
        .when("/comments/:id", {
            templateUrl: "views/comments.html",
            controller: "commentCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        })

});