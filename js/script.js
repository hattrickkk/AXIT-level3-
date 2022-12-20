$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$(".header__burger, .header__menu").toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.menu__link').click(function (event) {
		$(".header__burger, .header__menu").toggleClass('active'); 
		$('body').toggleClass('lock');
	});
});

new Swiper('.customers-slider', {

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	centeredSlides: true,
	initialSlide: 1,
	loop: true,
});