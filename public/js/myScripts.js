angular.module("MyApp")
    .controller("MainCtrl", mainController);

angular.module("MyApp")
    .config(myRouter);

// mainController.$inject = ["$http", "curseFactory"];
mainController.$inject = ["$http"];
myRouter.$inject = ["$routeProvider"];


function myRouter($routeProvider){
$routeProvider
  .when("/pirate", {
    templateUrl: "./html/pirate.html"
  })

}

function mainController($http) {
    var main = this;
    main.greeting = "What up yo?";
    main.pirate = "Here there be pirates!"
    main.newData = [];

    // main.getAllWords = function() {
    //     curseFactory.getTheWords()
    //         .then(function(returnData) {
    //             console.log("This is the return data", returnData.data);
    //             returnData.data = main.newData;
    //         }).catch(function(err) {
    //             console.log("This is the error on the front", err);
    //
    //         })
    //
    // }
    //
    // main.getAllWords();

    main.getAllTheWords = function() {
        $http.get("/words.json", {
                root: "./js"
            })
            .then(function(res) {
                console.log(res.data);
                main.newData = res.data;
            })
    }

    main.getAllTheWords();

}
