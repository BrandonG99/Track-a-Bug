import './Single.scss';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Chart1 from '../../components/Charts/Chart1';
import List from '../../components/Table/Table';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="" className="itemImg" 
              />
              <div className="details">
                <h1 className="item-title">Keith Jannings</h1>
                <div className="item-detail">
                  <p className="item-key">Email:</p>
                  <p className="item-value">keithjannings@aaa.com</p>
                </div>
                <div className="item-detail">
                  <p className="item-key">Phone:</p>
                  <p className="item-value">+1 234 56789</p>
                </div>
                <div className="item-detail">
                  <p className="item-key">Country:</p>
                  <p className="item-value">United Kingdom</p>
                </div>
                <div className="item-detail">
                  <p className="item-key">Timezone:</p>
                  <p className="item-value">BST</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart1 aspect={2.5 / 1} title="User Performance (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Bugs Solved (Last 30 Days)</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single; 