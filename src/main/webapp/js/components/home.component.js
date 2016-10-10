angular.module('home.app')
.component("home", {
    templateUrl: 'templates/home.template.html',
    controller: function() {
        this.hello = "hello from home component"
    }
})