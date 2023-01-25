$(".slick-carousel").slick({
	dots: false,
	infinite: true,
	autoplay: true,
	arrows: false,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});
