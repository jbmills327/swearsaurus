angular.module("MyApp")
    .factory("curseFactory", curseFactory);

curseFactory.$inject = ["$http"];

function curseFactory($http){
    return {
        getTheWords: function() {
            console.log("we are hitting the factory");
            return $http.get("words.json");
        }

    }
}
