import './Widgets.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';

const Widgets = ({ type }) => {
  let data;                 

    switch(type) {
      case "user":
        data = {
          title:"Users",
          userLink: "See All Users",
          icon: (
            <PersonOutlinedIcon className="icon" style={{color:"white"}} />
          ),
          users: "196",
          usersPercentage: "27%",
        };
        break;
      case "bugs": 
        data = {
          title: "Tickets",
          bugLink: "View Recent Bugs",
          icon: (
            <BugReportOutlinedIcon className="icon" style={{color:"white"}} />
          ),
          bugs: "779",
          bugsPercentage: "9%",
        };
        break;
      case "projects": 
        data = {
          title: "Projects",
          projectLink: "View All Projects",
          icon: (
            <ListAltOutlinedIcon className="icon" style={{color:"white"}} />
          ),  
          projects: "11",
          projectPercentage: "34%",
        };
        break;
      case "stats":
        data = {
          title: "Statistics",
          statsLink: "View Statistics",
          icon: (
            <LeaderboardOutlinedIcon className="icon" style={{color:"white"}} />
          ),
          stats: "Developer Performance + more",
          statsPercentage: "11%",
        };
        break;     
      default:    
        break;
    };

  return (
    <div className="widget">
      <div className="left">
        <p className="title">
          {data.title}
        </p>
        
        <Link to="/users" style={{ textDecoration: "none" }}>
        <p className="counter userCounter">  
          {data.users}
        </p>
        <p className="link">{data.userLink}</p>
        </Link>

        <Link to="/tickets" style={{ textDecoration: "none"}}>
        <p className="counter bugCounter">  
          {data.bugs}
        </p>
        <p className="link">{data.bugLink}</p>
        </Link>

        <Link to="/current-projects" style={{ textDecoration: "none"}}>
        <p className="counter projectsCounter">  
          {data.projects}
        </p>
        <p className="link">{data.projectLink}</p>
        </Link>


        <Link to="/stats" style={{ textDecoration: "none" }}>
        <p className="counter statsCounter">  
          {data.stats}
        </p>
        <p className="link">{data.statsLink}</p>
        </Link>
        
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          <p className="usersPercentage">
            {data.usersPercentage}
          </p>
          <p className="bugPercentage">  
          {data.bugsPercentage}
          </p>
          <p className="projectPercentage">  
          {data.projectPercentage}
          </p>
          <p className="statsPercentage">  
          {data.statsPercentage}
          </p>
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
