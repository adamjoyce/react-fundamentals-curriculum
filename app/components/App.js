var React = require('react');

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div
          className="home-container"
          style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <div className="header">
            <h1>Main.js Header</h1>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
