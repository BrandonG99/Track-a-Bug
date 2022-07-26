import './BarChart.scss';
import { XAxis, YAxis, Bar, BarChart, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    id: 1,
    developer: "Andy",
    2021: 17,
    2022: 25,
  },
  {
    id: 2,
    developer: "Michelle",
    2021: 19,
    2022: 54,
  },
  {
    id: 3,
    developer: "Nelly",
    2021: 34,
    2022: 14,
  },
  {
    id: 4,
    developer: "Tom",
    2021: 51,
    2022: 29,
  },
  {
    id: 5,
    developer: "Harry",
    2021: 11,
    2022: 27,
  },
  {
    id: 6,
    developer: "Jasper",
    2021: 41,
    2022: 57,
  },
  {
    id: 7,
    developer: "Sarah",
    2021: 27,
    2022: 17,
  },
  {
    id: 8,
    developer: "John",
    2021: 8,
    2022: 15,
  },
  {
    id: 9,
    developer: "Maria",
    2021: 12,
    2022: 39,
  },
]
 
const Barchart = () => {
  return (
    <div className="BarChart">
      <div className="title">Developer Peformance Rating</div>
      <div class="subtitle">(Jan - Dec 2021 vs. Jan - Dec 2022)</div>
    <ResponsiveContainer width="100%" aspect={2 / 1}>
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" className="chart-grid"/>
      <XAxis dataKey="developer" />
      <YAxis dataKey="2021" />
      <Tooltip />
      <Legend />
      <Bar dataKey="2021" fill="rgba(40, 121, 240, 0.7)" />
      <Bar dataKey="2022" fill="rgba(0, 200, 113, 0.7)" />
    </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Barchart;
