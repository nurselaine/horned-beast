import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';
import "./Main.css";

class Main extends React.Component{

  filterBeast = (filterTerm) => {
    let filteredBeast = data;
    if (filterTerm){ // only to handle search, TODO: fix errors 
      filteredBeast = filteredBeast.filter((beast) => beast.keyword === filterTerm);
    } 
  
    if(this.props.selectedHorn){
      let horns = this.props.selectedHorn;
      filteredBeast = filteredBeast.filter(beast => beast.horns === horns);
    }

    return filteredBeast;
  }

  render(){
    let beasts = [];
    let filteredData = this.filterBeast(this.props.searchValue);

    filteredData.forEach((beast, idx) => {
      beasts.push(
        <HornedBeast 
          title={beast.title}
          url={beast.image_url}
          description={beast.description}
          key={idx}
          handleOnShowModal={this.props.handleOnShowModal}
        />
      )
    });
    return(
      <main>
        {beasts}
      </main>
    )
  }
}

export default Main;