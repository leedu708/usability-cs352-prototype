var prototype = angular.module('prototype', ['ui.router', 'ngAnimate', 'ngSanitize']);

prototype.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/about.html'
    })
});

prototype.run(function($rootScope) {
  $rootScope.$on('$stateChangeError', console.log.bind(console));
});
