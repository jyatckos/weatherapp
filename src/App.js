import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Search from './Search'
import Summary from './Summary'
import weatherAPI from './utils/weatherAPI'
import geocodeAPI from './utils/geocodeAPI'
// import logo from './logo.svg';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: 'Los Angeles',
      latitude: null,
      longitude: null,
      currently: null,
      minutely: null,
      hourly: null,
      daily: null
    }

    this.setLocation = this.setLocation.bind(this)
  }

  async setLocation(latitude, longitude) {
    this.setState({ latitude: latitude, longitude: longitude })

    // if (this.state.longitude && this.state.latitude) {
    let weatherData = await weatherAPI.get(
      `${process.env.REACT_APP_WEATHER_API_KEY}/${latitude},${longitude}`,
      {}
    )
    this.setState({ currently: weatherData })
    // weatherData = weatherData.body
    // this.setState({
    //   currently: weatherData.currently,
    //   minutely: weatherData.minutely,
    //   hourly: weatherData.hourly,
    //   daily: weatherData.daily
    // })
    // }
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/summary'>Summary</Link>
              </li>
              <li>
                <Link to='/hourly'>Hourly</Link>
              </li>
              <li>
                <Link to='/daily'>Daily</Link>
              </li>
              <li>
                <Link to='/radar'>Radar</Link>
              </li>
              <li>
                <Link to='/alerts'>Alerts</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Search setLocation={this.setLocation} />
          </div>
          <Route path='/summary' component={Summary} />
          {/* <Route path='/' exact component={App} /> */}
          <Route path='/' component={App} />

          {/* <Route path='/hourly' component={Hourly} />
          <Route path='/daily' component={Daily} />
          <Route path='/radar' component={Radar} />
          <Route path='/alerts' component={Alerts} /> */}
        </div>
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
