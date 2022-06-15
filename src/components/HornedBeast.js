import React from 'react';
import './HornedBeast.css';
import Figure from 'react-bootstrap/Figure';

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

  render(){
    return(
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        src={this.props.url} 
        alt={this.props.title} 
        title={this.props.title}
        onClick={this.handleVotes}
      />
      <Figure.Caption>
        <p>{this.props.description}</p>   
        <p>❤️{this.state.votes} Favorited!</p>
      </Figure.Caption>
    </Figure>
    )
  }
}

export default HornedBeast;