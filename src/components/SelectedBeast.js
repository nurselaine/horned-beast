import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../App.css';


class SelectedBeast extends React.Component {
  render(){
    return (
      <Modal 
          show={this.props.showModal}
          onClick={this.props.onHide} 
          // onClick={this.props.handleOnShowModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img 
              src={this.props.url}
              alt={this.props.name}
              id='modal-img'
            />
            <p id='modal-description'>{this.props.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default SelectedBeast;