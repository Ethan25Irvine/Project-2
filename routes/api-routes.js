// *********************************************************************************
// api-routes.js - this file offers a
// set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {
	// GET route for getting all of the Character
	app.get('/api/Character', function(req, res) {
		// findAll returns all entries for a table when used with no options
		db.Character.findAll({}).then(function(dbCharacter) {
			// We have access to the Character as an argument inside of the callback function
			res.json(dbCharacter);
		});
	});

	// POST route for saving a new Character
	app.post('/api/character', function(req, res) {
		// create takes an argument of an object describing the item we want to
		// insert into our table. In this case we just we pass in an object with a text
		// and complete property (req.body)
		console.log(req);
		db.Character
			.create({
				/*                Acrobatics: req.Acrobatics, */
				Alignment: req.body.Alignment,
				/*               AnimalHandling: req.AnimalHandling, */
				/* Arcana: req.Arcana, */
				ArmorClass: req.body.ArmorClass,
				/*             Athletics: req.Athletics, */
				Background: req.body.Background,
				CharacterName: req.body.CharacterName,
				Charisma: req.body.Charisma,
				/*                CharismaST: req.CharismaST, */
				Class: req.body.Class,
				Constitution: req.body.Constitution,
				/* ConstitutionST: req.ConstitutionST, */
				/* Deception: req.Deception, */
				Dexterity: req.body.Dexterity,
				/* DexterityST: req.DexterityST, */
				/* History: req.History,
                HP: req.HP,
                */
				Initiative: req.body.Initiative,
				/* Insight: req.Insight, */
				Intelligence: req.body.Intelligence,
				/* IntelligenceST: req.IntelligenceST, */
				/* Intimidation: req.Intimidation, */
				/* Investigation: req.Investigation, */
				Level: req.body.Level,
				/* Medicine: req.Medicine, */
				/* Nature: req.Nature, */
				passiveWisdom: req.body.passiveWisdom,
				/* Perception: req.Perception,
                Performance: req.Performance,
                Persuasion: req.Persuasion,
                 */
				// ProficiencyBonus: req.body.ProficiencyBonus,
				Race: req.body.Race,
				/* Religion: req.Religion,
                SlightOfHand: req.SlightOfHand,
                 */
				Speed: req.body.Speed,
				/* Stealth: req.Stealth, */
				Strength: req.body.Strength,
				/* StrengthST: req.StrengthST, */
				/* Survival: req.Survival, */
				Wisdom: req.body.Wisdom
				/* WisdomST: req.WisdomST */
			})
			.then(function(dbCharacter) {
				// We have access to the new Character as an argument inside of the callback function
				res.json(dbCharacter);
				// console.log(dbCharacter)
			})
			.catch(function(err) {
				// Whenever a validation or flag fails, an error is thrown
				// We can "catch" the error to prevent it from being "thrown", which could crash our node app
				res.json(err);
			});
	});

	// DELETE route for deleting Character. We can get the id of the Character to be deleted from
	// req.params.id
	app.delete('/api/Character/:id', function(req, res) {
		// We just have to specify which Character we want to destroy with "where"
		db.Character
			.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(function(dbCharacter) {
				res.json(dbCharacter);
			});
	});

	// PUT route for updating Character. We can get the updated Character data from req.body
	app.put('/api/Character', function(req, res) {
		// Update takes in an object describing the
		// properties we want to update, and
		// we use where to describe which objects
		// we want to update
		db.Character
			.update(
				{
						/*                Acrobatics: req.Acrobatics, */
				Alignment: req.body.Alignment,
				/*               AnimalHandling: req.AnimalHandling, */
				/* Arcana: req.Arcana, */
				ArmorClass: req.body.ArmorClass,
				/*             Athletics: req.Athletics, */
				Background: req.body.Background,
				CharacterName: req.body.CharacterName,
				Charisma: req.body.Charisma,
				/*                CharismaST: req.CharismaST, */
				Class: req.body.Class,
				Constitution: req.body.Constitution,
				/* ConstitutionST: req.ConstitutionST, */
				/* Deception: req.Deception, */
				Dexterity: req.body.Dexterity,
				/* DexterityST: req.DexterityST, */
				/* History: req.History,
                HP: req.HP,
                */
				Initiative: req.body.Initiative,
				/* Insight: req.Insight, */
				Intelligence: req.body.Intelligence,
				/* IntelligenceST: req.IntelligenceST, */
				/* Intimidation: req.Intimidation, */
				/* Investigation: req.Investigation, */
				Level: req.body.Level,
				/* Medicine: req.Medicine, */
				/* Nature: req.Nature, */
				passiveWisdom: req.body.passiveWisdom,
				/* Perception: req.Perception,
                Performance: req.Performance,
                Persuasion: req.Persuasion,
                 */
				// ProficiencyBonus: req.body.ProficiencyBonus,
				Race: req.body.Race,
				/* Religion: req.Religion,
                SlightOfHand: req.SlightOfHand,
                 */
				Speed: req.body.Speed,
				/* Stealth: req.Stealth, */
				Strength: req.body.Strength,
				/* StrengthST: req.StrengthST, */
				/* Survival: req.Survival, */
				Wisdom: req.body.Wisdom
				/* WisdomST: req.WisdomST */
				},
				{
					where : {
						id : req.body.id
					}
				}
			)
			.then(function(dbCharacter) {
				res.json(dbCharacter);
			})
			.catch(function(err) {
				// Whenever a validation or flag fails, an error is thrown
				// We can "catch" the error to prevent it from being "thrown", which could crash our node app
				res.json(err);
			});
	});
};
