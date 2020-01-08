'use strict';

function ScrollToElement() {
    this._navigation = {
        nav: '',
        config: [
            {
                link:'',
                target: ''
            },
        ]
    };
}


ScrollToElement.prototype = {
    setListeners: function(initInfo) {
        this._navigation = initInfo;
        var NAV = document.querySelector(this._navigation.nav);
        this._navigation.config.forEach(navigationInfo => {
            var LINKS = document.querySelectorAll(navigationInfo.link);
            var DESTINATION_ELEMENT = document.querySelector(navigationInfo.target);
            [].forEach.call(LINKS, function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    var navHeight = NAV.clientHeight;
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    var topPositionOnScreen = DESTINATION_ELEMENT.getBoundingClientRect().top;
                    window.scrollTo({
                        top: topPositionOnScreen + scrollTop - navHeight,
                        behavior: "smooth"
                    });
                } ,false);
            });
        });
    }
};
