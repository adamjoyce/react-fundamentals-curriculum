var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var Switch = ReactRouter.Switch;

var Header = require('./Header');
var Home = require('./Home');
var Forecast = require('./Forecast');
var Detail = require('./Detail');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route
            render={function(props) {
              return <Header {...props} />;
            }}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={function(props) {
                return <Home {...props} />;
              }}
            />
            <Route path="/forecast" component={Forecast} />
            <Route path="/detail/:city" component={Detail} />
            <Route render={function() {
              return (
                <div className="container-content">
                  <p>Page not found</p>
                </div>
              );
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
