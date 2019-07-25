import React from 'react'

const Daily = props => {
  const options = props.data.data.map(s => <li key={s.time} />)
  return (
    <div>
      <div>{props.data.summary}</div>
      <ul>{options}</ul>
    </div>
  )
}
export default Daily
