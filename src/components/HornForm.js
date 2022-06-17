import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

// this component create a dropdown form for users to filter beasts by # of horns
class HornForm extends React.Component{

  render(){  
    return(
      <Form>
        <Form.Group>
          <Form.Label>Sort by Horns</Form.Label>
          <Form.Select name="select" onChange={this.props.onChange}>
            <option value='all'>all</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>
          </Form.Select>
        </Form.Group>
        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={this.props.searchValue}
            onChange={this.props.onSearch}
          />
          {/* <Button variant="outline-success">Search</Button> */}
      </Form>
    );
  }
}

export default HornForm;