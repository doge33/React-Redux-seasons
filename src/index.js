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

  //a JS method not specific to React. constructor means the first method to be called any time an instance of this class is created
  constructor(props) {
    super(props);  //constructor in App naturally overrides constructor in React.Component; but to make sure what's in the constuctor in React.Component can still be called, we need to super it.

    this.state = {lat: null}; //initialize state

  }

  //render method is required for every class. Must also DEFINE it.
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log("the error is", err)
    );
    return <div> Latitude:</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)