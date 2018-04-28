var React = require('react');
var queryString = require('query-string');

var api = require('../utils/api');
var utils = require('../utils/helpers');
var getDate = utils.getDate;

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div className='dayContainer' onClick={props.onClick}>
      <img
        className='weather'
        src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather'
      />
      <h2 className='subheader'>{date}</h2>
    </div>
  )
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: [],
      loading: true
    }
    this.makeRequest = this.makeRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.makeRequest(this.getCityName());
  }

  componentWillReceiveProps(nextProps) {
    this.makeRequest(this.getCityName(nextProps));
  }

  getCityName(properties = null) {
    return (properties === null
              ? queryString.parse(this.props.location.search).city
              : queryString.parse(properties.location.search).city);
  }

  getMiddayWeather(weatherList) {
    var middayList = [];
    for (var i = 0; i < weatherList.length; i += 8) {
      middayList.push(weatherList[i]);
    }
    return middayList;
  }

  makeRequest(city) {
    this.setState(function() {
      return {
        loading: true
      };
    });

    api.getForecast(city).then(function(data) {
      data.list = this.getMiddayWeather(data.list);
      this.setState(function() {
        return {
          forecastData: data,
          loading: false
        };
      });
    }.bind(this));
  }

  handleClick(cityState) {
    var city = this.getCityName();
    this.props.history.push({
      pathname: '/detail/' + city,
      state: cityState
    });
  }

  render() {
    var city = this.getCityName().replace(/(\w)(\w*)/g, function(g0,g1,g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    });

    return (
      <div className="container-content">
        {this.state.loading === true
        ? <h1 className='forecast-header'> Loading </h1>
        : <div>
            <h1 className='forecast-header'>{city}</h1>
            <div className='forecast-container'>
              {this.state.forecastData.list.map(function (listItem) {
                return <DayItem
                          onClick={this.handleClick.bind(null, listItem)}
                          key={listItem.dt}
                          day={listItem}
                        />
              }.bind(this))}
            </div>
          </div>}
      </div>
    );
  }
}

module.exports = Forecast;
