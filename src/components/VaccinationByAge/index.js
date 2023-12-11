import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeList} = props

  return (
    <div className="paiChart-bg">
      <h1 className="paiChart-h1">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={vaccinationByAgeList}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend iconType="circle" align="center" margin={{top: 10}} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
