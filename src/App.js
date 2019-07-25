import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Search from './Search'
import Currently from './Currently'
import Minutely from './Minutely'
import Hourly from './Hourly'
import Daily from './Daily'
// import weatherAPI from './utils/weatherAPI'
// import geocodeAPI from './utils/geocodeAPI'
// import logo from './logo.svg';
import './App.css'
import Axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: '',
      latitude: null,
      longitude: null,
      currently: null,
      minutely: null,
      hourly: null,
      daily: null
    }

    this.setLocation = this.setLocation.bind(this)
  }

  async setLocation(latitude, longitude, location) {
    this.setState({
      latitude: latitude,
      longitude: longitude,
      location: location
    })

    let weatherData = await Axios.get(
      `/forecast/${
        process.env.REACT_APP_WEATHER_API_KEY
      }/${latitude},${longitude}`
    )
    weatherData = weatherData.data
    this.setState({
      currently: weatherData.currently,
      minutely: weatherData.minutely,
      hourly: weatherData.hourly,
      daily: weatherData.daily
    })
  }

  render() {
    return (
      <Router>
        <li>
          <nav>
            <ul>
              <li>
                <Link to='/currently' data={this.props.currently}>
                  Currently
                </Link>
              </li>
              <li>
                <Link to='/minutely'>Minutely</Link>
              </li>
              <li>
                <Link to='/hourly' data={this.state.hourly}>
                  Hourly
                </Link>
              </li>
              <li>
                <Link to='/daily' data={this.state.daily}>
                  Daily
                </Link>
              </li>
              {/* <li>
                <Link to='/radar'>Radar</Link>
              </li>             */}
            </ul>
          </nav>
          <div>
            <Search setLocation={this.setLocation} />
          </div>
          <Route
            path='/currently'
            render={props => (
              <Currently {...props} data={this.state.currently} />
            )}
          />
          {/* <Route path='/' exact component={App} /> */}
          {/* <Route path='/' component={App} /> */}

          <Route
            path='/hourly'
            render={props => <Hourly {...props} data={this.state.hourly} />}
          />
          <Route
            path='/daily'
            render={props => <Daily {...props} data={this.state.daily} />}
          />
          <Route
            path='/minutely'
            render={props => <Minutely {...props} data={this.state.minutely} />}
          />

          {/* <Route path='/radar' component={Radar} /> */}
        </li>
      </Router>
    )
  }

  async componentDidMount() {
    // let geocodeData = await geocodeAPI.get(`/${this.state.location}.json`, {
    //   // params: {
    //   //   access_token:
    //   //     'pk.eyJ1IjoiamR5MjAxNiIsImEiOiJjanlibXJpazUwNmpkM2hwMXRoZGRvc3VyIn0.xxAd29lJTYUqZXTdMdL8MA'
    //   // }
    // })
  }
}

export default App
