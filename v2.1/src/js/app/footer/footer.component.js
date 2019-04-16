'use strict';
angular.module('footer').
component('footer', {
    templateUrl: '/templates/footer.html',
    controller: function($scope) {
        var gloss = document.querySelector("#glossybtn");     
        var tl = new TimelineMax({delay: 2, repeat: 0, repeatDelay: 2});
        $scope.imgSwap = function ($event){
            // console.log("triggered")
            tl.to(gloss, 1.0, {attr:{src: "/images/Illuminati_triangle_eye.png"}});
            tl.to(gloss, 5.0, {attr:{src: "/images/coffeeMug.gif"}});

        }
    }
});
