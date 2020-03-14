// *********************************************************************************
// api-routes.js - this file offers a 
// set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the Character
    app.get("/api/Character", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.character.findAll({}).then(function(dbCharacter) {
            // We have access to the Character as an argument inside of the callback function
            res.json(dbCharacter);
        });
    });

    // POST route for saving a new Character
    app.post("/api/character", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        console.log(req);
        db.Character.create({
                CharacterName: req.Name,
                Class: req.Class,
                Race: req.Race,
                Alignment: req.Alignment,
                Background: req.Background,
                // XP: req.XP,
                Level: req.Level,
                Strength: req.Strength,
                Dexterity: req.Dexterity,
                Constitution: req.Constitution,
                Intelligence: req.Intelligence,
                Wisdom: req.Wisdom,
                Charisma: req.Charisma,
                ArmorClass: req.ArmorClass,
                // ProficiencyBonus: req.ProficiencyBonus,
                Speed: req.Speed,
                HP: req.HP,
                // Successes: req.Successes,
                // Failures: req.Failures,
                StrengthST: req.StrengthST,
                DexterityST: req.DexterityST,
                ConstitutionST: req.ConstitutionST,
                IntelligenceST: req.IntelligenceST,
                WisdomST: req.WisdomST,
                CharismaST: req.CharismaST,
                Acrobatics: req.Acrobatics,
                AnimalHandling: req.AnimalHandling,
                Arcana: req.Arcana,
                Athletics: req.Athletics,
                Deception: req.Deception,
                History: req.History,
                Insight: req.Insight,
                Intimidation: req.Intimidation,
                Investigation: req.Investigation,
                Medicine: req.Medicine,
                Nature: req.Nature,
                Perception: req.Perception,
                Performance: req.Performance,
                Persuasion: req.Persuasion,
                Religion: req.Religion,
                SlightOfHand: req.SlightOfHand,
                Stealth: req.Stealth,
                Survival: req.Survival
            }).then(function(dbCharacter) {
                // We have access to the new Character as an argument inside of the callback function
                res.json(dbCharacter);
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });
    });

    // DELETE route for deleting Character. We can get the id of the Character to be deleted from
    // req.params.id
    app.delete("/api/Character/:id", function(req, res) {
        // We just have to specify which Character we want to destroy with "where"
        db.Character.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbCharacter) {
            res.json(dbCharacter);
        });

    });

    // PUT route for updating Character. We can get the updated Character data from req.body
    app.put("/api/Character", function(req, res) {

        // Update takes in an object describing the 
        // properties we want to update, and
        // we use where to describe which objects
        // we want to update
        db.Character.update({
                Name: req.Name,
                Class: req.Class,
                Race: req.Race,
                Alignment: req.Alignment,
                Background: req.Background,
                XP: req.XP,
                Level: req.Level,
                Strength: req.Strength,
                Dexterity: req.Dexterity,
                Constitution: req.Constitution,
                Intelligence: req.Intelligence,
                Wisdom: req.Wisdom,
                Charisma: req.Charisma,
                ArmorClass: req.ArmorClass,
                ProficiencyBonus: req.ProficiencyBonus,
                Speed: req.Speed,
                HP: req.HP,
                Successes: req.Successes,
                Failures: req.Failures,
                StrengthST: req.StrengthST,
                DexterityST: req.DexterityST,
                ConstitutionST: req.ConstitutionST,
                IntelligenceST: req.IntelligenceST,
                WisdomST: req.WisdomST,
                CharismaST: req.CharismaST,
                Acrobatics: req.Acrobatics,
                AnimalHandling: req.AnimalHandling,
                Arcana: req.Arcana,
                Athletics: req.Athletics,
                Deception: req.Deception,
                History: req.History,
                Insight: req.Insight,
                Intimidation: req.Intimidation,
                Investigation: req.Investigation,
                Medicine: req.Medicine,
                Nature: req.Nature,
                Perception: req.Perception,
                Performance: req.Performance,
                Persuasion: req.Persuasion,
                Religion: req.Religion,
                SlightOfHand: req.SlightOfHand,
                Stealth: req.Stealth,
                Survival: req.Survival
            }, {
                where: {
                    id: req.id
                }
            }).then(function(dbCharacter) {
                res.json(dbCharacter);
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });
    });
};