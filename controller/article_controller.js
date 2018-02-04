myApp.controller("articleCtrl", function($scope, articleFactory, $routeParams, $rootScope){
    $rootScope.navFlag = true;
    
    $rootScope.currentNavItem = 'article';

    articleFactory.getArticles().then(function(data){
        $scope.articles = data;
    }, function(err){
        console.log(err);
    })

    $scope.myImage = 'https://cdn0-a.production.images.static6.com/D6cN1WW5H0my-GrFXl-a09Dw6QU=/640x360/smart/filters:quality(75):strip_icc():format(webp)/liputan6-media-production/medias/1084854/original/093684400_1450165190-HL_dun-hew.blogspot.jpg';

})