var React = require('react');

var Zipcode = require('./Zipcode');

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="container-content">
          <div className="header">
            <h1>Main.js Header</h1>
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
