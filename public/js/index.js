$(document).ready(function () {
    getClass();
    getRace();
    getProf1();
    getProf2();
    getProf3();
    getProf4();
    getAlign();
    getBackground();
})

$(".Roll").on("click", function () {
    event.preventDefault();

    const target = $(this).attr("data-target");
    // console.log($(this.id));
    roll([[4, 6]], target);
})

// dice roll functionality
function getRandomInt(max) {
    event.preventDefault();
    return Math.floor(Math.random() * max);
};

function roll(dice, target) {
    event.preventDefault();
    let sum = 0;

    dice.forEach(die => {
        for (let i = 0; i < die[0]; i++) {
            sum += getRandomInt(die[1]) + 1
        };
    });

    // return sum;


    // console.log($(this));
    // console.log(target);
    $("#" + target).val(sum);
    // console.log(sum);
}


const classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
function getClass() {
    for (let i = 0; i < classes.length; i++) {
        $("#class").append("<option value=" + classes[i] + ">" + classes[i] + "</option>");
    };
};

const races = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-ELf", "Half-Orc", "Halfling", "Human", "Tiefling"];
function getRace() {
    for (let i = 0; i < races.length; i++) {
        $("#race").append("<option value=" + races[i] + ">" + races[i] + "</option>");
    };
};

const align = ["Lawful good", "Neutral good", "Chaotic good", "Lawful neutral", "Neutral", "Chaotic neutral", "Lawful evil", "Neutral evil", "Chaotic evil"]

function getAlign() {
    for (let i = 0; i < align.length; i++) {
        $("#alignment").append("<option value=" + align[i] + ">" + align[i] + "</option>");
    };
};

const back = [
    "Abyssdweller",
    "Adept",
    "Adopted",
    "Afflicted",
    "Air Acrobat",
    "Alchemic Construct",
    "Alchemist",
    "Alcoholic",
    "Alcoholic Scientist",
    "Amnesiac",
   "Ancient Cultist",
    "Ancient King",
    "Ancient One",
    "Antiquarian",
    "Apothecary",
    "Arcana Spy",
    "Arcane Dominion",
    "Archaeologist",
    "Archivist",
    "Armed Escort",
    "Arranged Marriage",
    "Artist",
    "Arvoreen Keeper",
    "Aspirant",
    "Astronaut",
    "Balloon Mage",
    "Banker",
    "Barber",
    "Barmaid",
    "Battlesmith",
    "Beggar",
    "Bereaved",
    "Bodyguard",
    "Bounty Hunter",
    "Butler",
    "Cattle Rustler",
    "Changeling",
    "Child of Ares",
    "Chronicler",
    "City Guard",
    "City Worker",
    "Clone",
    "Collector",
    "Combat Medic",
    "Confederacy of Feuding Houses",
    "Construct",
    "Courtesan",
    "Crazed Hermit",
    "Crusader Nation",
    "Cultist of the Ash - Veined",
    "Cursed",
    "Dandy",
    "Dark Lord",
    "Demonologist",
    "Denizen",
    "Detective",
    "Diplomat",
    "Disciple of the Obscure",
    "Disgrace",
    "Doctor",
    "Dog of the Military",
    "Dragon Trained",
    "Dragonshore Buccaneer",
    "Drunken Bum",
    "Duelist",
    "Earthling",
    "Elysium Knight",
    "Endless Soul",
    "Engineer",
    "Envoy",
    "Eternal One",
    "Evil Cultist",
    "Ex - Blood Doll",
    "Executioner",
    "Exile",
    "Exiled Ruler",
    "Experiment",
    "Explorer",
    "Falconer",
    "Fallen Hero",
    "Feared",
    "Fearful",
    "Feral Child",
    "Fey Child",
    "Feychild",
    "Firefighter",
    "Forgotten",
    "Fully Customizable Backgrounds Variant Rule",
    "Gambler",
    "Gladiator, Variant",
    "God Touched",
    "Governess",
    "Gravetender",
    "Heir of a Fallen Kingdom",
    "Hellborn",
    "Herald of the Gods",
    "Heretic",
    "Hitman",
    "Hooded Figure",
    "House Worker",
    "Hunter",
    "Hunter Stalker",
    "Immortal",
    "Infected",
    "Inquirer",
    "Islander",
    "Janitor",
    "Jester",
    "Knight Sororitas",
    "Law Bringer",
    "Librarian",
    "Lost Civilization",
    "Lover",
    "Loyal Priest",
    "Lumberjack",
    "Mafioso",
    "Maid",
    "Mailman",
    "Marshal",
    "Master Inquisitor",
    "Member of The Court of Gaia",
    "Mercenary",
    "Messenger",
    "Metal Worker",
    "Militant assassin",
    "Military Asset",
    "Military Pilot",
    "Miner",
    "Monastic",
    "Monastic Traveller",
    "Monster",
    "Monster Hunter",
    "Mute",
    "Mystic",
    "Navy SEAL",
    "Noble Dragon Tamer",
    "Noble Guard",
    "Nomad",
    "Oathbreaker",
    "Occult Investigator",
    "Of the Void",
    "Otherworlder, Variant",
    "Planar Traveler",
    "Plane Walker",
    "Politician",
    "Prisoner",
    "Professional Assassin",
    "Prospector",
    "Psychic",
    "Psycho",
    "Puppeteer",
    "Redeemed Cultist",
    "Regime of the Dark Overlord",
    "Revenant",
    "Revolutionist",
    "Rider",
    "Rival",
    "Roamer",
    "Royal Cavalryman",
    "Royalty",
    "Runaway",
    "Sadistic Assassin",
    "Salesman",
    "Scavenger",
    "Secret",
    "Sentinel",
    "Serial Killer",
    "Sex Worker",
    "Shadow Thieves Guild Member",
    "Simpleton",
    "Slaver",
    "Slayer",
    "Sleuth",
    "Smuggler, Variant",
    "Smuggler"];
function getBackground() {
    for (let i = 0; i < back.length; i++) {
        $("#background").append("<option value=" + back[i] + ">" + back[i] + "</option>");
    };
};



const profs1 = ["Performance", "Persuasion", "Religion", "Slight-of-Hand", "Stealth", "Survival"];
const profs2 = ["Acrobatics", "Animal-Handling", "Arcana", "Athletics", "Deception", "History"];
const profs3 = ["Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception"];
const profs4 = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

function getProf1() {
    for (let i = 0; i < profs1.length; i++) {
        $("#prof1").append("<div class='form-check form-check-inline'>" +
            "<input class='form-check-input' type='checkbox' id=" + profs1[i] + " value=" + profs1[i] + ">" +
            "<label class='form-check-label' for=" + profs1[i] + ">" + profs1[i] + "</label>" +
            "</div>");
    };
}

function getProf2() {
    for (let i = 0; i < profs2.length; i++) {
        $("#prof2").append("<div class='form-check form-check-inline'>" +
            "<input class='form-check-input' type='checkbox' id=" + profs2[i] + " value=" + profs2[i] + ">" +
            "<label class='form-check-label' for=" + profs2[i] + ">" + profs2[i] + "</label>" +
            "</div>");
    };
}

function getProf3() {
    for (let i = 0; i < profs3.length; i++) {
        $("#prof3").append("<div class='form-check form-check-inline'>" +
            "<input class='form-check-input' type='checkbox' id=" + profs3[i] + " value=" + profs3[i] + ">" +
            "<label class='form-check-label' for=" + profs3[i] + ">" + profs3[i] + "</label>" +
            "</div>");
    };
}

function getProf4() {
    for (let i = 0; i < profs4.length; i++) {
        $("#prof4").append("<div class='form-check form-check-inline'>" +
            "<input class='form-check-input' type='checkbox' id=" + profs4[i] + " value=" + profs4[i] + ">" +
            "<label class='form-check-label' for=" + profs4[i] + ">" + profs4[i] + "</label>" +
            "</div>");
    };
}