import React from 'react';
import '../HornedBeast.css';

class HornedBeast extends React.Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        <img 
          src={this.props.url} 
          alt={this.props.title} 
          title={this.props.title}
        />
        <br></br><p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;