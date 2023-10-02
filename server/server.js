const express = require("express");
const cors = require('cors');

const app = express()

const db = require("./models");

// create main Model
const User = db.users;

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/messages", async (req, res) => {
    try {
        const name = req.params.name;
        const user = await User.findOne({where: {name: 'advay'}});

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        // Access the user's properties and send them in the response
        const {id, email, password, department, level, createdAt, updatedAt} = user;

        res.status(200).json({
            id: id,
            name: user.name,
            email: email,
            password: password,
            department: department,
            level: level,
            createdAt: createdAt,
            updatedAt: updatedAt
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});
// routers
const userRouter = require('./routes/userRoute.js')
app.use('/api/users', userRouter)
const venueRouter = require('./routes/venueRoute.js')
app.use('/api/venues', venueRouter)
const bookingRouter = require('./routes/bookingRoute.js')
app.use('/api/bookings', bookingRouter)

//static Images Folder

// app.use('/Images', express.static('./Images'))


//port
const PORT = process.env.PORT || 3000

//server
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})