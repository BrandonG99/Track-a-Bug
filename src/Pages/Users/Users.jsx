import './Users.scss';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Datatable from '../../components/Datatable/Datatable';

const Users = () => {             
  return (      
    <div className="users">     
      <Sidebar />    
      <div className="users-container">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default Users;
