// import { render } from '@testing-library/react';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Footer from './components/Footer';
import data from './data.json';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedBeast: '',
      selectedUrl: '',
      selectedDescription: '',
      showModal: false,
    };

  }

  handleOnHide = () => {
    this.setState({
      showModal: false,
    })
  }

  handleOnShowModal = (name, url, description) => {
    this.setState({
      showModal: true,
      selectedBeast: name,
      selectedUrl: url,
      selectedDescription: description
    });
  }


  render(){
    return (
      <>
        <Header/>
        <Main handleOnShowModal={this.handleOnShowModal}/>
        <Footer/>
        <Modal 
          onHide={this.handleOnHide} 
          show={this.state.showModal}
          onClick={this.handleOnShowModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedBeast}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img 
              src={this.state.selectedUrl}
              alt={this.state.selectedBeast}
              id='modal-img'
            />
            <p id='modal-description'>{this.state.selectedDescription}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
