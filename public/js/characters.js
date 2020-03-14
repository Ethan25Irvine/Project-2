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
			"<div class='modal falde' id='Melvin'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'>STATS</div><div class='modal-body'><div class='card'><div class='card-header'><strong>Character Attributes</strong></div><div class='card-body'><!-- Here we create an HTML Form for handling the inputs--><form role='form' id='characterForm'><!-- Here we create the text box for capturing the search term--><div class='form-group'><label for='name'>Name:</label><input type='text' class='form-control' id='charactername'></div><div class='form-group'><label for='race'>Race</label><select id='race' class='custom-select' aria-labelledby='dropdownMenuButton'><!-- getRace function goes here --></select></div><div class='form-group'><label for='class'>Class</label><select id='class' class='custom-select' aria-labelledby='dropdownMenuButton'><!-- getClass function goes here --></select></div><div class='form-group'><label for='alignment'>Alignment</label><select id='alignment' class='custom-select' aria-labelledby='dropdownMenuButton'><!-- getAlign function goes here --></select></div><div class='form-group'><label for='background'>Background</label><select id='background' class='custom-select' aria-labelledby='dropdownMenuButton'><!-- getBackground function goes here --></select><div class='form-group'><label for='name'>Level:</label><input type='text' class='form-control' id='level'></div></div><div class='text-center'><h4 class='text-danger'>__________Stats__________</h4></div><div class='form-group'><label for='strength'>Strength</label><div class='row'><div class='col-lg-12'><input type='text' id='strength' class='form-control'></div></div></div><div class='form-group'><label for='dexterity'>Dexterity</label><div class='row'><div class='col-lg-12'><input type='text' id='dexterity' class='form-control'></div></div></div><div class='form-group'><label for='constitution'>Constitution</label><div class='row'><div class='col-lg-12'><input type='text' id='constitution' class='form-control'></div></div></div><div class='form-group'><label for='intelligence'>Intelligence</label><div class='row'><div class='col-lg-12'><input type='text' id='intelligence' class='form-control'></div></div></div><div class='form-group'><label for='wisdom'>Wisdom</label><div class='row'><div class='col-lg-12'><input type='text' id='wisdom' class='form-control'></div></div></div><div class='form-group'><label for='charisma'>Charisma</label><div class='row'><div class='col-lg-12'><input type='text' id='charisma' class='form-control'></div></div></div><!-- <div class='text-center'><h4 class='text-danger'>__________Proficiencies__________</h4></div> --><!-- Saving throws --><div id='proficiencies' class='form-group'><div class='text-center'><div id='prof1'></div><div id='prof2'></div><div id='prof3'></div><div id='prof4'></div><!-- checklist goes here --></div></div><div class='text-center'><h4 class='text-danger'>_______Additional Stats______</h4></div><div class='form-group'><label for='passive-wisdom'>Passive Wisdom (Perception)</label><input type='text' class='form-control' id='passivewisdom'></div><div class='form-group'><label for='armor-class'>Armor Class</label><input type='text' class='form-control' id='armorclass'></div><div class='form-group'><label for='initiative'>Initiative</label><input type='text' class='form-control' id='initiative'></div><div class='form-group'><label for='speed'>Speed</label><input type='text' class='form-control' id='speed'></div><!-- Here we have our final submit button --><div class='row'><div class='col-md-12'><button type='submit' class='btn btn-lg btn-block' id='save'><i class='fas fa-plus-circle'></i> Save</button></div></div></form><!-- <div class='row'><div class='col-md-12'><button type='submit' class='btn btn-lg btn-block' id='Roll'><i class='fas fa-plus-circle'></i> Roll 4 d6</button></div> --></div></div></div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button></div></div></div></div>"
		);
		$('body').append(modal);
	});
});
