import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CancellationModal({ booking, onCancel, onClose }) {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Booking Cancellation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Cancellation Details</h2>
        <p>Name: {booking.name}</p>
        <p>Venue: {booking.venue}</p>
        <p>Start Time: {booking.startTime}</p>
        <p>End Time: {booking.endTime}</p>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="danger" onClick={() => onCancel(booking.bookingId)}>
          Cancel Booking
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CancellationModal;
