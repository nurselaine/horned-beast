import React from 'react';
import './Header.css';
// import Slideshow from './Slideshow';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Header extends React.Component{
  render(){
    return(
      <header>
        <h1>ZOOPEDIA</h1>
        <h3>DISCOVER THE VARIED SPECIES AVAILABLE IN PLANET ZOO</h3>
        {/* <div>
          <Slideshow/>
        </div> */}
      </header>
    )
  }
}

export default Header;