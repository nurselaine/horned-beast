import React from 'react';
import './HornedBeast.css';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      votes: 0,
    };
  };

  handleVotes = () =>{
    this.setState({
      votes: this.state.votes + 1
    })
  }

  handleHeaderClick = () => {
    this.props.handleOnShowModal(this.props.title, this.props.url, this.props.description);
  }

  render(){
    return(
      <div className='beast-card'>
        <Card style={{ width: '18rem' }}>
          <Card.Img 
            variant="top" 
            src={this.props.url} 
            alt={this.props.title} 
            title={this.props.title}
            // onClick={this.handleVotes}
            onClick={this.handleHeaderClick}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            <p>{this.props.description}</p>   
            </Card.Text>
            <Button onClick={this.handleVotes} id="fav-btn" variant="primary"><p>❤️{this.state.votes} Favorited!</p></Button>
          </Card.Body>
        </Card> 
      </div>
    )
  }
}

export default HornedBeast;