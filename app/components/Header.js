var React = require('react');
var ReactRouter = require('react-router-dom');
var Link = ReactRouter.Link;

var Zipcode = require('./Zipcode');

function Header(props) {
  return(
    <div className="header">
      <div className="container-content">
        <h1><Link to="/">Weather App</Link></h1>
        <Zipcode onSubmitZipcode={function(city) {
          props.history.push({
            pathname: 'forecast',
            search: '?city=' + city
          });
        }} />
      </div>
    </div>
  );
}

module.exports = Header;
