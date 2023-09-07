// import controller
const bookingController = require("../controllers/bookingController.js");

// bookingRouter
const bookingRouter = require("express").Router();

bookingRouter.get("/allBookings", bookingController.getAllBookings);
bookingRouter.get("/getBookingByDateTime", bookingController.getBookingByDateTime);
bookingRouter.post("/addBooking/:id", bookingController.addBooking);

module.exports = bookingRouter;

