angular.module('about.app')
.component("about", {
    templateUrl: 'templates/about.template.html',
    controller: function() {
        this.hello = "hello from about component"
    }
})