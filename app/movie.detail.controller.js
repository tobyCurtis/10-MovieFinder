(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$log', 'MovieFactory', '$stateParams'];



    /* @ngInject */
    function DetailController($log, MovieFactory, $stateParams) {
        var vm = this;
        vm.title = 'DetailController';

        var url = "http://www.omdbapi.com/?t=" + $stateParams.movieName;

        MovieFactory.getMovies(url).then(
            function(response) {
                vm.movies = response.data;
                console.log(vm.movies);
                // console.log(vm.movies);
            },
            function(error) {
                $log.error(error);
            });


        var url2 = "http://trailersapi.com/trailers.json?movie=" + $stateParams.movieName + "& limit=1&width=320";

         MovieFactory.getMovies(url2).then(
            function(response) {
                vm.trailer = response.data;
                console.log(vm.trailer);
                // console.log(vm.movies);
            },
            function(error) {
                $log.error(error);
            });





    }
})();
