const mobileNavButton = document.querySelector('.hamburger');
const mobileNavIcon = document.querySelector('.hamburger__icon');
const mobileNav = document.querySelector('.mobile');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});


$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:2,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		variableWidth: true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});