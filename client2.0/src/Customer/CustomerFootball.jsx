import React, {useState} from 'react';
import img2 from '../assets/img2.jpg'; // Import the background image
import BookingConfirmation from '../Components/BookingConfirmation';
import {
    getUserVariable,
    setVenueVariable,
    getVenueVariable,
    getLevelVariable,
    getEmailVariable,
    getNameVariable,
} from '../global';


function CustomerFootball() {
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');


    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (value) => {
        setModalIsOpen(value);
    };


    const start = (startTime) => {
        const [hourStr, minuteStr] = startTime.split(":");
        const hour = parseInt(hourStr, 10);
        const minute = parseInt(minuteStr, 10);

        // Check if it's p.m. and adjust the hour accordingly
        let adjustedHour = hour;
        if (startTime.includes("PM")) {
            adjustedHour = hour === 12 ? 12 : hour + 12;
        } else if (startTime.includes("AM") && hour === 12) {
            adjustedHour = 0;
        }

        // Convert the hour and minute to a 24-hour format integer (HHMM)
        const timeAsInteger = adjustedHour * 100 + minute;
        console.log(timeAsInteger);
        // Update the state with the formatted time
        return timeAsInteger;
    }

    const end = (endTime) => {
        const [hourStr, minuteStr] = endTime.split(":");
        const hour = parseInt(hourStr, 10);
        const minute = parseInt(minuteStr, 10);

        // Check if it's p.m. and adjust the hour accordingly
        let adjustedHour = hour;
        if (endTime.includes("PM")) {
            adjustedHour = hour === 12 ? 12 : hour + 12;
        } else if (endTime.includes("AM") && hour === 12) {
            adjustedHour = 0;
        }

        // Convert the hour and minute to a 24-hour format integer (HHMM)
        const timeAsInteger = adjustedHour * 100 + minute;

        // Update the state with the formatted time
        return timeAsInteger;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setVenueVariable(1);

        //converting react date format to mysql DATE datatype format
        const dt = new Date(date)
        const mysqlDate = dt.toISOString().slice(0, 10);

        //checking whether the date picked is withing 10 days from current date
        const currentDate = new Date();
        const tenDaysLater = new Date();
        tenDaysLater.setDate(currentDate.getDate() + 92);

        if (dt <= currentDate || dt > tenDaysLater) {
            alert("Choose a date within three months from now")
            return;
        } else {
            try {
                const checkData = {
                    date: mysqlDate,
                    start_time: start(startTime),
                    end_time: end(endTime),
                    venue_id: getVenueVariable(),
                }
                console.log('Working1');
                const response = await fetch(`http://localhost:3000/getBookingByDateTimeVenue`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(checkData),
                });
                console.log('Working2');
                const booking = await response.json();
                console.log('Working3');
                if (response.status === 200) {
                        alert("Slot already full")
                } else {
                    console.log('Working5');
                    try {
                        const footballData = {
                            user_id: getUserVariable(),
                            venue_id: getVenueVariable(),
                            level: getLevelVariable(),
                            date: mysqlDate,
                            start_time: start(startTime),
                            end_time: end(endTime),
                            status: 1,
                        };


                        const response = await fetch(`http://localhost:3000/addBooking`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(footballData),
                        });

                        if (response.status === 200) {
                            const mailData = {
                                name: getNameVariable(),
                                email: getEmailVariable(),
                                message: `${getNameVariable()} you have booked the Football Ground on ${date} from ${startTime} to ${endTime}`,
                            };

                            try {
                                const response = await fetch(`http://localhost:3000/bookingEmail`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(mailData),
                                });

                                if (response.status === 200) {
                                    console.log('Done');
                                } else {
                                    console.error('Server error');
                                }
                            } catch (error) {
                                console.error('An error occurred', error);
                            }

                            openModal(true);
                        } else {
                            console.error('Server error');
                        }
                    } catch (error) {
                        console.error('An error occurred', error);
                    }
                }
            } catch (error) {
                console.error('An error occurred', error);
            }
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const containerStyles = {
        maxWidth: '800px', // Increased form width
        width: '700px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        maxHeight: '700px',
        height: 'auto', // Changed height to auto for dynamic sizing
        padding: '30px', // Increased padding
        borderRadius: '20px',
        textAlign: 'center',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Added box shadow for a subtle effect
        flexDirection: 'column',
    };

    const inputStyles = {
        width: '100%',
        padding: '10px', // Adjusted padding
        marginTop: '10px', // Increased margin-top
        marginBottom: '10px', // Added margin-bottom

        borderRadius: '10px', // Increased border radius
        fontSize: '16px', // Increased font size for better readability
    };

    const nameEmailContainerStyles = {
        display: 'flex',
        flexWrap: 'nowrap', // Allow wrapping on smaller screens
        justifyContent: 'space-between',
    };

    const nameInputStyles = {
        flex: 1,
        marginRight: '10px', // Adjust margin as needed
    };

    const dateTimeContainerStyles = {
        display: 'flex',
        flexWrap: 'nowrap', // Allow wrapping on smaller screens
        justifyContent: 'space-between',
    };

    const dateInputStyles = {
        flex: 1,
        marginRight: '20px', // Adjust margin as needed
    };
    const timeInputStyles = {
        flex: 1,
    };
    const buttonStyles = {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '10px', // Increased border radius
        padding: '12px 24px', // Adjusted padding for the button
        cursor: 'pointer',
        fontSize: '18px', // Increased font size for the button
    };
    /* Add styles for terms and conditions alignment */
    const termsContainerStyles = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px', // Adjust spacing
    };

    /* Add styles for the terms and conditions checkbox */
    const termsCheckboxStyles = {
        marginRight: '5px', // Adjust spacing
    };

    const submitButtonStyles = {
        ...buttonStyles, // Spread the buttonStyles object to inherit its properties
        backgroundColor: '#007bff',
        color: '#fff',
    };

    const submitButtonHoverStyles = {
        ...submitButtonStyles, // Spread the submitButtonStyles object to inherit its properties
        backgroundColor: '#0056b3',
    };

    const backgroundStyles = {
        margin: 0,
        padding: 0,
        backgroundImage: `url(${img2})`, // Set the background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        color: '#fff',
    };

    return (
        <div style={backgroundStyles}>
            <div className="football-container" style={containerStyles}>
                <h2>Book Football Ground</h2>
                <form onSubmit={handleSubmit}>
                    <div className="date-time-container" style={dateTimeContainerStyles}>
                        <div className="date-input" style={dateInputStyles}>
                            <label>
                                Date:
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                    style={inputStyles}
                                />
                            </label>
                        </div>
                        <div className="time-input" style={dateInputStyles}>
                            <label>
                                Start Time:
                                <input
                                    type="time"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    required
                                    style={inputStyles}
                                />
                            </label>
                        </div>
                        <div className="time-input" style={dateInputStyles}>
                            <label>
                                End Time:
                                <input
                                    type="time"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    required
                                    style={inputStyles}
                                />
                            </label>
                        </div>
                    </div>
                    <button type="submit" style={submitButtonStyles} onClick={openModal}>
                        Book Court
                    </button>
                    <BookingConfirmation isOpen={modalIsOpen} onClose={closeModal}/>
                </form>
            </div>
        </div>
    );
}

export default CustomerFootball;
