// angular.module("MyApp")
//     .factory("curseFactory", curseFactory);
//
// curseFactory.$inject = ["$http"];

// function curseFactory($http){
//     return {
//         getTheWords: function() {
//             console.log("we are hitting the factory");
//             return $http.get("/js/words.json")
//             .then(function(res,err){
//               if(err){
//                 console.log("This is the error", err);
//               }else{
//                 res.send(res.data)
//               }
//             })
//         }
//
//     }
// }
