const db = require("../models");

// model
const Booking = db.bookings;

//1. Add Booking
const addBooking = async (req, res) => {
  const id = req.params.id;
  const { venue_id, level, date, start_time, booking_id } = req.body;
  let data = {
    user_id: id,
    venue_id: venue_id,
    level: level,
    date: date,
    start_time: start_time,
    booking_id: booking_id,
  };

  const booking = await Booking.create(data);
  res.status(200).send(booking);
};

// 2. Get All Bookings
const getAllBookings = async (req, res) => {
  const bookings = await Booking.findAll({});
  res.status(200).send(bookings);
};

const getBookingByDateTime = async (req, res) => {
  const {booking_date, time} = req.body;
  const booking = await Booking.findOne({ where: { date: booking_date , start_time: time } });
  res.status(200).send(booking);
};

module.exports = {
  addBooking,
  getAllBookings,
  getBookingByDateTime,
};
