// import controller
const venueController = require("../controllers/venueController.js");

// venueRouter
const venueRouter = require("express").Router();

venueRouter.post("/addVenue", venueController.addVenue);

venueRouter.get("/allVenues", venueController.getAllVenues);

venueRouter.get("/getVenueBookings/:id", venueController.getVenueBookings);

venueRouter.get("/:id", venueController.getOneVenue);

venueRouter.put("/:id", venueController.updateVenue);

venueRouter.delete("/:id", venueController.deleteVenue);

module.exports = venueRouter;
