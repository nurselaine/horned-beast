// import { render } from '@testing-library/react';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Footer from './components/Footer';
import selectedBeast from './components/SelectedBeast';
import data from './data.json';
import './App.css';
import SelectedBeast from './components/SelectedBeast';

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
    console.log("onHide");
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
        <SelectedBeast
          name={this.state.selectedBeast}
          url={this.state.selectedUrl}
          description={this.state.selectedDescription}
          showModal={this.state.showModal}
          // handleOnShowModal={this.handleOnShowModal}
          onHide={this.handleOnHide}
        />
      </>
    );
  }
}

export default App;
