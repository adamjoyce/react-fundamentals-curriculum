var React = require('react');
var PropTypes = require('prop-types');

var api = require('../utils/api');

class Zipcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    api.getCurrentWeather(this.state.zipcode).then(function(response) {
      console.log(response);
    });
  }

  handleChange(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        zipcode: value
      };
    });
  }

  render() {
    return (
      <div className="zipcode-container">
        <input
          placeholder="St. George, Utah"
          type="text"
          autoComplete="off"
          value={this.state.zipcode}
          onChange={this.handleChange}
        />
        <button
          className="button"
          type="button"
          onClick={this.handleSubmit}
          disabled={!this.state.zipcode}>
          Get Weather
        </button>
      </div>
    );
  }
}

Zipcode.propTypes = {
}

module.exports = Zipcode;
