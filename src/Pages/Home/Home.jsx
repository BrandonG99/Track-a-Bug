import './Home.scss';
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from'../../components/Navbar/Navbar';        
import Widget from '../../components/Widgets/Widgets';         
import Chart1 from '../../components/Charts/Chart1';
import Featured from '../../components/Featured/Featured';
import Table from '../../components/Table/Table';           
  
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="bugs" />      
          <Widget type="projects" />
          <Widget type="stats" />
        </div>
        <div className="charts">
          <Featured />
          <Chart1 title="Bugs Resolved (Last 6 Months)" aspect={2 / 1} />
        </div>    
        <div className="list-container">
          <div className="list-title">Current Bug Tickets</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;