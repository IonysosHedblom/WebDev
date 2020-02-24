const navIcon = document.querySelector('.nav-icon');
const mobileNav = document.querySelector('.full-nav');
const navClose = document.querySelector('.nav-close');
const desktopNav = document.querySelector('.nav');





$(document).ready(() => {
    // Open mobile nav
    navIcon.addEventListener('click', () => {
        mobileNav.classList.add('open');
    });

    // Close mobile nav

    navClose.addEventListener('click', () => {
        mobileNav.classList.remove('open');
    });

    $(window).scroll(() => {
        let scroll = $(window).scrollTop();
        if (scroll > 100) {
            $('.nav').addClass('sticky');
        }
        else {
            $('.nav').removeClass('sticky');
        }
    });
});






