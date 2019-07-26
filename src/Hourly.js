import React from 'react'

const Hourly = ({ data }) => {
  const hours = data.data.map(h => (
    <tr>
      <td>{h.time}</td>
      <td>{h.temperature}</td>
      <td>{h.icon}</td>
      <td>{h.precipProbability}</td>
      <td>{h.windSpeed}</td>
    </tr>
  ))
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temp</th>
            <th>Icon</th>
            <th>Precip.</th>
            <th>Wind</th>
          </tr>
        </thead>
        <tbody>{hours}</tbody>
      </table>
    </div>
  )
}
export default Hourly
