$(document).ready(function () {
	const header = $("[data-header]");
	const slider = $("[data-slider]");
	const clHeaderFixed = "header--fixed";
	const fancybox = $("[data-fancybox]");
	const scroller = $("[data-scroller]");
	const modalOpen = $("[data-modal-open]");
	const modal = $("[data-modal]");
	const checkMenu = () => {
		if ($(window).scrollTop() > 1){
			header.addClass(clHeaderFixed);
		} else {
			header.removeClass(clHeaderFixed);
		}
	};

	slider.kwicks({
		maxSize: 1000,
		behavior: "menu"
	});

	$(window).on("scroll", function () {
		checkMenu();
	});

	fancybox.fancybox({
		transitionEffect: "slide"
	});

	modalOpen.on("click", function () {
		$.fancybox.open(modal);
	});

	scroller.on("click", function () {
		$("html, body").animate({
			scrollTop: 0
		}, 200);
	});

	checkMenu();
});