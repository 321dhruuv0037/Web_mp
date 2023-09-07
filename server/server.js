const express = require("express");

let app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


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