import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component{
  state={
    beers:[]
  }
constructor(){
  super();
  this.getBeers();
}

getBeers(){
  fetch('https://api.punkapi.com/v2/beers')
  .then(data =>data.json())
  .then(beers =>(this.setState({beers})))
  .catch(error=>(console.log(error)))
}



render(){
  let beersNames = this.state.beers.map(beer => <li> {beer.name} {beer.tagline}</li>);
  return <div>{beersNames}</div>
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
