import React from 'react';
import './Header.css';
import Slideshow from './Slideshow';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Header extends React.Component{
  render(){
    return(
      <header>
        <h1>ZOOPEDIA</h1>
        <h3>DISCOVER THE VARIED SPECIES AVAILABLE IN PLANET ZOO</h3>
        <nav>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={this.props.searchValue}
          onChange={this.props.handleSearchInput}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
        </nav>
        <div>
          <Slideshow/>
        </div>
      </header>
    )
  }
}

export default Header;