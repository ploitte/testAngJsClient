myApp.directive("ngMynav", function(){

    return {
        restrict: "E",
        templateUrl: "views/layouts/_tabs.html",
        controller: function($scope, $rootScope){

            $scope.currentItem = 'home';
            
            if($rootScope.currentNavItem !== 'home'){
                $scope.currentItem = $rootScope.currentNavItem;
            }
        }
    }

})