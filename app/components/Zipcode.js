var React = require('react');
var PropTypes = require('prop-types');

class Zipcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    };
  }

  handleSubmit() {

  }

  handleChange() {

  }

  render() {
    return (
      <div className="zipcode-container">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="St. George, Utah"
            type="text"
            autoComplete="off"
            value={this.state.zipcode}
            onChange={this.handleChange}
          />
          <button
            className="button"
            type="submit"
            disabled={!this.state.username}>
            Get Weather
          </button>
        </form>
      </div>
    );
  }
}

Zipcode.propTypes = {
}

module.exports = Zipcode;
