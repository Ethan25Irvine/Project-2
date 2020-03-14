// this is for characters page
$(document).ready(function() {
	$('#create').on('click', function() {
		// const url = './index.html';
		// window.location = url;
		const card = $("<div class= 'card cardchars'>");
		const cardBody = $('<div>');
		const content = $("<h2 class='card-title text-center medievalsharp'>Melvin</h2>");
		const attributes = $(
			"<button type='button' class='btn btn-dark btn-lg btn-block modalbtn' data-toggle='modal' data-target='#Melvin'><h4 class='medievalsharp'>Attributes</h4></button>"
		);
		const image = $('<img src="../images/195144-Dwarf_Paladin.png" class="card-img-top" alt="">');
		$(cardBody).attr('class', 'card-body');
		$(cardBody).append(content);
		$(cardBody).append(attributes);
		$(card).append(image);
		$(card).append(cardBody);

		$('#characters').append(card);

		const modal = $(
			"<div class='modal falde' id='Melvin'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'>this is the first modal.</div><div class='modal-body'><div class='row'><div class='col-lg-12'><div id='name'>Name: </div></div></div><div class='row'><div class='col-lg-12'><div id='race'>Race: </div></div></div><div class='row'><div class='col-lg-12'><div id='class'>Class: </div></div></div><div class='row'><div class='col-lg-12'><div id='alignment'>Alignment: </div></div></div><div class='row'><div class='col-lg-12'><div id='background'>Background: </div></div></div><div class='row'><div class='col-lg-12'><div id='level'>Level: </div></div></div><div class='row'><div class='col-lg-12'><div id='strength'>Strength</div></div></div><div class='row'><div class='col-lg-12'><div id='dexterity'>Dexterity</div></div></div><div class='row'><div class='col-lg-12'><div id='constitution'>Constitution</div></div></div><div class='row'><div class='col-lg-12'><div id='intelligence'>Intelligence</div></div></div><div class='row'><div class='col-lg-12'><div id='wisdom'>Wisdom</div></div></div><div class='row'><div class='col-lg-12'><div id='charisma'>Charisma: </div></div></div><div class='row'><div class='col-lg-12'><div id='perception'>Perception: </div></div></div><div class='row'><div class='col-lg-12'><div id='armorclass'>Armor Class: </div></div></div><div class='row'><div class='col-lg-12'><div id='initiative'>Initiative: </div></div></div><div class='row'><div class='col-lg-12'><div id='speed'>Speed: </div></div></div> </div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button></div></div></div></div>"
		);
		$('body').append(modal);
	});
});
