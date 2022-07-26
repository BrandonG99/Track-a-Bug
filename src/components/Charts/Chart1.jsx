import './Chart1.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Jan", Total: 123},
  { name: "Feb", Total: 217},
  { name: "Mar", Total: 109},
  { name: "Apr", Total: 191},
  { name: "May", Total: 133},
  { name: "June", Total: 229},
]

const Chart1 = ({ aspect, title }) => { 
  return (
    <div className="chart1">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs> 
        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#2879f0" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#2879f0" stopOpacity={0}/>
        </linearGradient>
      </defs>
          <XAxis dataKey="name" stroke="gray"/>
          <YAxis stroke="gray"/>
          <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div> 
  );
};

export default Chart1; 