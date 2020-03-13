// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the Character
    app.get("/api/character", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.character.findAll({}).then(function(dbCharacter) {
            // We have access to the Character as an argument inside of the callback function
            res.json(dbCharacter);
        });
    });

    // POST route for saving a new Character
    app.post("/api/Character", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Character.create({
                Name: req.body.Name,
                Class: req.body.Class,
                Race: req.body.Race,
                Alignment: req.body.Alignment,
                Background: req.body.Background,
                // XP: req.body.XP,
                Level: req.body.Level,
                Strength: req.body.Strength,
                Dexterity: req.body.Dexterity,
                Constitution: req.body.Constitution,
                Intelligence: req.body.Intelligence,
                Wisdom: req.body.Wisdom,
                Charisma: req.body.Charisma,
                ArmorClass: req.body.ArmorClass,
                // ProficiencyBonus: req.body.ProficiencyBonus,
                Speed: req.body.Speed,
                HP: req.body.HP,
                // Successes: req.body.Successes,
                // Failures: req.body.Failures,
                StrengthST: req.body.StrengthST,
                DexterityST: req.body.DexterityST,
                ConstitutionST: req.body.ConstitutionST,
                IntelligenceST: req.body.IntelligenceST,
                WisdomST: req.body.WisdomST,
                CharismaST: req.body.CharismaST,
                Acrobatics: req.body.Acrobatics,
                AnimalHandling: req.body.AnimalHandling,
                Arcana: req.body.Arcana,
                Athletics: req.body.Athletics,
                Deception: req.body.Deception,
                History: req.body.History,
                Insight: req.body.Insight,
                Intimidation: req.body.Intimidation,
                Investigation: req.body.Investigation,
                Medicine: req.body.Medicine,
                Nature: req.body.Nature,
                Perception: req.body.Perception,
                Performance: req.body.Performance,
                Persuasion: req.body.Persuasion,
                Religion: req.body.Religion,
                SlightOfHand: req.body.SlightOfHand,
                Stealth: req.body.Stealth,
                Survival: req.body.Survival
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

        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.Character.update({
                Name: req.body.Name,
                Class: req.body.Class,
                Race: req.body.Race,
                Alignment: req.body.Alignment,
                Background: req.body.Background,
                XP: req.body.XP,
                Level: req.body.Level,
                Strength: req.body.Strength,
                Dexterity: req.body.Dexterity,
                Constitution: req.body.Constitution,
                Intelligence: req.body.Intelligence,
                Wisdom: req.body.Wisdom,
                Charisma: req.body.Charisma,
                ArmorClass: req.body.ArmorClass,
                ProficiencyBonus: req.body.ProficiencyBonus,
                Speed: req.body.Speed,
                HP: req.body.HP,
                Successes: req.body.Successes,
                Failures: req.body.Failures,
                StrengthST: req.body.StrengthST,
                DexterityST: req.body.DexterityST,
                ConstitutionST: req.body.ConstitutionST,
                IntelligenceST: req.body.IntelligenceST,
                WisdomST: req.body.WisdomST,
                CharismaST: req.body.CharismaST,
                Acrobatics: req.body.Acrobatics,
                AnimalHandling: req.body.AnimalHandling,
                Arcana: req.body.Arcana,
                Athletics: req.body.Athletics,
                Deception: req.body.Deception,
                History: req.body.History,
                Insight: req.body.Insight,
                Intimidation: req.body.Intimidation,
                Investigation: req.body.Investigation,
                Medicine: req.body.Medicine,
                Nature: req.body.Nature,
                Perception: req.body.Perception,
                Performance: req.body.Performance,
                Persuasion: req.body.Persuasion,
                Religion: req.body.Religion,
                SlightOfHand: req.body.SlightOfHand,
                Stealth: req.body.Stealth,
                Survival: req.body.Survival
            }, {
                where: {
                    id: req.body.id
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