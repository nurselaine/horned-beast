import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';
import "./Main.css";

class Main extends React.Component{

  filterBeast = (filterTerm) => {
    if (filterTerm){
      const filteredResult = data.filter((beast) => beast.keyword === filterTerm)
      return filteredResult;
    } else {
      return data;
    }
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