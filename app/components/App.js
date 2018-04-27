var React = require('react');

var Zipcode = require('./Zipcode');

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="container-content">
            <h1>Weather App</h1>
            <Zipcode />
          </div>
        </div>
        <div
          className="home-container"
          style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <div className="container-content">
            <h1>Enter a City and State</h1>
            <Zipcode />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
