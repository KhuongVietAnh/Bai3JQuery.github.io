$(document).ready(function () {
    //List img
    var listLeaves = ['leaves1.png', 'leaves2.png', 'leaves3.png', 'leaves4.png', 'leaves5.png'];
    var tweenmax = $('.tweenmax-js');
    var listIMG;
    //Call funtion createIMG
    createIMG();

    //create img
    function createIMG() {
        for (var i = 0, max = 30; i < max; i++) {
            var randomLeaves = Math.floor(Math.random() * 5);
            tweenmax.append('<img class="img_down-js img_down" src="img/' + listLeaves[randomLeaves] + '">');
        }
        listIMG = $('.img_down-js');
        runTweenMax();
    }
    //funtion run TweenMAx
    function runTweenMax() {
        var effect = setValueAnimate();
        for (var i = 0; i < listIMG.length; i++) {
            var effect = setValueAnimate();
            $(listIMG[i]).css({left: effect.startLeft});
            $(listIMG[i]).css({rotation: effect.rotation});
            var thisIMH = $(listIMG[i]);
            TweenMax.staggerTo(thisIMH, effect.timeRun, {rotation: effect.rotation, transformOrigin: "left top", rotationX: effect.rotationX, y: effect.y, x: effect.x, delay: effect.timeDelay, onComplete: backEffect, onCompleteParams: [thisIMH]}, 0.5);
        }
    }
    ;
    //Next Animate
    function backEffect(obj) {
        TweenMax.set(obj, {y: -100});
        var effect = setValueAnimate();
        var effect = setValueAnimate();
        TweenMax.staggerTo(obj, effect.timeRun, {rotation: effect.rotation, transformOrigin: "left top", rotationX: effect.rotationX, y: effect.y, x: effect.x, delay: effect.timeDelay, onComplete: backEffect, onCompleteParams: [obj]});
    }
    ;
    /*funtion set random for effect
     return effect
     **/
    function setValueAnimate() {
        var screenWidth = $(window).width();
        var effect = {
            x: Math.random() * 250,
            y: 900,
            rotation: Math.random() * 360,
            rotationX: Math.floor(Math.random() * 360),
            timeRun: 6,
            timeDelay: Math.random() * 10,
            startLeft: Math.random() * screenWidth
        };
        return effect;
    }
    ;
});
