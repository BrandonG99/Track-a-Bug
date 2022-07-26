import './Tickets.scss';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
      

const Tickets = () => {

  const rows = [
    {
      id: 113928,
      status: "Closed",       
      priority: "HIGH",
      description: "Fix navbar for mobile",
      progress: "No", 
      resolved: "Yes",
      assigned: "Nelly",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80"
    },
    {
      id: 220939,
      status: "Open",
      priority: "MEDIUM",
      description: "Update incorrect footer links",
      resolved: "No",
      assigned: "Jasper",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60"
    },
    {
      id: 575832,
      bug: "Fix Sidebar",
      status: "Open",
      priority: "HIGH",
      description: "Add missing link to sidebar",
      resolved: "No",
      assigned: "Michelle",
      img: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60"
    },
    {
      id: 444728,
      bug: "Fix spelling error on blog post",
      status: "Closed",
      priority: "LOW",
      description: "Fix blog post image size",
      resolved: "Yes",
      assigned: "Sam",
      img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGUlMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60"
    },
    {
      id: 119547,
      bug: "Fix Navbar",
      status: "Pending",
      priority: "LOW",
      description: "Add correct hyperlink to button",
      resolved: "No",
      assigned: "Michelle",
      img: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60" 
    },
    {
      id: 318571,
      bug: "Fix Navbar Logo",
      status: "Closed",
      priority: "HIGH",
      description: "Replace low quality logo image with high quality logo image",
      resolved: "Yes",
      assigned: "Jasper",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60" 
    },
    {
      id: 776192,
      bug: "Improve Feature Component",
      status: "Pending",
      priority: "MEDIUM",
      description: "Make necessary changes to Feature component",
      resolved: "No",
      assigned: "Maria",
      img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60" 
    },
    {
      id: 445309,
      bug: "Fix Mobile Navbar",
      status: "Closed",
      priority: "LOW",
      description: "Add correct hyperlink to mobile nav",
      resolved: "Yes",
      assigned: "Harry",
      img: "https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60" 
    },
    {
      id: 601536,
      bug: "Text is going off screen on mobile devices",
      status: "Open",
      priority: "HIGH",
      description: "Re-style text elements so that they no longer go off screen on mobile devices",
      resolved: "No",
      assigned: "Nelly",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80" 
    },
    {
      id: 237569,
      bug: "Change hexcode for Users page",
      status: "Open",
      priority: "LOW",
      description: "Change background hexcode on Users page",
      resolved: "No",
      assigned: "Michelle",
      img: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60" 
    },
  ]

  return (
    <div className="tickets">
      <Sidebar />
      <div className="tickets-container">
        <Navbar />
        <h1 className="tickets-title">Most Recent Tickets</h1>
          <div className="table-container">
            <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="table-cell">Bug ID:</TableCell>
                <TableCell className="table-cell">Status:</TableCell>
                <TableCell className="table-cell">Bug Description:</TableCell>
                <TableCell className="table-cell">Priority Level:</TableCell>
                <TableCell className="table-cell">Resolved</TableCell>
                <TableCell className="table-cell">Assigned to:</TableCell>
              </TableRow>
            </TableHead> 
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}>
                  <TableCell className="table-cell">
                    {row.id}
                  </TableCell>
                  <TableCell className="table-cell">{row.status}</TableCell>
                  <TableCell className="table-cell">{row.description}</TableCell>
                  <TableCell className="table-cell">
                    <p className={`priority ${row.priority}`}>{row.priority}</p>
                  </TableCell>
                  <TableCell className="table-cell">{row.resolved}</TableCell>
                  <TableCell className="table-cell">
                    <div className="cell-wrapper">
                      <img src={row.img} className="image" />
                      {row.assigned}
                    </div>
                  </TableCell>
                </TableRow>
              ))} 
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
