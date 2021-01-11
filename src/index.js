import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// const App = () => {

  
//   return (
//     <div>Latitude: </div>
//   );
// }

//class-based components
//extends React.Component because you need many methods that comes with it. render() is one of them
class App extends React.Component {

  //a JS method not specific to React. constructor means the first method to be called any time an instance of this class is created. Not mandatory
  /*
  constructor(props) {
    super(props);  //constructor in App naturally overrides constructor in React.Component; but to make sure what's in the constuctor in React.Component can still be called, we need to super it.
    
    //this is the only time we do direct assignment to this.state
    this.state = {lat: null, errorMessage: ''}; //initialize state
  }
  */

  state = {lat:null, errorMessage: ''}; //this is the same as this.state ={ ... } inside constructor(props){...}

  //life cycle method: optionally define, will be called at specific timing during the life cycle!
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) =>  this.setState({lat: position.coords.latitude}),
        //call setState to update state OBJECT!!! do not do direct assignment!!!
      (err) => this.setState({errorMessage: err.message})

    )
    
  }
  componentDidUpdate(){
    console.log('My component did update!')
  }

  renderContent() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message="Please accept location request" />;
  }
  // ^when have multiple return condition, put them into a helper function. This way they can also share some common element

  //render method is required for every class. Must also DEFINE it. called everytime state changes
  //do not call API in render()
  render() {
    
    return (<div className = "border red">
      {this.renderContent()}
    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)