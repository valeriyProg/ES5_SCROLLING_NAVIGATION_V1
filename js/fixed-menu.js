(function (window) {
    var menu = this.document.querySelector('.main-nav-fixed-wrapp');
    var section = this.document.getElementsByClassName('section-1')[0];

    window.addEventListener('scroll', function (e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var elemTopPosOnScreen = section.getBoundingClientRect().top;
        var destinationPostition = elemTopPosOnScreen + scrollTop - menu.clientHeight;
        if (scrollTop >= destinationPostition) {
            menu.style.visibility = 'visible';
        } else {
            menu.style.visibility = 'hidden';
        }
    }, false);
})(window);