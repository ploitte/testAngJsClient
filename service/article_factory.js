myApp.factory("articleFactory", function($http, $q){

    var factory = {
        posts: false,
        getArticles: function(){
            let deferred = $q.defer();
            if(factory.posts !== false){
                deferred.resolve(factory.posts);
            }else{
                $http.get("post.json").then(function(response){

                    factory.posts = response.data;
                    deferred.resolve(factory.posts);
                }, function(err){
                    deferred.reject("Erreur de traitement des données");
                })
            }
            return deferred.promise;
        },
        getComments: function(id){
            let deferred = $q.defer();
            factory.getArticles().then(function(posts){
                angular.forEach(posts, function(value, key){
                    if(value.id == id){
                        deferred.resolve(value);
                    }
                })
            }, function(err){
                deferred.reject("BOOM");
            })
            return deferred.promise;
        }
    }
    return factory;
})