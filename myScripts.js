angular.module("MyApp")
    .controller("MainCtrl", mainController);

mainController.$inject = ["$http", "curseFactory"];

function mainController($http, curseFactory) {
    var main = this;
    main.greeting = "What up yo?";
    main.newData = [];

    main.getAllWords = function() {
        curseFactory.getTheWords()
            .then(function(returnData) {
                console.log("This is the return data", returnData.data);
                returnData.data = main.newData;
            }).catch(function(err) {
                console.log("This is the error".err);

            })

    }

    main.getAllWords();

}
