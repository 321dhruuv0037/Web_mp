import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CancellationModal from '../Components/CancellationModal';

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

class StudentTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBooking: null,
    };
  }

  handleModalOpen = (booking) => {
    this.setState({ selectedBooking: booking });
  };

  handleModalClose = () => {
    this.setState({ selectedBooking: null });
  };

  render() {
    const data = [
      { bookingId: 1, name: 'John Doe', venue: 'Football Ground', startTime: '3:00 PM', endTime: '5:00 PM', status: 'Booked', paymentInfo: 'Paid' },
      { bookingId: 2, name: 'Jane Smith', venue: 'Basketball Court', startTime: '2:30 PM', endTime: '4:30 PM', status: 'Booked', paymentInfo: 'Paid' },
    ];

    return (
      <div>
        <h2 style={headingStyle}>Booking Information</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Booking ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Venue</th>
              <th style={thStyle}>Start Time</th>
              <th style={thStyle}>End Time</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Payment Info</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.bookingId}>
                <td style={tdStyle}>
                  <Link
                    to="#"
                    onClick={() => this.handleModalOpen(row)}
                    style={{ textDecoration: 'none', color: 'blue', cursor: 'pointer' }}
                  >
                    {row.bookingId}
                  </Link>
                </td>
                <td style={tdStyle}>{row.name}</td>
                <td style={tdStyle}>{row.venue}</td>
                <td style={tdStyle}>{row.startTime}</td>
                <td style={tdStyle}>{row.endTime}</td>
                <td style={tdStyle}>{row.status}</td>
                <td style={tdStyle}>{row.paymentInfo}</td>
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

export default StudentTable;
