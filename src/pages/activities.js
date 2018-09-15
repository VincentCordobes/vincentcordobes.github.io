import React from 'react'
import Layout from '../components/layout'
import { DateTime } from 'luxon'
import map from 'lodash/fp/map'
import groupBy from 'lodash/fp/groupBy'
import mapValues from 'lodash/fp/mapValues'
import sum from 'lodash/fp/sum'
import filter from 'lodash/fp/filter'
import size from 'lodash/fp/size'
import toPairs from 'lodash/fp/toPairs'
import identity from 'lodash/fp/identity'
import range from 'lodash/fp/range'
import sortBy from 'lodash/fp/sortBy'
import Chart from 'chart.js'
import { Line } from 'react-chartjs-2'

const FILE_URL =
  'https://cors-anywhere.herokuapp.com/www.dropbox.com/s/dpbdlobcf6y1snn/workout.gpi?raw=1'

function buildDataset(data) {
  const line = {
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    borderWidth: 1,
    label: 'activities count',
    data,
  }
  return { datasets: [line] }
}

function initialData() {
  const START_MONTH = 4 // April
  const currentMonth = DateTime.local().month
  return range(START_MONTH, currentMonth + 1).map(i => ({
    x: DateTime.fromObject({ month: i }).toJSDate(),
    y: null,
  }))
}

class Activities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: initialData(),
    }
  }

  componentDidMount() {
    fetch(FILE_URL, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
      },
    })
      .then(response => response.text())
      .then(text => text.split('\n'))
      .then(lines => lines.slice(2))
      .then(filter(identity))
      .then(map(DateTime.fromISO))
      .then(map(date => date.toFormat('yyyy MM')))
      .then(groupBy(identity))
      .then(mapValues(size))
      .then(toPairs)
      .then(dates =>
        this.setState({
          data: map(
            ([date, count]) => ({
              x: DateTime.fromFormat(date, 'yyyy MM').toJSDate(),
              y: count,
            }),
            dates
          ),
        })
      )
  }

  render() {
    const { data } = this.state
    return (
      <Layout>
        <Line
          data={buildDataset(data)}
          width={200}
          height={200}
          options={LINE_OPTIONS}
        />
      </Layout>
    )
  }
}

const LINE_OPTIONS = {
  scales: {
    xAxes: [{ type: 'time', display: true }],
    yAxes: [
      {
        display: true,
        ticks: { min: 0, max: 20 },
      },
    ],
  },
}

export default Activities
