import React from 'react'

const Daily = ({ data }) => {
  const options = data.data.map(s => <li key={s.time} />)
  return (
    <div>
      <div>{data.summary}</div>
      <ul>{options}</ul>
    </div>
  )
}
export default Daily
