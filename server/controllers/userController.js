const db = require("../models");

// create main Model
const User = db.users;
const Booking = db.bookings;

// 1. create user
const addUser = async (req, res) => {
  const {name,password,email,department,level} = req.body;
  let info = {
    name: name,
    password: password,
    email: email,
    department: department,
    level: level,
  };

  const user = await User.create(info);
  res.status(200).send(user);
  console.log(user);
};

// 2. get all users
const getAllUsers = async (req, res) => {
  let users = await User.findAll({});
  res.status(200).send(users);
};

// 3. get single user
const getOneUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { id: id } });
  res.status(200).send(user);
};

// 4. update User
const updateUser = async (req, res) => {
  let id = req.params.id;

  const user = await User.update(req.body, { where: { id: id } });

  res.status(200).send(user);
};

// 5. delete user by id
const deleteUser = async (req, res) => {
  let id = req.params.id;

  await User.destroy({ where: { id: id } });

  res.status(200).send("User is deleted !");
};

// 6. connect one to many relation User and Bookings
const getUserBookings = async (req, res) => {
  const id = req.params.id;

  const data = await User.findOne({
    include: [
      {
        model: Booking,
        as: "booking",
      },
    ],
    where: { id: id },
  });

  res.status(200).send(data);
};


module.exports = {
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  getUserBookings,
};
