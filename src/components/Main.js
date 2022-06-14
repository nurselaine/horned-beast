import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component{
  render(){
    return(
      <>
        <HornedBeast title="Unicorn" url="./unicorn.jpg" description="A mystical horse that poops rainbows"/>
        <HornedBeast title="Horned Toad" url="./toad.webp" description="A prince trapped inside a frog's body that can be released after a kiss"/>
      </>
    )
  }
}

export default Main;