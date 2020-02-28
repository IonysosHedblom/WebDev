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
        if (scroll > 10) {
            $('.nav').addClass('sticky');
        }
        else {
            $('.nav').removeClass('sticky');
        }
		});
		
		$('.bxslider').bxSlider({
			mode: 'horizontal',
			moveSlides: 1,
			slideMargin: 40,
			infiniteLoop: true,
			minSlides: 1,
			maxSlides: 1,
			speed: 1200,
		});
});






