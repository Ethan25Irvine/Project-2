module.exports = function(sequelize, DataTypes) {
    const Creator = sequelize.define("Creator", {
        name: DataTypes.STRING
    });
 
    Creator.associate = function(models) {
        Creator.hasMany(models.Character, {
            onDelete: "cascade"
        });
    };
     
    return Creator;
};
