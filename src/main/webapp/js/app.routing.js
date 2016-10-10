angular.module("main")
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise("/home");
    
    $stateProvider
    .state('home', {
        url: '/home',
        component: 'home'
    })
    .state('about', {
        url: '/about',
        component: 'about'
    });
    /*Other states go here*/
})