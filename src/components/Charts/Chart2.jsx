import './Chart2.scss';
import { PieChart, Pie, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data1 = [
  { 
    id: 1,
    BugType1: "Urgent", 
    Total1: 31,
  },
]

const data2 = [
  {
    id: 2, 
    BugType2: "Feature",
    Total2: 217,
  }
]

const data3 = [
  {
    id: 3,
    BugType: "Update",
    Total3: 59,
  }
]

const Chart2 = () => { 
  return (
    <div className="chart1"> 
      <div className="title">Bug Frequency by Type:</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>             
      <PieChart width={730} height={250}>
        <Pie data={data2} dataKey="Total2" nameKey="name" cx="50%" cy="50%" innerRadius={10} outerRadius={80} fill="#8884d8" label />
        <Pie data={data3} dataKey="Total3" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d"  />
      </PieChart>
      </ResponsiveContainer>
    </div> 
  );
};

export default Chart2;