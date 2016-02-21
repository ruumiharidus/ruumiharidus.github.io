$(document).ready(function() {
	$('.do-print').on('click', function(e) {
		e.preventDefault();
		window.print();
	});

	$('.do-toggle-info').on('click', function(e) {
		e.preventDefault();

		$('.info-container').slideToggle({
			duration: 400,
			easing: 'linear'
		});
	});

	$('.info-container a').on('click', function(e) {
		e.stopPropagation();
	});
});