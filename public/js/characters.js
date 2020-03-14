// this is for characters page
$(document).ready(function() {
	$('#create').on('click', function() {
		// const url = './index.html';
		// window.location = url;
		const card = $("<div class= 'card cardchars'>");
		const cardBody = $('<div>');
		const content = $("<h2 class='card-title text-center medievalsharp'>Melvin</h2>");
		const attributes = $(
			"<button type='button' class='btn btn-dark btn-lg btn-block modalbtn' data-toggle='modal' data-target='#exampleModalLong'><h4 class='medievalsharp'>Attributes</h4></button>"
		);
		const image = $('<img src="../images/195144-Dwarf_Paladin.png" class="card-img-top" alt="">');
		$(cardBody).attr('class', 'card-body');
		$(cardBody).append(content);
		$(cardBody).append(attributes);
		$(card).append(image);
		$(card).append(cardBody);

		$('#characters').append(card);
	});
});
