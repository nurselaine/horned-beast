import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import "../Main.css";

class Main extends React.Component{
  render(){
    let beasts = [];
    data.forEach(beast => {
      beasts.push(
        <HornedBeast 
          title={beast.title}
          url={beast.image_url}
          description={beast.description}
        />
      )
    })
    return(
      <main>
        {beasts}
      </main>
    )
  }
}

export default Main;