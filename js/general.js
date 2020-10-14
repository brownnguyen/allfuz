var headerMenu = document.querySelector('.header-menu');
var drawer = document.querySelector('.drawer-menu');
var header = document.querySelector('.header');

window.onscroll = function () {
    var height = window.pageYOffset;
    if (height > 1) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
    if (window.pageYOffset > window.innerHeight / 2) {
        document.querySelector("#backTop").style.opacity = 0.8;
        document.querySelector("#backTop").style.visibility = "visible";
    } else {
        document.querySelector("#backTop").style.opacity = 0;
        document.querySelector("#backTop").style.visibility = "hidden";
    }
}

$(function () {
    headerMenu.onclick = function () {
        headerMenu.classList.toggle('active'); console.log('asdasd');
        if (headerMenu.classList.contains('active')) {
            drawer.classList.add('active');

            Scroll.disable();
        }
        else {
            drawer.classList.remove('active');
            Scroll.enable();
        }
    }
    const Scroll = (function () {
        // left: 37, up: 38, right: 39, down: 40,
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
        function preventDefault(e) {
            e.preventDefault();
        }
        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }
        var supportsPassive = false;
        try {
            document.body.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function () { supportsPassive = true; }
            }));
        } catch (e) {
            console.log('not catch error');
        }
        var wheelOpt = supportsPassive ? { passive: false } : false;
        var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
        // call this to Disable
        function disableScroll() {
            document.body.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
            document.body.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
            document.body.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
            document.body.addEventListener('keydown', preventDefaultForScrollKeys, false);
        }

        // call this to Enable
        function enableScroll() {
            document.body.removeEventListener('DOMMouseScroll', preventDefault, false);
            document.body.removeEventListener(wheelEvent, preventDefault, wheelOpt);
            document.body.removeEventListener('touchmove', preventDefault, wheelOpt);
            document.body.removeEventListener('keydown', preventDefaultForScrollKeys, false);
        }
        return {
            disable: disableScroll,
            enable: enableScroll
        }
    })();
});

$("#backTop").click(function (event) {
    $("html,body").animate({
        scrollTop: 0,
    },
        1000,
        "swing"
    );
    return false;
});