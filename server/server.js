const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express()
app.use(bodyParser.json());

const db = require("./models");

// getting tables from the database
const User = db.users;
const Booking = db.bookings;

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/getOneUser/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const user = await User.findOne({where: {name: name}});

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        // Access the user's properties and send them in the response
        const {id, email, password, department, level} = user;

        res.status(200).json({
            id: id,
            name: user.name,
            email: email,
            password: password,
            department: department,
            level: level
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.post("/addUser", async (req, res) => {
    try{
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
    } catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.post('/sendEmail', (req, res) => {
  const { name, email, message } = req.body;

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