import React from 'react'

const Minutely = props => {
  const options = props.data.data.map(s => (
    <li key={s.time}>
      {s.precipIntensity}
      {s.precipProbability}
    </li>
  ))
  return (
    <div>
      <div>{props.data.summary}</div>
      <ul>{options}</ul>
    </div>
  )
}
export default Minutely
