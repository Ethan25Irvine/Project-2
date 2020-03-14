const db = require("../models");

const seed = function (){
    db.Character.create({
        Name: "Melvin",
        Class: "Wizard",
        Race: "Human",
        Alignment: "Neutrual",
        Background: "Drug Dealer",
        // XP: req.body.XP,
        Level: 100000,
        Strength: 20,
        Dexterity: 20,
        Constitution: 20,
        Intelligence: 20,
        Wisdom: 20,
        Charisma: 20,
        ArmorClass: 40,
        // ProficiencyBonus: req.body.ProficiencyBonus,
        Speed: 100,
        HP: 1000,
        // Successes: req.body.Successes,
        // Failures: req.body.Failures,
        StrengthST: true,
        DexterityST: true,
        ConstitutionST: true,
        IntelligenceST: true,
        WisdomST: true,
        CharismaST: true,
        Acrobatics: true,
        AnimalHandling: true,
        Arcana: true,
        Athletics: true,
        Deception: true,
        History: true,
        Insight: true,
        Intimidation: true,
        Investigation: true,
        Medicine: true,
        Nature: true,
        Perception: true,
        Performance: true,
        Persuasion: true,
        Religion: true,
        SlightOfHand: true,
        Stealth: true,
        Survival: true
    }).then ( function (res){
        console.log(res);
    })
};

module.exports = seed;