import React from 'react'
import geocodeAPI from './utils/geocodeAPI'
import SearchSuggestions from './SearchSuggestions'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ query: event.target.value }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 3 === 0) {
          this.getLocation()
        }
      } else {
        this.setState({ results: [] })
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  async getLocation() {
    let locations = await geocodeAPI.get(`/${this.state.query}.json`, {
      params: {
        access_token:
          'pk.eyJ1IjoiamR5MjAxNiIsImEiOiJjanlibXJpazUwNmpkM2hwMXRoZGRvc3VyIn0.xxAd29lJTYUqZXTdMdL8MA'
      }
    })

    this.setState({ results: locations.data.features })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.query}
            onChange={this.handleChange}
            placeholder='Search for a location...'
          />
        </form>
        <SearchSuggestions
          setLocation={this.props.setLocation}
          suggestions={this.state.results}
        />
      </div>
    )
  }
}

export default Search
