myApp.controller("commentCtrl", function($scope, articleFactory, $routeParams, $rootScope){

    $rootScope.navFlag = false;


    articleFactory.getComments($routeParams.id).then(function(article){
        $scope.article = article;
        $scope.comments = article.comments;
    }, function(err){
        console.log(err);
    })


    $scope.goBack = function(){
        window.history.back();
    }

})