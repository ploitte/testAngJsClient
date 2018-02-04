myApp.directive("ngFormcomment", function(){
    return{
        restrict: "E",
        scope:{
            username: "=",
            city: "=",
            content: "="
        },
        templateUrl: "views/layouts/_formComment.html"
    }
})