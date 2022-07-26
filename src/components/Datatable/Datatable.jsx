import './Datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../DatatableSource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const columns = [
  {   
    field: 'id', headerName: 'ID', width: 70 
  },
  {
    field: 'firstName', headerName: 'First Name', width: 130 
  },
  {
    field: 'lastName', headerName: 'Last Name', width: 130 
  },
  {
    field: 'age', headerName: 'Current Age', type: 'number', width: 120  
  },
  {
    field: 'fullName', 
    headerName: 'Full Name', 
    description: 'This column has a value getter and is not sortable.', 
    sortable: false, 
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { 
    id: 1, lastName: 'Gonzi', firstName:'Andy', age: 31
  },
  { 
    id: 2, lastName: 'Babini', firstName:'Michelle', age: 39
  },
  { 
    id: 3, lastName: 'Waltzing', firstName:'Nelly', age: 25
  },
  { 
    id: 4, lastName: 'Jenkinson', firstName:'Tom', age: 41
  },
  { 
    id: 5, lastName: 'Kittings', firstName:'Harry', age: 24
  },
]

const Datatable = () => {
  
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const actionColumn = [
    {
      field: "action", headerName: "Action", width: 200, renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="" style={{textDecoration:"none"}}>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div> 
            </Link>
          </div>
        )         
      }
    }
  ]
  return (
    <div className="datatable">
      <div className="datatable-title">
        Current Users
        {/* <Button size="small">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="data-grid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={12} 
        rowsPerPageOptions={[12]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
