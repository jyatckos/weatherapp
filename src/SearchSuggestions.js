import React from 'react'
import { Link } from 'react-router-dom'

const SearchSuggestions = props => {
  const options = props.suggestions.map(s => (
    <li key={s.id}>
      <Link
        to={{
          pathname: '/'
        }}
        onClick={() =>
          props.setLocation(s.center[1], s.center[0], s.place_name)
        }
      >
        {s.place_name}
      </Link>
    </li>
  ))
  return <ul>{options}</ul>
}
export default SearchSuggestions
