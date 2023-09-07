module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("venue", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
    type: {
      // 0- ground, 1-hall
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    resources: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
  });

  return Venue;
};
