// import controller
const userController = require("../controllers/userController.js");

// userRouter
const userRouter = require("express").Router();

userRouter.post("/addUser", userController.addUser);

userRouter.get("/allUsers", userController.getAllUsers);

userRouter.get("/getUserBookings/:id", userController.getUserBookings);

userRouter.get("/:name", userController.getOneUser);

userRouter.put("/:id", userController.updateUser);

userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
