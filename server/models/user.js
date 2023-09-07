module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      //  0-management, 1-IT, 2-Comps, 3-EXTC, 4-Mech
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return User;
};
