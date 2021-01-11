import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';

// const App = () => {

  
//   return (
//     <div>Latitude: </div>
//   );
// }

//class-based components
//extends React.Component because you need many methods that comes with it. render() is one of them
class App extends React.Component {

  //a JS method not specific to React. constructor means the first method to be called any time an instance of this class is created. Not mandatory
  constructor(props) {
    super(props);  //constructor in App naturally overrides constructor in React.Component; but to make sure what's in the constuctor in React.Component can still be called, we need to super it.
    
    //this is the only time we do direct assignment to this.state
    this.state = {lat: null, errorMessage: ''}; //initialize state

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //call setState to update state OBJECT!!! do not do direct assignment!!!
        this.setState({lat: position.coords.latitude});
      },
      (err) => {
        this.setState({errorMessage: err.message})
      }
    );
  }

  //render method is required for every class. Must also DEFINE it. called everytime state changes
  //do not call API in render()
  render() {
    
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat){
      return <div>Latitude: {this.state.lat}</div>
    }
    return <div>Loading!</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)