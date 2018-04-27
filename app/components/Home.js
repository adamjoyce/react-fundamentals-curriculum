var React = require('react');

var Zipcode = require('./Zipcode');

class Home extends React.Component {
  render() {
    return(
      <div
        className="home-container"
        style={{backgroundImage: "url('app/images/pattern.svg')"}}>
        <div className="container-content">
          <h1>Enter a City and State</h1>
          <Zipcode
            onSubmitZipcode={function(city) {
              this.props.history.push({
                pathname: 'forecast',
                search: '?city=' + city
              });
            }.bind(this)}
          />
        </div>
      </div>
    );
  }
}

module.exports = Home;
