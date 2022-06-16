// import { render } from '@testing-library/react';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import SelectedBeast from './components/SelectedBeast';
import HornForm from './components/HornForm.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedBeast: '',
      selectedUrl: '',
      selectedDescription: '',
      showModal: false,
      userSearchInput: '',
      numberOfHorns: 0,
    };
  }

  handleSearchInput = (e) => {
    this.setState({
      userSearchInput: e.target.value
    })
  }

  handleSelectedHorns = (e) => {
    // console.log(e.target.value);
    this.setState({
      numberOfHorns: +e.target.value,
    });
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
    console.log(this.state.selectedBeast);
  }


  render(){
    console.log('state', this.state);
    return (
      <>
        <Header 
          searchValue={this.state.userSearchInput}
          handleSearchInput={this.handleSearchInput}
        />
        <HornForm 
          onChange={this.handleSelectedHorns} 
          onSearch={this.handleSearchInput} 
          searchValue={this.state.userSearchInput}
          />
        <Main 
          handleOnShowModal={this.handleOnShowModal}
          searchValue={this.state.userSearchInput}
          selectedHorn={this.state.numberOfHorns}
        />
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
