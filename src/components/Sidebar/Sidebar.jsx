import './Sidebar.scss';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../Context/AuthContext';
import {Dashboard, Group, BugReportOutlined, Notifications, SettingsOutlined, LogoutOutlined, Leaderboard, AccountCircleOutlined, ManageAccounts, AccountTreeOutlined} from '@mui/icons-material'
import { DarkModeContext } from '../../Context/darkModeContext'; 
import { useContext } from 'react';      

const Sidebar = () => {            

  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">                  
        <Link to="/dashboard" style={{ textDecoration:"none" }}>
        <h1 className="logo">Track'a'Bug</h1>
        </Link>
      </div>

      <hr />    

      <div className="center">
        <ul>    
          <p className="title">Main</p>
          <Link to="/dashboard" style={{ textDecoration:"none" }}>
          <li> 
            <Dashboard className="icon" />
            <p>Dashboard</p>
          </li>
          </Link>
          <Link to="/users" style={{ textDecoration:"none" }}> 
          <li>
            <Group className="icon" />
            <p>Users</p>
          </li>
          </Link>
          <p className="title">Useful Links</p>
          <Link to="/tickets" style={{ textDecoration: "none" }}>
          <li>
            <BugReportOutlined className="icon" />
            <p>Tickets</p>
          </li>
          </Link>
          <Link to="/current-projects" style={{ textDecoration: "none" }}>
          <li>
            <AccountTreeOutlined className="icon" />
            <p>Projects</p>
          </li>
          </Link>
          <Link to="/stats" style={{ textDecoration:"none" }}>
          <li>
            <Leaderboard className="icon" />
            <p>Stats</p>
          </li>
          </Link>
          <Link to="/update-profile" style={{ textDecoration: "none" }}>
          <li>
            <ManageAccounts className="icon" />
            <p>Update Profile</p>
          </li>
          </Link>
          <p className="title">Exit</p>
          <Link to="/" style={{ textDecoration: "none" }}> 
          <li> 
            <LogoutOutlined className="icon" />
            <p>Log Out</p>
          </li> 
          </Link> 
        </ul> 
      </div>

      <div className="bottom">
        <div className="colourOption" onClick={() => dispatch({ type:"LIGHT" })}></div>
        <div className="colourOption" onClick={() => dispatch({ type:"DARK" })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar;