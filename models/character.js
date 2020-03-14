module.exports = function(sequelize, DataTypes) {
    const Character = sequelize.define("Character", {
        Acrobatics: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Alignment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        AnimalHandling: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Arcana: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        ArmorClass: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Athletics: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Background: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        CharacterName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Charisma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        CharismaST: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Class: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Constitution: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        ConstitutionST: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Deception: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        DexterityST: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        HP: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        IntelligenceST: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        History: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Initiative: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Insight: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Intimidation: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Investigation: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Medicine: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Nature: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Perception: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Performance: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Persuasion: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        ProficiencyBonus: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Race: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Religion: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        SlightOfHand: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Speed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Stealth: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        StrengthST: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Survival: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Wisdom: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        WisdomST: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Character.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Character.belongsTo(models.Creator, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Character;
};