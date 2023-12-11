// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderList} = props

  return (
    <div className="paiChart-bg1">
      <h1 className="paiChart-h1">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={300} className="responsive-div">
        <PieChart>
          <Pie
            data={vaccinationByGenderList}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="circle" align="center" margin={{top: 10}} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
