import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CancellationModal from '../Components/CancellationModal'
import { getUserVariable, setUserVariable, setLevelVariable, getLevelVariable } from '../global';


const venueMapping = {
  1: 'Football Ground',
  2: 'Basketball Court',
  3: 'Top Court',
  4: 'Mondini Hall',
  5: 'Seminar Hall',
  // Add more mappings as needed
};

const statusMapping = {
  1: 'Active',
  0: 'Cancelled',
};


const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
  backgroundColor: '#f2f2f2',
  border: '2px solid black',
};

const thStyle = {
  backgroundColor: '#333',
  color: '#fff',
  fontWeight: 'bold',
  padding: '8px',
  textAlign: 'left',
};

const tdStyle = {
  padding: '8px 4px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
};

const headingStyle = {
  backgroundColor: '#fff',
  color: '#333',
  padding: '10px',
  textAlign: 'center',
};

class CustomerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBooking: null,
      bookings: [],
    };
  }

  componentDidMount() {
    this.fetchBookings();
  }
  fetchBookings = async () => {
    try {
      const user_id = getUserVariable(); // Get the user ID from your function
      console.log(user_id);
      const response = await fetch(`http://localhost:3000/getAllBooking/${user_id}`);
      if (!response.ok) {
        console.log('Failed to fetch data');
      }
      const data = await response.json();

      // Map venue_id to venue names
      const bookingsWithVenueNames = data.map((booking) => {
        return {
          ...booking,
          venue: venueMapping[booking.venue_id] || 'Unknown Venue',
          status: statusMapping[booking.status] || 'Unknown Status'
        };
      });

      this.setState({ bookings: bookingsWithVenueNames });
    } catch (error) {
      console.error(error);
    }
  };

  handleModalOpen = (booking) => {
    this.setState({ selectedBooking: booking });
  };

  handleModalClose = () => {
    this.setState({ selectedBooking: null });
  };

  handleCancelBooking = async () => {
  try {
    const { selectedBooking } = this.state;
    // Assuming you have an endpoint for canceling bookings, adjust the URL accordingly
    const response = await fetch(`http://localhost:3000/deleteBooking/${selectedBooking.id}`, {
      method: 'DELETE', // or 'DELETE' depending on your API
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to cancel booking');
    }

    // Refresh the booking data after cancellation
    this.fetchBookings();

    // Close the modal
    this.handleModalClose();
  } catch (error) {
    console.error(error);
  }
};

  render() {
    const { bookings } = this.state;

    return (
      <div>
        <h2 style={headingStyle}>Booking Information</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Booking ID</th>
              <th style={thStyle}>Venue</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Start Time</th>
              <th style={thStyle}>End Time</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((row) => (
              <tr key={row.id}>
              <td style={tdStyle}>
              <Link
                to="#"
                onClick={() => this.handleModalOpen(row)}
                style={{ textDecoration: 'none', color: 'blue', cursor: 'pointer' }}
              >
              {row.id}
              </Link>
              </td>
              <td style={tdStyle}>{row.venue}</td>
              <td style={tdStyle}>{row.date}</td>
              <td style={tdStyle}>{row.start_time}</td>
              <td style={tdStyle}>{row.end_time}</td>
              <td style={tdStyle}>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.selectedBooking && (
          <CancellationModal
            booking={this.state.selectedBooking}
            onCancel={this.handleCancelBooking}
            onClose={this.handleModalClose}
          />
        )}
      </div>
    );
  }
}

export default CustomerTable;
