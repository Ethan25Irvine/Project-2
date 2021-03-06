$(document).ready(function() {
	const navSlide = () => {
		const burger = $('.burger');
		const nav = $('.nav-links');
		const navLinks = document.querySelectorAll('.nav-links li');
		//toggle Nav //
		$(burger).on('click', () => {
			$(nav).toggleClass('nav-active');
			navLinks.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = '';
				} else {
					link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
				}
			});
			$(burger).toggleClass('toggle');
		});
		//Animate links //
	};
	navSlide();
});
