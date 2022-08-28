import React from "react"
import Layout from "../components/layout"
import { DateTime } from "luxon"
import map from "lodash/fp/map"
import flatMap from "lodash/fp/flatMap"
import groupBy from "lodash/fp/groupBy"
import mapValues from "lodash/fp/mapValues"
import filter from "lodash/fp/filter"
import size from "lodash/fp/size"
import toPairs from "lodash/fp/toPairs"
import identity from "lodash/fp/identity"
import { Bar } from "react-chartjs-2"

const FILE_URL =
  "https://dl.dropboxusercontent.com/s/0ssjtyffxxm3k3u/habit_record.json?raw=1"

function buildDataset(data) {
  const line = {
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgb(54, 162, 235)",
    borderWidth: 1,
    label: "activities count",
    data,
  }
  return { datasets: [line] }
}

function initialData() {
  const startDate = DateTime.fromObject({ month: 4, year: 2018 })
  const currentDate = DateTime.local()

  let initialData = []
  for (
    let month = startDate;
    month < currentDate;
    month = month.plus({ month: 1 })
  ) {
    initialData.push({
      x: month.toJSDate(),
      y: 0,
    })
  }
  return initialData
}

class Activities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: initialData(),
    }
  }

  async componentDidMount() {
    fetch(FILE_URL, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => response.json())
      .then(
        filter((habbit) =>
          ["running", "workout", "Misc Activities"].includes(habbit.name)
        )
      )
      .then(flatMap((habbit) => Object.keys(habbit.stats)))
      .then((x) => console.log(x) || x)
      .then(map(DateTime.fromISO))
      .then((dates) => dates.sort())
      .then((x) => console.log(x) || x)
      .then(map((date) => date.toFormat("yyyy MM")))
      .then(groupBy(identity))
      .then(mapValues(size))
      .then(toPairs)
      .then((dates) =>
        this.setState({
          data: map(
            ([date, count]) => ({
              x: DateTime.fromFormat(date, "yyyy MM").toJSDate(),
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
        <div style={{ width: 500, height: 500 }}>
          <Bar
            data={buildDataset(data)}
            height="500"
            width="500"
            options={LINE_OPTIONS}
          />
        </div>
      </Layout>
    )
  }
}

const LINE_OPTIONS = {
  responsive: true,
  scales: {
    xAxes: [{ type: "time", display: true }],
    yAxes: [
      {
        display: true,
        ticks: { min: 0, max: 20 },
      },
    ],
  },
}

export default Activities
