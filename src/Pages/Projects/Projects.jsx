import React from 'react'
import '../Projects/Projects.scss'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';                                
 
const Projects = () => { 

  const rows = [
    {
      id: "BreezyWinds - Mobile App",
      projectDuration: "8 months",
      bug: "Prevent web app from crashing on load",
      status: "Pending",
      priority: "HIGH",
      description: "BreezyWinds improves the wellbeing of users through professionally guided meditations, available to listen to in 10+ languages",
      resolved: "No",
      assigned: "It Works on Local",
    },
    {
      id: "MyGoalTracker",
      projectDuration: "4 Months",
      status: "Open",
      priority: "MEDIUM",
      description: 'MyGoalTracker focuses on one thing: making the process of tracking goals as easy, efficient and stress free as possible',
      resolved: "No",
      assigned: "Infinite Loop",
    },
    {
      id: "BetterSelf",
      projectDuration: "6 Months",
      status: "Open",
      priority: "HIGH",
      description: "BetterSelf helps users to continuously grow through concise book summaries, inspirational quotes, daily challenges and more",
      progress: "No", 
      resolved: "No",
      assigned: "It's Not a Bug, It's a Feature",
    },
    {
      id: "CycleHire",
      projectDuration: "6 Months",
      bug: "Fix Sidebar",
      status: "Open",
      priority: "HIGH",
      description: "Easily reserve bicylces for hire with CycleHire - the go to bike hire app!",
      resolved: "No",
      assigned: "Prod is for Testing",
    },
    {
      id: "Pizza2U - Web App",
      projectDuration: "11 Months",
      bug: "Fix spelling error on blog post",
      status: "Closed",
      priority: "LOW",
      description: "Pizza Delivery web application that allows users to easily have pizza delivered to their door in just a few button clicks",
      resolved: "Yes",
      assigned: "Pizza || Coffee", 
    },         
  ]

  return (
    <div className="tickets">
      <Sidebar />
      <div className="tickets-container">
        <Navbar />
        <h1 className="tickets-title">Current Projects</h1>
        <div className="table-container">
            <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="table-cell">Project:</TableCell>
                <TableCell className="table-cell">Project Description:</TableCell>
                <TableCell className="table-cell">Project Duration:</TableCell>
                <TableCell className="table-cell">Priority Level:</TableCell>
                <TableCell className="table-cell">Assigned Team:</TableCell>
              </TableRow>
            </TableHead> 
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}>
                  <TableCell className="table-cell">
                    {row.id}
                  </TableCell>
                  <TableCell className="table-cell">{row.description}</TableCell>
                  <TableCell className="table-cell">{row.projectDuration}</TableCell>
                  <TableCell className="table-cell">
                    <p className={`priority ${row.priority}`}>{row.priority}</p>
                  </TableCell>
                  <TableCell className="table-cell">{row.assigned}</TableCell>
                </TableRow>
              ))} 
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default Projects;
