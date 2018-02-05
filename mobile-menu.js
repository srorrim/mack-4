var openButton      = document.querySelector('#openButton');
var closeButton     = document.querySelector('#closeButton');
var mobileMenu      = document.querySelector('#mobile-menu');

function openMenu() {
    mobileMenu.className = 'mobile-nav open';
}

function closeMenu() {
    mobileMenu.className = 'mobile-nav';
}

openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
