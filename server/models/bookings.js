module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("booking", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: "1"
    },
  });

  return Booking;
};
