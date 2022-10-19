const mobileNavButton = document.querySelector('.hamburger');
const mobileNavIcon = document.querySelector('.hamburger__icon');
const mobileNav = document.querySelector('.mobile');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});

var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	slidesPerView: 1,
	slidesPerGroup: 2,
	speed: 2000,
	pagination: {
	  el: ".swiper-pagination",
	},
	breakpoints: {
	  699: {
		slidesPerView: 2,
		spaceBetween: 20
	  },
	  999: {
		slidesPerGroup: 1,
		slidesPerView: 3,
		spaceBetween: 20
	  }
	},
	mousewheel: true,
	autoplay: {
		delay: 5000,
	  },
	keyboard: true,
  });