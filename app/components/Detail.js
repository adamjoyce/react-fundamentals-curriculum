var React = require('react');

var DayItem = require('./DayItem');
var convertTemp = require('../utils/helpers').convertTemp;

class Detail extends React.Component {
  render() {
    var props = this.props.location.state;
    return (
      <div className="container-content">
        <DayItem day={props} />
        <div className='description-container'>
          <p>{props.weather[0].description}</p>
          <p>min temp: {Math.round(convertTemp(props.main.temp_min))} degrees</p>
          <p>max temp: {Math.round(convertTemp(props.main.temp_max))} degrees</p>
          <p>humidity: {props.main.humidity}</p>
        </div>
      </div>
    )
  }
}

module.exports = Detail;
