module.exports = function(sequelize, DataTypes) {
    const Character = sequelize.define("Character", {
    //    Basic Character Traits
    // ######################################
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Class: {
            type: DataTypes.STRING,
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
        Alignment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Background: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
            }
        },
        // XP: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // },
        // Level: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // },
        // Character Stats
        // ####################################
        Strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Dexterity: {
            type: DataTypes.INTEGER,
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
        Intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Wisdom: {
            type: DataTypes.INTEGER,
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
        // Additional Character Stats
        // ##############################################
        ArmorClass: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        ProficiencyBonus: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Speed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        HP: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // Death Saves
        // ##########################
        // Successes:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     defaultValue: 0,
        //     validate: {
        //         len: [1]
        //     }
        // },
        // Failures:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     defaultValue: 0,
        //     validate: {
        //         len: [1]
        //     }
        // },
        // Ability Saving Throws
        // #################################
        StrengthST: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        DexterityST: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        ConstitutionST: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        IntelligenceST: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        WisdomST: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        CharismaST: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        // Proficiencies 
        // ################################
        Acrobatics: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
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
        Athletics: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Deception: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        History: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
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
        Stealth: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Survival: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
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
