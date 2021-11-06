import React from 'react';
import './App.css';

class App extends React.Component{

    constructor(props)
    {
      super(props);
      this.state={brand:"Ford",
                  color:"red",
                  year:1980};
    }
  render(){
    return <div>
                This is a my car :
                <br/>
                <p>
                    It is a {this.state.brand} which
                     is in {this.state.color} color 
                     from {this.state.year}.
                </p>
            </div>;
  }
}

export default App;
