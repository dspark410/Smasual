module.exports = function (sequelize, DataTypes) {
    const Profile = sequelize.define("Profile", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        birthday: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true
        },
        genderOrientation: {
            type: DataTypes.STRING,
            allowNull: true
        },
        biography: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    })

    Profile.associate = function (models) {
        Profile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Profile
};