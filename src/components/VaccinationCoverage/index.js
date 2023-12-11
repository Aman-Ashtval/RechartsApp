import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {lastWeekVaccinations} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="barChart-bg">
      <h1 className="barChart-h1">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={lastWeekVaccinations} width={100} margin={{top: 32}}>
          <XAxis
            dataKey="vaccinationDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />

          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />

          <Bar
            dataKey="firstDose"
            name="Dose 2"
            fill="#5a8dee"
            barSize="20%"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="secondDose"
            name="Dose 2"
            fill="#f54394"
            barSize="20%"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
