import './Stats.scss';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Chart1 from '../../components/Charts/Chart1';
import Chart2 from '../../components/Charts/Chart2';
import Featured from '../../components/Featured/Featured';
import BarChart from '../../components/BarChart/Barchart';

const Stats = () => {
  return (
    <div className="stats">
      <Sidebar />
      <div className="stats-container">
        <Navbar />
            <h1 className="bug-stats-title">Bug Statistics</h1>
          <div className="top-charts">
            <Featured className="featured-chart" />
            <Chart1 className="top-chart-1" title="Bugs Resolved (Last 6 Months)" aspect={2 / 1} />
          </div>
          <div className="bottom-charts">
            <BarChart className="bottom-chart-1" />
          </div>
        </div>
      </div>
  )
}

export default Stats;
