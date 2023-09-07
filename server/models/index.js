const dbConfig = require("../config/db_config.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.js")(sequelize, DataTypes);
db.venues = require("./venue.js")(sequelize, DataTypes);
db.bookings = require("./bookings.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

// 1 to Many Relation

// db.users.hasMany(db.bookings, {
//   foreignKey: "booking_id",
//   as: "booking",
// });

// db.bookings.belongsTo(db.users, {
//   foreignKey: "user_id",
//   as: "user",
// });

// db.venues.hasMany(db.bookings, {
//   foreignKey: "booking_id",
//   as: "booking",
// });

// db.bookings.belongsTo(db.venues, {
//   foreignKey: "venue_id",
//   as: "venue",
// });

db.users.hasMany(db.bookings, {
  foreignKey: "user_id",
  as: "userBookings", // You can use a different alias if needed
});

db.bookings.belongsTo(db.users, {
  foreignKey: "user_id",
  as: "user",
});

db.venues.hasMany(db.bookings, {
  foreignKey: "venue_id",
  as: "venueBookings", // You can use a different alias if needed
});

db.bookings.belongsTo(db.venues, {
  foreignKey: "venue_id",
  as: "venue",
});
module.exports = db;
