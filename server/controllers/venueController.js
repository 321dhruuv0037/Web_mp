const db = require("../models");

// // image Upload
// const multer = require("multer");
// const path = require("path");

// create main Model
const Venue = db.venues;
const Booking = db.bookings;

// 1. create venue
const addVenue = async (req, res) => {
  const {name,capacity,type,resources,description} = req.body;
  let info = {
    name: name,
    capacity: capacity,
    type: type,
    resources: resources,
    description: description,
  };

  const venue = await Venue.create(info);
  res.status(200).send(venue);
  console.log(venue);
};

// 2. get all venues
const getAllVenues = async (req, res) => {
  let venues = await Venue.findAll({});
  res.status(200).send(venues);
};

// 3. get single venue
const getOneVenue = async (req, res) => {
  let id = req.params.id;
  let venue = await Venue.findOne({ where: { id: id } });
  res.status(200).send(venue);
};

// 4. update Venue
const updateVenue = async (req, res) => {
  let id = req.params.id;

  const venue = await Venue.update(req.body, { where: { id: id } });

  res.status(200).send(venue);
};

// 5. delete venue by id
const deleteVenue = async (req, res) => {
  let id = req.params.id;

  await Venue.destroy({ where: { id: id } });

  res.status(200).send("Venue is deleted !");
};

// 6. connect one to many relation Venue and Bookings
const getVenueBookings = async (req, res) => {
  const id = req.params.id;

  const data = await Venue.findOne({
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

// 7. Upload Image Controller
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "Images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: "1000000" },
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png|gif/;
//     const mimeType = fileTypes.test(file.mimetype);
//     const extname = fileTypes.test(path.extname(file.originalname));

//     if (mimeType && extname) {
//       return cb(null, true);
//     }
//     cb("Give proper files formate to upload");
//   },
// }).single("image");

module.exports = {
  addVenue,
  getAllVenues,
  getOneVenue,
  updateVenue,
  deleteVenue,
  getVenueBookings,
  // upload,
};
