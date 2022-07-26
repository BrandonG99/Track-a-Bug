import React from 'react';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input 
          type="text" 
          required="required"
          placeholder="ID"
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input 
          type="text" 
          required="required"
          placeholder="Enter Name"
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input 
          type="text" 
          required="required"
          placeholder="Enter Email"
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input 
          type="text" 
          required="required"
          placeholder="Current Age"
          name="currentAge"
          value={editFormData.currentAge}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input 
          type="text" 
          required="required"
          placeholder="Username"
          name="username"
          value={editFormData.username}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input 
          type="text" 
          required="required"
          placeholder="Status"
          name="status"
          value={editFormData.status}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  )
}

export default EditableRow