import React from 'react';

const ReadOnlyRow = ({ user, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.fullName}</td>
      <td>{user.email}</td>
      <td>{user.currentAge}</td>
      <td>{user.username}</td>
      <td>{user.status}</td>
      <td>
        <button
          type="button"  
          onClick={(event) => handleEditClick(event, user)}
        > 
          Edit   
        </button>
        <button type="button" onClick={() => handleDeleteClick(user.id)}>
         Delete
        </button>
      </td> 
    </tr>
  )
}

export default ReadOnlyRow;