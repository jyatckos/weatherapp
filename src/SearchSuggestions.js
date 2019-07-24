import React from 'react'
import { Link } from 'react-router-dom'

const SearchSuggestions = props => {
  const options = props.suggestions.map(s => (
    <li key={s.id}>
      <Link
        to={{
          pathname: '/'
          // search: `?longitude=${s.center[0]}&latitude=${s.center[1]}`
        }}
        onClick={() => props.setLocation(s.center[1], s.center[0])}
      >
        {s.place_name}
      </Link>
    </li>
  ))
  return <ul>{options}</ul>
}
export default SearchSuggestions
