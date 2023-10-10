const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const {Op} = require("sequelize");
const cron = require('node-cron');


const app = express()
app.use(bodyParser.json());

const db = require("./models");

// getting tables from the database
const User = db.users;
const Booking = db.bookings;

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({extended: true}))

//USER ROUTES
app.get("/getOneUser/:email", async (req, res) => {
    try {
        const email = req.params.email;
        const user = await User.findOne({where: {email: email}});

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        // Access the user's properties and send them in the response
        const {id, name, password, department, level} = user;

        res.status(200).json({
            id: id,
            name: name,
            email: user.email,
            password: password,
            department: department,
            level: level,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get("/getUser/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({where: {id: id}});

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        // Access the user's properties and send them in the response
        const {name, email, password, department, level} = user;

        res.status(200).json({
            id: user.id,
            name: name,
            email: email,
            password: password,
            department: department,
            level: level,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.post("/addUser", async (req, res) => {
    try {
        const {name, password, email, department, level} = req.body;
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
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

//BOOKINGS
app.post('/addBooking', async (req, res) => {
    try {
        const {user_id, venue_id, level, date, start_time, end_time, status} = req.body;
        let data = {
            user_id: user_id,
            venue_id: venue_id,
            level: level,
            date: date,
            start_time: start_time,
            end_time: end_time,
            status: status,
        };

        const booking = await Booking.create(data);
        res.status(200).send(booking);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.delete('/deleteBooking/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const booking = await Booking.findOne({where: {id: id}});

        booking.status = 0;
        await booking.save();

        res.status(200).json({message: 'Booking deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
});

app.delete('/deleteBooking', async (req, res) => {
    try {
        const {date, start_time, venue_id} = req.body;
        const booking = await Booking.findOne({where: {date: date, start_time: start_time, venue_id: venue_id}});

        booking.status = 0;
        await booking.save();

        res.status(200).json({message: 'Booking deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
});

app.get('/getAllBooking/:user_id', async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const bookings = await Booking.findAll({where: {user_id: user_id}});

        if (bookings.length === 0) {
            return res.status(400).json({error: "No bookings found"});
        }

        const bookingList = bookings.map((booking) => {
            return {
                id: booking.id,
                venue_id: booking.venue_id,
                date: booking.date,
                start_time: booking.start_time,
                end_time: booking.end_time,
                status: booking.status,
            };
        });

        res.status(200).json(bookingList);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
});

app.post('/getBookingByDateTimeVenue', async (req, res) => {
    try {
        const {date, start_time, end_time, venue_id} = req.body;
        const booking = await Booking.findOne({
            where: {
                date: date,
                venue_id: venue_id,
                [Op.or]: [
                    {
                        [Op.and]: [
                            {start_time: {[Op.gte]: start_time}}, // Case 1
                            {end_time: {[Op.lte]: end_time}},     // Case 1
                        ],
                    },
                    {
                        [Op.and]: [
                            {start_time: {[Op.lt]: start_time}}, // Case 1
                            {end_time: {[Op.gt]: end_time}},     // Case 1
                        ],
                    },
                    {
                        [Op.and]: [
                            {start_time: {[Op.lt]: start_time}},   // Case 2
                            {end_time: {[Op.lte]: end_time}},      // Case 2
                            {end_time: {[Op.gt]: start_time}},     // Case 2
                        ],
                    },
                    {
                        [Op.and]: [
                            {start_time: {[Op.gte]: start_time}}, // Case 3
                            {start_time: {[Op.lt]: end_time}},    // Case 3
                            {end_time: {[Op.gt]: end_time}},       // Case 3
                        ],
                    },
                ],
            },
        });

        if (!booking) {
            return res.status(400).json({error: "Booking not found"});
        }

        const {id, user_id, level, status} = booking;

        res.status(200).json({
            id: id,
            user_id: user_id,
            venue_id: booking.venue_id,
            level: level,
            date: booking.date,
            start_time: booking.start_time,
            end_time: booking.end_time,
            status: status,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

//EMAIL
app.post('/sendEmail', (req, res) => {
    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'advay2003gujar@gmail.com',
            pass: 'cfoi dbap ijlx ujth',
        },
    });

    const mailOptions = {
        from: 'advay2003gujar@gmail.com',
        to: 'advay2003gujar@gmail.com',
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.post('/bookingEmail', (req, res) => {
    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'advay2003gujar@gmail.com',
            pass: 'cfoi dbap ijlx ujth',
        },
    });

    const mailOptions = {
        from: 'advay2003gujar@gmail.com',
        to: email,
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

async function updateBookingStatus() {
    try {
        const currentDate = new Date();
        const currentHour = currentDate.getHours() * 100 + currentDate.getMinutes();

        const bookingsToUpdate = await Booking.findAll({
            where: {
                status: 1, // Assuming status 1 represents active bookings
                [Op.or]: [
                    {
                        date: { [Op.lt]: currentDate }, // Date has elapsed
                    },
                    {
                        date: currentDate, // Date is the current date
                        end_time: { [Op.lt]: currentHour }, // End time has elapsed
                    },
                ],
            },
        });

        if (bookingsToUpdate.length > 0) {
            for (const booking of bookingsToUpdate) {
                booking.status = 2; // Set status to 2 for elapsed bookings
                await booking.save();
            }
            console.log(`Updated ${bookingsToUpdate.length} bookings to status 2.`);
        }
    } catch (error) {
        console.error('Error updating booking statuses:', error);
    }
}

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

    cron.schedule('* * * * *', updateBookingStatus);
})