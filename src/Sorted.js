import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import users from "./users.json";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'User name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'email',
    width: 150,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'phone',
    type: 'number',
    width: 110,
    editable: true,
  },
];
export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}