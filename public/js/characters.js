// this is for characters page
$(document).ready(function() {
  
	$('#create').on('click', function() {
		const url = './create.html';
		window.location = url;
    });
    
    $.ajax({
        method: "GET",
        url: "/api/character",
      })
        .then(function(res) {
          console.log(res);
          for(let i = 0; i <res.length; i++){
            const card = $("<div class= 'card cardchars'>");
            const cardBody = $('<div>');
            const content = $("<h2 class='card-title text-center medievalsharp'>"+res[i].CharacterName+"</h2>");
            const attributes = $(
            	"<button type='button' class='btn btn-dark btn-lg btn-block modalbtn' data-toggle='modal' data-target='#"+res[i].CharacterName+"'><h4 class='medievalsharp'>Attributes</h4></button>"
            );
            let image;
            if (res[i].Class === "Barbarian"){
                image = $('<img src="../images/barbarian.png" class="card-img-top" alt="">');
            } else if (res[i].Class === "Bard"){
              image = $('<img src="../images/bard.png" class="card-img-top" alt="">');
            } else if (res[i].Class === "Cleric"){
              image = $('<img src="../images/cleric.png" class="card-img-top" alt="">');
            } else if (res[i].Class === "Druid"){
              image = $('<img src="../images/druid.png" class="card-img-top" alt="">');
            } else if (res[i].Class === "Fighter"){
              image = $('<img src="../images/fighter.png" class="card-img-top" alt="">');
            } else if (res[i].Class === "Monk"){
              image = $('<img src="../images/monk.png" class="card-img-top" alt="">');
            } else if (res[i].Class === "Paladin"){
              image = $('<img src="../images/paladin.png" class="card-img-top" alt="">');
            } else if (res[i].Class === "Ranger"){
              image = $('<img src="../images/ranger.png" class="card-img-top" alt="">');
            } else if (res[i].Class === "Rogue"){
              image = $('<img src="../images/rogue.png" class="card-img-top" alt="">');
            } else if (res[i].Class === "Sorcerer"){
              image = $('<img src="../images/sorcerer.png" class="card-img-top" alt="">');
            } else if (res[i].Class === "Warlock"){
              image = $('<img src="../images/warlock.png" class="card-img-top" alt="">');
            } else {
              image = $('<img src="../images/wizard.png" class="card-img-top" alt="">');
            } 

            $(cardBody).attr('class', 'card-body');
            $(cardBody).append(content);
            $(cardBody).append(attributes);
            $(card).append(image);
            $(card).append(cardBody);
    
            $('#characters').append(card);
            console.log(res[i].Race);
            const modal = $(

			        "<div class='modal falde' id='"+res[i].CharacterName+"'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'>STATS</div><div class='modal-body'><div class='card'><div class='card-header'><strong>Character Attributes</strong></div><div class='card-body'><!-- Here we create an HTML Form for handling the inputs--><form role='form' id='characterForm'><!-- Here we create the text box for capturing the search term--><div class='form-group'><label for='id'>ID:</label><select id='id' class='custom-select' aria-labelledby='dropdownMenuButton'><option value='"+res[i].id+"'>"+res[i].id+"</option></select><label for='name'>Name:</label><input type='text' class='form-control' value="+res[i].CharacterName+" id='charactername'></div><div class='form-group'><label for='race'>Race</label><select id='race' class='custom-select' aria-labelledby='dropdownMenuButton'><option value='"+res[i].Race+"'>"+res[i].Race+"</option></select></div><div class='form-group'><label for='class'>Class</label><select id='class' class='custom-select' aria-labelledby='dropdownMenuButton'><option value='"+res[i].Class+"'>"+res[i].Class+"</option></select></div><div class='form-group'><label for='alignment'>Alignment</label><select id='alignment' class='custom-select' aria-labelledby='dropdownMenuButton'><option value='"+res[i].Alignment+"'>"+res[i].Alignment+"</option></select></div><div class='form-group'><label for='background'>Background</label><select id='background' class='custom-select' aria-labelledby='dropdownMenuButton'><option value='"+res[i].Background+"'>"+res[i].Background+" </option></select><div class='form-group'><label for='name'>Level:</label><input type='text' value="+res[i].Level+" class='form-control' id='level'></div></div><div class='text-center'><h4 class='text-danger'>__________Stats__________</h4></div><div class='form-group'><label for='strength'>Strength</label><div class='row'><div class='col-lg-12'><input type='text' id='strength' value="+res[i].Strength+" class='form-control'></div></div></div><div class='form-group'><label for='dexterity'>Dexterity</label><div class='row'><div class='col-lg-12'><input type='text' value="+res[i].Dexterity+" id='dexterity' class='form-control'></div></div></div><div class='form-group'><label for='constitution'>Constitution</label><div class='row'><div class='col-lg-12'><input type='text' value="+res[i].Constitution+" id='constitution' class='form-control'></div></div></div><div class='form-group'><label for='intelligence'>Intelligence</label><div class='row'><div class='col-lg-12'><input type='text' value="+res[i].Intelligence+" id='intelligence' class='form-control'></div></div></div><div class='form-group'><label for='wisdom'>Wisdom</label><div class='row'><div class='col-lg-12'><input type='text' id='wisdom' value="+res[i].Wisdom+" class='form-control'></div></div></div><div class='form-group'><label for='charisma'>Charisma</label><div class='row'><div class='col-lg-12'><input type='text' id='charisma' value="+res[i].Charisma+" class='form-control'></div></div></div></div></div><div class='text-center'><h4 class='text-danger'>_______Additional Stats______</h4></div><div class='form-group'><label for='passive-wisdom'>Passive Wisdom (Perception)</label><input type='text' value="+res[i].passiveWisdom+" class='form-control' id='passivewisdom'></div><div class='form-group'><label for='armor-class'>Armor Class</label><input type='text' value="+res[i].ArmorClass+" class='form-control' id='armorclass'></div><div class='form-group'><label for='initiative'>Initiative</label><input type='text' class='form-control' value="+res[i].Initiative+" id='initiative'></div><div class='form-group'><label for='speed'>Speed</label><input type='text' class='form-control' value="+res[i].Speed+" id='speed'></div><!-- Here we have our final submit button --><div class='row'><div class='col-md-12'><button type='submit' class='btn submit btn-lg btn-block' id="+res[i].id+"><i class='fas fa-plus-circle'></i> Update</button></div><div class='col-md-12'><button type='delete' class='delete btn btn-lg btn-block btn-danger' id='"+res[i].id+"'><i class='fas fa-plus-circle'></i> Delete</button></div><div class='row'></div></form><!-- <div class='row'><div class='col-md-12'><button type='submit' class='btn btn-lg btn-block' id='Roll'><i class='fas fa-plus-circle'></i> Roll 4 d6</button></div></div></div></div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button></div></div></div></div>"

		        );
              
            $('body').append(modal);
          }
          // $("#update").on("submit", handleFormSubmit);
       
        });

        $(document).on("click", ".submit", check);

        function check(){
          $.ajax({
            method: "GET",
            url: "/api/character",
        })
        .then(function(res) {
            if (res.id === $(this).id){
              handleFormUpdate();
            }
        });
        }
        function handleFormUpdate(event) {
          // event.preventDefault();
          // Wont submit the post if we are missing a body, title, or author
          /*  if (!titleInput.val().trim() || !bodyInput.val().trim() || !authorSelect.val()) {
               return;
           } */
          // Constructing a newPost object to hand to the database
          const newChar = {
              id: $("#id").val().trim(),
              /*    Acrobatics: "", */
              Alignment: $('#alignment')
                  .val()
                  .trim(),
              /* AnimalHandling: "", */
              /* Arcana: "", */
              ArmorClass: $('#armorclass')
                  .val()
                  .trim(),
              /* Athletics: "", */
              Background: $('#background')
                  .val()
                  .trim(),
              CharacterName: $('#charactername')
                  .val()
                  .trim(),
              Race: $('#race')
                  .val()
                  .trim(),
              Charisma: $('#charisma')
                  .val()
                  .trim(),
              /* CharismaST: "", */
              Class: $('#class')
                  .val()
                  .trim(),
              Constitution: $('#constitution')
                  .val()
                  .trim(),
              /* ConstitutionST: "", */
              /* Deception: "", */
              Dexterity: $('#dexterity')
                  .val()
                  .trim(),
              /* DexterityST: "", */
              /* History: "", */
              /*   HP: "", */
              Initiative: $('#initiative')
                  .val()
                  .trim(),
              /* Insight: "", */
              Intelligence: $('#intelligence')
                  .val()
                  .trim(),
              /* IntelligenceST: "",
              Intimidation: "",
              Investigation: "",*/
              Level: $('#level')
                  .val()
                  .trim(),
              /*Medicine: "",
              Nature: "",
              Perception: "",
              Performance: "",
              Persuasion: "",
               */
              
              /* Religion: "", */
              /* SlightOfHand: "", */
              Speed: $('#speed')
                  .val()
                  .trim(),
              /* Stealth: "", */
              Strength: $('#strength')
                  .val()
                  .trim(),
              /* StrengthST: "", */
              /* Survival: "", */
              /* WisdomST: "", */
              Wisdom: $('#wisdom')
                  .val()
                  .trim(),
              passiveWisdom: $('#passivewisdom')
                  .val()
                  .trim()
  
          };
          // console.log(newChar);
          
          if (
              $('#alignment').val().trim() === "" ||
              $('#armorclass').val().trim()  === "" ||
              $('#background').val().trim()  === "" ||
              $('#charactername').val().trim()  === "" ||
              $('#race').val().trim()  === "" ||
              $('#charisma').val().trim()  === "" ||
              $('#class').val().trim()  === "" ||
              $('#constitution').val().trim()  === "" ||
              $('#dexterity').val().trim()  === "" ||
              $('#initiative').val().trim()  === "" ||
              $('#intelligence').val().trim()  === "" ||
              $('#level').val().trim()  === "" ||
              $('#speed').val().trim()  === "" ||
              $('#strength').val().trim()  === "" ||
              $('#wisdom').val().trim()  === "" ||
              $('#passivewisdom').val().trim()  === ""
          )
          {
              alert("All feilds must be filled out");
          } else {
                  updatePost(newChar);
                  console.log(newChar);
                }
          }

     function updatePost(post) {
       console.log(post)
      $.ajax({
        method: "PUT",
        url: "/api/character",
        data: post,
      }).then(
        window.location.href = "/characters.html"
      )};
  }
);
        function deleteCharacter(event) {
          event.stopPropagation();

          const id = $(this).attr("id");
          console.log(id);
          $.ajax({
            method: "DELETE",
            url: "/api/character/" + id
          })
          location.reload();
        }
        function updateCharacter(event) {
          event.stopPropagation();

          const id = $(this).attr("id");
          console.log(id);
          $.ajax({
            method: "PUT",
            url: "/api/character/" + id
          })
          location.reload();
        }

       

        
        $(document).on("click", "button.delete", deleteCharacter)
        $("button").on("click", function(){
          console.log('cheese')
        })
         
       

