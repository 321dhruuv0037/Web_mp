import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function BookingConfirmation({ isOpen, onClose }) {
  const modalContainerStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999, // Adjust the z-index as needed
  };

  return (
    <div
      style={{ ...modalContainerStyles, display: isOpen ? 'flex' : 'none' }}
      onClick={onClose}
    >
      <Modal
        show={isOpen}
        onHide={onClose}
        centered // This prop centers the modal vertically and horizontally
      >
        <Modal.Header closeButton>
          <Modal.Title>Booking Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your booking has been confirmed. Email regarding this has been sent to your entered Email Address.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BookingConfirmation;
