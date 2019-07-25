import React from 'react'

const Hourly = props => {
  const options = props.data.data.map(s => <li key={s.time}>{s.summary}</li>)
  return (
    <div>
      <ul>{options}</ul>
    </div>
  )
}
export default Hourly
