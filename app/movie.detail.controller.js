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
        


            var first = "http://www.omdbapi.com/?t=";
            var url = first + $stateParams.movieName;

            MovieFactory.getMovies(url).then(
                function(response) {
                    vm.movies = response.data;
                    console.log(vm.movies);
                    // console.log(vm.movies);
                },
                function(error) {
                    $log.error(error);
                });


    


    }
})();
