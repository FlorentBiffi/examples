require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var PIXI = require('pixi.js'),
    common = require('../_shared/js');

common.setup(function (app) {
        // starting number based on renderer type
    var startingNum = 10,
        // create a texture from an image path
        texture = PIXI.Texture.fromImage('bunny2.png'),
        // create a sprite batch to contain our sprites
        container = app.root, //new PIXI.ParticleContainer(),
        // get the counter element so we can update the text
        counter = document.getElementById('counter'),
        // tracker for mouse/touch down state
        isAdding = false,
        // we are going to fake some gravity in the update loop
        gravity = 0.75;

    // use nearest scaling so sprites are crisp and pixely
    PIXI.CONST.scaleModes.DEFAULT = PIXI.CONST.scaleModes.NEAREST;

    // add our container to the root
    // app.root.addChild(container);

    // add the first bunnies!
    createBunnies();

    // setup our tick method called each frame
    app.tick = function () {
        // if we are adding bunnies, then do it!
        if (isAdding) {
            createBunnies();
        }

        // go through each bunny and update it to dance a bit
        for (var j = 0; j < container.children.length; ++j) {
            var bunny = container.children[j];

            bunny.position.x += bunny.speedX;
            bunny.position.y += bunny.speedY;

            bunny.speedY += gravity;

            if (bunny.position.x > app.renderer.width) {
                bunny.speedX *= -1;
                bunny.position.x = app.renderer.width;
            }
            else if (bunny.position.x < 0) {
                bunny.speedX *= -1;
                bunny.position.x = 0;
            }

            if (bunny.position.y > app.renderer.height) {
                bunny.speedY *= -0.85;
                bunny.position.y = app.renderer.height;

                if (Math.random() > 0.5) {
                    bunny.speedY -= Math.random() * 6;
                }
            }
            else if (bunny.position.y < 0) {
                bunny.speedY *= -1;
                bunny.position.y = 0;
            }
        }
    };

    app.animate();

    app.renderer.view.addEventListener('mousedown', startAdd, false);
    app.renderer.view.addEventListener('touchstart', startAdd, false);

    app.renderer.view.addEventListener('mouseup', startEnd, false);
    app.renderer.view.addEventListener('touchend', startEnd, false);

    function startAdd() { isAdding = true; }
    function startEnd() { isAdding = false; }

    function createBunnies(num) {
        num = num || startingNum;

        for (var i = 0; i < num; ++i) {
            var bunny = new PIXI.Sprite(texture);

            bunny.speedX = Math.random() * 5;
            bunny.speedY = (Math.random() * 5) - 5;

            bunny.anchor.set(0.5, 1);

            container.addChild(bunny);
        }

        counter.innerHTML = container.children.length + ' bunnies';
    }
});

},{"../_shared/js":130,"pixi.js":112}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcZmFjdG9yLWJ1bmRsZVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwic3JjXFxiYXNpY1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBQSVhJID0gcmVxdWlyZSgncGl4aS5qcycpLFxuICAgIGNvbW1vbiA9IHJlcXVpcmUoJy4uL19zaGFyZWQvanMnKTtcblxuY29tbW9uLnNldHVwKGZ1bmN0aW9uIChhcHApIHtcbiAgICAgICAgLy8gc3RhcnRpbmcgbnVtYmVyIGJhc2VkIG9uIHJlbmRlcmVyIHR5cGVcbiAgICB2YXIgc3RhcnRpbmdOdW0gPSAxMCxcbiAgICAgICAgLy8gY3JlYXRlIGEgdGV4dHVyZSBmcm9tIGFuIGltYWdlIHBhdGhcbiAgICAgICAgdGV4dHVyZSA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJ2J1bm55Mi5wbmcnKSxcbiAgICAgICAgLy8gY3JlYXRlIGEgc3ByaXRlIGJhdGNoIHRvIGNvbnRhaW4gb3VyIHNwcml0ZXNcbiAgICAgICAgY29udGFpbmVyID0gYXBwLnJvb3QsIC8vbmV3IFBJWEkuUGFydGljbGVDb250YWluZXIoKSxcbiAgICAgICAgLy8gZ2V0IHRoZSBjb3VudGVyIGVsZW1lbnQgc28gd2UgY2FuIHVwZGF0ZSB0aGUgdGV4dFxuICAgICAgICBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50ZXInKSxcbiAgICAgICAgLy8gdHJhY2tlciBmb3IgbW91c2UvdG91Y2ggZG93biBzdGF0ZVxuICAgICAgICBpc0FkZGluZyA9IGZhbHNlLFxuICAgICAgICAvLyB3ZSBhcmUgZ29pbmcgdG8gZmFrZSBzb21lIGdyYXZpdHkgaW4gdGhlIHVwZGF0ZSBsb29wXG4gICAgICAgIGdyYXZpdHkgPSAwLjc1O1xuXG4gICAgLy8gdXNlIG5lYXJlc3Qgc2NhbGluZyBzbyBzcHJpdGVzIGFyZSBjcmlzcCBhbmQgcGl4ZWx5XG4gICAgUElYSS5DT05TVC5zY2FsZU1vZGVzLkRFRkFVTFQgPSBQSVhJLkNPTlNULnNjYWxlTW9kZXMuTkVBUkVTVDtcblxuICAgIC8vIGFkZCBvdXIgY29udGFpbmVyIHRvIHRoZSByb290XG4gICAgLy8gYXBwLnJvb3QuYWRkQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIC8vIGFkZCB0aGUgZmlyc3QgYnVubmllcyFcbiAgICBjcmVhdGVCdW5uaWVzKCk7XG5cbiAgICAvLyBzZXR1cCBvdXIgdGljayBtZXRob2QgY2FsbGVkIGVhY2ggZnJhbWVcbiAgICBhcHAudGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIGFkZGluZyBidW5uaWVzLCB0aGVuIGRvIGl0IVxuICAgICAgICBpZiAoaXNBZGRpbmcpIHtcbiAgICAgICAgICAgIGNyZWF0ZUJ1bm5pZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdvIHRocm91Z2ggZWFjaCBidW5ueSBhbmQgdXBkYXRlIGl0IHRvIGRhbmNlIGEgYml0XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICB2YXIgYnVubnkgPSBjb250YWluZXIuY2hpbGRyZW5bal07XG5cbiAgICAgICAgICAgIGJ1bm55LnBvc2l0aW9uLnggKz0gYnVubnkuc3BlZWRYO1xuICAgICAgICAgICAgYnVubnkucG9zaXRpb24ueSArPSBidW5ueS5zcGVlZFk7XG5cbiAgICAgICAgICAgIGJ1bm55LnNwZWVkWSArPSBncmF2aXR5O1xuXG4gICAgICAgICAgICBpZiAoYnVubnkucG9zaXRpb24ueCA+IGFwcC5yZW5kZXJlci53aWR0aCkge1xuICAgICAgICAgICAgICAgIGJ1bm55LnNwZWVkWCAqPSAtMTtcbiAgICAgICAgICAgICAgICBidW5ueS5wb3NpdGlvbi54ID0gYXBwLnJlbmRlcmVyLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYnVubnkucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgICAgICBidW5ueS5zcGVlZFggKj0gLTE7XG4gICAgICAgICAgICAgICAgYnVubnkucG9zaXRpb24ueCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChidW5ueS5wb3NpdGlvbi55ID4gYXBwLnJlbmRlcmVyLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGJ1bm55LnNwZWVkWSAqPSAtMC44NTtcbiAgICAgICAgICAgICAgICBidW5ueS5wb3NpdGlvbi55ID0gYXBwLnJlbmRlcmVyLmhlaWdodDtcblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1bm55LnNwZWVkWSAtPSBNYXRoLnJhbmRvbSgpICogNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChidW5ueS5wb3NpdGlvbi55IDwgMCkge1xuICAgICAgICAgICAgICAgIGJ1bm55LnNwZWVkWSAqPSAtMTtcbiAgICAgICAgICAgICAgICBidW5ueS5wb3NpdGlvbi55ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhcHAuYW5pbWF0ZSgpO1xuXG4gICAgYXBwLnJlbmRlcmVyLnZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3RhcnRBZGQsIGZhbHNlKTtcbiAgICBhcHAucmVuZGVyZXIudmlldy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3RhcnRBZGQsIGZhbHNlKTtcblxuICAgIGFwcC5yZW5kZXJlci52aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdGFydEVuZCwgZmFsc2UpO1xuICAgIGFwcC5yZW5kZXJlci52aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc3RhcnRFbmQsIGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0QWRkKCkgeyBpc0FkZGluZyA9IHRydWU7IH1cbiAgICBmdW5jdGlvbiBzdGFydEVuZCgpIHsgaXNBZGRpbmcgPSBmYWxzZTsgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQnVubmllcyhudW0pIHtcbiAgICAgICAgbnVtID0gbnVtIHx8IHN0YXJ0aW5nTnVtO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBidW5ueSA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlKTtcblxuICAgICAgICAgICAgYnVubnkuc3BlZWRYID0gTWF0aC5yYW5kb20oKSAqIDU7XG4gICAgICAgICAgICBidW5ueS5zcGVlZFkgPSAoTWF0aC5yYW5kb20oKSAqIDUpIC0gNTtcblxuICAgICAgICAgICAgYnVubnkuYW5jaG9yLnNldCgwLjUsIDEpO1xuXG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoYnVubnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY291bnRlci5pbm5lckhUTUwgPSBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoICsgJyBidW5uaWVzJztcbiAgICB9XG59KTtcbiJdfQ==
