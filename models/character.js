module.exports = function(sequelize, DataTypes) {
    const Character = sequelize.define("Character", {
        /* Acrobatics: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        }, */
        Alignment: {
            type: DataTypes.STRING,
            allowNull: true,
            /*     validate: {
                    len: [1]
                } */
        },
        /*         AnimalHandling: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                },
                Arcana: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                }, */
        ArmorClass: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        /*        Athletics: {
                   type: DataTypes.BOOLEAN,
                   allowNull: true,
                   defaultValue: true
               }, */
        Background: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        CharacterName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        Charisma: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        /*         CharismaST: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                }, */
        Class: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        Constitution: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        /*         ConstitutionST: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                }, */
        /*         Deception: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                }, */
        Dexterity: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        /*         DexterityST: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                }, */
        /*  HP: {
             type: DataTypes.INTEGER,
             allowNull: true,
             validate: {
                 len: [1]
             }
         }, */
        Intelligence: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        /*        IntelligenceST: {
                   type: DataTypes.BOOLEAN,
                   allowNull: true,
                   defaultValue: true
               },
               History: {
                   type: DataTypes.BOOLEAN,
                   allowNull: true,
                   defaultValue: true
               }, */
        Initiative: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        /*         Insight: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                },
                Intimidation: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                }, */
        /* Investigation: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        }, */
        Level: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        /*         Medicine: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                }, */
        /*         Nature: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                },
                Perception: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                }, */
        /*         Performance: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                },
                Persuasion: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                }, */
        ProficiencyBonus: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        Race: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        /*        Religion: {
                   type: DataTypes.BOOLEAN,
                   allowNull: true,
                   defaultValue: true
               },
               SlightOfHand: {
                   type: DataTypes.BOOLEAN,
                   allowNull: true,
                   defaultValue: true
               }, */
        Speed: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        /*         Stealth: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                },
                StrengthST: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                }, */
        Strength: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        /*         Survival: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                }, */
        Wisdom: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        }
        /*         WisdomST: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true
                } */
    });

    /*     Character.associate = function(models) {
            // We're saying that a Post should belong to an Author
            // A Post can't be created without an Author due to the foreign key constraint
            Character.belongsTo(models.Creator, {
                foreignKey: {
                    allowNull: false
                }
            });
        }; */
    return Character;
};