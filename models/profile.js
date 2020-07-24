module.exports = function (sequelize, DataTypes) {
    const Profile = sequelize.define("Profile", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthday: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genderOrientation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        biography: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        imageURL: {
            type: DataTypes.STRING,
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