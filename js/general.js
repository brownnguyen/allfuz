var headerMenu = document.querySelector('.header-menu');
var drawer = document.querySelector('.drawer-menu');
var header = document.querySelector('.header');
headerMenu.onclick = function () {
    headerMenu.classList.toggle('active');
    if (headerMenu.classList.contains('active')) {
        drawer.classList.add('active')
    }
    else {
        drawer.classList.remove('active')
    }
}
window.onscroll = function () {
    var height = window.pageYOffset;
    if (height > 100) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
}