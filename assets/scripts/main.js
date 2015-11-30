$(document).ready(function() {
	$('.do-print').on('click', function(e) {
		e.preventDefault();
		window.print();
	});

	$('.do-toggle-info').on('click', function(e) {
		e.preventDefault();

		console.log('toggle');

		$('.info-container').slideToggle({
			duration: 400,
			easing: 'linear',
			complete: function(e) {
				console.log('complete');
			}
		});
	});

	$('.info-container a').on('click', function(e) {
		e.stopPropagation();
	});
});